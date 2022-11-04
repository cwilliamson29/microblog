import "./singlePost.css";

export default function SinglePost() {
      return (
            <div className="singlePost">
                  <div className="singlePostWrapper">
                        <img
                              className="postImg"
                              src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
                              alt=""
                        />
                        <h1 className="singlePostTitle">
                              Lorem ipsum dolar sit
                              <div className="singlePostEdit">
                                    <i className="fa-solid fa-pen-to-square singlePostIcon"></i>
                                    <i className="fa-solid fa-trash-can singlePostIcon"></i>
                              </div>
                        </h1>
                        <div className="singlePostInfo">
                              <span className="singlePostDate">
                                    Author: <b>Chris</b>
                              </span>
                              <span className="singlePostDate"> 1 hour ago</span>
                        </div>
                        <p className="singlePostDesc">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                              est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                              anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                              deserunt mollit anim id est laborum.
                        </p>
                  </div>
            </div>
      );
}
