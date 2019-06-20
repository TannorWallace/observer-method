import HouseService from "./HouseService.js";


let _houseService = new HouseService()

function drawHouse() {
  let houseElem = document.querySelector("#house")
  let template = ''
  let houses = _houseService.Houses
  houses.forEach(house => {
    template += house.Template
  })
  houseElem.innerHTML = template
}






export default class HouseController {
  constructor() {
    console.log("house built")
    _houseService.addSubscriber("houses", drawHouse)
    drawHouse()
  }


  addHouse(event) {
    event.preventDefault()
    let form = event.target

    let newHouse = {
      size: form.size.value,
      story: form.story.value,
      acreage: form.acreage.value,
      price: form.price.value
    }
    _houseService.addHouse(newHouse)
    form.reset()
  }
}
