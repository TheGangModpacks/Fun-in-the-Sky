const shaped_prefix_vanilla = 'fits:shaped/vanilla/';
ServerEvents.recipes(event =>{
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
	).id(`${shaped_prefix_vanilla}enchantment_table`)
	event.shaped(
	Item.of('minecraft:tnt'),
	[
	'AA',
	'AA'
	],
	{ A: 'thermal:explosive_grenade' }
	).id(`${shaped_prefix_vanilla}tnt`)
	event.shaped(
	Item.of('thermal:explosive_grenade'),
	[
	'ABA',
	'BCB',
	'ABA'
	],
	{ A: 'kubejs:leaded_iron_compound',
	  B: '#forge:sand',
	  C: 'thermal:gunpowder_block' }
	).id(`${shaped_prefix_vanilla}thermal_grenade`)
	event.shaped(Item.of("emendatusenigmatica:iron_paxel"), ['abc', ' d ', ' d '], {
		a: "minecraft:iron_pickaxe",
		b: "minecraft:iron_axe",
		c: "minecraft:iron_shovel",
		d: "immersiveengineering:stick_treated"
	}).id('emendatusenigmatica:paxel/from_ingot/iron')
	event.replaceInput({id: 'emendatusenigmatica:paxel/from_ingot/steel'}, 'minecraft:stick', "immersiveengineering:stick_treated")
	event.remove({id: 'quark:building/crafting/furnaces/cobblestone_furnace'})
	event.shaped(Item.of('furnace'), ['aaa', 'a a', 'aaa'], {a: "kubejs:compressed_cobblestone_x1"}).id(`${shaped_prefix_vanilla}furnace`)
	event.remove({output: 'smithing_table'})
	event.shaped(Item.of('smithing_table'), ['aaa', 'bcb', 'bdb'], {a: "minecraft:netherite_ingot", b: "minecraft:polished_blackstone", c: "immersiveengineering:craftingtable", d: "#forge:treated_wood"})
	.id(`${shaped_prefix_vanilla}smithing_table`)
})