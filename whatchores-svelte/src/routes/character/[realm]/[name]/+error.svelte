<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
</script>

<h1 class="text-2xl flex mx-auto justify-center mt-5">The specified character could not be found</h1>
<button on:click={() => goto('/character')}  class="bg-blue-600 hover:bg-blue-700 text-white flex mx-auto mt-3 py-2 px-4 rounded">
    Go Back
  </button>