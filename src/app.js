const routes = {
    '/' : home,
    '/about' : about,
    '/projects/book-vax' : projectBookVax
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
  
const onNavigate = (pathname) => {
    window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
}

console.log("hlep");
  
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}
