import react from "react";
import kuva1 from './kuva1.jpeg'

export default function Juttu(){
  return(
    

    <section className="flex max-w-main lg\:w-main">
        <div className="flex border-divider-1">
            <article className="artikkeliAsettelu">
                <h1 className=" article-title-40 mx-16 mb-8">
                    <span>
                        STM ohjeisti oireettomia käyttämään 
                        nimenomaan oireettomille tarkoitettua 
                        kotitestiä – Mistä tietää, että valitsee 
                        oikeanlaisen testin?
                    </span>
                </h1>
                <p class="article-ingress-20 mb-16 mx-16">
                    STM ohjeistaa oireettomia käyttämään nimenomaan 
                    oireettomille tarkoitettuja kotitestejä. 
                    Kansalaiselle tiedon löytäminen voi olla vaikeaa.
                    
                </p>
                <div className="margin15">
                    <img src={kuva1}/>
                </div>

            </article>
        </div>
    </section>
  )
}