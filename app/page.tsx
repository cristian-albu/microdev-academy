import HomeView from "@/views/home/HomeView";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Micro Dev Academy",
  description: "Micro Dev Academy",
};

const HomePage = () => {
  return <HomeView />;
};

export default HomePage;
