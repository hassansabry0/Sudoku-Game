window.addEventListener("load", function (event) {
  this.setTimeout(function () {
    this.document.getElementById("btn-login").click();
  }, 1000); // 1 second to show form

  // validation
  let inputName = this.document.querySelector("input[name=name]");
  let invalidDiv = this.document.querySelector(".invalid-feedback");
  let flag; // for validation name
  let level = document.querySelector("select[name=level]");
  inputName.addEventListener("keyup", function (event) {
    if (isNaN(parseInt(this.value.trim())) && this.value.trim() !== "") {
      this.classList.remove("is-invalid");
      this.classList.add("is-valid");
      flag = true;
    } else if (!isNaN(parseInt(this.value.trim()))) {
      flag = false;
      this.classList.remove("is-valid");
      this.classList.add("is-invalid");
      invalidDiv.innerText = "Please enter correct name";
    } else if (this.value.trim() == "") {
      flag = false;
      this.classList.remove("is-valid");
      this.classList.add("is-invalid");
      invalidDiv.innerText = "Required";
    }
  });
  this.document.forms[0].addEventListener("submit", function (event) {
    if (!flag) {
      event.preventDefault();
      inputName.classList.add("is-invalid");
      invalidDiv.innerText = "Required";
    } else {
      if (level.value === "one") {
        this.action = "./level-1.html";
      } else {
        this.action = "./level-2.html";
      }
    }
  });
}); // end of load
