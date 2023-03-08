let PN = (id) => `pneumaticcraft:${id}`
let MC = (id) => `minecraft:${id}`
let MK = (id) => `mekanism:${id}`
let EE = (id) => `emendatusenigmatica:${id}`
let EX = (id) => `exnihilosequentia:${id}`
ServerEvents.recipes(event =>{
	event.remove({ output: (MK('metallurgic_infuser')) })
	event.custom({
		type: 'create:compacting',
		heatRequirement: 'heated',
		ingredients: [
		Item.of(PN('compressed_iron_block')).withCount(2).toJson(),
		Item.of(PN('compressed_iron_gear')).withCount(2).toJson(),
		Item.of(PN('advanced_pressure_tube')).withCount(4).toJson(),
		Item.of(MC('blast_furnace')).withCount(4).toJson(),
		Item.of(PN('pressure_chamber_interface')).withCount(1).toJson(),
		Item.of(EE('osmium_gear')).withCount(1).toJson(),
		Item.of(MK('steel_casing')).withCount(1).toJson(),
		Fluid.of(PN('etching_acid')).withAmount(1000).toJson(),
		Fluid.of(EX('sea_water')).withAmount(1000).toJson()
		],
		results: [ Item.of(MK('metallurgic_infuser')).toJson() ]
	})
})