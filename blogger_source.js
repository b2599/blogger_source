var bigPic = {
  removeClass : function(element, class_name){
    for(let i = 0; i < element.length; i++){
      element[i].classList.remove(class_name);
    }
  },
  addClass : function(element, class_name){
    for(let i = 0; i < element.length; i++){
      element[i].classList.add(class_name);
    }
  },
  addOrRemoveClass : function(element, class_name){
    if(hasClass(element, class_name)){
	    removeClass(element, class_name);
      return "remove";
    }
	  addClass(element, class_name);
		return "add";
  },
  hasClass : function(element, class_name){
    for(let i = 0; i <![CDATA[ < ]]> element.classList.length; i++){
      if(element.classList[i] === class_name){
			  return true;
			}
		}
		
		return false;
  },
  sceneControl : function(scene_number){
    let sceneContent = document.getElementById(&quot;scene&quot; + scene_number);
		addOrRemoveClass(sceneContent, &quot;hidden-item&quot;);
  }
}
