JEIAddedEvents.registerRecipeCatalysts(event =>{
    let helper = event.data.getJeiHelpers()
    let recipeType = helper.getRecipeType("create:sequenced_assembly")
    if (recipeType.isPresent()) {
      event.data.addRecipeCatalyst("create:belt_connector", recipeType.get())
    }
})