import { Metadata } from 'next';
import React from 'react';
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";

export const metadata: Metadata = {
    title: "Precautions",
    description: 'precautions page',
};

export default function Precautions(): JSX.Element {
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

            <div className='pt-20'>
                <h1 className='text-2xl md:text-3xl font-bold pl-4'>Précautions</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full md:h-[75vh] mt-10 md:mt-20 px-4 md:px-40 pb-10 animate-slice-appear">

                <h3 className="w-full text-xl md:text-2xl font-bold mb-4">⚠️ Précaution avec le CDS</h3>

                <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 px-10 py-8 rounded">
            
                    <p className="text-justify">
                        ⚠️ Il faut éviter d&apos;inhaler les émanations toxiques du CDS susceptibles de provoquer des lésions pulmonaires.
                        Il faut soit le préparer en plein air, dehors, soit sous une hotte d&apos;aération.
                    </p>

                    <h3 className="text-xl font-serif text-orange-400 my-4">Les aliments à éviter :</h3>

                    <div className="flex-none md:flex md:flex-row md:items-center md:justify-around w-full bg-slate-300/10 p-4 shadow-out rounded">

                        <div>
                            <li className="ml-4">
                                <a>L&apos;alcool</a>
                            </li>

                            <li className="ml-4">
                                <a>Le café</a>
                            </li>

                            <li className="ml-4">
                                <a>Le chocolat</a>
                            </li>

                            <li className="ml-4">
                                <a>Les produits laitier</a>
                            </li>

                            <li className="ml-4">
                                <a>La vitamine C</a>
                            </li>

                            <li className="ml-4">
                                <a>Les anti-oxydants</a>
                            </li>
                        </div>

                        <div>
                            <li className="ml-4">
                                <a>Les œufs</a>
                            </li>

                            <li className="ml-4">
                                <a>Les viandes rouge</a>
                            </li>

                            <li className="ml-4">
                                <a>Les huiles végétales</a>
                            </li>

                            <li className="ml-4">
                                <a>Le Thé</a>
                            </li>

                            <li className="ml-4">
                                <a>Le Miel</a>
                            </li>

                            <li className="ml-4">
                                <a>Le sucre raffiné</a>
                            </li>

                            <li className="ml-4">
                                <a>Les boissons industrielles sucrées</a>
                            </li>
                        </div>

                    </div>

                    <p className="text-sm italic text-justify mt-8">
                        Sinon, pour consommer l&apos;un des produits figurant ci-dessus, respecter un interval d&apos; 1 heure avec les prises de CDS.
                    </p>

                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>

            </div>

        </main>
    )
}