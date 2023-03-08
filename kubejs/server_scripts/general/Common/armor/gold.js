let TFA = (id) => `twilightforest:arctic_${id}`
let MC = (id) => `minecraft:${id}`
let MCG = (id) => `minecraft:golden_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (MCG('helmet')) })
	event.remove({ output: (MCG('chestplate')) })
	event.remove({ output: (MCG('leggings')) })
	event.remove({ output: (MCG('boots')) })
	event.shaped( Item.of(MCG('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (MC('gold_ingot')), B: (TFA('helmet')) })
	event.shaped( Item.of(MCG('chestplate')),
	['A A', 'ABA', 'AAA' ],
	{ A: (MC('gold_ingot')), B: (TFA('chestplate')) })
    event.shaped( Item.of(MCG('leggings')),
	['AAA', 'ABA', 'A A' ],
	{ A: (MC('gold_ingot')), B: (TFA('leggings')) })
    event.shaped( Item.of(MCG('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (MC('gold_ingot')), B: (TFA('boots')) })
})