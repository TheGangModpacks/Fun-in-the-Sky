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
		block_in: 'minecraft:cauldron',
		post: [
		{
			type: 'execute',
			command: 'give @p minecraft:bucket',
			hide: true
		},
		{
			type: 'execute',
			command: 'playsound botania:air_rod block @p',
			hide: true
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