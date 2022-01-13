
let gridContainer = document.querySelector(".grid-container");
let slider = document.querySelector("#slider");
let sliderDisplay = document.querySelector("#slider-display");

sliderDisplay.innerHTML = `${slider.value} x ${slider.value}`;
slider.addEventListener("input", () => {
    sliderDisplay.innerHTML =  `${slider.value} x ${slider.value}`;
    clearing(slider.value);
})

let colorPicker = document.querySelector("#color-picker");
let color = colorPicker.addEventListener("input", () => console.log(colorPicker.value));

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
};
function palette(){
    console.log("palette");
}
function clearing(cells = 32) {
    gridContainer.querySelectorAll(".pixel").forEach(pixel => pixel.remove());
    slider.value = cells;
    sliderDisplay.innerHTML = cells;
    drawCanvas(cells);
}
function eraser() {
    paint("eraser");
}
function colorMode() {
    paint();
}

function drawCanvas(size = 32) {
    let cells = parseInt(size);
    let length = gridContainer.clientWidth / cells;
    for (i = 0; i < (cells * cells); i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        pixel.style.width = `${length}px`;
        pixel.style.height = `${length}px`;
        pixel.setAttribute("id", i);
        gridContainer.appendChild(pixel);
    }
    paint();
}
function paint(mode = "default") {
    let pixelsArray = gridContainer.querySelectorAll(".pixel");
    pixelsArray.forEach(pixel => {
        pixel.addEventListener("mouseover", function (pixel) {
            let paintedPixel = document.getElementById(pixel.target.id);
            paintedPixel.classList.add("painted");
            
            if (mode == "rainbow") {
                paintedPixel.style.backgroundColor = randomColor();
            }
            else if(mode == "eraser"){
                paintedPixel.style.backgroundColor = "#FFFFFF"
            }
            else {
                paintedPixel.style.backgroundColor = colorPicker.value;
            }

        });
    });
}

function rainbow() {
    paint("rainbow");
}

drawCanvas(slider.value);



