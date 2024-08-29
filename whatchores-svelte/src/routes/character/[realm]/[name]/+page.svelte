<script lang="ts">
    import type { PageData } from './$types';    
    export let data: PageData;
    let characterName = data.charData?.raiderIOCharacterData.name;
    let guildName = data.charData?.raiderIOCharacterData.guild.name;
    let characterArmory = `https://worldofwarcraft.blizzard.com/en-us/character/us/${data.charData?.raiderIOCharacterData.realm}/${characterName}`;
    let guildArmory = `https://worldofwarcraft.blizzard.com/en-us/guild/us/${data.charData?.raiderIOCharacterData.guild.realm}/${guildName}`
    const itemLevelEquipped = data.charData?.raiderIOCharacterData?.gear?.item_level_equipped ?? 0;
    const roundedItemLevel = Math.ceil(itemLevelEquipped);
    const mythicPlusScores = data.charData?.raiderIOCharacterData.mythic_plus_scores_by_season ?? [];
    let count = 0;
    if (data.charRaidData) {
    for (let i = 0; i < data.charRaidData?.length; i++) {        
            count++;        
    }
}
    let dungeonSlot1 =  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 1 ? 'text-lime-400' : 'text-red-600';
    let dungeonSlot2 =  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 4 ? 'text-lime-400' : 'text-red-600';
    let dungeonSlot3 =  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 8 ? 'text-lime-400' : 'text-red-600';
    let dungeonSlot1Value =  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 1 ? `[Ilvl ${data.charData?.dungeonVaultSlots[0]}]` : null;
    let dungeonSlot2Value =  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 4 ? `[Ilvl ${data.charData?.dungeonVaultSlots[3]}]` : null;
    let dungeonSlot3Value =  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs &&  data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length >= 8 ? `[Ilvl ${data.charData?.dungeonVaultSlots[7]}]` : null;
    let runs = data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs || [];
</script>
<div style="color: {data.charData?.classColor}" class="flex justify-center items-center pt-5 flex-wrap">
    <div class="max-w-md mx-auto bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="md:shrink-0">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="h-32 w-full object-cover md:h-full md:w-48" src="{data.charData?.characterMedia.assets[1].value}" alt="Character Thumbnail Picture" />
            </div>
            <div style="color: {data.charData?.classColor}" class="p-8">
                <div class="uppercase tracking-wide text-md font-semibold"><a class='hover:text-purple-600 transition-colors' href={characterArmory}>{characterName}</a> <a class='hover:text-purple-600 transition-colors' href={guildArmory}>&lt;{guildName}&gt;</a></div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="block mt-1 text-lg leading-tight font-medium text-inherit hover:underline">Item Level {roundedItemLevel} {data.charData?.raiderIOCharacterData.active_spec_name} {data.charData?.raiderIOCharacterData.char_class}</a>
                {#each mythicPlusScores as season}
                    <p>Mythic+ Score: {season.scores.all}</p>
                {/each}
            </div>
        </div>
    </div>
</div>
<div class="overflow-x-auto pt-24 border-0 rounded-md max-w-screen-lg ms-auto me-auto">
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
                <td class="px-6 py-4 whitespace-no-wrap text-xl">Dungeons ({data.charData?.raiderIOCharacterData.mythic_plus_weekly_highest_level_runs.length} completed)</td>                            
                <td class={`px-6 py-4 whitespace-no-wrap ${dungeonSlot1}`}>
                Complete 1 Heroic, Mythic, or Timewalking Dungeon {#if dungeonSlot1Value != null} {dungeonSlot1Value} {/if} 
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