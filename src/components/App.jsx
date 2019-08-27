import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{
    state = {
        data:[],
        value:'',
        videoId:''
       };
    
      componentDidMount(){
        
        this.youtubeFunc()
      }
      youtubeFunc =()=>{
        const API_KEY="AIzaSyC8k1F9ISEZjpQCcQ7gGaTlEOO9wCoOeso";
        const url= "https://www.googleapis.com/youtube/v3/search"
        axios
        .get(
          
          `${url}?part=snippet&maxResults=5&q=${this.state.value}&key=${API_KEY}`
        )
        .then(res =>{
            console.log('adil',res);
          this.setState({
            data: [...res.data.items]
          })
    
        })
        .catch(error =>{
          console.log(error);
        })
      }
      handleChange =(e)=>{
        this.setState({
          value:e.target.value
        },()=>this.youtubeFunc())
      }
      handleClick=(id)=>{
        this.setState({
          videoId:id
        })
      }
        render() {
            console.log("in app component", this.state.videoId )
            
            let response = this.state.data.map((res,index)=>{
                return (
                    <div className="media border p-3  my-3" key={index} onClick={()=>this.handleClick(res.id.videoId)}>
                        <img src={`${res.snippet.thumbnails.default.url}`} alt="John Doe" className="mr-3 mt-3 thumbnail" style={{width:"150px", height:"100px"}}/>
                        <div className="media-body">
                            <h5>{res.snippet.title}</h5>
                            
                        </div>
                    </div>
                )
            });

            return(
    
              <div>
                <div className="row bg-danger p-2">
                  <div className="col-md-8 offset-md-3">
                  <div className="fieldcontainer">
                  <form id="" name="">
                      <input type="search" id="" className="p-3" onChange={this.handleChange} placeholder="Search Youtube..."/>
                      <button type="submit" id="" name="" className="btn bg-light" >Search</button>
                  </form>
                 </div>
                  </div>
                </div>
    
                <div className="row">
                  <div className="col-md-4 m-3">
                  <iframe width="700" height="394" src={`https://www.youtube.com/embed/${this.state.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
                  </div>
                <div className="col-md-5 offset-md-2">
                    {response}
                </div>
                </div>
              </div>
    
            )
        }
    
}

export default App;