ServerEvents.recipes(event =>{
	event.remove({ id: 'ae2:network/crafting/patterns_blank' })
	event.remove({ id: 'refinedstorage:pattern' })
	event.shaped( Item.of('ae2:blank_pattern', 3), [
	'ABA',
	'CDA',
	'CCA'
	],
	{
		A: 'ae2:quartz_glass',
		B: 'emendatusenigmatica:cinnabar_gem',
		C: 'emendatusenigmatica:invar_plate',
		D: 'minecraft:polished_blackstone'
	}
	)
	event.shaped( Item.of('refinedstorage:pattern', 3), [
	'DBA',
	'CAA',
	'CCA'
	],
	{
		A: 'botania:mana_glass',
		B: 'emendatusenigmatica:cinnabar_gem',
		C: 'emendatusenigmatica:invar_plate',
		D: 'minecraft:polished_diorite'
	}
	)
})