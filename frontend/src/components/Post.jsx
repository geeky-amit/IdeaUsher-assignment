import React, { useEffect, useState } from 'react'
import "./Post.css"
import Header from "./Header"
import userIcon from "../assets/icons-user.png"
import { useNavigate } from "react-router-dom";

const Post = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className="post-container" >
                <div className="post-card">
                    <img className="post-img" src={"https://www.thebalancemoney.com/thmb/OqDqeT4W7DUsGBEas4kAgSxm8QM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogging-2227d2f697a54b6395f966dd0d85db6c.jpg"} />
                    <h2>Automation In Agriculture With Mobile App Development</h2>
                    <div className="author">
                        <div className="author-name">
                            <img style={{ height: "18px", width: "18px", paddingTop: "2px" }} src={userIcon} alt="icon-user" />
                            <span>Amit Patel</span>
                        </div>
                        <button className="btn-article" onClick={() => navigate("/singlepost")} >read full article</button>
                    </div>
                </div>
                <div className="post-card">
                    <img className="post-img" src={"https://www.thebalancemoney.com/thmb/OqDqeT4W7DUsGBEas4kAgSxm8QM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogging-2227d2f697a54b6395f966dd0d85db6c.jpg"} />
                    <h2>Automation In Agriculture With Mobile App Development</h2>
                    <div className="author">
                        <div className="author-name">
                            <img style={{ height: "18px", width: "18px", paddingTop: "2px" }} src={userIcon} alt="icon-user" />
                            <span>Amit Patel</span>
                        </div>
                        <button className="btn-article" onClick={() => navigate("/singlepost")} >read full article</button>
                    </div>
                </div>
                <div className="post-card">
                    <img className="post-img" src={"https://www.thebalancemoney.com/thmb/OqDqeT4W7DUsGBEas4kAgSxm8QM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogging-2227d2f697a54b6395f966dd0d85db6c.jpg"} />
                    <h2>Automation In Agriculture With Mobile App Development</h2>
                    <div className="author">
                        <div className="author-name">
                            <img style={{ height: "18px", width: "18px", paddingTop: "2px" }} src={userIcon} alt="icon-user" />
                            <span>Amit Patel</span>
                        </div>
                        <button className="btn-article" onClick={() => navigate("/singlepost")} >read full article</button>
                    </div>
                </div>
                <div className="post-card">
                    <img className="post-img" src={"https://www.thebalancemoney.com/thmb/OqDqeT4W7DUsGBEas4kAgSxm8QM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogging-2227d2f697a54b6395f966dd0d85db6c.jpg"} />
                    <h2>Automation In Agriculture With Mobile App Development</h2>
                    <div className="author">
                        <div className="author-name">
                            <img style={{ height: "18px", width: "18px", paddingTop: "2px" }} src={userIcon} alt="icon-user" />
                            <span>Amit Patel</span>
                        </div>
                        <button className="btn-article" onClick={() => navigate("/singlepost")} >read full article</button>
                    </div>
                </div>
                <div className="post-card">
                    <img className="post-img" src={"https://www.thebalancemoney.com/thmb/OqDqeT4W7DUsGBEas4kAgSxm8QM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Blogging-2227d2f697a54b6395f966dd0d85db6c.jpg"} />
                    <h2>Automation In Agriculture With Mobile App Development</h2>
                    <div className="author">
                        <div className="author-name">
                            <img style={{ height: "18px", width: "18px", paddingTop: "2px" }} src={userIcon} alt="icon-user" />
                            <span>Amit Patel</span>
                        </div>
                        <button className="btn-article" onClick={() => navigate("/singlepost")} >read full article</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post