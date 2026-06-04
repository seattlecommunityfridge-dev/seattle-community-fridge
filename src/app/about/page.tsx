import Partner from './Partner';

export default function About() {
    const pics = [
        "https://storage.googleapis.com/seattle-community-fridge/home/20240814_081814.jpg",
        "https://storage.googleapis.com/seattle-community-fridge/home/IMG_20230825_121830_527.jpg",
        "https://storage.googleapis.com/seattle-community-fridge/home/e7eb6214-dae2-48e9-9cf3-b3bdee93635d.jpg"
      ]
    return (
        <section className="text-center">
            <h1>About SEATTLE COMMUNITY FRIDGE</h1>
            <p className="text-black text-xl w-2/3 mx-auto my-8">
                Seattle Community Fridge is a 501(c)(3) mutual aid group whose work strives to curb food insecurity on occupied Duwamish land 
                by providing healthy food in our fridges and pantries, available directly to communities. Seattle Community Fridge believes that food scarcity is 
                a myth and that <span className="font-bold">all people need and deserve access to food.</span> With inspiration and support from groups such as LA Community 
                Fridge and In Our Hearts NYC, SCF was created in July 2020. The group is composed of community members and operates 
                non-hierarchically with group consensus for ideas and decision-making. We have no office, no overhead, and no staff; all of us are community members just like you and the people we serve.
                All our efforts and the donations we receive are dedicated to ensuring that our neighbors are fed.
            </p>
            <p className="text-black text-xl w-2/3 mx-auto my-8">
                Seattle Community Fridge does not discriminate against any person on the basis of race, color, religious affiliation, sex, age, national origin, marital status, sexual orientation, disability, or gender identity or expression.
            </p>
            <div className="sm:flex sm:space-x-4 space-y-3 sm:space-y-0 mt-4 px-6 justify-center">
                {
                  pics.map((pic: string, i: number) => (
                    <div key={i.toString()} className="w-full sm:w-1/4 overflow-x-hidden">
                      <img src={pic} key={i.toString()} alt={i.toString()}></img>
                    </div>
                  )

                  )
                }
            </div>
            <div>
                <h1 className="text-3xl sm:text-6xl mt-14 font-JosefinSans text-blue-500">What is Mutual Aid?</h1>
                <p className="text-black text-xl w-2/3 mx-auto my-8">
                    Mutual aid is solidarity, not charity.  <span className="font-bold">Everyone looks out for one another,</span> gives what they can, and takes what they need.
                    Mutual aid is a <span className="font-bold">community-led solution</span> for meeting those needs and filling the gaps. Mutual Aid acknowledges the fact that well-intentioned charity work can often 
                    lead to paternalism and exacerbation of the inequities underlying poverty and hunger. It actively seeks to avoid this trap.
                </p>
            </div>
            <div>
                <h1 className="text-3xl sm:text-6xl mt-14 font-JosefinSans text-blue-500">Friends, Allies, and Supporters</h1>
                <div className="w-2/3 mx-auto flex flex-wrap gap-2 justify-between items-center">
                    <Partner image={"/partners/BallardFoodBank.png"} name="Ballard Food Bank" url="https://www.ballardfoodbank.org/" />
                    <Partner image={"/partners/UDFoodBank.png"} name="University Food Bank" url="https://www.udistrictfoodbank.org/" />
                    <Partner image={"/partners/FreeFoodForAll.png"} name="Free Food For All" url="https://www.freefoodforall.org/" />
                    <Partner image={"/partners/FoodNotBombs.png"} name="Food Not Bombs" url="https://seattlefoodnotbombs.org/" />
                    <Partner image={"/partners/QueerTheLand.png"} name="Queer The Land" url="https://queertheland.org/" />
                    <Partner image={"/partners/EstelitasLibrary.png"} name="Estelita's Library" url="https://estelitaslibrary.org/" />
                    <Partner image={"/partners/MagpieThrift.png"} name="Magpie Thrift" url="https://www.magpiethriftseattle.com/" />
                    <Partner image={"/partners/GulletStuffer.png"} name="Gullet Stuffer" url="https://www.gulletstuffer.com/" />
                    <Partner image={"/partners/ImpactSalish.png"} name=" Impact | Salish Sea Elementary" url="https://www.impactps.org/salishsea/" />
                    <Partner image={"/partners/SweetPeaBakery.png"} name="Sweetpea's Cakes" url="https://www.cakesbysweetpea.com/" />
                    <Partner image={"/partners/EpiphanySchool.png"} name="Epiphany School" url="https://www.epiphanyschool.org/" />
                    <Partner image={"/partners/SuperJockNJill.png"} name="Super Jock 'N Jill" url="https://www.superjocknjill.com/" />
                    <Partner image={"/partners/StJosephParish.png"} name="St. Joseph Parish" url="https://www.stjosephparish.org/" />
                    <Partner image={"/partners/WoodlandParkChurch.png"} name="Woodland Park Presbyterian Church" url="https://www.wppcseattle.org/" />
                    <Partner image={"/partners/StJohnUnitedCoCreate.png"} name="St. John United Lutheran Church" url="https://stjohnunited.org/" />
                    <Partner image={"/partners/QueenAnneFarmersMarket.gif"} name="Queen Anne Farmers Market" url="https://qafm.org/" />
                    <Partner image={"/partners/LFFC Logo.svg"} name="Little Free Failure of Capitalism" url="https://lffc.us/" />
                    <Partner image={"/partners/50thStreetFreePantry.jpg"} name="50th Street Free Pantry" url="https://www.instagram.com/50thstreetfreepantry" />
                    <Partner image={"/partners/EverettFreePantry.jpg"} name="Everett Free Pantry" url="https://www.instagram.com/everettfreepantry/" />
                </div>
            </div>
        </section>
    )
}