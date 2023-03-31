ServerEvents.recipes(event =>{
	event.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 3,
        layers:[
            {type: 'compactcrafting:mixed', pattern:[
                ['C', 'A', 'C'],
                ['A', 'E', 'A'],
                ['C', 'A', 'C'],
            ]},
            {type: 'compactcrafting:mixed', pattern:[
                ['B', 'z', 'B'],
                ['z', 'z', 'z'],
                ['B', 'z', 'B'],
            ]},
            {type: 'compactcrafting:mixed', pattern:[
                ['C', 'A', 'C'],
                ['A', 'D', 'A'],
                ['C', 'A', 'C'],
            ]},
        ],
        catalyst: {id: 'powah:capacitor_basic_large', Count: 1},
        components:{
            A: {type: 'compactcrafting:block', block: 'kubejs:dielectric_block'},
            B: {type: 'compactcrafting:block', block: 'immersiveengineering:sheetmetal_steel'},
            C: {type: 'compactcrafting:block', block: 'immersiveengineering:duroplast'},
            E: {type: 'compactcrafting:block', block: 'botania:gray_petal_block'},
            D: {type: 'compactcrafting:block', block: 'immersiveengineering:heavy_engineering'},
            z: {type: 'compactcrafting:block', block: 'minecraft:air'}
        },
        outputs: [{id: 'powah:dielectric_casing', Count: 1}]
     })
})