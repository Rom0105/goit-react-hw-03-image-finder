(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{14:function(e,t,a){e.exports={AppStyle:"App_AppStyle__1525x"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Fa28",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__LgLPw"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2MfrW",Modal:"Modal_Modal__3Ue-R"}},27:function(e,t,a){e.exports={Loader:"Loader_Loader__2gYwl"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3pd9G"}},30:function(e,t,a){e.exports={Button:"Button_Button__2I1XL"}},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),c=a.n(o),i=a(17),l=a(4),s=a(5),u=a(7),h=a(6),m=a(12),g=(a(36),a(37),a(14)),d=a.n(g),p=a(26),b=a.n(p),y=a(27),j=a.n(y),f=a(0);var O=function(){return Object(f.jsx)(b.a,{type:"Puff",color:"#00BFFF",height:200,width:200,timeout:3e3,className:j.a.Loader})},v=(a(59),a(8)),_=a.n(v),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):Object(m.alert)({text:"Enter the title!",delay:1e3})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:_.a.Searchbar,children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.Searchbar,children:[Object(f.jsx)("button",{type:"submit",className:_.a.SearchFormButton,children:Object(f.jsx)("span",{className:_.a.SearchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:_.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),I=a(28),S=a.n(I),w=a(15),k=a.n(w),L=function(e){var t=e.image,a=e.onClick,n=e.tags;return Object(f.jsx)("li",{className:k.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:t,alt:n,onClick:a,className:k.a.ImageGalleryItemImage})})};L.defaultProps={tags:""};var C=L,M=function(e){var t=e.images,a=e.selectedImage;return Object(f.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(f.jsx)(C,{image:n,onClick:function(){return a(r)},tags:o},t)}))})},q=a(16),N=a.n(q),B=document.querySelector("#modal-root"),F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.showModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.showModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:N.a.Overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:N.a.Modal,children:this.props.children})}),B)}}]),a}(n.Component),G=a(29),A=a.n(G),P=function(e){var t=e.query,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n;return A.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("23040897-f684e552d269990a649c2a9ea","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},D=a(30),E=a.n(D),U=function(e){var t=e.onClick;return Object(f.jsx)("button",{type:"button",onClick:t,className:E.a.Button,children:"Load more"})},T=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,pictures:[],query:"",largeImage:"",imgTags:"",error:"",showModal:!1,isLoading:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.bigImage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({largeImage:t}),e.toggleModal()},e.fetchPictures=function(){var t=e.state,a={page:t.page,query:t.query};e.setState({isLoading:!0}),P(a).then((function(t){t.length||Object(m.error)({text:"No image!",delay:1e3}),e.setState((function(e){return{pictures:[].concat(Object(i.a)(e.pictures),Object(i.a)(t)),page:e.page+1}}))})).catch((function(e){return e({text:"No image!",delay:1e3})})).finally((function(){return e.setState({isLoading:!1})}))},e.onChangeQwery=function(t){e.setState({query:t,page:1,pictures:[],error:null})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchPictures(),2!==this.state.page&&t.page!==this.state.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.isLoading,n=e.error,r=e.showModal,o=e.largeImage,c=e.imgTags;return Object(f.jsxs)("div",{className:d.a.AppStyle,children:[Object(f.jsx)(x,{onSubmit:this.onChangeQwery}),n&&Object(f.jsx)("h1",{children:n}),Object(f.jsx)(M,{images:t,selectedImage:this.bigImage}),a&&Object(f.jsx)(O,{}),t.length>11&&!a&&Object(f.jsx)(U,{onClick:this.fetchPictures}),r&&Object(f.jsx)(F,{showModal:this.bigImage,children:Object(f.jsx)("img",{src:o,alt:c})})]})}}]),a}(n.Component),K=T;a(78);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__15xWl",SearchFormButton:"Searchbar_SearchFormButton__3Uqyl",SearchFormInput:"Searchbar_SearchFormInput__3g4wa",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1K7ZQ"}}},[[79,1,2]]]);
//# sourceMappingURL=main.4080c318.chunk.js.map