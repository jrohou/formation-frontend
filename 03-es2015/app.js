let favoriteCityId =  'paris';

console.log('LET');
console.log(favoriteCityId);

const citiesId = new Array();
citiesId[0] = 'paris';
citiesId[1] = 'nyc';
citiesId[2] = 'rome';
citiesId[3] = 'riot-de-janeiro';
//citiesId[4] = ;
citiesId[4] = 'tokyo';
console.log('CONST');
console.log(citiesId);

function getWeather(citiesId) {
  let city = citiesId.toUpperCase();
  let temperature = 20;

  return {city, temperature};
}


const weather = getWeather(favoriteCityId);

console.log('CREATION D OBJET');
console.log(weather);

const {city} = weather;
const {temperature} = weather;

console.log('AFFECTATION DESTRUCTUREE');
console.log(city + ' '+temperature);

const [parisId,nycId,...otherCitiesId] = citiesId;

console.log('REST OPERATOR');
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId.length);

class Trip {

  constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  toString() {
    return `Trip[${this.id},${this.name}, ${this.imageUrl}, ${this._price}]`;
  }

  static getDefaultTrip() {
    return `Trip[rio-de-janeiro, Rio de Janeiro, img/rio-de-janeiro.jgp, undefined]`;
  }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

parisTrip.price = 100;

console.log('CLASSE 01');
console.log(parisTrip);
console.log(parisTrip.name);

console.log('CLASSE 02, 03');
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log('CLASSE 04');
console.log(defaultTrip);

class FreeTrip extends Trip {

  constructor(id,name,imageUrl,price) {
    super(id,name,imageUrl);
    this.price = 0;
  }

  toString() {

    return `FreeTrip[${this.id},${this.name}, ${this.imageUrl}, ${this._price}]`;
  }
}

const freeTrip = new FreeTrip('nantes','Nantes','img/nantes.jpg');

console.log('HERITAGE');
console.log(freeTrip.toString());


class TripService {
  constructor() {

   this.trips= new Set();

     this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
     this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
     this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    // TODO Set of 3 trips
    //
    // new Trip('paris', 'Paris', 'img/paris.jpg')
    // new Trip('nantes', 'Nantes', 'img/nanges.jpg')
    // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
  }
  findByName(tripName) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
          if (tripName) {
            const tripTrouve = Array.from(this.trips).find(t => t.name == tripName)

            if(tripTrouve) {
                resolve(tripTrouve)
            } else {
              reject('Trip non trouvé');
            }}}, 2000);

    });

    // TODO return promise
  }
}

const tripService = new TripService()

tripService.findByName('Paris').then((trip) => {
  console.log("Trip trouvé", trip)
}, (err) => console.log('Errrrrrr', err))

tripService.findByName('X').then((trip) => {
  console.log("Trip trouvé", trip)
}, (err) => console.log('Errrrrrr', err))

class PriceService {
  constructor() {

    this.price = new Map();

    this.price.set(`paris`, 100);
    this.price.set(`rio-de-janeiro`, 800);

    // TODO Map of 2 trips
    // 'paris' --> price = 100
    // 'rio-de-janeiro' --> price = 800)
    // no price for 'nantes'
  }
  findPriceByTripId(tripId) {
    // TODO return promise
  }
}
