// import { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import { swalWithBootstrapButtons, Toast } from "../../../utils/helper/Toasts";
// import { PartGroupSearchProps } from "../../../utils/props/SystemSetting/PartGroup";

// import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

// import Input from "../../common/Input";
// import Button from "../../common/Button";
// import PartGroupApi from "../../../api/PartGroup/PartGroup";

// const PartGroupSearch = ({
//   page,
//   setPartGroupData,
//   setPage,
//   activeSort,
//   setIsLoading,
//   refreshKey,
//   setCheckFunction,
//   modal,
//   setModal,
//   data,
//   setRefreshKey,
// }: PartGroupSearchProps) => {
//   const [isSearch, setIsSearch] = useState(true);

//   // ACTION
//   const formik = useFormik({
//     initialValues: {
//       Part_No: "",
//       Part_Name: "",
//       Part_Group: "",
//     },
//     onSubmit: async (data) => {
//       setIsLoading(true);
//       try {
//         const response = await PartGroupApi.getPartGroupList(
//           1,
//           {
//             ...data,
//           },
//           activeSort
//         );

//         if (response.data.status === 200) {
//           setIsLoading(false);
//           setPartGroupData(response.data.data);
//           setPage(1);
//         }
//       } catch (error: any) {
//         Toast.fire({
//           icon: "error",
//           title: error.response.data.message,
//         });
//       }
//     },
//   });

//   const addPartGroup = () => {
//     setCheckFunction("add");
//     setModal(!modal);
//   };

//   const removePartGroup = () => {
//     if (Object.entries(data).length !== 0) {
//       swalWithBootstrapButtons
//         .fire({
//           title: "Are you sure?",
//           text: "You won't be able to recover this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: "Yes, delete it!",
//           cancelButtonText: "No, cancel",
//           reverseButtons: true,
//         })
//         .then(async (result) => {
//           if (result.isConfirmed) {
//             const response = await PartGroupApi.removePartGroup(data.Part_No);
//             if (response.data.status === 200) {
//               swalWithBootstrapButtons.fire({
//                 title: "Delete",
//                 text: response.data.message,
//                 icon: "success",
//               });
//               setRefreshKey((oldKey: any) => oldKey + 1);
//             } else {
//               swalWithBootstrapButtons.fire({
//                 title: "Error",
//                 text: response.data.message,
//                 icon: "error",
//               });
//             }
//           }
//         });
//     } else {
//       Toast.fire({
//         icon: "error",
//         title: "Please choose a data in table!",
//       });
//     }
//   };

//   const editPartGroup = async () => {
//     if (Object.entries(data).length !== 0) {
//       setCheckFunction("edit");
//       setModal(!modal);
//     } else {
//       Toast.fire({
//         icon: "error",
//         title: "Please choose a data in table!",
//       });
//     }
//   };
//   // ACTION

//   const fetchPartGroupList = async () => {
//     setIsLoading(true);
//     try {
//       const response = await PartGroupApi.getPartGroupList(
//         page,
//         {
//           Part_No: formik.values.Part_No,
//           Part_Name: formik.values.Part_Name,
//           Part_Group: formik.values.Part_Group,
//         },
//         activeSort
//       );
//       if (response.data.status === 200) {
//         setIsLoading(false);

//         if (page === 1) {
//           setPartGroupData(response.data.data);
//         } else {
//           setPartGroupData((prev: any[]) => [...prev, ...response.data.data]);
//         }
//       }
//     } catch (error: any) {
//       Toast.fire({
//         icon: "error",
//         title: error.response.data.message,
//       });
//     }
//   };

//   useEffect(() => {
//     fetchPartGroupList();
//   }, [page, activeSort, refreshKey]);

//   useEffect(() => {
//     setPage(1);
//   }, [activeSort, refreshKey]);
//   return (
//     <div className="relative mb-5">
//       <button
//         type="button"
//         className={
//           "flex flex-row items-center text-[#659cf9] text-lg  subpixel-antialiased tracking-wider mb-3"
//         }
//         onClick={() => setIsSearch((prev: boolean) => !prev)}
//       >
//         Search
//         {isSearch ? (
//           <MdKeyboardArrowDown size={23} />
//         ) : (
//           <MdKeyboardArrowRight size={23} />
//         )}
//       </button>
//       <form
//         className={` ${
//           isSearch ? "max-h-[1000px] mb-0" : "max-h-0"
//         } transition-all duration-500 ease-in-out overflow-hidden grid grid-cols-10 lg:grid-cols-2 sm:grid-cols-1 gap-2 pb-1 ps-1`}
//         onSubmit={formik.handleSubmit}
//       >
//         <div>
//           <Input
//             label={"Part No"}
//             type="text"
//             name="Part_No"
//             value={formik.values.Part_No}
//             onChange={formik.handleChange}
//           />
//         </div>
//         <div>
//           <Input
//             label={"Part Name"}
//             type="text"
//             name="Part_Name"
//             value={formik.values.Part_Name}
//             onChange={formik.handleChange}
//           />
//         </div>
//         <div>
//           <Input
//             label={"Part Group"}
//             type="text"
//             name="Part_Group"
//             value={formik.values.Part_Group}
//             onChange={formik.handleChange}
//           />
//         </div>
//         <div className="flex flex-row md:flex-row items-end md:items-start gap-2">
//           <Button
//             label={"Search"}
//             type="submit"
//             className="bg-[#3f83f8] hover:bg-[#3f83f8]/80 focus:ring-[#3f83f8]/60 whitespace-nowrap"
//           />
//           <Button
//             label={"Add"}
//             type="button"
//             className="bg-[#3f83f8] hover:bg-[#3f83f8]/80 focus:ring-[#3f83f8]/60 whitespace-nowrap"
//             onClick={addPartGroup}
//           />
//           <Button
//             label={"Edit"}
//             type="button"
//             className="bg-yellow-400  hover:bg-yellow-400/80 focus:ring-yellow-400/60"
//             onClick={editPartGroup}
//           />
//           <Button
//             label={"Remove"}
//             type="button"
//             className="bg-red-500  hover:bg-red-500/90 focus:ring-red-400/60"
//             onClick={removePartGroup}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PartGroupSearch;
