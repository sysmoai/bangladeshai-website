export default function BlogListingBangla() {
  const categories = [
    "সকল",
    "বাংলাদেশে এআই",
    "এআই ব্যাখ্যা",
    "এআই সরঞ্জাম",
    "বৈশ্বিক শিক্ষা",
    "অর্থনৈতিক প্রভাব",
    "বাংলা এআই",
    "নৈতিকতা ও নিরাপত্তা",
    "মতামত"
  ];

  const blogPosts = [
    {
      id: 1,
      category: "বাংলাদেশে এআই",
      title: "বাংলাদেশের এআই প্রস্তুতি: বর্তমান অবস্থা এবং ভবিষ্যৎ",
      excerpt: "অক্সফোর্ড ইনসাইটস ২০২৪ অনুসারে বাংলাদেশের এআই প্রস্তুতি স্কোর ৪৭.১২/১০০। এই গভীর বিশ্লেষণে দেখুন কোথায় আমরা এগিয়ে এবং কোথায় পিছিয়ে।",
      readTime: "৮ মিনিট পড়া",
      date: "২৭ মার্চ ২০২৬"
    },
    {
      id: 2,
      category: "এআই ব্যাখ্যা",
      title: "এআই কী? — সবচেয়ে সহজ ভাষায় ব্যাখ্যা",
      excerpt: "কৃত্রিম বুদ্ধিমত্তা (এআই) কী এবং কীভাবে কাজ করে তা বুঝুন সরল বাংলায়। কোনো জটিল শব্দ নেই।",
      readTime: "৫ মিনিট পড়া",
      date: "২৫ মার্চ ২০২৬"
    },
    {
      id: 3,
      category: "বাংলা এআই",
      title: "বাংলা ভাষার জন্য এআই: চ্যালেঞ্জ এবং সম্ভাবনা",
      excerpt: "বাংলা ভাষার এআই মডেল তৈরিতে কী কী বাধা এবং কীভাবে আমরা একটি শক্তিশালী বাংলা এআই ইকোসিস্টেম গড়ে তুলতে পারি।",
      readTime: "১০ মিনিট পড়া",
      date: "২২ মার্চ ২০২৬"
    },
    {
      id: 4,
      category: "অর্থনৈতিক প্রভাব",
      title: "এআই এবং বাংলাদেশের অর্থনীতি: সুযোগ ও ঝুঁকি",
      excerpt: "কীভাবে এআই বাংলাদেশের অর্থনীতিকে রূপান্তরিত করতে পারে এবং এসএমই সেক্টরে নতুন সুযোগ সৃষ্টি করতে পারে।",
      readTime: "১২ মিনিট পড়া",
      date: "২০ মার্চ ২০২৬"
    },
    {
      id: 5,
      category: "নৈতিকতা ও নিরাপত্তা",
      title: "এআই নৈতিকতা: বাংলাদেশের প্রেক্ষাপটে",
      excerpt: "এআই ব্যবহারের নৈতিক দিক এবং কীভাবে বাংলাদেশ একটি দায়িত্বশীল এআই কাঠামো তৈরি করতে পারে।",
      readTime: "৭ মিনিট পড়া",
      date: "১৮ মার্চ ২০২৬"
    },
    {
      id: 6,
      category: "এআই সরঞ্জাম",
      title: "ব্যবসায়ীদের জন্য শীর্ষ ১০টি এআই সরঞ্জাম",
      excerpt: "ছোট ও মাঝারি ব্যবসায়ীদের জন্য সবচেয়ে উপযোগী এআই টুলস যা আপনার কাজকে সহজ এবং কার্যকর করবে।",
      readTime: "৬ মিনিট পড়া",
      date: "১৫ মার্চ ২০২৬"
    }
  ];

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "Noto Sans Bengali, sans-serif" }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006A4E] to-[#008C66] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">ব্লগ</h1>
          <p className="text-xl opacity-90" style={{ fontFamily: "Noto Serif Bengali" }}>
            এআই, প্রযুক্তি এবং বাংলাদেশের ভবিষ্যৎ নিয়ে গভীর বিশ্লেষণ
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-[#F8FAFB] border-b border-[#E2E8F0] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <input
              type="text"
              placeholder="অনুসন্ধান করুন..."
              className="w-full max-w-md px-6 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#006A4E]"
              style={{ fontFamily: "Noto Sans Bengali" }}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "সকল"
                    ? "bg-[#006A4E] text-white"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#006A4E] hover:text-[#006A4E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="h-56 bg-gradient-to-br from-[#006A4E] to-[#008C66] group-hover:scale-105 transition-transform"></div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-[#006A4E] mb-3 uppercase tracking-wide">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold text-[#1E293B] mb-3 leading-tight group-hover:text-[#006A4E] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#64748B] mb-4 leading-relaxed" style={{ fontFamily: "Noto Serif Bengali" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#8A95A3]">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-16">
            <button className="px-6 py-3 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:border-[#006A4E] hover:text-[#006A4E] transition-colors">
              ← আগের পাতা
            </button>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-lg bg-[#006A4E] text-white font-semibold">১</button>
              <button className="w-12 h-12 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:border-[#006A4E] hover:text-[#006A4E] transition-colors">২</button>
              <button className="w-12 h-12 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:border-[#006A4E] hover:text-[#006A4E] transition-colors">৩</button>
            </div>
            <button className="px-6 py-3 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:border-[#006A4E] hover:text-[#006A4E] transition-colors">
              পরের পাতা →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#006A4E] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">নতুন পোস্ট মিস করবেন না</h2>
          <p className="text-xl mb-8 opacity-90" style={{ fontFamily: "Noto Serif Bengali" }}>
            প্রতি সপ্তাহে আপনার ইনবক্সে নতুন নিবন্ধ পান
          </p>
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
    </div>
  );
}
