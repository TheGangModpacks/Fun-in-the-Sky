ServerEvents.recipes(event =>{
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
    event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:nickel_ingot' }],
		results: [{
		item: 'emendatusenigmatica:nickel_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:steel_ingot' }],
		results: [{
		item: 'emendatusenigmatica:steel_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:electrum_ingot' }],
		results: [{
		item: 'emendatusenigmatica:electrum_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:aluminum_ingot' }],
		results: [{
		item: 'emendatusenigmatica:aluminum_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:brass_ingot' }],
		results: [{
		item: 'emendatusenigmatica:brass_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:constantan_ingot' }],
		results: [{
		item: 'emendatusenigmatica:constantan_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:lead_ingot' }],
		results: [{
		item: 'emendatusenigmatica:lead_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:bronze_ingot' }],
		results: [{
		item: 'emendatusenigmatica:bronze_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:lumium_ingot' }],
		results: [{
		item: 'emendatusenigmatica:lumium_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:signalum_ingot' }],
		results: [{
		item: 'emendatusenigmatica:signalum_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:invar_ingot' }],
		results: [{
		item: 'emendatusenigmatica:invar_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:silver_ingot' }],
		results: [{
		item: 'emendatusenigmatica:silver_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:uranium_ingot' }],
		results: [{
		item: 'emendatusenigmatica:uranium_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'emendatusenigmatica:zinc_ingot' }],
		results: [{
		item: 'emendatusenigmatica:zinc_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'minecraft:gold_ingot' }],
		results: [{
		item: 'emendatusenigmatica:gold_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'minecraft:copper_ingot' }],
		results: [{
		item: 'emendatusenigmatica:copper_plate', count: 2 }]
		
	})
	event.custom({
		type: 'create:pressing',
		ingredients: [{
		item: 'minecraft:iron_ingot' }],
		results: [{
		item: 'emendatusenigmatica:iron_plate', count: 2 }]
		
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:nickel_ingot' },
		result: [{
		item: 'emendatusenigmatica:nickel_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:steel_ingot' },
		result: [{
		item: 'emendatusenigmatica:steel_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:electrum_ingot' },
		result: [{
		item: 'emendatusenigmatica:electrum_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:aluminum_ingot' },
		result: [{
		item: 'emendatusenigmatica:aluminum_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:brass_ingot' },
		result: [{
		item: 'emendatusenigmatica:brass_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:constantan_ingot' },
		result: [{
		item: 'emendatusenigmatica:constantan_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:lead_ingot' },
		result: [{
		item: 'emendatusenigmatica:lead_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:bronze_ingot' },
		result: [{
		item: 'emendatusenigmatica:bronze_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:lumium_ingot' },
		result: [{
		item: 'emendatusenigmatica:lumium_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:signalum_ingot' },
		result: [{
		item: 'emendatusenigmatica:signalum_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:invar_ingot' },
		result: [{
		item: 'emendatusenigmatica:invar_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:silver_ingot' },
		result: [{
		item: 'emendatusenigmatica:silver_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:uranium_ingot' },
		result: [{
		item: 'emendatusenigmatica:uranium_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'emendatusenigmatica:zinc_ingot' },
		result: [{
		item: 'emendatusenigmatica:zinc_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'minecraft:gold_ingot' },
		result: [{
		item: 'emendatusenigmatica:gold_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'minecraft:copper_ingot' },
		result: [{
		item: 'emendatusenigmatica:copper_plate', count: 3 }]
	})
	event.custom({
		type: 'thermal:press',
		ingredient: {
		item: 'minecraft:iron_ingot' },
		result: [{
		item: 'emendatusenigmatica:iron_plate', count: 3 }]
	})
})