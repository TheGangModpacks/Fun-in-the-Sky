ServerEvents.recipes(event =>{
    event.custom({
        type: amadron,
        id: "pneumaticcraft:amadron/assembly_program_laser",
        input:{type: "ITEM", amount: 48, id: "minecraft:emerald"},
        level: 0,
        output:{type: "ITEM", amount: 1, id: "pneumaticcraft:assembly_program_laser"},
        static: true
    }).id('pneumaticcraft:amadron/assembly_program_laser')
    event.custom({
        type: amadron,
        id: "pneumaticcraft:amadron/assembly_program_drill",
        input:{type: "ITEM", amount: 48, id: "minecraft:emerald"},
        level: 0,
        output:{type: "ITEM", amount: 1, id: "pneumaticcraft:assembly_program_drill"},
        static: true
    }).id('pneumaticcraft:amadron/assembly_program_drill')
    event.custom({
        type: amadron,
        id: "pneumaticcraft:amadron/assembly_program_drill_laser",
        input:{type: "ITEM", amount: 96, id: "minecraft:emerald"},
        level: 0,
        output:{type: "ITEM", amount: 1, id: "pneumaticcraft:assembly_program_drill_laser"},
        static: true
    }).id('pneumaticcraft:amadron/assembly_program_drill_laser')
    event.custom({
        type: amadron,
        id: "pneumaticcraft:amadron/pcb_blueprint",
        input:{type: "ITEM", amount: 48, id: "minecraft:emerald"},
        level: 0,
        output:{type: "ITEM", amount: 1, id: "pneumaticcraft:pcb_blueprint"},
        static: true
    }).id('pneumaticcraft:amadron/pcb_blueprint')
})