import { useState } from "react";
import { Search, Clock, User } from "lucide-react";

const categories = ["All", "Policy Brief", "Data Analysis", "Research", "Opinion", "Bangla AI", "Education", "Governance", "Infrastructure"];

const posts = [
  { id: 1, cat: "Policy Brief", title: "18 Critical Gaps in Bangladesh's AI Infrastructure", excerpt: "A systematic analysis of where Bangladesh falls short in AI readiness, covering governance, compute, data, and human capital.", author: "Emon Hossain", date: "Mar 15, 2026", time: "8 min" },
  { id: 2, cat: "Data Analysis", title: "AI Readiness Score Breakdown: Where Bangladesh Stands", excerpt: "Detailed decomposition of the 47.12/100 score across five pillars with peer comparisons.", author: "Emon Hossain", date: "Mar 8, 2026", time: "12 min" },
  { id: 3, cat: "Research", title: "Bangla NLP: The Missing Foundation for National AI", excerpt: "Why Bangladesh cannot build meaningful AI without first solving the Bangla language technology gap.", author: "Emon Hossain", date: "Feb 28, 2026", time: "10 min" },
  { id: 4, cat: "Governance", title: "Why Bangladesh Needs a National AI Strategy Document", excerpt: "67 countries have published comprehensive AI policies. Bangladesh is not one of them.", author: "Emon Hossain", date: "Feb 20, 2026", time: "7 min" },
  { id: 5, cat: "Education", title: "AI Literacy for 170 Million: Where to Begin", excerpt: "A roadmap for building AI awareness from primary schools to policymaker briefings.", author: "Emon Hossain", date: "Feb 12, 2026", time: "9 min" },
  { id: 6, cat: "Infrastructure", title: "Compute Gap: Bangladesh's AI Hardware Reality", excerpt: "An assessment of GPU availability, cloud access, and research compute across institutions.", author: "Emon Hossain", date: "Feb 5, 2026", time: "6 min" },
];

export default function BlogListing() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.cat === active);

  return (
    <div>
      <div className="text-center py-4 bg-[#006A4E]/5 border-b border-[#006A4E]/10">
        <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>PAGE LAYOUT MOCKUP — Blog Listing</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
              Research & Insights
            </h1>
            <p className="text-[#1A2332]/60 text-[14px] mt-1">Evidence-based analysis on Bangladesh's AI landscape</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A2332]/30" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2.5 bg-white rounded-lg border border-gray-200 text-[13px] outline-none focus:border-[#006A4E]/40"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1.5 rounded-full text-[12px] transition ${
                active === cat
                  ? "bg-[#006A4E] text-white"
                  : "bg-white text-[#1A2332]/60 border border-gray-200 hover:border-[#006A4E]/30"
              }`}
              style={{ fontWeight: 500 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="h-40 bg-gradient-to-br from-[#006A4E]/8 to-[#0F4C81]/8" />
              <div className="p-5">
                <span className="text-[10px] px-2 py-0.5 bg-[#006A4E]/10 text-[#006A4E] rounded" style={{ fontWeight: 600 }}>{post.cat}</span>
                <h3 className="text-[#1A2332] mt-3 group-hover:text-[#006A4E] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px', lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p className="text-[#1A2332]/50 text-[13px] mt-2" style={{ lineHeight: 1.5, fontFamily: "'Source Serif 4', serif" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-4 text-[11px] text-[#1A2332]/40">
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`w-9 h-9 rounded-lg text-[13px] transition ${
                p === 1 ? "bg-[#006A4E] text-white" : "bg-white text-[#1A2332]/60 border border-gray-200 hover:border-[#006A4E]/30"
              }`}
              style={{ fontWeight: 600 }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
