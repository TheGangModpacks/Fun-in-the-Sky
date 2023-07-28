ServerEvents.recipes(r =>{
    r.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "emendatusenigmatica:gold_plate"
      },
      "loops": 5,
      "results": [
        {
          "chance": 120.0,
          "item": "create:precision_mechanism"
        },
        {
          "chance": 8.0,
          "item": "emendatusenigmatica:gold_plate"
        },
        {
          "chance": 8.0,
          "item": "create:andesite_alloy"
        },
        {
          "chance": 5.0,
          "item": "create:cogwheel"
        },
        {
          "chance": 3.0,
          "item": "minecraft:gold_nugget"
        },
        {
          "chance": 2.0,
          "item": "create:shaft"
        },
        {
          "chance": 2.0,
          "item": "create:crushed_raw_gold"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:clock"
        }
      ],
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "create:incomplete_precision_mechanism"
            },
            {
              "item": "create:copper_mechanism"
            }
          ],
          "results": [
            {
              "item": "create:incomplete_precision_mechanism"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "create:incomplete_precision_mechanism"
            },
            {
              "item": "create:large_cogwheel"
            }
          ],
          "results": [
            {
              "item": "create:incomplete_precision_mechanism"
            }
          ]
        },
        {
          "type": "create:filling",
          "ingredients": [
            Item.of('create:incomplete_precision_mechanism').toJson(),
            { amount: 1000, fluid: 'create:chocolate', nbt: {}}
          ],
          results: [
            Item.of('create:incomplete_precision_mechanism').toJson()
            ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "create:incomplete_precision_mechanism"
            },
            {
              "item": "emendatusenigmatica:brass_ingot"
            }
          ],
          "results": [
            {
              "item": "create:incomplete_precision_mechanism"
            }
          ]
        }
      ],
      "transitionalItem": {
        "item": "create:incomplete_precision_mechanism"
      }
    })
})