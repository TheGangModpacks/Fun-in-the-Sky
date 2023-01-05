onEvent('recipes', event => {
  event.replaceOutput('appliedenergistics2:certus_quartz_crystal', 'emendatusenigmatica:certus_quartz_gem')
event.replaceInput('appliedenergistics2:certus_quartz_crystal', 'emendatusenigmatica:certus_quartz_gem')
event.replaceInput('appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem')
event.replaceOutput('appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem')
event.replaceOutput(['refinedstorage:silicon', 'appliedenergistics2:silicon'], 'emendatusenigmatica:silicon_gem');
event.replaceInput('refinedstorage:silicon', 'emendatusenigmatica:silicon_gem');
event.replaceOutput(['create:copper_ingot', 'immersiveengineering:ingot_copper', 'tconstruct:copper_ingot', 'thermal:copper_ingot', 'mekanism:ingot_copper', 'tmechworks:copper_ingot',], 'emendatusenigmatica:copper_ingot');
event.replaceInput(['create:copper_ingot', 'immersiveengineering:ingot_copper', 'tconstruct:copper_ingot', 'thermal:copper_ingot', 'mekanism:ingot_copper', 'tmechworks:copper_ingot',], 'emendatusenigmatica:copper_ingot');










})