import { Metadata } from 'next';
import React from 'react';
import Image from "next/image";
import imgBg from "@/public/assets/images/science-bg.jpg";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "FDA",
    description: 'fda page',
};

export default function FdaInfo() {
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

            <div className="w-full h-full px-4 md:px-40 pt-24 animate-slice-appear">

                <h3 className="max-w-fit text-xl md:text-2xl font-bold mb-4">FDA 👎</h3>

                <div className="bg-gradient-to-r from-sky-500/10 to-red-500/10 px-10 py-8 rounded">

                    <p className="text-justify">
                        Le dioxyde de chlore et la Food and Drug Administration (FDA)
                        Au fil des ans, la vente et l&apos;utilisation du ClO<sub>2</sub> aux États-Unis ont été régulièrement examinées et
                        attaquées par la Food and Drug Administration américaine. Sur leur site Web, ils donnent des
                        avertissements sévères sur la dangerosité du produit. Elle ne fournit cependant aucune donnée
                        scientifique pour étayer ses affirmations de danger. 
                    </p>
                    
                    <p className='text-justify mt-4'>
                        Elle qualifie également d&apos;&quot;allégations trompeuses&quot;les témoignages concernant 
                        l&apos;utilisation du produit comme traitement de maladies. En outre, le site de
                        la FDA indique que &quot;la FDA n&apos;a pas connaissance de preuves scientifiques étayant la sécurité
                        ou l&apos;efficacité du MMS, malgré les affirmations selon lesquelles la solution est
                        antimicrobienne, antivirale et antibactérienne&quot;. Cela signifie qu&apos;ils n&apos;ont aucune idée de l&apos;innocuité
                        ou de l&apos;efficacité de cette solution. Ils laissent également entendre que le dioxyde de chlore est
                        prétendument un &quot;antimicrobien, antiviral et antibactérien&quot;.
                    </p>

                    <p className='text-justify mt-4'>
                        Cela me semble étrange qu&apos;un groupe qui travaille si étroitement avec des scientifiques et des
                        professionnels de la santé &quot;ne soit pas au courant&quot; de la science de la &quot;sécurité ou de l&apos;efficacité&quot; du
                        dioxyde de chlore. En fait, si vous vous rendez sur le site de brevets en ligne google.patents.com,
                        vous pouvez rechercher les mots-clés suivants de ce qui a été approuvé comme processus ou produit
                        breveté. Ces brevets sont généralement déposés par des sociétés pharmaceutiques ou des
                        scientifiques afin de délimiter juridiquement un processus ou un produit. Ils peuvent en être
                        propriétaires. La raison principale est qu&apos;ils peuvent faire de l&apos;argent avec leur concept. (À propos, il
                        faut compter jusqu&apos;à 30 000 dollars pour faire breveter un procédé ou un produit).
                        Recherches suggérées sur Patents.google.com :
                    </p> 
                    
                    <ul className="mx-8 my-4">
                        <li className="list-disc my-1">
                            <p className='text-justify'>Dioxyde de chlore FDA - 21 929 résultats</p>
                        </li>

                        <li className="list-disc my-1">
                            <p className='text-justify'>Dioxyde de chlore médical - 218 428 résultats</p>
                        </li>

                        <li className="list-disc my-1">
                            <p className='text-justify'>Dioxyde de chlore antimicrobien - 114 125 résultats</p>
                        </li>

                        <li className="list-disc my-1">
                            <p className='text-justify'>Dioxyde de chlore Antiviral - 41 895 résultats</p>
                        </li>

                        <li className="list-disc my-1">
                            <p className='text-justify'>Dioxyde de chlore antibactérien - 130 515 résultats</p>
                        </li>

                    </ul>
 
                    <p className="text-justify">
                        J&apos;invite également toute personne à prendre le temps de parcourir ces brevets. Essayez de savoir qui
                        les dépose, à quoi ils servent, et si ce processus/produit est destiné à entrer en contact avec des
                        êtres humains ou à être utilisé dans notre corps. Il existe des milliers d&apos;utilisations approuvées du
                        dioxyde de chlore qui seront utilisées à la fois sur et à l&apos;intérieur du corps.
                    </p>
                    <br />
                    <p className="text-justify">
                        J&apos;ai également une courte liste de brevets que j&apos;ai recueillis sur le dioxyde de chlore que je vais
                        partager ci-dessous dans ces liens.
                    </p>

                    <ul className='my-4'>
                        <li className="list-disc text-sky-300 hover:text-sky-500 active:text-sky-600 ml-8 mb-2">
                            <Link href="https://drive.google.com/file/d/1aafBvcfC6fLyfiLes5dcyHS7vZzzFjPk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Pour traiter les tumeurs (à l&apos;intérieur du corps humain)
                            </Link>
                        </li>
                        
                        <li className="list-disc text-sky-300 hover:text-sky-500 active:text-sky-600 ml-8 mb-2">
                            <Link href="https://drive.google.com/file/d/18rCGOXMCvCBIEjLDLk7sP5NJczIA56jM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Traiter la dysenterie (à l&apos;intérieur du corps humain)
                            </Link>
                        </li>

                        <li className="list-disc text-sky-300 hover:text-sky-500 active:text-sky-600 ml-8 mb-2">
                            <Link href="https://drive.google.com/file/d/1F1YJEKj9JGFBWHe4_pnPg8UZCuBPDvls/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Traiter le cancer (sur et dans le corps humain)
                            </Link>
                        </li>

                        <li className="list-disc text-sky-300 hover:text-sky-500 active:text-sky-600 ml-8 mb-2">
                            <Link href="https://drive.google.com/file/d/1_2fl19whExs4omXGSUFa4R5rkDqviJqt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Traiter la SLA (dans le corps humain)
                            </Link>
                        </li>

                        <li className="list-disc text-sky-300 hover:text-sky-500 active:text-sky-600 ml-8 mb-2">
                            <Link href="https://drive.google.com/file/d/1KMhtYpox_TOULugCbnEf31c2vHdnl4ZZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Traiter la sinusite (dans le corps humain)
                            </Link>
                        </li>

                        <li className="list-disc text-sky-300 hover:text-sky-500 active:text-sky-600 ml-8">
                            <Link href="https://drive.google.com/file/d/1Y_IUTDSspWgcI4HSa0swelx6FKhiuwN_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Traitement des démangeaisons vaginales (sur et dans le corps humain)
                            </Link>
                        </li>
                    </ul>

                    <p className="text-justify">
                        Ces brevets n&apos;ont pas été déposés par des groupes de médecine alternative ou des individus qui
                        veulent simplement explorer la science pour le plaisir. Ils ont été déposés par des sociétés
                        pharmaceutiques comme Vortech Inc, Synox Pharma et Frontier Pharmaceutical Inc. Ces sociétés
                        obtiennent clairement ces brevets pour l&apos;argent et elles savent ce que le dioxyde de chlore peut faire
                        pour améliorer leurs résultats. Pourtant, la FDA prétend ne pas être &quot;au courant&quot; de tout cela.
                        Ma réponse courte aux avertissements du site web de la FDA est qu&apos;ils ne sont ni stupides ni
                        ignorants. Ils sont en fait très malins lorsqu&apos;ils essaient de faire peur aux gens à propos du dioxyde de
                        chlore. Cependant, je ne pense pas qu&apos;ils soient honnêtes lorsqu&apos;ils disent que ce produit n&apos;est pas
                        sûr. Ils essaient d&apos;éloigner les gens du dioxyde de chlore pendant que d&apos;autres peuvent profiter des
                        avantages qu&apos;il peut offrir. Dans ce cas, les &quot;autres&quot; sont les sociétés pharmaceutiques. Il est
                        également possible pour les grandes entreprises de créer un brevet (ou d&apos;en acheter un à quelqu&apos;un)
                        juste pour pouvoir le cacher afin que les gens ne sachent pas qu&apos;il existe un moyen meilleur et moins
                        cher d&apos;utiliser quelque chose de bien. Cela est également courant.
                    </p>
                    <br />
                    <p className="text-justify">
                        Maintenant, pourquoi une agence de surveillance gouvernementale mettrait-elle en garde le public
                        avec des mots aussi forts qu&apos;elle le fait pour effrayer tout le monde ? Je vais vous donner un peu plus
                        de ma réponse courte à cette question. Au cours des 40 dernières années, 9 des 10 derniers
                        commissaires de la FDA sont allés travailler pour des entreprises pharmaceutiques après avoir
                        occupé leur poste de directeur. Pour ceux qui ont fait des recherches sur ce problème, il est de
                        notoriété publique qu&apos;il existe une relation incestueuse entre les deux groupes de dirigeants. Les
                        éléments clés de cette relation sont l&apos;argent, l&apos;approbation des produits pour la commercialisation des
                        médicaments et l&apos;interdiction pour les personnes autres que les sociétés pharmaceutiques de
                        proposer des solutions peu coûteuses aux problèmes de santé. Ce n&apos;est pas une bonne chose, étant
                        donné que la FDA est censée avoir un droit de regard sur cette industrie de 1,25 trillion de dollars et
                        sur sa capacité à promouvoir et à vendre des médicaments. Il est encore pire de dire activement au
                        public de se tenir à l&apos;écart d&apos;un produit à base de sel minéral qui est sûr (s&apos;il est utilisé correctement),
                        peu coûteux et même plus efficace que de nombreux médicaments pharmaceutiques disponibles. À
                        mon avis, ils échangent de l&apos;argent contre des vies et une qualité de vie. En guise de consolation, je
                        me sens toujours bien de savoir que le dioxyde de chlore fonctionne.
                    </p>
            
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-sky-500 to-red-500 my-10 rounded">
                </div>
            </div>
        </main>
    )
}