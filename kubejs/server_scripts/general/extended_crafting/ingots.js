ServerEvents.recipes(event =>{
    event.recipes.create.compacting('extendedcrafting:black_iron_ingot', [ Fluid.of('kubejs:liquifacted_tar', 100),
    'botania:black_petal', 'botania:black_petal', 'botania:black_petal', 'botania:elementium_ingot', 'botania:elementium_ingot', 'botania:elementium_ingot']).superheated()
    .id('fits:compacting/black_iron_ingot')
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: ext('black_iron_ingot')},
        transitionalItem: {item: 'create:incomplete_black_iron_plate'},
        sequence: [
            {type: 'create:deploying', ingredients: [Item.of('create:incomplete_black_iron_plate'), Item.of('emendatusenigmatica:bronze_plate')], results: [Item.of('create:incomplete_black_iron_plate')]},
            {type: 'create:pressing', ingredients: [Item.of('create:incomplete_black_iron_plate')], results: [Item.of('create:incomplete_black_iron_plate')]},
            {type: 'create:pressing', ingredients: [Item.of('create:incomplete_black_iron_plate')], results: [Item.of('create:incomplete_black_iron_plate')]},
            {type: 'create:pressing', ingredients: [Item.of('create:incomplete_black_iron_plate')], results: [Item.of('create:incomplete_black_iron_plate')]},
            {type: 'create:pressing', ingredients: [Item.of('create:incomplete_black_iron_plate')], results: [Item.of('create:incomplete_black_iron_plate')]},
            {type: 'create:pressing', ingredients: [Item.of('create:incomplete_black_iron_plate')], results: [Item.of('create:incomplete_black_iron_plate')]}
        ],
        results: [Item.of('emendatusenigmatica:black_iron_plate')], loops: 2
    }).id('fits:seq_assembly/compat/black_iron_plate_from_ingot')

    event.recipes.create.mixing(['extendedcrafting:ender_ingot'], ['ender_pearl', 'ender_pearl', 'ender_pearl', 'ender_pearl', 'ender_pearl', 'ender_pearl', 'extendedcrafting:black_iron_ingot'])
    .id('fits:mixing/extended_crafting/ender_ingot').heated()
    event.shaped(ext('ender_ingot'), ['aaa', 'aaa', 'aaa'], {a: ext('ender_nugget')}).id('fits:shaped/compat/ender_ingot_from_nugget')
    event.shapeless(Item.of(ext('ender_ingot'), 9), [ext('ender_ingot_block')]).id('fits:shapeless/compat/ender_ingot_from_block')
    event.shaped(ext('ender_ingot_block'), ['aaa', 'aaa', 'aaa'], {a: ext('ender_ingot')}).id('fits:shaped/compat/ender_block_from_ingot')
    event.shapeless(Item.of(ext('ender_nugget'), 9), [ext('ender_ingot')]).id('fits:shapeless/compat/ender_nugget_from_ingot')
})