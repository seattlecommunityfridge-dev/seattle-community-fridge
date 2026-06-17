import { Carousel } from "flowbite-react";
import Image from 'next/image';

export function Component() {
  return (
    <div className="h-112 sm:h-128 xl:h-160 2xl:h-192">
      <Carousel>
        <Image width={1000} height={0} src={"/slideshow/CapHill.png"} alt="Capitol Hill fridge." />
        <Image width={1000} height={0} src={"/slideshow/Estelitas.png"} alt="Estelitas fridge in Central District." />
        <Image width={1000} height={0} src={"/slideshow/Phinney.png"} alt="Phinney Ridge fridge." />
        <Image width={1000} height={0} src={"/slideshow/Burien.png"} alt="Burien fridge." />
      </Carousel>
    </div>
  );
}