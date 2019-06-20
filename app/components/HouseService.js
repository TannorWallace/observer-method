import House from "../model/house.js";

let _state = {
  houses: []
}

// let _house = [
_state.houses.push(new House({ size: "3500sqft", story: "2", bedbath: "3 and 2.5", acreage: "2.5", price: "100,000" }))

// ]
let _subscribers = {
  houses: []
};

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}


export default class HouseService {
  constructor() {
    console.log("Serving the House!")
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Houses() {
    return _state.houses.map(house => new House(house))
  }

  addHouse(newHouse) {
    let temp = this.Houses
    temp.push(new House(newHouse))
    setState("houses", temp)
  }
}