let TFY = (id) => `twilightforest:yeti_${id}`
let TFL = (id) => `twilightforest:steeleaf_${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (TFL('helmet')) })
	event.remove({ output: (TFL('chestplate')) })
	event.remove({ output: (TFL('leggings')) })
	event.remove({ output: (TFL('boots')) })
	event.shaped( Item.of(TFL('helmet'), '{Damage:0}').enchant('minecraft:projectile_protection', 2),
	['AAA', 'ABA', '   ' ],
	{ A: (TFL('ingot')), B: (TFY('helmet')) }).id('twilightforest:equipment/steeleaf_helmet')
	event.shaped( Item.of(TFL('chestplate'), '{Damage:0}').enchant('minecraft:blast_protection', 2),
	['A A', 'ABA', 'AAA' ],
	{ A: (TFL('ingot')), B: (TFY('chestplate')) }).id('twilightforest:equipment/steeleaf_chestplate')
    event.shaped( Item.of(TFL('leggings'), '{Damage:0}').enchant('minecraft:fire_protection', 2),
	['AAA', 'ABA', 'A A' ],
	{ A: (TFL('ingot')), B: (TFY('leggings')) }).id('twilightforest:equipment/steeleaf_leggings')
    event.shaped( Item.of(TFL('boots'), '{Damage:0}').enchant('minecraft:feather_falling', 2),
	['   ', 'ABA', 'A A' ],
	{ A: (TFL('ingot')), B: (TFY('boots')) }).id('twilightforest:equipment/steeleaf_boots')
})