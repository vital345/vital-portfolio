import { MapPin } from "lucide-react";
import { TimelineEntry } from "./types";

const getTimeLineData = ({
  duration,
  location,
  description,
}: {
  duration: string;
  location: string;
  description: string[];
}) => {
  return (
    <div className="text-white text-pretty tracking-wide flex flex-col gap-y-4">
      <div className="flex items-center">
        <p className="mr-4 font-extrabold text-[24px] uppercase">Duration:</p>
        <p className="text-[12px] font-bold border-1 p-2 rounded-[5px]">
          {duration}
        </p>
      </div>
      <div className="flex">
        <div className="mr-4 font-medium flex gap-x-2">
          <div className="flex">
            <MapPin />
          </div>
          <div>Location:</div>
        </div>
        <p className="underline">{location}</p>
      </div>
      <ul className="list-disc leading-loose flex flex-col gap-4 pl-5">
        {description.map((item, idx) => (
          <li key={idx} className="leading-normal">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    title: "Associate Engineer",
    content: getTimeLineData({
      duration: "Mar 2022 - Sept 2022",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Completed HashedIn University, mastering a range of technologies, including Angular, React, Java, Spring Boot and Docker.",
        "Led a team during the product development month to successfully deliver a functional prototype.",
        "Built a mutual fund screening application using React.js to provide actionable insights to users.",
        "Developed REST APIs with Java Spring Boot and integrated them with MySQL databases for efficient back-end operations.",
      ],
    }),
  },
  {
    title: "Software Engineer I",
    content: getTimeLineData({
      duration: "Sept 2022 - Jun 2024",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Collaborated with UI/UX designers to transform wireframes into responsive, pixel-perfect web pages using React.js, AntDesign, and Scss.",
        "Integrated GraphQL Queries and Mutations with back-end services for seamless data communication.",
        "Optimized user experience by building and maintaining dynamic and responsive web applications.",
        "Awarded Excellence Award for outstanding contributions to project success and team collaboration.",
        "Worked with TypeScript, Redux, and HTML/CSS to deliver scalable front-end solutions.",
        "Unit testing and manual testing were performed to ensure robust and bug-free releases.",
      ],
    }),
  },
  {
    title: "Software Engineer II",
    content: getTimeLineData({
      duration: "Jun 2024 - Present",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Developed and deployed Generative AI (GenAI) features, utilizing advanced prompt engineering techniques.",
        "Code reviews were performed to ensure adherence to coding standards, optimize performance, and maintain high-quality deliverables.",
        "Improved system efficiency by reducing database calls, improving query performance, and significantly improving response times by 85%.",
        "Identified and resolved critical bugs, boosting system reliability and tool stability.",
        "Wrote and maintained Jest test cases, achieving 90% code coverage and enhancing overall code quality.",
        "Integrated a GenAI-powered tool that reduced the evaluation time of evaluators by 75%, significantly improving efficiency.",
      ],
    }),
  },
];
