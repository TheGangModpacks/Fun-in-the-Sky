let TFA = (id) => `twilightforest:arctic_${id}`
let TFI = (id) => `twilightforest:ironwood_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (TFA('helmet')) })
	event.remove({ output: (TFA('chestplate')) })
	event.remove({ output: (TFA('leggings')) })
	event.remove({ output: (TFA('boots')) })
	event.shaped( Item.of(TFA('helmet')),
	['AAA', 'ABA', '   ' ],
	{ A: (TFA('fur')), B: (TFI('helmet')) })
	event.shaped( Item.of(TFA('chestplate')),
	['A A', 'ABA', 'AAA' ],
	{ A: (TFA('fur')), B: (TFI('chestplate')) })
    event.shaped( Item.of(TFA('leggings')),
	['AAA', 'ABA', 'A A' ],
	{ A: (TFA('fur')), B: (TFI('leggings')) })
    event.shaped( Item.of(TFA('boots')),
	['   ', 'ABA', 'A A' ],
	{ A: (TFA('fur')), B: (TFI('boots')) })
})