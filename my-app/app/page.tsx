import Link from "next/link";
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col items-start justify-between w-full min-h-screen text-slate-300">

      <div className="fixed -z-10 w-full h-full">
        <Image 
          src={imgBg} 
          width={1920} 
          height={1076} 
          alt="no img bg" 
          className="w-full h-full opacity-30 object-cover"
        />
      </div>

      <div className="mt-[70px] pt-4 pl-4">
        <h1 className="max-w-fit text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500">
          Dioxyde de chlore (CDS)
        </h1>
      </div>

      <div className="w-full h-full px-10 pb-10">

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mt-10 mb-4">Le dioxyde de chlore (ClO<sub>2</sub>)</h3>

        <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 p-4 rounded">
          
          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-1">
            <Link href="https://www.dailymotion.com/video/x8nq4aj" target="_blank" rel="noopener noreferrer">
              Qu&apos;est-ce que le dioxyde de chlore (vidéo) ?
            </Link>
          </li>

          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-1">
            <Link href="https://www.dailymotion.com/video/x8d0rsc" target="_blank" rel="noopener noreferrer">
              Comment agit-il (vidéo) ?
            </Link>
          </li>

        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">Préparation du dioxyde de chlore</h3>

        <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 p-4 rounded">
          
          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-1">
            <Link href="https://www.dailymotion.com/video/x8nq4do" target="_blank" rel="noopener noreferrer">
              Vidéo de préparation par le Pr Kalcker
            </Link>
          </li>

          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-1">
            <Link href="https://moi_1" target="_blank" rel="noopener noreferrer">
              Vidéo de préparation avec des moyens facilitants
            </Link>
          </li>

          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-1">
            <Link href="https://moi_2" target="_blank" rel="noopener noreferrer">
              Vidéo de dilution du dioxyde de chlore
            </Link>
          </li>

          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4">
            <Link href="https://www.cds-france.info/protocoles" target="_blank" rel="noopener noreferrer">
              Protocoles du CDS en fonction des pathologies
            </Link>
          </li>

        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">Contre indications</h3>

        <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 p-4 rounded">

          <li className="list-decimal text-red-400 ml-4 mb-1">
            <p>La pilule.</p>
          </li>
          <p className="text-justify mb-1">
            Certaines informations semblent dire que le CDS et la pilule contraceptive ne font pas bon ménage. 
            L&apos;action de cette dernière pourrait être annulée.
          </p>

          <li className="list-decimal text-red-400 ml-4 mb-1">
            <p>Les corticoïdes.</p>
          </li>

          <li className="list-decimal text-red-400 ml-4 mb-1">
            <p>Les autres médicaments.</p>
          </li>

          <p className="text-justify">
            Il n&apos;y a pas d&apos;interaction connue avec la plupart des médicaments. On maintiendra un interval 
            d&apos;une heure entre CDS et médicaments.
          </p>

        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">Précaution avec le dioxyde de chlore</h3>

        <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 p-4 rounded">
          
          <p className="text-justify">
            Il faut éviter d&apos;inhaler les émanations toxiques du CDS susceptibles de provoquer des lésions pulmonaires.
            Il faut soit le préparer en plein air, dehors, soit sous une hotte d&apos;aération.
          </p>

          <h3 className="text-xl text-red-400 my-4">Interactions médicamenteuses:</h3>

          <div className="bg-slate-400/10 shadow-in border border-red-500/50 p-4 rounded">
            <p className="mb-2">Addresse utile pour toutes questions se rapportant aux interactions médicamenteuses avec le CDS.</p>
            <p className="max-w-fit text-sky-400 border border-sky-400 px-3 py-2 rounded-md">info@andreaskalcker.com</p>
          </div>

          <h3 className="text-xl text-red-400 my-4">Les aliments à éviter:</h3>

          <div className="bg-slate-400/10 shadow-in border border-red-500/50 p-4 rounded">

            <li className="ml-4">
              <p>L&apos;alcool</p>
            </li>

            <li className="ml-4">
              <p>Le café</p>
            </li>

            <li className="ml-4">
              <p>Le chocolat</p>
            </li>

            <li className="ml-4">
              <p>Les produits laitier</p>
            </li>

            <li className="ml-4">
              <p>La vitamine C</p>
            </li>

            <li className="ml-4">
              <p>Les anti-oxydants</p>
            </li>

            <li className="ml-4">
              <p>Les œufs</p>
            </li>

            <li className="ml-4">
              <p>Les viandes rouge</p>
            </li>

            <li className="ml-4">
              <p>Les huiles végétales</p>
            </li>

            <li className="ml-4">
              <p>Le Thé</p>
            </li>

            <li className="ml-4">
              <p>Le Miel</p>
            </li>

            <li className="ml-4">
              <p>Le sucre raffiné</p>
            </li>

            <li className="ml-4">
              <p>Les boissons industrielles sucrées</p>
            </li>

            <p className="text-sm italic text-justify mt-2">
              Sinon, consommez l&apos;un des produits, figurants ci-dessus, en respectant un interval d&apos; 1 heure avec les prises de CDS.
            </p>

          </div>

        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">
          Conservation du dioxyde de chlore
        </h3>

        <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 p-4 rounded">
          <div className="bg-slate-400/10 shadow-in border border-red-500/50 p-4 rounded">
            <li className="ml-4">
              <p>A l&apos;abri de la lumière (flacon ou bouteille à teinte ambrée)</p>
            </li>
            <li className="ml-4">
              <p>Au frigo (au-delà de 11°C, il s&apos;évapore et en deçà de -59°C il se cristallise)</p>
            </li>
          </div>

          <p className="text-justify mt-4">
            Si vous devez transporter le CDS avec vous par des températures au-delà de 11°C, 
            dès votre arrivée à destination, le mettre au frigo durant 4 heures, avant l&apos;ouverture de la bouteille.
          </p>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">
          CDS avec les repas
        </h3>

        <div className="bg-gradient-to-r from-sky-500/30 to-red-500/30 p-4 rounded">
          <p>Avant les repas: arrêter le CDS au moins 20 à 40 minutes avant de manger.</p>
          <p>Après les repas: attendre 1 heure avant de reprendre le CDS.</p>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">
          Documentation
        </h3>
        
        <div className="bg-gradient-to-tr from-sky-500/30 to-red-500/30 p-4 rounded">
          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4">
            <Link href="https://www.cds-france.info/documents" target="_blank" rel="noopener noreferrer">
              CDS-Data
            </Link>
          </li>
        </div>
      </div>

    </main>
  );
}
