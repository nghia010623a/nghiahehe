$(".logout1").on("click",function()
{
    $(".setting0").css("display","block");
});
$(".setting0").on("click",function()
{
    $(".setting0").css("display","none");
});
$("#logout4").on("click",function()
{
    window.location.href="/html/index.html";
});
$("#logout3").on("click",function()
{
    window.location.href="/html/siteeditprofile.html";
});
$("#logout2").on("click",function()
{
    Swal.fire({
        title: "Nhập nội dung",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "OK",
        confirmButtonColor:"#41BBD6",
        cancelButtonText: "Huỷ"
      }).then((result) => {
        if (result.isConfirmed) {
          if(result.value==JSON.parse(localStorage.getItem("pwcms")))
                window.location.href="/html/cms.html";
          else alert("Sai mật khẩu quản trị");
        }
        
      });
});
    async function up()
    {
        let a=await fetch("http://localhost:3000/news");
        let b= await a.json();
        let tt=document.getElementsByClassName("tintucct")[0];
        console.log(b.length);
        for(let i=b.length-1;i>=b.length-1;i--)
        {
    const ct1 = document.createElement("div");
    ct1.className = "ct1";
    ct1.dataset.id = b[i].dataid;
    
    // div chứa ảnh
    const imgWrapper = document.createElement("div");
    
    const img = document.createElement("img");
    img.src = "/images/ct4.webp";
    img.style.width = "14vw";
    
    imgWrapper.appendChild(img);
    
    // div nội dung
    const content = document.createElement("div");
    content.style.padding = "13px";
    
    // p: thời gian
    const pTime = document.createElement("p");
    pTime.textContent = "3 ngày trước";
    pTime.style.color = "gray";
    pTime.style.marginTop = "6px";
    
    // p: tiêu đề
    const pTitle = document.createElement("p");
    pTitle.textContent = b[i].title;
    pTitle.style.fontFamily = "GeorgeTown";
    pTitle.style.fontWeight = "700";
    pTitle.style.marginTop = "0px";
    
    // p: mô tả
    const pDesc = document.createElement("p");
    pDesc.textContent =b[i].subtitle;
    pDesc.style.color = "gray";
    pDesc.style.marginTop = "0px";
    
    // Ghép nội dung
    content.appendChild(pTime);
    content.appendChild(pTitle);
    content.appendChild(pDesc);
    
    // Ghép toàn bộ
    ct1.appendChild(imgWrapper);
    ct1.appendChild(content);
    
    // Thêm vào DOM (ví dụ body hoặc container)
    tt.appendChild(ct1);
        }
    }
up();
let h = document.getElementsByClassName("banner")[0].offsetHeight;
console.log(h);
$("#p1,#p6,#p12").css("top", (h - 0.8*h) + "px");
$("#p2,#p7,#p13").css("top", (h - 0.64*h) + "px");
$("#p3,#p8,#p15").css("top", (h - 0.3*h) + "px");
$("#p11").css("top", (h - 0.44*h) + "px");

let luotinterest=document.getElementsByClassName("luotinterest")[1];
let img=document.getElementById("p4");
let soluong=document.getElementById("p5");
let slc=localStorage.getItem("soluongfollowsontung");
soluong.innerHTML=` ${slc}  Đang quan tâm`;

luotinterest.addEventListener("click",function()
{
    img.setAttribute("src","/images/heart.png");
    let soluongcu=JSON.parse(localStorage.getItem("soluongfollowsontung"));
    soluong.innerHTML=`${soluongcu+1} Đang quan tâm`;
    localStorage.setItem("soluongfollowsontung",`${soluongcu+1}`);
}
)
let style=document.createElement("style");
style.innerHTML=`
@keyframes effect
{
    0%   { transform:translateX(40vw) }
    100% { transform:translateX(-40vw) }
}
    .effect1
    {
    animation: effect 4s ease forwards;
    }`;
document.head.append(style);

let p1=document.getElementsByClassName("poster1")[0];
let p2=document.getElementsByClassName("poster2")[0];
let p3=document.getElementsByClassName("poster3")[0];


$("#p9,#p16").on("click",function()
{
    this.setAttribute("src","/images/heart.png");
})
let p9=document.getElementById("p9");
let p10=document.getElementById("p10");

p9.addEventListener("click",function(){
    let slc=JSON.parse(localStorage.getItem("soluongfollowhtl"));
    p10.innerHTML=`${slc+1} Đang quan tâm`;
    localStorage.setItem("soluongfollowhtl",`${slc+1}`);
})
let slm=JSON.parse(localStorage.getItem("soluongfollowhtl"));
p10.innerHTML=`    ${slm}  Đang quan tâm`;


let p16=document.getElementById("p16");
let p17=document.getElementById("p17");

