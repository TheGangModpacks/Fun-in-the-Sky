//priority: 8

if(Platform.isLoaded('roughlyenoughitems')){
  //Roughly Enough Items
REIEvents.hide('item', event => {
  event.hide('#custom:disabled')
  event.hide('thermal:latex_bucket')
  event.hide(Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"thermal:latex"}}]}}'))
})
REIEvents.hide('fluid', event =>{
  event.hide('thermal:latex')
})

REIEvents.removeCategories(event => {
  event.yeet('minecraft:anvil')
  event.yeet('twilightforest:uncrafting')
  event.yeet('thermal:tree_extractor')
})} else if (Platform.isLoaded('jei')){

//Just ENough Items
JEIEvents.hideItems(event =>{
  event.hide('#custom:disabled')
  event.hide('thermal:latex_bucket')
  event.hide(Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"thermal:latex"}}]}}'))
})

JEIEvents.hideFluids(event =>{
  event.hide('thermal:latex')
})

JEIEvents.information(event =>{
  event.addItem('#custom:mekanism_tiered_ingredients', ['Mekanism Machines and Devices are all upgraded using Tier Installers.'])
  console.log('JEI Information');
})

JEIEvents.hideItems(event =>{
  event.hide('mekanism:enrichment_chamber').stage('mekanism_machines')
})

JEIEvents.removeCategories(event =>{
  event.remove('minecraft:anvil')
  event.remove('twilightforest:uncrafting')
  event.remove('thermal:tree_extractor')
})}