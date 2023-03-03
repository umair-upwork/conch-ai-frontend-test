import React, { useState } from 'react'
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./user-dropdown";
import mixpanel from "mixpanel-browser";
import { useEffect } from 'react';
import useScroll from "@/lib/hooks/use-scroll";


function Navbar({ scrolled, isLoggedIn, setShowSignInModal, session, setOpenPopover, openPopover, setShowAccountModal, showAccountModal, showSignInModal   }) {
  const [userData, setUserData] = useState({currPlan: "", email: ""});
  const scrolled1 = useScroll(50);

  useEffect(() => {
    setUserData({});
  }, []);

  return (
    <div
      className={`  w-full ${
        scrolled1
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >      
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link href="/" className="flex items-center font-display text-2xl">
          <Image
            src="/logo.png"
            alt="Conch logo"
            width="36"
            height="36"
            className="mr-2 rounded-sm"
          ></Image>
          <h1 className="font-display text-3xl font-bold">Conch</h1>
        </Link>
        <div className="bg-color-white flex h-16 items-center justify-between">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="https://chrome.google.com/webstore/detail/conch-ai/namibaeakmnknolcnomfdhklhkabkchl?hl=en&authuser=0"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-violet-500 hover:text-white"
              >
               Get Chrome Extension
              </a>
              {!isLoggedIn &&
              <button onClick={() => mixpanel.track("clicked nav pricing")}>
                <Link
                  href="/upgrade"
                  rel="noreferrer"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-violet-500 hover:text-white"
                >
                  Pricing
                </Link>
              </button>
            }
             <button onClick={() => mixpanel.track("clicked nav ai bypasser")}>
                <Link
                  href={`/${isLoggedIn ? "gpt-hero" : "sign-up"}`}
                  rel="noreferrer"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-violet-500 hover:text-white"
                >
                  AI Bypasser
                </Link>
              </button>
                {isLoggedIn ? (
                  <button
                  onClick={() => {
                    mixpanel.track("clicked nav my account");
                  setShowAccountModal(!showAccountModal);
                  }}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-violet-500 hover:text-white"
                  >
                    My Account
                  </button>
                ) : (
                  <button className="" onClick={(() => mixpanel.track("clicked nav sign up"))}>
                            <Link
                href="/sign-up"
                rel="noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-violet-500 hover:text-white"
                >
                    Sign Up
                  </Link>
                  </button>
                )}
                {isLoggedIn ? 
                (userData && userData.currPlan  && userData.currPlan.length > 0)   ?
                <div></div> :            
              (<button
                onClick={() => mixpanel.track("clicked nav upgrade to pro")}
              >
                <Link
                  href= "/upgrade"
                  className="mx-4 rounded-full border font-bold border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  🚀 Upgrade to Pro
                </Link>
              </button>)  :    <button
                onClick={() => mixpanel.track("clicked nav Start Writing For Free")}
              >
                <Link
                  href= "/sign-up"
                  className="mx-4 rounded-full border font-bold  bg-gradient-to-r from-violet-400 to-violet-700 p-1.5 px-4 text-sm text-white transition-all"
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Start Writing For Free
                </Link>
              </button>}
            </div>
          </div>
          

          <div className="-mr-2 flex md:hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar