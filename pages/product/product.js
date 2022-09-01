import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import testimage from "../../public/images/nature.jpg";
import starsImg from "../../public/images/imageStar.png";
import ProductSkeleton from "./productSkeleton/Skeleton";
import { Badge } from "@mantine/core";

export default function Product() {
  const [people, setData] = useState(null);
  const getData = () => fetch("/api/project").then((res) => res.json());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      getData().then((people) => setData(people));
    }, 5000);
  }, []);

  const skeletonMap = [0, 1, 2, 3, 4, 5, 6, 7];
  if (!people)
    return (
      <div className="w-full h-auto w-5/6 m-auto rounded-md">
        <ul
          role="list"
          className="my-24 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {skeletonMap.map(() => {
            // eslint-disable-next-line react/jsx-key
            return <ProductSkeleton />;
          })}
        </ul>
      </div>
    );

  return (
    <div className="w-full h-auto w-5/6 m-auto rounded-md">
      <h1 className="font-black text-black text-4xl leading-[55px] text-left pt-14 pb-9">
        Rents Nearby
      </h1>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li
            key={person.id}
            className="col-span-1 bg-[#F8F8F8] flex flex-col text-center rounded-lg shadow divide-y divide-gray-200"
          >
            <Link href={`/product/${person.slug}`} passHref>
              <div className="flex-1 flex flex-col bg-red-300 cursor-pointer">
                <img
                  className="flex-shrink-0 mx-auto h-64 w-96 bg-gray-200"
                  src={person.productApiUrl}
                  alt="image not get from api"
                />
              </div>
            </Link>
            <div className="text-left p-6">
              <Link href={`/product/${person.slug}`} passHref>
                <h3 className="text-2xl font-[300] font-semibold hover:underline cursor-pointer">
                  {person.name}
                </h3>
              </Link>
              <p className="pt-1 font-poppins">{person.datails}</p>
              <div className="pt-2 flex items-center justify-between font-semibold">
                <h2>{person.charge}</h2>
                <h2>{person.price}</h2>
              </div>
              <div className="pt-2 flex items-center justify-between  ">
                <h2>{person.address}</h2>
                <h2>{person.time}</h2>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center aligin-center">
                  <img
                    className="w-[105px]"
                    src={starsImg.src}
                    alt="image not get from api"
                  />
                  <h2 className="ml-2">{person.rate}</h2>
                </div>
                <Badge size="lg" radius="xs" variant="outline">
                  {person.status === "available" ? "Available" : "Booked"}
                </Badge>
                {/* <button className="bg-[#0047FF] text-white py-1 px-4 rounded-md">
                  {person.status === "available" ? "available" : "order it"}
                </button> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
