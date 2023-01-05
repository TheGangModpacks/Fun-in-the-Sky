onEvent('item.registry', event => {
	event.create('compressed_nuclear_waste').displayName('Compressed Nuclear Waste')
	event.create('super_nutrition_paste').displayName('Super Nutrition Paste')
})
onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = [ 'immersiveengineering:ore_copper',
	'immersiveengineering:ore_aluminum',
'immersiveengineering:ore_lead',
'immersiveengineering:ore_silver',
'immersiveengineering:ore_nickle',
'immersiveengineering:ore_uranium',
'thermal:cinnabar_ore',
'thermal:niter_ore',
'thermal:sulfur_ore',
'thermal:copper_ore',
'thermal:tin_ore',
'thermal:lead_ore',
'thermal:silver_ore',
'thermal:nickle_ore',
'thermal:oil_sand',
'thermal:oil_red_sand',
'tinkers_reforged:aluminum_ore',
'tmechworks:aluminum_ore',
'tmechworks:copper_ore',
'powah:uranite_ore_poor',
'powah:uranite_ore',
'powah:uranite_ore_dense'	] // Ore Removal
  })
})