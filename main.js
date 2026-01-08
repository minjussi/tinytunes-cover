console.log("tinytunes-cover start");

const addBtn = document.querySelector(".add");
const form = document.querySelector(".form");

addBtn.addEventListener("click", ()=>{
  form.classList.remove("hidden");
});

const saveBtn = document.querySelector("#save");

saveBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const singer = documnet.querySelector("#singer").value;
  const link = document.querySelector("#link").value;

  console.log(title, singer, link);
});

const list = document.querySelector(".song-list");
const emptyText = document.querySelector(".empty");

saveBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const singer = document.querySelector("#singer").value;
  const link = document.querySelector("#link").value;

  const item = document.createElement("li");
  item.classList.add("song-item");

  item.innerHTML = `
    <p><strong>${title}</strong> – ${singer}</p>
    <a href="${link}" target="_blank">listen</a>
  `;

  list.appendChild(item);
  emptyText.style.display = "none";
});

