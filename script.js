/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const vehicleCard = document.getElementById("output");

async function putInToDiv() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      data = result;

      vehicleCard.innerHTML = "";
      data.forEach((element) => {
        let cardWrapper = document.createElement("div");
        
        let usersLogin = document.createElement("div");
        usersLogin.textContent = element.login;

        let usersURL = document.createElement("img");
        usersURL.src = element.avatar_url;

        cardWrapper.append(usersLogin, usersURL);
        vehicleCard.append(cardWrapper);
      });
    })
    .catch((error) => console.error(error));
}

document.querySelector("button").addEventListener("click", putInToDiv);