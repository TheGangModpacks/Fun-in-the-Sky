ServerEvents.recipes(event => {
    event.remove({ id: 'botania:pure_daisy/livingwood' })
    event.remove({ id: 'botania:pure_daisy/livingrock' })

    event.recipes.botania.pure_daisy("botania:livingwood_log", "#twilightforest:logs")
    event.recipes.botania.pure_daisy("botania:livingrock", "pneumaticcraft:reinforced_stone")
})