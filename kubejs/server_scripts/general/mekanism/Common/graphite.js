ServerEvents.recipes(event =>{
	event.custom({
		type: 'mekanism:reaction',
		duration: 60,
	energyRequired: 1000,
	fluidInput: {
		amount: 1000,
		fluid: 'minecraft:lava'
	},
	gasInput: {
		amount: 1000,
		gas: 'mekanism:sulfuric_acid'
	},
	fluidOutput: {
		amount: 322,
		fluid: 'kubejs:basalz_blood'
	},
	itemInput: {
		ingredient: {
			item: 'thermal:basalz_rod'
		}
	},
	itemOutput: {
		item: 'minecraft:quartz'
	}
 })
})