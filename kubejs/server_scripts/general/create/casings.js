ServerEvents.recipes(r =>{
    r.remove({output: 'create:andesite_casing'});
    r.remove({output: 'create:copper_casing'});
    r.remove({output: 'create:brass_casing'});

    r.shaped(Item.of('create:andesite_casing'), ['aba', 'bcb', 'aba'], {a: 'create:cut_andesite', b: '#forge:treated_wood', c: 'create:andesite_mechanism'})
    .id('fits:shaped/create/andesite_casing');

    r.recipes.create.compacting([Item.of('create:copper_casing')], [Item.of('emendatusenigmatica:copper_rod', 2), Item.of('create:copper_mechanism'), Item.of('copper_ingot', 2)])
    .id('fits:compacting/create/copper_casing');

    r.shaped(Item.of('create:brass_casing'), ['aaa', 'bcd', 'aaa'], {a: 'emendatusenigmatica:brass_plate', b: 'create:andesite_casing', c: 'create:industrial_iron_block', d: 'create:copper_casing'})
    .id('fits:shaped/create/brass_casing')
})