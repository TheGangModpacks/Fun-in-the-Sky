ServerEvents.recipes(event =>{
    event.shaped(ext('basic_table'), ['aea', 'cdc', 'cbc'], {a: ext('black_iron_block'), b: 'pneumaticcraft:compressed_iron_block', c: "immersiveengineering:craftingtable", d: ext('frame'),
    e: ext('basic_catalyst')}).id('fits:shaped/ext/basic_table')
    
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "EFE"
        ],
        "key": {
          "A": {"item": "extendedcrafting:black_iron_block"},
          "B": {"item": "extendedcrafting:advanced_catalyst"},
          "C": {"item": "extendedcrafting:basic_table"},
          "D": {"item": "extendedcrafting:frame"},
          "E": {"item": "emendatusenigmatica:lumium_block"},
          "F": {"item": "pneumaticcraft:compressed_iron_block"}
        },
        "result": {"item": ext('advanced_table')}
    }).id('fits:basic_table/ext/advanced_table')

    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A ",
        "BCB",
        "CDC"
      ],
      "tier": 1,
      "key": {
        "A": {"item": "emendatusenigmatica:elementium_rod"},
        "B": {"item": "emendatusenigmatica:diamond_gear"},
        "C": {"item": "extendedcrafting:ender_ingot"},
        "D": {"item": "extendedcrafting:ender_ingot_block"
        }
      },
      "result": {"item": "extendedcrafting:ender_alternator", count: 2}
    }).id('fits:basic_table/ext/alternator')
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ACCCA",
        "ADEDA",
        "FDDDF",
        "FFFFF"
      ],
      "tier": 2,
      "key": {
        "A": {"item": "minecraft:ender_eye"},
        "B": {"item": "extendedcrafting:ender_catalyst"},
        "C": {"item": "powah:lens_of_ender"},
        "D": {"item": "extendedcrafting:ender_alternator"},
        "E": {"item": "extendedcrafting:advanced_table"},
        "F": {"item": "extendedcrafting:ender_ingot_block"}
      },
      "result": {"item": "extendedcrafting:ender_crafter"}
    }).id('fits:advanced_table/ext/ender_crafter')
})