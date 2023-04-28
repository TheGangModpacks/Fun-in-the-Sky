ServerEvents.recipes(event =>{
	event.remove({ output: 'botania:diluted_pool' })
	event.shaped(
	Item.of('botania:diluted_pool'),
	[
	'A A',
	'BCB',
	'DDD'
	],
	{
		A: 'twilightforest:fiery_ingot',
		B: 'twilightforest:knightmetal_ingot',
		C: 'twilightforest:steeleaf_block',
		D: 'botania:livingrock_bricks'
	}
	)
})