"use client";

import { AppContext } from "@/app/context/appcontext";
import { initialUserProfile } from "@/models/userprofile.model";
import Link from "next/link";
import { useContext } from "react";
import NavbarButton from "./navbarbutton";
import "./style.css";
import cbrelogo from "@/assets/cbre-logo.png";
export default function Navbar() {
  const appContext = useContext(AppContext);

  function signOut() {
    appContext?.setUserProfile(initialUserProfile);
  }

  return (
    <div className="bg-[#faf0e6] h-screen">
      <div className="px-10">
        <div className="h-10"></div>
        <img src={cbrelogo.src} className="xyz" />
      </div>
      <div className="second">
        <nav className="flex">
          <NavbarButton text="Profile" />
          <NavbarButton text="Dashboard" />
          <NavbarButton text="Insights" />
        </nav>
        <div className="line"> Text</div>
      </div>
    </div>
  );
}
