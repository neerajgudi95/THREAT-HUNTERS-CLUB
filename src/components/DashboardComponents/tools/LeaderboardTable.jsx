import React from "react";
import { MdOutlineScoreboard } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import moment from "moment/moment";

const LeaderboardTable = ({ module }) => {
  const getColor = (position) => {
    if (position === 0) return "#FFD93D";
    if (position === 1) return "#DBDFEA";
    if (position === 2) return "#874C62";
  };

  return (
    <>
      <h2 className="my-5 text-lg">{module.module}</h2>
      <div className="relative overflow-x-auto sm:rounded-lg my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-blue-950 text-gray-50 dark:bg-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3 text-lg">
                Name
              </th>
              <th scope="col" className="px-6 py-3 dark:text-gray-300">
                <MdOutlineScoreboard size="1.5rem" />
              </th>
              <th scope="col" className="px-6 py-3 dark:text-gray-300">
                <BiTimeFive size="1.5rem" />
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {module.leaderBoard.map((member, idx) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={idx}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {member.firstName} {member.lastName}
                </th>
                <td className="px-6 py-4">{member.marks}</td>
                <td className="px-6 py-4">
                  {moment.utc(+member.timeTaken).format("HH:mm:ss")}
                </td>
                <td className="px-4 py-4 text-center">
                  {idx < 2 && <FaMedal size="1.5rem" color={getColor(idx)} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderboardTable;
