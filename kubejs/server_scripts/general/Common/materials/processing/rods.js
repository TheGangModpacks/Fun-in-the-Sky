const rod_ingots = {
    emendatusenigmatica: ['nickel', 'steel', 'aluminum', 'brass'],
    minecraft: ['iron', 'copper'],
    botania: ['manasteel', 'terrasteel', 'elementium']
};
ServerEvents.recipes(event =>{
    event.remove({output: '#forge:rods'})
for (const mod in rod_ingots) {
    for (const ingot of rod_ingots[mod]) {
        event.recipes.thermal.press([`emendatusenigmatica:${ingot}_rod`],[`${mod}:${ingot}_ingot`, 'immersiveengineering:mold_rod']).energy(2400)
        event.custom({
              "type": "immersiveengineering:metal_press",
              "energy": 2400,
              "input": {
                "item": `${mod}:${ingot}_ingot`
              },
              "mold": "immersiveengineering:mold_rod",
              "result": {
                  "item": `emendatusenigmatica:${ingot}_rod`
                }
        })
        event.custom({
            type: "createaddition:rolling",
            input: {item: `${mod}:${ingot}_ingot`},
            result: {item: `emendatusenigmatica:${ingot}_rod`}
        })
    }}
})