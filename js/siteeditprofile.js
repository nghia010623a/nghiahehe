document.addEventListener("DOMContentLoaded", () => {
  let lggg=document.getElementById("lggg");

  lggg.textContent=JSON.parse(localStorage.getItem("userhientai")).user;
  let us = document.getElementById("user");
  let userHienTai = JSON.parse(localStorage.getItem("userhientai"));
  us.innerHTML = userHienTai.user;
  let us1 = document.getElementById("user1");
  let us2 = document.getElementById("password");
  let ngaytao=userHienTai.ngaytao;
  us1.value=userHienTai.user;
  us2.value=userHienTai.password;
  us1.readOnly = true;
  us1.style.backgroundColor="rgb(213, 209, 209)";
  $("#hienmk").on("click",function()
  {
      us2.type = us2.type === "password" ? "text" : "password";
  });
  $("#luu").on("click", function () {
    localStorage.setItem(
      us1.value,
      JSON.stringify({
        user: us1.value,
        password: us2.value,
        ngaytao: ngaytao
      })
    );
  
    localStorage.setItem(
      "userhientai",
      JSON.stringify({
        user: us1.value,
        password: us2.value
      })
    );
  
    alert("Đổi mật khẩu thành công");
  });
  const lichsumuave = JSON.parse(localStorage.getItem("tickets")) || [];
  const container = document.getElementById("ls");
  container.innerHTML = ""; // Xóa cũ
  
  lichsumuave.forEach(ticket => {
      if(ticket.username !== userHienTai.user) return;
  
      const card = document.createElement("div");
      card.className = "flex flex-col sm:flex-row bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-md transition-all group";
  
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "w-full sm:w-48 h-32 sm:h-auto bg-cover bg-center";
      imgWrapper.style.backgroundImage = `url(${ticket.src || "/images/a1.png"})`;
  
      const overlay = document.createElement("div");
      overlay.className = "w-full h-full bg-black/30 group-hover:bg-transparent transition-colors";
      imgWrapper.appendChild(overlay);
  
      const contentWrap = document.createElement("div");
      contentWrap.className = "p-4 flex-1 flex flex-col justify-between";
  
      const header = document.createElement("div");
      header.className = "flex justify-between items-start";
  
      const title = document.createElement("h3");
      title.className = "font-bold text-lg text-[#0d0f1c] dark:text-white mb-1";
      title.textContent = ticket.ticketName;
  
      const status = document.createElement("span");
      status.className = "bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md border border-green-200";
      status.textContent = "Đã thanh toán";
  
      header.appendChild(title);
      header.appendChild(status);
  
      const locationP = document.createElement("p");
      locationP.className = "text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-2";
      locationP.innerHTML = `<span class="material-symbols-outlined text-[16px]">location_on</span> ${ticket.location || "Sân vận động Mỹ Đình"}`;
  
      const timeP = document.createElement("p");
      timeP.className = "text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1";
      timeP.innerHTML = `<span class="material-symbols-outlined text-[16px]">schedule</span> ${ticket.time || "20:00 - 15/10/2024"}`;
  
      contentWrap.appendChild(header);
      contentWrap.appendChild(locationP);
      contentWrap.appendChild(timeP);
  
      const actionWrap = document.createElement("div");
      actionWrap.className = "p-4 sm:border-l border-gray-200/50 dark:border-gray-700/50 flex sm:flex-col justify-center gap-2 items-center min-w-[140px]";
  
      const btnQR = document.createElement("button");
      btnQR.className = "w-full py-2 px-3 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-medium transition-all";
      btnQR.textContent = "Xem mã QR";
  
      btnQR.onclick = () => {
          const qrDiv = document.getElementById("qrcode");
          qrDiv.innerHTML = "";
  
          let qrText = `Mã vé: ${ticket.ticketCode}\nVé: ${ticket.ticketName.slice(0,50)}`;
          if(qrText.length > 480){
              qrText = qrText.slice(0,480);
              alert("Mã vé quá dài, QR code đã bị rút gọn");
          }
  
          new QRCode(qrDiv, {
              text: qrText,
              width: 200,
              height: 200,
              correctLevel: QRCode.CorrectLevel.L
          });
  
          document.getElementById("qrModal").style.display = "flex";
      };
  
      const btnDetail = document.createElement("button");
      btnDetail.className = "w-full py-2 px-3 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-all";
      btnDetail.textContent = "Chi tiết";
  
      actionWrap.appendChild(btnQR);
      actionWrap.appendChild(btnDetail);
  
      card.appendChild(imgWrapper);
      card.appendChild(contentWrap);
      card.appendChild(actionWrap);
      container.appendChild(card);
  });
// $("#logout").on("click",function()
// {
//   window.location.href="/html/index.html";
// });
  document.getElementById("closeQR").onclick = () => {
      document.getElementById("qrModal").style.display = "none";
  };
  });
