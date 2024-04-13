import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  // give a reference to the header element
  const headerRef = useRef();

  // change the style of the header element whene we scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);

  // get al the pages of website
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);

  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200">
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLocaleLowerCase()}`}
                  className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
