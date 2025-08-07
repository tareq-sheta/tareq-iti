let users = await fetch("https://jsonplaceholder.typicode.com/users");
let usersData = await users.json();
// IMPORTANT NOTE : use Live server to avoid CORS errors
// Access to script at 'FILE_PATH' from origin 'null' has been blocked by CORS policy.
let contentCont = document.querySelector(".content");

function addContent(obj) {
  console.log(obj);
  if (!document.querySelector("ul.content")) return;
  document.querySelector("ul.content").remove();
  // --------
  let ulCntent = document.createElement("ul");
  ulCntent.classList.add("content");
  // --------
  let liName = document.createElement("li");
  liName.textContent = obj.company.name;
  ulCntent.appendChild(liName);
  // --------
  let liEmail = document.createElement("li");
  liEmail.textContent = obj.email;
  ulCntent.appendChild(liEmail);
  // --------
  let liPhone = document.createElement("li");
  liPhone.textContent = obj.phone;
  ulCntent.appendChild(liPhone);
  // --------
  let liWebsite = document.createElement("li");
  liWebsite.textContent = obj.website;
  ulCntent.appendChild(liWebsite);
  // --------
  ul.insertAdjacentElement("beforeend", ulCntent);
}
let finalarr = [];
console.log(usersData);
function User(id, name, email, phone, website) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.website = website;
}
function convertObjToInstance(obj, arr) {
  let user = new User(obj.id, obj.name, obj.email, obj.phone, obj.website);
  arr.push(user);
}
function newRow(obj) {
  return `<li>
          <ul class="user">
            <li>${obj.id}</li>
            <li>${obj.name}</li>
            <li>${obj.email}</li>
            <li>${obj.phone}</li>
            <li>${obj.website}</li>
          </ul>
        </li>`;
}
usersData.forEach((element) => {
  convertObjToInstance(element, finalarr);
});
// console.log(finalarr);
localStorage.setItem("usersArr", JSON.stringify(finalarr));
let retrivedArr = JSON.parse(localStorage.getItem("usersArr"));
console.log(retrivedArr);

retrivedArr.forEach((element) => {
  contentCont.insertAdjacentHTML("beforeend", newRow(element));
});
