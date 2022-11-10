import React, { Component } from 'react';
import axios from 'axios';
class AddPost extends React.Component {

  state = {
      caption : "",
      image : ""
  }

  handleInput= (e) => {
      this.setState({
          [e.target.name] : e.target.value
      });
      console.log(e.target.value);
  }

  handleImage = (e) => {
      this.setState({
          [e.target.name] :  e.target.files[0]
      });
  }

  savePost = async (e) => 
  {
      e.preventDefault();
      console.log(this.state);
      const Data = new FormData();
      Data.append('caption', this.state.caption);
      Data.append('image', this.state.image);
      const res = await axios.post('store-post', Data);
      console.log(res);
      /* TODO: Make the redirection after the upload is complete */
      
  }

  render() {
    return (
      <div className="col-md-5">
        <div className="form-area">  
            <form role="form" method='POST' onSubmit={this.savePost} encType="multipart/form-data">
            <br styles="clear:both" />
              <div className="form-group">
                  <input className="form-control" type="text" name ="caption"  id="caption" placeholder="Caption" maxLength="140" rows="7" onChange={this.handleInput}></input>
              </div>  
              <div className="form-group">
                <input type="file" className="form-control" id="image" name="image" onChange={this.handleImage}></input>
              </div>
            <button type="submit" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
            </form>
            
        </div>
      </div>
    )
  }    
}

export default AddPost;