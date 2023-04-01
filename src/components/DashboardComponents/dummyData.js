import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SlDocs } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import {
  BsBoxSeam,
  // BsCurrencyRupee,
  BsShield,
  BsChatDots,
} from "react-icons/bs";
import { FiBarChart, FiCreditCard } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";

export const links = [
  {
    title: "Dashboard",
    linkItems: [
      {
        name: "home",
        icon: AiOutlineHome,
      },
    ],
  },

  {
    title: "Pages",
    linkItems: [
      {
        name: "notes",
        icon: SlDocs,
      },
      {
        name: "members",
        icon: FiUsers,
      },
      {
        name: "discussion",
        icon: BsChatDots,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const membersGrid = [
  {
    field: "fullName",
    headerText: "Name",
    width: "170",
    textAlign: "Center",
  },
  {
    field: "email",
    headerText: "Email",
    width: "170",
    textAlign: "Center",
  },
  {
    field: "joinDate",
    headerText: "Join Date",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "profession",
    headerText: "Profession",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "phoneNo",
    headerText: "Phone",
    width: "125",
    textAlign: "Center",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#82CD47",
  },
];

export const notesGrid = [
  {
    field: "name",
    headerText: "Name",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "topic",
    headerText: "Topic",
    width: "170",
    textAlign: "Center",
  },
  {
    field: "timestamp",
    headerText: "Posted on",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "path",
    headerText: "Download Link",
    width: "120",
    textAlign: "Center",
  },
];

export const chatData = [
  {
    name: "NI",
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    name: "NG",
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    name: "NK",
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    name: "VL",
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const userProfileData = [
  // {
  //   icon: <BsCurrencyRupee />,
  //   title: "My Profile",
  //   desc: "Account Settings",
  //   iconColor: "#03C9D7",
  //   iconBg: "#E5FAFB",
  // },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
