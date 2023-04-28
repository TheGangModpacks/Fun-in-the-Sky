let PNI = (id) => `pneumaticcraft:compressed_iron_${id}`
let PN = (id) => `pneumaticcraft:${id}`
let MKT = (id) => `mekanismtools:${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (PNI('helmet')) })
	event.remove({ output: (PNI('chestplate')) })
	event.remove({ output: (PNI('leggings')) })
	event.remove({ output: (PNI('boots')) })
	event.shaped( Item.of(PNI('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (PN('ingot_iron_compressed')), B: (MKT('lapis_lazuli_helmet')) })
	event.shaped( Item.of(PNI('chestplate')),
	['A A', 'ABA', 'AAA' ],
	{ A: (PN('ingot_iron_compressed')), B: (MKT('lapis_lazuli_chestplate')) })
    event.shaped( Item.of(PNI('leggings')),
	['AAA', 'ABA', 'A A' ],
	{ A: (PN('ingot_iron_compressed')), B: (MKT('lapis_lazuli_leggings')) })
    event.shaped( Item.of(PNI('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (PN('ingot_iron_compressed')), B: (MKT('lapis_lazuli_boots')) })
})