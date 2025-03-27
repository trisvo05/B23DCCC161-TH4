import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import {
  addItem,
  updateItem,
  deleteItem,
  getFromLocalStorage,
  LOCAL_STORAGE_KEYS,
} from "../../utils/localStorageService";

interface SinhVien {
  ten: string;
  maSinhVien: string;
  ngaySinh: Date;
}

const SinhVienPage: React.FC = () => {
  const [data, setData] = useState<SinhVien[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSinhVien, setEditingSinhVien] = useState<SinhVien | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    setData(getFromLocalStorage(LOCAL_STORAGE_KEYS.SINH_VIEN));
  }, []);

  const handleAddOrUpdate = (values: SinhVien) => {
    if (editingSinhVien) {
      updateItem(LOCAL_STORAGE_KEYS.SINH_VIEN, "maSinhVien", editingSinhVien.maSinhVien, values);
    } else {
      addItem(LOCAL_STORAGE_KEYS.SINH_VIEN, values);
    }
    setData(getFromLocalStorage(LOCAL_STORAGE_KEYS.SINH_VIEN));
    setIsModalOpen(false);
    setEditingSinhVien(null);
    form.resetFields();
  };

  const handleDelete = (maSinhVien: string) => {
    deleteItem(LOCAL_STORAGE_KEYS.SINH_VIEN, "maSinhVien", maSinhVien);
    setData(getFromLocalStorage(LOCAL_STORAGE_KEYS.SINH_VIEN));
  };

  const columns = [
    { title: "Tên", dataIndex: "ten", key: "ten" },
    { title: "Mã Sinh Viên", dataIndex: "maSinhVien", key: "maSinhVien" },
    { title: "Ngày Sinh", dataIndex: "ngaySinh", key: "ngaySinh" },
    {
      title: "Hành động",
      key: "actions",
      render: (record: SinhVien) => (
        <>
          <Button
            onClick={() => {
              setEditingSinhVien(record);
              form.setFieldsValue(record);
              setIsModalOpen(true);
            }}
            style={{ marginRight: 8 }}
          >
            Sửa
          </Button>
          <Button danger onClick={() => handleDelete(record.maSinhVien)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)} style={{ marginBottom: 16 }}>
        Thêm Sinh Viên
      </Button>
      <Table dataSource={data} columns={columns} rowKey="maSinhVien" />
      
      <Modal
        title={editingSinhVien ? "Cập nhật Sinh Viên" : "Thêm Sinh Viên"}
        visible={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingSinhVien(null);
          form.resetFields();
        }}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleAddOrUpdate}>
          <Form.Item name="ten" label="Tên" rules={[{ required: true, message: "Vui lòng nhập tên" }]}> 
            <Input />
          </Form.Item>
          <Form.Item name="maSinhVien" label="Mã Sinh Viên" rules={[{ required: true, message: "Vui lòng nhập mã sinh viên" }]}> 
            <Input disabled={!!editingSinhVien} />
          </Form.Item>
          <Form.Item name="ngaySinh" label="Ngày Sinh" rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}> 
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SinhVienPage;