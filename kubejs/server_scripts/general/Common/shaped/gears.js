ServerEvents.recipes(event => {
    event.shaped('emendatusenigmatica:manasteel_gear', [
        ' M ',
        'MIM',
        ' M '
    ], {
        M: 'botania:manasteel_ingot',
        I: '#forge:nuggets/iron'
    })
    event.shaped('emendatusenigmatica:elementium_gear', [
        ' E ',
        'EIE',
        ' E '
    ], {
        E: 'botania:elementium_ingot',
        I: '#forge:nuggets/iron'
    })
    event.shaped('emendatusenigmatica:terrasteel_gear', [
        ' T ',
        'TIT',
        ' T '
    ], {
        T: 'botania:terrasteel_ingot',
        I: '#forge:nuggets/iron'
    })
})