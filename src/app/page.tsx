import CustomerSegments from "@/components/CustomerSegments";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MissionStatement from "@/components/MissionStatement";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <Features />
      <CustomerSegments />
    </>
  );
}
