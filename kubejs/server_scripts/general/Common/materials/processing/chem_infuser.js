const c_infuser_prefix = 'fits:chemicals/processing/infuser/';
ServerEvents.recipes(event =>{

    event.custom({
        type: chem_infuser,
        leftInput: {amount: 1, gas: "mekanism:lithium"},
        output: {amount: 1, gas: "kubejs:lithium_hydroxide"},
        rightInput: {amount: 1, gas: "kubejs:calcium_hydroxide"}
    }).id(`${c_infuser_prefix}lithium_hydroxide`)

    event.custom({
        type: chem_infuser,
        leftInput: {amount: 1, gas: "mekanism:hydrogen"},
        output: {amount: 1, gas: "kubejs:lithium_peroxide"},
        rightInput: {amount: 1, gas: "kubejs:lithium_hydroxide"}
    }).id(`${c_infuser_prefix}lithium_peroxide`)
})