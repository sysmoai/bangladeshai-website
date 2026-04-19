import { Link, useLocation } from "react-router";

interface LanguageToggleProps {
  className?: string;
}

// Map of English to Bangla route equivalents
const routeMap: Record<string, string> = {
  "/homepage": "/bn",
  "/blog": "/bn/blog",
  "/blog-post": "/bn/blog-post",
  "/about": "/bn/about",
  "/": "/bn",
};

// Reverse map for Bangla to English
const reverseRouteMap: Record<string, string> = {
  "/bn": "/homepage",
  "/bn/blog": "/blog",
  "/bn/blog-post": "/blog-post",
  "/bn/about": "/about",
  "/bn/citizens": "/homepage", // No English equivalent, go to homepage
};

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const location = useLocation();
  const isBangla = location.pathname.startsWith("/bn");

  // Determine the target route when switching languages
  const getTargetRoute = () => {
    if (isBangla) {
      // Going from Bangla to English
      return reverseRouteMap[location.pathname] || "/";
    } else {
      // Going from English to Bangla
      return routeMap[location.pathname] || "/bn";
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Link
        to={isBangla ? getTargetRoute() : location.pathname}
        className={`text-sm font-medium transition-all ${
          !isBangla
            ? "text-[#006A4E] border-b-2 border-[#006A4E]"
            : "text-[#8A95A3] hover:text-[#4A5568]"
        }`}
      >
        EN
      </Link>
      <span className="text-[#8A95A3]">|</span>
      <Link
        to={isBangla ? location.pathname : getTargetRoute()}
        className={`text-sm font-medium transition-all ${
          isBangla
            ? "text-[#006A4E] border-b-2 border-[#006A4E]"
            : "text-[#8A95A3] hover:text-[#4A5568]"
        }`}
        style={isBangla ? { fontFamily: "Noto Sans Bengali" } : undefined}
      >
        বাং
      </Link>
    </div>
  );
}