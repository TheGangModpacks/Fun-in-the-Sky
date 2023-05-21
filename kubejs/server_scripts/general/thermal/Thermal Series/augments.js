ServerEvents.recipes(event => {
  event.remove({output: 'thermal:machine_speed_augment'})
  event.shaped('thermal:machine_speed_augment', [
    'ASB',
    ' C ',
    'BSA'
  ], {
    A: '#forge:plates/electrum',
	B: '#forge:gears/lead',
	C: 'kubejs:mk1circuit',
	S: 'thermal:rf_coil'
  })
  event.remove({output: 'thermal:machine_efficiency_augment'})
  event.shaped('thermal:machine_efficiency_augment', [
    'ASB',
    ' C ',
    'BSA'
  ], {
    A: '#forge:plates/lumium',
	B: '#forge:gears/nickel',
	C: 'kubejs:mk1circuit',
	S: 'thermal:rf_coil'
  })
  event.remove({output: 'thermal:machine_output_augment'})
  event.shaped('thermal:machine_output_augment', [
    'ASB',
    ' C ',
    'BSA'
  ], {
    A: '#forge:plates/invar',
	B: '#forge:gears/bronze',
	C: 'exnihilosequentia:iron_mesh',
	S: 'thermal:rf_coil'
  })
  event.remove({output: 'thermal:machine_cycle_augment'})
  event.shaped('thermal:machine_cycle_augment', [
    'ASA',
    'BCB',
    'ASA'
  ], {
    A: '#forge:plates/silver',
	B: '#forge:plates/constantan',
	C: 'kubejs:mk1circuit',
	S: '#forge:gears/signalum'
  })
  event.remove({output: 'thermal:rf_coil_augment'})
  event.shaped('thermal:rf_coil_augment', [
    ' S ',
    'BCB',
    ' S '
  ], {
	B: 'thermal:flux_capacitor',
	C: 'kubejs:mk1circuit',
	S: 'minecraft:gold_ingot'
  })
   event.remove({output: 'thermal:rf_coil_xfer_augment'})
  event.shaped('thermal:rf_coil_xfer_augment', [
    ' B ',
    'SCS',
    ' S '
  ], {
	S: '#forge:ingots/silver',
	C: 'thermal:rf_coil_storage_augment',
	B: 'minecraft:gold_ingot'
  })
    event.remove({output: 'thermal:fluid_tank_augment'})
  event.shaped('thermal:fluid_tank_augment', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'thermal:cured_rubber',
	B: 'minecraft:iron_ingot',
	C: 'thermal:fluid_cell',
  })
  event.remove({output: 'thermal:rf_coil_storage_augment'})
  event.shaped('thermal:rf_coil_storage_augment', [
    ' S ',
    'BCB',
    ' B '
  ], {
	B: 'minecraft:gold_ingot',
	C: 'thermal:rf_coil_augment',
	S: '#forge:ingots/silver'
  })
})