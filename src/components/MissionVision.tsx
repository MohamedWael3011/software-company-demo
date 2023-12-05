import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MissionVision() {
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
      className="lg:grid lg:grid-cols-2 flex flex-col h-screen xl:max-w-[1280px] w-full bg-background relative overflow-hidden sm:px-16 px-6"
    >

      <div className="flex flex-col h-full md:items-start md:text-start text-center p-5 justify-start text-primary">
        <h2 className="text md:text-3xl lg:text-xl text-md font-bold">
          MISSION & VISION
        </h2>
        <p className="text md:text-md text-sm p-2 text-[#f5f5f5] mt-5">
[Your Company Name] empowers businesses and individuals with innovative technology solutions, driving efficiency, growth, and positive transformation. We deliver tailored solutions, stay ahead in tech advancements, and strive for excellence, aiming to be leaders in shaping the future of digital experiences. Our commitment extends beyond technical prowess to integrity, sustainability, and social responsibility, making us the go-to partner for visionary solutions in an evolving digital world.        </p>
      </div>
      <div className="flex lg:items-start lg:justify-center justify-center lg:w-auto h-1/2 w-full ">
        <div ref={imageRef} className="aboutImage rounded-2xl w-full h-full"></div>
      </div>
    </div>
    </div>
  );
}
