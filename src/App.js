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

console.log('teams==========', teams)
    const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post('https://node-deploy-vercel-seven.vercel.app/upload', formdata)
        // axios.post(`${window.location.origin}/upload`, formdata)
        .then(res => setImage(res.data.image))
        .catch(err => console.log(err))
    }

    const handleGet = (e) => {
        // axios.get(`${window.location.origin}/getallTeam`)
        axios.get('https://node-deploy-vercel-seven.vercel.app/getallTeam')
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
                <img src={`https://node-deploy-vercel-seven.vercel.app/Images/` + image}  alt='' />
                {/* <img src={`${window.location.origin}/Images/` + image}  alt='' /> */}
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
