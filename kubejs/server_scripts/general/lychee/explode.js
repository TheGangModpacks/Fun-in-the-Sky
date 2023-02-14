ServerEvents.recipes(event => {
	event.custom({
		type: "lychee:item_exploding",
		item_in: [
		{
			item: 'thermal:wrench'
		}
		],
		post: [
		{
			type: "drop_item",
			item: 'pneumaticcraft:pneumatic_wrench',
			count: 1
		}
	]
	})
})