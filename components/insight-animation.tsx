"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EarlyAccessForm } from "./early-access-form";

const INSIGHT_TEXT =
  "3 foods you eat regularly share a hidden property: high oxalate. Your joint and muscle pain appeared within 8 hours of eating them 71% of the time.";
const CONFIDENCE_TARGET = 71;
const CONTRIBUTING_FOODS = ["Spinach", "Almonds", "Quinoa"];

function useTypingEffect(text: string, startDelay: number, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return displayed;
}

function useCountUp(target: number, startDelay: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [target, startDelay, duration]);

  return value;
}

export function InsightAnimation() {
  const [phase, setPhase] = useState<
    "badge" | "typing" | "stats" | "foods" | "reveal"
  >("badge");

  const typedText = useTypingEffect(INSIGHT_TEXT, 2500, 35);
  const confidence = useCountUp(CONFIDENCE_TARGET, 7500, 1500);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("typing"), 1500),
      setTimeout(() => setPhase("stats"), 7000),
      setTimeout(() => setPhase("foods"), 9000),
      setTimeout(() => setPhase("reveal"), 11500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const showTyping = ["typing", "stats", "foods", "reveal"].includes(phase);
  const showStats = ["stats", "foods", "reveal"].includes(phase);
  const showFoods = ["foods", "reveal"].includes(phase);
  const showReveal = phase === "reveal";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <AnimatePresence mode="wait">
        {!showReveal ? (
          <motion.div
            key="insight"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 ring-1 ring-inset ring-white/20 backdrop-blur-sm"
            >
              <span className="text-sm text-amber-300">⚠</span>
              <span className="text-sm font-semibold text-white/80">
                Pattern Detected
              </span>
            </motion.div>

            {/* Insight text — types out large */}
            {showTyping && (
              <div className="mx-auto min-h-[5rem] max-w-xl md:min-h-[6rem]">
                <p className="font-display text-xl font-semibold leading-snug text-white md:text-2xl lg:text-3xl">
                  {typedText}
                  {typedText.length < INSIGHT_TEXT.length && (
                    <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-white/60 md:h-7" />
                  )}
                </p>
              </div>
            )}

            {/* Confidence stat */}
            {showStats && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8"
              >
                <div className="text-5xl font-bold text-white md:text-6xl">
                  {confidence}
                  <span className="text-white/50">%</span>
                </div>
                <div className="mt-2 text-sm text-white/40">
                  correlation confidence
                </div>
              </motion.div>
            )}

            {/* Contributing foods — pill chips like real ChewIQ */}
            {showFoods && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-2"
              >
                <span className="text-xs text-white/30">
                  Contributing foods:
                </span>
                {CONTRIBUTING_FOODS.map((food, i) => (
                  <motion.span
                    key={food}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15, duration: 0.3 }}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/15"
                  >
                    {food}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full max-w-2xl text-center"
          >
            <h1 className="font-display text-balance text-3xl font-bold leading-snug tracking-tight text-white md:text-4xl lg:text-5xl">
              This is what intelligent health looks like.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/60 md:text-lg">
              Real insights. Real tracking. Real patterns your doctors
              can&apos;t see.
            </p>
            <div className="mx-auto mt-8 w-full max-w-md">
              <EarlyAccessForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
