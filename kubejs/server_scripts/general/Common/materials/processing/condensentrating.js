const rotary_prefix = 'fits:chemicals/processing/rotary/';
ServerEvents.recipes(event =>{

    event.custom({ type: rotary_condensentrator,
        fluidInput: Fluid.of('kubejs:calcium_hydroxide_liquid').withAmount(1).toJson(),
        fluidOutput: Fluid.of('kubejs:calcium_hydroxide_liquid').withAmount(1).toJson(),
        gasInput: {amount: 1, gas: 'kubejs:calcium_hydroxide'},
        gasOutput: {amount: 1, gas: 'kubejs:calcium_hydroxide'},
    }).id(`${rotary_prefix}calcium_hydroxide`)

    event.custom({ type: rotary_condensentrator,
        fluidInput: Fluid.of('kubejs:lithium_peroxide_liquid').withAmount(1).toJson(),
        fluidOutput: Fluid.of('kubejs:lithium_peroxide_liquid').withAmount(1).toJson(),
        gasInput: {amount: 1, gas: 'kubejs:lithium_peroxide'},
        gasOutput: {amount: 1, gas: 'kubejs:lithium_peroxide'},
    }).id(`${rotary_prefix}lithium_peroxide`)
})