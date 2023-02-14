ServerEvents.recipes(event =>{
	event.remove({ output: 'botania:mana_pool' })
	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'botania:manasteel_block'
		},
		block_in: 'botania:diluted_pool',
		post: {
		   type: 'place',
		   block: 'botania:mana_pool'
		}
	})
	event.remove({ output: 'botania:apothecary_default' })
	event.remove({ output: 'botania:apothecary_livingrock' })
	event.remove({ output: 'botania:apothecary_mossy' })
	event.remove({ output: 'botania:apothecary_default' })
	event.remove({ output: 'botania:apothecary_deepslate' })
	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'exnihilosequentia:sea_water_bucket'
		},
		block_in: 'botania:diluted_pool',
		post: [
		{
			type: 'drop_item',
			item: 'minecraft:bucket'
		},
		{
		   type: 'place',
		   block: 'botania:apothecary_default'
		}
		]
	})
	event.remove({ output: 'botania:fabulous_pool' })
	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'botania:spawner_mover'
		},
		block_in: 'botania:mana_pool',
		post: {
		   type: 'place',
		   block: 'botania:fabulous_pool'
		}
	})
})