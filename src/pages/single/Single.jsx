import "./single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
      return (
            <div className="single">
                  {/* post */}
                  <Sidebar />
                  <SinglePost />
            </div>
      );
}
