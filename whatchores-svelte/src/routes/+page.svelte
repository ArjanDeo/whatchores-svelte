<script lang="ts">
    export let data;
</script>
<svelte:head>
    <title>What Chores</title> 
</svelte:head>

<div class="md:flex mt-5">
    <div class="order-1 md:order-2 {data.news === null ? 'mx-auto text-center' : 'md:ml-2 md:mt-5 md:text-center lg:mt-0 lg:ml-80 min-[2560px]:ml-[622px]'} md:sticky top-[calc(4rem+1rem)] h-64">
        <div class="text-center">
            <h1 class="text-4xl">Welcome!</h1>
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
                            <img class="w-20 rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out" alt="{affix.name}" src="https://wow.zamimg.com/images/wow/icons/large/spell_priest_void-blast.jpg">
                        {:else}
                            <img class="w-20 rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out" alt="{affix.name}" src="https://wow.zamimg.com/images/wow/icons/large/{affix.icon}.jpg">
                        {/if}
                    </a>
                    <span class="w-20 block text-wrap">{affix.name}</span>
                </div>
                {/each}
                {/if}
            </div>
        </div>
    </div>
    <ul class=" mt-5 md:mt-0 order-2 md:order-1">
        {#if data.news != null}
            {#each data.news as newsPost}
            <div class="ml-20 mb-5 bg-slate-800 text-white w-72 md:w-auto md:max-w-sm rounded-sm">
                <a href="{newsPost.link}" target="_blank">
                    <h1 class="text-lg ml-1 px-0.5">{newsPost.title}</h1>
                    <img class="max-w-full" src="{newsPost.image}" alt="{newsPost.title} Image">
                </a>
            </div>
            {/each}
        {/if}
    </ul>
</div>
