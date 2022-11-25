import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      First name :<br></br>
      <input type='text' id='name' name='name'  />
      <br></br>
      Last name :<br></br>
      <input type='text' id='name' name='name' required />
      <br></br>
      Email :<br></br>
      <input type='email' id='email' pattern='.+@gmail\.com' required />
      <br></br>
      Gender :<input type='radio' name='gender' required value='Male' /> Male
      <input type='radio' name='gender' required value='Female' /> Female
      <br></br>
      Favorite :<input type='checkbox' name='favorite' required value='HTML' /> HTML
      <input type='checkbox' name='favorite' required value='JAVA' /> JAVA
      <input type='checkbox' name='favorite' required value='JavaScript' /> JavaScript
      <br></br>
      <label for="browser">Browser :</label>
				<select id="browser" name="browser">
					<option>크롬</option>
					<option selected>사파리</option>
					<option>엣지</option>
        </select>
      <br></br>
      <label for="birth">Birth :</label>
			 <input type="date" name="bday" required value=" " min="1900-01-01" max= "2022-12-31"/> 
       <div>
        <button>제출</button>
       </div>
        
    </div>
  );
}

export default App;
