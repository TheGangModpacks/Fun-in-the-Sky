ServerEvents.recipes(event =>{
    event.remove({output: "solarflux:sp_5"})
    event.remove({output: "solarflux:sp_4"})
    event.shaped(Item.of("solarflux:sp_custom_basic", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "powah:photoelectric_pane",
        b: "solarflux:sp_3",
        c: "powah:capacitor_basic",
        d: "powah:dielectric_casing"
    })
    event.shaped(Item.of("solarflux:sp_custom_hardened", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "kubejs:photovoltaic_cell_hardened",
        b: "solarflux:sp_custom_basic",
        c: "powah:capacitor_hardened",
        d: "powah:energized_steel_block"
    })
    event.shaped(Item.of("solarflux:sp_4", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "solarflux:photovoltaic_cell_2",
        b: "solarflux:sp_custom_hardened",
        c: "minecraft:clock",
        d: "emendatusenigmatica:steel_block"
    }).id('solarflux:solar_panel_4')
    event.shaped(Item.of("solarflux:sp_custom_blazing", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "kubejs:photovoltaic_cell_blazing",
        b: "solarflux:sp_4",
        c: "powah:capacitor_blazing",
        d: "powah:blazing_crystal_block"
    })
    event.shaped(Item.of("solarflux:sp_custom_niotic", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "kubejs:photovoltaic_cell_niotic",
        b: "solarflux:sp_custom_blazing",
        c: "powah:capacitor_niotic",
        d: "powah:niotic_crystal_block"
    })
    event.shaped(Item.of("solarflux:sp_5", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "solarflux:photovoltaic_cell_3",
        b: "solarflux:sp_custom_niotic",
        c: "mekanism:block_refined_glowstone",
        d: "emendatusenigmatica:cinnabar_block"
    }).id('solarflux:solar_panel_5')
    event.shaped(Item.of("solarflux:sp_custom_spirited", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "kubejs:photovoltaic_cell_spirited",
        b: "solarflux:sp_5",
        c: "powah:capacitor_spirited",
        d: "powah:spirited_crystal_block"
    })
    event.shaped(Item.of("solarflux:sp_custom_nitro", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "kubejs:photovoltaic_cell_nitro",
        b: "solarflux:sp_custom_spirited",
        c: "powah:capacitor_nitro",
        d: "powah:nitro_crystal_block"
    })
    event.shaped(Item.of("solarflux:sp_6", 2),
    ['aaa', 'bcb', 'bdb'],
    {
        a: "solarflux:photovoltaic_cell_4",
        b: "solarflux:sp_custom_nitro",
        c: "torchmaster:feral_flare_lantern",
        d: "mekanism:block_refined_obsidian"
    }).id('solarflux:solar_panel_6')
})