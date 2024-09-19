import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { GrTest } from "react-icons/gr";
import imgBg from "@/public/assets/images/science-bg.jpg";

export const metadata: Metadata = {
    title: "Fabrication",
    description: 'fabrication page',
};

export default function About(): JSX.Element {
    return (
        <main className="w-full min-h-screen text-slate-100/70">

            <div className="fixed -z-10 w-full h-full">
                <Image 
                    src={imgBg} 
                    width={1920} 
                    height={1076} 
                    alt="no img bg" 
                    className="w-full h-full opacity-30 object-cover"
                />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-[100vh] px-4 md:px-40 animate-slice-appear">

                <div className="w-full flex flex-row items-start">
                    <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">Préparation du CDS</h3>
                    <span className="ml-3 text-sky-500"><GrTest size={26} /></span>
                </div>

                <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 px-8 py-6 rounded">
                
                    <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-2">
                        <Link href="https://www.dailymotion.com/video/x8nq4do" target="_blank" rel="noopener noreferrer">
                            Vidéo de préparation par le Pr Kalcker
                        </Link>
                    </li>

                    <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4">
                        <Link href="https://www.cds-france.info/protocoles" target="_blank" rel="noopener noreferrer">
                            Protocoles du CDS en fonction des pathologies
                        </Link>
                    </li>

                    <p className='text-justify text-orange-400 mt-4'>!!! Ne jamais consommer le CDS pur (sans l&apos;avoir diluer avec de l&apos;eau) !!!</p>

                    <p className="text-justify my-4">
                        Il est important de mettre le CDS au frigo, après dilution avec de l&apos;eau, et d&apos;attendre 30 min avant de l&apos;ingérer.
                    </p>
                    
                    <p className='text-justify'>
                        En cas de surdosage de CDS, il est recommandé de prendre une cuillère à café de Bicarbonate de Soude dans un verre d&apos;eau. 
                        Auparavant, il était préconisé de prendre de la vitamine C pour neutraliser le CDS, mais cela n&apos;est plus recommandé
                        (le surdosage est quasiment impossible).
                    </p>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>
            </div>

        </main>
    )
}