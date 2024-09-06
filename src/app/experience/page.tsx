"use client";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const ExperienceSection = () => {
  // @tsx-ignore
  return (
    <div className="w-full max-w-[32rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] px-4 sm:px-2">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />

          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-[#01579b]" />
            <div className="text-blue-500 font-bold text-lg leading-none">
              Genpact Services LLC
            </div>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <div className="leading-7">Process Associate</div>
            <div className="leading-7">2024</div>
            <div className="text-sm font-normal text-gray-600">
              Delivered exceptional support, resolving client issues promptly
              and enhancing overall satisfaction of the clients.
            </div>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-[#01579b]" />
            <div className="text-blue-500 font-bold text-lg leading-none">
              Lambert Williams Logistics
            </div>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <div className="leading-7 sm:mt-2">Software Developer Intern</div>
            <div className="leading-7">2023</div>
            <div className="text-sm font-normal text-gray-600">
              Contributed to developing an Employee Record List page for the
              HRIS, as well as creating an e-commerce product list page with
              features for product visibility, filtering, and pagination.
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ExperienceSection;
