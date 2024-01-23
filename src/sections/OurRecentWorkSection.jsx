import RecentWorkSlider from "@/components/RecentWorkSlider";
import { motion } from "framer-motion";
import React from "react";

function OurRecentWorkSection() {
  return (
    <div className="mt-28 flex flex-col flex-wrap justify-between sm:flex-row px-3 text-dark">
      <div className="basis-1/2">
        <motion.h1
          className="inline-block font-thin text-4xl recent-work-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-bold">
            Our Recent Work <br />
          </span>
          By Our Experts
        </motion.h1>
      </div>
      <div className="basis-full w-full flex flex-col-reverse sm:flex-row gap-2 gap-y-5 mt-16">
        <RecentWorkSlider />
      </div>
    </div>
  );
}

export default OurRecentWorkSection;
