import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelected(null);
    }
  };

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={() => setSelected(card.id)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <AnimatePresence>
        {workExperience.map(
          (card) =>
            selected === card.id && (
              <motion.div
                key={card.id}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                onClick={handleOutsideClick}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
              >
                <div
                  style={{
                    background: "linear-gradient(90deg, rgba(4,7,29,0.8) 0%, rgba(12,14,35,0.8) 100%)",
                    borderRadius: "calc(1.75rem * 0.96)",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                  className="flex flex-col lg:flex-row lg:items-center p-6 md:p-10 gap-4 relative"
                >
                  <button
                    className="absolute top-2 right-2 text-black dark:text-white"
                    onClick={() => setSelected(null)}
                  >
                    X
                  </button>
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">{card.title}</h2>
                    <p className="mb-2">{card.desc}</p>
                    <p className="mb-4">{card.detailDesc}</p>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
