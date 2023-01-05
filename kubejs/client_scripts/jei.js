onEvent('jei.hide.items', event => {
  event.hide('#forge:ingots/copper')
  onEvent('jei.add.items', event => {
  event.add(Item.of('emendatusenigmatica:copper_ingot', {test: 123}))
})
})