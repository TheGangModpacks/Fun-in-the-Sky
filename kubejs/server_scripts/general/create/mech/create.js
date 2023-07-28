ServerEvents.recipes(event =>{
    event.recipes.createMechanicalCrafting(Item.of('create:crushing_wheel', 2),
    [' aaaaa ', 'aabbbaa', 'abbcbba', 'abcccba', 'abbcbba', 'aabbbaa', ' aaaaa '],
    {a: "create:andesite_alloy", b: "immersiveengineering:treated_wood_packaged", c: "create:brass_casing"})
    .id('create:mechanical_crafting/crushing_wheel')
})