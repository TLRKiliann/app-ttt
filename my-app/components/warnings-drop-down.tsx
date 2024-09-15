"use client";

import Link from "next/link";
import { useState } from "react";

export default function Warnings(): JSX.Element {
    
    const [isOpenWarn, setIsOpenWarn] = useState<boolean>(false);
    
    return (
        <div 
            onMouseEnter={() => setIsOpenWarn(true)}
            onMouseLeave={() => setIsOpenWarn(false)}
            className="relative">
            <li className='list-none'>
                <Link href="/interactions">
                    <p className="transform duration-200 ease-in-out bg-clip-text text-transparent bg-gradient-to-r 
                        from-cyan-400 to-cyan-500 hover:scale-105 hover:text-cyan-400 active:scale-95 active:text-cyan-600">
                        Warnings 
                    </p>
                </Link>
            </li>

            {isOpenWarn === true ? (
                <div className="absolute w-[130px] text-sm mt-0 -ml-[20px] bg-transparent border-none rounded-bl rounded-br">
                    <li className="list-none mt-[20px]">
                        <Link href="/interactions">
                            <p className="transform duration-200 ease-in-out bg-slate-700/70 border-b border-slate-500 hover:bg-slate-500 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 pl-4 py-2">
                                Interactions
                            </p>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link href="/precautions">
                            <p className="transform duration-200 ease-in-out bg-slate-700/70 hover:bg-slate-500 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 rounded-bl rounded-br pl-4 py-2">
                                Précautions
                            </p>
                        </Link>
                    </li>

                </div>
            ) : null}
        </div>
    )
}
