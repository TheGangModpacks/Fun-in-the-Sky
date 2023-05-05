ServerEvents.recipes(event => {
	let mold = 'immersiveengineering:mold_plate';
	event.remove({ id: 'immersiveengineering:crafting/plate_copper_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/copper' })
	event.remove({ id: 'immersiveengineering:crafting/plate_nickel_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/nickel' })
	event.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/steel' })
	event.remove({ id: 'ad_astra:hammering/steel_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_electrum_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/electrum' })
	event.remove({ id: 'immersiveengineering:crafting/plate_aluminum_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/aluminum' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/brass' })
	event.remove({ id: 'immersiveengineering:crafting/plate_constantan_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/constantan' })
	event.remove({ id: 'immersiveengineering:crafting/plate_lead_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/lead' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/bronze' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/lumium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/signalum' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/invar' })
	event.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/silver' })
	event.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/uranium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/zinc' })
	event.remove({ id: 'immersiveengineering:crafting/plate_desh_hammering' })
	event.remove({ id: 'ad_astra:hammering/desh_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_ostrum_hammering' })
	event.remove({ id: 'ad_astra:hammering/ostrum_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_calorite_hammering' })
	event.remove({ id: 'ad_astra:hammering/calorite_plate' })
	event.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/gold' })
	event.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/iron' })
	event.remove({ id: 'create:pressing/iron_ingot' })
	event.remove({ id: 'ad_astra:hammering/iron_plate' })
	event.remove({ id: 'createaddition:pressing/lead_ingot' })
	event.remove({ id: 'createaddition:pressing/nickel_ingot' })
	event.remove({ id: 'createaddition:pressing/constantan_ingot' })
	event.remove({ id: 'createaddition:pressing/uranium_ingot' })
	event.remove({ id: 'create:pressing/copper_ingot' })
	event.remove({ id: 'create:pressing/brass_ingot' })
	event.remove({ id: 'create:pressing/steel_ingot' })
	event.remove({ id: 'create:pressing/gold_ingot' })
	event.remove({ id: 'createaddition:pressing/steel_ingot' })
	event.remove({ id: 'createaddition:pressing/silver_ingot' })
	event.remove({ id: 'createaddition:pressing/zinc_ingot' })
	event.remove({ id: 'createaddition:pressing/electrum_ingot' })
	event.remove({ id: 'createaddition:pressing/aluminum_ingot' })
	event.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_ingot' })
	event.remove({ not: { type: 'ad_astra:compressing' }, output: 'ad_astra:ostrum_plate' })
	event.remove({ not: { type: 'ad_astra:compressing' }, output: 'ad_astra:desh_plate' })
	event.remove({ not: { type: 'ad_astra:compressing' }, output: 'ad_astra:calorite_plate' })
	event.remove({ id: 'createaddition:pressing/aluminum_ingot' })
	event.remove({ id: 'thermal:machines/press/press_nickel_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_electrum_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_constantan_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_lead_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_bronze_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_lumium_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_signalum_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_invar_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_silver_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_gold_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_copper_ingot_to_plate' })
	event.remove({ id: 'thermal:machines/press/press_iron_ingot_to_plate' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/osmium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot/bismuth' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/osmium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/zinc' })

	event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_ingot' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/aluminum' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/nickel' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/constantan' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/lead' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/silver' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/uranium' })
	event.remove({ id: 'emendatusenigmatica:plate/from_ingot_press/bismuth' })

	const plate_ingots = {
        emendatusenigmatica: ['nickel', 'steel', 'electrum', 'aluminum', 'brass', 'constantan', 'lead', 'bronze',
        'lumium', 'signalum', 'invar', 'silver', 'uranium', 'zinc', 'osmium', 'bismuth'],
        minecraft: ['iron', 'gold', 'copper'],
        botania: ['manasteel', 'terrasteel', 'elementium']
    };

    for (const mod in plate_ingots) {
        for (const ingot of plate_ingots[mod]) {
            //Utils.server.tell(`${mod} ${ingot}`)
            event.shapeless(
                Item.of(`emendatusenigmatica:${ingot}_plate`),
                [
                    'immersiveengineering:hammer',
                    `${mod}:${ingot}_ingot`,
                    `${mod}:${ingot}_ingot`,
                    `${mod}:${ingot}_ingot`
                ]
            )
            event.recipes.thermal.press([`emendatusenigmatica:${ingot}_plate`],[`${mod}:${ingot}_ingot`, mold]).energy(2400)
            event.recipes.createPressing(`emendatusenigmatica:${ingot}_plate`, `${mod}:${ingot}_ingot`)
        }
    }


	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:bismuth_plate', 'emendatusenigmatica:bismuth_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:signalum_plate', 'emendatusenigmatica:signalum_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:manasteel_plate', 'botania:manasteel_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:elementium_plate', 'botania:elementium_ingot', mold)
	event.recipes.immersiveengineering.metal_press('emendatusenigmatica:terrasteel_plate', 'botania:terrasteel_ingot', mold)
})