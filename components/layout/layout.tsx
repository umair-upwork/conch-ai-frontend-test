import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import { useState } from "react";
import Image from "next/image";
import loaderIcon from "../../assets/loading.gif";
import { ChevronDown } from "lucide-react";
import Popover from "../shared/popover";
import mixpanel from "mixpanel-browser";

import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({
  isLoading,
  meta,
  children,
}: {
  isLoading?: boolean;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { showSignInModal, SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const [openPopover, setOpenPopover] = useState(false);
  const [pageLoader, setPageLoader] = useState(true);

  // check if logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(false);
    const timer = setTimeout(() => {
      setPageLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="layoutRoot">
      <Meta {...meta} />
      <div className="fixed w-full bg-gradient-to-br from-violet-100 via-white to-violet-300"> </div>
      <main className="contentContainer flex h-fit w-full flex-col items-center justify-center">
        <Navbar
          scrolled={scrolled}
          isLoggedIn={isLoggedIn}
          showSignInModal={showSignInModal}
          setShowSignInModal={setShowSignInModal}
          session={session}
          setOpenPopover={setOpenPopover}
          openPopover={openPopover}
          setShowAccountModal={() => {}}
          showAccountModal={false}
        />
        {pageLoader ? 
        <Image
          src={loaderIcon}
          alt="instagram"
          width="200"
          height="200"
          style={{margin: "auto", position: "absolute", top: "40%"}}
        ></Image>
        : 
          (<>
          {children}
          <Footer/>
          </>)
        }
      </main>
    </div>
  );
}
