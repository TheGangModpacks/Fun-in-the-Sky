ServerEvents.recipes(r =>{
	r.remove({ output: 'minecraft:gunpowder', type: 'exnihilosequentia:sieve' })
        r.custom({
            type: sieve,
            rolls:[
                {chance: 0.01, mesh: 'string'},
                {chance: 0.03, mesh: 'flint'},
                {chance: 0.05, mesh: 'iron'},
                {chance: 0.10, mesh: 'diamond'},
                {chance: 0.15, mesh: 'emerald'},
                {chance: 0.15, mesh: 'emerald'},
                {chance: 0.25, mesh: 'netherite'},
                {chance: 0.25, mesh: 'netherite'},
                {chance: 0.25, mesh: 'netherite'}
            ],
                input: {item: 'exnihilosequentia:dust'},
                result:{item: 'minecraft:gunpowder'}
        })
})