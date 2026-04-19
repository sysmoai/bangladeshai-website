import { Link } from "react-router";
import { Globe } from "lucide-react";

interface TranslationNotAvailableProps {
  currentLang: "en" | "bn";
}

export function TranslationNotAvailable({ currentLang }: TranslationNotAvailableProps) {
  const isBangla = currentLang === "bn";

  return (
    <div className="bg-[#E8F5E9] border-l-4 border-[#006A4E] py-4 px-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <Globe className="w-6 h-6 text-[#006A4E]" />
        </div>
        <div className="flex-1">
          {isBangla ? (
            <>
              <p 
                className="text-[#1A2332] mb-2" 
                style={{ 
                  fontFamily: "Noto Sans Bengali, sans-serif", 
                  fontSize: "18px",
                  lineHeight: 1.8 
                }}
              >
                এই নিবন্ধটি বর্তমানে শুধুমাত্র ইংরেজিতে পাওয়া যাচ্ছে।
              </p>
              <p 
                className="text-[#64748B] text-sm mb-3" 
                style={{ fontFamily: "Noto Sans Bengali, sans-serif" }}
              >
                বাংলা সংস্করণ শীঘ্রই আসছে।
              </p>
              <Link
                to="/bn"
                className="inline-flex items-center text-[#006A4E] hover:text-[#004D38] font-medium text-sm transition-colors"
                style={{ fontFamily: "Noto Sans Bengali, sans-serif" }}
              >
                বাংলা হোমপেজে যান →
              </Link>
            </>
          ) : (
            <>
              <p className="text-[#1A2332] mb-2" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                This article is currently available in Bangla only.
              </p>
              <p className="text-[#64748B] text-sm mb-3">
                English version coming soon.
              </p>
              <Link
                to="/"
                className="inline-flex items-center text-[#006A4E] hover:text-[#004D38] font-medium text-sm transition-colors"
              >
                Go to English homepage →
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
