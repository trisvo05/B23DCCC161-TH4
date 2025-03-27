interface SinhVien {
    ten: string;
    maSinhVien: string;
    ngaySinh: string;
  }
  
  interface TotNghiep {
    soQuyetDinh: string;
    ngayBanHanh: string;
    trichYeu: string;
    namTotNghiep: number;
  }
  
  interface PhuLucVanBang {
    danToc: string;
    noiSinh: string;
    diemTrungBinh: number;
    ngayNhapHoc: string;
  }
  
  interface VanBang {
    soHieuVanBang: string;
    soVanBangNamNao: number;
    maSinhVien: string;
    soQuyetDinh: string;
    phuLucId: string;
  }
  
  const LOCAL_STORAGE_KEYS = {
    SINH_VIEN: "sinh_vien",
    TOT_NGHIEP: "tot_nghiep",
    PHU_LUC_VAN_BANG: "phu_luc_van_bang",
    VAN_BANG: "van_bang",
  };
  
  const saveToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };
  
  const addSinhVien = (sinhVien: SinhVien) => {
    const sinhViens = getFromLocalStorage(LOCAL_STORAGE_KEYS.SINH_VIEN);
    sinhViens.push(sinhVien);
    saveToLocalStorage(LOCAL_STORAGE_KEYS.SINH_VIEN, sinhViens);
  };
  
  const addTotNghiep = (totNghiep: TotNghiep) => {
    const totNghieps = getFromLocalStorage(LOCAL_STORAGE_KEYS.TOT_NGHIEP);
    totNghieps.push(totNghiep);
    saveToLocalStorage(LOCAL_STORAGE_KEYS.TOT_NGHIEP, totNghieps);
  };
  
  const addPhuLucVanBang = (phuLuc: PhuLucVanBang) => {
    const phuLucs = getFromLocalStorage(LOCAL_STORAGE_KEYS.PHU_LUC_VAN_BANG);
    phuLucs.push(phuLuc);
    saveToLocalStorage(LOCAL_STORAGE_KEYS.PHU_LUC_VAN_BANG, phuLucs);
  };
  
  const addVanBang = (vanBang: VanBang) => {
    const vanBangs = getFromLocalStorage(LOCAL_STORAGE_KEYS.VAN_BANG);
    vanBangs.push(vanBang);
    saveToLocalStorage(LOCAL_STORAGE_KEYS.VAN_BANG, vanBangs);
  };
  
  export {
    addSinhVien,
    addTotNghiep,
    addPhuLucVanBang,
    addVanBang,
    getFromLocalStorage,
    LOCAL_STORAGE_KEYS,
  };
  