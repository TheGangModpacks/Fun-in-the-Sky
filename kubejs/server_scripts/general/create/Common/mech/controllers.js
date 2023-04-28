ServerEvents.recipes(event =>{
	event.remove({ output: 'ae2:controller' })
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('ae2:engineering_processor').toJson(),
			B: Item.of('pneumaticcraft:refinery').toJson(),
			C: Item.of('create:rotation_speed_controller').toJson(),
			D: Item.of('immersiveengineering:heavy_engineering').toJson(),
			E: Item.of('ae2:energy_acceptor').toJson(),
			F: Item.of('powah:spirited_crystal_block').toJson(),
			G: Item.of('immersiveengineering:radiator').toJson(),
			H: Item.of('extendedcrafting:frame').toJson(),
			I: Item.of('immersiveengineering:rs_engineering').toJson()
		},
		pattern: [
		'DGEGD',
		'FACAF',
		'DIHID',
		'FABAF',
		'DGEGD'
		],
		result: Item.of('ae2:controller').toJson()
	})
	event.remove({ output: 'refinedstorage:controller' })
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('refinedstorage:advanced_processor').toJson(),
			B: Item.of('pneumaticcraft:refinery').toJson(),
			C: Item.of('create:rotation_speed_controller').toJson(),
			D: Item.of('immersiveengineering:heavy_engineering').toJson(),
			E: Item.of('immersiveengineering:furnace_heater').toJson(),
			F: Item.of('powah:spirited_crystal_block').toJson(),
			G: Item.of('immersiveengineering:radiator').toJson(),
			H: Item.of('refinedstorage:machine_casing').toJson(),
			I: Item.of('immersiveengineering:rs_engineering').toJson()
		},
		pattern: [
		'DGEGD',
		'FACAF',
		'DIHID',
		'FABAF',
		'DGEGD'
		],
		result: Item.of('refinedstorage:controller').toJson()
	})
})