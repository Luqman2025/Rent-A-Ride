function load()
{
    addBookingHistory();
    
    addBookingHistory();
    
    addBookingHistory();
    
    addBookingHistory();
}

function addBookingHistory() {
    // Create a new div element for the booking history
    var historyDiv = document.createElement("div");
    historyDiv.className = "history_car";

    // Create divs for image and car info
    var imgDiv = document.createElement("div");
    imgDiv.className = "img";
    var carInfoDiv = document.createElement("div");
    carInfoDiv.className = "car_info";

    // Create image element
    var img = document.createElement("img");
    img.src = "../Asset/Image/audi R.jpg"; // Replace with the image source
    img.alt = "saif";
    img.id = "img1";

    // Create car info elements
    var h3 = document.createElement("h3");
    h3.textContent = "Car Name : Lamborghini Urus";
    h3.style.fontFamily = "Righteous";
    h3.style.marginBottom="8px"
    h3.style.marginLeft="20px"
    h3.style.marginTop="10px"
    
    // margin-left: 20px;
    // margin-bottom: 8px;
    // margin-top: 10px;
    var cpFrom = document.createElement("p");
    cpFrom.textContent = "From : 01-04-2024";
    cpFrom.style.fontFamily = "Righteous";
    var cpTo = document.createElement("p");
    cpTo.textContent = "To : 01-04-2024";
    cpTo.style.fontFamily = "Righteous";
    cpTo.style.marginBottom="5px"
    cpTo.style.marginLeft="20px"
    cpTo.style.marginTop="10px"
    cpFrom.style.marginBottom="5px"
    cpFrom.style.marginLeft="20px"
    cpFrom.style.marginTop="10px"
    cpFrom.style.display="inline"
    cpTo.style.display="inline"
    // margin-left: 20px;
    // margin-bottom: 5px;
    // margin-top: 10px;
    var cpr = document.createElement("p");
    cpr.textContent = "Price : 20$";
    cpr.style.fontFamily = "Righteous";
    cpr.style.marginBottom="10px"
    cpr.style.marginLeft="20px"
    cpr.style.marginTop="10px"

    // Append elements to respective divs
    imgDiv.appendChild(img);
    carInfoDiv.appendChild(h3);
    carInfoDiv.appendChild(cpFrom);
    carInfoDiv.appendChild(cpTo);
    carInfoDiv.appendChild(cpr);

    // Append image and car info divs to historyDiv
    historyDiv.appendChild(imgDiv);
    historyDiv.appendChild(carInfoDiv);

    // Append historyDiv to the history section
    var historySection = document.getElementById("history");
    historySection.appendChild(historyDiv);
}
