"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";
// import { initialCredentials } from "@/models/credentials.model";
import InputForm from "@/components/input/inputform";
import { signIn } from "@/actions/authenticateActions";
import {
  DashboardInformation,
  UserProfileProps,
} from "@/models/userprofile.model";
import { AppContext } from "@/app/context/appcontext";
import DashboardSelection from "@/components/dashboardselection";
import NavbarButton from "@/components/navbar/navbarbutton";
import cbrelogo from "@/assets/cbre-logo.png";
import "@/components/navbar/style.css";

export default function Page() {
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
