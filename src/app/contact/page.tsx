'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const getWaUrl = () => {
    const text = `🥊 *DIRECT INQUIRY - CUSAT BOXING CLUB* 🥊\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📌 *Subject:* ${formData.subject}\n` +
      `💬 *Message:* ${formData.message}\n\n` +
      `Hi Coach, I sent an inquiry via the website contact desk.`;

    return `https://wa.me/919544457903?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    const waUrl = getWaUrl();
    try {
      const win = window.open(waUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = waUrl;
      }
    } catch (err) {
      window.location.href = waUrl;
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>SOUTH KALAMASSERY • KOCHI, KERALA</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          GET IN TOUCH WITH <span className="gold-gradient-text">CUSAT BOXING</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Have questions about varsity trials, external sparring, or facility visits? Reach out directly to our coaching desk.
        </p>
      </section>

      {/* Grid Layout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Direct Contact Info & Map Card */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl glass-panel-gold space-y-6">
              <h2 className="font-heading text-3xl text-white">HEADQUARTERS & ARENA</h2>
              
              <ul className="space-y-4 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-medium block">Training Location:</strong>
                    <span>CUSAT Sports Complex Arena, South Kalamassery, Kochi, Kerala 682022</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C89B3C] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-medium block">Gym Timings:</strong>
                    <span>Mon - Fri Morning: 06:30 AM - 08:30 AM | Evening Batches: 05:30 PM - 07:00 PM & 06:30 PM - 08:30 PM<br />Sat Morning: 06:30 AM - 08:30 AM (Long Running) | Sat Evening Batches: 05:30 PM - 07:00 PM & 06:30 PM - 08:30 PM (Weight Training)<br /><span className="text-red-400 font-semibold">Sunday: Completely OFF (Rest Day)</span></span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  <div>
                    <strong className="text-white font-medium block">Phone Call / Mobile:</strong>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#C89B3C] transition-colors">{SITE_CONFIG.phone}</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white font-medium block">WhatsApp Desk:</strong>
                    <a href={SITE_CONFIG.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">Chat on WhatsApp ({SITE_CONFIG.phone})</a>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs uppercase font-semibold text-neutral-400 mb-3">OFFICIAL SOCIAL CHANNELS</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black border border-white/10 hover:border-[#C89B3C] text-neutral-300 hover:text-[#C89B3C] transition-all text-xs font-semibold"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                    <span>Instagram (@cusat_boxing)</span>
                  </a>
                  <a
                    href={SITE_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black border border-white/10 hover:border-[#C89B3C] text-neutral-300 hover:text-[#C89B3C] transition-all text-xs font-semibold"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-500" />
                    <span>Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Visual Map Representation Card */}
            <div className="rounded-2xl overflow-hidden border border-[#C89B3C]/40 glass-panel space-y-3 p-4 bg-[#121212]">
              <div className="flex items-center justify-between px-2 pt-1">
                <div>
                  <p className="font-heading text-xl text-white">CUSAT BOXING ARENA LOCATION</p>
                  <p className="text-xs text-neutral-400">South Kalamassery, Kochi, Kerala</p>
                </div>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#C89B3C] hover:underline flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Interactive Map View */}
              <div className="relative h-72 w-full rounded-xl overflow-hidden border border-white/10">
                <iframe
                  title="CUSAT Boxing Club Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7972049187313!2d76.32420847587834!3d10.033583972445839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c354784cf05%3A0xbbfd11894d01b17b!2sCochin%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) invert(0.9) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-3xl text-white mb-2">SEND US A MESSAGE</h2>
              <p className="text-xs text-neutral-400 mb-6">Messages redirect directly to our coaching desk on WhatsApp.</p>

              {sent ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#C89B3C] mx-auto animate-bounce" />
                  <h3 className="font-heading text-3xl text-white">MESSAGE SENT!</h3>
                  <p className="text-neutral-300 text-sm">
                    Thank you <span className="text-[#C89B3C] font-bold">{formData.name}</span>. Your message has been formatted and redirected to our WhatsApp desk.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWaUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-heading text-lg font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>OPEN IN WHATSAPP NOW</span>
                    </a>
                    <button
                      onClick={() => setSent(false)}
                      className="px-6 py-3 rounded-lg bg-black border border-[#C89B3C] text-[#C89B3C] font-heading text-lg font-bold"
                    >
                      SEND ANOTHER
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase text-neutral-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Nair"
                      className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-neutral-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-neutral-300 mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Sparring Session Inquiry / Trial Information"
                      className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-neutral-300 mb-1">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your question or message here..."
                      className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl font-bold shadow-lg shadow-[#C89B3C]/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE VIA WHATSAPP</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
