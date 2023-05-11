ServerEvents.recipes(event =>{
    event.custom({
        type: chem_infuser,
        leftInput: {amount: 100, gas: 'mekanism:brine'},
        rightInput: {amount: 20, gas: 'mekanism:water_vapor'},
        output: {amount: 50, gas: 'kubejs:sodium_hydroxide'}
    })
})