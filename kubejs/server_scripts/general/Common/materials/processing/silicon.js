ServerEvents.recipes(event =>{
    event.remove({output: 'emendatusenigmatica:silicon_gem'})
	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		exothermic: false,
		fluid_input: {
			type: 'pneumaticcraft:fluid',
			amount: 10,
			fluid: 'kubejs:witched_beeswax' },
		fluid_output: {
			amount: 1,
			fluid: 'mekanism:ethene' },
		item_input: { item: 'emendatusenigmatica:silica_cluster_shard' },
		item_output: { item: 'emendatusenigmatica:silicon_gem' },
		temperature: { min_temp: 643 }
	}).id(`${thermopneumatic_prefix}silicon`)
})