
const crocsShoes = {
    brand: "Crocs",
    foundedYear: 2002,
    headquarters: {
        location: "Niwot, Colorado",
        establishedYear: 1999,
    },

    productTypes: ["Classic Clogs", "Sandals", "Slippers", "Jibbitz Charms"],
    isPopular: true,
     isWaterproof: true,
    colorsAvailable: ["Black", "Blue", "Green", "Pink", "Red"],
    stockAvailability: {
        retailStores: 1500,
        onlineRetailers: 100,
    },
    priceRange: {
        minPrice: 20.00,
        maxPrice: 60.00,
    },

   
    features: ["Comfortable", "Lightweight", "Ventilation Holes"],

    discounts: [
        {
            type: "Sale",
            percentage: 20,
            startDate: new Date('2023-11-01'),
            endDate: new Date('2023-11-15'),
        },
        
        {
            type: "Clearance",
            percentage: 50,
            startDate: new Date('2023-12-01'),
            endDate: new Date('2023-12-31'),
        },
    ],
};

console.log(crocsShoes);

// Example usage of functions and properties
console.log(`Crocs headquarters location: ${crocsShoes.headquarters.location}`);
console.log(`Is Crocs popular? ${crocsShoes.isPopular ? 'Yes' : 'No'}`);

// Check if a discount is available
const saleDiscount = crocsShoes.discounts[0];

