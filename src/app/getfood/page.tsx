import Image from 'next/image';
import { Button } from '@headlessui/react'

export default function GetFood() {
    return (
        <section className="h-full w-full">
            <h1>Getting Food</h1>
            <div className="block lg:flex w-10/12 mx-auto">
                <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl">
                    <ul className="space-y-6 mt-14 lg:mt-4">
                        <li>Please come to our fridge spaces to get food!</li>
                    </ul>

                <Button as="a" className="flex items-center justify-center border-black border bg-blue-500 w-full h-100 my-auto rounded-lg text-black" href="/locations" title="Fridge Map">
                  <div className="grid grid-cols-1 justify-items-center">
                    <div><Image width={200} height={0} src="/fridge_map_icon.png" id="Fridge Map" alt="Fridge Map" /></div>
                    <div>Fridge Locations</div>
                  </div>
                </Button>
                </div>
            </div>
            <h1 className="text-3xl sm:text-6xl mt-8 font-SauceTomato text-blue-500">FAQ</h1>
            <div>
                <h2 className="question">What time or day can I come by for food?</h2>
                <ul className="answer">
                    <li className="mb-6">Phinney Ridge, Dunlap/Rainier Beach, North Beacon Hill, Capitol Hill Fridge, Burien, and Estelita’s Library fridges and pantries are open 24/7, all day/everyday! Come by these fridges any time or day to get food! While we cannot guarantee when there will be food available, you can come by any time or day to check.</li>
                    <li>LGBTQ+ Center Fridge:
                        <ul>
                            <li>Tuesday 1PM to 6PM (Closing at 4PM on the first Tuesday of each month)</li>
                            <li>Wednesday-Friday 10AM to 6PM</li>
                            <li>Saturday 9AM to 5PM</li>
                        </ul>
                    </li>
                </ul>
                <h2 className="question">Will there always be food in the fridge?</h2>
                <p className="answer">
                    We strive to keep the fridges stocked! However, we cannot guarantee the fridges will be full or always have food and pantry items available. We work to keep the fridges stocked through community contributions and help from food banks. Thursdays and Saturdays are our typical delivery days to bring food to the fridges from local food banks (please note this is subject to change, but we will do our best to keep fridges full!). 
                </p>
                <h2 className="question">What kind of food will I find?</h2>
                <p className="answer">
                    Community members and food drop offs include all kinds of food such as fruits, vegetables, packaged sandwiches or frozen food. We cannot guarantee that there is a certain food available, but if you need something or would like to see more of a certain type of food, please use the whiteboard we have inside our pantries to leave us a note and let us know! We will do our best to provide those items.
                </p>
                <h2 className="question">Where does the food come from?</h2>
                <p className="answer">
                    Food and pantry items come from community volunteers, neighborhood members and friends! Additionally, we receive donations from local food banks and schools to bring food to fill the fridges.
                </p>
                <h2 className="question">How much food can I take?</h2>
                <p className="answer">
                    We do not control how much food you take from the fridge and pantry. We invite community members to take what you need. With that, please be mindful and leave some for others so that we can all benefit from the shared community fridge.
                </p>
            </div>
        </section>
    )
}
