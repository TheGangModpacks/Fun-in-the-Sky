ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:novice_spell_book' })
    event.remove({ output: 'ars_nouveau:apprentice_spell_book' })
    event.remove({ output: 'ars_nouveau:archmage_spell_book' })

    event.recipes.botania.runic_altar('ars_nouveau:novice_spell_book',
        [
            'minecraft:book',
            'emendatusenigmatica:steel_shovel',
            'emendatusenigmatica:steel_pickaxe',
            'emendatusenigmatica:steel_axe',
            'emendatusenigmatica:steel_sword',
        ],
        5000)

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:conjuration_catalyst',
            'emendatusenigmatica:manasteel_gear',
            'ars_nouveau:source_gem_block',
            'ars_nouveau:blaze_fiber',
            'ars_nouveau:abjuration_essence',
            'ars_nouveau:conjuration_essence',
            'ars_nouveau:whirlisprig_shards',
            'ars_nouveau:wixie_shards',
        ], // input items
        'ars_nouveau:novice_spell_book', // reagent
        'ars_nouveau:apprentice_spell_book', // output
        2000, // source cost
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:wilden_tribute',
            'minecraft:nether_star',
            'ars_nouveau:end_fiber',
            'ars_nouveau:end_fiber',
            'emendatusenigmatica:terrasteel_gear',
            'emendatusenigmatica:elementium_gear',
            'minecraft:totem_of_undying',
            'ars_nouveau:amethyst_golem_charm',
            'ars_nouveau:bookwyrm_charm',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:greater_experience_gem',
            'ars_nouveau:enchanters_sword',
        ], // input items
        'ars_nouveau:apprentice_spell_book', // reagent
        'ars_nouveau:archmage_spell_book', // output
        20000, // source cost
    );
    
})    