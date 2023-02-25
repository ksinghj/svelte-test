<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let count = 0

  const increment = () => {
    dispatch('increment', {
      count: count + 1
    })
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
