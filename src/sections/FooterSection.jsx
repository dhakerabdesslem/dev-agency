"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import map from "@/assets/images/map.png";
import { motion } from "framer-motion";

const playfair_Display = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

function FooterSection() {
  return (
    <div
      id="contact-us"
      className="bg-black w-full rounded-tr-2xl sm:rounded-tr-full flex flex-col flex-wrap sm:flex-row sm:flex-nowrap justify-between items-center gap-y-10 sm:gap-1 text-white mt-8 p-8"
    >
      <div className="basis-1/2">
        <motion.h1
          className={`${playfair_Display.className} text-3xl`}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          Dev Agency
        </motion.h1>
      </div>
    </div>
  );
}

export default FooterSection;
