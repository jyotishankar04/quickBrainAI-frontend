import { FaRegFileAlt, FaRegStar, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export const sidebarLinks = [
  {
    name: "Dashboard",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7m-7-7v14"
        />
      </svg>`,
    link: "/app",
  },
  {
    name: "All Notes",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>`,
    link: "/app/notes",
  },
  {
    name: "Favorites",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>`,
    link: "/app/favorites",
  },
  {
    name: "Shared",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>`,
    link: "/app/shared",
  },
];

export const dashboardStats = [
  {
    title: "Total Notes",
    value: "24",
    icon: FaRegFileAlt,
    color: "blue",
  },
  {
    title: "Recent Views",
    value: "12",
    icon: MdOutlineRemoveRedEye,
    color: "green",
  },
  {
    title: "Favorites",
    value: "7",
    icon: FaRegStar,
    color: "yellow",
  },
  {
    title: "Created This Week",
    value: "5",
    icon: FaRegCalendarAlt,
    color: "purple",
  },
];

// constants/notes.constants.js
// constants/notes.constants.js
export const noteCardsData = [
  {
    title: "Project Meeting Notes",
    updated: "2 hours ago",
    description:
      "Discussion about the new dashboard design and upcoming features for the Q3 release.",
    tags: ["Project", "Meeting"],
    category: "Work",
    iconColor: "blue",
    badge: "PDF",
    badgeColor: "blue",
    starred: false,
  },
  {
    title: "Shopping List",
    updated: "yesterday",
    description:
      "Groceries for the week: milk, eggs, bread, fruits, vegetables, chicken, and pasta.",
    tags: ["Groceries", "Weekly"],
    category: "Personal",
    iconColor: "green",
    badge: "PDF",
    badgeColor: "green",
    starred: false,
  },
  {
    title: "Vacation Photos",
    updated: "3 days ago",
    description:
      "Collection of photos from the beach trip. Need to organize and share with family.",
    tags: ["Photos", "Family"],
    category: "Travel",
    iconColor: "purple",
    badge: "PDF",
    badgeColor: "purple",
    starred: false,
  },
  {
    title: "Project Deadlines",
    updated: "Oct 15, 2023",
    description:
      "Critical deadlines for Q4 deliverables - Keep this note accessible for daily reference. Contains timeline details.",
    tags: ["Project", "Planning"],
    category: "Work",
    iconColor: "yellow",
    badge: "Important",
    badgeColor: "yellow",
    starred: true,
  },
  {
    title: "Product Roadmap",
    updated: "Oct 10, 2023",
    description:
      "Strategic roadmap for next 6 months - Features prioritization and development timeline with milestones.",
    tags: ["Product", "Strategy"],
    category: "Work",
    iconColor: "blue",
    badge: "PDF",
    badgeColor: "blue",
    starred: true,
  },
  {
    title: "Interview Questions",
    updated: "1 week ago",
    description:
      "List of technical and behavioral questions for frontend developer interviews. Includes evaluation criteria.",
    tags: ["HR", "Recruitment"],
    category: "Interview",
    iconColor: "green",
    badge: "Note",
    badgeColor: "green",
    starred: false,
  },
];

export const UserSkillData = [
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "JavaScript",
  },
  {
    title: "React",
  },
  {
    title: "Node.js",
  },
];

export const Connections = [
  {
    name: "Jeeshan Warish khan",
  },
  {
    name: "Alpha",
  },
  {
    name: "Jishan",
  },
  {
    name: "Harry",
  },
  {
    name: "Mike",
  },
  {
    name: "Rahul",
  },
  {
    name: "Jatin",
  },
  {
    name: "John",
  },
];

export const RecentActivities = [
  {
    title: "Posted a comment",
    duration: "2 hours ago",
    description:
      "Great article on design systems! I've been implementing something similar in my current project.",
    icon: MdDeleteOutline,
    iconcolor: "bg-blue-500 text-white",
  },
  {
    title: "Started a new project",
    duration: "1 week ago",
    description:
      "Created Responsive Dashboard UI Kit - A collection of reusable components for building data-rich interfaces",
    icon: MdDeleteOutline,
    iconcolor: "bg-green-500 text-white",
  },
  {
    title: "Deleted this project",
    duration: "4 week ago",
    description: "Deleted the project - Responsive Dashboard UI Kit",
    icon: MdDeleteOutline,
    iconcolor: "bg-yellow-500 text-white",
  },
];
