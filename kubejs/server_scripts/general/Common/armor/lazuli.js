let MK = (id) => `mekanismtools:${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (MK('lapis_lazuli_helmet')) })
	event.remove({ output: (MK('lapis_lazuli_chestplate')) })
	event.remove({ output: (MK('lapis_lazuli_leggings')) })
	event.remove({ output: (MK('lapis_lazuli_boots')) })
	event.shaped( Item.of(MK('lapis_lazuli_helmet')),[
	'AAA',
	'ABA',
	'   ' ], { A: 'thermal:lapis_gear', B: 'minecraft:chainmail_helmet' })
	event.shaped( Item.of(MK('lapis_lazuli_chestplate')),[
	'A A',
	'ABA',
	'AAA' ], { A: 'thermal:lapis_gear', B: 'minecraft:chainmail_chestplate' })
	event.shaped( Item.of(MK('lapis_lazuli_leggings')),[
	'AAA',
	'ABA',
	'A A' ], { A: 'thermal:lapis_gear', B: 'minecraft:chainmail_leggings' })
	event.shaped( Item.of(MK('lapis_lazuli_boots')),[
	'   ',
	'ABA',
	'A A' ], { A: 'thermal:lapis_gear', B: 'minecraft:chainmail_boots' })
})