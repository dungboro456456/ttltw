import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = (props) => {
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios.get(`https://641e8ca0f228f1a83ea5c294.mockapi.io/sinhvien/${props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.id]);

  console.log(student);

  return (
    <div className="container-fluid p-3">
      <h1 className="d-flex justify-content-center"><strong>CHI TIẾT SINH VIÊN</strong></h1>
      <div className="mb-3">
        <label htmlFor="masv"><strong>Mã sinh viên:</strong></label>
        <input
          value={student.masv}
          className="form-control"
          type="text"
          id="masv"
          name="masv"
          readOnly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hoten"><strong>Họ tên:</strong></label>
        <input
          value={student.hoten}
          className="form-control"
          type="text"
          id="hoten"
          name="hoten"
          readOnly
        />
      </div>
      <div className="mb-3">
        <strong>Giới tính:</strong> {student.gioitinh === true ? 'Nam' : 'Nữ'}
      </div>
      <div className="mb-3">
        <label htmlFor="malop"><strong>Mã lớp:</strong></label>
        <input
          value={student.malop}
          className="form-control"
          type="text"
          id="malop"
          name="malop"
          readOnly
        />
      </div>
    </div>
  );
};

export default Detail;
