ServerEvents.recipes(event =>{
    event.custom({
        type: hammer,
        results: [
            {item: 'minecraft:pointed_dripstone', chance: 1.0, count: 1},
            {item: 'minecraft:pointed_dripstone', chance: 0.75, count: 1},
            {item: 'minecraft:pointed_dripstone', chance: 0.5, count: 1},
            {item: 'minecraft:pointed_dripstone', chance: 0.35, count: 1},
        ],
        input: {item: 'minecraft:dripstone_block'}
    })
})