"use client";

import { memo } from "react";

import ActiveUsers from "./users/ActiveUsers";

const Navbar = () => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 py-2 text-white">
      <h2>Liveblocks</h2>

      <ActiveUsers />
    </nav>
  );
};

export default memo(Navbar);