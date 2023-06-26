ServerEvents.recipes(event => {
    
    event.remove({ output: 'botania:alfheim_portal' })

    event.recipes.botania.runic_altar('botania:alfheim_portal',
        [
            'botania:terrasteel_nugget',
            'botania:terrasteel_nugget',
            'botania:terrasteel_nugget',
            'botania:glimmering_livingwood'
        ], 5200)

   
})