ServerEvents.recipes(event =>{
	event.remove({ output: 'refinedstorage:1k_storage_part' })
	event.remove({ output: 'refinedstorage:4k_storage_part' })
	event.remove({ output: 'refinedstorage:16k_storage_part' })
	event.remove({ output: 'refinedstorage:64k_storage_part' })
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:bronze_plate').toJson(),
			B: Item.of('emendatusenigmatica:silicon_gem').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron').toJson(),
			D: Item.of('botania:mana_glass').toJson(),
			E: Item.of('emendatusenigmatica:signalum_dust').toJson()
		},
		pattern: [
		'   A   ',
		'   A   ',
		'  BCB  ',
		'AADEDAA',
		'  BDB  ',
		'   A   ',
		'   A   ' ], result: Item.of('refinedstorage:1k_storage_part').toJson()
	})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:bronze_plate').toJson(),
			B: Item.of('refinedstorage:basic_processor').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron').toJson(),
			D: Item.of('refinedstorage:1k_storage_part').toJson(),
			E: Item.of('emendatusenigmatica:signalum_dust').toJson()
		},
		pattern: [
		'AA AA',
		'ABCBA',
		' DED ',
		'ABDBA',
		'AA AA' ], result: Item.of('refinedstorage:4k_storage_part').toJson()
	})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:bronze_plate').toJson(),
			B: Item.of('refinedstorage:improved_processor').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron').toJson(),
			D: Item.of('refinedstorage:4k_storage_part').toJson(),
			E: Item.of('emendatusenigmatica:signalum_dust').toJson()
		},
		pattern: [
		' AAA ',
		'ABCBA',
		'ADEDA',
		'ABDBA',
		' AAA ' ], result: Item.of('refinedstorage:16k_storage_part').toJson()
	})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:bronze_plate').toJson(),
			B: Item.of('refinedstorage:advanced_processor').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron').toJson(),
			D: Item.of('refinedstorage:16k_storage_part').toJson(),
			E: Item.of('emendatusenigmatica:signalum_dust').toJson(),
			F: Item.of('immersiveengineering:steel_scaffolding_standard').toJson()
		},
		pattern: [
		' AAAA ',
		'ABCCBA',
		'ADEEDA',
		'ABDDBA',
		'AFFFFA',
		' AAAA ' ], result: Item.of('refinedstorage:64k_storage_part').toJson()
	})
})