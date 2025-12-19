$("#buy").on("click", function () {
    if ($("#id1").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id1";
    }
   else  if ($("#id2").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id2";
    }
    else  if ($("#id3").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id3";
    }
    else  if ($("#id4").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id4";
    }else  if ($("#id5").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id5";
    }
    else  if ($("#id6").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id6";
    }else  if ($("#id7").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id7";
    }else  if ($("#id8").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id8";
    }else  if ($("#id9").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id9";
    }
    else  if ($("#id10").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id10";
    }
    else  if ($("#id11").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id11";
    }else  if ($("#id12").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id12";
    }else  if ($("#id13").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id13";
    }else  if ($("#id14").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id14";
    }else  if ($("#id15").length) {
        window.location.href = "/html/sitethanhtoan.html?id=id15";
    }
});

$(document).ready(function () {

    function increase(inputId, max) {
        let input = $("#" + inputId);
        let val = Number(input.val());

        if (val < max) {
            input.val(val + 1);
        } else {
            alert("Đã đạt số vé tối đa: " + max);
        }
    }

    function decrease(inputId) {
        let input = $("#" + inputId);
        let val = Number(input.val());

        if (val > 0) {
            input.val(val - 1);
        }
    }

    $("#increaseregular").click(() => increase("quantityregular", 10));
    $("#minusregular").click(() => decrease("quantityregular"));

    $("#increasepremium").click(() => increase("quantitypremium", 10));
    $("#minuspremium").click(() => decrease("quantitypremium"));

    $("#increasevip").click(() => increase("quantityvip", 5));
    $("#minusvip").click(() => decrease("quantityvip"));

    $("#increasesvip").click(() => increase("quantitysvip", 10));
    $("#minussvip").click(() => decrease("quantitysvip"));

    // SKY (max 2)
    $("#increasesky").click(() => increase("quantitysky", 2));
    $("#minussky").click(() => decrease("quantitysky"));

});

let lggg=document.getElementById("lggg");

lggg.textContent=JSON.parse(localStorage.getItem("userhientai")).user;