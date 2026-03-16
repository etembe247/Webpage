"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PromptGalaxy } from "@/components/studio/P.romptGalaxy";

export default function ForgePage() {
  const [isZen, setIsZen] = useState(false);

  return (
    <div className="flex h-screen w-full relative overflow-hidden bg-black text-white">
      {/* Zen Mode Toggle Button */}
      <button 
        onClick={() => setIsZen(!isZen)}
        className="fixed bottom-8 left-8 z-50 p-4 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors"
      >
        {isZen ? "EXIT ZEN" : "ZEN MODE"}
      </button>

      {/* Sidebar - Animated */}
      <AnimatePresence>
        {!isZen && (
          <motion.aside 
            initial={{ x: -300 }} 
            animate={{ x: 0 }} 
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 20 }}
            className="w-80 border-r border-white/5 p-8 fixed h-full bg-black/50 backdrop-blur-xl"
          >
            <h1 className="font-black tracking-tighter text-2xl mb-8">ETEMBE</h1>
            
            {/* Sidebar content */}
            <nav className="space-y-4">
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Gallery</a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Settings</a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Profile</a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-12 ml-0 md:ml-80">
        <div className="max-w-3xl w-full">
          <PromptGalaxy />
        </div>
      </main>
    </div>
  );
}