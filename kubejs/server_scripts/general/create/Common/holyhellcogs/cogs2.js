ServerEvents.tags('item', event =>{
  //Cogwheels
    event.add('smallcogs:spruce', "create:cogwheel")
    event.add('smallcogs:spruce', /extendedgears:(?!.*Large).*Spruce.*/i)
    event.add('smallcogs:birch', /extendedgears:(?!.*Large).*Birch.*/i)
    event.add('smallcogs:jungle', /extendedgears:(?!.*Large).*Jungle.*/i)
    event.add('smallcogs:dark_oak', ['extendedgears:shaftless_dark_oak_cogwheel', 'extendedgears:half_shaft_dark_oak_cogwheel', 'extendedgears:dark_oak_cogwheel'])
    event.add('smallcogs:mangrove', /extendedgears:(?!.*Large).*Mangrove.*/i)
    event.add('smallcogs:oak', ['extendedgears:shaftless_oak_cogwheel', 'extendedgears:half_shaft_oak_cogwheel', 'extendedgears:oak_cogwheel'])
    event.add('smallcogs:acacia', /extendedgears:(?!.*Large).*Acacia.*/i)
    event.add('smallcogs:crimson', /extendedgears:(?!.*Large).*Crimson.*/i)
    event.add('smallcogs:warped', /extendedgears:(?!.*Large).*Warped.*/i)
    event.add('smallcogs:copper', /extendedgears:(?!.*Large).*Copper.*/i)
    event.add('smallcogs:iron', /extendedgears:(?!.*Large).*Iron.*/i)
    event.add('smallcogs:steel', /extendedgears:(?!.*Large).*Steel.*/i)
    //Large Cogwheels
    event.add('largecogs:spruce', "create:large_cogwheel")
    event.add('largecogs:spruce', /extendedgears:.*Large.*Spruce.*/i)
    event.add('largecogs:birch', /extendedgears:.*Large.*Birch.*/i)
    event.add('largecogs:jungle', /extendedgears:.*Large.*Jungle.*/i)
    event.add('largecogs:dark_oak', ['extendedgears:large_shaftless_dark_oak_cogwheel', 'extendedgears:large_half_shaft_dark_oak_cogwheel', 'extendedgears:large_dark_oak_cogwheel'])
    event.add('largecogs:mangrove', /extendedgears:.*Large.*Mangrove.*/i)
    event.add('largecogs:oak', ['extendedgears:large_shaftless_oak_cogwheel', 'extendedgears:large_half_shaft_oak_cogwheel', 'extendedgears:large_oak_cogwheel'])
    event.add('largecogs:acacia', /extendedgears:.*Large.*Acacia.*/i)
    event.add('largecogs:crimson', /extendedgears:.*Large.*Crimson.*/i)
    event.add('largecogs:warped', /extendedgears:.*Large.*Warped.*/i)
    event.add('largecogs:copper', /extendedgears:.*Large.*Copper.*/i)
    event.add('largecogs:iron', /extendedgears:.*Large.*Iron.*/i)
    event.add('largecogs:steel', /extendedgears:.*Large.*Steel.*/i)
})








ServerEvents.recipes(event =>{
  event.remove({mod: 'extendedcrafting'})
  event.remove({output:['create:cogwheel', 'create:large_cogwheel']})
  let tags = [
    '#smallcogs:spruce', '#smallcogs:birch', '#smallcogs:jungle', '#smallcogs:dark_oak', '#smallcogs:mangrove',
    '#smallcogs:oak', '#smallcogs:acacia', '#smallcogs:crimson', '#smallcogs:warped', '#smallcogs:copper', '#smallcogs:iron', '#smallcogs:steel',
    '#largecogs:spruce', '#largecogs:birch', '#largecogs:jungle', '#largecogs:dark_oak', '#largecogs:mangrove',
    '#largecogs:oak', '#largecogs:acacia', '#largecogs:crimson', '#largecogs:warped', '#largecogs:copper', '#largecogs:iron', '#largecogs:steel'];

  function makeStonecuttingRecipes(tag) {
    let set = Ingredient.of(tag).itemIds;
    for (let i = 0; i < set.length; i++) {
      for (let ii = 0; ii < set.length; ii++) {
        if (i == ii) continue;
        event.stonecutting(set[ii], set[i]);
      }
    }
  }
  for (let tag of tags) {
    makeStonecuttingRecipes(tag);
  }
});