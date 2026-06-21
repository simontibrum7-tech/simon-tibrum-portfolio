'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Send, Globe } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const combinedMessage = formData.subject
        ? `Subject: ${formData.subject}\n\n${formData.message}`
        : formData.message

      const { error } = await supabase
        .from('contact_messages')
        .insert([{ name: formData.name, email: formData.email, message: combinedMessage }])

      if (error) throw error

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#1a1a1a] relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-gold uppercase mb-2">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">Contact Me</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl bg-[#2b2b35]"
        >
          {/* Left Side: Form */}
          <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10 lg:p-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-6 sm:mb-8">Write us</h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors resize-none text-sm"
                  placeholder="Message"
                />
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto bg-[#f0a500] text-white font-medium py-3 px-8 rounded hover:bg-[#d69300] transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-sm tap-target"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-green-400 text-sm font-medium">✓ Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm font-medium">✗ Error sending message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="w-full lg:w-2/5 p-6 sm:p-8 md:p-10 lg:p-16 bg-[#23232b]">
            <h3 className="text-xl sm:text-2xl text-white font-medium mb-2 sm:mb-4">Contact information</h3>
            <p className="text-white/50 text-sm mb-8 sm:mb-12 leading-relaxed">
              We&apos;re open for any suggestion or just to have a chat
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <MapPin className="text-white/50 mt-0.5 shrink-0" size={18} />
                <div className="text-white/70 text-sm leading-relaxed">
                  <span className="text-white font-medium">Address: </span>Accra, Ghana
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                <Phone className="text-white/50 shrink-0" size={18} />
                <div className="text-white/70 text-sm">
                  <span className="text-white font-medium">Phone: </span>
                  <a href="tel:+233241530874" className="hover:text-gold transition-colors">0241530874</a>
                  {' / '}
                  <a href="tel:+233509270341" className="hover:text-gold transition-colors">0509270341</a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                <Send className="text-white/50 shrink-0" size={18} />
                <div className="text-white/70 text-sm">
                  <span className="text-white font-medium">Email: </span>
                  <a href="mailto:Simontibrum7@gmail.com" className="hover:text-gold transition-colors break-all">
                    Simontibrum7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                <Globe className="text-white/50 shrink-0" size={18} />
                <div className="text-white/70 text-sm">
                  <span className="text-white font-medium">Website: </span>simontibrum.com
                </div>
              </div>
            </div>

            {/* WhatsApp quick button */}
            <a
              href="https://wa.me/233241530874"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 sm:mt-12 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-5 rounded transition-colors text-sm w-full justify-center sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
