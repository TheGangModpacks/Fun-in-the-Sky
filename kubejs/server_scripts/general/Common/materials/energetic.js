ServerEvents.recipes(recipe =>{
    recipe.recipes.create.compacting([Fluid.of('kubejs:energetic_substance', 3)], [Fluid.of('thermal:resin', 1), Fluid.of('pneumaticcraft:etching_acid', 1), Fluid.of('thermal:heavy_oil', 2),
    Fluid.of('thermal:redstone', 1), Fluid.of('thermal:glowstone', 1)]).id('fits:compacting/fits/energetic_substance')
})