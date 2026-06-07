import React from "react";
const employees = [
  {
    id: 1,
    email: "john.doe@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Build responsive login page using React.",
        taskDate: "2026-06-10",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve mobile navbar responsiveness issue.",
        taskDate: "2026-06-11",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Tailwind",
        taskDescription: "Configure Tailwind CSS in project.",
        taskDate: "2026-06-05",
        category: "Development",
      },
    ],

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },

  {
    id: 2,
    email: "jane.smith@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create dashboard UI wireframe.",
        taskDate: "2026-06-09",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Profile Page",
        taskDescription: "Build user profile page.",
        taskDate: "2026-06-04",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Integrate Razorpay payment gateway.",
        taskDate: "2026-06-02",
        category: "Backend",
      },
    ],

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },

  {
    id: 3,
    email: "michael.brown@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend APIs.",
        taskDate: "2026-06-12",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Authentication",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-06-13",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB collections.",
        taskDate: "2026-06-01",
        category: "Database",
      },
    ],

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },

  {
    id: 4,
    email: "emily.wilson@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Write unit tests for components.",
        taskDate: "2026-06-15",
        category: "QA",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve reported UI bugs.",
        taskDate: "2026-06-06",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy application on Vercel.",
        taskDate: "2026-06-07",
        category: "DevOps",
      },
    ],

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },

  {
    id: 5,
    email: "david.johnson@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate employee performance reports.",
        taskDate: "2026-06-14",
        category: "Analytics",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve database query performance.",
        taskDate: "2026-06-16",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Prepare project documentation.",
        taskDate: "2026-06-03",
        category: "Documentation",
      },
    ],

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 101,
    email: "admin@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review Employee Tasks",
        taskDescription: "Check progress of all employee tasks.",
        taskDate: "2026-06-10",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Monthly Report",
        taskDescription: "Prepare monthly performance report.",
        taskDate: "2026-06-05",
        category: "Reporting",
      },
    ],

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = localStorage.getItem("employees");
  const admin = localStorage.getItem("admin");

  console.log(JSON.parse(employees));
  console.log(JSON.parse(admin));
};
