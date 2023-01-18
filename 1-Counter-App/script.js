window.addEventListener("DOMContentLoaded", function () {
      console.log("DOMContentLoaded");
      let incBtn = document.getElementById("add");
      let decBtn = document.getElementById("subtract");
      let resetBtn = this.document.getElementById("reset");
    
      incBtn.addEventListener("click", function () {
        let val = document.getElementById("counter").innerText;
        val = parseInt(val);
        val = val + 1;
        document.getElementById("counter").innerText = val;
      });
    
      decBtn.addEventListener("click", function () {
        let val = document.getElementById("counter").innerText;
        val = parseInt(val);
        val = val - 1;
        document.getElementById("counter").innerText = val;
      });
      resetBtn.addEventListener("click", function () {
        document.getElementById("counter").innerText = 0;
      });
    });

