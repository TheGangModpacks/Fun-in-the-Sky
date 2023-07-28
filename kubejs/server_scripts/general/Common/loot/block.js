LootJS.modifiers(event =>{
    event.addBlockLootModifier("kubejs:meteorite")
    .randomChance(0.7)
    .addLoot('kubejs:meteorite_sample')
    event.addBlockLootModifier("ae2:mysterious_cube")
    .addLoot('ae2:fusion_processor_press')
})