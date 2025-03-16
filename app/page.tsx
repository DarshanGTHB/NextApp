import Link from "next/link";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (
   <div className="p-5 bg-sky-400 ">
   {/* <div className="p-5 bg-sky-400 text-white hover:scale-105 transform"> */}
    <h1>Home</h1>
    <a href="/user">User</a>
    <Link href="/user">User link</Link>
    <ProductCard />
   </div>
  );
}
