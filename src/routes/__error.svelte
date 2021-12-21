<script context="module">
export const load = ({error, status}) =>
{
return {
 props:{
    error,
    status,
 },
 };
};

</script>

<script>
    export let error;
    export let status;
</script>

<div class="container bg-green-200 h-16 text-2xl">

 <h1> {error.name} {status}</h1>
 <p>{error.message}</p>


</div>

