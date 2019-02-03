const supportedUrls = {
    'NAV_TO_HOME' : '/',
    'NAV_TO_GALLERY' : '/gallery',
    'NAV_TO_UPLOAD' : '/upload'
}

const routerMiddleware = store => next => action => {
    const nextPath = supportedUrls[action.type];
    if(nextPath){
        // Place to pipe Page navigations
    }
    if(!action.type){
        console.warn(`Invalid action type: ${JSON.stringify(action)}`);
    }
    next(action);
}

export default routerMiddleware;
