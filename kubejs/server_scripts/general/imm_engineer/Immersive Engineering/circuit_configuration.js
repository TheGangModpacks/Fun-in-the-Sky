ServerEvents.recipes(event =>{
    event.remove({output: 'immersiveengineering:component_iron'})
    event.remove({output: 'immersiveengineering:component_steel'})
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: "components",
        inputs: [
            {item: "emendatusenigmatica:steel_plate", count: 4},
            {item: "kubejs:mk1circuit", count: 1},
            {item: "minecraft:copper_ingot", count: 2}
        ],
        result: {item: "immersiveengineering:component_steel"}
    }).id('fits:blueprint/component_steel')
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: "components",
        inputs: [
            {item: "emendatusenigmatica:iron_plate", count: 4},
            {item: "minecraft:copper_ingot", count: 2}
        ],
        result: {item: "immersiveengineering:component_iron"}
    }).id('fits:blueprint/component_iron')
})
MoreJSEvents.villagerTrades((event) =>{
    event.removeModdedTrades(['immersiveengineering:machinist'], 'novice')
})