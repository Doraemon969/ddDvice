import computeOffset from"../behaviors/computeOffset";Component({behaviors:[computeOffset],externalClasses:["l-container-class","l-class"],properties:{show:{type:Boolean,value:!1},opacity:{type:String,value:"1"},bgColor:String,zIndex:{type:String,value:"776"},type:{type:String,value:"rotate"},color:{type:String,value:""},size:{type:String,value:"medium"},custom:Boolean,fullScreen:Boolean},attached(){this._init()},pageLifetimes:{show(){this._init()}},methods:{_init(){wx.lin=wx.lin||{},wx.lin.showLoading=e=>{const{custom:t=!1,fullScreen:o=!1,color:i="",type:s="rotate",size:a="medium",opacity:l="1"}={...e};this.setData({custom:t,fullScreen:o,color:i,type:s,size:a,opacity:l,show:!0})},wx.lin.hideLoading=()=>{this.setData({show:!1})}},doNothingMove(){}}});