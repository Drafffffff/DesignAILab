import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { children } from "solid-js";
export default function Layout(props) {
  const c = children(() => props.children);
  return (
    <>
      <Nav />
      <div className="container">{c()}</div>
      <Footer />
    </>
  );
}
