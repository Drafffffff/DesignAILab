import { A } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { Portal } from "solid-js/web";
import "../styles/nav.css";
import Menu from "./menu";
import { createSignal } from "solid-js";
import { Transition } from "solid-transition-group";
import { useParams } from "@solidjs/router";
import { useLocation } from "@solidjs/router";

export default function Nav() {
  const [isMenuShow, setIsMenuShow] = createSignal(false);
  const routerData = useLocation();
  return (
    <>
      <div className="navbar">
        <div className="navLogo">
          <A href="/">
            <img src="/logo.svg"></img>
          </A>
        </div>
        <div className="others">
          <div className="links">
            <div
              className="link"
              classname={routerData.pathname === "/project" ? "active" : ""}
            >
              <A className="linka" href="/project">
                项目
              </A>
            </div>
            <div
              className="link"
              classname={routerData.pathname === "/project" ? "active" : ""}
            >
              <A className="linka" href="/research">
                研究
              </A>
            </div>
            <div
              className="link"
              classname={routerData.pathname === "/project" ? "active" : ""}
            >
              <A className="linka" href="/news">
                要闻
              </A>
            </div>
            <div
              className="link"
              classname={routerData.pathname === "/project" ? "active" : ""}
            >
              <A className="linka" href="/join">
                加入
              </A>
            </div>
          </div>
          <div className="buttons">
            {/* <div className={styles.search}>
              <img src="/icons/search.svg"></img>
            </div> */}
            <div
              className="menubtn"
              onClick={() => {
                setIsMenuShow(true);
              }}
            >
              <img src="/icons/menu.svg"></img>
            </div>
          </div>
        </div>
        <Portal>
          {/* <Transition name="slide-fade"> */}
          {isMenuShow() && <Menu set={setIsMenuShow} />}

          {/* </Transition> */}
        </Portal>
      </div>
    </>
  );
}
