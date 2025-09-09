"use client";

import Header from "@/components/navbar";
import CallButton from "@/components/CallButton";
import HeroSection from "@/components/hero";
import WelcomeBanner from "@/components/wel_banner";
import AboutBanner from "@/components/About";

export default function page(): JSX.Element{
  return(
    <div className="min-h-screen bg-white">
      <div className="min-h-screen">
        <Header />
        <div className="relative h-screen overflow-hidden">
          <HeroSection />
          <WelcomeBanner />
          <AboutBanner />
          <CallButton />
        </div>
      </div>
    </div>
  );
}