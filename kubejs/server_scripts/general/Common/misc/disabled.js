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
    event.add(tag, '/^exnihilosequentia:.*platinum/')
    event.add(tag, "createaddition:connector")
    event.add(tag, "createaddition:gold_spool")
    event.add(tag, "quark:sturdy_stone")
    event.add(tag, "pickletweaks:iron_paxel")
    event.add(tag, "mekanismtools:iron_paxel")
    event.add(tag, "mekanismtools:steel_paxel")
    event.add(tag, "ad_astra:hammer")
    event.add(tag, "emendatusenigmatica:enigmatic_hammer")
    event.add(tag, "extendedcrafting:black_iron_ingot")
    event.add(tag, "extendedcrafting:black_iron_block")
    event.add(tag, "extendedcrafting:black_iron_nugget")
    event.add(tag, "cobblefordays:tier_1")
})
ServerEvents.recipes(event =>{
    //Recipes that are broken, which can likely be fixed in the future.
    event.remove({ type: 'exnihilosequentia:heat'})
})