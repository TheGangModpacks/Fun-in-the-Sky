const dissolution_prefix = 'fits:industrial_dissolution/general/'

ServerEvents.recipes(event =>{

    event.remove({output: 'industrialforegoing:plastic'})
    event.custom({
        type: metallurgic_infuser,
        chemicalInput: {amount: 200, infuse_type: 'kubejs:raw_rubber'},
        itemInput: {ingredient: Item.of('pneumaticcraft:plastic')},
        output: Item.of('industrialforegoing:plastic')
    }).id(`${met_infuser_prefix}foregoing/plastic`)

    //Machine Frames
    event.remove({output: 'industrialforegoing:machine_frame_simple'})
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Item.of('industrialforegoing:plastic'),
            Item.of('industrialforegoing:machine_frame_pity'),
            Item.of('industrialforegoing:plastic'),
            Item.of('kubejs:porcelain_nether_brick'),
            Item.of('kubejs:porcelain_nether_brick'),
            Item.of('emendatusenigmatica:signar_ingot'),
            Item.of('emendatusenigmatica:elementium_gear'),
            Item.of('emendatusenigmatica:signar_ingot')
        ],
        inputFluid: "{Amount:500,FluidName:\"create:honey\"}",
        output: {count: 1, item: 'industrialforegoing:machine_frame_simple'},
        processingTime: 500
    }).id(`${dissolution_prefix}simple_machine_frame`)
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Item.of('kubejs:archaic_pink_gold_ingot'),
            Item.of('industrialforegoing:machine_frame_simple'),
            Item.of('kubejs:archaic_pink_gold_ingot'),
            Item.of('industrialforegoing:plastic'),
            Item.of('industrialforegoing:plastic'),
            Item.of('kubejs:archaic_pink_gold_ingot'),
            Item.of("emendatusenigmatica:lead_gear"),
            Item.of('kubejs:archaic_pink_gold_ingot')
        ],
        inputFluid: "{Amount:2000,FluidName:\"immersiveengineering:biodiesel\"}",
        output: {count: 1, item: 'industrialforegoing:machine_frame_advanced'},
        processingTime: 500
    }).id(`${dissolution_prefix}advanced_machine_frame`)

    //Materials
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Item.of('emendatusenigmatica:enderium_ingot'),
            Item.of('kubejs:archaic_gold_ingot'),
            Item.of('emendatusenigmatica:enderium_ingot'),
            Item.of('kubejs:porcelain_nether_brick'),
            Item.of('kubejs:porcelain_nether_brick'),
            Item.of('emendatusenigmatica:bronze_ingot'),
            Item.of('kubejs:archaic_gold_ingot'),
            Item.of('emendatusenigmatica:bronze_ingot')
        ],
        inputFluid: "{Amount:250,FluidName:\"industrialforegoing:pink_slime\"}",
        output: {count: 1, item: 'kubejs:archaic_pink_gold_ingot'},
        processingTime: 600
    }).id(`${dissolution_prefix}archaic_pink_gold_ingot`)
})