"use client";

import Link from "next/link";
import { useState } from "react";

export default function Warnings(): JSX.Element {
    
    const [isOpenWarn, setIsOpenWarn] = useState<boolean>(false);
    
    const handleClick = () => {
        setIsOpenWarn(!isOpenWarn);
    };

    return (
        <div 
            onMouseEnter={() => setIsOpenWarn(true)}
            onMouseLeave={() => setIsOpenWarn(false)}
            className="relative">
            <li className='list-none'>
                <button type="button" onClick={handleClick} className="transform duration-200 ease-in-out bg-clip-text text-transparent bg-gradient-to-r 
                    from-yellow-500 to-orange-500 hover:scale-105 hover:text-orange-500 active:scale-95 active:text-red-500">
                    Warnings 
                </button>
            </li>

            {isOpenWarn === true ? (
                <div className="absolute w-[130px] text-sm mt-[1px] -ml-[20px] text-slate-300/70 bg-transparent border-none rounded-bl rounded-br">
                    <li className="list-none mt-[20px]">
                        <Link href="/interactions">
                            <button type="button" onClick={handleClick} className="w-full transform duration-200 ease-in-out bg-slate-700/70 border-b border-slate-500/50 hover:bg-slate-500/50 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 py-2">
                                Interactions
                            </button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link href="/precautions">
                            <button type="button" onClick={handleClick} className="w-full transform duration-200 ease-in-out bg-slate-700/70 hover:bg-slate-500/50 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 rounded-bl rounded-br py-2">
                                Précautions
                            </button>
                        </Link>
                    </li>

                </div>
            ) : null}
        </div>
    )
}
