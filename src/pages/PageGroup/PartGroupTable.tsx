import { useEffect, useRef, useState } from "react";
import { PartGroupTableProps } from "../../../utils/props/SystemSetting/PartGroup";

import PartGroupTableHeader from "./PartGroupTable/PartGroupTableHeader";
import PartGroupTableBody from "./PartGroupTable/PartGroupTableBody";
import useDebouncedCallback from "../../../utils/hook/useDebouncedCallback";

const PartGroupTable = ({
  header,
  data,
  getChooseRow,
  activeSort,
  setActiveSort,
  isLoading,
  page,
  setPage,
  refreshKey,
}: PartGroupTableProps) => {
  const [activeRow, setActiveRow] = useState<null | number | undefined>(null);
  const [initialKey, setInitialKey] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const onActiveRow = (key: number, data: any) => {
    if (initialKey === key) {
      setActiveRow(null);
      if (getChooseRow) {
        getChooseRow({});
      }
      setInitialKey(null);
    } else {
      setActiveRow(key);
      if (getChooseRow) {
        getChooseRow(data);
      }

      setInitialKey(key);
    }
  };

  const handleSorting = (sortField: string, sortOrder: string): void => {
    setActiveSort({ sortField, sortOrder });
  };

  // FETCH
  const handleScroll = () => {
    if (tableRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = tableRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 200 && !isLoading) {
        setPage((prev: any) => prev + 1);
      }
    }
  };

  const debounceLog = useDebouncedCallback(async () => {
    handleScroll();
  }, 500);

  useEffect(() => {
    const tableElement = tableRef.current;

    if (tableElement) {
      tableElement.addEventListener("scroll", debounceLog);
    }
    return () => {
      if (tableElement) {
        tableElement.removeEventListener("scroll", debounceLog);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    setActiveRow(null);
    if (getChooseRow) {
      getChooseRow({});
    }
  }, [page, isLoading]);

  useEffect(() => {
    if (refreshKey) {
      setActiveRow(null);
      if (getChooseRow) {
        getChooseRow({});
      }
      setInitialKey(null);
    }
  }, [refreshKey]);

  // FETCH
  return (
    <div className="relative">
      <div ref={tableRef} className="max-h-[500px] overflow-x-auto">
        <table className="w-full min-w-max text-left mb-3">
          <PartGroupTableHeader
            header={header}
            activeSort={activeSort}
            handleSorting={handleSorting}
          />
          <PartGroupTableBody
            header={header}
            data={data}
            activeRow={activeRow}
            onActiveRow={onActiveRow}
          />
        </table>
      </div>
    </div>
  );
};

export default PartGroupTable;
