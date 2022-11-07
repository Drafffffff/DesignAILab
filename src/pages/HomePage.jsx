import { A } from "@solidjs/router";
import Layout from "../layout/Layout";
import "../styles/homepage.css";
export default function HomePage() {
  return (
    <Layout>
      <div className="home-banner">
        <div className="home-banner-swiper">
          <img src="/tmp.png" />
        </div>
        <div className="home-banner-swiperTitle">
          <div className="home-banner-swiperTitle-top home-banner-swiperTitle-content">
            <div className="left">DESIGN</div>
            <div className="middle">
              <div></div>
            </div>
            <div className="right">AI</div>
          </div>
          <div className="home-banner-swiperTitle-bottom home-banner-swiperTitle-content">
            <div className="left">LAB</div>
            <div className="right">
              <p>文创设计智造实验室</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-project">
        <div className="home-project-title">
          <div className="home-project-title-top">
            <div className="home-project-title-top-left">
              <span>项目 PROJECT</span>
            </div>
            <div className="home-project-title-top-right">
              <div>
                <A href="/project">全部项目</A>
              </div>
              <img src="/icons/arrowRight.svg"></img>
            </div>
          </div>
          <div className="home-project-title-bottom">
            <div className="left"></div>
            <div className="middle">
              <div>
                实验室以“国家急需、世界一流”为定位，文创产业数字转型为抓手，艺术设计智能升级为关键，聚焦新时代文创设计智造发展中的技术创新、内容创作与服务应用等关键问题，推进落实文化强国战路实施，提升国家文化自信与文化软实力。
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
        <div className="home-project-container">
          <div className="bg">
            <div className="left"></div>
            <div className="right">
              <div>
                <img src="/tmp.png" />
              </div>
            </div>
          </div>
          <div className="info">
            <div className="left"></div>
            <div className="middle">
              <div className="time">
                <span>2022-02-12</span>
              </div>
              <div className="title">
                <span>DIA国际</span>
              </div>
              <div className="description">
                <div>
                  把握交叉学科前沿，积极探索人机共创设计方法实验室积极应对世界进入到由“物一信息一机器”所构成的四元
                </div>
              </div>
              <div className="more">
                <img src="/icons/arrowRightG.svg"></img>
                <span>查看详情</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
      <div className="home-research">
        <div className="patch"></div>
        <div className="home-project-title">
          <div className="home-project-title-top">
            <div className="home-project-title-top-left">
              <span>研究 RESEARCH</span>
            </div>
            <div className="home-project-title-top-right">
              <div>
                <A href="/research">研究详情</A>
              </div>
              <img src="/icons/arrowRightB.svg"></img>
            </div>
          </div>
          <div className="home-project-title-bottom">
            <div className="left"></div>
            <div className="middle">
              <div>
                实验室以“国家急需、世界一流”为定位，文创产业数字转型为抓手，艺术设计智能升级为关键，聚焦新时代文创设计智造发展中的技术创新、内容创作与服务应用等关键问题，推进落实文化强国战略实施，提升国家文化自信与文化软实力。
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
        <div className="home-research-container">
          <div className="img"> </div>
        </div>
      </div>
      <div className="home-news">
        <div className="home-project-title">
          <div className="home-project-title-top">
            <div className="home-project-title-top-left">
              <span>要闻 NEWS</span>
            </div>
            <div className="home-project-title-top-right">
              <div>
                <A href="/news">全部要闻</A>
              </div>
              <img src="/icons/arrowRight.svg"></img>
            </div>
          </div>
        </div>
        <div className="home-news-container">
          <div className="home-news-card">
            <div className="left">
              <p>
                <span>30 September 2022</span>
                <span>公示</span>
              </p>
            </div>
            <div className="middle">
              <p>
                2022年度文创设计智造实验室(Design-AI
                Lab)开放基金项目立项名单公布
              </p>
              <p>
                从设计学的视角出发，秉承汉字造字智慧，梳理汉字视觉谱系及其发展脉络，立足于智能时代的新语境，结合新媒介与新场景应用，探索汉字作为视觉文化的载体。
              </p>
              <p>
                <A href="/">查看详情</A>
                <img src="/icons/arrowRight.svg" />
              </p>
            </div>
            <div className="right">
              <div>
                <img src="/tmp.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-join">
        <div className="home-project-title">
          <div className="home-project-title-top">
            <div className="home-project-title-top-left">
              <span>加入 JOIN US</span>
            </div>
            <div className="home-project-title-top-right">
              <div>
                <A href="/join">探索更多</A>
              </div>
              <img src="/icons/arrowRight.svg"></img>
            </div>
          </div>
          <div className="home-project-title-bottom">
            <div className="left"></div>
            <div className="middle">
              <div>
                把握交叉学科前沿，积极探索人机共创设计方法实验室积极应对世界进入到由“物一信息一机器”所构成的四元把握交叉学科前沿，积极探索人机共创设计方法实验室积极应对世界进入到由“物一信息一机器”所构成的四元。
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>

        <div className="home-join-container">
          <div className="left">
            <div className="text">
              <p>联系电话</p>
              <p>101010101010101010</p>
              <p>联系电话</p>
              <p>101010101010@caa.edu.cn</p>
            </div>
            <div className="icon">
              <img src="/icons/arrowTop.svg"/>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </Layout>
  );
}
