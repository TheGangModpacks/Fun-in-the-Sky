ServerEvents.recipes(event => {
	let mold = 'immersiveengineering:mold_plate';
	event.remove({ id: 'immersiveengineering:crafting/plate_copper_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/copper' })
	event.remove({ id: 'immersiveengineering:crafting/plate_nickel_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/nickel' })
	event.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/steel' })
	event.remove({ id: 'ad_astra:hammering/steel_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_electrum_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/electrum' })
	event.remove({ id: 'immersiveengineering:crafting/plate_aluminum_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/aluminum' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/brass' })
	event.remove({ id: 'immersiveengineering:crafting/plate_constantan_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/constantan' })
	event.remove({ id: 'immersiveengineering:crafting/plate_lead_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/lead' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/bronze' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/lumium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/signalum' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/invar' })
	event.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/silver' })
	event.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/uranium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/zinc' })
	event.remove({ id: 'immersiveengineering:crafting/plate_desh_hammering' })
	event.remove({ id: 'ad_astra:hammering/desh_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_ostrum_hammering' })
	event.remove({ id: 'ad_astra:hammering/ostrum_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_calorite_hammering' })
	event.remove({ id: 'ad_astra:hammering/calorite_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/gold' })
	event.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/iron' })
	event.remove({ id: 'create:pressing/iron_ingot' })
	event.remove({ id: 'ad_astra:hammering/iron_plate' })
	event.remove({ id: 'createaddition:pressing/lead_ingot' })
	event.remove({ id: 'createaddition:pressing/nickel_ingot' })
	event.remove({ id: 'createaddition:pressing/constantan_ingot' })
	event.remove({ id: 'createaddition:pressing/uranium_ingot' })
	event.remove({ id: 'create:pressing/copper_ingot' })
	event.remove({ id: 'create:pressing/brass_ingot' })
	event.remove({ id: 'create:pressing/steel_ingot' })
	event.remove({ id: 'create:pressing/gold_ingot' })
	event.remove({ id: 'createaddition:pressing/steel_ingot' })
	event.remove({ id: 'createaddition:pressing/silver_ingot' })
	event.remove({ id: 'createaddition:pressing/zinc_ingot' })
	event.remove({ id: 'createaddition:pressing/electrum_ingot' })
	event.remove({ id: 'createaddition:pressing/aluminum_ingot' })
	event.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_ingot' })
	event.remove({ not: { type: 'ad_astra:compressing' }, output: 'ad_astra:ostrum_plate' })
	event.remove({ not: { type: 'ad_astra:compressing' }, output: 'ad_astra:desh_plate' })
	event.remove({ not: { type: 'ad_astra:compressing' }, output: 'ad_astra:calorite_plate' })
	event.remove({ id: 'createaddition:pressing/aluminum_ingot' })
	event.remove({ id: 'thermal:machines/press/press_nickel_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_electrum_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_constantan_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_lead_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_bronze_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_lumium_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_signalum_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_invar_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_silver_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_gold_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_copper_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_iron_ingot_to_plate' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/osmium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/bismuth' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/osmium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/zinc' })

	event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_ingot' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/aluminum' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/nickel' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/constantan' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/lead' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/silver' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/uranium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/bismuth' })

	event.shapeless(
		Item.of('emendatusenigmatica:copper_plate'),
		[
			'immersiveengineering:hammer',
			'minecraft:copper_ingot',
			'minecraft:copper_ingot',
			'minecraft:copper_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:nickel_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:nickel_ingot',
			'emendatusenigmatica:nickel_ingot',
			'emendatusenigmatica:nickel_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:steel_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:steel_ingot',
			'emendatusenigmatica:steel_ingot',
			'emendatusenigmatica:steel_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:electrum_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:electrum_ingot',
			'emendatusenigmatica:electrum_ingot',
			'emendatusenigmatica:electrum_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:aluminum_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:aluminum_ingot',
			'emendatusenigmatica:aluminum_ingot',
			'emendatusenigmatica:aluminum_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:brass_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:brass_ingot',
			'emendatusenigmatica:brass_ingot',
			'emendatusenigmatica:brass_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:constantan_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:constantan_ingot',
			'emendatusenigmatica:constantan_ingot',
			'emendatusenigmatica:constantan_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:lead_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:lead_ingot',
			'emendatusenigmatica:lead_ingot',
			'emendatusenigmatica:lead_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:bronze_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:bronze_plate',
			'emendatusenigmatica:bronze_plate',
			'emendatusenigmatica:bronze_plate'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:lumium_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:lumium_ingot',
			'emendatusenigmatica:lumium_ingot',
			'emendatusenigmatica:lumium_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:signalum_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:signalum_ingot',
			'emendatusenigmatica:signalum_ingot',
			'emendatusenigmatica:signalum_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:invar_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:invar_ingot',
			'emendatusenigmatica:invar_ingot',
			'emendatusenigmatica:invar_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:silver_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:silver_ingot',
			'emendatusenigmatica:silver_ingot',
			'emendatusenigmatica:silver_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:uranium_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:uranium_ingot',
			'emendatusenigmatica:uranium_ingot',
			'emendatusenigmatica:uranium_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:zinc_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:zinc_ingot',
			'emendatusenigmatica:zinc_ingot',
			'emendatusenigmatica:zinc_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:gold_plate'),
		[
			'immersiveengineering:hammer',
			'minecraft:gold_ingot',
			'minecraft:gold_ingot',
			'minecraft:gold_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:iron_plate'),
		[
			'immersiveengineering:hammer',
			'minecraft:iron_ingot',
			'minecraft:iron_ingot',
			'minecraft:iron_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:osmium_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:osmium_ingot',
			'emendatusenigmatica:osmium_ingot',
			'emendatusenigmatica:osmium_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:manasteel_plate'),
		[
			'immersiveengineering:hammer',
			'botania:manasteel_ingot',
			'botania:manasteel_ingot',
			'botania:manasteel_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:elementium_plate'),
		[
			'immersiveengineering:hammer',
			'botania:elementium_ingot',
			'botania:elementium_ingot',
			'botania:elementium_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:terrasteel_plate'),
		[
			'immersiveengineering:hammer',
			'botania:terrasteel_ingot',
			'botania:terrasteel_ingot',
			'botania:terrasteel_ingot'
		]
	)
	event.shapeless(
		Item.of('emendatusenigmatica:bismuth_plate'),
		[
			'immersiveengineering:hammer',
			'emendatusenigmatica:bismuth_ingot',
			'emendatusenigmatica:bismuth_ingot',
			'emendatusenigmatica:bismuth_ingot'
		]
	)
	event.recipes.thermal.press(['emendatusenigmatica:nickel_plate'],
	['emendatusenigmatica:nickel_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:bismuth_plate'],
	['emendatusenigmatica:bismuth_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:steel_plate'],
	['emendatusenigmatica:steel_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:electrum_plate'],
	['emendatusenigmatica:electrum_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:aluminum_plate'],
	['emendatusenigmatica:aluminum_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:brass_plate'],
	['emendatusenigmatica:brass_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:constantan_plate'],
	['emendatusenigmatica:constantan_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:lead_plate'],
	['emendatusenigmatica:lead_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:bronze_plate'],
	['emendatusenigmatica:bronze_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:lumium_plate'],
	['emendatusenigmatica:lumium_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:signalum_plate'],
	['emendatusenigmatica:signalum_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:invar_plate'],
	['emendatusenigmatica:invar_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:silver_plate'],
	['emendatusenigmatica:silver_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:uranium_plate'],
	['emendatusenigmatica:uranium_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:zinc_plate'],
	['emendatusenigmatica:zinc_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:gold_plate'],
	['minecraft:gold_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:copper_plate'],
	['minecraft:copper_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:iron_plate'],
	['minecraft:iron_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:osmium_plate'],
	['emendatusenigmatica:osmium_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:manasteel_plate'],
	['botania:manasteel_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:elementium_plate'],
	['botania:elementium_ingot', mold]).energy(2400)
	event.recipes.thermal.press(['emendatusenigmatica:terrasteel_plate'],
	['botania:terrasteel_ingot', mold]).energy(2400)

	event.recipes.createPressing('emendatusenigmatica:nickel_plate', 'emendatusenigmatica:nickel_ingot')
	event.recipes.createPressing('emendatusenigmatica:bismuth_plate', 'emendatusenigmatica:bismuth_ingot')
	event.recipes.createPressing('emendatusenigmatica:steel_plate', 'emendatusenigmatica:steel_ingot')
	event.recipes.createPressing('emendatusenigmatica:electrum_plate', 'emendatusenigmatica:electrum_ingot')
	event.recipes.createPressing('emendatusenigmatica:aluminum_plate', 'emendatusenigmatica:aluminum_ingot')
	event.recipes.createPressing('emendatusenigmatica:brass_plate', 'emendatusenigmatica:brass_ingot')
	event.recipes.createPressing('emendatusenigmatica:constantan_plate', 'emendatusenigmatica:constantan_ingot')
	event.recipes.createPressing('emendatusenigmatica:lead_plate', 'emendatusenigmatica:lead_ingot')
	event.recipes.createPressing('emendatusenigmatica:bronze_plate', 'emendatusenigmatica:bronze_ingot')
	event.recipes.createPressing('emendatusenigmatica:lumium_plate', 'emendatusenigmatica:lumium_ingot')
	event.recipes.createPressing('emendatusenigmatica:signalum_plate', 'emendatusenigmatica:signalum_ingot')
	event.recipes.createPressing('emendatusenigmatica:invar_plate', 'emendatusenigmatica:invar_ingot')
	event.recipes.createPressing('emendatusenigmatica:silver_plate', 'emendatusenigmatica:silver_ingot')
	event.recipes.createPressing('emendatusenigmatica:uranium_plate', 'emendatusenigmatica:uranium_ingot')
	event.recipes.createPressing('emendatusenigmatica:zinc_plate', 'emendatusenigmatica:zinc_ingot')
	event.recipes.createPressing('emendatusenigmatica:gold_plate', 'minecraft:gold_ingot')
	event.recipes.createPressing('emendatusenigmatica:copper_plate', 'minecraft:copper_ingot')
	event.recipes.createPressing('emendatusenigmatica:iron_plate', 'minecraft:iron_ingot')
	event.recipes.createPressing('emendatusenigmatica:osmium_plate', 'emendatusenigmatica:osmium_ingot')
	event.recipes.createPressing('emendatusenigmatica:manasteel_plate', 'botania:manasteel_ingot')
	event.recipes.createPressing('emendatusenigmatica:elementium_plate', 'botania:elementium_ingot')
	event.recipes.createPressing('emendatusenigmatica:terrasteel_plate', 'botania:terrasteel_ingot')

	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:bismuth_plate', 'emendatusenigmatica:bismuth_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:signalum_plate', 'emendatusenigmatica:signalum_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:manasteel_plate', 'botania:manasteel_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:elementium_plate', 'botania:elementium_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:terrasteel_plate', 'botania:terrasteel_ingot', mold)
})