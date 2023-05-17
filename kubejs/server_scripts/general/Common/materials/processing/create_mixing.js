const id_prefix = 'fits:materials/processing/cmix/';
ServerEvents.recipes(event =>{
    event.recipes.createMixing(["emendatusenigmatica:calcium_ingot", "emendatusenigmatica:calcium_ingot"], 
    ["emendatusenigmatica:aluminum_ingot", "emendatusenigmatica:aluminum_ingot", "create:limestone", "create:limestone", "create:limestone"]).heated().id(`${id_prefix}calcium_ingot`)
})