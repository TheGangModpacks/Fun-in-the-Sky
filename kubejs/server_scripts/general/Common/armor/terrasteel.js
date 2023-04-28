ServerEvents.recipes(event =>{
	event.remove({ output: 'botania:terrasteel_helmet' })
	event.remove({ output: 'botania:terrasteel_chestplate' })
	event.remove({ output: 'botania:terrasteel_leggings' })
	event.remove({ output: 'botania:terrasteel_boots' })
	event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'CADAC',
    'ADBDA',
    'AA AA',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('botania:terrasteel_ingot').toJson(),
    B: Item.of('mekanismtools:osmium_helmet').toJson(),
    C: Item.of('botania:livingwood_twig').toJson(),
    D: Item.of('botania:rune_spring').toJson()
  },
  result: Item.of('botania:terrasteel_helmet').toJson()
  })
  event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'C   C',
    'AA AA',
    'ADBDA',
    'AADAA',
    'AAAAA'
  ],
  key: {
    A: Item.of('botania:terrasteel_ingot').toJson(),
    B: Item.of('mekanismtools:osmium_chestplate').toJson(),
    C: Item.of('botania:livingwood_twig').toJson(),
    D: Item.of('botania:rune_summer').toJson()
  },
  result: Item.of('botania:terrasteel_chestplate').toJson()
  })
  event.custom({
  type: 'extendedcrafting:shaped_table',
  tier: 2,
  pattern: [
    'CADAC',
    'ADBDA',
    'AA AA',
    'AA AA',
    'AA AA'
  ],
  key: {
    A: Item.of('botania:terrasteel_ingot').toJson(),
    B: Item.of('mekanismtools:osmium_leggings').toJson(),
    C: Item.of('botania:livingwood_twig').toJson(),
    D: Item.of('botania:rune_autumn').toJson()
  },
  result: Item.of('botania:terrasteel_leggings').toJson()
  })
  event.custom({
   type: 'extendedcrafting:shaped_table',
   tier: 2,
   pattern: [
    'CDBDC',
    'AA AA',
    'A   A',
    '     ',
    '     '
  ],
  key: {
    A: Item.of('botania:terrasteel_ingot').toJson(),
    B: Item.of('mekanismtools:osmium_boots').toJson(),
    C: Item.of('botania:livingwood_twig').toJson(),
    D: Item.of('botania:rune_winter').toJson()
  },
  result: Item.of('botania:terrasteel_boots').toJson()
  })
})