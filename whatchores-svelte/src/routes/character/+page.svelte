<script lang="ts">
    import type { PageData } from './$types';
    import { dev } from '$app/environment';
    import { goto } from '$app/navigation';
    import { realms } from '$lib/realms';
    let realmName: string;
    let characterName: string;
    export let data: PageData;

    async function PingCharacter(realm: string, name: string) {
        try 
        {
           let pingCharacterEndpoint = "https://whatchoresapi.azurewebsites.net/api/v1/general/pingCharacter"
            if (dev) {
                pingCharacterEndpoint = "https://localhost:7031/api/v1/general/pingCharacter"
            }
            const pingCharacterResponse = await fetch(`${pingCharacterEndpoint}?name=${name}&realm=${realm}`);

            if (pingCharacterResponse.status === 404) 
            {
                document.getElementById('errorNotification')?.classList.remove('invisible');
            } 
            else if (pingCharacterResponse.status === 200) 
            {
                goto(`/character/${realm.toLowerCase()}/${name.toLowerCase()}`)
            }
   
        } catch
        {
            document.getElementById('errorNotification')?.classList.remove('invisible');
        }
    }
    async function handleSubmit(event: Event) {
    event.preventDefault();
    if (!realms.some(realm => realm.realmName.toLowerCase() === realmName.toLowerCase())) {
        document.getElementById('invalidRealmNotification')?.classList.remove('invisible');
    } else {

        await PingCharacter(realmName,characterName);
    }
    }
function closeErrorNotification() {
document.getElementById('errorNotification')?.classList.add('invisible');
}
function closeInvalidRealmNotification() {
document.getElementById('invalidRealmNotification')?.classList.add('invisible');
}
</script>
<svelte:head>
    <title>What Chores</title> 
</svelte:head>
<div id="errorNotification" class="bg-red-400 border border-red-400 text-red-700 px-4 py-3 rounded relative w-fit mx-auto mt-5 invisible" role="alert">
    <strong class="mr-3 font-bold">Character not found</strong>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3 -mr-5">
        <svg 
          on:click={closeErrorNotification} 
          on:keydown={(event) => (event.key === 'Enter' || event.key === ' ') && closeErrorNotification()} 
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
  <div id="invalidRealmNotification" class="bg-red-400 border border-red-400 text-red-700 px-4 py-3 rounded relative w-fit mx-auto mt-5 invisible" role="alert">
    <strong class="mr-3 font-bold">Invalid realm</strong>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3 -mr-5">
        <svg 
          on:click={closeInvalidRealmNotification} 
          on:keydown={(event) => (event.key === 'Enter' || event.key === ' ') && closeInvalidRealmNotification()} 
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
                    {#each data.realmList
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