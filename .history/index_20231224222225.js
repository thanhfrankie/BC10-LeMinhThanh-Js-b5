// Bài tập 1
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Xét các trường hợp
 * + nếu có môn điểm 0 => rớt
 * + chọn điểm chuẩn: ví dụ: 25
 * + tính điểm ưu tiên
 * + tính điểm tổng kết = tổng 3 môn thi + điểm ưu tiên
 * + so sánh điểm tổng kết và điểm chuẩn để kết luận đậu hay rớt
 * + gán sự kiện cho button
 * B3: hiển thị kết quả
 */
function tuyenSinh() {
  var diemMon1 = document.getElementById("diem-mon-thu-1").value * 1;
  var diemMon2 = document.getElementById("diem-mon-thu-2").value * 1;
  var diemMon3 = document.getElementById("diem-mon-thu-3").value * 1;
  var khuVucA = 2;
  var khuVucB = 1;
  var khuVucC = 0.5;
  var doiTuong1 = 2.5;
  var doiTuong2 = 1.5;
  var doiTuong3 = 1;
  var diemKhuVuc = document.getElementById("khu-vuc").value;
  var diemDoiTuong = document.getElementById("doi-tuong").value * 1;
  var diemUuTien = 0;
  var diemTongKet = 0;
  var ketQua = document.getElementById("ket-qua-cuoi-cung");
  var tongDiem3Mon = diemMon1 + diemMon2 + diemMon3;
  var diemChuan = document.getElementById("diem-chuan").value * 1;
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    ketQua.innerText = `Kết quả: Rớt!!!`;
  }
  if (
    diemKhuVuc !== "A" ||
    diemKhuVuc !== "B" ||
    diemKhuVuc !== "C" ||
    diemDoiTuong !== 1 ||
    diemDoiTuong !== 2 ||
    diemDoiTuong !== 3
  ) {
    ketQua.innerText = `Vui lòng chọn khu vực và đối tượng`;
  }
  if (diemKhuVuc === "A" && diemDoiTuong == 1) {
    diemUuTien = khuVucA + doiTuong1;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "A" && diemDoiTuong == 2) {
    diemUuTien = khuVucA + doiTuong2;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "A" && diemDoiTuong == 3) {
    diemUuTien = khuVucA + doiTuong3;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "B" && diemDoiTuong == 1) {
    diemUuTien = khuVucB + doiTuong1;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "B" && diemDoiTuong == 2) {
    diemUuTien = khuVucB + doiTuong2;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "B" && diemDoiTuong == 3) {
    diemUuTien = khuVucB + doiTuong3;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "C" && diemDoiTuong == 1) {
    diemUuTien = khuVucC + doiTuong1;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "C" && diemDoiTuong == 2) {
    diemUuTien = khuVucC + doiTuong2;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
  if (diemKhuVuc === "C" && diemDoiTuong == 3) {
    diemUuTien = khuVucC + doiTuong3;

    diemTongKet = tongDiem3Mon + diemUuTien;
    if (diemTongKet < diemChuan) {
      return (ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`);
    }
    return (ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `);
  }
}

// Bài tập 2
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính tiền điện
 * + tạo biến để tính số tiền điện theo kw
 * + xét các trường hợp tiêu thụ điện và tính số tiền tương ứng
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function tinhTienDien() {
  var hoTen = document.getElementById("ho-ten").value;
  var soKw = document.getElementById("so-kw").value * 1;
  var ketQua = document.getElementById("thong-tin-hoa-don");
  var tienPhaiTra = 0;
  if (soKw <= 50) {
    tienPhaiTra = soKw * 500;
    return (ketQua.innerText = `Họ tên: ${hoTen}, Tiền điện: ${tienPhaiTra}`);
  }
  if (50 < soKw && soKw <= 100) {
    tienPhaiTra = 50 * 500 + (soKw - 50) * 650;
    return (ketQua.innerText = `Họ tên: ${hoTen}, Tiền điện: ${tienPhaiTra}`);
  }
  if (100 < soKw && soKw <= 200) {
    tienPhaiTra = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    return (ketQua.innerText = `Họ tên: ${hoTen}, Tiền điện: ${tienPhaiTra}`);
  }
  if (200 < soKw && soKw <= 350) {
    tienPhaiTra = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    return (ketQua.innerText = `Họ tên: ${hoTen}, Tiền điện: ${tienPhaiTra}`);
  }
  if (soKw > 350) {
    tienPhaiTra =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    return (ketQua.innerText = `Họ tên: ${hoTen}, Tiền điện: ${tienPhaiTra}`);
  }
}

// Bài tập 3
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính thuế thu nhập cá nhân
 * + tạo biến để tính tiền thuế theo công thức
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function tinhTienThue() {
  var hoTen = document.getElementById("nguoi-tinh-thue").value
  var thuNhapNam = document.getElementById("thu-nhap-nam").value*1
  var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1
  var thuNhapChiuThue = document.getElementById("tinh-tien-thue")
  var tienThuNhapCaNhan = 0
  if (thuNhapNam > 0 &&thuNhapNam <= 60e+6) {
    tienThuNhapCaNhan = (thuNhapNam* 0.05 - 4e+6 - soNguoiPhuThuoc * 1.6e+6)/12
    return thuNhapChiuThue.innerHTML= `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tienThuNhapCaNhan} VND `
  }
  if (thuNhapNam > 60e+6 && thuNhapNam <=120e+6) {
    tienThuNhapCaNhan = ((60e+6*0.05 +(thuNhapNam-60)*0.1) - 4e+6 - soNguoiPhuThuoc * 1.6e+6)/12
    return thuNhapChiuThue.innerHTML= `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tienThuNhapCaNhan} VND `
  }
  if (thuNhapNam > 120e+6 && thuNhapNam <=210e+6) {
    tienThuNhapCaNhan = ((60e+6*0.05+60e+6 * 0.1 +(thuNhapNam-120)*0.15) - 4e+6 - soNguoiPhuThuoc * 1.6e+6)/12
    return thuNhapChiuThue.innerHTML= `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tienThuNhapCaNhan} VND `
  }
  if (thuNhapNam > 210e+6 && thuNhapNam <=384e+6) {
    tienThuNhapCaNhan = ((60e+6*0.05+60e+6 * 0.1 + 90e+6 * 0.15 +(thuNhapNam-210)*0.2) - 4e+6 - soNguoiPhuThuoc * 1.6e+6)/12
    return thuNhapChiuThue.innerHTML= `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tienThuNhapCaNhan} VND `
  }
  if (thuNhapNam > 384e+6 && thuNhapNam <=624e+6) {
    tienThuNhapCaNhan = ((60e+6*0.05+60e+6 * 0.1 + 90e+6 * 0.15 +174 * 0.2 +(thuNhapNam-384)*0.25) - 4e+6 - soNguoiPhuThuoc * 1.6e+6)/12
    return thuNhapChiuThue.innerHTML= `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tienThuNhapCaNhan} VND `
  }
  if (thuNhapNam > 624e+6 && thuNhapNam <=960e+6) {
    tienThuNhapCaNhan = ((60e+6*0.05+60e+6 * 0.1 + 90e+6 * 0.15 +174 * 0.2 + 240 * 0.25 +(thuNhapNam-624)*0.3) - 4e+6 - soNguoiPhuThuoc * 1.6e+6)/12
    return thuNhapChiuThue.innerHTML= `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tienThuNhapCaNhan} VND `
  }
  if (thuNhapNam > 960e+6 ) {
    tienThuNhapCaNhan = ((60e+6*0.05+60e+6 * 0.1 + 90e+6 * 0.15 +174 * 0.2 + 240 * 0.25 +336 *0.35  +(thuNhapNam-960)*0.3) - 4e+6 - soNguoiPhuThuoc * 1.6e+6)/12
    return thuNhapChiuThue.innerHTML= `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${tienThuNhapCaNhan} VND `
  }
}



// Bài tập 4
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính tiền cáp
 * + gắn sự kiện onchange cho button để kiểm tra có phải Doanh Nghiệp hay không
 * + xét các trường hợp nhà dân, doanh nghiệp để tính hóa đơn
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function chonKhachHang() {
  var khachHang = document.getElementById("khach-hang").value;
  var soKetNoi = document.getElementById("so-ket-noi");

  if (khachHang === "Doanh Nghiệp") {
    soKetNoi.style.display = "block";
  } else {
    soKetNoi.style.display = "none";
  }
}

function tinhTienCap() {
  var khachHang = document.getElementById("khach-hang").value;
  var maKhachHang = document.getElementById("ma-khach-hang").value;
  var kenhCaoCap = document.getElementById("kenh-cao-cap").value;
  var soKetNoi = document.getElementById("so-ket-noi").value;
  var hoaDonTienCap = document.getElementById("hoa-don-tien-cap");
  var tongTienPhaiTra = 0;
  var phiXuLyHoaDonNhaDan = 4.5;
  var phiDichVuCoBanNhaDan = 20.5;
  var thueKenhCaoCapNhaDan = 7.5;
  var phiXuLyHoaDonDoanhNghiep = 15;
  var phiDichVuCoBanDoanhNghiep = 0;
  var thueKenhCaoCapDoanhNghiep = 50;
  if (khachHang === "Nhà Dân") {
    tongTienPhaiTra =
      phiXuLyHoaDonNhaDan +
      phiDichVuCoBanNhaDan +
      thueKenhCaoCapNhaDan * kenhCaoCap;
    hoaDonTienCap.innerHTML = ` Khách hàng: ${maKhachHang}, tiền cáp: ${tongTienPhaiTra}  `;
  }
  if (khachHang === "Doanh Nghiệp") {
    if (soKetNoi > 0 && soKetNoi <= 10) {
      phiDichVuCoBanDoanhNghiep = 75;
    }
    if (soKetNoi > 10) {
      phiDichVuCoBanDoanhNghiep = 75 + (soKetNoi - 10) * 5;
    }
    tongTienPhaiTra =
      phiXuLyHoaDonDoanhNghiep +
      phiDichVuCoBanDoanhNghiep +
      thueKenhCaoCapDoanhNghiep * kenhCaoCap;
  }
  hoaDonTienCap.innerHTML = ` Khách hàng: ${khachHang}, tiền cáp: ${tongTienPhaiTra}  `;
}
