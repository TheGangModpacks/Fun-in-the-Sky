ServerEvents.recipes(event => {
	event.remove({ output: 'botania:brewery' })
	event.remove({ id: 'botanicadds:elven_brewery' })

	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'botania:manasteel_block'
		},
		block_in: 'botania:mana_pool',
		post: {
			type: 'place',
			block: 'botania:brewery'
		}
	})

	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'botania:elementium_block'
		},
		block_in: 'botania:brewery',
		post: {
			type: 'place',
			block: 'botanicadds:elven_brewery'
		}
	})
})