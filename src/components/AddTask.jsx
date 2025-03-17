import { useRef } from 'react';
const AddTask = () => {
  const taskRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(taskRef.current.value);
    taskRef.current.value = '';
  }

  return (
    <form className='form__input' onSubmit={handleSubmit}>
      <label htmlFor='task'></label>
      <input
        type='text'
        name='task'
        id='task'
        className='input'
        required
        ref={taskRef}
      />
      <button className='addTodoBtn'>ADD TASK</button>
    </form>
  );
};
export default AddTask;

// https://youtu.be/ghEiqsES7cU?si=vDeryTjNGnmsnpIF - 58:34
