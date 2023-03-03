import Card from "@/components/home/card";
import Layout from "@/components/layout/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import FaqRow from "@/components/home/FAQ/faqRow";
import { useState } from "react";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export default function Home() {
  let institutions = [
    "harvard.png",
    "waterloo.png",
    "penn.png",
    "ucla.png",
    "nyu.png",
    "nova.jpg",
  ];

  // useEffect(() => {
  //   mixpanel.track("Screen Load Home Page");
  // }, []);

  const [activeFAQ, setActiveFAQ] = useState(-1);
  return (
    <Layout>
      <div className="relative flex h-fit w-full flex-col items-center justify-center py-12 md:mt-8 md:py-8">
        <motion.div
          className="  px-5 2xl:px-0"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-5xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-6xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <p>The All-in-One Writing Tool</p>
          </motion.h1>

          <motion.p
            className="mt-2 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <p>
              Blaze through your assignments with your personal writing
              assistant, and make it AI detection free.
            </p>
          </motion.p>
          <motion.div
            className="mx-auto mt-6 flex items-center justify-center space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Link
              href="/sign-up"
              rel="noreferrer"
              className="text-lg font-semibold text-white"
            >
              <motion.button
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                onClick={() => mixpanel.track("Clicked Sign Up")}
                className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-400 to-violet-700 px-10 py-4 drop-shadow-lg transition-colors"
              >
                Start Writing For Free
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="flex w-full justify-center ">
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 65 }}
            className="hidden md:block"
          >
            <Image
              alt="Landing Page Video"
              src="/landing/withoutconch.png"
              width={400}
              height={400}
              className="mt-16 rounded-lg object-contain drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            className="h-fit w-fit"
          >
            <motion.div
              initial={{ y: 900 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 65 }}
            >
              <Image
                alt="Landing Page Video"
                src="https://media1.giphy.com/media/aRyoE5bhvSLpF2iU2A/giphy.gif"
                width={600}
                height={600}
                className="mt-16 rounded-lg object-contain drop-shadow-xl "
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 65 }}
            className="hidden md:block"
          >
            <Image
              alt="Landing Page Video"
              src="/landing/withconch.png"
              width={400}
              height={400}
              className="mt-16 rounded-lg object-contain opacity-70 drop-shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
      <Image
        alt="Landing Page Video"
        src="/landing/withConchMobile.svg"
        width={400}
        height={400}
        className="rounded-lg object-contain drop-shadow-xl md:hidden"
      />
      <div className="relative  mt-16  h-fit w-5/6 items-center justify-center rounded-lg border-gray-200 bg-white p-8 drop-shadow-xl backdrop-blur-xl">
        <div className="mt-4 flex items-center justify-center">
          <p className="text-2xl italic text-gray-400">
            Loved by students from
          </p>
        </div>
        <div className="grid w-full grid-flow-col grid-cols-1 grid-rows-6 items-center justify-center py-8 md:grid-cols-2 md:grid-rows-3 md:py-0 lg:grid-cols-3  lg:grid-rows-2 ">
          {institutions.map((institution, i) => (
            <Image
              alt={institution}
              key={i}
              src={`/colleges/${institution}`}
              width={
                institution == "ucla.png" || institution == "waterloo.png"
                  ? 200
                  : 256
              }
              height={100}
              className="mx-12 max-w-lg object-contain py-2"
            />
          ))}
        </div>
      </div>
      <div className="relative mt-36 h-36 w-full items-center justify-center border-gray-200 md:px-16 ">
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm sm:text-7xl md:text-6xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          What is Conch Bypass™?
        </motion.h1>

        <motion.p
          className="mt-2 text-center text-gray-500 md:mx-16 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <p>
            Run your essay through our proprietary algorithm and have us rewrite
            it until it becomes detection free
          </p>
        </motion.p>
      </div>
      <div className="mx-24 grid h-fit w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-4 xl:px-0">
        <Card
          key={"red"}
          title={"Before Conch Rewrite"}
          description={
            "Get a score between 0-100 and see how much is detected as AI"
          }
          demo={
            <Image
              src="/landing/red.png"
              alt="Deploy with Vercel"
              width={450}
              height={450}
              className="rounded-md object-contain drop-shadow-md"
            />
          }
          large={true}
        />
        <Card
          key={"green"}
          title={"After Conch Rewrite"}
          description={
            "Conch will then rewrite your essay until it is detection free"
          }
          demo={
            <Image
              src="/landing/green.png"
              alt="Deploy with Vercel"
              width={450}
              height={450}
              className="rounded-md object-contain drop-shadow-md"
            />
          }
          large={true}
        />
      </div>
      <div className="relative mt-24 h-56 w-full items-center justify-center border-gray-200 px-12 md:mt-48 ">
        <div className="inline-block justify-center md:flex">
          <div className="mb-2 flex justify-center">
            <Image
              src="/chrome-logo.png"
              alt="Chrome Icon"
              width={56}
              height={56}
              className=" flex justify-center rounded-md object-contain md:mr-2"
            />
          </div>
          <motion.h1
            className="w-fit bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm sm:text-7xl md:text-5xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Use Conch Everywhere You Go
          </motion.h1>
        </div>
        <motion.p
          className="mt-2 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Write blogs, essays, and cover letters blazingly fast with Conch's
            brand new Chrome extension
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 mb-16 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <button
            onClick={() => mixpanel.track("clicked download extension landing")}
          >
            <motion.a
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              href="https://chrome.google.com/webstore/detail/conch-ai/namibaeakmnknolcnomfdhklhkabkchl?hl=en&authuser=0"
              target="_blank"
              rel="noreferrer"
              className="mx-auto  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full  border-violet-700 bg-violet-200 px-10 py-3 transition-colors"
            >
              <p className="text-lg font-semibold text-violet-700">
                Download the Extension
              </p>
            </motion.a>
          </button>
        </motion.div>
      </div>
      <div className="mx-24 mt-24 grid h-fit w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:mt-8 md:grid-cols-4 xl:px-0">
        <Card
          key={"tabSwitch"}
          title={"Stop Tab Switching"}
          description={
            "Imagine combining the power of ChatGPT with the ease of use of Grammarly. Use AI in whatever tab you're on."
          }
          demo={
            <Image
              src="/landing/chrome1.svg"
              alt="Deploy with Vercel"
              width={700}
              height={700}
              className="rounded-md object-contain drop-shadow-md"
            />
          }
          large={true}
        />
        <Card
          key={"generateNext"}
          title={"You write, Conch autocompletes."}
          description={
            "Stuck while writing? Conch will generate the next sentence for you, based off the context of your previous writing"
          }
          demo={
            <Image
              src="/landing/chrome2.svg"
              alt="Deploy with Vercel"
              width={700}
              height={700}
              className="rounded-md object-contain drop-shadow-md"
            />
          }
          large={true}
        />
      </div>
      <div className="mx-24 mt-6 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>
      {/* Reviews */}
      <section className="relative  pt-24 pb-32">
        <div className="relative z-10 mx-auto mt-32 px-4 xl:mx-24">
          <div className="-m-2 mb-12 flex flex-wrap items-end justify-between">
            <div className=" w-auto p-2">
              <h2 className="font-heading flex  text-5xl font-bold md:text-6xl">
                🤩 Students love Conch.
              </h2>
            </div>
            <div className="w-auto p-2"></div>
          </div>
          <div className="-m-2 flex flex-wrap ">
            <div className="w-full p-2 md:w-1/2 lg:w-1/4">
              <div className="h-full rounded-3xl bg-white bg-white px-8 py-6 drop-shadow-lg">
                <div className="flex h-full flex-col justify-between ">
                  <div className="mb-7 block">
                    <div className="-m-0.5 mb-6 flex flex-wrap ">
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-heading mb-6 text-lg font-bold">
                      &ldquo;Cannot live without it.&rdquo;
                    </h3>
                    <p className="text-lg font-medium">
                      Essays used to take me days, but now they takes a couple
                      of hours! Goated.
                    </p>
                  </div>
                  <div className="block">
                    <p className="font-bold">
                      Henry W. - University, Class of 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/4  ">
              <div className="h-full rounded-3xl bg-white bg-white px-8 py-6 drop-shadow-lg">
                <div className="flex h-full flex-col justify-between">
                  <div className="mb-7 block">
                    <div className="-m-0.5 mb-6 flex flex-wrap">
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-heading mb-6 text-lg font-bold">
                      &ldquo;Was skeptical at first.&rdquo;
                    </h3>
                    <p className="text-lg font-medium">
                      As a grad student, I didn't think Conch would be able to
                      create the quality of essays I needed. Now it's part of my
                      daily workflow.
                    </p>
                  </div>
                  <div className="block">
                    <p className="font-bold">Jenny K. - Graduate Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/4">
              <div className="h-full rounded-3xl bg-white bg-white  px-8 py-6 drop-shadow-lg">
                <div className="flex h-full flex-col justify-between">
                  <div className="mb-7 block">
                    <div className="-m-0.5 mb-6 flex flex-wrap">
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-heading mb-6 text-lg font-bold">
                      &ldquo;Big Brained My Professor&rdquo;
                    </h3>
                    <p className="text-lg font-medium">
                      My professor uses GPTZero to check all our work, but with
                      Conch I'm now the only kid who gets away with it.
                    </p>
                  </div>
                  <div className="block">
                    <p className="font-bold">Anonymous - University Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/4">
              <div className="h-full rounded-3xl bg-white bg-white px-8 py-6 drop-shadow-lg">
                <div className="flex h-full flex-col justify-between">
                  <div className="mb-7 block">
                    <div className="-m-0.5 mb-6 flex flex-wrap">
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-heading mb-6 text-lg font-bold">
                      &ldquo;Leveled Up&rdquo;
                    </h3>
                    <p className="text-lg font-medium">
                      I'm saving about 10 hours a week. I use the summarization
                      feature of the chrome extension the most.
                    </p>
                  </div>
                  <div className="block">
                    <p className="font-bold">Wilson S. - High School Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="relative overflow-hidden pt-24 pb-28">
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
          src="flaro-assets/images/faqs/gradient.svg"
          alt=""
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto md:max-w-4xl">
            <p className="tracking-px mb-7 text-center text-sm font-semibold uppercase text-indigo-600">
              Have any questions?
            </p>
            <h2 className="font-heading tracking-px-n mb-16 text-center text-2xl font-bold leading-none md:text-5xl xl:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="-m-1 mb-11 flex flex-wrap">
              {questions.map(({ title, description }, i) => (
                <FaqRow
                  index={i}
                  key={i}
                  title={title}
                  description={description}
                  activeFAQ={activeFAQ}
                  setActiveFAQ={setActiveFAQ}
                />
              ))}
            </div>
            <p className="text-center font-medium text-gray-600">
              <span>Still have any questions? </span>
              <a
                className="font-semibold text-indigo-600 hover:text-indigo-700"
                href="mailto:help@getconch.ai"
              >
                Contact us
              </a>
            </p>
          </div>
          <motion.h1
            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-5xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-6xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <p>Try Conch for Free Today</p>
          </motion.h1>

          <motion.p
            className="mt-2 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <p>
              Join 20,000+ students who are saving time and doing it worry free
              with our AI Bypasser
            </p>
          </motion.p>
          <motion.div
            className="mx-auto mt-6 flex items-center justify-center space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Link
              href="/sign-up"
              rel="noreferrer"
              className="text-lg font-semibold text-white"
            >
              <motion.button
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                onClick={() => mixpanel.track("Clicked Sign Up Bottom")}
                className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-400 to-violet-700 px-10 py-4 drop-shadow-lg transition-colors"
              >
                Start Writing 10x Faster
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
const questions = [
  {
    title: "Is Conch two separate tools?",
    description:
      "Yes, Conch is two separate tools. The chrome extension is our main tool to help you write faster and our AI bypasser/rewriter is a dedicated webapp.",
  },
  {
    title: "What are tokens? ",
    description:
      "Tokens are the currency you give to Conch that allow you to generate, check or rewrite content. 1 token ≈ 1 word.",
  },
  {
    title: "Is there a free plan?",
    description:
      "All users who sign-up get access to 500 tokens which can be used on both our chrome extension and AI bypasser tool. ",
  },
  {
    title: "Is your AI rewriter guaranteed to not get caught?",
    description:
      "We use an algorithm very similar to GPTZero to determine whether or not your content is written by AI. We rewrite your content until it passes this detection. You may go to gptzero.me to see how well our AI bypasser works. As GPTZero is the gold standard for ai detection, it is very difficult to make the case that an AI has written your paper if it passes their test.",
  },
  {
    title: "Is the content from Conch original?",
    description:
      "The content that Conch generates is original content that doesn't repeat itself and passes plagiarism tests with 99.99% original content that is free and clear for publication.",
  },
  {
    title: "What languages does Conch support?",
    description:
      "In theory, Conch should support all languages. We have tested German, Japanese, Spanish and Russian.",
  },
];
const features = [
  {
    title: "Choose from 12+ Templates",
    description:
      "Beat writer's block: use templates to quickly get started. From replying to emails to summarizing text on any webpage.",
    demo: (
      <Image
        src="/landing/outline.svg"
        alt="Deploy with Vercel"
        width={320}
        height={320}
      />
    ),
  },
  {
    title: "Answer anything in seconds",
    description:
      "Powered by ChatGPT. Instead of context switching and breaking your writing flow, ask Conch and have the answer instantly. ",
    demo: (
      <Image
        src="/landing/chatgpt.svg"
        alt="Deploy with Vercel"
        width={320}
        height={320}
      />
    ),
  },
  {
    title: "Too Long Didn't Read",
    description:
      "Highlight and summarize hard to understand texts in seconds. Perfect for researchers, students, and writers.",
    demo: (
      <Image
        src="/landing/tldr.svg"
        alt="Deploy with Vercel"
        width={320}
        height={320}
      />
    ),
  },
];
