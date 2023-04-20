ServerEvents.recipes(event => {
    event.remove({ output: 'botania:mana_spreader' })

    event.shaped('botania:mana_spreader', [
        'LLL',
        'GP ',
        'LLL'
    ], {
        L: '#botania:livingwood_logs',
        G: '#forge:gears/gold',
        P: '#botania:petals'
    })
    event.replaceInput({id: 'botania:elven_spreader'}, 'botania:elementium_ingot', Ingredient.of('emendatusenigmatica:elementium_gear'))

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:dragonstone',
            'botanicadds:gaia_shard',
            'emendatusenigmatica:terrasteel_gear'
        ], // input items
        'botania:elven_spreader', // reagent
        'botania:gaia_spreader', // output
        5000, // source cost
    ).id('botanicadds:gaia_spreader')
})