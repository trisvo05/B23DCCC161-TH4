import React, { useEffect, useState } from "react";
import { seedData } from "../../utils/dataSeeder";
import { getFromLocalStorage, LOCAL_STORAGE_KEYS } from "../../utils/localStorageService";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    seedData(); // Chạy khi ứng dụng khởi động để tạo dữ liệu mẫu

    // Lấy danh sách sinh viên từ LocalStorage
    const data = getFromLocalStorage(LOCAL_STORAGE_KEYS.SINH_VIEN);
    setStudents(data);
  }, []);

  return (
    <div>
      <h1>Quản lý Văn Bằng</h1>

      <h2>Danh sách Sinh Viên</h2>
      <ul>
        {students.map((student: any, index: number) => (
          <li key={index}>
            {student.ten} - {student.maSinhVien} - {student.ngaySinh}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

