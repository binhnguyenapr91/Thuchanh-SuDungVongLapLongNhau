# Thuchanh-SuDungVongLapLongNhau
[Thực hành] Sử dụng vòng lặp lồng nhau
Mục tiêu
Luyện tập sử dụng vòng lặp lồng nhau

Mô tả
Chương trình hiển thị bảng với dữ liệu như sau



Để hoàn thành bài thực hành, học viên cần:

Đưa mã nguồn lên GitHub
Dán link của repository lên phần nộp bài trên CodeGymX
Hướng dẫn
Bước 1: Phân tích vòng lặp sử dụng trong bài toán

Vòng lặp for ngoài dùng để in ra số dòng. Gồm 10 dòng. Do đó vòng lặp sẽ là:

for (i = 1; i <= 10; i++)
Vòng lặp trong in ra giá trị từng cột trên mỗi dòng. Gồm 10 cột cho mỗi dòng. Do đó vòng lặp sẽ là:

for (j = 1; j <= 10; j++)
Mỗi cột có giá trị bằng i * j. 

Bước 2: Viết mã sử dụng vòng lặp for lồng nhau

<script>
let sout;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
for (i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for (j = 1; j <= 10; j++) {
        sout = sout + "<td>" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);
</script>
Bước 3: Thực thi chương trình. Quan sát kết quả.

Bước 4: Thay đổi mã trên với vòng lặp while lồng nhau

<script language="javascript">
let sout, i, j;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
i = j = 1;
while (i <= 10) {
    sout = sout + "<tr>";
    while (j <= 10) {
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write(sout);
</script>
Bước 5: Thực thi chương trình. Quan sát kết quả.
