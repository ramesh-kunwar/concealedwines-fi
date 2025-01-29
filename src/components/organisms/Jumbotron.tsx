import { Button } from "@/components/ui/button";
import Image from "next/image";
const Jumbotron = () => {
  return (
    <div className="container mx-auto flex items-center h-screen">
      <div className="grid grid-cols-2 items-center gap-8">
        <div className="z-10">
          <h1 className="text-6xl font-black">
            Bertrand Machard de Gramont Nuits-saint-Georges Les Terrasses des
            Vallerots 2014
          </h1>
          <p className="my-8">
            Berried and fresh reds are light or medium-bodied wines infused with
            the flavours and activity of fresh berries. You can discern lippik
            cranberry, raspberry and cherry notes in these wines. Crisp
            freshness makes them ideal for a variety of foods.
          </p>
          <Button className="bg-[#09090B] text-xl px-4 py-2  h-full ">
            Read More
          </Button>
        </div>
        <div className="-z-10">
          <Image
            src="/images/wine-header.webp"
            width={500}
            height={500}
            alt="Header Wine"
            className=" rotate-[30deg] -z-10 ml-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
