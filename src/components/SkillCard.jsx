import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#40404d] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#dde6fd] to-[#ffffff] rounded-[7px]">{icon}</div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-black font-medium">{skillName}</p>
            <p className="text-xs text-secondary font-medium">{progress}%</p>
          </div>

          <div className="w-full bg-background rounded-md h-[5px] relative mt-2 overflow-hidden">
            <motion.div
              className="bg-primary h-[5px] rounded-md"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 text-justify leading-5 mt-2 overflow-wrap">{description}</p>
    </div>
  );
};

export default SkillCard;
