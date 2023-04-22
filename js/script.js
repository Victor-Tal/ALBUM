

/*=============================================
PINTEREST GRID
=============================================*/

var elem = document.querySelector('.grid-container');
imagesLoaded( elem,()=> {
  var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 230,
  gutter:20,
  isFitWidth:  true  
  });

  // element argument can be a selector string
  //   for an individual element
  //var msnry = new Masonry( '.grid', {
    // options
  //});
})


/*=============================================
TO DO LIST
=============================================*/
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

