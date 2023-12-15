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
    var diemMon1 = document.getElementById("diem-mon-thu-1").value*1
    var diemMon2 =document.getElementById("diem-mon-thu-2").value*1
    var diemMon3 = document.getElementById("diem-mon-thu-3").value * 1
    var tongDiem3Mon = diemMon1 + diemMon2 + diemMon3
    var khuVucA = 2
    var khuVucB = 1
    var khuVucA = 0.5
    var doiTuong1 = 
    var doiTuong1 = 
    var doiTuong1 = 
    var diemKhuVuc = document.getElementById("khu-vuc").value
    var diemDoiTuong = document.getElementById("doi-tuong").value
    var diemUuTien = diemKhuVuc + diemDoiTuong
    var ketQua = document.getElementById("ket-qua-tuyen-sinh")
    if (diemMon1 || diemMon2 || diemMon3 == 0 ) {
        ketQua.innerText = `Kết quả: Rớt!!!`
    }
    var tong
}




// Bài tập 2
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính lương
 * + tạo biến để tính lương: lương 1 ngày * số ngày làm
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */




// Bài tập 3
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính lương
 * + tạo biến để tính lương: lương 1 ngày * số ngày làm
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */