import Link from "next/link";
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";
import imgCds from "@/public/assets/images/cds-molecule.png";

export default function Home(): JSX.Element {
  //bg-gradient-to-r from-sky-500/30 to-red-500/30
  return (
    <main className="flex flex-col items-start justify-between w-full min-h-screen text-slate-100/70">

      <div className="fixed -z-10 w-full h-full">
        <Image 
          src={imgBg} 
          width={1920} 
          height={1076} 
          alt="no img bg" 
          className="w-full h-full opacity-30 object-cover"
        />
      </div>

      <div className="flex items-center justify-center w-full mt-[70px] pt-4">
        <h1 className="max-w-fit h-[80px] text-lg md:text-4xl lg:text-5xl font-bold text-justify bg-clip-text text-transparent 
          bg-gradient-to-r from-sky-500 to-pink-500 mt-4 px-4 drop-shadow-text animate-slice-appear">
          Dioxyde de Chlore Solution (CDS)
        </h1>
      </div>

      <div className="flex items-center justify-center w-full mt-2">
        <Image 
          src={imgCds} 
          width={600} 
          height={330} 
          alt="no molecule img" 
          className="w-[450px] h-auto drop-shadow-cyan opacity-50 object-cover" />
      </div>

      <div className="w-full h-full px-4 md:px-40 pb-10 animate-up-start">

        <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">Le dioxyde de chlore (ClO<sub>2</sub>)</h3>

        <div className="bg-slate-950/70 px-8 py-6 rounded">
          
          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-2">
            <Link href="https://www.dailymotion.com/video/x8nq4aj" target="_blank" rel="noopener noreferrer">
              Qu&apos;est-ce que le dioxyde de chlore (vidéo) ?
            </Link>
          </li>

          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4 mb-2">
            <Link href="https://www.dailymotion.com/video/x8d0rsc" target="_blank" rel="noopener noreferrer">
              Comment agit-il (vidéo) ?
            </Link>
          </li>

          <li className="text-sky-300 hover:text-sky-500 active:text-sky-600 ml-4">
            <Link href="https://www.brighteon.com/b56433b0-ee06-4ba9-85a0-c7c300f38c08" target="_blank" rel="noopener noreferrer">
              Comment agit-il plus pécisément (vidéo) ?
            </Link>
          </li>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <div className="bg-slate-950/70 p-8 rounded">
          
          <p className="text-justify">
            L&apos;atome de chlore est maintenant séparé et flotte dans notre système corporel sous une forme
            appelée &quot;chlorure&quot;. Il ne peut cependant pas y rester longtemps. L&apos;atome de chlorure possède des
            caractéristiques atomiques qui lui permettent de se lier facilement à de nombreux autres atomes ou
            molécules. La liaison la plus courante et la plus probable sera avec le sodium (Na). Lorsqu&apos;il se lie au
            sodium, il devient du chlorure de sodium (NaCl). Ce produit est également connu sous le nom de sel de table. 
          </p>
          <br/>
          <p className="text-justify">
            Lorsqu&apos;une personne boit 1 à 3 gouttes de dioxyde de chlore avec de l&apos;eau, et que celui-ci se
            sépare en atomes de chlore et d&apos;oxygène, il peut finir par se lier au Na et créer l&apos;équivalent de
            quelques grains de sel dans votre corps, qui sont simplement évacués. Inoffensif ! L&apos;organisme utilise
            également le chlorure pour fabriquer un produit appelé acide hypochloreux. Cet acide est un truc
            super génial. L&apos;acide hypochloreux est également produit par les globules blancs dans le corps et
            c&apos;est le meilleur combattant d&apos;infection que votre corps produit. Il est très puissant et j&apos;en parle
            davantage plus loin dans le livre dans la section sur le Protocole 2000. Vous pouvez également
            rechercher l&apos;acide hypochloreux en ligne. C&apos;est une bonne chose à avoir en vous.
          </p>
          <br/>
          <p className="text-justify">
            En outre, certains autres avantages finaux de cette matière de chlorure sont les suivants en ce qu&apos;il
            aide à un processus appelé le &quot;cycle de Krebs&quot; :
          </p>

          <ul className="text-justify mx-8 my-4">
            <li className="list-disc my-1">
              <p>L&apos;un des électrolytes les plus importants dans le sang.</p>
            </li>
            <li className="list-disc my-1">
              <p>Aide à maintenir en équilibre la quantité de liquide à l&apos;intérieur et à l&apos;extérieur de la cellule.</p>
            </li>
            <li className="list-disc my-1">
              <p>Aide à maintenir un volume sanguin, une pression sanguine et un pH appropriés dans nos fluides corporels.</p>
            </li>
          </ul>

          <p className="text-justify">
            Les deux atomes d&apos;oxygène, eux, vont se joindre aux cellules sanguines du corps et les oxygéner
            de la même manière que les cellules sont oxygénées par vos poumons. Voici une vidéo qui montre la
            rencontre de ClO<sub>2</sub> avec des cellules sanguines manquant d&apos;oxygène.
          </p>

          <li className="list-none text-sky-300 hover:text-sky-500 active:text-sky-600 my-4">
            <Link href="https://youtu.be/ZHJDc1mGJGo" target="_blank" rel="noopener noreferrer">
              Lien : https://youtu.be/ZHJDc1mGJGo
            </Link>
          </li>

          <p className="text-justify">
            Elles se chargent rapidement en oxygène et le transportent ensuite vers les différentes parties du
            corps pour l&apos;utiliser. Que fait donc cet oxygène supplémentaire qui est absorbé par vos cellules
            sanguines ? Eh bien, pensez-y comme si vous donniez un coup de pouce à votre organisme. Vous
            pouvez rechercher les avantages de ce qu&apos;il fait sur différents sites Web, mais je vais simplement
            laisser ici une liste des éléments de base :
          </p>

          <li className="mx-8 my-4">
            <a className="text-justify">
              L&apos;oxygène est l&apos;élément clé qui donne de l&apos;énergie à vos cellules. Les cellules en ont besoin.
            </a>
          </li>

          <p className="text-justify">
            pour convertir leur nourriture en énergie que vous pouvez utiliser (également connu sous le
            nom de cycle de Krebs). Résultat final ? Vous avez :
          </p>

          <ul className="mx-8 mt-4">
            <li className="list-disc my-1">
              <p className="text-justify">Plus d&apos;énergie.</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Cela rend l&apos;exercice physique plus facile.</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Vous récupérez plus rapidement des entraînements musculaires (moins de raideur).</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Votre cerveau devient plus alerte et plus clair.</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Les infections guérissent plus rapidement.</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Vous avez un sommeil plus réparateur.</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Les plaies et les lésions tissulaires guérissent plus rapidement.</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Vous vous remettez mieux d&apos;un empoisonnement au monoxyde de carbone.</p>
            </li>
            <li className="list-disc my-1">
              <p className="text-justify">Ralentir et inverser la croissance des cancers.</p>
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

        <div className="bg-slate-950/70 p-8 rounded">

          <p className="text-justify">
            En somme, utiliser le dioxyde de chlore pour la santé interne, c&apos;est un peu comme prendre un tas de
            petites grenades de ClO<sub>2</sub> et les lancer sur les pathogènes (virus, bactéries, champignons et
            parasites) dans votre corps pour les détruire. Combien de petites grenades y a-t-il dans une dose de
            3 gouttes ? Environ 5,4e + 24. Cela représente environ 5 400 000 000 000 000 000 000 000 000 de
            molécules ClO<sub>2</sub>. (Je crois que c&apos;est 5,4 septillions.) C&apos;est beaucoup de puissance de feu !
          </p>
          <br />
          <p className="text-justify">
            Ensuite, après que ces molécules de ClO<sub>2</sub> ont explosé en simples atomes,
            votre corps ramasse les éclats de la grenade qui a explosé et en fait de plus
            petites grenades. Il s&apos;agit des atomes d&apos;oxygène et de chlore restants. Votre
            organisme utilise ensuite ces deux éléments pour combattre les infections et les
            maladies (chlore/chlorure) et aider vos tissus à se rétablir plus rapidement après
            avoir été utilisés ou endommagés (oxygène). Ce double coup de poing du ClO<sub>2</sub> est 
            très puissant et ne laisse aucun déchet inutilisé derrière lui. Et tout cela vient
            du fait que vous mettez 3 atomes simples ensemble dans votre système
            corporel. En fait, il y en a 5,4 septillions dans une dose de 3 gouttes de dioxyde
            de chlore.
          </p>
          <br />
          <p className="text-justify">
            Les médecins et les scientifiques sont assez étonnés de la puissance de ce produit. C&apos;est pourquoi il
            existe des milliers de brevets sur l&apos;utilisation du dioxyde de chlore dans des secteurs comme
            l&apos;alimentation, la médecine, les désinfectants, la purification de l&apos;eau potable et le nettoyage. Dans un
            mélange correctement dilué, le dioxyde de chlore peut être utilisé en toute sécurité sur nos aliments,
            dans l&apos;approvisionnement en eau de nos maisons, sur notre peau et même dans notre corps.
            Assurez-vous simplement que vous avez le bon mélange avec de l&apos;eau...
          </p>
        
          <li className="list-none text-sky-300 hover:text-sky-500 active:text-sky-600 mt-4">
            <Link href="https://drive.google.com/file/d/1uqP0e33-bKEQblJ0MVfMlPRIrofXjscl/view" target="_blank" rel="noopener noreferrer">
              Ref: https://drive.google.com/file/d/1uqP0e33-bKEQblJ0MVfMlPRIrofXjscl/view
            </Link>
          </li>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
        </div>

      </div>

    </main>
  )
};
