'use client';
import React, { useState } from 'react';
import { Button } from '@headlessui/react'
import Navigation from './components/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const pics = [
    "https://storage.googleapis.com/seattle-community-fridge/home/20240814_081814.jpg",
    "https://storage.googleapis.com/seattle-community-fridge/home/IMG_20230825_121830_527.jpg",
    "https://storage.googleapis.com/seattle-community-fridge/home/IMG_20241114_115001_203.webp",
    "https://storage.googleapis.com/seattle-community-fridge/home/e7eb6214-dae2-48e9-9cf3-b3bdee93635d.jpg"
  ]

  const pic = "https://storage.googleapis.com/seattle-community-fridge/home/200820_de_communityfridge_hero_teaser.jpg.jpg";

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <main className="text-center">
        <h1>SEATTLE COMMUNITY FRIDGE</h1>
        <div className="block lg:flex w-10/12 mx-auto">
          <div className="w-full my-auto lg:w-1/2">
            <Image width={500} height={0} src={"/fridge-images/scf-frontpage.jpg"} alt="A fridge and pantry set up by Seattle Community Fridge." />
          </div>
          <div className="w-full lg:w-1/2 text-black text-xl sm:text-3xl">
            <p className="text-gray-700">
              Seattle Community Fridge is a mutual aid network of eight refrigerator/pantry sites around the City, staffed solely by volunteers. We acquire refrigerators, build and maintain site shelters, and source and deliver food contributions to combat food insecurity among our neighbors and food waste in the community.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
              <div className="row-span-2">
                <Button as="a" className="flex items-center justify-center border-black border bg-blue-500 w-full h-full my-auto rounded-lg text-black" href="/locations" title="Fridge Map">
                  <div className="grid grid-cols-1 justify-items-center">
                    <div><Image width={200} height={0} src="/fridge_map_icon.png" id="Fridge Map" alt="Fridge Map" /></div>
                    <div>Fridge Locations</div>
                  </div>
                </Button>
              </div>
              <Button as="a" href="/getfood" className="flex items-center justify-center border-black border bg-teal-500 w-full h-full my-auto rounded-lg text-black">
                Get Food
              </Button>
              <Button as="a" className="flex items-center justify-center col-start-2 row-start-2 border-black border bg-green-500 w-full h-full my-auto rounded-lg text-black" href="/volunteer">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
