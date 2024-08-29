<script>
  import "../app.css";
</script>
<div class="min-h-full sticky top-5">
  <nav class="bg-gray-800 w-fit mx-auto rounded-2xl mt-5 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
              <div class="flex items-center">
                  <div class="flex-shrink-0">
                      <img
                          class="h-8 w-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
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
<style>
  :global(body){    
    background-image: url("../lib/assets/WoW_The_War_Within_Global_Launch_RaidEnv_044.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
</style>
