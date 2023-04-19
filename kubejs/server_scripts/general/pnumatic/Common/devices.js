let PN = (id) => `pneumaticcraft:${id}`
ServerEvents.recipes(event =>{
    event.remove({ output: (PN('pressure_tube'))})
    event.shaped(Item.of(PN('pressure_tube'), 6),
    [ 'AAA', 'BBB', 'AAA'], { A: (PN('ingot_iron_compressed')), B: ("immersiveengineering:fluid_pipe")})
    event.shaped(Item.of('pneumaticcraft:pressure_gauge'), [' a ', 'aba', ' a '], {a: "emendatusenigmatica:electrum_ingot", b: "pneumaticcraft:ingot_iron_compressed"})
    .id(PN('pressure_gauge'))
    event.replaceInput({id: 'pneumaticcraft:manual_compressor'}, 'minecraft:red_dye', 'immersiveengineering:wooden_grip')
    event.replaceInput({id: 'pneumaticcraft:air_compressor'}, 'minecraft:furnace', 'immersiveengineering:furnace_heater')
    event.shaped(Item.of('pneumaticcraft:advanced_air_compressor'), ['aaa', 'abc', 'ada'], {a: (PN('ingot_iron_compressed')),
    b: (PN('printed_circuit_board')), c: (PN('advanced_pressure_tube')), d: "pneumaticcraft:air_compressor"}).id('pneumaticcraft:advanced_air_compressor')
    event.shaped(Item.of('pneumaticcraft:liquid_compressor'), [' a ', 'bcb', 'ded'], {a: 'immersiveengineering:acetaldehyde_bucket', b: (PN('pressure_tube')),
    c: (PN('small_tank')), d: 'immersiveengineering:ersatz_leather', e: (PN('air_compressor'))}).id(PN('liquid_compressor'))
    event.replaceInput({id: 'pneumaticcraft:charging_station'}, 'minecraft:brick', 'kubejs:leaded_iron')
})