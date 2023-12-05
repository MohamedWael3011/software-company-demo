import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(
      () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".text", {
          scrollTrigger: {
            trigger: sectionRef.current,
            toggleActions: "play none none reverse",
            start: "top 70%",
          },
          duration: 1,
          opacity: 0,
          x: 400,
        });
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            toggleActions: "play none none reverse",
            start: "top 70%",
          },
          opacity:0,
          x: -1000,
          duration: 1,
          delay:0.5
        });
      },

      sectionRef
    );

    return () => ctx.revert();
  }, []);
  return (
    <div className="w-full flex justify-center">
    <div
      ref={sectionRef}
      className="lg:grid lg:grid-cols-2 flex flex-col-reverse h-screen xl:max-w-[1280px] w-full bg-background relative overflow-hidden sm:px-16 px-6"
    >
      <div className="flex lg:items-start lg:justify-center justify-center lg:w-auto h-1/2 w-full ">
        <div ref={imageRef} className="aboutImage rounded-2xl w-full h-full"></div>
      </div>

      <div className="flex flex-col h-full md:items-start items-center md:text-start text-center p-5 justify-start text-primary">
        <h2 className="text md:text-3xl lg:text-xl text-md font-bold">
          ABOUT US
        </h2>
        <p className="text text-sm p-2 text-[#f5f5f5] mt-5">
        Welcome to [Your Company Name], where innovation meets speed in the realm of cutting-edge software solutions. At our core, we excel in delivering groundbreaking solutions with remarkable speed.<br/><br/><br/>

As pioneers in the tech industry, [Your Company Name] prides itself on redefining software development. We seamlessly blend creativity and efficiency to transform visionary ideas into reality at an exceptional pace. Our team of experts is dedicated to staying ahead of the curve, setting industry trends rather than just following them.<br/><br/><br/>


        </p>
      </div>
    </div>
    </div>
  );
}
