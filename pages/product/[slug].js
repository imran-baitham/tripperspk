import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Datails from "./datailsSkeleton/datails";

function ProductScreen() {
  const [people, setData] = useState([]);
  const getData = () => fetch("/api/project").then((res) => res.json());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      getData().then((people) => setData(people));
    }, 1000);
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  const person = people.find((X) => X.slug === slug);
  if (!person) {
    return <Datails />;
  }
  return (
    <div className="w-full h-auto w-5/6 m-auto rounded-md">
      <dev key={person.id}>
        <div className=" mt-10">
          <div className="aspect-w-3 aspect-h-2">
            <img className="max-w-screen-xl h-96 object-cover shadow-lg rounded-lg" src={person.productApiUrl} alt="" />
            {/* <Image
              width={900}
              height={540}
              className="flex-shrink-0 mx-auto"
              src={testimage.src}
              alt="image not get from api"
            /> */}
          </div>
          <div className="text-lg leading-6 font-medium space-y-1">
            <h1 className="text-3xl font-bold py-4">{person.name}</h1>
            <p className="text-indigo-600 max-w-screen-md">
              {person.datails +
                person.datails +
                person.datails +
                person.datails +
                person.datails +
                person.datails}
            </p>
          </div>
          <div className="text-lg">
            <p className="text-gray-500 pt-10">
              Contact Number | <b>{person.number}</b>
            </p>
          </div>
        </div>
      </dev>
    </div>
  );
}

export default ProductScreen;
