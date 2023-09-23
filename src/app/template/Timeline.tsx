import React from "react";
import { clash_display } from "../fonts";
import Point from "../components/Point";
import PointDetails from "../components/PointDetails";
import Image from "next/image";

const Timeline = () => {
  const timeDates = [
    {
      left: {
        title: "Hackathon Announcement",
        details:
          "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      },
      right: { title: "November 18, 2023", details: null },
      number: 1,
    },
    {
      left: { title: "November 18, 2023", details: null },
      right: {
        title: "Teams Registration begins",
        details:
          "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      },
      number: 2,
    },
    {
      left: {
        title: "Teams Registration ends",
        details: "Interested Participants are no longer Allowed to register",
      },
      right: { title: "November 18, 2023", details: null },
      number: 3,
    },
    {
      left: { title: "November 18, 2023", details: null },
      right: {
        title: "Announcement of the accepted teams and ideas",
        details:
          "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      },
      number: 4,
    },
    {
      left: {
        title: "Getlinked Hackathon 1.0 Offically Begins",
        details:
          "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      },
      right: { title: "November 18, 2023", details: null },
      number: 5,
    },
    {
      left: { title: "November 18, 2023", details: null },
      right: {
        title: "Demo Day",
        details:
          "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      },
      number: 6,
    },
  ];
  return (
    <div id="timeline" className="top-wrapper">
      <div className="inner-wrapper px-4 sm:px-[60px] pb-[60px]">
        <div className="text-center mb-[40px]">
          <p className={`${clash_display.className} font-bold text-[32px]`}>
            Timeline
          </p>
          <p className="text-[14px] font-normal w-[40ch] mt-[12px]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/images/purplestar.png"
            alt="Sample Image"
            width={20}
            height={20}
            className="absolute object-contain w-[14px]  lg:w-[20px] left-[120px] top-[-40px] lg:top-[-30px]"
          />
            <Image
            src="/images/white_star.png"
            alt="Sample Image"
            width={20}
            height={20}
            className="absolute object-contain w-[14px]  lg:w-[18px] right-[60px] top-[-40px] lg:top-[430px]"
          />
             <Image
            src="/images/gray_star.png"
            alt="Sample Image"
            width={20}
            height={20}
            className="absolute object-contain w-[14px]  lg:w-[18px] left-[60px] bottom-[-40px] lg:bottom-[43px]"
          />
          {timeDates.map((details, i) => (
            <div key={i}>
              <PointDetails details={details} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
