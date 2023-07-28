//priority: 2
ServerEvents.tags('item', tag =>{
    tag.add('fits:amethyst_buds', /^minecraft:.*_amethyst_bud/)
})
ServerEvents.recipes(recipe =>{
    recipe.custom({
        "type": "lychee:item_inside",
        "comment": "Transforms Amethyst to Silica",
        "contextual": [
          {
            "type": "weather",
            "weather": "clear"
          }
        ],
        "post": [
          {
            "type": "place",
            "block": "*"
          },
          {
            "type": "place",
            "block": "emendatusenigmatica:budding_silica"
          }
        ],
        "item_in": [
          [
            {
              "item": "minecraft:budding_amethyst"
            }
          ]
        ],
        "block_in": "kubejs:energetic_substance"
      }).id('fits:item_inside/ee/budding_silica')
})