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

const EducationSection = () => {
  // @ts-ignore
  return (
    <div className="w-full max-w-[32rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] px-4 sm:px-2">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />

          <TimelineHeader className="h-6">
            <TimelineIcon className="bg-[#01579b]" />
            <Typography variant="h5" color="blue" className="leading-none">
              Cavite State University Indang
            </Typography>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <Typography className="leading-8">
              BS Computer Engineering
            </Typography>
            <Typography className="leading-7">2020-2024</Typography>
            <Typography variant="small" className="font-normal text-gray-600">
              Pursued a Bachelor of Science in Computer Engineering, focusing on
              software and hardware integration, and gained hands-on experience
              in developing applications and systems.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-[#01579b]" />
            <Typography variant="h5" color="blue" className="leading-none">
              Philippine Christian University Dasma
            </Typography>
          </TimelineHeader>

          <TimelineBody className="pb-8">
            <Typography className="leading-7 sm:mt-2">
              S.T.E.M. Strand
            </Typography>
            <Typography className="leading-7">2018-2020</Typography>
            <Typography variant="small" className="font-normal text-gray-600">
              Completed the S.T.E.M. Strand, where I gained valuable knowledge
              in science, technology, engineering, and mathematics, and
              developed practical skills for solving problems and analyzing
              technical issues.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default EducationSection;
