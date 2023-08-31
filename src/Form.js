// Complete the Form Component and export it
import {name , email} from './HomePage'
const submitHandler = (e) =>{
e.preventDefault();
}
const Form = () => (
  <>
    <div >
      <form className='container' onSubmit={submitHandler}>{/* Create a h3, 2 inputs and 1 button here */}
      <h3>Login Page</h3>
      <input value = {name}/>
      <input value = {email}/>
      <button>Login</button>
      </form>
    </div>
  </>
);

export {Form};
