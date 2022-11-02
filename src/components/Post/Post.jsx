import "./post.css";

export default function Post() {
      return (
            <div className="post">
                  <img
                        className="postImg"
                        src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
                        alt=""
                  />
                  <div className="postInfo">
                        <div className="postCats">
                              <span className="postCat">Music</span>
                              <span className="postCat">Life</span>
                        </div>
                        <span className="postTitle">Lorem ipsum</span>
                        <hr />
                        <span className="postDate">1 hour ago</span>
                  </div>
                  <p className="postDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                  </p>
            </div>
      );
}
