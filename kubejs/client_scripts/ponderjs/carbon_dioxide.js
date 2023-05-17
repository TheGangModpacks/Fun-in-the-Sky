/*Ponder.tags((event) =>{
    event.createTag('fits:carbon_dioxide_generation', "minecraft:furnace", "Carbon Dioxide Generation", "Learn how to obtain Carbon Dioxide.", [
        "kubejs:carbon_dioxide_liquid"
    ]);
}); 
Ponder.registry((event) =>{
    event.create("minecraft:furnace").scene("carbon_dioxide", "Carbon Dioxide Scene", "fits:carbon_dioxide", (scene, util) => {
        scene.world.showSection([0, 0, 0, 5, 2, 6], Facing.west);
        scene.idle(10);
        scene.text(60, "Carbon Dioxide is made from a Furnace actively burning items.", [3, 1, 5]).placeNearTarget().attachKeyFrame();
        scene.idle(40);
    })
})*/