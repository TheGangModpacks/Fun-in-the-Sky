ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:scribes_table' })
    event.remove({ output: 'ars_nouveau:relay' })
    event.remove({ output: 'ars_nouveau:alteration_table' })
    event.remove({ output: 'ars_nouveau:ritual_brazier' })

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate',
            'ars_nouveau:archwood_slab',
            'ars_nouveau:archwood_slab',
            'ars_nouveau:archwood_slab',
            '#forge:logs/archwood',
            '#forge:logs/archwood'
        ], // input items
        'immersiveengineering:craftingtable', // reagent
        'ars_nouveau:scribes_table', // output
        0, // source cost
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate'
        ], // input items
        'ars_nouveau:source_gem_block', // reagent
        'ars_nouveau:relay', // output
        0, // source cost
    );
    
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom_fiber'
        ], // input items
        'ars_nouveau:scribes_table', // reagent
        'ars_nouveau:alteration_table', // output
        2500, // source cost
    );
    
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate',
            'ars_nouveau:source_gem_block'
        ], // input items
        'ars_nouveau:arcane_pedestal', // reagent
        'ars_nouveau:ritual_brazier', // output
        0, // source cost
    );
})