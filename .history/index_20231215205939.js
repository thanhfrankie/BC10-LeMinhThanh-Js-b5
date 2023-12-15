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
  var diemChuan = document.getElementById("diem-chuan").value * 1;
  var diemMon1 = document.getElementById("diem-mon-thu-1").value * 1;
  var diemMon2 = document.getElementById("diem-mon-thu-2").value * 1;
  var diemMon3 = document.getElementById("diem-mon-thu-3").value * 1;
  var tongDiem3Mon = diemMon1 + diemMon2 + diemMon3;
  var khuVucA = 2;
  var khuVucB = 1;
  var khuVucC = 0.5;
  var doiTuong1 = 2.5;
  var doiTuong2 = 1.5;
  var doiTuong3 = 1;
  var isKhuVucUuTien = true;
  var isDoiTuongUuTien = true;
  var diemKhuVuc = document.getElementById("khu-vuc").value;
  var diemDoiTuong = document.getElementById("doi-tuong").value*1;
  var diemUuTien;
  var diemTongKet;
  var ketQua = document.getElementById("ket-qua-cuoi-cung");

  if (diemMon1 || diemMon2 || diemMon3 == 0) {
    ketQua.innerText = `Kết quả: Rớt!!!`;
  }

  if (!isDoiTuongUuTien && !isKhuVucUuTien) {
    diemUuTien === 0;
    diemTongKet = tongDiem3Mon;
    if (diemTongKet < diemChuan) {
      ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
    }
    ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
  }
  if (!isDoiTuongUuTien && isKhuVucUuTien) {
    if (diemKhuVuc == "A") {
      diemKhuVuc = khuVucA;
      diemUuTien = diemKhuVuc;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemKhuVuc == "B") {
      diemKhuVuc = khuVucB;
      diemUuTien = diemKhuVuc;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemKhuVuc == "C") {
      diemKhuVuc = khuVucC;
      diemUuTien = diemKhuVuc;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
  }
  if (isDoiTuongUuTien && !isKhuVucUuTien) {
    if (diemDoiTuong == "1") {
      diemDoiTuong = doiTuong1;
      diemUuTien = diemDoiTuong;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == "2") {
      diemDoiTuong = doiTuong2;
      diemUuTien = diemDoiTuong;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == "3") {
      diemDoiTuong = doiTuong3;
      diemUuTien = diemDoiTuong;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
  }
  if (isDoiTuongUuTien && isKhuVucUuTien) {
    if (diemDoiTuong == 1 && diemKhuVuc == "A") {
      diemUuTien = doiTuong1 + khuVucA;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 1 && diemKhuVuc == "B") {
      diemUuTien = doiTuong1 + khuVucB;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 1 && diemKhuVuc == "C") {
      diemUuTien = doiTuong1 + khuVucC;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 2 && diemKhuVuc == "A") {
      diemUuTien = doiTuong2 + khuVucA;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 2 && diemKhuVuc == "B") {
      diemUuTien = doiTuong2 + khuVucB;

      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 2 && diemKhuVuc == "C") {
      diemUuTien = doiTuong2 + khuVucC;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 3 && diemKhuVuc == "A") {
      diemUuTien = doiTuong2 + khuVucC;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 3 && diemKhuVuc == "B") {
      diemUuTien = doiTuong2 + khuVucB;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
    if (diemDoiTuong == 3 && diemKhuVuc == "C") {
      diemUuTien = doiTuong3 + khuVucC;
      diemTongKet = tongDiem3Mon + diemUuTien;
      if (diemTongKet < diemChuan) {
        ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`;
      }
      ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `;
    }
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
    var hoTen = document.getElementById("ho-ten").value
    var soKw = document.getElementById("so-kw").value * 1
    
    if (soKw <= 50) {
        
    }
    if (50 <soKw <= 100) {
        
    }
    if (100< soKw <= 200) {
        
    }
    if (200< soKw <= 350) {
        
    }
    if (200< soKw > 350) {
        
    }
}


// Bài tập 3
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính lương
 * + tạo biến để tính lương: lương 1 ngày * số ngày làm
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
