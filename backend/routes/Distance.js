const router = require('express').Router();

const vets = require('../data/vets.json');

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function isWithinRadius(lat1, lon1, lat2, lon2, radius) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d <= radius;
}

function getCloseVets(location, radius) {
  let vetsWithinRange = [];
  vets.forEach((vet) => {
    if (
      isWithinRadius(
        location.lat,
        location.lng,
        vet.location.lat,
        vet.location.lng,
        radius
      )
    ) {
      vetsWithinRange.push(vet);
    }
  });
  return vetsWithinRange;
}

router.post('/', (req, res) => {
    console.log(req.body);
  let location = req.body.location; // has lat and longitude
  let radius = req.body.radius;
  let closeVets = getCloseVets(location, radius);
  res.send(closeVets);
});

router.get("/",(req,res) => {
    res.send("Hello distance");
});
module.exports = router;
