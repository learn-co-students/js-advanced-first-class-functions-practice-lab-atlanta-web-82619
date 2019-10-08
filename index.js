// Code your solution in this file!

const logDriverNames = function(drivers) {
    for (let i = 0; i < drivers.length; i++){
        console.log(drivers[i].name)
    }
}

const logDriversByHometown = function(drivers, location) {
    const matches = drivers.filter(driver => driver.hometown === location)
    for (let i = 0; i < matches.length; i++) {
        console.log(matches[i].name)
    }
}

const driversByRevenue = function(drivers) {
    return drivers.slice().sort(function(a, b) {
        return a.revenue - b.revenue
    })
}

const driversByName = function(drivers) {
    return drivers.slice().sort(function(a, b) {
        return a.name.localeCompare(b.name)
    })
}

const totalRevenue = function(drivers) {
    return drivers.reduce(function(a, b) {
        return b.revenue + a
    }, 0)
}

const averageRevenue = function(drivers) {
    return (totalRevenue(drivers) / drivers.length)
}