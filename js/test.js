const cards_car = document.querySelector("#cards_cars");

document.addEventListener("DOMContentLoaded", main_function);

function main_function() {
  create_Cards();
}

function create_Cards() {
  cars_model.forEach((car, index) => {
    const cards = document.createElement("div");
    cards.innerHTML = ` 
    <div class="theme-default-with-icons__col-xs-12___3BYpq theme-default-with-icons__col-sm-6___2sVPE theme-default-with-icons__col-md-3___2cA1b">
    <div class="card__wrapper___1Kxvs">
    <div class="card__imageWrapper___2kQgr">
    <img class="card__image___bhnc2" src=${car.picture} alt="Manual de Propietario ${car.model}">
    </div>
    <h2 class="card__mainHeading___3OGYv theme-default-with-icons__headingFour___Sd-0t theme-default-with-icons__marginBottom20___3uimw">
    ${car.model}
    </h2>
    <p class="card__paragraph___mEAVt theme-default-with-icons__bodyCopy___1LIEy theme-default-with-icons__marginBottom20___3uimw">
    </p>
    <div class="card__selectWrapper___319-8"><input type="radio" name="download_brochure" id="${  car.model}" class="card__optionInput___1aH7t" value="${car.model}">
    <label for="Manual_Mirage G4645" class="card__optionLabel___3xahB theme-default-with-icons__inputsAndOptions___AmtQg">Seleccionar</label>
    </div>
    </div>
    </div>
    `;
    print_Card(cards);
  });
}

function print_Card(card) {
  cards_car.appendChild(card);
}
