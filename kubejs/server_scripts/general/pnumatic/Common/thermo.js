const pncFluidType = "pneumaticcraft:fluid";
const pn_prefix = 'fits:materials/processing/thermo-pn/';
ServerEvents.recipes(event =>{
	event.remove({output: 'emendatusenigmatica:silicon_gem'})
	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		exothermic: false,
		fluid_input: {
			type: 'pneumaticcraft:fluid',
			amount: 3,
		fluid: 'pneumaticcraft:lubricant' },
		fluid_output: {
			amount: 10,
		fluid: 'mekanism:ethene' },
		item_input: { item: 'emendatusenigmatica:salt_gem' },
		item_output: { item: 'emendatusenigmatica:silicon_gem' },
		temperature: { min_temp: 643 }
	})
	
	event.custom({
        type: thermo_plant,
        exothermic: false,
        fluid_input: {
            type: pncFluidType,
            amount: 250,
            fluid: "minecraft:water"
        },
        item_input: {count: 1, item: "emendatusenigmatica:calcium_ingot"},
        fluid_output: Fluid.of('kubejs:calcium_hydroxide_liquid').withAmount(1000).toJson(),
        temperature: {min_temp: 423}
    }).id(`${pn_prefix}calcium_hydroxide_liquid`)
})
