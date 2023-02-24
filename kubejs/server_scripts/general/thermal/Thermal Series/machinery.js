ServerEvents.recipes(event =>{
event.remove({ output: 'thermal:machine_frame' })
event.remove({ output: 'thermal:fluid_cell_frame' })
event.remove({ output: 'thermal:energy_cell_frame' })
event.custom({
	type: 'lychee:block_interacting',
	item_in: {
		item: 'kubejs:mk4circuit'
	},
	block_in: 'extendedcrafting:frame',
	post: {
		type: 'place',
		block: 'thermal:machine_frame'
	}
  })
  event.custom({
	type: 'lychee:block_interacting',
	item_in: {
		item: 'extendedcrafting:redstone_ingot_block'
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