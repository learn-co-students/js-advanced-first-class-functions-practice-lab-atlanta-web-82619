// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(function(el, i, arr) {
        console.log(el.name);
    })
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(el, i, arr) {
        if (el.hometown === location) {
            console.log(el.name);
        }
    })
}

function driversByRevenue(drivers) {
    let ret = [...drivers]
    return ret.sort(function(a, b) {
        return a.revenue - b.revenue;
    })
}

function driversByName(drivers) {
    let ret = [...drivers]
    return ret.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    })
}

function totalRevenue(drivers) {
    const func = function(agg, el, i, arr) {
        return agg += el.revenue;
    }
    return drivers.reduce(func, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}