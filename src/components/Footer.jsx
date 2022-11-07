import "../styles/utils.css";
export default function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      <div className="footer-top">
      <div className="footer-top-detail institution">
          <div>
            <span>Design Intelligence Center</span>
            <span> 文创中心</span>
          </div>
          <div>
            <span>Design Intelligence Award</span>
            <span> 中国设计智造大奖</span>
          </div>
          <div>
            <span>China Academy of Art </span>
            <span> 中国美术学院</span>
          </div>
        </div>
     
        <div className="footer-top-detail location">
          <span>LOCATION位置</span>
        </div>
        <div className="footer-top-detail contact">
          <span>CONTACT邮件</span>
        </div>
        <div className="footer-top-detail year">@{date.getFullYear()}</div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-info">
          <p>学校官网 http://www.caa.edu.cn/</p>
          <p>版权所有 2022-2023 Design AI Lab</p>
          <p>Copyright@2022-2023</p>
          <p>All Rights Reserved. 浙 ICP 备 00000000 号 </p>
          <p>技术支持：</p>
          <p>联系我们 111123123123@qq.com</p>
        </div>
        <div className="footer-bottom-title">
          <h1>
          DESIGN-AI LAB
          </h1>
        </div>
      </div>
    </div>
  );
}
