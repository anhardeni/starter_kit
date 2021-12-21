<script context="module">
    export const load = async ({page, fetch}) =>
    {
        const id = page.params.id;
    
    //cara 1
        const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await res.json();

        const userRes = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await userRes.json();

    //cara 2 Ok
        // const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}?_expand=user`);
        // const post = await res.json();
        // const user = post.user;
          


    return {
     props:{
        post,
        user,
      
     },
     };
    };
    
    </script>

<script>
    export let post;
    export let user;
</script>


<h2 class="font-bold"> {post.title}</h2>
<p>{post.body}</p>
<p>Written by <a sveltekit:prefetch href={ `/authors/${user.id}`}>{user.name}</a></p>


<style>
    h2{
        display: grid;
        grid-template-columns: 1 fr 1fr;
        grid-gap: 20px;
    }

    p {
    padding: 10px;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px #eee;
  }
  

</style>

