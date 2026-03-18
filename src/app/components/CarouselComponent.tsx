import { Carousel } from "flowbite-react";
import Image from 'next/image';

export function Component() {
  return (
    <div className="h-112 sm:h-128 xl:h-160 2xl:h-192">
      <Carousel>
        <Image width={1000} height={500} src={"/fridge-images/Horizontal Cap Hill.jpg"} alt="A fridge and pantry set up by Seattle Community Fridge." />
        <Image width={1000} height={500} src={"/fridge-images/Estelitas 1.jpg"} alt="A fridge and pantry set up by Seattle Community Fridge." />
        <Image width={1000} height={500} src={"/fridge-images/Burien.jpg"} alt="A fridge and pantry set up by Seattle Community Fridge." />
        <Image width={1000} height={500} src={"/fridge-images/NBH 2.jpg"} alt="A fridge and pantry set up by Seattle Community Fridge." />
      </Carousel>
    </div>
  );
}