ServerEvents.recipes(event => {
	event.remove({ output: 'botania:runic_altar' })
	event.remove({ id: 'botanicadds:elven_altar' })

	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'botania:mana_diamond_block'
		},
		block_in: 'botania:mana_pool',
		post: {
			type: 'place',
			block: 'botania:runic_altar'
		}
	})

	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'botania:dragonstone_block'
		},
		block_in: 'botania:runic_altar',
		post: {
			type: 'place',
			block: 'botanicadds:elven_altar'
		}
	})
})