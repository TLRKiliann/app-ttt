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
        <div className="relative flex-shrink w-[30px] h-[30px]">
            <button 
                type="button" 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
                className="absolute transform duration-100 ease-in-out hover:scale-110 active:scale-90 -mt-1 p-2"
            >
                {theme === 'light' ? (
                    <FaMoon size={18} 
                        className="
                    text-cyan-500 hover:text-cyan-600 active:text-cyan-700 mt-[1px]"
                    /> 
                ) : (
                    <FiSun size={22}
                        className="
                    text-cyan-500 hover:text-cyan-600 active:text-cyan-700"
                    />
                )}
            </button>
        </div>
    )
}