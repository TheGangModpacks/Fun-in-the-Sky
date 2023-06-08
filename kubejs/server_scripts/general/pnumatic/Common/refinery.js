ServerEvents.recipes(event =>{
    event.custom({
        type: "pneumaticcraft:refinery",
        input: {type: 'pneumaticcraft:fluid', fluid: 'kubejs:melted_bitumen', amount: 10},
        results: [{fluid: 'thermal:heavy_oil', amount: 2}, {fluid: 'pneumaticcraft:oil', amount: 4}, {fluid: 'kubejs:liquifacted_tar', amount: 2}]
    }).id('fits:refinery/pncr/bitumen_processing')
})