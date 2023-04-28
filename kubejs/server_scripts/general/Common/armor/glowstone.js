ServerEvents.recipes(event =>{
	event.remove({ output: 'mekanismtools:refined_glowstone_helmet' })
	event.remove({ output: 'mekanismtools:refined_glowstone_chestplate' })
	event.remove({ output: 'mekanismtools:refined_glowstone_leggings' })
	event.remove({ output: 'mekanismtools:refined_glowstone_boots' })
	event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'AAAAA',
    'AABAA',
    'AA AA',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('mekanism:ingot_refined_glowstone').toJson(),
    B: Item.of('twilightforest:knightmetal_helmet').toJson()
  },
  result: Item.of('mekanismtools:refined_glowstone_helmet').toJson()
  })
  event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'A   A',
    'AA AA',
    'AABAA',
    'AAAAA',
    'AAAAA'
  ],
  key: {
    A: Item.of('mekanism:ingot_refined_glowstone').toJson(),
    B: Item.of('twilightforest:knightmetal_chestplate').toJson()
  },
  result: Item.of('mekanismtools:refined_glowstone_chestplate').toJson()
  })
  event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'AAAAA',
    'AABAA',
    'AA AA',
    'AA AA',
    'AA AA'
  ],
  key: {
    A: Item.of('mekanism:ingot_refined_glowstone').toJson(),
    B: Item.of('twilightforest:knightmetal_leggings').toJson()
  },
  result: Item.of('mekanismtools:refined_glowstone_leggings').toJson()
  })
  event.custom({
   type: 'extendedcrafting:shaped_table',
   tier: 2,
   pattern: [
    'AABAA',
    'AA AA',
    '     ',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('mekanism:ingot_refined_glowstone').toJson(),
    B: Item.of('twilightforest:knightmetal_boots').toJson()
  },
  result: Item.of('mekanismtools:refined_glowstone_boots').toJson()
  })
})