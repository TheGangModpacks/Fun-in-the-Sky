ServerEvents.recipes(event => {
    event.remove({ output: 'botania:alfheim_portal' })

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botanicadds:elven_lapis_block',
            'botanicadds:elven_lapis_block',
            'botanicadds:elven_lapis_block',
            'botanicadds:rune_tp',
            'botanicadds:rune_energy',
            'botanicadds:gaia_shard',
            'botanicadds:gaia_shard',
            'botanicadds:gaia_shard'
        ], // input items
        'botania:terra_plate', // reagent
        'botanicadds:gaia_plate', // output
        40000 // source cost
    ).id('botanicadds:gaia_plate')

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:terrasteel_nugget',
            'botania:terrasteel_nugget',
            'botania:terrasteel_nugget'
        ], // input items
        'botania:glimmering_livingwood', // reagent
        'botania:alfheim_portal', // output
        10000, // source cost
    );

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