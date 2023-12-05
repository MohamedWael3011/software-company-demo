import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardComp from "./CardComp";

export default function Experince() {
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
          x: -400,
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
      className="lg:grid lg:grid-cols-2 flex flex-col h-screen xl:max-w-[1280px] w-full bg-background relative overflow-hidden sm:px-16 px-6"

    >
<div className="flex flex-col h-auto md:items-start items-center md:text-start text-center p-5 justify-start text-primary gap-4">

        <h2 className="text md:text-3xl lg:text-xl text-md font-bold">
          TEAM WORK
        </h2>
        <h1 className="text md:text-4xl lg:text-2xl text-ld text-secondary">Successfully Complete Clients Projects on-time</h1>
        <p className="text text-sm p-2 text-[#f5f5f5]">
        At [Your Company Name], we excel not only in delivering cutting-edge solutions but also in consistently meeting project deadlines and exceeding client expectations. Our success is rooted in a customer-centric approach, where satisfaction is prioritized through tailored solutions, proactive communication, and a relentless commitment to quality. The seamless alignment of our efficient project delivery with client fulfillment showcases our dedication to ensuring success on every front.</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-1/2  justify-items-center place-content-evenly lg:place-content-evenly lg:gap-0 gap-4" >
      <CardComp className="service" clickable={false} cardTitle={"300+"} cardDesc={"Satisfied Clients"}/>
      <CardComp className="service" clickable={false} cardTitle={"27+"} cardDesc={"Best Product Awards"}/>
      <CardComp className="service" clickable={false} cardTitle={"108+"} cardDesc={"Professional Expertise"}/>
      <CardComp className="service" clickable={false} cardTitle={"12+"} cardDesc={"Years Experience"}/>


      </div>
    </div>
    </div>
  );
}
