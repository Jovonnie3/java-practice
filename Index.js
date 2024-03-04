let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }
];

const riversideParkIndex = parks.findIndex(park => park.name === "Riverside Park");
if (riversideParkIndex !== -1) {
    parks[riversideParkIndex].name = "Riverside Greenspace";
}

const centralPark = parks.find(park => park.name === "Central Park");
if (centralPark) {
    const mapleTree = centralPark.trees.find(tree => tree.species === "Maple");
    if (mapleTree) {
        mapleTree.species = "Sugar Maple";
    }
}

const newTree = { species: "Birch", age: 7, health: "Good", height: 18 };
centralPark.trees.push(newTree);

const centralParkTrees = centralPark.trees.map(tree => tree.species);

const totalTreeAge = parks.flatMap(park => park.trees).reduce((acc, tree) => acc + tree.age, 0);
const averageTreeAge = totalTreeAge / parks.flatMap(park => park.trees).length;

const tallestTree = parks.flatMap(park => park.trees).reduce((tallest, tree) => tree.height > tallest.height ? tree : tallest);

const centralParkFacilitiesIndex = centralPark.facilities.indexOf("playground");
if (centralParkFacilitiesIndex !== -1) {
    centralPark.facilities.splice(centralParkFacilitiesIndex, 1);
}

const parksJSON = JSON.stringify(parks);

console.log("Name:", parks[0].name);
console.log("Facilities:", parks[0].facilities);

console.log("Species of the third item:", parks[2].trees.map(tree => tree.species));
