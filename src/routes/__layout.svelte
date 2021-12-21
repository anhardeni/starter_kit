<script>
import Nav from "$lib/Nav.svelte";
</script>

<div class="container bg-red-200 h-16 text-2xl">
 <Nav />
<slot />
</div>

<style>
  .container{
      max-width: 800px;
      margin: 50px auto;
  }

</style>
