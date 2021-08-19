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
      component_cards.innerHTML= `
                  <label>
                    <input type="radio" name="product" class="card-input-element" />
                      <div class="panel panel-default card-input" >
                        <div class="card" style="width: 10rem;">
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
                        </div>
                      </div>
                  </label>`;
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