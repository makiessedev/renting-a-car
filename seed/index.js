const path = require("path")
const fs = require("fs/promises")
const {faker} = require("@faker-js/faker")
const Car = require("../src/entities/car.js")
const CarCategory = require("../src/entities/car-category.js")
const Customer = require("../src/entities/customer.js")

const ITEMS_AMOUNT = 2;

const seederBaseFolder = path.join(__dirname, "../", "database")
const carCategory = new CarCategory({
    id: faker.string.uuid(),
    name: faker.vehicle.type(),
    price: faker.finance.amount({min:167000, max:389000}),
    carIds: [],
})

const cars = []
const customers = []

for (let i = 0; i < ITEMS_AMOUNT; i++) {
    const car = new Car({
        id: faker.string.uuid(),
        name: faker.vehicle.model(),
        available: true,
        gasAvailable: true,
        releaseYear: faker.date.past().getFullYear()
    })
    carCategory.carIds.push(car.id)
    cars.push(car)

    const customer = new Customer({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        age: faker.string.numeric({length: {min: 18, max: 50}})
    })
    customers.push(customer)
}

async function write(filename, data) {
    await fs.writeFile(path.join(seederBaseFolder, filename), JSON.stringify(data))
}

;(async() => {
    await write("cars.json", cars);
    await write("car-categories.json", [carCategory]);
    await write("customers.json", [carCategory]);
})()