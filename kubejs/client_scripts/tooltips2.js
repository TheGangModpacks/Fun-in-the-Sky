ItemEvents.tooltip(tooltip =>{
// Get the item stack from the event
  let item = event.getItem();
  // Get the main color of the item as an integer
  let color = item.color;
  // Create a list of colored text components for each line of the tooltip
  let lines = [];
  for (let line of event.getTooltip()) {
    // Create a colored text component with the same text as the original line
    let coloredLine = Text.of(line.getString()).color(color);
    // Add the colored line to the list
    lines.push(coloredLine);
  }
  // Set the tooltip to the list of colored lines
  event.setTooltip(lines);
});