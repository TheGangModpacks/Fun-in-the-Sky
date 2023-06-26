ServerEvents.recipes(event =>{
    event.custom({
      "type": "pneumaticcraft:fluid_mixer",
      "fluid_output": {
        "amount": 100,
        "fluid": "kubejs:witched_beeswax"
      },
      "input1": {
        "type": "pneumaticcraft:fluid",
        "amount": 100,
        "fluid": "create:honey"
      },
      "input2": {
        "type": "pneumaticcraft:fluid",
        "amount": 75,
        "fluid": "exnihilosequentia:witch_water"
      },
      "pressure": 3.0,
      "time": 200
    }).id('fits:fluid_mixing/fits/witched_beeswax')
})