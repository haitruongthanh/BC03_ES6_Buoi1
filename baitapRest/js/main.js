document.getElementById("btnKhoi1").addEventListener("click", () => {
  let diemToan = document.getElementById("inpToan").value * 1;
  let diemLy = document.getElementById("inpLy").value * 1;
  let diemHoa = document.getElementById("inpHoa").value * 1;
  let diemTBKhoi1 = tinhDiemTrungBinh(diemToan, diemHoa, diemLy);
  document.getElementById("tbKhoi1").innerHTML = diemTBKhoi1;
});

document.getElementById("btnKhoi2").addEventListener("click", () => {
  let diemVan = document.getElementById("inpVan").value * 1;
  let diemSu = document.getElementById("inpSu").value * 1;
  let diemDia = document.getElementById("inpDia").value * 1;
  let diemAnh = document.getElementById("inpEnglish").value * 1;
  let diemTBKhoi2 = tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemAnh);
  document.getElementById("tbKhoi2").innerHTML = diemTBKhoi2;
});

tinhDiemTrungBinh = (...diem) => {
  let sum = 0;
  diem.forEach(function (item) {
    return (sum += item);
  });
  return sum / diem.length;
};
