import react from "react";

export default function Title() {
    return (
        <div className="flex">

            <aside className='hidden lg:block ml-16 w-right'>
                <article className="artikkeliAsettelu">
                    <header>
                        <h2>
                            <span className="vasenReuna">Luetuimmat</span>
                        </h2>
                    </header>
                        <ol className= "margin15">
                            <li className="border-b border-divider1 py-16">
                                <div className="flex flex-col self-center w-full">
                                    <h3 className="">
                                        <span className="luetutOtsikko">
                                                Koronavirus
                                        <span className="divider jsx-736331785">|</span>
                                        </span>
                                                <span>
                                                    <span className="luetutTeksti">
                                                        Suomen sairaan­hoidon kapasiteetti uhkaa 
                                                        ylittyä pienemmillä potilas­määrillä kuin 
                                                        monissa muissa maissa – Eivätkä pullon­kaulana 
                                                        ole sairaala­sängyt tai tilat
                                                    </span>
                                                </span>
                                            </h3>
                                </div>
                            </li>
                            
                            <li classNAme="border-b border-divider1 py-16">
                            
                                            <h3>
                                                <span className="luetutOtsikko">
                                                    Suomen kieli
                                                </span>
                                                <span className="divider jsx-736331785">|</span>
                                                <span className="luetutTeksti">
                                                    Äidinkieltä opetetaan käsittämättömän 
                                                    vähän” – Lukutaito heikkenee nyt niin 
                                                    dramaattisesti, että konkariopettaja puhuu 
                                                    jo uudenlaisesta valtaeliitistä
                                                </span>
                                            </h3>
                                
                            </li>
                                    
                        </ol>
                    </article>
            </aside>
        </div>

    )
}