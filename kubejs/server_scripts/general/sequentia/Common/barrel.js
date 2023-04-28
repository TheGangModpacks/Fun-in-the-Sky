ServerEvents.recipes(event =>{
	event.custom({
		type: 'exnihilosequentia:fluid_item',
		fluid: {
			fluid: 'exnihilosequentia:sea_water'
		},
		input: {
			item: 'twilightforest:minoshroom_trophy'
		},
		result: {
			item: 'minecraft:heart_of_the_sea'
		}
	})
	event.custom({
	type: fluid_item,
	fluid: Fluid.of("minecraft:lava").toJson(),
	input: Item.of('blaze_powder').toJson(),
	result: Item.of("minecraft:magma_block").toJson()})
})