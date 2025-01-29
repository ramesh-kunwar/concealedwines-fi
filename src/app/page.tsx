import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex items-center h-screen">
      <div className="flex justify-between">
        <div>
          <h1 className="text-6xl font-black">
            Bertrand Machard de Gramont Nuits-saint-Georges Les Terrasses des
            Vallerots 2014
          </h1>
          <p>
            Berried and fresh reds are light or medium-bodied wines infused with
            the flavours and activity of fresh berries. You can discern lippik
            cranberry, raspberry and cherry notes in these wines. Crisp
            freshness makes them ideal for a variety of foods.
          </p>
          <Button>Click me</Button>
        </div>
        <div>
          <Image
            src="/wine-header.jpg"
            width={500}
            height={500}
            alt="Header Wine"
          />
        </div>
      </div>
    </div>
  );
}
