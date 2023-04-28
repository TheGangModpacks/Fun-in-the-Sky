LootJS.modifiers((event) =>{
    event.addLootTableModifier([
        'minecraft:chests/village/village_tannery',
        'minecraft:chests/shipwreack_supply',
        'minecraft:chests/undrwater_ruin_small',
        'minecraft:chests/undrwater_ruin_big',
        'minecraft:chests/buried_treasure',
        'minecraft:chests/village/village_tannery'
    ]).removeLoot([
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots'])
})