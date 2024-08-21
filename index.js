var clothesShop = {
  khaadi: {
     karachi: {
          img: "khadi red.webp",
          fabric: "lawn",
          color: "red",
          price: "Rs 4000",
      }
  },
  sanaSafinaz: {
      faisalAbad: {
          img: "sana.safinaz.jpg",
          fabric: "lawn",
          color: "white",
          price: "Rs 4500",
      }
  },
  bonanza: {
    balochistan: {
          img: "purple.bonanza.webp",
          fabric: "lawn",
          color: "white",
          price: "Rs 5000",
      }
  },
  j·: {
      multan: {
          images: ["j.green.webp", "j.blue.webp", "j.grey.webp" , "j.brown.jpeg" ,"j.red.jpg"],
          fabric: "lawn",
          color: "white",
          price: "Rs 5999",
          perfume:[ "j.perfume.webp","j.per1.webp","j.per2.jpeg","j.per3.webp","j.per4.webp"]
      }
  },
  zellbury: {
      lahore: {
          img: "yellow.zell.webp",
          fabric: "lawn",
          color: "white",
          price: "Rs 5000",
      }
  },
  gulAhmed: {
    islamabad: {
          img: "white.gul.jpg",
          fabric: "lawn",
          color: "white",
          price: "Rs 5000",
      }
  }
}

var main = document.querySelector("#main");
var brand = document.querySelector("#brand");
var country = document.querySelector("#cloths"); 

brand.innerHTML = `<option value=""> select brand </option>`;
country.innerHTML = `<option value=""> select city </option>`;

for (var key in clothesShop) {
  brand.innerHTML += `<option value="${key}">${key}</option>`;
}

function dresses() {
  country.innerHTML = `<option value=""> select city </option>`;
  for (var key in clothesShop[brand.value]) {
      country.innerHTML += `<option value="${key}">${key}</option>`;
  }
}

var selectedCard = document.getElementById("selectedCard");

function searchProduct() {
  var userVal = clothesShop[brand.value][country.value];
  
 
  if (userVal.images) {
      var sliderImages = userVal.images.map((img, index) => `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <img src="${img}" class="d-block w-100" alt="Image ${index + 1}">
          </div>`).join('');

      selectedCard.innerHTML = `
        <center> 
          <div class="card text-center" style="width: 28rem;">
            <div id="imageSlider" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                ${sliderImages}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#imageSlider" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#imageSlider" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
                <h2 class="card-title">${userVal.fabric}</h2>
                <h2 class="card-text">${userVal.price}</h2>
            </div>
          </div>
        </center>`;
  } else {
   
      selectedCard.innerHTML = `
        <center> 
          <div class="card text-center" style="width: 28rem;">
              <img src="${userVal.img}" class="card-img-top" alt="${userVal.fabric}">
              <div class="card-body">
                  <h5 class="card-title">${userVal.fabric}</h5>
                  <p class="card-text">${userVal.price}</p>
                  <a href="#" class="btn btn-primary">${userVal.color}</a>
              </div>
          </div>
        </center>`;
  }

 
  if (userVal.perfume) {
    var perfumeImages = userVal.perfume.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100" alt="Perfume Image ${index + 1}">
        </div>`).join('');
    
    selectedCard.innerHTML += `
       <center> 
         <div class="card text-center" style="width: 28rem;">
            <div id="perfumeSlider" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                ${perfumeImages}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#perfumeSlider" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#perfumeSlider" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
                <h2 class="card-title">Perfume</h2>
                 <h2 class="card-title">RS.4999</h2>
            </div>
        </div> 
       </center>`;
  }

  main.style.display = 'none';
  selectedCard.style.display = 'block';
}

function clearProduct() {
  selectedCard.innerHTML = ""; 
  selectedCard.style.display = 'none';
  main.style.display = "flex";
}
