import Layout from "../layout/Layout";
import Navigator from "../components/Navigator";
import "../styles/research.css"
import Card from "../components/Card";

export default function Research() {
  const time = "2022-02-12";
  const title = "DIA国际";
  const content =
    "             把握交叉学科前沿，积极探索人机共创设计方法实验室积极应对世界进入到由“物一信息一机器”所构成的四元把握交叉学科前沿，积极探索人机共创设计方法实验室积极应对世界进入到由“物一信息一机器”所构成的四元。";
  const link = "/project";
  const img = "/tmp.png";
  return (
    <Layout>
      <Navigator title="研究 RESEARCH" />
      <div className="research-intro">
        <div className="left"/>
        <div className="right">
          <p>
            从设计学的视角出发，秉承汉字造字智慧，梳理汉字视觉谱系及其发展脉络，立足于智能时代的新语境，结合新媒介与新场景应用，探索汉字作为视觉文化的载体，开拓内向塑造和外向传播的新媒介和新路径，从而推动汉字创新设计在汉字文化传承、汉字美育、汉字文化传播等方面的综合发展，着力探讨民族复兴视野下汉字设计发展的新方向。从设计学的视角出发，秉承汉字造字智慧，梳理汉字视觉谱系及其发展脉络，立足于智能时代的新语境，结合新媒介与新场景应用，探索汉字作为视觉文化的载体，开拓内向塑造和外向传播的新媒介和新路径，从而推动汉字创新设计在汉字文化传承、汉字美育、汉字文化传播等方面的综合发展。
          </p>
          <div>
            <img src="/research.svg" />
          </div>
          <p>
            从设计学的视角出发，秉承汉字造字智慧，梳理汉字视觉谱系及其发展脉络，立足于智能时代的新语境，结合新媒介与新场景应用，探索汉字作为视觉文化的载体，开拓内向塑造和外向传播的新媒介和新路径，从而推动汉字创新设计在汉字文化传承、汉字美育、汉字文化传播等方面的综合发展，着力探讨民族复兴视野下汉字设计发展的新方向。从设计学的视角出发，秉承汉字造字智慧，梳理汉字视觉谱系及其发展脉络，立足于智能时代的新语境，结合新媒介与新场景应用，探索汉字作为视觉文化的载体，开拓内向塑造和外向传播的新媒介和新路径，从而推动汉字创新设计在汉字文化传承、汉字美育、汉字文化传播等方面的综合发展。从设计学的视角出发，秉承汉字造字智慧，梳理汉字视觉谱系及其发展脉络，立足于智能时代的新语境，结合新媒介与新场景应用，探索汉字作为视觉文化的载体，开拓内向塑造和外向传播的新媒介和新路径，从而推动汉字创新设计在汉字文化传承、汉字美育、汉字文化传播等方面的综合发展。
            从设计学的视角出发，秉承汉字造字智慧，梳理汉字视觉谱系及其发展脉络，立足于智能时代的新语境，结合新媒介与新场景应用，探索汉字作为视觉文化的载体，开拓内向塑造和外向传播的新媒介和新路径，从而推动汉字创新设计在汉字文化传承、汉字美育、汉字文化传播等方面的综合发展。
          </p>
        </div>
      </div>
      <div className="research-container">
        <div className="research-container-left">
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
          <p>中国传统工艺的现代价值研究</p>
        </div>
        <div className="research-container-right">
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
