ServerEvents.recipes(event =>{
	event.remove({ output: 'minecraft:diamond_helmet' })
	event.remove({ output: 'minecraft:diamond_chestplate' })
	event.remove({ output: 'minecraft:diamond_leggings' })
	event.remove({ output: 'minecraft:diamond_boots' })
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
    A: Item.of('minecraft:diamond').toJson(),
    B: Item.of('mekanismtools:refined_glowstone_helmet').toJson(),
    C: Item.of('minecraft:diamond_block').toJson()
  },
  result: Item.of('minecraft:diamond_helmet').toJson()
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
    A: Item.of('minecraft:diamond').toJson(),
    B: Item.of('mekanismtools:refined_glowstone_chestplate').toJson(),
    C: Item.of('minecraft:diamond_block').toJson()
  },
  result: Item.of('minecraft:diamond_chestplate').toJson()
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
    A: Item.of('minecraft:diamond').toJson(),
    B: Item.of('mekanismtools:refined_glowstone_leggings').toJson(),
    C: Item.of('minecraft:diamond_block').toJson()
  },
  result: Item.of('minecraft:diamond_leggings').toJson()
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
    A: Item.of('minecraft:diamond').toJson(),
    B: Item.of('mekanismtools:refined_glowstone_boots').toJson(),
    C: Item.of('minecraft:diamond_block').toJson()
  },
  result: Item.of('minecraft:diamond_boots').toJson()
  })
})
LootJS.modifiers((event) =>{
    event.addLootTableModifier('minecraft:chests/end_city_treasure')
    .removeLoot("#forge:armor/diamond"),
    event.addLootTableModifier('minecraft:chests/bastion_treasure')
    .removeLoot("#forge:armor/diamond")
    event.addLootTableModifier('minecraft:chests/woodland_mansion')
    .removeLoot("#forge:armor/diamond")
})