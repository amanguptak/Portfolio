import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-amber-400" : "text-indigo-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold text-indigo-500 hover:text-indigo-600 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
       
        className="h-1  mt-2 mr-3 bg-amber-400"
      ></motion.div>
    </button>
  );
};

export default TabButton;
