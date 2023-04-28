ServerEvents.recipes(event =>{
	event.custom({
		type: 'lychee:item_inside',
		item_in: [ { item: 'kubejs:leaded_iron_compound' }, { item: 'minecraft:coal' }],
		block_in: { blocks: ['exnihilosequentia:sea_water']},
		post: [
				{ type: 'drop_item', item: 'kubejs:leaded_iron', nbt: {}},
				{ type: 'execute', command: 'particle mekanism:jetpack_flame ~ ~1 ~ 1 1 1 0 20', hide: true}
				]
	})
	event.custom({
		type: 'lychee:item_inside',
		item_in: [ { item: 'emendatusenigmatica:raw_lead' }, { item: 'minecraft:raw_iron' }],
		block_in: { blocks: ['exnihilosequentia:sea_water']},
		post: [
				{ type: 'drop_item', item: 'kubejs:leaded_iron_compound', nbt: {}},
				{ type: 'execute', command: 'particle mekanism:jetpack_flame ~ ~1 ~ 1 1 1 0 20', hide: true}
				]
	})
	event.custom({type: mek_crusher,
	input: {ingredient: Item.of('kubejs:leaded_iron').toJson()},
	output: Item.of('kubejs:leaded_iron_compound')})
	event.recipes.immersiveengineeringCrusher('kubejs:leaded_iron_compound', 'kubejs:leaded_iron')
	event.recipes.createCrushing('kubejs:leaded_iron_compound', 'kubejs:leaded_iron')
	event.recipes.thermal.pulverizer('kubejs:leaded_iron_compound', 'kubejs:leaded_iron')
})