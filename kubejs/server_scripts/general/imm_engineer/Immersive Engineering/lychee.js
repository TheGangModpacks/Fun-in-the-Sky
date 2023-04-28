ServerEvents.recipes(event =>{
    event.custom({
        type: inside,
        item_in: Ingredient.of('#minecraft:planks'),
        block_in:{ blocks: ["immersiveengineering:creosote_fluid_block"]},
        post:[
            {type: "drop_item", item: 'immersiveengineering:treated_wood_horizontal',
             contextual: [{type: 'difficulty', difficulty: [0, 1, 2, 3], description: "Chance to consume Fluid: 16%"}]},
            {type: "place", block: 'minecraft:air',
             contextual: [{type: 'chance', chance: 0.16}], hide_in_viewer: true}
        ]
    }).id('immersiveengineering:treated_wood_horizontal')
    event.custom({
        type: inside,
        item_in:[Item.of('emendatusenigmatica:steel_plate'), Item.of('emendatusenigmatica:aluminum_plate'), Item.of('immersiveengineering:blastbrick')],
        block_in:{blocks: ["exnihilosequentia:witch_water"]},
        post:[{type: "place", block: "*", contextual:{type: "chance", chance: 0.33}},
            {type: "delay", s: 3},
            {type: "drop_item", item: 'immersiveengineering:blastbrick_reinforced', comment: "Drench items in Witchwater for 5 seconds."}]
    }).id('immersiveengineering:crafting/blastbrick_reinforced')
})