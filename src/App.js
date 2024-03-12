// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           hello, good morning
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

    const [file, setFile] = useState()
    const [image, setImage] = useState()
    const [teams, setTeams] = useState([])


    const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post('http://localhost:8080/upload', formdata)
        .then(res => setImage(res.data.image))
        .catch(err => console.log(err))
    }

    const handleGet = (e) => {
        axios.get('http://localhost:8080/getallTeam')
        .then(res => {
            console.log(res.data, "========");
            setTeams(res.data)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <div>
                <input type='file' onChange={e => setFile(e.target.files[0])}/>
                <button onClick={handleUpload}>Upload</button>
                <br/><br/><br/>
                <img src={`http://localhost:8080/Images/` + image}  alt='' />
            </div>
            <br/><br/><br/><br/>
            <div>
                <button onClick={handleGet}>Get</button>
                {teams.length > 0 &&
                teams.map((item) => (
                    <tr>
                        <td className="pe-3">{item.fname}</td>
                        <td className="pe-3">{item.lname}</td>
                        <td className="pe-3">{item.email}</td>
                    </tr>
                ))}
            </div>
        </div>
    )
}

export default App;
