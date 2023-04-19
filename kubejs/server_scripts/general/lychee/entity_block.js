ServerEvents.recipes(event =>{
	event.custom({
		type: 'lychee:item_inside',
		item_in: [ { item: 'kubejs:leaded_iron_compound' }, { item: 'minecraft:coal' }],
		block_in: { blocks: ['water']},
		post: [
			{ type: 'delay', s: 30 },
				{ type: 'drop_item', item: 'kubejs:leaded_iron', nbt: {}}
				]
	})
	event.custom({
		type: 'lychee:item_inside',
		item_in: [ { item: 'emendatusenigmatica:raw_lead' }, { item: 'minecraft:raw_iron' }],
		block_in: { blocks: ['water']},
		post: [
			{ type: 'delay', s: 30 },
				{ type: 'drop_item', item: 'kubejs:leaded_iron_compound', nbt: {}}
				]
	})
})