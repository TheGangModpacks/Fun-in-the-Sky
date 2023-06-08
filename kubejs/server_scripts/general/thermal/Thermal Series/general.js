ServerEvents.recipes(event =>{
    event.shaped(Item.of("thermal:wrench"), [' a ', ' ba', 'c  '], {a: "emendatusenigmatica:invar_ingot", b: "emendatusenigmatica:manasteel_gear", c: "emendatusenigmatica:manasteel_rod"})
    .id('thermal:tools/wrench')

    event.recipes.create.mixing(['emendatusenigmatica:lumium_dust'], ['extendedcrafting:luminessence', 'emendatusenigmatica:tin_dust', 'emendatusenigmatica:silver_dust']).id('fits:mixing/thermal/lumium')
})