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
  event.remove({output: "rftoolsbase:machine_frame"})
})