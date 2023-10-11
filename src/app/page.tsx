"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import { useState } from 'react';
import ResturatntCard from './components/ResturantCard'

export interface Product{
  productName:String;
}
export interface ProductList{
  products:Product[];
}

export default function Home() {
  const [product, setProduct] = useState<Product[]>(
    [{productName:"Product A"}, {productName:"Product B"}]
  );
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <Navbar/> 
    {/* NAVBAR */}
    <main>
      {/* HEADER */}
      <Header/>
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        <ResturatntCard products={product}/> 
        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
  </main>
</main>

  )
}
