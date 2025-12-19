$("#buy").on("click",function()
{
    window.location.href="/html/sitethanhtoan.html";
})
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if(id=="id1")
    {
        $("#title").text("Đảo Hoa Hậu");
    }
else if(id=="id2")
    {
        $("#title").text("Sơn Tinh Thuỷ Tinh");
    }
    else if(id=="id3")
        {
            $("#title").text("Tung Hoành Pattaya");
        }
        else if(id=="id4")
            {
                $("#title").text("Lễ hội tuyết trắng");
            }  else if(id=="id5")
                {
                    $("#title").text("One piece");
                }
                else if(id=="id6")
                    {
                        $("#title").text("Vở diễn ai chồng ai vợ");
                    }else if(id=="id7")
                        {
                            $("#title").text(`Anh trai "SAY HI" Concert - Đêm 5`);
                        }else if(id=="id8")
                            {
                                $("#title").text("G-DRAGON 2025 WORLD TOUR");
                            }else if(id=="id9")
                                {
                                    $("#title").text("Y-CONCERT BY YEAH1");
                                }
                                else if(id=="id10")
                                    {
                                        $("#title").text(`CAPTAIN BOY MINI CONCERT "MẶT CHẠM MẶT"

`);
                                    }
                                    else if(id=="id11")
                                        {
                                            $("#title").text(`Ai Cũng Giấu Trong Lòng Tảng Băng`);
                                        }
                                        else if(id=="id12")
                                            {
                                                $("#title").text(`NHÃ CONCERT`);
                                            }
                                            else if(id=="id13")
                                                {
                                                    $("#title").text(`Hẹn Yêu Đi: Trung Quân - Tăng Phúc`);
                                                }else if(id=="id14")
                                                    {
                                                        $("#title").text(`Hà Lê Fan Meeting In Hà Nội "Cho Dừa Lòng Em"`);
                                                    }else if(id=="id15")
                                                        {
                                                            $("#title").text(`Hài kịch: Lạc lối ở BangKok

`);
                                                        }
$(document).ready(function () {

    function increase(inputId, max) {
        let input = $("#" + inputId);
        let input1 = $("#" + inputId+"1");
        let input2 = $("#" + inputId+"2");

        let val = Number(input.val());

        if (val < max) {
            input.val(val + 1);
            input1.val(val+1);
            if(inputId=="quantityregular")
            {
                let sl=Number(input1.val());
                input2.val(sl*500000);
                $(".a").css("border-radius","30px");

                $(".a").css("background-color","rgb(222, 115, 54)");
            }
            else  if(inputId=="quantitypremium")
                {
                    let sl=Number(input1.val());
                    input2.val(sl*1000000);
                    $(".b").css("border-radius","30px");

                $(".b").css("background-color","rgb(222, 115, 54)");
                }
                else  if(inputId=="quantityvip")
                    {
                        let sl=Number(input1.val());
                        input2.val(sl*1600000);
                        $(".c").css("border-radius","30px");

                $(".c").css("background-color","rgb(222, 115, 54)");
                    }else  if(inputId=="quantitysvip")
                        {
                            let sl=Number(input1.val());
                            input2.val(sl*2600000);
                            $(".d").css("border-radius","30px");

                $(".d").css("background-color","rgb(222, 115, 54)");
                        }
        } else {
            alert("Đã đạt số vé tối đa: " + max);
        }
    }

    function decrease(inputId) {
        let input = $("#" + inputId);
        let input1 = $("#" + inputId+"1");
        let input2 = $("#" + inputId+"2");

        let val = Number(input.val());

        if (val > 0) {
            input.val(val - 1);
            input1.val(val-1);

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
$("#payment").on("click",function()
{
    if ((Number($("#quantityregular1").val()) === 0)&&(Number($("#quantitypremium1").val()) === 0)&&(Number($("#quantityvip1").val()) === 0)&&(Number($("#quantitysvip1").val()) === 0))
        alert("Số lượng vé phải lớn hơn 0");
    else
    {
$(".popuptt0").css("display", "flex");

const userData = JSON.parse(localStorage.getItem("userhientai"));
if (!userData) {
  alert("Bạn chưa đăng nhập");
  return;
}
const username = userData.user;

let src;
if(id=="id1")
    {
        src="/images/ev1.png";
    }
else if(id=="id2")
    {
        src="/images/ev2.png";
    }
    else if(id=="id3")
        {
            src="/images/ev3.png";
        }
        else if(id=="id4")
            {
                src="/images/ev4.png";
            }  else if(id=="id5")
                {
                    src="/images/ev5.png";
                }
                else if(id=="id6")
                    {
                        src="/images/m6.jpeg";
                    }
                    else if(id=="id7")
                        {
                            src="/images/m7.jpeg";
                        }
                        else if(id=="id8")
                            {
                                src="/images/m8.jpeg";
                            }
                            else if(id=="id9")
                                {
                                    src="/images/m9.jpeg";
                                }
                                else if(id=="id10")
                                    {
                                        src="/images/m10.jpeg";
                                    }
                const ticketCode = "VE-" + Date.now().toString().slice(-6);

const ticketName =  $("#title").text();

const buyTime = new Date().toLocaleString();

const ticketData = {
  username,
  ticketCode,
  ticketName,
  buyTime,src
};

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

tickets.push(ticketData);

localStorage.setItem("tickets", JSON.stringify(tickets));


const qrText = `
Tên: ${username}
Vé: ${ticketName}
Mã vé: ${ticketCode}
Thời gian: ${buyTime}
`;

new QRCode(document.getElementById("qrcode"), {
  text: ticketCode,
  width: 200,
  height: 200,
  correctLevel: QRCode.CorrectLevel.H
});


    }
});
$("#back").on("click",function()
{
    $(".popuptt0").css("display","none");
});
let lggg=document.getElementById("lggg");

lggg.textContent=JSON.parse(localStorage.getItem("userhientai")).user;