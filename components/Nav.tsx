'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Nav(){
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(()=>{ const d = localStorage.getItem('theme')==='dark'; setDark(d); document.documentElement.classList.toggle('dark', d); },[]);
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/40 dark:border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3"><img src="/logo.svg" className="h-44 w-44"/><span className="font-bold text-xl"></span></Link>
        <nav className={`${open?'flex':'hidden'} md:flex items-center gap-6`}>
          <Link href="/services">Services</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <button onClick={()=>{const n=!dark; setDark(n); document.documentElement.classList.toggle('dark', n); localStorage.setItem('theme', n?'dark':'light');}} className="px-3 py-1.5 rounded-lg border">🌙</button>
        </nav>
        <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">☰</button>
      </div>
    </header>
  );
}
