const {RouteInfo} = require('./routes.js');
const chai = require('chai');
const expect = chai.expect;

var routes = {

    CHI2DKB: {

        schedule: [
            {
                departCity: 'CHI',
                departTime: '3:00PM'
            },
            {
                departCity: 'OKP',
                departTime: '3:30PM'
            },
            {
                departCity: 'VPK',
                departTime: '4:15PM'
            },
            {
                departCity: 'WCH',
                departTime: '5:00PM'
            },
            {
                departCity: 'DKB',
                departTime: '6:30PM'
            }
        ],

        days: [1,2,4,5,6,7]
    },

    DKB2CHI: {

        schedule: [
            {
                departCity: 'DKB',
                departTime: '9:00AM'
            },
            {
                departCity: 'WCH',
                departTime: '10:00AM'
            },
            {
                departCity: 'VPK',
                departTime: '10:45AM'
            },
            {
                departCity: 'OKP',
                departTime: '11:30AM'
            },
            {
                departCity: 'CHI',
                departTime: '12:15PM'
            }
        ],

        days: [1,4,5,6]
    }
};

describe('RouteInfo', function () {

  beforeEach(function () {
    this.routeInfo = new RouteInfo(routes);
  });

  it('should be able to get all possible destinations from a source city', function () {

    let destinations = this.routeInfo.getDestinations('WCH');

    ['DKB', 'OKP', 'CHI', 'VPK'].forEach(dest => {
      expect(destinations).to.contain(dest);
    });

    expect(destinations).not.to.contain('WCH');

  });

  it('should be able to find the route code from two city codes', function () {
    let routeCode = this.routeInfo.findRoute('VPK', 'WCH');
    expect(routeCode).to.equal('CHI2DKB');
  });

});
