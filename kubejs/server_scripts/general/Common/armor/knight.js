let TFL = (id) => `twilightforest:steeleaf_${id}`
let TFK = (id) => `twilightforest:knightmetal_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (TFK('helmet')) })
	event.remove({ output: (TFK('chestplate')) })
	event.remove({ output: (TFK('leggings')) })
	event.remove({ output: (TFK('boots')) })
	event.shaped( Item.of(TFK('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (TFK('ingot')), B: (TFL('helmet')) })
	event.shaped( Item.of(TFK('chestplate')),
	['A A', 'ABA', 'AAA' ],
	{ A: (TFK('ingot')), B: (TFL('chestplate')) })
    event.shaped( Item.of(TFK('leggings')),
	['AAA', 'ABA', 'A A' ],
	{ A: (TFK('ingot')), B: (TFL('leggings')) })
    event.shaped( Item.of(TFK('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (TFK('ingot')), B: (TFL('boots')) })
})