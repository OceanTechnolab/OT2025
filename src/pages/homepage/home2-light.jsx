import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro2 from "../../components/Intro2/intro2";
import Services from "../../components/Services/services";
import Video2 from "../../components/Video2/video2";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Portfolio from "../../components/Portfolio/portfolio";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Team2 from "../../components/Team2/team2";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import IconCloud from "../../components/IconCloud/IconCloud";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [iconSlugs] = React.useState([
    // Frontend and JavaScript Frameworks
    "react",
    "javascript",
    "html5",
    "css3",
    "vue",
    "angular",
    "svelte",
    "nextjs",
    "nuxtjs",
    "typescript",
    "tailwindcss",
    "chakraui",
    "redux",
    "electron",
    "vite",
    "astro",
    "threejs",
    "trpc",
    // Backend Frameworks and Databases
    "nodejs",
    "django",
    "flask",
    "springboot",
    "prisma",
    "supabase",
    "mongodb",
    "postgresql",
    "firebase",
    "redis",
    "sqlserver",
    // DevOps Tools
    "docker",
    "kubernetes",
    "jenkins",
    "githubactions",
    "ansible",
    "terraform",
    "circleci",
    // Cloud Platforms
    "aws",
    "gcp",
    "azure",
    "vercel",
    "netlify",
    "digitalocean",
    "heroku",
    // CMS and E-Commerce
    "wordpress",
    "shopify",
    "drupal",
    "strapi",
    "magento",
    "bigcommerce",
    // No-Code and Project Management Tools
    "webflow",
    "bubble",
    "zapier",
    "airtable",
    "figma",
    "notion",
    "jira",
    "trello",
    "monday",
    "clickup",
    // E-Commerce
    "woocommerce",
    "shopware",
    "prestashop",
    // Mobile Development
    "reactnative",
    "flutter",
    "swift",
    "kotlin",
    "xamarin",
    "ionic",
    "capacitor",
    "maui",
    // .NET Technologies
    "dotnet",
    "aspnetcore",
    "csharp",
    // Miscellaneous
    "graphql",
    "rust"
  ]);  

  React.useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro2 />
      <IconCloud iconSlugs={iconSlugs} />
      <Services style="4item" />
      <Video2 />
      <Portfolio grid={3} filterPosition="center" />
      <FullTestimonials noPadding />
      <Team2 />
      <Blogs2 />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default Homepage2;