p16.addEventListener("click",function(){
    let slc1=JSON.parse(localStorage.getItem("soluongfollowex"));
    p17.innerHTML=`   ${slc1+1} Đang quan tâm`;
    localStorage.setItem("soluongfollowex",`${slc1+1}`);
})
let slm2=JSON.parse(localStorage.getItem("soluongfollowex"));
p17.innerHTML=`    ${slm2}   Đang quan tâm`;

// p1.style.animation="effect 32s linear infinite alternate";
// p2.style.animation="effect 32s linear infinite alternate";
// p3.style.animation="effect 32s linear infinite alternate";
$(document).ready(function(){
    let cnn = document.getElementsByClassName("footer")[0].offsetWidth;
    $(".footer").css("height", (cnn*0.13) + "px");
});
let vid;
let ifr1;
let faded1,faded2;
faded1=document.getElementsByClassName("vid1")[0];
faded2=document.getElementsByClassName("vid4")[0];
fadedmain=document.getElementById("faded");

function onYouTubeIframeAPIReady() 
{
    vid=new YT.Player("vid3");
    ifr1=new YT.Player("vid2")
}
setTimeout(()=>{
let ifrmain=document.getElementById("vid3");
ifrmain.addEventListener("mouseover",function()
{
    vid.playVideo();
    faded1.style.zIndex="200";

    fadedmain.style.display="block";
    faded1.style.transform="translateX(59%)";

});
ifrmain.addEventListener("mouseleave",function()
{
    vid.pauseVideo();
    fadedmain.style.display="none";
    faded1.style.transform="none";
    faded1.style.zIndex="80";


  
});

},5000);


setTimeout(()=>{
let ifrmain1=document.getElementById("vid2");
ifrmain1.addEventListener("mouseover",function()
{
    ifr1.playVideo();
    faded2.style.zIndex="200";

    fadedmain.style.display="block";
    faded2.style.transform="translateX(-59%)";
});
ifrmain1.addEventListener("mouseleave",function()
{
    ifr1.pauseVideo();
    fadedmain.style.display="none";
    faded2.style.zIndex="80";

    faded2.style.transform="none";
});

},5000);
$("#timkiem").on("click",function()
{
    $("#fadedtimkiem").css("display","block");
    $("#timkiem1").css("z-index", 1000);
    $(".logotimkiem").css("display","block");
    $(".timkiemm").css("display","block");
    $("#plain1").css("display","block");


 }
);
$("#timkiem").on("blur",function()
{
    $("#fadedtimkiem").css("display","none");
    $(".logotimkiem").css("display","none");
    $(".timkiemm").css("display","none");
    $("#plain1").css("display","none");



})


let input=document.getElementById("timkiem");
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        timkiem();
    }});
       
async function timkiem()
{
    let valuee=input.value;
    let a=await fetch("http://localhost:3000/news");
    let b=await a.json();
    for(let i=0;i<b.length;i++)
    {
        for(let e=0;e<b[i].keyword.length;e++)
        {
            if(valuee==b[i].keyword[e])
            {
                let id=b[i].id;
                window.location.href = "/html/timkiem.html?id=" + id;
            }
        }
    }

};
    
$("#sukien").on("click",function()
{
    window.location.href="/html/sitemuave.html";
});
$(".event1").on("click",function()
{
    window.location.href="/html/sukien1.html";
});
$(".event2").on("click",function()
{
    window.location.href="/html/sukien2.html";
});$(".event3").on("click",function()
{
    window.location.href="/html/sukien3.html";
});$(".event4").on("click",function()
{
    window.location.href="/html/sukien4.html";
});$(".event5").on("click",function()
{
    window.location.href="/html/sukien5.html";
});

$(".ct1").on("click",function()
{
    let id=$(this).data("id");
    window.location.href = "/html/sitebao.html?id=" + id;
})
$("#gioithieu").on("click",function()
{
    $("#gioithieu1").css("z-index",99999);

    $("#gioithieu1").css("opacity",1);
});
$(".primary-btn,.close-btn").on("click",function()
{    $("#gioithieu1").css("z-index",0);

    $("#gioithieu1").css("opacity",0);

});
setTimeout(()=>
    {
        $(".popup").css("display","block");
    },1000);
$("#cancel").css("cursor","pointer");
$("#cancel").on("click",function()
{
    $(".popup").css("display","none");

});
$(".buy").on("click",function()
{
    window.location.href="/html/sitesukien.html";
});
let lggg=document.getElementById("lggg");

lggg.textContent=JSON.parse(localStorage.getItem("userhientai")).user;
$("#logout1").on("click",function()
{
    window.location.href="/html/siteeditprofile.html";
});
$("#tta").on("click",function()
{
    window.location.href="/html/sitetintuc.html";
});
let nm = document.getElementById("santa").offsetWidth;

$("#imgsanta").css("width",(nm/7)+"px");
let sdrr=document.getElementById("sdrr").offsetWidth
let na= document.getElementsByClassName("sdr")[0].offsetWidth;
$(".sdr1 p").css("left",((na/2)-(sdrr/2))+"px");

