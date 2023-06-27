

export class House {
  constructor(data) {

    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.createdAt = new Date(data.createdAt)
    this.creator = data.creator
    this.id = data.id
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.price = data.price
    this.updatedAt = data.updatedAt
    this.year = data.year
  }



  get cardTemplate() {
    return `
    <div class="col-10 mt-3 elevation-5">
            <div class="row">
              <div class="col-4 p-0">
                <img class="img-fluid" src="${this.imgUrl}" alt="">
              </div>
              <div class="col-8">
                <h1>$${this.price}</h1>
                <div class="d-flex">
                  <h3 class="pe-3">${this.bedrooms} bds</h3>
                  <h3 class="px-3">${this.bathrooms} ba</h3>
                  <h3 class="px-3">built in ${this.year}</h3>
                  <h3 class="px-3">${this.levels} story</h3>
                </div>
                <h3> ${this.computeTimeAdjust}</h3>
                <h4>${this.description}</h4>
                <button onclick="app.HousesController.deleteHouse('${this.id}')"
                  class="btn btn-danger mb-2">Delete</button>
                <button onclick="app.HousesController.editHouse('${this.id}')" class="btn btn-warning mb-2">Edit</button>
                <div class="d-flex align-items-center mb-3">
              <h5 class="me-3">${this.creator.name}</h5>
              <img class="img-fluid creator-picture"
                src="${this.creator.picture}"
                alt="${this.creator.name}">
            </div>
              </div>
            </div>
          </div>
    `
  }




  get computeTimeAdjust() {
    let newDate = this.createdAt.toLocaleDateString({ day: 'numeric', month: 'numeric', year: 'numeric', })
    newDate += ' ' + this.createdAt.toLocaleTimeString('en-US')
    return newDate
  }
}