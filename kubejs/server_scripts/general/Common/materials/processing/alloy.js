ServerEvents.recipes(Event =>{
    Event.custom({
        type: arc_furnace,
        additives: [
        {tag: "forge:ingots/silver"},
        {tag: "forge:ingots/silver"},
        {tag: "forge:ingots/tin"},
        {tag: "forge:ingots/tin"}
    ],
        conditions: [{type: 'forge:not', value:{type: "forge:tag_empty", tag: 'forge:ingots/bismuth'}}],
        energy: 78600,
        input: {base_ingredient:{tag: "forge:ingots/lead"}, count: 3},
        results: [{base_ingredient:{tag: "forge:ingots/bismuth"}, count: 4},],
        time: 100
    })
})