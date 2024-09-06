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
            <Typography
              variant="h5"
              color="blue"
              className="leading-none sm:text-base">
              Genpact Services LLC
            </Typography>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <Typography className="leading-7">Process Associate</Typography>
            <Typography className="leading-7">2024</Typography>
            <Typography variant="small" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty-five years to get these plants, twenty-five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-[#01579b]" />
            <Typography
              variant="h5"
              color="blue"
              className="leading-none sm:text-base">
              Lambert Williams Logistics
            </Typography>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <Typography className="leading-7">
              Software Developer Intern
            </Typography>
            <Typography className="leading-7">2023</Typography>
            <Typography variant="small" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty-five years to get these plants, twenty-five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ExperienceSection;
