ServerEvents.recipes(event => {
    event.remove({ output: 'botania:mana_pylon' })
    event.remove({ output: 'botania:natura_pylon' })
    event.remove({ output: 'botania:gaia_pylon' })

    event.recipes.botania.runic_altar('botania:mana_pylon',
        [
            'apotheosis:crystal_seashelf',
            'emendatusenigmatica:manasteel_plate',
            'emendatusenigmatica:manasteel_plate',
            'emendatusenigmatica:manasteel_gear',
            'emendatusenigmatica:manasteel_gear',
            'botania:mana_diamond_block',
            'emendatusenigmatica:gold_plate',
            'emendatusenigmatica:gold_plate'
        ], 5200)

    event.recipes.botania.runic_altar('botania:natura_pylon',
        [
            'botania:mana_pylon',
            'apotheosis:heart_seashelf',
            'botania:terrasteel_nugget',
            'botania:terrasteel_nugget',
            'botania:terrasteel_nugget',
            'botania:glimmering_livingwood_log',
            'botania:glimmering_livingwood_log',
            'botania:glimmering_livingwood_log',
            'botania:glimmering_livingwood_log',
        ], 10400)

    event.recipes.botania.runic_altar('botania:gaia_pylon',
        [
            'botania:mana_pylon',
            'apotheosis:pearl_endshelf',
            'emendatusenigmatica:elementium_plate',
            'emendatusenigmatica:elementium_plate',
            'emendatusenigmatica:elementium_gear',
            'emendatusenigmatica:elementium_gear',
            'botania:dragonstone_block',
            'quark:pink_framed_glass'
        ], 10400)

    /*event.recipes.botania.runic_altar('botanicadds:gaiasteel_pylon',
        [
            'botania:natura_pylon',
            'apotheosis:rectifier_t3',
            'botanicadds:gaiasteel_nugget',
            'botanicadds:gaiasteel_nugget',
            'botania:glimmering_dreamwood',
            'botania:glimmering_dreamwood',
        ], 20800).id('botanicadds:gaiasteel_pylon')*/
})