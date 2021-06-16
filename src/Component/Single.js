import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";

function Single() {
  const [button, setButton] = useState(false);
  const [btn, setBtn]= useState("Like")
  const [info, setInfo] = useState();
  const { id } = useParams();
  const history = useHistory();
  const reDux = useSelector((state) => state.info);

  useEffect(() => { 
    let store = JSON.parse(localStorage.getItem("posts"));
    setInfo(store);
  }, []);

  if (info) {
    var newPost = info.find((post) => Number(post.id) === Number(id));
  }

  let store = JSON.parse(localStorage.getItem("posts"));
  let post = store.find((data) => Number(data.id) === Number(id));

  const likeFunc = (id) => {
    if (reDux.email && reDux.password && button === false) {
      setButton(true)
      console.log("plus");
      let a = JSON.parse(localStorage.getItem("posts"));
      let finder = a.find((val, i) => Number(val.id) === Number(id));
      let index = a.indexOf(finder);
      finder.likes = Number(finder.likes) + 1;
      a[index] = finder;
      localStorage.setItem("posts", JSON.stringify(a));

      let newState = [...info];
      let target = newState.find((val, i) => Number(val.id) === Number(id));
      let ind = a.indexOf(target);
      target.likes = Number(target.likes) + 1;
      newState[ind] = target;
      setInfo(newState);
      setBtn("Unlike")
    } else if (reDux.email && reDux.password && button === true) {
      setButton(false);
      console.log("minus");
      let a = JSON.parse(localStorage.getItem("posts"));
      let finder = a.find((val, i) => Number(val.id) === Number(id));
      let index = a.indexOf(finder);
      finder.likes = Number(finder.likes) - 1;
      a[index] = finder;
      localStorage.setItem("posts", JSON.stringify(a));

      let newState = [...info];
      let target = newState.find((val, i) => Number(val.id) === Number(id));
      let ind = a.indexOf(target);
      target.likes = Number(target.likes) - 1;
      newState[ind] = target;
      setInfo(newState);
      setBtn("Like")
    } else {
      alert("Kindly login to like post");
    }
  };

  return (
    <div className="">
      {/* <small>{reDux? <div>welcome {reDux.email.slice(0, 5)}...</div>:<div>you are not login</div> }</small> */}
      <small>{reDux? <div>welcome {reDux.firstname}...</div>:<div>you are not login</div> }</small>
      <div>
        <h3>{post.title}</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque, minima earum laboriosam eaque sint nam voluptatibus
          provident voluptates soluta placeat optio ducimus quam aperiam hic
          impedit et qui obcaecati. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis quae nihil dolorem, molestiae voluptates
          nisi error laborum perspiciatis dignissimos laudantium a magni
          deleniti! Ducimus porro perspiciatis minima possimus quisquam itaque.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi voluptates eum, vitae maxime, sit ipsum, totam veniam facere explicabo ab corporis maiores nostrum culpa iusto ex? Sit corporis inventore tempore?
          </p>

           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque, minima earum laboriosam eaque sint nam voluptatibus
          provident voluptates soluta placeat optio ducimus quam aperiam hic
          impedit et qui obcaecati. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis quae nihil dolorem, molestiae voluptates
          nisi error laborum perspiciatis dignissimos laudantium a magni
          deleniti! Ducimus porro perspiciatis minima possimus quisquam itaque.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi voluptates eum, vitae maxime, sit ipsum, totam veniam facere explicabo ab corporis maiores nostrum culpa iusto ex? Sit corporis inventore tempore?
          </p>
        <button onClick={() => likeFunc(post.id)}>{btn}</button>
        {newPost && <span>{newPost.likes}</span>}
      </div>
    </div>
  );
}

export default Single;
