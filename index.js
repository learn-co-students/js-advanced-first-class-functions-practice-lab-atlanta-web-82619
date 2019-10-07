const logDriverNames = function(drivers) {
  drivers.forEach(function(x) {
    console.log(x.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

// const driversByRevenue = drivers.sort(function(a, b) {
//   return a.revenue - b.revenue;
// });
//
// const driversByName = drivers.sort(function(b, a) {
//   return a.name - b.name;
// });

function driversByRevenue(drivers) {
  let ret = [...drivers];
  return ret.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  let ret = [...drivers];
  return ret.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = drivers => drivers.reduce(reduceRevenue, 0);

const averageRevenue = drivers => totalRevenue(drivers) / drivers.length;
