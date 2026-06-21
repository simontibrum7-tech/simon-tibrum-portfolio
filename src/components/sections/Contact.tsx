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
      // Append subject to message if it exists so it doesn't break schema
      const combinedMessage = formData.subject ? `Subject: ${formData.subject}\n\n${formData.message}` : formData.message

      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { name: formData.name, email: formData.email, message: combinedMessage }
        ])

      if (error) throw error

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
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
    <section id="contact" className="py-24 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gold uppercase mb-2">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Contact Me</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl bg-[#2b2b35]"
        >
          {/* Left Side: Form */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16">
            <h3 className="text-3xl text-white font-medium mb-8">Write us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-[#f0a500] text-white font-medium py-3 px-8 rounded hover:bg-[#d69300] transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-green-500 text-sm mt-4 font-medium">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-4 font-medium">There was an error sending your message.</p>
              )}
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 bg-[#23232b]">
            <h3 className="text-2xl text-white font-medium mb-4">Contact information</h3>
            <p className="text-white/50 text-sm mb-12 leading-relaxed">
              We're open for any suggestion or just to have a chat
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <MapPin className="text-white/50 mt-1 shrink-0" size={20} />
                <div className="text-white/70 text-sm leading-relaxed">
                  <span className="text-white font-medium">Address:</span> Accra, Ghana
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <Phone className="text-white/50 shrink-0" size={20} />
                <div className="text-white/70 text-sm">
                  <span className="text-white font-medium">Phone:</span> 0241530874 / 0509270341
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Send className="text-white/50 shrink-0" size={20} />
                <div className="text-white/70 text-sm">
                  <span className="text-white font-medium">Email:</span> Simontibrum7@gmail.com
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Globe className="text-white/50 shrink-0" size={20} />
                <div className="text-white/70 text-sm">
                  <span className="text-white font-medium">Website:</span> simontibrum.com
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
