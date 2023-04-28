ServerEvents.recipes(event =>{
	event.remove({ output: 'mekanismtools:osmium_helmet' })
	event.remove({ output: 'mekanismtools:osmium_chestplate' })
	event.remove({ output: 'mekanismtools:osmium_leggings' })
	event.remove({ output: 'mekanismtools:osmium_boots' })
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
    A: Item.of('emendatusenigmatica:osmium_ingot').toJson(),
    B: Item.of('minecraft:diamond_helmet').toJson()
  },
  result: Item.of('mekanismtools:osmium_helmet').toJson()
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
    A: Item.of('emendatusenigmatica:osmium_ingot').toJson(),
    B: Item.of('minecraft:diamond_chestplate').toJson()
  },
  result: Item.of('mekanismtools:osmium_chestplate').toJson()
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
    A: Item.of('emendatusenigmatica:osmium_ingot').toJson(),
    B: Item.of('minecraft:diamond_leggings').toJson()
  },
  result: Item.of('mekanismtools:osmium_leggings').toJson()
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
    A: Item.of('emendatusenigmatica:osmium_ingot').toJson(),
    B: Item.of('minecraft:diamond_boots').toJson()
  },
  result: Item.of('mekanismtools:osmium_boots').toJson()
  })
})