'use client';
import React from 'react';
import { Button } from '@headlessui/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Component as Carousel } from './components/CarouselComponent'

export default function Home() {
  const t = useTranslations("main");
  return (
    <div>
      <main className="text-center">
        <h1>{t('title')}</h1>
        <div className="block lg:flex w-10/12 mx-auto">
          <div className="w-full my-auto lg:w-1/2 lg:mr-4">
	         <Carousel />
          </div>
          <div className="w-full lg:w-1/2 lg:ml-4 text-black text-xl sm:text-3xl">
            <p className="text-gray-700">
              {t('overview')}
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
              <div className="row-span-2">
                <Button as="a" className="flex items-center justify-center border-black border bg-blue-500 w-full h-full my-auto rounded-lg text-black" href="/locations" title="Fridge Map">
                  <div className="grid grid-cols-1 justify-items-center">
                    <div><Image width={200} height={0} src="/fridge_map_icon.png" id="Fridge Map" alt="Fridge Map" /></div>
                    <div>{t('fridge-locations-button')}</div>
                  </div>
                </Button>
              </div>
              <Button as="a" href="/getfood" className="flex items-center justify-center border-black border bg-teal-500 w-full h-full my-auto rounded-lg text-black">
                {t('get-food-button')}
              </Button>
              <Button as="a" className="flex items-center justify-center col-start-2 border-black border bg-green-500 w-full h-full my-auto rounded-lg text-black" href="/volunteer">
                {t('get-involved-button')}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
