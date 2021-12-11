import React from "react";
import Button from "../UI/Button";
import NavItem from "./NavItem";

const navLinks = [
  {
    title: "",
    iconSrc: "twitter",
    link: "/",
    isShownOnMobile: false,
  },
  {
    title: "Home",
    iconSrc: "home",
    link: "",
    isShownOnMobile: true,
  },
  {
    title: "Explore",
    iconSrc: "search",
    link: "explore",
    isShownOnMobile: true,
  },
  {
    title: "Notification",
    iconSrc: "notification",
    link: "notification",
    isShownOnMobile: true,
  },
  {
    title: "Messages",
    iconSrc: "messages",
    link: "messages",
    isShownOnMobile: true,
  },
  {
    title: "Bookmark",
    iconSrc: "bookmark",
    link: "bookmark",
    isShownOnMobile: false,
  },
  {
    title: "Lists",
    iconSrc: "lists",
    link: "lists",
    isShownOnMobile: false,
  },
  {
    title: "Profile",
    iconSrc: "profile",
    link: "profile",
    isShownOnMobile: false,
  },
];
const Nav = () => {
  return (
    <nav className="fixed bg-black z-50 bottom-0 w-full flex justify-between  border-t-1 border-darkGray base:top-0 base:left-0 base:bottom-0 base:flex-col base:w-16 base:justify-start base:py-0 base:items-center base:border-r-1 base:border-t-0 base:pt-2 md:absolute md:top-0 md:left-0 md:bottom-0 md:h-screen">
      {navLinks &&
        navLinks.map((item, index) => <NavItem key={index} {...item} />)}
      <Button primary={true} classes="p-2 mt-2 hidden base:block rounded-full">
        <img className="w-7 base:w-6" src="/assets/add-tweet.svg" alt="" />
      </Button>
      <Button primary={false} classes="mt-auto mb-4 hidden base:block">
        <img className="w-10" src="/assets/avatar.png" alt="Twitter User" />
        {/* <span className="hidden xl:block">Tweet</span> */}
      </Button>
    </nav>
  );
};

export default Nav;
