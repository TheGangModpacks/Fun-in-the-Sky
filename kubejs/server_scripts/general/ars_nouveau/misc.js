ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:magebloom_fiber' })

    // it goes output, input, mana cost, catalyst block under mana pool - really weird order
    event.recipes.botania.mana_infusion('4x ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom', 3000, 'ars_nouveau:arcane_core')

})    