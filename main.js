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

const playlist = document.querySelector(".playlist");

saveBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const singer = document.querySelector("#singer").value;
  const link = document.querySelector("#link").value;
  const item = document.createElement("div");
  item.innerHTML = `
    <p><strong>${title}</strong> – ${singer}</p>
    <a href="${link}" target="_blank">listen</a>
  `;
  playlist.appendChild(item);
  form.classList.add("hidden");
  document.querySelector("#title").value = "";
  document.querySelector("#singer").value = "";
  document.querySelector("#link").value = "";
});

