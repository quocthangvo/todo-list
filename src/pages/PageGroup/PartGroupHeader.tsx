import React from "react";
import { PartGroupTableHeaderProps } from "../../../../utils/props/SystemSetting/PartGroup";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const PartGroupTableHeader = ({
  header,
  activeSort,
  handleSorting,
}: PartGroupTableHeaderProps) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          {header.map((item, key) => (
            <th
              key={key}
              className={` w-[${item.width}] border-y border-blue-gray-100 bg-blue-gray-50/50 py-4 `}
            >
              <div className="flex flex-row justify-center items-center gap-2">
                {item.name}

                {item.name !== "" && (
                  <div className="cursor-pointer">
                    <div
                      className={`cursor-pointer ${
                        activeSort.sortField === item.state &&
                        activeSort.sortOrder === "asc"
                          ? "text-stone-700"
                          : ""
                      } `}
                      onClick={() => handleSorting(item.state, "asc")}
                    >
                      {item.state !== "Action" ? (
                        <MdKeyboardArrowUp size={16} />
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={`cursor-pointer ${
                        activeSort.sortField === item.state &&
                        activeSort.sortOrder === "desc"
                          ? "text-stone-700"
                          : ""
                      } `}
                      onClick={() => handleSorting(item.state, "desc")}
                    >
                      {item.state !== "Action" ? (
                        <MdKeyboardArrowDown size={16} />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  );
};

export default PartGroupTableHeader;
