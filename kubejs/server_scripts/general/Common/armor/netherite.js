ServerEvents.recipes(event =>{
    event.replaceInput({id: 'minecraft:netherite_helmet_smithing'}, 'netherite_ingot', 'netherite_block')
    event.replaceInput({id: 'minecraft:netherite_chestplate_smithing'}, 'netherite_ingot', 'netherite_block')
    event.replaceInput({id: 'minecraft:netherite_leggings_smithing'}, 'netherite_ingot', 'netherite_block')
    event.replaceInput({id: 'minecraft:netherite_boots_smithing'}, 'netherite_ingot', 'netherite_block')
})