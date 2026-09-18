import { useTranslations } from 'next-intl';
import Partner from './Partner';

export default function About() {
    const pics = [
        "https://storage.googleapis.com/seattle-community-fridge/home/20240814_081814.jpg",
        "https://storage.googleapis.com/seattle-community-fridge/home/IMG_20230825_121830_527.jpg",
        "https://storage.googleapis.com/seattle-community-fridge/home/e7eb6214-dae2-48e9-9cf3-b3bdee93635d.jpg"
      ]
    const t = useTranslations('about-us');
    return (
        <section className="text-center">
            <h1>{t('title')}</h1>
            <p className="text-black text-xl w-2/3 mx-auto my-8">
                {t('about-1')}
            </p>
            <p className="text-black text-xl w-2/3 mx-auto my-8">
                {t('about-2')}
            </p>
            <p className="text-black text-xl w-2/3 mx-auto my-8">
                {t('about-3')}
            </p>
            <p className="text-black text-xl w-2/3 mx-auto my-8">
                {t('about-4')}
            </p>
            <div className="sm:flex sm:space-x-4 space-y-3 sm:space-y-0 mt-4 px-6 justify-center">
                {
                  pics.map((pic: string, i: number) => (
                    <div key={pic} className="w-full sm:w-1/4 overflow-x-hidden">
                      <img src={pic} key={pic} alt={i.toString()}></img>
                    </div>
                  )

                  )
                }
            </div>
            <div>
                <h2 className="text-4xl sm:text-6xl mt-14 font-JosefinSans text-blue-500">
                    {t('mutual-aid-header')}
                </h2>
                <p className="text-black text-xl w-2/3 mx-auto my-8">
                    {t.rich('mutual-aid', {
                        "bold": (chunks) => <span className="font-bold">{chunks}</span>
                    })}
                </p>
            </div>
            <div>
                <h2 className="text-4xl sm:text-6xl mt-14 font-JosefinSans text-blue-500">
                    {t('friends-header')}
                </h2>
                <div className="w-2/3 mx-auto flex flex-wrap gap-2 justify-between items-center">
                    <Partner image={"/partners/BallardFoodBank.png"} name="Ballard Food Bank" url="https://www.ballardfoodbank.org/" />
                    <Partner image={"/partners/UDFoodBank.png"} name="University Food Bank" url="https://www.udistrictfoodbank.org/" />
                    <Partner image={"/partners/FreeFoodForAll.png"} name="Free Food For All" url="https://www.freefoodforall.org/" />
                    <Partner image={"/partners/QueerTheLand.png"} name="Queer The Land" url="https://queertheland.com/" />
                    <Partner image={"/partners/EstelitasLibrary.png"} name="Estelita's Library" url="https://estelitaslibrary.org/" />
                    <Partner image={"/partners/MagpieThrift.png"} name="Magpie Thrift" url="https://www.magpiethriftseattle.com/" />
                    <Partner image={"/partners/GulletStuffer.png"} name="Gullet Stuffer" url="https://www.gulletstuffer.com/" />
                    <Partner image={"/partners/ImpactSalish.png"} name="Impact | Salish Sea Elementary" url="https://www.impactps.org/salishsea/" />
                    <Partner image={"/partners/SweetPeaBakery.png"} name="Sweetpea's Cakes" url="https://www.cakesbysweetpea.com/" />
                    <Partner image={"/partners/EpiphanySchool.png"} name="Epiphany School" url="https://www.epiphanyschool.org/" />
                    <Partner image={"/partners/QueenAnneFarmersMarket.gif"} name="Queen Anne Farmers Market" url="https://qafm.org/" />
                    <Partner image={"/partners/LFFC Logo.svg"} name="Little Free Failure of Capitalism" url="https://lffc.us/" />
                    <Partner image={"/partners/50thStreetFreePantry.jpg"} name="50th Street Free Pantry" url="https://www.instagram.com/50thstreetfreepantry" />
                    <Partner image={"/partners/EverettFreePantry.jpg"} name="Everett Free Pantry" url="https://www.instagram.com/everettfreepantry/" />
                    <Partner image={"/partners/SuperJockNJill.png"} name="Super Jock 'N Jill" url="https://www.superjocknjill.com/" />
                    <Partner image={"/partners/FoodNotBombs.png"} name="Food Not Bombs" url="https://seattlefoodnotbombs.org/" />
                    <Partner image={"/partners/StJosephParish.png"} name="St. Joseph Parish" url="https://www.stjosephparish.org/" />
                    <Partner image={"/partners/WoodlandParkChurch.png"} name="Woodland Park Presbyterian Church" url="https://www.wppcseattle.org/" />
                    <Partner image={"/partners/StJohnUnitedCoCreate.png"} name="St. John United Lutheran Church" url="https://stjohnunited.org/" />
                </div>
            </div>
            <h2 className="text-4xl sm:text-6xl mt-20 font-JosefinSans text-blue-500">
                {t('privacy-statement-header')}
            </h2>
            <p className="text-black text-xl w-2/3 mx-auto my-8">
                {t('privacy-statement')}
            </p>
        </section>
    )
}