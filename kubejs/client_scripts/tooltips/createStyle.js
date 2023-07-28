const ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription');
const Palette = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Palette');

ItemEvents.tooltip(event =>{
  event.addAdvanced('ae2:mysterious_cube', (item, _, tooltip) => {
    new ItemDescription(Palette.Gray)
      .withSummary(Component.translate('item.ae2.mysterious_cube.tooltip.summary'))
      // Create expects localized strings instead of components here, so we localize ourselves (.string)
      .withControl(Component.translate('item.ae2.mysterious_cube.tooltip.condition').string,
        Component.translate('item.ae2.mysterious_cube.tooltip.behaviour').string)
      .createTabs()
      .addInformation(tooltip);
      //Created by nebula_zorua! Thanks for the script!
  });
});