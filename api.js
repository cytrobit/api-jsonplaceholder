function displayBoxes() {
  const input = document.getElementById("nmbr").value;
  //convert string value from input to decimal number
  let numba = parseInt(input, 10);
  const clearBoxes = document.getElementById("reset");

  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < numba; i++) {
        // console.log(data[i].title);
        let box = document.createElement("div");
        const wrapper = document.querySelector("main");
        box.classList.add("box");
        box.innerHTML = `
          <h3>The ID is: ${data[i].id}</h3>
          <p>Title is: ${data[i].title}`;
        wrapper.appendChild(box);
      }

      clearBoxes.addEventListener("click", function () {
        document.getElementById("nmbr").value = "";
        const boxesToRemove = document.querySelector("main").getElementsByClassName("box");
        for (let i = boxesToRemove.length - 1; i >= 0; i--) {
          let childNode = boxesToRemove[i];
          childNode.parentNode.removeChild(childNode);
        }
      });
    });
}

const subm = document.getElementById("subm");
subm.addEventListener("click", displayBoxes);
      // console.log(data[i].title)