ServerEvents.recipes(event => {
    event.remove({output: 'create:andesite_alloy'})
    event.shaped('1x create:andesite_alloy', [
        'ABC',
        'DEF',
        'GHI'
        ], {
        A: 'minecraft:air',
        B: 'minecraft:air',
        C: 'minecraft:air',
        D: 'minecraft:air',
        E: 'minecraft:andesite',
        F: 'create:zinc_nugget',
        G: 'minecraft:air',
        H: 'create:zinc_nugget',
        I: 'minecraft:andesite'
        })
    })
    