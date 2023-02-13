console.log("Javascript have loaded perfectly!");
const x = document.getElementById("h-submenu");
let ham_flag = true;


function toggleHamburgerMenu() {
  if (ham_flag) {
    let id = null; 
    let pos = -150;
    clearInterval(id);
    id = setInterval(frame, 0.1);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        x.style.right = pos + "px"; 
      }
    }
   // x.style.transform = "translate(-127px)";
   // console.log("in screen!");
   ham_flag = false;
  } else {
   x.style.right = "-150px";
   console.log("off screen");
   ham_flag = true;
  }
  
}
