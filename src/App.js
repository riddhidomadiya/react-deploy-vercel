// import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {

//     const [file, setFile] = useState()
//     const [image, setImage] = useState()
//     const [teams, setTeams] = useState([])

//     const handleUpload = (e) => {
//         const formdata = new FormData()
//         formdata.append('file', file)
//         axios.post('http://localhost:1000/upload', formdata, {
//         // axios.post('https://mern-deploy-test-theta.vercel.app/upload', formdata, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(res => setImage(res.data.image))
//         .catch(err => console.log(err))
//     }

//     const handleGet = (e) => {
//         axios.get('https://mern-deploy-test-theta.vercel.app/userall')
//         .then(res => {
//             console.log(res.data, "========");
//             setTeams(res.data)
//         })
//         .catch(err => console.log(err))
//     }

//     return(
//         <div>
//             <div>
//                 <input type='file' onChange={e => setFile(e.target.files[0])}/>
//                 <button onClick={handleUpload}>Upload</button>
//                 <br/><br/><br/>
//                 <img src={`http://localhost:1000/uploads/${image}`}  alt='' />
//             </div>
//             <br/><br/><br/><br/>
//             <div>
//                 <button onClick={handleGet}>Get</button>
//                 {teams.length > 0 &&
//                 teams.map((item) => (
//                     <tr>
//                         <td className="pe-3">{item.fname}</td>
//                         <td className="pe-3">{item.lname}</td>
//                         <td className="pe-3">{item.email}</td>
//                     </tr>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://mern-deploy-test-theta.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImage(response.data.image);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {image && <img src={`https://mern-deploy-test-theta.vercel.app/uploads/${image}`} alt="Uploaded" />}
    </div>
  );
}

export default App;
