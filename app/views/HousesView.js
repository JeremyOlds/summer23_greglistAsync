export const HousesView = /*html*/ `
<div class="container-fluid">
<section class="row">
  <div class="col-12 d-flex justify-content-center">
    <h1>Houses</h1>
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#formCollapse">Add House</button>
    <div class="collapse" id="formCollapse">
      <div class="card card-body">
        <form onsubmit="app.HousesController.createHouse(event)">
          <label for="housePrice">Price</label>
          <input type="number" id="housePrice" name="price" required>

          <label for="houseBedrooms">how Many Bedrooms?</label>
          <input type="number" id="houseBedrooms" name="bedrooms" required>

          <label for="houseBathrooms"> How Many Bathrooms?</label>
          <input type="number" name="bathrooms" id="houseBathrooms" required>

          <label for="houseLevels">How Many Floors?</label>
          <input type="number" id="houseLevels" name="levels" required>

          <label for="houseYear">What year is it?</label>
          <input type="number" id="houseYear" name="year" required>

          <label for="houseImg"> Image Url for House</label>
          <input type="Url" id="houseImg" name="imgUrl">

          <label for="houseDecription">Description</label>
          <textarea name="description" id="houseDecription" cols="30" rows="10"></textarea>
          <input type="submit">




        </form>

      </div>
    </div>
  </div>
</section>

<section id="houseList" class="row justify-content-center">
</section>
`