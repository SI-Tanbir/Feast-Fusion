import React from 'react';

const HeaderTitles = ({ mainheading, subheading }) => {
  return (
    <div className="m-4 flex flex-col items-center">
      <span className="text-center  text-[#D99904]   py-2">
        {subheading}
      </span>
      <span className="text-center text-4xl uppercase border-t-2 border-b-2 py-2 mt-4">
        {mainheading}
      </span>
    </div>
  );
};

export default HeaderTitles;
