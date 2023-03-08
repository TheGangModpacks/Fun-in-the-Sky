REIEvents.hide('item', event => {
  event.hide('#custom:disabled')
})

REIEvents.removeCategories(event => {
  event.yeet('minecraft:anvil')
  event.yeet('twilightforest:uncrafting')
})

ItemEvents.tooltip(tooltip =>{
	tooltip.addAdvanced('ae2:controller', (item, advanced, text) =>{
		text.add(1, Text.aqua('Requires Mana'))
	})
})