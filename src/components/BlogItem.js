import React, { useState } from 'react'
import blog_1 from "../assets/img/blog/single_blog_1.png";

export default function BlogItem(props) {
    const contentofPage=props.content
   
  function handleBlogClick(){
    props.onComponentChange({
        component:"componentBlogDetails",
        content:contentofPage
    })
  }
  return (
    <div>
      <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src={props.image} alt=""/>
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>
                                <div class="blog_details">
                                    <a class="d-inline-block" onClick={handleBlogClick}>
                                        <h2 class="blog-head" style={{color: "#2d2d2d"}}>{props.title}</h2>
                                    </a>
                                    <p>{props.description}.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                    </ul>
                                </div>
                            </article>
    </div>
  )
}
