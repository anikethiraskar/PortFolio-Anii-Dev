// e:\PortFolio\Anii-Dev\src\components\Sections\ContactSection.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, Mail, MapPin, Phone, Loader2, CheckCircle, XCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import emailjs from '@emailjs/browser';
import { useTheme } from "../../context/ThemeContext";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceID = "service_o6smsts";
    const templateID = "template_4ccv9a8";
    const publicKey = "pmSni_daUMhrwm7Od";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info & Socials */}
            <motion.div variants={itemVariants} className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {CONTACT_INFO.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                          {info.label}
                        </p>
                        <p className="text-lg text-gray-900 dark:text-white font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Follow Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {SOCIAL_LINKS.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-gray-900 dark:text-white resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </motion.div>

        {/* Success/Error Popup */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
              onClick={() => setSubmitStatus(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-gray-100 dark:border-gray-800 relative"
              >
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-500' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-500'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : (
                    <XCircle className="w-8 h-8" />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {submitStatus === 'success' ? 'Message Sent!' : 'Sending Failed'}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {submitStatus === 'success' 
                    ? "Thanks for reaching out! I'll get back to you as soon as possible."
                    : "Something went wrong. Please try again later."}
                </p>

                <button
                  onClick={() => setSubmitStatus(null)}
                  className={`px-8 py-3 rounded-full font-semibold text-white transition-all transform hover:scale-105 ${
                    submitStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/25'
                      : 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25'
                  }`}
                >
                  {submitStatus === 'success' ? 'Awesome!' : 'Try Again'}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactSection;
