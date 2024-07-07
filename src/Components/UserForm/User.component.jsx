import { useForm } from 'react-hook-form';

function User({onSubmitFunction, operation}) {

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = onSubmitFunction;

  return (
  <>
    <form action="post" onSubmit={handleSubmit(onSubmit)}>

        <p><label htmlFor="username">Username</label></p>
        <p><input type="text" id="username" {...register('username', { required: true })} /></p>
        
        <button>{operation}</button>
        
    </form>
  </>
  );
}

export default User;
