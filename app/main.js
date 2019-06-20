import HouseController from "./components/HouseController.js";



class App {
  constructor() {
    this.controllers = {
      houseController: new HouseController()
    }
  }

}

window["app"] = new App()