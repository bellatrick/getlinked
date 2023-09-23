import React, { useState, useEffect } from "react";
import { unica_one } from "../fonts";

// a custom hook to get the remaining time in hours, minutes and seconds
const now = new Date().getTime();
// add 48 hours to get the deadline
const deadline = now + 48 * 60 * 60 * 1000;
const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<any>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;
      if (distance > 0) {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

        setTimeLeft({
          hours: formatTime(hours),
          minutes: formatTime(minutes),
          seconds: formatTime(seconds),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    // clean up the timer
    return () => clearInterval(timer);
  }, [deadline]);

  return timeLeft;
};

// a custom component to render the countdown
const Countdown = () => {
  const { hours, minutes, seconds } = useCountdown();

  // a custom hook to handle the animation of the numbers
  const useAnimation = (value: unknown) => {
    const [prevValue, setPrevValue] = useState(value);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      if (value !== prevValue) {
        setAnimate(true);

        setPrevValue(value);

        const timeout = setTimeout(() => setAnimate(false), 1000);

        return () => clearTimeout(timeout);
      }
    }, [value, prevValue]);

    return animate;
  };

  const animateSeconds = useAnimation(seconds);

  return (
    <p className={`${unica_one.className} font-[400] text-[64px] mt-[77px]`}>
      <span className="animate-topslide text-countdown">{hours}</span>
      <span className="text-[14px] ">H</span> <span>{minutes}</span>
      <span className="text-[14px] ">M</span>{" "}
      <span
        className={`${animateSeconds && "animate-topslide text-countdown"}`}
      >
        {seconds}
      </span>
      <span className="text-[14px] ">S</span>
    </p>
  );
};

export default Countdown;
