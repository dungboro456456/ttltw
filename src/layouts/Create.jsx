import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

const Create = () => {
  const [masv, setMasv] = useState('');
  const [hoten, setHoten] = useState('');
  const [gioitinh, setGioitinh] = useState('');
  const [malop, setMalop] = useState('');
  const [ngaysinh, setNgaySinh] = useState(format(new Date(), 'dd/MM/yyyy'));
  const [selectedDate, setSelectedDate] = useState(new Date());


  function ThemDL() {
    axios
      .post('https://641e8ca0f228f1a83ea5c294.mockapi.io/sinhvien', {
        masv: masv,
        hoten: hoten,
        gioitinh: gioitinh === true ? true : false,
        malop: malop,
        ngaysinh: format(selectedDate, 'dd/MM/yyyy'), // use selectedDate value here
      })
      .then(function (res) {
        console.log(res.data);
        window.location = '/list';
      });
  }

  function luusinhvien(event) {
    event.preventDefault();
    ThemDL();
  }

  return (
    <div className="container-fluid p-3">
      <h1 className="d-flex justify-content-center">
        <strong>THÊM SINH VIÊN</strong>{' '}
      </h1>
      <form onSubmit={luusinhvien}>
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
            <option value={true}>Nam</option>
            <option value={false}>Nữ</option>
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

        <div className="mb-3">
                <label htmlFor=""><strong>Ngày sinh</strong></label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                        setSelectedDate(date);
                        setNgaySinh(format(date, 'dd/MM/yyyy'));
                    }}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    locale="vi" 
                />
            </div>

        <div>
          <button name='luu' type="submit" className="btn btn-primary">
          Lưu
        </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
