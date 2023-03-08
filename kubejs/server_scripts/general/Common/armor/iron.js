let PNI = (id) => `pneumaticcraft:compressed_iron_${id}`
let MC = (id) => `minecraft:${id}`
let MCI = (id) => `minecraft:iron_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (MCI('helmet')) })
	event.remove({ output: (MCI('chestplate')) })
	event.remove({ output: (MCI('leggings')) })
	event.remove({ output: (MCI('boots')) })
	event.shaped( Item.of(MCI('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (MC('iron_ingot')), B: (PNI('helmet')) })
	event.shaped( Item.of(MCI('chestplate')),
	['A A', 'ABA', 'AAA' ],
	{ A: (MC('iron_ingot')), B: (PNI('chestplate')) })
    event.shaped( Item.of(MCI('leggings')),
	['AAA', 'ABA', 'A A' ],
	{ A: (MC('iron_ingot')), B: (PNI('leggings')) })
    event.shaped( Item.of(MCI('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (MC('iron_ingot')), B: (PNI('boots')) })
})