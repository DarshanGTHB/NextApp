import Link from "next/link";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (
   <div>
    <h1>Home</h1>
    <a href="/user">User</a>
    <Link href="/user">User link</Link>
    <ProductCard />
   </div>
  );
}
