ServerEvents.recipes(event =>{
	event.remove({ output: 'mysticalagriculture:inferium_helmet' })
	event.remove({ output: 'mysticalagriculture:inferium_chestplate' })
	event.remove({ output: 'mysticalagriculture:inferium_leggings' })
	event.remove({ output: 'mysticalagriculture:inferium_boots' })
	event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'CCACC',
    'AABAA',
    'AA AA',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('mysticalagriculture:inferium_ingot').toJson(),
    B: Item.of('botania:terrasteel_helmet').toJson(),
    C: Item.of('mysticalagriculture:inferium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:inferium_helmet').toJson()
  })
  event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'A   A',
    'CA AC',
    'ACBCA',
    'AACAA',
    'ACACA'
  ],
  key: {
    A: Item.of('mysticalagriculture:inferium_ingot').toJson(),
    B: Item.of('botania:terrasteel_chestplate').toJson(),
    C: Item.of('mysticalagriculture:inferium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:inferium_chestplate').toJson()
  })
  event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'CCACC',
    'AABAA',
    'AA AA',
    'AA AA',
    'AA AA'
  ],
  key: {
    A: Item.of('mysticalagriculture:inferium_ingot').toJson(),
    B: Item.of('botania:terrasteel_leggings').toJson(),
    C: Item.of('mysticalagriculture:inferium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:inferium_leggings').toJson()
  })
  event.custom({
   type: 'extendedcrafting:shaped_table',
   tier: 2,
   pattern: [
    'CCBCC',
    'AA AA',
    'A   A',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('mysticalagriculture:inferium_ingot').toJson(),
    B: Item.of('botania:terrasteel_boots').toJson(),
    C: Item.of('mysticalagriculture:inferium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:inferium_boots').toJson()
  })
})