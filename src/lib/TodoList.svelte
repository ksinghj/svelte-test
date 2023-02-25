<script lang="ts">
  interface Todo {
    text: string
    completed: false
  }

  let newTodo = ''

  const handleAddTodo = () => {
    if (!newTodo.length) return
    todos = [...todos, { text: newTodo, completed: false }]
    newTodo = ''
  }

  let todos: Todo[] = [{ text: 'Learn Svelte', completed: false }]
</script>

<h2>Todo List</h2>
<div>
  <h4>Add todo</h4>
  <form on:submit|preventDefault={handleAddTodo}>
    <input class="newTodo" type="text" bind:value={newTodo} name="Add todo" />
    <button type="submit" disabled={!newTodo.length}>Add todo</button>
  </form>
</div>
<div class="todos">
  {#each todos as { text, completed }}
    <label class="todo">
      <input type="checkbox" bind:checked={completed} name={text} />
      <input type="text" bind:value={text} name={text} />
    </label>
  {/each}
</div>

<style lang="scss">
  .newTodo {
    margin-bottom: 1em;
  }

  .todo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1em;

    input[type='text'] {
      flex-grow: 1;
      margin-left: .5em;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    button[type='submit'] {
      margin-bottom: 1.5em;
    }
  }

  .todos {
    display: flex;
    flex-direction: column;
  }
</style>
