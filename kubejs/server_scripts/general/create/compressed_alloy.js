ServerEvents.recipes(event =>{
    event.remove({id: 'dustrial_decor:rusty_iron_ingot'})
    event.remove({id: 'dustrial_decor:rusty_iron_nugget'})
    event.remove({output: 'create:andesite_alloy'})
    event.custom({
		type: 'pneumaticcraft:thermo_plant',
		exothermic: false,
		fluid_input: {type: 'pneumaticcraft:fluid', amount: 250, fluid: 'minecraft:water' },
		item_input: { item: 'minecraft:iron_ingot' },
		item_output: { item: 'dustrial_decor:rusty_iron_ingot' },
		temperature: { min_temp: 100 },
        pressure: 2.0
    }).id('fits:pncr/tpp/rusty_iron')
    event.custom({
        type: pressure_chamber,
        inputs: [
            Item.of('dustrial_decor:rusty_iron_ingot'),
            Item.of('emendatusenigmatica:zinc_ingot'),
            {item: 'kubejs:leaded_iron_compound', count: 2}
        ],
        pressure: 2.0,
        results: [Item.of('kubejs:rusty_compressed_compound')]
    }).id('fits:pncr/pressure_chamber/rusty_compressed_compound')
    event.shaped("create:andesite_alloy", ['ab', 'bb'], {a: 'kubejs:rusty_compressed_compound', b: 'architects_palette:wardstone_brick'}).id('fits:general/shaped/compressed_alloy')
    event.shaped('8x architects_palette:wardstone', ['aaa', 'aba', 'aaa'], {a: 'architects_palette:wardstone_brick', b: 'stone'}).id('architects_palette:wardstone')
    event.recipes.create.compacting('create:andesite_alloy', ['architects_palette:wardstone_brick', 'architects_palette:wardstone_brick', 'kubejs:rusty_compressed_compound']).id('fits:compacting/cr/compressed_alloy')
})