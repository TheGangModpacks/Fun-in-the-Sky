onEvent('recipes', event => {
    event.remove({output: "minecraft:iron_ingot", mod: "Mystical agriculture"})

    event.shaped('6x minecraft:iron_ingot', [
      'AAA',
      'S S',
      'AAA'
    ], {
      S: 'minecraft:coal',
      A: 'mysticalagriculture:iron_essence'
    })
  })