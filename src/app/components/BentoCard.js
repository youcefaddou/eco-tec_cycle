"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useHoverSpring } from "../hooks/useHoverSpring";

export default function BentoCard({ image, title, link }) {
  const { MotionWrapper } = useInViewAnimation({ y: 32, duration: 0.7 });
  const hoverProps = useHoverSpring();
  return (
    <MotionWrapper className="group bg-white rounded-2xl overflow-hidden shadow transition-transform duration-300 flex flex-col cursor-pointer m-1">
      <motion.div {...hoverProps} className="h-32 md:h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
      </motion.div>
      <div className="p-3 md:p-5 flex-1 flex flex-col justify-between">
        <h3 className="text-base md:text-lg font-bold text-green-800 mb-2">{title}</h3>
        <Link href={link} className="mt-auto text-blue-600 font-semibold hover:underline text-sm md:text-base">En savoir plus</Link>
      </div>
    </MotionWrapper>
  );
} 