"use client";

import logo from "../assets/logo4.png";
import { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const dropDownVariants = {
  open: {
    height: "var(--height-open, 38dvh)",
    transition: { duration: 0.2 },
  },
  close: {
    height: "var(--height-closed, 0)",
    transition: { duration: 0.3 },
  },
};

const Navbar1 = (props) => {
  const { links, buttons } = {
    ...Navbar1Defaults,
    ...props,
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex w-full items-center  lg:min-h-18  text-white mt-5">
      <div className="size-full lg:flex lg:items-center lg:justify-between px-[5%]">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <img
            src={logo}
            alt="El Clasico Regio"
            width="135"
            className="p-2 mt-2 bg-[#ffffff94] rounded-xl"
          />
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              className="my-[3px] h-0.5 w-6  bg-[#b8954a]"
              animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.div
              className="my-[3px] h-0.5 w-6  bg-[#b8954a]"
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.div
              className="my-[3px] h-0.5 w-6  bg-[#b8954a]"
              animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          animate={mobileMenuOpen ? "open" : "close"}
          initial="close"
          variants={dropDownVariants}
          className="max-lg:overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {links.map((link, index) => (
            <div
              key={`${link.title}-${index}`}
              className="first:pt-4 lg:first:pt-0 "
            >
              {link.subLinks && link.subLinks.length > 0 ? (
                <NavItemDropdown subLinks={link.subLinks} title={link.title} />
              ) : (
                <a
                  href={link.url}
                  className="relative mx-auto block py-3 text-2xl text-center font-bold hover:mb-3 lg:text-2xl  ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 "
                >
                  {link.title}
                </a>
              )}
            </div>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row hover:scale-110 bg-[#b8954a] rounded-lg">
            {buttons.map((button, index) => (
              <Button
                key={`${button.title}-${index}`}
                className="w-full text-white text-xl"
                variant={button.variant}
                size={button.size}
              >
                <a href={`tel:+17753423035`}>{button.title}</a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

const Navbar1Defaults = {
  links: [
    { title: "Inicio", url: "#" },
    { title: "Nosotros", url: "#" },
    { title: "Nuestras Papas", url: "#" },
  ],
  buttons: [
    {
      title: "Llamanos: (774)-123-4567",
      variant: "secondary",
      size: "sm",
    },
  ],
};

export { Navbar1 };
