//priority: 1
ServerEvents.recipes(event =>{
    const ae2 = (id) => `ae2:${id}`;
    const aebl = (id) => `ae2:network/blocks/${id}`
    const aepa = (id) => `ae2:network/parts/${id}`
    const aemat = (id) => `ae2:materials/${id}`

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAA",
          "BCC",
          "AAA"
        ],
        "tier": 1,
        "key": {
          "A": {
            "item": "powah:steel_energized"
          },
          "B": {
            "item": "create:mechanical_press"
          },
          "C": {
            "item": "ae2:charged_certus_quartz_crystal"
          }
        },
        "result": Item.of(ae2('inscriber'))
      }).id(aebl('inscribers'))

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAA",
        "DCB",
        "AAA"
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "powah:steel_energized"
        },
        "B": {
          "item": "ae2:charged_certus_quartz_crystal"
        },
        "C": {
          "item": "ae2:fluix_glass_cable"
        },
        "D": {
          "item": "ae2:fluix_crystal"
        }
      },
      "result": Item.of(ae2('energy_acceptor'))
    }).id(aebl('energy_energy_acceptor'))

    event.custom({
      "type": "extendedcrafting:shapeless_table",
      "tier": 1,
      "ingredients": [
        {
          "item": "minecraft:quartz"
        },
        {
          "tag": "ae2:knife"
        }
      ],
      "result": Item.of(ae2('quartz_fiber'))
    }).id(aepa('quartz_fiber')).damageIngredient('#ae2:knife', 1)

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "   ",
        "ABA",
        "   "
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "ae2:fluix_crystal"
        },
        "B": {
          "item": "ae2:quartz_fiber"
        }
      },
      "result": {
        "item": "ae2:fluix_glass_cable",
        "count": 3
      }
    }).id('ae2:network/cables/glass_fluix')
    event.recipes.create.splashing(['ae2:fluix_glass_cable'], [Fluid.of('water', 10), '#ae2:glass_cable']).id('ae2:network/cables/glass_fluix_clean')

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "ABA",
        "CCC"
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "ae2:formation_core"
        },
        "B": {
          "item": "ae2:engineering_processor"
        },
        "C": {
          "item": "powah:steel_energized"
        }
      },
      "result": {
        "item": "ae2:drive"
      }
    }).id(aebl('storage_drive'))

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABC",
        "DBC",
        "ABC"
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "ae2:fluix_crystal"
        },
        "B": {
          "item": "create:display_board"
        },
        "C": {
          "item": "thermal:lumium_glass"
        },
        "D": {
          "item": "ae2:logic_processor"
        }
      },
      "result": {
        "item": "ae2:semi_dark_monitor"
      }
    }).id(aepa('panels_semi_dark_monitor'))
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABC",
        "DEF",
        "ABC"
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "ae2:formation_core"
        },
        "B": {
          "item": "ae2:fluix_crystal"
        },
        "C": {
          "item": "ae2:calculation_processor"
        },
        "D": {
          "item": "rftoolsbase:information_screen"
        },
        "E": {
          "item": "ae2:semi_dark_monitor"
        },
        "F": {
          "item": "ae2:logic_processor"
        }
      },
      "result": {
        "item": "ae2:terminal"
      }
    }).id(aepa('terminals'))
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "CEC"
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "create:display_board"
        },
        "B": {
          "item": "ae2:engineering_processor"
        },
        "C": {
          "item": "ae2:quartz_fiber"
        },
        "D": {
          "item": "ae2:terminal"
        },
        "E": {
          "item": "immersiveengineering:craftingtable"
        }
      },
      "result": {
        "item": "ae2:crafting_terminal"
      }
    }).id(aepa('terminals_crafting'))
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "CEC"
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "create:display_board"
        },
        "B": {
          "item": "ae2:logic_processor"
        },
        "C": {
          "item": "ae2:calculation_processor"
        },
        "D": {
          "item": "ae2:terminal"
        },
        "E": {
          "item": "immersiveengineering:craftingtable"
        }
      },
      "result": {
        "item": "ae2:pattern_encoding_terminal"
      }
    }).id(aepa('terminals_pattern_encoding'))
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "tier": 1,
      "key": {
        "A": {
          "item": "powah:steel_energized"
        },
        "B": {
          "item": "ae2:dilithium_crystal"
        },
        "C": {
          "item": "ae2:fluix_crystal"
        },
        "D": {
          "item": "powah:energizing_orb",
        }
      },
      "result": {
        "item": "ae2:charger"
      }
    }).id('ae2:network/blocks/crystal_processing_charger')
})