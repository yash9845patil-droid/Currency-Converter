const msg = document.querySelector(".msg");
const resultInput = document.querySelector(".result-input");

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount-input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}`.json;
  let response = await fetch(URL);
  let data = await response.json();

  let rate = data[toCurr.value.toLowerCase()];
  let finalAmount = (amtVal * rate).toFixed(2);

  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

  // store final result into hidden input
  resultInput.value = finalAmount;
};