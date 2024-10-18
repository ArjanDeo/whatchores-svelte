<script>
  import "../app.css";
  import { onMount } from 'svelte';

  let showPopup = false;

  onMount(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      showPopup = true;
    }
  });

  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    showPopup = false;
  }
</script>
<div class="min-h-full sticky top-5">
  <nav class="bg-gray-800 w-fit mx-auto rounded-2xl mt-5 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
              <div class="flex items-center">
                  <div class="flex-shrink-0">
                      <img
                          class="h-8 w-8"
                          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Made with TailwindCSS"
                      />
                  </div>
                  <div class="md:block">
                      <div class="ml-10 flex items-baseline space-x-4">
                          <a class="hover:text-purple-600 transition-colors ease-in-out" href="/">Home</a>
                          <a class="hover:text-purple-600 transition-colors ease-in-out" href="/about">About</a>
                          <a class="hover:text-purple-600 transition-colors ease-in-out" href="/character">Character Search</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
</div>

<main class=''>
  <div class="text-white">        
      <slot />
  </div>
</main>
{#if showPopup}
  <div class="cookie-popup fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-xs md:max-w-lg">
    <p class="mb-2 md:mb-0 md:mr-2 text-center md:text-left text-sm md:text-base">
      This website uses cookies to provide a smoother experience.
    </p>
    <button on:click={acceptCookies} class="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700 transition-colors w-full md:w-auto">
      Accept Cookies
    </button>
  </div>
{/if}
<style>
  :global(body){    
    background-image: url("../lib/assets/WoW_The_War_Within_Global_Launch_RaidEnv_044.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
</style>
