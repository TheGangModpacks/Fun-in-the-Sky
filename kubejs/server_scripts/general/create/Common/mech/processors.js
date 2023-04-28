const pnu = 'pneumaticcraft:pressure_chamber';



ServerEvents.recipes(event =>{
	event.remove({ output: 'refinedstorage:basic_processor' })
	event.remove({ output: 'refinedstorage:improved_processor' })
	event.remove({ output: 'refinedstorage:advanced_processor' })
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:invar_plate').toJson(),
			B: Item.of('emendatusenigmatica:steel_plate').toJson(),
			C: Item.of('refinedstorage:raw_basic_processor').toJson(),
			D: Item.of('kubejs:mk1circuit').toJson()
		},
		pattern: [
		'  A  ',
		' AAA ',
		'ABDBA',
		'ABCBA',
		'ABDBA',
		' AAA ',
		'  A  '
		],
		result: Item.of('refinedstorage:basic_processor').toJson()
	})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:invar_plate').toJson(),
			B: Item.of('emendatusenigmatica:steel_plate').toJson(),
			C: Item.of('refinedstorage:raw_improved_processor').toJson(),
			D: Item.of('kubejs:mk1circuit').toJson()
		},
		pattern: [
		'  A  ',
		' AAA ',
		'ABDBA',
		'ABCBA',
		'ABDBA',
		' AAA ',
		'  A  '
		],
		result: Item.of('refinedstorage:improved_processor').toJson()
	})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:invar_plate').toJson(),
			B: Item.of('emendatusenigmatica:steel_plate').toJson(),
			C: Item.of('refinedstorage:raw_advanced_processor').toJson(),
			D: Item.of('kubejs:mk1circuit').toJson()
		},
		pattern: [
		'  A  ',
		' AAA ',
		'ABDBA',
		'ABCBA',
		'ABDBA',
		' AAA ',
		'  A  '
		],
		result: Item.of('refinedstorage:advanced_processor').toJson()
	})
	event.remove({ output: 'ae2:printed_logic_processor' })
	event.remove({ output: 'ae2:printed_engineering_processor' })
	event.remove({ output: 'ae2:printed_calculation_processor' })
	event.remove({ output: 'ae2:printed_silicon' })
	event.custom({
		type: pnu,
		inputs: [
		Item.of('minecraft:diamond').toJson(),
		Item.of('botania:mana_diamond').toJson(),
		Item.of('pneumaticcraft:transistor').toJson(),
		Item.of('kubejs:mk1circuit').toJson(),
		Item.of('kubejs:mk1circuit').toJson()
			],
			pressure: 5.0,
			results: [
			Item.of('ae2:printed_engineering_processor').toJson()
			]
	})
	event.custom({
		type: pnu,
		inputs: [
		Item.of('minecraft:gold_ingot').toJson(),
		Item.of('emendatusenigmatica:steel_ingot').toJson(),
		Item.of('pneumaticcraft:transistor').toJson(),
		Item.of('kubejs:mk1circuit').toJson(),
		Item.of('kubejs:mk1circuit').toJson()
			],
			pressure: 5.0,
			results: [
			Item.of('ae2:printed_logic_processor').toJson()
			]
	})
	event.custom({
		type: pnu,
		inputs: [
		Item.of('ae2:charged_certus_quartz_crystal').toJson(),
		Item.of('ae2:charged_certus_quartz_crystal').toJson(),
		Item.of('pneumaticcraft:transistor').toJson(),
		Item.of('kubejs:mk1circuit').toJson(),
		Item.of('kubejs:mk1circuit').toJson()
			],
			pressure: 5.0,
			results: [
			Item.of('ae2:printed_calculation_processor').toJson()
			]
	})
		event.custom({
		type: pnu,
		inputs: [
		Item.of('emendatusenigmatica:silicon_gem').toJson(),
		Item.of('emendatusenigmatica:silicon_gem').toJson(),
		Item.of('emendatusenigmatica:silicon_gem').toJson(),
		Item.of('pneumaticcraft:transistor').toJson(),
		Item.of('pneumaticcraft:capacitor').toJson(),
			],
			pressure: 5.0,
			results: [
			Item.of('ae2:printed_silicon').toJson()
			]
	})
})