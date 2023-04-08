ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.remove({ output: 'ars_nouveau:sourcestone' })
    event.remove({ output: 'ars_nouveau:enchanting_apparatus' })
    event.remove({ output: 'ars_nouveau:arcane_core' })

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
        A: 'create:asurine',
        S: 'ars_nouveau:source_gem'
    })

    event.replaceInput({mod: 'ars_nouveau'}, 'minecraft:gold_ingot', Ingredient.of('emendatusenigmatica:gold_plate'))

})
