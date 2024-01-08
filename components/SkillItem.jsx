import React from "react";

const HabilidadeItem = ({ icon, desc }) => {
  return (
    <div className="flex justify-between shadow-lg gap-4 shadow-gray-900 border border-[#0E3C89] rounded-lg mmd:py-2 mmd:px-4 py-4 px-6 items-center">
      {icon}
      <p className="flex font-extrabold flex-col items-center justify-center">
        {desc}
      </p>
    </div>
  );
};

export default HabilidadeItem;
