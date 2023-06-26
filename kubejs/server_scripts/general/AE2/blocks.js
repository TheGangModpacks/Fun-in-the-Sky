ServerEvents.recipes(event =>{
    const ae2 = (id) => `ae2:${id}`;

    event.remove({id: 'ae2:network/blocks/inscribers'})
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
      }).id('fits:basic_table/ae2/inscriber')
})

MoreJSEvents.villagerTrades( event =>{
    event.removeModdedTrades(['ae2:fluix_researcher'])
})