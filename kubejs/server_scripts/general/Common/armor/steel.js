let MKB = (id) => `mekanismtools:bronze_${id}`
let EMS = (id) => `emendatusenigmatica:steel_${id}`
let MKS = (id) => `mekanismtools:steel_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (MKS('helmet')) })
	event.remove({ output: (MKS('chestplate')) })
	event.remove({ output: (MKS('leggings')) })
	event.remove({ output: (MKS('boots')) })
	event.shaped( Item.of(MKS('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (EMS('ingot')), B: (MKB('helmet')) })
	event.shaped( Item.of(MKS('chestplate')),
	['A A', 'ABA', 'AAA' ],
	{ A: (EMS('ingot')), B: (MKB('chestplate')) })
    event.shaped( Item.of(MKS('leggings')),
	['AAA', 'ABA', 'A A' ],
	{ A: (EMS('ingot')), B: (MKB('leggings')) })
    event.shaped( Item.of(MKS('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (EMS('ingot')), B: (MKB('boots')) })
})