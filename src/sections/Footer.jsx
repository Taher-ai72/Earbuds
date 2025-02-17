import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "/", icon: <FaDiscord /> },
  { href: "/", icon: <FaTwitter /> },
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5BAFE3] py-4 text-black h-30  overflow-hidden ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row ">
        <p className="text-center text-3xl font-light md:text-left mt-10">
          © 2024. All rights reserved
        </p>

        <div className="  flex justify-center gap-4  md:justify-start ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white w-10 "
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center  font-light hover:underline md:text-right text-3xl"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer