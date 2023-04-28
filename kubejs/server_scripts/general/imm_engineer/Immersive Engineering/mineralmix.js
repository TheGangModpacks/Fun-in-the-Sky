ServerEvents.recipes(event =>{
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.75, output: Item.of('copper_ore')},
            {chance: 0.25, output: Item.of('deepslate_gold_ore')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 30
    }).id('immersiveengineering:mineral/auricupride')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.70, output: Item.of('prismarine')},
            {chance: 0.30, output: Item.of('deepslate_emerald_ore')},
            {chance: 0.30, output: Item.of('emendatusenigmatica:apatite_stone_ore')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 5
    }).id('immersiveengineering:mineral/beryl')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.80, output: Item.of('coal_ore')},
            {chance: 0.38, output: Item.of('emendatusenigmatica:sulfur_dust')},
            {chance: 0.20, output: Item.of("thermal:bitumen")}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 25
    }).id('immersiveengineering:mineral/bituminous_coal')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.90, output: Item.of('emendatusenigmatica:tin_deepslate_ore')},
            {chance: 0.13, output: Item.of('emendatusenigmatica:silver_stone_ore')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 20
    }).id('immersiveengineering:mineral/cassiterite')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.45, output: Item.of('deepslate_iron_ore')},
            {chance: 0.13, output: Item.of('deepslate_copper_ore')},
            {chance: 0.15, output: Item.of('copper_ore')},
            {chance: 0.13, output: Item.of('emendatusenigmatica:sulfur_dust')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 20
    }).id('immersiveengineering:mineral/chalcopyrite')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.45, output: Item.of('deepslate_redstone_ore')},
            {chance: 0.13, output: Item.of('emendatusenigmatica:cinnabar_dust')},
            {chance: 0.45, output: Item.of('exnihilosequentia:lead_pieces')},
            {chance: 0.30, output: Item.of('emendatusenigmatica:sulfur_dust')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 15
    }).id('immersiveengineering:mineral/cinnabar')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.40, output: Item.of('emendatusenigmatica:lead_deepslate_ore')},
            {chance: 0.13, output: Item.of('emendatusenigmatica:silver_deepslate_ore')},
            {chance: 0.10, output: Item.of('emendatusenigmatica:sulfur_dust')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 15
    }).id('immersiveengineering:mineral/galena')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.30, output: Item.of('granite')},
            {chance: 0.30, output: Item.of('andesite')},
            {chance: 0.30, output: Item.of('diorite')},
            {chance: 0.20, output: Item.of('obsidian')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 25
    }).id('immersiveengineering:mineral/igneous_rock')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.90, output: Item.of('emendatusenigmatica:aluminum_deepslate_ore')},
            {chance: 0.30, output: Item.of('deepslate_iron_ore')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 20
    }).id('immersiveengineering:mineral/laterite')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.10, output: Item.of('emendatusenigmatica:sulfur_dust')},
            {chance: 0.60, output: Item.of('deepslate_iron_ore')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 20
    }).id('immersiveengineering:mineral/pentlandite')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.70, output: Item.of('clay')},
            {chance: 0.30, output: Item.of('sand')},
            {chance: 0.20, output: Item.of('gravel')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('coarse_dirt')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 25
    }).id('immersiveengineering:mineral/silt')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["twilightforest:twilight_forest"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.70, output: Item.of("emendatusenigmatica:zinc_deepslate_ore")},
            {chance: 0.30, output: Item.of('emendatusenigmatica:sulfur_dust')},
            {chance: 0.20, output: Item.of("deepslate_iron_ore")},
            {chance: 0.05, output: Item.of('gunpowder')}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 25
    }).id('createaddition:compat/immersiveengineering/sphalerite')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["ad_astra:mercury"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.40, output: Item.of("powah:uraninite_ore_poor")},
            {chance: 0.30, output: Item.of("powah:uraninite_ore")},
            {chance: 0.20, output: Item.of("powah:uraninite_ore_dense")},
            {chance: 0.05, output: Item.of("emendatusenigmatica:lead_stone_ore")}
        ],
        spoils:[
            {chance: 0.2, output: Item.of('gravel')},
            {chance: 0.4, output: Item.of('cobblestone')},
            {chance: 0.6, output: Item.of('cobbled_deepslate')}
        ],
        weight: 10
    }).id('immersiveengineering:mineral/uraninite')
    event.custom({
        type: "immersiveengineering:mineral_mix",
        dimensions: ["minecraft:the_nether"],
        fail_chance: 0.1,
        ores:[
            {chance: 0.60, output: Item.of('nether_quartz_ore')},
            {chance: 0.20, output: Item.of('nether_gold_ore')},
            {chance: 0.20, output: Item.of('emendatusenigmatica:sulfur_dust')}
        ],
        spoils:[
            {chance: 0.5, output: Item.of('netherrack')},
            {chance: 0.3, output: Item.of('basalt')},
            {chance: 0.2, output: Item.of('gravel')}
        ],
        weight: 10
    }).id('immersiveengineering:mineral/mephitic_quarzite')
})