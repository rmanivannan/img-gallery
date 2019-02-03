const fs = require('fs');

class ManageImage{
    constructor(server){
        server.get('/api/images', this.getImages);
        server.post('/api/image', this.uploadImage);
    }
    getImages(req, res, next) {
        fs.readdir('./static-images/', (err, images) => {
            res.send({ images: images.map(a=>{
                return `/api/static-images/${a}`;
            }) });
            next();
        });
    }
    uploadImage(req, res, next) {
        const supportedFileExtensions = ['png','jpeg', 'jpg', 'gif'];
        const {fileName, base64Val} = req.body;
        const fileExt = (fileName || '').split('.').pop();
        if(supportedFileExtensions.indexOf(fileExt) == -1){
            res.status(400);
            res.send({
                errorMsg: `File type "${fileExt}" not supported, supported filetypes are "${supportedFileExtensions.join(', ')}"`
            });
            next();
        }else{
            const base64Data = base64Val.split(/;base64,/)[1];
            require("fs").writeFile('./static-images/' + fileName, base64Data, 'base64',  (err)=> {
                if(!err){
                    res.status(201);
                    res.send();
                }else{
                    res.status(500);
                    res.send({
                        errorMsg: 'Something went wrong, Please get in touch with techncl team'
                    });
                }
                next();
            });
        }
    }
};
module.exports = ManageImage;
