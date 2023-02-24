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
})