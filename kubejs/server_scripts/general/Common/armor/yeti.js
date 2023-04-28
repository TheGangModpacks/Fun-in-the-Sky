let TFAY = (id) => `twilightforest:alpha_yeti_${id}`
let TFY = (id) => `twilightforest:yeti_${id}`
let MKS = (id) => `mekanismtools:steel_${id}`
ServerEvents.recipes(event =>{
	event.remove({ id: 'twilightforest:equipment/yeti_helmet' })
	event.remove({ id: 'twilightforest:equipment/yeti_chestplate' })
	event.remove({ id: 'twilightforest:equipment/yeti_leggings' })
	event.remove({ id: 'twilightforest:equipment/yeti_boots' })
	event.shaped( Item.of(TFY('helmet'), '{Damage:0}').enchant('minecraft:protection', 2),
	['AAA', 'ABA', '   ' ],
	{ A: (TFAY('fur')), B: (MKS('helmet')) })
	event.shaped( Item.of(TFY('chestplate'), '{Damage:0}').enchant('minecraft:protection', 2),
	['A A', 'ABA', 'AAA' ],
	{ A: (TFAY('fur')), B: (MKS('chestplate')) })
    event.shaped( Item.of(TFY('leggings'), '{Damage:0}').enchant('minecraft:protection', 2),
	['AAA', 'ABA', 'A A' ],
	{ A: (TFAY('fur')), B: (MKS('leggings')) })
    event.shaped( Item.of(TFY('boots'), '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:feather_falling', 4),
	['   ', 'ABA', 'A A' ],
	{ A: (TFAY('fur')), B: (MKS('boots')) })
})