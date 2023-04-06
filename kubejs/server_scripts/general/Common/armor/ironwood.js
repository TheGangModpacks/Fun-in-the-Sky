let TFI = (id) => `twilightforest:ironwood_${id}`
let TF = (id) => `twilightforest:${id}`
let MCI = (id) => `minecraft:iron_${id}`
ServerEvents.recipes(event =>{
	event.remove({ id: 'twilightforest:equipment/ironwood_helmet'})
	event.remove({ id: 'twilightforest:equipment/ironwood_chestplate'})
	event.remove({ id: 'twilightforest:equipment/ironwood_leggings'})
	event.remove({ id: 'twilightforest:equipment/ironwood_boots'})
	event.shaped(Item.of(TFI('helmet'), '{Damage:0}').enchant('minecraft:aqua_affinity', 1),
	['AAA', 'ABA', '   ' ],
	{ A: (TF('ironwood_ingot')), B: (MCI('helmet')) })
	event.shaped( Item.of(TFI('chestplate'), '{Damage:0}').enchant('minecraft:protection', 1),
	['A A', 'ABA', 'AAA' ],
	{ A: (TF('ironwood_ingot')), B: (MCI('chestplate')) })
    event.shaped( Item.of(TFI('leggings'), '{Damage:0}').enchant('minecraft:protection', 1),
	['AAA', 'ABA', 'A A' ],
	{ A: (TF('ironwood_ingot')), B: (MCI('leggings')) })
    event.shaped( Item.of(TFI('boots'), '{Damage:0}').enchant('minecraft:feather_falling', 1),
	['   ', 'ABA', 'A A' ],
	{ A: (TF('ironwood_ingot')), B: (MCI('boots')) })
})