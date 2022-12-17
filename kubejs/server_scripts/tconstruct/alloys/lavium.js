onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/alloy/';
    const recipes = [
        {
            inputs: [
			    { name: 'tconstruct:uranium', amount: 144 },
			    { name: 'tconstruct:molten_lumium', amount: 144 },
                { name: 'minecraft:lava', amount: 144 },
                { name: 'tconstruct:molten_debris', amount: 144 }
            ],
            result: { fluid: 'tinkers_reforged:molten_lavium', amount: 144 },
            temperature: 1069,
            id: `${id_prefix}molten_lavium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});