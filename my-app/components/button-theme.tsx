"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default function ButtonTheme(): JSX.Element | null {
    
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false)
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

    return (
        <div className="relative w-[30px] h-[30px]">
            <button 
                type="button" 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
                className="absolute m-[1px]"
            >
                {theme === 'light' ? (
                    <FaMoon size={24} className="text-slate-300 hover:text-slate-500 active:text-slate-600"/> 
                ) : (
                    <FiSun size={24} className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700"/>
                )}
            </button>
        </div>
    )
}