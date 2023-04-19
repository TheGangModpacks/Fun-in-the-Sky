//priority: 11
ServerEvents.tags('item', event => {
    //Tags for adding to items that will be disabled and hidden from REI.
    const tag = "custom:disabled";
    event.add(tag, "mekanismtools:steel_pickaxe");
    event.add(tag, "mekanismtools:steel_axe");
    event.add(tag, "mekanismtools:steel_hoe");
    event.add(tag, "mekanismtools:steel_shovel");
    event.add(tag, "mekanismtools:steel_sword");
    event.add(tag, "mekanismtools:steel_paxel");
    event.add(tag, "immersiveengineering:pickaxe_steel");
    event.add(tag, "immersiveengineering:axe_steel");
    event.add(tag, "immersiveengineering:hoe_steel");
    event.add(tag, "immersiveengineering:shovel_steel");
    event.add(tag, "immersiveengineering:sword_steel");
    event.add(tag, "thermal:device_tree_extractor");
    event.add(tag, '/^powah:.*_starter/');
    event.add(tag, '/^powah:.*solar/')
    event.add(tag, "createaddition:connector")
    event.add(tag, "createaddition:gold_spool")
})
ServerEvents.recipes(event =>{
    //Recipes that are broken, which can likely be fixed in the future.
    event.remove({ type: 'exnihilosequentia:heat'})
})