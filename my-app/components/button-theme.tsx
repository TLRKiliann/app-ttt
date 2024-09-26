"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default function ButtonTheme(): JSX.Element | null {
    
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false)

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
                className="absolute -mt-1 p-2"
            >
                {theme === 'light' ? (
                    <FaMoon size={22} 
                        className="transform duration-100 ease-in-out text-slate-500 
                            hover:scale-105 hover:text-slate-500/70 active:scale-95 active:text-slate-600"
                    /> 
                ) : (
                    <FiSun size={22}
                        className="transform duration-100 ease-in-out text-slate-500
                            hover:scale-105 hover:text-slate-500/70 active:scale-95 active:text-slate-600"
                    />
                )}
            </button>
        </div>
    )
}