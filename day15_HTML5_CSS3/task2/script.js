let users = await fetch("https://jsonplaceholder.typicode.com/users");
let usersData = await users.json();
// IMPORTANT NOTE : use Live server to avoid CORS errors
// Access to script at 'FILE_PATH' from origin 'null' has been blocked by CORS policy.
let ul = document.querySelector("ul.names");

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
ul.addEventListener("click", async (e) => {
  if (e.target.nodeName === "LI") {
    let nme = e.target.textContent;
    let lis = document.querySelectorAll("li");
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    // for (let i = 0; i < usersData.length; i++) {
    //   let newLi = document.createElement("li");
    //   newLi.textContent = usersData[i].name;
    //   ul.appendChild(newLi);
    // }
    e.target.classList.toggle("active");
    console.log(e.target);

    let user = await fetch(
      `https://jsonplaceholder.typicode.com/users?name=${nme}`
    );
    let userData = await user.json();
    userData = userData[0];
    // console.log(userData);
    addContent(userData);
    // console.log(ulCntent);
  }
});
for (let i = 0; i < usersData.length; i++) {
  let newLi = document.createElement("li");
  newLi.textContent = usersData[i].name;
  ul.appendChild(newLi);
}
