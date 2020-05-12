const describe  = require('kape');
const nearestCity = require('../');

describe('Name of Function', nearestCity, snapshot =>
  snapshot(
    [{latitude: 44.0618643, longitude: -121.3188065}],
    [{latitude: 41.3394978, longitude: -96.1462098}],
  )
)