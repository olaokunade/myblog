import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Finder = () => {
  const [post, setPost] = useState();
  const [search, setSearch] = useState("");
  const [addition, setAddition] = useState({ view: 0, likes: 0 });

  let myStore;
  useEffect(() => {
  
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      let newData = res.data.filter((data, i) => data.id <= 50);
      let finalData = newData.map((data) => {
        return { ...data, ...addition };
      });
      if (localStorage.getItem("posts") === null) {
        myStore = finalData;
      } else {
        myStore = JSON.parse(localStorage.getItem("posts"));
      }
      localStorage.setItem("posts", JSON.stringify(myStore));
    });
    myStore = JSON.parse(localStorage.getItem("posts"));
    setPost(myStore);
  }, []);
  const viewFunc = (id) => {
    let a = JSON.parse(localStorage.getItem("posts"));
    let finder = a.find((val, i) => Number(val.id) === Number(id)); 
    let index = a.indexOf(finder); 
    finder.view = Number(finder.view) + 1;
    a[index] = finder;
    localStorage.setItem("posts", JSON.stringify(a));
    let newState = [...post]
    let findState = newState.find((val, i) => Number(val.id) === Number(id));
    let ind = newState.indexOf(findState);
    findState.view++
    newState[ind] = findState;
    setPost(newState)
  };

  const Find = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder="Search any content" onChange={Find} />

      {post && post.filter((val) => {
        if (search === "") {
          return val
        } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((post, i) => {
        return (

          <Link to={`post/${post.id}`} onClick={() => viewFunc(post.id)} key={i}>
            <div className="row">
              <div className="col s/12 m7">
                <div className="card">
                  <div className="card-image">
                    <img src={post.thumbnailUrl} />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{post.title}</span> <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                    doloremque, minima earum laboriosam eaque sint nam voluptatibus
                    provident voluptates soluta placeat optio ducimus quam aperiam hic
                    impedit et qui obcaecati. Lorem ipsum dolor sit....
                    </p>
                  </div>
                  <div className="card-action">
                    <a><i className="small material-icons">face</i>{post.view}</a>
                    <a><i className="small material-icons">favorite_border</i>{post.likes}</a>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}

    </div>
  );
};

export default Finder;
