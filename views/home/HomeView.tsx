"use client";
import Background from "@/components/background/Background";
import Title from "@/components/title/Title";
import React from "react";

const HomeView = () => {
  return (
    <Background>
      <Title titleSize={3} titleColor="primary">
        Micro Dev Academy
      </Title>
    </Background>
  );
};

export default HomeView;
