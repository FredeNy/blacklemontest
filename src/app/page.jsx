import Image from "next/image";
import Product from "./components/Product";
import Ingredients from "./components/Ingredients";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (
    <main>
      <section>
        <div>
          <Product/>
        </div>
        <div>
          <Ingredients/>
        </div>
        <div>
        <h2 className='text-center text-2xl text-Textcolor'>YOU MAY ALSO LIKE</h2>
        <div className="md:grid grid-cols-3">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
        </div>
      </section>
    </main>
  )
}
