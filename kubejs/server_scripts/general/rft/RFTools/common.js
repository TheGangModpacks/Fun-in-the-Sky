ServerEvents.recipes(event =>{
	event.remove({ output: 'rftoolsbase:smartwrench' })
	event.custom({
		type: 'lychee:item_burning',
		item_in: {
			item: 'thermal:wrench'
		},
		post: {
			type: 'drop_item',
			item: 'rftoolsbase:smartwrench'
		}
	})
	event.custom({
  type: 'powah:energizing',
  ingredients: [
    Item.of('kubejs:mk3circuit').toJson(),
    Item.of('botania:mana_tablet', '{ mana: 500000 }').toJson()
  ],
  energy: '400000',
  result: Item.of('rftoolsbase:machine_frame').toJson()
})
event.shapeless(
  'rftoolsbase:machine_frame',
  [ 
    'kubejs:mk3circuit',
    Item.of('minecraft:diamond_pickaxe', '{Damage:1200}')
  ]
)
})