ServerEvents.recipes(event =>{
	event.remove({ output: 'rftoolsbase:smartwrench' })
	event.custom({
		type: 'lychee:item_burning',
		item_in: {
			item: 'thermal:wrench'
		},
		post: {
			type: 'drop_item',
			item: 'rftoolsbase:smartwrench'
		}
	})
  event.remove({output: "rftoolsbase:machine_frame"})
  event.custom({
  type: 'compactcrafting:miniaturization',
  recipeSize: 5,
  layers:[
      {type: 'compactcrafting:mixed', pattern:[
          ['A', 'A', 'A', 'A', 'A'],
          ['A', 'B', 'B', 'B', 'A'],
          ['A', 'B', 'B', 'B', 'A'],
          ['A', 'B', 'B', 'B', 'A'],
          ['A', 'A', 'A', 'A', 'A'],
      ]},
      {type: 'compactcrafting:mixed', pattern:[
        ['A', 'B', 'B', 'B', 'A'],
        ['B', 'C', 'C', 'C', 'B'],
        ['B', 'C', 'E', 'C', 'B'],
        ['B', 'C', 'C', 'C', 'B'],
        ['A', 'B', 'B', 'B', 'A'],
      ]},
      {type: 'compactcrafting:mixed', pattern:[
        ['A', 'A', 'A', 'A', 'A'],
        ['A', 'D', 'D', 'D', 'A'],
        ['A', 'D', 'E', 'D', 'A'],
        ['A', 'D', 'D', 'D', 'A'],
        ['A', 'A', 'A', 'A', 'A'],
      ]},
      {type: 'compactcrafting:mixed', pattern:[
        ['A', 'B', 'B', 'B', 'A'],
        ['B', 'C', 'C', 'C', 'B'],
        ['B', 'C', 'E', 'C', 'B'],
        ['B', 'C', 'C', 'C', 'B'],
        ['A', 'B', 'B', 'B', 'A'],
      ]},
      {type: 'compactcrafting:mixed', pattern:[
        ['A', 'A', 'A', 'A', 'A'],
        ['A', 'B', 'B', 'B', 'A'],
        ['A', 'B', 'B', 'B', 'A'],
        ['A', 'B', 'B', 'B', 'A'],
        ['A', 'A', 'A', 'A', 'A'],
      ]},
  ],
  catalyst: {id: 'emendatusenigmatica:invar_gear', Count: 1},
  components:{
      A: {type: 'compactcrafting:block', block: 'create:brass_casing'},
      B: {type: 'compactcrafting:block', block: 'create:polished_cut_andesite'},
      C: {type: 'compactcrafting:block', block: 'create:gearbox'},
      E: {type: 'compactcrafting:block', block: 'immersiveengineering:coil_mv'},
      D: {type: 'compactcrafting:block', block: 'emendatusenigmatica:bronze_block'}
  },
  outputs: [{id: 'rftoolsbase:machine_frame', Count: 1}]
  })
})
