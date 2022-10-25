// ====================================== //
// * - - - - Elements Variable - - - - //
// ====================================== //

const button = document.getElementById("enter__btn");
const input = document.getElementById("input__field");
const ul = document.getElementById("list");

// ============================== //
// * - - - - Functions - - - - //
// ============================== //

// =============================================================== //
// * - - - - Creating Function That Creates a list Item - - - - //
// =============================================================== //

const addToList = () => {
  // * - - - - Creating a Div inside ul - - - - //

  const wrapper = document.createElement("div");

  // * - - - - Warpper Styles - - - - //

  wrapper.classList.add("wrapper__div");

  // * - - - - Creating li Element - - - - //

  const li = document.createElement("li");

  // * - - - - li Styles - - - - //

  li.classList.add("liStyles");

  // * - - - - Appending Value of user Input Field To li - - - - //

  li.appendChild(document.createTextNode(input.value));

  // * - - - - Creating a box For Buttons inside Wrapper

  const box = document.createElement("div");

  // * - - - - Creating a Done button - - - - //

  const done = document.createElement("button");

  // * - - - - Add hover State to btn - - - - //

  done.classList.add("hover");

  // * - - - - Done Button Styles - - - - //

  done.classList.add("btn");
  done.appendChild(document.createTextNode("Done!"));

  // * - - - - Adding Click event on Done Button When User Clicks it the button turns green and li get crossed off - - - - //

  done.addEventListener("click", () => {
    done.classList.toggle("btn__toggle");
    li.classList.toggle("li__toggle");
  });

  // * - - - - Creating a Del button - - - - //

  const del = document.createElement("button");

  // * - - - - Add hover State to btn - - - - //

  del.classList.add("hover");

  // * - - - - Del Button Styles - - - - //

  del.classList.add("btn");
  del.appendChild(document.createTextNode("Delete"));

  // * - - - - Adding Click event on Delete Button When User Clicks it That Item Get Deleted - - - - //

  del.addEventListener("click", () => {
    wrapper.remove();
  });

  // * - - - - Appending Buttons To box - - - - //

  box.appendChild(done);
  box.appendChild(del);
  box.classList.add("flex");

  // * - - - - Appending box and li Button To Wrapper - - - - //

  wrapper.appendChild(li);
  wrapper.appendChild(box);

  // * - - - - Appending Wrapper to ul  - - - - //

  ul.appendChild(wrapper);

  // * - - - - Reseting Input Value To Empty - - - - //

  input.value = "";
};

// ================================================== //
// * - - - - Returning Input Values Length - - - - //
// ================================================== //

const inputLength = () => input.value.length;

// ================================================= //
// * - - - - Adding Item To list on Click - - - - //
// ================================================= //

const addTolistOnClick = () => {
  inputLength() > 0 ? addToList() : false;
};
// ==================================================== //
// * - - - - Adding Item To list on KeyPress - - - - //
// ==================================================== //

const addToListOnKeyPress = (event) => {
  if (inputLength() > 0 && event.key === "Enter") {
    addToList();
  }
};
// =========================== //
// * - - - - Events - - - - //
// =========================== //

// * - - - - Create a List Item By Clicking on Enter button - - - - //

button.addEventListener("click", addTolistOnClick);

// * - - - - Create a List Item By Pressing Enter Key - - - - //

input.addEventListener("keypress", addToListOnKeyPress);
