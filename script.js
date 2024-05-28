const container = document.querySelector(".container");
const drawingBox = document.createElement("div")
drawingBox.classList.add("box");
container.appendChild(drawingBox);

const input = document.querySelector("input");
const submitBtn = document.querySelector("button");






function createGrid(squares) {
    while (drawingBox.hasChildNodes()) {
        drawingBox.removeChild(drawingBox.firstChild);
    }
    //create the grid row and grid squares in 1 function
    for (let i = 0; i < squares; i++) {
        // create grid row
        const divRow = document.createElement('div');
        divRow.classList.add("gridrow");
        for (let j = 0; j < squares; j++) {
            //create grid items and immediately append to .gridrow/divRow
            //this way, all divRow has squares number of griditem
            const squares = document.createElement("div");
            squares.classList.add("griditem")
            
            divRow.appendChild(squares);
        }
        drawingBox.appendChild(divRow);
    }
    const  rows = document.querySelectorAll(".griditem");
    //since we use querySelectorAll, we need to use forEach
    rows.forEach((row)=> {
        row.addEventListener("mouseover", () =>{
            row.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}
        )
    })
    

}
createGrid(16);



/*
function createGrid() {
    while (drawingBox.hasChildNodes()) {
        drawingBox.removeChild(drawingBox.firstChild);
      }
      
    let value=input.value;
    if (value > 100) {alert("Please Input a number below 100")}
    else {for (let i = 0; i < value; i++) {
       
        
        const createDivRow = document.createElement("div");
        createDivRow.classList.add("gridrow")
         
        drawingBox.appendChild(createDivRow);
    }
    
}
}
*/



/*function createGridItems() {
    const value = input.value;
        const divRows = document.querySelectorAll(".gridrow");
    divRows.forEach(divRow =>{    
        for (let i = 0; i < value; i++) {
        const createDivItem = document.createElement("div");
        createDivItem.classList.add("griditem")
        //when i call createGridItems, i immediately give it a class .griditem
        //when i call createGridItems, i immediately give it an eventlistener so every griditems gets it
        /*give class hovertrail which gives the trail black color
        createDivItem.addEventListener("mouseover", ()=>{createDivItem.classList.add("hovertrail")})
        divRow.appendChild(createDivItem);
        }
    })*/
    //give each div random rgb values when mouseover
  /*
    createDivItem.addEventListener("mouseover", ()=>{createDivItem.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`})
    divRow.appendChild(createDivItem);
    }
    })
};
*/


/*function createGridItems() {  
    const value = input.value;
    //here you select the rows as .gridrow elements
    const divRows = document.querySelectorAll(".gridrow");    
    //iterate over each one of them
    divRows.forEach(divRow =>{
        //and append to it a new div for as many times as the value fetched from the input element
        for(let i=0;i < value; i++){
          const createDivItem = document.createElement("div");
          createDivItem.textContent = "aa";
          divRow.appendChild(createDivItem);
        }        
    });       
}
*/



submitBtn.addEventListener("click", (()=> {
    let value = input.value;
    if (value > 100) {

        createGrid(100)
        alert(`${value} is too many! Here's 100!`)
    }
    else if ( value < 4) {
        createGrid(4);
        alert (`${value} is too little! Here's 4!`)
    }
    else {value = Math.floor(value);
        createGrid(value)
    }
}
)
)


/*
submitBtn.addEventListener("click", (()=>{


    let value = input.value;
    for (let i = 0; i < value; i++) {
        const createDivRow = document.createElement("div");
        createDivRow.classList.add("div");
        createDivRow.textContent = i;
        container.appendChild(createDivRow);
    };
}));
*/

/*create a variable to create the row div*/
/*create a variable to create the square div*/


/* when user input 20, 
the function should create a 20x20 grid, 20 rows of 20 squares*/


