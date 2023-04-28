let PN = (id) => `pneumaticcraft:${id}`
let PW = (id) => `powah:${id}`
let MC = (id) => `minecraft:${id}`
let MK = (id) => `mekanism:${id}`
let MG = (id) => `mekanismgenerators:${id}`
let EE = (id) => `emendatusenigmatica:${id}`
let EX = (id) => `exnihilosequentia:${id}`
ServerEvents.recipes(event =>{
	event.remove({output: (MK('enrichment_chamber'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of(MK('alloy_infused')).toJson(),
			B: Item.of(PN('printed_circuit_board')).toJson(),
			C: Item.of(MK('steel_casing')).toJson(),
			D: Item.of(EE('electrum_plate')).toJson()
		},
		pattern: [
			'D   D',
			' ABA ',
			' DCD ',
			' ABA ',
			'D   D'
		],
		result: Item.of(MK('enrichment_chamber')).toJson()
	})
	event.remove({output: (MG('heat_generator'))})
	event.shaped( Item.of(MG('heat_generator')),
	[
		'AAA',
		'BCB',
		'DED'
	],
	{
		A: (MC('iron_ingot')),
		B: '#minecraft:planks',
		C: (EE('osmium_gear')),
		D: (MC('copper_ingot')),
		E: (MK('steel_casing'))
	})
	event.remove({ output: (MG('wind_generator'))})
	event.shaped(Item.of(MG('wind_generator')),
	[
		' A ',
		'ABA',
		'CDC'
	],
	{
		A: (EE('osmium_ingot')),
		B: (MK('alloy_infused')),
		C: (MK('energy_tablet')),
		D: (MG('heat_generator'))
	})
	event.remove({ output: (MG('solar_panel'))})
	event.remove({ output: (MG('solar_generator'))})
	event.shaped( Item.of(MG('solar_generator')),
	[
		'AAA',
		'BCB',
		'DED'
	],
	{
		A: (PW('photoelectric_pane')),
		B: (MK('alloy_reinforced')),
		C: (EE('iron_gear')),
		D: (EE('osmium_gear')),
		E: (MK('energy_tablet'))
	})
	event.remove({ output: (MG('advanced_solar_generator'))})
	event.shaped( Item.of(MG('advanced_solar_generator')),
	[
		'ABA',
		'ABA',
		'CCC'
	],
	{
		A: (MG('solar_generator')),
		B: (PN('solar_cell')),
		C: (PW('capacitor_blazing'))
	})
	event.remove({ output: (MK('energized_smelter'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of(MK('alloy_reinforced')).toJson(),
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('steel_casing')).toJson(),
			D: Item.of(PN('printed_circuit_board')),
			E: Item.of('immersiveengineering:sheetmetal_steel')
		},
		pattern: [
			'EEEEE',
			'EABAE',
			'EDCDE',
			'EABAE',
			'EEEEE'
		],
		result: Item.of(MK('energized_smelter'))
	})
	event.remove({ output: (MK('electrolytic_separator'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of(MG('electromagnetic_coil')).toJson(),
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('electrolytic_core')).toJson(),
			D: Item.of(MK('basic_chemical_tank')),
			E: Item.of('immersiveengineering:sheetmetal_steel'),
			F: Item.of(MK('steel_casing'))
		},
		pattern: [
			'EEE   ',
			'EDABAE',
			'EDACA ',
			' EFAB ',
			' EEE  '
		],
		result: Item.of(MK('electrolytic_separator'))
	})
	event.remove({ output: (MK('purification_chamber'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of(MK('dynamic_tank')),
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('oxygen_bucket')),
			D: Item.of(MK('basic_chemical_tank')),
			E: Item.of('immersiveengineering:sheetmetal_steel'),
			F: Item.of(MK('enrichment_chamber')),
			G: Item.of(MK('elite_control_circuit'))
		},
		pattern: [
			'EBGBA ',
			'ECAFA ',
			'EDDAB ',
			' EEE  '
		],
		result: Item.of(MK('purification_chamber'))
	})
	event.remove({ output: (MK('crusher'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('create:mechanical_piston'),
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of('ae2:quantum_link'),
			E: Item.of(IE('sheetmetal_steel')),
			F: Item.of(PN('pressure_chamber_valve'))
		},
		pattern: [
			'EEFFFE',
			'EBCBEF',
			'EAAAEF',
			'EADABF',
			'FEDEF '
		],
		result: Item.of(MK('crusher'))
	})
	event.remove({ output: (MK('osmium_compressor'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of(MK('basic_chemical_tank')),
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of(EE('osmium_block')),
			E: Item.of(IE('sheetmetal_steel')),
			F: Item.of(PN('pressure_chamber_valve'))
		},
		pattern: [
			'EEEEEE',
			'EBBBBE',
			'EFFFBE',
			'EACCEE',
			'EEDDFE'
		],
		result: Item.of(MK('osmium_compressor'))
	})
	event.remove({ output: (MK('precision_sawmill'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('create:precision_mechanism'),
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of(EE('osmium_block')),
			E: Item.of(IE('sheetmetal_steel')),
			F: Item.of(IE('sawblade'))
		},
		pattern: [
			'EEEEB',
			'EAFFB',
			'EECDE'
		],
		result: Item.of(MK('precision_sawmill'))
	})
	event.remove({ output: (MK('rotary_condensentrator'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of(MK('basic_chemical_tank')),
			E: Item.of(IE('sheetmetal_steel')),
			F: Item.of(MK('basic_fluid_tank')),
			G: Item.of(MK('energy_tablet'))
		},
		pattern: [
			' EEGGEE',
			'BBDDFFE',
			' EECGGE'
		],
		result: Item.of(MK('rotary_condensentrator'))
	})
	event.remove({ output: (MK('chemical_oxidizer'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of(MK('dynamic_valve')),
			E: Item.of(MK('dynamic_tank')),
			F: Item.of(MK('basic_chemical_tank')),
			G: Item.of(MK('superheating_element'))
		},
		pattern: [
			'  EE  ',
			'EEGGEE',
			'BDDFFE',
			'EECCGE',
			'  EE  '
		],
		result: Item.of(MK('chemical_oxidizer'))
	})
	event.remove({ output: (MK('chemical_infuser'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			B: Item.of(MK('advanced_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of(MK('dynamic_valve')),
			E: Item.of(MK('dynamic_tank')),
			F: Item.of(MK('advanced_chemical_tank')),
			G: Item.of(MK('superheating_element'))
		},
		pattern: [
			'  EFFE  ',
			'EEBGGBEE',
			'DBFCCFBD',
			'EBGGGGBE',
			'  EEEE  '
		],
		result: Item.of(MK('chemical_infuser'))
	})
	event.remove({ output: (MK('pressurized_reaction_chamber'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('emendatusenigmatica:steel_plate'),
			B: Item.of(MK('elite_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of(MK('dynamic_valve')),
			E: Item.of(MK('thermal_evaporation_block')),
			F: Item.of(MK('advanced_chemical_tank')),
			G: Item.of(PN('printed_circuit_board')),
			H: Item.of('rftoolscontrol:cpu_core_2000')
		},
		pattern: [
			'AAEBBEAA',
			'DFFGGEEE',
			'EHGCCGFD',
			'DFFGGBBE',
			'AAEEEEAA'
		],
		result: Item.of(MK('pressurized_reaction_chamber'))
	})
	event.remove({ output: (MK('chemical_dissolution_chamber'))})
	event.custom({
		type: 'create:mechanical_crafting',
		acceptMirrored: false,
		key: {
			A: Item.of('mekanism:ingot_refined_obsidian'),
			B: Item.of(MK('ultimate_control_circuit')),
			C: Item.of(MK('steel_casing')),
			D: Item.of(MK('structural_glass')),
			E: Item.of(MK('boiler_casing')),
			F: Item.of(MK('advanced_chemical_tank')),
			G: Item.of(MK('advanced_fluid_tank')),
			H: Item.of(MK('rotary_condensentrator'))
		},
		pattern: [
			'  BB  ',
			' BHHB ',
			'EFCCGD',
			'DFAAGD',
			'AAEEAA'
		],
		result: Item.of(MK('chemical_dissolution_chamber'))
	})
	event.remove({ output: (MK('advanced_control_circuit'))})
	event.shaped( Item.of(MK('advanced_control_circuit')),
	[
		' A ', 'ABA', ' A ' ],{ B: (MK('basic_control_circuit')), A: (MK('alloy_infused'))})
		event.remove({ output: (MK('elite_control_circuit'))})
	event.shaped( Item.of(MK('elite_control_circuit')),
	[
		' A ', 'ABA', ' A ' ],{ B: (MK('advanced_control_circuit')), A: (MK('alloy_reinforced'))})
		event.remove({ output: (MK('ultimate_control_circuit'))})
	event.shaped( Item.of(MK('ultimate_control_circuit')),
	[
		'A A', ' B ', 'A A' ],{ B: (MK('elite_control_circuit')), A: (MK('alloy_atomic'))})
		event.custom({
			type: 'create:mechanical_crafting',
			acceptMirrored: false,
			key: {
				A: Item.of('mekanism:ingot_refined_obsidian'),
				B: Item.of(MK('ultimate_control_circuit')),
				C: Item.of(MK('steel_casing')),
				E: Item.of(MK('boiler_casing')),
				G: Item.of(MK('advanced_fluid_tank')),
			},
			pattern: [
				' GAAG ',
				'EBCCBE',
				'EBAABE',
				'EEGGEE'
			],
			result: Item.of(MK('chemical_washer'))
		}).id(MK('chemical_washer'))
		event.custom({
			type: 'create:mechanical_crafting',
			acceptMirrored: false,
			key: {
				A: Item.of('mekanism:ingot_refined_obsidian'),
				B: Item.of(MK('ultimate_control_circuit')),
				C: Item.of(MK('steel_casing')),
				D: Item.of("kubejs:fluoridian_crystal"),
				E: Item.of(('ae2:quartz_growth_accelerator')),
				F: Item.of(MK('structural_glass')),
			},
			pattern: [
				'DFDDFD',
				'FDCCDF',
				'FEBBEF',
				'EAEEAE'
			],
			result: Item.of(MK('chemical_crystallizer'))
		}).id(MK('chemical_crystallizer'))
})