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

window.addEventListener("load", function () {
  // to set timer
  let startButton = this.document.querySelector(".start");
  let timer = document.getElementById("timer");
  let timerId;
  let imgSelected = 0;
  let seconds = 60;
  let counter = document.getElementById("timer");
  let currentMinute = 1;
  // to get 9 image tag in array
  let images = Array.from(document.querySelectorAll(".game img"));
  let userName = this.document.getElementById("name");
  let [image1, image2, image3, image4, image5, image6, image7, image8, image9] =
    this.document.querySelectorAll(
      "#one,#two,#three,#four,#five,#six,#seven,#eight,#nine"
    );
  // to show modal when finished
  let btnFinish = this.document.getElementById("btn-finish");
  let btnRestart = this.document.querySelector(".restart");
  let message = this.document.querySelector("h3.message");

  userName.innerText = `Welcome ${dataObject.name}`;
  image1.src = dataObject.src1;
  image2.src = dataObject.src2;
  image3.src = dataObject.src3;
  image4.src = dataObject.src4;
  image5.src = dataObject.src5;
  image6.src = dataObject.src6;
  image7.src = dataObject.src7;
  image8.src = dataObject.src8;
  image9.src = dataObject.src9;

  // to fetch data
  images.sort((a, b) => a.id - b.id); // sort image by id
  async function getData() {
    dataInOneArray = [];
    let response = await fetch(
      "https://sugoku.herokuapp.com/board?difficulty=easy"
    );
    let data = await response.json();
    data.board.forEach((arrays) => {
      arrays.forEach((data, index) => {
        dataInOneArray.push(data);
      });
    });
    dataInOneArray.forEach((ceil, index1) => {
      images.forEach((img, index2) => {
        if (index1 == index2) {
          img.alt = ceil;
        }
      });
    });

    // solution
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? "" : "%2C"
          }`,
        ""
      );

    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
        .join("&");

    let solveRespond = await fetch("https://sugoku.herokuapp.com/solve", {
      method: "POST",
      body: encodeParams(data),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    let dataSolved = await solveRespond.json();
    return dataSolved.solution;
  }

  let solved = getData();
  // to set solution with images
  solved
    .then((response) => {
      response.flat().forEach((solve, index1) => {
        images.forEach((img, index2) => {
          if (index1 == index2) {
            let dataSolve = this.document.createAttribute("data-solve");
            dataSolve.value = solve;
            img.setAttributeNode(dataSolve);
          }
        });
      });
    })
    .catch((fail) => console.log(fail));

  // to set and move images
  function setImages(event) {
    if (event.key === "ArrowRight") {
      imgSelected = imgSelected + 1 > 80 ? imgSelected : imgSelected + 1;
      images.forEach((img) => {
        img.parentElement.classList.remove("selected");
        if (+img.id == imgSelected) {
          img.parentElement.classList.add("selected");
          // set image
          window.addEventListener("keyup", function (event) {
            if (
              event.key === "1" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image4.src;
            }
            if (
              event.key === "5" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image5.src;
            }
            if (
              event.key === "6" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image6.src;
            }
            if (
              event.key === "7" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image7.src;
            }
            if (
              event.key === "8" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image8.src;
            }
            if (
              event.key === "9" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image9.src;
            }
          });
        }
      });
    } else if (event.key === "ArrowDown") {
      imgSelected = imgSelected + 9 > 80 ? imgSelected : imgSelected + 9;
      images.forEach((img) => {
        img.parentElement.classList.remove("selected");
        if (+img.id == imgSelected) {
          img.parentElement.classList.add("selected");
          // set image
          window.addEventListener("keyup", function (event) {
            if (
              event.key === "1" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image4.src;
            }
            if (
              event.key === "5" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image5.src;
            }
            if (
              event.key === "6" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image6.src;
            }
            if (
              event.key === "7" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image7.src;
            }
            if (
              event.key === "8" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image8.src;
            }
            if (
              event.key === "9" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image9.src;
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
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image4.src;
            }
            if (
              event.key === "5" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image5.src;
            }
            if (
              event.key === "6" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image6.src;
            }
            if (
              event.key === "7" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image7.src;
            }
            if (
              event.key === "8" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image8.src;
            }
            if (
              event.key === "9" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image9.src;
            }
          });
        }
      });
    } else if (event.key === "ArrowUp") {
      imgSelected = imgSelected - 9 < 0 ? imgSelected : imgSelected - 9;
      images.forEach((img) => {
        img.parentElement.classList.remove("selected");
        if (+img.id == imgSelected) {
          img.parentElement.classList.add("selected");
          // set image
          window.addEventListener("keyup", function (event) {
            if (
              event.key === "1" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image1.src;
            }
            if (
              event.key === "2" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image2.src;
            }
            if (
              event.key === "3" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image3.src;
            }
            if (
              event.key === "4" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image4.src;
            }
            if (
              event.key === "5" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image5.src;
            }
            if (
              event.key === "6" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image6.src;
            }
            if (
              event.key === "7" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image7.src;
            }
            if (
              event.key === "8" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image8.src;
            }
            if (
              event.key === "9" &&
              img.parentElement.classList.contains("selected") &&
              img.alt === "0"
            ) {
              img.src = image9.src;
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

  // start game when click start
  startButton.addEventListener(
    "click",
    function () {
      images[0].parentElement.classList.add("selected");
      showStartImages();
      images.forEach((img) => {
        console.log(img);
      });

      if (!timerId) {
        timerId = setInterval(() => {
          seconds--;
          timer.innerHTML = `0${currentMinute}:${
            seconds < 10 ? "0" : ""
          }${seconds}`;
          // to start game

          window.addEventListener("keyup", setImages); // end of keyup
          // our seconds have run out
          if (seconds <= 0) {
            // our minutes have run out
            if (currentMinute <= 0) {
              // we display the finished message and clear the interval so it stops.
              counter.innerHTML = "Finished";
              clearInterval(timerId);
              // to end game
              window.removeEventListener("keyup", setImages);
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
              btnFinish.click(); // tho show modal when finished
              btnRestart.addEventListener("click", restartGame); // end of click to restart
            } else {
              // otherwise, we decrement the number of minutes and change the seconds back to 60.
              currentMinute--;
              seconds = 60;
            }
          }
          // we set our interval to a second.
        }, 1000); // end of interval
      }
    },
    { once: true }
  ); // end of click start button
}); // end of load
