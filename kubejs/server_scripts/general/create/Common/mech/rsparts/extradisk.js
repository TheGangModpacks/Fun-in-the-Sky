ServerEvents.recipes(event =>{
	event.remove({ output: 'extradisks:256k_storage_part' })
	event.remove({ output: 'extradisks:1024k_storage_part' })
	event.remove({ output: 'extradisks:4096k_storage_part' })
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('ad_astra:desh_plate').toJson(),
			B: Item.of('refinedstorage:advanced_processor').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron_block').toJson(),
			D: Item.of('refinedstorage:64k_storage_part').toJson(),
			E: Item.of('emendatusenigmatica:bronze_block').toJson(),
			F: Item.of('immersiveengineering:plate_duroplast').toJson(),
			G: Item.of('pneumaticcraft:plastic').toJson()
		},
		pattern: [
		'  GAG  ',
		'  GAG  ',
		' BFCFB ',
		'AADEDAA',
		' BFDFB ',
		'  GAG  ',
		'  GAG  ' ], result: Item.of('extradisks:256k_storage_part').toJson()
	})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('ad_astra:desh_plate').toJson(),
			B: Item.of('refinedstorage:advanced_processor').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron_block').toJson(),
			D: Item.of('extradisks:256k_storage_part').toJson(),
			E: Item.of('emendatusenigmatica:electrum_block').toJson()
		},
		pattern: [
		'ABA ABA',
		'AABCBAA',
		'  DED  ',
		'AABDBAA',
		'ABA ABA' ], result: Item.of('extradisks:1024k_storage_part').toJson()
	})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('ad_astra:desh_plate').toJson(),
			B: Item.of('refinedstorage:advanced_processor').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron_block').toJson(),
			D: Item.of('extradisks:1024k_storage_part').toJson(),
			E: Item.of('emendatusenigmatica:uranium_block').toJson()
		},
		pattern: [
		'  AA  ',
		' ABBA ',
		'ABCCBA',
		'ADEEDA',
		'ABDDBA',
		' ABBA ',
		'  AA  ' ], result: Item.of('extradisks:4096k_storage_part').toJson()
	})
		event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:bronze_plate').toJson(),
			B: Item.of('refinedstorage:advanced_processor').toJson(),
			C: Item.of('refinedstorage:quartz_enriched_iron_block').toJson(),
			D: Item.of('extradisks:4096k_storage_part').toJson(),
			E: Item.of('powah:niotic_crystal_block').toJson(),
			F: Item.of('immersiveengineering:steel_scaffolding_standard').toJson()
		},
		pattern: [
		' AAAAA ',
		'ABCCCBA',
		'ADEEEDA',
		'ABDBDBA',
		'AFFFFFA',
		' AAAAA ' ], result: Item.of('extradisks:16384k_storage_part').toJson()
	})
})	