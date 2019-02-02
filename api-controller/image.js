const fs = require('fs');
function ManageImage(server){
    function getImages(req, res, next) {
        fs.readdir('./static-images/', (err, images) => {
            res.send({ images });
            next();
        });
    }

    function uploadImage(req, res, next) {
        const supportedFileExtensions = ['png','jpeg', 'jpg', 'gif'];
        const {fileName, base64Val} = req.body;
        const fileExt = fileName.split('.').pop();
        if(supportedFileExtensions.indexOf(fileExt) == -1){
            res.status(400);
            res.send({
                errorMsg: `File type not supported, supported filetypes are "${supportedFileExtensions.join(', ')}"`
            });
            next();
        }else{
            // const base64Data = base64Val.split(/;base64,/)[1];
            require("fs").writeFile('./static-images/' + fileName, base64Val, 'base64', function (err) {
                res.status(201);
                res.send();
                next();
            });
        }
    }
    server.get('/images', getImages);
    server.post('/image', uploadImage);
    //server.get('/image/:name', getImageById);
}
module.exports = ManageImage;
