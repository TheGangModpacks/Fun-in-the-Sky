ServerEvents.recipes(event =>{
    event.remove({output: "powah:dielectric_casing"})
	event.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 3,
        layers:[
            {type: 'compactcrafting:mixed', pattern:[
                ['C', 'A', 'C'],
                ['A', 'E', 'A'],
                ['C', 'A', 'C'],
            ]},
            {type: 'compactcrafting:mixed', pattern:[
                ['B', 'z', 'B'],
                ['z', 'z', 'z'],
                ['B', 'z', 'B'],
            ]},
            {type: 'compactcrafting:mixed', pattern:[
                ['C', 'A', 'C'],
                ['A', 'D', 'A'],
                ['C', 'A', 'C'],
            ]},
        ],
        catalyst: {id: 'powah:capacitor_basic_large', Count: 1},
        components:{
            A: {type: 'compactcrafting:block', block: 'kubejs:dielectric_block'},
            B: {type: 'compactcrafting:block', block: 'immersiveengineering:sheetmetal_steel'},
            C: {type: 'compactcrafting:block', block: 'immersiveengineering:duroplast'},
            E: {type: 'compactcrafting:block', block: 'botania:gray_petal_block'},
            D: {type: 'compactcrafting:block', block: 'immersiveengineering:heavy_engineering'},
            z: {type: 'compactcrafting:block', block: 'minecraft:air'}
        },
        outputs: [{id: 'powah:dielectric_casing', Count: 1}]
     })
     event.shaped(Item.of("kubejs:dielectric_block"),
     ['aaa', 'aaa', 'aaa'], {a: "powah:dielectric_paste"})

     event.recipes.createMixing([Fluid.of("kubejs:blaze_blood", 50)], ["minecraft:blaze_powder"]).heated()
     
     event.remove({ output: "powah:dielectric_paste"})
     
    
     event.recipes.createMixing([Item.of("powah:dielectric_paste", 12)], [Fluid.of("kubejs:blaze_blood", 25), Item.of("emendatusenigmatica:coal_coke_gem"), Item.of("pneumaticcraft:plastic")])
     event.remove({output: 'powah:energy_cell_basic'})
     event.remove({output: 'powah:energy_cable_basic'})
     event.shaped(Item.of("powah:energy_cable_basic", 4), ['aaa', 'bcb', 'aaa'], {a: "powah:dielectric_rod_horizontal",
      b: "emendatusenigmatica:osmium_ingot", c: "powah:capacitor_basic"})
     event.shaped("powah:energy_cell_basic",
     ['aaa', 'bcb', 'aaa'],
     {a: "emendatusenigmatica:osmium_ingot", b: "powah:capacitor_basic_large", c: "powah:dielectric_casing"})
     .id('powah:crafting/energy_cell_basic')

     event.shaped("powah:battery_basic",
     ['aba', 'cdc', 'aea'],
     {a: "powah:dielectric_paste", b: "emendatusenigmatica:osmium_ingot", c: "powah:capacitor_basic_large",
      d: "minecraft:redstone_block", e: "powah:blank_card"}).id('powah:crafting/battery_basic')
     
      event.shaped("powah:energizing_rod_basic", ['zaz', 'bcb', 'zdz'],
      {a: Ingredient.of('#forge:storage_blocks/quartz'), b: "powah:capacitor_basic", c: "powah:dielectric_casing", d: "emendatusenigmatica:brass_rod", z: 'minecraft:air'})
      .id('powah:crafting/energizing_rod_basic')
      
      event.shaped("powah:furnator_basic", ['aaa', 'bcb', 'ada'],
      {a: "emendatusenigmatica:osmium_ingot", b: "powah:capacitor_basic", c: "powah:dielectric_casing", d: "ironfurnaces:iron_furnace"})
      .id('powah:crafting/furnator_basic')
      
      event.shaped("powah:magmator_basic", ['aaa', 'bcb', 'ada'],
      {a: "emendatusenigmatica:osmium_ingot", b: "powah:capacitor_basic", c: "powah:dielectric_casing", d: "immersiveengineering:thermoelectric_generator"})
      .id('powah:crafting/magmator_basic')
      
      event.shaped("powah:thermo_generator_basic", ['aba', 'cdc', 'efe'], {a: "powah:dielectric_paste",
       b: "emendatusenigmatica:osmium_ingot", c: "powah:capacitor_basic", d: "powah:dielectric_casing", e: "powah:thermoelectric_plate", f: "immersiveengineering:thermoelectric_generator"})
       .id('powah:crafting/thermo_generator_basic')
      
      event.shaped(Item.of("powah:reactor_basic", 4), ['aba', 'bcb', 'aba'],
       {a: "ad_astra:desh_plating", b: "powah:capacitor_basic_large", c: "emendatusenigmatica:uranium_crystal"})
       .id('powah:crafting/reactor_basic')
      
      event.shaped("powah:player_transmitter_basic", ['zaz', 'bcb', 'zdz'], {z: 'minecraft:air', a: "powah:player_aerial_pearl",
        b: "powah:capacitor_basic", c: "powah:dielectric_casing", d: "powah:dielectric_rod"})
        .id('powah:crafting/player_tranmitter_basic')
       
      event.shaped("powah:energy_hopper_basic", ['aaa', 'bcb', 'ada'], {a: "powah:dielectric_paste", b: "powah:capacitor_basic",
       c: "powah:dielectric_casing", d: "minecraft:hopper"}).id('powah:crafting/energy_hopper_basic')
       
      event.shaped("powah:energy_discharger_basic", ['aba', 'aca', 'aba'], {a: "powah:dielectric_paste", b: "powah:capacitor_basic",
       c: "powah:dielectric_casing"}).id('powah:crafting/energy_discharger_basic')

       event.recipes.powah.energizing(["emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot"], Item.of("powah:uraninite", 2), 60000)
       event.recipes.powah.energizing(["emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot"], Item.of("powah:uraninite", 3), 90000)
       event.recipes.powah.energizing(["emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot"], Item.of("powah:uraninite", 4), 120000)
       event.recipes.powah.energizing(["emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot"], Item.of("powah:uraninite", 5), 150000)
       event.recipes.powah.energizing(["emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot", "emendatusenigmatica:uranium_ingot"], Item.of("powah:uraninite", 6), 180000)
       event.recipes.powah.energizing(["emendatusenigmatica:uranium_block"], Item.of("powah:uraninite_block"), 270000)
    })