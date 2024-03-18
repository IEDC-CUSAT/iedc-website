import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';



const data = [
    {
        id: 1,
        title: "Promoting Innovation",
        description: "Our goal is to create a setting where students feel free to experiment with new ideas and where innovation is encouraged.",
    },
    {
        id: 2,
        title: "Fostering Collaboration",
        description: " We give teachers and students the tools and assistance they need to work together productively and transform ideas into real initiatives.",
    },
    {
        id: 3,
        title: "Promoting Entrepreneurship",
        description: "We want to help students develop an entrepreneurial attitude by giving them the tools and chances to lead innovation and effect good change.",
    },
    

]

const Card = ({ id, title, description, activeCard, onCardClick, pauseTimer, resumeTimer, time }) => {
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
        <div
            className={`flex flex-col w-full border-opacity-40 border-black py-3 md:py-4 gap-2 cursor-pointer ${!isOpen && 'opacity-40  border-b-2'}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            onClick={() => onCardClick(id)}
        >
            <div className='grid grid-cols-9 flex-1'>
                <p className='col-span-8 font-normal text-2xl md:text-5xl'>{title}</p>
            </div>
            {isOpen &&
                <div className='grid grid-cols-10'>
                    <p className='font-normal text-xs md:text-lg col-span-10'>{description}</p>
                </div>
            }
            {isOpen &&
                <div>
                    <motion.div
                        style={{ scaleX: activeCard ? 1 : 0, transformOrigin: "left" }}
                        className='w-full h-0.5 bg-black'
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? time / 240 : activeCard ? 1 : 0 }}
                        transition={{ duration: 6 }}
                    />
                    <div className='w-full h-[1px] bg-black opacity-30 mb-0.5' />
                </div>
            }
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
                setActiveCard((prevActiveCard) => (prevActiveCard === data.length ? 1 : prevActiveCard + 1));
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
        <div className='w-full px-6 md:px-24 pb-8 md:pb-20'>
            <p className='w-full md:w-full font-normal text-4xl md:text-7xl !leading-tight uppercase text-center pb-4'>Vision and Mision</p>
            <div className='w-full flex flex-col-reverse md:flex-row overflow-hidden gap-x-16 gap-y-6'>
                <div className='flex md:w-full h-full flex-col my-auto'>
                    {data.map((cardDetail) => (
                        <Card
                            key={cardDetail.id} // added key prop
                            id={cardDetail.id}
                            title={cardDetail.title}
                            description={cardDetail.description}
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
