import Layout from "../layout/Layout";
import "../styles/projects.css";
import { A } from "@solidjs/router";
import Navigator from "../components/Navigator";
import Card from "../components/Card";
export default function Project() {
  const time = "2022-02-12";
  const title = "DIA国际";
  const content =
    "             把握交叉学科前沿，积极探索人机共创设计方法实验室积极应对世界进入到由“物一信息一机器”所构成的四元把握交叉学科前沿，积极探索人机共创设计方法实验室积极应对世界进入到由“物一信息一机器”所构成的四元。";
  const link = "/project";
  const img = "/tmp.png";
  return (
    <Layout>
      <Navigator title="项目 PROJECT" />
      <div className="project-container">
        <div className="project-container-left">
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
        </div>
        <div className="project-container-right">
          <Card
            time={time}
            title={title}
            content={content}
            link={link}
            imgUrl={img}
          ></Card>
          <Card
            time={time}
            title={title}
            content={content}
            link={link}
            imgUrl={img}
          ></Card>
          <Card
            time={time}
            title={title}
            content={content}
            link={link}
            imgUrl={img}
          ></Card>
          <Card
            time={time}
            title={title}
            content={content}
            link={link}
            imgUrl={img}
          ></Card>
        </div>
      </div>
    </Layout>
  );
}
