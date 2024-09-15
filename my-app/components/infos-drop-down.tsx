"use client";

import Link from "next/link";
import { useState } from "react";

export default function Infos(): JSX.Element {
    
    const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false);

    return (
        <div 
            onMouseEnter={() => setIsOpenInfo(true)}
            onMouseLeave={() => setIsOpenInfo(false)}
            className="relative">
            <li className='list-none'>
                <Link href="https://www.cds-france.info/protocoles" target="_blank" rel="noopener noreferrer">
                    <p className="transform duration-200 ease-in-out bg-clip-text text-transparent bg-gradient-to-r 
                        from-cyan-400 to-cyan-500 hover:scale-105 hover:text-cyan-400 active:scale-95 active:text-cyan-600">
                        Infos
                    </p>
                </Link>
            </li>

            {isOpenInfo === true ? (
                <div className="absolute w-[130px] text-sm mt-0 -ml-[45px] bg-transparent border-none rounded-bl rounded-br">
                    <li className="list-none mt-[20px]">
                        <Link href="https://www.cds-france.info/protocoles" target="_blank" rel="noopener noreferrer">
                            <p className="transform duration-200 ease-in-out bg-slate-700/70 border-b border-slate-500 hover:bg-slate-500 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 pl-4 py-2">
                                Protocols
                            </p>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link href="https://www.cds-france.info/documents" target="_blank" rel="noopener noreferrer">
                            <p className="transform duration-200 ease-in-out bg-slate-700/70 border-b border-slate-500 hover:bg-slate-500 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 pl-4 py-2">
                                Documents
                            </p>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link href="/fda">
                            <p className="transform duration-200 ease-in-out bg-slate-700/70 hover:bg-slate-500 hover:text-cyan-500 
                                active:bg-slate-700/70 active:text-cyan-600 pl-4 py-2 rounded-bl rounded-br">
                                FDA
                            </p>
                        </Link>
                    </li>
                </div>
            ) : null}
        </div>
    )
}