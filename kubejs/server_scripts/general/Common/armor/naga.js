let TFN = (id) => `twilightforest:naga_${id}`
let MCG = (id) => `minecraft:golden_${id}`
ServerEvents.recipes(event =>{
	event.remove({ id: 'twilightforest:equipment/naga_chestplate' })
	event.remove({ id: 'twilightforest:equipment/naga_leggings' })
	event.shaped( Item.of(TFN('chestplate'), '{Damage:0}').enchant('minecraft:fire_protection', 3),
	['A A', 'ABA', 'AAA' ],
	{ A: (TFN('scale')), B: (MCG('chestplate')) })
    event.shaped( Item.of(TFN('leggings'), '{Damage:0}').enchant('minecraft:protection', 3),
	['AAA', 'ABA', 'A A' ],
	{ A: (TFN('scale')), B: (MCG('leggings')) })
})