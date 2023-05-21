ServerEvents.recipes(event => {
    event.remove({ output: 'hexerei:mahogany_broom' })
    
    event.custom({
      "type": "hexerei:mixingcauldron",
      "liquid": {
        "fluid": "hexerei:potion",
        "nbt": {
          "Bottle": "EXTENDED",
          "Potion": "apotheosis:resistance"
        }
      },
      "ingredients": [
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "item": "hexerei:mahogany_wood"
        },
        {
          "item": "hexerei:blood_bottle"
        },
        {
            "item": "hexerei:mandrake_root"
        },
        {
          "item": "minecraft:hay_block"
        },
        {
          "item": "hexerei:mindful_trance_blend"
        },
        {
          "item": "hexerei:tallow_bottle"
        },
        {
          "item": "hexerei:mahogany_log"
        }
      ],
      "output": {
        "item": "hexerei:mahogany_broom"
      },
      "liquidOutput": {
        "fluid": "hexerei:blood_fluid"
      },
      "fluidLevelsConsumed": 2000
    })

})