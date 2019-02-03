import React, { PureComponent } from "react";
import { Link } from "react-router-dom";


class Uplaod extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    onSubmit(e) {
        e.preventDefault();
        let file = e.target.firstChild;
        const reader = new FileReader();

        reader.addEventListener("load",  ()=> {
            this.props.uploadImg({
                fileName : file.value.replace(/^.*(\\|\/|\:)/, ''),
                base64Val: reader.result
            });
        }, false);

        if(file) 
            reader.readAsDataURL(file.files[0]);
       
    }
    render() {
        return <div>
            <h1>Uplaod New Image</h1>
            <p>{this.props.msg}</p>
            <form onSubmit={(e) => { this.onSubmit(e) }}>
                <input type="file" id="file" />
                <input type="submit" id="uploadSubmitBtn" value="uplaod" />
            </form>
        </div>
    }
}

export default Uplaod;
