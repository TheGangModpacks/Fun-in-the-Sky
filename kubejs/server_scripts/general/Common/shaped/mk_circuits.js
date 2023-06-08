ServerEvents.recipes(event => {
    event.shaped('kubejs:mk1circuit', ['eaf', 'bbc', 'ddd'], 
    {
     a: "emendatusenigmatica:constantan_ingot",
     b: 'emendatusenigmatica:steel_ingot',
     c: 'immersiveengineering:component_iron',
     d: 'immersiveengineering:insulating_glass',
     e: 'emendatusenigmatica:nickel_ingot',
     f: 'minecraft:gold_ingot'
    }).id('fits:shaped/circuits/mk1')
})