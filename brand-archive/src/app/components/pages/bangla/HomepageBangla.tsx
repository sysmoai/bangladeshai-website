export default function HomepageBangla() {
  return (
    <div className="bg-white" style={{ fontFamily: "Noto Sans Bengali, sans-serif" }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006A4E] via-[#007B5A] to-[#008C66] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              দেশ গড়ি বুদ্ধিমত্তায়
            </h1>
            <p className="text-xl sm:text-2xl mb-6 opacity-50" style={{ fontFamily: "Plus Jakarta Sans" }}>
              Intelligence Builds Nations
            </p>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90" style={{ fontFamily: "Noto Serif Bengali" }}>
              বাংলাদেশের জন্য স্বাধীন এআই গবেষণা, প্রচার ও শিক্ষা। প্রমাণভিত্তিক বিশ্লেষণ — সরকারি প্রস্তুতি, অর্থনৈতিক প্রভাব, বাংলা এআই, এবং ১৭ কোটি মানুষের জন্য বাস্তবায়ন পরিকল্পনা।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-white text-[#006A4E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F0FDF4] transition-colors">
                গবেষণা পড়ুন
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                সংক্ষিপ্ত বিবরণ ডাউনলোড করুন (PDF)
              </button>
            </div>
            <p className="text-sm opacity-70">
              স্বাধীন · প্রমাণভিত্তিক · বাংলা-প্রথম · অরাজনৈতিক
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#F8FAFB] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006A4E] mb-2">৪৭.১২/১০০</div>
              <div className="text-sm text-[#64748B]">এআই প্রস্তুতি স্কোর<br />(অক্সফোর্ড ইনসাইটস ২০২৪)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006A4E] mb-2">র‍্যাঙ্ক ৮০</div>
              <div className="text-sm text-[#64748B]">১৯৩টি দেশের মধ্যে</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006A4E] mb-2">১৭ কোটি</div>
              <div className="text-sm text-[#64748B]">জনসংখ্যা</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006A4E] mb-2">১৮</div>
              <div className="text-sm text-[#64748B]">চিহ্নিত গুরুতর এআই ঘাটতি</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006A4E] mb-2">৯২</div>
              <div className="text-sm text-[#64748B]">মূল্যায়িত সরকারি<br />প্রয়োজনীয়তা</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Headline Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-12 text-center">
            বাংলাদেশ এআই কাঠামো
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white p-8 rounded-xl border border-[#006A4E]/10">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-[#006A4E] mb-3">স্মার্ট সরকার</h3>
              <p className="text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই-সহায়তায় সিদ্ধান্ত, ক্রয় শুদ্ধতা, নীতি সহকারী
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white p-8 rounded-xl border border-[#006A4E]/10">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-[#006A4E] mb-3">স্মার্ট অর্থনীতি</h3>
              <p className="text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                এসএমই সক্ষমতা, রপ্তানি বৃদ্ধি, রাজস্ব সুরক্ষা
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white p-8 rounded-xl border border-[#006A4E]/10">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#006A4E] mb-3">স্মার্ট নাগরিক</h3>
              <p className="text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                বাংলা-প্রথম সেবা, অন্তর্ভুক্তিমূলক প্রবেশ, স্বাস্থ্য ও শিক্ষা
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white p-8 rounded-xl border border-[#006A4E]/10">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold text-[#006A4E] mb-3">স্মার্ট বাংলা এআই</h3>
              <p className="text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                সার্বভৌম এনএলপি, ওসিআর/এসটিটি/টিটিএস, নাগরিক চ্যাটবট
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white p-8 rounded-xl border border-[#006A4E]/10">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-[#006A4E] mb-3">স্মার্ট আস্থা</h3>
              <p className="text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই নৈতিকতা, গোপনীয়তা, পক্ষপাত নিরীক্ষা, মানবিক তদারকি
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">সাম্প্রতিক গবেষণা</h2>
            <a href="#" className="text-[#006A4E] font-semibold hover:underline">
              সব গবেষণা দেখুন →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#006A4E] to-[#008C66]"></div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-[#006A4E] mb-2">বাংলাদেশে এআই</div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3">গবেষণা শিরোনাম {i}</h3>
                  <p className="text-[#64748B] mb-4" style={{ fontFamily: "Noto Serif Bengali" }}>
                    বাংলাদেশের এআই প্রস্তুতি এবং বাস্তবায়ন সম্পর্কিত গুরুত্বপূর্ণ গবেষণা।
                  </p>
                  <div className="text-sm text-[#8A95A3]">৫ মিনিট পড়া</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-12 text-center">
            এটি কাদের জন্য
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#F8FAFB] to-white p-6 rounded-xl border border-[#E2E8F0] text-center">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">সরকারি কর্মকর্তা</h3>
              <p className="text-sm text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                প্রমাণভিত্তিক ব্রিফিং ও নীতি সুপারিশ
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F8FAFB] to-white p-6 rounded-xl border border-[#E2E8F0] text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">ব্যবসায়ী ও এসএমই</h3>
              <p className="text-sm text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                এআই গ্রহণ নির্দেশিকা ও অর্থনৈতিক বিশ্লেষণ
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F8FAFB] to-white p-6 rounded-xl border border-[#E2E8F0] text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">নাগরিক</h3>
              <p className="text-sm text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                বাংলায় এআই ব্যাখ্যা, ব্যবহারিক সরঞ্জাম ও নির্দেশিকা
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F8FAFB] to-white p-6 rounded-xl border border-[#E2E8F0] text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">গবেষক</h3>
              <p className="text-sm text-[#64748B]" style={{ fontFamily: "Noto Serif Bengali" }}>
                তথ্য, মানদণ্ড ও পদ্ধতি
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#006A4E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">বাংলাদেশ এআই ব্রিফিং</h2>
          <p className="text-xl mb-8 opacity-90">দেশ গড়ি বুদ্ধিমত্তায়। প্রতি সপ্তাহে।</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="আপনার ইমেইল"
              className="flex-1 px-6 py-4 rounded-lg text-[#1E293B]"
              style={{ fontFamily: "Noto Sans Bengali" }}
            />
            <button className="bg-white text-[#006A4E] px-8 py-4 rounded-lg font-semibold hover:bg-[#F0FDF4] transition-colors whitespace-nowrap">
              সাবস্ক্রাইব করুন
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">গবেষণা</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">গবেষণা কেন্দ্র</a></li>
                <li><a href="#" className="hover:opacity-100">বৈশ্বিক মানদণ্ড</a></li>
                <li><a href="#" className="hover:opacity-100">ঘাটতি বিশ্লেষণ</a></li>
                <li><a href="#" className="hover:opacity-100">অর্থনৈতিক প্রভাব</a></li>
                <li><a href="#" className="hover:opacity-100">নীতি পর্যবেক্ষণ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">আমাদের সম্পর্কে</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">মিশন</a></li>
                <li><a href="#" className="hover:opacity-100">ইমন হোসেন</a></li>
                <li><a href="#" className="hover:opacity-100">পদ্ধতি</a></li>
                <li><a href="#" className="hover:opacity-100">প্রমাণ তালিকা</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">সম্পদ</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">ব্লগ</a></li>
                <li><a href="#" className="hover:opacity-100">প্রতিবেদন ডাউনলোড</a></li>
                <li><a href="#" className="hover:opacity-100">নিউজলেটার</a></li>
                <li><a href="#" className="hover:opacity-100">সরকারের জন্য</a></li>
                <li><a href="#" className="hover:opacity-100">নাগরিকদের জন্য</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">যোগাযোগ</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">যোগাযোগ</a></li>
                <li><a href="#" className="hover:opacity-100">লিংকডইন</a></li>
                <li><a href="#" className="hover:opacity-100">এক্স/টুইটার</a></li>
                <li><a href="#" className="hover:opacity-100">ফেসবুক</a></li>
                <li><a href="#" className="hover:opacity-100">গিটহাব</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm opacity-70 mb-4" style={{ fontFamily: "Noto Serif Bengali" }}>
              বাংলাদেশ এআই একটি স্বাধীন গবেষণা ও প্রচার প্ল্যাটফর্ম। কোনো সরকারি সংস্থা বা রাজনৈতিক দলের সাথে সম্পর্কিত নয়।
            </p>
            <p className="text-sm opacity-50">
              © ২০২৬ বাংলাদেশ এআই। দেশ গড়ি বুদ্ধিমত্তায়। প্রতিষ্ঠাতা: ইমন হোসেন।
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
