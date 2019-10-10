<script>
    var toggle = {
        slideDown : function(element, height, interval_name, milli_second){
            class_control.addRemove(element, "hidden-item");
            let maxHeight = toggle.getMaxHeight(element, height);
            toggle.makeZeroHeight(element);
            let increaseHeight = 2;
            let repeat = maxHeight / increaseHeight;
            let nowHeight = 0;
            interval_name = setInterval(function(){
                nowHeight += increaseHeight;
                element.style.height = nowHeight + "px";
                toggle.clearSlideDown(element, nowHeight, maxHeight, interval_name);
            }, milli_second / repeat);
        },
        getHeight : function(element){
            return element.style.offsetHeight;
        },
        getMaxHeight : function(element, height){
            if(height && !isNaN(height)){
                return height;
            }
            return toggle.getHeight(element);
        },
        makeZeroHeight : function(element){
            element.style.height = 0;
        },
        clearSlideDown : function(element, nowHeight, maxHeight, interval_name){
            if(nowHeight >= maxHeight){
                element.style.height = "auto";
                clearInterval(interval_name);
            }
        },
        returnSlideDown : function(element){
            class_control.addRemove(element, "hidden-item");
        },
        slideDownAuto : function(element, height, interval_name, milli_second){
            if(toggle.isOpen(element)){
                toggle.returnSlideDown(element);
                return;
            }
            toggle.slideDown(element, height, interval_name, milli_second);
        },
        isOpen : function(element){
            return class_control.has(element);
        },
        downToggle : function(id_name){
            let scene = document.getElementById(id_name);
            toggle.slideDownAuto(scene, null, id_name, 300);
        }
    }
</script>
