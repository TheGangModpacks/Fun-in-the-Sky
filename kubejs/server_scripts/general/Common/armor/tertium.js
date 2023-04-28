ServerEvents.recipes(event =>{
	event.remove({ output: 'mysticalagriculture:tertium_helmet' })
	event.remove({ output: 'mysticalagriculture:tertium_chestplate' })
	event.remove({ output: 'mysticalagriculture:tertium_leggings' })
	event.remove({ output: 'mysticalagriculture:tertium_boots' })
	event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'AACAA',
    'ACBCA',
    'AA AA',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('mysticalagriculture:tertium_ingot').toJson(),
    B: Item.of('pickletweaks:emerald_helmet').toJson(),
    C: Item.of('mysticalagriculture:tertium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:tertium_helmet').toJson()
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
    A: Item.of('mysticalagriculture:tertium_ingot').toJson(),
    B: Item.of('pickletweaks:emerald_chestplate').toJson(),
    C: Item.of('mysticalagriculture:tertium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:tertium_chestplate').toJson()
  })
  event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'AACAA',
    'ACBCA',
    'AA AA',
    'AA AA',
    'AA AA'
  ],
  key: {
    A: Item.of('mysticalagriculture:tertium_ingot').toJson(),
    B: Item.of('pickletweaks:emerald_leggings').toJson(),
    C: Item.of('mysticalagriculture:tertium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:tertium_leggings').toJson()
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
    A: Item.of('mysticalagriculture:tertium_ingot').toJson(),
    B: Item.of('pickletweaks:emerald_boots').toJson(),
    C: Item.of('mysticalagriculture:tertium_gemstone').toJson()
  },
  result: Item.of('mysticalagriculture:tertium_boots').toJson()
  })
})