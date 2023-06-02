ServerEvents.recipes(event => {
    const rod_ingots = {
        emendatusenigmatica: ['nickel', 'steel', 'aluminum', 'brass'],
        minecraft: ['iron', 'copper'],
        botania: ['manasteel', 'terrasteel', 'elementium'],
        botanicadds: ['gaiasteel']
    };

    for (const mod in rod_ingots) {
        for (const ingot of rod_ingots[mod]) {
            event.remove({output: `emendatusenigmatica:${ingot}_rod`})
            event.recipes.thermal.press([`emendatusenigmatica:${ingot}_rod`],[`${mod}:${ingot}_ingot`, "immersiveengineering:mold_rod"]).energy(2400)
            event.recipes.immersiveengineering.metal_press(`emendatusenigmatica:${ingot}_rod`, `${mod}:${ingot}_ingot`, "immersiveengineering:mold_rod").energy(2400)
            event.custom({
            type: "createaddition:rolling",
            input: {item: `${mod}:${ingot}_ingot`},
            result: {item: `emendatusenigmatica:${ingot}_rod`}})
        }
    }
    event.shapeless(Item.of('emendatusenigmatica:nickel_rod'), ['immersiveengineering:hammer', 'emendatusenigmatica:nickel_ingot', 'emendatusenigmatica:nickel_ingot', 'emendatusenigmatica:nickel_ingot', 'emendatusenigmatica:nickel_ingot'])
})