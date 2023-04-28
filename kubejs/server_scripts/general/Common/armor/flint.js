ServerEvents.recipes(event =>{
	event.remove({ id: 'pickletweaks:flint_helmet' })
	event.remove({ id: 'pickletweaks:flint_chestplate' })
	event.remove({ id: 'pickletweaks:flint_leggings' })
	event.remove({ id: 'pickletweaks:flint_boots' })
	event.shaped( Item.of('pickletweaks:flint_helmet'),[
	'AAA',
	'ABA',
	'   '
	],{
		A: 'minecraft:flint',
		B: 'minecraft:leather_helmet'
	})
	event.shaped( Item.of('pickletweaks:flint_chestplate'),[
	'A A',
	'ABA',
	'AAA'
	],{
		A: 'minecraft:flint',
		B: 'minecraft:leather_chestplate'
	})
	event.shaped( Item.of('pickletweaks:flint_leggings'),[
	'AAA',
	'ABA',
	'A A'
	],{
		A: 'minecraft:flint',
		B: 'minecraft:leather_leggings'
	})
	event.shaped( Item.of('pickletweaks:flint_boots'),[
	'   ',
	'ABA',
	'A A'
	],{
		A: 'minecraft:flint',
		B: 'minecraft:leather_boots'
	})
})