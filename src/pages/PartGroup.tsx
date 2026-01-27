// import { useState } from "react";
// import { IPartGroup } from "../../utils/interface/SystemSetting/PartGroup";
// import {
//   PART_GROUP_ACTIVE_SORT,
//   PART_GROUP_TABLE,
// } from "../../utils/contanst/SystemSetting/PartGroup";

// import Card from "../../components/common/Card";
// import Typography from "../../components/common/Typography";
// import PartGroupForm from "../../components/SystemSetting/PartGroup/PartGroupForm";
// import PartGroupTable from "../../components/SystemSetting/PartGroup/PartGroupTable";
// import PartGroupSearch from "../../components/SystemSetting/PartGroup/PartGroupSearch";

// const PartGroup = () => {
//   const [partGroupData, setPartGroupData] = useState<IPartGroup | any>([]);

//   const [page, setPage] = useState(1);
//   const [getChooseRow, setGetChooseRow] = useState<IPartGroup | any>({});
//   const [refreshKey, setRefreshKey] = useState<number>(0);
//   const [openModal, setOpenModal] = useState<boolean>(false);
//   const [checkFunction, setCheckFunction] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [activeSort, setActiveSort] = useState(PART_GROUP_ACTIVE_SORT);

//   return (
//     <Card>
//       <Typography
//         name={"Part Group"}
//         className={
//           "text-2xl font-bold subpixel-antialiased tracking-wider mb-5"
//         }
//       />

//       <PartGroupSearch
//         page={page}
//         setPartGroupData={setPartGroupData as any}
//         setPage={setPage as any}
//         activeSort={activeSort}
//         setIsLoading={setIsLoading}
//         refreshKey={refreshKey}
//         setCheckFunction={setCheckFunction}
//         modal={openModal}
//         setModal={setOpenModal}
//         data={getChooseRow}
//         setRefreshKey={setRefreshKey}
//       />
//       <PartGroupTable
//         header={PART_GROUP_TABLE}
//         data={partGroupData}
//         page={page}
//         setPage={setPage as any}
//         getChooseRow={setGetChooseRow}
//         activeSort={activeSort}
//         setActiveSort={setActiveSort}
//         isLoading={isLoading}
//       />
//       {openModal && (
//         <PartGroupForm
//           data={getChooseRow}
//           setRefreshKey={setRefreshKey}
//           openModal={openModal}
//           setOpenModal={setOpenModal}
//           checkFunction={checkFunction}
//         />
//       )}
//     </Card>
//   );
// };

// export default PartGroup;
