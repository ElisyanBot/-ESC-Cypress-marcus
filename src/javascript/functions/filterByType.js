const cbOnline = document.querySelector("#filter-checkbox-online");
const cbOnsite = document.querySelector("#filter-checkbox-onsite");
export default function filterByType() {

  cbOnline.addEventListener("click", () => showOnlineCards());

  cbOnsite.addEventListener("click", () => showOnsiteCards());
}

export function showOnlineCards () {
  const onlineCards = document.querySelectorAll(".online");

  if (cbOnline.checked == true) {
    for (let i = 0; i < onlineCards.length; i++) {
      onlineCards[i].style.display = "flex";
    }
  }
  else {
    for (let i = 0; i < onlineCards.length; i++) {
      onlineCards[i].style.display = "none";
    }
  }
}

export function showOnsiteCards() {
  const onsiteCards = document.querySelectorAll(".onsite");

  if (cbOnsite.checked == true) {
    for (let i = 0; i < onsiteCards.length; i++) {
      onsiteCards[i].style.display = "flex";
    }
  }
  else {
    for (let i = 0; i < onsiteCards.length; i++) {
      onsiteCards[i].style.display = "none";
    }
  }
}