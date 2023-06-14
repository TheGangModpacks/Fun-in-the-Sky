ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:source_gem' })
    event.remove({ output: 'ars_nouveau:source_gem_block' })
    event.remove({ output: 'ars_nouveau:abjuration_essence' })
    event.remove({ output: 'ars_nouveau:conjuration_essence' })
    event.remove({ output: 'ars_nouveau:air_essence' })
    event.remove({ output: 'ars_nouveau:earth_essence' })
    event.remove({ output: 'ars_nouveau:fire_essence' })
    event.remove({ output: 'ars_nouveau:manipulation_essence' })
    event.remove({ output: 'ars_nouveau:water_essence' })
    
    event.recipes.ars_nouveau.imbuement(
        "mekanism:enriched_iron", // input item
        'ars_nouveau:source_gem', // output
        500 // source cost
    )

    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:abjuration_essence', // output
        2000, // source cost
        [
            'botania:rune_mana',
            'minecraft:fermented_spider_eye',
            'minecraft:sugar',
            'minecraft:milk_bucket' 
        ] // pedestal items 
    )

    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:conjuration_essence', // output
        2000, // source cost
        [
            'botania:rune_pride',
            'ars_nouveau:wilden_horn',
            'ars_nouveau:starbuncle_shards',
            'minecraft:book'
        ] // pedestal items 
    )

    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:air_essence', // output
        2000, // source cost
        [
            'botania:rune_air',
            'minecraft:feather',
            'ars_nouveau:wilden_wing',
            '#minecraft:arrows' 
        ] // pedestal items 
    )

    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:earth_essence', // output
        2000, // source cost
        [
            'botania:rune_earth',
            'minecraft:iron_ingot',
            '#forge:seeds',
            '#minecraft:dirt' 
        ] // pedestal items 
    )
    
    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:fire_essence', // output
        2000, // source cost
        [
            'botania:rune_fire',
            'minecraft:flint_and_steel',
            'minecraft:torch',
            'minecraft:gunpowder' 
        ] // pedestal items 
    )

    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:manipulation_essence', // output
        2000, // source cost
        [
            'botania:rune_autumn',
            'minecraft:stone_button',
            'minecraft:redstone',
            'minecraft:clock' 
        ] // pedestal items 
    )

    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:water_essence', // output
        2000, // source cost
        [
            'botania:rune_water',
            'minecraft:water_bucket',
            'minecraft:snow_block',
            'minecraft:kelp' 
        ] // pedestal items 
    )

})