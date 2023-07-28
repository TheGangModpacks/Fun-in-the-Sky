//priority: 100000
ServerEvents.tags('item', event =>{
  event.add('twilightforest:decoration/mazestone', /twilightforest:(?!mazestone$)\w*mazestone\w*/)
})
ServerEvents.recipes(event =>{
  event.custom({
        type: block_explode,
        block_in: 'ae2:fluix_block',
        post: [{type: 'place', block: "*"}, {type: 'drop_item', item: 'ae2:mysterious_cube'}],
        hide_in_viewer: true
    }).id('fits:lightning/ae2/mysterious_cube')

    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            bottom: {
              item: "ae2:printed_silicon"
            },
            middle: {
              item: "extendedcrafting:luminessence"
            },
            top: {
              item: "ae2:printed_fusion_processor"
            }
          },
          mode: "press",
          result: {
            item: "ae2:fusion_processor"
          }
    }).id('ae2:inscriber/fusion_processor')
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            bottom: {
              item: "ae2:printed_silicon"
            },
            middle: {
              item: "ae2:fluix_crystal"
            },
            top: {
              item: "ae2:fusion_processor_press"
            }
          },
          mode: "press",
          result: {
            item: "ae2:printed_fusion_processor"
          }
    }).id('ae2:inscriber/fusion_processor_print')
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            middle: {
              item: "minecraft:iron_block"
            },
            top: {
              item: "ae2:fusion_processor_press"
            }
          },
          mode: "press",
          result: {
            item: "ae2:fusion_processor_press"
          }
    }).id('ae2:inscriber/fusion_processor_press')

})