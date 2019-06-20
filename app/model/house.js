


export default class House {
  constructor(data) {
    this.size = data.size,
      this.story = data.story,
      this.bedbath = data.bedbath,
      this.acreage = data.acreage,
      this.price = data.price
  }
  get Template() {
    return `
    <div class="col-md-4">
      <h4>Size: ${this.size}</h4>
      <h4>Story:${this.story}</h4>
      <h4>Bed-Bath: ${this.bedbath}</h4>
      <h4>Acreage: ${this.acreage}</h4>
      <h4>Price: ${this.price}</h4>
    </div>
    `
  }
}