import * as Yup from "yup";

import { useFormik } from "formik";
import { Toast } from "../../../utils/helper/Toasts";
import { PartGroupFormProps } from "../../../utils/props/SystemSetting/PartGroup";

import Input from "../../common/Input";
import Modal from "../../common/Modal/Modal";
import ModalBody from "../../common/Modal/ModalBody";
import ModalFooter from "../../common/Modal/ModalFooter";
import ModalHeader from "../../common/Modal/ModalHeader";
import PartGroupApi from "../../../api/PartGroup/PartGroup";
import useDebouncedCallback from "../../../utils/hook/useDebouncedCallback";

const PartGroupForm = ({
  data,
  setRefreshKey,
  openModal,
  setOpenModal,
  checkFunction,
}: PartGroupFormProps) => {
  let condition = {
    Part_No: Yup.string().required("Please do not leave it blank!"),
    Part_Name: Yup.string().required("Please enter Part No is exactly!"),
    Part_Group: Yup.string().required("Please do not leave it blank!"),
  };
  let validationSchema = Yup.object().shape(condition);

  // ACTION
  const formik = useFormik({
    initialValues: {
      Part_No: checkFunction === "edit" ? data.Part_No : "",
      Part_Name: checkFunction === "edit" ? data.Part_Name : "",
      Part_Group: checkFunction === "edit" ? data.Part_Group : "",
    },
    validationSchema,
    onSubmit: async (data) => {
      try {
        if (checkFunction === "add") {
          const response = await PartGroupApi.addPartGroup(data);

          if (response.data.status === 200) {
            Toast.fire({
              icon: "success",
              title: response.data.message,
            });
            setRefreshKey((oldKey: any) => oldKey + 1);
            setOpenModal(!openModal);
          } else {
            Toast.fire({
              icon: "error",
              title: response.data.message,
            });
          }
        } else {
          const response = await PartGroupApi.editPartGroup({
            ...data,
          });
          if (response.data.status === 200) {
            Toast.fire({
              icon: "success",
              title: response.data.message,
            });
            setRefreshKey((oldKey: any) => oldKey + 1);
            setOpenModal(!openModal);
          }
        }
      } catch (error: any) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  });
  const onChangePartNo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const Part_No = e.target.value;
    formik.setFieldValue("Part_No", Part_No);
    debouncePartNo(Part_No);
  };

  const debouncePartNo = useDebouncedCallback(async (Part_No: string) => {
    try {
      const response = await PartGroupApi.getPartNo(Part_No);
      if (response.status == 200) {
        formik.setFieldValue(
          "Part_Name",
          response.data.data[0]?.Part_Name ?? ""
        );
      }
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  }, 500);

  // ACTION

  return (
    <Modal
      alignModel="center"
      openModal={openModal}
      setOpenModal={setOpenModal}
      style={{ width: "600px" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <ModalHeader setOpenModal={setOpenModal}>
          {checkFunction === "edit" ? "Edit Part Group" : "Add Part Group"}
        </ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Input
                label={"Part No"}
                type="text"
                name="Part_No"
                classNameLabel="mb-3"
                value={formik.values.Part_No}
                onChange={onChangePartNo}
                helperText={
                  formik.errors.Part_No && formik.touched.Part_No
                    ? formik.errors.Part_No
                    : null
                }
                readonly={checkFunction === "edit" ? true : false}
              />
            </div>
            <div>
              <Input
                label={"Part Name"}
                type="text"
                name="Part_Name"
                value={formik.values.Part_Name}
                classNameLabel="mb-3"
                readonly={true}
                helperText={
                  formik.errors.Part_Name && formik.touched.Part_Name
                    ? formik.errors.Part_Name
                    : null
                }
              />
            </div>
            <div>
              <Input
                label={"Part Group"}
                type="text"
                name="Part_Group"
                classNameLabel="mb-3"
                value={formik.values.Part_Group}
                onChange={formik.handleChange}
                helperText={
                  formik.errors.Part_Group && formik.touched.Part_Group
                    ? formik.errors.Part_Group
                    : null
                }
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter setOpenModal={setOpenModal} />
      </form>
    </Modal>
  );
};

export default PartGroupForm;
