import { A } from "@solidjs/router";
import "../styles/projects.css"
export default function Card(props) {
  
  return (
    <div className="project-card">
    <div className="left">
      <p>{props.time}</p>
      <p>{props.title}</p>
    </div>
    <div className="right">
      <p>
        {props.content}
      </p>
      <p>
        <A href={props.link}>查看详情</A>
        <img src="/icons/arrowRight.svg"></img>
      </p>
      <div>
        <img src={props.imgUrl} />
      </div>
    </div>
  </div>
  );
}
