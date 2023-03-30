import React, { useState, useEffect } from 'react';
import {  Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BsInfoCircle, BsTrash } from 'react-icons/bs';
import { RiEdit2Fill, } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from "axios";


const List = () => {

    const [Sinhvien,setSinhviens]=useState([]);
    useEffect(function(){
        async function getSinhviens(){
            await axios.get('https://641e8ca0f228f1a83ea5c294.mockapi.io/sinhvien').then
            (function(result)
            {
                setSinhviens(result.data);
            }
            );
        }
        getSinhviens();
    },[]);
  const deletee = async (id) => {
    try {
      await axios.delete(
        `https://641e8ca0f228f1a83ea5c294.mockapi.io/sinhvien/${id}`
      );
      setSinhviens(Sinhvien.filter((Sinhvien) => Sinhvien.id !== id));
      alert("Xóa thành công!");
      window.location = '/list';
    } catch (error) {
      console.log(error);
      alert("Xóa không thành công!");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Table  className="table table-striped table-bordered table-hover w-75">
        <thead className='thead-light'>
          <tr className="text-center">
            <th className="">ID</th>
            <th className="">Mã SV</th>
            <th className="">Họ tên</th>
            <th className="">Giới tính</th>
            <th className="">Lớp</th>
            <th className="">Chức năng</th>
          </tr>
        </thead>
        <tbody>
        {Sinhvien.map((Sinhvien) => (
            <tr key={Sinhvien.id} className="text-center">
              <td className="">{Sinhvien.id}</td>
              <td className="">{Sinhvien.masv}</td>
              <td className="">{Sinhvien.hoten}</td>
              <td className="">{Sinhvien.gioitinh}</td>
              <td className="">{Sinhvien.malop}</td>
              <td className=" ">
                    <Link onClick={() => deletee(Sinhvien.id)} to={`/delete/${Sinhvien.id}`} className="btn btn-danger m-2 ">
                    <BsTrash/>Xóa
                    </Link>
                    <Link to={`/edit/${Sinhvien.id}`} className="btn btn-warning m-2 ">
                    <RiEdit2Fill/>Sửa
                    </Link>
              </td>
              <td>
                  
    
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default List;
