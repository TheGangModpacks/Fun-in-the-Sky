ServerEvents.recipes(event =>{
    event.custom({type: blast_furnace,
        input: Item.of('minecraft:iron_ingot'),
        result: Item.of('emendatusenigmatica:steel_ingot'),
        slag: "thermal:slag",
        time: 500}).id('immersiveengineering:blastfurnace/steel')
        event.custom({type: blast_furnace,
        input: Item.of('minecraft:iron_block'),
        result: Item.of('emendatusenigmatica:steel_block'),
        slag: {base_ingredient: {item: "thermal:slag"}, count: 9},
        time: 4500}).id('immersiveengineering:blastfurnace/steel_block')
})