let MKT = (id) => `mekanismtools:${id}`

ServerEvents.recipes(event =>{
	event.remove({ output: (MKT('lapis_lazuli_helmet')) })
	event.remove({ output: (MKT('lapis_lazuli_chestplate')) })
	event.remove({ output: (MKT('lapis_lazuli_leggings')) })
	event.remove({ output: (MKT('lapis_lazuli_boots')) })
	event.shaped(Item.of(MKT('lapis_lazuli_helmet')), [		'AAA',		'ABA',		'AAA'	], { A: 'emendatusenigmatica:lapis_gear', B: 'minecraft:chainmail_helmet' })
	event.shaped(Item.of(MKT('lapis_lazuli_chestplate')), [		'A A',		'ABA',		'AAA'	], { A: 'emendatusenigmatica:lapis_gear', B: 'minecraft:chainmail_chestplate' })
	event.shaped(Item.of(MKT('lapis_lazuli_leggings')), [		'AAA',		'ABA',		'A A'	], { A: 'emendatusenigmatica:lapis_gear', B: 'minecraft:chainmail_leggings' })
	event.shaped(Item.of(MKT('lapis_lazuli_boots')), [		'A A',		'ABA',		'A A'	], { A: 'emendatusenigmatica:lapis_gear', B: 'minecraft:chainmail_boots' })
})