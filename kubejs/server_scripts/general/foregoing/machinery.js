ServerEvents.recipes(event =>{
    event.remove({output: "industrialforegoing:machine_frame_pity"})
    event.custom({
        type: miniturization,
        recipeSize: 5,
            layers:[
                {type: 'compactcrafting:mixed', pattern:[
                    ['B', 'B', 'B', 'B'],
                    ['B', 'G', 'G', 'B'],
                    ['B', 'G', 'G', 'B'],
                    ['B', 'B', 'B', 'B'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['D', 'F', 'F', 'D'],
                    ['F', 'z', 'z', 'F'],
                    ['F', 'z', 'z', 'F'],
                    ['D', 'F', 'F', 'D'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['E', 'F', 'F', 'E'],
                    ['F', 'z', 'z', 'F'],
                    ['F', 'z', 'z', 'F'],
                    ['E', 'F', 'F', 'E'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['A', 'F', 'F', 'C'],
                    ['F', 'z', 'z', 'F'],
                    ['F', 'z', 'z', 'F'],
                    ['C', 'F', 'F', 'A'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['B', 'B', 'B', 'B'],
                    ['B', 'G', 'G', 'B'],
                    ['B', 'G', 'G', 'B'],
                    ['B', 'B', 'B', 'B'],
                ]}
            ],
            catalyst: {id: 'mekanism:steel_casing', Count: 1},
            components:{
                A: {type: block, block: 'immersiveengineering:rs_engineering'},
                B: {type: block, block: 'ad_astra:desh_plating'},
                C: {type: block, block: 'immersiveengineering:heavy_engineering'},
                D: {type: block, block: 'immersiveengineering:light_engineering'},
                E: {type: block, block: 'powah:energized_steel_block'},
                F: {type: block, block: 'ad_astra:moon_stone'},
                G: {type: block, block: 'minecraft:quartz_bricks'},
                z: {type: block, block: 'minecraft:air'}
            },
            outputs: [{id: 'industrialforegoing:machine_frame_pity', Count: 1}]
         })
})