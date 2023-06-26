//priority: 1
ServerEvents.recipes(event =>{
    event.remove({id: 'refinedstorage:quartz_enriched_iron'})
    event.recipes.create.mixing(['refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron'], ["botania:quartz_sunny", 'botania:quartz_sunny', "botania:quartz_sunny", "kubejs:leaded_iron"])
    .id('fits:mixing/refined_storage/quartz_enriched_iron').heated()

    event.remove({id: 'refinedstorage:processor_binding'})
    event.recipes.create.compacting(['refinedstorage:processor_binding', 'refinedstorage:processor_binding', 'refinedstorage:processor_binding', 'refinedstorage:processor_binding'],
    ['immersiveengineering:hemp_fiber', 'immersiveengineering:hemp_fiber', 'immersiveengineering:hemp_fiber', Fluid.of('pneumaticcraft:plastic', 100)]).id('fits:mixing/refined_storage/processor_binding')

    event.remove({id: 'refinedstorage:machine_casing'})
    event.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": [
              "ABBBA",
              "BACAB",
              "BCCCB",
              "BACAB",
              "ABBBA"
            ],
            "key": {
              "A": {"item": "create:cut_scorchia_bricks"},
              "B": {"item": "refinedstorage:quartz_enriched_iron"},
              "C": {"item": "immersiveengineering:heavy_engineering"}
            },
            "result": {"item": "refinedstorage:machine_casing"}
    }).id('fits:advanced_table/refined_storage/machine_casing')
    
    event.remove({id: 'refinedstorage:pattern'})
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          " A ",
          "ABA",
          " A "
        ],
        "key": {
          "A": {"item": "refinedstorage:quartz_enriched_iron"},
          "B": {"item": "refinedstorage:construction_core"}
        },
        "result": {
          "item": "refinedstorage:pattern", "count": 3
        }
      }).id('fits:ender_crafting/refined_storage/pattern')
})