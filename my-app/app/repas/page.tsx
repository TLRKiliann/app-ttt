import { Metadata } from 'next';
import Image from "next/image";
import { GiMeal } from "react-icons/gi";
import imgBg from "@/public/assets/images/science-bg.jpg";

export const metadata: Metadata = {
    title: "Repas",
    description: 'repas page',
};

export default function Repas(): JSX.Element {
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
                <h1 className='text-2xl md:text-3xl font-bold pl-4'>Prises avec les repas</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-[70vh] mt-20 px-4 md:px-40 pb-10 animate-slice-appear">

                <div className="w-full flex flex-row items-start">
                    <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">
                        CDS avec les repas
                    </h3>
                    <span className="ml-2 text-pink-500/75"><GiMeal size={32}/></span>
                </div>

                <div className="w-full bg-gradient-to-r from-sky-500/30 to-red-500/30 px-10 py-8 rounded">
                    <h3 className='max-w-fit text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-emerald-500 to-purple-500'>Avant les repas :</h3>
                    <p>- Arrêter le CDS au moins 20 à 40 minutes avant de manger.</p>
                    <br />
                    <h3 className='max-w-fit text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-emerald-500 to-purple-500'>Après les repas :</h3>
                    <p>- Attendre 1 heure avant de reprendre le CDS.</p>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>
            </div>

        </main>
    )
}