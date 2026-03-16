"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Navbar } from "@/components/nav/Navbar";



export default function VaultPage() {

  const [assets, setAssets] = useState([]);



  useEffect(() => {

    fetch('/api/vault')

      .then(res => res.json())

      .then(data => setAssets(data));

  }, []);



  return (

    <div className="min-h-screen pt-32 px-8">

      <Navbar />

      <header className="mb-12">

        <h1 className="text-4xl font-black uppercase tracking-tighter italic">Neural Vault</h1>

        <p className="text-white/40 text-xs uppercase tracking-[0.3em] mt-2">Stored Genetic Strains</p>

      </header>



      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {assets.map((asset: any) => (

          <motion.div 

            key={asset.id}

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="aspect-square bg-white/5 rounded-3xl border border-white/10 overflow-hidden group relative"

          >

            <img src={asset.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">

              <p className="text-[10px] text-white/60 uppercase line-clamp-2">{asset.prompt}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );