export default function ForCitizensBangla() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "Noto Sans Bengali, sans-serif" }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006A4E] to-[#008C66] text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            প্রতিটি বাংলাদেশির জন্য এআই
          </h1>
          <p className="text-2xl sm:text-3xl opacity-90">দেশ গড়ি বুদ্ধিমত্তায়</p>
        </div>
      </section>

      {/* Audience Cards - Large, Visual, Icon-Prominent */}
      <section className="py-16 bg-[#F8FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Student */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2E8F0] hover:border-[#006A4E] hover:shadow-xl transition-all cursor-pointer">
              <div className="text-7xl mb-6">🎓</div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-3">শিক্ষার্থী</h2>
              <p className="text-xl text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই শিখুন, ভবিষ্যৎ গড়ুন
              </p>
              <button className="w-full bg-[#006A4E] text-white py-5 rounded-xl font-semibold text-xl hover:bg-[#005A40] transition-colors min-h-[56px]">
                আরও জানুন
              </button>
            </div>

            {/* Farmer */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2E8F0] hover:border-[#006A4E] hover:shadow-xl transition-all cursor-pointer">
              <div className="text-7xl mb-6">🌾</div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-3">কৃষক</h2>
              <p className="text-xl text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই দিয়ে ফসল ও আবহাওয়া তথ্য
              </p>
              <button className="w-full bg-[#006A4E] text-white py-5 rounded-xl font-semibold text-xl hover:bg-[#005A40] transition-colors min-h-[56px]">
                আরও জানুন
              </button>
            </div>

            {/* Small Business */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2E8F0] hover:border-[#006A4E] hover:shadow-xl transition-all cursor-pointer">
              <div className="text-7xl mb-6">🏪</div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-3">ক্ষুদ্র ব্যবসায়ী</h2>
              <p className="text-xl text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই দিয়ে ব্যবসা বাড়ান
              </p>
              <button className="w-full bg-[#006A4E] text-white py-5 rounded-xl font-semibold text-xl hover:bg-[#005A40] transition-colors min-h-[56px]">
                আরও জানুন
              </button>
            </div>

            {/* Freelancer */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2E8F0] hover:border-[#006A4E] hover:shadow-xl transition-all cursor-pointer">
              <div className="text-7xl mb-6">💻</div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-3">ফ্রিল্যান্সার</h2>
              <p className="text-xl text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই সরঞ্জাম ও দক্ষতা
              </p>
              <button className="w-full bg-[#006A4E] text-white py-5 rounded-xl font-semibold text-xl hover:bg-[#005A40] transition-colors min-h-[56px]">
                আরও জানুন
              </button>
            </div>

            {/* Healthcare Worker */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2E8F0] hover:border-[#006A4E] hover:shadow-xl transition-all col-span-full md:col-span-1">
              <div className="text-7xl mb-6">🏥</div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-3">স্বাস্থ্যকর্মী</h2>
              <p className="text-xl text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই স্বাস্থ্যসেবায়
              </p>
              <button className="w-full bg-[#006A4E] text-white py-5 rounded-xl font-semibold text-xl hover:bg-[#005A40] transition-colors min-h-[56px]">
                আরও জানুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section: "What is AI?" */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-3xl p-10 lg:p-16 border-2 border-[#006A4E]/20 text-center">
            <div className="text-7xl mb-6">🤖</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#006A4E] mb-6">
              এআই কী? — সবচেয়ে সহজ ভাষায়
            </h2>
            <p className="text-2xl text-[#64748B] mb-8" style={{ fontFamily: "Noto Serif Bengali" }}>
              কৃত্রিম বুদ্ধিমত্তা বুঝুন সহজ বাংলায়। কোনো জটিল শব্দ নেই।
            </p>
            <button className="bg-[#006A4E] text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-[#005A40] transition-colors">
              এখনই পড়ুন
            </button>
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-16 bg-[#F8FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-12 text-center">
            আপনার অধিকার
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                এআই আপনার তথ্য কীভাবে ব্যবহার করে
              </h3>
              <p className="text-lg text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                জানুন কীভাবে এআই আপনার ব্যক্তিগত তথ্য সংগ্রহ এবং ব্যবহার করে।
              </p>
              <a href="#" className="text-[#006A4E] font-semibold text-lg hover:underline inline-flex items-center gap-2">
                বিস্তারিত পড়ুন →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                আপনার গোপনীয়তা রক্ষা
              </h3>
              <p className="text-lg text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই ব্যবহার করার সময় কীভাবে নিজের গোপনীয়তা সুরক্ষিত রাখবেন।
              </p>
              <a href="#" className="text-[#006A4E] font-semibold text-lg hover:underline inline-flex items-center gap-2">
                বিস্তারিত পড়ুন →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <div className="text-5xl mb-6">📢</div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                অভিযোগ জানানোর উপায়
              </h3>
              <p className="text-lg text-[#64748B] mb-6" style={{ fontFamily: "Noto Serif Bengali" }}>
                যদি এআই আপনার অধিকার লঙ্ঘন করে, তাহলে কোথায় অভিযোগ করবেন।
              </p>
              <a href="#" className="text-[#006A4E] font-semibold text-lg hover:underline inline-flex items-center gap-2">
                বিস্তারিত পড়ুন →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Share CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#25D366]/10 to-white rounded-3xl p-12 border-2 border-[#25D366]/20">
            <div className="text-7xl mb-6">💬</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
              পরিবার ও বন্ধুদের সাথে শেয়ার করুন
            </h2>
            <p className="text-xl text-[#64748B] mb-8" style={{ fontFamily: "Noto Serif Bengali" }}>
              হোয়াটসঅ্যাপে শেয়ার করুন এবং সবাইকে এআই সম্পর্কে জানান
            </p>
            <button className="bg-[#25D366] text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-[#1DA851] transition-colors inline-flex items-center gap-3">
              <span>হোয়াটসঅ্যাপে শেয়ার করুন</span>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#006A4E] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">আরও জানতে চান?</h2>
          <p className="text-xl mb-8 opacity-90" style={{ fontFamily: "Noto Serif Bengali" }}>
            বাংলাদেশ এআই ব্রিফিং পান প্রতি সপ্তাহে — সহজ বাংলায়
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="আপনার ইমেইল"
              className="flex-1 px-6 py-4 rounded-lg text-[#1E293B] text-lg"
              style={{ fontFamily: "Noto Sans Bengali" }}
            />
            <button className="bg-white text-[#006A4E] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#F0FDF4] transition-colors whitespace-nowrap">
              সাবস্ক্রাইব করুন
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}