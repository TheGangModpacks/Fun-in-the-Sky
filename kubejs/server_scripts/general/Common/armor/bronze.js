let MKB = (id) => `mekanismtools:bronze_${id}`
let TFN = (id) => `twilightforest:naga_${id}`
let BAM = (id) => `botania:manasteel_${id}`
let EMB = (id) => `emendatusenigmatica:bronze_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (MKB('helmet')) })
	event.remove({ output: (MKB('chestplate')) })
	event.remove({ output: (MKB('leggings')) })
	event.remove({ output: (MKB('boots')) })
	event.shaped( Item.of(MKB('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (EMB('ingot')), B: (BAM('helmet')) })
	event.shaped( Item.of(MKB('chestplate')),
	['A A', 'ABA', 'AAA' ],
	{ A: (EMB('ingot')), B: (TFN('chestplate')) })
    event.shaped( Item.of(MKB('leggings')),
	['AAA', 'ABA', 'A A' ],
	{ A: (EMB('ingot')), B: (TFN('leggings')) })
    event.shaped( Item.of(MKB('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (EMB('ingot')), B: (BAM('boots')) })
})