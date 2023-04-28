ServerEvents.recipes(event =>{
    event.remove({output: "create:brass_casing"})
    event.recipes.createDeploying('create:brass_casing', ['#forge:treated_wood', 'emendatusenigmatica:brass_plate'])
    event.custom({type: interact,
    item_in: Item.of('emendatusenigmatica:brass_plate'),
    block_in: Ingredient.of('#forge:treated_wood'),
    post:[{type: 'place', block: 'create:brass_casing'}, {type: 'execute', command: 'playsound minecraft:block.copper.place block @p', hide: true}]
    })
    event.replaceInput({output: 'create:andesite_casing'}, '#forge:stripped_logs', '#forge:treated_wood')
    event.remove({id: 'create:item_application/andesite_casing_from_wood'})
    event.remove({id: 'create:item_application/andesite_casing_from_wood_using_deployer'})
})