ServerEvents.recipes(event =>{

    event.remove({id: 'pneumaticcraft:heat_frame_cooling/plastic'})
    event.custom({
        type: fermenter,
        energy: 7000,
        fluid: Fluid.of('immersiveengineering:ethanol').withAmount('2000').toJson(),
        input: Item.of('honey_block')
    }).id(`${fermenter_prefix}ethanol/2000`)
    event.recipes.immersiveengineering.metal_press('pneumaticcraft:compressed_iron_gear', '6x pneumaticcraft:ingot_iron_compressed', 'immersiveengineering:mold_gear')
    event.recipes.immersiveengineering.metal_press('6x pneumaticcraft:pressure_chamber_wall', '12x pneumaticcraft:ingot_iron_compressed', 'immersiveengineering:mold_packing_9')
    .id('pneumaticcraft:pressure_chamber_wall')
    event.remove({id: 'pneumaticcraft:pressure_chamber_valve'})
    event.remove({id: 'pneumaticcraft:pressure_chamber_glass'})
    event.custom({ type: pressure_chamber, inputs:[
        {type: "pneumaticcraft:stacked_item", count: 3, item: 'emendatusenigmatica:electrum_nugget'},
        Item.of('redstone'),
        Item.of('pneumaticcraft:plastic')],
        pressure: 1.5,
        results:[Item.of('pneumaticcraft:transistor')]
    }).id('pneumaticcraft:pressure_chamber/capacitor')
    event.custom({ type: pressure_chamber, inputs:[
        {type: "pneumaticcraft:stacked_item", count: 2, item: 'emendatusenigmatica:electrum_nugget'},
        Ingredient.of('#forge:slimeballs'),
        Item.of('pneumaticcraft:plastic')],
        pressure: 1.5,
        results:[Item.of('pneumaticcraft:capacitor')]
    }).id('pneumaticcraft:pressure_chamber/transistor')
    event.custom({
        type: pressure_chamber, inputs:[
            {type: 'pneumaticcraft:stacked_item', count: 2, item: 'minecraft:redstone_torch'},
            {type: 'pneumaticcraft:stacked_item', count: 3, item: 'emendatusenigmatica:electrum_nugget'},
            {type: 'pneumaticcraft:stacked_item', count: 3, item: 'rftoolscontrol:card_base'},
            {type: 'pneumaticcraft:stacked_item', count: 2, item: 'pneumaticcraft:plastic'}
        ],
        pressure: 2.5,
        results:[Item.of('pneumaticcraft:empty_pcb').withCount(3).toJson()]
    }).id('pneumaticcraft:pressure_chamber/empty_pcb')
    event.custom({type: thermo_plant, exnothermic: false,
    fluid_input:{type: "pneumaticcraft:fluid", amount: 500, tag: "forge:lpg"},
    fluid_output:{amount: 1000, fluid: "pneumaticcraft:plastic"},
    item_input: Item.of('thermal:coal_coke'),
    temperature:{min_temp: 500}
    }).id('pneumaticcraft:thermo_plant/plastic_from_lpg')
    event.custom({type: thermo_plant, exnothermic: false,
        fluid_input:{type: "pneumaticcraft:fluid", amount: 500, tag: "forge:biodiesel"},
        fluid_output:{amount: 1000, fluid: "pneumaticcraft:plastic"},
        item_input: Item.of('thermal:coal_coke'),
        temperature:{min_temp: 500}
        }).id('pneumaticcraft:thermo_plant/plastic_from_biodiesel')
    event.recipes.create.mixing(['pneumaticcraft:plastic', Fluid.of('pneumaticcraft:yeast_culture', 5)], [Fluid.of('pneumaticcraft:plastic'), 'immersiveengineering:plate_duroplast']).id('fits:mixing/pncr/plastic')
    event.custom({
        type: inside,
        item_in: [{item: 'immersiveengineering:plate_duroplast'}, {item: 'pneumaticcraft:wheat_flour'}],
        block_in: {
            blocks: ['pneumaticcraft:plastic']
        },
        post: [
            {type: 'drop_item', item: 'pneumaticcraft:plastic'}
        ]
    }).id('fits:item_inside/pncr/plastic')
})