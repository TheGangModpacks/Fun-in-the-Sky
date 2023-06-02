LootJS.modifiers(event =>{
    event.addBlockLootModifier("kubejs:meteorite")
    .randomChance(0.7)
    .addLoot('kubejs:meteorite_sample')
})