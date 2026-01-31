export interface Project {
  title: string
  role: string
  description: string
  url: string
  previewImage: string
}

export const UserProjectsData: Project[] = [
  {
    title: "StartEase",
    role: "Creator and Maintainer",
    description:
      "StartEase is a command-line interface (CLI) tool designed to streamline project setup. It provides effortless scaffolding for various frontend, backend, and full-stack projects, supporting popu[...]",
    url: "https://github.com/JC-Coder/startease",
    previewImage: "https://iili.io/2xguHU7.md.png",
  },

  {
    title: "SkulBell – Lecture Reminder App",
    role: "Mobile App Developer",
    description:
      "SkulBell is a productivity app built for university students to manage their weekly lecture schedules. It features local notifications, offline data persistence, and a smooth React Native UI that[...]",
    url: "https://github.com/Smartnaka/Skulbell",
    previewImage: "https://i.postimg.cc/25cY6PtS/icongenius-standard-2.png",
  },

  {
    title: "Driver Booking Platform (DriveMe Clone)",
    role: "Backend Developer",
    description:
      "A full driver booking prototype built with PHP and MySQL. Features include driver registration, booking flow, instant Paystack payments, user authentication, and an admin dashboard for managing d[...]",
    url: "https://github.com/Smartnaka/prodrivers",
    previewImage: "https://i.postimg.cc/8cGZVCbJ/images-(8).jpg",
  },

  {
    title: "RemindMe",
    role: "Creator",
    description:
      "RemindMe is a sleek, intelligent lecture scheduling assistant designed to help students never miss a class. Built with TypeScript, it provides smart scheduling, local notifications, offline support, and an intuitive UI for managing lectures and reminders.",
    url: "https://github.com/Smartnaka/remindme",
    previewImage: "https://via.placeholder.com/600x400.png?text=RemindMe"
  }
]
