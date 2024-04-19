import React, { useEffect } from "react";
import gsap from "gsap";
// import { motion } from "framer-motion";
import Event1 from "../asssets/Event1.jpeg";

const data = [
  {
    heading: "Innovate & Elevate: Empowering Entrepreneurs",
    description:
      "Gain insider insights, guidance from experts, and network with peers. Don't miss this opportunity to kickstart your entrepreneurial journey!",
    icon: Event1,
    date: "March 20, 2024",
    link: "https://www.google.com",
    time: "4:30 PM",
    venue: "TBI Seminar hall, Amenity Centre",
  },
];

const Card = ({ heading, icon, date, index, description, venue, time }) => {
  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    // Check if it's a mobile device

    // Apply animation only if it's not a mobile device
    if (!isMobile) {
      gsap.set(`.landing #img-${index}`, {
        x: "-100%",
        duration: 0.3,
        opacity: 0,
        transformOrigin: "right bottom",
      });
      gsap.set(`.landing #text-${index}`, {
        x: "-30%",
        duration: 0.3,
        width: "137%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  }, [index, isMobile]);

  const handleHover = () => {
    const isMobile = window.innerWidth < 768;

    // Apply animation only if it's not a mobile device
    if (!isMobile) {
      gsap.to(`.landing #img-${index}`, {
        x: 0,
        duration: 0.3,
        opacity: 1,
        transformOrigin: "right bottom",
      });
      gsap.to(`.landing #text-${index}`, {
        x: 0,
        duration: 0.3,
        width: "100%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  };

  const handleHoverExit = () => {
    const isMobile = window.innerWidth < 768;

    // Apply animation only if it's not a mobile device
    if (!isMobile) {
      gsap.to(`.landing #img-${index}`, {
        x: "-100%",
        duration: 0.3,
        opacity: 0,
        transformOrigin: "right bottom",
      });
      gsap.to(`.landing #text-${index}`, {
        x: "-30%",
        duration: 0.3,
        width: "137%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  };

  return (
    <div
      className="overflow-hidden flex w-full odd:border-y-[2px] border-opacity-40 border-black gap-2 md:gap-4 py-5 md:py-8 cursor-pointer"
      key={index}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      <div className=" grid grid-cols-12 flex-1 landing ">
        <img
          id={`img-${index}`}
          src={icon}
          alt="icon"
          className="col-span-12 md:col-span-4 w-full md:w-11/12 my-auto block rounded-2xl"
        />
        <div
          id={`text-${index}`}
          className="col-span-12 md:col-span-8 flex flex-col justify-center md:justify-between gap-y-5 md:gap-y-3"
        >
          <div className="gap-y-2 flex flex-col">
            <p className=" font-normal text-lg md:text-5xl">{heading}</p>
            <p className=" font-normal text-lg md:text-2xl">{description}</p>
            <p className=" font-normal text-md md:text-xl">Venue : {venue}</p>
            <p className=" font-normal text-md md:text-xl">Time : {time}</p>
          </div>
          <div className="py-3 px-5 md:py-3 md:px-8 rounded-[78px] bg-[#00062f]  mr-auto">
            <p className="text-sm md:text-lg text-white my-auto">{date}</p>
          </div>
        </div>
        <div className=" md:col-span-1 w-full hidden md:block">
          {/* <img src={icon2} alt="icon" className={` w-9 ml-auto }`} /> */}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="px-6 md:px-24 py-8 md:py-20 flex flex-col" id="events">
      <p className="w-full md:w-full font-normal text-[#00062f] text-4xl md:text-7xl !leading-tight uppercase text-center pb-4">
        EVENTS
      </p>

      <div>
        {data.map((cardDetail, index) => (
          <Card
            heading={cardDetail.heading}
            icon={cardDetail.icon}
            date={cardDetail.date}
            description={cardDetail.description}
            venue={cardDetail.venue}
            time={cardDetail.time}
            index={index}
            key={index}
          />
        ))}
      </div>
      {/* <img src={arrowIcon} alt="arrow" className='w-24 md:w-36 mx-auto my-10 md:my-16 hover:opacity-55 cursor-pointer' /> */}
    </div>
  );
};

export default Events;
