ServerEvents.recipes(event =>{
event.remove({ output: 'thermal:machine_frame' })
event.remove({ output: 'thermal:fluid_cell_frame' })
event.remove({ output: 'thermal:energy_cell_frame' })
event.custom({
	type: miniturization,
	recipeSize: 5,
        layers:[
            {type: 'compactcrafting:mixed', pattern:[
                ['C', 'C', 'C', 'C'],
                ['C', 'z', 'z', 'C'],
                ['C', 'z', 'z', 'C'],
				['C', 'C', 'C', 'C'],
            ]},
            {type: 'compactcrafting:mixed', pattern:[
                ['C', 'z', 'z', 'C'],
                ['z', 'z', 'z', 'z'],
                ['z', 'z', 'z', 'z'],
				['C', 'z', 'z', 'C'],
            ]},
            {type: 'compactcrafting:mixed', pattern:[
                ['E', 'z', 'z', 'E'],
                ['z', 'z', 'z', 'z'],
                ['z', 'z', 'z', 'z'],
				['E', 'z', 'z', 'E'],
            ]},
			{type: 'compactcrafting:mixed', pattern:[
                ['B', 'z', 'z', 'B'],
                ['z', 'z', 'z', 'z'],
                ['z', 'z', 'z', 'z'],
				['B', 'z', 'z', 'B'],
            ]},
			{type: 'compactcrafting:mixed', pattern:[
                ['B', 'B', 'B', 'B'],
                ['B', 'A', 'A', 'B'],
                ['B', 'A', 'A', 'B'],
				['B', 'B', 'B', 'B'],
            ]}
        ],
        catalyst: {id: 'industrialforegoing:machine_frame_simple', Count: 1},
        components:{
            A: {type: block, block: 'immersiveengineering:rs_engineering'},
            B: {type: block, block: 'emendatusenigmatica:bismuth_block'},
            C: {type: block, block: 'emendatusenigmatica:invar_block'},
            E: {type: block, block: 'powah:niotic_crystal_block'},
            z: {type: block, block: 'minecraft:air'}
        },
        outputs: [{id: 'thermal:machine_frame', Count: 1}]
     })
  event.custom({
	type: 'lychee:block_interacting',
	item_in: {
		item: 'kubejs:dielectric_block'
	},
	block_in: 'thermal:machine_frame',
	post: {
		type: 'place',
		block: 'thermal:energy_cell_frame'
	}
  })
    event.custom({
	type: 'lychee:block_interacting',
	item_in: {
		item: 'extendedcrafting:ender_ingot_block'
	},
	block_in: 'thermal:machine_frame',
	post: {
		type: 'place',
		block: 'thermal:fluid_cell_frame'
	}
	})
})