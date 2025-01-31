import Jumbotron from "@/components/organisms/Jumbotron";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <div className="md:mt-40">
        <h2 className="text-5xl text-center font-black">
          Ambitious Wine Importer
        </h2>
        <div className="flex justify-center text-center">
          <div>
            <h3 className="text-2xl border-b border-black inline-block text-center my-6">
              Quality Is More Important Than Quantity
            </h3>
            <div>
              <Link
                href={"#"}
                className="text-xl text-center inline-block bg-black text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-black hover:border border-black hover:scale-[0.9] transition-all duration-100 ease-in-out "
              >
                Viw All Wines
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-64"></div>
    </div>
  );
}
