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
        export let posts;

    </script>

<h1 class="uppercase text-indigo-800">HoMePage</h1>



<div class="posts">
    {#each posts as item }
    <div class="posts">
       <h2 class="font-bold">{item.title.substring(0, 20)}</h2> 
        <p>{item.body.substring(0, 80)}</p>
        <p class="link"><a sveltekit:prefetch href={`/blog/${item.id}`}>Read More</a></p>
    </div>
          {/each}

</div>

<style>
  @media screen and (max-width: 600px) {
    .posts{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin: 30px 0;
    }
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
