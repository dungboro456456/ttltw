import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Edit = () => {
  const { id } = useParams();

  const [masv, setMasv] = useState("");
  const [hoten, setHoTen] = useState("");
  const [gioitinh, setGioiTinh] = useState(true);
  const [malop, setMalop] = useState("");
  const [ngaysinh, setNgaySinh] = useState(new Date());

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://641e6444ad55ae01cca921c7.mockapi.io/sinhvien/${id}`
        );
        setMasv(response.data.masv);
        setHoTen(response.data.hoten);
        setGioiTinh(response.data.gioitinh);
        setMalop(response.data.malop);
        setNgaySinh(new Date(response.data.ngaysinh));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.put(
        `https://641e6444ad55ae01cca921c7.mockapi.io/sinhvien/${id}`,
        {
          masv: masv,
          hoten: hoten,
          gioitinh: gioitinh,
          malop: malop,
          ngaysinh: ngaysinh.getTime(),
        }
      );
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container-fluid p-4">
      <h3 className="text-center text-danger">CẬP NHẬP SINH VIÊN</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">
            <strong>Mã sinh viên</strong>
          </label>
          <input
            type="text"
            id="masv"
            className="form-control"
            title="Nhập ít nhất 10 kí tự"
            pattern=".{10}"
            value={masv}
            onChange={(e) => setMasv(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">
            <strong>Họ tên</strong>
          </label>
          <input
            type="text"
            id="hoten"
            className="form-control"
            value={hoten}
            onChange={(e) => setHoTen(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">
            <strong>Giới tính</strong>
          </label>
          <select
            id="gioitinh"
            className="form-control"
            value={gioitinh}
            onChange={(e) => setGioiTinh(e.target.value === "true")}
          >
            <option value={true}>Nam</option>
            <option value={false}>Nữ</option>
          </select>
        </div>
        <div className="mb-3">
                <label htmlFor=""><strong>Mã lớp</strong></label>
                <input type="text" id="malop" className="form-control" value={malop} onChange={(e) => setMalop(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor=""><strong>Ngày sinh</strong></label>
                <DatePicker
                    className="form-control"
                    selected={ngaysinh}
                    onChange={(date) => setNgaySinh(date)}
                />

            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-success">Lưu</button>
            </div>

        </form>
    </div>);
}

export default Edit;