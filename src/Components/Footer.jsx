import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+212 000 000 000" },
    { icon: "icon-email.svg", text: "example@gmail.com" },
  ]);

  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcon, setSocialIcon] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);

  return (
    <section
      className="bg-[#0c1524] pt-[320px] pb-[100px] text-white
    md:pt-[200px]  ">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            className="w-[175px] h-[66px] object-contain "
          />
        </a>
        <div
          className="mt-[30px] flex justify-between flex-wrap flex-col
        md:flex-row gap-[30px] ">
          <div className="flex items-start gap-[18px] w-[340px] max-w-full ">
            <img
              src="/src/assets/images/icon-location.svg"
              className="w-[18px] h-[18px] object-contain "
            />
            <p className="font-normal text-sm tracking-0.8px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, in
              maiores esse explicabo nulla dolor iste sint ratione earum totam?
              Doloremque iusto, error nobis omnis alias qui accusamus maiores
              est!
            </p>
          </div>
          <div className="">
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center pb-[15px] mb-[15px] last-of-type:mb-0 ">
                <img
                  src={`/src/assets/images/${item.icon}`}
                  className="w-[18px] h-[18px] object-contain mr-2 "
                />
                <p> {item.text} </p>
              </div>
            ))}
          </div>
          <ul
            className="grid grid-cols-1
          md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLocaleLowerCase}`}
                  className="hover:text-primaryColor transition-all duration-200 text-base ">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul
            className="flex gap-[15px] w-full justify-center 
          md:w-auto">
            {socialIcon.map((social) => (
              <li key={social}>
                <a href="" className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full ">
                    {social === "facebook" ? (
                      <FaFacebookF className="group-hover:text-primaryColor" />
                    ) : social === "twitter" ? (
                      <FaTwitter className="group-hover:text-primaryColor" />
                    ) : (
                      <FaInstagram className="group-hover:text-primaryColor" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
