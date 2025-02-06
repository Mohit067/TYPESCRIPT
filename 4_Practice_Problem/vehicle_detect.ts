type CarData = {
    type: 'car'
    brand: string;
    model: string;
    price: number;
    fuelType: string;
}

type Bike = {
    type: 'bike'
    brand: string;
    model: string;
    price: number;
}

type vehicleType = CarData | Bike;

function vehicleData(vehicle: vehicleType) {
    if(vehicle.type === 'car'){
        console.log(`Car brand:${vehicle.brand}, model:${vehicle.model}, price:${vehicle.price}, fueltype:${vehicle.fuelType}`);
    } else {
        console.log(`Bike brand:${vehicle.brand}, model:${vehicle.model}, price:${vehicle.price}`);
    }
}

let myCarDetail : vehicleType = {
    type: "car",
    brand: "Toyota",
    model: "Camary",
    price: 300000,
    fuelType: "Electric"
}

let myBikeDetail : vehicleType = {
    type: 'bike',
    brand: "Toyota",
    model: "Camary",
    price: 300000,
}

vehicleData(myCarDetail);
vehicleData(myBikeDetail);