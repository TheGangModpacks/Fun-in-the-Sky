//priority: 1
ServerEvents.recipes(event =>{

    event.replaceInput({id: 'refinedstorage:cable'}, '#forge:glass', 'tinted_glass')

    event.remove({ output: 'refinedstorage:controller' })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABAA",
          "ACDCA",
          "BDEDB",
          "ACDCA",
          "AABAA"
        ],
        "tier": 2,
        "key": {
          "A": {"item": "emendatusenigmatica:black_iron_plate"},
          "B": {"item": "extendedcrafting:ender_component"},
          "C": {"item": "refinedstorage:advanced_processor"},
          "D": {"item": "refinedstorage:improved_processor"},
          "E": {"item": "refinedstorage:machine_casing"}
        },
        "result": {"item": "refinedstorage:controller"}
      }).id('fits:advanced_table/refined_storage/controller')

      event.remove({id: 'refinedstorage:grid'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABC",
          "DEC",
          "ABC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "refinedstorage:quartz_enriched_iron"},
          "B": {"item": "refinedstorage:improved_processor"},
          "C": {"item": "thermal:lumium_glass"},
          "D": {"item": "refinedstorage:construction_core"},
          "E": {"item": "refinedstorage:machine_casing"}
        },
        "result": {
          "item": "refinedstorage:grid"
        }
      }).id('fits:basic_table/refined_storage/grid')

      event.remove({id: 'refinedstorage:fluid_grid'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABC",
          "DEC",
          "ABC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "refinedstorage:construction_core"},
          "B": {"item": "refinedstorage:improved_processor"},
          "C": {"item": "thermal:lumium_glass"},
          "D": {"item": "pneumaticcraft:pressure_gauge"},
          "E": {"item": "refinedstorage:grid"}
        },
        "result": {
          "item": "refinedstorage:fluid_grid"
        }
      }).id('fits:basic_table/refined_storage/fluid_grid')

      event.remove({id: 'refinedstorage:crafting_grid'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABC",
          "DEC",
          "ABC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "refinedstorage:advanced_processor"},
          "B": {"item": "refinedstorage:improved_processor"},
          "C": {"item": "thermal:lumium_glass"},
          "D": {"item": "immersiveengineering:craftingtable"},
          "E": {"item": "refinedstorage:grid"}
        },
        "result": {
          "item": "refinedstorage:crafting_grid"
        }
      }).id('fits:basic_table/refined_storage/crafting_grid')

      event.remove({id: 'refinedstorage:disk_drive'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA",
          "BBCBB",
          "BDEDB",
          "BBCBB",
          "AAAAA"
        ],
        "tier": 2,
        "key": {
          "A": {"item": "emendatusenigmatica:black_iron_plate"},
          "B": {"item": "refinedstorage:quartz_enriched_iron"},
          "C": {"item": "refinedstorage:improved_processor"},
          "D": {"item": "refinedstorage:advanced_processor"},
          "E": {"item": "refinedstorage:machine_casing"}
        },
        "result": {
          "item": "refinedstorage:disk_drive"
        }
      }).id('fits:advanced_table/refined_storage/disk_drive')

      event.remove({id: 'refinedstorage:disk_manipulator'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDE",
          "ABA"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "refinedstorage:quartz_enriched_iron"},
          "B": {"item": "refinedstorage:storage_housing"},
          "C": {"item": "refinedstorage:destruction_core"},
          "D": {"item": "refinedstorage:machine_casing"},
          "E": {"item": "refinedstorage:construction_core"}
        },
        "result": {
          "item": "refinedstorage:disk_manipulator"
        }
      }).id('fits:basic_table/refined_storage/manipulator')

      event.remove({id: 'refinedstorage:crafter'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "CEC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "refinedstorage:construction_core"},
          "B": {"item": "extendedcrafting:ender_catalyst"},
          "C": {"item": "refinedstorage:quartz_enriched_iron"},
          "D": {"item": "refinedstorage:machine_casing"},
          "E": {"item": "immersiveengineering:craftingtable"}
        },
        "result": {
          "item": "refinedstorage:crafter"
        }
      }).id('fits:basic_table/refined_storage/crafter')

      event.remove({id: 'extrastorage:iron_crafter'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "CEC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "refinedstorage:advanced_processor"},
          "B": {"item": "extendedcrafting:ender_catalyst"},
          "C": {"item": "minecraft:iron_block"},
          "D": {"item": "refinedstorage:crafter"},
          "E": {"item": "create:item_vault"}
        },
        "result": {
          "item": "extrastorage:iron_crafter"
        }
      }).id('fits:basic_table/extrastorage/iron_crafter')

      event.remove({id: 'extrastorage:gold_crafter'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "CEC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "extrastorage:neural_processor"},
          "B": {"item": "extendedcrafting:ender_catalyst"},
          "C": {"item": "minecraft:gold_block"},
          "D": {"item": "extrastorage:iron_crafter"},
          "E": {"item": "create:item_vault"}
        },
        "result": {
          "item": "extrastorage:gold_crafter"
        }
      }).id('fits:basic_table/extrastorage/gold_crafter')

      event.remove({id: 'extrastorage:diamond_crafter'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "CEC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "extrastorage:neural_processor"},
          "B": {"item": "extendedcrafting:ender_catalyst"},
          "C": {"item": "minecraft:diamond_block"},
          "D": {"item": "extrastorage:gold_crafter"},
          "E": {"item": "create:item_vault"}
        },
        "result": {
          "item": "extrastorage:diamond_crafter"
        }
      }).id('fits:basic/_table/extrastorage/diamond_crafter')

      event.remove({id: 'extrastorage:netherite_crafter'})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "CEC"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "extrastorage:neural_processor"},
          "B": {"item": "extendedcrafting:enhanced_ender_catalyst"},
          "C": {"item": "minecraft:netherite_block"},
          "D": {"item": "extrastorage:diamond_crafter"},
          "E": {"item": "create:item_vault"}
        },
        "result": {
          "item": "extrastorage:netherite_crafter"
        }
      }).id('fits:basic_table/extrastorage/netherite_crafter')
})