"use client";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";

const EducationSection = () => {
  // @ts-ignore
  return (
    <div className="w-full max-w-[32rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] px-4 sm:px-2">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />

          <TimelineHeader className="h-6">
            <TimelineIcon className="bg-[#01579b]" />
            <div className="text-blue-500 font-bold text-lg leading-none">
              Cavite State University Indang
            </div>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <div className="leading-8">BS Computer Engineering</div>
            <div className="leading-7">2020-2024</div>
            <div className="text-sm font-normal text-gray-600">
              Pursued a Bachelor of Science in Computer Engineering, focusing on
              software and hardware integration, and gained hands-on experience
              in developing applications and systems.
            </div>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-[#01579b]" />
            <div className="text-blue-500 font-bold text-lg leading-none">
              Philippine Christian University Dasma
            </div>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <div className="leading-7 sm:mt-2">S.T.E.M. Strand</div>
            <div className="leading-7">2018-2020</div>
            <div className="text-sm font-normal text-gray-600">
              Completed the S.T.E.M. Strand, where I gained valuable knowledge
              in science, technology, engineering, and mathematics, and
              developed practical skills for solving problems and analyzing
              technical issues.
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default EducationSection;
