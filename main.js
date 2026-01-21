console.log("tinytunes-cover start");

const addBtn = document.querySelector(".add-btn");
const form = document.querySelector(".form");

addBtn.addEventListener("click", ()=>{
  form.classList.remove("hidden");
});

const saveBtn = document.querySelector(".save-btn");
const playlist = document.querySelector(".playlist");
const emptyText = document.querySelector(".empty");

saveBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const singer = document.querySelector("#singer").value;
  const link = document.querySelector("#link").value;

  console.log(title, singer, link);

  if (!title || !link) {
    alert("Please check title or link!");
    return;
  }

  const item = document.createElement("div");
  item.classList.add("song-item");

  item.innerHTML = `
    <p><strong>${title}</strong> – ${singer}</p>
    <a href="${link}" target="_blank">listen</a>
  `;
  
  playlist.appendChild(item);
  emptyText.style.display = "none";
  
  form.classList.add("hidden");
  document.querySelector("#title").value = "";
  document.querySelector("#singer").value = "";
  document.querySelector("#link").value = "";
});
