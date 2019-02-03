import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Gallery extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getImage();
    }
    render() {
        return <div>
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
