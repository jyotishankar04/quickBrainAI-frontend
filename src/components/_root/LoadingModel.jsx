/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const LoadingModal = ({
  isVisible,
  text = "Loading",
  textContext = "Please wait while we process your request",
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{
              duration: 0.3,
              ease: [0.23, 1, 0.32, 1], // Custom easing for Apple-like feel
            }}
            className="relative z-10 w-full max-w-md p-8 mx-4 overflow-hidden bg-white backdrop-blur-xl bg-opacity-90 rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-center w-20 h-20">
                <motion.div className="relative w-16 h-16">
                  {/* QuickBrain AI Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 32 32" className="w-10 h-10 text-primary">
                      <motion.path
                        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.path
                        d="M20 16c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0, rotate: 0 }}
                        animate={{ pathLength: 1, rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </svg>
                  </motion.div>

                  {/* Pulsing circles */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary bg-opacity-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary bg-opacity-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.3, 0.8],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              <div className="text-center space-y-2">
                <motion.h3
                  className="text-lg font-medium text-primary"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {text}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {textContext}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingModal;
