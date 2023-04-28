ServerEvents.recipes(event => {
	event.custom({
		type: "lychee:item_exploding",
		item_in: [ Item.of('thermal:wrench').toJson()
		],
		post: [
		{
			type: "drop_item",
			item: 'pneumaticcraft:pneumatic_wrench',
			count: 1
		}
	]
	})
	event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' })
	event.custom({
		type: "lychee:item_exploding",
		item_in: [ Item.of('kubejs:leaded_iron').toJson()
		],
		post: [
		{
			type: "drop_item",
			item: 'pneumaticcraft:ingot_iron_compressed',
			contextual: { type: 'chance', chance: 0.55 }
		}
	]
	})
})