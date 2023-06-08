ServerEvents.recipes(event =>{
	//General
	event.remove({ output: 'immersiveengineering:hammer' })
	event.shaped( Item.of('immersiveengineering:hammer'), [
	' AB',
	' CA',
	'C  ' ],
	{
		A: 'kubejs:leaded_iron',
		B: 'minecraft:string',
		C: 'emendatusenigmatica:nickel_rod'
	})
	
	//Wires, Connectors, Etc
	event.shaped(Item.of('immersiveengineering:connector_lv', 3), [' a ', 'bab', 'bab'], {a: "emendatusenigmatica:constantan_ingot", b: "immersiveengineering:insulating_glass"})
	.id('immersiveengineering:crafting/connector_lv')
	event.shaped(Item.of('immersiveengineering:connector_lv_relay', 5), ['   ', ' a ', 'bab'], {a: "emendatusenigmatica:constantan_ingot", b: "immersiveengineering:insulating_glass"})
	.id('immersiveengineering:crafting/connector_lv_relay')
	event.shaped(Item.of('immersiveengineering:light_engineering', 2), ['aba', 'bcb', 'aba'], {a: "immersiveengineering:sheetmetal_iron",
	b: "immersiveengineering:component_iron", c: "emendatusenigmatica:nickel_ingot"}).id('immersiveengineering:crafting/light_engineering')
	event.shaped(Item.of('immersiveengineering:rs_engineering', 2), ['aba', 'bcb', 'aba'], {a: "immersiveengineering:sheetmetal_iron",
	b: "create:rose_quartz", c: "kubejs:leaded_iron"}).id('immersiveengineering:crafting/rs_engineering')
	event.shaped(Item.of(Item.of('immersiveengineering:heavy_engineering', 2)), ['aba', 'bcb', 'aba'], {a: "immersiveengineering:sheetmetal_steel",
	b: "immersiveengineering:component_steel", c: "emendatusenigmatica:invar_ingot"}).id('immersiveengineering:crafting/heavy_engineering')
	event.shaped(Item.of('immersiveengineering:dynamo'), ['   ', 'aba', 'cdc'], {a: 'kubejs:leaded_iron_compound', b: 'immersiveengineering:component_iron',
	c: 'kubejs:leaded_iron', d: 'immersiveengineering:coil_lv'}).id('immersiveengineering:crafting/dynamo')
	//Blueprints
	event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'),
	['aaa', 'bbb', 'ccc'], {a: "emendatusenigmatica:copper_plate", b: "minecraft:blue_dye", c: "dustrial_decor:cardboard"})
	.id('immersiveengineering:crafting/blueprint_molds')
	event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),
	['aaa', 'bbb', 'ccc'], {a: 'emendatusenigmatica:steel_rod', b: 'minecraft:blue_dye', c: 'dustrial_decor:cardboard'})
	event.replaceInput({id: 'immersiveengineering:crafting/blueprint_bannerpatterns'}, 'minecraft:paper', 'dustrial_decor:cardboard')
	event.replaceInput({id: 'immersiveengineering:crafting/blueprint_components'}, '#forge:ingots', "kubejs:leaded_iron")
	event.replaceInput({id: 'immersiveengineering:crafting/blueprint_components'}, 'minecraft:paper', 'dustrial_decor:cardboard')
	event.replaceInput({id: 'immersiveengineering:crafting/blueprint_bullets'}, 'minecraft:paper', 'dustrial_decor:cardboard')
	event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'),
	['abc', 'ddd', 'eee'], {a: "immersiveengineering:silver", b: "immersiveengineering:casull", c: "immersiveengineering:armor_piercing",
	d: "emendatusenigmatica:salt_gem", e: "dustrial_decor:cardboard"}).id('immersiveengineering:crafting/blueprint_special')
	//General Replace
	event.replaceInput({id: 'immersiveengineering:crafting/wirecutter'}, 'minecraft:iron_ingot', 'emendatusenigmatica:steel_ingot')
	event.replaceInput({id: 'immersiveengineering:crafting/workbench'}, 'minecraft:iron_ingot', 'kubejs:leaded_iron')
	event.replaceInput({id: 'immersiveengineering:crafting/windmill'}, 'minecraft:iron_ingot', 'kubejs:leaded_iron')
	event.replaceInput({id: 'immersiveengineering:crafting/coil_lv'}, 'minecraft:iron_ingot', 'kubejs:leaded_iron')
	event.replaceInput({id: 'immersiveengineering:crafting/conveyor_basic'}, 'minecraft:iron_ingot', 'kubejs:leaded_iron')
	//Alloy Kiln
	event.replaceInput({id: 'immersiveengineering:crafting/alloybrick'}, 'minecraft:brick', 'emendatusenigmatica:steel_ingot')
	event.replaceInput({id: 'immersiveengineering:crafting/alloybrick'}, '#forge:sandstone', 'create:cut_granite_bricks')
	//Coke
	event.replaceInput({id: 'immersiveengineering:crafting/cokebrick'}, 'minecraft:clay_ball', 'exnihilosequentia:porcelain_clay')
	event.replaceInput({id: 'immersiveengineering:crafting/cokebrick'}, 'minecraft:brick', 'kubejs:porcelain_brick')
	event.replaceInput({id: 'immersiveengineering:crafting/cokebrick'}, '#forge:sandstone', 'create:cut_dripstone_bricks')
	//Blast
	event.replaceInput({id: 'immersiveengineering:crafting/blastbrick'}, 'minecraft:brick', 'kubejs:leaded_iron')
	event.replaceInput({id: 'immersiveengineering:crafting/blastbrick'}, 'minecraft:nether_brick', 'kubejs:porcelain_nether_brick')
	//Tools / Upgrades
	event.replaceInput({id: 'immersiveengineering:crafting/toolupgrade_drill_waterproof'}, 'minecraft:blue_dye', 'pneumaticcraft:plastic')
	event.shaped(Item.of('immersiveengineering:toolupgrade_drill_lube'), [' a ', 'aba', ' ac'], {a: "immersiveengineering:plate_duroplast",
	b: "immersiveengineering:plantoil_bucket", c: "immersiveengineering:fluid_pipe"}).id('immersiveengineering:crafting/toolupgrade_drill_lube')
	event.replaceInput({id: 'immersiveengineering:crafting/toolupgrade_drill_capacity'}, 'minecraft:red_dye', 'pneumaticcraft:plastic')
	event.remove({id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
	event.replaceInput({id: 'immersiveengineering:crafting/fluid_pipe'}, '#forge:plates/iron', "emendatusenigmatica:steel_plate")
	event.replaceInput({id: 'immersiveengineering:crafting/fluid_pump'}, '#forge:plates/iron', "emendatusenigmatica:steel_plate")
	event.remove({id: 'immersiveengineering:crafting/treated_wood_horizontal'})






})