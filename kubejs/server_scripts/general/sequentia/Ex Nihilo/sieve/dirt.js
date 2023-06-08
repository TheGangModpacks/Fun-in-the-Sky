let E = (id) => `exnihilosequentia:${id}`;
ServerEvents.recipes(event =>{
    event.remove({output: '#custom:other_pebbles'})
    event.remove({output: 'exnihilosequentia:stone_pebble'})
    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:granite_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:diorite_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:deepslate_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:blackstone_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:andesite_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:basalt_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:tuff_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:dripstone_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:calcite_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()

    event.recipes.exnihilosequentia.sieve('minecraft:dirt', 'exnihilosequentia:stone_pebble')
    .addRoll(0.70, 'string').addRoll(0.50, 'string').addRoll(0.20, 'string').setWaterlogged()
})