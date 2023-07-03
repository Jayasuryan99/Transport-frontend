import React, { useEffect, useState } from "react";
import SideNavbar from "../sideNavbar.jsx";
import {
  Space,
  Table,
  Tag,
  Select,
  Modal,
  Form,
  Input,
  Button,
  notification,
} from "antd";
import axios from "axios";
import { get } from "lodash";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function Vehicle() {
  const [Vehicle, setVehicle] = useState([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [updateId, setUpdateId] = useState("");

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:4001/api/vehicle");
      setVehicle(get(result, "data.message"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (value) => {
    if (updateId === "") {
      try {
        await axios.post("http://localhost:4001/api/vehicle", value);
        fetchData();
        notification.success({ message: "Vehicle Added successfully" });
        setOpen(false);
      } catch (err) {
        notification.error({ message: "Something went wrong" });
      }
    } else {
      try {
        await axios.put(
          `http://localhost:4001/api/vehicle/${updateId}`,
          value
        );
        fetchData();
        notification.success({ message: "Vehicle updated successfully" });
        setOpen(false);
        form.setFieldValue([]);
        setUpdateId("");
      } catch (err) {
        notification.error({ message: "Something went wrong" });
      }
    }
  };

  const handleEdit = (value) => {
    form.setFieldsValue(value);
    setUpdateId(value._id);
    setOpen(true);
  };

  const handleDelete = async(value) => {
    try {
      await axios.delete(`http://localhost:4001/api/vehicle/${value._id}`)
      fetchData()
      notification.success({message:"Deleted Successfully"})
    } catch (err) {
      notification.error({message:"Something Went Wrong"})
    }
  }

  const columns = [
    {
      title: "DocEntry",
      dataIndex: "DocEntry",
      key: "DocEntry",
      render: (text) => <div className="!text-[16px]">{text}</div>,
    },

    {
      title: "VehicleNo",
      dataIndex: "VehicleNo",
      key: "VehicleNo",
      render: (text) => <div className="!text-[16px]">{text}</div>,
    },
    {
      title: "DriverName",
      dataIndex: "DriverName",
      key: "DriverName",
      render: (text) => <div className="!text-[16px]">{text}</div>,
    },
    {
      title: "DriverPhone",
      dataIndex: "DriverPhone",
      key: "DriverPhone",
      render: (text) => <div className="!text-[16px]">{text}</div>,
    },
    {
      title: "WhatsappNo",
      dataIndex: "WhatsappNo",
      key: "WhatsappNo",
      render: (text) => <div className="!text-[16px]">{text}</div>,
    },
    {
      title: "PAN",
      dataIndex: "PAN",
      key: "PAN",
      render: (text) => <div className="!text-[16px]">{text}</div>,
    },
    {
      title: "RCName",
      dataIndex: "RCName",
      key: "RCName",
      render: (text) => <div className="!text-[16px]">{text}</div>,
    },
    
    {
      title: "Actions",
      render: (text) => (
        <div className="flex gap-1">
          <div>
            <EditNoteOutlinedIcon
              className="!text-md text-green-500 cursor-pointer"
              onClick={() => handleEdit(text)}
            />
          </div>

          <div>
            <DeleteOutlineOutlinedIcon className="!text-md text-green-500 cursor-pointer " onClick={()=>{handleDelete(text)}} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex pt-[15vh] pl-4">
      <div className="w-[75vw] flex flex-col gap-10">
        <div className="flex items-center justify-center">
          <Select placeholder="seach here" size="large" className="w-1/2" />
        </div>
        <div className="  w-full">
          <div
            className="float-right w-[120px] py-1 rounded-md cursor-pointer text-white font-bold  flex items-center justify-center bg-green-500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddOutlinedIcon /> Create
          </div>
        </div>
        <Table columns={columns} dataSource={Vehicle} />
      </div>
      <Modal
        open={open}
        width={700}
        onCancel={() => {
          setOpen(!open);
          form.setFieldValue([]);
          setUpdateId("");
        }}
        footer={false}
      >
        <Form
          className="grid grid-cols-2 gap-4"
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
        >
          <Form.Item
            label={<p className="!text-[16px] font-semibold">DocEntry</p>}
            name="docentry"
            rules={[
              {
                required: true,
                message: "Please input your docentry!",
              },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>
          <Form.Item
            label={<p className="!text-[16px] font-semibold">VehicleNo</p>}
            name="vehicle no"
            rules={[
              {
                required: true,
                message: "Please input your vehicle no!",
              },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>
          <Form.Item
            label={<p className="!text-[16px] font-semibold">DriverName</p>}
            name="drivername"
            rules={[
              {
                required: true,
                message: "Please input your drivername!",
              },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>

          <Form.Item
            label={<p className="!text-[16px] font-semibold">DriverPhone</p>}
            name="driverphone"
            rules={[
              {
                required: true,
                message: "Please input your driver phone!",
              },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>

          <Form.Item
            label={<p className="!text-[16px] font-semibold">Whatsapp No</p>}
            name="whatsappno"
            rules={[
              {
                required: true,
                message: "Please input your whatsapp no!",
              },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>
          <Form.Item
            label={<p className="!text-[16px] font-semibold">PAN</p>}
            name="pan"
            rules={[
              {
                required: true,
                message: "Please input your pan!",
              },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>
          <Form.Item
            label={<p className="!text-[16px] font-semibold">RCName</p>}
            name="rcname"
            rules={[
              {
                required: true,  
                message: "Please input your RCName!",
              },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>
          <Form.Item label={<p className="!text-[16px] font-semibold">AccNo</p>}
           name="accno"
        rules={[
            {
                required: true,  
                message: "Please input your AccNo!",
              },
          ]}
          >
             <Input type="text" size="large" />
          </Form.Item>
          <Form.Item label={<p className="!text-[16px] font-semibold">IFSCCode</p>}
           name="ifsccode"
        rules={[
            {
                required: true,  
                message: "Please input your IFSCCode!",
              },
          ]}
          >
            <Input type="text" size="large" />
            </Form.Item> 

 <div className="save">
          <Form.Item className="w-[40vw]">
            <Button
              htmlType="submit"
              className="bg-green-500 w-[130px] float-left text-white font-bold tracking-wider"
            >
              {updateId === "" ? "Save" : "Update"}
            </Button>
          </Form.Item>
 </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Vehicle;