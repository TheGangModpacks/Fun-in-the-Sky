ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:source_gem' })
    
    //event.recipes.ars_nouveau.imbuement(
    //    "minecraft:sand", // input item
    //    "minecraft:tnt", // output
    //    1000, // source cost
    //    [
    //        "minecraft:gunpowder"
    //    ] // pedestal items // optional
    //)
    
    event.recipes.ars_nouveau.imbuement(
        "emendatusenigmatica:lead_crystal", // input item
        "ars_nouveau:source_gem", // output
        500 // source cost
    )

})