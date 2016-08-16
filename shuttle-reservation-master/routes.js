// Poormans umd
let global;
if (module && module.exports) {
    global = module.exports;
} else {
    global = window;
}

class RouteInfo {

  constructor (routes) {
    this._routes = routes;
  }

  getDestinations (cityCode) {

    let destinations = new Set();

    Object.keys(this._routes).forEach(key => {

      let route = this._routes[key],
        schedule = route.schedule;

      let indx = schedule.findIndex(stop => stop.departCity === cityCode);

      if(indx > -1) {
        let dests = schedule.slice(indx+1, schedule.length);
        dests.forEach(d => destinations.add(d.departCity));
      }

    });

    return Array.from(destinations);
  }

  findRoute (fromCityCode, toCityCode) {

    let search = Object.keys(this._routes).find(key => {

      let route = this._routes[key],
        schedule = route.schedule;

      let indx = schedule.findIndex(stop => stop.departCity === fromCityCode);

      if(indx === -1) {
        return false
      }

      let contains = schedule.slice(indx+1, schedule.length)
        .map(stop => stop.departCity)
        .includes(toCityCode)

      return contains;

    });

    return search;
  }

}

global.RouteInfo = RouteInfo;
