ServerEvents.recipes(recipe =>{
    recipe.custom({
      "type": "create:compacting",
      "ingredients": [
        Fluid.of('immersiveengineering:redstone_acid', 500).toJson(),
        Item.of('gunpowder', 2),
        Item.of('spider_eye', 2),
        Item.of('rotten_flesh', 2)
      ],
      "results": [
        Fluid.of('pneumaticcraft:etching_acid', 1000).toJson()
      ]
    }).id('fits:compacting/pncr/etching_acid')
})