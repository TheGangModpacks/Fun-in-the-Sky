ServerEvents.recipes(event =>{
    event.custom({type: seq_crucible,
        input: Item.of("minecraft:honeycomb").toJson(),
        amount: 75,
        fluidResult: Fluid.of("create:honey").toJson(),
        crucibleType: 'fired'
    })
    event.custom({type: seq_crucible,
        input: Item.of("minecraft:honeycomb_block").toJson(),
        amount: 675,
        fluidResult: Fluid.of("create:honey").toJson(),
        crucibleType: 'fired'
    })
})