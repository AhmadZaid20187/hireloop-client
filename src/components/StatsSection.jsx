"use client"

import Image from "next/image";
import { FiBriefcase, FiBarChart2, FiSearch, FiStar } from "react-icons/fi";
// import globeBg from "@/public/globe.png"; // update path to your actual background image
// import { motion, } from "motion/react";
// import { Typewriter } from "motion-plus/react"

const stats = [
  {
    icon: FiBriefcase,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: FiBarChart2,
    value: "12K",
    label: "Companies",
  },
  {
    icon: FiSearch,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: FiStar,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="">
      <div className="relative overflow-hidden  border border-white/5 bg-black">
        {/* Background image */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={
            {
              backgroundImage: "url('/images/globe.png')"
            }
          }
        />

        {/* Content */}
        <div className="relative z-10 px-6 pt-16 pb-8 sm:px-10 sm:pt-90">
          {/* Headline */}
          <p className="text-center text-lg text-gray-300 sm:text-2xl">
            Assisting over{" "}
            <span className="font-semibold text-white">15,000</span> job
            seekers
            <br className="hidden sm:block" /> find their dream positions.
            {/* <motion.p animate={{ rotate: 360 }}>Hello World!</motion.p> */}
          </p>

          {/* Stat cards */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/5 bg-black/60 p-5 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 text-gray-300" />
                <p className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                  {value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
