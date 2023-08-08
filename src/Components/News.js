import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
class News extends Component {
  static defaultprops = {
    category:"general"
  }
  static propTypes = {
    category: PropTypes.string
  }
  CapitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title = `${this.CapitalizeFirstLetter(this.props.category)} - NewsAddicts`
  }
  
  async updateNews() {
    // let NewsUrl = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=in&apikey=cd6188e38324f41baa8d93723f98d1d4`
    this.setState({ loading: true });
    let data = await fetch(NewsUrl);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  render() {
    /* let handlePrevClick = async () => {
            this.updateNews();
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles, loading : false
            }) 
                
        } */
    /*  let handleNextClick = async () => {
            if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
            }
            else {
                this.updateNews();
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles,
                    loading : false
                })
           
        }
        } */
    return (
      <div className="m-5">
        <h2>NewsAddicts - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h2>
        <div className="d-flex flex-wrap my-2">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.image}
                  articleUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between m-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary" /*onClick={handlePrevClick} */
          >
            {' '}
            &larr; Previous
          </button>
          <button
            disabled
            type="button"
            className="btn btn-primary" /* onClick={handleNextClick} */
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
