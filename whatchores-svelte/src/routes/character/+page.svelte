<script lang="ts">
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';
    let realmName: string;
    let characterName: string;
    export let data: PageData;

    async function PingCharacter(realm: string, name: string) {
        try 
        {
            const pingCharacterResponse = await fetch(`https://localhost:7031/api/v1/general/pingCharacter?name=${name}&realm=${realm}`);

            if (pingCharacterResponse.status === 400) 
            {
                document.getElementById('errorNotification')?.classList.remove('invisible');
            } 
            else if (pingCharacterResponse.status === 200) 
            {
                goto(`/character/${realm}/${name}`)
            }
   
        } catch
        {
            document.getElementById('errorNotification')?.classList.remove('invisible');
        }
    }
    async function handleSubmit(event: Event) {
    event.preventDefault();
        await PingCharacter(realmName,characterName);
    }
function closeNotification() {
document.getElementById('errorNotification')?.classList.add('invisible');
}
</script>
<div>
    
</div>
<div id="errorNotification" class="bg-red-400 border border-red-400 text-red-700 px-4 py-3 rounded relative w-fit mx-auto mt-5 invisible" role="alert">
    <strong class="mr-3 font-bold">Character not found</strong>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3 -mr-5">
        <svg 
          on:click={closeNotification} 
          on:keydown={(event) => (event.key === 'Enter' || event.key === ' ') && closeNotification()} 
          class="fill-current h-6 w-6 text-red-500" 
          role="button" 
          tabindex="0" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
      </span>
      
  </div>
<form class="flex flex-col items-center justify-center h-full pt-24" on:submit|preventDefault={handleSubmit}>
    <div class="max-w-sm">
        <label for="realm" class="block text-sm font-medium leading-6 text-white">
            Realm
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
            <input
                type="text"
                name="realm"
                id="realm"
                list="realms"
                class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Realm"
                bind:value={realmName}
            />            
                <datalist id="realms">
                    {#each data.realmData
                        .sort((a, b) => a.realmName.localeCompare(b.realmName))
                        as realm (realm.realmName)}
                        <option value="{realm.realmName}">{realm.realmName}</option>
                    {/each}
                </datalist>
        </div>
    </div>
    <div class="max-w-sm mt-4">
        <label for="name" class="block text-sm font-medium leading-6 text-white">
            Character Name
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
            <input
                type="text"
                name="name"
                id="name"              
                class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Name"
                bind:value={characterName}
            />          
        </div>
    </div>
    <div class="max-w-sm mt-4">                
        <button type='submit' class='bg-purple-700 hover:bg-purple-800 transition-colors rounded-md border-0 py-1.5 text-white w-64'>Submit</button>
    </div>
</form>