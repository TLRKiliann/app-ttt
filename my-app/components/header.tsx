
import Link from 'next/link';
import Image from 'next/image';
import imgLab from '@/public/assets/images/lab.png';
import CdsDropDown from './cds-drop-down';
import Warnings from './warnings-drop-down';
import Infos from './infos-drop-down';

export default function Header(): JSX.Element {

    return (
        <div className='fixed z-20 top-0 flex items-center w-full h-[70px] text-xs md:text-lg bg-slate-700/70 font-bold'>
            <nav className='flex flex-row items-center justify-between w-full h-auto'>
                
                <Image src={imgLab} width={5000} height={3334} alt="img logo" className="w-[50px] h-[50px] border border-cyan-500/50 rounded-full ml-2 object-cover" />

                <ul className='flex flex-row items-center justify-evenly w-3/5 md:w-3/5 h-auto'>

                    <CdsDropDown />
                    
                    <Warnings />

                    <Infos />

                    <li className='list-none'>
                        <Link href="/contact">
                            <p className="transform duration-200 ease-in-out bg-clip-text text-transparent bg-gradient-to-r 
                                from-cyan-400 to-cyan-500 hover:scale-105 hover:text-cyan-400 active:scale-95 active:text-cyan-600">
                                Contact
                            </p>
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}