const fluid_extractor_prefix = 'fits:fluid_extractor/latex/';
ServerEvents.recipes(event =>{
    event.remove({type: 'industrialforegoing:fluid_extractor'})
    event.custom({
        type: fluid_extractor,
        breakChance: 0.01,
        defaultRecipe: true,
        input: {"tag": "twilightforest:logs"},
        output: "{Amount:4,FluidName:\"industrialforegoing:latex\"}",
        result: "minecraft:air"
    }).id(`${fluid_extractor_prefix}tf_logs`)
}) 