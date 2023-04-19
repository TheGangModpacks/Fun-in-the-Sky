ServerEvents.recipes(event =>{
	event.remove({output: 'emendatusenigmatica:silicon_gem'})
	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		exothermic: false,
		fluid_input: {
			type: 'pneumaticcraft:fluid',
			amount: 3,
		fluid: 'pneumaticcraft:lubricant' },
		fluid_output: {
			amount: 10,
		fluid: 'mekanism:ethene' },
		item_input: { item: 'emendatusenigmatica:salt_gem' },
		item_output: { item: 'emendatusenigmatica:silicon_gem' },
		temperature: { min_temp: 643 }
	})
})