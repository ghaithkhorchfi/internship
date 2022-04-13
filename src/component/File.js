import React ,{useState} from 'react';
import axios from 'axios' ;

const File = () => {
    const [file, setfile] = useState(null)
    const [filename, setfilename] = useState('import file')
    const [fileupload,setfileupload]= useState({})
    const onSubmit=(e)=>{
        e.preventDefault()
       const formData=new FormData();
       formData.append('file',file)
       try {
           const res = axios.post('/upload',formData,{
               'conten-Type':'multi-part/form-data'
           })
           const {fileName,filePath}=res.data
           setfileupload({fileName,filePath})
       } catch (err) {
           if(err.res.status===500){
               console.log('server problem')
           }
           else{
               console.log('done')
           }           
       }
    }
   
   
    return (
        <div>
             <div>
            <label htmlFor='file'>{filename}</label><br /><br />
            <input type='file' name='img' id='file' onChange={(e) => {
                setfile(e.target.files[0])
                setfilename(e.target.files[0].name)
            }} /><br /><br />
        </div>
        </div>
    )
}

export default File
