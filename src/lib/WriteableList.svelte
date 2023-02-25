<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const handleAddItem = () => {
    dispatch('add_item', {
      item: newItem
    })
  }

  export let item = 'Item'
  export let items: string[] = []

  let newItem = ''
</script>

<h2>List of {item}s</h2>
<div>
  <h4>Add {item}</h4>
  <form on:submit|preventDefault={handleAddItem}>
    <input class="newItem" type="text" bind:value={newItem} name="Add item" />
    <button type="submit" disabled={!newItem.length}>Add {item}</button>
  </form>
</div>
<div class="items">
  {#each items as item}
    <label class="item" for={item}>
      <input type="text" bind:value={item} name={item} />
    </label>
  {/each}
</div>

<style lang="scss">
  .newItem {
    margin-bottom: 1em;
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1em;

    input[type='text'] {
      flex-grow: 1;
      margin-left: 0.5em;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    button[type='submit'] {
      margin-bottom: 1.5em;
    }
  }

  .items {
    display: flex;
    flex-direction: column;
  }
</style>
