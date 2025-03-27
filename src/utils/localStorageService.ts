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
  
  const addItem = (key: string, item: any) => {
    const items = getFromLocalStorage(key);
    items.push(item);
    saveToLocalStorage(key, items);
  };
  
  const updateItem = (key: string, idField: string, id: string, newData: any) => {
    const items = getFromLocalStorage(key);
    const index = items.findIndex((item: any) => item[idField] === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...newData };
      saveToLocalStorage(key, items);
    }
  };
  
  const deleteItem = (key: string, idField: string, id: string) => {
    const items = getFromLocalStorage(key).filter((item: any) => item[idField] !== id);
    saveToLocalStorage(key, items);
  };
  
  export {
    addItem,
    updateItem,
    deleteItem,
    getFromLocalStorage,
    LOCAL_STORAGE_KEYS,
  };