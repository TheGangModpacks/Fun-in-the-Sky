let ee = (id) => `emendatusenigmatica:${id}`
ServerEvents.recipes(event =>{
    event.custom({
        type: mek_crusher,
        input:{
            ingredient: Item.of('mekanism:clump_osmium')
        },
        output: Item.of('emendatusenigmatica:osmium_dirty_dust')
    }).id(ee('dirty_dust/from_clump/osmium'))
})