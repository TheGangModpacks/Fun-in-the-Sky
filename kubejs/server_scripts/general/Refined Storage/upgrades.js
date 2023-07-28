//priority: 1
ServerEvents.recipes(event =>{
	event.remove({ id: 'rsinfinitybooster:dimension_card' })
	event.remove({ id: 'rsinfinitybooster:infinity_card' })
	event.shaped( Item.of('rsinfinitybooster:infinity_card'), [
	'BBB',
	'CDC',
	'CAC'
	],
	{
		A: 'twilightforest:steeleaf_block',
		B: 'refinedstorage:range_upgrade',
		C: 'ad_astra:ostrum_plate',
		D: 'extradisks:withering_processor'
	}
	)
	event.shaped( Item.of('rsinfinitybooster:dimension_card'), [
	'BCB',
	'CDC',
	'ADA'
	],
	{
		A: 'twilightforest:knightmetal_block',
		B: 'rsinfinitybooster:infinity_card',
		C: 'botania:elf_glass',
		D: 'minecraft:netherite_ingot'
	}
	)
})