<script lang="ts">
    import { ItemQuality } from '$lib/types';
import type { PageData } from './$types';    
    export let data: PageData;
    let characterName = data.character?.raiderIOCharacterData.name;
    let guildName = data.character?.raiderIOCharacterData.guild.name;
    let characterArmory = `https://worldofwarcraft.blizzard.com/en-us/character/us/${data.character?.raiderIOCharacterData.realm}/${characterName}`;
    let guildArmory = `https://worldofwarcraft.blizzard.com/en-us/guild/us/${data.character?.raiderIOCharacterData.guild.realm}/${guildName}`
    const itemLevelEquipped = data.character?.raiderIOCharacterData?.gear?.item_level_equipped ?? 0;
    const roundedItemLevel = Math.ceil(itemLevelEquipped);
    const mythicPlusScores = data.character?.raiderIOCharacterData.mythic_plus_scores_by_season ?? [];
    let count = 0;
    if (data.character.raidBossesKilledThisWeek) {
    for (let i = 0; i < data.character.raidBossesKilledThisWeek?.length; i++) {        
            count++;
    }
}
    let dungeonSlot1 =  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 1 ? 'text-lime-400' : 'text-red-600';
    let dungeonSlot2 =  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 4 ? 'text-lime-400' : 'text-red-600';
    let dungeonSlot3 =  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 8 ? 'text-lime-400' : 'text-red-600';
    let dungeonSlot1Value =  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 1 ? `[Ilvl ${data.character?.dungeonVaultSlots[0]}]` : null;
    let dungeonSlot2Value =  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 4 ? `[Ilvl ${data.character?.dungeonVaultSlots[3]}]` : null;
    let dungeonSlot3Value =  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 8 ? `[Ilvl ${data.character?.dungeonVaultSlots[7]}]` : null;
    let runs = data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs || [];

    let head = data.character.raiderIOCharacterData.gear.items.head;
    let neck = data.character.raiderIOCharacterData.gear.items.neck;
    let shoulders = data.character.raiderIOCharacterData.gear.items.shoulder;
    let back = data.character.raiderIOCharacterData.gear.items.back;
    let chest = data.character.raiderIOCharacterData.gear.items.chest;
    let wrists = data.character.raiderIOCharacterData.gear.items.wrist;
    let hands = data.character.raiderIOCharacterData.gear.items.hands;
    let waist = data.character.raiderIOCharacterData.gear.items.waist;
    let legs = data.character.raiderIOCharacterData.gear.items.legs;
    let feet = data.character.raiderIOCharacterData.gear.items.feet;
    let ring1 = data.character.raiderIOCharacterData.gear.items.finger1;
    let ring2 = data.character.raiderIOCharacterData.gear.items.finger2;
    let trinket1 = data.character.raiderIOCharacterData.gear.items.trinket1;
    let trinket2 = data.character.raiderIOCharacterData.gear.items.trinket2;
    let mainhand = data.character.raiderIOCharacterData.gear.items.mainhand;
    let offhand = data.character.raiderIOCharacterData.gear.items.offhand;
