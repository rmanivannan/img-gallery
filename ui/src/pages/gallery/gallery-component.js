import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import './gallery-style.css'

class Gallery extends PureComponent {
    constructor(props) {
        super(props);
        this.es = null;
    }
    componentDidMount() {
        this.props.getImage();
        this.es = new EventSource('http://localhost:4001/api/listenChanges');	
        this.es.onmessage = this.props.getImage;
    }
    componentWillUnmount(){
        this.es.close();
    }
    render() {
        return <div className="gallery-cnt">
            <h1>Gallery</h1>
            <p>{this.props.failureMsg}</p>
            <ul>
                {this.props.images.map((val, i) => {
                    return <li key={`list-elm-${i}`}><img id={`img-${i}`} src={val} /></li>
                })}
            </ul>
        </div>
    }
}

Gallery.defaultProps = {
    failureMsg: '',
    images: [],
};

export default Gallery;
