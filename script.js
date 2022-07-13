//Bài 1: Tính điểm
console.log("-----Bài 1: Tính điểm thi-----");
function calcAreaMark(area) {
    if (area === "A") {
        return 2;
    }
    if (area === "B") {
        return 1;
    }
    if (area === "C") {
        return 0.5;
    }
    return 0;
}

function calcStudentTypeMark(studentType) {
    if (studentType === "1") {
        return 2.5;
    }
    if (studentType === "2") {
        return 1.5;
    }
    if (studentType === "3") {
        return 1;
    }
    return 0;
}

function ex1() {
    var standardMark = 17;
    var sub1 = 5;
    var sub2 = 5;
    var sub3 = 1;
    var area = "A";
    var studentType = "1";
    var areaMark = calcAreaMark(area);
    var studentTypeMark = calcStudentTypeMark(studentType);
    var totalMark = sub1 + sub2 + sub3 + areaMark + studentTypeMark;

    if ((sub1 > 0 && sub2 > 0 && sub3 > 0) && totalMark >= standardMark) {
        console.log("Thí sinh đã đậu!", "Tổng điểm là:", totalMark);
    } else {
        console.log("Thí sinh không đậu!", "Tổng điểm là:", totalMark);
    }
}
ex1();

//Bài 2: Tính tiền điện
console.log("-----Bài 2: Tính tiền điện-----");
function ex2() {
    var fullName = "Hieu Trung Bui";
    var kw = 150;
    var totalPrice;

    if (kw <= 50) {
        totalPrice = 500 * kw;
    } else if (kw <= 100) {
        totalPrice = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 200) {
        totalPrice = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
        totalPrice = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
        totalPrice = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }
    console.log("TÊN KHÁCH HÀNG:",fullName, "Tổng tiền điện là:", totalPrice);
}
ex2();