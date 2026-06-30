import { Carousel } from "flowbite-react";
import Image from 'next/image';

export function Component() {
  return (
    <div className="h-[18rem] sm:h-[25rem] md:h-[32rem] lg:h-[30rem] xl:h-[39rem] 2xl:h-[48rem] w-full">
      <Carousel className="h-full">
        <Image priority width={800} height={0} sizes="100vw, (min-width:48rem) 50vw" src={"/slideshow/CapHill.png"} alt="Capitol Hill fridge." />
        <Image width={800} height={0} sizes="100vw, (min-width:48rem) 50vw" src={"/slideshow/Estelitas.png"} alt="Estelitas fridge in Central District." />
        <Image width={800} height={0} sizes="100vw, (min-width:48rem) 50vw" src={"/slideshow/Phinney.png"} alt="Phinney Ridge fridge." />
        <Image width={800} height={0} sizes="100vw, (min-width:48rem) 50vw" src={"/slideshow/Burien.png"} alt="Burien fridge." />
      </Carousel>
    </div>
  );
}
