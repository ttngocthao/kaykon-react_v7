import React from "react";
import EnrollImg from "../images/homePage/imgEnrol.jpg";

const Enrollment = () => {
  return (
    <section
      className="enrollment-container"
      style={{
        backgroundImage: `radial-gradient(white,transparent),url(${EnrollImg})`
      }}
    >
      <div className="enrollment-content">
        <h1 className="section-heading">Đăng kí học</h1>

        <div className="">
          <div>
            <p>Quy trình tuyển sinh</p>
            <p>Mẫu đơn nhập học </p>
          </div>
          <div>
            <div>
              <i className="fas fa-phone-volume" />
              <a href="tel:0917345801">0917345801</a> &amp;
              <a href="tel:0983201317">0983201317</a>
            </div>
            <div>
              <i className="fas fa-envelope-open" />
              kaykonkindergarten@gmail.com
            </div>
            <div>THAM QUAN TRƯỜNG</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Enrollment;
