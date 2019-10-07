// Code your solution in this file!
const logDriverNames = function(drivers){
    drivers.forEach(function(driver){console.log(driver.name)});
}

const logDriversByHometown = function(drivers, hometown){
    drivers.forEach(function(driver){
        if(driver.hometown === hometown){
            console.log(driver.name);
        }
    })
}

const revenueSorter = (a,b) => a.revenue - b.revenue;

const driversByRevenue = drivers => drivers.slice().sort(revenueSorter);

const nameSorter = (a, b) => a.name.localeCompare(b.name);

const driversByName = drivers => drivers.slice().sort(nameSorter);

const reduceRevenue = (total, driver) => total + driver.revenue;

const totalRevenue = drivers => drivers.reduce(reduceRevenue, 0);

const averageRevenue = drivers => totalRevenue(drivers)/drivers.length;
