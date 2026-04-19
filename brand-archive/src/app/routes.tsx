import { createBrowserRouter } from "react-router";
import Root from "./components/layout/Root";
import BrandOverview from "./components/pages/BrandOverview";
import LogoSystem from "./components/pages/LogoSystem";
import ColorSystem from "./components/pages/ColorSystem";
import Typography from "./components/pages/Typography";
import Components from "./components/pages/Components";
import SocialAssets from "./components/pages/SocialAssets";
import Homepage from "./components/pages/Homepage";
import ResearchHub from "./components/pages/ResearchHub";
import BlogListing from "./components/pages/BlogListing";
import BlogPost from "./components/pages/BlogPost";
import AboutEmon from "./components/pages/AboutEmon";
import Contact from "./components/pages/Contact";
import DosDonts from "./components/pages/DosDonts";
import ExportPrep from "./components/pages/ExportPrep";
import HomepageBangla from "./components/pages/bangla/HomepageBangla";
import BlogListingBangla from "./components/pages/bangla/BlogListingBangla";
import BlogPostBangla from "./components/pages/bangla/BlogPostBangla";
import AboutBangla from "./components/pages/bangla/AboutBangla";
import ForCitizensBangla from "./components/pages/bangla/ForCitizensBangla";
import BilingualShowcase from "./components/pages/BilingualShowcase";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: BrandOverview },
      { path: "logos", Component: LogoSystem },
      { path: "colors", Component: ColorSystem },
      { path: "typography", Component: Typography },
      { path: "components", Component: Components },
      { path: "social", Component: SocialAssets },
      { path: "homepage", Component: Homepage },
      { path: "research", Component: ResearchHub },
      { path: "blog", Component: BlogListing },
      { path: "blog-post", Component: BlogPost },
      { path: "about", Component: AboutEmon },
      { path: "contact", Component: Contact },
      { path: "dos-donts", Component: DosDonts },
      { path: "export", Component: ExportPrep },
      { path: "bilingual", Component: BilingualShowcase },
      // Bangla routes
      { path: "bn", Component: HomepageBangla },
      { path: "bn/blog", Component: BlogListingBangla },
      { path: "bn/blog-post", Component: BlogPostBangla },
      { path: "bn/about", Component: AboutBangla },
      { path: "bn/citizens", Component: ForCitizensBangla },
    ],
  },
]);