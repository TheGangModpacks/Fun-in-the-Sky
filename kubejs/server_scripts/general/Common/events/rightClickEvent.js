const CHUNK_DATA = "chunkdata";
function countOccurances(level, x, z) {
    if(!level.persistentData[CHUNK_DATA]) return 0;
    if(!level.persistentData[CHUNK_DATA][x]) return 0;
    if(!level.persistentData[CHUNK_DATA][x][z]) return 0;
    return level.persistentData[CHUNK_DATA][x][z];
}
function changeOccurance(level, x, z, count) {
    if(!level.persistentData[CHUNK_DATA]) level.persistentData[CHUNK_DATA] = {};
    if(!level.persistentData[CHUNK_DATA][x]) level.persistentData[CHUNK_DATA][x] = {};
    if(!level.persistentData[CHUNK_DATA][x][z]) level.persistentData[CHUNK_DATA][x][z] = 0;
    level.persistentData[CHUNK_DATA][x][z] += count;
}
BlockEvents.placed('extendedcrafting:ender_alternator', b =>{
    let chunkX = Math.floor(b.block.x / 16);
    let chunkZ = Math.floor(b.block.z / 16);
    let sum = 0;
    for(let x=-1; x<=1; x++) {
        for(let z=-1; z<=1; z++) {
            sum += countOccurances(b.level, chunkX + x, chunkZ + z);
        }
    }
    if(sum >= 16) {
        b.player.notify('Cannot place more than 16 Alternators nearby!');
        b.cancel();
    }
    changeOccurance(b.level, chunkX, chunkZ, 1);
});

BlockEvents.broken('extendedcrafting:ender_alternator', b =>{
    let chunkX = Math.floor(b.block.x / 16);
    let chunkZ = Math.floor(b.block.z / 16);
    changeOccurance(b.level, chunkX, chunkZ, -1);
});