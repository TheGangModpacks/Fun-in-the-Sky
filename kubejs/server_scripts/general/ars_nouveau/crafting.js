ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.remove({ output: 'ars_nouveau:sourcestone' })

    event.shaped('ars_nouveau:imbuement_chamber', [
        'AGA',
        'ASA',
        'AGA'
    ], {
        A: 'ars_nouveau:archwood_planks',
        G: '#forge:plates/gold',
        S: 'mekanism:steel_casing'
    })

    event.shaped('ars_nouveau:sourcestone', [
        'AAA',
        'ASA',
        'AAA'
    ], {
        A: 'botania:livingrock',
        S: 'ars_nouveau:source_gem'
    })

    event.replaceInput({mod: 'ars_nouveau'}, 'minecraft:gold_ingot', Ingredient.of('emendatusenigmatica:gold_plate'))
    event.replaceInput({id: 'ars_nouveau:source_jar'}, 'minecraft:glass', Ingredient.of('glassential:glass_light') )

})