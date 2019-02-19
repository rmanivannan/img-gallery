/* const supportedUrls = {
    'NAV_TO_HOME' : '/',
    'NAV_TO_GALLERY' : '/gallery/',
    'NAV_TO_UPLOAD' : '/upload'
}
 */

const routerMiddleware = store => next => action => {
    /*const nextPath = supportedUrls[action.type]; */
    //if(nextPath){
        // Place to pipe Page navigations 
        // BrowserHistory global support is emoved in recent react router
    //s}
    if(!action.type){
        console.warn(`Invalid action type: ${JSON.stringify(action)}`);
    }
    next(action);
}

export default routerMiddleware;
