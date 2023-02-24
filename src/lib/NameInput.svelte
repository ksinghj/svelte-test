<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let value = ''

  const handleChange = e =>
    dispatch('valueChange', {
      value: e.target.value
    })
</script>

<input type="text" {value} on:input={handleChange} />
