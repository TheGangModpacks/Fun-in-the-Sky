const shaped_prefix_misc = 'fits:shaped/misc/';
ServerEvents.recipes(event => {
	event.remove({ output: 'minecraft:enchanting_table' })
	event.remove({ output: 'minecraft:tnt' })
	event.remove({ output: 'ae2:tiny_tnt' })
	event.remove({ output: 'thermal:explosive_grenade' })

	event.shaped(
		Item.of('minecraft:enchanting_table'),
		[
			' A ',
			'BDB',
			'DCD'
		],
		{
			A: 'apotheosis:scrap_tome',
			B: 'rftoolsbase:dimensionalshard',
			C: 'twilightforest:steeleaf_block',
			D: 'ironjetpacks:elite_coil'
		}
	).id(`${shaped_prefix_misc}enchantment_table`)

	event.shaped(
		Item.of('minecraft:tnt'),
		[
			'AA',
			'AA'
		],
		{ A: 'thermal:explosive_grenade' }
	).id(`${shaped_prefix_misc}tnt`)

	event.shaped(
		Item.of('thermal:explosive_grenade'),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A: 'kubejs:leaded_iron_compound',
			B: '#forge:sand',
			C: 'thermal:gunpowder_block'
		}
	).id(`${shaped_prefix_misc}thermal_grenade`)

	event.shaped(Item.of("emendatusenigmatica:iron_paxel"), ['abc', ' d ', ' d '], {
		a: "minecraft:iron_pickaxe",
		b: "minecraft:iron_axe",
		c: "minecraft:iron_shovel",
		d: "immersiveengineering:stick_treated"
	}).id('emendatusenigmatica:paxel/from_ingot/iron')
	event.replaceInput({ id: 'emendatusenigmatica:paxel/from_ingot/steel' }, 'minecraft:stick', "immersiveengineering:stick_treated")
	event.remove({ id: 'quark:building/crafting/furnaces/cobblestone_furnace' })
	event.shaped(Item.of('furnace'), ['aaa', 'a a', 'aaa'], { a: "kubejs:compressed_cobblestone_x1" }).id(`${shaped_prefix_misc}furnace`)
	event.shaped(Item.of('clickmachine:auto_clicker'), ['aaa', 'abc', 'ada'], {a: "emendatusenigmatica:signar_ingot", b: "mekanism:steel_casing", c: "create:deployer", d: "immersiveengineering:heavy_engineering"})
    .id('clickmachine:auto_clicker')

	event.remove({id: 'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye'})

	event.shaped('summoningrituals:altar', ['aba', 'cdc', 'eee'], {a: 'mekanism:block_refined_glowstone', b: "botania:red_petal_block", c: "mekanism:hdpe_sheet", d: "botania:alfheim_portal", e: 'botania:glimmering_livingwood'})
	.id(`${shaped_prefix_misc}summoning_altar`)

	event.shaped('quark:grate', [' a ', 'a a', ' a '], {a: 'iron_bars'}).id('quark:building/crafting/grate')
	event.shaped('waterstrainer:iron_mesh', [' a ', 'aba', ' a '], {a: 'iron_bars', b: "exnihilosequentia:iron_mesh"}).id('waterstrainer:iron_mesh')
})