let MK = (id) => `mekanism:${id}`
let KF = (id) => `kubejs:unprocessed_${id}`
ServerEvents.recipes(event => {
	event.remove({output: (MK('steel_casing'))})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: Item.of('powah:dielectric_casing').toJson(),
		loops: 8,
		results: [ Item.of(MK('steel_casing')).toJson() ],
		sequence: [
		{ type: 'create:filling',
		ingredients: [ Item.of(KF('frame')).toJson(), Fluid.of('kubejs:liquifacted_graphite').withAmount(1000).toJson() ],
		results: [ Item.of(KF('frame')).toJson() ]},
		{ type: 'create:pressing',
		ingredients: [ Item.of(KF('frame')).toJson() ],
		results: [ Item.of(KF('frame')).toJson() ]},
		{ type: 'create:deploying',
		ingredients: [ Item.of(KF('frame')).toJson(), Item.of('emendatusenigmatica:steel_gear').toJson() ],
		results: [ Item.of(KF('frame')).toJson() ]},
		{ type: 'create:deploying',
		ingredients: [ Item.of(KF('frame')).toJson(), Item.of('pneumaticcraft:reinforced_pressure_tube').toJson() ],
		results: [ Item.of(KF('frame')).toJson() ]},
		{ type: 'create:deploying',
		ingredients: [ Item.of(KF('frame')).toJson(), Item.of('mekanismgenerators:reactor_glass').toJson() ],
		results: [ Item.of(KF('frame')).toJson() ]}],
		transitionalItem: Item.of(KF('frame')).toJson()
	})
})