
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { useWixClient } from "@/hooks"
import { wixClientServer } from "@/lib/wixClientServer"
import { Suspense, useEffect } from "react"

const HomePage = async () => {

  // const wixClient  = useWixClient();

  // const getProducts = async () => {
  //   const res = await wixClient.products.queryProducts().find();
  //   console.log(res)
  // }

  // useEffect(() => {
  //  getProducts()
  // }, [wixClient])
  
  const categoryID = process.env.FEATURED_CATEGORY_ID!;

  return (
    <div className='relative'>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
      <Suspense fallback={'loading'}>
      <ProductList categoryID={categoryID} limit={4}/>
      </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
      <Suspense fallback={'loading'}>
      <CategoryList/>
      </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
      {/* <ProductList/> */}
      </div>
    </div>
  )
}

export default HomePage