</script>
<div style="color: {data.character?.classColor}" class="flex justify-center items-center pt-5 flex-wrap">
    <div class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl flex">
        <!-- Character Panel -->
        <div class="md:shrink-0 p-4 flex flex-col items-center bg-slate-800">
            <!-- Character Image -->
            <img class="h-24 w-full object-cover md:h-32 md:w-fit rounded-lg" src="{data.character?.characterMedia[1].link}" alt="Character" />
            <div style="color: {data.character?.classColor}" class="p-4 text-center">
                <div class="uppercase tracking-wide text-md font-semibold">
                    <a class='hover:text-purple-600 transition-colors' href={characterArmory}>{characterName}</a>
                    <a class='hover:text-purple-600 transition-colors' href={guildArmory}>&lt;{guildName}&gt;</a>
                </div>
                <p class="block mt-1 text-lg leading-tight font-medium text-inherit hover:underline">
                    Item Level {roundedItemLevel} {data.character?.raiderIOCharacterData.active_spec_name} {data.character?.raiderIOCharacterData.char_class}
                </p>
                {#each mythicPlusScores as season}
                    <p>Mythic+ Score: {season.scores.all}</p>
                {/each}
                
                {data.character.raiderIOCharacterData.raid_progression.nerubarpalace.summary} Nerub-ar Palace
                    <div class="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 justify-center">
                        {#each [head, neck, shoulders, back, chest, wrists, hands, waist, legs, feet, ring1, ring2, trinket1, trinket2] as item}
                        <div class="has-tooltip flex flex-col items-center">
                            <a target="_blank" href="https://www.wowhead.com/item={item.item_id}/">
                                <img class="max-w-12 mb-2 hover:cursor-pointer" src="https://wow.zamimg.com/images/wow/icons/large/{item.icon}.jpg" alt="{item.name}">
                            </a>
                            {#if item.item_quality == ItemQuality.Common}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#ffffff] -mt-8">{item.name}</span>
                            {:else if item.item_quality == ItemQuality.Uncommon}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#1eff00] -mt-8">{item.name}</span>
                            {:else if item.item_quality == ItemQuality.Rare}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#0070dd] -mt-8">{item.name}</span>
                            {:else if item.item_quality == ItemQuality.Epic}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#a335ee] -mt-8">{item.name}</span>
                            {:else if item.item_quality == ItemQuality.Legendary}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#ff8000] -mt-8">{item.name}</span>
                            {:else if item.item_quality == ItemQuality.Artifact}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#e6cc80] -mt-8">{item.name}</span>
                            {:else if item.item_quality == ItemQuality.Heirloom}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#00ccff] -mt-8">{item.name}</span>
                            {:else}
                            <span style="color: {data.character?.classColor}" class="tooltip rounded shadow-lg p-1 bg-slate-700 text-heirloom -mt-8">{item.name}</span>
                            {/if}
                        </div>
                        {/each}
                    
                        <!-- Mainhand item -->
                        <div class="has-tooltip flex flex-col items-center">
                            <a target="_blank" href="https://www.wowhead.com/item={mainhand.item_id}/">
                                <img class="max-w-12 mb-2 hover:cursor-pointer" src="https://wow.zamimg.com/images/wow/icons/large/{mainhand.icon}.jpg" alt="mainhand">
                            </a>
                            {#if mainhand.item_quality == ItemQuality.Common}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#ffffff] -mt-8">{mainhand.name}</span>
                            {:else if mainhand.item_quality == ItemQuality.Uncommon}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#1eff00] -mt-8">{mainhand.name}</span>
                            {:else if mainhand.item_quality == ItemQuality.Rare}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#0070dd] -mt-8">{mainhand.name}</span>
                            {:else if mainhand.item_quality == ItemQuality.Epic}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#a335ee] -mt-8">{mainhand.name}</span>
                            {:else if mainhand.item_quality == ItemQuality.Legendary}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#ff8000] -mt-8">{mainhand.name}</span>
                            {:else if mainhand.item_quality == ItemQuality.Artifact}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#e6cc80] -mt-8">{mainhand.name}</span>
                            {:else if mainhand.item_quality == ItemQuality.Heirloom}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#00ccff] -mt-8">{mainhand.name}</span>
                            {:else}
                            <span style="color: {data.character?.classColor}" class="tooltip rounded shadow-lg p-1 bg-slate-700 text-heirloom -mt-8">{mainhand.name}</span>
                            {/if}
                        </div>
                    
                        <!-- Offhand item (if exists) -->
                        {#if data.character.raiderIOCharacterData.gear.items.offhand != null}
                        <div class="has-tooltip flex flex-col items-center">
                            <a target="_blank" href="https://www.wowhead.com/item={offhand.item_id}/">
                                <img class="max-w-12 mb-2 hover:cursor-pointer" src="https://wow.zamimg.com/images/wow/icons/large/{offhand.icon}.jpg" alt="offhand">
                            </a>
                            {#if offhand.item_quality == ItemQuality.Common}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#ffffff] -mt-8">{offhand.name}</span>
                            {:else if offhand.item_quality == ItemQuality.Uncommon}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#1eff00] -mt-8">{offhand.name}</span>
                            {:else if offhand.item_quality == ItemQuality.Rare}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#0070dd] -mt-8">{offhand.name}</span>
                            {:else if offhand.item_quality == ItemQuality.Epic}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#a335ee] -mt-8">{offhand.name}</span>
                            {:else if offhand.item_quality == ItemQuality.Legendary}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#ff8000] -mt-8">{offhand.name}</span>
                            {:else if offhand.item_quality == ItemQuality.Artifact}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#e6cc80] -mt-8">{offhand.name}</span>
                            {:else if offhand.item_quality == ItemQuality.Heirloom}
                            <span class="tooltip rounded shadow-lg p-1 bg-slate-700 text-[#00ccff] -mt-8">{offhand.name}</span>
                            {:else}
                            <span style="color: {data.character?.classColor}" class="tooltip rounded shadow-lg p-1 bg-slate-700 text-heirloom -mt-8">{offhand.name}</span>
                            {/if}
                        </div>
                        {/if}
                    </div>
            </div>
        </div>
        <!-- Gear List -->
        
    </div>
</div>

<div class="overflow-x-auto pt-24 border-0 rounded-md max-w-screen-lg ms-auto me-auto mb-4">
    <table class="min-w-full bg-slate-800 border-0 rounded-md">
        <thead>
            <tr>
                <th class="px-6 py-3 border-b border-slate-600 text-left leading-4 text-inherit">Type</th>
                <th class="px-6 py-3 border-b border-slate-600 text-left leading-4 text-inherit">Reward Tier 1</th>
                <th class="px-6 py-3 border-b border-slate-600 text-left leading-4 text-inherit">Reward Tier 2</th>
                <th class="px-6 py-3 border-b border-slate-600 text-left leading-4 text-inherit">Reward Tier 3</th>
            </tr>
        </thead>
        <tbody class="bg-slate-700 divide-y divide-slate-600">
            <tr>
                <td class="px-6 py-4 whitespace-no-wrap text-xl">Raids</td>                           
                <td class={`px-6 py-4 whitespace-no-wrap ${count >= 2 ? 'text-lime-400' : 'text-red-600'}`}>
                    
                    Defeat 2 Nerub-ar Palace Raid Bosses
                </td>
                <td class={`px-6 py-4 whitespace-no-wrap ${count >= 4 ? 'text-lime-400' : 'text-red-600'}`}>
                    Defeat 4 Nerub-ar Palace Raid Bosses
                </td>
                <td class={`px-6 py-4 whitespace-no-wrap ${count >= 7 ? 'text-lime-400' : 'text-red-600'}`}>
                    Defeat 7 Nerub-ar Palace Raid Bosses
                </td>
            </tr>
            <tr>
                <td class="px-6 py-4 whitespace-no-wrap text-xl">Dungeons ({data.character?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length} completed)</td>                            
                <td class={`px-6 py-4 whitespace-no-wrap ${dungeonSlot1}`}>
                Complete 1 Heroic, Mythic, or Timewalking Dungeon {#if dungeonSlot1Value != null} <br/>{dungeonSlot1Value} {/if} 
                {#each runs as run}
                <div>
                    <p>Dungeon: {run.dungeon}</p>
                    <p>Mythic Level: {run.mythic_level}</p>
                </div>
            {/each}
            
                </td>
                <td class={`px-6 py-4 whitespace-no-wrap ${dungeonSlot2}`}>
                    Complete 4 Heroic, Mythic, or Timewalking Dungeons {#if dungeonSlot2Value != null} {dungeonSlot2Value} {/if} 
                </td>
                <td class={`px-6 py-4 whitespace-no-wrap ${dungeonSlot3}`}>
                    Complete 8 Heroic, Mythic, or Timewalking Dungeons {#if dungeonSlot3Value != null} {dungeonSlot3Value} {/if} 
                </td>
            </tr>                       
        </tbody>
    </table>
</div>

