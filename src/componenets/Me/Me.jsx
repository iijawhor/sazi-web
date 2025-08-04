import React from "react";
import { Link } from "react-router-dom";
import { Actions } from "../../allFiles.js";
const Me = () => {
  const meHeaders = [{ name: "Attendance" }, { name: "Leave" }];
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="navbar bg-base-100 !p-2 !h-[40px] !min-h-[40px] shadow-sm">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            {meHeaders.map((item, index) => (
              <li
                key={index}
                className="text-black text-xs font-semibold tracking-wider"
              >
                <Link className="hover:bg-transparent bg-transparent">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* me header ends here */}
      {/* cards starts here */}
      <section className="!p-2 h-fit">
        <div className="flex gap-2">
          {/* card-1 */}
          <div className="flex flex-col w-full gap-1">
            <h1 className="font-mono">Attendance</h1>
            <div className="card h-48 w-full !p-1 bg-white text-black flex flex-col shadow-sm">
              <div className="card-actions justify-start h-full">Up</div>
              <hr className="border-base-300" />
              <div className="card-actions justify-start h-full items-start ">
                down
              </div>
            </div>
          </div>
          {/* card-1 ends here */}
          {/* card-2 */}
          <div className="flex flex-col w-full gap-1">
            <h1 className="font-sa">Timings</h1>
            <div className="card h-48 w-full !p-1 bg-white text-black flex flex-col shadow-sm">
              <div className="card-actions justify-start h-full">Up</div>
              <hr className="border-base-300" />
              <div className="card-actions justify-start h-full items-start ">
                down
              </div>
            </div>
          </div>
          {/* card-2 ends here */}
          {/*Actions*/}
          <div className="w-full">
            <Actions />
          </div>
          {/* Actions ends here */}
        </div>

        {/* cards ends here */}
      </section>
      {/* section for all contents ends here */}
      {/* logs and requests sections starts here */}
      <section className="!p-2 h-full">
        <h1 className="font-mono">Logs & Requests</h1>
      </section>
      {/* logs and requests sections ends here */}
    </div>
  );
};

export default Me;
