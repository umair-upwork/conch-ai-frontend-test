import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { initializeApp } from "firebase/app";
import { Toaster } from "react-hot-toast";
import { RouteGuard } from "@/components/routing/route-guard";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";
import { useState } from "react";
import { LOCAL_STORAGE_KEY } from "utils/local-storage";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const [userData, setUserData] = useState<Record<string, any>>({});

  const router = useRouter();



  useEffect(() => {
    // initialize Mixpanel
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_API_KEY!, {
      debug: true,
      ignore_dnt: true,
    });

    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
  }, []);

  return (
    <SessionProvider session={session}>
      <Toaster />
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}
