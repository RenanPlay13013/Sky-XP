JEIEvents.hideItems(event =>{
const generators = ['simplefluidgenerators:basic_water_generator', 'simplefluidgenerators:basic_fluid_tank', 'simplefluidgenerators:basic_lava_generator', 'simple_resource_generators:simple_ore_generator', 'simple_resource_generators:advanced_ore_generator', 'simple_resource_generators:random_ore_generator', 'simple_resource_generators:random_sapling_generator', 'simple_resource_generators:random_seed_generator', 'simple_resource_generators:simple_ore_generator_placement', 'simple_resource_generators:raw_conversion_generator', 'simple_resource_generators:simple_water_condenser', 'simple_resource_generators:simple_lava_condenser']
const Apothecary = ['botania:apothecary_forest', 'botania:apothecary_plains', 'botania:apothecary_mountain', 'botania:apothecary_fungal', 'botania:apothecary_swamp', 'botania:apothecary_desert', 'botania:apothecary_taiga', 'botania:apothecary_mesa', 'botania:apothecary_mossy', 'botania:apothecary_livingrock', 'botania:apothecary_deepslate']
generators.forEach(Generators => { 
event.hide(Generators)
})
Apothecary.forEach(apothecary => { 
event.hide(apothecary)
})
event.hide('mekanism:combiner')
event.hide(['extendedcrafting:basic_catalyst', 'extendedcrafting:basic_component'])
event.hide('mekanism:basic_combining_factory')
event.hide('mekanism:basic_tier_installer')
event.hide('mekanism:advanced_tier_installer')
event.hide('mekanism:elite_tier_installer')
event.hide('mekanism:ultimate_tier_installer')
event.hide('mekanism:advanced_combining_factory')
event.hide('mekanism:elite_combining_factory')
event.hide('mekanism:ultimate_combining_factory')
})


ItemEvents.tooltip(event => {  
   const draconicItens = /draconicevolution:/
   event.add('#forge:ingots/terrasteel', '§6Gasta meia mana pool para ser feito!')
   event.add(draconicItens, '§aEm Breve...')
    
      const ban = [ 
          'industrialforegoing:common_black_hole_unit', 
          'industrialforegoing:pity_black_hole_unit', 
          'industrialforegoing:simple_black_hole_unit', 
          'industrialforegoing:advanced_black_hole_unit', 
          'industrialforegoing:supreme_black_hole_unit', 
          'ae2:spatial_anchor', 
          'ae2:matter_cannon', 
          'botania:laputa_shard',
          'mekanism:cardboard_box', 
          'mekanism:digital_miner', 
          'reliquary:rod_of_lyssa',
          'ars_nouveau:ritual_flight', 
          'thermal:satchel',
          'forbidden_arcanus:orb_of_temporary_flight'
      ];  
      ban.forEach(banidos => { 
          event.add(banidos, '§4 ❌ §cItem Banido §4❌')
      })
  })


