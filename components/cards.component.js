//variables
const cards_check  = document.querySelector('#cardscheck');
const items_year = document.querySelector('#items_year');


//event_listeners
document.addEventListener('DOMContentLoaded',()=>{
  create_Card()
})


//functions
function create_Card(){
  cars_model.forEach((car, index) => {
    const {model, picture, model_years} = car
      let component_cards= document.createElement('label');
      /*component_cards.innerHTML= `
                  <label>
                  <input type="radio" name="product" class="card-input-element" />
                    <input type="radio" name="product" class="card-input-element" />
                      <div class="panel panel-default card-input" >
                        <div class="card" style="width: 13rem;">
                          <img src=${picture} class="card-img-top" alt="${index}">
                          <div class="card-body">
                            <h4 class="card-title letter" style="font-weight:900">Manual ${model}</h4>
                            <select class="form-select modelo-anio" style="background-color:rgb(194, 4, 4); color: white">
                              <option hidden selected >Selecciona una opción</option>
                              <option value="${model+"-"+2021}">2021</option>
                              <option value="${model+"-"+2020}">2020</option>
                              <option value="${model+"-"+2019}">2019</option>
                            </select>
                          </div>
                          <div align="center">
              <input  type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            </div>
                        </div>
                      </div>
                  </label>`;
                  */
                 component_cards.innerHTML= `
                 <div class="radio-container" style="display block; margin-left: 0px; margin-right: 0px;">
                    <input type="radio" id="${index}" name="plan-selector" value="0" class="radio-button" style="display block; margin-left: 0px; margin-right: 0px;">
                    <label for="${index}">
                    <div class="plan-card" style="">
                    <div class="card" style="width: 13rem;">
                    <img src=${picture} class="card-img-top">
                    <div class="card-body">
                    <h4 class="card-title letter" style="font-weight:900">Manual ${model} </h4>
                    <select class="form-select model-year"  style="background-color:rgb(194, 4, 4); color: white">
                    <option hidden selected >Selecciona una opción</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    </select>
                    </div>
                    <div align="center">
                    <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                    </div>
                    </div>
                    </div>
                    </label>
                    <div class="plan-card-radio-button"></div>
                </div>
                 `;
        print_Card(component_cards);
    });
}

function print_Card(card){
  cards_check.appendChild(card);
}

function createItemsSelect(car){
//console.log(car);
for (const year of car) {
  let item = document.createElement('option');
  //console.log(car);
  item.value= year;
  item.textContent= year;
  items_year.appendChild(item)
}
}