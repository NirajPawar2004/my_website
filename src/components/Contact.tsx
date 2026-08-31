import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Copy, Check, Sparkles, MessageSquare, ShieldCheck, Clock, DollarSign, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { Toast } from './UI/Toast';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Data Analysis & EDA',
    budget: '',
    message: '',
    botcheck: '', // Honeypot anti-spam field for Web3Forms
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error' | 'info',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_CONFIG.email);
    setCopiedEmail(true);
    setToastConfig({
      show: true,
      message: 'Email address copied to clipboard!',
      type: 'success',
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam check
    if (formData.botcheck) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setToastConfig({
        show: true,
        message: 'Please fill in all required fields (Name, Email, Message).',
        type: 'error',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setToastConfig({
        show: true,
        message: 'Please enter a valid email address.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (
        CONTACT_CONFIG.web3formsAccessKey &&
        CONTACT_CONFIG.web3formsAccessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY'
      ) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: CONTACT_CONFIG.web3formsAccessKey,
            subject: `📊 [Portfolio Inquiry] ${formData.name} - ${formData.projectType}`,
            from_name: `${formData.name} (via Portfolio)`,
            replyto: formData.email,
            name: formData.name,
            email: formData.email,
            "Project Type": formData.projectType,
            "Custom Budget": formData.budget || "Not Specified / Open",
            "Subject": formData.subject || "Not Specified",
            "Project Message": formData.message,
          }),
        });

        const result = await response.json();
        if (result.success) {
          confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } });
          setIsSubmitted(true);
          setToastConfig({
            show: true,
            message: CONTACT_CONFIG.successMessage,
            type: 'success',
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            projectType: 'Data Analysis & EDA',
            budget: '',
            message: '',
            botcheck: '',
          });
        } else {
          throw new Error(result.message || 'Form submission failed');
        }
      } else {
        const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.projectType}`);
        const mailtoBody = encodeURIComponent(
          `Hi ${CONTACT_CONFIG.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget || 'Flexible'}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${CONTACT_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
        setToastConfig({
          show: true,
          message: 'Opening your default email app to send your message!',
          type: 'info',
        });
      }
    } catch (error) {
      setToastConfig({
        show: true,
        message: CONTACT_CONFIG.errorMessage,
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative">
      <Toast
        message={toastConfig.message}
        type={toastConfig.type}
        isVisible={toastConfig.show}
        onClose={() => setToastConfig((prev) => ({ ...prev, show: false }))}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Conversion Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-10 border border-brand-500/30 bg-gradient-to-br from-brand-600/10 via-accent-cyan/10 to-accent-indigo/10 text-center space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 uppercase tracking-wider inline-block">
            🟢 Open for Freelance Projects & Collaborations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white max-w-2xl mx-auto leading-tight">
            Have a Data Problem? <br />
            Let's Turn It Into a <span className="text-gradient">Solution.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Need a custom Power BI dashboard, churn prediction model, or automated Python scraper? Send me your project details for a free initial scope estimate.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 max-w-3xl mx-auto text-xs font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-white/60 dark:bg-slate-800/60">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>24h Response Time</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-white/60 dark:bg-slate-800/60">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Data Confidentiality</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-white/60 dark:bg-slate-800/60">
              <DollarSign className="w-4 h-4 text-amber-500" />
              <span>Clear Scope & Milestones</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-white/60 dark:bg-slate-800/60">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span>Post-Delivery Support</span>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="mb-6 space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-brand-500" />
                <span>Start a Project</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Fill out the form below. Messages are delivered directly to <span className="font-semibold text-brand-600 dark:text-brand-400">{CONTACT_CONFIG.email}</span> via Web3Forms.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you for reaching out. Niraj has received your message and will reply to your email within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot Spam Protection Field */}
                <input
                  type="checkbox"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Project / Service Type
                    </label>
                    <select
                      id="projectTypeSelect"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    >
                      <option value="Data Analysis & EDA">Data Analysis & EDA</option>
                      <option value="Business Intelligence & Power BI">Business Intelligence & Power BI</option>
                      <option value="Machine Learning & AI Modeling">Machine Learning & AI Modeling</option>
                      <option value="Data Automation & Python Scripts">Data Automation & Python Scripts</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  {/* Custom Budget Input Box */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Custom Budget (Optional)
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. $1,000, ₹50,000, or Flexible"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Need Power BI Dashboard for Sales Data"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Project Details & Requirements *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your dataset, business goal, timeline, and key deliverables needed..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-accent-indigo hover:from-brand-500 hover:to-accent-indigo/90 shadow-lg shadow-brand-500/25 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message via Web3Forms...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card with 1-Click Copy */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                      Gmail Address
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-none">
                      {CONTACT_CONFIG.email}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                  Location & Availability
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {CONTACT_CONFIG.location}
                </h4>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect & Social Channels
              </h4>
              <div className="space-y-2">
                {[
                  { name: 'Official Resume (PDF)', url: CONTACT_CONFIG.resumeUrl, handle: 'Download PDF Resume' },
                  { name: 'Kaggle Profile', url: CONTACT_CONFIG.kaggle, handle: '@nirajpawar2004' },
                  { name: 'Upwork Freelancer', url: CONTACT_CONFIG.upwork, handle: 'Niraj Pawar' },
                  { name: 'Gmail Address', url: `mailto:${CONTACT_CONFIG.email}`, handle: CONTACT_CONFIG.email },
                  { name: 'GitHub Profile', url: CONTACT_CONFIG.github, handle: '@NirajPawar2004' },
                  { name: 'LinkedIn Network', url: CONTACT_CONFIG.linkedin, handle: 'in/nirajpawar2004' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors group"
                  >
                    <div>
                      <span className="font-semibold">{item.name}</span>
                      <span className="block text-[10px] font-mono text-slate-400">{item.handle}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-brand-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
