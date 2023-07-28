//priority: 2
ServerEvents.recipes(recipe =>{
    recipe.custom({
        "type": "lychee:item_inside",
        "hide_in_viewer": true,
        "post": [
          {
            "type": "drop_item",
            "contextual": [
              {
                "type": "chance",
                "chance": 0.95
              }
            ],
            "item": "ae2:dilithium_crystal"
          },
          {
            "type": "place",
            "contextual": [
              {
                "type": "chance",
                "chance": 0.15
              }
            ],
            "block": "*"
          }
        ],
        "item_in": [
          {
            "item": "ae2:fluix_crystal"
          }
        ],
        "block_in": "mekanism:sulfur_trioxide"
      }).id('fits:item_inside/ae2/dilithium')
    recipe.custom({
        "type": "lychee:item_inside",
        "comment": "Liquid Consumption Chance: 15%",
        "ghost": true,
        "post": [
          {
            "type": "drop_item",
            "contextual": [
              {
                "type": "chance",
                "chance": 0.95
              }
            ],
            "item": "ae2:dilithium_crystal"
          }
        ],
        "item_in": [
          {
            "item": "ae2:fluix_crystal"
          }
        ],
        "block_in": "mekanism:sulfur_trioxide"
      }).id('fits:ghost/dilithium')
})