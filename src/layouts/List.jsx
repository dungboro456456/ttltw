import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import { BsPlus, BsTrash } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';

const List = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('https://641e8ca0f228f1a83ea5c294.mockapi.io/sinhvien');
      const data = await response.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <Table bordered hover className="w-75">
        <thead>
          <tr className="text-center">
            <th className="align-middle">ID</th>
            <th className="align-middle">Mã SV</th>
            <th className="align-middle">Họ tên</th>
            <th className="align-middle">Giới tính</th>
            <th className="align-middle">Lớp</th>
            <th className="align-middle">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="align-middle">{student.id}</td>
              <td className="align-middle">{student.masv}</td>
              <td className="align-middle">{student.hotien}</td>
              <td className="align-middle">{student.gioitinh}</td>
              <td className="align-middle">{student.malop}</td>
              <td className="align-middle mr-2">

              <a className='btn btn-success mr-2 px-1' ><BsPlus/>Thêm</a>
              <a className='btn btn-danger mr-1 px-1' ><BsTrash/>Xóa</a> 
              <a className='btn btn-danger mr-1 px-1' ><RiEdit2Fill/>Sửa</a> 

              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
