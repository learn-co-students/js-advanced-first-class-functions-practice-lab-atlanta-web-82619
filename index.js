// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  const filtered = drivers.filter(driver => driver.hometown === location);
  return logDriverNames(filtered);
}

function driversByRevenue(drivers) {
  const copy = drivers.slice();
  copy.sort((a, b) => a.revenue - b.revenue);
  return copy;
}

function driversByName(drivers) {
  const copy = drivers.slice();
  copy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return copy;
}

function totalRevenue(drivers) {
  const total = drivers.map(e => e.revenue).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}