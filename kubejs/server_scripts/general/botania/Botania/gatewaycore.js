ServerEvents.recipes(event => {
    event.remove({ output: 'botania:alfheim_portal' })
    
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
})