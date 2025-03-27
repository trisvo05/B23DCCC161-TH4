// import { addSinhVien, addTotNghiep, addPhuLucVanBang, addVanBang } from "./localStorageService";

// export const seedData = () => {
//   addSinhVien({
//     ten: "Nguyễn Văn A",
//     maSinhVien: "SV001",
//     ngaySinh: "2000-01-01",
//   });

//   addTotNghiep({
//     soQuyetDinh: "QD001",
//     ngayBanHanh: "2025-06-01",
//     trichYeu: "Tốt nghiệp xuất sắc",
//     namTotNghiep: 2025,
//   });

//   addPhuLucVanBang({
//     danToc: "Kinh",
//     noiSinh: "Hà Nội",
//     diemTrungBinh: 8.5,
//     ngayNhapHoc: "2020-09-01",
//   });

//   addVanBang({
//     soHieuVanBang: "VB001",
//     soVanBangNamNao: 2025,
//     maSinhVien: "SV001",
//     soQuyetDinh: "QD001",
//     phuLucId: "PL001",
//   });
// };


import { addSinhVien, addTotNghiep, addPhuLucVanBang, addVanBang, getFromLocalStorage, LOCAL_STORAGE_KEYS } from "./localStorageService";

export const seedData = () => {
  // Kiểm tra nếu đã có dữ liệu sinh viên thì không thêm nữa
  const existingStudents = getFromLocalStorage(LOCAL_STORAGE_KEYS.SINH_VIEN);
  if (existingStudents.length > 0) return; // Nếu có dữ liệu, thoát khỏi hàm

  console.log("Seeding initial data..."); // Kiểm tra xem có seed data hay không

  addSinhVien({
    ten: "Nguyễn Văn A",
    maSinhVien: "SV001",
    ngaySinh: "2000-01-01",
  });

  addTotNghiep({
    soQuyetDinh: "QD001",
    ngayBanHanh: "2025-06-01",
    trichYeu: "Tốt nghiệp xuất sắc",
    namTotNghiep: 2025,
  });

  addPhuLucVanBang({
    danToc: "Kinh",
    noiSinh: "Hà Nội",
    diemTrungBinh: 8.5,
    ngayNhapHoc: "2020-09-01",
  });

  addVanBang({
    soHieuVanBang: "VB001",
    soVanBangNamNao: 2025,
    maSinhVien: "SV001",
    soQuyetDinh: "QD001",
    phuLucId: "PL001",
  });
};
