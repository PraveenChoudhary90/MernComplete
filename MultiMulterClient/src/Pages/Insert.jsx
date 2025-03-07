import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const Insert = ()=>{
    const [input, setInput] = useState({});
    const [images, setImages] = useState("");

    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handelFile = (e)=>{
        const files = e.target.files;
        setImages(files);
        console.log(images);
    }

    const handelSubmit = async(e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/Product/InsertProduct";


        const formData = new FormData();
        for(let key in input){
            formData.append(key , input[key])
        }
        for(let i = 0; i<images.length;i++){
          formData.append("images", images[i]);
        }

    const response = await axios.post(api, formData);
    console.log(response.data);
    alert("Data save!!!!!!!!!!!!!!!!!");
      }
    return(
        <>
        <div id="myform">
        <h1>Insert Page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handelInput} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Product Brand</Form.Label>
        <Form.Control type="text"  name='brand' onChange={handelInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text" name='price' onChange={handelInput} />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Images Upload</Form.Label>
        <Form.Control type="file" multiple onChange={handelFile} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;