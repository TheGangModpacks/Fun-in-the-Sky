ServerEvents.recipes(event =>{
    event.shapeless("kubejs:archaic_gold_block", ['9x kubejs:archaic_gold_ingot']).id('fits:shapeless/materials/archaic_gold_block')
    event.shapeless("9x kubejs:archaic_gold_ingot", ['kubejs:archaic_gold_block']).id('fits:shapeless/materials/archaic_gold_ingot')
    event.custom({
        type: metallurgic_infuser,
        chemicalInput: {amount: 160, tag: "mekanism:gold"},
        itemInput: {ingredient: Item.of('kubejs:porcelain_nether_brick')},
        output: Item.of('kubejs:archaic_gold_ingot')
    }).id(`${met_infuser_prefix}archaic_gold`)
})