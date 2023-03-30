import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Edit = () => {
    const [masv, setMasv] = useState('');
    const [hoten, setHoTen] = useState('');
    const [gioitinh, setGioiTinh] = useState(true);
    const [malop, setMalop] = useState('');
    const [ngaysinh, setNgaySinh] = useState('');
    const { id } = useParams();
    const [sv, setSV] = useState([]);
    useEffect(function () {
        async function getSV() {
            await axios.get('https://641e6444ad55ae01cca921c7.mockapi.io/sinhvien/' + id)
                .then(function (result) {

                    setMasv(result.data.masv);
                    setHoTen(result.data.hoten);
                    setGioiTinh(result.data.gioitinh);
                    setMalop(result.data.malop);
                    setNgaySinh(new Date(result.data.ngaysinh));

                })
        }
        getSV();
    }, [])
    function LuuSinhVien(event) {
        event.preventDefault();
        async function CapNhatSV() {
            await axios.put(`https://641e6444ad55ae01cca921c7.mockapi.io/sinhvien/${id}`, {
                masv: masv,
                hoten: hoten,
                gioitinh: gioitinh,
                malop: malop,
                ngaysinh: ngaysinh.getTime(),

            }).then(function (res) {
                
                console.log(res.data);
                window.location = "/";
            });
        }
        CapNhatSV();
    }

    return (<div className="container-fluid p-4">
        <h3 className="text-center text-danger">CẬP NHẬP SINH VIÊN</h3>
        <form onSubmit={LuuSinhVien}>
            <div className="mb-3">
                <label htmlFor=""><strong>Mã sinh viên</strong></label>
                <input type="text" id="masv" className="form-control" title="Nhập ít nhất 10 kí tự" pattern=".{10}" value={masv} onChange={(e) => setMasv(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor=""><strong>Họ tên</strong></label>
                <input type="text" id="hoten" className="form-control" value={hoten} onChange={(e) => setHoTen(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor=""><strong>Giới tính</strong></label>
                <select name="gioitinh" id="gioitinh" className="form-control" onChange={(e) => setGioiTinh(e.target.value === 'true' ? true : false)} value={gioitinh.toString()}>
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