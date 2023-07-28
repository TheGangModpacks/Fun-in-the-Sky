let IE = (id) => `immersiveengineering:${id}`
let KJ = (id) => `kubejs:incomplete_electrolytic_${id}`
let EE = (id) => `emendatusenigmatica:${id}`
let MK = (id) => `mekanism:${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (MK('infused_alloy'))})
	event.remove({ output: (MK('basic_control_circuit'))})
	event.remove({ output: (MK('alloy_reinforced'))})
	event.remove({ output: (MK('alloy_atomic'))})
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: { amount: 80, tag: 'mekanism:redstone' },
		itemInput: { ingredient: { item: 'pneumaticcraft:transistor',
		}
	},
	output: { item: 'mekanism:alloy_infused' }
	})
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: { amount: 80, tag: 'mekanism:tin' },
		itemInput: { ingredient: { item: 'pneumaticcraft:capacitor',
		}
	},
	output: { item: 'mekanism:basic_control_circuit' }
	})
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: { amount: 80, tag: 'mekanism:diamond' },
		itemInput: { ingredient: Item.of(MK('alloy_infused'))
		},
	output: Item.of(MK('alloy_reinforced'))
	})
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: { amount: 120, tag: 'mekanism:refined_obsidian' },
		itemInput: { ingredient: Item.of(MK('alloy_reinforced'))
		},
	output: Item.of(MK('alloy_atomic'))
	})
	event.remove({ output: (MK('electrolytic_core'))})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: Item.of(IE('component_electronic_adv')),
		loops: 5,
		results: [
			Item.of('mekanism:electrolytic_core').withChance(120.0),
			Item.of(IE('component_electronic_adv')).withChance(10.0)
		],
		sequence: [
			{type: 'create:deploying',
		ingredients: [
			Item.of(KJ('core')),
			Item.of(EE('gold_dust'))
		],
	results: [ Item.of(KJ('core'))
	]},
	{type: 'create:deploying',
    ingredients: [
		Item.of(KJ('core')),
		Item.of(EE('steel_plate'))
],
    results: [
		Item.of(KJ('core'))
]},
{type: 'create:deploying',
    ingredients: [
		Item.of(KJ('core')),
		Item.of(IE('wire_lead'))
],
    results: [
		Item.of(KJ('core'))
]},
{type: 'create:filling',
ingredients: [
	Item.of(KJ('core')),
	Fluid.of('pneumaticcraft:oil').withAmount(1000)
],
results: [
	Item.of(KJ('core'))
]},
{type: 'create:pressing',
ingredients: [
	Item.of(KJ('core'))
],
results: [
	Item.of(KJ('core'))
]}
		],
		transitionalItem: Item.of(KJ('core'))
	})
	event.custom({
		type: metallurgic_infuser,
		chemicalInput: {amount: 80, tag: 'mekanism:refined_obsidian'},
		itemInput: {ingredient: Item.of('emendatusenigmatica:fluorite_gem').toJson()},
		output: Item.of("kubejs:fluoridian_crystal")
	})
	event.replaceInput({id: (MK('processing/lategame/plutonium_pellet/from_reaction'))}, '#forge:dusts/fluorite', 'kubejs:fluoridian_crystal')
	event.replaceInput({id: (MK('processing/lategame/polonium_pellet/from_reaction'))}, '#forge:dusts/fluorite', 'kubejs:fluoridian_crystal')
	event.custom({
		type: prc,
		duration: 120,
		energyRequired: 3000,
		fluidInput: Fluid.of('mekanism:brine', 200).toJson(),
		gasInput: {amount: 20, gas: 'mekanism:ethene'},
		gasOutput: {amount: 20, gas: 'kubejs:fluoridelyne'},
		itemInput: {ingredient: Item.of('kubejs:fluoridian_crystal').toJson()}
	})
	event.custom({
		type: neutron_activator,
		input: {amount: 2, gas: "kubejs:monster_waste"},
		output: {amount: 5, gas: 'mekanism:polonium'}
	})
	event.custom({
		type: isotopic,
		input: {amount: 2, gas: "kubejs:monster_waste"},
		output: {amount: 5, gas: 'mekanism:plutonium'}
	})
})