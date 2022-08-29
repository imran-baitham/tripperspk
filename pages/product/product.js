/* This example requires Tailwind CSS v2.0+ */
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import testimage from "../../public/images/nature.jpg";

export default function Product() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [people, setData] = useState(null);
  const getData = () => fetch("/api/project").then((res) => res.json());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      getData().then((people) => setData(people));
    }, 1000);
  }, []);

  if (!people) return <div className="text-black text-3xl">loading...</div>;
  // const skeletonMap = [0, 1, 2, 3, 4, 5, 6];
  // if (!people)
  //     return (
  //         <div className="text-white text-3xl h-screen">
  //             {skeletonMap.map(() => {
  //                 // eslint-disable-next-line react/jsx-key
  //                 return <h1>item parts</h1>;
  //             })}
  //         </div>
  //     );

  return (
    <div className="w-full h-auto w-5/6 m-auto rounded-md">
      <h1>Rents Nearby</h1>
      <ul
        role="list"
        className="p-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li
            key={person.id}
            className="col-span-1 bg-[#F8F8F8] flex flex-col text-center rounded-lg shadow divide-y divide-gray-200"
          >
            <Link href={`/product/${person.slug}`} passHref>
              <div className="flex-1 flex flex-col bg-red-300 cursor-pointer">
                <Image
                  width={100}
                  height={240}
                  className="flex-shrink-0 mx-auto"
                  src={testimage.src}
                  alt="image not get from api"
                />
              </div>
            </Link>
            <div className="text-left p-6">
              <h1 className="text-2xl font-[400]">{person.name}</h1>
              <p className="pt-1">{person.datails}</p>
              <div className="pt-2 flex items-center justify-between">
                <h2>{person.charge}</h2>
                <h2>{person.price}</h2>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <h2>{person.address}</h2>
                <h2>{person.time}</h2>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <h2>{person.rate}</h2>
                <button className="bg-red-300 py-2 px-5 rounded-md">
                  {person.status === "available" ? "available" : "order it"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
