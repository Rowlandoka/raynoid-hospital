import React from "react";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed flex h-screen w-24 flex-col items-center justify-between bg-[#f1edfd] py-4">
        <div className="flex flex-col items-center">
          <Image
            src="/images/user.png"
            width={50}
            height={50}
            alt="logo"
            className="cursor-pointer rounded-full bg-white p-1"
          />
          <p className="text-center text-xs font-semibold text-blue-950">
            Sarah Smith Admin
          </p>
          <div className="mt-8 cursor-pointer rounded-lg bg-white px-2 py-2 text-sm text-blue-950 hover:scale-105">
            <RxDashboard />
          </div>
          <div className="cursor-pointer py-4 text-sm text-blue-950 hover:scale-105">
            <AiOutlineCalendar />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <HiOutlineUserPlus />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <HiOutlineAdjustmentsHorizontal />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <HiOutlineUsers />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <MdOutlinePayment />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <HiOutlineUserPlus />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <HiOutlineUsers />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <HiOutlineAdjustmentsHorizontal />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <HiOutlineUsers />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <MdOutlinePayment />
          </div>
          <div className="cursor-pointer py-2 text-sm text-blue-950 hover:scale-105">
            <AiOutlinePoweroff />
          </div>
        </div>
      </div>

      <main className="ml-28 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
