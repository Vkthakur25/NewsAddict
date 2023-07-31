import React, { Component } from 'react';
import NewsItem from './NewsItem';
class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    async componentDidMount() {
         let NewsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=20de4becadea485e94177be564df59d3"
         this.setState({loading : true});
         let data = await fetch(NewsUrl);
         console.log(NewsUrl)
         let parsedData = await data.json();
          console.log(parsedData)
         this.setState({ articles: parsedData.articles, loading : false})
         
     }

    render() {
       /* let handlePrevClick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=20de4becadea485e94177be564df59d3&page=${this.state.page - 1}&pageSize=20`;
            this.setState({loading : true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles, loading : false
            }) 
                
        } */
     /*  let handleNextClick = async () => {
            if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
            }
            else {
                let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=20de4becadea485e94177be564df59d3&page=${this.state.page + 1}&pageSize=20`;
                this.setState({loading : true});
                let data = await fetch(url);
                let parsedData = await data.json()
                console.log(parsedData);
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles,
                    loading : false
                })
           
        }
        } */
        return (

            <div className="m-5">
                <h2>NewsAddicts - Top Headlines</h2>
                <div className="d-flex flex-wrap my-2" >
                    {this.state.articles.map((element) => {
                        return <div key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} articleUrl={element.url} />
                        </div>
                    }
                    )}
                </div>
                <div className='d-flex justify-content-between m-2'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" /*onClick={handlePrevClick} */ > &larr; Previous</button>
                    <button disabled type="button" className="btn btn-primary" /* onClick={handleNextClick} */>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;