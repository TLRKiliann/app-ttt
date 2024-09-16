import { Metadata } from 'next';
import Image from "next/image";
import { FiSun } from "react-icons/fi";
import { BiSolidFridge } from "react-icons/bi";
import imgBg from "@/public/assets/images/science-bg.jpg";

export const metadata: Metadata = {
    title: "Conservation",
    description: 'conservation page',
};

export default function Conservation(): JSX.Element {
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
            <h1 className='text-2xl md:text-3xl font-bold pl-4'>Conservation</h1>
        </div>
        
        <div className="flex flex-col items-center justify-center w-full h-full md:h-[70vh] mt-20 px-4 md:px-40 pb-10 animate-slice-appear">

            <div className="w-full flex flex-row items-start">
                <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">
                    Conservation du CDS
                </h3>
                <p className="text-xl md:text-xl font-bold text-cyan-500 -mt-1 ml-2 rounded-full">°C</p>
            </div>

            <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 px-10 py-8 rounded">

                <div className="bg-slate-300/10 p-4 shadow-out rounded">

                    <div className="flex flex-row items-start justify-start">
                        <li className="ml-4 mb-1">
                            <a>A l&apos;abri de la lumière (flacon ou bouteille à teinte ambrée)</a>
                        </li>
                        <span className="text-yellow-400 -mt-1 ml-2"><FiSun size={22} /></span>
                    </div>

                    <div className="flex flex-row items-center">
                        <li className="ml-4">
                            <a>Au frigo</a>
                        </li>
                        <span className="text-sky-400 ml-2"><BiSolidFridge size={22} /></span>
                    </div>
                
                </div>

                <p className="text-justify mt-6 mb-4">Le CDS s&apos;évapore à 11°C et se cristallise à -59°C.</p>

                <p className="text-justify">
                    Si vous devez transporter le CDS avec vous par des températures au-dessus de 10°C, 
                    dès votre arrivée à destination, le mettre au frigo durant 4 heures, avant l&apos;ouverture du flacon.
                </p>

            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
            </div>
        </div>

    </main>
    )
}