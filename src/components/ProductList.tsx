import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  categoryID?: string | null;
  limit?: number;
};

const ProductList = async ({ categoryID, limit }: Props) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryID)
    .limit(limit || 20)
    .find();

  console.log(res);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product, index) => (
        <>
          <Link
            href={"/" + product.slug}
            key={index}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative h-80 w-full">
              <Image
                src={product.media?.mainMedia?.image?.url || '/product.png'}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image
                src={product.media.items[1].image?.url || '/product.png'}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price?.price}</span>
            </div>
            <div className="text-gray-500 text-sm">{product.description}</div>
            <button
              className="rounded-2xl w-max ring-1 ring-red-500 text-red-500
        py-2 px-4 text-xs hover:bg-red-500 hover:text-white"
            >
              Add to Cart
            </button>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ProductList;
