"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCard(index);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs, i) => {
        if (obs && sectionRefs.current[i]) {
          obs.unobserve(sectionRefs.current[i]!);
        }
      });
    };
  }, [content.length]);

  return (
    <div className="relative mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">

      {/* ── DESKTOP: two-column sticky layout ── */}
      <div className="hidden lg:flex gap-24">
        {/* LEFT: scrolling text */}
        <div className="flex-1 py-24">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="min-h-screen flex flex-col justify-center py-20"
            >
              <motion.span
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                transition={{ duration: 0.4 }}
                className="font-headline-sm text-headline-sm text-primary block mb-4"
              >
                0{index + 1}
              </motion.span>
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.25,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.4 }}
                className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background mb-8"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-body-lg text-body-lg text-on-surface-variant max-w-md border-l-2 border-primary pl-6"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        {/* RIGHT: sticky image */}
        <div className="w-[45%] shrink-0">
          <div className="sticky top-[calc(50vh-14rem)] h-[28rem] xl:h-[32rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "w-full h-full overflow-hidden rounded-sm bg-surface-container-low",
                  contentClassName
                )}
              >
                {content[activeCard]?.content ?? null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── MOBILE: stacked cards (image on top, text below) ── */}
      <div className="flex flex-col gap-20 py-16 lg:hidden">
        {content.map((item, index) => (
          <div key={item.title + index} className="flex flex-col gap-6">
            {/* Image */}
            <div
              className={cn(
                "w-full aspect-[4/3] overflow-hidden rounded-sm bg-surface-container-low",
                contentClassName
              )}
            >
              {item.content ?? null}
            </div>

            {/* Text */}
            <div>
              <span className="font-headline-sm text-headline-sm text-primary block mb-3">
                0{index + 1}
              </span>
              <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-background mb-4">
                {item.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant border-l-2 border-primary pl-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
