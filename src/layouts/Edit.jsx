import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [sv, setSV] = useState({});
  
  useEffect(() => {
    async function getSV() {
      await axios.get(`https://641e8ca0f228f1a83ea5c294.mockapi.io/sinhvien/${id}`)
        .then(function(result) {
          setSV(result.data);
        })
    }
    getSV();
  }, [id]);
  
  console.log(sv);
  
  return (
    <div>
      Edit
    </div>
  );
}
 
export default Edit;
