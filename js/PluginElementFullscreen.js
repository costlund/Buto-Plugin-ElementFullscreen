function PluginElementFullscreen(){
  this.toogle = function(btn, id){
    /**
     * Div element to toogle in full screen
     */
    var div = document.getElementById(id);
    /**
     * 
     */
    if(!document.getElementById(id+'_anchor')){
      /**
       * Anchor add
       */
      var anchor = document.createElement('div');
      anchor.id = id+'_anchor';
      anchor.innerHTML = id+'_anchor'
      div.parentNode.appendChild(anchor);
      /**
       * Class add
       */
      $(div).addClass('plugin_element_fullscreen');
      /**
       * Div append to body
       */
      document.body.appendChild(div);
      /**
       * Icon normal
       */
      btn.getElementsByTagName('img')[0].setAttribute('src', '/plugin/icons/octicons/build/svg/screen-normal.svg');
    }else{
      /**
       * Div append back
       */
      document.getElementById(id+'_anchor').parentNode.appendChild(div);
      /**
       * Anchor remove
       */
      document.getElementById(id+'_anchor').parentNode.removeChild(document.getElementById(id+'_anchor'));
      /**
       * Class remove
       */
      $(div).removeClass('plugin_element_fullscreen');
      /**
       * Icon full
       */
      btn.getElementsByTagName('img')[0].setAttribute('src', '/plugin/icons/octicons/build/svg/screen-full.svg');
    }
  }
}
var PluginElementFullscreen = new PluginElementFullscreen();
