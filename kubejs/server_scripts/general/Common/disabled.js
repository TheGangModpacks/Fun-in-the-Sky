ServerEvents.tags('item', event => {
    //Tags for adding to items that will be disabled and hidden from REI.
    const tag = "custom:disabled";

    //Emendatus
    event.removeAll('forge:ingots/aluminum')
	event.removeAll('forge:ingots/steel')
	event.removeAll('forge:ingots/electrum')
	event.removeAll('forge:ingots/tin')
	event.removeAll('forge:ingots/zinc')
	event.removeAll('forge:ingots/brass')
	event.removeAll('forge:ingots/constantan')
	event.removeAll('forge:ingots/uranium')
	event.removeAll('forge:ingots/bronze')
	event.removeAll('forge:ingots/silver')
	event.removeAll('forge:ingots/signalum')
	event.removeAll('forge:ingots/enderium')
	event.removeAll('forge:ingots/lumium')
	event.removeAll('forge:ingots/lead')
	event.removeAll('forge:ingots/osmium')
	event.removeAll('forge:ingots/nickel')
	event.removeAll('forge:ingots/invar')
	event.add('forge:ingots/aluminum', 'emendatusenigmatica:aluminum_ingot')
	event.add('forge:ingots/steel', 'emendatusenigmatica:steel_ingot')
	event.add('forge:ingots/electrum', 'emendatusenigmatica:electrum_ingot')
	event.add('forge:ingots/tin', 'emendatusenigmatica:tin_ingot')
	event.add('forge:ingots/zinc', 'emendatusenigmatica:zinc_ingot')
	event.add('forge:ingots/brass', 'emendatusenigmatica:brass_ingot')
	event.add('forge:ingots/constantan', 'emendatusenigmatica:constantan_ingot')
	event.add('forge:ingots/uranium', 'emendatusenigmatica:uranium_ingot')
	event.add('forge:ingots/bronze', 'emendatusenigmatica:bronze_ingot')
	event.add('forge:ingots/silver', 'emendatusenigmatica:silver_ingot')
	event.add('forge:ingots/signalum', 'emendatusenigmatica:signalum_ingot')
	event.add('forge:ingots/enderium', 'emendatusenigmatica:enderium_ingot')
	event.add('forge:ingots/lumium', 'emendatusenigmatica:lumium_ingot')
	event.add('forge:ingots/lead', 'emendatusenigmatica:lead_ingot')
	event.add('forge:ingots/osmium', 'emendatusenigmatica:osmium_ingot')
	event.add('forge:ingots/nickel', 'emendatusenigmatica:nickel_ingot')
	event.add('forge:ingots/invar', 'emendatusenigmatica:invar_ingot')



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
})