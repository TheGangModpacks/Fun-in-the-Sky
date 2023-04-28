ServerEvents.recipes(event => {

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
})