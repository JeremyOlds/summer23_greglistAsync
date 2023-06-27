import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"


class HousesService {
  async deleteHouse(houseId) {
    const response = await api.delete('/api/houses/' + houseId)
    console.log(response.data);

    const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
    if (houseIndex < 0) {
      throw new Error('No house with that Index was found')

    }
    AppState.houses.splice(houseIndex, 1)

    AppState.emit('houses')

  }
  async getHouses() {
    const response = await api.get('/api/houses')
    console.log("service response for get houses:", response);

    const responseData = response.data.map(house => new House(house))

    console.log(responseData);

    AppState.houses = responseData
  }

  async createHouse(formData) {
    const response = await api.post('/api/houses', formData)
    console.log('create house response log', response.data);

    const newHouse = new House(response.data)

    AppState.houses.push(newHouse)

    AppState.emit('houses')
  }

}



export const housesService = new HousesService()