// Code your solution in this file!

const logDriverNames = drivers => drivers.forEach(driver => console.log(driver.name));

const logDriversByHometown = function(drivers, hometown) {
    drivers.forEach(function(driver) {
        if(driver.hometown === hometown) {
            console.log(driver.name);
        }
    });
}

const revenueSorter = (d1, d2) => d1.revenue - d2.revenue;
const driversByRevenue = drivers => drivers.slice().sort(revenueSorter);

const nameSorter = (d1, d2) => d1.name.localeCompare(d2.name);
const driversByName = drivers => drivers.slice().sort(nameSorter);

const totalRevenue = drivers => drivers.reduce((total, driver) => total + driver.revenue, 0);

const averageRevenue = drivers => totalRevenue(drivers) / drivers.length;
   