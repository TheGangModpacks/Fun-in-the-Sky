ServerEvents.recipes(event => {
	event.remove({ id: 'extrastorage:part/storagepart_256k' })
	event.remove({ id: 'extrastorage:part/storagepart_1024k' })
	event.remove({ id: 'extrastorage:part/storagepart_4096k' })
	event.remove({ id: 'extrastorage:part/storagepart_16384k' })
	event.remove({ id: 'extrastorage:part/storagepart_16384k_fluid' })
	event.remove({ id: 'extrastorage:part/storagepart_65536k_fluid' })
	event.remove({ id: 'extrastorage:part/storagepart_262144k_fluid' })
	event.remove({ id: 'extrastorage:part/storagepart_1048576k_fluid' })
	event.remove({ output: 'extrastorage:disk_256k' })
	event.remove({ output: 'extrastorage:disk_1024k' })
	event.remove({ output: 'extrastorage:disk_4096k' })
	event.remove({ output: 'extrastorage:disk_16384k' })
	event.remove({ output: 'extrastorage:disk_16384k_fluid' })
	event.remove({ output: 'extrastorage:disk_65536k_fluid' })
	event.remove({ output: 'extrastorage:disk_262144k_fluid' })
	event.remove({ output: 'extrastorage:disk_1048576k_fluid' })
})