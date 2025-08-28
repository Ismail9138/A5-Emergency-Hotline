let count = 0;

let heartBtns = document.getElementsByClassName("heart");
console.log(heartBtns);

for (let heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    count++;
    document.getElementById("heart-count").innerText = count;
  });
}
// let callCount = 100;
// let callBtns = document.getElementsByClassName("call-btn");
// console.log(callBtns);

// for (let callBtn of callBtns) {
//   callBtn.addEventListener("click", function () {
//     alert("📞Call Number :" + Number.innerText);
//     callCount -= 20;
//     document.getElementById("call-count").innerText = callCount;
//   });
// }

let coin = 100;
const coinCount = document.getElementById("coin-count");
const callHistory = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("clear-history-btn");

function currentCoin() {
  coinCount.innerText = coin;
}

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

function callCard(event) {
  if (coin < 20) {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে 20 কয়েন লাগবে");
    return;
  }

  coin = coin - 20;
  currentCoin();

  const card = event.currentTarget.closest(".card");
  const serviceName = card.querySelector(".service-name").innerText;
  const serviceNumber = card.querySelector(".service-number").innerText;
  const time = getTime();

  alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

  const cardHistory = document.createElement("div");
  cardHistory.className =
    "bg-[#FAFAFA] flex items-center justify-between p-4 rounded-md mb-2";

  cardHistory.innerHTML = `
    <div class="px-3">
      <h1 class="inter font-semibold text-xl">${serviceName}</h1>
      <p class="font-medium text-xl hind-madurai text-[#5C5C5C]">${serviceNumber}</p>
    </div>
    <div class="px-3">
      <p class="font-medium text-xl hind-madurai">${time}</p>
    </div>
  `;

  callHistory.appendChild(cardHistory);
}

function clearHistory() {
  callHistory.innerHTML = "";
}

document.querySelectorAll(".call-btn").forEach(function (btn) {
  btn.addEventListener("click", callCard);
});

clearHistoryBtn.addEventListener("click", clearHistory);
currentCoin();

let copyCount = 0;
document.querySelectorAll(".copy-btn").forEach(function (copyButton) {
  copyButton.addEventListener("click", function () {
    const card = copyButton.closest(".card");
    const targetElement = card.querySelector("h2.number");
    const numberText = targetElement.textContent.trim();

    navigator.clipboard.writeText(numberText).then(function () {
      alert("Number Copied:" + numberText);

      copyCount++;
      document.getElementById("copy-count").innerText = copyCount;
    });
  });
});
// console.log(copyBtns);

// for (let copyBtn of copyBtns) {
//   copyBtn.addEventListener("click", function () {
//     copyCount++;
//     document.getElementById("copy-count").innerText = copyCount;
//   });
// }
