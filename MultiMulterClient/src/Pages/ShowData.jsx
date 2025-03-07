import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Showdata = ()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});
    const [showimage, setShowimage] = useState("");
    const [myimage, setImgae] = useState([]);
    
    
  const loadData=async()=>{
    let api="http://localhost:8000/Product/Showimage";
    const response = await axios.post(api, {id:id});
    setMydata(response.data);
    console.log(response.data);
    setShowimage(response.data.defaultImage);
    setImgae(response.data.images)

  }

  useEffect(()=>{
    loadData();
  }, [])

  const ans = myimage.map((key)=>{
    return(
        <>
        <tr>
            <a href="#" onMouseOver={()=>{setShowimage(key)}}>
             <img src={`http://localhost:8000/${key}`} width="50" height="50" alt="" />
            </a>
        </tr>
        </>
    )
  })
    return(
        <>
        <h1>Show Images Data:{id}</h1>
        <div style={{display:"flex"}}>
            <div >
             {ans}
              
            </div>
            <div>

             
        <button >
          <img src={`http://localhost:8000/${showimage}`} width="300" height="300" />
         </button>

            </div>
        </div>
        </>
    )
}

export default Showdata;