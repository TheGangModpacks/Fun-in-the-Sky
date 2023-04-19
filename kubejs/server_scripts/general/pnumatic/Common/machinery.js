let MC = (id) => `minecraft:${id}`
let PN = (id) => `pneumaticcraft:${id}`
ServerEvents.recipes(event =>{
    event.remove({ output: (PN('pressure_chamber_interface'))})
    event.shaped(Item.of(PN('pressure_chamber_interface')),
    [ ' A ', 'ABA', ' A '], { A: (PN('pressure_chamber_wall')), B: 'pneumaticcraft:air_canister'})
    event.shaped(Item.of('pneumaticcraft:refinery'), ['aba', 'dcd', 'aba'], {a: "pneumaticcraft:reinforced_stone_slab",
    b: "immersiveengineering:heavy_engineering", c: "pneumaticcraft:small_tank", d: "immersiveengineering:rs_engineering"})
    .id('pneumaticcraft:refinery')
    event.shaped(Item.of('pneumaticcraft:refinery_output'), ['aba', 'cdc', 'aba'], {a: "pneumaticcraft:reinforced_stone_slab",
    b: "immersiveengineering:light_engineering", c: "immersiveengineering:insulating_glass", d: "pneumaticcraft:small_tank"})
    .id('pneumaticcraft:refinery_output')
    event.shaped(Item.of('pneumaticcraft:thermopneumatic_processing_plant'), ['aaa', 'bcb', 'ada'], {a: "pneumaticcraft:reinforced_stone_slab",
    b: "pneumaticcraft:small_tank", c: "pneumaticcraft:refinery", d: "immersiveengineering:furnace_heater"})
    .id('pneumaticcraft:thermopneumatic_processing_plant')
})