ServerEvents.recipes(event =>{
    event.shaped(Item.of("kubejs:photovoltaic_cell_hardened"),
    ['aaa', 'bcb', 'ded'],
    {
        a: "powah:photoelectric_pane",
        b: "powah:capacitor_hardened",
        c: "powah:steel_energized",
        d: "emendatusenigmatica:fluorite_gem",
        e: "solarflux:photovoltaic_cell_1"
    })
    event.shaped(Item.of("solarflux:photovoltaic_cell_2"),
    ['aba', 'bab', 'ded'],
    {
        d: "solarflux:mirror",
        a: "exnihilosequentia:porcelain_clay",
        b: "emendatusenigmatica:apatite_gem",
        e: "kubejs:photovoltaic_cell_hardened"
    }).id('solarflux:photovoltaic_cell_2')
    event.shaped(Item.of("kubejs:photovoltaic_cell_blazing"),
    ['aaa', 'bcb', 'ded'],
    {
        a: "solarflux:blazing_coating",
        b: "powah:capacitor_blazing",
        c: "powah:crystal_blazing",
        d: "emendatusenigmatica:tin_ingot",
        e: "solarflux:photovoltaic_cell_2"
    })
    event.shaped(Item.of("kubejs:photovoltaic_cell_niotic"),
    ['aaa', 'bcb', 'ded'],
    {
        a: "ae2:quartz_vibrant_glass",
        b: "powah:capacitor_niotic",
        c: "powah:crystal_niotic",
        d: "botania:manasteel_ingot",
        e: "kubejs:photovoltaic_cell_blazing"
    })
    event.shaped(Item.of("solarflux:photovoltaic_cell_3", 2),
    ['aba', 'bab', 'ded'],
    {
        d: "quark:blue_nether_bricks",
        a: "emendatusenigmatica:lead_crystal",
        b: "ae2:quartz_vibrant_glass",
        e: "kubejs:photovoltaic_cell_niotic"
    }).id('solarflux:photovoltaic_cell_3')
    event.shaped(Item.of("kubejs:photovoltaic_cell_spirited", 2),
    ['aaa', 'bcb', 'ded'],
    {
        a: "mekanism:structural_glass",
        b: "powah:capacitor_spirited",
        c: "powah:crystal_spirited",
        d: "emendatusenigmatica:uranium_ingot",
        e: "solarflux:photovoltaic_cell_3"
    })
    event.shaped(Item.of("kubejs:photovoltaic_cell_nitro", 2),
    ['aaa', 'bcb', 'ded'],
    {
        a: "mekanismgenerators:reactor_glass",
        b: "powah:capacitor_nitro",
        c: "powah:crystal_nitro",
        d: "emendatusenigmatica:signalum_ingot",
        e: "kubejs:photovoltaic_cell_spirited"
    })
    event.shaped(Item.of("solarflux:photovoltaic_cell_4", 2),
    ['aba', 'bab', 'ded'],
    {
        d: "create:rose_quartz_tiles",
        a: "mysticalagriculture:tertium_ingot",
        b: "mekanism:structural_glass",
        e: "kubejs:photovoltaic_cell_nitro"
    }).id('solarflux:photovoltaic_cell_4')
})