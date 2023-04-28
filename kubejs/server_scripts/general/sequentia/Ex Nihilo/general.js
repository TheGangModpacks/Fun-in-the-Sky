ServerEvents.recipes(event =>{
    event.smelting('kubejs:porcelain_brick', "exnihilosequentia:porcelain_clay")
    event.smelting('kubejs:cooked_apple', "minecraft:apple")
    event.smoking('kubejs:cooked_apple', "minecraft:apple")
    event.replaceInput({id: 'ars_nouveau:glyph_dampen'}, 'minecraft:nether_brick', 'kubejs:porcelain_nether_brick')
    event.replaceInput({id: 'botania:runic_altar/fire'}, 'minecraft:nether_brick', 'kubejs:porcelain_nether_brick')
})