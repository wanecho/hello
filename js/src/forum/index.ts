import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import { Fancybox } from "@fancyapps/ui";
import Post from 'flarum/common/models/Post';
import Model from 'flarum/common/Model';
import ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('echo/hello', () => {
  Post.prototype.ip_city = Model.attribute('ip_city');
  extend(CommentPost.prototype, 'headerItems', function(this:CommentPost,items:ItemList)  {
    const post = this.attrs.post;
    items.add('city', m('.PostMeta',post.ip_city()||''));
  });

  Fancybox.defaults.Image = { zoom: false };
  extend(CommentPost.prototype, 'oncreate', function (vnode) {
    this.element
      .querySelectorAll('img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img)')
      .forEach((node) => {
        const fancyboxEl = document.createElement('a');
        fancyboxEl.setAttribute('data-fancybox', 'responsive');
        if(window.matchMedia("(max-width: 750px)").matches){
          fancyboxEl.setAttribute('data-src', node.getAttribute('data-src') || node.getAttribute('src'));
          node.setAttribute('src',node.getAttribute('src').replace(/\?imageMogr2\/thumbnail\/!65p/,'?imageMogr2/thumbnail/!35p'));  
        }else{
          fancyboxEl.setAttribute('data-src', node.getAttribute('data-src') || node.getAttribute('src'));
        }
        $(node).wrap(fancyboxEl);
      });
  });
});
