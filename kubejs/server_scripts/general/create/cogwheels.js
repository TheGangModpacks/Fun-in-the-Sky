ServerEvents.recipes(recipe =>{
    recipe.remove({ output: /^create:.*cogwheel/})
    recipe.shaped(Item.of('create:cogwheel'), [' a ', 'aba', ' a '], {a: "immersiveengineering:stick_treated", b: 'create:shaft'}).id('fits:shaped/create/cogwheel')
    recipe.shaped(Item.of('create:large_cogwheel'), ['aba', 'bcb', 'aba'], {a: 'immersiveengineering:stick_treated', b: '#forge:treated_wood', c: 'create:shaft'}).id('fits:shaped/create/large_cogwheel')

})