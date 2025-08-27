import { MapPin } from "lucide-react";
import { TimelineEntry } from "./types";

const getTimeLineData = ({
  duration,
  location,
  description,
  company,
}: {
  duration: string;
  location: string;
  description: string[];
  company: {
    name: string;
    link: string;
  };
}) => {
  return (
    <div
      key={duration}
      className="bg-gray-950 text-white rounded-2xl shadow-md p-6 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2">
        <div className="flex">
          <a
            href={company.link}
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-white font-bold text-2xl"
          >
            {company.name}
          </a>
        </div>
        <p className="text-sm font-semibold bg-gray-800 px-3 py-2 md:py-1 rounded-md w-fit">
          {duration}
        </p>
      </div>

      {/* Sub Info */}
      <div className="flex flex-col gap-2 text-sm text-gray-300">
        {/* <div className="flex items-center gap-2">
          <Building size={16} />
          <a
            href={company.link}
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-white"
          >
            {company.name}
          </a>
        </div> */}
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>

      {/* Contributions */}
      <div>
        <h4 className="font-semibold text-lg mb-2">Key Contributions</h4>
        <ul className="list-disc flex flex-col gap-2 text-gray-200">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
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
      company: { name: "HashedIn by Deloitte", link: "https://hashedin.com/" },
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
      company: { name: "HashedIn by Deloitte", link: "https://hashedin.com/" },
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
      company: { name: "HashedIn by Deloitte", link: "https://hashedin.com/" },
    }),
  },
];
