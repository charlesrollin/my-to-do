var CheckControl=require("ui/check-control").CheckControl,Checkbox=exports.Checkbox=CheckControl.specialize({enterDocument:{value:function(e){this.super(e),e&&this.element.setAttribute("role","checkbox")}}});