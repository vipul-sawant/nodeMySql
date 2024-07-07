import User from "../UserForm/User.component";
import axios from 'axios';

function CreateUser() {

  const Submit = (data) => {
    console.log("data :",data);
    axios.post('http://localhost:4000/users/create-user', data)
    .then(res => {
      console.log("res :",res);
    })
    .catch((err)=>{
      console.log("err :",err);
    })
  };

  return (
    <>
        <center>
            <h1>Create User</h1>
            <User operation='Create' onSubmitFunction={Submit} />
        </center>
    </>
  );
}

export default CreateUser;
