import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-12 gap-4 w-full h-full justify-center border-solid border-2 border-red-500">
      <div className="col-span-3 border-solid border-2 p-2">
        <h1>This Left side</h1>
      </div>
      <div className="col-span-6 border-solid border-2 p-2">
        <h1>This Main Content</h1>
      </div>
      <div className="col-span-3 border-solid border-2 p-2">
        <h1>This right side</h1>
      </div>
    </div>
  );
};

export default page;
