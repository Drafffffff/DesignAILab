import { A } from "@solidjs/router";

export default function Navigator(props) {
  return (
    <div className="navigator">
      <div className="navigator-nav">
        <p>
          <A href="/">首页</A>
          <span> / </span>
          <A href="/project">项目</A>
        </p>
      </div>
      <div className="navigator-title">{props.title}</div>
    </div>
  );
}
