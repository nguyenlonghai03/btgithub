var SinhVien = function(masv, tensv, email, diemtoan, diemhoa, diemly, diemrenluyen, loaisinhvien, sex) { //Lớp đối tượng sinh viên
    this.maSinhVien = masv;
    this.tenSinhVien = tensv;
    this.email = email;
    this.diemToan = diemtoan;
    this.diemLy = diemly;
    this.diemHoa = diemhoa;
    this.diemRenLuyen = diemrenluyen;
    this.loaiSinhVien = loaisinhvien;
    this.sinhVienHuy == sinhVienX;
    this.xepLoai = function(){
        return 'Kem';
    };
    this.sex = sex;
    this.sinhVienHuy == sinhVienHai;
    this.sinhVienHai == sinhVienKai;
    this.tinhDiemTrungBinh = () => {
        var dtb = (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan)) / 3;
        return dtb;
        return 'Huy';
    }
}

