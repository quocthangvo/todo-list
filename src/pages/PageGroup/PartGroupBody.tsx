// import { ConvertAllDate } from "../../../../utils/helper/convert";
// import { PartGroupTableBodyProps } from "../../../../utils/props/SystemSetting/PartGroup";
// import Typography from "../../../common/Typography";
// import NoData from "../../../../assets/images/no-data.jpg";

// const PartGroupTableBody = ({
//   header,
//   data,
//   activeRow,
//   onActiveRow,
// }: PartGroupTableBodyProps) => {
//   return (
//     <tbody>
//       {data?.length === 0 ? (
//         <tr>
//           <td colSpan={header?.length} className="text-center px-4 py-4">
//             <div className="relative my-5">
//               <img
//                 src={NoData}
//                 alt="no_data"
//                 className="block w-[119px] object-cover m-auto"
//               />
//               <Typography
//                 className="text-xl text-slate-600 font-bold"
//                 name="No data available"
//               />
//             </div>
//           </td>
//         </tr>
//       ) : (
//         data.map((item, index) => {
//           return (
//             <tr
//               key={index}
//               className={`${
//                 index % 2 === 0
//                   ? activeRow === index
//                     ? "bg-[#2159de]/60 text-white"
//                     : "bg-white dark:bg-[#202940] dark:text-white"
//                   : activeRow === index
//                   ? "bg-[#2159de]/60 text-white"
//                   : "bg-slate-50 dark:bg-[#202940] dark:text-white"
//               } transition-all ease-linear duration-100 border-b dark:border-none cursor-pointer`}
//               onClick={() => onActiveRow(index, item)}
//             >
//               <td className="text-center py-4 border-b border-x">
//                 {item.Part_No}
//               </td>
//               <td className="text-center py-4 border-b border-x">
//                 {item.Part_Name}
//               </td>
//               <td className="text-center py-4 border-b border-x">
//                 {item.Part_Group}
//               </td>
//               <td className="text-center py-4 border-b border-x">
//                 {item.Created_User}
//               </td>
//               <td className="text-center py-4 border-b border-x">
//                 {ConvertAllDate(item.Dated_User)}
//               </td>
//             </tr>
//           );
//         })
//       )}
//     </tbody>
//   );
// };

// export default PartGroupTableBody;
