//  to send name to level-start.html`
let getName = window.location.search.split("&")[0].slice(1).split("=")[1];
window.addEventListener("load", function (event) {
  [...this.document.forms].forEach((form) => {
    let input = this.document.createElement("input");
    input.type = "text";
    input.name = "name";
    input.value = getName;
    input.hidden = "hidden";
    form.append(input);
  });
}); // end of load
