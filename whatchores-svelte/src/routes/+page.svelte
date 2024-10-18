<script lang="ts">
    export let data;
</script>

<div class="flex mt-5">
    <ul>
        {#if data.news != null}
            {#each data.news as newsPost}
            <div class="ml-20 mb-5 bg-slate-700 text-white max-w-sm rounded-sm">
                <a href="{newsPost.link}" target="_blank">
                    <h1 class="text-lg ml-1">{newsPost.title}</h1>
                    <img class="max-w-sm" src="{newsPost.image}" alt="{newsPost.title} Image">
                </a>
                
            </div>
            {/each}
        {/if}
    </ul>
    <div class="{data.news === null ? 'mx-auto text-center' : 'invisible md:visible md:mt-52 md:ml-7 md:text-center lg:mt-0 lg:ml-80 min-[2560px]:ml-[622px]'} sticky top-[calc(4rem+1rem)] h-64">
        <div>
            <h1 class="text-4xl text-center">Welcome!</h1>
            {#if data.token != null}
            <p class="mt-10 text-lg">The WoW Token is currently worth {data.token.price.toLocaleString()} gold!</p>
            {:else}
            <p class="mt-10 text-lg">The WoW Token price is not currently available.</p>
            {/if} 
            <div class="flex justify-center mt-3">
            {#if data.affixes != null}
                {#each data.affixes.affix_details as affix }
                <div class="mr-5">
                    <a href="{affix.wowhead_url}" target="_blank">
                        {#if affix.icon === "spell_priest_voidblast"}
                        <img class="w-20 rounded-md cursor-pointer" alt="{affix.name}" src="https://wow.zamimg.com/images/wow/icons/large/spell_priest_void-blast.jpg">
                        {:else}
                        <img class="w-20 rounded-md cursor-pointer" alt="{affix.name}" src="https://wow.zamimg.com/images/wow/icons/large/{affix.icon}.jpg">
                        {/if}
                    </a>
                </div>
                {/each}
            {/if}
            </div>
        </div>
    </div>
</div>
