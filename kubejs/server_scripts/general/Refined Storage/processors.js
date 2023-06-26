//priority: 1
ServerEvents.recipes(event =>{
	event.remove({ output: 'refinedstorage:basic_processor' })
	event.remove({ output: 'refinedstorage:construction_core' })
	event.remove({ output: 'refinedstorage:destruction_core' })
	event.remove({ output: 'refinedstorage:improved_processor' })
	event.remove({ output: 'refinedstorage:advanced_processor' })
	event.remove({ output: 'extradisks:withering_processor' })
	event.remove({ output: 'extrastorage:neural_processor' })
	event.custom({
			"type": "extendedcrafting:shaped_ender_crafter",
			"pattern": [
			  " A ",
			  "BCB",
			  " A "
			],
			"tier": 1,
			"key": {
			  "A": {"item": "refinedstorage:quartz_enriched_iron"},
			  "B": {"item": "emendatusenigmatica:steel_ingot"},
			  "C": {"item": "refinedstorage:raw_basic_processor"}
			},
			"result": {"item": "refinedstorage:basic_processor"}
	}).id('fits:ender_crafting/refined_storage/basic_processor')
	event.custom({
		"type": "extendedcrafting:shaped_ender_crafter",
		"pattern": [
		  "CAC",
		  "ABA",
		  "CAC"
		],
		"tier": 1,
		"key": {
		  "A": {"item": "minecraft:glowstone_dust"},
		  "B": {"item": "refinedstorage:basic_processor"},
		  "C": {"item": "minecraft:glass_pane"}
		},
		"result": {"item": "refinedstorage:construction_core"}
}).id('fits:ender_crafting/refined_storage/construction_core')
event.custom({
	"type": "extendedcrafting:shaped_ender_crafter",
	"pattern": [
	  "CAC",
	  "ABA",
	  "CAC"
	],
	"tier": 1,
	"key": {
	  "A": {"item": "minecraft:gunpowder"},
	  "B": {"item": "refinedstorage:basic_processor"},
	  "C": {"item": "minecraft:nether_wart"}
	},
	"result": {"item": "refinedstorage:destruction_core"}
}).id('fits:ender_crafting/refined_storage/destruction_core')
	event.custom({
		"type": "extendedcrafting:shaped_ender_crafter",
		"pattern": [
		  " A ",
		  "BCB",
		  " A "
		],
		"tier": 1,
		"key": {
		  "A": {"item": "refinedstorage:quartz_enriched_iron"},
		  "B": {"item": "emendatusenigmatica:steel_ingot"},
		  "C": {"item": "refinedstorage:raw_improved_processor"}
		},
		"result": {"item": "refinedstorage:improved_processor"}
	}).id('fits:ender_crafting/refined_storage/improved_processor')
	event.custom({
		"type": "extendedcrafting:shaped_ender_crafter",
		"pattern": [
		  " A ",
		  "BCB",
		  " A "
		],
		"tier": 1,
		"key": {
		  "A": {"item": "refinedstorage:quartz_enriched_iron"},
		  "B": {"item": "emendatusenigmatica:steel_ingot"},
		  "C": {"item": "refinedstorage:raw_advanced_processor"}
		},
		"result": {"item": "refinedstorage:advanced_processor"}
	}).id('fits:ender_crafting/refined_storage/advanced_processor')
	event.custom({
		"type": "extendedcrafting:shaped_ender_crafter",
		"pattern": [
		  " AB",
		  "BCB",
		  "BA "
		],
		"tier": 1,
		"key": {
		  "A": {"item": "refinedstorage:quartz_enriched_iron"},
		  "B": {"item": "extendedcrafting:black_iron_ingot"},
		  "C": {"item": "extradisks:raw_withering_processor"}
		},
		"result": {"item": "extradisks:withering_processor"}
	}).id('fits:ender_crafting/extradisks/withering_processor')
	event.custom({
		"type": "extendedcrafting:shaped_ender_crafter",
		"pattern": [
		  " AB",
		  "BCB",
		  "BA "
		],
		"tier": 1,
		"key": {
		  "A": {"item": "refinedstorage:quartz_enriched_iron"},
		  "B": {"item": "mekanism:ingot_refined_obsidian"},
		  "C": {"item": "extrastorage:raw_neural_processor"}
		},
		"result": {"item": "extrastorage:neural_processor"}
	}).id('fits:ender_crafting/extrastorage/nural_processor')

	event.remove({id: 'extrastorage:raw_neural_processor'})
	event.custom({
		type: pressure_chamber,
		inputs: [
			{item: 'refinedstorage:raw_advanced_processor'},
			{item: 'refinedstorage:raw_improved_processor'},
			{type: 'pneumaticcraft:stacked_item', item: 'refinedstorage:processor_binding', count: 3},
			{type: 'pneumaticcraft:stacked_item', item: 'create:powdered_obsidian', count: 2},
			{type: 'pneumaticcraft:stacked_item', item: 'botania:quartz_lavender', count: 2}
		],
		pressure: 5.0,
		results: [{item: 'extrastorage:raw_neural_processor'}]
	}).id('fits:pressure_chamber/extrastorage/raw_neural_processor')
})