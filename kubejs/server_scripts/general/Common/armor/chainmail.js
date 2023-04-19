ServerEvents.recipes(event =>{
	event.remove({ output: 'minecraft:chainmail_helmet' })
	event.remove({ output: 'minecraft:chainmail_chestplate' })
	event.remove({ output: 'minecraft:chainmail_leggings' })
	event.remove({ output: 'minecraft:chainmail_boots' })
	event.shaped( Item.of('minecraft:chainmail_helmet'),[
	'AAA',
	'ABA',
	'   ' ], { A: 'dustrial_decor:large_chain', B: 'pickletweaks:flint_helmet' })
	event.shaped( Item.of('minecraft:chainmail_chestplate'),[
	'A A',
	'ABA',
	'AAA' ], { A: 'dustrial_decor:large_chain', B: 'pickletweaks:flint_chestplate' })
	event.shaped( Item.of('minecraft:chainmail_leggings'),[
	'AAA',
	'ABA',
	'A A' ], { A: 'dustrial_decor:large_chain', B: 'pickletweaks:flint_leggings' })
	event.shaped( Item.of('minecraft:chainmail_boots'),[
	'ABA',
	'A A',
	'   ' ], { A: 'dustrial_decor:large_chain', B: 'pickletweaks:flint_boots' })
})
LootJS.modifiers((event) =>{
	event.addLootTableModifier('minecraft:chests/woodland_mansion')
	.removeLoot('minecraft:chainmail_chestplate')
})