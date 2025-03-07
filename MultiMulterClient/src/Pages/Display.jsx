import axios from "axios";
import { useEffect, useState } from "react";


const Display = ()=>{
    const [mydata, setMydata] = useState([]);

    const loaddata = async()=>{
        const api = "http://localhost:8000/Product/Displaydata";
        const response = await axios.get(api)
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loaddata();
    },[])


    const ans =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>
    
            {key.images.map((key1)=>{
                return(
                    <>
                    <img src={`http://localhost:8000/${key1}`}  width="60px" height="60px" alt="" /><br></br>
                    </>
                )
            })}
                </td>
                <td><img src={`http://localhost:8000/${key.defaultImage}`}  width="300px" height="300px" alt="" /></td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.price}</td>
            </tr>
            </>
        )
    }) 



    return(
        <>
        <h1>Display Page</h1>
        <table>
            <tr>
                <td></td>
                <td>Name</td>
                <td>Brand</td>
                <td>Price</td>
            </tr>
            {ans}
        </table>
        </>
    )
}

export default Display;