let BAM = (id) => `botania:manasteel_${id}`
let MCG = (id) => `minecraft:golden_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (BAM('helmet')) })
	event.remove({ output: (BAM('chestplate')) })
	event.remove({ output: (BAM('leggings')) })
	event.remove({ output: (BAM('boots')) })
	event.shaped( Item.of(BAM('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (BAM('ingot')), B: (MCG('helmet')) })
    event.shaped( Item.of(BAM('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (BAM('ingot')), B: (MCG('boots')) })
})