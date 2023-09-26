import Banner from '@/Components/Banner'
import Products from '@/Components/Products'


import Image from 'next/image'

const getData =async()=>{
const res = await fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
if(!res.ok){
  throw new Error('Failed to fetch data')
}
return res.json()
}

// async function getData() {
//   const res = await fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

export default async function Home() {
  const product = await getData();
  console.log(product);
  
  
  

  return (
  <>
  <Banner/>
  <Products  product={product} />
  </>
  )
}
