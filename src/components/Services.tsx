import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardComp from "./CardComp";
import { AppWindow } from "lucide-react";

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(
      () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".text", {
          scrollTrigger: {
            trigger: sectionRef.current,
            toggleActions: "play none none reverse",
            start: "top center",
          },
          duration: 1,
          opacity: 0,
          x: 400,
        });
        gsap.from('.service', {
          scrollTrigger: {
            trigger: sectionRef.current,
            toggleActions: "play none none reverse",
            start: "top 70%",
          },
          opacity:0,
          duration: 1,
          delay:0.5,
          ease: "sine.out", 
          stagger:0.2
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
      <div className="grid grid-cols-2 grid-rows-2 lg:m-5 h-1/2 justify-items-center lg:place-content-evenly lg:gap-0 gap-4" >
          <CardComp className="service"  cardTitle={"Service"} icon={AppWindow} cardDesc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "}/>
          <CardComp className="service" cardTitle={"Service"}  icon={AppWindow} cardDesc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "}/>
          <CardComp className="service" cardTitle={"Service"}  icon={AppWindow} cardDesc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "}/>
          <CardComp className="service" cardTitle={"Service"}  icon={AppWindow} cardDesc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "}/>


      </div>

      <div className="flex flex-col md:items-start items-center md:text-start h-1/2 text-center p-5 justify-start text-primary">
        <h2 className="text md:text-3xl lg:text-xl text-md font-bold">
          OUR SERVICES
        </h2>
        <p className="text text-sm p-2 text-[#f5f5f5] mt-5">
        Discover a spectrum of cutting-edge services at [Your Company Name]. From innovative software development and seamless system integration to strategic consulting, our offerings are crafted for efficiency and growth. We deliver tailored solutions that empower businesses to thrive in the digital landscape, ensuring excellence at remarkable speed. Explore the possibilities with [Your Company Name] and elevate your business through our unparalleled suite of services.        </p>
      </div>
    </div>
    </div>
  );
}
