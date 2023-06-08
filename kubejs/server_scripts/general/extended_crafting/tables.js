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
          "A": {
            "item": "extendedcrafting:black_iron_block"
          },
          "B": {
            "item": "extendedcrafting:advanced_catalyst"
          },
          "C": {
            "item": "extendedcrafting:basic_table"
          },
          "D": {
            "item": "extendedcrafting:frame"
          },
          "E": {
            "item": "emendatusenigmatica:lumium_block"
          },
          "F": {
            "item": "pneumaticcraft:compressed_iron_block"
          }
        },
        "result": {
          "item": ext('advanced_table')
        }
    }).id('fits:shaped/ext/advanced_table')
})