window.addEventListener("DOMContentLoaded",function(){function e(){var e=document.querySelector(".footer"),i=document.querySelector(".header").offsetHeight+document.querySelector(".main").offsetHeight+e.offsetHeight;e.classList.toggle("footer-fixed",i<=window.innerHeight)}var i="right"===CONFIG.sidebar.position,t=CONFIG.sidebar.width||320,s={},n={lines:document.querySelector(".sidebar-toggle"),init:function(){this.lines.classList.remove("toggle-arrow","toggle-close")},arrow:function(){this.lines.classList.remove("toggle-close"),this.lines.classList.add("toggle-arrow")},close:function(){this.lines.classList.remove("toggle-arrow"),this.lines.classList.add("toggle-close")}};({sidebarEl:document.querySelector(".sidebar"),isSidebarVisible:!1,init:function(){n.init(),window.addEventListener("mousedown",this.mousedownHandler.bind(this)),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector("#sidebar-dimmer").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("mouseenter",this.mouseEnterHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("mouseleave",this.mouseLeaveHandler.bind(this)),window.addEventListener("sidebar:show",this.showSidebar.bind(this)),window.addEventListener("sidebar:hide",this.hideSidebar.bind(this))},mousedownHandler:function(e){s.X=e.pageX,s.Y=e.pageY},mouseupHandler:function(e){var i=e.pageX-s.X,t=e.pageY-s.Y,n=Math.sqrt(i*i+t*t)<20&&e.target.matches(".main");this.isSidebarVisible&&(n||e.target.matches("img.medium-zoom-image, .fancybox img"))&&this.hideSidebar()},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar()},mouseEnterHandler:function(){this.isSidebarVisible||n.arrow()},mouseLeaveHandler:function(){this.isSidebarVisible||n.init()},showSidebar:function(){this.isSidebarVisible=!0,this.sidebarEl.classList.add("sidebar-active"),"function"==typeof Velocity&&Velocity(document.querySelectorAll(".sidebar .motion-element"),i?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:!0}),n.close(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:200,easing:"linear"},i?{"padding-right":t}:{"padding-left":t}))},hideSidebar:function(){this.isSidebarVisible=!1,this.sidebarEl.classList.remove("sidebar-active"),n.init(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:200,easing:"linear"},i?{"padding-right":0}:{"padding-left":0}))}}).init(),e(),window.addEventListener("resize",e),window.addEventListener("scroll",e)});