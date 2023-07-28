JEIEvents.addItems(z =>{
let ConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

ConversionCategory.RECIPES.add(ConversionRecipe.create('ae2:fluix_block', 'ae2:mysterious_cube'))
console.log('hot dog buns')
}) 