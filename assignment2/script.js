// TUGAS 2 ============================================================================

const mtk = 80;
const bahasaIndonesia = 60;
const bahasaInggris = 76;
const ipa = 82;

if (mtk > 100 ||
    bahasaIndonesia > 100 ||
    bahasaInggris > 100 ||
    ipa > 100){
    console.log("Semua nilai harus diisi dengan benar");
}
else {
    let rerata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    let grade;
    if(rerata>89) grade = "A";
    else if(rerata>79) grade = "B";
    else if(rerata>69) grade = "C";
    else if(rerata>59) grade = "D";
    else if(rerata<60) grade = "E";
    console.log(`rata-rata = ${rerata}
grade = ${grade}`);
};

/*
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E
*/