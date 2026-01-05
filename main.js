console.log("tinytunes-cover start");

const addBtn = document.querySelector(.add);
const form = document.querySelector(.form);

addBtn.addEventListener("click", ()=>{
  form.classList.remover("hidden");
});

const saveBtn = documnet.querySelector(#save);

saveBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const link = document.querySelector("#link").value;

  console.log(title, link);
});

const playList = document.querySelector(.playlist);

saveBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const link = document.querySelector("#link").value;

  const item = document.createElement("div");
  item.innerHTML = `
    <p>${title}</p>
    <a href="${link}" target="_blank">listen</a>
  `;

  playlist.appendChild(item);
});

