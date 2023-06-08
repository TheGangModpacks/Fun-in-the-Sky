ServerEvents.recipes(event =>{
    event.custom({
        type: dripstone,
        source_block: 'lava',
        target_block: 'mossy_cobblestone',
        post: [
            { type: 'place', block: 'magma_block'},
            { type: 'execute', command: 'playsound minecraft:entity.generic.extinguish_fire ambient @p ~ ~ ~', hide: true}
        ]
    }).id('fits:lychee/dripping/magma_block')
})