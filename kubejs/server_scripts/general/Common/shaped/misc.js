ServerEvents.recipes(event =>{
    event.shapeless(Item.of('dustrial_decor:cardboard'),
    ['minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper']).id('dustrial_decor:cardboard')
    event.shaped(Item.of('clickmachine:auto_clicker'), ['aaa', 'abc', 'ada'], {a: "emendatusenigmatica:signar_ingot", b: "mekanism:steel_casing", c: "create:deployer", d: "immersiveengineering:heavy_engineering"})
    .id('clickmachine:auto_clicker')
})