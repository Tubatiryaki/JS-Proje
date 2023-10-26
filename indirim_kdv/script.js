function calgulateDiscount() {
  const priceEl = document.getElementById("price");
  const kdvEl = document.getElementById("kdvOranlari");
  const discountEl = document.getElementById("discount");
  const ElResult = document.querySelector("#Result");

  let totalPrice = priceEl.value;
  let KDV = totalPrice * kdvEl.value; //KDV or %20
  let finalTotal = parseFloat(totalPrice) + parseFloat(KDV);
  console.log("finalTotal", finalTotal);
  alert(`The Total Price is ${finalTotal}`);
  document.querySelector("#result").innerHTML = `${finalTotal}`;
  result.innerText = "The Final Total Is " + finalTotal;
  return finalTotal;

  console.log(totalPrice);
}
