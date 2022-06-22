// to get images group and name of user from url to display these
let getDataInArray = window.location.search.split("&");
let dataObject = {};
getDataInArray.forEach((element, index, array) => {
  if (index == 0) {
    element = element.slice(1);
  }
  if (index !== array.length - 1) {
    element = element.replace(/%2F/g, "/");
    element = element.split("=");
    dataObject[element[0]] = element[1];
    // console.log(element[0]);
  } else {
    element = element.split("=");
    dataObject[element[0]] = element[1];
  }
});
// to get game and solve in array
let gameAndSolve = sudoku4[Math.floor(Math.random() * sudoku4.length)];

window.addEventListener("load", function () {
  // set timer
  let startButton = this.document.querySelector(".start");
  let timer = document.getElementById("timer");
  let timerId;
  let seconds = 60;
  let counter = document.getElementById("timer");
  let currentMinute = 0;
  // to get and display 4 image
  let images = document.querySelectorAll(".game img");
  let userName = this.document.getElementById("name");
  let image1 = this.document.getElementById("one");
  let image2 = this.document.getElementById("two");
  let image3 = this.document.getElementById("three");
  let image4 = this.document.getElementById("four");
  // to show modal when finished
  let btnFinish = this.document.getElementById("btn-finish");
  let btnRestart = this.document.querySelector(".restart");
  userName.innerText = `Welcome ${dataObject.name}`;
  image1.src = dataObject.src1;
  image2.src = dataObject.src2;
  image3.src = dataObject.src3;
  image4.src = dataObject.src4;
  let imgSelected = 0;
  let message = this.document.querySelector(".message");

  // to set game in image
  gameAndSolve[0].split("").forEach((ceil, index1) => {
    images.forEach((img, index2) => {
      if (index1 == index2) {
        img.alt = ceil;
      }
    });
  });
  // to set solve in image
  gameAndSolve[1].split("").forEach((solve, index1) => {
    images.forEach((img, index2) => {
      if (index1 == index2) {
        let dataSolve = this.document.createAttribute("data-solve");
        dataSolve.value = solve;
        img.setAttributeNode(dataSolve);
      }
    });
  });

  // to set and move images
  function setImages(event) {
    if (event.key === "ArrowRight") {
      imgSelected = imgSelected + 1 > 15 ? imgSelected : imgSelected + 1;

      images.forEach((img) => {
        img.parentElement.classList.remove("selected");
        if (+img.id == imgSelected) {
          img.parentElement.classList.add("selected");
          // set image
          window.addEventListener("keyup", function (event) {
            if (
              event.key === "1" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image4.src;
            }
          });
        }
      });
    } else if (event.key === "ArrowDown") {
      imgSelected = imgSelected + 4 > 15 ? imgSelected : imgSelected + 4;

      images.forEach((img) => {
        img.parentElement.classList.remove("selected");
        if (+img.id == imgSelected) {
          img.parentElement.classList.add("selected");
          // set image
          window.addEventListener("keyup", function (event) {
            if (
              event.key === "1" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image4.src;
            }
          });
        }
      });
    } else if (event.key === "ArrowLeft") {
      imgSelected = imgSelected - 1 < 0 ? imgSelected : imgSelected - 1;

      images.forEach((img) => {
        img.parentElement.classList.remove("selected");
        if (+img.id == imgSelected) {
          img.parentElement.classList.add("selected");
          // set image
          window.addEventListener("keyup", function (event) {
            if (
              event.key === "1" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image4.src;
            }
          });
        }
      });
    } else if (event.key === "ArrowUp") {
      imgSelected = imgSelected - 4 < 0 ? imgSelected : imgSelected - 4;

      images.forEach((img) => {
        img.parentElement.classList.remove("selected");
        if (+img.id == imgSelected) {
          img.parentElement.classList.add("selected");
          // set image
          window.addEventListener("keyup", function (event) {
            if (
              event.key === "1" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected")
            ) {
              img.src = image4.src;
            }
          });
        }
      });
    }
  }

  // show Start Images from fetch
  function showStartImages() {
    images.forEach((img) => {
      if (img.alt !== "0") {
        img.src = `../images/${img.alt}.jpg`;
        img.parentElement.classList.add("notSelect");
      }
    });
  }

  // to restart game
  function restartGame() {
    window.location.reload();
  }

  startButton.addEventListener(
    "click",
    function () {
      images[0].parentElement.classList.add("selected");
      showStartImages();

      //  count down
      if (!timerId) {
        timerId = setInterval(() => {
          seconds--;
          timer.innerHTML = `0${currentMinute}:${
            seconds < 10 ? "0" : ""
          }${seconds}`;
          // start game
          window.addEventListener("keyup", setImages); // end of keypress
          // our seconds have run out
          if (seconds <= 0) {
            // our minutes have run out
            if (currentMinute <= 0) {
              // we display the finished message and clear the interval so it stops.
              counter.innerHTML = "Finished";
              clearInterval(timerId);
              // to end game
              images.forEach((img) => {
                if (
                  img.src == `../images/${img.dataset.solve}.jpg` ||
                  img.src ==
                    `http://127.0.0.1:5500/images/${img.dataset.solve}.jpg`
                ) {
                  message.innerText = "Bravo You Are Success";
                } else {
                  message.innerText = "Sorry You Are Failed Please Try Agin";
                }
              });
              window.removeEventListener("keyup", setImages); // end of keypress
              btnFinish.click(); // tho show modal when finished
              btnRestart.addEventListener("click", restartGame); // end of click to restart
            } else {
              // otherwise, we decrement the number of minutes and change the seconds back to 60.
              currentMinute--;
              seconds = 60;
            }
          }
          // we set our interval to a second.
        }, 1000);
      }
    },
    { once: true }
  ); // end of click start button
}); // end of load
