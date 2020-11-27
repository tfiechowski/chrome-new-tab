chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: "#3aa757" }, function () {
    const links = {
      rota: [{ text: "Trello", link: "https://trello.com" }],
    };

    for (let key in links) {
      const list = document.getElementById("root-" + key);

      links[key].forEach((link) => {
        let li = document.createElement("li");
        li.href = link.link;
        li.innerHTML = link.text;

        list.appendChild(li);
      });
    }
  });
});
