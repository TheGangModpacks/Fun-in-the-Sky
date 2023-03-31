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
		ingredient: Item.of(IE('component_electronic_adv')).toJson(),
		loops: 5,
		results: [
			Item.of('mekanism:electrolytic_core').withChance(120.0).toJson(),
			Item.of(IE('component_electronic_adv')).withChance(10.0).toJson()
		],
		sequence: [
			{type: 'create:deploying',
		ingredients: [
			Item.of(KJ('core')).toJson(),
			Item.of(EE('gold_dust')).toJson()
		],
	results: [ Item.of(KJ('core')).toJson()
	]},
	{type: 'create:deploying',
    ingredients: [
		Item.of(KJ('core')).toJson(),
		Item.of(EE('steel_plate'))
],
    results: [
		Item.of(KJ('core')).toJson()
]},
{type: 'create:deploying',
    ingredients: [
		Item.of(KJ('core')).toJson(),
		Item.of(IE('wire_lead'))
],
    results: [
		Item.of(KJ('core')).toJson()
]},
{type: 'create:filling',
ingredients: [
	Item.of(KJ('core')).toJson(),
	Fluid.of('pneumaticcraft:oil').withAmount(1000).toJson()
],
results: [
	Item.of(KJ('core')).toJson()
]},
{type: 'create:pressing',
ingredients: [
	Item.of(KJ('core')).toJson()
],
results: [
	Item.of(KJ('core')).toJson()
]}
		],
		transitionalItem: Item.of(KJ('core')).toJson()
	})
})