ServerEvents.recipes(event =>{
	event.remove({ output: 'mekanism:alloy_infused' })
	event.remove({ output: 'mekanism:basic_control_circuit' })
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: { amount: 20, tag: 'mekanism:redstone' },
		itemInput: { ingredient: { item: 'pneumaticcraft:transistor',
		}
	},
	output: { item: 'mekanism:alloy_infused' }
	})
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: { amount: 40, tag: 'mekanism:tin' },
		itemInput: { ingredient: { item: 'pneumaticcraft:capacitor',
		}
	},
	output: { item: 'mekanism:basic_control_circuit' }
	})
})