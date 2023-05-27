ServerEvents.recipes(event => {
    event.remove({ output: 'hexerei:mixing_cauldron' })
    
    event.shaped('hexerei:mixing_cauldron', [
        'T T',
        'SCS',
        'SSS'
    ], {
        S: 'emendatusenigmatica:steel_ingot',
        C: 'minecraft:cauldron',
        T: 'minecraft:soul_torch'
    })

})