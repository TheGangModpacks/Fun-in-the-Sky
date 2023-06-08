ServerEvents.recipes(event =>{
    event.custom({
        type: inside,
        item_in: [{item: 'kubejs:porcelain_brick'}, {item: 'kubejs:porcelain_brick'}, {item: 'minecraft:nether_brick'}, {item: 'minecraft:nether_brick'}, {item: 'minecraft:nether_brick'},],
        block_in: {blocks: ['exnihilosequentia:witch_water']},
        post: [{type: "drop_item", item: 'kubejs:porcelain_nether_brick'}, {type: "place", block: '*', contextual: { type: 'chance', chance: 0.03 }}]
    }).id('fits:lychee/item_inside/porcelain_nether_brick')

    event.custom({
        type: inside,
        item_in: [{item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}, {item: 'thermal:bitumen'}],
        block_in: {blocks: ['lava']},
        post: [{type: "place", block: 'kubejs:melted_bitumen'}, {type: 'execute', command: 'playsound minecraft:entity.generic.extinguish_fire block @p', hide: true}],
        comment: "Recipe for Machines soon..."
    }).id('fits:/lychee/item_inside/melted_bitumen_item')
    event.custom({
        type: inside,
        item_in: {item: 'thermal:bitumen_block'},
        block_in: {blocks: ['lava']},
        post: [{type: "place", block: 'kubejs:melted_bitumen'}, {type: 'execute', command: 'playsound minecraft:entity.generic.extinguish_fire block @p', hide: true}]
    }).id('fits:/lychee/item_inside/melted_bitumen_block')
})