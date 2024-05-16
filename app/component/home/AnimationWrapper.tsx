"use client";

import { motion } from "framer-motion";

interface AnimationWrapper {
    children: React.ReactNode;
}

export function AnimationWrapper({ children }: AnimationWrapper) {
    return (
        <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}>
        { children }
      </motion.div>
    )
}