ServerEvents.recipes(event =>{
	event.remove({ output: 'refinedstorage:raw_improved_processor' })
	event.remove({ output: 'refinedstorage:raw_basic_processor' })
	event.remove({ output: 'refinedstorage:raw_advanced_processor' })
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: { item: 'minecraft:diamond' },
		loops: 5,
		results: [
		Item.of('refinedstorage:raw_advanced_processor')
		],
		sequence: [
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_advanced_processor').toJson(),
			Item.of('emendatusenigmatica:silicon_gem').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_advanced_processor').toJson()
		]
		},
		{
			type: 'create:filling',
			ingredients: [
			Item.of('kubejs:incomplete_advanced_processor').toJson(),
			{ amount: 500, fluid: 'thermal:redstone', nbt: {}}
			],
			results: [
		Item.of('kubejs:incomplete_advanced_processor').toJson()
		]
		},
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_advanced_processor').toJson(),
			Item.of('refinedstorage:processor_binding').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_advanced_processor').toJson()
		]
		},
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_advanced_processor').toJson(),
			Item.of('powah:crystal_niotic').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_advanced_processor').toJson()
		]
		},
		{
			type: 'create:pressing',
			ingredients: [
			Item.of('kubejs:incomplete_advanced_processor').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_advanced_processor').toJson()
		]
		}
		],
		transitionalItem: Item.of('kubejs:incomplete_advanced_processor').toJson()
	})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: { item: 'minecraft:gold_ingot' },
		loops: 5,
		results: [
		Item.of('refinedstorage:raw_improved_processor')
		],
		sequence: [
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_improved_processor').toJson(),
			Item.of('emendatusenigmatica:silicon_gem').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_improved_processor').toJson()
		]
		},
		{
			type: 'create:filling',
			ingredients: [
			Item.of('kubejs:incomplete_improved_processor').toJson(),
			{ amount: 500, fluid: 'thermal:redstone', nbt: {}}
			],
			results: [
		Item.of('kubejs:incomplete_improved_processor').toJson()
		]
		},
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_improved_processor').toJson(),
			Item.of('refinedstorage:processor_binding').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_improved_processor').toJson()
		]
		},
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_improved_processor').toJson(),
			Item.of('powah:crystal_blazing').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_improved_processor').toJson()
		]
		},
		{
			type: 'create:pressing',
			ingredients: [
			Item.of('kubejs:incomplete_improved_processor').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_improved_processor').toJson()
		]
		}
		],
		transitionalItem: Item.of('kubejs:incomplete_improved_processor').toJson()
	})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: { item: 'emendatusenigmatica:steel_ingot' },
		loops: 5,
		results: [
		Item.of('refinedstorage:raw_basic_processor')
		],
		sequence: [
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_basic_processor').toJson(),
			Item.of('emendatusenigmatica:silicon_gem').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_basic_processor').toJson()
		]
		},
		{
			type: 'create:filling',
			ingredients: [
			Item.of('kubejs:incomplete_basic_processor').toJson(),
			{ amount: 500, fluid: 'thermal:redstone', nbt: {}}
			],
			results: [
		Item.of('kubejs:incomplete_basic_processor').toJson()
		]
		},
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_basic_processor').toJson(),
			Item.of('refinedstorage:processor_binding').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_basic_processor').toJson()
		]
		},
		{
			type: 'create:deploying',
			ingredients: [
			Item.of('kubejs:incomplete_basic_processor').toJson(),
			Item.of('powah:steel_energized').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_basic_processor').toJson()
		]
		},
		{
			type: 'create:pressing',
			ingredients: [
			Item.of('kubejs:incomplete_basic_processor').toJson()
			],
			results: [
		Item.of('kubejs:incomplete_basic_processor').toJson()
		]
		}
		],
		transitionalItem: Item.of('kubejs:incomplete_basic_processor').toJson()
	})
})