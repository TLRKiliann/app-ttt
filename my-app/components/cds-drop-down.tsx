"use client";

import Link from "next/link";
import { useState } from "react";

export default function CdsDropDown(): JSX.Element {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="relative">
            <li className='list-none'>                
                <button type="button" onClick={handleClick} className="transform duration-200 ease-in-out bg-clip-text text-transparent bg-gradient-to-r 
                    from-cyan-400 to-cyan-500 hover:scale-105 hover:text-cyan-400 active:scale-95 active:text-cyan-600">
                    CDS  
                </button>
            </li>

            {isOpen === true ? (
                <div className="absolute w-[130px] text-sm mt-[1px] -ml-[45px] text-slate-300/70 bg-transparent border-none rounded-bl rounded-br">
                    <li className="list-none mt-[20px]">
                        <Link href="/">
                            <button type="button" onClick={handleClick} className="w-full transform duration-200 ease-in-out bg-slate-700/70 
                                border-b border-slate-500/50 hover:bg-slate-500/50 hover:text-cyan-500 active:bg-slate-700/70 active:text-cyan-600 py-2">
                                Intro
                            </button>
                        </Link>
                    </li>

                    <li className="list-none">
                        <Link href="/regledor">
                            <button type="button" onClick={handleClick} className="w-full transform duration-200 ease-in-out bg-slate-700/70 border-b border-slate-500/50 hover:bg-slate-500/50 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 py-2">
                                3 règles d&apos;or
                            </button>
                        </Link>
                    </li>

                    <li className="list-none">
                        <Link href="/fabrication">
                            <button type="button" onClick={handleClick} className="w-full transform duration-200 ease-in-out bg-slate-700/70 border-b border-slate-500/50 hover:bg-slate-500/50 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 py-2">
                                Fabrication
                            </button>
                        </Link>
                    </li>

                    <li className="list-none">
                        <Link href="/repas">
                            <button type="button" onClick={handleClick} className="w-full transform duration-200 ease-in-out bg-slate-700/70 border-b border-slate-500/50 hover:bg-slate-500/50 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 py-2">
                                Repas
                            </button>
                        </Link>
                    </li>
                    
                    <li className="list-none">
                        <Link href="/conservation">
                            <button type="button" onClick={handleClick} className="w-full transform duration-200 ease-in-out bg-slate-700/70 hover:bg-slate-500/50 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 py-2 rounded-bl rounded-br">
                                Conservation
                            </button>
                        </Link>
                    </li>
                </div>
            ) : null}
        </div>
    )
}