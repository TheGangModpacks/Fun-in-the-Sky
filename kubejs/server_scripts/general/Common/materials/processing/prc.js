const prc_prefix = 'fits:chemicals/processing/prc/';
ServerEvents.recipes(event =>{
    event.custom({type: prc,
    duration: 1200,
    fluidInput: {amount: 1000, fluid: "kubejs:lithium_peroxide_liquid"},
    gasInput: {amount: 1000, gas: "mekanism:sodium"},
    itemInput: {ingredient: {item: 'emendatusenigmatica:trio_exopherilium_base_dust'}},
    itemOutput: {item: "emendatusenigmatica:trio_exopherilium_ingot"}
    }).id(`${prc_prefix}trio_exopherillium_ingot`)
})