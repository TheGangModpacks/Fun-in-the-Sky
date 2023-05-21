ServerEvents.recipes(event => {

    event.remove({ id: 'immersiveengineering:crafting/stick_steel' })
    event.remove({ id: 'immersiveengineering:crafting/stick_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/stick_iron' })
    event.remove({ id: 'ad_astra:recipes/iron_rod' })

    event.shaped('emendatusenigmatica:manasteel_rod', [
        'M',
        'M'
    ], {
        M: 'botania:manasteel_ingot'
    })
    event.shaped('emendatusenigmatica:elementium_rod', [
        'E',
        'E'
    ], {
        E: 'botania:elementium_ingot'
    })
    event.shaped('emendatusenigmatica:terrasteel_rod', [
        'T',
        'T'
    ], {
        T: 'botania:terrasteel_ingot'
    })
})