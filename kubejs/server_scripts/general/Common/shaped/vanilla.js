ServerEvents.recipes(event =>{
	event.remove({ output: 'minecraft:enchanting_table' })
	event.shaped(
	Item.of('minecraft:enchanting_table'),
	[
	' A ',
	'BDB',
	'DCD'
	],
	{
		A: 'apotheosis:scrap_tome',
		B: 'rftoolsbase:dimensionalshard',
		C: 'twilightforest:steeleaf_block',
		D: 'ironjetpacks:elite_coil'
	}
	)
})