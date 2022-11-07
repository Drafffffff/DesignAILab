import "../styles/utils.css";
import { A } from "@solidjs/router";
export default function Menu(props) {
  const date = new Date();
  return (
    <div className="menu">
      <div className="menu-close" onClick={() => props.set(false)}>
        <img src="/icons/close.svg"></img>
      </div>
      <div className="menu-left">
        <div className="menu-left-year">@{date.getFullYear()}</div>
      </div>
      <div className="menu-right">
        <div className="menu-list">
          <div className="menu-item">
            <A href="/project" onClick={() => props.set(false)}>
              <span className="menu-item-en">PROJECT</span>
              <span className="menu-item-zh">项目</span>
            </A>
          </div>
          <div className="menu-item">
            <A href="/research" onClick={() => props.set(false)}>
              <span className="menu-item-en">RESEARCH</span>
              <span className="menu-item-zh">研究</span>
            </A>
          </div>
          <div className="menu-item">
            <A href="/news" onClick={() => props.set(false)}>
              <span className="menu-item-en">NEWS</span>
              <span className="menu-item-zh">要闻</span>
            </A>
          </div>
          <div className="menu-item">
            <A href="/join" onClick={() => props.set(false)}>
              <span className="menu-item-en">JOIN US</span>
              <span className="menu-item-zh">加入</span>
            </A>
          </div>
        </div>
        <div className="menu-info">
          <div className="menu-info-institution menu-info-detail">
            <div>
              <span>Design Intelligence Center</span>
              <span>文创中心</span>
            </div>
            <div>
              <span>Design Intelligence Award</span>
              <span>中国设计智造大奖</span>
            </div>
            <div>
              <span>China Academy of Art </span>
              <span>中国美术学院</span>
            </div>
          </div>
          <div className="menu-info-location menu-info-detail">
            <span>LOCATION位置</span>
          </div>
          <div className="menu-info-contact menu-info-detail">
            <span>CONTACT邮件</span>
          </div>
        </div>
      </div>
    </div>
  );
}
