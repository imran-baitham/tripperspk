import React from "react";
import Header from "../../components/header/header";
import Category from "../../components/category/category";
import SmallBar from "../../components/childfooter/footer";

export default function chatbox() {
  return (
    <div>
      <Header />
      <Category />
      <div className="w-full h-auto w-5/6 m-auto rounded-md">
        <div className="flex-1 relative z-0 flex overflow-hidden my-10">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none mr-3 border border-1">
            <div className="py-6 px-5 border-b-2">
              <h1 className="font-black text-black text-1xl">Inbox</h1>
            </div>
            <div className="h-96"></div>
            <input
              type={"text"}
              placeholder="Write your review"
              className={"mt-14 w-full border-t-2 p-4 outline-none"}
            />
          </main>
          <aside className="relative xl:flex xl:flex-col flex-shrink-0 w-96 overflow-y-auto">
            <div className="border border-1 p-5 h-full">
              <h1 className="font-black text-black text-3xl leading-[55px] text-left pt-2 pb-3">
                Chats
              </h1>
              <div className="relative flex items-center">
                <div>
                  <img
                    className="h-14 w-14 rounded-full mr-3"
                    src={
                      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                    }
                    alt="image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {"imran baitham"}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {"Member since july 2022"}
                    </p>
                  </a>
                </div>
              </div>

              <div className="relative flex items-center mt-3">
                <div>
                  <img
                    className="h-14 w-14 rounded-full mr-3"
                    src={
                      "https://www.imagesplatform.com/imgs/blue-circle-on-instagram.jpg"
                    }
                    alt="image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {"Sara Khan"}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {"Member since 2020"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="pt-[13px]">
        <SmallBar />
      </div>
    </div>
  );
}
