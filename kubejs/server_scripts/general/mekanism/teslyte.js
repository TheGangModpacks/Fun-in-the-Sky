ServerEvents.recipes(event =>{
	event.custom({
		  type: 'mekanism:purifying',
    chemicalInput: {
        amount: 5,
        gas: 'emendatusenigmatica:gaseous_teslyte',
    },
    itemInput: {
        ingredient: {
            item: 'botania:manasteel_ingot',
        },
    },
    output: {
        count: 1,
        item: 'emendatusenigmatica:teslyte_ingot',
    }
	})
	event.custom({
	type: 'mekanism:chemical_infusing',
	leftInput: {
		amount: 2,
		gas: 'mekanism:spent_nuclear_waste'
	},
	output: {
		amount: 1,
		gas: 'emendatusenigmatica:gaseous_raw_teslyte'
	},
	rightInput: {
		amount: 2,
		gas: 'mekanism:superheated_sodium'
	}
 })
     event.custom({
	type: 'mekanism:reaction',
	duration: 60,
	energyRequired: 1000,
	fluidInput: {
		amount: 2,
		fluid: 'immersiveengineering:acetaldehyde'
	},
	gasInput: {
		amount: 2,
		gas: 'emendatusenigmatica:gaseous_raw_teslyte'
	},
	gasOutput: {
		amount: 10,
		gas: 'emendatusenigmatica:gaseous_partial_teslyte'
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
    event.custom({
	type: 'mekanism:centrifuging',
	input: {
		amount: 15,
		gas: 'emendatusenigmatica:gaseous_partial_teslyte'
	},
	output: {
		amount: 20,
		gas: 'emendatusenigmatica:gaseous_teslyte'
	}
 })
})