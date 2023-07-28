//priority: 1
ServerEvents.recipes(event =>{
	//General Removing
	event.remove({ output: 'ae2:certus_quartz_crystal' })
	event.remove({ id:'exnihiloae:sieve/ens_cerus_quartz'})
	event.remove({ id: 'create:compat/ae2/mixing/fluix_crystal'})
	event.remove({ output: 'ae2:charged_certus_quartz_crystal', type: 'createaddition:charging'})
	event.remove({ output: 'ae2:charged_certus_quartz_crystal', type: 'exnihilosequentia:sieve'})
	//General Replace
	//Charged Certus
	event.custom({
		type: 'lychee:lightning_channeling',
		item_in: {item: 'ae2:certus_quartz_crystal'},
		post: [{type: 'drop_item', item: 'ae2:charged_certus_quartz_crystal'}]
	}).id('fits:lightning/ae2/charged_certus')
	//Certus Crystal
	event.custom({
	  "type": "pneumaticcraft:thermo_plant",
	  "exothermic": false,
	  "fluid_input": {
		"type": "pneumaticcraft:fluid",
		"amount": 100,
		"fluid": "sliceanddice:fertilizer"
	  },
	  "item_input": {
		"item": "ae2:certus_quartz_dust"
	  },
	  "item_output": {
		"item": "ae2:certus_quartz_crystal"
	  },
	  "pressure": 1.0
	}).id('fits:thermo_plant/ae2/certus_crystal')
	//Fluix
	event.remove({output: 'ae2:fluix_crystal'})
	event.remove({output: 'ae2:fluix_dust'})
	event.custom({
	  "type": "ae2:inscriber",
	  "ingredients": {
		"bottom": {
		  "item": "minecraft:amethyst_shard"
		},
		"middle": {
		  "item": "ae2:charged_certus_quartz_crystal"
		},
		"top": {
		  "item": "minecraft:prismarine_crystals"
		}
	  },
	  "mode": "press",
	  "result": {
		"item": "ae2:fluix_crystal"
	  }
	}).id('fits:inscribing/ae2/fluix_crystal')
	event.custom({
		"type": "extendedcrafting:shapeless_table",
		"tier": 1,
		"ingredients": [
		  {
			"item": "ae2:fluix_crystal"
		  },
		  {
			"item": "ae2:fluix_cutting_knife"
		  }
		],
		"result": {
		  "item": "ae2:fluix_dust"
		}
	  }).id('fits:basic_table/ae2/fluix_dust').damageIngredient('ae2:fluix_cutting_knife', 1)
	  event.smithing('ae2:fluix_cutting_knife', 'minecraft:stick', 'ae2:fluix_crystal').id('fits:smithing/ae2/fluix_knife')
	//Cores
	event.remove({output: 'ae2:formation_core'})
	event.remove({output: 'ae2:annihilation_core'})
	event.custom({
		type: inside,
		item_in: [Item.of('ae2:logic_processor'), Item.of('ae2:fluix_dust'), Item.of('ae2:certus_quartz_crystal')],
		block_in: {blocks: ['kubejs:witched_beeswax']},
		post: [{type: 'drop_item', item: 'ae2:formation_core'}]
	}).id('ae2:materials/formationcore')
	event.custom({
		type: item_explode,
		item_in: [Item.of('ae2:logic_processor'), Item.of('ae2:fluix_dust'), Item.of('redstone')],
		post: [{type: 'drop_item', item: 'ae2:annihilation_core'}]
	}).id('ae2:materials/annihilationcore')
	//Housings
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "ABA",
		  "BCB",
		  "DDD"
		],
		"tier": 1,
		"key": {
		  "A": {
			"item": "ae2:fusion_processor"
		  },
		  "B": {
			"item": "botania:elf_glass"
		  },
		  "C": {
			"item": "ae2things:disk_housing"
		  },
		  "D": {
			"item": "ae2:dilithium_crystal"
		  }
		},
		"result": {
		  "item": "ae2additions:super_cell_housing"
		}
	  }).id('ae2additions:super_cell_housing')
})