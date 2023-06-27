import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
  const houses = AppState.houses
  let template = ''

  houses.forEach(house => template += house.cardTemplate)

  setHTML('houseList', template)

}

export class HousesController {
  constructor() {
    console.log('house controller loaded');
    this.getHouses()

    AppState.on('houses', _drawHouses)
  }



  async getHouses() {
    try {
      await housesService.getHouses()

    } catch (error) {
      console.log(error);
      Pop.error(error.message)

    }

  }

  async createHouse(event) {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await housesService.createHouse(formData)

    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }

  async deleteHouse(houseId) {
    try {
      await Pop.confirm('Are you sure you wish to delete this post?')
      housesService.deleteHouse(houseId)

    } catch (error) {
      console.log(error);
      Pop.error(error.message)

    }
  }

  async editHouse() {
    try {



    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }

}