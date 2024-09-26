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
                    className="w-full h-full opacity-20 object-cover"
                />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full 2xl:h-[100vh] px-4 md:px-40 pt-[90px] animate-slice-appear">

                <h3 className="w-full text-xl md:text-2xl font-bold mb-4">⚠️ Précaution avec le CDS ⚠️</h3>

                <div className="bg-gradient-to-r from-sky-500/10 to-red-500/10 px-10 py-8 rounded">
            
                    <p className='text-justify text-orange-400'>⚠️ Ne jamais consommer le CDS pur (sans l&apos;avoir diluer avec de l&apos;eau) ⚠️</p>

                    <p className="text-justify text-orange-400 pt-4">
                        ⚠️ Il faut éviter d&apos;inhaler les émanations toxiques du CDS susceptibles de provoquer des lésions pulmonaires.
                        Il faut soit le préparer en plein air, dehors, soit sous une hotte d&apos;aération. ⚠️
                    </p>

                    <p className='text-justify pt-4'>
                        Le protocole C est généralement le plus approprié en cas de doute. Cependant, la dose peut
                        être augmentée ou diminuée individuellement selon les besoins. La fatigue ou, dans certains
                        cas, la nausée, est une indication que la dose maximale tolérée a été atteinte.
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

                            <li className="ml-4">
                                <a>Les suppléments minéraux</a>
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
                                <a>Le thé</a>
                            </li>

                            <li className="ml-4">
                                <a>Le miel</a>
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
                        Cela ne veut pas dire que vous ne pouvez pas consommer l&apos;un de ces produits pendant un protocole.
                        Cela signifie simplement que vous ne devez pas les ingérer pendant la période où vous avez du ClO<sub>2</sub>
                        dans votre système. Vous pouvez boire du lait, par exemple, avec du ClO<sub>2</sub>, mais cela ne fait que
                        neutraliser les effets de la molécule et ne vous apporte rien de bon. Il y a des gens qui ont pris du
                        dioxyde de chlore pendant des mois sans que leur santé ne s&apos;améliore parce qu&apos;ils n&apos;avaient pas
                        compris ou suivi ces règles. Donc, si vous avez besoin de prendre des produits de la liste ci-dessus
                        dans votre journée, prenez-les en dehors des dosages. <span className='text-orange-400'>Cela signifie soit quelques heures avant de
                        commencer votre dose quotidienne, soit attendre 2 heures après votre dernière dose.</span>
                    </p>

                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>

            </div>

        </main>
    )
}