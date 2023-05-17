ServerEvents.recipes(event =>{
    event.custom({
        type: nucleosynthesizer,
        duration: 2000,
        gasInput: {amount: 5, gas: 'mekanism:antimatter'},
        itemInput: {ingredient: {item: "emendatusenigmatica:trio_exopherilium_ingot"}},
        output: {item: "mekanism:pellet_antimatter"}
    }).id('fits:mekanism/common/nucleosynthesizer/trio/to/anitmatter')
})