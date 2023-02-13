console.log("Javascript have loaded perfectly!");
const x = document.getElementById("h-submenu");
let ham_flag = true;


function toggleHamburgerMenu() {
  if (ham_flag) {
    let id = null; 
    let pos = -100;
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
   x.style.right = "-130px";
   console.log("off screen");
   ham_flag = true;
  }
  
}
