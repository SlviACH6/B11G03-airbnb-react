import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Gallery */}
      <Gallery />
      <div className="grid bg-pink-200 grid-cols-3 gap-24">
        {/* Title and description of the listing */}
        <div class="bg-pink-600 col-span-2">3</div>
        {/* Booking window */}
        <div class="bg-pink-600">4</div>
      </div>

      {/* Read listing reviews */}
      <div className="grid grid-cols-3 gap-24">
        <div class="col-span-2 bg-blue-200">
          <div className="flex bg-blue-200 gap-2">
            {/* host photo */}
            <div class="bg-blue-600">3.1</div>
            {/* host name */}
            <div class="bg-blue-600">3.2</div>
          </div>
        </div>
        {/* flexbox */}
        <div className="flex bg-blue-200 justify-between">
          {/*Total price*/}
          <div class="bg-blue-600">4.1</div>
          <div className="grid bg-blue-200">
            {/* Reserve button */}
            <div class="bg-blue-600">4.2</div>
          </div>
        </div>
      </div>

      {/* import reviews */}
      <Reviews />
    </div>
  )
}

export default House
