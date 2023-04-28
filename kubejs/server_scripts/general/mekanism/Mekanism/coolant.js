ServerEvents.recipes(event =>{
    event.custom({
        type: gas_coolant,
        input: {gas: 'kubejs:monster_meka_coolant', amount: 1},
        output: {gas: 'kubejs:monster_waste', amount: 2},
        thermalEnthalpy: 35,
        conductivity: 7,
        efficiency: 7
    })
})