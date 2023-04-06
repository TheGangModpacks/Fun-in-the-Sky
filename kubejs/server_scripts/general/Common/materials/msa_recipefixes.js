ServerEvents.recipes(event =>{
	//Silicon
	event.remove({ id: 'mysticalagriculture:essence/common/silicon' })
	event.shaped( Item.of('emendatusenigmatica:silicon_gem', 6),
	[ 'AAA' ], { A: 'mysticalagriculture:silicon_essence' })
	//Salt/Niterate
	event.remove({ id: 'mysticalagriculture:essence/common/saltpeter' })
	event.remove({ id: 'mysticalagriculture:essence/common/niter' })
	event.shaped( Item.of('mekanism:salt', 4),
	[ 'AAA' ], { A: 'mysticalagriculture:saltpeter_essence' })
	event.shaped( Item.of('thermal:niter', 4),
	[ '  A', ' A ', 'A  ' ], { A: 'mysticalagriculture:saltpeter_essence' })
	//Graphite
	event.remove({ id: 'mysticalagriculture:essence/common/graphite_ingot' })
	//Certus
	event.remove({ id: 'mysticalagriculture:essence/appliedenergistics2/silicon_press' })
	event.remove({ id: 'mysticalagriculture:essence/appliedenergistics2/logic_press' })
	event.remove({ id: 'mysticalagriculture:essence/appliedenergistics2/engineering_press' })
	event.remove({ id: 'mysticalagriculture:essence/appliedenergistics2/calculation_press' })
})