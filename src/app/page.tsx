'use client';
import React, { useState } from 'react';
import Navigation from './components/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Component as Carousel } from './components/CarouselComponent'

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
	         <Carousel />
          </div>
          <div className="w-full lg:w-1/3 mx-auto text-black text-xl sm:text-3xl">
              <p className="text-gray-700">
                  Seattle Community Fridge is a mutual aid group that provides refrigerators and pantries in order to combat food insecurity.
		              Click <Link className="text-blue-500" href="/locations">here</Link> for a list of our fridges.
              </p>
          </div>
        </div>
      </main>
    </div>
  );
}
