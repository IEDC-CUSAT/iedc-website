import React, { useState, useEffect, useRef } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";



const data = [
    {
        id: 1,
        title: "Promoting Innovation",
        description: "Our aim is to cultivate a setting where students feel empowered to explore new ideas freely and where innovation is not only endorsed but celebrated.",
        icons: <FaLightbulb className='w-12 h-12 md:w-24 md:h-24 text-blue-700 mx-auto mb-10' />,
    },
    {
        id: 2,
        title: "Fostering Collaboration",
        description: " We give teachers and students the tools and assistance they need to work together productively and transform ideas into real initiatives.",
        icons: <FaHandsHelping className='w-12 h-12 md:w-24 md:h-24 text-blue-700 mx-auto mb-10' />,
    },
    {
        id: 3,
        title: "Promoting Entrepreneurship",
        description: "We want to help students develop an entrepreneurial attitude by giving them the tools and chances to lead innovation and effect good change.",
        icons: <IoBusinessSharp className='w-12 h-12 md:w-24 md:h-24 text-blue-700 mx-auto mb-10' />,
    },


]

const Card = ({
  id,
  title,
  description,
  activeCard,
  onCardClick,
  pauseTimer,
  icons,
  resumeTimer,
  time,
}) => {
  const [isOpen, setIsOpen] = useState(activeCard === id);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsOpen(activeCard === id);
  }, [activeCard, id]);

  const handleHover = () => {
    setIsHovered(true);
    pauseTimer();
  };

  const handleHoverExit = () => {
    setIsHovered(false);
    resumeTimer();
  };

    return (
        <div className={`flex flex-col w-full bg-[#F7F7F8] px-12 rounded-full aspect-square text-center justify-end pb-20`}>
            {/* <HiLightBulb className='w-12 h-12 md:w-24 md:h-24 text-blue-700 mx-auto my-auto mx-auto' /> */}
            {icons}
            <p className='font-normal text-lg md:text-2xl'>{title}</p>
            <p className='font-normal text-xs md:text-base'>{description}</p>
        </div>
    );
};

const Vision = () => {
  const [time, setTime] = useState(0);
  const [activeCard, setActiveCard] = useState(1);
  const [timerPaused, setTimerPaused] = useState(false);
  const isMobile = window.innerWidth < 768;

  const handleCardClick = (id) => {
    setActiveCard(id);
    setTime(0);
  };

  const pauseTimer = () => {
    setTimerPaused(true);
  };

  const resumeTimer = () => {
    setTimerPaused(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!timerPaused) {
        setActiveCard((prevActiveCard) =>
          prevActiveCard === data.length ? 1 : prevActiveCard + 1
        );
        setTime(0);
      }
    }, 4000);

    const interval = setInterval(() => {
      if (!timerPaused && time < 240) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000 / 60);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [activeCard, timerPaused, time]);

  return (
    <div className="w-full px-6 md:px-24 py-9 md:py-16" id="vision">
      <p className="w-full md:w-full font-normal text-4xl md:text-7xl !leading-tight uppercase text-center pb-4">
        Vision
      </p>
      <div className="w-full flex flex-col-reverse md:flex-row overflow-hidden gap-x-16 gap-y-6">
        <div className="flex md:w-full h-full flex-col md:flex-row my-auto gap-6">
          {data.map((cardDetail) => (
            <Card
              key={cardDetail.id} // added key prop
              id={cardDetail.id}
              title={cardDetail.title}
              description={cardDetail.description}
              icons={cardDetail.icons}
              activeCard={activeCard}
              onCardClick={handleCardClick}
              pauseTimer={pauseTimer}
              resumeTimer={resumeTimer}
              time={time}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Vision;
