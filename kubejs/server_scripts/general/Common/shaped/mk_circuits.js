ServerEvents.recipes(event => {
    event.shaped('kubejs:mk1circuit', ['efa', 'bbc', 'ddd'], 
    {
     a: "emendatusenigmatica:constantan_ingot",
     b: 'emendatusenigmatica:steel_ingot',
     c: 'immersiveengineering:component_steel',
     d: 'immersiveengineering:insulating_glass',
     e: 'emendatusenigmatica:nickel_ingot',
     f: 'emendatusenigmatica:electrum_ingot'
    }).id('fits:shaped/circuits/mk1')
})