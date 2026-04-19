import { Mail, Building2, Newspaper, FlaskConical } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <div className="text-center py-4 bg-[#006A4E]/5 border-b border-[#006A4E]/10">
        <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>PAGE LAYOUT MOCKUP — Contact</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
            Contact
          </h1>
          <p className="text-[#1A2332]/60 text-[15px] mt-2" style={{ lineHeight: 1.7, fontFamily: "'Source Serif 4', serif" }}>
            We welcome inquiries from researchers, policymakers, journalists, and institutions.
          </p>
        </div>

        {/* Three Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Building2, title: "Institutional", desc: "Government agencies, international organizations, and development partners.", email: "institutional@bangladeshai.org" },
            { icon: Newspaper, title: "Media", desc: "Journalists, broadcasters, and publications seeking data or commentary.", email: "media@bangladeshai.org" },
            { icon: FlaskConical, title: "Research", desc: "Academics, researchers, and institutions seeking collaboration.", email: "research@bangladeshai.org" },
          ].map((pathway) => (
            <div key={pathway.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <pathway.icon size={24} className="text-[#006A4E] mb-4" />
              <h3 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
                {pathway.title}
              </h3>
              <p className="text-[#1A2332]/55 text-[13px] mt-2" style={{ lineHeight: 1.5 }}>{pathway.desc}</p>
              <p className="text-[#006A4E] text-[12px] mt-3" style={{ fontWeight: 600 }}>{pathway.email}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-sm">
            <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '20px', color: '#1A2332' }}>
              Send a Message
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40 transition"
                />
              </div>
              <div>
                <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40 transition"
                />
              </div>
              <div>
                <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Inquiry Type</label>
                <select className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40 text-[#1A2332]/70 transition">
                  <option>Select type...</option>
                  <option>Institutional Inquiry</option>
                  <option>Media Request</option>
                  <option>Research Collaboration</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40 resize-none transition"
                />
              </div>

              {/* Error state example */}
              <div>
                <label className="block text-[12px] text-[#E8432A] mb-1.5" style={{ fontWeight: 600 }}>Organization (required)</label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border-2 border-[#E8432A]/40 text-[14px] outline-none"
                />
                <p className="text-[#E8432A] text-[11px] mt-1" style={{ fontWeight: 500 }}>This field is required</p>
              </div>

              <button className="w-full py-3 bg-[#006A4E] text-white rounded-lg hover:bg-[#005A41] transition" style={{ fontWeight: 600, fontSize: '15px' }}>
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#1A2332' }}>
                Professional Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#006A4E]" />
                  <span className="text-[#1A2332] text-[14px]">hello@bangladeshai.org</span>
                </div>
              </div>
            </div>

            {/* Response Commitment */}
            <div className="bg-[#E8F5E9] rounded-xl p-6 border-l-4 border-[#006A4E]">
              <h3 className="text-[#1A2332] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px' }}>
                Response Commitment
              </h3>
              <p className="text-[#1A2332]/60 text-[13px]" style={{ lineHeight: 1.6 }}>
                We respond to all professional inquiries within 48 hours. Media requests during active news cycles receive priority response within 24 hours.
              </p>
            </div>

            {/* Independence */}
            <div className="bg-[#F5F5F0] rounded-xl p-6">
              <p className="text-[#1A2332]/50 text-[12px]" style={{ lineHeight: 1.6 }}>
                Bangladesh AI is an independent research platform. Not affiliated with any government body. We do not accept funding that compromises editorial independence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
