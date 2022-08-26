import { subscribeHellfireClub } from "./firebase/hallfireclub.js";

const form = document.querySelector(".form-container form");
const formInputs = {
  txtName: document.querySelector("#txtName"),
  txtEmail: document.querySelector("#txtEmail"),
  txtLevel: document.querySelector("#txtLevel"),
  txtCharacter: document.querySelector("#txtCharacter"),
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const subscription = {
    name: formInputs.txtName.value,
    email: formInputs.txtEmail.value,
    level: formInputs.txtLevel.value,
    character: formInputs.txtCharacter.value,
  };
  subscribeHellfireClub(subscription).then((res) => {
    console.log(`ID: ${res}`);
  });
});
