// Function to calculate values and update the display
function calculateValues() {
  // Get current date
  var currentDate = new Date();
  var formattedDate =
    currentDate.getDate() +
    " " +
    currentDate.toLocaleString("default", { month: "short" }) +
    " " +
    currentDate.getFullYear();
  document.getElementById("date").innerText = "Date: " + formattedDate;

  // Calculate total price
  var liters = parseFloat(document.getElementById("liters").value);
  var pricePerLiter = parseFloat(
    document.getElementById("pricePerLiter").value
  );
  var totalPrice = liters * pricePerLiter;
  document.getElementById("totalPrice").innerText =
    "Php " + totalPrice.toFixed(2);

  // Calculate Km / liter
  var km = parseFloat(document.getElementById("km").value);
  var kmPerLiter = km / liters;
  document.getElementById("kmPerLiter").innerText =
    kmPerLiter.toFixed(2) + " km";

  // Calculate Price / Km
  var pricePerKm = totalPrice / km;
  document.getElementById("pricePerKm").innerText =
    "Php " + pricePerKm.toFixed(2);
}

// Initial calculation on page load
calculateValues();
