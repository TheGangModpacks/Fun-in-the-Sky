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
		item: 'mekanism:structural_glass'
	},
	block_in: 'thermal:machine_frame',
	post: {
		type: 'place',
		block: 'thermal:fluid_cell_frame'
	}
	})
    event.custom({
        type: miniturization,
        recipeSize: 5,
            layers:[
                {type: 'compactcrafting:mixed', pattern:[
                    ['z', 'z', 'A', 'z', 'z'],
                    ['z', 'A', 'A', 'A', 'z'],
                    ['A', 'A', 'C', 'A', 'A'],
                    ['z', 'A', 'A', 'A', 'z'],
                    ['z', 'z', 'A', 'z', 'z'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['z', 'A', 'C', 'A', 'z'],
                    ['A', 'I', 'I', 'I', 'A'],
                    ['C', 'A', 'D', 'A', 'C'],
                    ['A', 'I', 'I', 'I', 'A'],
                    ['z', 'A', 'C', 'A', 'z'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['G', 'A', 'C', 'A', 'G'],
                    ['A', 'I', 'B', 'I', 'A'],
                    ['C', 'I', 'H', 'I', 'C'],
                    ['A', 'I', 'B', 'I', 'A'],
                    ['G', 'A', 'C', 'A', 'G'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['E', 'E', 'C', 'F', 'F'],
                    ['E', 'E', 'C', 'F', 'F'],
                    ['C', 'A', 'A', 'A', 'C'],
                    ['A', 'A', 'C', 'A', 'A'],
                    ['G', 'A', 'C', 'A', 'G'],
                ]},
                {type: 'compactcrafting:mixed', pattern:[
                    ['G', 'G', 'G', 'G', 'G'],
                    ['G', 'A', 'A', 'A', 'G'],
                    ['G', 'A', 'A', 'A', 'G'],
                    ['G', 'A', 'A', 'A', 'G'],
                    ['G', 'G', 'G', 'G', 'G'],
                ]}
            ],
            catalyst: {id: 'emendatusenigmatica:nickel_gear', Count: 1},
            components:{
                A: {type: block, block: 'immersiveengineering:cokebrick'},
                B: {type: block, block: 'emendatusenigmatica:constantan_block'},
                C: {type: block, block: 'ad_astra:vent'},
                D: {type: block, block: 'minecraft:lightning_rod'},
                E: {type: block, block: 'thermal:energy_cell_frame'},
                F: {type: block, block: 'thermal:fluid_cell_frame'},
                G: {type: block, block: 'pneumaticcraft:compressed_bricks'},
                H: {type: block, block: 'thermal:machine_frame'},
                I: {type: block, block: 'thermal:cured_rubber_block'},
                z: {type: block, block: 'minecraft:air'}
            },
            outputs: [{id: 'thermal:machine_pyrolyzer', Count: 1}]
         }).id('thermal:machine_pyrolyzer')
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDE",
          "CCC"
        ],
        "tier": 1,
        "key": {
          "A": {
            "item": "dustrial_decor:cast_iron_billet"
          },
          "B": {
            "item": "create:chute"
          },
          "C": {
            "item": "botania:livingwood_planks"
          },
          "D": {
            "item": "extendedcrafting:frame"
          },
          "E": {
            "item": "pneumaticcraft:logistics_core"
          }
        },
        "result": {
          "item": "thermal:device_tree_extractor"
        }
      }).id('fits:basic_table/thermal/arboreal_extractor')
})