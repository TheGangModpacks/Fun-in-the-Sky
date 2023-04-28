ServerEvents.recipes(event =>{
	event.remove({ output: 'twilightforest:fiery_helmet' })
	event.remove({ output: 'twilightforest:fiery_chestplate' })
	event.remove({ output: 'twilightforest:fiery_leggings' })
	event.remove({ output: 'twilightforest:fiery_boots' })
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
    A: Item.of('twilightforest:fiery_ingot').toJson(),
    B: Item.of('mysticalagriculture:prudentium_helmet').toJson()
  },
  result: Item.of('twilightforest:fiery_helmet').toJson()
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
    A: Item.of('twilightforest:fiery_ingot').toJson(),
    B: Item.of('mysticalagriculture:prudentium_chestplate').toJson()
  },
  result: Item.of('twilightforest:fiery_chestplate').toJson()
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
    A: Item.of('twilightforest:fiery_ingot').toJson(),
    B: Item.of('mysticalagriculture:prudentium_leggings').toJson()
  },
  result: Item.of('twilightforest:fiery_leggings').toJson()
  })
  event.custom({
   type: 'extendedcrafting:shaped_table',
   tier: 2,
   pattern: [
    'AABAA',
    'AA AA',
    'A   A',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('twilightforest:fiery_ingot').toJson(),
    B: Item.of('mysticalagriculture:prudentium_boots').toJson()
  },
  result: Item.of('twilightforest:fiery_boots').toJson()
  })
})