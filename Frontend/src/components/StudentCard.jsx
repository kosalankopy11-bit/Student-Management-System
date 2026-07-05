import React from "react";

const StudentCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-xl text-white text-2xl`}>
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StudentCard;