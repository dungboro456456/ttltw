import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [masv, setMasv] = useState('');
  const [hoten, setHoten] = useState('');
  const [gioitinh, setGioitinh] = useState('');
  const [malop, setMalop] = useState('');

  function ThemDL() {
    axios
      .post('https://641e8ca0f228f1a83ea5c294.mockapi.io/sinhvien', {
        masv: masv,
        hoten: hoten,
        gioitinh: gioitinh === '1' ? true : false,
        malop: malop,
      })
      .then(function (res) {
        console.log(res.data);
        window.location = '/list';
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    ThemDL();
  }

  return (
    <div className="container-fluid p-3">
      <h1 className="d-flex justify-content-center">
        <strong>THÊM SINH VIÊN</strong>{' '}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="masv">
            <strong>Mã sinh viên: </strong>
          </label>
          <input
            value={masv}
            onChange={(e) => setMasv(e.target.value)}
            className="form-control"
            type="text"
            id="masv"
            name="masv"
            placeholder="Nhập mã sinh viên"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hoten">
            <strong>Họ tên: </strong>
          </label>
          <input
            value={hoten}
            onChange={(e) => setHoten(e.target.value)}
            className="form-control"
            type="text"
            id="hoten"
            name="hoten"
            placeholder="Nhập họ tên"
          />
        </div>
        <div className="mb-3">
          <strong>Giới tính: </strong>
          <select
            className="form-control"
            name="gioitinh"
            id="gioitinh"
            onChange={(e) => setGioitinh(e.target.value)}
          >
            <option value="1">Nam</option>
            <option value="0">Nữ</option>
            <option value="3">Khác</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="malop">
            <strong>Mã lớp: </strong>
          </label>
          <input
            value={malop}
            onChange={(e) => setMalop(e.target.value)}
            className="form-control"
            type="text"
            id="malop"
            name="malop"
            placeholder="Nhập mã lớp"
          />
        </div>
        <button name='luu' type="submit" className="btn btn-primary">
          Lưu
        </button>
      </form>
    </div>
  );
};

export default Create;
