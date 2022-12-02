import { Button, Form } from "react-bootstrap";
import "../css/HomeContactUs.css";

const HomeContactUs = () => {
    return (  
      <div className="">
        <h2>문의하기</h2>
        <Button variant="outline-warning">업체바로가기</Button>
        <div className="" >
            <p>주소주소주소주소주소주소</p>
            <ul>
                <li>전화번호:000-000-0000</li>
                <li>팩스번호:000-000-0000</li>
                <li>이메일:GamilC@gmail.com</li>
            </ul>
        </div>
          <Form className="homecontactusfrom">
              <label>회사 이름</label>
              <input type="text"></input>
              <br />
              <label htmlFor="">이름</label>
              <input type="text"></input>
              <br />
              <label htmlFor="">연락처</label>
              <input type="text"></input>
              <br />
              <label>Email</label>
              <input type="text" />@<input type="text" />
              <br />
              <input type="checkbox" name="" id="" />개인정보 동의함
              <Button variant="outline-warning">보내기</Button>
          </Form>
        </div>
        
    );
}
 
export default HomeContactUs;