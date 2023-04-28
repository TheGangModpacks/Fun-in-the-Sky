ServerEvents.recipes(event =>{
    let tags = ['#forge:ingots/terrasteel'];


    function makeShapelessRecipes(tag) {
        let set = Ingredient.of(tag).itemIds;
        for (let i = 0; i < set.length; i++) {
          for (let ii = 0; ii < set.length; ii++) {
            if (i == ii) continue;
            let inputs = ['immersiveengineering:hammer']; // add the hammer item
            for (let j = 0; j < 3; j++) {
              inputs.push(set[ii]); // add three items from the tag
            }
            event.shapeless(set[ii], inputs); // output item, input ingredients
          }
        }
      }
})