import React from 'react';
import Jenga from '../components/Oceanverse/Jenga/jenga';
import LightTheme from '../layouts/Light';
import Navbar from "../components/Navbar/navbar";

const JengaPage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
}, []);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Jenga />
    </LightTheme>
  );
};

export default JengaPage;
