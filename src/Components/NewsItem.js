import React, { Component } from 'react';
class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, articleUrl } = this.props;
        return (
            <div className="my-4 mx-2">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={articleUrl} className="btn btn-primary" rel="noreferrer" target='_blank'>See full Article</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem;