import Button from "@/components/Button";
import ContentWrapper from "@/components/ContentWrapper";
import Heading from "@/components/Heading";
import React from "react";

const AboutMe = () => {
  return (
    <ContentWrapper>
      <Heading>Who Am I</Heading>
      <p className="text-center">
        I am a motivated and versatile individual, always eager to take on new
        challenges. With a passion for learning, I am dedicated to delivering
        high-quality results. With a positive attitude and a growth mindset, I
        am ready to make a meaningful contribution and achieve great things.{" "}
        <br /> <br />I have been recognized as one of the Top 100 Coders, and I
        take pride in the positive feedback I've received from both clients and
        colleagues. Looking forward, I believe that a great developer not only
        fixes codes but also contributes to solving the real world problems.
      </p>

      <div className="flex flex-col md:flex-row gap-[10vw]">
        <div className="flex items-center gap-4">
          <h1 className="text-primary text-6xl font-bold">01+</h1>
          <div className="flex flex-col">
            <p className="text-2xl">YEARS OF</p>
            <p className="text-white font-bold text-lg -mt-[10px]">
              EXPERIENCE
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-primary text-6xl font-bold">25+</h1>
          <div className="flex flex-col">
            <p className="text-lg">COMPLETED</p>
            <p className="text-white font-bold text-2xl -mt-[10px]">WORKS</p>
          </div>
        </div>
      </div>
      <div className="text-3xl text-white flex gap-[5vw] ">
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-code"></i>
        <i class="fa-brands fa-linkedin-in"></i>
      </div>
      <Button text="DOWNLOAD ME" iconClass="fa-solid fa-download ml-1" />
    </ContentWrapper>
  );
};

export default AboutMe;
