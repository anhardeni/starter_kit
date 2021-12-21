<script context="module">
    export const load = async ({fetch}) =>
    {
        const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();

    return {
     props:{
        posts,
      
     },
     };
    };
    
    </script>

    <script>
   //  import { paginate, LightPaginationNav } from 'svelte-paginate'
 export let posts;
 let searchTerm = "";

 $: searchedPosts = posts.filter((post) => {
   return post.title.includes(searchTerm) || post.body.includes(searchTerm);
 });
  // let items = posts.reverse();
  // let currentPage = 1;
  // let pageSize = 4;
  // $: paginatedItems = paginate({ items, pageSize, currentPage })

//$: console.log(searchTerm);
    </script>

<h1>Post</h1>

<input type="text" placeholder="search" bind:value="{searchTerm}"/>


<div class="posts">
  {#if searchedPosts.length}
    {#each searchedPosts as item }
 
    <div class="posts">
       <h2 class="font-bold">{item.title.substring(0, 20)}</h2> 
        <p>{item.body.substring(0, 80)}</p>
        <p class="link"><a sveltekit:prefetch href={`/blog/${item.id}`}>Read More</a></p>
    </div>
          {/each}

          {:else}
          <p> No Found word "{searchTerm}" </p>

          {/if}
</div>

<!-- <LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/> -->

<style>
 @media screen and (max-width: 600px) {
    .posts{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin: 30px 0;
    }
  }

  input{
    border: 1px solid rgb(192, 74, 74);
    padding: 10px 20px;
    border-radius: 5px;
  }

    .posts {
    padding: 10px;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px #eee;
  }
  h2 {
    margin: 0;
  }

  .link {
    text-align: right;
  }

</style>
