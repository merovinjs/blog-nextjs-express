import { Inter } from "next/font/google";
import Featured from "../container/featured/Featured";
import Hero from "../container/hero/Hero";

const inter = Inter({ subsets: ["latin"] });
export default async function Home() {
  return (
    <div>
      <Hero />
      <Featured />
    </div>
  );
}
