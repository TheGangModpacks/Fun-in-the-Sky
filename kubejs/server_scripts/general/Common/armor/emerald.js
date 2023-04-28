ServerEvents.recipes(event =>{
	event.remove({ output: 'pickletweaks:emerald_helmet' })
	event.remove({ output: 'pickletweaks:emerald_chestplate' })
	event.remove({ output: 'pickletweaks:emerald_leggings' })
	event.remove({ output: 'pickletweaks:emerald_boots' })
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
    A: Item.of('minecraft:emerald').toJson(),
    B: Item.of('twilightforest:fiery_helmet').toJson(),
    C: Item.of('minecraft:emerald_block').toJson()
  },
  result: Item.of('pickletweaks:emerald_helmet').toJson()
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
    A: Item.of('minecraft:emerald').toJson(),
    B: Item.of('twilightforest:fiery_chestplate').toJson(),
    C: Item.of('minecraft:emerald_block').toJson()
  },
  result: Item.of('pickletweaks:emerald_chestplate').toJson()
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
    A: Item.of('minecraft:emerald').toJson(),
    B: Item.of('twilightforest:fiery_leggings').toJson(),
    C: Item.of('minecraft:emerald_block').toJson()
  },
  result: Item.of('pickletweaks:emerald_leggings').toJson()
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
    A: Item.of('minecraft:emerald').toJson(),
    B: Item.of('twilightforest:fiery_boots').toJson(),
    C: Item.of('minecraft:emerald_block').toJson()
  },
  result: Item.of('pickletweaks:emerald_boots').toJson()
  })
})