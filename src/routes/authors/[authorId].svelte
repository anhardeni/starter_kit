<script context="module">
    export const load = async ({page, fetch}) =>
    {
       // console.log(page)
         const id = page.params.authorId;
        

        // const userRes = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
        // const user = await userRes.json();

        // const resPosts = await fetch (`https://jsonplaceholder.typicode.com/posts`);
        // const allPosts = await resPosts.json();

        // cara 1
          // const [resUser, resPosts] = await Promise.all([
          //   fetch (`https://jsonplaceholder.typicode.com/users/${id}`),
          //   fetch (`https://jsonplaceholder.typicode.com/posts`),
          // ]);
          // const user = await resUser.json();
          // const allPosts = await resPosts.json();

          //   const posts = allPosts.filter((posts) => {
          //     return posts.userId === user.id;
          // });


        //cara 2 ok
            const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`);
            const user = await res.json();
            const posts = user.posts;


        




    return {
     props:{
       user,
       posts,
      
     },
     };
    };
    
    </script>

<script>
    export let posts;
    export let user;
</script>

<h2 class="font-bold" >{user.name}</h2>
<p>{user.company.catchPhrase}</p>
<p>{user.email}</p>

<ul>

  {#each posts as item }
  <li>
<a href={`/blog/${item.id}`}>- {item.title}</a>
  </li>
   {/each}
</ul>





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

