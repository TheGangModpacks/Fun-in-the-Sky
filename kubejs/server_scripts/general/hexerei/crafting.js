ServerEvents.recipes(event => {
    event.remove({ output: 'hexerei:mixing_cauldron' })

    event.custom({
        type: dripstone,
        source_block: 'exnihilosequentia:witch_water',
        target_block: 'cauldron',
        comment: "To create a Mixing Cauldron, you must infuse the Witchwater into a Cauldron.",
        post: [
            {type: 'place', block: 'hexerei:mixing_cauldron'},
            {type: 'execute', command: 'playsound ars_nouveau:fire_family block @p', hide: true},
            {type: 'execute', command: 'particle minecraft:angry_villager ~ ~1 ~ 1 1 1 0 20', hide: true}
        ]
    })
})