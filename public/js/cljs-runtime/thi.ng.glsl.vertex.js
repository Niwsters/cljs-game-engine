goog.provide('thi.ng.glsl.vertex');
thi.ng.glsl.vertex.mvp = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"vec4 mvp(vec3 pos,mat4 model,mat4 view,mat4 proj){return proj*view*model*vec4(pos,1.);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return thi.ng.glsl.vertex.mvp;},new cljs.core.Symbol("thi.ng.glsl.vertex","mvp","thi.ng.glsl.vertex/mvp",-1144970981,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.vertex","thi.ng.glsl.vertex",-1750009590,null),new cljs.core.Symbol(null,"mvp","mvp",1146855395,null),"thi/ng/glsl/vertex.cljc",18,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.vertex.mvp)?thi.ng.glsl.vertex.mvp.cljs$lang$test:null)])),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"vec4",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"mvp",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 pos","mat4 model","mat4 view","mat4 proj"], null)], null)], 0));
thi.ng.glsl.vertex.surface_normal = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"vec3 surfaceNormal(vec3 normal,mat4 normalMat){return normalize((normalMat*vec4(normal,.0)).xyz);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return thi.ng.glsl.vertex.surface_normal;},new cljs.core.Symbol("thi.ng.glsl.vertex","surface-normal","thi.ng.glsl.vertex/surface-normal",-1061752229,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.vertex","thi.ng.glsl.vertex",-1750009590,null),new cljs.core.Symbol(null,"surface-normal","surface-normal",1680372179,null),"thi/ng/glsl/vertex.cljc",29,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.vertex.surface_normal)?thi.ng.glsl.vertex.surface_normal.cljs$lang$test:null)])),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"vec3",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"surfaceNormal",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 normal","mat4 normalMat"], null)], null)], 0));
thi.ng.glsl.vertex.rotate_x = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"vec3 rotateX(vec3 p,float theta){float s=sin(theta);float c=cos(theta);return vec3(p.x,p.y*c-p.z*s,p.z*c+p.y*s);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return thi.ng.glsl.vertex.rotate_x;},new cljs.core.Symbol("thi.ng.glsl.vertex","rotate-x","thi.ng.glsl.vertex/rotate-x",365300408,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.vertex","thi.ng.glsl.vertex",-1750009590,null),new cljs.core.Symbol(null,"rotate-x","rotate-x",-1991735296,null),"thi/ng/glsl/vertex.cljc",23,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.vertex.rotate_x)?thi.ng.glsl.vertex.rotate_x.cljs$lang$test:null)])),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"vec3",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"rotateX",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 p","float theta"], null)], null)], 0));
thi.ng.glsl.vertex.rotate_y = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"vec3 rotateY(vec3 p,float theta){float s=sin(theta);float c=cos(theta);return vec3(p.x*c+p.z*s,p.y,p.z*c-p.x*s);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return thi.ng.glsl.vertex.rotate_y;},new cljs.core.Symbol("thi.ng.glsl.vertex","rotate-y","thi.ng.glsl.vertex/rotate-y",-493109903,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.vertex","thi.ng.glsl.vertex",-1750009590,null),new cljs.core.Symbol(null,"rotate-y","rotate-y",1176649417,null),"thi/ng/glsl/vertex.cljc",23,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.vertex.rotate_y)?thi.ng.glsl.vertex.rotate_y.cljs$lang$test:null)])),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"vec3",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"rotateY",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 p","float theta"], null)], null)], 0));
thi.ng.glsl.vertex.rotate_z = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"vec3 rotateZ(vec3 p,float theta){float s=sin(theta);float c=cos(theta);return vec3(p.x*c-p.y*s,p.y*c+p.x*s,p.z);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return thi.ng.glsl.vertex.rotate_z;},new cljs.core.Symbol("thi.ng.glsl.vertex","rotate-z","thi.ng.glsl.vertex/rotate-z",-1131954792,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.vertex","thi.ng.glsl.vertex",-1750009590,null),new cljs.core.Symbol(null,"rotate-z","rotate-z",933472,null),"thi/ng/glsl/vertex.cljc",23,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.vertex.rotate_z)?thi.ng.glsl.vertex.rotate_z.cljs$lang$test:null)])),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"vec3",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"rotateZ",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 p","float theta"], null)], null)], 0));

//# sourceMappingURL=thi.ng.glsl.vertex.js.map
