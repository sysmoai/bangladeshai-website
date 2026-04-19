import { Link } from "react-router";

export default function BlogPostBangla() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "Noto Sans Bengali, sans-serif" }}>
      {/* Language Toggle Button */}
      <div className="bg-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog-post"
            className="text-[#006A4E] font-medium text-sm hover:underline inline-flex items-center gap-2"
            style={{ fontFamily: "Inter" }}
          >
            Read in English →
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-[#006A4E]/10 text-[#006A4E] font-semibold text-sm mb-6">
            বাংলাদেশে এআই
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
            বাংলাদেশের এআই প্রস্তুতি: বর্তমান অবস্থা এবং ভবিষ্যৎ
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-[#64748B] mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#006A4E] flex items-center justify-center text-white font-bold">
                ই
              </div>
              <div>
                <div className="font-semibold text-[#1E293B]">ইমন হোসেন</div>
                <div className="text-sm">এআই সিস্টেমস স্ট্র্যাটেজিস্ট</div>
              </div>
            </div>
            <span className="text-[#E2E8F0]">|</span>
            <span>২৭ মার্চ ২০২৬</span>
            <span className="text-[#E2E8F0]">|</span>
            <span>৮ মিনিট পড়া</span>
          </div>

          <div className="text-sm text-[#8A95A3] mb-8">
            সর্বশেষ আপডেট: ২৭ মার্চ ২০২৬
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-[#006A4E] to-[#008C66]"></div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none" style={{ fontFamily: "Noto Serif Bengali" }}>
          <p className="text-xl text-[#475569] leading-relaxed mb-6">
            অক্সফোর্ড ইনসাইটস ২০২৪-এর সরকারি এআই প্রস্তুতি সূচক অনুসারে, বাংলাদেশ ১৯৩টি দেশের মধ্যে ৮০তম স্থানে রয়েছে, যার স্কোর ১০০-এর মধ্যে ৪৭.১২। এই স্কোর আমাদের দেশের কৃত্রিম বুদ্ধিমত্তা (এআই) প্রস্তুতির বর্তমান অবস্থা তুলে ধরে।
          </p>

          <h2 className="text-3xl font-bold text-[#1E293B] mt-12 mb-6" style={{ fontFamily: "Noto Sans Bengali" }}>
            বাংলাদেশের এআই প্রস্তুতি: মূল পরিসংখ্যান
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            বাংলাদেশের এআই প্রস্তুতির স্কোর ৪৭.১২ মানে হলো আমরা মাঝামাঝি পর্যায়ে আছি। দক্ষিণ এশিয়ায় আমাদের অবস্থান ভারত, শ্রীলঙ্কা এবং পাকিস্তানের পরে। তবে আমাদের জনসংখ্যা এবং অর্থনৈতিক সম্ভাবনা বিবেচনা করলে, এই স্কোর পর্যাপ্ত নয়।
          </p>

          <div className="bg-[#F0FDF4] border-l-4 border-[#006A4E] p-8 my-8 rounded-r-xl">
            <p className="text-lg font-semibold text-[#006A4E] mb-2">মূল তথ্য</p>
            <p className="text-lg">
              বাংলাদেশে মোট ১৮টি গুরুতর এআই ঘাটতি চিহ্নিত করা হয়েছে এবং ৯২টি সরকারি প্রয়োজনীয়তা মূল্যায়ন করা হয়েছে।
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#1E293B] mt-12 mb-6" style={{ fontFamily: "Noto Sans Bengali" }}>
            প্রধান চ্যালেঞ্জসমূহ
          </h2>

          <h3 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4" style={{ fontFamily: "Noto Sans Bengali" }}>
            ১. প্রযুক্তিগত অবকাঠামোর ঘাটতি
          </h3>

          <p className="text-xl leading-relaxed mb-6">
            বাংলাদেশে এআই গবেষণা এবং উন্নয়নের জন্য প্রয়োজনীয় প্রযুক্তিগত অবকাঠামো এখনও পর্যাপ্ত নয়। উচ্চ-কর্মক্ষমতার কম্পিউটিং সুবিধা, ডেটা সেন্টার এবং ক্লাউড কম্পিউটিং সেবার ঘাটতি রয়েছে।
          </p>

          <h3 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4" style={{ fontFamily: "Noto Sans Bengali" }}>
            ২. দক্ষ জনবলের অভাব
          </h3>

          <p className="text-xl leading-relaxed mb-6">
            এআই, মেশিন লার্নিং এবং ডেটা সায়েন্সে দক্ষ পেশাদারদের সংখ্যা সীমিত। বিশ্ববিদ্যালয় পর্যায়ে এআই শিক্ষার পর্যাপ্ত সুযোগ নেই এবং শিল্প-একাডেমিয়া সহযোগিতা দুর্বল।
          </p>

          <h3 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4" style={{ fontFamily: "Noto Sans Bengali" }}>
            ৩. বাংলা ভাষার এআই মডেল
          </h3>

          <p className="text-xl leading-relaxed mb-6">
            বাংলা ভাষার জন্য উন্নত এআই মডেল তৈরিতে আমরা এখনও পিছিয়ে আছি। বাংলা ভাষার জন্য প্রশিক্ষণ ডেটা সীমিত এবং প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) গবেষণা পর্যাপ্ত নয়।
          </p>

          <h2 className="text-3xl font-bold text-[#1E293B] mt-12 mb-6" style={{ fontFamily: "Noto Sans Bengali" }}>
            এগিয়ে যাওয়ার পথ
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            বাংলাদেশের এআই প্রস্তুতি বাড়ানোর জন্য একটি সমন্বিত জাতীয় কৌশল প্রয়োজন। এতে অন্তর্ভুক্ত থাকতে হবে:
          </p>

          <ul className="space-y-4 mb-8 text-xl">
            <li className="flex items-start gap-3">
              <span className="text-[#006A4E] font-bold mt-1">•</span>
              <span>জাতীয় এআই নীতিমালা এবং নিয়ন্ত্রক কাঠামো তৈরি</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#006A4E] font-bold mt-1">•</span>
              <span>এআই গবেষণা এবং উন্নয়নে বিনিয়োগ বৃদ্ধি</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#006A4E] font-bold mt-1">•</span>
              <span>বাংলা ভাষার এআই মডেল উন্নয়নে বিশেষ গুরুত্ব</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#006A4E] font-bold mt-1">•</span>
              <span>এআই শিক্ষা এবং প্রশিক্ষণ কর্মসূচি সম্প্রসারণ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#006A4E] font-bold mt-1">•</span>
              <span>সরকারি সেবায় এআই প্রয়োগের পাইলট প্রকল্প শুরু</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#1E293B] mt-12 mb-6" style={{ fontFamily: "Noto Sans Bengali" }}>
            উপসংহার
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            বাংলাদেশের এআই যাত্রা এখনও প্রাথমিক পর্যায়ে, কিন্তু সম্ভাবনা অসীম। ১৭ কোটি মানুষের এই দেশে এআই প্রযুক্তি স্বাস্থ্য, শিক্ষা, কৃষি এবং সরকারি সেবায় বিপ্লব আনতে পারে। তবে এজন্য প্রয়োজন দৃঢ় রাজনৈতিক অঙ্গীকার, পর্যাপ্ত বিনিয়োগ এবং সুস্পষ্ট কর্মপরিকল্পনা।
          </p>
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
          <p className="text-lg font-semibold text-[#1E293B] mb-4" style={{ fontFamily: "Noto Sans Bengali" }}>শেয়ার করুন</p>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-[#006A4E] text-white rounded-lg font-medium hover:bg-[#005A40] transition-colors">
              ফেসবুক
            </button>
            <button className="px-6 py-3 bg-[#1DA1F2] text-white rounded-lg font-medium hover:bg-[#1A8CD8] transition-colors">
              টুইটার
            </button>
            <button className="px-6 py-3 bg-[#0077B5] text-white rounded-lg font-medium hover:bg-[#006399] transition-colors">
              লিংকডইন
            </button>
            <button className="px-6 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1DA851] transition-colors">
              হোয়াটসঅ্যাপ
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-[#F8FAFB] rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-[#006A4E] flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              ই
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">ইমন হোসেন</h3>
              <p className="text-lg font-medium text-[#006A4E] mb-4">
                এআই সিস্টেমস স্ট্র্যাটেজিস্ট | প্রতিষ্ঠাতা, বাংলাদেশ এআই
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed" style={{ fontFamily: "Noto Serif Bengali" }}>
                বাংলাদেশের জন্য সবচেয়ে ব্যাপক স্বাধীন এআই কৌশলগত কাঠামো তৈরি করছেন। প্রমাণ-প্রথম। বাংলা-প্রথম। কোনো হাইপ নেই।
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
