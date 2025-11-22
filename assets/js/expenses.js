let total = 0;
document.querySelectorAll(".rupees").forEach(cell => {
  total += parseFloat(cell.textContent);
});
document.getElementById("total-expenses").innerText = total;