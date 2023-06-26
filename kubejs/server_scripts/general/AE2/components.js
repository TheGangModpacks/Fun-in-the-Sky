ServerEvents.recipes(event =>{
	event.remove({ output: 'ae2:certus_quartz_crystal' })
	event.remove({ id:'exnihiloae:sieve/ens_cerus_quartz'})
	event.remove({ id: 'create:compat/ae2/mixing/fluix_crystal'})
	event.remove({ output: 'ae2:charged_certus_quartz_crystal', type: 'createaddition:charging'})
	event.remove({ output: 'ae2:charged_certus_quartz_crystal', type: 'exnihilosequentia:sieve'})

	event.custom({
		type: 'lychee:lightning_channeling',
		item_in: {item: 'ae2:certus_quartz_crystal'},
		post: [{type: 'drop_item', item: 'ae2:charged_certus_quartz_crystal'}]
	}).id('fits:lightning/ae2/charged_certus')

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
})