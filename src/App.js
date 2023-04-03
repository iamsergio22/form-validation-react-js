import logo from './logo.svg';
import './App.css';
import useForm from './Hooks/useForm';

function App() {

  const formLogin = () => {
    console.log("callback function when form is submitted!")
    console.log("form values", values)
  }

  const { handleChange, values, errors,handleSubmit } = useForm(formLogin);


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input required type="email" name='email' placeholder='E-mail' onChange={handleChange} />
        {
          errors.email && <h1>{errors.email}</h1>
        }
        <input minLength={8} required type="password" name='password' placeholder='password' onChange={handleChange} />
        {
          errors.password && <h1>{errors.password}</h1>
        }
        <input minLength={8} required type="text" name='username' placeholder='username' onChange={handleChange} />
        {
          errors.username && <h1>{errors.username}</h1>
        }
        <input type="submit" value="Submit" className='submit' onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
