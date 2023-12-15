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
    var diemChuan = 25
    var diemMon1 = document.getElementById("diem-mon-thu-1").value*1
    var diemMon2 =document.getElementById("diem-mon-thu-2").value*1
    var diemMon3 = document.getElementById("diem-mon-thu-3").value * 1
    var tongDiem3Mon = diemMon1 + diemMon2 + diemMon3
    var khuVucA = 2
    var khuVucB = 1
    var khuVucC = 0.5
    var doiTuong1 = 2.5
    var doiTuong2 = 1.5
    var doiTuong3 = 1
    var isKhuVucUuTien = true
    var isDoiTuongUuTien = true
    var diemKhuVuc = document.getElementById("khu-vuc").value
    var diemDoiTuong = document.getElementById("doi-tuong").value
    var diemUuTien 
    var diemTongKet = tongDiem3Mon + diemUuTien
    var ketQua = document.getElementById("ket-qua-tuyen-sinh")

    if (diemMon1 || diemMon2 || diemMon3 === 0 ) {
        ketQua.innerText = `Kết quả: Rớt!!!`
    }
    if (diemKhuVuc == "A") {
        diemKhuVuc = khuVucA
    }
    if (diemKhuVuc == "B") {
        diemKhuVuc = khuVucB
    }
    if (diemKhuVuc == "C") {
        diemKhuVuc = khuVucC
    }
    if (diemDoiTuong == "1") {
        diemKhuVuc = doiTuong1
    }
    if (diemDoiTuong == "2") {
        diemKhuVuc = doiTuong2
    }
    if (diemDoiTuong == "3") {
        diemKhuVuc = doiTuong3
    }
    if (!isDoiTuongUuTien && !isKhuVucUuTien) {
        diemUuTien = 0
        if (diemTongKet < diemChuan) {
            ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`
        }
        ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `
    }
    if (!isDoiTuongUuTien && isKhuVucUuTien) {
       
        if (diemKhuVuc == "A") {
            diemKhuVuc = khuVucA
            diemUuTien = diemKhuVuc
            if (diemTongKet < diemChuan) {
                
                ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`
            }
            ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `
        }
        if (diemKhuVuc == "B") {
            diemKhuVuc = khuVucB
            diemUuTien = diemKhuVuc
            if (diemTongKet < diemChuan) {
                
                ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`
            }
            ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `
        }
        if (diemKhuVuc == "C") {
            diemKhuVuc = khuVucB
            diemUuTien = diemKhuVuc
            if (diemTongKet < diemChuan) {
                
                ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`
            }
            ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `
        }

    }
    if (isDoiTuongUuTien && !isKhuVucUuTien) {
        if (diemTongKet < diemChuan) {
            
            ketQua.innerText = `Kết quả: ${diemTongKet} - Rớt!!!`
        }
        ketQua.innerText = `Kết quả: ${diemTongKet} - Đậu `

    }

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