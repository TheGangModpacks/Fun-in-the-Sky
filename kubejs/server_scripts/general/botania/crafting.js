ServerEvents.recipes(event => {
	event.remove({ output: 'botania:diluted_pool' })
	event.remove({ output: 'botania:mana_spreader' })

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

	event.shaped('botania:mana_spreader', [
		'LLL',
		'GP ',
		'LLL'
	], {
		L: '#botania:livingwood_logs',
		G: '#forge:gears/gold',
		P: '#botania:petals'
	})

	event.replaceInput({ id: 'botania:elven_spreader' }, 'botania:elementium_ingot', Ingredient.of('emendatusenigmatica:elementium_gear'))
	event.remove({output: 'botania:gaia_ingot'})
	event.recipes.summoningrituals.altar('botania:terrasteel_ingot')
	.itemOutput('botania:gaia_ingot')
	.input('4x botania:life_essence')
	.input('3x quark:soul_bead')
	.input('mysticalagriculture:soulium_ingot')
	.blockBelow('botania:natura_pylon')
	.dayTime('night')
	.id('fits:materials/processing/botania/gaia_ingot')
})