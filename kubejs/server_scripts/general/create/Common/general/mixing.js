ServerEvents.recipes(event =>{
    event.recipes.createMixing(Item.of('create:andesite_alloy', 3),
    ['emendatusenigmatica:zinc_ingot', 'emendatusenigmatica:zinc_ingot', 'pneumaticcraft:ingot_iron_compressed']).heated()
})