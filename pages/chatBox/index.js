import React from "react";
import Header from "../../components/header/header";
import Category from "../../components/category/category";

function ChatBox() {
  return (
    <div>
      <Header />
      <Category />
      <div className="flex m-auto  justify-center mt-12 aligin-center ">
        <div className="w-[778.33px] border-[3px] h-[599.44px] bg-[#FBFBFB] ">
          <h2 className="font-bold ">Inbox</h2>
        </div>
        <hr />
        <div className="w-[778.33px] border-[3px] h-[599.44px] bg-[#FBFBFB] ">
          <h2>Inbox</h2>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
