import{r as Fm,g as G_,R as f1,a as Ft,j as Jt}from"./index-C3hLDZv5.js";var lp={exports:{}},Is={};var Vg;function d1(){return Vg||(Vg=1,Is.ConcurrentRoot=1,Is.ContinuousEventPriority=8,Is.DefaultEventPriority=32,Is.DiscreteEventPriority=2,Is.IdleEventPriority=268435456,Is.LegacyRoot=0,Is.NoEventPriority=0),Is}var Hg;function p1(){return Hg||(Hg=1,lp.exports=d1()),lp.exports}var ih=p1();const dc="181",m1={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},x1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},k_=0,xm=1,W_=2,g1=3,X_=0,ef=1,Bl=2,Qi=3,vs=0,Yn=1,ds=2,gs=0,mr=1,gm=2,vm=3,_m=4,q_=5,_a=100,Y_=101,Z_=102,j_=103,K_=104,J_=200,Q_=201,$_=202,ty=203,lh=204,ch=205,ey=206,ny=207,iy=208,sy=209,ay=210,ry=211,oy=212,ly=213,cy=214,uh=0,hh=1,fh=2,_r=3,dh=4,ph=5,mh=6,xh=7,pc=0,uy=1,hy=2,es=0,fy=1,dy=2,py=3,Vm=4,my=5,xy=6,gy=7,ym="attached",vy="detached",nf=300,Xs=301,Ma=302,Yl=303,Zl=304,Go=306,jl=1e3,ui=1001,Kl=1002,In=1003,Hm=1004,v1=1004,To=1005,_1=1005,sn=1006,zl=1007,y1=1007,ms=1008,S1=1008,Gi=1009,Gm=1010,km=1011,Ro=1012,sf=1013,qs=1014,ti=1015,Ca=1016,af=1017,rf=1018,Do=1020,Wm=35902,Xm=35899,qm=1021,Ym=1022,qn=1023,Uo=1026,No=1027,of=1028,mc=1029,lf=1030,cf=1031,b1=1032,uf=1033,Fl=33776,Vl=33777,Hl=33778,Gl=33779,gh=35840,vh=35841,_h=35842,yh=35843,Sh=36196,bh=37492,Mh=37496,Eh=37808,Th=37809,Ah=37810,Ch=37811,wh=37812,Rh=37813,Dh=37814,Uh=37815,Nh=37816,Lh=37817,Ih=37818,Ph=37819,Oh=37820,Bh=37821,zh=36492,Fh=36494,Vh=36495,Hh=36283,Gh=36284,kh=36285,Wh=36286,_y=2200,yy=2201,Sy=2202,Jl=2300,Xh=2301,sh=2302,fr=2400,dr=2401,Ql=2402,hf=2500,Zm=2501,M1=0,E1=1,T1=2,by=3200,My=3201,A1=3202,C1=3203,wa=0,Ey=1,Gs="",Xn="srgb",Ea="srgb-linear",$l="linear",Ge="srgb",w1=0,ur=7680,R1=7681,D1=7682,U1=7683,N1=34055,L1=34056,I1=5386,P1=512,O1=513,B1=514,z1=515,F1=516,V1=517,H1=518,Sm=519,Ty=512,Ay=513,Cy=514,jm=515,wy=516,Ry=517,Dy=518,Uy=519,tc=35044,G1=35048,k1=35040,W1=35045,X1=35049,q1=35041,Y1=35046,Z1=35050,j1=35042,K1="100",bm="300 es",Ci=2e3,Lo=2001,J1={COMPUTE:"compute",RENDER:"render"},Q1={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},$1={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function Ny(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const t3={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ao(s,t){return new t3[s](t)}function ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ly(){const s=ec("canvas");return s.style.display="block",s}const Gg={};let Ta=null;function e3(s){Ta=s}function n3(){return Ta}function nc(...s){const t="THREE."+s.shift();Ta?Ta("log",t,...s):console.log(t,...s)}function Nt(...s){const t="THREE."+s.shift();Ta?Ta("warn",t,...s):console.warn(t,...s)}function pe(...s){const t="THREE."+s.shift();Ta?Ta("error",t,...s):console.error(t,...s)}function Io(...s){const t=s.join(" ");t in Gg||(Gg[t]=!0,Nt(...s))}function i3(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,l=i.length;r<l;r++)i[r].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const xr=Math.PI/180,Po=180/Math.PI;function Ri(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function he(s,t,e){return Math.max(t,Math.min(e,s))}function Km(s,t){return(s%t+t)%t}function s3(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function a3(s,t,e){return s!==t?(e-s)/(t-s):0}function kl(s,t,e){return(1-e)*s+e*t}function r3(s,t,e,n){return kl(s,t,1-Math.exp(-e*n))}function o3(s,t=1){return t-Math.abs(Km(s,t*2)-t)}function l3(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function c3(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function u3(s,t){return s+Math.floor(Math.random()*(t-s+1))}function h3(s,t){return s+Math.random()*(t-s)}function f3(s){return s*(.5-Math.random())}function d3(s){s!==void 0&&(kg=s);let t=kg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function p3(s){return s*xr}function m3(s){return s*Po}function x3(s){return(s&s-1)===0&&s!==0}function g3(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function v3(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _3(s,t,e,n,i){const r=Math.cos,l=Math.sin,c=r(e/2),h=l(e/2),f=r((t+n)/2),p=l((t+n)/2),m=r((t-n)/2),x=l((t-n)/2),g=r((n-t)/2),y=l((n-t)/2);switch(i){case"XYX":s.set(c*p,h*m,h*x,c*f);break;case"YZY":s.set(h*x,c*p,h*m,c*f);break;case"ZXZ":s.set(h*m,h*x,c*p,c*f);break;case"XZX":s.set(c*p,h*y,h*g,c*f);break;case"YXY":s.set(h*g,c*p,h*y,c*f);break;case"ZYZ":s.set(h*y,h*g,c*p,c*f);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Oo={DEG2RAD:xr,RAD2DEG:Po,generateUUID:Ri,clamp:he,euclideanModulo:Km,mapLinear:s3,inverseLerp:a3,lerp:kl,damp:r3,pingpong:o3,smoothstep:l3,smootherstep:c3,randInt:u3,randFloat:h3,randFloatSpread:f3,seededRandom:d3,degToRad:p3,radToDeg:m3,isPowerOfTwo:x3,ceilPowerOfTwo:g3,floorPowerOfTwo:v3,setQuaternionFromProperEuler:_3,normalize:Se,denormalize:$n};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,l=this.y-t.y;return this.x=r*n-l*i+t.x,this.y=r*i+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,l,c){let h=n[i+0],f=n[i+1],p=n[i+2],m=n[i+3],x=r[l+0],g=r[l+1],y=r[l+2],M=r[l+3];if(c<=0){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=m;return}if(c>=1){t[e+0]=x,t[e+1]=g,t[e+2]=y,t[e+3]=M;return}if(m!==M||h!==x||f!==g||p!==y){let S=h*x+f*g+p*y+m*M;S<0&&(x=-x,g=-g,y=-y,M=-M,S=-S);let _=1-c;if(S<.9995){const E=Math.acos(S),T=Math.sin(E);_=Math.sin(_*E)/T,c=Math.sin(c*E)/T,h=h*_+x*c,f=f*_+g*c,p=p*_+y*c,m=m*_+M*c}else{h=h*_+x*c,f=f*_+g*c,p=p*_+y*c,m=m*_+M*c;const E=1/Math.sqrt(h*h+f*f+p*p+m*m);h*=E,f*=E,p*=E,m*=E}}t[e]=h,t[e+1]=f,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,i,r,l){const c=n[i],h=n[i+1],f=n[i+2],p=n[i+3],m=r[l],x=r[l+1],g=r[l+2],y=r[l+3];return t[e]=c*y+p*m+h*g-f*x,t[e+1]=h*y+p*x+f*m-c*g,t[e+2]=f*y+p*g+c*x-h*m,t[e+3]=p*y-c*m-h*x-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,l=t._order,c=Math.cos,h=Math.sin,f=c(n/2),p=c(i/2),m=c(r/2),x=h(n/2),g=h(i/2),y=h(r/2);switch(l){case"XYZ":this._x=x*p*m+f*g*y,this._y=f*g*m-x*p*y,this._z=f*p*y+x*g*m,this._w=f*p*m-x*g*y;break;case"YXZ":this._x=x*p*m+f*g*y,this._y=f*g*m-x*p*y,this._z=f*p*y-x*g*m,this._w=f*p*m+x*g*y;break;case"ZXY":this._x=x*p*m-f*g*y,this._y=f*g*m+x*p*y,this._z=f*p*y+x*g*m,this._w=f*p*m-x*g*y;break;case"ZYX":this._x=x*p*m-f*g*y,this._y=f*g*m+x*p*y,this._z=f*p*y-x*g*m,this._w=f*p*m+x*g*y;break;case"YZX":this._x=x*p*m+f*g*y,this._y=f*g*m+x*p*y,this._z=f*p*y-x*g*m,this._w=f*p*m-x*g*y;break;case"XZY":this._x=x*p*m-f*g*y,this._y=f*g*m-x*p*y,this._z=f*p*y+x*g*m,this._w=f*p*m+x*g*y;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],l=e[1],c=e[5],h=e[9],f=e[2],p=e[6],m=e[10],x=n+c+m;if(x>0){const g=.5/Math.sqrt(x+1);this._w=.25/g,this._x=(p-h)*g,this._y=(r-f)*g,this._z=(l-i)*g}else if(n>c&&n>m){const g=2*Math.sqrt(1+n-c-m);this._w=(p-h)/g,this._x=.25*g,this._y=(i+l)/g,this._z=(r+f)/g}else if(c>m){const g=2*Math.sqrt(1+c-n-m);this._w=(r-f)/g,this._x=(i+l)/g,this._y=.25*g,this._z=(h+p)/g}else{const g=2*Math.sqrt(1+m-n-c);this._w=(l-i)/g,this._x=(r+f)/g,this._y=(h+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,l=t._w,c=e._x,h=e._y,f=e._z,p=e._w;return this._x=n*p+l*c+i*f-r*h,this._y=i*p+l*h+r*c-n*f,this._z=r*p+l*f+n*h-i*c,this._w=l*p-n*c-i*h-r*f,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,l=t._w,c=this.dot(t);c<0&&(n=-n,i=-i,r=-r,l=-l,c=-c);let h=1-e;if(c<.9995){const f=Math.acos(c),p=Math.sin(f);h=Math.sin(h*f)/p,e=Math.sin(e*f)/p,this._x=this._x*h+n*e,this._y=this._y*h+i*e,this._z=this._z*h+r*e,this._w=this._w*h+l*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+i*e,this._z=this._z*h+r*e,this._w=this._w*h+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wg.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,l=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*l,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*l,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,l=t.y,c=t.z,h=t.w,f=2*(l*i-c*n),p=2*(c*e-r*i),m=2*(r*n-l*e);return this.x=e+h*f+l*m-c*p,this.y=n+h*p+c*f-r*m,this.z=i+h*m+r*p-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,l=e.x,c=e.y,h=e.z;return this.x=i*h-r*c,this.y=r*l-n*h,this.z=n*c-i*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cp.copy(this).projectOnVector(t),this.sub(cp)}reflect(t){return this.sub(cp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cp=new P,Wg=new hi;class ve{constructor(t,e,n,i,r,l,c,h,f){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,l,c,h,f)}set(t,e,n,i,r,l,c,h,f){const p=this.elements;return p[0]=t,p[1]=i,p[2]=c,p[3]=e,p[4]=r,p[5]=h,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,l=n[0],c=n[3],h=n[6],f=n[1],p=n[4],m=n[7],x=n[2],g=n[5],y=n[8],M=i[0],S=i[3],_=i[6],E=i[1],T=i[4],A=i[7],N=i[2],w=i[5],I=i[8];return r[0]=l*M+c*E+h*N,r[3]=l*S+c*T+h*w,r[6]=l*_+c*A+h*I,r[1]=f*M+p*E+m*N,r[4]=f*S+p*T+m*w,r[7]=f*_+p*A+m*I,r[2]=x*M+g*E+y*N,r[5]=x*S+g*T+y*w,r[8]=x*_+g*A+y*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],l=t[4],c=t[5],h=t[6],f=t[7],p=t[8];return e*l*p-e*c*f-n*r*p+n*c*h+i*r*f-i*l*h}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],l=t[4],c=t[5],h=t[6],f=t[7],p=t[8],m=p*l-c*f,x=c*h-p*r,g=f*r-l*h,y=e*m+n*x+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return t[0]=m*M,t[1]=(i*f-p*n)*M,t[2]=(c*n-i*l)*M,t[3]=x*M,t[4]=(p*e-i*h)*M,t[5]=(i*r-c*e)*M,t[6]=g*M,t[7]=(n*h-f*e)*M,t[8]=(l*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,l,c){const h=Math.cos(r),f=Math.sin(r);return this.set(n*h,n*f,-n*(h*l+f*c)+l+t,-i*f,i*h,-i*(-f*l+h*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(up.makeScale(t,e)),this}rotate(t){return this.premultiply(up.makeRotation(-t)),this}translate(t,e){return this.premultiply(up.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const up=new ve,Xg=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qg=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y3(){const s={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(i,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===Ge&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ge&&(i.r=wo(i.r),i.g=wo(i.g),i.b=wo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gs?$l:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,l){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ea]:{primaries:t,whitePoint:n,transfer:$l,toXYZ:Xg,fromXYZ:qg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:n,transfer:Ge,toXYZ:Xg,fromXYZ:qg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),s}const Re=y3();function Ws(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let to;class Iy{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{to===void 0&&(to=ec("canvas")),to.width=t.width,to.height=t.height;const i=to.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=to}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ec("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let l=0;l<r.length;l++)r[l]=Ws(r[l]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ws(e[n]/255)*255):e[n]=Ws(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let S3=0;class Sa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S3++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?r.push(hp(i[l].image)):r.push(hp(i[l]))}else r=hp(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function hp(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Iy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let b3=0;const fp=new P;class cn extends _s{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=ui,i=ui,r=sn,l=ms,c=qn,h=Gi,f=cn.DEFAULT_ANISOTROPY,p=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b3++}),this.uuid=Ri(),this.name="",this.source=new Sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fp).x}get height(){return this.source.getSize(fp).y}get depth(){return this.source.getSize(fp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jl:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jl:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=nf;cn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,i=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*i+l[12]*r,this.y=l[1]*e+l[5]*n+l[9]*i+l[13]*r,this.z=l[2]*e+l[6]*n+l[10]*i+l[14]*r,this.w=l[3]*e+l[7]*n+l[11]*i+l[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const h=t.elements,f=h[0],p=h[4],m=h[8],x=h[1],g=h[5],y=h[9],M=h[2],S=h[6],_=h[10];if(Math.abs(p-x)<.01&&Math.abs(m-M)<.01&&Math.abs(y-S)<.01){if(Math.abs(p+x)<.1&&Math.abs(m+M)<.1&&Math.abs(y+S)<.1&&Math.abs(f+g+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(f+1)/2,A=(g+1)/2,N=(_+1)/2,w=(p+x)/4,I=(m+M)/4,z=(y+S)/4;return T>A&&T>N?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=I/n):A>N?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=w/i,r=z/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=I/r,i=z/r),this.set(n,i,r,e),this}let E=Math.sqrt((S-y)*(S-y)+(m-M)*(m-M)+(x-p)*(x-p));return Math.abs(E)<.001&&(E=1),this.x=(S-y)/E,this.y=(m-M)/E,this.z=(x-p)/E,this.w=Math.acos((f+g+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jm extends _s{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new cn(i);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Sa(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Jm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ff extends cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class M3 extends is{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ff(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class df extends cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E3 extends is{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new df(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class gn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ji.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ji.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=r.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,ji):ji.fromBufferAttribute(r,l),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lu.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lu.copy(n.boundingBox)),lu.applyMatrix4(t.matrixWorld),this.union(lu)}const i=t.children;for(let r=0,l=i.length;r<l;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),cu.subVectors(this.max,Sl),eo.subVectors(t.a,Sl),no.subVectors(t.b,Sl),io.subVectors(t.c,Sl),ha.subVectors(no,eo),fa.subVectors(io,no),Ka.subVectors(eo,io);let e=[0,-ha.z,ha.y,0,-fa.z,fa.y,0,-Ka.z,Ka.y,ha.z,0,-ha.x,fa.z,0,-fa.x,Ka.z,0,-Ka.x,-ha.y,ha.x,0,-fa.y,fa.x,0,-Ka.y,Ka.x,0];return!dp(e,eo,no,io,cu)||(e=[1,0,0,0,1,0,0,0,1],!dp(e,eo,no,io,cu))?!1:(uu.crossVectors(ha,fa),e=[uu.x,uu.y,uu.z],dp(e,eo,no,io,cu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ps),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ps=[new P,new P,new P,new P,new P,new P,new P,new P],ji=new P,lu=new gn,eo=new P,no=new P,io=new P,ha=new P,fa=new P,Ka=new P,Sl=new P,cu=new P,uu=new P,Ja=new P;function dp(s,t,e,n,i){for(let r=0,l=s.length-3;r<=l;r+=3){Ja.fromArray(s,r);const c=i.x*Math.abs(Ja.x)+i.y*Math.abs(Ja.y)+i.z*Math.abs(Ja.z),h=t.dot(Ja),f=e.dot(Ja),p=n.dot(Ja);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>c)return!1}return!0}const T3=new gn,bl=new P,pp=new P;class vn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):T3.setFromPoints(t).getCenter(n);let i=0;for(let r=0,l=t.length;r<l;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bl.subVectors(t,this.center);const e=bl.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bl,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bl.copy(t.center).add(pp)),this.expandByPoint(bl.copy(t.center).sub(pp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Os=new P,mp=new P,hu=new P,da=new P,xp=new P,fu=new P,gp=new P;class ko{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Os)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Os.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Os.copy(this.origin).addScaledVector(this.direction,e),Os.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mp.copy(t).add(e).multiplyScalar(.5),hu.copy(e).sub(t).normalize(),da.copy(this.origin).sub(mp);const r=t.distanceTo(e)*.5,l=-this.direction.dot(hu),c=da.dot(this.direction),h=-da.dot(hu),f=da.lengthSq(),p=Math.abs(1-l*l);let m,x,g,y;if(p>0)if(m=l*h-c,x=l*c-h,y=r*p,m>=0)if(x>=-y)if(x<=y){const M=1/p;m*=M,x*=M,g=m*(m+l*x+2*c)+x*(l*m+x+2*h)+f}else x=r,m=Math.max(0,-(l*x+c)),g=-m*m+x*(x+2*h)+f;else x=-r,m=Math.max(0,-(l*x+c)),g=-m*m+x*(x+2*h)+f;else x<=-y?(m=Math.max(0,-(-l*r+c)),x=m>0?-r:Math.min(Math.max(-r,-h),r),g=-m*m+x*(x+2*h)+f):x<=y?(m=0,x=Math.min(Math.max(-r,-h),r),g=x*(x+2*h)+f):(m=Math.max(0,-(l*r+c)),x=m>0?r:Math.min(Math.max(-r,-h),r),g=-m*m+x*(x+2*h)+f);else x=l>0?-r:r,m=Math.max(0,-(l*x+c)),g=-m*m+x*(x+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(mp).addScaledVector(hu,x),g}intersectSphere(t,e){Os.subVectors(t.center,this.origin);const n=Os.dot(this.direction),i=Os.dot(Os)-n*n,r=t.radius*t.radius;if(i>r)return null;const l=Math.sqrt(r-i),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,l,c,h;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,x=this.origin;return f>=0?(n=(t.min.x-x.x)*f,i=(t.max.x-x.x)*f):(n=(t.max.x-x.x)*f,i=(t.min.x-x.x)*f),p>=0?(r=(t.min.y-x.y)*p,l=(t.max.y-x.y)*p):(r=(t.max.y-x.y)*p,l=(t.min.y-x.y)*p),n>l||r>i||((r>n||isNaN(n))&&(n=r),(l<i||isNaN(i))&&(i=l),m>=0?(c=(t.min.z-x.z)*m,h=(t.max.z-x.z)*m):(c=(t.max.z-x.z)*m,h=(t.min.z-x.z)*m),n>h||c>i)||((c>n||n!==n)&&(n=c),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Os)!==null}intersectTriangle(t,e,n,i,r){xp.subVectors(e,t),fu.subVectors(n,t),gp.crossVectors(xp,fu);let l=this.direction.dot(gp),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;da.subVectors(this.origin,t);const h=c*this.direction.dot(fu.crossVectors(da,fu));if(h<0)return null;const f=c*this.direction.dot(xp.cross(da));if(f<0||h+f>l)return null;const p=-c*da.dot(gp);return p<0?null:this.at(p/l,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,r,l,c,h,f,p,m,x,g,y,M,S){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,l,c,h,f,p,m,x,g,y,M,S)}set(t,e,n,i,r,l,c,h,f,p,m,x,g,y,M,S){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=l,_[9]=c,_[13]=h,_[2]=f,_[6]=p,_[10]=m,_[14]=x,_[3]=g,_[7]=y,_[11]=M,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/so.setFromMatrixColumn(t,0).length(),r=1/so.setFromMatrixColumn(t,1).length(),l=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(i),f=Math.sin(i),p=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const x=l*p,g=l*m,y=c*p,M=c*m;e[0]=h*p,e[4]=-h*m,e[8]=f,e[1]=g+y*f,e[5]=x-M*f,e[9]=-c*h,e[2]=M-x*f,e[6]=y+g*f,e[10]=l*h}else if(t.order==="YXZ"){const x=h*p,g=h*m,y=f*p,M=f*m;e[0]=x+M*c,e[4]=y*c-g,e[8]=l*f,e[1]=l*m,e[5]=l*p,e[9]=-c,e[2]=g*c-y,e[6]=M+x*c,e[10]=l*h}else if(t.order==="ZXY"){const x=h*p,g=h*m,y=f*p,M=f*m;e[0]=x-M*c,e[4]=-l*m,e[8]=y+g*c,e[1]=g+y*c,e[5]=l*p,e[9]=M-x*c,e[2]=-l*f,e[6]=c,e[10]=l*h}else if(t.order==="ZYX"){const x=l*p,g=l*m,y=c*p,M=c*m;e[0]=h*p,e[4]=y*f-g,e[8]=x*f+M,e[1]=h*m,e[5]=M*f+x,e[9]=g*f-y,e[2]=-f,e[6]=c*h,e[10]=l*h}else if(t.order==="YZX"){const x=l*h,g=l*f,y=c*h,M=c*f;e[0]=h*p,e[4]=M-x*m,e[8]=y*m+g,e[1]=m,e[5]=l*p,e[9]=-c*p,e[2]=-f*p,e[6]=g*m+y,e[10]=x-M*m}else if(t.order==="XZY"){const x=l*h,g=l*f,y=c*h,M=c*f;e[0]=h*p,e[4]=-m,e[8]=f*p,e[1]=x*m+M,e[5]=l*p,e[9]=g*m-y,e[2]=y*m-g,e[6]=c*p,e[10]=M*m+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(A3,t,C3)}lookAt(t,e,n){const i=this.elements;return Ti.subVectors(t,e),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),pa.crossVectors(n,Ti),pa.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),pa.crossVectors(n,Ti)),pa.normalize(),du.crossVectors(Ti,pa),i[0]=pa.x,i[4]=du.x,i[8]=Ti.x,i[1]=pa.y,i[5]=du.y,i[9]=Ti.y,i[2]=pa.z,i[6]=du.z,i[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,l=n[0],c=n[4],h=n[8],f=n[12],p=n[1],m=n[5],x=n[9],g=n[13],y=n[2],M=n[6],S=n[10],_=n[14],E=n[3],T=n[7],A=n[11],N=n[15],w=i[0],I=i[4],z=i[8],R=i[12],C=i[1],F=i[5],W=i[9],k=i[13],J=i[2],nt=i[6],G=i[10],tt=i[14],Z=i[3],at=i[7],ct=i[11],_t=i[15];return r[0]=l*w+c*C+h*J+f*Z,r[4]=l*I+c*F+h*nt+f*at,r[8]=l*z+c*W+h*G+f*ct,r[12]=l*R+c*k+h*tt+f*_t,r[1]=p*w+m*C+x*J+g*Z,r[5]=p*I+m*F+x*nt+g*at,r[9]=p*z+m*W+x*G+g*ct,r[13]=p*R+m*k+x*tt+g*_t,r[2]=y*w+M*C+S*J+_*Z,r[6]=y*I+M*F+S*nt+_*at,r[10]=y*z+M*W+S*G+_*ct,r[14]=y*R+M*k+S*tt+_*_t,r[3]=E*w+T*C+A*J+N*Z,r[7]=E*I+T*F+A*nt+N*at,r[11]=E*z+T*W+A*G+N*ct,r[15]=E*R+T*k+A*tt+N*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],l=t[1],c=t[5],h=t[9],f=t[13],p=t[2],m=t[6],x=t[10],g=t[14],y=t[3],M=t[7],S=t[11],_=t[15];return y*(+r*h*m-i*f*m-r*c*x+n*f*x+i*c*g-n*h*g)+M*(+e*h*g-e*f*x+r*l*x-i*l*g+i*f*p-r*h*p)+S*(+e*f*m-e*c*g-r*l*m+n*l*g+r*c*p-n*f*p)+_*(-i*c*p-e*h*m+e*c*x+i*l*m-n*l*x+n*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],l=t[4],c=t[5],h=t[6],f=t[7],p=t[8],m=t[9],x=t[10],g=t[11],y=t[12],M=t[13],S=t[14],_=t[15],E=m*S*f-M*x*f+M*h*g-c*S*g-m*h*_+c*x*_,T=y*x*f-p*S*f-y*h*g+l*S*g+p*h*_-l*x*_,A=p*M*f-y*m*f+y*c*g-l*M*g-p*c*_+l*m*_,N=y*m*h-p*M*h-y*c*x+l*M*x+p*c*S-l*m*S,w=e*E+n*T+i*A+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return t[0]=E*I,t[1]=(M*x*r-m*S*r-M*i*g+n*S*g+m*i*_-n*x*_)*I,t[2]=(c*S*r-M*h*r+M*i*f-n*S*f-c*i*_+n*h*_)*I,t[3]=(m*h*r-c*x*r-m*i*f+n*x*f+c*i*g-n*h*g)*I,t[4]=T*I,t[5]=(p*S*r-y*x*r+y*i*g-e*S*g-p*i*_+e*x*_)*I,t[6]=(y*h*r-l*S*r-y*i*f+e*S*f+l*i*_-e*h*_)*I,t[7]=(l*x*r-p*h*r+p*i*f-e*x*f-l*i*g+e*h*g)*I,t[8]=A*I,t[9]=(y*m*r-p*M*r-y*n*g+e*M*g+p*n*_-e*m*_)*I,t[10]=(l*M*r-y*c*r+y*n*f-e*M*f-l*n*_+e*c*_)*I,t[11]=(p*c*r-l*m*r-p*n*f+e*m*f+l*n*g-e*c*g)*I,t[12]=N*I,t[13]=(p*M*i-y*m*i+y*n*x-e*M*x-p*n*S+e*m*S)*I,t[14]=(y*c*i-l*M*i-y*n*h+e*M*h+l*n*S-e*c*S)*I,t[15]=(l*m*i-p*c*i+p*n*h-e*m*h-l*n*x+e*c*x)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,l=t.x,c=t.y,h=t.z,f=r*l,p=r*c;return this.set(f*l+n,f*c-i*h,f*h+i*c,0,f*c+i*h,p*c+n,p*h-i*l,0,f*h-i*c,p*h+i*l,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,l){return this.set(1,n,r,0,t,1,l,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,l=e._y,c=e._z,h=e._w,f=r+r,p=l+l,m=c+c,x=r*f,g=r*p,y=r*m,M=l*p,S=l*m,_=c*m,E=h*f,T=h*p,A=h*m,N=n.x,w=n.y,I=n.z;return i[0]=(1-(M+_))*N,i[1]=(g+A)*N,i[2]=(y-T)*N,i[3]=0,i[4]=(g-A)*w,i[5]=(1-(x+_))*w,i[6]=(S+E)*w,i[7]=0,i[8]=(y+T)*I,i[9]=(S-E)*I,i[10]=(1-(x+M))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=so.set(i[0],i[1],i[2]).length();const l=so.set(i[4],i[5],i[6]).length(),c=so.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ki.copy(this);const f=1/r,p=1/l,m=1/c;return Ki.elements[0]*=f,Ki.elements[1]*=f,Ki.elements[2]*=f,Ki.elements[4]*=p,Ki.elements[5]*=p,Ki.elements[6]*=p,Ki.elements[8]*=m,Ki.elements[9]*=m,Ki.elements[10]*=m,e.setFromRotationMatrix(Ki),n.x=r,n.y=l,n.z=c,this}makePerspective(t,e,n,i,r,l,c=Ci,h=!1){const f=this.elements,p=2*r/(e-t),m=2*r/(n-i),x=(e+t)/(e-t),g=(n+i)/(n-i);let y,M;if(h)y=r/(l-r),M=l*r/(l-r);else if(c===Ci)y=-(l+r)/(l-r),M=-2*l*r/(l-r);else if(c===Lo)y=-l/(l-r),M=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=m,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,i,r,l,c=Ci,h=!1){const f=this.elements,p=2/(e-t),m=2/(n-i),x=-(e+t)/(e-t),g=-(n+i)/(n-i);let y,M;if(h)y=1/(l-r),M=l/(l-r);else if(c===Ci)y=-2/(l-r),M=-(l+r)/(l-r);else if(c===Lo)y=-1/(l-r),M=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=0,f[12]=x,f[1]=0,f[5]=m,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const so=new P,Ki=new fe,A3=new P(0,0,0),C3=new P(1,1,1),pa=new P,du=new P,Ti=new P,Yg=new fe,Zg=new hi;class Di{constructor(t=0,e=0,n=0,i=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],f=i[5],p=i[9],m=i[2],x=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(x,f),this._z=0);break;case"YXZ":this._x=Math.asin(-he(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-he(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(x,f),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-p,g),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let w3=0;const jg=new P,ao=new hi,Bs=new fe,pu=new P,Ml=new P,R3=new P,D3=new hi,Kg=new P(1,0,0),Jg=new P(0,1,0),Qg=new P(0,0,1),$g={type:"added"},U3={type:"removed"},ro={type:"childadded",child:null},vp={type:"childremoved",child:null};class Ie extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w3++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new P,e=new Di,n=new hi,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new ve}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Kg,t)}rotateY(t){return this.rotateOnAxis(Jg,t)}rotateZ(t){return this.rotateOnAxis(Qg,t)}translateOnAxis(t,e){return jg.copy(t).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kg,t)}translateY(t){return this.translateOnAxis(Jg,t)}translateZ(t){return this.translateOnAxis(Qg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pu.copy(t):pu.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bs.lookAt(Ml,pu,this.up):Bs.lookAt(pu,Ml,this.up),this.quaternion.setFromRotationMatrix(Bs),i&&(Bs.extractRotation(i.matrixWorld),ao.setFromRotationMatrix(Bs),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($g),ro.child=t,this.dispatchEvent(ro),ro.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U3),vp.child=t,this.dispatchEvent(vp),vp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($g),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,t,R3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,D3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const m=h[f];r(t.shapes,m)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(r(t.materials,this.material[h]));i.material=c}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];i.animations.push(r(t.animations,h))}}if(e){const c=l(t.geometries),h=l(t.materials),f=l(t.textures),p=l(t.images),m=l(t.shapes),x=l(t.skeletons),g=l(t.animations),y=l(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),x.length>0&&(n.skeletons=x),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function l(c){const h=[];for(const f in c){const p=c[f];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new P,zs=new P,_p=new P,Fs=new P,oo=new P,lo=new P,tv=new P,yp=new P,Sp=new P,bp=new P,Mp=new Te,Ep=new Te,Tp=new Te;class ci{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ji.subVectors(t,e),i.cross(Ji);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ji.subVectors(i,e),zs.subVectors(n,e),_p.subVectors(t,e);const l=Ji.dot(Ji),c=Ji.dot(zs),h=Ji.dot(_p),f=zs.dot(zs),p=zs.dot(_p),m=l*f-c*c;if(m===0)return r.set(0,0,0),null;const x=1/m,g=(f*h-c*p)*x,y=(l*p-c*h)*x;return r.set(1-g-y,y,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fs)===null?!1:Fs.x>=0&&Fs.y>=0&&Fs.x+Fs.y<=1}static getInterpolation(t,e,n,i,r,l,c,h){return this.getBarycoord(t,e,n,i,Fs)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Fs.x),h.addScaledVector(l,Fs.y),h.addScaledVector(c,Fs.z),h)}static getInterpolatedAttribute(t,e,n,i,r,l){return Mp.setScalar(0),Ep.setScalar(0),Tp.setScalar(0),Mp.fromBufferAttribute(t,e),Ep.fromBufferAttribute(t,n),Tp.fromBufferAttribute(t,i),l.setScalar(0),l.addScaledVector(Mp,r.x),l.addScaledVector(Ep,r.y),l.addScaledVector(Tp,r.z),l}static isFrontFacing(t,e,n,i){return Ji.subVectors(n,e),zs.subVectors(t,e),Ji.cross(zs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),zs.subVectors(this.a,this.b),Ji.cross(zs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let l,c;oo.subVectors(i,n),lo.subVectors(r,n),yp.subVectors(t,n);const h=oo.dot(yp),f=lo.dot(yp);if(h<=0&&f<=0)return e.copy(n);Sp.subVectors(t,i);const p=oo.dot(Sp),m=lo.dot(Sp);if(p>=0&&m<=p)return e.copy(i);const x=h*m-p*f;if(x<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(oo,l);bp.subVectors(t,r);const g=oo.dot(bp),y=lo.dot(bp);if(y>=0&&g<=y)return e.copy(r);const M=g*f-h*y;if(M<=0&&f>=0&&y<=0)return c=f/(f-y),e.copy(n).addScaledVector(lo,c);const S=p*y-g*m;if(S<=0&&m-p>=0&&g-y>=0)return tv.subVectors(r,i),c=(m-p)/(m-p+(g-y)),e.copy(i).addScaledVector(tv,c);const _=1/(S+M+x);return l=M*_,c=x*_,e.copy(n).addScaledVector(oo,l).addScaledVector(lo,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ma={h:0,s:0,l:0},mu={h:0,s:0,l:0};function Ap(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Re.workingColorSpace){if(t=Km(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,l=2*n-r;this.r=Ap(l,r,t+1/3),this.g=Ap(l,r,t),this.b=Ap(l,r,t-1/3)}return Re.colorSpaceToWorking(this,i),this}setStyle(t,e=Xn){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){const n=Py[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}copyLinearToSRGB(t){return this.r=wo(t.r),this.g=wo(t.g),this.b=wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return Re.workingToColorSpace(kn.copy(this),t),Math.round(he(kn.r*255,0,255))*65536+Math.round(he(kn.g*255,0,255))*256+Math.round(he(kn.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(kn.copy(this),e);const n=kn.r,i=kn.g,r=kn.b,l=Math.max(n,i,r),c=Math.min(n,i,r);let h,f;const p=(c+l)/2;if(c===l)h=0,f=0;else{const m=l-c;switch(f=p<=.5?m/(l+c):m/(2-l-c),l){case n:h=(i-r)/m+(i<r?6:0);break;case i:h=(r-n)/m+2;break;case r:h=(n-i)/m+4;break}h/=6}return t.h=h,t.s=f,t.l=p,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Xn){Re.workingToColorSpace(kn.copy(this),t);const e=kn.r,n=kn.g,i=kn.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ma),this.setHSL(ma.h+t,ma.s+e,ma.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ma),t.getHSL(mu);const n=kl(ma.h,mu.h,e),i=kl(ma.s,mu.s,e),r=kl(ma.l,mu.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new zt;zt.NAMES=Py;let N3=0;class Zn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N3++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=mr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=_a,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lh&&(n.blendSrc=this.blendSrc),this.blendDst!==ch&&(n.blendDst=this.blendDst),this.blendEquation!==_a&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}if(e){const r=i(t.textures),l=i(t.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ra extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ks=L3();function L3(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let h=0;h<256;++h){const f=h-127;f<-27?(n[h]=0,n[h|256]=32768,i[h]=24,i[h|256]=24):f<-14?(n[h]=1024>>-f-14,n[h|256]=1024>>-f-14|32768,i[h]=-f-1,i[h|256]=-f-1):f<=15?(n[h]=f+15<<10,n[h|256]=f+15<<10|32768,i[h]=13,i[h|256]=13):f<128?(n[h]=31744,n[h|256]=64512,i[h]=24,i[h|256]=24):(n[h]=31744,n[h|256]=64512,i[h]=13,i[h|256]=13)}const r=new Uint32Array(2048),l=new Uint32Array(64),c=new Uint32Array(64);for(let h=1;h<1024;++h){let f=h<<13,p=0;for(;(f&8388608)===0;)f<<=1,p-=8388608;f&=-8388609,p+=947912704,r[h]=f|p}for(let h=1024;h<2048;++h)r[h]=939524096+(h-1024<<13);for(let h=1;h<31;++h)l[h]=h<<23;l[31]=1199570944,l[32]=2147483648;for(let h=33;h<63;++h)l[h]=2147483648+(h-32<<23);l[63]=3347054592;for(let h=1;h<64;++h)h!==32&&(c[h]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:l,offsetTable:c}}function oi(s){Math.abs(s)>65504&&Nt("DataUtils.toHalfFloat(): Value out of range."),s=he(s,-65504,65504),ks.floatView[0]=s;const t=ks.uint32View[0],e=t>>23&511;return ks.baseTable[e]+((t&8388607)>>ks.shiftTable[e])}function Il(s){const t=s>>10;return ks.uint32View[0]=ks.mantissaTable[ks.offsetTable[t]+(s&1023)]+ks.exponentTable[t],ks.floatView[0]}class I3{static toHalfFloat(t){return oi(t)}static fromHalfFloat(t){return Il(t)}}const pn=new P,xu=new ht;let P3=0;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P3++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xu.fromBufferAttribute(this,e),xu.applyMatrix3(t),this.setXY(e,xu.x,xu.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class O3 extends Xe{constructor(t,e,n){super(new Int8Array(t),e,n)}}class B3 extends Xe{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class z3 extends Xe{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class F3 extends Xe{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Qm extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class V3 extends Xe{constructor(t,e,n){super(new Int32Array(t),e,n)}}class $m extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class H3 extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Il(this.array[t*this.itemSize]);return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=oi(e),this}getY(t){let e=Il(this.array[t*this.itemSize+1]);return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=oi(e),this}getZ(t){let e=Il(this.array[t*this.itemSize+2]);return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=oi(e),this}getW(t){let e=Il(this.array[t*this.itemSize+3]);return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=oi(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=oi(e),this.array[t+1]=oi(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=oi(e),this.array[t+1]=oi(n),this.array[t+2]=oi(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=oi(e),this.array[t+1]=oi(n),this.array[t+2]=oi(i),this.array[t+3]=oi(r),this}}class Wt extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let G3=0;const Hi=new fe,Cp=new Ie,co=new P,Ai=new gn,El=new gn,Tn=new P;class _e extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G3++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ny(t)?$m:Qm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,e,n){return Hi.makeTranslation(t,e,n),this.applyMatrix4(Hi),this}scale(t,e,n){return Hi.makeScale(t,e,n),this.applyMatrix4(Hi),this}lookAt(t){return Cp.lookAt(t),Cp.updateMatrix(),this.applyMatrix4(Cp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const l=t[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),e)for(let r=0,l=e.length;r<l;r++){const c=e[r];El.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(Ai.min,El.min),Ai.expandByPoint(Tn),Tn.addVectors(Ai.max,El.max),Ai.expandByPoint(Tn)):(Ai.expandByPoint(El.min),Ai.expandByPoint(El.max))}Ai.getCenter(n);let i=0;for(let r=0,l=t.count;r<l;r++)Tn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Tn));if(e)for(let r=0,l=e.length;r<l;r++){const c=e[r],h=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)Tn.fromBufferAttribute(c,f),h&&(co.fromBufferAttribute(t,f),Tn.add(co)),i=Math.max(i,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let z=0;z<n.count;z++)c[z]=new P,h[z]=new P;const f=new P,p=new P,m=new P,x=new ht,g=new ht,y=new ht,M=new P,S=new P;function _(z,R,C){f.fromBufferAttribute(n,z),p.fromBufferAttribute(n,R),m.fromBufferAttribute(n,C),x.fromBufferAttribute(r,z),g.fromBufferAttribute(r,R),y.fromBufferAttribute(r,C),p.sub(f),m.sub(f),g.sub(x),y.sub(x);const F=1/(g.x*y.y-y.x*g.y);isFinite(F)&&(M.copy(p).multiplyScalar(y.y).addScaledVector(m,-g.y).multiplyScalar(F),S.copy(m).multiplyScalar(g.x).addScaledVector(p,-y.x).multiplyScalar(F),c[z].add(M),c[R].add(M),c[C].add(M),h[z].add(S),h[R].add(S),h[C].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let z=0,R=E.length;z<R;++z){const C=E[z],F=C.start,W=C.count;for(let k=F,J=F+W;k<J;k+=3)_(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new P,A=new P,N=new P,w=new P;function I(z){N.fromBufferAttribute(i,z),w.copy(N);const R=c[z];T.copy(R),T.sub(N.multiplyScalar(N.dot(R))).normalize(),A.crossVectors(w,R);const F=A.dot(h[z])<0?-1:1;l.setXYZW(z,T.x,T.y,T.z,F)}for(let z=0,R=E.length;z<R;++z){const C=E[z],F=C.start,W=C.count;for(let k=F,J=F+W;k<J;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let x=0,g=n.count;x<g;x++)n.setXYZ(x,0,0,0);const i=new P,r=new P,l=new P,c=new P,h=new P,f=new P,p=new P,m=new P;if(t)for(let x=0,g=t.count;x<g;x+=3){const y=t.getX(x+0),M=t.getX(x+1),S=t.getX(x+2);i.fromBufferAttribute(e,y),r.fromBufferAttribute(e,M),l.fromBufferAttribute(e,S),p.subVectors(l,r),m.subVectors(i,r),p.cross(m),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),c.add(p),h.add(p),f.add(p),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let x=0,g=e.count;x<g;x+=3)i.fromBufferAttribute(e,x+0),r.fromBufferAttribute(e,x+1),l.fromBufferAttribute(e,x+2),p.subVectors(l,r),m.subVectors(i,r),p.cross(m),n.setXYZ(x+0,p.x,p.y,p.z),n.setXYZ(x+1,p.x,p.y,p.z),n.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(c,h){const f=c.array,p=c.itemSize,m=c.normalized,x=new f.constructor(h.length*p);let g=0,y=0;for(let M=0,S=h.length;M<S;M++){c.isInterleavedBufferAttribute?g=h[M]*c.data.stride+c.offset:g=h[M]*p;for(let _=0;_<p;_++)x[y++]=f[g++]}return new Xe(x,p,m)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const c in i){const h=i[c],f=t(h,n);e.setAttribute(c,f)}const r=this.morphAttributes;for(const c in r){const h=[],f=r[c];for(let p=0,m=f.length;p<m;p++){const x=f[p],g=t(x,n);h.push(g)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const f=n[h];t.data.attributes[h]=f.toJSON(t.data)}const i={};let r=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let m=0,x=f.length;m<x;m++){const g=f[m];p.push(g.toJSON(t.data))}p.length>0&&(i[h]=p,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const f in i){const p=i[f];this.setAttribute(f,p.clone(e))}const r=t.morphAttributes;for(const f in r){const p=[],m=r[f];for(let x=0,g=m.length;x<g;x++)p.push(m[x].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,p=l.length;f<p;f++){const m=l[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ev=new fe,Qa=new ko,gu=new vn,nv=new P,vu=new P,_u=new P,yu=new P,wp=new P,Su=new P,iv=new P,bu=new P;class mn extends Ie{constructor(t=new _e,e=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=i.length;r<l;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const c=this.morphTargetInfluences;if(r&&c){Su.set(0,0,0);for(let h=0,f=r.length;h<f;h++){const p=c[h],m=r[h];p!==0&&(wp.fromBufferAttribute(m,t),l?Su.addScaledVector(wp,p):Su.addScaledVector(wp.sub(e),p))}e.add(Su)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gu.copy(n.boundingSphere),gu.applyMatrix4(r),Qa.copy(t.ray).recast(t.near),!(gu.containsPoint(Qa.origin)===!1&&(Qa.intersectSphere(gu,nv)===null||Qa.origin.distanceToSquared(nv)>(t.far-t.near)**2))&&(ev.copy(r).invert(),Qa.copy(t.ray).applyMatrix4(ev),!(n.boundingBox!==null&&Qa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qa)))}_computeIntersections(t,e,n){let i;const r=this.geometry,l=this.material,c=r.index,h=r.attributes.position,f=r.attributes.uv,p=r.attributes.uv1,m=r.attributes.normal,x=r.groups,g=r.drawRange;if(c!==null)if(Array.isArray(l))for(let y=0,M=x.length;y<M;y++){const S=x[y],_=l[S.materialIndex],E=Math.max(S.start,g.start),T=Math.min(c.count,Math.min(S.start+S.count,g.start+g.count));for(let A=E,N=T;A<N;A+=3){const w=c.getX(A),I=c.getX(A+1),z=c.getX(A+2);i=Mu(this,_,t,n,f,p,m,w,I,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=S.materialIndex,e.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let S=y,_=M;S<_;S+=3){const E=c.getX(S),T=c.getX(S+1),A=c.getX(S+2);i=Mu(this,l,t,n,f,p,m,E,T,A),i&&(i.faceIndex=Math.floor(S/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(l))for(let y=0,M=x.length;y<M;y++){const S=x[y],_=l[S.materialIndex],E=Math.max(S.start,g.start),T=Math.min(h.count,Math.min(S.start+S.count,g.start+g.count));for(let A=E,N=T;A<N;A+=3){const w=A,I=A+1,z=A+2;i=Mu(this,_,t,n,f,p,m,w,I,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=S.materialIndex,e.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(h.count,g.start+g.count);for(let S=y,_=M;S<_;S+=3){const E=S,T=S+1,A=S+2;i=Mu(this,l,t,n,f,p,m,E,T,A),i&&(i.faceIndex=Math.floor(S/3),e.push(i))}}}}function k3(s,t,e,n,i,r,l,c){let h;if(t.side===Yn?h=n.intersectTriangle(l,r,i,!0,c):h=n.intersectTriangle(i,r,l,t.side===vs,c),h===null)return null;bu.copy(c),bu.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(bu);return f<e.near||f>e.far?null:{distance:f,point:bu.clone(),object:s}}function Mu(s,t,e,n,i,r,l,c,h,f){s.getVertexPosition(c,vu),s.getVertexPosition(h,_u),s.getVertexPosition(f,yu);const p=k3(s,t,e,n,vu,_u,yu,iv);if(p){const m=new P;ci.getBarycoord(iv,vu,_u,yu,m),i&&(p.uv=ci.getInterpolatedAttribute(i,c,h,f,m,new ht)),r&&(p.uv1=ci.getInterpolatedAttribute(r,c,h,f,m,new ht)),l&&(p.normal=ci.getInterpolatedAttribute(l,c,h,f,m,new P),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const x={a:c,b:h,c:f,normal:new P,materialIndex:0};ci.getNormal(vu,_u,yu,x.normal),p.face=x,p.barycoord=m}return p}class br extends _e{constructor(t=1,e=1,n=1,i=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:l};const c=this;i=Math.floor(i),r=Math.floor(r),l=Math.floor(l);const h=[],f=[],p=[],m=[];let x=0,g=0;y("z","y","x",-1,-1,n,e,t,l,r,0),y("z","y","x",1,-1,n,e,-t,l,r,1),y("x","z","y",1,1,t,n,e,i,l,2),y("x","z","y",1,-1,t,n,-e,i,l,3),y("x","y","z",1,-1,t,e,n,i,r,4),y("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(m,2));function y(M,S,_,E,T,A,N,w,I,z,R){const C=A/I,F=N/z,W=A/2,k=N/2,J=w/2,nt=I+1,G=z+1;let tt=0,Z=0;const at=new P;for(let ct=0;ct<G;ct++){const _t=ct*F-k;for(let Vt=0;Vt<nt;Vt++){const $t=Vt*C-W;at[M]=$t*E,at[S]=_t*T,at[_]=J,f.push(at.x,at.y,at.z),at[M]=0,at[S]=0,at[_]=w>0?1:-1,p.push(at.x,at.y,at.z),m.push(Vt/I),m.push(1-ct/z),tt+=1}}for(let ct=0;ct<z;ct++)for(let _t=0;_t<I;_t++){const Vt=x+_t+nt*ct,$t=x+_t+nt*(ct+1),Zt=x+(_t+1)+nt*(ct+1),me=x+(_t+1)+nt*ct;h.push(Vt,$t,me),h.push($t,Zt,me),Z+=6}c.addGroup(g,Z,R),g+=Z,x+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qn(s){const t={};for(let e=0;e<s.length;e++){const n=zo(s[e]);for(const i in n)t[i]=n[i]}return t}function W3(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Oy(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const ic={clone:zo,merge:Qn};var X3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X3,this.fragmentShader=q3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zo(t.uniforms),this.uniformsGroups=W3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?e.uniforms[i]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[i]={type:"m4",value:l.toArray()}:e.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pf extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xa=new P,sv=new ht,av=new ht;class An extends pf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xa.x,xa.y).multiplyScalar(-t/xa.z),xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xa.x,xa.y).multiplyScalar(-t/xa.z)}getViewSize(t,e){return this.getViewBounds(t,sv,av),e.subVectors(av,sv)}setViewOffset(t,e,n,i,r,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;r+=l.offsetX*i/h,e-=l.offsetY*n/f,i*=l.width/h,n*=l.height/f}const c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const uo=-90,ho=1;class By extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(uo,ho,t,e);i.layers=this.layers,this.add(i);const r=new An(uo,ho,t,e);r.layers=this.layers,this.add(r);const l=new An(uo,ho,t,e);l.layers=this.layers,this.add(l);const c=new An(uo,ho,t,e);c.layers=this.layers,this.add(c);const h=new An(uo,ho,t,e);h.layers=this.layers,this.add(h);const f=new An(uo,ho,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,l,c,h]=e;for(const f of e)this.remove(f);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,l,c,h,f,p]=this.children,m=t.getRenderTarget(),x=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,l),t.setRenderTarget(n,2,i),t.render(e,c),t.setRenderTarget(n,3,i),t.render(e,h),t.setRenderTarget(n,4,i),t.render(e,f),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,p),t.setRenderTarget(m,x,g),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class xc extends cn{constructor(t=[],e=Xs,n,i,r,l,c,h,f,p){super(t,e,n,i,r,l,c,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zy extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new br(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:gs});r.uniforms.tEquirect.value=e;const l=new mn(i,r),c=e.minFilter;return e.minFilter===ms&&(e.minFilter=sn),new By(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,i);t.setRenderTarget(r)}}class Co extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y3={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const M of t.hand.values()){const S=e.getJointPose(M,n),_=this._getHandJoint(f,M);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],x=p.position.distanceTo(m.position),g=.02,y=.005;f.inputState.pinching&&x>g+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&x<=g-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Y3)))}return c!==null&&(c.visible=i!==null),h!==null&&(h.visible=r!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Co;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class mf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new mf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xf{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new xf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let t0=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};class gf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jn=new P;class wi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyMatrix4(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyNormalMatrix(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.transformDirection(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){nc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){nc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class e0 extends Zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fo;const Tl=new P,po=new P,mo=new P,xo=new ht,Al=new ht,Fy=new fe,Eu=new P,Cl=new P,Tu=new P,rv=new ht,Rp=new ht,ov=new ht;class Vy extends Ie{constructor(t=new e0){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gf(e,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new wi(n,3,0,!1)),fo.setAttribute("uv",new wi(n,2,3,!1))}this.geometry=fo,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),Fy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const l=this.center;Au(Eu.set(-.5,-.5,0),mo,l,po,i,r),Au(Cl.set(.5,-.5,0),mo,l,po,i,r),Au(Tu.set(.5,.5,0),mo,l,po,i,r),rv.set(0,0),Rp.set(1,0),ov.set(1,1);let c=t.ray.intersectTriangle(Eu,Cl,Tu,!1,Tl);if(c===null&&(Au(Cl.set(-.5,.5,0),mo,l,po,i,r),Rp.set(0,1),c=t.ray.intersectTriangle(Eu,Tu,Cl,!1,Tl),c===null))return;const h=t.ray.origin.distanceTo(Tl);h<t.near||h>t.far||e.push({distance:h,point:Tl.clone(),uv:ci.getInterpolation(Tl,Eu,Cl,Tu,rv,Rp,ov,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Au(s,t,e,n,i,r){xo.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Al.x=r*xo.x-i*xo.y,Al.y=i*xo.x+r*xo.y):Al.copy(xo),s.copy(t),s.x+=Al.x,s.y+=Al.y,s.applyMatrix4(Fy)}const Cu=new P,lv=new P;class Hy extends Ie{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Cu.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Cu);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Cu.setFromMatrixPosition(t.matrixWorld),lv.setFromMatrixPosition(this.matrixWorld);const n=Cu.distanceTo(lv)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let l=e[i].distance;if(e[i].object.visible&&(l-=l*e[i].hysteresis),n>=l)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const l=n[i];e.object.levels.push({object:l.object.uuid,distance:l.distance,hysteresis:l.hysteresis})}return e}}const cv=new P,uv=new Te,hv=new Te,Z3=new P,fv=new fe,wu=new P,Dp=new vn,dv=new fe,Up=new ko;class Gy extends mn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ym,this.bindMatrix=new fe,this.bindMatrixInverse=new fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,wu),this.boundingBox.expandByPoint(wu)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,wu),this.boundingSphere.expandByPoint(wu)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dp.copy(this.boundingSphere),Dp.applyMatrix4(i),t.ray.intersectsSphere(Dp)!==!1&&(dv.copy(i).invert(),Up.copy(t.ray).applyMatrix4(dv),!(this.boundingBox!==null&&Up.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Up)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Te,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ym?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vy?this.bindMatrixInverse.copy(this.bindMatrix).invert():Nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;uv.fromBufferAttribute(i.attributes.skinIndex,t),hv.fromBufferAttribute(i.attributes.skinWeight,t),cv.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const l=hv.getComponent(r);if(l!==0){const c=uv.getComponent(r);fv.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),e.addScaledVector(Z3.copy(cv).applyMatrix4(fv),l)}}return e.applyMatrix4(this.bindMatrixInverse)}}class n0 extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ns extends cn{constructor(t=null,e=1,n=1,i,r,l,c,h,f=In,p=In,m,x){super(null,l,c,h,f,p,i,r,m,x),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pv=new fe,j3=new fe;class vf{constructor(t=[],e=[]){this.uuid=Ri(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new fe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new fe;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,l=t.length;r<l;r++){const c=t[r]?t[r].matrixWorld:j3;pv.multiplyMatrices(c,e[r]),pv.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vf(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ns(e,t,t,qn,ti);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let l=e[r];l===void 0&&(Nt("Skeleton: No bone found with UUID:",r),l=new n0),this.bones.push(l),this.boneInverses.push(new fe().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const l=e[i];t.bones.push(l.uuid);const c=n[i];t.boneInverses.push(c.toArray())}return t}}class Fo extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const go=new fe,mv=new fe,Ru=[],xv=new gn,K3=new fe,wl=new mn,Rl=new vn;class ky extends mn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,K3)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),xv.copy(t.boundingBox).applyMatrix4(go),this.boundingBox.union(xv)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),Rl.copy(t.boundingSphere).applyMatrix4(go),this.boundingSphere.union(Rl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,l=t*r+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(wl.geometry=this.geometry,wl.material=this.material,wl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(n),t.ray.intersectsSphere(Rl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,go),mv.multiplyMatrices(n,go),wl.matrixWorld=mv,wl.raycast(t,Ru);for(let l=0,c=Ru.length;l<c;l++){const h=Ru[l];h.instanceId=r,h.object=this,e.push(h)}Ru.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(i*this.count),i,this.count,of,ti));const r=this.morphTexture.source.data.data;let l=0;for(let f=0;f<n.length;f++)l+=n[f];const c=this.geometry.morphTargetsRelative?1:1-l,h=i*t;r[h]=c,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Np=new P,J3=new P,Q3=new ve;class va{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Np.subVectors(n,e).cross(J3.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Np),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Q3.getNormalMatrix(t),i=this.coplanarPoint(Np).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new vn,$3=new ht(.5,.5),Du=new P;class Wo{constructor(t=new va,e=new va,n=new va,i=new va,r=new va,l=new va){this.planes=[t,e,n,i,r,l]}set(t,e,n,i,r,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(i),c[4].copy(r),c[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){const i=this.planes,r=t.elements,l=r[0],c=r[1],h=r[2],f=r[3],p=r[4],m=r[5],x=r[6],g=r[7],y=r[8],M=r[9],S=r[10],_=r[11],E=r[12],T=r[13],A=r[14],N=r[15];if(i[0].setComponents(f-l,g-p,_-y,N-E).normalize(),i[1].setComponents(f+l,g+p,_+y,N+E).normalize(),i[2].setComponents(f+c,g+m,_+M,N+T).normalize(),i[3].setComponents(f-c,g-m,_-M,N-T).normalize(),n)i[4].setComponents(h,x,S,A).normalize(),i[5].setComponents(f-h,g-x,_-S,N-A).normalize();else if(i[4].setComponents(f-h,g-x,_-S,N-A).normalize(),e===Ci)i[5].setComponents(f+h,g+x,_+S,N+A).normalize();else if(e===Lo)i[5].setComponents(h,x,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$a.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(t){$a.center.set(0,0,0);const e=$3.distanceTo(t.center);return $a.radius=.7071067811865476+e,$a.applyMatrix4(t.matrixWorld),this.intersectsSphere($a)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Du.x=i.normal.x>0?t.max.x:t.min.x,Du.y=i.normal.y>0?t.max.y:t.min.y,Du.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const cs=new fe,us=new Wo;class _f{constructor(){this.coordinateSystem=Ci}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(cs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),us.setFromProjectionMatrix(cs,i.coordinateSystem,i.reversedDepth),us.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(cs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),us.setFromProjectionMatrix(cs,i.coordinateSystem,i.reversedDepth),us.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(cs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),us.setFromProjectionMatrix(cs,i.coordinateSystem,i.reversedDepth),us.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(cs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),us.setFromProjectionMatrix(cs,i.coordinateSystem,i.reversedDepth),us.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(cs.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),us.setFromProjectionMatrix(cs,i.coordinateSystem,i.reversedDepth),us.containsPoint(t))return!0}return!1}clone(){return new _f}}function Lp(s,t){return s-t}function tE(s,t){return s.z-t.z}function eE(s,t){return t.z-s.z}class nE{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,l=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const c=r[this.index];l.push(c),this.index++,c.start=t,c.count=e,c.z=n,c.index=i}reset(){this.list.length=0,this.index=0}}const ri=new fe,iE=new zt(1,1,1),gv=new Wo,sE=new _f,Uu=new gn,tr=new vn,Dl=new P,vv=new P,aE=new P,Ip=new nE,Wn=new mn,Nu=[];function rE(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let l=0;l<n;l++)t.setComponent(r+e,l,s.getComponent(r,l))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function er(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Wy extends mn{constructor(t,e,n=e*2,i){super(new _e,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new ns(e,t,t,qn,ti);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new ns(e,t,t,mc,qs);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new ns(e,t,t,qn,ti);n.colorSpace=Re.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const l=t.getAttribute(r),{array:c,itemSize:h,normalized:f}=l,p=new c.constructor(n*h),m=new Xe(p,h,f);e.setAttribute(r,m)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Xe(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,ri),this.getBoundingBoxAt(r,Uu).applyMatrix4(ri),t.union(Uu)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,ri),this.getBoundingSphereAt(r,tr).applyMatrix4(ri),t.union(tr)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Lp),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;ri.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const l=this._colorsTexture;return l&&(iE.toArray(l.image.data,i*4),l.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const l=t.getIndex();if(l!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?l.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let h;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Lp),h=this._availableGeometryIds.shift(),r[h]=i):(h=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(h,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,h}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),l=e.getIndex(),c=this._geometryInfo[t];if(i&&l.count>c.reservedIndexCount||e.attributes.position.count>c.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const h=c.vertexStart,f=c.reservedVertexCount;c.vertexCount=e.getAttribute("position").count;for(const p in n.attributes){const m=e.getAttribute(p),x=n.getAttribute(p);rE(m,x,h);const g=m.itemSize;for(let y=m.count,M=f;y<M;y++){const S=h+y;for(let _=0;_<g;_++)x.setComponent(S,_,0)}x.needsUpdate=!0,x.addUpdateRange(h*g,f*g)}if(i){const p=c.indexStart,m=c.reservedIndexCount;c.indexCount=e.getIndex().count;for(let x=0;x<l.count;x++)r.setX(p+x,h+l.getX(x));for(let x=l.count,g=m;x<g;x++)r.setX(p+x,h);r.needsUpdate=!0,r.addUpdateRange(p,c.reservedIndexCount)}return c.start=i?c.indexStart:c.vertexStart,c.count=i?c.indexCount:c.vertexCount,c.boundingBox=null,e.boundingBox!==null&&(c.boundingBox=e.boundingBox.clone()),c.boundingSphere=null,e.boundingSphere!==null&&(c.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((l,c)=>c).sort((l,c)=>n[l].vertexStart-n[c].vertexStart),r=this.geometry;for(let l=0,c=n.length;l<c;l++){const h=i[l],f=n[h];if(f.active!==!1){if(r.index!==null){if(f.indexStart!==e){const{indexStart:p,vertexStart:m,reservedIndexCount:x}=f,g=r.index,y=g.array,M=t-m;for(let S=p;S<p+x;S++)y[S]=y[S]+M;g.array.copyWithin(e,p,p+x),g.addUpdateRange(e,x),f.indexStart=e}e+=f.reservedIndexCount}if(f.vertexStart!==t){const{vertexStart:p,reservedVertexCount:m}=f,x=r.attributes;for(const g in x){const y=x[g],{array:M,itemSize:S}=y;M.copyWithin(t*S,p*S,(p+m)*S),y.addUpdateRange(t*S,m*S)}f.vertexStart=t}t+=f.reservedVertexCount,f.start=r.index?f.indexStart:f.vertexStart,this._nextIndexStart=r.index?f.indexStart+f.reservedIndexCount:0,this._nextVertexStart=f.vertexStart+f.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new gn,l=n.index,c=n.attributes.position;for(let h=i.start,f=i.start+i.count;h<f;h++){let p=h;l&&(p=l.getX(p)),r.expandByPoint(Dl.fromBufferAttribute(c,p))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new vn;this.getBoundingBoxAt(t,Uu),Uu.getCenter(r.center);const l=n.index,c=n.attributes.position;let h=0;for(let f=i.start,p=i.start+i.count;f<p;f++){let m=f;l&&(m=l.getX(m)),Dl.fromBufferAttribute(c,m),h=Math.max(h,r.center.distanceToSquared(Dl))}r.radius=Math.sqrt(h),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Lp);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);er(this._multiDrawCounts,i),er(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const l=this._indirectTexture,c=this._matricesTexture,h=this._colorsTexture;l.dispose(),this._initIndirectTexture(),er(l.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),er(c.image.data,this._matricesTexture.image.data),h&&(h.dispose(),this._initColorsTexture(),er(h.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(h=>h.indexStart+h.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new _e,this._initializeGeometry(r));const l=this.geometry;r.index&&er(r.index.array,l.index.array);for(const c in r.attributes)er(r.attributes[c].array,l.attributes[c].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,l=this.geometry;Wn.material=this.material,Wn.geometry.index=l.index,Wn.geometry.attributes=l.attributes,Wn.geometry.boundingBox===null&&(Wn.geometry.boundingBox=new gn),Wn.geometry.boundingSphere===null&&(Wn.geometry.boundingSphere=new vn);for(let c=0,h=n.length;c<h;c++){if(!n[c].visible||!n[c].active)continue;const f=n[c].geometryIndex,p=i[f];Wn.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(c,Wn.matrixWorld).premultiply(r),this.getBoundingBoxAt(f,Wn.geometry.boundingBox),this.getBoundingSphereAt(f,Wn.geometry.boundingSphere),Wn.raycast(t,Nu);for(let m=0,x=Nu.length;m<x;m++){const g=Nu[m];g.object=this,g.batchId=c,e.push(g)}Nu.length=0}Wn.material=null,Wn.geometry.index=null,Wn.geometry.attributes={},Wn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const l=i.getIndex(),c=l===null?1:l.array.BYTES_PER_ELEMENT,h=this._instanceInfo,f=this._multiDrawStarts,p=this._multiDrawCounts,m=this._geometryInfo,x=this.perObjectFrustumCulled,g=this._indirectTexture,y=g.image.data,M=n.isArrayCamera?sE:gv;x&&!n.isArrayCamera&&(ri.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),gv.setFromProjectionMatrix(ri,n.coordinateSystem,n.reversedDepth));let S=0;if(this.sortObjects){ri.copy(this.matrixWorld).invert(),Dl.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ri),vv.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ri);for(let T=0,A=h.length;T<A;T++)if(h[T].visible&&h[T].active){const N=h[T].geometryIndex;this.getMatrixAt(T,ri),this.getBoundingSphereAt(N,tr).applyMatrix4(ri);let w=!1;if(x&&(w=!M.intersectsSphere(tr,n)),!w){const I=m[N],z=aE.subVectors(tr.center,Dl).dot(vv);Ip.push(I.start,I.count,z,T)}}const _=Ip.list,E=this.customSort;E===null?_.sort(r.transparent?eE:tE):E.call(this,_,n);for(let T=0,A=_.length;T<A;T++){const N=_[T];f[S]=N.start*c,p[S]=N.count,y[S]=N.index,S++}Ip.reset()}else for(let _=0,E=h.length;_<E;_++)if(h[_].visible&&h[_].active){const T=h[_].geometryIndex;let A=!1;if(x&&(this.getMatrixAt(_,ri),this.getBoundingSphereAt(T,tr).applyMatrix4(ri),A=!M.intersectsSphere(tr,n)),!A){const N=m[T];f[S]=N.start*c,p[S]=N.count,y[S]=_,S++}}g.needsUpdate=!0,this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,l){this.onBeforeRender(t,null,i,r,l)}}class ei extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qh=new P,Yh=new P,_v=new fe,Ul=new ko,Lu=new vn,Pp=new P,yv=new P;let Aa=class extends Ie{constructor(t=new _e,e=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)qh.fromBufferAttribute(e,i-1),Yh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=qh.distanceTo(Yh);t.setAttribute("lineDistance",new Wt(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lu.copy(n.boundingSphere),Lu.applyMatrix4(i),Lu.radius+=r,t.ray.intersectsSphere(Lu)===!1)return;_v.copy(i).invert(),Ul.copy(t.ray).applyMatrix4(_v);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,p=n.index,x=n.attributes.position;if(p!==null){const g=Math.max(0,l.start),y=Math.min(p.count,l.start+l.count);for(let M=g,S=y-1;M<S;M+=f){const _=p.getX(M),E=p.getX(M+1),T=Iu(this,t,Ul,h,_,E,M);T&&e.push(T)}if(this.isLineLoop){const M=p.getX(y-1),S=p.getX(g),_=Iu(this,t,Ul,h,M,S,y-1);_&&e.push(_)}}else{const g=Math.max(0,l.start),y=Math.min(x.count,l.start+l.count);for(let M=g,S=y-1;M<S;M+=f){const _=Iu(this,t,Ul,h,M,M+1,M);_&&e.push(_)}if(this.isLineLoop){const M=Iu(this,t,Ul,h,y-1,g,y-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=i.length;r<l;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}};function Iu(s,t,e,n,i,r,l){const c=s.geometry.attributes.position;if(qh.fromBufferAttribute(c,i),Yh.fromBufferAttribute(c,r),e.distanceSqToSegment(qh,Yh,Pp,yv)>n)return;Pp.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Pp);if(!(f<t.near||f>t.far))return{distance:f,point:yv.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const Sv=new P,bv=new P;class ys extends Aa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Sv.fromBufferAttribute(e,i),bv.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sv.distanceTo(bv);t.setAttribute("lineDistance",new Wt(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xy extends Aa{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class i0 extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mv=new fe,Mm=new ko,Pu=new vn,Ou=new P;class qy extends Ie{constructor(t=new _e,e=new i0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pu.copy(n.boundingSphere),Pu.applyMatrix4(i),Pu.radius+=r,t.ray.intersectsSphere(Pu)===!1)return;Mv.copy(i).invert(),Mm.copy(t.ray).applyMatrix4(Mv);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,m=n.attributes.position;if(f!==null){const x=Math.max(0,l.start),g=Math.min(f.count,l.start+l.count);for(let y=x,M=g;y<M;y++){const S=f.getX(y);Ou.fromBufferAttribute(m,S),Ev(Ou,S,h,i,t,e,this)}}else{const x=Math.max(0,l.start),g=Math.min(m.count,l.start+l.count);for(let y=x,M=g;y<M;y++)Ou.fromBufferAttribute(m,y),Ev(Ou,y,h,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=i.length;r<l;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function Ev(s,t,e,n,i,r,l){const c=Mm.distanceSqToPoint(s);if(c<e){const h=new P;Mm.closestPointToPoint(s,h),h.applyMatrix4(n);const f=i.ray.origin.distanceTo(h);if(f<i.near||f>i.far)return;r.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}class Yy extends cn{constructor(t,e,n,i,r=sn,l=sn,c,h,f){super(t,e,n,i,r,l,c,h,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function m(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=t.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(m))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class oE extends Yy{constructor(t,e,n,i,r,l,c,h){super({},t,e,n,i,r,l,c,h),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class lE extends cn{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=In,this.minFilter=In,this.generateMipmaps=!1,this.needsUpdate=!0}}class yf extends cn{constructor(t,e,n,i,r,l,c,h,f,p,m,x){super(null,l,c,h,f,p,i,r,m,x),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class cE extends yf{constructor(t,e,n,i,r,l){super(t,e,n,r,l),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=ui,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uE extends yf{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Xs),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class hE extends cn{constructor(t,e,n,i,r,l,c,h,f){super(t,e,n,i,r,l,c,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sf extends cn{constructor(t,e,n=qs,i,r,l,c=In,h=In,f,p=Uo,m=1){if(p!==Uo&&p!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:e,depth:m};super(x,i,r,l,c,h,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class s0 extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bf extends _e{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const l=[],c=[],h=[],f=[],p=e/2,m=Math.PI/2*t,x=e,g=2*m+x,y=n*2+r,M=i+1,S=new P,_=new P;for(let E=0;E<=y;E++){let T=0,A=0,N=0,w=0;if(E<=n){const R=E/n,C=R*Math.PI/2;A=-p-t*Math.cos(C),N=t*Math.sin(C),w=-t*Math.cos(C),T=R*m}else if(E<=n+r){const R=(E-n)/r;A=-p+R*e,N=t,w=0,T=m+R*x}else{const R=(E-n-r)/n,C=R*Math.PI/2;A=p+t*Math.sin(C),N=t*Math.cos(C),w=t*Math.sin(C),T=m+x+R*m}const I=Math.max(0,Math.min(1,T/g));let z=0;E===0?z=.5/i:E===y&&(z=-.5/i);for(let R=0;R<=i;R++){const C=R/i,F=C*Math.PI*2,W=Math.sin(F),k=Math.cos(F);_.x=-N*k,_.y=A,_.z=N*W,c.push(_.x,_.y,_.z),S.set(-N*k,w,N*W),S.normalize(),h.push(S.x,S.y,S.z),f.push(C+z,I)}if(E>0){const R=(E-1)*M;for(let C=0;C<i;C++){const F=R+C,W=R+C+1,k=E*M+C,J=E*M+C+1;l.push(F,W,k),l.push(W,J,k)}}}this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bf(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Mf extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],l=[],c=[],h=[],f=new P,p=new ht;l.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let m=0,x=3;m<=e;m++,x+=3){const g=n+m/e*i;f.x=t*Math.cos(g),f.y=t*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(l[x]/t+1)/2,p.y=(l[x+1]/t+1)/2,h.push(p.x,p.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gc extends _e{constructor(t=1,e=1,n=1,i=32,r=1,l=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:l,thetaStart:c,thetaLength:h};const f=this;i=Math.floor(i),r=Math.floor(r);const p=[],m=[],x=[],g=[];let y=0;const M=[],S=n/2;let _=0;E(),l===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(p),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(g,2));function E(){const A=new P,N=new P;let w=0;const I=(e-t)/n;for(let z=0;z<=r;z++){const R=[],C=z/r,F=C*(e-t)+t;for(let W=0;W<=i;W++){const k=W/i,J=k*h+c,nt=Math.sin(J),G=Math.cos(J);N.x=F*nt,N.y=-C*n+S,N.z=F*G,m.push(N.x,N.y,N.z),A.set(nt,I,G).normalize(),x.push(A.x,A.y,A.z),g.push(k,1-C),R.push(y++)}M.push(R)}for(let z=0;z<i;z++)for(let R=0;R<r;R++){const C=M[R][z],F=M[R+1][z],W=M[R+1][z+1],k=M[R][z+1];(t>0||R!==0)&&(p.push(C,F,k),w+=3),(e>0||R!==r-1)&&(p.push(F,W,k),w+=3)}f.addGroup(_,w,0),_+=w}function T(A){const N=y,w=new ht,I=new P;let z=0;const R=A===!0?t:e,C=A===!0?1:-1;for(let W=1;W<=i;W++)m.push(0,S*C,0),x.push(0,C,0),g.push(.5,.5),y++;const F=y;for(let W=0;W<=i;W++){const J=W/i*h+c,nt=Math.cos(J),G=Math.sin(J);I.x=R*G,I.y=S*C,I.z=R*nt,m.push(I.x,I.y,I.z),x.push(0,C,0),w.x=nt*.5+.5,w.y=G*.5*C+.5,g.push(w.x,w.y),y++}for(let W=0;W<i;W++){const k=N+W,J=F+W;A===!0?p.push(J,J+1,k):p.push(J+1,J,k),z+=3}f.addGroup(_,z,A===!0?1:2),_+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vc extends gc{constructor(t=1,e=1,n=32,i=1,r=!1,l=0,c=Math.PI*2){super(0,t,e,n,i,r,l,c),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:l,thetaLength:c}}static fromJSON(t){return new vc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Da extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],l=[];c(i),f(n),p(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const T=new P,A=new P,N=new P;for(let w=0;w<e.length;w+=3)g(e[w+0],T),g(e[w+1],A),g(e[w+2],N),h(T,A,N,E)}function h(E,T,A,N){const w=N+1,I=[];for(let z=0;z<=w;z++){I[z]=[];const R=E.clone().lerp(A,z/w),C=T.clone().lerp(A,z/w),F=w-z;for(let W=0;W<=F;W++)W===0&&z===w?I[z][W]=R:I[z][W]=R.clone().lerp(C,W/F)}for(let z=0;z<w;z++)for(let R=0;R<2*(w-z)-1;R++){const C=Math.floor(R/2);R%2===0?(x(I[z][C+1]),x(I[z+1][C]),x(I[z][C])):(x(I[z][C+1]),x(I[z+1][C+1]),x(I[z+1][C]))}}function f(E){const T=new P;for(let A=0;A<r.length;A+=3)T.x=r[A+0],T.y=r[A+1],T.z=r[A+2],T.normalize().multiplyScalar(E),r[A+0]=T.x,r[A+1]=T.y,r[A+2]=T.z}function p(){const E=new P;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];const A=S(E)/2/Math.PI+.5,N=_(E)/Math.PI+.5;l.push(A,1-N)}y(),m()}function m(){for(let E=0;E<l.length;E+=6){const T=l[E+0],A=l[E+2],N=l[E+4],w=Math.max(T,A,N),I=Math.min(T,A,N);w>.9&&I<.1&&(T<.2&&(l[E+0]+=1),A<.2&&(l[E+2]+=1),N<.2&&(l[E+4]+=1))}}function x(E){r.push(E.x,E.y,E.z)}function g(E,T){const A=E*3;T.x=t[A+0],T.y=t[A+1],T.z=t[A+2]}function y(){const E=new P,T=new P,A=new P,N=new P,w=new ht,I=new ht,z=new ht;for(let R=0,C=0;R<r.length;R+=9,C+=6){E.set(r[R+0],r[R+1],r[R+2]),T.set(r[R+3],r[R+4],r[R+5]),A.set(r[R+6],r[R+7],r[R+8]),w.set(l[C+0],l[C+1]),I.set(l[C+2],l[C+3]),z.set(l[C+4],l[C+5]),N.copy(E).add(T).add(A).divideScalar(3);const F=S(N);M(w,C+0,E,F),M(I,C+2,T,F),M(z,C+4,A,F)}}function M(E,T,A,N){N<0&&E.x===1&&(l[T]=E.x-1),A.x===0&&A.z===0&&(l[T]=N/2/Math.PI+.5)}function S(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.vertices,t.indices,t.radius,t.details)}}class Ef extends Da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,l,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ef(t.radius,t.detail)}}const Bu=new P,zu=new P,Op=new P,Fu=new ci;class Zy extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(xr*e),l=t.getIndex(),c=t.getAttribute("position"),h=l?l.count:c.count,f=[0,0,0],p=["a","b","c"],m=new Array(3),x={},g=[];for(let y=0;y<h;y+=3){l?(f[0]=l.getX(y),f[1]=l.getX(y+1),f[2]=l.getX(y+2)):(f[0]=y,f[1]=y+1,f[2]=y+2);const{a:M,b:S,c:_}=Fu;if(M.fromBufferAttribute(c,f[0]),S.fromBufferAttribute(c,f[1]),_.fromBufferAttribute(c,f[2]),Fu.getNormal(Op),m[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,m[1]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,m[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let E=0;E<3;E++){const T=(E+1)%3,A=m[E],N=m[T],w=Fu[p[E]],I=Fu[p[T]],z=`${A}_${N}`,R=`${N}_${A}`;R in x&&x[R]?(Op.dot(x[R].normal)<=r&&(g.push(w.x,w.y,w.z),g.push(I.x,I.y,I.z)),x[R]=null):z in x||(x[z]={index0:f[E],index1:f[T],normal:Op.clone()})}}for(const y in x)if(x[y]){const{index0:M,index1:S}=x[y];Bu.fromBufferAttribute(c,M),zu.fromBufferAttribute(c,S),g.push(Bu.x,Bu.y,Bu.z),g.push(zu.x,zu.y,zu.z)}this.setAttribute("position",new Wt(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ss{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let l=1;l<=t;l++)n=this.getPoint(l/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let l;e?l=e:l=t*n[r-1];let c=0,h=r-1,f;for(;c<=h;)if(i=Math.floor(c+(h-c)/2),f=n[i]-l,f<0)c=i+1;else if(f>0)h=i-1;else{h=i;break}if(i=h,n[i]===l)return i/(r-1);const p=n[i],x=n[i+1]-p,g=(l-p)/x;return(i+g)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const l=this.getPoint(i),c=this.getPoint(r),h=e||(l.isVector2?new ht:new P);return h.copy(c).sub(l).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],r=[],l=[],c=new P,h=new fe;for(let g=0;g<=t;g++){const y=g/t;i[g]=this.getTangentAt(y,new P)}r[0]=new P,l[0]=new P;let f=Number.MAX_VALUE;const p=Math.abs(i[0].x),m=Math.abs(i[0].y),x=Math.abs(i[0].z);p<=f&&(f=p,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),x<=f&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],c),l[0].crossVectors(i[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),l[g]=l[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(he(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(h.makeRotationAxis(c,y))}l[g].crossVectors(i[g],r[g])}if(e===!0){let g=Math.acos(he(r[0].dot(r[t]),-1,1));g/=t,i[0].dot(c.crossVectors(r[0],r[t]))>0&&(g=-g);for(let y=1;y<=t;y++)r[y].applyMatrix4(h.makeRotationAxis(i[y],g*y)),l[y].crossVectors(i[y],r[y])}return{tangents:i,normals:r,binormals:l}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tf extends ss{constructor(t=0,e=0,n=1,i=1,r=0,l=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=l,this.aClockwise=c,this.aRotation=h}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const l=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(l?r=0:r=i),this.aClockwise===!0&&!l&&(r===i?r=-i:r=r-i);const c=this.aStartAngle+t*r;let h=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),x=h-this.aX,g=f-this.aY;h=x*p-g*m+this.aX,f=x*m+g*p+this.aY}return n.set(h,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jy extends Tf{constructor(t,e,n,i,r,l){super(t,e,n,n,i,r,l),this.isArcCurve=!0,this.type="ArcCurve"}}function a0(){let s=0,t=0,e=0,n=0;function i(r,l,c,h){s=r,t=c,e=-3*r+3*l-2*c-h,n=2*r-2*l+c+h}return{initCatmullRom:function(r,l,c,h,f){i(l,c,f*(c-r),f*(h-l))},initNonuniformCatmullRom:function(r,l,c,h,f,p,m){let x=(l-r)/f-(c-r)/(f+p)+(c-l)/p,g=(c-l)/p-(h-l)/(p+m)+(h-c)/m;x*=p,g*=p,i(l,c,x,g)},calc:function(r){const l=r*r,c=l*r;return s+t*r+e*l+n*c}}}const Vu=new P,Bp=new a0,zp=new a0,Fp=new a0;class Ky extends ss{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,l=(r-(this.closed?0:1))*t;let c=Math.floor(l),h=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1);let f,p;this.closed||c>0?f=i[(c-1)%r]:(Vu.subVectors(i[0],i[1]).add(i[0]),f=Vu);const m=i[c%r],x=i[(c+1)%r];if(this.closed||c+2<r?p=i[(c+2)%r]:(Vu.subVectors(i[r-1],i[r-2]).add(i[r-1]),p=Vu),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(f.distanceToSquared(m),g),M=Math.pow(m.distanceToSquared(x),g),S=Math.pow(x.distanceToSquared(p),g);M<1e-4&&(M=1),y<1e-4&&(y=M),S<1e-4&&(S=M),Bp.initNonuniformCatmullRom(f.x,m.x,x.x,p.x,y,M,S),zp.initNonuniformCatmullRom(f.y,m.y,x.y,p.y,y,M,S),Fp.initNonuniformCatmullRom(f.z,m.z,x.z,p.z,y,M,S)}else this.curveType==="catmullrom"&&(Bp.initCatmullRom(f.x,m.x,x.x,p.x,this.tension),zp.initCatmullRom(f.y,m.y,x.y,p.y,this.tension),Fp.initCatmullRom(f.z,m.z,x.z,p.z,this.tension));return n.set(Bp.calc(h),zp.calc(h),Fp.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tv(s,t,e,n,i){const r=(n-t)*.5,l=(i-e)*.5,c=s*s,h=s*c;return(2*e-2*n+r+l)*h+(-3*e+3*n-2*r-l)*c+r*s+e}function fE(s,t){const e=1-s;return e*e*t}function dE(s,t){return 2*(1-s)*s*t}function pE(s,t){return s*s*t}function Wl(s,t,e,n){return fE(s,t)+dE(s,e)+pE(s,n)}function mE(s,t){const e=1-s;return e*e*e*t}function xE(s,t){const e=1-s;return 3*e*e*s*t}function gE(s,t){return 3*(1-s)*s*s*t}function vE(s,t){return s*s*s*t}function Xl(s,t,e,n,i){return mE(s,t)+xE(s,e)+gE(s,n)+vE(s,i)}class r0 extends ss{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,l=this.v2,c=this.v3;return n.set(Xl(t,i.x,r.x,l.x,c.x),Xl(t,i.y,r.y,l.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jy extends ss{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,l=this.v2,c=this.v3;return n.set(Xl(t,i.x,r.x,l.x,c.x),Xl(t,i.y,r.y,l.y,c.y),Xl(t,i.z,r.z,l.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o0 extends ss{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qy extends ss{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends ss{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,l=this.v2;return n.set(Wl(t,i.x,r.x,l.x),Wl(t,i.y,r.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c0 extends ss{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,l=this.v2;return n.set(Wl(t,i.x,r.x,l.x),Wl(t,i.y,r.y,l.y),Wl(t,i.z,r.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class u0 extends ss{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,l=Math.floor(r),c=r-l,h=i[l===0?l:l-1],f=i[l],p=i[l>i.length-2?i.length-1:l+1],m=i[l>i.length-3?i.length-1:l+2];return n.set(Tv(c,h.x,f.x,p.x,m.x),Tv(c,h.y,f.y,p.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Zh=Object.freeze({__proto__:null,ArcCurve:jy,CatmullRomCurve3:Ky,CubicBezierCurve:r0,CubicBezierCurve3:Jy,EllipseCurve:Tf,LineCurve:o0,LineCurve3:Qy,QuadraticBezierCurve:l0,QuadraticBezierCurve3:c0,SplineCurve:u0});class $y extends ss{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const l=i[r]-n,c=this.curves[r],h=c.getLength(),f=h===0?0:1-l/h;return c.getPointAt(f,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const l=r[i],c=l.isEllipseCurve?t*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?t*l.points.length:t,h=l.getPoints(c);for(let f=0;f<h.length;f++){const p=h[f];n&&n.equals(p)||(e.push(p),n=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Zh[i.type]().fromJSON(i))}return this}}class jh extends $y{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new o0(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new l0(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,l){const c=new r0(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new u0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+c,e+h,n,i,r,l),this}absarc(t,e,n,i,r,l){return this.absellipse(t,e,n,n,i,r,l),this}ellipse(t,e,n,i,r,l,c,h){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+f,e+p,n,i,r,l,c,h),this}absellipse(t,e,n,i,r,l,c,h){const f=new Tf(t,e,n,i,r,l,c,h);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const p=f.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gr extends jh{constructor(t){super(t),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new jh().fromJSON(i))}return this}}function _E(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=tS(s,0,i,e,!0);const l=[];if(!r||r.next===r.prev)return l;let c,h,f;if(n&&(r=EE(s,t,r,e)),s.length>80*e){c=s[0],h=s[1];let p=c,m=h;for(let x=e;x<i;x+=e){const g=s[x],y=s[x+1];g<c&&(c=g),y<h&&(h=y),g>p&&(p=g),y>m&&(m=y)}f=Math.max(p-c,m-h),f=f!==0?32767/f:0}return sc(r,l,e,c,h,f,0),l}function tS(s,t,e,n,i){let r;if(i===PE(s,t,e,n)>0)for(let l=t;l<e;l+=n)r=Av(l/n|0,s[l],s[l+1],r);else for(let l=e-n;l>=t;l-=n)r=Av(l/n|0,s[l],s[l+1],r);return r&&Vo(r,r.next)&&(rc(r),r=r.next),r}function yr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Vo(e,e.next)||nn(e.prev,e,e.next)===0)){if(rc(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sc(s,t,e,n,i,r,l){if(!s)return;!l&&r&&RE(s,n,i,r);let c=s;for(;s.prev!==s.next;){const h=s.prev,f=s.next;if(r?SE(s,n,i,r):yE(s)){t.push(h.i,s.i,f.i),rc(s),s=f.next,c=f.next;continue}if(s=f,s===c){l?l===1?(s=bE(yr(s),t),sc(s,t,e,n,i,r,2)):l===2&&ME(s,t,e,n,i,r):sc(yr(s),t,e,n,i,r,1);break}}}function yE(s){const t=s.prev,e=s,n=s.next;if(nn(t,e,n)>=0)return!1;const i=t.x,r=e.x,l=n.x,c=t.y,h=e.y,f=n.y,p=Math.min(i,r,l),m=Math.min(c,h,f),x=Math.max(i,r,l),g=Math.max(c,h,f);let y=n.next;for(;y!==t;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&Pl(i,c,r,h,l,f,y.x,y.y)&&nn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function SE(s,t,e,n){const i=s.prev,r=s,l=s.next;if(nn(i,r,l)>=0)return!1;const c=i.x,h=r.x,f=l.x,p=i.y,m=r.y,x=l.y,g=Math.min(c,h,f),y=Math.min(p,m,x),M=Math.max(c,h,f),S=Math.max(p,m,x),_=Em(g,y,t,e,n),E=Em(M,S,t,e,n);let T=s.prevZ,A=s.nextZ;for(;T&&T.z>=_&&A&&A.z<=E;){if(T.x>=g&&T.x<=M&&T.y>=y&&T.y<=S&&T!==i&&T!==l&&Pl(c,p,h,m,f,x,T.x,T.y)&&nn(T.prev,T,T.next)>=0||(T=T.prevZ,A.x>=g&&A.x<=M&&A.y>=y&&A.y<=S&&A!==i&&A!==l&&Pl(c,p,h,m,f,x,A.x,A.y)&&nn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;T&&T.z>=_;){if(T.x>=g&&T.x<=M&&T.y>=y&&T.y<=S&&T!==i&&T!==l&&Pl(c,p,h,m,f,x,T.x,T.y)&&nn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;A&&A.z<=E;){if(A.x>=g&&A.x<=M&&A.y>=y&&A.y<=S&&A!==i&&A!==l&&Pl(c,p,h,m,f,x,A.x,A.y)&&nn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function bE(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Vo(n,i)&&nS(n,e,e.next,i)&&ac(n,i)&&ac(i,n)&&(t.push(n.i,e.i,i.i),rc(e),rc(e.next),e=s=i),e=e.next}while(e!==s);return yr(e)}function ME(s,t,e,n,i,r){let l=s;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&NE(l,c)){let h=iS(l,c);l=yr(l,l.next),h=yr(h,h.next),sc(l,t,e,n,i,r,0),sc(h,t,e,n,i,r,0);return}c=c.next}l=l.next}while(l!==s)}function EE(s,t,e,n){const i=[];for(let r=0,l=t.length;r<l;r++){const c=t[r]*n,h=r<l-1?t[r+1]*n:s.length,f=tS(s,c,h,n,!1);f===f.next&&(f.steiner=!0),i.push(UE(f))}i.sort(TE);for(let r=0;r<i.length;r++)e=AE(i[r],e);return e}function TE(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function AE(s,t){const e=CE(s,t);if(!e)return t;const n=iS(e,s);return yr(n,n.next),yr(e,e.next)}function CE(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,l;if(Vo(s,e))return e;do{if(Vo(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const m=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,l=e.x<e.next.x?e:e.next,m===n))return l}e=e.next}while(e!==t);if(!l)return null;const c=l,h=l.x,f=l.y;let p=1/0;e=l;do{if(n>=e.x&&e.x>=h&&n!==e.x&&eS(i<f?n:r,i,h,f,i<f?r:n,i,e.x,e.y)){const m=Math.abs(i-e.y)/(n-e.x);ac(e,s)&&(m<p||m===p&&(e.x>l.x||e.x===l.x&&wE(l,e)))&&(l=e,p=m)}e=e.next}while(e!==c);return l}function wE(s,t){return nn(s.prev,s,t.prev)<0&&nn(t.next,s,s.next)<0}function RE(s,t,e,n){let i=s;do i.z===0&&(i.z=Em(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,DE(i)}function DE(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let l=n,c=0;for(let f=0;f<e&&(c++,l=l.nextZ,!!l);f++);let h=e;for(;c>0||h>0&&l;)c!==0&&(h===0||!l||n.z<=l.z)?(i=n,n=n.nextZ,c--):(i=l,l=l.nextZ,h--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=l}r.nextZ=null,e*=2}while(t>1);return s}function Em(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function UE(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function eS(s,t,e,n,i,r,l,c){return(i-l)*(t-c)>=(s-l)*(r-c)&&(s-l)*(n-c)>=(e-l)*(t-c)&&(e-l)*(r-c)>=(i-l)*(n-c)}function Pl(s,t,e,n,i,r,l,c){return!(s===l&&t===c)&&eS(s,t,e,n,i,r,l,c)}function NE(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!LE(s,t)&&(ac(s,t)&&ac(t,s)&&IE(s,t)&&(nn(s.prev,s,t.prev)||nn(s,t.prev,t))||Vo(s,t)&&nn(s.prev,s,s.next)>0&&nn(t.prev,t,t.next)>0)}function nn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Vo(s,t){return s.x===t.x&&s.y===t.y}function nS(s,t,e,n){const i=Gu(nn(s,t,e)),r=Gu(nn(s,t,n)),l=Gu(nn(e,n,s)),c=Gu(nn(e,n,t));return!!(i!==r&&l!==c||i===0&&Hu(s,e,t)||r===0&&Hu(s,n,t)||l===0&&Hu(e,s,n)||c===0&&Hu(e,t,n))}function Hu(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Gu(s){return s>0?1:s<0?-1:0}function LE(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&nS(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ac(s,t){return nn(s.prev,s,s.next)<0?nn(s,t,s.next)>=0&&nn(s,s.prev,t)>=0:nn(s,t,s.prev)<0||nn(s,s.next,t)<0}function IE(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function iS(s,t){const e=Tm(s.i,s.x,s.y),n=Tm(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Av(s,t,e,n){const i=Tm(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Tm(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function PE(s,t,e,n){let i=0;for(let r=t,l=e-n;r<e;r+=n)i+=(s[l]-s[r])*(s[r+1]+s[l+1]),l=r;return i}class OE{static triangulate(t,e,n=2){return _E(t,e,n)}}class ts{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ts.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Cv(t),wv(n,t);let l=t.length;e.forEach(Cv);for(let h=0;h<e.length;h++)i.push(l),l+=e[h].length,wv(n,e[h]);const c=OE.triangulate(n,i);for(let h=0;h<c.length;h+=3)r.push(c.slice(h,h+3));return r}}function Cv(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function wv(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Af extends _e{constructor(t=new gr([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let c=0,h=t.length;c<h;c++){const f=t[c];l(f)}this.setAttribute("position",new Wt(i,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function l(c){const h=[],f=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1;let x=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:g-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,S=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:BE;let T,A=!1,N,w,I,z;_&&(T=_.getSpacedPoints(p),A=!0,x=!1,N=_.computeFrenetFrames(p,!1),w=new P,I=new P,z=new P),x||(S=0,g=0,y=0,M=0);const R=c.extractPoints(f);let C=R.shape;const F=R.holes;if(!ts.isClockWise(C)){C=C.reverse();for(let mt=0,B=F.length;mt<B;mt++){const xt=F[mt];ts.isClockWise(xt)&&(F[mt]=xt.reverse())}}function k(mt){const xt=10000000000000001e-36;let gt=mt[0];for(let Tt=1;Tt<=mt.length;Tt++){const vt=Tt%mt.length,It=mt[vt],At=It.x-gt.x,Gt=It.y-gt.y,O=At*At+Gt*Gt,D=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(gt.x),Math.abs(gt.y)),K=xt*D*D;if(O<=K){mt.splice(vt,1),Tt--;continue}gt=It}}k(C),F.forEach(k);const J=F.length,nt=C;for(let mt=0;mt<J;mt++){const B=F[mt];C=C.concat(B)}function G(mt,B,xt){return B||pe("ExtrudeGeometry: vec does not exist"),mt.clone().addScaledVector(B,xt)}const tt=C.length;function Z(mt,B,xt){let gt,Tt,vt;const It=mt.x-B.x,At=mt.y-B.y,Gt=xt.x-mt.x,O=xt.y-mt.y,D=It*It+At*At,K=It*O-At*Gt;if(Math.abs(K)>Number.EPSILON){const rt=Math.sqrt(D),dt=Math.sqrt(Gt*Gt+O*O),st=B.x-At/rt,Kt=B.y+It/rt,Rt=xt.x-O/dt,Qt=xt.y+Gt/dt,qt=((Rt-st)*O-(Qt-Kt)*Gt)/(It*O-At*Gt);gt=st+It*qt-mt.x,Tt=Kt+At*qt-mt.y;const ft=gt*gt+Tt*Tt;if(ft<=2)return new ht(gt,Tt);vt=Math.sqrt(ft/2)}else{let rt=!1;It>Number.EPSILON?Gt>Number.EPSILON&&(rt=!0):It<-Number.EPSILON?Gt<-Number.EPSILON&&(rt=!0):Math.sign(At)===Math.sign(O)&&(rt=!0),rt?(gt=-At,Tt=It,vt=Math.sqrt(D)):(gt=It,Tt=At,vt=Math.sqrt(D/2))}return new ht(gt/vt,Tt/vt)}const at=[];for(let mt=0,B=nt.length,xt=B-1,gt=mt+1;mt<B;mt++,xt++,gt++)xt===B&&(xt=0),gt===B&&(gt=0),at[mt]=Z(nt[mt],nt[xt],nt[gt]);const ct=[];let _t,Vt=at.concat();for(let mt=0,B=J;mt<B;mt++){const xt=F[mt];_t=[];for(let gt=0,Tt=xt.length,vt=Tt-1,It=gt+1;gt<Tt;gt++,vt++,It++)vt===Tt&&(vt=0),It===Tt&&(It=0),_t[gt]=Z(xt[gt],xt[vt],xt[It]);ct.push(_t),Vt=Vt.concat(_t)}let $t;if(S===0)$t=ts.triangulateShape(nt,F);else{const mt=[],B=[];for(let xt=0;xt<S;xt++){const gt=xt/S,Tt=g*Math.cos(gt*Math.PI/2),vt=y*Math.sin(gt*Math.PI/2)+M;for(let It=0,At=nt.length;It<At;It++){const Gt=G(nt[It],at[It],vt);ee(Gt.x,Gt.y,-Tt),gt===0&&mt.push(Gt)}for(let It=0,At=J;It<At;It++){const Gt=F[It];_t=ct[It];const O=[];for(let D=0,K=Gt.length;D<K;D++){const rt=G(Gt[D],_t[D],vt);ee(rt.x,rt.y,-Tt),gt===0&&O.push(rt)}gt===0&&B.push(O)}}$t=ts.triangulateShape(mt,B)}const Zt=$t.length,me=y+M;for(let mt=0;mt<tt;mt++){const B=x?G(C[mt],Vt[mt],me):C[mt];A?(I.copy(N.normals[0]).multiplyScalar(B.x),w.copy(N.binormals[0]).multiplyScalar(B.y),z.copy(T[0]).add(I).add(w),ee(z.x,z.y,z.z)):ee(B.x,B.y,0)}for(let mt=1;mt<=p;mt++)for(let B=0;B<tt;B++){const xt=x?G(C[B],Vt[B],me):C[B];A?(I.copy(N.normals[mt]).multiplyScalar(xt.x),w.copy(N.binormals[mt]).multiplyScalar(xt.y),z.copy(T[mt]).add(I).add(w),ee(z.x,z.y,z.z)):ee(xt.x,xt.y,m/p*mt)}for(let mt=S-1;mt>=0;mt--){const B=mt/S,xt=g*Math.cos(B*Math.PI/2),gt=y*Math.sin(B*Math.PI/2)+M;for(let Tt=0,vt=nt.length;Tt<vt;Tt++){const It=G(nt[Tt],at[Tt],gt);ee(It.x,It.y,m+xt)}for(let Tt=0,vt=F.length;Tt<vt;Tt++){const It=F[Tt];_t=ct[Tt];for(let At=0,Gt=It.length;At<Gt;At++){const O=G(It[At],_t[At],gt);A?ee(O.x,O.y+T[p-1].y,T[p-1].x+xt):ee(O.x,O.y,m+xt)}}}ot(),pt();function ot(){const mt=i.length/3;if(x){let B=0,xt=tt*B;for(let gt=0;gt<Zt;gt++){const Tt=$t[gt];jt(Tt[2]+xt,Tt[1]+xt,Tt[0]+xt)}B=p+S*2,xt=tt*B;for(let gt=0;gt<Zt;gt++){const Tt=$t[gt];jt(Tt[0]+xt,Tt[1]+xt,Tt[2]+xt)}}else{for(let B=0;B<Zt;B++){const xt=$t[B];jt(xt[2],xt[1],xt[0])}for(let B=0;B<Zt;B++){const xt=$t[B];jt(xt[0]+tt*p,xt[1]+tt*p,xt[2]+tt*p)}}n.addGroup(mt,i.length/3-mt,0)}function pt(){const mt=i.length/3;let B=0;Lt(nt,B),B+=nt.length;for(let xt=0,gt=F.length;xt<gt;xt++){const Tt=F[xt];Lt(Tt,B),B+=Tt.length}n.addGroup(mt,i.length/3-mt,1)}function Lt(mt,B){let xt=mt.length;for(;--xt>=0;){const gt=xt;let Tt=xt-1;Tt<0&&(Tt=mt.length-1);for(let vt=0,It=p+S*2;vt<It;vt++){const At=tt*vt,Gt=tt*(vt+1),O=B+gt+At,D=B+Tt+At,K=B+Tt+Gt,rt=B+gt+Gt;ge(O,D,K,rt)}}}function ee(mt,B,xt){h.push(mt),h.push(B),h.push(xt)}function jt(mt,B,xt){Ue(mt),Ue(B),Ue(xt);const gt=i.length/3,Tt=E.generateTopUV(n,i,gt-3,gt-2,gt-1);re(Tt[0]),re(Tt[1]),re(Tt[2])}function ge(mt,B,xt,gt){Ue(mt),Ue(B),Ue(gt),Ue(B),Ue(xt),Ue(gt);const Tt=i.length/3,vt=E.generateSideWallUV(n,i,Tt-6,Tt-3,Tt-2,Tt-1);re(vt[0]),re(vt[1]),re(vt[3]),re(vt[1]),re(vt[2]),re(vt[3])}function Ue(mt){i.push(h[mt*3+0]),i.push(h[mt*3+1]),i.push(h[mt*3+2])}function re(mt){r.push(mt.x),r.push(mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zE(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,l=t.shapes.length;r<l;r++){const c=e[t.shapes[r]];n.push(c)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Zh[i.type]().fromJSON(i)),new Af(n,t.options)}}const BE={generateTopUV:function(s,t,e,n,i){const r=t[e*3],l=t[e*3+1],c=t[n*3],h=t[n*3+1],f=t[i*3],p=t[i*3+1];return[new ht(r,l),new ht(c,h),new ht(f,p)]},generateSideWallUV:function(s,t,e,n,i,r){const l=t[e*3],c=t[e*3+1],h=t[e*3+2],f=t[n*3],p=t[n*3+1],m=t[n*3+2],x=t[i*3],g=t[i*3+1],y=t[i*3+2],M=t[r*3],S=t[r*3+1],_=t[r*3+2];return Math.abs(c-p)<Math.abs(l-f)?[new ht(l,1-h),new ht(f,1-m),new ht(x,1-y),new ht(M,1-_)]:[new ht(c,1-h),new ht(p,1-m),new ht(g,1-y),new ht(S,1-_)]}};function zE(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cf extends Da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cf(t.radius,t.detail)}}class wf extends _e{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=he(i,0,Math.PI*2);const r=[],l=[],c=[],h=[],f=[],p=1/e,m=new P,x=new ht,g=new P,y=new P,M=new P;let S=0,_=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:S=t[E+1].x-t[E].x,_=t[E+1].y-t[E].y,g.x=_*1,g.y=-S,g.z=_*0,M.copy(g),g.normalize(),h.push(g.x,g.y,g.z);break;case t.length-1:h.push(M.x,M.y,M.z);break;default:S=t[E+1].x-t[E].x,_=t[E+1].y-t[E].y,g.x=_*1,g.y=-S,g.z=_*0,y.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),h.push(g.x,g.y,g.z),M.copy(y)}for(let E=0;E<=e;E++){const T=n+E*p*i,A=Math.sin(T),N=Math.cos(T);for(let w=0;w<=t.length-1;w++){m.x=t[w].x*A,m.y=t[w].y,m.z=t[w].x*N,l.push(m.x,m.y,m.z),x.x=E/e,x.y=w/(t.length-1),c.push(x.x,x.y);const I=h[3*w+0]*A,z=h[3*w+1],R=h[3*w+0]*N;f.push(I,z,R)}}for(let E=0;E<e;E++)for(let T=0;T<t.length-1;T++){const A=T+E*t.length,N=A,w=A+t.length,I=A+t.length+1,z=A+1;r.push(N,w,z),r.push(I,z,w)}this.setIndex(r),this.setAttribute("position",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2)),this.setAttribute("normal",new Wt(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wf(t.points,t.segments,t.phiStart,t.phiLength)}}class _c extends Da{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _c(t.radius,t.detail)}}class Xo extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,l=e/2,c=Math.floor(n),h=Math.floor(i),f=c+1,p=h+1,m=t/c,x=e/h,g=[],y=[],M=[],S=[];for(let _=0;_<p;_++){const E=_*x-l;for(let T=0;T<f;T++){const A=T*m-r;y.push(A,-E,0),M.push(0,0,1),S.push(T/c),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let E=0;E<c;E++){const T=E+f*_,A=E+f*(_+1),N=E+1+f*(_+1),w=E+1+f*_;g.push(T,A,w),g.push(A,N,w)}this.setIndex(g),this.setAttribute("position",new Wt(y,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rf extends _e{constructor(t=.5,e=1,n=32,i=1,r=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const c=[],h=[],f=[],p=[];let m=t;const x=(e-t)/i,g=new P,y=new ht;for(let M=0;M<=i;M++){for(let S=0;S<=n;S++){const _=r+S/n*l;g.x=m*Math.cos(_),g.y=m*Math.sin(_),h.push(g.x,g.y,g.z),f.push(0,0,1),y.x=(g.x/e+1)/2,y.y=(g.y/e+1)/2,p.push(y.x,y.y)}m+=x}for(let M=0;M<i;M++){const S=M*(n+1);for(let _=0;_<n;_++){const E=_+S,T=E,A=E+n+1,N=E+n+2,w=E+1;c.push(T,A,w),c.push(A,N,w)}}this.setIndex(c),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Df extends _e{constructor(t=new gr([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],l=[];let c=0,h=0;if(Array.isArray(t)===!1)f(t);else for(let p=0;p<t.length;p++)f(t[p]),this.addGroup(c,h,p),c+=h,h=0;this.setIndex(n),this.setAttribute("position",new Wt(i,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(l,2));function f(p){const m=i.length/3,x=p.extractPoints(e);let g=x.shape;const y=x.holes;ts.isClockWise(g)===!1&&(g=g.reverse());for(let S=0,_=y.length;S<_;S++){const E=y[S];ts.isClockWise(E)===!0&&(y[S]=E.reverse())}const M=ts.triangulateShape(g,y);for(let S=0,_=y.length;S<_;S++){const E=y[S];g=g.concat(E)}for(let S=0,_=g.length;S<_;S++){const E=g[S];i.push(E.x,E.y,0),r.push(0,0,1),l.push(E.x,E.y)}for(let S=0,_=M.length;S<_;S++){const E=M[S],T=E[0]+m,A=E[1]+m,N=E[2]+m;n.push(T,A,N),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return FE(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const l=e[t.shapes[i]];n.push(l)}return new Df(n,t.curveSegments)}}function FE(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class yc extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(l+c,Math.PI);let f=0;const p=[],m=new P,x=new P,g=[],y=[],M=[],S=[];for(let _=0;_<=n;_++){const E=[],T=_/n;let A=0;_===0&&l===0?A=.5/e:_===n&&h===Math.PI&&(A=-.5/e);for(let N=0;N<=e;N++){const w=N/e;m.x=-t*Math.cos(i+w*r)*Math.sin(l+T*c),m.y=t*Math.cos(l+T*c),m.z=t*Math.sin(i+w*r)*Math.sin(l+T*c),y.push(m.x,m.y,m.z),x.copy(m).normalize(),M.push(x.x,x.y,x.z),S.push(w+A,1-T),E.push(f++)}p.push(E)}for(let _=0;_<n;_++)for(let E=0;E<e;E++){const T=p[_][E+1],A=p[_][E],N=p[_+1][E],w=p[_+1][E+1];(_!==0||l>0)&&g.push(T,A,w),(_!==n-1||h<Math.PI)&&g.push(A,N,w)}this.setIndex(g),this.setAttribute("position",new Wt(y,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uf extends Da{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Uf(t.radius,t.detail)}}class Nf extends _e{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],p=new P,m=new P,x=new P;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const M=y/i*r,S=g/n*Math.PI*2;m.x=(t+e*Math.cos(S))*Math.cos(M),m.y=(t+e*Math.cos(S))*Math.sin(M),m.z=e*Math.sin(S),c.push(m.x,m.y,m.z),p.x=t*Math.cos(M),p.y=t*Math.sin(M),x.subVectors(m,p).normalize(),h.push(x.x,x.y,x.z),f.push(y/i),f.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const M=(i+1)*g+y-1,S=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,E=(i+1)*g+y;l.push(M,S,E),l.push(S,_,E)}this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lf extends _e{constructor(t=1,e=.4,n=64,i=8,r=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:l},n=Math.floor(n),i=Math.floor(i);const c=[],h=[],f=[],p=[],m=new P,x=new P,g=new P,y=new P,M=new P,S=new P,_=new P;for(let T=0;T<=n;++T){const A=T/n*r*Math.PI*2;E(A,r,l,t,g),E(A+.01,r,l,t,y),S.subVectors(y,g),_.addVectors(y,g),M.crossVectors(S,_),_.crossVectors(M,S),M.normalize(),_.normalize();for(let N=0;N<=i;++N){const w=N/i*Math.PI*2,I=-e*Math.cos(w),z=e*Math.sin(w);m.x=g.x+(I*_.x+z*M.x),m.y=g.y+(I*_.y+z*M.y),m.z=g.z+(I*_.z+z*M.z),h.push(m.x,m.y,m.z),x.subVectors(m,g).normalize(),f.push(x.x,x.y,x.z),p.push(T/n),p.push(N/i)}}for(let T=1;T<=n;T++)for(let A=1;A<=i;A++){const N=(i+1)*(T-1)+(A-1),w=(i+1)*T+(A-1),I=(i+1)*T+A,z=(i+1)*(T-1)+A;c.push(N,w,z),c.push(w,I,z)}this.setIndex(c),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(p,2));function E(T,A,N,w,I){const z=Math.cos(T),R=Math.sin(T),C=N/A*T,F=Math.cos(C);I.x=w*(2+F)*.5*z,I.y=w*(2+F)*R*.5,I.z=w*Math.sin(C)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lf(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class If extends _e{constructor(t=new c0(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const l=t.computeFrenetFrames(e,r);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new P,h=new P,f=new ht;let p=new P;const m=[],x=[],g=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(g,2));function M(){for(let T=0;T<e;T++)S(T);S(r===!1?e:0),E(),_()}function S(T){p=t.getPointAt(T/e,p);const A=l.normals[T],N=l.binormals[T];for(let w=0;w<=i;w++){const I=w/i*Math.PI*2,z=Math.sin(I),R=-Math.cos(I);h.x=R*A.x+z*N.x,h.y=R*A.y+z*N.y,h.z=R*A.z+z*N.z,h.normalize(),x.push(h.x,h.y,h.z),c.x=p.x+n*h.x,c.y=p.y+n*h.y,c.z=p.z+n*h.z,m.push(c.x,c.y,c.z)}}function _(){for(let T=1;T<=e;T++)for(let A=1;A<=i;A++){const N=(i+1)*(T-1)+(A-1),w=(i+1)*T+(A-1),I=(i+1)*T+A,z=(i+1)*(T-1)+A;y.push(N,w,z),y.push(w,I,z)}}function E(){for(let T=0;T<=e;T++)for(let A=0;A<=i;A++)f.x=T/e,f.y=A/i,g.push(f.x,f.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new If(new Zh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class h0 extends _e{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new P,r=new P;if(t.index!==null){const l=t.attributes.position,c=t.index;let h=t.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let f=0,p=h.length;f<p;++f){const m=h[f],x=m.start,g=m.count;for(let y=x,M=x+g;y<M;y+=3)for(let S=0;S<3;S++){const _=c.getX(y+S),E=c.getX(y+(S+1)%3);i.fromBufferAttribute(l,_),r.fromBufferAttribute(l,E),Rv(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const l=t.attributes.position;for(let c=0,h=l.count/3;c<h;c++)for(let f=0;f<3;f++){const p=3*c+f,m=3*c+(f+1)%3;i.fromBufferAttribute(l,p),r.fromBufferAttribute(l,m),Rv(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Wt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Rv(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Dv=Object.freeze({__proto__:null,BoxGeometry:br,CapsuleGeometry:bf,CircleGeometry:Mf,ConeGeometry:vc,CylinderGeometry:gc,DodecahedronGeometry:Ef,EdgesGeometry:Zy,ExtrudeGeometry:Af,IcosahedronGeometry:Cf,LatheGeometry:wf,OctahedronGeometry:_c,PlaneGeometry:Xo,PolyhedronGeometry:Da,RingGeometry:Rf,ShapeGeometry:Df,SphereGeometry:yc,TetrahedronGeometry:Uf,TorusGeometry:Nf,TorusKnotGeometry:Lf,TubeGeometry:If,WireframeGeometry:h0});class sS extends Zn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new zt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class aS extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class f0 extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class d0 extends f0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rS extends Zn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new zt(16777215),this.specular=new zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oS extends Zn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new zt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class lS extends Zn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class cS extends Zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class p0 extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class m0 extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uS extends Zn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new zt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hS extends ei{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function pr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function fS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dS(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Am(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,l=0;l!==n;++r){const c=e[r]*t;for(let h=0;h!==t;++h)i[l++]=s[c+h]}return i}function x0(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let l=r[n];if(l!==void 0)if(Array.isArray(l))do l=r[n],l!==void 0&&(t.push(r.time),e.push(...l)),r=s[i++];while(r!==void 0);else if(l.toArray!==void 0)do l=r[n],l!==void 0&&(t.push(r.time),l.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do l=r[n],l!==void 0&&(t.push(r.time),e.push(l)),r=s[i++];while(r!==void 0)}function VE(s,t,e,n,i=30){const r=s.clone();r.name=t;const l=[];for(let h=0;h<r.tracks.length;++h){const f=r.tracks[h],p=f.getValueSize(),m=[],x=[];for(let g=0;g<f.times.length;++g){const y=f.times[g]*i;if(!(y<e||y>=n)){m.push(f.times[g]);for(let M=0;M<p;++M)x.push(f.values[g*p+M])}}m.length!==0&&(f.times=pr(m,f.times.constructor),f.values=pr(x,f.values.constructor),l.push(f))}r.tracks=l;let c=1/0;for(let h=0;h<r.tracks.length;++h)c>r.tracks[h].times[0]&&(c=r.tracks[h].times[0]);for(let h=0;h<r.tracks.length;++h)r.tracks[h].shift(-1*c);return r.resetDuration(),r}function HE(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let l=0;l<i;++l){const c=e.tracks[l],h=c.ValueTypeName;if(h==="bool"||h==="string")continue;const f=s.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===h});if(f===void 0)continue;let p=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=m/3);let x=0;const g=f.getValueSize();f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(x=g/3);const y=c.times.length-1;let M;if(r<=c.times[0]){const _=p,E=m-p;M=c.values.slice(_,E)}else if(r>=c.times[y]){const _=y*m+p,E=_+m-p;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=p,T=m-p;_.evaluate(r),M=_.resultBuffer.slice(E,T)}h==="quaternion"&&new hi().fromArray(M).normalize().conjugate().toArray(M);const S=f.times.length;for(let _=0;_<S;++_){const E=_*g+x;if(h==="quaternion")hi.multiplyQuaternionsFlat(f.values,E,M,0,f.values,E);else{const T=g-x*2;for(let A=0;A<T;++A)f.values[E+A]-=M[A]}}}return s.blendMode=Zm,s}class GE{static convertArray(t,e){return pr(t,e)}static isTypedArray(t){return fS(t)}static getKeyframeOrder(t){return dS(t)}static sortedArray(t,e,n){return Am(t,e,n)}static flattenJSON(t,e,n,i){x0(t,e,n,i)}static subclip(t,e,n,i,r=30){return VE(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return HE(t,e,n,i)}}class Sc{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let l;n:{i:if(!(t<i)){for(let c=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=i,i=e[++n],t<i)break e}l=e.length;break n}if(!(t>=r)){const c=e[1];t<c&&(n=2,r=c);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(i=r,r=e[--n-1],t>=r)break e}l=n,n=0;break n}break t}for(;n<l;){const c=n+l>>>1;t<e[c]?l=c:n=c+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let l=0;l!==i;++l)e[l]=n[r+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pS extends Sc{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fr,endingEnd:fr}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,l=t+1,c=i[r],h=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case dr:r=t,c=2*e-n;break;case Ql:r=i.length-2,c=e+i[r]-i[r+1];break;default:r=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case dr:l=t,h=2*n-e;break;case Ql:l=1,h=n+i[1]-i[0];break;default:l=t-1,h=e}const f=(n-e)*.5,p=this.valueSize;this._weightPrev=f/(e-c),this._weightNext=f/(h-n),this._offsetPrev=r*p,this._offsetNext=l*p}interpolate_(t,e,n,i){const r=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,f=h-c,p=this._offsetPrev,m=this._offsetNext,x=this._weightPrev,g=this._weightNext,y=(n-e)/(i-e),M=y*y,S=M*y,_=-x*S+2*x*M-x*y,E=(1+x)*S+(-1.5-2*x)*M+(-.5+x)*y+1,T=(-1-g)*S+(1.5+g)*M+.5*y,A=g*S-g*M;for(let N=0;N!==c;++N)r[N]=_*l[p+N]+E*l[f+N]+T*l[h+N]+A*l[m+N];return r}}class g0 extends Sc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,f=h-c,p=(n-e)/(i-e),m=1-p;for(let x=0;x!==c;++x)r[x]=l[f+x]*m+l[h+x]*p;return r}}class mS extends Sc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ki{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mS(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new g0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pS(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Jl:e=this.InterpolantFactoryMethodDiscrete;break;case Xh:e=this.InterpolantFactoryMethodLinear;break;case sh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jl;case this.InterpolantFactoryMethodLinear:return Xh;case this.InterpolantFactoryMethodSmooth:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,l=i-1;for(;r!==i&&n[r]<t;)++r;for(;l!==-1&&n[l]>e;)--l;if(++l,r!==0||l!==i){r>=l&&(l=Math.max(l,1),r=l-1);const c=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*c,l*c)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(pe("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(pe("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let c=0;c!==r;c++){const h=n[c];if(typeof h=="number"&&isNaN(h)){pe("KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(l!==null&&l>h){pe("KeyframeTrack: Out of order keys.",this,c,h,l),t=!1;break}l=h}if(i!==void 0&&fS(i))for(let c=0,h=i.length;c!==h;++c){const f=i[c];if(isNaN(f)){pe("KeyframeTrack: Value is not a valid number.",this,c,f),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sh,r=t.length-1;let l=1;for(let c=1;c<r;++c){let h=!1;const f=t[c],p=t[c+1];if(f!==p&&(c!==1||f!==t[0]))if(i)h=!0;else{const m=c*n,x=m-n,g=m+n;for(let y=0;y!==n;++y){const M=e[m+y];if(M!==e[x+y]||M!==e[g+y]){h=!0;break}}}if(h){if(c!==l){t[l]=t[c];const m=c*n,x=l*n;for(let g=0;g!==n;++g)e[x+g]=e[m+g]}++l}}if(r>0){t[l]=t[r];for(let c=r*n,h=l*n,f=0;f!==n;++f)e[h+f]=e[c+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}ki.prototype.ValueTypeName="";ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Xh;class Mr extends ki{constructor(t,e,n){super(t,e,n)}}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=Jl;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class v0 extends ki{constructor(t,e,n,i){super(t,e,n,i)}}v0.prototype.ValueTypeName="color";class oc extends ki{constructor(t,e,n,i){super(t,e,n,i)}}oc.prototype.ValueTypeName="number";class xS extends Sc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=(n-e)/(i-e);let f=t*c;for(let p=f+c;f!==p;f+=4)hi.slerpFlat(r,0,l,f-c,l,f,h);return r}}class bc extends ki{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new xS(this.times,this.values,this.getValueSize(),t)}}bc.prototype.ValueTypeName="quaternion";bc.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends ki{constructor(t,e,n){super(t,e,n)}}Er.prototype.ValueTypeName="string";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Jl;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class lc extends ki{constructor(t,e,n,i){super(t,e,n,i)}}lc.prototype.ValueTypeName="vector";class cc{constructor(t="",e=-1,n=[],i=hf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let l=0,c=n.length;l!==c;++l)e.push(WE(n[l]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,l=n.length;r!==l;++r)e.push(ki.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,l=[];for(let c=0;c<r;c++){let h=[],f=[];h.push((c+r-1)%r,c,(c+1)%r),f.push(0,1,0);const p=dS(h);h=Am(h,1,p),f=Am(f,1,p),!i&&h[0]===0&&(h.push(r),f.push(f[0])),l.push(new oc(".morphTargetInfluences["+e[c].name+"]",h,f).scale(1/n))}return new this(t,-1,l)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let c=0,h=t.length;c<h;c++){const f=t[c],p=f.name.match(r);if(p&&p.length>1){const m=p[1];let x=i[m];x||(i[m]=x=[]),x.push(f)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],e,n));return l}static parseAnimation(t,e){if(Nt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return pe("AnimationClip: No animation in JSONLoader data."),null;const n=function(m,x,g,y,M){if(g.length!==0){const S=[],_=[];x0(g,S,_,y),S.length!==0&&M.push(new m(x,S,_))}},i=[],r=t.name||"default",l=t.fps||30,c=t.blendMode;let h=t.length||-1;const f=t.hierarchy||[];for(let m=0;m<f.length;m++){const x=f[m].keys;if(!(!x||x.length===0))if(x[0].morphTargets){const g={};let y;for(y=0;y<x.length;y++)if(x[y].morphTargets)for(let M=0;M<x[y].morphTargets.length;M++)g[x[y].morphTargets[M]]=-1;for(const M in g){const S=[],_=[];for(let E=0;E!==x[y].morphTargets.length;++E){const T=x[y];S.push(T.time),_.push(T.morphTarget===M?1:0)}i.push(new oc(".morphTargetInfluence["+M+"]",S,_))}h=g.length*l}else{const g=".bones["+e[m].name+"]";n(lc,g+".position",x,"pos",i),n(bc,g+".quaternion",x,"rot",i),n(lc,g+".scale",x,"scl",i)}}return i.length===0?null:new this(r,h,i,c)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function kE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oc;case"vector":case"vector2":case"vector3":case"vector4":return lc;case"color":return v0;case"quaternion":return bc;case"bool":case"boolean":return Mr;case"string":return Er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function WE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=kE(s.type);if(s.times===void 0){const e=[],n=[];x0(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const xs={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _0{constructor(t,e,n){const i=this;let r=!1,l=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,r===!1&&i.onStart!==void 0&&i.onStart(p,l,c),r=!0},this.itemEnd=function(p){l++,i.onProgress!==void 0&&i.onProgress(p,l,c),l===c&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,x=f.length;m<x;m+=2){const g=f[m],y=f[m+1];if(g.global&&(g.lastIndex=0),g.test(p))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gS=new _0;class di{constructor(t){this.manager=t!==void 0?t:gS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}di.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vs={};class XE extends Error{constructor(t,e){super(t),this.response=e}}class Ys extends di{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=xs.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Vs[t]!==void 0){Vs[t].push({onLoad:e,onProgress:n,onError:i});return}Vs[t]=[],Vs[t].push({onLoad:e,onProgress:n,onError:i});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,h=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&Nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=Vs[t],m=f.body.getReader(),x=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),g=x?parseInt(x):0,y=g!==0;let M=0;const S=new ReadableStream({start(_){E();function E(){m.read().then(({done:T,value:A})=>{if(T)_.close();else{M+=A.byteLength;const N=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:g});for(let w=0,I=p.length;w<I;w++){const z=p[w];z.onProgress&&z.onProgress(N)}_.enqueue(A),E()}},T=>{_.error(T)})}}});return new Response(S)}else throw new XE(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return f.json();default:if(c==="")return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),x=m&&m[1]?m[1].toLowerCase():void 0,g=new TextDecoder(x);return f.arrayBuffer().then(y=>g.decode(y))}}}).then(f=>{xs.add(`file:${t}`,f);const p=Vs[t];delete Vs[t];for(let m=0,x=p.length;m<x;m++){const g=p[m];g.onLoad&&g.onLoad(f)}}).catch(f=>{const p=Vs[t];if(p===void 0)throw this.manager.itemError(t),f;delete Vs[t];for(let m=0,x=p.length;m<x;m++){const g=p[m];g.onError&&g.onError(f)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qE extends di{constructor(t){super(t)}load(t,e,n,i){const r=this,l=new Ys(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{e(r.parse(JSON.parse(c)))}catch(h){i?i(h):pe(h),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=cc.parse(t[n]);e.push(i)}return e}}class YE extends di{constructor(t){super(t)}load(t,e,n,i){const r=this,l=[],c=new yf,h=new Ys(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(r.withCredentials);let f=0;function p(m){h.load(t[m],function(x){const g=r.parse(x,!0);l[m]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},f+=1,f===6&&(g.mipmapCount===1&&(c.minFilter=sn),c.image=l,c.format=g.format,c.needsUpdate=!0,e&&e(c))},n,i)}if(Array.isArray(t))for(let m=0,x=t.length;m<x;++m)p(m);else h.load(t,function(m){const x=r.parse(m,!0);if(x.isCubemap){const g=x.mipmaps.length/x.mipmapCount;for(let y=0;y<g;y++){l[y]={mipmaps:[]};for(let M=0;M<x.mipmapCount;M++)l[y].mipmaps.push(x.mipmaps[y*x.mipmapCount+M]),l[y].format=x.format,l[y].width=x.width,l[y].height=x.height}c.image=l}else c.image.width=x.width,c.image.height=x.height,c.mipmaps=x.mipmaps;x.mipmapCount===1&&(c.minFilter=sn),c.format=x.format,c.needsUpdate=!0,e&&e(c)},n,i);return c}}const vo=new WeakMap;class uc extends di{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,l=xs.get(`image:${t}`);if(l!==void 0){if(l.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(l),r.manager.itemEnd(t)},0);else{let m=vo.get(l);m===void 0&&(m=[],vo.set(l,m)),m.push({onLoad:e,onError:i})}return l}const c=ec("img");function h(){p(),e&&e(this);const m=vo.get(this)||[];for(let x=0;x<m.length;x++){const g=m[x];g.onLoad&&g.onLoad(this)}vo.delete(this),r.manager.itemEnd(t)}function f(m){p(),i&&i(m),xs.remove(`image:${t}`);const x=vo.get(this)||[];for(let g=0;g<x.length;g++){const y=x[g];y.onError&&y.onError(m)}vo.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),xs.add(`image:${t}`,c),r.manager.itemStart(t),c.src=t,c}}class ZE extends di{constructor(t){super(t)}load(t,e,n,i){const r=new xc;r.colorSpace=Xn;const l=new uc(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function h(f){l.load(t[f],function(p){r.images[f]=p,c++,c===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let f=0;f<t.length;++f)h(f);return r}}class jE extends di{constructor(t){super(t)}load(t,e,n,i){const r=this,l=new ns,c=new Ys(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(r.withCredentials),c.load(t,function(h){let f;try{f=r.parse(h)}catch(p){if(i!==void 0)i(p);else{p(p);return}}f.image!==void 0?l.image=f.image:f.data!==void 0&&(l.image.width=f.width,l.image.height=f.height,l.image.data=f.data),l.wrapS=f.wrapS!==void 0?f.wrapS:ui,l.wrapT=f.wrapT!==void 0?f.wrapT:ui,l.magFilter=f.magFilter!==void 0?f.magFilter:sn,l.minFilter=f.minFilter!==void 0?f.minFilter:sn,l.anisotropy=f.anisotropy!==void 0?f.anisotropy:1,f.colorSpace!==void 0&&(l.colorSpace=f.colorSpace),f.flipY!==void 0&&(l.flipY=f.flipY),f.format!==void 0&&(l.format=f.format),f.type!==void 0&&(l.type=f.type),f.mipmaps!==void 0&&(l.mipmaps=f.mipmaps,l.minFilter=ms),f.mipmapCount===1&&(l.minFilter=sn),f.generateMipmaps!==void 0&&(l.generateMipmaps=f.generateMipmaps),l.needsUpdate=!0,e&&e(l,f)},n,i),l}}class KE extends di{constructor(t){super(t)}load(t,e,n,i){const r=new cn,l=new uc(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(c){r.image=c,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ua extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vS extends Ua{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vp=new fe,Uv=new P,Nv=new P;class y0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uv.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uv),Nv.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nv),e.updateMatrixWorld(),Vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class JE extends y0{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Po*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class _S extends Ua{constructor(t,e,n=0,i=Math.PI/3,r=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=i,this.penumbra=r,this.decay=l,this.map=null,this.shadow=new JE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Lv=new fe,Nl=new P,Hp=new P;class QE extends y0{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Nl.setFromMatrixPosition(t.matrixWorld),n.position.copy(Nl),Hp.copy(n.position),Hp.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hp),n.updateMatrixWorld(),i.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Lv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lv,n.coordinateSystem,n.reversedDepth)}}class yS extends Ua{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new QE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mc extends pf{constructor(t=-1,e=1,n=1,i=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,l=n+t,c=i+e,h=i-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,l=r+f*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(r,l,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $E extends y0{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SS extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new $E}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bS extends Ua{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class MS extends Ua{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class ES{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,l=this.coefficients;return e.copy(l[0]).multiplyScalar(.282095),e.addScaledVector(l[1],.488603*i),e.addScaledVector(l[2],.488603*r),e.addScaledVector(l[3],.488603*n),e.addScaledVector(l[4],1.092548*(n*i)),e.addScaledVector(l[5],1.092548*(i*r)),e.addScaledVector(l[6],.315392*(3*r*r-1)),e.addScaledVector(l[7],1.092548*(n*r)),e.addScaledVector(l[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,l=this.coefficients;return e.copy(l[0]).multiplyScalar(.886227),e.addScaledVector(l[1],2*.511664*i),e.addScaledVector(l[2],2*.511664*r),e.addScaledVector(l[3],2*.511664*n),e.addScaledVector(l[4],2*.429043*n*i),e.addScaledVector(l[5],2*.429043*i*r),e.addScaledVector(l[6],.743125*r*r-.247708),e.addScaledVector(l[7],2*.429043*n*r),e.addScaledVector(l[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class TS extends Ua{constructor(t=new ES,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Pf extends di{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,l=new Ys(r.manager);l.setPath(r.path),l.setRequestHeader(r.requestHeader),l.setWithCredentials(r.withCredentials),l.load(t,function(c){try{e(r.parse(JSON.parse(c)))}catch(h){i?i(h):pe(h),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&Nt("MaterialLoader: Undefined texture",r),e[r]}const i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(i.uniforms[r]={},l.type){case"t":i.uniforms[r].value=n(l.value);break;case"c":i.uniforms[r].value=new zt().setHex(l.value);break;case"v2":i.uniforms[r].value=new ht().fromArray(l.value);break;case"v3":i.uniforms[r].value=new P().fromArray(l.value);break;case"v4":i.uniforms[r].value=new Te().fromArray(l.value);break;case"m3":i.uniforms[r].value=new ve().fromArray(l.value);break;case"m4":i.uniforms[r].value=new fe().fromArray(l.value);break;default:i.uniforms[r].value=l.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ht().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Pf.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:sS,SpriteMaterial:e0,RawShaderMaterial:aS,ShaderMaterial:fi,PointsMaterial:i0,MeshPhysicalMaterial:d0,MeshStandardMaterial:f0,MeshPhongMaterial:rS,MeshToonMaterial:oS,MeshNormalMaterial:lS,MeshLambertMaterial:cS,MeshDepthMaterial:p0,MeshDistanceMaterial:m0,MeshBasicMaterial:Ra,MeshMatcapMaterial:uS,LineDashedMaterial:hS,LineBasicMaterial:ei,Material:Zn};return new e[t]}}class Cm{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class S0 extends _e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class AS extends di{constructor(t){super(t)}load(t,e,n,i){const r=this,l=new Ys(r.manager);l.setPath(r.path),l.setRequestHeader(r.requestHeader),l.setWithCredentials(r.withCredentials),l.load(t,function(c){try{e(r.parse(JSON.parse(c)))}catch(h){i?i(h):pe(h),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(g,y){if(e[y]!==void 0)return e[y];const S=g.interleavedBuffers[y],_=r(g,S.buffer),E=Ao(S.type,_),T=new gf(E,S.stride);return T.uuid=S.uuid,e[y]=T,T}function r(g,y){if(n[y]!==void 0)return n[y];const S=g.arrayBuffers[y],_=new Uint32Array(S).buffer;return n[y]=_,_}const l=t.isInstancedBufferGeometry?new S0:new _e,c=t.data.index;if(c!==void 0){const g=Ao(c.type,c.array);l.setIndex(new Xe(g,1))}const h=t.data.attributes;for(const g in h){const y=h[g];let M;if(y.isInterleavedBufferAttribute){const S=i(t.data,y.data);M=new wi(S,y.itemSize,y.offset,y.normalized)}else{const S=Ao(y.type,y.array),_=y.isInstancedBufferAttribute?Fo:Xe;M=new _(S,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),l.setAttribute(g,M)}const f=t.data.morphAttributes;if(f)for(const g in f){const y=f[g],M=[];for(let S=0,_=y.length;S<_;S++){const E=y[S];let T;if(E.isInterleavedBufferAttribute){const A=i(t.data,E.data);T=new wi(A,E.itemSize,E.offset,E.normalized)}else{const A=Ao(E.type,E.array);T=new Xe(A,E.itemSize,E.normalized)}E.name!==void 0&&(T.name=E.name),M.push(T)}l.morphAttributes[g]=M}t.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const m=t.data.groups||t.data.drawcalls||t.data.offsets;if(m!==void 0)for(let g=0,y=m.length;g!==y;++g){const M=m[g];l.addGroup(M.start,M.count,M.materialIndex)}const x=t.data.boundingSphere;return x!==void 0&&(l.boundingSphere=new vn().fromJSON(x)),t.name&&(l.name=t.name),t.userData&&(l.userData=t.userData),l}}class tT extends di{constructor(t){super(t)}load(t,e,n,i){const r=this,l=this.path===""?Cm.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||l;const c=new Ys(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){let f=null;try{f=JSON.parse(h)}catch(m){i!==void 0&&i(m),m("ObjectLoader: Can't parse "+t+".",m.message);return}const p=f.metadata;if(p===void 0||p.type===void 0||p.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),pe("ObjectLoader: Can't load "+t);return}r.parse(f,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Cm.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new Ys(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const l=await r.loadAsync(t,e),c=JSON.parse(l),h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(c)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),l=this.parseImages(t.images,function(){e!==void 0&&e(f)}),c=this.parseTextures(t.textures,l),h=this.parseMaterials(t.materials,c),f=this.parseObject(t.object,r,h,c,n),p=this.parseSkeletons(t.skeletons,f);if(this.bindSkeletons(f,p),this.bindLightTargets(f),e!==void 0){let m=!1;for(const x in l)if(l[x].data instanceof HTMLImageElement){m=!0;break}m===!1&&e(f)}return f}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),l=this.parseTextures(t.textures,r),c=this.parseMaterials(t.materials,l),h=this.parseObject(t.object,i,c,l,e),f=this.parseSkeletons(t.skeletons,h);return this.bindSkeletons(h,f),this.bindLightTargets(h),h}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new gr().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,l=t.length;r<l;r++){const c=new vf().fromJSON(t[r],i);n[c.uuid]=c}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new AS;for(let r=0,l=t.length;r<l;r++){let c;const h=t[r];switch(h.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(h);break;default:h.type in Dv?c=Dv[h.type].fromJSON(h,e):Nt(`ObjectLoader: Unsupported geometry type "${h.type}"`)}c.uuid=h.uuid,h.name!==void 0&&(c.name=h.name),h.userData!==void 0&&(c.userData=h.userData),n[h.uuid]=c}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new Pf;r.setTextures(e);for(let l=0,c=t.length;l<c;l++){const h=t[l];n[h.uuid]===void 0&&(n[h.uuid]=r.parse(h)),i[h.uuid]=n[h.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=cc.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function l(h){return n.manager.itemStart(h),r.load(h,function(){n.manager.itemEnd(h)},void 0,function(){n.manager.itemError(h),n.manager.itemEnd(h)})}function c(h){if(typeof h=="string"){const f=h,p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;return l(p)}else return h.data?{data:Ao(h.type,h.data),width:h.width,height:h.height}:null}if(t!==void 0&&t.length>0){const h=new _0(e);r=new uc(h),r.setCrossOrigin(this.crossOrigin);for(let f=0,p=t.length;f<p;f++){const m=t[f],x=m.url;if(Array.isArray(x)){const g=[];for(let y=0,M=x.length;y<M;y++){const S=x[y],_=c(S);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new ns(_.data,_.width,_.height)))}i[m.uuid]=new Sa(g)}else{const g=c(m.url);i[m.uuid]=new Sa(g)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:e.resourcePath+c;return await i.loadAsync(h)}else return l.data?{data:Ao(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){i=new uc(this.manager),i.setCrossOrigin(this.crossOrigin);for(let l=0,c=t.length;l<c;l++){const h=t[l],f=h.url;if(Array.isArray(f)){const p=[];for(let m=0,x=f.length;m<x;m++){const g=f[m],y=await r(g);y!==null&&(y instanceof HTMLImageElement?p.push(y):p.push(new ns(y.data,y.width,y.height)))}n[h.uuid]=new Sa(p)}else{const p=await r(h.url);n[h.uuid]=new Sa(p)}}}return n}parseTextures(t,e){function n(r,l){return typeof r=="number"?r:(Nt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),l[r])}const i={};if(t!==void 0)for(let r=0,l=t.length;r<l;r++){const c=t[r];c.image===void 0&&Nt('ObjectLoader: No "image" specified for',c.uuid),e[c.image]===void 0&&Nt("ObjectLoader: Undefined image",c.image);const h=e[c.image],f=h.data;let p;Array.isArray(f)?(p=new xc,f.length===6&&(p.needsUpdate=!0)):(f&&f.data?p=new ns:p=new cn,f&&(p.needsUpdate=!0)),p.source=h,p.uuid=c.uuid,c.name!==void 0&&(p.name=c.name),c.mapping!==void 0&&(p.mapping=n(c.mapping,eT)),c.channel!==void 0&&(p.channel=c.channel),c.offset!==void 0&&p.offset.fromArray(c.offset),c.repeat!==void 0&&p.repeat.fromArray(c.repeat),c.center!==void 0&&p.center.fromArray(c.center),c.rotation!==void 0&&(p.rotation=c.rotation),c.wrap!==void 0&&(p.wrapS=n(c.wrap[0],Iv),p.wrapT=n(c.wrap[1],Iv)),c.format!==void 0&&(p.format=c.format),c.internalFormat!==void 0&&(p.internalFormat=c.internalFormat),c.type!==void 0&&(p.type=c.type),c.colorSpace!==void 0&&(p.colorSpace=c.colorSpace),c.minFilter!==void 0&&(p.minFilter=n(c.minFilter,Pv)),c.magFilter!==void 0&&(p.magFilter=n(c.magFilter,Pv)),c.anisotropy!==void 0&&(p.anisotropy=c.anisotropy),c.flipY!==void 0&&(p.flipY=c.flipY),c.generateMipmaps!==void 0&&(p.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(p.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(p.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(p.compareFunction=c.compareFunction),c.userData!==void 0&&(p.userData=c.userData),i[c.uuid]=p}return i}parseObject(t,e,n,i,r){let l;function c(x){return e[x]===void 0&&Nt("ObjectLoader: Undefined geometry",x),e[x]}function h(x){if(x!==void 0){if(Array.isArray(x)){const g=[];for(let y=0,M=x.length;y<M;y++){const S=x[y];n[S]===void 0&&Nt("ObjectLoader: Undefined material",S),g.push(n[S])}return g}return n[x]===void 0&&Nt("ObjectLoader: Undefined material",x),n[x]}}function f(x){return i[x]===void 0&&Nt("ObjectLoader: Undefined texture",x),i[x]}let p,m;switch(t.type){case"Scene":l=new t0,t.background!==void 0&&(Number.isInteger(t.background)?l.background=new zt(t.background):l.background=f(t.background)),t.environment!==void 0&&(l.environment=f(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?l.fog=new xf(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(l.fog=new mf(t.fog.color,t.fog.density)),t.fog.name!==""&&(l.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(l.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(l.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&l.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(l.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&l.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":l=new An(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(l.focus=t.focus),t.zoom!==void 0&&(l.zoom=t.zoom),t.filmGauge!==void 0&&(l.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(l.filmOffset=t.filmOffset),t.view!==void 0&&(l.view=Object.assign({},t.view));break;case"OrthographicCamera":l=new Mc(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(l.zoom=t.zoom),t.view!==void 0&&(l.view=Object.assign({},t.view));break;case"AmbientLight":l=new bS(t.color,t.intensity);break;case"DirectionalLight":l=new SS(t.color,t.intensity),l.target=t.target||"";break;case"PointLight":l=new yS(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":l=new MS(t.color,t.intensity,t.width,t.height);break;case"SpotLight":l=new _S(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),l.target=t.target||"";break;case"HemisphereLight":l=new vS(t.color,t.groundColor,t.intensity);break;case"LightProbe":l=new TS().fromJSON(t);break;case"SkinnedMesh":p=c(t.geometry),m=h(t.material),l=new Gy(p,m),t.bindMode!==void 0&&(l.bindMode=t.bindMode),t.bindMatrix!==void 0&&l.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(l.skeleton=t.skeleton);break;case"Mesh":p=c(t.geometry),m=h(t.material),l=new mn(p,m);break;case"InstancedMesh":p=c(t.geometry),m=h(t.material);const x=t.count,g=t.instanceMatrix,y=t.instanceColor;l=new ky(p,m,x),l.instanceMatrix=new Fo(new Float32Array(g.array),16),y!==void 0&&(l.instanceColor=new Fo(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":p=c(t.geometry),m=h(t.material),l=new Wy(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,m),l.geometry=p,l.perObjectFrustumCulled=t.perObjectFrustumCulled,l.sortObjects=t.sortObjects,l._drawRanges=t.drawRanges,l._reservedRanges=t.reservedRanges,l._geometryInfo=t.geometryInfo.map(M=>{let S=null,_=null;return M.boundingBox!==void 0&&(S=new gn().fromJSON(M.boundingBox)),M.boundingSphere!==void 0&&(_=new vn().fromJSON(M.boundingSphere)),{...M,boundingBox:S,boundingSphere:_}}),l._instanceInfo=t.instanceInfo,l._availableInstanceIds=t._availableInstanceIds,l._availableGeometryIds=t._availableGeometryIds,l._nextIndexStart=t.nextIndexStart,l._nextVertexStart=t.nextVertexStart,l._geometryCount=t.geometryCount,l._maxInstanceCount=t.maxInstanceCount,l._maxVertexCount=t.maxVertexCount,l._maxIndexCount=t.maxIndexCount,l._geometryInitialized=t.geometryInitialized,l._matricesTexture=f(t.matricesTexture.uuid),l._indirectTexture=f(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(l._colorsTexture=f(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(l.boundingSphere=new vn().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(l.boundingBox=new gn().fromJSON(t.boundingBox));break;case"LOD":l=new Hy;break;case"Line":l=new Aa(c(t.geometry),h(t.material));break;case"LineLoop":l=new Xy(c(t.geometry),h(t.material));break;case"LineSegments":l=new ys(c(t.geometry),h(t.material));break;case"PointCloud":case"Points":l=new qy(c(t.geometry),h(t.material));break;case"Sprite":l=new Vy(h(t.material));break;case"Group":l=new Co;break;case"Bone":l=new n0;break;default:l=new Ie}if(l.uuid=t.uuid,t.name!==void 0&&(l.name=t.name),t.matrix!==void 0?(l.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(l.matrixAutoUpdate=t.matrixAutoUpdate),l.matrixAutoUpdate&&l.matrix.decompose(l.position,l.quaternion,l.scale)):(t.position!==void 0&&l.position.fromArray(t.position),t.rotation!==void 0&&l.rotation.fromArray(t.rotation),t.quaternion!==void 0&&l.quaternion.fromArray(t.quaternion),t.scale!==void 0&&l.scale.fromArray(t.scale)),t.up!==void 0&&l.up.fromArray(t.up),t.castShadow!==void 0&&(l.castShadow=t.castShadow),t.receiveShadow!==void 0&&(l.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(l.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(l.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(l.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(l.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&l.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(l.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(l.visible=t.visible),t.frustumCulled!==void 0&&(l.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(l.renderOrder=t.renderOrder),t.userData!==void 0&&(l.userData=t.userData),t.layers!==void 0&&(l.layers.mask=t.layers),t.children!==void 0){const x=t.children;for(let g=0;g<x.length;g++)l.add(this.parseObject(x[g],e,n,i,r))}if(t.animations!==void 0){const x=t.animations;for(let g=0;g<x.length;g++){const y=x[g];l.animations.push(r[y])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(l.autoUpdate=t.autoUpdate);const x=t.levels;for(let g=0;g<x.length;g++){const y=x[g],M=l.getObjectByProperty("uuid",y.object);M!==void 0&&l.addLevel(M,y.distance,y.hysteresis)}}return l}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?Nt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new Ie}})}}const eT={UVMapping:nf,CubeReflectionMapping:Xs,CubeRefractionMapping:Ma,EquirectangularReflectionMapping:Yl,EquirectangularRefractionMapping:Zl,CubeUVReflectionMapping:Go},Iv={RepeatWrapping:jl,ClampToEdgeWrapping:ui,MirroredRepeatWrapping:Kl},Pv={NearestFilter:In,NearestMipmapNearestFilter:Hm,NearestMipmapLinearFilter:To,LinearFilter:sn,LinearMipmapNearestFilter:zl,LinearMipmapLinearFilter:ms},Gp=new WeakMap;class nT extends di{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,l=xs.get(`image-bitmap:${t}`);if(l!==void 0){if(r.manager.itemStart(t),l.then){l.then(f=>{if(Gp.has(l)===!0)i&&i(Gp.get(l)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(f),r.manager.itemEnd(t),f});return}return setTimeout(function(){e&&e(l),r.manager.itemEnd(t)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(t,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(f){return xs.add(`image-bitmap:${t}`,f),e&&e(f),r.manager.itemEnd(t),f}).catch(function(f){i&&i(f),Gp.set(h,f),xs.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});xs.add(`image-bitmap:${t}`,h),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let ku;class b0{static getContext(){return ku===void 0&&(ku=new(window.AudioContext||window.webkitAudioContext)),ku}static setContext(t){ku=t}}class iT extends di{constructor(t){super(t)}load(t,e,n,i){const r=this,l=new Ys(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{const f=h.slice(0);b0.getContext().decodeAudioData(f,function(m){e(m)}).catch(c)}catch(f){c(f)}},n,i);function c(h){i?i(h):pe(h),r.manager.itemError(t)}}}const Ov=new fe,Bv=new fe,nr=new fe;class sT{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new An,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new An,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,nr.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,l=e.near*Math.tan(xr*e.fov*.5)/e.zoom;let c,h;Bv.elements[12]=-i,Ov.elements[12]=i,c=-l*e.aspect+r,h=l*e.aspect+r,nr.elements[0]=2*e.near/(h-c),nr.elements[8]=(h+c)/(h-c),this.cameraL.projectionMatrix.copy(nr),c=-l*e.aspect-r,h=l*e.aspect-r,nr.elements[0]=2*e.near/(h-c),nr.elements[8]=(h+c)/(h-c),this.cameraR.projectionMatrix.copy(nr)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Bv),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Ov)}}class CS extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class M0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const ir=new P,kp=new hi,aT=new P,sr=new P,ar=new P;class rT extends Ie{constructor(){super(),this.type="AudioListener",this.context=b0.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new M0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ir,kp,aT),sr.set(0,0,-1).applyQuaternion(kp),ar.set(0,1,0).applyQuaternion(kp),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ir.x,n),e.positionY.linearRampToValueAtTime(ir.y,n),e.positionZ.linearRampToValueAtTime(ir.z,n),e.forwardX.linearRampToValueAtTime(sr.x,n),e.forwardY.linearRampToValueAtTime(sr.y,n),e.forwardZ.linearRampToValueAtTime(sr.z,n),e.upX.linearRampToValueAtTime(ar.x,n),e.upY.linearRampToValueAtTime(ar.y,n),e.upZ.linearRampToValueAtTime(ar.z,n)}else e.setPosition(ir.x,ir.y,ir.z),e.setOrientation(sr.x,sr.y,sr.z,ar.x,ar.y,ar.z)}}class wS extends Ie{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Nt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Nt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Nt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Nt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const rr=new P,zv=new hi,oT=new P,or=new P;class lT extends wS{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(rr,zv,oT),or.set(0,0,1).applyQuaternion(zv);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(rr.x,n),e.positionY.linearRampToValueAtTime(rr.y,n),e.positionZ.linearRampToValueAtTime(rr.z,n),e.orientationX.linearRampToValueAtTime(or.x,n),e.orientationY.linearRampToValueAtTime(or.y,n),e.orientationZ.linearRampToValueAtTime(or.z,n)}else e.setPosition(rr.x,rr.y,rr.z),e.setOrientation(or.x,or.y,or.z)}}class cT{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class RS{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,l;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let l=this.cumulativeWeight;if(l===0){for(let c=0;c!==i;++c)n[r+c]=n[c];l=e}else{l+=e;const c=e/l;this._mixBufferRegion(n,r,0,c,i)}this.cumulativeWeight=l}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,l=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const h=e*this._origIndex;this._mixBufferRegion(n,i,h,1-r,e)}l>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let h=e,f=e+e;h!==f;++h)if(n[h]!==n[h+e]){c.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,l=i;r!==l;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let l=0;l!==r;++l)t[e+l]=t[n+l]}_slerp(t,e,n,i){hi.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const l=this._workIndex*r;hi.multiplyQuaternionsFlat(t,l,t,e,t,n),hi.slerpFlat(t,e,t,e,t,l,i)}_lerp(t,e,n,i,r){const l=1-i;for(let c=0;c!==r;++c){const h=e+c;t[h]=t[h]*l+t[n+c]*i}}_lerpAdditive(t,e,n,i,r){for(let l=0;l!==r;++l){const c=e+l;t[c]=t[c]+t[n+l]*i}}}const E0="\\[\\]\\.:\\/",uT=new RegExp("["+E0+"]","g"),T0="[^"+E0+"]",hT="[^"+E0.replace("\\.","")+"]",fT=/((?:WC+[\/:])*)/.source.replace("WC",T0),dT=/(WCOD+)?/.source.replace("WCOD",hT),pT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",T0),mT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",T0),xT=new RegExp("^"+fT+dT+pT+mT+"$"),gT=["material","materials","bones","map"];class vT{constructor(t,e,n){const i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Le{constructor(t,e,n){this.path=e,this.parsedPath=n||Le.parseTrackName(e),this.node=Le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Le.Composite(t,e,n):new Le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uT,"")}static parseTrackName(t){const e=xT.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let l=0;l<r.length;l++){const c=r[l];if(c.name===e||c.uuid===e)return c;const h=n(c.children);if(h)return h}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}const l=t[i];if(l===void 0){const f=e.nodeName;pe("PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Le.Composite=vT;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _T{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Ri(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,l=r.length;let c,h=t.length,f=this.nCachedObjects_;for(let p=0,m=arguments.length;p!==m;++p){const x=arguments[p],g=x.uuid;let y=e[g];if(y===void 0){y=h++,e[g]=y,t.push(x);for(let M=0,S=l;M!==S;++M)r[M].push(new Le(x,n[M],i[M]))}else if(y<f){c=t[y];const M=--f,S=t[M];e[S.uuid]=y,t[y]=S,e[g]=M,t[M]=x;for(let _=0,E=l;_!==E;++_){const T=r[_],A=T[M];let N=T[y];T[y]=A,N===void 0&&(N=new Le(x,n[_],i[_])),T[M]=N}}else t[y]!==c&&pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=f}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let l=0,c=arguments.length;l!==c;++l){const h=arguments[l],f=h.uuid,p=e[f];if(p!==void 0&&p>=r){const m=r++,x=t[m];e[x.uuid]=p,t[p]=x,e[f]=m,t[m]=h;for(let g=0,y=i;g!==y;++g){const M=n[g],S=M[m],_=M[p];M[p]=S,M[m]=_}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,l=t.length;for(let c=0,h=arguments.length;c!==h;++c){const f=arguments[c],p=f.uuid,m=e[p];if(m!==void 0)if(delete e[p],m<r){const x=--r,g=t[x],y=--l,M=t[y];e[g.uuid]=m,t[m]=g,e[M.uuid]=x,t[x]=M,t.pop();for(let S=0,_=i;S!==_;++S){const E=n[S],T=E[x],A=E[y];E[m]=T,E[x]=A,E.pop()}}else{const x=--l,g=t[x];x>0&&(e[g.uuid]=m),t[m]=g,t.pop();for(let y=0,M=i;y!==M;++y){const S=n[y];S[m]=S[x],S.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const l=this._paths,c=this._parsedPaths,h=this._objects,f=h.length,p=this.nCachedObjects_,m=new Array(f);i=r.length,n[t]=i,l.push(t),c.push(e),r.push(m);for(let x=p,g=h.length;x!==g;++x){const y=h[x];m[x]=new Le(y,t,e)}return m}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,l=this._bindings,c=l.length-1,h=l[c],f=t[c];e[f]=n,l[n]=h,l.pop(),r[n]=r[c],r.pop(),i[n]=i[c],i.pop()}}}class DS{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,l=r.length,c=new Array(l),h={endingStart:fr,endingEnd:fr};for(let f=0;f!==l;++f){const p=r[f].createInterpolant(null);c[f]=p,p.settings=h}this._interpolantSettings=h,this._interpolants=c,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=yy,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,l=r/i,c=i/r;t.warp(1,l,e),this.warp(c,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,l=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const h=c.parameterPositions,f=c.sampleValues;return h[0]=r,h[1]=r+n,f[0]=t/l,f[1]=e/l,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const h=(t-r)*n;h<0||n===0?e=0:(this._startTime=null,e=n*h)}e*=this._updateTimeScale(t);const l=this._updateTime(e),c=this._updateWeight(t);if(c>0){const h=this._interpolants,f=this._propertyBindings;switch(this.blendMode){case Zm:for(let p=0,m=h.length;p!==m;++p)h[p].evaluate(l),f[p].accumulateAdditive(c);break;case hf:default:for(let p=0,m=h.length;p!==m;++p)h[p].evaluate(l),f[p].accumulate(i,c)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const l=n===Sy;if(t===0)return r===-1?i:l&&(r&1)===1?e-i:i;if(n===_y){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),i>=e||i<0){const c=Math.floor(i/e);i-=e*c,r+=Math.abs(c);const h=this.repetitions-r;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(h===1){const f=t<0;this._setEndings(f,!f,l)}else this._setEndings(!1,!1,l);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(l&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=dr,i.endingEnd=dr):(t?i.endingStart=this.zeroSlopeAtStart?dr:fr:i.endingStart=Ql,e?i.endingEnd=this.zeroSlopeAtEnd?dr:fr:i.endingEnd=Ql)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let l=this._weightInterpolant;l===null&&(l=i._lendControlInterpolant(),this._weightInterpolant=l);const c=l.parameterPositions,h=l.sampleValues;return c[0]=r,h[0]=e,c[1]=r+t,h[1]=n,this}}const yT=new Float32Array(1);class ST extends _s{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,l=t._propertyBindings,c=t._interpolants,h=n.uuid,f=this._bindingsByRootAndName;let p=f[h];p===void 0&&(p={},f[h]=p);for(let m=0;m!==r;++m){const x=i[m],g=x.name;let y=p[g];if(y!==void 0)++y.referenceCount,l[m]=y;else{if(y=l[m],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,h,g));continue}const M=e&&e._propertyBindings[m].binding.parsedPath;y=new RS(Le.create(n,g,M),x.ValueTypeName,x.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,h,g),l[m]=y}c[m].resultBuffer=y.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let l=r[e];if(l===void 0)l={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=l;else{const c=l.knownActions;t._byClipCacheIndex=c.length,c.push(t)}t._cacheIndex=i.length,i.push(t),l.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,l=this._actionsByClip,c=l[r],h=c.knownActions,f=h[h.length-1],p=t._byClipCacheIndex;f._byClipCacheIndex=p,h[p]=f,h.pop(),t._byClipCacheIndex=null;const m=c.actionByRoot,x=(t._localRoot||this._root).uuid;delete m[x],h.length===0&&delete l[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let l=i[e];l===void 0&&(l={},i[e]=l),l[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,l=this._bindingsByRootAndName,c=l[i],h=e[e.length-1],f=t._cacheIndex;h._cacheIndex=f,e[f]=h,e.pop(),delete c[r],Object.keys(c).length===0&&delete l[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new g0(new Float32Array(2),new Float32Array(2),1,yT),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let l=typeof t=="string"?cc.findByName(i,t):t;const c=l!==null?l.uuid:t,h=this._actionsByClip[c];let f=null;if(n===void 0&&(l!==null?n=l.blendMode:n=hf),h!==void 0){const m=h.actionByRoot[r];if(m!==void 0&&m.blendMode===n)return m;f=h.knownActions[0],l===null&&(l=f._clip)}if(l===null)return null;const p=new DS(this,l,e,n);return this._bindAction(p,f),this._addInactiveAction(p,c,r),p}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?cc.findByName(n,t):t,l=r?r.uuid:t,c=this._actionsByClip[l];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),l=this._accuIndex^=1;for(let f=0;f!==n;++f)e[f]._update(i,t,r,l);const c=this._bindings,h=this._nActiveBindings;for(let f=0;f!==h;++f)c[f].apply(l);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const l=r.knownActions;for(let c=0,h=l.length;c!==h;++c){const f=l[c];this._deactivateAction(f);const p=f._cacheIndex,m=e[e.length-1];f._cacheIndex=null,f._byClipCacheIndex=null,m._cacheIndex=p,e[p]=m,e.pop(),this._removeInactiveBindingsForAction(f)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const l in n){const c=n[l].actionByRoot,h=c[e];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const l in r){const c=r[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class bT extends Jm{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new df(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Of{constructor(t){this.value=t}clone(){return new Of(this.value.clone===void 0?this.value:this.value.clone())}}let MT=0;class ET extends _s{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:MT++}),this.name="",this.usage=tc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let l=0;l<r.length;l++)this.uniforms.push(r[l].clone())}return this}clone(){return new this.constructor().copy(this)}}class Kh extends gf{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class TT{constructor(t,e,n,i,r,l=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=l,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Fv=new fe;class US{constructor(t,e,n=0,i=1/0){this.ray=new ko(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fv),this}intersectObject(t,e=!0,n=[]){return wm(t,this,n,e),n.sort(Vv),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)wm(t[i],this,n,e);return n.sort(Vv),n}}function Vv(s,t){return s.distance-t.distance}function wm(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let l=0,c=r.length;l<c;l++)wm(r[l],t,e,!0)}}class AT{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=CT.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function CT(){this._document.hidden===!1&&this.reset()}class wT{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class RT{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class A0{constructor(t,e,n,i){A0.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const Hv=new ht;class DT{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hv.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hv).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gv=new P,Wu=new P,_o=new P,yo=new P,Wp=new P,UT=new P,NT=new P;class NS{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Gv.subVectors(t,this.start),Wu.subVectors(this.end,this.start);const n=Wu.dot(Wu);let r=Wu.dot(Gv)/n;return e&&(r=he(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=UT,n=NT){const i=10000000000000001e-32;let r,l;const c=this.start,h=t.start,f=this.end,p=t.end;_o.subVectors(f,c),yo.subVectors(p,h),Wp.subVectors(c,h);const m=_o.dot(_o),x=yo.dot(yo),g=yo.dot(Wp);if(m<=i&&x<=i)return e.copy(c),n.copy(h),e.sub(n),e.dot(e);if(m<=i)r=0,l=g/x,l=he(l,0,1);else{const y=_o.dot(Wp);if(x<=i)l=0,r=he(-y/m,0,1);else{const M=_o.dot(yo),S=m*x-M*M;S!==0?r=he((M*g-y*x)/S,0,1):r=0,l=(M*r+g)/x,l<0?(l=0,r=he(-y/m,0,1)):l>1&&(l=1,r=he((M-y)/m,0,1))}}return e.copy(c).add(_o.multiplyScalar(r)),n.copy(h).add(yo.multiplyScalar(l)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const kv=new P;class LT extends Ie{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new _e,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,h=32;l<h;l++,c++){const f=l/h*Math.PI*2,p=c/h*Math.PI*2;i.push(Math.cos(f),Math.sin(f),1,Math.cos(p),Math.sin(p),1)}n.setAttribute("position",new Wt(i,3));const r=new ei({fog:!1,toneMapped:!1});this.cone=new ys(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),kv.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(kv),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ga=new P,Xu=new fe,Xp=new fe;class IT extends ys{constructor(t){const e=LS(t),n=new _e,i=[],r=[];for(let f=0;f<e.length;f++){const p=e[f];p.parent&&p.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Wt(i,3)),n.setAttribute("color",new Wt(r,3));const l=new ei({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const c=new zt(255),h=new zt(65280);this.setColors(c,h)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Xp.copy(this.root.matrixWorld).invert();for(let r=0,l=0;r<e.length;r++){const c=e[r];c.parent&&c.parent.isBone&&(Xu.multiplyMatrices(Xp,c.matrixWorld),ga.setFromMatrixPosition(Xu),i.setXYZ(l,ga.x,ga.y,ga.z),Xu.multiplyMatrices(Xp,c.parent.matrixWorld),ga.setFromMatrixPosition(Xu),i.setXYZ(l+1,ga.x,ga.y,ga.z),l+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function LS(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...LS(s.children[e]));return t}class PT extends mn{constructor(t,e,n){const i=new yc(e,4,2),r=new Ra({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const OT=new P,Wv=new zt,Xv=new zt;class BT extends Ie{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new _c(e);i.rotateY(Math.PI*.5),this.material=new Ra({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),l=new Float32Array(r.count*3);i.setAttribute("color",new Xe(l,3)),this.add(new mn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Wv.copy(this.light.color),Xv.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Wv:Xv;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(OT.setFromMatrixPosition(this.light.matrixWorld).negate())}}class zT extends ys{constructor(t=10,e=10,n=4473924,i=8947848){n=new zt(n),i=new zt(i);const r=e/2,l=t/e,c=t/2,h=[],f=[];for(let x=0,g=0,y=-c;x<=e;x++,y+=l){h.push(-c,0,y,c,0,y),h.push(y,0,-c,y,0,c);const M=x===r?n:i;M.toArray(f,g),g+=3,M.toArray(f,g),g+=3,M.toArray(f,g),g+=3,M.toArray(f,g),g+=3}const p=new _e;p.setAttribute("position",new Wt(h,3)),p.setAttribute("color",new Wt(f,3));const m=new ei({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class FT extends ys{constructor(t=10,e=16,n=8,i=64,r=4473924,l=8947848){r=new zt(r),l=new zt(l);const c=[],h=[];if(e>1)for(let m=0;m<e;m++){const x=m/e*(Math.PI*2),g=Math.sin(x)*t,y=Math.cos(x)*t;c.push(0,0,0),c.push(g,0,y);const M=m&1?r:l;h.push(M.r,M.g,M.b),h.push(M.r,M.g,M.b)}for(let m=0;m<n;m++){const x=m&1?r:l,g=t-t/n*m;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),S=Math.sin(M)*g,_=Math.cos(M)*g;c.push(S,0,_),h.push(x.r,x.g,x.b),M=(y+1)/i*(Math.PI*2),S=Math.sin(M)*g,_=Math.cos(M)*g,c.push(S,0,_),h.push(x.r,x.g,x.b)}}const f=new _e;f.setAttribute("position",new Wt(c,3)),f.setAttribute("color",new Wt(h,3));const p=new ei({vertexColors:!0,toneMapped:!1});super(f,p),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const qv=new P,qu=new P,Yv=new P;class VT extends Ie{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new _e;i.setAttribute("position",new Wt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new ei({fog:!1,toneMapped:!1});this.lightPlane=new Aa(i,r),this.add(this.lightPlane),i=new _e,i.setAttribute("position",new Wt([0,0,0,0,0,1],3)),this.targetLine=new Aa(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),qv.setFromMatrixPosition(this.light.matrixWorld),qu.setFromMatrixPosition(this.light.target.matrixWorld),Yv.subVectors(qu,qv),this.lightPlane.lookAt(qu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(qu),this.targetLine.scale.z=Yv.length()}}const Yu=new P,ln=new pf;class HT extends ys{constructor(t){const e=new _e,n=new ei({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],l={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){h(y),h(M)}function h(y){i.push(0,0,0),r.push(0,0,0),l[y]===void 0&&(l[y]=[]),l[y].push(i.length/3-1)}e.setAttribute("position",new Wt(i,3)),e.setAttribute("color",new Wt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const f=new zt(16755200),p=new zt(16711680),m=new zt(43775),x=new zt(16777215),g=new zt(3355443);this.setColors(f,p,m,x,g)}setColors(t,e,n,i,r){const c=this.geometry.getAttribute("color");return c.setXYZ(0,t.r,t.g,t.b),c.setXYZ(1,t.r,t.g,t.b),c.setXYZ(2,t.r,t.g,t.b),c.setXYZ(3,t.r,t.g,t.b),c.setXYZ(4,t.r,t.g,t.b),c.setXYZ(5,t.r,t.g,t.b),c.setXYZ(6,t.r,t.g,t.b),c.setXYZ(7,t.r,t.g,t.b),c.setXYZ(8,t.r,t.g,t.b),c.setXYZ(9,t.r,t.g,t.b),c.setXYZ(10,t.r,t.g,t.b),c.setXYZ(11,t.r,t.g,t.b),c.setXYZ(12,t.r,t.g,t.b),c.setXYZ(13,t.r,t.g,t.b),c.setXYZ(14,t.r,t.g,t.b),c.setXYZ(15,t.r,t.g,t.b),c.setXYZ(16,t.r,t.g,t.b),c.setXYZ(17,t.r,t.g,t.b),c.setXYZ(18,t.r,t.g,t.b),c.setXYZ(19,t.r,t.g,t.b),c.setXYZ(20,t.r,t.g,t.b),c.setXYZ(21,t.r,t.g,t.b),c.setXYZ(22,t.r,t.g,t.b),c.setXYZ(23,t.r,t.g,t.b),c.setXYZ(24,e.r,e.g,e.b),c.setXYZ(25,e.r,e.g,e.b),c.setXYZ(26,e.r,e.g,e.b),c.setXYZ(27,e.r,e.g,e.b),c.setXYZ(28,e.r,e.g,e.b),c.setXYZ(29,e.r,e.g,e.b),c.setXYZ(30,e.r,e.g,e.b),c.setXYZ(31,e.r,e.g,e.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,r.r,r.g,r.b),c.setXYZ(41,r.r,r.g,r.b),c.setXYZ(42,r.r,r.g,r.b),c.setXYZ(43,r.r,r.g,r.b),c.setXYZ(44,r.r,r.g,r.b),c.setXYZ(45,r.r,r.g,r.b),c.setXYZ(46,r.r,r.g,r.b),c.setXYZ(47,r.r,r.g,r.b),c.setXYZ(48,r.r,r.g,r.b),c.setXYZ(49,r.r,r.g,r.b),c.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,l;if(ln.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,l=0;else if(this.camera.coordinateSystem===Ci)r=-1,l=1;else if(this.camera.coordinateSystem===Lo)r=0,l=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);hn("c",e,t,ln,0,0,r),hn("t",e,t,ln,0,0,l),hn("n1",e,t,ln,-n,-i,r),hn("n2",e,t,ln,n,-i,r),hn("n3",e,t,ln,-n,i,r),hn("n4",e,t,ln,n,i,r),hn("f1",e,t,ln,-n,-i,l),hn("f2",e,t,ln,n,-i,l),hn("f3",e,t,ln,-n,i,l),hn("f4",e,t,ln,n,i,l),hn("u1",e,t,ln,n*.7,i*1.1,r),hn("u2",e,t,ln,-n*.7,i*1.1,r),hn("u3",e,t,ln,0,i*2,r),hn("cf1",e,t,ln,-n,0,l),hn("cf2",e,t,ln,n,0,l),hn("cf3",e,t,ln,0,-i,l),hn("cf4",e,t,ln,0,i,l),hn("cn1",e,t,ln,-n,0,r),hn("cn2",e,t,ln,n,0,r),hn("cn3",e,t,ln,0,-i,r),hn("cn4",e,t,ln,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function hn(s,t,e,n,i,r,l){Yu.set(i,r,l).unproject(n);const c=t[s];if(c!==void 0){const h=e.getAttribute("position");for(let f=0,p=c.length;f<p;f++)h.setXYZ(c[f],Yu.x,Yu.y,Yu.z)}}const Zu=new gn;class GT extends ys{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new _e;r.setIndex(new Xe(n,1)),r.setAttribute("position",new Xe(i,3)),super(r,new ei({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Zu.setFromObject(this.object),Zu.isEmpty())return;const t=Zu.min,e=Zu.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kT extends ys{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new _e;r.setIndex(new Xe(n,1)),r.setAttribute("position",new Wt(i,3)),super(r,new ei({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class WT extends Aa{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],l=new _e;l.setAttribute("position",new Wt(r,3)),l.computeBoundingSphere(),super(l,new ei({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],h=new _e;h.setAttribute("position",new Wt(c,3)),h.computeBoundingSphere(),this.add(new mn(h,new Ra({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Zv=new P;let ju,qp;class XT extends Ie{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,i=16776960,r=n*.2,l=r*.2){super(),this.type="ArrowHelper",ju===void 0&&(ju=new _e,ju.setAttribute("position",new Wt([0,0,0,0,1,0],3)),qp=new vc(.5,1,5,1),qp.translate(0,-.5,0)),this.position.copy(e),this.line=new Aa(ju,new ei({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new mn(qp,new Ra({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zv.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zv,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class qT extends ys{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new _e;i.setAttribute("position",new Wt(e,3)),i.setAttribute("color",new Wt(n,3));const r=new ei({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new zt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class YT{constructor(){this.type="ShapePath",this.color=new zt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new jh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,l){return this.currentPath.bezierCurveTo(t,e,n,i,r,l),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const E=[];for(let T=0,A=_.length;T<A;T++){const N=_[T],w=new gr;w.curves=N.curves,E.push(w)}return E}function n(_,E){const T=E.length;let A=!1;for(let N=T-1,w=0;w<T;N=w++){let I=E[N],z=E[w],R=z.x-I.x,C=z.y-I.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(I=E[w],R=-R,z=E[N],C=-C),_.y<I.y||_.y>z.y)continue;if(_.y===I.y){if(_.x===I.x)return!0}else{const F=C*(_.x-I.x)-R*(_.y-I.y);if(F===0)return!0;if(F<0)continue;A=!A}}else{if(_.y!==I.y)continue;if(z.x<=_.x&&_.x<=I.x||I.x<=_.x&&_.x<=z.x)return!0}}return A}const i=ts.isClockWise,r=this.subPaths;if(r.length===0)return[];let l,c,h;const f=[];if(r.length===1)return c=r[0],h=new gr,h.curves=c.curves,f.push(h),f;let p=!i(r[0].getPoints());p=t?!p:p;const m=[],x=[];let g=[],y=0,M;x[y]=void 0,g[y]=[];for(let _=0,E=r.length;_<E;_++)c=r[_],M=c.getPoints(),l=i(M),l=t?!l:l,l?(!p&&x[y]&&y++,x[y]={s:new gr,p:M},x[y].s.curves=c.curves,p&&y++,g[y]=[]):g[y].push({h:c,p:M[0]});if(!x[0])return e(r);if(x.length>1){let _=!1,E=0;for(let T=0,A=x.length;T<A;T++)m[T]=[];for(let T=0,A=x.length;T<A;T++){const N=g[T];for(let w=0;w<N.length;w++){const I=N[w];let z=!0;for(let R=0;R<x.length;R++)n(I.p,x[R].p)&&(T!==R&&E++,z?(z=!1,m[R].push(I)):_=!0);z&&m[T].push(I)}}E>0&&_===!1&&(g=m)}let S;for(let _=0,E=x.length;_<E;_++){h=x[_].s,f.push(h),S=g[_];for(let T=0,A=S.length;T<A;T++)h.holes.push(S[T].h)}return f}}class ZT extends _s{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function jT(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function KT(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function JT(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Rm(s,t,e,n){const i=QT(n);switch(e){case qm:return s*t;case of:return s*t/i.components*i.byteLength;case mc:return s*t/i.components*i.byteLength;case lf:return s*t*2/i.components*i.byteLength;case cf:return s*t*2/i.components*i.byteLength;case Ym:return s*t*3/i.components*i.byteLength;case qn:return s*t*4/i.components*i.byteLength;case uf:return s*t*4/i.components*i.byteLength;case Fl:case Vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hl:case Gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vh:case yh:return Math.max(s,16)*Math.max(t,8)/4;case gh:case _h:return Math.max(s,8)*Math.max(t,8)/2;case Sh:case bh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zh:case Fh:case Vh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Hh:case Gh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kh:case Wh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function QT(s){switch(s){case Gi:case Gm:return{byteLength:1,components:1};case Ro:case km:case Ca:return{byteLength:2,components:1};case af:case rf:return{byteLength:2,components:4};case qs:case sf:case ti:return{byteLength:4,components:1};case Wm:case Xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class $T{static contain(t,e){return jT(t,e)}static cover(t,e){return KT(t,e)}static fill(t){return JT(t)}static getByteLength(t,e,n,i){return Rm(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);function IS(){let s=null,t=!1,e=null,n=null;function i(r,l){e(r,l),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tA(s){const t=new WeakMap;function e(c,h){const f=c.array,p=c.usage,m=f.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,f,p),c.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)g=s.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,h,f){const p=h.array,m=h.updateRanges;if(s.bindBuffer(f,c),m.length===0)s.bufferSubData(f,0,p);else{m.sort((g,y)=>g.start-y.start);let x=0;for(let g=1;g<m.length;g++){const y=m[x],M=m[g];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++x,m[x]=M)}m.length=x+1;for(let g=0,y=m.length;g<y;g++){const M=m[g];s.bufferSubData(f,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=t.get(c);h&&(s.deleteBuffer(h.buffer),t.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=t.get(c);(!p||p.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:i,remove:r,update:l}}var eA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UA="gl_FragColor = linearToOutputTexel( gl_FragColor );",NA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$A=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_C=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,be={alphahash_fragment:eA,alphahash_pars_fragment:nA,alphamap_fragment:iA,alphamap_pars_fragment:sA,alphatest_fragment:aA,alphatest_pars_fragment:rA,aomap_fragment:oA,aomap_pars_fragment:lA,batching_pars_vertex:cA,batching_vertex:uA,begin_vertex:hA,beginnormal_vertex:fA,bsdfs:dA,iridescence_fragment:pA,bumpmap_pars_fragment:mA,clipping_planes_fragment:xA,clipping_planes_pars_fragment:gA,clipping_planes_pars_vertex:vA,clipping_planes_vertex:_A,color_fragment:yA,color_pars_fragment:SA,color_pars_vertex:bA,color_vertex:MA,common:EA,cube_uv_reflection_fragment:TA,defaultnormal_vertex:AA,displacementmap_pars_vertex:CA,displacementmap_vertex:wA,emissivemap_fragment:RA,emissivemap_pars_fragment:DA,colorspace_fragment:UA,colorspace_pars_fragment:NA,envmap_fragment:LA,envmap_common_pars_fragment:IA,envmap_pars_fragment:PA,envmap_pars_vertex:OA,envmap_physical_pars_fragment:YA,envmap_vertex:BA,fog_vertex:zA,fog_pars_vertex:FA,fog_fragment:VA,fog_pars_fragment:HA,gradientmap_pars_fragment:GA,lightmap_pars_fragment:kA,lights_lambert_fragment:WA,lights_lambert_pars_fragment:XA,lights_pars_begin:qA,lights_toon_fragment:ZA,lights_toon_pars_fragment:jA,lights_phong_fragment:KA,lights_phong_pars_fragment:JA,lights_physical_fragment:QA,lights_physical_pars_fragment:$A,lights_fragment_begin:t2,lights_fragment_maps:e2,lights_fragment_end:n2,logdepthbuf_fragment:i2,logdepthbuf_pars_fragment:s2,logdepthbuf_pars_vertex:a2,logdepthbuf_vertex:r2,map_fragment:o2,map_pars_fragment:l2,map_particle_fragment:c2,map_particle_pars_fragment:u2,metalnessmap_fragment:h2,metalnessmap_pars_fragment:f2,morphinstance_vertex:d2,morphcolor_vertex:p2,morphnormal_vertex:m2,morphtarget_pars_vertex:x2,morphtarget_vertex:g2,normal_fragment_begin:v2,normal_fragment_maps:_2,normal_pars_fragment:y2,normal_pars_vertex:S2,normal_vertex:b2,normalmap_pars_fragment:M2,clearcoat_normal_fragment_begin:E2,clearcoat_normal_fragment_maps:T2,clearcoat_pars_fragment:A2,iridescence_pars_fragment:C2,opaque_fragment:w2,packing:R2,premultiplied_alpha_fragment:D2,project_vertex:U2,dithering_fragment:N2,dithering_pars_fragment:L2,roughnessmap_fragment:I2,roughnessmap_pars_fragment:P2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:B2,shadowmap_vertex:z2,shadowmask_pars_fragment:F2,skinbase_vertex:V2,skinning_pars_vertex:H2,skinning_vertex:G2,skinnormal_vertex:k2,specularmap_fragment:W2,specularmap_pars_fragment:X2,tonemapping_fragment:q2,tonemapping_pars_fragment:Y2,transmission_fragment:Z2,transmission_pars_fragment:j2,uv_pars_fragment:K2,uv_pars_vertex:J2,uv_vertex:Q2,worldpos_vertex:$2,background_vert:tC,background_frag:eC,backgroundCube_vert:nC,backgroundCube_frag:iC,cube_vert:sC,cube_frag:aC,depth_vert:rC,depth_frag:oC,distanceRGBA_vert:lC,distanceRGBA_frag:cC,equirect_vert:uC,equirect_frag:hC,linedashed_vert:fC,linedashed_frag:dC,meshbasic_vert:pC,meshbasic_frag:mC,meshlambert_vert:xC,meshlambert_frag:gC,meshmatcap_vert:vC,meshmatcap_frag:_C,meshnormal_vert:yC,meshnormal_frag:SC,meshphong_vert:bC,meshphong_frag:MC,meshphysical_vert:EC,meshphysical_frag:TC,meshtoon_vert:AC,meshtoon_frag:CC,points_vert:wC,points_frag:RC,shadow_vert:DC,shadow_frag:UC,sprite_vert:NC,sprite_frag:LC},Dt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},$i={basic:{uniforms:Qn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Qn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new zt(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Qn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Qn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Qn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new zt(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Qn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Qn([Dt.points,Dt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Qn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Qn([Dt.common,Dt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Qn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Qn([Dt.sprite,Dt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Qn([Dt.common,Dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Qn([Dt.lights,Dt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};$i.physical={uniforms:Qn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Ku={r:0,b:0,g:0},lr=new Di,IC=new fe;function PC(s,t,e,n,i,r,l){const c=new zt(0);let h=r===!0?0:1,f,p,m=null,x=0,g=null;function y(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?e:t).get(A)),A}function M(T){let A=!1;const N=y(T);N===null?_(c,h):N&&N.isColor&&(_(N,1),A=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,l):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(T,A){const N=y(A);N&&(N.isCubeTexture||N.mapping===Go)?(p===void 0&&(p=new mn(new br(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:zo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(w,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),lr.copy(A.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(IC.makeRotationFromEuler(lr)),p.material.toneMapped=Re.getTransfer(N.colorSpace)!==Ge,(m!==N||x!==N.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,m=N,x=N.version,g=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new mn(new Xo(2,2),new fi({name:"BackgroundMaterial",uniforms:zo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.toneMapped=Re.getTransfer(N.colorSpace)!==Ge,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||x!==N.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,m=N,x=N.version,g=s.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function _(T,A){T.getRGB(Ku,Oy(s)),n.buffers.color.setClear(Ku.r,Ku.g,Ku.b,A,l)}function E(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,A=1){c.set(T),h=A,_(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,_(c,h)},render:M,addToRenderList:S,dispose:E}}function OC(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=x(null);let r=i,l=!1;function c(C,F,W,k,J){let nt=!1;const G=m(k,W,F);r!==G&&(r=G,f(r.object)),nt=g(C,k,W,J),nt&&y(C,k,W,J),J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),(nt||l)&&(l=!1,A(C,F,W,k),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function h(){return s.createVertexArray()}function f(C){return s.bindVertexArray(C)}function p(C){return s.deleteVertexArray(C)}function m(C,F,W){const k=W.wireframe===!0;let J=n[C.id];J===void 0&&(J={},n[C.id]=J);let nt=J[F.id];nt===void 0&&(nt={},J[F.id]=nt);let G=nt[k];return G===void 0&&(G=x(h()),nt[k]=G),G}function x(C){const F=[],W=[],k=[];for(let J=0;J<e;J++)F[J]=0,W[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:k,object:C,attributes:{},index:null}}function g(C,F,W,k){const J=r.attributes,nt=F.attributes;let G=0;const tt=W.getAttributes();for(const Z in tt)if(tt[Z].location>=0){const ct=J[Z];let _t=nt[Z];if(_t===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),ct===void 0||ct.attribute!==_t||_t&&ct.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function y(C,F,W,k){const J={},nt=F.attributes;let G=0;const tt=W.getAttributes();for(const Z in tt)if(tt[Z].location>=0){let ct=nt[Z];ct===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor));const _t={};_t.attribute=ct,ct&&ct.data&&(_t.data=ct.data),J[Z]=_t,G++}r.attributes=J,r.attributesNum=G,r.index=k}function M(){const C=r.newAttributes;for(let F=0,W=C.length;F<W;F++)C[F]=0}function S(C){_(C,0)}function _(C,F){const W=r.newAttributes,k=r.enabledAttributes,J=r.attributeDivisors;W[C]=1,k[C]===0&&(s.enableVertexAttribArray(C),k[C]=1),J[C]!==F&&(s.vertexAttribDivisor(C,F),J[C]=F)}function E(){const C=r.newAttributes,F=r.enabledAttributes;for(let W=0,k=F.length;W<k;W++)F[W]!==C[W]&&(s.disableVertexAttribArray(W),F[W]=0)}function T(C,F,W,k,J,nt,G){G===!0?s.vertexAttribIPointer(C,F,W,J,nt):s.vertexAttribPointer(C,F,W,k,J,nt)}function A(C,F,W,k){M();const J=k.attributes,nt=W.getAttributes(),G=F.defaultAttributeValues;for(const tt in nt){const Z=nt[tt];if(Z.location>=0){let at=J[tt];if(at===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(at=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(at=C.instanceColor)),at!==void 0){const ct=at.normalized,_t=at.itemSize,Vt=t.get(at);if(Vt===void 0)continue;const $t=Vt.buffer,Zt=Vt.type,me=Vt.bytesPerElement,ot=Zt===s.INT||Zt===s.UNSIGNED_INT||at.gpuType===sf;if(at.isInterleavedBufferAttribute){const pt=at.data,Lt=pt.stride,ee=at.offset;if(pt.isInstancedInterleavedBuffer){for(let jt=0;jt<Z.locationSize;jt++)_(Z.location+jt,pt.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let jt=0;jt<Z.locationSize;jt++)S(Z.location+jt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let jt=0;jt<Z.locationSize;jt++)T(Z.location+jt,_t/Z.locationSize,Zt,ct,Lt*me,(ee+_t/Z.locationSize*jt)*me,ot)}else{if(at.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)_(Z.location+pt,at.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<Z.locationSize;pt++)S(Z.location+pt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let pt=0;pt<Z.locationSize;pt++)T(Z.location+pt,_t/Z.locationSize,Zt,ct,_t*me,_t/Z.locationSize*pt*me,ot)}}else if(G!==void 0){const ct=G[tt];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(Z.location,ct);break;case 3:s.vertexAttrib3fv(Z.location,ct);break;case 4:s.vertexAttrib4fv(Z.location,ct);break;default:s.vertexAttrib1fv(Z.location,ct)}}}}E()}function N(){z();for(const C in n){const F=n[C];for(const W in F){const k=F[W];for(const J in k)p(k[J].object),delete k[J];delete F[W]}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const F=n[C.id];for(const W in F){const k=F[W];for(const J in k)p(k[J].object),delete k[J];delete F[W]}delete n[C.id]}function I(C){for(const F in n){const W=n[F];if(W[C.id]===void 0)continue;const k=W[C.id];for(const J in k)p(k[J].object),delete k[J];delete W[C.id]}}function z(){R(),l=!0,r!==i&&(r=i,f(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:z,resetDefaultState:R,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:E}}function BC(s,t,e){let n;function i(f){n=f}function r(f,p){s.drawArrays(n,f,p),e.update(p,n,1)}function l(f,p,m){m!==0&&(s.drawArraysInstanced(n,f,p,m),e.update(p,n,m))}function c(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,m);let g=0;for(let y=0;y<m;y++)g+=p[y];e.update(g,n,1)}function h(f,p,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<f.length;y++)l(f[y],p[y],x[y]);else{g.multiDrawArraysInstancedWEBGL(n,f,0,p,0,x,0,m);let y=0;for(let M=0;M<m;M++)y+=p[M]*x[M];e.update(y,n,1)}}this.setMode=i,this.render=r,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function zC(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(I){return!(I!==qn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const z=I===Ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Gi&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ti&&!z)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=h(f);p!==f&&(Nt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=e.logarithmicDepthBuffer===!0,x=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:g,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:N,maxSamples:w}}function FC(s){const t=this;let e=null,n=0,i=!1,r=!1;const l=new va,c=new ve,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const g=m.length!==0||x||n!==0||i;return i=x,n=m.length,g},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,x){e=p(m,x,0)},this.setState=function(m,x,g){const y=m.clippingPlanes,M=m.clipIntersection,S=m.clipShadows,_=s.get(m);if(!i||y===null||y.length===0||r&&!S)r?p(null):f();else{const E=r?0:n,T=E*4;let A=_.clippingState||null;h.value=A,A=p(y,x,T,g);for(let N=0;N!==T;++N)A[N]=e[N];_.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(m,x,g,y){const M=m!==null?m.length:0;let S=null;if(M!==0){if(S=h.value,y!==!0||S===null){const _=g+M*4,E=x.matrixWorldInverse;c.getNormalMatrix(E),(S===null||S.length<_)&&(S=new Float32Array(_));for(let T=0,A=g;T!==M;++T,A+=4)l.copy(m[T]).applyMatrix4(E,c),l.normal.toArray(S,A),S[A+3]=l.constant}h.value=S,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function VC(s){let t=new WeakMap;function e(l,c){return c===Yl?l.mapping=Xs:c===Zl&&(l.mapping=Ma),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Yl||c===Zl)if(t.has(l)){const h=t.get(l).texture;return e(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new zy(h.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",i),e(f.texture,l.mapping)}else return null}}return l}function i(l){const c=l.target;c.removeEventListener("dispose",i);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ba=4,jv=[.125,.215,.35,.446,.526,.582],hr=20,HC=256,Ll=new Mc,Kv=new zt;let Yp=null,Zp=0,jp=0,Kp=!1;const GC=new P;class Dm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:l=256,position:c=GC}=r;Yp=this._renderer.getRenderTarget(),Zp=this._renderer.getActiveCubeFace(),jp=this._renderer.getActiveMipmapLevel(),Kp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,i,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yp,Zp,jp),this._renderer.xr.enabled=Kp,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Ma?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yp=this._renderer.getRenderTarget(),Zp=this._renderer.getActiveCubeFace(),jp=this._renderer.getActiveMipmapLevel(),Kp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ca,format:qn,colorSpace:Ea,depthBuffer:!1},i=Jv(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kC(r)),this._blurMaterial=XC(r,t,e),this._ggxMaterial=WC(r,t,e)}return i}_compileMaterial(t){const e=new mn(new _e,t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,n,i,r){const h=new An(90,1,e,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,g=m.toneMapping;m.getClearColor(Kv),m.toneMapping=es,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(i),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new br,new Ra({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,S=M.material;let _=!1;const E=t.background;E?E.isColor&&(S.color.copy(E),t.background=null,_=!0):(S.color.copy(Kv),_=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(h.up.set(0,f[T],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+p[T],r.y,r.z)):A===1?(h.up.set(0,0,f[T]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+p[T],r.z)):(h.up.set(0,f[T],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+p[T]));const N=this._cubeSize;So(i,A*N,T>2?N:0,N,N),m.setRenderTarget(i),_&&m.render(M,h),m.render(t,h)}m.toneMapping=g,m.autoClear=x,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xs||t.mapping===Ma;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const r=i?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;const c=r.uniforms;c.envMap.value=t;const h=this._cubeSize;So(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(l,Ll)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const h=l.uniforms,f=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),m=Math.sqrt(f*f-p*p),x=.05+f*.95,g=m*x,{_lodMax:y}=this,M=this._sizeLods[n],S=3*M*(n>y-ba?n-y+ba:0),_=4*(this._cubeSize-M);h.envMap.value=t.texture,h.roughness.value=g,h.mipInt.value=y-e,So(r,S,_,3*M,2*M),i.setRenderTarget(r),i.render(c,Ll),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=y-n,So(t,S,_,3*M,2*M),i.setRenderTarget(t),i.render(c,Ll)}_blur(t,e,n,i,r){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,i,"latitudinal",r),this._halfBlur(l,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&pe("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[i];m.material=f;const x=f.uniforms,g=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*hr-1),M=r/y,S=isFinite(r)?1+Math.floor(p*M):hr;S>hr&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hr}`);const _=[];let E=0;for(let I=0;I<hr;++I){const z=I/M,R=Math.exp(-z*z/2);_.push(R),I===0?E+=R:I<S&&(E+=2*R)}for(let I=0;I<_.length;I++)_[I]=_[I]/E;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=l==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:T}=this;x.dTheta.value=y,x.mipInt.value=T-n;const A=this._sizeLods[i],N=3*A*(i>T-ba?i-T+ba:0),w=4*(this._cubeSize-A);So(e,N,w,3*A,2*A),h.setRenderTarget(e),h.render(m,Ll)}}function kC(s){const t=[],e=[],n=[];let i=s;const r=s-ba+1+jv.length;for(let l=0;l<r;l++){const c=Math.pow(2,i);t.push(c);let h=1/c;l>s-ba?h=jv[l-s+ba-1]:l===0&&(h=0),e.push(h);const f=1/(c-2),p=-f,m=1+f,x=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,y=6,M=3,S=2,_=1,E=new Float32Array(M*y*g),T=new Float32Array(S*y*g),A=new Float32Array(_*y*g);for(let w=0;w<g;w++){const I=w%3*2/3-1,z=w>2?0:-1,R=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];E.set(R,M*y*w),T.set(x,S*y*w);const C=[w,w,w,w,w,w];A.set(C,_*y*w)}const N=new _e;N.setAttribute("position",new Xe(E,M)),N.setAttribute("uv",new Xe(T,S)),N.setAttribute("faceIndex",new Xe(A,_)),n.push(new mn(N,null)),i>ba&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Jv(s,t,e){const n=new is(s,t,e);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function WC(s,t,e){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function XC(s,t,e){const n=new Float32Array(hr),i=new P(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Qv(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function $v(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qC(s){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===Yl||h===Zl,p=h===Xs||h===Ma;if(f||p){let m=t.get(c);const x=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return e===null&&(e=new Dm(s)),m=f?e.fromEquirectangular(c,m):e.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),m.texture;if(m!==void 0)return m.texture;{const g=c.image;return f&&g&&g.height>0||p&&g&&i(g)?(e===null&&(e=new Dm(s)),m=f?e.fromEquirectangular(c):e.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,t.set(c,m),c.addEventListener("dispose",r),m.texture):null}}}return c}function i(c){let h=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&h++;return h===f}function r(c){const h=c.target;h.removeEventListener("dispose",r);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function YC(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Io("WebGLRenderer: "+n+" extension not supported."),i}}}function ZC(s,t,e,n){const i={},r=new WeakMap;function l(m){const x=m.target;x.index!==null&&t.remove(x.index);for(const y in x.attributes)t.remove(x.attributes[y]);x.removeEventListener("dispose",l),delete i[x.id];const g=r.get(x);g&&(t.remove(g),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(m,x){return i[x.id]===!0||(x.addEventListener("dispose",l),i[x.id]=!0,e.memory.geometries++),x}function h(m){const x=m.attributes;for(const g in x)t.update(x[g],s.ARRAY_BUFFER)}function f(m){const x=[],g=m.index,y=m.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let T=0,A=E.length;T<A;T+=3){const N=E[T+0],w=E[T+1],I=E[T+2];x.push(N,w,w,I,I,N)}}else if(y!==void 0){const E=y.array;M=y.version;for(let T=0,A=E.length/3-1;T<A;T+=3){const N=T+0,w=T+1,I=T+2;x.push(N,w,w,I,I,N)}}else return;const S=new(Ny(x)?$m:Qm)(x,1);S.version=M;const _=r.get(m);_&&t.remove(_),r.set(m,S)}function p(m){const x=r.get(m);if(x){const g=m.index;g!==null&&x.version<g.version&&f(m)}else f(m);return r.get(m)}return{get:c,update:h,getWireframeAttribute:p}}function jC(s,t,e){let n;function i(x){n=x}let r,l;function c(x){r=x.type,l=x.bytesPerElement}function h(x,g){s.drawElements(n,g,r,x*l),e.update(g,n,1)}function f(x,g,y){y!==0&&(s.drawElementsInstanced(n,g,r,x*l,y),e.update(g,n,y))}function p(x,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,x,0,y);let S=0;for(let _=0;_<y;_++)S+=g[_];e.update(S,n,1)}function m(x,g,y,M){if(y===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)f(x[_]/l,g[_],M[_]);else{S.multiDrawElementsInstancedWEBGL(n,g,0,r,x,0,M,0,y);let _=0;for(let E=0;E<y;E++)_+=g[E]*M[E];e.update(_,n,1)}}this.setMode=i,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function KC(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,c){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=c*(r/3);break;case s.LINES:e.lines+=c*(r/2);break;case s.LINE_STRIP:e.lines+=c*(r-1);break;case s.LINE_LOOP:e.lines+=c*r;break;case s.POINTS:e.points+=c*r;break;default:pe("WebGLInfo: Unknown draw mode:",l);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function JC(s,t,e){const n=new WeakMap,i=new Te;function r(l,c,h){const f=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let x=n.get(c);if(x===void 0||x.count!==m){let R=function(){I.dispose(),n.delete(c),c.removeEventListener("dispose",R)};x!==void 0&&x.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let T=0;g===!0&&(T=1),y===!0&&(T=2),M===!0&&(T=3);let A=c.attributes.position.count*T,N=1;A>t.maxTextureSize&&(N=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*N*4*m),I=new ff(w,A,N,m);I.type=ti,I.needsUpdate=!0;const z=T*4;for(let C=0;C<m;C++){const F=S[C],W=_[C],k=E[C],J=A*N*4*C;for(let nt=0;nt<F.count;nt++){const G=nt*z;g===!0&&(i.fromBufferAttribute(F,nt),w[J+G+0]=i.x,w[J+G+1]=i.y,w[J+G+2]=i.z,w[J+G+3]=0),y===!0&&(i.fromBufferAttribute(W,nt),w[J+G+4]=i.x,w[J+G+5]=i.y,w[J+G+6]=i.z,w[J+G+7]=0),M===!0&&(i.fromBufferAttribute(k,nt),w[J+G+8]=i.x,w[J+G+9]=i.y,w[J+G+10]=i.z,w[J+G+11]=k.itemSize===4?i.w:1)}}x={count:m,texture:I,size:new ht(A,N)},n.set(c,x),c.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let g=0;for(let M=0;M<f.length;M++)g+=f[M];const y=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",f)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:r}}function QC(s,t,e,n){let i=new WeakMap;function r(h){const f=n.render.frame,p=h.geometry,m=t.get(h,p);if(i.get(m)!==f&&(t.update(m),i.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),i.get(h)!==f&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),i.set(h,f))),h.isSkinnedMesh){const x=h.skeleton;i.get(x)!==f&&(x.update(),i.set(x,f))}return m}function l(){i=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:r,dispose:l}}const PS=new cn,t_=new Sf(1,1),OS=new ff,BS=new df,zS=new xc,e_=[],n_=[],i_=new Float32Array(16),s_=new Float32Array(9),a_=new Float32Array(4);function qo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=e_[i];if(r===void 0&&(r=new Float32Array(i),e_[i]=r),t!==0){n.toArray(r,0);for(let l=1,c=0;l!==t;++l)c+=e,s[l].toArray(r,c)}return r}function _n(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function yn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zf(s,t){let e=n_[t];e===void 0&&(e=new Int32Array(t),n_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function $C(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;s.uniform2fv(this.addr,t),yn(e,t)}}function ew(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;s.uniform3fv(this.addr,t),yn(e,t)}}function nw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;s.uniform4fv(this.addr,t),yn(e,t)}}function iw(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,n))return;a_.set(n),s.uniformMatrix2fv(this.addr,!1,a_),yn(e,n)}}function sw(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,n))return;s_.set(n),s.uniformMatrix3fv(this.addr,!1,s_),yn(e,n)}}function aw(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,n))return;i_.set(n),s.uniformMatrix4fv(this.addr,!1,i_),yn(e,n)}}function rw(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ow(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;s.uniform2iv(this.addr,t),yn(e,t)}}function lw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;s.uniform3iv(this.addr,t),yn(e,t)}}function cw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;s.uniform4iv(this.addr,t),yn(e,t)}}function uw(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;s.uniform2uiv(this.addr,t),yn(e,t)}}function fw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;s.uniform3uiv(this.addr,t),yn(e,t)}}function dw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;s.uniform4uiv(this.addr,t),yn(e,t)}}function pw(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(t_.compareFunction=jm,r=t_):r=PS,e.setTexture2D(t||r,i)}function mw(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||BS,i)}function xw(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zS,i)}function gw(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||OS,i)}function vw(s){switch(s){case 5126:return $C;case 35664:return tw;case 35665:return ew;case 35666:return nw;case 35674:return iw;case 35675:return sw;case 35676:return aw;case 5124:case 35670:return rw;case 35667:case 35671:return ow;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return hw;case 36295:return fw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return gw}}function _w(s,t){s.uniform1fv(this.addr,t)}function yw(s,t){const e=qo(t,this.size,2);s.uniform2fv(this.addr,e)}function Sw(s,t){const e=qo(t,this.size,3);s.uniform3fv(this.addr,e)}function bw(s,t){const e=qo(t,this.size,4);s.uniform4fv(this.addr,e)}function Mw(s,t){const e=qo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ew(s,t){const e=qo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tw(s,t){const e=qo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Aw(s,t){s.uniform1iv(this.addr,t)}function Cw(s,t){s.uniform2iv(this.addr,t)}function ww(s,t){s.uniform3iv(this.addr,t)}function Rw(s,t){s.uniform4iv(this.addr,t)}function Dw(s,t){s.uniform1uiv(this.addr,t)}function Uw(s,t){s.uniform2uiv(this.addr,t)}function Nw(s,t){s.uniform3uiv(this.addr,t)}function Lw(s,t){s.uniform4uiv(this.addr,t)}function Iw(s,t,e){const n=this.cache,i=t.length,r=zf(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let l=0;l!==i;++l)e.setTexture2D(t[l]||PS,r[l])}function Pw(s,t,e){const n=this.cache,i=t.length,r=zf(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let l=0;l!==i;++l)e.setTexture3D(t[l]||BS,r[l])}function Ow(s,t,e){const n=this.cache,i=t.length,r=zf(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let l=0;l!==i;++l)e.setTextureCube(t[l]||zS,r[l])}function Bw(s,t,e){const n=this.cache,i=t.length,r=zf(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),yn(n,r));for(let l=0;l!==i;++l)e.setTexture2DArray(t[l]||OS,r[l])}function zw(s){switch(s){case 5126:return _w;case 35664:return yw;case 35665:return Sw;case 35666:return bw;case 35674:return Mw;case 35675:return Ew;case 35676:return Tw;case 5124:case 35670:return Aw;case 35667:case 35671:return Cw;case 35668:case 35672:return ww;case 35669:case 35673:return Rw;case 5125:return Dw;case 36294:return Uw;case 36295:return Nw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Bw}}class Fw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vw(e.type)}}class Vw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zw(e.type)}}class Hw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,l=i.length;r!==l;++r){const c=i[r];c.setValue(t,e[c.id],n)}}}const Jp=/(\w+)(\])?(\[|\.)?/g;function r_(s,t){s.seq.push(t),s.map[t.id]=t}function Gw(s,t,e){const n=s.name,i=n.length;for(Jp.lastIndex=0;;){const r=Jp.exec(n),l=Jp.lastIndex;let c=r[1];const h=r[2]==="]",f=r[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===i){r_(e,f===void 0?new Fw(c,s,t):new Vw(c,s,t));break}else{let m=e.map[c];m===void 0&&(m=new Hw(c),r_(e,m)),e=m}}}class rh{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),l=t.getUniformLocation(e,r.name);Gw(r,l,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,l=e.length;r!==l;++r){const c=e[r],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const l=t[i];l.id in e&&n.push(l)}return n}}function o_(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const kw=37297;let Ww=0;function Xw(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let l=i;l<r;l++){const c=l+1;n.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return n.join(`
`)}const l_=new ve;function qw(s){Re._getMatrix(l_,Re.workingColorSpace,s);const t=`mat3( ${l_.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(s)){case $l:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function c_(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const c=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+Xw(s.getShaderSource(t),c)}else return r}function Yw(s,t){const e=qw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zw(s,t){let e;switch(t){case fy:e="Linear";break;case dy:e="Reinhard";break;case py:e="Cineon";break;case Vm:e="ACESFilmic";break;case xy:e="AgX";break;case gy:e="Neutral";break;case my:e="Custom";break;default:Nt("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ju=new P;function jw(){Re.getLuminanceCoefficients(Ju);const s=Ju.x.toFixed(4),t=Ju.y.toFixed(4),e=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function Jw(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qw(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),l=r.name;let c=1;r.type===s.FLOAT_MAT2&&(c=2),r.type===s.FLOAT_MAT3&&(c=3),r.type===s.FLOAT_MAT4&&(c=4),e[l]={type:r.type,location:s.getAttribLocation(t,l),locationSize:c}}return e}function Ol(s){return s!==""}function u_(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Um(s){return s.replace($w,eR)}const tR=new Map;function eR(s,t){let e=be[t];if(e===void 0){const n=tR.get(t);if(n!==void 0)e=be[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Um(e)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f_(s){return s.replace(nR,iR)}function iR(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function d_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ef?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(t="SHADOWMAP_TYPE_VSM"),t}function aR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case Ma:t="ENVMAP_TYPE_CUBE";break;case Go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rR(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ma&&(t="ENVMAP_MODE_REFRACTION"),t}function oR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pc:t="ENVMAP_BLENDING_MULTIPLY";break;case uy:t="ENVMAP_BLENDING_MIX";break;case hy:t="ENVMAP_BLENDING_ADD";break}return t}function lR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cR(s,t,e,n){const i=s.getContext(),r=e.defines;let l=e.vertexShader,c=e.fragmentShader;const h=sR(e),f=aR(e),p=rR(e),m=oR(e),x=lR(e),g=Kw(e),y=Jw(r),M=i.createProgram();let S,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ol).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ol).join(`
`),_.length>0&&(_+=`
`)):(S=[d_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),_=[d_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==es?"#define TONE_MAPPING":"",e.toneMapping!==es?be.tonemapping_pars_fragment:"",e.toneMapping!==es?Zw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,Yw("linearToOutputTexel",e.outputColorSpace),jw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ol).join(`
`)),l=Um(l),l=u_(l,e),l=h_(l,e),c=Um(c),c=u_(c,e),c=h_(c,e),l=f_(l),c=f_(c),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,S=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",e.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=E+S+l,A=E+_+c,N=o_(i,i.VERTEX_SHADER,T),w=o_(i,i.FRAGMENT_SHADER,A);i.attachShader(M,N),i.attachShader(M,w),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function I(F){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(M)||"",k=i.getShaderInfoLog(N)||"",J=i.getShaderInfoLog(w)||"",nt=W.trim(),G=k.trim(),tt=J.trim();let Z=!0,at=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,N,w);else{const ct=c_(i,N,"vertex"),_t=c_(i,w,"fragment");pe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+nt+`
`+ct+`
`+_t)}else nt!==""?Nt("WebGLProgram: Program Info Log:",nt):(G===""||tt==="")&&(at=!1);at&&(F.diagnostics={runnable:Z,programLog:nt,vertexShader:{log:G,prefix:S},fragmentShader:{log:tt,prefix:_}})}i.deleteShader(N),i.deleteShader(w),z=new rh(i,M),R=Qw(i,M)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(M,kw)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ww++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=w,this}let uR=0;class hR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fR(t),e.set(t,n)),n}}class fR{constructor(t){this.id=uR++,this.code=t,this.usedTimes=0}}function dR(s,t,e,n,i,r,l){const c=new Bo,h=new hR,f=new Set,p=[],m=i.logarithmicDepthBuffer,x=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return f.add(R),R===0?"uv":`uv${R}`}function S(R,C,F,W,k){const J=W.fog,nt=k.geometry,G=R.isMeshStandardMaterial?W.environment:null,tt=(R.isMeshStandardMaterial?e:t).get(R.envMap||G),Z=tt&&tt.mapping===Go?tt.image.height:null,at=y[R.type];R.precision!==null&&(g=i.getMaxPrecision(R.precision),g!==R.precision&&Nt("WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const ct=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,_t=ct!==void 0?ct.length:0;let Vt=0;nt.morphAttributes.position!==void 0&&(Vt=1),nt.morphAttributes.normal!==void 0&&(Vt=2),nt.morphAttributes.color!==void 0&&(Vt=3);let $t,Zt,me,ot;if(at){const Ne=$i[at];$t=Ne.vertexShader,Zt=Ne.fragmentShader}else $t=R.vertexShader,Zt=R.fragmentShader,h.update(R),me=h.getVertexShaderID(R),ot=h.getFragmentShaderID(R);const pt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),ee=k.isInstancedMesh===!0,jt=k.isBatchedMesh===!0,ge=!!R.map,Ue=!!R.matcap,re=!!tt,mt=!!R.aoMap,B=!!R.lightMap,xt=!!R.bumpMap,gt=!!R.normalMap,Tt=!!R.displacementMap,vt=!!R.emissiveMap,It=!!R.metalnessMap,At=!!R.roughnessMap,Gt=R.anisotropy>0,O=R.clearcoat>0,D=R.dispersion>0,K=R.iridescence>0,rt=R.sheen>0,dt=R.transmission>0,st=Gt&&!!R.anisotropyMap,Kt=O&&!!R.clearcoatMap,Rt=O&&!!R.clearcoatNormalMap,Qt=O&&!!R.clearcoatRoughnessMap,qt=K&&!!R.iridescenceMap,ft=K&&!!R.iridescenceThicknessMap,bt=rt&&!!R.sheenColorMap,ie=rt&&!!R.sheenRoughnessMap,se=!!R.specularMap,Pt=!!R.specularColorMap,oe=!!R.specularIntensityMap,H=dt&&!!R.transmissionMap,Ut=dt&&!!R.thicknessMap,Ct=!!R.gradientMap,wt=!!R.alphaMap,yt=R.alphaTest>0,ut=!!R.alphaHash,Yt=!!R.extensions;let ue=es;R.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const ze={shaderID:at,shaderType:R.type,shaderName:R.name,vertexShader:$t,fragmentShader:Zt,defines:R.defines,customVertexShaderID:me,customFragmentShaderID:ot,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:jt,batchingColor:jt&&k._colorsTexture!==null,instancing:ee,instancingColor:ee&&k.instanceColor!==null,instancingMorph:ee&&k.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ea,alphaToCoverage:!!R.alphaToCoverage,map:ge,matcap:Ue,envMap:re,envMapMode:re&&tt.mapping,envMapCubeUVHeight:Z,aoMap:mt,lightMap:B,bumpMap:xt,normalMap:gt,displacementMap:x&&Tt,emissiveMap:vt,normalMapObjectSpace:gt&&R.normalMapType===Ey,normalMapTangentSpace:gt&&R.normalMapType===wa,metalnessMap:It,roughnessMap:At,anisotropy:Gt,anisotropyMap:st,clearcoat:O,clearcoatMap:Kt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Qt,dispersion:D,iridescence:K,iridescenceMap:qt,iridescenceThicknessMap:ft,sheen:rt,sheenColorMap:bt,sheenRoughnessMap:ie,specularMap:se,specularColorMap:Pt,specularIntensityMap:oe,transmission:dt,transmissionMap:H,thicknessMap:Ut,gradientMap:Ct,opaque:R.transparent===!1&&R.blending===mr&&R.alphaToCoverage===!1,alphaMap:wt,alphaTest:yt,alphaHash:ut,combine:R.combine,mapUv:ge&&M(R.map.channel),aoMapUv:mt&&M(R.aoMap.channel),lightMapUv:B&&M(R.lightMap.channel),bumpMapUv:xt&&M(R.bumpMap.channel),normalMapUv:gt&&M(R.normalMap.channel),displacementMapUv:Tt&&M(R.displacementMap.channel),emissiveMapUv:vt&&M(R.emissiveMap.channel),metalnessMapUv:It&&M(R.metalnessMap.channel),roughnessMapUv:At&&M(R.roughnessMap.channel),anisotropyMapUv:st&&M(R.anisotropyMap.channel),clearcoatMapUv:Kt&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:ie&&M(R.sheenRoughnessMap.channel),specularMapUv:se&&M(R.specularMap.channel),specularColorMapUv:Pt&&M(R.specularColorMap.channel),specularIntensityMapUv:oe&&M(R.specularIntensityMap.channel),transmissionMapUv:H&&M(R.transmissionMap.channel),thicknessMapUv:Ut&&M(R.thicknessMap.channel),alphaMapUv:wt&&M(R.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(gt||Gt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!nt.attributes.uv&&(ge||wt),fog:!!J,useFog:R.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Lt,skinning:k.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ge&&R.map.isVideoTexture===!0&&Re.getTransfer(R.map.colorSpace)===Ge,decodeVideoTextureEmissive:vt&&R.emissiveMap.isVideoTexture===!0&&Re.getTransfer(R.emissiveMap.colorSpace)===Ge,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ds,flipSided:R.side===Yn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Yt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&R.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return ze.vertexUv1s=f.has(1),ze.vertexUv2s=f.has(2),ze.vertexUv3s=f.has(3),f.clear(),ze}function _(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)C.push(F),C.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(E(C,R),T(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function E(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function T(R,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),C.gradientMap&&c.enable(22),R.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),R.push(c.mask)}function A(R){const C=y[R.type];let F;if(C){const W=$i[C];F=ic.clone(W.uniforms)}else F=R.uniforms;return F}function N(R,C){let F;for(let W=0,k=p.length;W<k;W++){const J=p[W];if(J.cacheKey===C){F=J,++F.usedTimes;break}}return F===void 0&&(F=new cR(s,C,R,r),p.push(F)),F}function w(R){if(--R.usedTimes===0){const C=p.indexOf(R);p[C]=p[p.length-1],p.pop(),R.destroy()}}function I(R){h.remove(R)}function z(){h.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:A,acquireProgram:N,releaseProgram:w,releaseShaderCache:I,programs:p,dispose:z}}function pR(){let s=new WeakMap;function t(l){return s.has(l)}function e(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function i(l,c,h){s.get(l)[c]=h}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function mR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function p_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function m_(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function l(m,x,g,y,M,S){let _=s[t];return _===void 0?(_={id:m.id,object:m,geometry:x,material:g,groupOrder:y,renderOrder:m.renderOrder,z:M,group:S},s[t]=_):(_.id=m.id,_.object=m,_.geometry=x,_.material=g,_.groupOrder=y,_.renderOrder=m.renderOrder,_.z=M,_.group=S),t++,_}function c(m,x,g,y,M,S){const _=l(m,x,g,y,M,S);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):e.push(_)}function h(m,x,g,y,M,S){const _=l(m,x,g,y,M,S);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):e.unshift(_)}function f(m,x){e.length>1&&e.sort(m||mR),n.length>1&&n.sort(x||p_),i.length>1&&i.sort(x||p_)}function p(){for(let m=t,x=s.length;m<x;m++){const g=s[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:h,finish:p,sort:f}}function xR(){let s=new WeakMap;function t(n,i){const r=s.get(n);let l;return r===void 0?(l=new m_,s.set(n,[l])):i>=r.length?(l=new m_,r.push(l)):l=r[i],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function gR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function vR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let _R=0;function yR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function SR(s){const t=new gR,e=vR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new P);const i=new P,r=new fe,l=new fe;function c(f){let p=0,m=0,x=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let g=0,y=0,M=0,S=0,_=0,E=0,T=0,A=0,N=0,w=0,I=0;f.sort(yR);for(let R=0,C=f.length;R<C;R++){const F=f[R],W=F.color,k=F.intensity,J=F.distance,nt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=W.r*k,m+=W.g*k,x+=W.b*k;else if(F.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(F.sh.coefficients[G],k);I++}else if(F.isDirectionalLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const tt=F.shadow,Z=e.get(F);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=F.shadow.matrix,E++}n.directional[g]=G,g++}else if(F.isSpotLight){const G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(W).multiplyScalar(k),G.distance=J,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,n.spot[M]=G;const tt=F.shadow;if(F.map&&(n.spotLightMap[N]=F.map,N++,tt.updateMatrices(F),F.castShadow&&w++),n.spotLightMatrix[M]=tt.matrix,F.castShadow){const Z=e.get(F);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,n.spotShadow[M]=Z,n.spotShadowMap[M]=nt,A++}M++}else if(F.isRectAreaLight){const G=t.get(F);G.color.copy(W).multiplyScalar(k),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),n.rectArea[S]=G,S++}else if(F.isPointLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const tt=F.shadow,Z=e.get(F);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,Z.shadowCameraNear=tt.camera.near,Z.shadowCameraFar=tt.camera.far,n.pointShadow[y]=Z,n.pointShadowMap[y]=nt,n.pointShadowMatrix[y]=F.shadow.matrix,T++}n.point[y]=G,y++}else if(F.isHemisphereLight){const G=t.get(F);G.skyColor.copy(F.color).multiplyScalar(k),G.groundColor.copy(F.groundColor).multiplyScalar(k),n.hemi[_]=G,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=x;const z=n.hash;(z.directionalLength!==g||z.pointLength!==y||z.spotLength!==M||z.rectAreaLength!==S||z.hemiLength!==_||z.numDirectionalShadows!==E||z.numPointShadows!==T||z.numSpotShadows!==A||z.numSpotMaps!==N||z.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=S,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=A+N-w,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,z.directionalLength=g,z.pointLength=y,z.spotLength=M,z.rectAreaLength=S,z.hemiLength=_,z.numDirectionalShadows=E,z.numPointShadows=T,z.numSpotShadows=A,z.numSpotMaps=N,z.numLightProbes=I,n.version=_R++)}function h(f,p){let m=0,x=0,g=0,y=0,M=0;const S=p.matrixWorldInverse;for(let _=0,E=f.length;_<E;_++){const T=f[_];if(T.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(S),m++}else if(T.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(S),g++}else if(T.isRectAreaLight){const A=n.rectArea[y];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(S),l.identity(),r.copy(T.matrixWorld),r.premultiply(S),l.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),y++}else if(T.isPointLight){const A=n.point[x];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(S),x++}else if(T.isHemisphereLight){const A=n.hemi[M];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:c,setupView:h,state:n}}function x_(s){const t=new SR(s),e=[],n=[];function i(p){f.camera=p,e.length=0,n.length=0}function r(p){e.push(p)}function l(p){n.push(p)}function c(){t.setup(e)}function h(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:l}}function bR(s){let t=new WeakMap;function e(i,r=0){const l=t.get(i);let c;return l===void 0?(c=new x_(s),t.set(i,[c])):r>=l.length?(c=new x_(s),l.push(c)):c=l[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}const MR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ER=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TR(s,t,e){let n=new Wo;const i=new ht,r=new ht,l=new Te,c=new p0({depthPacking:My}),h=new m0,f={},p=e.maxTextureSize,m={[vs]:Yn,[Yn]:vs,[ds]:ds},x=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:MR,fragmentShader:ER}),g=x.clone();g.defines.HORIZONTAL_PASS=1;const y=new _e;y.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new mn(y,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let _=this.type;this.render=function(w,I,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||w.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),W=s.state;W.setBlending(gs),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=_!==Qi&&this.type===Qi,J=_===Qi&&this.type!==Qi;for(let nt=0,G=w.length;nt<G;nt++){const tt=w[nt],Z=tt.shadow;if(Z===void 0){Nt("WebGLShadowMap:",tt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const at=Z.getFrameExtents();if(i.multiply(at),r.copy(Z.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(r.x=Math.floor(p/at.x),i.x=r.x*at.x,Z.mapSize.x=r.x),i.y>p&&(r.y=Math.floor(p/at.y),i.y=r.y*at.y,Z.mapSize.y=r.y)),Z.map===null||k===!0||J===!0){const _t=this.type!==Qi?{minFilter:In,magFilter:In}:{};Z.map!==null&&Z.map.dispose(),Z.map=new is(i.x,i.y,_t),Z.map.texture.name=tt.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const ct=Z.getViewportCount();for(let _t=0;_t<ct;_t++){const Vt=Z.getViewport(_t);l.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),W.viewport(l),Z.updateMatrices(tt,_t),n=Z.getFrustum(),A(I,z,Z.camera,tt,this.type)}Z.isPointLightShadow!==!0&&this.type===Qi&&E(Z,z),Z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(R,C,F)};function E(w,I){const z=t.update(M);x.defines.VSM_SAMPLES!==w.blurSamples&&(x.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,x.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(i.x,i.y)),x.uniforms.shadow_pass.value=w.map.texture,x.uniforms.resolution.value=w.mapSize,x.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(I,null,z,x,M,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(I,null,z,g,M,null)}function T(w,I,z,R){let C=null;const F=z.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)C=F;else if(C=z.isPointLight===!0?h:c,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=C.uuid,k=I.uuid;let J=f[W];J===void 0&&(J={},f[W]=J);let nt=J[k];nt===void 0&&(nt=C.clone(),J[k]=nt,I.addEventListener("dispose",N)),C=nt}if(C.visible=I.visible,C.wireframe=I.wireframe,R===Qi?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:m[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const W=s.properties.get(C);W.light=z}return C}function A(w,I,z,R,C){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Qi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld);const k=t.update(w),J=w.material;if(Array.isArray(J)){const nt=k.groups;for(let G=0,tt=nt.length;G<tt;G++){const Z=nt[G],at=J[Z.materialIndex];if(at&&at.visible){const ct=T(w,at,R,C);w.onBeforeShadow(s,w,I,z,k,ct,Z),s.renderBufferDirect(z,null,k,ct,w,Z),w.onAfterShadow(s,w,I,z,k,ct,Z)}}}else if(J.visible){const nt=T(w,J,R,C);w.onBeforeShadow(s,w,I,z,k,nt,null),s.renderBufferDirect(z,null,k,nt,w,null),w.onAfterShadow(s,w,I,z,k,nt,null)}}const W=w.children;for(let k=0,J=W.length;k<J;k++)A(W[k],I,z,R,C)}function N(w){w.target.removeEventListener("dispose",N);for(const z in f){const R=f[z],C=w.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const AR={[uh]:hh,[fh]:mh,[dh]:xh,[_r]:ph,[hh]:uh,[mh]:fh,[xh]:dh,[ph]:_r};function CR(s,t){function e(){let H=!1;const Ut=new Te;let Ct=null;const wt=new Te(0,0,0,0);return{setMask:function(yt){Ct!==yt&&!H&&(s.colorMask(yt,yt,yt,yt),Ct=yt)},setLocked:function(yt){H=yt},setClear:function(yt,ut,Yt,ue,ze){ze===!0&&(yt*=ue,ut*=ue,Yt*=ue),Ut.set(yt,ut,Yt,ue),wt.equals(Ut)===!1&&(s.clearColor(yt,ut,Yt,ue),wt.copy(Ut))},reset:function(){H=!1,Ct=null,wt.set(-1,0,0,0)}}}function n(){let H=!1,Ut=!1,Ct=null,wt=null,yt=null;return{setReversed:function(ut){if(Ut!==ut){const Yt=t.get("EXT_clip_control");ut?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Ut=ut;const ue=yt;yt=null,this.setClear(ue)}},getReversed:function(){return Ut},setTest:function(ut){ut?pt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(ut){Ct!==ut&&!H&&(s.depthMask(ut),Ct=ut)},setFunc:function(ut){if(Ut&&(ut=AR[ut]),wt!==ut){switch(ut){case uh:s.depthFunc(s.NEVER);break;case hh:s.depthFunc(s.ALWAYS);break;case fh:s.depthFunc(s.LESS);break;case _r:s.depthFunc(s.LEQUAL);break;case dh:s.depthFunc(s.EQUAL);break;case ph:s.depthFunc(s.GEQUAL);break;case mh:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=ut}},setLocked:function(ut){H=ut},setClear:function(ut){yt!==ut&&(Ut&&(ut=1-ut),s.clearDepth(ut),yt=ut)},reset:function(){H=!1,Ct=null,wt=null,yt=null,Ut=!1}}}function i(){let H=!1,Ut=null,Ct=null,wt=null,yt=null,ut=null,Yt=null,ue=null,ze=null;return{setTest:function(Ne){H||(Ne?pt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(Ne){Ut!==Ne&&!H&&(s.stencilMask(Ne),Ut=Ne)},setFunc:function(Ne,pi,ni){(Ct!==Ne||wt!==pi||yt!==ni)&&(s.stencilFunc(Ne,pi,ni),Ct=Ne,wt=pi,yt=ni)},setOp:function(Ne,pi,ni){(ut!==Ne||Yt!==pi||ue!==ni)&&(s.stencilOp(Ne,pi,ni),ut=Ne,Yt=pi,ue=ni)},setLocked:function(Ne){H=Ne},setClear:function(Ne){ze!==Ne&&(s.clearStencil(Ne),ze=Ne)},reset:function(){H=!1,Ut=null,Ct=null,wt=null,yt=null,ut=null,Yt=null,ue=null,ze=null}}}const r=new e,l=new n,c=new i,h=new WeakMap,f=new WeakMap;let p={},m={},x=new WeakMap,g=[],y=null,M=!1,S=null,_=null,E=null,T=null,A=null,N=null,w=null,I=new zt(0,0,0),z=0,R=!1,C=null,F=null,W=null,k=null,J=null;const nt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,tt=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=tt>=1):Z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=tt>=2);let at=null,ct={};const _t=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),$t=new Te().fromArray(_t),Zt=new Te().fromArray(Vt);function me(H,Ut,Ct,wt){const yt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(H,ut),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Ct;Yt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(Ut+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return ut}const ot={};ot[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(s.DEPTH_TEST),l.setFunc(_r),xt(!1),gt(xm),pt(s.CULL_FACE),mt(gs);function pt(H){p[H]!==!0&&(s.enable(H),p[H]=!0)}function Lt(H){p[H]!==!1&&(s.disable(H),p[H]=!1)}function ee(H,Ut){return m[H]!==Ut?(s.bindFramebuffer(H,Ut),m[H]=Ut,H===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ut),H===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function jt(H,Ut){let Ct=g,wt=!1;if(H){Ct=x.get(Ut),Ct===void 0&&(Ct=[],x.set(Ut,Ct));const yt=H.textures;if(Ct.length!==yt.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Yt=yt.length;ut<Yt;ut++)Ct[ut]=s.COLOR_ATTACHMENT0+ut;Ct.length=yt.length,wt=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,wt=!0);wt&&s.drawBuffers(Ct)}function ge(H){return y!==H?(s.useProgram(H),y=H,!0):!1}const Ue={[_a]:s.FUNC_ADD,[Y_]:s.FUNC_SUBTRACT,[Z_]:s.FUNC_REVERSE_SUBTRACT};Ue[j_]=s.MIN,Ue[K_]=s.MAX;const re={[J_]:s.ZERO,[Q_]:s.ONE,[$_]:s.SRC_COLOR,[lh]:s.SRC_ALPHA,[ay]:s.SRC_ALPHA_SATURATE,[iy]:s.DST_COLOR,[ey]:s.DST_ALPHA,[ty]:s.ONE_MINUS_SRC_COLOR,[ch]:s.ONE_MINUS_SRC_ALPHA,[sy]:s.ONE_MINUS_DST_COLOR,[ny]:s.ONE_MINUS_DST_ALPHA,[ry]:s.CONSTANT_COLOR,[oy]:s.ONE_MINUS_CONSTANT_COLOR,[ly]:s.CONSTANT_ALPHA,[cy]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(H,Ut,Ct,wt,yt,ut,Yt,ue,ze,Ne){if(H===gs){M===!0&&(Lt(s.BLEND),M=!1);return}if(M===!1&&(pt(s.BLEND),M=!0),H!==q_){if(H!==S||Ne!==R){if((_!==_a||A!==_a)&&(s.blendEquation(s.FUNC_ADD),_=_a,A=_a),Ne)switch(H){case mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFunc(s.ONE,s.ONE);break;case vm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _m:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:pe("WebGLState: Invalid blending: ",H);break}else switch(H){case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vm:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _m:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",H);break}E=null,T=null,N=null,w=null,I.set(0,0,0),z=0,S=H,R=Ne}return}yt=yt||Ut,ut=ut||Ct,Yt=Yt||wt,(Ut!==_||yt!==A)&&(s.blendEquationSeparate(Ue[Ut],Ue[yt]),_=Ut,A=yt),(Ct!==E||wt!==T||ut!==N||Yt!==w)&&(s.blendFuncSeparate(re[Ct],re[wt],re[ut],re[Yt]),E=Ct,T=wt,N=ut,w=Yt),(ue.equals(I)===!1||ze!==z)&&(s.blendColor(ue.r,ue.g,ue.b,ze),I.copy(ue),z=ze),S=H,R=!1}function B(H,Ut){H.side===ds?Lt(s.CULL_FACE):pt(s.CULL_FACE);let Ct=H.side===Yn;Ut&&(Ct=!Ct),xt(Ct),H.blending===mr&&H.transparent===!1?mt(gs):mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),r.setMask(H.colorWrite);const wt=H.stencilWrite;c.setTest(wt),wt&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function gt(H){H!==k_?(pt(s.CULL_FACE),H!==F&&(H===xm?s.cullFace(s.BACK):H===W_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),F=H}function Tt(H){H!==W&&(G&&s.lineWidth(H),W=H)}function vt(H,Ut,Ct){H?(pt(s.POLYGON_OFFSET_FILL),(k!==Ut||J!==Ct)&&(s.polygonOffset(Ut,Ct),k=Ut,J=Ct)):Lt(s.POLYGON_OFFSET_FILL)}function It(H){H?pt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function At(H){H===void 0&&(H=s.TEXTURE0+nt-1),at!==H&&(s.activeTexture(H),at=H)}function Gt(H,Ut,Ct){Ct===void 0&&(at===null?Ct=s.TEXTURE0+nt-1:Ct=at);let wt=ct[Ct];wt===void 0&&(wt={type:void 0,texture:void 0},ct[Ct]=wt),(wt.type!==H||wt.texture!==Ut)&&(at!==Ct&&(s.activeTexture(Ct),at=Ct),s.bindTexture(H,Ut||ot[H]),wt.type=H,wt.texture=Ut)}function O(){const H=ct[at];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function D(){try{s.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function rt(){try{s.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function dt(){try{s.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function st(){try{s.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Kt(){try{s.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Rt(){try{s.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Qt(){try{s.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function qt(){try{s.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ft(){try{s.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function bt(H){$t.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),$t.copy(H))}function ie(H){Zt.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Zt.copy(H))}function se(H,Ut){let Ct=f.get(Ut);Ct===void 0&&(Ct=new WeakMap,f.set(Ut,Ct));let wt=Ct.get(H);wt===void 0&&(wt=s.getUniformBlockIndex(Ut,H.name),Ct.set(H,wt))}function Pt(H,Ut){const wt=f.get(Ut).get(H);h.get(Ut)!==wt&&(s.uniformBlockBinding(Ut,wt,H.__bindingPointIndex),h.set(Ut,wt))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},at=null,ct={},m={},x=new WeakMap,g=[],y=null,M=!1,S=null,_=null,E=null,T=null,A=null,N=null,w=null,I=new zt(0,0,0),z=0,R=!1,C=null,F=null,W=null,k=null,J=null,$t.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:pt,disable:Lt,bindFramebuffer:ee,drawBuffers:jt,useProgram:ge,setBlending:mt,setMaterial:B,setFlipSided:xt,setCullFace:gt,setLineWidth:Tt,setPolygonOffset:vt,setScissorTest:It,activeTexture:At,bindTexture:Gt,unbindTexture:O,compressedTexImage2D:D,compressedTexImage3D:K,texImage2D:qt,texImage3D:ft,updateUBOMapping:se,uniformBlockBinding:Pt,texStorage2D:Rt,texStorage3D:Qt,texSubImage2D:rt,texSubImage3D:dt,compressedTexSubImage2D:st,compressedTexSubImage3D:Kt,scissor:bt,viewport:ie,reset:oe}}function wR(s,t,e,n,i,r,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ht,p=new WeakMap;let m;const x=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,D){return g?new OffscreenCanvas(O,D):ec("canvas")}function M(O,D,K){let rt=1;const dt=Gt(O);if((dt.width>K||dt.height>K)&&(rt=K/Math.max(dt.width,dt.height)),rt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const st=Math.floor(rt*dt.width),Kt=Math.floor(rt*dt.height);m===void 0&&(m=y(st,Kt));const Rt=D?y(st,Kt):m;return Rt.width=st,Rt.height=Kt,Rt.getContext("2d").drawImage(O,0,0,st,Kt),Nt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+st+"x"+Kt+")."),Rt}else return"data"in O&&Nt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(O,D,K,rt,dt=!1){if(O!==null){if(s[O]!==void 0)return s[O];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let st=D;if(D===s.RED&&(K===s.FLOAT&&(st=s.R32F),K===s.HALF_FLOAT&&(st=s.R16F),K===s.UNSIGNED_BYTE&&(st=s.R8)),D===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(st=s.R8UI),K===s.UNSIGNED_SHORT&&(st=s.R16UI),K===s.UNSIGNED_INT&&(st=s.R32UI),K===s.BYTE&&(st=s.R8I),K===s.SHORT&&(st=s.R16I),K===s.INT&&(st=s.R32I)),D===s.RG&&(K===s.FLOAT&&(st=s.RG32F),K===s.HALF_FLOAT&&(st=s.RG16F),K===s.UNSIGNED_BYTE&&(st=s.RG8)),D===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(st=s.RG8UI),K===s.UNSIGNED_SHORT&&(st=s.RG16UI),K===s.UNSIGNED_INT&&(st=s.RG32UI),K===s.BYTE&&(st=s.RG8I),K===s.SHORT&&(st=s.RG16I),K===s.INT&&(st=s.RG32I)),D===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(st=s.RGB8UI),K===s.UNSIGNED_SHORT&&(st=s.RGB16UI),K===s.UNSIGNED_INT&&(st=s.RGB32UI),K===s.BYTE&&(st=s.RGB8I),K===s.SHORT&&(st=s.RGB16I),K===s.INT&&(st=s.RGB32I)),D===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(st=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(st=s.RGBA16UI),K===s.UNSIGNED_INT&&(st=s.RGBA32UI),K===s.BYTE&&(st=s.RGBA8I),K===s.SHORT&&(st=s.RGBA16I),K===s.INT&&(st=s.RGBA32I)),D===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(st=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(st=s.R11F_G11F_B10F)),D===s.RGBA){const Kt=dt?$l:Re.getTransfer(rt);K===s.FLOAT&&(st=s.RGBA32F),K===s.HALF_FLOAT&&(st=s.RGBA16F),K===s.UNSIGNED_BYTE&&(st=Kt===Ge?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function A(O,D){let K;return O?D===null||D===qs||D===Do?K=s.DEPTH24_STENCIL8:D===ti?K=s.DEPTH32F_STENCIL8:D===Ro&&(K=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===qs||D===Do?K=s.DEPTH_COMPONENT24:D===ti?K=s.DEPTH_COMPONENT32F:D===Ro&&(K=s.DEPTH_COMPONENT16),K}function N(O,D){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==In&&O.minFilter!==sn?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function w(O){const D=O.target;D.removeEventListener("dispose",w),z(D),D.isVideoTexture&&p.delete(D)}function I(O){const D=O.target;D.removeEventListener("dispose",I),C(D)}function z(O){const D=n.get(O);if(D.__webglInit===void 0)return;const K=O.source,rt=x.get(K);if(rt){const dt=rt[D.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&R(O),Object.keys(rt).length===0&&x.delete(K)}n.remove(O)}function R(O){const D=n.get(O);s.deleteTexture(D.__webglTexture);const K=O.source,rt=x.get(K);delete rt[D.__cacheKey],l.memory.textures--}function C(O){const D=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(D.__webglFramebuffer[rt]))for(let dt=0;dt<D.__webglFramebuffer[rt].length;dt++)s.deleteFramebuffer(D.__webglFramebuffer[rt][dt]);else s.deleteFramebuffer(D.__webglFramebuffer[rt]);D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer[rt])}else{if(Array.isArray(D.__webglFramebuffer))for(let rt=0;rt<D.__webglFramebuffer.length;rt++)s.deleteFramebuffer(D.__webglFramebuffer[rt]);else s.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&s.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let rt=0;rt<D.__webglColorRenderbuffer.length;rt++)D.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(D.__webglColorRenderbuffer[rt]);D.__webglDepthRenderbuffer&&s.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const K=O.textures;for(let rt=0,dt=K.length;rt<dt;rt++){const st=n.get(K[rt]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),l.memory.textures--),n.remove(K[rt])}n.remove(O)}let F=0;function W(){F=0}function k(){const O=F;return O>=i.maxTextures&&Nt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),F+=1,O}function J(O){const D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.colorSpace),D.join()}function nt(O,D){const K=n.get(O);if(O.isVideoTexture&&It(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&K.__version!==O.version){const rt=O.image;if(rt===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(K,O,D);return}}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+D)}function G(O,D){const K=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){ot(K,O,D);return}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+D)}function tt(O,D){const K=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){ot(K,O,D);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+D)}function Z(O,D){const K=n.get(O);if(O.version>0&&K.__version!==O.version){pt(K,O,D);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+D)}const at={[jl]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[Kl]:s.MIRRORED_REPEAT},ct={[In]:s.NEAREST,[Hm]:s.NEAREST_MIPMAP_NEAREST,[To]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[zl]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},_t={[Ty]:s.NEVER,[Uy]:s.ALWAYS,[Ay]:s.LESS,[jm]:s.LEQUAL,[Cy]:s.EQUAL,[Dy]:s.GEQUAL,[wy]:s.GREATER,[Ry]:s.NOTEQUAL};function Vt(O,D){if(D.type===ti&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===sn||D.magFilter===zl||D.magFilter===To||D.magFilter===ms||D.minFilter===sn||D.minFilter===zl||D.minFilter===To||D.minFilter===ms)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,at[D.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,at[D.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,at[D.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ct[D.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ct[D.minFilter]),D.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,_t[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===In||D.minFilter!==To&&D.minFilter!==ms||D.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,i.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function $t(O,D){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",w));const rt=D.source;let dt=x.get(rt);dt===void 0&&(dt={},x.set(rt,dt));const st=J(D);if(st!==O.__cacheKey){dt[st]===void 0&&(dt[st]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,K=!0),dt[st].usedTimes++;const Kt=dt[O.__cacheKey];Kt!==void 0&&(dt[O.__cacheKey].usedTimes--,Kt.usedTimes===0&&R(D)),O.__cacheKey=st,O.__webglTexture=dt[st].texture}return K}function Zt(O,D,K){return Math.floor(Math.floor(O/K)/D)}function me(O,D,K,rt){const st=O.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,D.width,D.height,K,rt,D.data);else{st.sort((ft,bt)=>ft.start-bt.start);let Kt=0;for(let ft=1;ft<st.length;ft++){const bt=st[Kt],ie=st[ft],se=bt.start+bt.count,Pt=Zt(ie.start,D.width,4),oe=Zt(bt.start,D.width,4);ie.start<=se+1&&Pt===oe&&Zt(ie.start+ie.count-1,D.width,4)===Pt?bt.count=Math.max(bt.count,ie.start+ie.count-bt.start):(++Kt,st[Kt]=ie)}st.length=Kt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Qt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,D.width);for(let ft=0,bt=st.length;ft<bt;ft++){const ie=st[ft],se=Math.floor(ie.start/4),Pt=Math.ceil(ie.count/4),oe=se%D.width,H=Math.floor(se/D.width),Ut=Pt,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),e.texSubImage2D(s.TEXTURE_2D,0,oe,H,Ut,Ct,K,rt,D.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function ot(O,D,K){let rt=s.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),D.isData3DTexture&&(rt=s.TEXTURE_3D);const dt=$t(O,D),st=D.source;e.bindTexture(rt,O.__webglTexture,s.TEXTURE0+K);const Kt=n.get(st);if(st.version!==Kt.__version||dt===!0){e.activeTexture(s.TEXTURE0+K);const Rt=Re.getPrimaries(Re.workingColorSpace),Qt=D.colorSpace===Gs?null:Re.getPrimaries(D.colorSpace),qt=D.colorSpace===Gs||Rt===Qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let ft=M(D.image,!1,i.maxTextureSize);ft=At(D,ft);const bt=r.convert(D.format,D.colorSpace),ie=r.convert(D.type);let se=T(D.internalFormat,bt,ie,D.colorSpace,D.isVideoTexture);Vt(rt,D);let Pt;const oe=D.mipmaps,H=D.isVideoTexture!==!0,Ut=Kt.__version===void 0||dt===!0,Ct=st.dataReady,wt=N(D,ft);if(D.isDepthTexture)se=A(D.format===No,D.type),Ut&&(H?e.texStorage2D(s.TEXTURE_2D,1,se,ft.width,ft.height):e.texImage2D(s.TEXTURE_2D,0,se,ft.width,ft.height,0,bt,ie,null));else if(D.isDataTexture)if(oe.length>0){H&&Ut&&e.texStorage2D(s.TEXTURE_2D,wt,se,oe[0].width,oe[0].height);for(let yt=0,ut=oe.length;yt<ut;yt++)Pt=oe[yt],H?Ct&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,bt,ie,Pt.data):e.texImage2D(s.TEXTURE_2D,yt,se,Pt.width,Pt.height,0,bt,ie,Pt.data);D.generateMipmaps=!1}else H?(Ut&&e.texStorage2D(s.TEXTURE_2D,wt,se,ft.width,ft.height),Ct&&me(D,ft,bt,ie)):e.texImage2D(s.TEXTURE_2D,0,se,ft.width,ft.height,0,bt,ie,ft.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){H&&Ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,se,oe[0].width,oe[0].height,ft.depth);for(let yt=0,ut=oe.length;yt<ut;yt++)if(Pt=oe[yt],D.format!==qn)if(bt!==null)if(H){if(Ct)if(D.layerUpdates.size>0){const Yt=Rm(Pt.width,Pt.height,D.format,D.type);for(const ue of D.layerUpdates){const ze=Pt.data.subarray(ue*Yt/Pt.data.BYTES_PER_ELEMENT,(ue+1)*Yt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,ue,Pt.width,Pt.height,1,bt,ze)}D.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,ft.depth,bt,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,yt,se,Pt.width,Pt.height,ft.depth,0,Pt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,ft.depth,bt,ie,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,yt,se,Pt.width,Pt.height,ft.depth,0,bt,ie,Pt.data)}else{H&&Ut&&e.texStorage2D(s.TEXTURE_2D,wt,se,oe[0].width,oe[0].height);for(let yt=0,ut=oe.length;yt<ut;yt++)Pt=oe[yt],D.format!==qn?bt!==null?H?Ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,bt,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,yt,se,Pt.width,Pt.height,0,Pt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ct&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,bt,ie,Pt.data):e.texImage2D(s.TEXTURE_2D,yt,se,Pt.width,Pt.height,0,bt,ie,Pt.data)}else if(D.isDataArrayTexture)if(H){if(Ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,se,ft.width,ft.height,ft.depth),Ct)if(D.layerUpdates.size>0){const yt=Rm(ft.width,ft.height,D.format,D.type);for(const ut of D.layerUpdates){const Yt=ft.data.subarray(ut*yt/ft.data.BYTES_PER_ELEMENT,(ut+1)*yt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,ft.width,ft.height,1,bt,ie,Yt)}D.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,bt,ie,ft.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,se,ft.width,ft.height,ft.depth,0,bt,ie,ft.data);else if(D.isData3DTexture)H?(Ut&&e.texStorage3D(s.TEXTURE_3D,wt,se,ft.width,ft.height,ft.depth),Ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,bt,ie,ft.data)):e.texImage3D(s.TEXTURE_3D,0,se,ft.width,ft.height,ft.depth,0,bt,ie,ft.data);else if(D.isFramebufferTexture){if(Ut)if(H)e.texStorage2D(s.TEXTURE_2D,wt,se,ft.width,ft.height);else{let yt=ft.width,ut=ft.height;for(let Yt=0;Yt<wt;Yt++)e.texImage2D(s.TEXTURE_2D,Yt,se,yt,ut,0,bt,ie,null),yt>>=1,ut>>=1}}else if(oe.length>0){if(H&&Ut){const yt=Gt(oe[0]);e.texStorage2D(s.TEXTURE_2D,wt,se,yt.width,yt.height)}for(let yt=0,ut=oe.length;yt<ut;yt++)Pt=oe[yt],H?Ct&&e.texSubImage2D(s.TEXTURE_2D,yt,0,0,bt,ie,Pt):e.texImage2D(s.TEXTURE_2D,yt,se,bt,ie,Pt);D.generateMipmaps=!1}else if(H){if(Ut){const yt=Gt(ft);e.texStorage2D(s.TEXTURE_2D,wt,se,yt.width,yt.height)}Ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,ie,ft)}else e.texImage2D(s.TEXTURE_2D,0,se,bt,ie,ft);S(D)&&_(rt),Kt.__version=st.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function pt(O,D,K){if(D.image.length!==6)return;const rt=$t(O,D),dt=D.source;e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+K);const st=n.get(dt);if(dt.version!==st.__version||rt===!0){e.activeTexture(s.TEXTURE0+K);const Kt=Re.getPrimaries(Re.workingColorSpace),Rt=D.colorSpace===Gs?null:Re.getPrimaries(D.colorSpace),Qt=D.colorSpace===Gs||Kt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const qt=D.isCompressedTexture||D.image[0].isCompressedTexture,ft=D.image[0]&&D.image[0].isDataTexture,bt=[];for(let ut=0;ut<6;ut++)!qt&&!ft?bt[ut]=M(D.image[ut],!0,i.maxCubemapSize):bt[ut]=ft?D.image[ut].image:D.image[ut],bt[ut]=At(D,bt[ut]);const ie=bt[0],se=r.convert(D.format,D.colorSpace),Pt=r.convert(D.type),oe=T(D.internalFormat,se,Pt,D.colorSpace),H=D.isVideoTexture!==!0,Ut=st.__version===void 0||rt===!0,Ct=dt.dataReady;let wt=N(D,ie);Vt(s.TEXTURE_CUBE_MAP,D);let yt;if(qt){H&&Ut&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,oe,ie.width,ie.height);for(let ut=0;ut<6;ut++){yt=bt[ut].mipmaps;for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];D.format!==qn?se!==null?H?Ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,0,0,ue.width,ue.height,se,ue.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,oe,ue.width,ue.height,0,ue.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,0,0,ue.width,ue.height,se,Pt,ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,oe,ue.width,ue.height,0,se,Pt,ue.data)}}}else{if(yt=D.mipmaps,H&&Ut){yt.length>0&&wt++;const ut=Gt(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,oe,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(ft){H?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,bt[ut].width,bt[ut].height,se,Pt,bt[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,oe,bt[ut].width,bt[ut].height,0,se,Pt,bt[ut].data);for(let Yt=0;Yt<yt.length;Yt++){const ze=yt[Yt].image[ut].image;H?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,0,0,ze.width,ze.height,se,Pt,ze.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,oe,ze.width,ze.height,0,se,Pt,ze.data)}}else{H?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,se,Pt,bt[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,oe,se,Pt,bt[ut]);for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];H?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,0,0,se,Pt,ue.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,oe,se,Pt,ue.image[ut])}}}S(D)&&_(s.TEXTURE_CUBE_MAP),st.__version=dt.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function Lt(O,D,K,rt,dt,st){const Kt=r.convert(K.format,K.colorSpace),Rt=r.convert(K.type),Qt=T(K.internalFormat,Kt,Rt,K.colorSpace),qt=n.get(D),ft=n.get(K);if(ft.__renderTarget=D,!qt.__hasExternalTextures){const bt=Math.max(1,D.width>>st),ie=Math.max(1,D.height>>st);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?e.texImage3D(dt,st,Qt,bt,ie,D.depth,0,Kt,Rt,null):e.texImage2D(dt,st,Qt,bt,ie,0,Kt,Rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,O),vt(D)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,dt,ft.__webglTexture,0,Tt(D)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,dt,ft.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(O,D,K){if(s.bindRenderbuffer(s.RENDERBUFFER,O),D.depthBuffer){const rt=D.depthTexture,dt=rt&&rt.isDepthTexture?rt.type:null,st=A(D.stencilBuffer,dt),Kt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=Tt(D);vt(D)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,st,D.width,D.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,st,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,st,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,O)}else{const rt=D.textures;for(let dt=0;dt<rt.length;dt++){const st=rt[dt],Kt=r.convert(st.format,st.colorSpace),Rt=r.convert(st.type),Qt=T(st.internalFormat,Kt,Rt,st.colorSpace),qt=Tt(D);K&&vt(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Qt,D.width,D.height):vt(D)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Qt,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,Qt,D.width,D.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(D.depthTexture);rt.__renderTarget=D,(!rt.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),nt(D.depthTexture,0);const dt=rt.__webglTexture,st=Tt(D);if(D.depthTexture.format===Uo)vt(D)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(D.depthTexture.format===No)vt(D)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function ge(O){const D=n.get(O),K=O.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==O.depthTexture){const rt=O.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),rt){const dt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,rt.removeEventListener("dispose",dt)};rt.addEventListener("dispose",dt),D.__depthDisposeCallback=dt}D.__boundDepthTexture=rt}if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const rt=O.texture.mipmaps;rt&&rt.length>0?jt(D.__webglFramebuffer[0],O):jt(D.__webglFramebuffer,O)}else if(K){D.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[rt]),D.__webglDepthbuffer[rt]===void 0)D.__webglDepthbuffer[rt]=s.createRenderbuffer(),ee(D.__webglDepthbuffer[rt],O,!1);else{const dt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=D.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,st)}}else{const rt=O.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=s.createRenderbuffer(),ee(D.__webglDepthbuffer,O,!1);else{const dt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=D.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,st)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(O,D,K){const rt=n.get(O);D!==void 0&&Lt(rt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ge(O)}function re(O){const D=O.texture,K=n.get(O),rt=n.get(D);O.addEventListener("dispose",I);const dt=O.textures,st=O.isWebGLCubeRenderTarget===!0,Kt=dt.length>1;if(Kt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=D.version,l.memory.textures++),st){K.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(D.mipmaps&&D.mipmaps.length>0){K.__webglFramebuffer[Rt]=[];for(let Qt=0;Qt<D.mipmaps.length;Qt++)K.__webglFramebuffer[Rt][Qt]=s.createFramebuffer()}else K.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){K.__webglFramebuffer=[];for(let Rt=0;Rt<D.mipmaps.length;Rt++)K.__webglFramebuffer[Rt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let Rt=0,Qt=dt.length;Rt<Qt;Rt++){const qt=n.get(dt[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),l.memory.textures++)}if(O.samples>0&&vt(O)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Rt=0;Rt<dt.length;Rt++){const Qt=dt[Rt];K.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Rt]);const qt=r.convert(Qt.format,Qt.colorSpace),ft=r.convert(Qt.type),bt=T(Qt.internalFormat,qt,ft,Qt.colorSpace,O.isXRRenderTarget===!0),ie=Tt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,bt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,K.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(K.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,D);for(let Rt=0;Rt<6;Rt++)if(D.mipmaps&&D.mipmaps.length>0)for(let Qt=0;Qt<D.mipmaps.length;Qt++)Lt(K.__webglFramebuffer[Rt][Qt],O,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Qt);else Lt(K.__webglFramebuffer[Rt],O,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(D)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Kt){for(let Rt=0,Qt=dt.length;Rt<Qt;Rt++){const qt=dt[Rt],ft=n.get(qt);let bt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(bt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,ft.__webglTexture),Vt(bt,qt),Lt(K.__webglFramebuffer,O,qt,s.COLOR_ATTACHMENT0+Rt,bt,0),S(qt)&&_(bt)}e.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Rt,rt.__webglTexture),Vt(Rt,D),D.mipmaps&&D.mipmaps.length>0)for(let Qt=0;Qt<D.mipmaps.length;Qt++)Lt(K.__webglFramebuffer[Qt],O,D,s.COLOR_ATTACHMENT0,Rt,Qt);else Lt(K.__webglFramebuffer,O,D,s.COLOR_ATTACHMENT0,Rt,0);S(D)&&_(Rt),e.unbindTexture()}O.depthBuffer&&ge(O)}function mt(O){const D=O.textures;for(let K=0,rt=D.length;K<rt;K++){const dt=D[K];if(S(dt)){const st=E(O),Kt=n.get(dt).__webglTexture;e.bindTexture(st,Kt),_(st),e.unbindTexture()}}}const B=[],xt=[];function gt(O){if(O.samples>0){if(vt(O)===!1){const D=O.textures,K=O.width,rt=O.height;let dt=s.COLOR_BUFFER_BIT;const st=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=n.get(O),Rt=D.length>1;if(Rt)for(let qt=0;qt<D.length;qt++)e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Qt=O.texture.mipmaps;Qt&&Qt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let qt=0;qt<D.length;qt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[qt]);const ft=n.get(D[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,K,rt,0,0,K,rt,dt,s.NEAREST),h===!0&&(B.length=0,xt.length=0,B.push(s.COLOR_ATTACHMENT0+qt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(B.push(st),xt.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,B))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<D.length;qt++){e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[qt]);const ft=n.get(D[qt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&h){const D=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[D])}}}function Tt(O){return Math.min(i.maxSamples,O.samples)}function vt(O){const D=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function It(O){const D=l.render.frame;p.get(O)!==D&&(p.set(O,D),O.update())}function At(O,D){const K=O.colorSpace,rt=O.format,dt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==Ea&&K!==Gs&&(Re.getTransfer(K)===Ge?(rt!==qn||dt!==Gi)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",K)),D}function Gt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(f.width=O.naturalWidth||O.width,f.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(f.width=O.displayWidth,f.height=O.displayHeight):(f.width=O.width,f.height=O.height),f}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=nt,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=Z,this.rebindTextures=Ue,this.setupRenderTarget=re,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=vt}function FS(s,t){function e(n,i=Gs){let r;const l=Re.getTransfer(i);if(n===Gi)return s.UNSIGNED_BYTE;if(n===af)return s.UNSIGNED_SHORT_4_4_4_4;if(n===rf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gm)return s.BYTE;if(n===km)return s.SHORT;if(n===Ro)return s.UNSIGNED_SHORT;if(n===sf)return s.INT;if(n===qs)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===Ca)return s.HALF_FLOAT;if(n===qm)return s.ALPHA;if(n===Ym)return s.RGB;if(n===qn)return s.RGBA;if(n===Uo)return s.DEPTH_COMPONENT;if(n===No)return s.DEPTH_STENCIL;if(n===of)return s.RED;if(n===mc)return s.RED_INTEGER;if(n===lf)return s.RG;if(n===cf)return s.RG_INTEGER;if(n===uf)return s.RGBA_INTEGER;if(n===Fl||n===Vl||n===Hl||n===Gl)if(l===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===vh||n===_h||n===yh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===bh||n===Mh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sh||n===bh)return l===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eh||n===Th||n===Ah||n===Ch||n===wh||n===Rh||n===Dh||n===Uh||n===Nh||n===Lh||n===Ih||n===Ph||n===Oh||n===Bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Th)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ph)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return l===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zh||n===Fh||n===Vh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zh)return l===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===Gh||n===kh||n===Wh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Do?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const RR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new s0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fi({vertexShader:RR,fragmentShader:DR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mn(new Xo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NR extends _s{constructor(t,e){super();const n=this;let i=null,r=1,l=null,c="local-floor",h=1,f=null,p=null,m=null,x=null,g=null,y=null;const M=typeof XRWebGLBinding<"u",S=new UR,_={},E=e.getContextAttributes();let T=null,A=null;const N=[],w=[],I=new ht;let z=null;const R=new An;R.viewport=new Te;const C=new An;C.viewport=new Te;const F=[R,C],W=new CS;let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let pt=N[ot];return pt===void 0&&(pt=new ah,N[ot]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(ot){let pt=N[ot];return pt===void 0&&(pt=new ah,N[ot]=pt),pt.getGripSpace()},this.getHand=function(ot){let pt=N[ot];return pt===void 0&&(pt=new ah,N[ot]=pt),pt.getHandSpace()};function nt(ot){const pt=w.indexOf(ot.inputSource);if(pt===-1)return;const Lt=N[pt];Lt!==void 0&&(Lt.update(ot.inputSource,ot.frame,f||l),Lt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function G(){i.removeEventListener("select",nt),i.removeEventListener("selectstart",nt),i.removeEventListener("selectend",nt),i.removeEventListener("squeeze",nt),i.removeEventListener("squeezestart",nt),i.removeEventListener("squeezeend",nt),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",tt);for(let ot=0;ot<N.length;ot++){const pt=w[ot];pt!==null&&(w[ot]=null,N[ot].disconnect(pt))}k=null,J=null,S.reset();for(const ot in _)delete _[ot];t.setRenderTarget(T),g=null,x=null,m=null,i=null,A=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){c=ot,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ot){f=ot},this.getBaseLayer=function(){return x!==null?x:g},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(i,e)),m},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ot){if(i=ot,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",nt),i.addEventListener("selectstart",nt),i.addEventListener("selectend",nt),i.addEventListener("squeeze",nt),i.addEventListener("squeezestart",nt),i.addEventListener("squeezeend",nt),i.addEventListener("end",G),i.addEventListener("inputsourceschange",tt),E.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,ee=null,jt=null;E.depth&&(jt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=E.stencil?No:Uo,ee=E.stencil?Do:qs);const ge={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};m=this.getBinding(),x=m.createProjectionLayer(ge),i.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),A=new is(x.textureWidth,x.textureHeight,{format:qn,type:Gi,depthTexture:new Sf(x.textureWidth,x.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Lt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,e,Lt),i.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new is(g.framebufferWidth,g.framebufferHeight,{format:qn,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await i.requestReferenceSpace(c),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function tt(ot){for(let pt=0;pt<ot.removed.length;pt++){const Lt=ot.removed[pt],ee=w.indexOf(Lt);ee>=0&&(w[ee]=null,N[ee].disconnect(Lt))}for(let pt=0;pt<ot.added.length;pt++){const Lt=ot.added[pt];let ee=w.indexOf(Lt);if(ee===-1){for(let ge=0;ge<N.length;ge++)if(ge>=w.length){w.push(Lt),ee=ge;break}else if(w[ge]===null){w[ge]=Lt,ee=ge;break}if(ee===-1)break}const jt=N[ee];jt&&jt.connect(Lt)}}const Z=new P,at=new P;function ct(ot,pt,Lt){Z.setFromMatrixPosition(pt.matrixWorld),at.setFromMatrixPosition(Lt.matrixWorld);const ee=Z.distanceTo(at),jt=pt.projectionMatrix.elements,ge=Lt.projectionMatrix.elements,Ue=jt[14]/(jt[10]-1),re=jt[14]/(jt[10]+1),mt=(jt[9]+1)/jt[5],B=(jt[9]-1)/jt[5],xt=(jt[8]-1)/jt[0],gt=(ge[8]+1)/ge[0],Tt=Ue*xt,vt=Ue*gt,It=ee/(-xt+gt),At=It*-xt;if(pt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(At),ot.translateZ(It),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),jt[10]===-1)ot.projectionMatrix.copy(pt.projectionMatrix),ot.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Gt=Ue+It,O=re+It,D=Tt-At,K=vt+(ee-At),rt=mt*re/O*Gt,dt=B*re/O*Gt;ot.projectionMatrix.makePerspective(D,K,rt,dt,Gt,O),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function _t(ot,pt){pt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(pt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(i===null)return;let pt=ot.near,Lt=ot.far;S.texture!==null&&(S.depthNear>0&&(pt=S.depthNear),S.depthFar>0&&(Lt=S.depthFar)),W.near=C.near=R.near=pt,W.far=C.far=R.far=Lt,(k!==W.near||J!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),k=W.near,J=W.far),W.layers.mask=ot.layers.mask|6,R.layers.mask=W.layers.mask&3,C.layers.mask=W.layers.mask&5;const ee=ot.parent,jt=W.cameras;_t(W,ee);for(let ge=0;ge<jt.length;ge++)_t(jt[ge],ee);jt.length===2?ct(W,R,C):W.projectionMatrix.copy(R.projectionMatrix),Vt(ot,W,ee)};function Vt(ot,pt,Lt){Lt===null?ot.matrix.copy(pt.matrixWorld):(ot.matrix.copy(Lt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(pt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(pt.projectionMatrix),ot.projectionMatrixInverse.copy(pt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Po*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(x===null&&g===null))return h},this.setFoveation=function(ot){h=ot,x!==null&&(x.fixedFoveation=ot),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ot)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(ot){return _[ot]};let $t=null;function Zt(ot,pt){if(p=pt.getViewerPose(f||l),y=pt,p!==null){const Lt=p.views;g!==null&&(t.setRenderTargetFramebuffer(A,g.framebuffer),t.setRenderTarget(A));let ee=!1;Lt.length!==W.cameras.length&&(W.cameras.length=0,ee=!0);for(let re=0;re<Lt.length;re++){const mt=Lt[re];let B=null;if(g!==null)B=g.getViewport(mt);else{const gt=m.getViewSubImage(x,mt);B=gt.viewport,re===0&&(t.setRenderTargetTextures(A,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(A))}let xt=F[re];xt===void 0&&(xt=new An,xt.layers.enable(re),xt.viewport=new Te,F[re]=xt),xt.matrix.fromArray(mt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(mt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(B.x,B.y,B.width,B.height),re===0&&(W.matrix.copy(xt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ee===!0&&W.cameras.push(xt)}const jt=i.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const re=m.getDepthInformation(Lt[0]);re&&re.isValid&&re.texture&&S.init(re,i.renderState)}if(jt&&jt.includes("camera-access")&&M){t.state.unbindTexture(),m=n.getBinding();for(let re=0;re<Lt.length;re++){const mt=Lt[re].camera;if(mt){let B=_[mt];B||(B=new s0,_[mt]=B);const xt=m.getCameraImage(mt);B.sourceTexture=xt}}}}for(let Lt=0;Lt<N.length;Lt++){const ee=w[Lt],jt=N[Lt];ee!==null&&jt!==void 0&&jt.update(ee,pt,f||l)}$t&&$t(ot,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),y=null}const me=new IS;me.setAnimationLoop(Zt),this.setAnimationLoop=function(ot){$t=ot},this.dispose=function(){}}}const cr=new Di,LR=new fe;function IR(s,t){function e(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function n(S,_){_.color.getRGB(S.fogColor.value,Oy(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function i(S,_,E,T,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(S,_):_.isMeshToonMaterial?(r(S,_),m(S,_)):_.isMeshPhongMaterial?(r(S,_),p(S,_)):_.isMeshStandardMaterial?(r(S,_),x(S,_),_.isMeshPhysicalMaterial&&g(S,_,A)):_.isMeshMatcapMaterial?(r(S,_),y(S,_)):_.isMeshDepthMaterial?r(S,_):_.isMeshDistanceMaterial?(r(S,_),M(S,_)):_.isMeshNormalMaterial?r(S,_):_.isLineBasicMaterial?(l(S,_),_.isLineDashedMaterial&&c(S,_)):_.isPointsMaterial?h(S,_,E,T):_.isSpriteMaterial?f(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,e(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,e(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,e(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Yn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,e(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Yn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,e(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,e(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const E=t.get(_),T=E.envMap,A=E.envMapRotation;T&&(S.envMap.value=T,cr.copy(A),cr.x*=-1,cr.y*=-1,cr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),S.envMapRotation.value.setFromMatrix4(LR.makeRotationFromEuler(cr)),S.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,S.aoMapTransform))}function l(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,e(_.map,S.mapTransform))}function c(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,E,T){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*E,S.scale.value=T*.5,_.map&&(S.map.value=_.map,e(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,e(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,e(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,e(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function m(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function g(S,_,E){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=E.texture,S.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,_){_.matcap&&(S.matcap.value=_.matcap)}function M(S,_){const E=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(E.matrixWorld),S.nearDistance.value=E.shadow.camera.near,S.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PR(s,t,e,n){let i={},r={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,T){const A=T.program;n.uniformBlockBinding(E,A)}function f(E,T){let A=i[E.id];A===void 0&&(y(E),A=p(E),i[E.id]=A,E.addEventListener("dispose",S));const N=T.program;n.updateUBOMapping(E,N);const w=t.render.frame;r[E.id]!==w&&(x(E),r[E.id]=w)}function p(E){const T=m();E.__bindingPointIndex=T;const A=s.createBuffer(),N=E.__size,w=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,N,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,A),A}function m(){for(let E=0;E<c;E++)if(l.indexOf(E)===-1)return l.push(E),E;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(E){const T=i[E.id],A=E.uniforms,N=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,I=A.length;w<I;w++){const z=Array.isArray(A[w])?A[w]:[A[w]];for(let R=0,C=z.length;R<C;R++){const F=z[R];if(g(F,w,R,N)===!0){const W=F.__offset,k=Array.isArray(F.value)?F.value:[F.value];let J=0;for(let nt=0;nt<k.length;nt++){const G=k[nt],tt=M(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,W+J,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,J),J+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(E,T,A,N){const w=E.value,I=T+"_"+A;if(N[I]===void 0)return typeof w=="number"||typeof w=="boolean"?N[I]=w:N[I]=w.clone(),!0;{const z=N[I];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return N[I]=w,!0}else if(z.equals(w)===!1)return z.copy(w),!0}return!1}function y(E){const T=E.uniforms;let A=0;const N=16;for(let I=0,z=T.length;I<z;I++){const R=Array.isArray(T[I])?T[I]:[T[I]];for(let C=0,F=R.length;C<F;C++){const W=R[C],k=Array.isArray(W.value)?W.value:[W.value];for(let J=0,nt=k.length;J<nt;J++){const G=k[J],tt=M(G),Z=A%N,at=Z%tt.boundary,ct=Z+at;A+=at,ct!==0&&N-ct<tt.storage&&(A+=N-ct),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=tt.storage}}}const w=A%N;return w>0&&(A+=N-w),E.__size=A,E.__cache={},this}function M(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Nt("WebGLRenderer: Unsupported uniform value type.",E),T}function S(E){const T=E.target;T.removeEventListener("dispose",S);const A=l.indexOf(T.__bindingPointIndex);l.splice(A,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function _(){for(const E in i)s.deleteBuffer(i[E]);l=[],i={},r={}}return{bind:h,update:f,dispose:_}}const OR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Hs=null;function BR(){return Hs===null&&(Hs=new ns(OR,32,32,lf,Ca),Hs.minFilter=sn,Hs.magFilter=sn,Hs.wrapS=ui,Hs.wrapT=ui,Hs.generateMipmaps=!1,Hs.needsUpdate=!0),Hs}class VS{constructor(t={}){const{canvas:e=Ly(),context:n=null,depth:i=!0,stencil:r=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=l;const y=new Set([uf,cf,mc]),M=new Set([Gi,qs,Ro,Do,af,rf]),S=new Uint32Array(4),_=new Int32Array(4);let E=null,T=null;const A=[],N=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=Xn;let z=0,R=0,C=null,F=-1,W=null;const k=new Te,J=new Te;let nt=null;const G=new zt(0);let tt=0,Z=e.width,at=e.height,ct=1,_t=null,Vt=null;const $t=new Te(0,0,Z,at),Zt=new Te(0,0,Z,at);let me=!1;const ot=new Wo;let pt=!1,Lt=!1;const ee=new fe,jt=new P,ge=new Te,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function mt(){return C===null?ct:1}let B=n;function xt(U,X){return e.getContext(U,X)}try{const U={alpha:!0,depth:i,stencil:r,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",Yt,!1),B===null){const X="webgl2";if(B=xt(X,U),B===null)throw xt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw U("WebGLRenderer: "+U.message),U}let gt,Tt,vt,It,At,Gt,O,D,K,rt,dt,st,Kt,Rt,Qt,qt,ft,bt,ie,se,Pt,oe,H,Ut;function Ct(){gt=new YC(B),gt.init(),oe=new FS(B,gt),Tt=new zC(B,gt,t,oe),vt=new CR(B,gt),Tt.reversedDepthBuffer&&x&&vt.buffers.depth.setReversed(!0),It=new KC(B),At=new pR,Gt=new wR(B,gt,vt,At,Tt,oe,It),O=new VC(w),D=new qC(w),K=new tA(B),H=new OC(B,K),rt=new ZC(B,K,It,H),dt=new QC(B,rt,K,It),ie=new JC(B,Tt,Gt),qt=new FC(At),st=new dR(w,O,D,gt,Tt,H,qt),Kt=new IR(w,At),Rt=new xR,Qt=new bR(gt),bt=new PC(w,O,D,vt,dt,g,h),ft=new TR(w,dt,Tt),Ut=new PR(B,It,Tt,vt),se=new BC(B,gt,It),Pt=new jC(B,gt,It),It.programs=st.programs,w.capabilities=Tt,w.extensions=gt,w.properties=At,w.renderLists=Rt,w.shadowMap=ft,w.state=vt,w.info=It}Ct();const wt=new NR(w,B);this.xr=wt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const U=gt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=gt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(U){U!==void 0&&(ct=U,this.setSize(Z,at,!1))},this.getSize=function(U){return U.set(Z,at)},this.setSize=function(U,X,$=!0){if(wt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=U,at=X,e.width=Math.floor(U*ct),e.height=Math.floor(X*ct),$===!0&&(e.style.width=U+"px",e.style.height=X+"px"),this.setViewport(0,0,U,X)},this.getDrawingBufferSize=function(U){return U.set(Z*ct,at*ct).floor()},this.setDrawingBufferSize=function(U,X,$){Z=U,at=X,ct=$,e.width=Math.floor(U*$),e.height=Math.floor(X*$),this.setViewport(0,0,U,X)},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy($t)},this.setViewport=function(U,X,$,it){U.isVector4?$t.set(U.x,U.y,U.z,U.w):$t.set(U,X,$,it),vt.viewport(k.copy($t).multiplyScalar(ct).round())},this.getScissor=function(U){return U.copy(Zt)},this.setScissor=function(U,X,$,it){U.isVector4?Zt.set(U.x,U.y,U.z,U.w):Zt.set(U,X,$,it),vt.scissor(J.copy(Zt).multiplyScalar(ct).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(U){vt.setScissorTest(me=U)},this.setOpaqueSort=function(U){_t=U},this.setTransparentSort=function(U){Vt=U},this.getClearColor=function(U){return U.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(U=!0,X=!0,$=!0){let it=0;if(U){let q=!1;if(C!==null){const Mt=C.texture.format;q=y.has(Mt)}if(q){const Mt=C.texture.type,Ot=M.has(Mt),Xt=bt.getClearColor(),kt=bt.getClearAlpha(),le=Xt.r,ce=Xt.g,te=Xt.b;Ot?(S[0]=le,S[1]=ce,S[2]=te,S[3]=kt,B.clearBufferuiv(B.COLOR,0,S)):(_[0]=le,_[1]=ce,_[2]=te,_[3]=kt,B.clearBufferiv(B.COLOR,0,_))}else it|=B.COLOR_BUFFER_BIT}X&&(it|=B.DEPTH_BUFFER_BIT),$&&(it|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),bt.dispose(),Rt.dispose(),Qt.dispose(),At.dispose(),O.dispose(),D.dispose(),dt.dispose(),H.dispose(),Ut.dispose(),st.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Tr),wt.removeEventListener("sessionend",Ar),Pn.stop()};function yt(U){U.preventDefault(),nc("WebGLRenderer: Context Lost."),I=!0}function ut(){nc("WebGLRenderer: Context Restored."),I=!1;const U=It.autoReset,X=ft.enabled,$=ft.autoUpdate,it=ft.needsUpdate,q=ft.type;Ct(),It.autoReset=U,ft.enabled=X,ft.autoUpdate=$,ft.needsUpdate=it,ft.type=q}function Yt(U){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ue(U){const X=U.target;X.removeEventListener("dispose",ue),ze(X)}function ze(U){Ne(U),At.remove(U)}function Ne(U){const X=At.get(U).programs;X!==void 0&&(X.forEach(function($){st.releaseProgram($)}),U.isShaderMaterial&&st.releaseShaderCache(U))}this.renderBufferDirect=function(U,X,$,it,q,Mt){X===null&&(X=Ue);const Ot=q.isMesh&&q.matrixWorld.determinant()<0,Xt=Cc(U,X,$,it,q);vt.setMaterial(it,Ot);let kt=$.index,le=1;if(it.wireframe===!0){if(kt=rt.getWireframeAttribute($),kt===void 0)return;le=2}const ce=$.drawRange,te=$.attributes.position;let Me=ce.start*le,Fe=(ce.start+ce.count)*le;Mt!==null&&(Me=Math.max(Me,Mt.start*le),Fe=Math.min(Fe,(Mt.start+Mt.count)*le)),kt!==null?(Me=Math.max(Me,0),Fe=Math.min(Fe,kt.count)):te!=null&&(Me=Math.max(Me,0),Fe=Math.min(Fe,te.count));const qe=Fe-Me;if(qe<0||qe===1/0)return;H.setup(q,it,Xt,$,kt);let Je,Ve=se;if(kt!==null&&(Je=K.get(kt),Ve=Pt,Ve.setIndex(Je)),q.isMesh)it.wireframe===!0?(vt.setLineWidth(it.wireframeLinewidth*mt()),Ve.setMode(B.LINES)):Ve.setMode(B.TRIANGLES);else if(q.isLine){let ae=it.linewidth;ae===void 0&&(ae=1),vt.setLineWidth(ae*mt()),q.isLineSegments?Ve.setMode(B.LINES):q.isLineLoop?Ve.setMode(B.LINE_LOOP):Ve.setMode(B.LINE_STRIP)}else q.isPoints?Ve.setMode(B.POINTS):q.isSprite&&Ve.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Io("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Ve.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ae=q._multiDrawStarts,Ye=q._multiDrawCounts,we=q._multiDrawCount,Cn=kt?K.get(kt).bytesPerElement:1,bs=At.get(it).currentProgram.getUniforms();for(let Bn=0;Bn<we;Bn++)bs.setValue(B,"_gl_DrawID",Bn),Ve.render(ae[Bn]/Cn,Ye[Bn])}else if(q.isInstancedMesh)Ve.renderInstances(Me,qe,q.count);else if($.isInstancedBufferGeometry){const ae=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ye=Math.min($.instanceCount,ae);Ve.renderInstances(Me,qe,Ye)}else Ve.render(Me,qe)};function pi(U,X,$){U.transparent===!0&&U.side===ds&&U.forceSinglePass===!1?(U.side=Yn,U.needsUpdate=!0,Zs(U,X,$),U.side=vs,U.needsUpdate=!0,Zs(U,X,$),U.side=ds):Zs(U,X,$)}this.compile=function(U,X,$=null){$===null&&($=U),T=Qt.get($),T.init(X),N.push(T),$.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),U!==$&&U.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights();const it=new Set;return U.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Mt=q.material;if(Mt)if(Array.isArray(Mt))for(let Ot=0;Ot<Mt.length;Ot++){const Xt=Mt[Ot];pi(Xt,$,q),it.add(Xt)}else pi(Mt,$,q),it.add(Mt)}),T=N.pop(),it},this.compileAsync=function(U,X,$=null){const it=this.compile(U,X,$);return new Promise(q=>{function Mt(){if(it.forEach(function(Ot){At.get(Ot).currentProgram.isReady()&&it.delete(Ot)}),it.size===0){q(U);return}setTimeout(Mt,10)}gt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ni=null;function Ac(U){ni&&ni(U)}function Tr(){Pn.stop()}function Ar(){Pn.start()}const Pn=new IS;Pn.setAnimationLoop(Ac),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(U){ni=U,wt.setAnimationLoop(U),U===null?Pn.stop():Pn.start()},wt.addEventListener("sessionstart",Tr),wt.addEventListener("sessionend",Ar),this.render=function(U,X){if(X!==void 0&&X.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(X),X=wt.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,X,C),T=Qt.get(U,N.length),T.init(X),N.push(T),ee.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ot.setFromProjectionMatrix(ee,Ci,X.reversedDepth),Lt=this.localClippingEnabled,pt=qt.init(this.clippingPlanes,Lt),E=Rt.get(U,A.length),E.init(),A.push(E),wt.enabled===!0&&wt.isPresenting===!0){const Mt=w.xr.getDepthSensingMesh();Mt!==null&&Cr(Mt,X,-1/0,w.sortObjects)}Cr(U,X,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(_t,Vt),re=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,re&&bt.addToRenderList(E,U),this.info.render.frame++,pt===!0&&qt.beginShadows();const $=T.state.shadowsArray;ft.render($,U,X),pt===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=E.opaque,q=E.transmissive;if(T.setupLights(),X.isArrayCamera){const Mt=X.cameras;if(q.length>0)for(let Ot=0,Xt=Mt.length;Ot<Xt;Ot++){const kt=Mt[Ot];Ui(it,q,U,kt)}re&&bt.render(U);for(let Ot=0,Xt=Mt.length;Ot<Xt;Ot++){const kt=Mt[Ot];Wi(E,U,kt,kt.viewport)}}else q.length>0&&Ui(it,q,U,X),re&&bt.render(U),Wi(E,U,X);C!==null&&R===0&&(Gt.updateMultisampleRenderTarget(C),Gt.updateRenderTargetMipmap(C)),U.isScene===!0&&U.onAfterRender(w,U,X),H.resetDefaultState(),F=-1,W=null,N.pop(),N.length>0?(T=N[N.length-1],pt===!0&&qt.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function Cr(U,X,$,it){if(U.visible===!1)return;if(U.layers.test(X.layers)){if(U.isGroup)$=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(X);else if(U.isLight)T.pushLight(U),U.castShadow&&T.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ot.intersectsSprite(U)){it&&ge.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ee);const Ot=dt.update(U),Xt=U.material;Xt.visible&&E.push(U,Ot,Xt,$,ge.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ot.intersectsObject(U))){const Ot=dt.update(U),Xt=U.material;if(it&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ge.copy(U.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ge.copy(Ot.boundingSphere.center)),ge.applyMatrix4(U.matrixWorld).applyMatrix4(ee)),Array.isArray(Xt)){const kt=Ot.groups;for(let le=0,ce=kt.length;le<ce;le++){const te=kt[le],Me=Xt[te.materialIndex];Me&&Me.visible&&E.push(U,Ot,Me,$,ge.z,te)}}else Xt.visible&&E.push(U,Ot,Xt,$,ge.z,null)}}const Mt=U.children;for(let Ot=0,Xt=Mt.length;Ot<Xt;Ot++)Cr(Mt[Ot],X,$,it)}function Wi(U,X,$,it){const{opaque:q,transmissive:Mt,transparent:Ot}=U;T.setupLightsView($),pt===!0&&qt.setGlobalState(w.clippingPlanes,$),it&&vt.viewport(k.copy(it)),q.length>0&&Ss(q,X,$),Mt.length>0&&Ss(Mt,X,$),Ot.length>0&&Ss(Ot,X,$),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Ui(U,X,$,it){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;T.state.transmissionRenderTarget[it.id]===void 0&&(T.state.transmissionRenderTarget[it.id]=new is(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ca:Gi,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Mt=T.state.transmissionRenderTarget[it.id],Ot=it.viewport||k;Mt.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);const Xt=w.getRenderTarget(),kt=w.getActiveCubeFace(),le=w.getActiveMipmapLevel();w.setRenderTarget(Mt),w.getClearColor(G),tt=w.getClearAlpha(),tt<1&&w.setClearColor(16777215,.5),w.clear(),re&&bt.render($);const ce=w.toneMapping;w.toneMapping=es;const te=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),T.setupLightsView(it),pt===!0&&qt.setGlobalState(w.clippingPlanes,it),Ss(U,$,it),Gt.updateMultisampleRenderTarget(Mt),Gt.updateRenderTargetMipmap(Mt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Fe=0,qe=X.length;Fe<qe;Fe++){const Je=X[Fe],{object:Ve,geometry:ae,material:Ye,group:we}=Je;if(Ye.side===ds&&Ve.layers.test(it.layers)){const Cn=Ye.side;Ye.side=Yn,Ye.needsUpdate=!0,$e(Ve,$,it,ae,Ye,we),Ye.side=Cn,Ye.needsUpdate=!0,Me=!0}}Me===!0&&(Gt.updateMultisampleRenderTarget(Mt),Gt.updateRenderTargetMipmap(Mt))}w.setRenderTarget(Xt,kt,le),w.setClearColor(G,tt),te!==void 0&&(it.viewport=te),w.toneMapping=ce}function Ss(U,X,$){const it=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Mt=U.length;q<Mt;q++){const Ot=U[q],{object:Xt,geometry:kt,group:le}=Ot;let ce=Ot.material;ce.allowOverride===!0&&it!==null&&(ce=it),Xt.layers.test($.layers)&&$e(Xt,X,$,kt,ce,le)}}function $e(U,X,$,it,q,Mt){U.onBeforeRender(w,X,$,it,q,Mt),U.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),q.onBeforeRender(w,X,$,it,U,Mt),q.transparent===!0&&q.side===ds&&q.forceSinglePass===!1?(q.side=Yn,q.needsUpdate=!0,w.renderBufferDirect($,X,it,q,U,Mt),q.side=vs,q.needsUpdate=!0,w.renderBufferDirect($,X,it,q,U,Mt),q.side=ds):w.renderBufferDirect($,X,it,q,U,Mt),U.onAfterRender(w,X,$,it,q,Mt)}function Zs(U,X,$){X.isScene!==!0&&(X=Ue);const it=At.get(U),q=T.state.lights,Mt=T.state.shadowsArray,Ot=q.state.version,Xt=st.getParameters(U,q.state,Mt,X,$),kt=st.getProgramCacheKey(Xt);let le=it.programs;it.environment=U.isMeshStandardMaterial?X.environment:null,it.fog=X.fog,it.envMap=(U.isMeshStandardMaterial?D:O).get(U.envMap||it.environment),it.envMapRotation=it.environment!==null&&U.envMap===null?X.environmentRotation:U.envMapRotation,le===void 0&&(U.addEventListener("dispose",ue),le=new Map,it.programs=le);let ce=le.get(kt);if(ce!==void 0){if(it.currentProgram===ce&&it.lightsStateVersion===Ot)return Zo(U,Xt),ce}else Xt.uniforms=st.getUniforms(U),U.onBeforeCompile(Xt,w),ce=st.acquireProgram(Xt,kt),le.set(kt,ce),it.uniforms=Xt.uniforms;const te=it.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(te.clippingPlanes=qt.uniform),Zo(U,Xt),it.needsLights=jo(U),it.lightsStateVersion=Ot,it.needsLights&&(te.ambientLightColor.value=q.state.ambient,te.lightProbe.value=q.state.probe,te.directionalLights.value=q.state.directional,te.directionalLightShadows.value=q.state.directionalShadow,te.spotLights.value=q.state.spot,te.spotLightShadows.value=q.state.spotShadow,te.rectAreaLights.value=q.state.rectArea,te.ltc_1.value=q.state.rectAreaLTC1,te.ltc_2.value=q.state.rectAreaLTC2,te.pointLights.value=q.state.point,te.pointLightShadows.value=q.state.pointShadow,te.hemisphereLights.value=q.state.hemi,te.directionalShadowMap.value=q.state.directionalShadowMap,te.directionalShadowMatrix.value=q.state.directionalShadowMatrix,te.spotShadowMap.value=q.state.spotShadowMap,te.spotLightMatrix.value=q.state.spotLightMatrix,te.spotLightMap.value=q.state.spotLightMap,te.pointShadowMap.value=q.state.pointShadowMap,te.pointShadowMatrix.value=q.state.pointShadowMatrix),it.currentProgram=ce,it.uniformsList=null,ce}function wr(U){if(U.uniformsList===null){const X=U.currentProgram.getUniforms();U.uniformsList=rh.seqWithValue(X.seq,U.uniforms)}return U.uniformsList}function Zo(U,X){const $=At.get(U);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function Cc(U,X,$,it,q){X.isScene!==!0&&(X=Ue),Gt.resetTextureUnits();const Mt=X.fog,Ot=it.isMeshStandardMaterial?X.environment:null,Xt=C===null?w.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ea,kt=(it.isMeshStandardMaterial?D:O).get(it.envMap||Ot),le=it.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ce=!!$.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),te=!!$.morphAttributes.position,Me=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color;let qe=es;it.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qe=w.toneMapping);const Je=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ve=Je!==void 0?Je.length:0,ae=At.get(it),Ye=T.state.lights;if(pt===!0&&(Lt===!0||U!==W)){const Sn=U===W&&it.id===F;qt.setState(it,U,Sn)}let we=!1;it.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Ye.state.version||ae.outputColorSpace!==Xt||q.isBatchedMesh&&ae.batching===!1||!q.isBatchedMesh&&ae.batching===!0||q.isBatchedMesh&&ae.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ae.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ae.instancing===!1||!q.isInstancedMesh&&ae.instancing===!0||q.isSkinnedMesh&&ae.skinning===!1||!q.isSkinnedMesh&&ae.skinning===!0||q.isInstancedMesh&&ae.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ae.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ae.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ae.instancingMorph===!1&&q.morphTexture!==null||ae.envMap!==kt||it.fog===!0&&ae.fog!==Mt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==qt.numPlanes||ae.numIntersection!==qt.numIntersection)||ae.vertexAlphas!==le||ae.vertexTangents!==ce||ae.morphTargets!==te||ae.morphNormals!==Me||ae.morphColors!==Fe||ae.toneMapping!==qe||ae.morphTargetsCount!==Ve)&&(we=!0):(we=!0,ae.__version=it.version);let Cn=ae.currentProgram;we===!0&&(Cn=Zs(it,X,q));let bs=!1,Bn=!1,js=!1;const Ze=Cn.getUniforms(),wn=ae.uniforms;if(vt.useProgram(Cn.program)&&(bs=!0,Bn=!0,js=!0),it.id!==F&&(F=it.id,Bn=!0),bs||W!==U){vt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ze.setValue(B,"projectionMatrix",U.projectionMatrix),Ze.setValue(B,"viewMatrix",U.matrixWorldInverse);const un=Ze.map.cameraPosition;un!==void 0&&un.setValue(B,jt.setFromMatrixPosition(U.matrixWorld)),Tt.logarithmicDepthBuffer&&Ze.setValue(B,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ze.setValue(B,"isOrthographic",U.isOrthographicCamera===!0),W!==U&&(W=U,Bn=!0,js=!0)}if(q.isSkinnedMesh){Ze.setOptional(B,q,"bindMatrix"),Ze.setOptional(B,q,"bindMatrixInverse");const Sn=q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ze.setValue(B,"boneTexture",Sn.boneTexture,Gt))}q.isBatchedMesh&&(Ze.setOptional(B,q,"batchingTexture"),Ze.setValue(B,"batchingTexture",q._matricesTexture,Gt),Ze.setOptional(B,q,"batchingIdTexture"),Ze.setValue(B,"batchingIdTexture",q._indirectTexture,Gt),Ze.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Ze.setValue(B,"batchingColorTexture",q._colorsTexture,Gt));const ii=$.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&ie.update(q,$,Cn),(Bn||ae.receiveShadow!==q.receiveShadow)&&(ae.receiveShadow=q.receiveShadow,Ze.setValue(B,"receiveShadow",q.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(wn.envMap.value=kt,wn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&X.environment!==null&&(wn.envMapIntensity.value=X.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=BR()),Bn&&(Ze.setValue(B,"toneMappingExposure",w.toneMappingExposure),ae.needsLights&&Vf(wn,js),Mt&&it.fog===!0&&Kt.refreshFogUniforms(wn,Mt),Kt.refreshMaterialUniforms(wn,it,ct,at,T.state.transmissionRenderTarget[U.id]),rh.upload(B,wr(ae),wn,Gt)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(rh.upload(B,wr(ae),wn,Gt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ze.setValue(B,"center",q.center),Ze.setValue(B,"modelViewMatrix",q.modelViewMatrix),Ze.setValue(B,"normalMatrix",q.normalMatrix),Ze.setValue(B,"modelMatrix",q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Sn=it.uniformsGroups;for(let un=0,Rr=Sn.length;un<Rr;un++){const Ni=Sn[un];Ut.update(Ni,Cn),Ut.bind(Ni,Cn)}}return Cn}function Vf(U,X){U.ambientLightColor.needsUpdate=X,U.lightProbe.needsUpdate=X,U.directionalLights.needsUpdate=X,U.directionalLightShadows.needsUpdate=X,U.pointLights.needsUpdate=X,U.pointLightShadows.needsUpdate=X,U.spotLights.needsUpdate=X,U.spotLightShadows.needsUpdate=X,U.rectAreaLights.needsUpdate=X,U.hemisphereLights.needsUpdate=X}function jo(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(U,X,$){const it=At.get(U);it.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),At.get(U.texture).__webglTexture=X,At.get(U.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:$,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,X){const $=At.get(U);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};const Ko=B.createFramebuffer();this.setRenderTarget=function(U,X=0,$=0){C=U,z=X,R=$;let it=!0,q=null,Mt=!1,Ot=!1;if(U){const kt=At.get(U);if(kt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(B.FRAMEBUFFER,null),it=!1;else if(kt.__webglFramebuffer===void 0)Gt.setupRenderTarget(U);else if(kt.__hasExternalTextures)Gt.rebindTextures(U,At.get(U.texture).__webglTexture,At.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const te=U.depthTexture;if(kt.__boundDepthTexture!==te){if(te!==null&&At.has(te)&&(U.width!==te.image.width||U.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(U)}}const le=U.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Ot=!0);const ce=At.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ce[X])?q=ce[X][$]:q=ce[X],Mt=!0):U.samples>0&&Gt.useMultisampledRTT(U)===!1?q=At.get(U).__webglMultisampledFramebuffer:Array.isArray(ce)?q=ce[$]:q=ce,k.copy(U.viewport),J.copy(U.scissor),nt=U.scissorTest}else k.copy($t).multiplyScalar(ct).floor(),J.copy(Zt).multiplyScalar(ct).floor(),nt=me;if($!==0&&(q=Ko),vt.bindFramebuffer(B.FRAMEBUFFER,q)&&it&&vt.drawBuffers(U,q),vt.viewport(k),vt.scissor(J),vt.setScissorTest(nt),Mt){const kt=At.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,kt.__webglTexture,$)}else if(Ot){const kt=X;for(let le=0;le<U.textures.length;le++){const ce=At.get(U.textures[le]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+le,ce.__webglTexture,$,kt)}}else if(U!==null&&$!==0){const kt=At.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,kt.__webglTexture,$)}F=-1},this.readRenderTargetPixels=function(U,X,$,it,q,Mt,Ot,Xt=0){if(!(U&&U.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=At.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){vt.bindFramebuffer(B.FRAMEBUFFER,kt);try{const le=U.textures[Xt],ce=le.format,te=le.type;if(!Tt.textureFormatReadable(ce)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(te)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=U.width-it&&$>=0&&$<=U.height-q&&(U.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Xt),B.readPixels(X,$,it,q,oe.convert(ce),oe.convert(te),Mt))}finally{const le=C!==null?At.get(C).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(U,X,$,it,q,Mt,Ot,Xt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=At.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt)if(X>=0&&X<=U.width-it&&$>=0&&$<=U.height-q){vt.bindFramebuffer(B.FRAMEBUFFER,kt);const le=U.textures[Xt],ce=le.format,te=le.type;if(!Tt.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Me),B.bufferData(B.PIXEL_PACK_BUFFER,Mt.byteLength,B.STREAM_READ),U.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Xt),B.readPixels(X,$,it,q,oe.convert(ce),oe.convert(te),0);const Fe=C!==null?At.get(C).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,Fe);const qe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await i3(B,qe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Me),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Mt),B.deleteBuffer(Me),B.deleteSync(qe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,X=null,$=0){const it=Math.pow(2,-$),q=Math.floor(U.image.width*it),Mt=Math.floor(U.image.height*it),Ot=X!==null?X.x:0,Xt=X!==null?X.y:0;Gt.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ot,Xt,q,Mt),vt.unbindTexture()};const Jo=B.createFramebuffer(),On=B.createFramebuffer();this.copyTextureToTexture=function(U,X,$=null,it=null,q=0,Mt=null){Mt===null&&(q!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=q,q=0):Mt=0);let Ot,Xt,kt,le,ce,te,Me,Fe,qe;const Je=U.isCompressedTexture?U.mipmaps[Mt]:U.image;if($!==null)Ot=$.max.x-$.min.x,Xt=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,le=$.min.x,ce=$.min.y,te=$.isBox3?$.min.z:0;else{const ii=Math.pow(2,-q);Ot=Math.floor(Je.width*ii),Xt=Math.floor(Je.height*ii),U.isDataArrayTexture?kt=Je.depth:U.isData3DTexture?kt=Math.floor(Je.depth*ii):kt=1,le=0,ce=0,te=0}it!==null?(Me=it.x,Fe=it.y,qe=it.z):(Me=0,Fe=0,qe=0);const Ve=oe.convert(X.format),ae=oe.convert(X.type);let Ye;X.isData3DTexture?(Gt.setTexture3D(X,0),Ye=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Gt.setTexture2DArray(X,0),Ye=B.TEXTURE_2D_ARRAY):(Gt.setTexture2D(X,0),Ye=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const we=B.getParameter(B.UNPACK_ROW_LENGTH),Cn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),bs=B.getParameter(B.UNPACK_SKIP_PIXELS),Bn=B.getParameter(B.UNPACK_SKIP_ROWS),js=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Je.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,le),B.pixelStorei(B.UNPACK_SKIP_ROWS,ce),B.pixelStorei(B.UNPACK_SKIP_IMAGES,te);const Ze=U.isDataArrayTexture||U.isData3DTexture,wn=X.isDataArrayTexture||X.isData3DTexture;if(U.isDepthTexture){const ii=At.get(U),Sn=At.get(X),un=At.get(ii.__renderTarget),Rr=At.get(Sn.__renderTarget);vt.bindFramebuffer(B.READ_FRAMEBUFFER,un.__webglFramebuffer),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Ni=0;Ni<kt;Ni++)Ze&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(U).__webglTexture,q,te+Ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(X).__webglTexture,Mt,qe+Ni)),B.blitFramebuffer(le,ce,Ot,Xt,Me,Fe,Ot,Xt,B.DEPTH_BUFFER_BIT,B.NEAREST);vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||U.isRenderTargetTexture||At.has(U)){const ii=At.get(U),Sn=At.get(X);vt.bindFramebuffer(B.READ_FRAMEBUFFER,Jo),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,On);for(let un=0;un<kt;un++)Ze?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ii.__webglTexture,q,te+un):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ii.__webglTexture,q),wn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Sn.__webglTexture,Mt,qe+un):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Sn.__webglTexture,Mt),q!==0?B.blitFramebuffer(le,ce,Ot,Xt,Me,Fe,Ot,Xt,B.COLOR_BUFFER_BIT,B.NEAREST):wn?B.copyTexSubImage3D(Ye,Mt,Me,Fe,qe+un,le,ce,Ot,Xt):B.copyTexSubImage2D(Ye,Mt,Me,Fe,le,ce,Ot,Xt);vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else wn?U.isDataTexture||U.isData3DTexture?B.texSubImage3D(Ye,Mt,Me,Fe,qe,Ot,Xt,kt,Ve,ae,Je.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Ye,Mt,Me,Fe,qe,Ot,Xt,kt,Ve,Je.data):B.texSubImage3D(Ye,Mt,Me,Fe,qe,Ot,Xt,kt,Ve,ae,Je):U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Mt,Me,Fe,Ot,Xt,Ve,ae,Je.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Mt,Me,Fe,Je.width,Je.height,Ve,Je.data):B.texSubImage2D(B.TEXTURE_2D,Mt,Me,Fe,Ot,Xt,Ve,ae,Je);B.pixelStorei(B.UNPACK_ROW_LENGTH,we),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Cn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bs),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,js),Mt===0&&X.generateMipmaps&&B.generateMipmap(Ye),vt.unbindTexture()},this.initRenderTarget=function(U){At.get(U).__webglFramebuffer===void 0&&Gt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Gt.setTextureCube(U,0):U.isData3DTexture?Gt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Gt.setTexture2DArray(U,0):Gt.setTexture2D(U,0),vt.unbindTexture()},this.resetState=function(){z=0,R=0,C=null,vt.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}}const zR=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Vm,AddEquation:_a,AddOperation:hy,AdditiveAnimationBlendMode:Zm,AdditiveBlending:gm,AgXToneMapping:xy,AlphaFormat:qm,AlwaysCompare:Uy,AlwaysDepth:hh,AlwaysStencilFunc:Sm,AmbientLight:bS,AnimationAction:DS,AnimationClip:cc,AnimationLoader:qE,AnimationMixer:ST,AnimationObjectGroup:_T,AnimationUtils:GE,ArcCurve:jy,ArrayCamera:CS,ArrowHelper:XT,AttachedBindMode:ym,Audio:wS,AudioAnalyser:cT,AudioContext:b0,AudioListener:rT,AudioLoader:iT,AxesHelper:qT,BackSide:Yn,BasicDepthPacking:by,BasicShadowMap:X_,BatchedMesh:Wy,Bone:n0,BooleanKeyframeTrack:Mr,Box2:DT,Box3:gn,Box3Helper:kT,BoxGeometry:br,BoxHelper:GT,BufferAttribute:Xe,BufferGeometry:_e,BufferGeometryLoader:AS,ByteType:Gm,Cache:xs,Camera:pf,CameraHelper:HT,CanvasTexture:hE,CapsuleGeometry:bf,CatmullRomCurve3:Ky,CineonToneMapping:py,CircleGeometry:Mf,ClampToEdgeWrapping:ui,Clock:M0,Color:zt,ColorKeyframeTrack:v0,ColorManagement:Re,CompressedArrayTexture:cE,CompressedCubeTexture:uE,CompressedTexture:yf,CompressedTextureLoader:YE,ConeGeometry:vc,ConstantAlphaFactor:ly,ConstantColorFactor:ry,Controls:ZT,CubeCamera:By,CubeReflectionMapping:Xs,CubeRefractionMapping:Ma,CubeTexture:xc,CubeTextureLoader:ZE,CubeUVReflectionMapping:Go,CubicBezierCurve:r0,CubicBezierCurve3:Jy,CubicInterpolant:pS,CullFaceBack:xm,CullFaceFront:W_,CullFaceFrontBack:g1,CullFaceNone:k_,Curve:ss,CurvePath:$y,CustomBlending:q_,CustomToneMapping:my,CylinderGeometry:gc,Cylindrical:RT,Data3DTexture:df,DataArrayTexture:ff,DataTexture:ns,DataTextureLoader:jE,DataUtils:I3,DecrementStencilOp:U1,DecrementWrapStencilOp:L1,DefaultLoadingManager:gS,DepthFormat:Uo,DepthStencilFormat:No,DepthTexture:Sf,DetachedBindMode:vy,DirectionalLight:SS,DirectionalLightHelper:VT,DiscreteInterpolant:mS,DodecahedronGeometry:Ef,DoubleSide:ds,DstAlphaFactor:ey,DstColorFactor:iy,DynamicCopyUsage:Z1,DynamicDrawUsage:G1,DynamicReadUsage:X1,EdgesGeometry:Zy,EllipseCurve:Tf,EqualCompare:Cy,EqualDepth:dh,EqualStencilFunc:B1,EquirectangularReflectionMapping:Yl,EquirectangularRefractionMapping:Zl,Euler:Di,EventDispatcher:_s,ExternalTexture:s0,ExtrudeGeometry:Af,FileLoader:Ys,Float16BufferAttribute:H3,Float32BufferAttribute:Wt,FloatType:ti,Fog:xf,FogExp2:mf,FramebufferTexture:lE,FrontSide:vs,Frustum:Wo,FrustumArray:_f,GLBufferAttribute:TT,GLSL1:K1,GLSL3:bm,GreaterCompare:wy,GreaterDepth:mh,GreaterEqualCompare:Dy,GreaterEqualDepth:ph,GreaterEqualStencilFunc:H1,GreaterStencilFunc:F1,GridHelper:zT,Group:Co,HalfFloatType:Ca,HemisphereLight:vS,HemisphereLightHelper:BT,IcosahedronGeometry:Cf,ImageBitmapLoader:nT,ImageLoader:uc,ImageUtils:Iy,IncrementStencilOp:D1,IncrementWrapStencilOp:N1,InstancedBufferAttribute:Fo,InstancedBufferGeometry:S0,InstancedInterleavedBuffer:Kh,InstancedMesh:ky,Int16BufferAttribute:F3,Int32BufferAttribute:V3,Int8BufferAttribute:O3,IntType:sf,InterleavedBuffer:gf,InterleavedBufferAttribute:wi,Interpolant:Sc,InterpolateDiscrete:Jl,InterpolateLinear:Xh,InterpolateSmooth:sh,InterpolationSamplingMode:$1,InterpolationSamplingType:Q1,InvertStencilOp:I1,KeepStencilOp:ur,KeyframeTrack:ki,LOD:Hy,LatheGeometry:wf,Layers:Bo,LessCompare:Ay,LessDepth:fh,LessEqualCompare:jm,LessEqualDepth:_r,LessEqualStencilFunc:z1,LessStencilFunc:O1,Light:Ua,LightProbe:TS,Line:Aa,Line3:NS,LineBasicMaterial:ei,LineCurve:o0,LineCurve3:Qy,LineDashedMaterial:hS,LineLoop:Xy,LineSegments:ys,LinearFilter:sn,LinearInterpolant:g0,LinearMipMapLinearFilter:S1,LinearMipMapNearestFilter:y1,LinearMipmapLinearFilter:ms,LinearMipmapNearestFilter:zl,LinearSRGBColorSpace:Ea,LinearToneMapping:fy,LinearTransfer:$l,Loader:di,LoaderUtils:Cm,LoadingManager:_0,LoopOnce:_y,LoopPingPong:Sy,LoopRepeat:yy,MOUSE:m1,Material:Zn,MaterialLoader:Pf,MathUtils:Oo,Matrix2:A0,Matrix3:ve,Matrix4:fe,MaxEquation:K_,Mesh:mn,MeshBasicMaterial:Ra,MeshDepthMaterial:p0,MeshDistanceMaterial:m0,MeshLambertMaterial:cS,MeshMatcapMaterial:uS,MeshNormalMaterial:lS,MeshPhongMaterial:rS,MeshPhysicalMaterial:d0,MeshStandardMaterial:f0,MeshToonMaterial:oS,MinEquation:j_,MirroredRepeatWrapping:Kl,MixOperation:uy,MultiplyBlending:_m,MultiplyOperation:pc,NearestFilter:In,NearestMipMapLinearFilter:_1,NearestMipMapNearestFilter:v1,NearestMipmapLinearFilter:To,NearestMipmapNearestFilter:Hm,NeutralToneMapping:gy,NeverCompare:Ty,NeverDepth:uh,NeverStencilFunc:P1,NoBlending:gs,NoColorSpace:Gs,NoToneMapping:es,NormalAnimationBlendMode:hf,NormalBlending:mr,NotEqualCompare:Ry,NotEqualDepth:xh,NotEqualStencilFunc:V1,NumberKeyframeTrack:oc,Object3D:Ie,ObjectLoader:tT,ObjectSpaceNormalMap:Ey,OctahedronGeometry:_c,OneFactor:Q_,OneMinusConstantAlphaFactor:cy,OneMinusConstantColorFactor:oy,OneMinusDstAlphaFactor:ny,OneMinusDstColorFactor:sy,OneMinusSrcAlphaFactor:ch,OneMinusSrcColorFactor:ty,OrthographicCamera:Mc,PCFShadowMap:ef,PCFSoftShadowMap:Bl,PMREMGenerator:Dm,Path:jh,PerspectiveCamera:An,Plane:va,PlaneGeometry:Xo,PlaneHelper:WT,PointLight:yS,PointLightHelper:PT,Points:qy,PointsMaterial:i0,PolarGridHelper:FT,PolyhedronGeometry:Da,PositionalAudio:lT,PropertyBinding:Le,PropertyMixer:RS,QuadraticBezierCurve:l0,QuadraticBezierCurve3:c0,Quaternion:hi,QuaternionKeyframeTrack:bc,QuaternionLinearInterpolant:xS,RED_GREEN_RGTC2_Format:kh,RED_RGTC1_Format:Hh,REVISION:dc,RGBADepthPacking:My,RGBAFormat:qn,RGBAIntegerFormat:uf,RGBA_ASTC_10x10_Format:Ph,RGBA_ASTC_10x5_Format:Nh,RGBA_ASTC_10x6_Format:Lh,RGBA_ASTC_10x8_Format:Ih,RGBA_ASTC_12x10_Format:Oh,RGBA_ASTC_12x12_Format:Bh,RGBA_ASTC_4x4_Format:Eh,RGBA_ASTC_5x4_Format:Th,RGBA_ASTC_5x5_Format:Ah,RGBA_ASTC_6x5_Format:Ch,RGBA_ASTC_6x6_Format:wh,RGBA_ASTC_8x5_Format:Rh,RGBA_ASTC_8x6_Format:Dh,RGBA_ASTC_8x8_Format:Uh,RGBA_BPTC_Format:zh,RGBA_ETC2_EAC_Format:Mh,RGBA_PVRTC_2BPPV1_Format:yh,RGBA_PVRTC_4BPPV1_Format:_h,RGBA_S3TC_DXT1_Format:Vl,RGBA_S3TC_DXT3_Format:Hl,RGBA_S3TC_DXT5_Format:Gl,RGBDepthPacking:A1,RGBFormat:Ym,RGBIntegerFormat:b1,RGB_BPTC_SIGNED_Format:Fh,RGB_BPTC_UNSIGNED_Format:Vh,RGB_ETC1_Format:Sh,RGB_ETC2_Format:bh,RGB_PVRTC_2BPPV1_Format:vh,RGB_PVRTC_4BPPV1_Format:gh,RGB_S3TC_DXT1_Format:Fl,RGDepthPacking:C1,RGFormat:lf,RGIntegerFormat:cf,RawShaderMaterial:aS,Ray:ko,Raycaster:US,RectAreaLight:MS,RedFormat:of,RedIntegerFormat:mc,ReinhardToneMapping:dy,RenderTarget:Jm,RenderTarget3D:bT,RepeatWrapping:jl,ReplaceStencilOp:R1,ReverseSubtractEquation:Z_,RingGeometry:Rf,SIGNED_RED_GREEN_RGTC2_Format:Wh,SIGNED_RED_RGTC1_Format:Gh,SRGBColorSpace:Xn,SRGBTransfer:Ge,Scene:t0,ShaderChunk:be,ShaderLib:$i,ShaderMaterial:fi,ShadowMaterial:sS,Shape:gr,ShapeGeometry:Df,ShapePath:YT,ShapeUtils:ts,ShortType:km,Skeleton:vf,SkeletonHelper:IT,SkinnedMesh:Gy,Source:Sa,Sphere:vn,SphereGeometry:yc,Spherical:wT,SphericalHarmonics3:ES,SplineCurve:u0,SpotLight:_S,SpotLightHelper:LT,Sprite:Vy,SpriteMaterial:e0,SrcAlphaFactor:lh,SrcAlphaSaturateFactor:ay,SrcColorFactor:$_,StaticCopyUsage:Y1,StaticDrawUsage:tc,StaticReadUsage:W1,StereoCamera:sT,StreamCopyUsage:j1,StreamDrawUsage:k1,StreamReadUsage:q1,StringKeyframeTrack:Er,SubtractEquation:Y_,SubtractiveBlending:vm,TOUCH:x1,TangentSpaceNormalMap:wa,TetrahedronGeometry:Uf,Texture:cn,TextureLoader:KE,TextureUtils:$T,Timer:AT,TimestampQuery:J1,TorusGeometry:Nf,TorusKnotGeometry:Lf,Triangle:ci,TriangleFanDrawMode:T1,TriangleStripDrawMode:E1,TrianglesDrawMode:M1,TubeGeometry:If,UVMapping:nf,Uint16BufferAttribute:Qm,Uint32BufferAttribute:$m,Uint8BufferAttribute:B3,Uint8ClampedBufferAttribute:z3,Uniform:Of,UniformsGroup:ET,UniformsLib:Dt,UniformsUtils:ic,UnsignedByteType:Gi,UnsignedInt101111Type:Xm,UnsignedInt248Type:Do,UnsignedInt5999Type:Wm,UnsignedIntType:qs,UnsignedShort4444Type:af,UnsignedShort5551Type:rf,UnsignedShortType:Ro,VSMShadowMap:Qi,Vector2:ht,Vector3:P,Vector4:Te,VectorKeyframeTrack:lc,VideoFrameTexture:oE,VideoTexture:Yy,WebGL3DRenderTarget:E3,WebGLArrayRenderTarget:M3,WebGLCoordinateSystem:Ci,WebGLCubeRenderTarget:zy,WebGLRenderTarget:is,WebGLRenderer:VS,WebGLUtils:FS,WebGPUCoordinateSystem:Lo,WebXRController:ah,WireframeGeometry:h0,WrapAroundEnding:Ql,ZeroCurvatureEnding:fr,ZeroFactor:J_,ZeroSlopeEnding:dr,ZeroStencilOp:w1,createCanvasElement:Ly,error:pe,getConsoleFunction:n3,log:nc,setConsoleFunction:e3,warn:Nt,warnOnce:Io},Symbol.toStringTag,{value:"Module"}));var Qp={exports:{}},$p={},tm={exports:{}},em={};var g_;function FR(){if(g_)return em;g_=1;var s=Fm();function t(m,x){return m===x&&(m!==0||1/m===1/x)||m!==m&&x!==x}var e=typeof Object.is=="function"?Object.is:t,n=s.useState,i=s.useEffect,r=s.useLayoutEffect,l=s.useDebugValue;function c(m,x){var g=x(),y=n({inst:{value:g,getSnapshot:x}}),M=y[0].inst,S=y[1];return r(function(){M.value=g,M.getSnapshot=x,h(M)&&S({inst:M})},[m,g,x]),i(function(){return h(M)&&S({inst:M}),m(function(){h(M)&&S({inst:M})})},[m]),l(g),g}function h(m){var x=m.getSnapshot;m=m.value;try{var g=x();return!e(m,g)}catch{return!0}}function f(m,x){return x()}var p=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:c;return em.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:p,em}var v_;function VR(){return v_||(v_=1,tm.exports=FR()),tm.exports}var __;function HR(){if(__)return $p;__=1;var s=Fm(),t=VR();function e(f,p){return f===p&&(f!==0||1/f===1/p)||f!==f&&p!==p}var n=typeof Object.is=="function"?Object.is:e,i=t.useSyncExternalStore,r=s.useRef,l=s.useEffect,c=s.useMemo,h=s.useDebugValue;return $p.useSyncExternalStoreWithSelector=function(f,p,m,x,g){var y=r(null);if(y.current===null){var M={hasValue:!1,value:null};y.current=M}else M=y.current;y=c(function(){function _(w){if(!E){if(E=!0,T=w,w=x(w),g!==void 0&&M.hasValue){var I=M.value;if(g(I,w))return A=I}return A=w}if(I=A,n(T,w))return I;var z=x(w);return g!==void 0&&g(I,z)?(T=w,I):(T=w,A=z)}var E=!1,T,A,N=m===void 0?null:m;return[function(){return _(p())},N===null?void 0:function(){return _(N())}]},[p,m,x,g]);var S=i(f,y[0],y[1]);return l(function(){M.hasValue=!0,M.value=S},[S]),h(S),S},$p}var y_;function GR(){return y_||(y_=1,Qp.exports=HR()),Qp.exports}var kR=GR();const WR=G_(kR),S_=s=>{let t;const e=new Set,n=(f,p)=>{const m=typeof f=="function"?f(t):f;if(!Object.is(m,t)){const x=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),e.forEach(g=>g(t,x))}},i=()=>t,c={setState:n,getState:i,getInitialState:()=>h,subscribe:f=>(e.add(f),()=>e.delete(f))},h=t=s(n,i,c);return c},XR=(s=>s?S_(s):S_),{useSyncExternalStoreWithSelector:qR}=WR,YR=s=>s;function ZR(s,t=YR,e){const n=qR(s.subscribe,s.getState,s.getInitialState,t,e);return f1.useDebugValue(n),n}const b_=(s,t)=>{const e=XR(s),n=(i,r=t)=>ZR(e,i,r);return Object.assign(n,e),n},jR=((s,t)=>s?b_(s,t):b_);var nm={exports:{}},im={exports:{}},sm={exports:{}},am={};var M_;function KR(){return M_||(M_=1,(function(s){function t(G,tt){var Z=G.length;G.push(tt);t:for(;0<Z;){var at=Z-1>>>1,ct=G[at];if(0<i(ct,tt))G[at]=tt,G[Z]=ct,Z=at;else break t}}function e(G){return G.length===0?null:G[0]}function n(G){if(G.length===0)return null;var tt=G[0],Z=G.pop();if(Z!==tt){G[0]=Z;t:for(var at=0,ct=G.length,_t=ct>>>1;at<_t;){var Vt=2*(at+1)-1,$t=G[Vt],Zt=Vt+1,me=G[Zt];if(0>i($t,Z))Zt<ct&&0>i(me,$t)?(G[at]=me,G[Zt]=Z,at=Zt):(G[at]=$t,G[Vt]=Z,at=Vt);else if(Zt<ct&&0>i(me,Z))G[at]=me,G[Zt]=Z,at=Zt;else break t}}return tt}function i(G,tt){var Z=G.sortIndex-tt.sortIndex;return Z!==0?Z:G.id-tt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;s.unstable_now=function(){return r.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var h=[],f=[],p=1,m=null,x=3,g=!1,y=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function T(G){for(var tt=e(f);tt!==null;){if(tt.callback===null)n(f);else if(tt.startTime<=G)n(f),tt.sortIndex=tt.expirationTime,t(h,tt);else break;tt=e(f)}}function A(G){if(M=!1,T(G),!y)if(e(h)!==null)y=!0,J();else{var tt=e(f);tt!==null&&nt(A,tt.startTime-G)}}var N=!1,w=-1,I=5,z=-1;function R(){return!(s.unstable_now()-z<I)}function C(){if(N){var G=s.unstable_now();z=G;var tt=!0;try{t:{y=!1,M&&(M=!1,_(w),w=-1),g=!0;var Z=x;try{e:{for(T(G),m=e(h);m!==null&&!(m.expirationTime>G&&R());){var at=m.callback;if(typeof at=="function"){m.callback=null,x=m.priorityLevel;var ct=at(m.expirationTime<=G);if(G=s.unstable_now(),typeof ct=="function"){m.callback=ct,T(G),tt=!0;break e}m===e(h)&&n(h),T(G)}else n(h);m=e(h)}if(m!==null)tt=!0;else{var _t=e(f);_t!==null&&nt(A,_t.startTime-G),tt=!1}}break t}finally{m=null,x=Z,g=!1}tt=void 0}}finally{tt?F():N=!1}}}var F;if(typeof E=="function")F=function(){E(C)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,k=W.port2;W.port1.onmessage=C,F=function(){k.postMessage(null)}}else F=function(){S(C,0)};function J(){N||(N=!0,F())}function nt(G,tt){w=S(function(){G(s.unstable_now())},tt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){y||g||(y=!0,J())},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return e(h)},s.unstable_next=function(G){switch(x){case 1:case 2:case 3:var tt=3;break;default:tt=x}var Z=x;x=tt;try{return G()}finally{x=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,tt){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Z=x;x=G;try{return tt()}finally{x=Z}},s.unstable_scheduleCallback=function(G,tt,Z){var at=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?at+Z:at):Z=at,G){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=Z+ct,G={id:p++,callback:tt,priorityLevel:G,startTime:Z,expirationTime:ct,sortIndex:-1},Z>at?(G.sortIndex=Z,t(f,G),e(h)===null&&G===e(f)&&(M?(_(w),w=-1):M=!0,nt(A,Z-at))):(G.sortIndex=ct,t(h,G),y||g||(y=!0,J())),G},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(G){var tt=x;return function(){var Z=x;x=tt;try{return G.apply(this,arguments)}finally{x=Z}}}})(am)),am}var E_;function HS(){return E_||(E_=1,sm.exports=KR()),sm.exports}var T_;function JR(){return T_||(T_=1,(function(s){s.exports=function(t){function e(a,o,u,d){return new Rb(a,o,u,d)}function n(){}function i(a){var o="https://react.dev/errors/"+a;if(1<arguments.length){o+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+a+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(a){return a===null||typeof a!="object"?null:(a=rg&&a[rg]||a["@@iterator"],typeof a=="function"?a:null)}function l(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Pb?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case Pr:return"Fragment";case Ir:return"Portal";case Rd:return"Profiler";case ig:return"StrictMode";case Ud:return"Suspense";case Nd:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case ea:return(a.displayName||"Context")+".Provider";case sg:return(a._context.displayName||"Context")+".Consumer";case Dd:var o=a.render;return a=a.displayName,a||(a=o.displayName||o.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case Ld:return o=a.displayName||null,o!==null?o:l(a.type)||"Memo";case na:o=a._payload,a=a._init;try{return l(a(o))}catch{}}return null}function c(a){if(Id===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);Id=o&&o[1]||"",og=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Id+a+og}function h(a,o){if(!a||Pd)return"";Pd=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var d={DetermineComponentFrameRoot:function(){try{if(o){var Bt=function(){throw Error()};if(Object.defineProperty(Bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Bt,[])}catch(ye){var Ht=ye}Reflect.construct(a,[],Bt)}else{try{Bt.call()}catch(ye){Ht=ye}a.call(Bt.prototype)}}else{try{throw Error()}catch(ye){Ht=ye}(Bt=a())&&typeof Bt.catch=="function"&&Bt.catch(function(){})}}catch(ye){if(ye&&Ht&&typeof ye.stack=="string")return[ye.stack,Ht.stack]}return[null,null]}};d.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var v=Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot,"name");v&&v.configurable&&Object.defineProperty(d.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=d.DetermineComponentFrameRoot(),L=b[0],V=b[1];if(L&&V){var j=L.split(`
`),lt=V.split(`
`);for(v=d=0;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;for(;v<lt.length&&!lt[v].includes("DetermineComponentFrameRoot");)v++;if(d===j.length||v===lt.length)for(d=j.length-1,v=lt.length-1;1<=d&&0<=v&&j[d]!==lt[v];)v--;for(;1<=d&&0<=v;d--,v--)if(j[d]!==lt[v]){if(d!==1||v!==1)do if(d--,v--,0>v||j[d]!==lt[v]){var Et=`
`+j[d].replace(" at new "," at ");return a.displayName&&Et.includes("<anonymous>")&&(Et=Et.replace("<anonymous>",a.displayName)),Et}while(1<=d&&0<=v);break}}}finally{Pd=!1,Error.prepareStackTrace=u}return(u=a?a.displayName||a.name:"")?c(u):""}function f(a){switch(a.tag){case 26:case 27:case 5:return c(a.type);case 16:return c("Lazy");case 13:return c("Suspense");case 19:return c("SuspenseList");case 0:case 15:return a=h(a.type,!1),a;case 11:return a=h(a.type.render,!1),a;case 1:return a=h(a.type,!0),a;default:return""}}function p(a){try{var o="";do o+=f(a),a=a.return;while(a);return o}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}function m(a){var o=a,u=a;if(a.alternate)for(;o.return;)o=o.return;else{a=o;do o=a,(o.flags&4098)!==0&&(u=o.return),a=o.return;while(a)}return o.tag===3?u:null}function x(a){if(m(a)!==a)throw Error(i(188))}function g(a){var o=a.alternate;if(!o){if(o=m(a),o===null)throw Error(i(188));return o!==a?null:a}for(var u=a,d=o;;){var v=u.return;if(v===null)break;var b=v.alternate;if(b===null){if(d=v.return,d!==null){u=d;continue}break}if(v.child===b.child){for(b=v.child;b;){if(b===u)return x(v),a;if(b===d)return x(v),o;b=b.sibling}throw Error(i(188))}if(u.return!==d.return)u=v,d=b;else{for(var L=!1,V=v.child;V;){if(V===u){L=!0,u=v,d=b;break}if(V===d){L=!0,d=v,u=b;break}V=V.sibling}if(!L){for(V=b.child;V;){if(V===u){L=!0,u=b,d=v;break}if(V===d){L=!0,d=b,u=v;break}V=V.sibling}if(!L)throw Error(i(189))}}if(u.alternate!==d)throw Error(i(190))}if(u.tag!==3)throw Error(i(188));return u.stateNode.current===u?a:o}function y(a){var o=a.tag;if(o===5||o===26||o===27||o===6)return a;for(a=a.child;a!==null;){if(o=y(a),o!==null)return o;a=a.sibling}return null}function M(a){var o=a.tag;if(o===5||o===26||o===27||o===6)return a;for(a=a.child;a!==null;){if(a.tag!==4&&(o=M(a),o!==null))return o;a=a.sibling}return null}function S(a){return{current:a}}function _(a){0>Br||(a.current=Hd[Br],Hd[Br]=null,Br--)}function E(a,o){Br++,Hd[Br]=a.current,a.current=o}function T(a){return a>>>=0,a===0?32:31-(KM(a)/JM|0)|0}function A(a){var o=a&42;if(o!==0)return o;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function N(a,o){var u=a.pendingLanes;if(u===0)return 0;var d=0,v=a.suspendedLanes,b=a.pingedLanes,L=a.warmLanes;a=a.finishedLanes!==0;var V=u&134217727;return V!==0?(u=V&~v,u!==0?d=A(u):(b&=V,b!==0?d=A(b):a||(L=V&~L,L!==0&&(d=A(L))))):(V=u&~v,V!==0?d=A(V):b!==0?d=A(b):a||(L=u&~L,L!==0&&(d=A(L)))),d===0?0:o!==0&&o!==d&&(o&v)===0&&(v=d&-d,L=o&-o,v>=L||v===32&&(L&4194176)!==0)?o:d}function w(a,o){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&o)===0}function I(a,o){switch(a){case 1:case 2:case 4:case 8:return o+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z(){var a=Gc;return Gc<<=1,(Gc&4194176)===0&&(Gc=128),a}function R(){var a=kc;return kc<<=1,(kc&62914560)===0&&(kc=4194304),a}function C(a){for(var o=[],u=0;31>u;u++)o.push(a);return o}function F(a,o){a.pendingLanes|=o,o!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function W(a,o,u,d,v,b){var L=a.pendingLanes;a.pendingLanes=u,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=u,a.entangledLanes&=u,a.errorRecoveryDisabledLanes&=u,a.shellSuspendCounter=0;var V=a.entanglements,j=a.expirationTimes,lt=a.hiddenUpdates;for(u=L&~u;0<u;){var Et=31-yi(u),Bt=1<<Et;V[Et]=0,j[Et]=-1;var Ht=lt[Et];if(Ht!==null)for(lt[Et]=null,Et=0;Et<Ht.length;Et++){var ye=Ht[Et];ye!==null&&(ye.lane&=-536870913)}u&=~Bt}d!==0&&k(a,d,0),b!==0&&v===0&&a.tag!==0&&(a.suspendedLanes|=b&~(L&~o))}function k(a,o,u){a.pendingLanes|=o,a.suspendedLanes&=~o;var d=31-yi(o);a.entangledLanes|=o,a.entanglements[d]=a.entanglements[d]|1073741824|u&4194218}function J(a,o){var u=a.entangledLanes|=o;for(a=a.entanglements;u;){var d=31-yi(u),v=1<<d;v&o|a[d]&o&&(a[d]|=o),u&=~v}}function nt(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function G(a){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(cl,a,void 0,(a.current.flags&128)===128)}catch{}}function tt(a){if(typeof n1=="function"&&i1(a),Si&&typeof Si.setStrictMode=="function")try{Si.setStrictMode(cl,a)}catch{}}function Z(a,o){return a===o&&(a!==0||1/a===1/o)||a!==a&&o!==o}function at(a,o){if(typeof a=="object"&&a!==null){var u=Lg.get(a);return u!==void 0?u:(o={value:a,source:o,stack:p(o)},Lg.set(a,o),o)}return{value:a,source:o,stack:p(o)}}function ct(a,o){Fr[Vr++]=qc,Fr[Vr++]=Xc,Xc=a,qc=o}function _t(a,o,u){Pi[Oi++]=ws,Pi[Oi++]=Rs,Pi[Oi++]=Va,Va=a;var d=ws;a=Rs;var v=32-yi(d)-1;d&=~(1<<v),u+=1;var b=32-yi(o)+v;if(30<b){var L=v-v%5;b=(d&(1<<L)-1).toString(32),d>>=L,v-=L,ws=1<<32-yi(o)+v|u<<v|d,Rs=b+a}else ws=1<<b|u<<v|d,Rs=a}function Vt(a){a.return!==null&&(ct(a,1),_t(a,1,0))}function $t(a){for(;a===Xc;)Xc=Fr[--Vr],Fr[Vr]=null,qc=Fr[--Vr],Fr[Vr]=null;for(;a===Va;)Va=Pi[--Oi],Pi[Oi]=null,Rs=Pi[--Oi],Pi[Oi]=null,ws=Pi[--Oi],Pi[Oi]=null}function Zt(a,o){E(sa,o),E(ul,a),E(Dn,null),a=zb(o),_(Dn),E(Dn,a)}function me(){_(Dn),_(ul),_(sa)}function ot(a){a.memoizedState!==null&&E(Yc,a);var o=Dn.current,u=Fb(o,a.type);o!==u&&(E(ul,a),E(Dn,u))}function pt(a){ul.current===a&&(_(Dn),_(ul)),Yc.current===a&&(_(Yc),Cs?Fa._currentValue=Or:Fa._currentValue2=Or)}function Lt(a){var o=Error(i(418,""));throw re(at(o,a)),Wd}function ee(a,o){if(!Li)throw Error(i(175));NM(a.stateNode,a.type,a.memoizedProps,o,a)||Lt(a)}function jt(a){for(Kn=a.return;Kn;)switch(Kn.tag){case 3:case 27:as=!0;return;case 5:case 13:as=!1;return;default:Kn=Kn.return}}function ge(a){if(!Li||a!==Kn)return!1;if(!Pe)return jt(a),Pe=!0,!1;var o=!1;if(Vn?a.tag!==3&&a.tag!==27&&(a.tag!==5||bg(a.type)&&!Hc(a.type,a.memoizedProps))&&(o=!0):a.tag!==3&&(a.tag!==5||bg(a.type)&&!Hc(a.type,a.memoizedProps))&&(o=!0),o&&Hn&&Lt(a),jt(a),a.tag===13){if(!Li)throw Error(i(316));if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));Hn=PM(a)}else Hn=Kn?yg(a.stateNode):null;return!0}function Ue(){Li&&(Hn=Kn=null,Pe=!1)}function re(a){Yi===null?Yi=[a]:Yi.push(a)}function mt(){for(var a=Hr,o=Xd=Hr=0;o<a;){var u=Bi[o];Bi[o++]=null;var d=Bi[o];Bi[o++]=null;var v=Bi[o];Bi[o++]=null;var b=Bi[o];if(Bi[o++]=null,d!==null&&v!==null){var L=d.pending;L===null?v.next=v:(v.next=L.next,L.next=v),d.pending=v}b!==0&&Tt(u,v,b)}}function B(a,o,u,d){Bi[Hr++]=a,Bi[Hr++]=o,Bi[Hr++]=u,Bi[Hr++]=d,Xd|=d,a.lanes|=d,a=a.alternate,a!==null&&(a.lanes|=d)}function xt(a,o,u,d){return B(a,o,u,d),vt(a)}function gt(a,o){return B(a,null,null,o),vt(a)}function Tt(a,o,u){a.lanes|=u;var d=a.alternate;d!==null&&(d.lanes|=u);for(var v=!1,b=a.return;b!==null;)b.childLanes|=u,d=b.alternate,d!==null&&(d.childLanes|=u),b.tag===22&&(a=b.stateNode,a===null||a._visibility&1||(v=!0)),a=b,b=b.return;v&&o!==null&&a.tag===3&&(b=a.stateNode,v=31-yi(u),b=b.hiddenUpdates,a=b[v],a===null?b[v]=[o]:a.push(o),o.lane=u|536870912)}function vt(a){if(50<_l)throw _l=0,op=null,Error(i(185));for(var o=a.return;o!==null;)a=o,o=a.return;return a.tag===3?a.stateNode:null}function It(a){a!==Gr&&a.next===null&&(Gr===null?Zc=Gr=a:Gr=Gr.next=a),jc=!0,qd||(qd=!0,rt(Gt))}function At(a,o){if(!Yd&&jc){Yd=!0;do for(var u=!1,d=Zc;d!==null;){if(a!==0){var v=d.pendingLanes;if(v===0)var b=0;else{var L=d.suspendedLanes,V=d.pingedLanes;b=(1<<31-yi(42|a)+1)-1,b&=v&~(L&~V),b=b&201326677?b&201326677|1:b?b|2:0}b!==0&&(u=!0,K(d,b))}else b=De,b=N(d,d===je?b:0),(b&3)===0||w(d,b)||(u=!0,K(d,b));d=d.next}while(u);Yd=!1}}function Gt(){jc=qd=!1;var a=0;kr!==0&&(Yb()&&(a=kr),kr=0);for(var o=qi(),u=null,d=Zc;d!==null;){var v=d.next,b=O(d,o);b===0?(d.next=null,u===null?Zc=v:u.next=v,v===null&&(Gr=u)):(u=d,(a!==0||(b&3)!==0)&&(jc=!0)),d=v}At(a)}function O(a,o){for(var u=a.suspendedLanes,d=a.pingedLanes,v=a.expirationTimes,b=a.pendingLanes&-62914561;0<b;){var L=31-yi(b),V=1<<L,j=v[L];j===-1?((V&u)===0||(V&d)!==0)&&(v[L]=I(V,o)):j<=o&&(a.expiredLanes|=V),b&=~V}if(o=je,u=De,u=N(a,a===o?u:0),d=a.callbackNode,u===0||a===o&&Ke===2||a.cancelPendingCommit!==null)return d!==null&&d!==null&&Gd(d),a.callbackNode=null,a.callbackPriority=0;if((u&3)===0||w(a,u)){if(o=u&-u,o===a.callbackPriority)return o;switch(d!==null&&Gd(d),nt(u)){case 2:case 8:u=t1;break;case 32:u=kd;break;case 268435456:u=e1;break;default:u=kd}return d=D.bind(null,a),u=Wc(u,d),a.callbackPriority=o,a.callbackNode=u,o}return d!==null&&d!==null&&Gd(d),a.callbackPriority=2,a.callbackNode=null,2}function D(a,o){var u=a.callbackNode;if(Oa()&&a.callbackNode!==u)return null;var d=De;return d=N(a,a===je?d:0),d===0?null:(Ox(a,d,o),O(a,qi()),a.callbackNode!=null&&a.callbackNode===u?D.bind(null,a):null)}function K(a,o){if(Oa())return null;Ox(a,o,!0)}function rt(a){$b?tM(function(){(We&6)!==0?Wc(Ng,a):a()}):Wc(Ng,a)}function dt(){return kr===0&&(kr=z()),kr}function st(a,o){if(hl===null){var u=hl=[];Zd=0,Wr=dt(),Xr={status:"pending",value:void 0,then:function(d){u.push(d)}}}return Zd++,o.then(Kt,Kt),o}function Kt(){if(--Zd===0&&hl!==null){Xr!==null&&(Xr.status="fulfilled");var a=hl;hl=null,Wr=0,Xr=null;for(var o=0;o<a.length;o++)(0,a[o])()}}function Rt(a,o){var u=[],d={status:"pending",value:null,reason:null,then:function(v){u.push(v)}};return a.then(function(){d.status="fulfilled",d.value=o;for(var v=0;v<u.length;v++)(0,u[v])(o)},function(v){for(d.status="rejected",d.reason=v,v=0;v<u.length;v++)(0,u[v])(void 0)}),d}function Qt(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qt(a,o){a=a.updateQueue,o.updateQueue===a&&(o.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function ft(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function bt(a,o,u){var d=a.updateQueue;if(d===null)return null;if(d=d.shared,(We&2)!==0){var v=d.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),d.pending=o,o=vt(a),Tt(a,null,u),o}return B(a,d,o,u),vt(a)}function ie(a,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194176)!==0)){var d=o.lanes;d&=a.pendingLanes,u|=d,o.lanes=u,J(a,u)}}function se(a,o){var u=a.updateQueue,d=a.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var v=null,b=null;if(u=u.firstBaseUpdate,u!==null){do{var L={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};b===null?v=b=L:b=b.next=L,u=u.next}while(u!==null);b===null?v=b=o:b=b.next=o}else v=b=o;u={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:b,shared:d.shared,callbacks:d.callbacks},a.updateQueue=u;return}a=u.lastBaseUpdate,a===null?u.firstBaseUpdate=o:a.next=o,u.lastBaseUpdate=o}function Pt(){if(jd){var a=Xr;if(a!==null)throw a}}function oe(a,o,u,d){jd=!1;var v=a.updateQueue;aa=!1;var b=v.firstBaseUpdate,L=v.lastBaseUpdate,V=v.shared.pending;if(V!==null){v.shared.pending=null;var j=V,lt=j.next;j.next=null,L===null?b=lt:L.next=lt,L=j;var Et=a.alternate;Et!==null&&(Et=Et.updateQueue,V=Et.lastBaseUpdate,V!==L&&(V===null?Et.firstBaseUpdate=lt:V.next=lt,Et.lastBaseUpdate=j))}if(b!==null){var Bt=v.baseState;L=0,Et=lt=j=null,V=b;do{var Ht=V.lane&-536870913,ye=Ht!==V.lane;if(ye?(De&Ht)===Ht:(d&Ht)===Ht){Ht!==0&&Ht===Wr&&(jd=!0),Et!==null&&(Et=Et.next={lane:0,tag:V.tag,payload:V.payload,callback:null,next:null});t:{var Vi=a,yl=V;Ht=o;var ja=u;switch(yl.tag){case 1:if(Vi=yl.payload,typeof Vi=="function"){Bt=Vi.call(ja,Bt,Ht);break t}Bt=Vi;break t;case 3:Vi.flags=Vi.flags&-65537|128;case 0:if(Vi=yl.payload,Ht=typeof Vi=="function"?Vi.call(ja,Bt,Ht):Vi,Ht==null)break t;Bt=wd({},Bt,Ht);break t;case 2:aa=!0}}Ht=V.callback,Ht!==null&&(a.flags|=64,ye&&(a.flags|=8192),ye=v.callbacks,ye===null?v.callbacks=[Ht]:ye.push(Ht))}else ye={lane:Ht,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Et===null?(lt=Et=ye,j=Bt):Et=Et.next=ye,L|=Ht;if(V=V.next,V===null){if(V=v.shared.pending,V===null)break;ye=V,V=ye.next,ye.next=null,v.lastBaseUpdate=ye,v.shared.pending=null}}while(!0);Et===null&&(j=Bt),v.baseState=j,v.firstBaseUpdate=lt,v.lastBaseUpdate=Et,b===null&&(v.shared.lanes=0),la|=L,a.lanes=L,a.memoizedState=Bt}}function H(a,o){if(typeof a!="function")throw Error(i(191,a));a.call(o)}function Ut(a,o){var u=a.callbacks;if(u!==null)for(a.callbacks=null,a=0;a<u.length;a++)H(u[a],o)}function Ct(a,o){if(bi(a,o))return!0;if(typeof a!="object"||a===null||typeof o!="object"||o===null)return!1;var u=Object.keys(a),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var v=u[d];if(!s1.call(o,v)||!bi(a[v],o[v]))return!1}return!0}function wt(a){return a=a.status,a==="fulfilled"||a==="rejected"}function yt(){}function ut(a,o,u){switch(u=a[u],u===void 0?a.push(o):u!==o&&(o.then(yt,yt),o=u),o.status){case"fulfilled":return o.value;case"rejected":throw a=o.reason,a===fl?Error(i(483)):a;default:if(typeof o.status=="string")o.then(yt,yt);else{if(a=je,a!==null&&100<a.shellSuspendCounter)throw Error(i(482));a=o,a.status="pending",a.then(function(d){if(o.status==="pending"){var v=o;v.status="fulfilled",v.value=d}},function(d){if(o.status==="pending"){var v=o;v.status="rejected",v.reason=d}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw a=o.reason,a===fl?Error(i(483)):a}throw qr=o,fl}}function Yt(){if(qr===null)throw Error(i(459));var a=qr;return qr=null,a}function ue(a){var o=dl;return dl+=1,Yr===null&&(Yr=[]),ut(Yr,a,o)}function ze(a,o){o=o.props.ref,a.ref=o!==void 0?o:null}function Ne(a,o){throw o.$$typeof===Nb?Error(i(525)):(a=Object.prototype.toString.call(o),Error(i(31,a==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":a)))}function pi(a){var o=a._init;return o(a._payload)}function ni(a){function o(Q,Y){if(a){var et=Q.deletions;et===null?(Q.deletions=[Y],Q.flags|=16):et.push(Y)}}function u(Q,Y){if(!a)return null;for(;Y!==null;)o(Q,Y),Y=Y.sibling;return null}function d(Q){for(var Y=new Map;Q!==null;)Q.key!==null?Y.set(Q.key,Q):Y.set(Q.index,Q),Q=Q.sibling;return Y}function v(Q,Y){return Q=ta(Q,Y),Q.index=0,Q.sibling=null,Q}function b(Q,Y,et){return Q.index=et,a?(et=Q.alternate,et!==null?(et=et.index,et<Y?(Q.flags|=33554434,Y):et):(Q.flags|=33554434,Y)):(Q.flags|=1048576,Y)}function L(Q){return a&&Q.alternate===null&&(Q.flags|=33554434),Q}function V(Q,Y,et,St){return Y===null||Y.tag!==6?(Y=Td(et,Q.mode,St),Y.return=Q,Y):(Y=v(Y,et),Y.return=Q,Y)}function j(Q,Y,et,St){var ne=et.type;return ne===Pr?Et(Q,Y,et.props.children,St,et.key):Y!==null&&(Y.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===na&&pi(ne)===Y.type)?(Y=v(Y,et.props),ze(Y,et),Y.return=Q,Y):(Y=zc(et.type,et.key,et.props,null,Q.mode,St),ze(Y,et),Y.return=Q,Y)}function lt(Q,Y,et,St){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==et.containerInfo||Y.stateNode.implementation!==et.implementation?(Y=Ad(et,Q.mode,St),Y.return=Q,Y):(Y=v(Y,et.children||[]),Y.return=Q,Y)}function Et(Q,Y,et,St,ne){return Y===null||Y.tag!==7?(Y=Ba(et,Q.mode,St,ne),Y.return=Q,Y):(Y=v(Y,et),Y.return=Q,Y)}function Bt(Q,Y,et){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Td(""+Y,Q.mode,et),Y.return=Q,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Fc:return et=zc(Y.type,Y.key,Y.props,null,Q.mode,et),ze(et,Y),et.return=Q,et;case Ir:return Y=Ad(Y,Q.mode,et),Y.return=Q,Y;case na:var St=Y._init;return Y=St(Y._payload),Bt(Q,Y,et)}if(Vc(Y)||r(Y))return Y=Ba(Y,Q.mode,et,null),Y.return=Q,Y;if(typeof Y.then=="function")return Bt(Q,ue(Y),et);if(Y.$$typeof===ea)return Bt(Q,Nc(Q,Y),et);Ne(Q,Y)}return null}function Ht(Q,Y,et,St){var ne=Y!==null?Y.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ne!==null?null:V(Q,Y,""+et,St);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case Fc:return et.key===ne?j(Q,Y,et,St):null;case Ir:return et.key===ne?lt(Q,Y,et,St):null;case na:return ne=et._init,et=ne(et._payload),Ht(Q,Y,et,St)}if(Vc(et)||r(et))return ne!==null?null:Et(Q,Y,et,St,null);if(typeof et.then=="function")return Ht(Q,Y,ue(et),St);if(et.$$typeof===ea)return Ht(Q,Y,Nc(Q,et),St);Ne(Q,et)}return null}function ye(Q,Y,et,St,ne){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(et)||null,V(Y,Q,""+St,ne);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case Fc:return Q=Q.get(St.key===null?et:St.key)||null,j(Y,Q,St,ne);case Ir:return Q=Q.get(St.key===null?et:St.key)||null,lt(Y,Q,St,ne);case na:var Qe=St._init;return St=Qe(St._payload),ye(Q,Y,et,St,ne)}if(Vc(St)||r(St))return Q=Q.get(et)||null,Et(Y,Q,St,ne,null);if(typeof St.then=="function")return ye(Q,Y,et,ue(St),ne);if(St.$$typeof===ea)return ye(Q,Y,et,Nc(Y,St),ne);Ne(Y,St)}return null}function Vi(Q,Y,et,St){for(var ne=null,Qe=null,de=Y,Oe=Y=0,En=null;de!==null&&Oe<et.length;Oe++){de.index>Oe?(En=de,de=null):En=de.sibling;var Be=Ht(Q,de,et[Oe],St);if(Be===null){de===null&&(de=En);break}a&&de&&Be.alternate===null&&o(Q,de),Y=b(Be,Y,Oe),Qe===null?ne=Be:Qe.sibling=Be,Qe=Be,de=En}if(Oe===et.length)return u(Q,de),Pe&&ct(Q,Oe),ne;if(de===null){for(;Oe<et.length;Oe++)de=Bt(Q,et[Oe],St),de!==null&&(Y=b(de,Y,Oe),Qe===null?ne=de:Qe.sibling=de,Qe=de);return Pe&&ct(Q,Oe),ne}for(de=d(de);Oe<et.length;Oe++)En=ye(de,Q,Oe,et[Oe],St),En!==null&&(a&&En.alternate!==null&&de.delete(En.key===null?Oe:En.key),Y=b(En,Y,Oe),Qe===null?ne=En:Qe.sibling=En,Qe=En);return a&&de.forEach(function(ua){return o(Q,ua)}),Pe&&ct(Q,Oe),ne}function yl(Q,Y,et,St){if(et==null)throw Error(i(151));for(var ne=null,Qe=null,de=Y,Oe=Y=0,En=null,Be=et.next();de!==null&&!Be.done;Oe++,Be=et.next()){de.index>Oe?(En=de,de=null):En=de.sibling;var ua=Ht(Q,de,Be.value,St);if(ua===null){de===null&&(de=En);break}a&&de&&ua.alternate===null&&o(Q,de),Y=b(ua,Y,Oe),Qe===null?ne=ua:Qe.sibling=ua,Qe=ua,de=En}if(Be.done)return u(Q,de),Pe&&ct(Q,Oe),ne;if(de===null){for(;!Be.done;Oe++,Be=et.next())Be=Bt(Q,Be.value,St),Be!==null&&(Y=b(Be,Y,Oe),Qe===null?ne=Be:Qe.sibling=Be,Qe=Be);return Pe&&ct(Q,Oe),ne}for(de=d(de);!Be.done;Oe++,Be=et.next())Be=ye(de,Q,Oe,Be.value,St),Be!==null&&(a&&Be.alternate!==null&&de.delete(Be.key===null?Oe:Be.key),Y=b(Be,Y,Oe),Qe===null?ne=Be:Qe.sibling=Be,Qe=Be);return a&&de.forEach(function(h1){return o(Q,h1)}),Pe&&ct(Q,Oe),ne}function ja(Q,Y,et,St){if(typeof et=="object"&&et!==null&&et.type===Pr&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case Fc:t:{for(var ne=et.key;Y!==null;){if(Y.key===ne){if(ne=et.type,ne===Pr){if(Y.tag===7){u(Q,Y.sibling),St=v(Y,et.props.children),St.return=Q,Q=St;break t}}else if(Y.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===na&&pi(ne)===Y.type){u(Q,Y.sibling),St=v(Y,et.props),ze(St,et),St.return=Q,Q=St;break t}u(Q,Y);break}else o(Q,Y);Y=Y.sibling}et.type===Pr?(St=Ba(et.props.children,Q.mode,St,et.key),St.return=Q,Q=St):(St=zc(et.type,et.key,et.props,null,Q.mode,St),ze(St,et),St.return=Q,Q=St)}return L(Q);case Ir:t:{for(ne=et.key;Y!==null;){if(Y.key===ne)if(Y.tag===4&&Y.stateNode.containerInfo===et.containerInfo&&Y.stateNode.implementation===et.implementation){u(Q,Y.sibling),St=v(Y,et.children||[]),St.return=Q,Q=St;break t}else{u(Q,Y);break}else o(Q,Y);Y=Y.sibling}St=Ad(et,Q.mode,St),St.return=Q,Q=St}return L(Q);case na:return ne=et._init,et=ne(et._payload),ja(Q,Y,et,St)}if(Vc(et))return Vi(Q,Y,et,St);if(r(et)){if(ne=r(et),typeof ne!="function")throw Error(i(150));return et=ne.call(et),yl(Q,Y,et,St)}if(typeof et.then=="function")return ja(Q,Y,ue(et),St);if(et.$$typeof===ea)return ja(Q,Y,Nc(Q,et),St);Ne(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,Y!==null&&Y.tag===6?(u(Q,Y.sibling),St=v(Y,et),St.return=Q,Q=St):(u(Q,Y),St=Td(et,Q.mode,St),St.return=Q,Q=St),L(Q)):u(Q,Y)}return function(Q,Y,et,St){try{dl=0;var ne=ja(Q,Y,et,St);return Yr=null,ne}catch(de){if(de===fl)throw de;var Qe=e(29,de,null,Q.mode);return Qe.lanes=St,Qe.return=Q,Qe}}}function Ac(a,o){a=Ls,E(Jc,a),E(Zr,o),Ls=a|o.baseLanes}function Tr(){E(Jc,Ls),E(Zr,Zr.current)}function Ar(){Ls=Jc.current,_(Zr),_(Jc)}function Pn(a){var o=a.alternate;E(xn,xn.current&1),E(zi,a),rs===null&&(o===null||Zr.current!==null||o.memoizedState!==null)&&(rs=a)}function Cr(a){if(a.tag===22){if(E(xn,xn.current),E(zi,a),rs===null){var o=a.alternate;o!==null&&o.memoizedState!==null&&(rs=a)}}else Wi()}function Wi(){E(xn,xn.current),E(zi,zi.current)}function Ui(a){_(zi),rs===a&&(rs=null),_(xn)}function Ss(a){for(var o=a;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||zd(u)||Fd(u)))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break;for(;o.sibling===null;){if(o.return===null||o.return===a)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}function $e(){throw Error(i(321))}function Zs(a,o){if(o===null)return!1;for(var u=0;u<o.length&&u<a.length;u++)if(!bi(a[u],o[u]))return!1;return!0}function wr(a,o,u,d,v,b){return ra=b,Ee=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,xe.H=a===null||a.memoizedState===null?ka:oa,Ga=!1,b=u(d,v),Ga=!1,jr&&(b=Cc(o,u,d,v)),Zo(a),b}function Zo(a){xe.H=os;var o=ke!==null&&ke.next!==null;if(ra=0,fn=ke=Ee=null,Qc=!1,pl=0,Kr=null,o)throw Error(i(300));a===null||bn||(a=a.dependencies,a!==null&&Uc(a)&&(bn=!0))}function Cc(a,o,u,d){Ee=a;var v=0;do{if(jr&&(Kr=null),pl=0,jr=!1,25<=v)throw Error(i(301));if(v+=1,fn=ke=null,a.updateQueue!=null){var b=a.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}xe.H=Wa,b=o(u,d)}while(jr);return b}function Vf(){var a=xe.H,o=a.useState()[0];return o=typeof o.then=="function"?X(o):o,a=a.useState()[0],(ke!==null?ke.memoizedState:null)!==a&&(Ee.flags|=1024),o}function jo(){var a=$c!==0;return $c=0,a}function Ko(a,o,u){o.updateQueue=a.updateQueue,o.flags&=-2053,a.lanes&=~u}function Jo(a){if(Qc){for(a=a.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}Qc=!1}ra=0,fn=ke=Ee=null,jr=!1,pl=$c=0,Kr=null}function On(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Ee.memoizedState=fn=a:fn=fn.next=a,fn}function U(){if(ke===null){var a=Ee.alternate;a=a!==null?a.memoizedState:null}else a=ke.next;var o=fn===null?Ee.memoizedState:fn.next;if(o!==null)fn=o,ke=a;else{if(a===null)throw Ee.alternate===null?Error(i(467)):Error(i(310));ke=a,a={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},fn===null?Ee.memoizedState=fn=a:fn=fn.next=a}return fn}function X(a){var o=pl;return pl+=1,Kr===null&&(Kr=[]),a=ut(Kr,a,o),o=Ee,(fn===null?o.memoizedState:fn.next)===null&&(o=o.alternate,xe.H=o===null||o.memoizedState===null?ka:oa),a}function $(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return X(a);if(a.$$typeof===ea)return zn(a)}throw Error(i(438,String(a)))}function it(a){var o=null,u=Ee.updateQueue;if(u!==null&&(o=u.memoCache),o==null){var d=Ee.alternate;d!==null&&(d=d.updateQueue,d!==null&&(d=d.memoCache,d!=null&&(o={data:d.data.map(function(v){return v.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),u===null&&(u=Jd(),Ee.updateQueue=u),u.memoCache=o,u=o.data[o.index],u===void 0)for(u=o.data[o.index]=Array(a),d=0;d<a;d++)u[d]=Ib;return o.index++,u}function q(a,o){return typeof o=="function"?o(a):o}function Mt(a){var o=U();return Ot(o,ke,a)}function Ot(a,o,u){var d=a.queue;if(d===null)throw Error(i(311));d.lastRenderedReducer=u;var v=a.baseQueue,b=d.pending;if(b!==null){if(v!==null){var L=v.next;v.next=b.next,b.next=L}o.baseQueue=v=b,d.pending=null}if(b=a.baseState,v===null)a.memoizedState=b;else{o=v.next;var V=L=null,j=null,lt=o,Et=!1;do{var Bt=lt.lane&-536870913;if(Bt!==lt.lane?(De&Bt)===Bt:(ra&Bt)===Bt){var Ht=lt.revertLane;if(Ht===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),Bt===Wr&&(Et=!0);else if((ra&Ht)===Ht){lt=lt.next,Ht===Wr&&(Et=!0);continue}else Bt={lane:0,revertLane:lt.revertLane,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},j===null?(V=j=Bt,L=b):j=j.next=Bt,Ee.lanes|=Ht,la|=Ht;Bt=lt.action,Ga&&u(b,Bt),b=lt.hasEagerState?lt.eagerState:u(b,Bt)}else Ht={lane:Bt,revertLane:lt.revertLane,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},j===null?(V=j=Ht,L=b):j=j.next=Ht,Ee.lanes|=Bt,la|=Bt;lt=lt.next}while(lt!==null&&lt!==o);if(j===null?L=b:j.next=V,!bi(b,a.memoizedState)&&(bn=!0,Et&&(u=Xr,u!==null)))throw u;a.memoizedState=b,a.baseState=L,a.baseQueue=j,d.lastRenderedState=b}return v===null&&(d.lanes=0),[a.memoizedState,d.dispatch]}function Xt(a){var o=U(),u=o.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=a;var d=u.dispatch,v=u.pending,b=o.memoizedState;if(v!==null){u.pending=null;var L=v=v.next;do b=a(b,L.action),L=L.next;while(L!==v);bi(b,o.memoizedState)||(bn=!0),o.memoizedState=b,o.baseQueue===null&&(o.baseState=b),u.lastRenderedState=b}return[b,d]}function kt(a,o,u){var d=Ee,v=U(),b=Pe;if(b){if(u===void 0)throw Error(i(407));u=u()}else u=o();var L=!bi((ke||v).memoizedState,u);if(L&&(v.memoizedState=u,bn=!0),v=v.queue,Hf(te.bind(null,d,v,a),[a]),v.getSnapshot!==o||L||fn!==null&&fn.memoizedState.tag&1){if(d.flags|=2048,un(9,ce.bind(null,d,v,u,o),{destroy:void 0},null),je===null)throw Error(i(349));b||(ra&60)!==0||le(d,o,u)}return u}function le(a,o,u){a.flags|=16384,a={getSnapshot:o,value:u},o=Ee.updateQueue,o===null?(o=Jd(),Ee.updateQueue=o,o.stores=[a]):(u=o.stores,u===null?o.stores=[a]:u.push(a))}function ce(a,o,u,d){o.value=u,o.getSnapshot=d,Me(o)&&Fe(a)}function te(a,o,u){return u(function(){Me(o)&&Fe(a)})}function Me(a){var o=a.getSnapshot;a=a.value;try{var u=o();return!bi(a,u)}catch{return!0}}function Fe(a){var o=gt(a,2);o!==null&&jn(o,a,2)}function qe(a){var o=On();if(typeof a=="function"){var u=a;if(a=u(),Ga){tt(!0);try{u()}finally{tt(!1)}}}return o.memoizedState=o.baseState=a,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:q,lastRenderedState:a},o}function Je(a,o,u,d){return a.baseState=u,Ot(a,ke,typeof d=="function"?d:q)}function Ve(a,o,u,d,v){if(Rc(a))throw Error(i(485));if(a=o.action,a!==null){var b={payload:v,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(L){b.listeners.push(L)}};xe.T!==null?u(!0):b.isTransition=!1,d(b),u=o.pending,u===null?(b.next=o.pending=b,ae(o,b)):(b.next=u.next,o.pending=u.next=b)}}function ae(a,o){var u=o.action,d=o.payload,v=a.state;if(o.isTransition){var b=xe.T,L={};xe.T=L;try{var V=u(v,d),j=xe.S;j!==null&&j(L,V),Ye(a,o,V)}catch(lt){Cn(a,o,lt)}finally{xe.T=b}}else try{b=u(v,d),Ye(a,o,b)}catch(lt){Cn(a,o,lt)}}function Ye(a,o,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(d){we(a,o,d)},function(d){return Cn(a,o,d)}):we(a,o,u)}function we(a,o,u){o.status="fulfilled",o.value=u,bs(o),a.state=u,o=a.pending,o!==null&&(u=o.next,u===o?a.pending=null:(u=u.next,o.next=u,ae(a,u)))}function Cn(a,o,u){var d=a.pending;if(a.pending=null,d!==null){d=d.next;do o.status="rejected",o.reason=u,bs(o),o=o.next;while(o!==d)}a.action=null}function bs(a){a=a.listeners;for(var o=0;o<a.length;o++)(0,a[o])()}function Bn(a,o){return o}function js(a,o){if(Pe){var u=je.formState;if(u!==null){t:{var d=Ee;if(Pe){if(Hn){var v=TM(Hn,as);if(v){Hn=yg(v),d=AM(v);break t}}Lt(d)}d=!1}d&&(o=u[0])}}u=On(),u.memoizedState=u.baseState=o,d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:o},u.queue=d,u=X0.bind(null,Ee,d),d.dispatch=u,d=qe(!1);var b=Xf.bind(null,Ee,!1,d.queue);return d=On(),v={state:o,dispatch:null,action:a,pending:null},d.queue=v,u=Ve.bind(null,Ee,v,b,u),v.dispatch=u,d.memoizedState=a,[o,u,!1]}function Ze(a){var o=U();return wn(o,ke,a)}function wn(a,o,u){o=Ot(a,o,Bn)[0],a=Mt(q)[0],o=typeof o=="object"&&o!==null&&typeof o.then=="function"?X(o):o;var d=U(),v=d.queue,b=v.dispatch;return u!==d.memoizedState&&(Ee.flags|=2048,un(9,ii.bind(null,v,u),{destroy:void 0},null)),[o,b,a]}function ii(a,o){a.action=o}function Sn(a){var o=U(),u=ke;if(u!==null)return wn(o,u,a);U(),o=o.memoizedState,u=U();var d=u.queue.dispatch;return u.memoizedState=a,[o,d,!1]}function un(a,o,u,d){return a={tag:a,create:o,inst:u,deps:d,next:null},o=Ee.updateQueue,o===null&&(o=Jd(),Ee.updateQueue=o),u=o.lastEffect,u===null?o.lastEffect=a.next=a:(d=u.next,u.next=a,a.next=d,o.lastEffect=a),a}function Rr(){return U().memoizedState}function Ni(a,o,u,d){var v=On();Ee.flags|=a,v.memoizedState=un(1|o,u,{destroy:void 0},d===void 0?null:d)}function wc(a,o,u,d){var v=U();d=d===void 0?null:d;var b=v.memoizedState.inst;ke!==null&&d!==null&&Zs(d,ke.memoizedState.deps)?v.memoizedState=un(o,u,b,d):(Ee.flags|=a,v.memoizedState=un(1|o,u,b,d))}function L0(a,o){Ni(8390656,8,a,o)}function Hf(a,o){wc(2048,8,a,o)}function I0(a,o){return wc(4,2,a,o)}function P0(a,o){return wc(4,4,a,o)}function O0(a,o){if(typeof o=="function"){a=a();var u=o(a);return function(){typeof u=="function"?u():o(null)}}if(o!=null)return a=a(),o.current=a,function(){o.current=null}}function B0(a,o,u){u=u!=null?u.concat([a]):null,wc(4,4,O0.bind(null,o,a),u)}function Gf(){}function z0(a,o){var u=U();o=o===void 0?null:o;var d=u.memoizedState;return o!==null&&Zs(o,d[1])?d[0]:(u.memoizedState=[a,o],a)}function F0(a,o){var u=U();o=o===void 0?null:o;var d=u.memoizedState;if(o!==null&&Zs(o,d[1]))return d[0];if(d=a(),Ga){tt(!0);try{a()}finally{tt(!1)}}return u.memoizedState=[d,o],d}function kf(a,o,u){return u===void 0||(ra&1073741824)!==0?a.memoizedState=o:(a.memoizedState=u,a=Px(),Ee.lanes|=a,la|=a,u)}function V0(a,o,u,d){return bi(u,o)?u:Zr.current!==null?(a=kf(a,u,d),bi(a,o)||(bn=!0),a):(ra&42)===0?(bn=!0,a.memoizedState=u):(a=Px(),Ee.lanes|=a,la|=a,o)}function H0(a,o,u,d,v){var b=za();ai(b!==0&&8>b?b:8);var L=xe.T,V={};xe.T=V,Xf(a,!1,o,u);try{var j=v(),lt=xe.S;if(lt!==null&&lt(V,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Et=Rt(j,d);Qo(a,o,Et,vi(a))}else Qo(a,o,d,vi(a))}catch(Bt){Qo(a,o,{then:function(){},status:"rejected",reason:Bt},vi())}finally{ai(b),xe.T=L}}function G0(a){var o=a.memoizedState;if(o!==null)return o;o={memoizedState:Or,baseState:Or,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:q,lastRenderedState:Or},next:null};var u={};return o.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:q,lastRenderedState:u},next:null},a.memoizedState=o,a=a.alternate,a!==null&&(a.memoizedState=o),o}function Wf(){return zn(Fa)}function k0(){return U().memoizedState}function W0(){return U().memoizedState}function fb(a){for(var o=a.return;o!==null;){switch(o.tag){case 24:case 3:var u=vi();a=ft(u);var d=bt(o,a,u);d!==null&&(jn(d,o,u),ie(d,o,u)),o={cache:sd()},a.payload=o;return}o=o.return}}function db(a,o,u){var d=vi();u={lane:d,revertLane:0,action:u,hasEagerState:!1,eagerState:null,next:null},Rc(a)?q0(o,u):(u=xt(a,o,u,d),u!==null&&(jn(u,a,d),Y0(u,o,d)))}function X0(a,o,u){var d=vi();Qo(a,o,u,d)}function Qo(a,o,u,d){var v={lane:d,revertLane:0,action:u,hasEagerState:!1,eagerState:null,next:null};if(Rc(a))q0(o,v);else{var b=a.alternate;if(a.lanes===0&&(b===null||b.lanes===0)&&(b=o.lastRenderedReducer,b!==null))try{var L=o.lastRenderedState,V=b(L,u);if(v.hasEagerState=!0,v.eagerState=V,bi(V,L))return B(a,o,v,0),je===null&&mt(),!1}catch{}if(u=xt(a,o,v,d),u!==null)return jn(u,a,d),Y0(u,o,d),!0}return!1}function Xf(a,o,u,d){if(d={lane:2,revertLane:dt(),action:d,hasEagerState:!1,eagerState:null,next:null},Rc(a)){if(o)throw Error(i(479))}else o=xt(a,u,d,2),o!==null&&jn(o,a,2)}function Rc(a){var o=a.alternate;return a===Ee||o!==null&&o===Ee}function q0(a,o){jr=Qc=!0;var u=a.pending;u===null?o.next=o:(o.next=u.next,u.next=o),a.pending=o}function Y0(a,o,u){if((u&4194176)!==0){var d=o.lanes;d&=a.pendingLanes,u|=d,o.lanes=u,J(a,u)}}function qf(a,o,u,d){o=a.memoizedState,u=u(d,o),u=u==null?o:wd({},o,u),a.memoizedState=u,a.lanes===0&&(a.updateQueue.baseState=u)}function Z0(a,o,u,d,v,b,L){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(d,b,L):o.prototype&&o.prototype.isPureReactComponent?!Ct(u,d)||!Ct(v,b):!0}function j0(a,o,u,d){a=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==a&&Qd.enqueueReplaceState(o,o.state,null)}function Na(a,o){var u=o;if("ref"in o){u={};for(var d in o)d!=="ref"&&(u[d]=o[d])}if(a=a.defaultProps){u===o&&(u=wd({},u));for(var v in a)u[v]===void 0&&(u[v]=a[v])}return u}function Dc(a,o){try{var u=a.onUncaughtError;u(o.value,{componentStack:o.stack})}catch(d){setTimeout(function(){throw d})}}function K0(a,o,u){try{var d=a.onCaughtError;d(u.value,{componentStack:u.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(v){setTimeout(function(){throw v})}}function Yf(a,o,u){return u=ft(u),u.tag=3,u.payload={element:null},u.callback=function(){Dc(a,o)},u}function J0(a){return a=ft(a),a.tag=3,a}function Q0(a,o,u,d){var v=u.type.getDerivedStateFromError;if(typeof v=="function"){var b=d.value;a.payload=function(){return v(b)},a.callback=function(){K0(o,u,d)}}var L=u.stateNode;L!==null&&typeof L.componentDidCatch=="function"&&(a.callback=function(){K0(o,u,d),typeof v!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var V=d.stack;this.componentDidCatch(d.value,{componentStack:V!==null?V:""})})}function pb(a,o,u,d,v){if(u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){if(o=u.alternate,o!==null&&tl(o,u,v,!0),u=zi.current,u!==null){switch(u.tag){case 13:return rs===null?Sd():u.alternate===null&&on===0&&(on=3),u.flags&=-257,u.flags|=65536,u.lanes=v,d===Kc?u.flags|=16384:(o=u.updateQueue,o===null?u.updateQueue=new Set([d]):o.add(d),Md(a,d,v)),!1;case 22:return u.flags|=65536,d===Kc?u.flags|=16384:(o=u.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([d])},u.updateQueue=o):(u=o.retryQueue,u===null?o.retryQueue=new Set([d]):u.add(d)),Md(a,d,v)),!1}throw Error(i(435,u.tag))}return Md(a,d,v),Sd(),!1}if(Pe)return o=zi.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=v,d!==Wd&&(a=Error(i(422),{cause:d}),re(at(a,u)))):(d!==Wd&&(o=Error(i(423),{cause:d}),re(at(o,u))),a=a.current.alternate,a.flags|=65536,v&=-v,a.lanes|=v,d=at(d,u),v=Yf(a.stateNode,d,v),se(a,v),on!==4&&(on=2)),!1;var b=Error(i(520),{cause:d});if(b=at(b,u),xl===null?xl=[b]:xl.push(b),on!==4&&(on=2),o===null)return!0;d=at(d,u),u=o;do{switch(u.tag){case 3:return u.flags|=65536,a=v&-v,u.lanes|=a,a=Yf(u.stateNode,d,a),se(u,a),!1;case 1:if(o=u.type,b=u.stateNode,(u.flags&128)===0&&(typeof o.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ca===null||!ca.has(b))))return u.flags|=65536,v&=-v,u.lanes|=v,v=J0(v),Q0(v,a,u,d),se(u,v),!1}u=u.return}while(u!==null);return!1}function Rn(a,o,u,d){o.child=a===null?Ig(o,null,u,d):Ha(o,a.child,u,d)}function $0(a,o,u,d,v){u=u.render;var b=o.ref;if("ref"in d){var L={};for(var V in d)V!=="ref"&&(L[V]=d[V])}else L=d;return La(o),d=wr(a,o,u,L,b,v),V=jo(),a!==null&&!bn?(Ko(a,o,v),Ms(a,o,v)):(Pe&&V&&Vt(o),o.flags|=1,Rn(a,o,d,v),o.child)}function tx(a,o,u,d,v){if(a===null){var b=u.type;return typeof b=="function"&&!Ed(b)&&b.defaultProps===void 0&&u.compare===null?(o.tag=15,o.type=b,ex(a,o,b,d,v)):(a=zc(u.type,null,d,o,o.mode,v),a.ref=o.ref,a.return=o,o.child=a)}if(b=a.child,!ed(a,v)){var L=b.memoizedProps;if(u=u.compare,u=u!==null?u:Ct,u(L,d)&&a.ref===o.ref)return Ms(a,o,v)}return o.flags|=1,a=ta(b,d),a.ref=o.ref,a.return=o,o.child=a}function ex(a,o,u,d,v){if(a!==null){var b=a.memoizedProps;if(Ct(b,d)&&a.ref===o.ref)if(bn=!1,o.pendingProps=d=b,ed(a,v))(a.flags&131072)!==0&&(bn=!0);else return o.lanes=a.lanes,Ms(a,o,v)}return Zf(a,o,u,d,v)}function nx(a,o,u){var d=o.pendingProps,v=d.children,b=(o.stateNode._pendingVisibility&2)!==0,L=a!==null?a.memoizedState:null;if($o(a,o),d.mode==="hidden"||b){if((o.flags&128)!==0){if(d=L!==null?L.baseLanes|u:u,a!==null){for(v=o.child=a.child,b=0;v!==null;)b=b|v.lanes|v.childLanes,v=v.sibling;o.childLanes=b&~d}else o.childLanes=0,o.child=null;return ix(a,o,d,u)}if((u&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},a!==null&&Lc(o,L!==null?L.cachePool:null),L!==null?Ac(o,L):Tr(),Cr(o);else return o.lanes=o.childLanes=536870912,ix(a,o,L!==null?L.baseLanes|u:u,u)}else L!==null?(Lc(o,L.cachePool),Ac(o,L),Wi(),o.memoizedState=null):(a!==null&&Lc(o,null),Tr(),Wi());return Rn(a,o,v,u),o.child}function ix(a,o,u,d){var v=ad();return v=v===null?null:{parent:Cs?an._currentValue:an._currentValue2,pool:v},o.memoizedState={baseLanes:u,cachePool:v},a!==null&&Lc(o,null),Tr(),Cr(o),a!==null&&tl(a,o,d,!0),null}function $o(a,o){var u=o.ref;if(u===null)a!==null&&a.ref!==null&&(o.flags|=2097664);else{if(typeof u!="function"&&typeof u!="object")throw Error(i(284));(a===null||a.ref!==u)&&(o.flags|=2097664)}}function Zf(a,o,u,d,v){return La(o),u=wr(a,o,u,d,void 0,v),d=jo(),a!==null&&!bn?(Ko(a,o,v),Ms(a,o,v)):(Pe&&d&&Vt(o),o.flags|=1,Rn(a,o,u,v),o.child)}function sx(a,o,u,d,v,b){return La(o),o.updateQueue=null,u=Cc(o,d,u,v),Zo(a),d=jo(),a!==null&&!bn?(Ko(a,o,b),Ms(a,o,b)):(Pe&&d&&Vt(o),o.flags|=1,Rn(a,o,u,b),o.child)}function ax(a,o,u,d,v){if(La(o),o.stateNode===null){var b=zr,L=u.contextType;typeof L=="object"&&L!==null&&(b=zn(L)),b=new u(d,b),o.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=Qd,o.stateNode=b,b._reactInternals=o,b=o.stateNode,b.props=d,b.state=o.memoizedState,b.refs={},Qt(o),L=u.contextType,b.context=typeof L=="object"&&L!==null?zn(L):zr,b.state=o.memoizedState,L=u.getDerivedStateFromProps,typeof L=="function"&&(qf(o,u,L,d),b.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(L=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),L!==b.state&&Qd.enqueueReplaceState(b,b.state,null),oe(o,d,b,v),Pt(),b.state=o.memoizedState),typeof b.componentDidMount=="function"&&(o.flags|=4194308),d=!0}else if(a===null){b=o.stateNode;var V=o.memoizedProps,j=Na(u,V);b.props=j;var lt=b.context,Et=u.contextType;L=zr,typeof Et=="object"&&Et!==null&&(L=zn(Et));var Bt=u.getDerivedStateFromProps;Et=typeof Bt=="function"||typeof b.getSnapshotBeforeUpdate=="function",V=o.pendingProps!==V,Et||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V||lt!==L)&&j0(o,b,d,L),aa=!1;var Ht=o.memoizedState;b.state=Ht,oe(o,d,b,v),Pt(),lt=o.memoizedState,V||Ht!==lt||aa?(typeof Bt=="function"&&(qf(o,u,Bt,d),lt=o.memoizedState),(j=aa||Z0(o,u,j,d,Ht,lt,L))?(Et||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(o.flags|=4194308)):(typeof b.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=lt),b.props=d,b.state=lt,b.context=L,d=j):(typeof b.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{b=o.stateNode,qt(a,o),L=o.memoizedProps,Et=Na(u,L),b.props=Et,Bt=o.pendingProps,Ht=b.context,lt=u.contextType,j=zr,typeof lt=="object"&&lt!==null&&(j=zn(lt)),V=u.getDerivedStateFromProps,(lt=typeof V=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(L!==Bt||Ht!==j)&&j0(o,b,d,j),aa=!1,Ht=o.memoizedState,b.state=Ht,oe(o,d,b,v),Pt();var ye=o.memoizedState;L!==Bt||Ht!==ye||aa||a!==null&&a.dependencies!==null&&Uc(a.dependencies)?(typeof V=="function"&&(qf(o,u,V,d),ye=o.memoizedState),(Et=aa||Z0(o,u,Et,d,Ht,ye,j)||a!==null&&a.dependencies!==null&&Uc(a.dependencies))?(lt||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,ye,j),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,ye,j)),typeof b.componentDidUpdate=="function"&&(o.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof b.componentDidUpdate!="function"||L===a.memoizedProps&&Ht===a.memoizedState||(o.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||L===a.memoizedProps&&Ht===a.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=ye),b.props=d,b.state=ye,b.context=j,d=Et):(typeof b.componentDidUpdate!="function"||L===a.memoizedProps&&Ht===a.memoizedState||(o.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||L===a.memoizedProps&&Ht===a.memoizedState||(o.flags|=1024),d=!1)}return b=d,$o(a,o),d=(o.flags&128)!==0,b||d?(b=o.stateNode,u=d&&typeof u.getDerivedStateFromError!="function"?null:b.render(),o.flags|=1,a!==null&&d?(o.child=Ha(o,a.child,null,v),o.child=Ha(o,null,u,v)):Rn(a,o,u,v),o.memoizedState=b.state,a=o.child):a=Ms(a,o,v),a}function rx(a,o,u,d){return Ue(),o.flags|=256,Rn(a,o,u,d),o.child}function jf(a){return{baseLanes:a,cachePool:fx()}}function Kf(a,o,u){return a=a!==null?a.childLanes&~u:0,o&&(a|=Fi),a}function ox(a,o,u){var d=o.pendingProps,v=!1,b=(o.flags&128)!==0,L;if((L=b)||(L=a!==null&&a.memoizedState===null?!1:(xn.current&2)!==0),L&&(v=!0,o.flags&=-129),L=(o.flags&32)!==0,o.flags&=-33,a===null){if(Pe){if(v?Pn(o):Wi(),Pe){var V=Hn,j;(j=V)&&(V=UM(V,as),V!==null?(o.memoizedState={dehydrated:V,treeContext:Va!==null?{id:ws,overflow:Rs}:null,retryLane:536870912},j=e(18,null,null,0),j.stateNode=V,j.return=o,o.child=j,Kn=o,Hn=null,j=!0):j=!1),j||Lt(o)}if(V=o.memoizedState,V!==null&&(V=V.dehydrated,V!==null))return Fd(V)?o.lanes=16:o.lanes=536870912,null;Ui(o)}return V=d.children,d=d.fallback,v?(Wi(),v=o.mode,V=Qf({mode:"hidden",children:V},v),d=Ba(d,v,u,null),V.return=o,d.return=o,V.sibling=d,o.child=V,v=o.child,v.memoizedState=jf(u),v.childLanes=Kf(a,L,u),o.memoizedState=$d,d):(Pn(o),Jf(o,V))}if(j=a.memoizedState,j!==null&&(V=j.dehydrated,V!==null)){if(b)o.flags&256?(Pn(o),o.flags&=-257,o=$f(a,o,u)):o.memoizedState!==null?(Wi(),o.child=a.child,o.flags|=128,o=null):(Wi(),v=d.fallback,V=o.mode,d=Qf({mode:"visible",children:d.children},V),v=Ba(v,V,u,null),v.flags|=2,d.return=o,v.return=o,d.sibling=v,o.child=d,Ha(o,a.child,null,u),d=o.child,d.memoizedState=jf(u),d.childLanes=Kf(a,L,u),o.memoizedState=$d,o=v);else if(Pn(o),Fd(V))L=MM(V).digest,d=Error(i(419)),d.stack="",d.digest=L,re({value:d,source:null,stack:null}),o=$f(a,o,u);else if(bn||tl(a,o,u,!1),L=(u&a.childLanes)!==0,bn||L){if(L=je,L!==null){if(d=u&-u,(d&42)!==0)d=1;else switch(d){case 2:d=1;break;case 8:d=4;break;case 32:d=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:d=64;break;case 268435456:d=134217728;break;default:d=0}if(d=(d&(L.suspendedLanes|u))!==0?0:d,d!==0&&d!==j.retryLane)throw j.retryLane=d,gt(a,d),jn(L,a,d),Og}zd(V)||Sd(),o=$f(a,o,u)}else zd(V)?(o.flags|=128,o.child=a.child,o=Ab.bind(null,a),EM(V,o),o=null):(a=j.treeContext,Li&&(Hn=wM(V),Kn=o,Pe=!0,Yi=null,as=!1,a!==null&&(Pi[Oi++]=ws,Pi[Oi++]=Rs,Pi[Oi++]=Va,ws=a.id,Rs=a.overflow,Va=o)),o=Jf(o,d.children),o.flags|=4096);return o}return v?(Wi(),v=d.fallback,V=o.mode,j=a.child,b=j.sibling,d=ta(j,{mode:"hidden",children:d.children}),d.subtreeFlags=j.subtreeFlags&31457280,b!==null?v=ta(b,v):(v=Ba(v,V,u,null),v.flags|=2),v.return=o,d.return=o,d.sibling=v,o.child=d,d=v,v=o.child,V=a.child.memoizedState,V===null?V=jf(u):(j=V.cachePool,j!==null?(b=Cs?an._currentValue:an._currentValue2,j=j.parent!==b?{parent:b,pool:b}:j):j=fx(),V={baseLanes:V.baseLanes|u,cachePool:j}),v.memoizedState=V,v.childLanes=Kf(a,L,u),o.memoizedState=$d,d):(Pn(o),u=a.child,a=u.sibling,u=ta(u,{mode:"visible",children:d.children}),u.return=o,u.sibling=null,a!==null&&(L=o.deletions,L===null?(o.deletions=[a],o.flags|=16):L.push(a)),o.child=u,o.memoizedState=null,u)}function Jf(a,o){return o=Qf({mode:"visible",children:o},a.mode),o.return=a,a.child=o}function Qf(a,o){return Jx(a,o,0,null)}function $f(a,o,u){return Ha(o,a.child,null,u),a=Jf(o,o.pendingProps.children),a.flags|=2,o.memoizedState=null,a}function lx(a,o,u){a.lanes|=o;var d=a.alternate;d!==null&&(d.lanes|=o),nd(a.return,o,u)}function td(a,o,u,d,v){var b=a.memoizedState;b===null?a.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:v}:(b.isBackwards=o,b.rendering=null,b.renderingStartTime=0,b.last=d,b.tail=u,b.tailMode=v)}function cx(a,o,u){var d=o.pendingProps,v=d.revealOrder,b=d.tail;if(Rn(a,o,d.children,u),d=xn.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(a!==null&&(a.flags&128)!==0)t:for(a=o.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&lx(a,u,o);else if(a.tag===19)lx(a,u,o);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break t;for(;a.sibling===null;){if(a.return===null||a.return===o)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}d&=1}switch(E(xn,d),v){case"forwards":for(u=o.child,v=null;u!==null;)a=u.alternate,a!==null&&Ss(a)===null&&(v=u),u=u.sibling;u=v,u===null?(v=o.child,o.child=null):(v=u.sibling,u.sibling=null),td(o,!1,v,u,b);break;case"backwards":for(u=null,v=o.child,o.child=null;v!==null;){if(a=v.alternate,a!==null&&Ss(a)===null){o.child=v;break}a=v.sibling,v.sibling=u,u=v,v=a}td(o,!0,u,null,b);break;case"together":td(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Ms(a,o,u){if(a!==null&&(o.dependencies=a.dependencies),la|=o.lanes,(u&o.childLanes)===0)if(a!==null){if(tl(a,o,u,!1),(u&o.childLanes)===0)return null}else return null;if(a!==null&&o.child!==a.child)throw Error(i(153));if(o.child!==null){for(a=o.child,u=ta(a,a.pendingProps),o.child=u,u.return=o;a.sibling!==null;)a=a.sibling,u=u.sibling=ta(a,a.pendingProps),u.return=o;u.sibling=null}return o.child}function ed(a,o){return(a.lanes&o)!==0?!0:(a=a.dependencies,!!(a!==null&&Uc(a)))}function mb(a,o,u){switch(o.tag){case 3:Zt(o,o.stateNode.containerInfo),Ks(o,an,a.memoizedState.cache),Ue();break;case 27:case 5:ot(o);break;case 4:Zt(o,o.stateNode.containerInfo);break;case 10:Ks(o,o.type,o.memoizedProps.value);break;case 13:var d=o.memoizedState;if(d!==null)return d.dehydrated!==null?(Pn(o),o.flags|=128,null):(u&o.child.childLanes)!==0?ox(a,o,u):(Pn(o),a=Ms(a,o,u),a!==null?a.sibling:null);Pn(o);break;case 19:var v=(a.flags&128)!==0;if(d=(u&o.childLanes)!==0,d||(tl(a,o,u,!1),d=(u&o.childLanes)!==0),v){if(d)return cx(a,o,u);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),E(xn,xn.current),d)break;return null;case 22:case 23:return o.lanes=0,nx(a,o,u);case 24:Ks(o,an,a.memoizedState.cache)}return Ms(a,o,u)}function ux(a,o,u){if(a!==null)if(a.memoizedProps!==o.pendingProps)bn=!0;else{if(!ed(a,u)&&(o.flags&128)===0)return bn=!1,mb(a,o,u);bn=(a.flags&131072)!==0}else bn=!1,Pe&&(o.flags&1048576)!==0&&_t(o,qc,o.index);switch(o.lanes=0,o.tag){case 16:t:{a=o.pendingProps;var d=o.elementType,v=d._init;if(d=v(d._payload),o.type=d,typeof d=="function")Ed(d)?(a=Na(d,a),o.tag=1,o=ax(null,o,d,a,u)):(o.tag=0,o=Zf(null,o,d,a,u));else{if(d!=null){if(v=d.$$typeof,v===Dd){o.tag=11,o=$0(null,o,d,a,u);break t}else if(v===Ld){o.tag=14,o=tx(null,o,d,a,u);break t}}throw o=l(d)||d,Error(i(306,o,""))}}return o;case 0:return Zf(a,o,o.type,o.pendingProps,u);case 1:return d=o.type,v=Na(d,o.pendingProps),ax(a,o,d,v,u);case 3:t:{if(Zt(o,o.stateNode.containerInfo),a===null)throw Error(i(387));var b=o.pendingProps;v=o.memoizedState,d=v.element,qt(a,o),oe(o,b,null,u);var L=o.memoizedState;if(b=L.cache,Ks(o,an,b),b!==v.cache&&id(o,[an],u,!0),Pt(),b=L.element,Li&&v.isDehydrated)if(v={element:b,isDehydrated:!1,cache:L.cache},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){o=rx(a,o,b,u);break t}else if(b!==d){d=at(Error(i(424)),o),re(d),o=rx(a,o,b,u);break t}else for(Li&&(Hn=CM(o.stateNode.containerInfo),Kn=o,Pe=!0,Yi=null,as=!0),u=Ig(o,null,b,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Ue(),b===d){o=Ms(a,o,u);break t}Rn(a,o,b,u)}o=o.child}return o;case 26:if(Ii)return $o(a,o),a===null?(u=Eg(o.type,null,o.pendingProps,null))?o.memoizedState=u:Pe||(o.stateNode=kM(o.type,o.pendingProps,sa.current,o)):o.memoizedState=Eg(o.type,a.memoizedProps,o.pendingProps,a.memoizedState),null;case 27:if(Vn)return ot(o),a===null&&Vn&&Pe&&(d=o.stateNode=Dg(o.type,o.pendingProps,sa.current,Dn.current,!1),Kn=o,as=!0,Hn=Sg(d)),d=o.pendingProps.children,a!==null||Pe?Rn(a,o,d,u):o.child=Ha(o,null,d,u),$o(a,o),o.child;case 5:return a===null&&Pe&&(VM(o.type,o.pendingProps,Dn.current),(v=d=Hn)&&(d=RM(d,o.type,o.pendingProps,as),d!==null?(o.stateNode=d,Kn=o,Hn=Sg(d),as=!1,v=!0):v=!1),v||Lt(o)),ot(o),v=o.type,b=o.pendingProps,L=a!==null?a.memoizedProps:null,d=b.children,Hc(v,b)?d=null:L!==null&&Hc(v,L)&&(o.flags|=32),o.memoizedState!==null&&(v=wr(a,o,Vf,null,null,u),Cs?Fa._currentValue=v:Fa._currentValue2=v),$o(a,o),Rn(a,o,d,u),o.child;case 6:return a===null&&Pe&&(HM(o.pendingProps,Dn.current),(a=u=Hn)&&(u=DM(u,o.pendingProps,as),u!==null?(o.stateNode=u,Kn=o,Hn=null,a=!0):a=!1),a||Lt(o)),null;case 13:return ox(a,o,u);case 4:return Zt(o,o.stateNode.containerInfo),d=o.pendingProps,a===null?o.child=Ha(o,null,d,u):Rn(a,o,d,u),o.child;case 11:return $0(a,o,o.type,o.pendingProps,u);case 7:return Rn(a,o,o.pendingProps,u),o.child;case 8:return Rn(a,o,o.pendingProps.children,u),o.child;case 12:return Rn(a,o,o.pendingProps.children,u),o.child;case 10:return d=o.pendingProps,Ks(o,o.type,d.value),Rn(a,o,d.children,u),o.child;case 9:return v=o.type._context,d=o.pendingProps.children,La(o),v=zn(v),d=d(v),o.flags|=1,Rn(a,o,d,u),o.child;case 14:return tx(a,o,o.type,o.pendingProps,u);case 15:return ex(a,o,o.type,o.pendingProps,u);case 19:return cx(a,o,u);case 22:return nx(a,o,u);case 24:return La(o),d=zn(an),a===null?(v=ad(),v===null&&(v=je,b=sd(),v.pooledCache=b,b.refCount++,b!==null&&(v.pooledCacheLanes|=u),v=b),o.memoizedState={parent:d,cache:v},Qt(o),Ks(o,an,v)):((a.lanes&u)!==0&&(qt(a,o),oe(o,null,null,u),Pt()),v=a.memoizedState,b=o.memoizedState,v.parent!==d?(v={parent:d,cache:d},o.memoizedState=v,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=v),Ks(o,an,d)):(d=b.cache,Ks(o,an,d),d!==v.cache&&id(o,[an],u,!0))),Rn(a,o,o.pendingProps.children,u),o.child;case 29:throw o.pendingProps}throw Error(i(156,o.tag))}function Ks(a,o,u){Cs?(E(tu,o._currentValue),o._currentValue=u):(E(tu,o._currentValue2),o._currentValue2=u)}function Es(a){var o=tu.current;Cs?a._currentValue=o:a._currentValue2=o,_(tu)}function nd(a,o,u){for(;a!==null;){var d=a.alternate;if((a.childLanes&o)!==o?(a.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),a===u)break;a=a.return}}function id(a,o,u,d){var v=a.child;for(v!==null&&(v.return=a);v!==null;){var b=v.dependencies;if(b!==null){var L=v.child;b=b.firstContext;t:for(;b!==null;){var V=b;b=v;for(var j=0;j<o.length;j++)if(V.context===o[j]){b.lanes|=u,V=b.alternate,V!==null&&(V.lanes|=u),nd(b.return,u,a),d||(L=null);break t}b=V.next}}else if(v.tag===18){if(L=v.return,L===null)throw Error(i(341));L.lanes|=u,b=L.alternate,b!==null&&(b.lanes|=u),nd(L,u,a),L=null}else L=v.child;if(L!==null)L.return=v;else for(L=v;L!==null;){if(L===a){L=null;break}if(v=L.sibling,v!==null){v.return=L.return,L=v;break}L=L.return}v=L}}function tl(a,o,u,d){a=null;for(var v=o,b=!1;v!==null;){if(!b){if((v.flags&524288)!==0)b=!0;else if((v.flags&262144)!==0)break}if(v.tag===10){var L=v.alternate;if(L===null)throw Error(i(387));if(L=L.memoizedProps,L!==null){var V=v.type;bi(v.pendingProps.value,L.value)||(a!==null?a.push(V):a=[V])}}else if(v===Yc.current){if(L=v.alternate,L===null)throw Error(i(387));L.memoizedState.memoizedState!==v.memoizedState.memoizedState&&(a!==null?a.push(Fa):a=[Fa])}v=v.return}a!==null&&id(o,a,u,d),o.flags|=262144}function Uc(a){for(a=a.firstContext;a!==null;){var o=a.context;if(!bi(Cs?o._currentValue:o._currentValue2,a.memoizedValue))return!0;a=a.next}return!1}function La(a){Xa=a,Ds=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function zn(a){return hx(Xa,a)}function Nc(a,o){return Xa===null&&La(a),hx(a,o)}function hx(a,o){var u=Cs?o._currentValue:o._currentValue2;if(o={context:o,memoizedValue:u,next:null},Ds===null){if(a===null)throw Error(i(308));Ds=o,a.dependencies={lanes:0,firstContext:o},a.flags|=524288}else Ds=Ds.next=o;return u}function sd(){return{controller:new r1,data:new Map,refCount:0}}function el(a){a.refCount--,a.refCount===0&&o1(l1,function(){a.controller.abort()})}function ad(){var a=qa.current;return a!==null?a:je.pooledCache}function Lc(a,o){o===null?E(qa,qa.current):E(qa,o.pool)}function fx(){var a=ad();return a===null?null:{parent:Cs?an._currentValue:an._currentValue2,pool:a}}function mi(a){a.flags|=4}function dx(a,o){if(a!==null&&a.child===o.child)return!1;if((o.flags&16)!==0)return!0;for(a=o.child;a!==null;){if((a.flags&13878)!==0||(a.subtreeFlags&13878)!==0)return!0;a=a.sibling}return!1}function rd(a,o,u,d){if(Fn)for(u=o.child;u!==null;){if(u.tag===5||u.tag===6)Od(a,u.stateNode);else if(!(u.tag===4||Vn&&u.tag===27)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}else if(ia)for(var v=o.child;v!==null;){if(v.tag===5){var b=v.stateNode;u&&d&&(b=vg(b,v.type,v.memoizedProps)),Od(a,b)}else if(v.tag===6)b=v.stateNode,u&&d&&(b=_g(b,v.memoizedProps)),Od(a,b);else if(v.tag!==4){if(v.tag===22&&v.memoizedState!==null)b=v.child,b!==null&&(b.return=v),rd(a,v,!0,!0);else if(v.child!==null){v.child.return=v,v=v.child;continue}}if(v===o)break;for(;v.sibling===null;){if(v.return===null||v.return===o)return;v=v.return}v.sibling.return=v.return,v=v.sibling}}function px(a,o,u,d){if(ia)for(var v=o.child;v!==null;){if(v.tag===5){var b=v.stateNode;u&&d&&(b=vg(b,v.type,v.memoizedProps)),xg(a,b)}else if(v.tag===6)b=v.stateNode,u&&d&&(b=_g(b,v.memoizedProps)),xg(a,b);else if(v.tag!==4){if(v.tag===22&&v.memoizedState!==null)b=v.child,b!==null&&(b.return=v),px(a,v,!(v.memoizedProps!==null&&v.memoizedProps.mode==="manual"),!0);else if(v.child!==null){v.child.return=v,v=v.child;continue}}if(v===o)break;for(;v.sibling===null;){if(v.return===null||v.return===o)return;v=v.return}v.sibling.return=v.return,v=v.sibling}}function mx(a,o){if(ia&&dx(a,o)){a=o.stateNode;var u=a.containerInfo,d=mg();px(d,o,!1,!1),a.pendingChildren=d,mi(o),bM(u,d)}}function od(a,o,u,d){if(Fn)a.memoizedProps!==d&&mi(o);else if(ia){var v=a.stateNode,b=a.memoizedProps;if((a=dx(a,o))||b!==d){var L=Dn.current;b=SM(v,u,b,d,!a,null),b===v?o.stateNode=v:(cg(b,u,d,L)&&mi(o),o.stateNode=b,a?rd(b,o,!1,!1):mi(o))}else o.stateNode=v}}function ld(a,o,u){if(jb(o,u)){if(a.flags|=16777216,!fg(o,u))if(Vx())a.flags|=8192;else throw qr=Kc,Kd}else a.flags&=-16777217}function xx(a,o){if(XM(o)){if(a.flags|=16777216,!Rg(o))if(Vx())a.flags|=8192;else throw qr=Kc,Kd}else a.flags&=-16777217}function Ic(a,o){o!==null&&(a.flags|=4),a.flags&16384&&(o=a.tag!==22?R():536870912,a.lanes|=o,$r|=o)}function nl(a,o){if(!Pe)switch(a.tailMode){case"hidden":o=a.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a.tail=null:u.sibling=null;break;case"collapsed":u=a.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||a.tail===null?a.tail=null:a.tail.sibling=null:d.sibling=null}}function tn(a){var o=a.alternate!==null&&a.alternate.child===a.child,u=0,d=0;if(o)for(var v=a.child;v!==null;)u|=v.lanes|v.childLanes,d|=v.subtreeFlags&31457280,d|=v.flags&31457280,v.return=a,v=v.sibling;else for(v=a.child;v!==null;)u|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=a,v=v.sibling;return a.subtreeFlags|=d,a.childLanes=u,o}function xb(a,o,u){var d=o.pendingProps;switch($t(o),o.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(o),null;case 1:return tn(o),null;case 3:return u=o.stateNode,d=null,a!==null&&(d=a.memoizedState.cache),o.memoizedState.cache!==d&&(o.flags|=2048),Es(an),me(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(a===null||a.child===null)&&(ge(o)?mi(o):a===null||a.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Yi!==null&&(_d(Yi),Yi=null))),mx(a,o),tn(o),null;case 26:if(Ii){u=o.type;var v=o.memoizedState;return a===null?(mi(o),v!==null?(tn(o),xx(o,v)):(tn(o),ld(o,u,d))):v?v!==a.memoizedState?(mi(o),tn(o),xx(o,v)):(tn(o),o.flags&=-16777217):(Fn?a.memoizedProps!==d&&mi(o):od(a,o,u,d),tn(o),ld(o,u,d)),null}case 27:if(Vn){if(pt(o),u=sa.current,v=o.type,a!==null&&o.stateNode!=null)Fn?a.memoizedProps!==d&&mi(o):od(a,o,v,d);else{if(!d){if(o.stateNode===null)throw Error(i(166));return tn(o),null}a=Dn.current,ge(o)?ee(o,a):(a=Dg(v,d,u,a,!0),o.stateNode=a,mi(o))}return tn(o),null}case 5:if(pt(o),u=o.type,a!==null&&o.stateNode!=null)od(a,o,u,d);else{if(!d){if(o.stateNode===null)throw Error(i(166));return tn(o),null}a=Dn.current,ge(o)?ee(o,a):(v=Gb(u,d,sa.current,a,o),rd(v,o,!1,!1),o.stateNode=v,cg(v,u,d,a)&&mi(o))}return tn(o),ld(o,o.type,o.pendingProps),null;case 6:if(a&&o.stateNode!=null)u=a.memoizedProps,Fn?u!==d&&mi(o):ia&&(u!==d?(o.stateNode=ug(d,sa.current,Dn.current,o),mi(o)):o.stateNode=a.stateNode);else{if(typeof d!="string"&&o.stateNode===null)throw Error(i(166));if(a=sa.current,u=Dn.current,ge(o)){if(!Li)throw Error(i(176));if(a=o.stateNode,u=o.memoizedProps,d=null,v=Kn,v!==null)switch(v.tag){case 27:case 5:d=v.memoizedProps}LM(a,u,o,d)||Lt(o)}else o.stateNode=ug(d,a,u,o)}return tn(o),null;case 13:if(d=o.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(v=ge(o),d!==null&&d.dehydrated!==null){if(a===null){if(!v)throw Error(i(318));if(!Li)throw Error(i(344));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(i(317));IM(v,o)}else Ue(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;tn(o),v=!1}else Yi!==null&&(_d(Yi),Yi=null),v=!0;if(!v)return o.flags&256?(Ui(o),o):(Ui(o),null)}if(Ui(o),(o.flags&128)!==0)return o.lanes=u,o;if(u=d!==null,a=a!==null&&a.memoizedState!==null,u){d=o.child,v=null,d.alternate!==null&&d.alternate.memoizedState!==null&&d.alternate.memoizedState.cachePool!==null&&(v=d.alternate.memoizedState.cachePool.pool);var b=null;d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(b=d.memoizedState.cachePool.pool),b!==v&&(d.flags|=2048)}return u!==a&&u&&(o.child.flags|=8192),Ic(o,o.updateQueue),tn(o),null;case 4:return me(),mx(a,o),a===null&&Xb(o.stateNode.containerInfo),tn(o),null;case 10:return Es(o.type),tn(o),null;case 19:if(_(xn),v=o.memoizedState,v===null)return tn(o),null;if(d=(o.flags&128)!==0,b=v.rendering,b===null)if(d)nl(v,!1);else{if(on!==0||a!==null&&(a.flags&128)!==0)for(a=o.child;a!==null;){if(b=Ss(a),b!==null){for(o.flags|=128,nl(v,!1),a=b.updateQueue,o.updateQueue=a,Ic(o,a),o.subtreeFlags=0,a=u,u=o.child;u!==null;)Kx(u,a),u=u.sibling;return E(xn,xn.current&1|2),o.child}a=a.sibling}v.tail!==null&&qi()>gl&&(o.flags|=128,d=!0,nl(v,!1),o.lanes=4194304)}else{if(!d)if(a=Ss(b),a!==null){if(o.flags|=128,d=!0,a=a.updateQueue,o.updateQueue=a,Ic(o,a),nl(v,!0),v.tail===null&&v.tailMode==="hidden"&&!b.alternate&&!Pe)return tn(o),null}else 2*qi()-v.renderingStartTime>gl&&u!==536870912&&(o.flags|=128,d=!0,nl(v,!1),o.lanes=4194304);v.isBackwards?(b.sibling=o.child,o.child=b):(a=v.last,a!==null?a.sibling=b:o.child=b,v.last=b)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=qi(),o.sibling=null,a=xn.current,E(xn,d?a&1|2:a&1),o):(tn(o),null);case 22:case 23:return Ui(o),Ar(),d=o.memoizedState!==null,a!==null?a.memoizedState!==null!==d&&(o.flags|=8192):d&&(o.flags|=8192),d?(u&536870912)!==0&&(o.flags&128)===0&&(tn(o),o.subtreeFlags&6&&(o.flags|=8192)):tn(o),u=o.updateQueue,u!==null&&Ic(o,u.retryQueue),u=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048),a!==null&&_(qa),null;case 24:return u=null,a!==null&&(u=a.memoizedState.cache),o.memoizedState.cache!==u&&(o.flags|=2048),Es(an),tn(o),null;case 25:return null}throw Error(i(156,o.tag))}function gb(a,o){switch($t(o),o.tag){case 1:return a=o.flags,a&65536?(o.flags=a&-65537|128,o):null;case 3:return Es(an),me(),a=o.flags,(a&65536)!==0&&(a&128)===0?(o.flags=a&-65537|128,o):null;case 26:case 27:case 5:return pt(o),null;case 13:if(Ui(o),a=o.memoizedState,a!==null&&a.dehydrated!==null){if(o.alternate===null)throw Error(i(340));Ue()}return a=o.flags,a&65536?(o.flags=a&-65537|128,o):null;case 19:return _(xn),null;case 4:return me(),null;case 10:return Es(o.type),null;case 22:case 23:return Ui(o),Ar(),a!==null&&_(qa),a=o.flags,a&65536?(o.flags=a&-65537|128,o):null;case 24:return Es(an),null;case 25:return null;default:return null}}function gx(a,o){switch($t(o),o.tag){case 3:Es(an),me();break;case 26:case 27:case 5:pt(o);break;case 4:me();break;case 13:Ui(o);break;case 19:_(xn);break;case 10:Es(o.type);break;case 22:case 23:Ui(o),Ar(),a!==null&&_(qa);break;case 24:Es(an)}}function il(a,o){try{var u=o.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var v=d.next;u=v;do{if((u.tag&a)===a){d=void 0;var b=u.create,L=u.inst;d=b(),L.destroy=d}u=u.next}while(u!==v)}}catch(V){He(o,o.return,V)}}function Js(a,o,u){try{var d=o.updateQueue,v=d!==null?d.lastEffect:null;if(v!==null){var b=v.next;d=b;do{if((d.tag&a)===a){var L=d.inst,V=L.destroy;if(V!==void 0){L.destroy=void 0,v=o;var j=u;try{V()}catch(lt){He(v,j,lt)}}}d=d.next}while(d!==b)}}catch(lt){He(o,o.return,lt)}}function vx(a){var o=a.updateQueue;if(o!==null){var u=a.stateNode;try{Ut(o,u)}catch(d){He(a,a.return,d)}}}function _x(a,o,u){u.props=Na(a.type,a.memoizedProps),u.state=a.memoizedState;try{u.componentWillUnmount()}catch(d){He(a,o,d)}}function Ia(a,o){try{var u=a.ref;if(u!==null){var d=a.stateNode;switch(a.tag){case 26:case 27:case 5:var v=rl(d);break;default:v=d}typeof u=="function"?a.refCleanup=u(v):u.current=v}}catch(b){He(a,o,b)}}function xi(a,o){var u=a.ref,d=a.refCleanup;if(u!==null)if(typeof d=="function")try{d()}catch(v){He(a,o,v)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(v){He(a,o,v)}else u.current=null}function yx(a){var o=a.type,u=a.memoizedProps,d=a.stateNode;try{uM(d,o,u,a)}catch(v){He(a,a.return,v)}}function Sx(a,o,u){try{hM(a.stateNode,a.type,u,o,a)}catch(d){He(a,a.return,d)}}function bx(a){return a.tag===5||a.tag===3||(Ii?a.tag===26:!1)||(Vn?a.tag===27:!1)||a.tag===4}function cd(a){t:for(;;){for(;a.sibling===null;){if(a.return===null||bx(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&(!Vn||a.tag!==27)&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue t;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function ud(a,o,u){var d=a.tag;if(d===5||d===6)a=a.stateNode,o?dM(u,a,o):lM(u,a);else if(!(d===4||Vn&&d===27)&&(a=a.child,a!==null))for(ud(a,o,u),a=a.sibling;a!==null;)ud(a,o,u),a=a.sibling}function Pc(a,o,u){var d=a.tag;if(d===5||d===6)a=a.stateNode,o?fM(u,a,o):oM(u,a);else if(!(d===4||Vn&&d===27)&&(a=a.child,a!==null))for(Pc(a,o,u),a=a.sibling;a!==null;)Pc(a,o,u),a=a.sibling}function Mx(a,o,u){a=a.containerInfo;try{gg(a,u)}catch(d){He(o,o.return,d)}}function vb(a,o){for(Vb(a.containerInfo),Mn=o;Mn!==null;)if(a=Mn,o=a.child,(a.subtreeFlags&1028)!==0&&o!==null)o.return=a,Mn=o;else for(;Mn!==null;){a=Mn;var u=a.alternate;switch(o=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((o&1024)!==0&&u!==null){o=void 0;var d=a,v=u.memoizedProps;u=u.memoizedState;var b=d.stateNode;try{var L=Na(d.type,v,d.elementType===d.type);o=b.getSnapshotBeforeUpdate(L,u),b.__reactInternalSnapshotBeforeUpdate=o}catch(V){He(d,d.return,V)}}break;case 3:(o&1024)!==0&&Fn&&yM(a.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((o&1024)!==0)throw Error(i(163))}if(o=a.sibling,o!==null){o.return=a.return,Mn=o;break}Mn=a.return}return L=Fg,Fg=!1,L}function Ex(a,o,u){var d=u.flags;switch(u.tag){case 0:case 11:case 15:Ts(a,u),d&4&&il(5,u);break;case 1:if(Ts(a,u),d&4)if(a=u.stateNode,o===null)try{a.componentDidMount()}catch(V){He(u,u.return,V)}else{var v=Na(u.type,o.memoizedProps);o=o.memoizedState;try{a.componentDidUpdate(v,o,a.__reactInternalSnapshotBeforeUpdate)}catch(V){He(u,u.return,V)}}d&64&&vx(u),d&512&&Ia(u,u.return);break;case 3:if(Ts(a,u),d&64&&(d=u.updateQueue,d!==null)){if(a=null,u.child!==null)switch(u.child.tag){case 27:case 5:a=rl(u.child.stateNode);break;case 1:a=u.child.stateNode}try{Ut(d,a)}catch(V){He(u,u.return,V)}}break;case 26:if(Ii){Ts(a,u),d&512&&Ia(u,u.return);break}case 27:case 5:Ts(a,u),o===null&&d&4&&yx(u),d&512&&Ia(u,u.return);break;case 12:Ts(a,u);break;case 13:Ts(a,u),d&4&&Ax(a,u);break;case 22:if(v=u.memoizedState!==null||Us,!v){o=o!==null&&o.memoizedState!==null||rn;var b=Us,L=rn;Us=v,(rn=o)&&!L?Qs(a,u,(u.subtreeFlags&8772)!==0):Ts(a,u),Us=b,rn=L}d&512&&(u.memoizedProps.mode==="manual"?Ia(u,u.return):xi(u,u.return));break;default:Ts(a,u)}}function Tx(a){var o=a.alternate;o!==null&&(a.alternate=null,Tx(o)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(o=a.stateNode,o!==null&&Zb(o)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Xi(a,o,u){for(u=u.child;u!==null;)hd(a,o,u),u=u.sibling}function hd(a,o,u){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(cl,u)}catch{}switch(u.tag){case 26:if(Ii){rn||xi(u,o),Xi(a,o,u),u.memoizedState?Ag(u.memoizedState):u.stateNode&&wg(u.stateNode);break}case 27:if(Vn){rn||xi(u,o);var d=dn,v=Mi;dn=u.stateNode,Xi(a,o,u),jM(u.stateNode),dn=d,Mi=v;break}case 5:rn||xi(u,o);case 6:if(Fn){if(d=dn,v=Mi,dn=null,Xi(a,o,u),dn=d,Mi=v,dn!==null)if(Mi)try{mM(dn,u.stateNode)}catch(b){He(u,o,b)}else try{pM(dn,u.stateNode)}catch(b){He(u,o,b)}}else Xi(a,o,u);break;case 18:Fn&&dn!==null&&(Mi?FM(dn,u.stateNode):zM(dn,u.stateNode));break;case 4:Fn?(d=dn,v=Mi,dn=u.stateNode.containerInfo,Mi=!0,Xi(a,o,u),dn=d,Mi=v):(ia&&Mx(u.stateNode,u,mg()),Xi(a,o,u));break;case 0:case 11:case 14:case 15:rn||Js(2,u,o),rn||Js(4,u,o),Xi(a,o,u);break;case 1:rn||(xi(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"&&_x(u,o,d)),Xi(a,o,u);break;case 21:Xi(a,o,u);break;case 22:rn||xi(u,o),rn=(d=rn)||u.memoizedState!==null,Xi(a,o,u),rn=d;break;default:Xi(a,o,u)}}function Ax(a,o){if(Li&&o.memoizedState===null&&(a=o.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{BM(a)}catch(u){He(o,o.return,u)}}function _b(a){switch(a.tag){case 13:case 19:var o=a.stateNode;return o===null&&(o=a.stateNode=new zg),o;case 22:return a=a.stateNode,o=a._retryCache,o===null&&(o=a._retryCache=new zg),o;default:throw Error(i(435,a.tag))}}function fd(a,o){var u=_b(a);o.forEach(function(d){var v=Cb.bind(null,a,d);u.has(d)||(u.add(d),d.then(v,v))})}function si(a,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var v=u[d],b=a,L=o;if(Fn){var V=L;t:for(;V!==null;){switch(V.tag){case 27:case 5:dn=V.stateNode,Mi=!1;break t;case 3:dn=V.stateNode.containerInfo,Mi=!0;break t;case 4:dn=V.stateNode.containerInfo,Mi=!0;break t}V=V.return}if(dn===null)throw Error(i(160));hd(b,L,v),dn=null,Mi=!1}else hd(b,L,v);b=v.alternate,b!==null&&(b.return=null),v.return=null}if(o.subtreeFlags&13878)for(o=o.child;o!==null;)Cx(o,a),o=o.sibling}function Cx(a,o){var u=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:si(o,a),gi(a),d&4&&(Js(3,a,a.return),il(3,a),Js(5,a,a.return));break;case 1:si(o,a),gi(a),d&512&&(rn||u===null||xi(u,u.return)),d&64&&Us&&(a=a.updateQueue,a!==null&&(d=a.callbacks,d!==null&&(u=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=u===null?d:u.concat(d))));break;case 26:if(Ii){var v=Zi;si(o,a),gi(a),d&512&&(rn||u===null||xi(u,u.return)),d&4&&(d=u!==null?u.memoizedState:null,o=a.memoizedState,u===null?o===null?a.stateNode===null?a.stateNode=GM(v,a.type,a.memoizedProps,a):Cg(v,a.type,a.stateNode):a.stateNode=Tg(v,o,a.memoizedProps):d!==o?(d===null?u.stateNode!==null&&wg(u.stateNode):Ag(d),o===null?Cg(v,a.type,a.stateNode):Tg(v,o,a.memoizedProps)):o===null&&a.stateNode!==null&&Sx(a,a.memoizedProps,u.memoizedProps));break}case 27:if(Vn&&d&4&&a.alternate===null){v=a.stateNode;var b=a.memoizedProps;try{YM(v),ZM(a.type,b,v,a)}catch(Et){He(a,a.return,Et)}}case 5:if(si(o,a),gi(a),d&512&&(rn||u===null||xi(u,u.return)),Fn){if(a.flags&32){o=a.stateNode;try{pg(o)}catch(Et){He(a,a.return,Et)}}d&4&&a.stateNode!=null&&(o=a.memoizedProps,Sx(a,o,u!==null?u.memoizedProps:o)),d&1024&&(tp=!0)}break;case 6:if(si(o,a),gi(a),d&4&&Fn){if(a.stateNode===null)throw Error(i(162));d=a.memoizedProps,u=u!==null?u.memoizedProps:d,o=a.stateNode;try{cM(o,u,d)}catch(Et){He(a,a.return,Et)}}break;case 3:if(Ii?(WM(),v=Zi,Zi=Vd(o.containerInfo),si(o,a),Zi=v):si(o,a),gi(a),d&4){if(Fn&&Li&&u!==null&&u.memoizedState.isDehydrated)try{OM(o.containerInfo)}catch(Et){He(a,a.return,Et)}if(ia){d=o.containerInfo,u=o.pendingChildren;try{gg(d,u)}catch(Et){He(a,a.return,Et)}}}tp&&(tp=!1,wx(a));break;case 4:Ii?(u=Zi,Zi=Vd(a.stateNode.containerInfo),si(o,a),gi(a),Zi=u):(si(o,a),gi(a)),d&4&&ia&&Mx(a.stateNode,a,a.stateNode.pendingChildren);break;case 12:si(o,a),gi(a);break;case 13:si(o,a),gi(a),a.child.flags&8192&&a.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(sp=qi()),d&4&&(d=a.updateQueue,d!==null&&(a.updateQueue=null,fd(a,d)));break;case 22:d&512&&(rn||u===null||xi(u,u.return)),v=a.memoizedState!==null;var L=u!==null&&u.memoizedState!==null,V=Us,j=rn;if(Us=V||v,rn=j||L,si(o,a),rn=j,Us=V,gi(a),o=a.stateNode,o._current=a,o._visibility&=-3,o._visibility|=o._pendingVisibility&2,d&8192&&(o._visibility=v?o._visibility&-2:o._visibility|1,v&&(o=Us||rn,u===null||L||o||Dr(a)),Fn&&(a.memoizedProps===null||a.memoizedProps.mode!=="manual"))){t:if(u=null,Fn)for(o=a;;){if(o.tag===5||Ii&&o.tag===26||Vn&&o.tag===27){if(u===null){L=u=o;try{b=L.stateNode,v?xM(b):vM(L.stateNode,L.memoizedProps)}catch(Et){He(L,L.return,Et)}}}else if(o.tag===6){if(u===null){L=o;try{var lt=L.stateNode;v?gM(lt):_M(lt,L.memoizedProps)}catch(Et){He(L,L.return,Et)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===a)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;u===o&&(u=null),o=o.return}u===o&&(u=null),o.sibling.return=o.return,o=o.sibling}}d&4&&(d=a.updateQueue,d!==null&&(u=d.retryQueue,u!==null&&(d.retryQueue=null,fd(a,u))));break;case 19:si(o,a),gi(a),d&4&&(d=a.updateQueue,d!==null&&(a.updateQueue=null,fd(a,d)));break;case 21:break;default:si(o,a),gi(a)}}function gi(a){var o=a.flags;if(o&2){try{if(Fn&&(!Vn||a.tag!==27)){t:{for(var u=a.return;u!==null;){if(bx(u)){var d=u;break t}u=u.return}throw Error(i(160))}switch(d.tag){case 27:if(Vn){var v=d.stateNode,b=cd(a);Pc(a,b,v);break}case 5:var L=d.stateNode;d.flags&32&&(pg(L),d.flags&=-33);var V=cd(a);Pc(a,V,L);break;case 3:case 4:var j=d.stateNode.containerInfo,lt=cd(a);ud(a,lt,j);break;default:throw Error(i(161))}}}catch(Et){He(a,a.return,Et)}a.flags&=-3}o&4096&&(a.flags&=-4097)}function wx(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var o=a;wx(o),o.tag===5&&o.flags&1024&&Qb(o.stateNode),a=a.sibling}}function Ts(a,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)Ex(a,o.alternate,o),o=o.sibling}function Dr(a){for(a=a.child;a!==null;){var o=a;switch(o.tag){case 0:case 11:case 14:case 15:Js(4,o,o.return),Dr(o);break;case 1:xi(o,o.return);var u=o.stateNode;typeof u.componentWillUnmount=="function"&&_x(o,o.return,u),Dr(o);break;case 26:case 27:case 5:xi(o,o.return),Dr(o);break;case 22:xi(o,o.return),o.memoizedState===null&&Dr(o);break;default:Dr(o)}a=a.sibling}}function Qs(a,o,u){for(u=u&&(o.subtreeFlags&8772)!==0,o=o.child;o!==null;){var d=o.alternate,v=a,b=o,L=b.flags;switch(b.tag){case 0:case 11:case 15:Qs(v,b,u),il(4,b);break;case 1:if(Qs(v,b,u),d=b,v=d.stateNode,typeof v.componentDidMount=="function")try{v.componentDidMount()}catch(lt){He(d,d.return,lt)}if(d=b,v=d.updateQueue,v!==null){var V=d.stateNode;try{var j=v.shared.hiddenCallbacks;if(j!==null)for(v.shared.hiddenCallbacks=null,v=0;v<j.length;v++)H(j[v],V)}catch(lt){He(d,d.return,lt)}}u&&L&64&&vx(b),Ia(b,b.return);break;case 26:case 27:case 5:Qs(v,b,u),u&&d===null&&L&4&&yx(b),Ia(b,b.return);break;case 12:Qs(v,b,u);break;case 13:Qs(v,b,u),u&&L&4&&Ax(v,b);break;case 22:b.memoizedState===null&&Qs(v,b,u),Ia(b,b.return);break;default:Qs(v,b,u)}o=o.sibling}}function dd(a,o){var u=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),a=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(a=o.memoizedState.cachePool.pool),a!==u&&(a!=null&&a.refCount++,u!=null&&el(u))}function pd(a,o){a=null,o.alternate!==null&&(a=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==a&&(o.refCount++,a!=null&&el(a))}function $s(a,o,u,d){if(o.subtreeFlags&10256)for(o=o.child;o!==null;)Rx(a,o,u,d),o=o.sibling}function Rx(a,o,u,d){var v=o.flags;switch(o.tag){case 0:case 11:case 15:$s(a,o,u,d),v&2048&&il(9,o);break;case 3:$s(a,o,u,d),v&2048&&(a=null,o.alternate!==null&&(a=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==a&&(o.refCount++,a!=null&&el(a)));break;case 12:if(v&2048){$s(a,o,u,d),a=o.stateNode;try{var b=o.memoizedProps,L=b.id,V=b.onPostCommit;typeof V=="function"&&V(L,o.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(j){He(o,o.return,j)}}else $s(a,o,u,d);break;case 23:break;case 22:b=o.stateNode,o.memoizedState!==null?b._visibility&4?$s(a,o,u,d):sl(a,o):b._visibility&4?$s(a,o,u,d):(b._visibility|=4,Ur(a,o,u,d,(o.subtreeFlags&10256)!==0)),v&2048&&dd(o.alternate,o);break;case 24:$s(a,o,u,d),v&2048&&pd(o.alternate,o);break;default:$s(a,o,u,d)}}function Ur(a,o,u,d,v){for(v=v&&(o.subtreeFlags&10256)!==0,o=o.child;o!==null;){var b=a,L=o,V=u,j=d,lt=L.flags;switch(L.tag){case 0:case 11:case 15:Ur(b,L,V,j,v),il(8,L);break;case 23:break;case 22:var Et=L.stateNode;L.memoizedState!==null?Et._visibility&4?Ur(b,L,V,j,v):sl(b,L):(Et._visibility|=4,Ur(b,L,V,j,v)),v&&lt&2048&&dd(L.alternate,L);break;case 24:Ur(b,L,V,j,v),v&&lt&2048&&pd(L.alternate,L);break;default:Ur(b,L,V,j,v)}o=o.sibling}}function sl(a,o){if(o.subtreeFlags&10256)for(o=o.child;o!==null;){var u=a,d=o,v=d.flags;switch(d.tag){case 22:sl(u,d),v&2048&&dd(d.alternate,d);break;case 24:sl(u,d),v&2048&&pd(d.alternate,d);break;default:sl(u,d)}o=o.sibling}}function Pa(a){if(a.subtreeFlags&Jr)for(a=a.child;a!==null;)Dx(a),a=a.sibling}function Dx(a){switch(a.tag){case 26:Pa(a),a.flags&Jr&&(a.memoizedState!==null?qM(Zi,a.memoizedState,a.memoizedProps):dg(a.type,a.memoizedProps));break;case 5:Pa(a),a.flags&Jr&&dg(a.type,a.memoizedProps);break;case 3:case 4:if(Ii){var o=Zi;Zi=Vd(a.stateNode.containerInfo),Pa(a),Zi=o}else Pa(a);break;case 22:a.memoizedState===null&&(o=a.alternate,o!==null&&o.memoizedState!==null?(o=Jr,Jr=16777216,Pa(a),Jr=o):Pa(a));break;default:Pa(a)}}function Ux(a){var o=a.alternate;if(o!==null&&(a=o.child,a!==null)){o.child=null;do o=a.sibling,a.sibling=null,a=o;while(a!==null)}}function al(a){var o=a.deletions;if((a.flags&16)!==0){if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];Mn=d,Lx(d,a)}Ux(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Nx(a),a=a.sibling}function Nx(a){switch(a.tag){case 0:case 11:case 15:al(a),a.flags&2048&&Js(9,a,a.return);break;case 3:al(a);break;case 12:al(a);break;case 22:var o=a.stateNode;a.memoizedState!==null&&o._visibility&4&&(a.return===null||a.return.tag!==13)?(o._visibility&=-5,Oc(a)):al(a);break;default:al(a)}}function Oc(a){var o=a.deletions;if((a.flags&16)!==0){if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];Mn=d,Lx(d,a)}Ux(a)}for(a=a.child;a!==null;){switch(o=a,o.tag){case 0:case 11:case 15:Js(8,o,o.return),Oc(o);break;case 22:u=o.stateNode,u._visibility&4&&(u._visibility&=-5,Oc(o));break;default:Oc(o)}a=a.sibling}}function Lx(a,o){for(;Mn!==null;){var u=Mn;switch(u.tag){case 0:case 11:case 15:Js(8,u,o);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var d=u.memoizedState.cachePool.pool;d!=null&&d.refCount++}break;case 24:el(u.memoizedState.cache)}if(d=u.child,d!==null)d.return=u,Mn=d;else t:for(u=a;Mn!==null;){d=Mn;var v=d.sibling,b=d.return;if(Tx(d),d===u){Mn=null;break t}if(v!==null){v.return=b,Mn=v;break t}Mn=b}}}function md(a){var o=hg(a);if(o!=null){if(typeof o.memoizedProps["data-testname"]!="string")throw Error(i(364));return o}if(a=eM(a),a===null)throw Error(i(362));return a.stateNode.current}function xd(a,o){var u=a.tag;switch(o.$$typeof){case eu:if(a.type===o.value)return!0;break;case nu:t:{for(o=o.value,a=[a,0],u=0;u<a.length;){var d=a[u++],v=d.tag,b=a[u++],L=o[b];if(v!==5&&v!==26&&v!==27||!ll(d)){for(;L!=null&&xd(d,L);)b++,L=o[b];if(b===o.length){o=!0;break t}else for(d=d.child;d!==null;)a.push(d,b),d=d.sibling}}o=!1}return o;case iu:if((u===5||u===26||u===27)&&sM(a.stateNode,o.value))return!0;break;case au:if((u===5||u===6||u===26||u===27)&&(a=iM(a),a!==null&&0<=a.indexOf(o.value)))return!0;break;case su:if((u===5||u===26||u===27)&&(a=a.memoizedProps["data-testname"],typeof a=="string"&&a.toLowerCase()===o.value.toLowerCase()))return!0;break;default:throw Error(i(365))}return!1}function gd(a){switch(a.$$typeof){case eu:return"<"+(l(a.value)||"Unknown")+">";case nu:return":has("+(gd(a)||"")+")";case iu:return'[role="'+a.value+'"]';case au:return'"'+a.value+'"';case su:return'[data-testname="'+a.value+'"]';default:throw Error(i(365))}}function Ix(a,o){var u=[];a=[a,0];for(var d=0;d<a.length;){var v=a[d++],b=v.tag,L=a[d++],V=o[L];if(b!==5&&b!==26&&b!==27||!ll(v)){for(;V!=null&&xd(v,V);)L++,V=o[L];if(L===o.length)u.push(v);else for(v=v.child;v!==null;)a.push(v,L),v=v.sibling}}return u}function vd(a,o){if(!ol)throw Error(i(363));a=md(a),a=Ix(a,o),o=[],a=Array.from(a);for(var u=0;u<a.length;){var d=a[u++],v=d.tag;if(v===5||v===26||v===27)ll(d)||o.push(d.stateNode);else for(d=d.child;d!==null;)a.push(d),d=d.sibling}return o}function vi(){if((We&2)!==0&&De!==0)return De&-De;if(xe.T!==null){var a=Wr;return a!==0?a:dt()}return qb()}function Px(){Fi===0&&(Fi=(De&536870912)===0||Pe?z():536870912);var a=zi.current;return a!==null&&(a.flags|=32),Fi}function jn(a,o,u){(a===je&&Ke===2||a.cancelPendingCommit!==null)&&(Nr(a,0),As(a,De,Fi,!1)),F(a,u),((We&2)===0||a!==je)&&(a===je&&((We&2)===0&&(Ya|=u),on===4&&As(a,De,Fi,!1)),It(a))}function Ox(a,o,u){if((We&6)!==0)throw Error(i(327));var d=!u&&(o&60)===0&&(o&a.expiredLanes)===0||w(a,o),v=d?bb(a,o):bd(a,o,!0),b=d;do{if(v===0){Qr&&!d&&As(a,o,0,!1);break}else if(v===6)As(a,o,0,!Ns);else{if(u=a.current.alternate,b&&!yb(u)){v=bd(a,o,!1),b=!1;continue}if(v===2){if(b=o,a.errorRecoveryDisabledLanes&b)var L=0;else L=a.pendingLanes&-536870913,L=L!==0?L:L&536870912?536870912:0;if(L!==0){o=L;t:{var V=a;v=xl;var j=Li&&V.current.memoizedState.isDehydrated;if(j&&(Nr(V,L).flags|=256),L=bd(V,L,!1),L!==2){if(ep&&!j){V.errorRecoveryDisabledLanes|=b,Ya|=b,v=4;break t}b=ls,ls=v,b!==null&&_d(b)}v=L}if(b=!1,v!==2)continue}}if(v===1){Nr(a,0),As(a,o,0,!0);break}t:{switch(d=a,v){case 0:case 1:throw Error(i(345));case 4:if((o&4194176)===o){As(d,o,Fi,!Ns);break t}break;case 2:ls=null;break;case 3:case 5:break;default:throw Error(i(329))}if(d.finishedWork=u,d.finishedLanes=o,(o&62914560)===o&&(b=sp+300-qi(),10<b)){if(As(d,o,Fi,!Ns),N(d,0)!==0)break t;d.timeoutHandle=kb(Bx.bind(null,d,u,ls,ru,ip,o,Fi,Ya,$r,Ns,2,-0,0),b);break t}Bx(d,u,ls,ru,ip,o,Fi,Ya,$r,Ns,0,-0,0)}}break}while(!0);It(a)}function _d(a){ls===null?ls=a:ls.push.apply(ls,a)}function Bx(a,o,u,d,v,b,L,V,j,lt,Et,Bt,Ht){var ye=o.subtreeFlags;if((ye&8192||(ye&16785408)===16785408)&&(Kb(),Dx(o),o=Jb(),o!==null)){a.cancelPendingCommit=o(qx.bind(null,a,u,d,v,L,V,j,1,Bt,Ht)),As(a,b,L,!lt);return}qx(a,u,d,v,L,V,j,Et,Bt,Ht)}function yb(a){for(var o=a;;){var u=o.tag;if((u===0||u===11||u===15)&&o.flags&16384&&(u=o.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var d=0;d<u.length;d++){var v=u[d],b=v.getSnapshot;v=v.value;try{if(!bi(b(),v))return!1}catch{return!1}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===a)break;for(;o.sibling===null;){if(o.return===null||o.return===a)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function As(a,o,u,d){o&=~np,o&=~Ya,a.suspendedLanes|=o,a.pingedLanes&=~o,d&&(a.warmLanes|=o),d=a.expirationTimes;for(var v=o;0<v;){var b=31-yi(v),L=1<<b;d[b]=-1,v&=~L}u!==0&&k(a,u,o)}function zx(){return(We&6)===0?(At(0),!1):!0}function yd(){if(Ce!==null){if(Ke===0)var a=Ce.return;else a=Ce,Ds=Xa=null,Jo(a),Yr=null,dl=0,a=Ce;for(;a!==null;)gx(a.alternate,a),a=a.return;Ce=null}}function Nr(a,o){a.finishedWork=null,a.finishedLanes=0;var u=a.timeoutHandle;u!==Bd&&(a.timeoutHandle=Bd,Wb(u)),u=a.cancelPendingCommit,u!==null&&(a.cancelPendingCommit=null,u()),yd(),je=a,Ce=u=ta(a.current,null),De=o,Ke=0,Ei=null,Ns=!1,Qr=w(a,o),ep=!1,$r=Fi=np=Ya=la=on=0,ls=xl=null,ip=!1,(o&8)!==0&&(o|=o&32);var d=a.entangledLanes;if(d!==0)for(a=a.entanglements,d&=o;0<d;){var v=31-yi(d),b=1<<v;o|=a[v],d&=~b}return Ls=o,mt(),u}function Fx(a,o){Ee=null,xe.H=os,o===fl?(o=Yt(),Ke=3):o===Kd?(o=Yt(),Ke=4):Ke=o===Og?8:o!==null&&typeof o=="object"&&typeof o.then=="function"?6:1,Ei=o,Ce===null&&(on=1,Dc(a,at(o,a.current)))}function Vx(){var a=zi.current;return a===null?!0:(De&4194176)===De?rs===null:(De&62914560)===De||(De&536870912)!==0?a===rs:!1}function Hx(){var a=xe.H;return xe.H=os,a===null?os:a}function Gx(){var a=xe.A;return xe.A=c1,a}function Sd(){on=4,Ns||(De&4194176)!==De&&zi.current!==null||(Qr=!0),(la&134217727)===0&&(Ya&134217727)===0||je===null||As(je,De,Fi,!1)}function bd(a,o,u){var d=We;We|=2;var v=Hx(),b=Gx();(je!==a||De!==o)&&(ru=null,Nr(a,o)),o=!1;var L=on;t:do try{if(Ke!==0&&Ce!==null){var V=Ce,j=Ei;switch(Ke){case 8:yd(),L=6;break t;case 3:case 2:case 6:zi.current===null&&(o=!0);var lt=Ke;if(Ke=0,Ei=null,Lr(a,V,j,lt),u&&Qr){L=0;break t}break;default:lt=Ke,Ke=0,Ei=null,Lr(a,V,j,lt)}}Sb(),L=on;break}catch(Et){Fx(a,Et)}while(!0);return o&&a.shellSuspendCounter++,Ds=Xa=null,We=d,xe.H=v,xe.A=b,Ce===null&&(je=null,De=0,mt()),L}function Sb(){for(;Ce!==null;)kx(Ce)}function bb(a,o){var u=We;We|=2;var d=Hx(),v=Gx();je!==a||De!==o?(ru=null,gl=qi()+500,Nr(a,o)):Qr=w(a,o);t:do try{if(Ke!==0&&Ce!==null){o=Ce;var b=Ei;e:switch(Ke){case 1:Ke=0,Ei=null,Lr(a,o,b,1);break;case 2:if(wt(b)){Ke=0,Ei=null,Wx(o);break}o=function(){Ke===2&&je===a&&(Ke=7),It(a)},b.then(o,o);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:wt(b)?(Ke=0,Ei=null,Wx(o)):(Ke=0,Ei=null,Lr(a,o,b,7));break;case 5:var L=null;switch(Ce.tag){case 26:L=Ce.memoizedState;case 5:case 27:var V=Ce,j=V.type,lt=V.pendingProps;if(L?Rg(L):fg(j,lt)){Ke=0,Ei=null;var Et=V.sibling;if(Et!==null)Ce=Et;else{var Bt=V.return;Bt!==null?(Ce=Bt,Bc(Bt)):Ce=null}break e}}Ke=0,Ei=null,Lr(a,o,b,5);break;case 6:Ke=0,Ei=null,Lr(a,o,b,6);break;case 8:yd(),on=6;break t;default:throw Error(i(462))}}Mb();break}catch(Ht){Fx(a,Ht)}while(!0);return Ds=Xa=null,xe.H=d,xe.A=v,We=u,Ce!==null?0:(je=null,De=0,mt(),on)}function Mb(){for(;Ce!==null&&!QM();)kx(Ce)}function kx(a){var o=ux(a.alternate,a,Ls);a.memoizedProps=a.pendingProps,o===null?Bc(a):Ce=o}function Wx(a){var o=a,u=o.alternate;switch(o.tag){case 15:case 0:o=sx(u,o,o.pendingProps,o.type,void 0,De);break;case 11:o=sx(u,o,o.pendingProps,o.type.render,o.ref,De);break;case 5:Jo(o);default:gx(u,o),o=Ce=Kx(o,Ls),o=ux(u,o,Ls)}a.memoizedProps=a.pendingProps,o===null?Bc(a):Ce=o}function Lr(a,o,u,d){Ds=Xa=null,Jo(o),Yr=null,dl=0;var v=o.return;try{if(pb(a,v,o,u,De)){on=1,Dc(a,at(u,a.current)),Ce=null;return}}catch(b){if(v!==null)throw Ce=v,b;on=1,Dc(a,at(u,a.current)),Ce=null;return}o.flags&32768?(Pe||d===1?a=!0:Qr||(De&536870912)!==0?a=!1:(Ns=a=!0,(d===2||d===3||d===6)&&(d=zi.current,d!==null&&d.tag===13&&(d.flags|=16384))),Xx(o,a)):Bc(o)}function Bc(a){var o=a;do{if((o.flags&32768)!==0){Xx(o,Ns);return}a=o.return;var u=xb(o.alternate,o,Ls);if(u!==null){Ce=u;return}if(o=o.sibling,o!==null){Ce=o;return}Ce=o=a}while(o!==null);on===0&&(on=5)}function Xx(a,o){do{var u=gb(a.alternate,a);if(u!==null){u.flags&=32767,Ce=u;return}if(u=a.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!o&&(a=a.sibling,a!==null)){Ce=a;return}Ce=a=u}while(a!==null);on=6,Ce=null}function qx(a,o,u,d,v,b,L,V,j,lt){var Et=xe.T,Bt=za();try{ai(2),xe.T=null,Eb(a,o,u,d,Bt,v,b,L,V,j,lt)}finally{xe.T=Et,ai(Bt)}}function Eb(a,o,u,d,v,b,L,V){do Oa();while(Za!==null);if((We&6)!==0)throw Error(i(327));var j=a.finishedWork;if(d=a.finishedLanes,j===null)return null;if(a.finishedWork=null,a.finishedLanes=0,j===a.current)throw Error(i(177));a.callbackNode=null,a.callbackPriority=0,a.cancelPendingCommit=null;var lt=j.lanes|j.childLanes;if(lt|=Xd,W(a,d,lt,b,L,V),a===je&&(Ce=je=null,De=0),(j.subtreeFlags&10256)===0&&(j.flags&10256)===0||ou||(ou=!0,ap=lt,rp=u,wb(kd,function(){return Oa(),null})),u=(j.flags&15990)!==0,(j.subtreeFlags&15990)!==0||u?(u=xe.T,xe.T=null,b=za(),ai(2),L=We,We|=4,vb(a,j),Cx(j,a),Hb(a.containerInfo),a.current=j,Ex(a,j.alternate,j),$M(),We=L,ai(b),xe.T=u):a.current=j,ou?(ou=!1,Za=a,vl=d):Yx(a,lt),lt=a.pendingLanes,lt===0&&(ca=null),G(j.stateNode),It(a),o!==null)for(v=a.onRecoverableError,j=0;j<o.length;j++)lt=o[j],v(lt.value,{componentStack:lt.stack});return(vl&3)!==0&&Oa(),lt=a.pendingLanes,(d&4194218)!==0&&(lt&42)!==0?a===op?_l++:(_l=0,op=a):_l=0,At(0),null}function Yx(a,o){(a.pooledCacheLanes&=o)===0&&(o=a.pooledCache,o!=null&&(a.pooledCache=null,el(o)))}function Oa(){if(Za!==null){var a=Za,o=ap;ap=0;var u=nt(vl),d=32>u?32:u;u=xe.T;var v=za();try{if(ai(d),xe.T=null,Za===null)var b=!1;else{d=rp,rp=null;var L=Za,V=vl;if(Za=null,vl=0,(We&6)!==0)throw Error(i(331));var j=We;if(We|=4,Nx(L.current),Rx(L,L.current,V,d),We=j,At(0,!1),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(cl,L)}catch{}b=!0}return b}finally{ai(v),xe.T=u,Yx(a,o)}}return!1}function Zx(a,o,u){o=at(u,o),o=Yf(a.stateNode,o,2),a=bt(a,o,2),a!==null&&(F(a,2),It(a))}function He(a,o,u){if(a.tag===3)Zx(a,a,u);else for(;o!==null;){if(o.tag===3){Zx(o,a,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ca===null||!ca.has(d))){a=at(u,a),u=J0(2),d=bt(o,u,2),d!==null&&(Q0(u,d,o,a),F(d,2),It(d));break}}o=o.return}}function Md(a,o,u){var d=a.pingCache;if(d===null){d=a.pingCache=new u1;var v=new Set;d.set(o,v)}else v=d.get(o),v===void 0&&(v=new Set,d.set(o,v));v.has(u)||(ep=!0,v.add(u),a=Tb.bind(null,a,o,u),o.then(a,a))}function Tb(a,o,u){var d=a.pingCache;d!==null&&d.delete(o),a.pingedLanes|=a.suspendedLanes&u,a.warmLanes&=~u,je===a&&(De&u)===u&&(on===4||on===3&&(De&62914560)===De&&300>qi()-sp?(We&2)===0&&Nr(a,0):np|=u,$r===De&&($r=0)),It(a)}function jx(a,o){o===0&&(o=R()),a=gt(a,o),a!==null&&(F(a,o),It(a))}function Ab(a){var o=a.memoizedState,u=0;o!==null&&(u=o.retryLane),jx(a,u)}function Cb(a,o){var u=0;switch(a.tag){case 13:var d=a.stateNode,v=a.memoizedState;v!==null&&(u=v.retryLane);break;case 19:d=a.stateNode;break;case 22:d=a.stateNode._retryCache;break;default:throw Error(i(314))}d!==null&&d.delete(o),jx(a,u)}function wb(a,o){return Wc(a,o)}function Rb(a,o,u,d){this.tag=a,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ed(a){return a=a.prototype,!(!a||!a.isReactComponent)}function ta(a,o){var u=a.alternate;return u===null?(u=e(a.tag,o,a.key,a.mode),u.elementType=a.elementType,u.type=a.type,u.stateNode=a.stateNode,u.alternate=a,a.alternate=u):(u.pendingProps=o,u.type=a.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=a.flags&31457280,u.childLanes=a.childLanes,u.lanes=a.lanes,u.child=a.child,u.memoizedProps=a.memoizedProps,u.memoizedState=a.memoizedState,u.updateQueue=a.updateQueue,o=a.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=a.sibling,u.index=a.index,u.ref=a.ref,u.refCleanup=a.refCleanup,u}function Kx(a,o){a.flags&=31457282;var u=a.alternate;return u===null?(a.childLanes=0,a.lanes=o,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,o=u.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),a}function zc(a,o,u,d,v,b){var L=0;if(d=a,typeof a=="function")Ed(a)&&(L=1);else if(typeof a=="string")L=Ii&&Vn?Mg(a,u,Dn.current)?26:Ug(a)?27:5:Ii?Mg(a,u,Dn.current)?26:5:Vn&&Ug(a)?27:5;else t:switch(a){case Pr:return Ba(u.children,v,b,o);case ig:L=8,v|=24;break;case Rd:return a=e(12,u,o,v|2),a.elementType=Rd,a.lanes=b,a;case Ud:return a=e(13,u,o,v),a.elementType=Ud,a.lanes=b,a;case Nd:return a=e(19,u,o,v),a.elementType=Nd,a.lanes=b,a;case ag:return Jx(u,v,b,o);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Lb:case ea:L=10;break t;case sg:L=9;break t;case Dd:L=11;break t;case Ld:L=14;break t;case na:L=16,d=null;break t}L=29,u=Error(i(130,a===null?"null":typeof a,"")),d=null}return o=e(L,u,o,v),o.elementType=a,o.type=d,o.lanes=b,o}function Ba(a,o,u,d){return a=e(7,a,d,o),a.lanes=u,a}function Jx(a,o,u,d){a=e(22,a,d,o),a.elementType=ag,a.lanes=u;var v={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var b=v._current;if(b===null)throw Error(i(456));if((v._pendingVisibility&2)===0){var L=gt(b,2);L!==null&&(v._pendingVisibility|=2,jn(L,b,2))}},attach:function(){var b=v._current;if(b===null)throw Error(i(456));if((v._pendingVisibility&2)!==0){var L=gt(b,2);L!==null&&(v._pendingVisibility&=-3,jn(L,b,2))}}};return a.stateNode=v,a}function Td(a,o,u){return a=e(6,a,null,o),a.lanes=u,a}function Ad(a,o,u){return o=e(4,a.children!==null?a.children:[],a.key,o),o.lanes=u,o.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},o}function Db(a,o,u,d,v,b,L,V){this.tag=1,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Bd,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=C(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=C(0),this.hiddenUpdates=C(null),this.identifierPrefix=d,this.onUncaughtError=v,this.onCaughtError=b,this.onRecoverableError=L,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Qx(a,o,u,d,v,b,L,V,j,lt,Et,Bt){return a=new Db(a,o,u,L,V,j,lt,Bt),o=1,b===!0&&(o|=24),b=e(3,null,null,o),a.current=b,b.stateNode=a,o=sd(),o.refCount++,a.pooledCache=o,o.refCount++,b.memoizedState={element:d,isDehydrated:u,cache:o},Qt(b),a}function $x(a){return a?(a=zr,a):zr}function tg(a){var o=a._reactInternals;if(o===void 0)throw typeof a.render=="function"?Error(i(188)):(a=Object.keys(a).join(","),Error(i(268,a)));return a=g(o),a=a!==null?y(a):null,a===null?null:rl(a.stateNode)}function eg(a,o,u,d,v,b){v=$x(v),d.context===null?d.context=v:d.pendingContext=v,d=ft(o),d.payload={element:u},b=b===void 0?null:b,b!==null&&(d.callback=b),u=bt(a,d,o),u!==null&&(jn(u,a,o),ie(u,a,o))}function ng(a,o){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var u=a.retryLane;a.retryLane=u!==0&&u<o?u:o}}function Cd(a,o){ng(a,o),(a=a.alternate)&&ng(a,o)}var Ae={},Ub=Fm(),_i=HS(),wd=Object.assign,Nb=Symbol.for("react.element"),Fc=Symbol.for("react.transitional.element"),Ir=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),ig=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),Lb=Symbol.for("react.provider"),sg=Symbol.for("react.consumer"),ea=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Nd=Symbol.for("react.suspense_list"),Ld=Symbol.for("react.memo"),na=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Ib=Symbol.for("react.memo_cache_sentinel"),rg=Symbol.iterator,Pb=Symbol.for("react.client.reference"),xe=Ub.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Id,og,Pd=!1,Vc=Array.isArray,Ob=t.rendererVersion,Bb=t.rendererPackageName,lg=t.extraDevToolsConfig,rl=t.getPublicInstance,zb=t.getRootHostContext,Fb=t.getChildHostContext,Vb=t.prepareForCommit,Hb=t.resetAfterCommit,Gb=t.createInstance,Od=t.appendInitialChild,cg=t.finalizeInitialChildren,Hc=t.shouldSetTextContent,ug=t.createTextInstance,kb=t.scheduleTimeout,Wb=t.cancelTimeout,Bd=t.noTimeout,Cs=t.isPrimaryRenderer;t.warnsIfNotActing;var Fn=t.supportsMutation,ia=t.supportsPersistence,Li=t.supportsHydration,hg=t.getInstanceFromNode;t.beforeActiveInstanceBlur,t.afterActiveInstanceBlur;var Xb=t.preparePortalMount;t.prepareScopeUpdate,t.getInstanceFromScope;var ai=t.setCurrentUpdatePriority,za=t.getCurrentUpdatePriority,qb=t.resolveUpdatePriority;t.resolveEventType,t.resolveEventTimeStamp;var Yb=t.shouldAttemptEagerTransition,Zb=t.detachDeletedInstance;t.requestPostPaintCallback;var jb=t.maySuspendCommit,fg=t.preloadInstance,Kb=t.startSuspendingCommit,dg=t.suspendInstance,Jb=t.waitForCommitToBeReady,Or=t.NotPendingTransition,Fa=t.HostTransitionContext,Qb=t.resetFormInstance;t.bindToConsole;var $b=t.supportsMicrotasks,tM=t.scheduleMicrotask,ol=t.supportsTestSelectors,eM=t.findFiberRoot,nM=t.getBoundingRect,iM=t.getTextContent,ll=t.isHiddenSubtree,sM=t.matchAccessibilityRole,aM=t.setFocusIfFocusable,rM=t.setupIntersectionObserver,oM=t.appendChild,lM=t.appendChildToContainer,cM=t.commitTextUpdate,uM=t.commitMount,hM=t.commitUpdate,fM=t.insertBefore,dM=t.insertInContainerBefore,pM=t.removeChild,mM=t.removeChildFromContainer,pg=t.resetTextContent,xM=t.hideInstance,gM=t.hideTextInstance,vM=t.unhideInstance,_M=t.unhideTextInstance,yM=t.clearContainer,SM=t.cloneInstance,mg=t.createContainerChildSet,xg=t.appendChildToContainerChildSet,bM=t.finalizeContainerChildren,gg=t.replaceContainerChildren,vg=t.cloneHiddenInstance,_g=t.cloneHiddenTextInstance,zd=t.isSuspenseInstancePending,Fd=t.isSuspenseInstanceFallback,MM=t.getSuspenseInstanceFallbackErrorDetails,EM=t.registerSuspenseInstanceRetry,TM=t.canHydrateFormStateMarker,AM=t.isFormStateMarkerMatching,yg=t.getNextHydratableSibling,Sg=t.getFirstHydratableChild,CM=t.getFirstHydratableChildWithinContainer,wM=t.getFirstHydratableChildWithinSuspenseInstance,RM=t.canHydrateInstance,DM=t.canHydrateTextInstance,UM=t.canHydrateSuspenseInstance,NM=t.hydrateInstance,LM=t.hydrateTextInstance,IM=t.hydrateSuspenseInstance,PM=t.getNextHydratableInstanceAfterSuspenseInstance,OM=t.commitHydratedContainer,BM=t.commitHydratedSuspenseInstance,zM=t.clearSuspenseBoundary,FM=t.clearSuspenseBoundaryFromContainer,bg=t.shouldDeleteUnhydratedTailInstances;t.diffHydratedPropsForDevWarnings,t.diffHydratedTextForDevWarnings,t.describeHydratableInstanceForDevWarnings;var VM=t.validateHydratableInstance,HM=t.validateHydratableTextInstance,Ii=t.supportsResources,Mg=t.isHostHoistableType,Vd=t.getHoistableRoot,Eg=t.getResource,Tg=t.acquireResource,Ag=t.releaseResource,GM=t.hydrateHoistable,Cg=t.mountHoistable,wg=t.unmountHoistable,kM=t.createHoistableInstance,WM=t.prepareToCommitHoistables,XM=t.mayResourceSuspendCommit,Rg=t.preloadResource,qM=t.suspendResource,Vn=t.supportsSingletons,Dg=t.resolveSingletonInstance,YM=t.clearSingleton,ZM=t.acquireSingletonInstance,jM=t.releaseSingletonInstance,Ug=t.isHostSingletonType,Hd=[],Br=-1,zr={},yi=Math.clz32?Math.clz32:T,KM=Math.log,JM=Math.LN2,Gc=128,kc=4194304,Wc=_i.unstable_scheduleCallback,Gd=_i.unstable_cancelCallback,QM=_i.unstable_shouldYield,$M=_i.unstable_requestPaint,qi=_i.unstable_now,Ng=_i.unstable_ImmediatePriority,t1=_i.unstable_UserBlockingPriority,kd=_i.unstable_NormalPriority,e1=_i.unstable_IdlePriority,n1=_i.log,i1=_i.unstable_setDisableYieldValue,cl=null,Si=null,bi=typeof Object.is=="function"?Object.is:Z,Lg=new WeakMap,Fr=[],Vr=0,Xc=null,qc=0,Pi=[],Oi=0,Va=null,ws=1,Rs="",Dn=S(null),ul=S(null),sa=S(null),Yc=S(null),Kn=null,Hn=null,Pe=!1,Yi=null,as=!1,Wd=Error(i(519)),Bi=[],Hr=0,Xd=0,Zc=null,Gr=null,qd=!1,jc=!1,Yd=!1,kr=0,hl=null,Zd=0,Wr=0,Xr=null,aa=!1,jd=!1,s1=Object.prototype.hasOwnProperty,fl=Error(i(460)),Kd=Error(i(474)),Kc={then:function(){}},qr=null,Yr=null,dl=0,Ha=ni(!0),Ig=ni(!1),Zr=S(null),Jc=S(0),zi=S(null),rs=null,xn=S(0),ra=0,Ee=null,ke=null,fn=null,Qc=!1,jr=!1,Ga=!1,$c=0,pl=0,Kr=null,a1=0,Jd=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}},os={readContext:zn,use:$,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e};os.useCacheRefresh=$e,os.useMemoCache=$e,os.useHostTransitionStatus=$e,os.useFormState=$e,os.useActionState=$e,os.useOptimistic=$e;var ka={readContext:zn,use:$,useCallback:function(a,o){return On().memoizedState=[a,o===void 0?null:o],a},useContext:zn,useEffect:L0,useImperativeHandle:function(a,o,u){u=u!=null?u.concat([a]):null,Ni(4194308,4,O0.bind(null,o,a),u)},useLayoutEffect:function(a,o){return Ni(4194308,4,a,o)},useInsertionEffect:function(a,o){Ni(4,2,a,o)},useMemo:function(a,o){var u=On();o=o===void 0?null:o;var d=a();if(Ga){tt(!0);try{a()}finally{tt(!1)}}return u.memoizedState=[d,o],d},useReducer:function(a,o,u){var d=On();if(u!==void 0){var v=u(o);if(Ga){tt(!0);try{u(o)}finally{tt(!1)}}}else v=o;return d.memoizedState=d.baseState=v,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:v},d.queue=a,a=a.dispatch=db.bind(null,Ee,a),[d.memoizedState,a]},useRef:function(a){var o=On();return a={current:a},o.memoizedState=a},useState:function(a){a=qe(a);var o=a.queue,u=X0.bind(null,Ee,o);return o.dispatch=u,[a.memoizedState,u]},useDebugValue:Gf,useDeferredValue:function(a,o){var u=On();return kf(u,a,o)},useTransition:function(){var a=qe(!1);return a=H0.bind(null,Ee,a.queue,!0,!1),On().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,o,u){var d=Ee,v=On();if(Pe){if(u===void 0)throw Error(i(407));u=u()}else{if(u=o(),je===null)throw Error(i(349));(De&60)!==0||le(d,o,u)}v.memoizedState=u;var b={value:u,getSnapshot:o};return v.queue=b,L0(te.bind(null,d,b,a),[a]),d.flags|=2048,un(9,ce.bind(null,d,b,u,o),{destroy:void 0},null),u},useId:function(){var a=On(),o=je.identifierPrefix;if(Pe){var u=Rs,d=ws;u=(d&~(1<<32-yi(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=$c++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=a1++,o=":"+o+"r"+u.toString(32)+":";return a.memoizedState=o},useCacheRefresh:function(){return On().memoizedState=fb.bind(null,Ee)}};ka.useMemoCache=it,ka.useHostTransitionStatus=Wf,ka.useFormState=js,ka.useActionState=js,ka.useOptimistic=function(a){var o=On();o.memoizedState=o.baseState=a;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=u,o=Xf.bind(null,Ee,!0,u),u.dispatch=o,[a,o]};var oa={readContext:zn,use:$,useCallback:z0,useContext:zn,useEffect:Hf,useImperativeHandle:B0,useInsertionEffect:I0,useLayoutEffect:P0,useMemo:F0,useReducer:Mt,useRef:Rr,useState:function(){return Mt(q)},useDebugValue:Gf,useDeferredValue:function(a,o){var u=U();return V0(u,ke.memoizedState,a,o)},useTransition:function(){var a=Mt(q)[0],o=U().memoizedState;return[typeof a=="boolean"?a:X(a),o]},useSyncExternalStore:kt,useId:k0};oa.useCacheRefresh=W0,oa.useMemoCache=it,oa.useHostTransitionStatus=Wf,oa.useFormState=Ze,oa.useActionState=Ze,oa.useOptimistic=function(a,o){var u=U();return Je(u,ke,a,o)};var Wa={readContext:zn,use:$,useCallback:z0,useContext:zn,useEffect:Hf,useImperativeHandle:B0,useInsertionEffect:I0,useLayoutEffect:P0,useMemo:F0,useReducer:Xt,useRef:Rr,useState:function(){return Xt(q)},useDebugValue:Gf,useDeferredValue:function(a,o){var u=U();return ke===null?kf(u,a,o):V0(u,ke.memoizedState,a,o)},useTransition:function(){var a=Xt(q)[0],o=U().memoizedState;return[typeof a=="boolean"?a:X(a),o]},useSyncExternalStore:kt,useId:k0};Wa.useCacheRefresh=W0,Wa.useMemoCache=it,Wa.useHostTransitionStatus=Wf,Wa.useFormState=Sn,Wa.useActionState=Sn,Wa.useOptimistic=function(a,o){var u=U();return ke!==null?Je(u,ke,a,o):(u.baseState=a,[a,u.queue.dispatch])};var Qd={isMounted:function(a){return(a=a._reactInternals)?m(a)===a:!1},enqueueSetState:function(a,o,u){a=a._reactInternals;var d=vi(),v=ft(d);v.payload=o,u!=null&&(v.callback=u),o=bt(a,v,d),o!==null&&(jn(o,a,d),ie(o,a,d))},enqueueReplaceState:function(a,o,u){a=a._reactInternals;var d=vi(),v=ft(d);v.tag=1,v.payload=o,u!=null&&(v.callback=u),o=bt(a,v,d),o!==null&&(jn(o,a,d),ie(o,a,d))},enqueueForceUpdate:function(a,o){a=a._reactInternals;var u=vi(),d=ft(u);d.tag=2,o!=null&&(d.callback=o),o=bt(a,d,u),o!==null&&(jn(o,a,u),ie(o,a,u))}},Pg=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(o))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Og=Error(i(461)),bn=!1,$d={dehydrated:null,treeContext:null,retryLane:0},tu=S(null),Xa=null,Ds=null,r1=typeof AbortController<"u"?AbortController:function(){var a=[],o=this.signal={aborted:!1,addEventListener:function(u,d){a.push(d)}};this.abort=function(){o.aborted=!0,a.forEach(function(u){return u()})}},o1=_i.unstable_scheduleCallback,l1=_i.unstable_NormalPriority,an={$$typeof:ea,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Bg=xe.S;xe.S=function(a,o){typeof o=="object"&&o!==null&&typeof o.then=="function"&&st(a,o),Bg!==null&&Bg(a,o)};var qa=S(null),Us=!1,rn=!1,tp=!1,zg=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Fg=!1,dn=null,Mi=!1,Zi=null,Jr=8192,c1={getCacheForType:function(a){var o=zn(an),u=o.data.get(a);return u===void 0&&(u=a(),o.data.set(a,u)),u}},eu=0,nu=1,iu=2,su=3,au=4;if(typeof Symbol=="function"&&Symbol.for){var ml=Symbol.for;eu=ml("selector.component"),nu=ml("selector.has_pseudo_class"),iu=ml("selector.role"),su=ml("selector.test_id"),au=ml("selector.text")}var u1=typeof WeakMap=="function"?WeakMap:Map,We=0,je=null,Ce=null,De=0,Ke=0,Ei=null,Ns=!1,Qr=!1,ep=!1,Ls=0,on=0,la=0,Ya=0,np=0,Fi=0,$r=0,xl=null,ls=null,ip=!1,sp=0,gl=1/0,ru=null,ca=null,ou=!1,Za=null,vl=0,ap=0,rp=null,_l=0,op=null;return Ae.attemptContinuousHydration=function(a){if(a.tag===13){var o=gt(a,67108864);o!==null&&jn(o,a,67108864),Cd(a,67108864)}},Ae.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var o=vi(),u=gt(a,o);u!==null&&jn(u,a,o),Cd(a,o)}},Ae.attemptSynchronousHydration=function(a){switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=A(a.pendingLanes);if(o!==0){for(a.pendingLanes|=2,a.entangledLanes|=2;o;){var u=1<<31-yi(o);a.entanglements[1]|=u,o&=~u}It(a),(We&6)===0&&(gl=qi()+500,At(0))}}break;case 13:o=gt(a,2),o!==null&&jn(o,a,2),zx(),Cd(a,2)}},Ae.batchedUpdates=function(a,o){return a(o)},Ae.createComponentSelector=function(a){return{$$typeof:eu,value:a}},Ae.createContainer=function(a,o,u,d,v,b,L,V,j,lt){return Qx(a,o,!1,null,u,d,b,L,V,j,lt,null)},Ae.createHasPseudoClassSelector=function(a){return{$$typeof:nu,value:a}},Ae.createHydrationContainer=function(a,o,u,d,v,b,L,V,j,lt,Et,Bt,Ht){return a=Qx(u,d,!0,a,v,b,V,j,lt,Et,Bt,Ht),a.context=$x(null),u=a.current,d=vi(),v=ft(d),v.callback=o??null,bt(u,v,d),a.current.lanes=d,F(a,d),It(a),a},Ae.createPortal=function(a,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:d==null?null:""+d,children:a,containerInfo:o,implementation:u}},Ae.createRoleSelector=function(a){return{$$typeof:iu,value:a}},Ae.createTestNameSelector=function(a){return{$$typeof:su,value:a}},Ae.createTextSelector=function(a){return{$$typeof:au,value:a}},Ae.defaultOnCaughtError=function(a){console.error(a)},Ae.defaultOnRecoverableError=function(a){Pg(a)},Ae.defaultOnUncaughtError=function(a){Pg(a)},Ae.deferredUpdates=function(a){var o=xe.T,u=za();try{return ai(32),xe.T=null,a()}finally{ai(u),xe.T=o}},Ae.discreteUpdates=function(a,o,u,d,v){var b=xe.T,L=za();try{return ai(2),xe.T=null,a(o,u,d,v)}finally{ai(L),xe.T=b,We===0&&(gl=qi()+500)}},Ae.findAllNodes=vd,Ae.findBoundingRects=function(a,o){if(!ol)throw Error(i(363));o=vd(a,o),a=[];for(var u=0;u<o.length;u++)a.push(nM(o[u]));for(o=a.length-1;0<o;o--){u=a[o];for(var d=u.x,v=d+u.width,b=u.y,L=b+u.height,V=o-1;0<=V;V--)if(o!==V){var j=a[V],lt=j.x,Et=lt+j.width,Bt=j.y,Ht=Bt+j.height;if(d>=lt&&b>=Bt&&v<=Et&&L<=Ht){a.splice(o,1);break}else if(d!==lt||u.width!==j.width||Ht<b||Bt>L){if(!(b!==Bt||u.height!==j.height||Et<d||lt>v)){lt>d&&(j.width+=lt-d,j.x=d),Et<v&&(j.width=v-lt),a.splice(o,1);break}}else{Bt>b&&(j.height+=Bt-b,j.y=b),Ht<L&&(j.height=L-Bt),a.splice(o,1);break}}}return a},Ae.findHostInstance=tg,Ae.findHostInstanceWithNoPortals=function(a){return a=g(a),a=a!==null?M(a):null,a===null?null:rl(a.stateNode)},Ae.findHostInstanceWithWarning=function(a){return tg(a)},Ae.flushPassiveEffects=Oa,Ae.flushSyncFromReconciler=function(a){var o=We;We|=1;var u=xe.T,d=za();try{if(ai(2),xe.T=null,a)return a()}finally{ai(d),xe.T=u,We=o,(We&6)===0&&At(0)}},Ae.flushSyncWork=zx,Ae.focusWithin=function(a,o){if(!ol)throw Error(i(363));for(a=md(a),o=Ix(a,o),o=Array.from(o),a=0;a<o.length;){var u=o[a++],d=u.tag;if(!ll(u)){if((d===5||d===26||d===27)&&aM(u.stateNode))return!0;for(u=u.child;u!==null;)o.push(u),u=u.sibling}}return!1},Ae.getFindAllNodesFailureDescription=function(a,o){if(!ol)throw Error(i(363));var u=0,d=[];a=[md(a),0];for(var v=0;v<a.length;){var b=a[v++],L=b.tag,V=a[v++],j=o[V];if((L!==5&&L!==26&&L!==27||!ll(b))&&(xd(b,j)&&(d.push(gd(j)),V++,V>u&&(u=V)),V<o.length))for(b=b.child;b!==null;)a.push(b,V),b=b.sibling}if(u<o.length){for(a=[];u<o.length;u++)a.push(gd(o[u]));return`findAllNodes was able to match part of the selector:
  `+(d.join(" > ")+`

No matching component was found for:
  `)+a.join(" > ")}return null},Ae.getPublicRootInstance=function(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 27:case 5:return rl(a.child.stateNode);default:return a.child.stateNode}},Ae.injectIntoDevTools=function(){var a={bundleType:0,version:Ob,rendererPackageName:Bb,currentDispatcherRef:xe,findFiberByHostInstance:hg,reconcilerVersion:"19.0.0"};if(lg!==null&&(a.rendererConfig=lg),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(o.isDisabled||!o.supportsFiber)a=!0;else{try{cl=o.inject(a),Si=o}catch{}a=!!o.checkDCE}}return a},Ae.isAlreadyRendering=function(){return!1},Ae.observeVisibleRects=function(a,o,u,d){if(!ol)throw Error(i(363));a=vd(a,o);var v=rM(a,u,d).disconnect;return{disconnect:function(){v()}}},Ae.shouldError=function(){return null},Ae.shouldSuspend=function(){return!1},Ae.startHostTransition=function(a,o,u,d){if(a.tag!==5)throw Error(i(476));var v=G0(a).queue;H0(a,v,o,Or,u===null?n:function(){var b=G0(a).next.queue;return Qo(a,b,{},vi()),u(d)})},Ae.updateContainer=function(a,o,u,d){var v=o.current,b=vi();return eg(v,b,a,o,u,d),b},Ae.updateContainerSync=function(a,o,u,d){return o.tag===0&&Oa(),eg(o.current,2,a,o,u,d),2},Ae},s.exports.default=s.exports,Object.defineProperty(s.exports,"__esModule",{value:!0})})(im)),im.exports}var A_;function QR(){return A_||(A_=1,nm.exports=JR()),nm.exports}var $R=QR();const tD=G_($R);var C_=HS();function C0(s,t,e){if(!s)return;if(e(s)===!0)return s;let n=t?s.return:s.child;for(;n;){const i=C0(n,t,e);if(i)return i;n=t?null:n.sibling}}function GS(s){try{return Object.defineProperties(s,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return s}}const w0=GS(Ft.createContext(null));class kS extends Ft.Component{render(){return Ft.createElement(w0.Provider,{value:this._reactInternals},this.props.children)}}function WS(){const s=Ft.useContext(w0);if(s===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const t=Ft.useId();return Ft.useMemo(()=>{for(const e of[s,s?.alternate]){if(!e)continue;const n=C0(e,!1,i=>{let r=i.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}});if(n)return n}},[s,t])}const eD=Symbol.for("react.context"),nD=s=>s!==null&&typeof s=="object"&&"$$typeof"in s&&s.$$typeof===eD;function iD(){const s=WS(),[t]=Ft.useState(()=>new Map);t.clear();let e=s;for(;e;){const n=e.type;nD(n)&&n!==w0&&!t.has(n)&&t.set(n,Ft.use(GS(n))),e=e.return}return t}function sD(){const s=iD();return Ft.useMemo(()=>Array.from(s.keys()).reduce((t,e)=>n=>Ft.createElement(t,null,Ft.createElement(e.Provider,{...n,value:s.get(e)})),t=>Ft.createElement(kS,{...t})),[s])}function XS(s){let t=s.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}const qS=s=>s&&s.isOrthographicCamera,aD=s=>s&&s.hasOwnProperty("current"),rD=s=>s!=null&&(typeof s=="string"||typeof s=="number"||s.isColor),Ec=((s,t)=>typeof window<"u"&&(((s=window.document)==null?void 0:s.createElement)||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))()?Ft.useLayoutEffect:Ft.useEffect;function YS(s){const t=Ft.useRef(s);return Ec(()=>{t.current=s},[s]),t}function oD(){const s=WS(),t=sD();return Ft.useMemo(()=>({children:e})=>{const i=!!C0(s,!0,r=>r.type===Ft.StrictMode)?Ft.StrictMode:Ft.Fragment;return Jt.jsx(i,{children:Jt.jsx(t,{children:e})})},[s,t])}function lD({set:s}){return Ec(()=>(s(new Promise(()=>null)),()=>s(!1)),[s]),null}const cD=(s=>(s=class extends Ft.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}},s.getDerivedStateFromError=()=>({error:!0}),s))();function ZS(s){var t;const e=typeof window<"u"?(t=window.devicePixelRatio)!=null?t:2:1;return Array.isArray(s)?Math.min(Math.max(s[0],e),s[1]):s}function bo(s){var t;return(t=s.__r3f)==null?void 0:t.root.getState()}const en={obj:s=>s===Object(s)&&!en.arr(s)&&typeof s!="function",fun:s=>typeof s=="function",str:s=>typeof s=="string",num:s=>typeof s=="number",boo:s=>typeof s=="boolean",und:s=>s===void 0,nul:s=>s===null,arr:s=>Array.isArray(s),equ(s,t,{arrays:e="shallow",objects:n="reference",strict:i=!0}={}){if(typeof s!=typeof t||!!s!=!!t)return!1;if(en.str(s)||en.num(s)||en.boo(s))return s===t;const r=en.obj(s);if(r&&n==="reference")return s===t;const l=en.arr(s);if(l&&e==="reference")return s===t;if((l||r)&&s===t)return!0;let c;for(c in s)if(!(c in t))return!1;if(r&&e==="shallow"&&n==="shallow"){for(c in i?t:s)if(!en.equ(s[c],t[c],{strict:i,objects:"reference"}))return!1}else for(c in i?t:s)if(s[c]!==t[c])return!1;if(en.und(c)){if(l&&s.length===0&&t.length===0||r&&Object.keys(s).length===0&&Object.keys(t).length===0)return!0;if(s!==t)return!1}return!0}};function uD(s){s.type!=="Scene"&&(s.dispose==null||s.dispose());for(const t in s){const e=s[t];e?.type!=="Scene"&&(e==null||e.dispose==null||e.dispose())}}const jS=["children","key","ref"];function hD(s){const t={};for(const e in s)jS.includes(e)||(t[e]=s[e]);return t}function Jh(s,t,e,n){const i=s;let r=i?.__r3f;return r||(r={root:t,type:e,parent:null,children:[],props:hD(n),object:i,eventCount:0,handlers:{},isHidden:!1},i&&(i.__r3f=r)),r}function hc(s,t){if(!t.includes("-"))return{root:s,key:t,target:s[t]};if(t in s)return{root:s,key:t,target:s[t]};let e=s;const n=t.split("-");for(const i of n){if(typeof e!="object"||e===null){if(e!==void 0){const r=n.slice(n.indexOf(i)).join("-");return{root:e,key:r,target:void 0}}return{root:s,key:t,target:void 0}}t=i,s=e,e=e[t]}return{root:s,key:t,target:e}}const w_=/-\d+$/;function Qh(s,t){if(en.str(t.props.attach)){if(w_.test(t.props.attach)){const i=t.props.attach.replace(w_,""),{root:r,key:l}=hc(s.object,i);Array.isArray(r[l])||(r[l]=[])}const{root:e,key:n}=hc(s.object,t.props.attach);t.previousAttach=e[n],e[n]=t.object}else en.fun(t.props.attach)&&(t.previousAttach=t.props.attach(s.object,t.object))}function $h(s,t){if(en.str(t.props.attach)){const{root:e,key:n}=hc(s.object,t.props.attach),i=t.previousAttach;i===void 0?delete e[n]:e[n]=i}else t.previousAttach==null||t.previousAttach(s.object,t.object);delete t.previousAttach}const Nm=[...jS,"args","dispose","attach","object","onUpdate","dispose"],R_=new Map;function fD(s){let t=R_.get(s.constructor);try{t||(t=new s.constructor,R_.set(s.constructor,t))}catch{}return t}function dD(s,t){const e={};for(const n in t)if(!Nm.includes(n)&&!en.equ(t[n],s.props[n])){e[n]=t[n];for(const i in t)i.startsWith(`${n}-`)&&(e[i]=t[i])}for(const n in s.props){if(Nm.includes(n)||t.hasOwnProperty(n))continue;const{root:i,key:r}=hc(s.object,n);if(i.constructor&&i.constructor.length===0){const l=fD(i);en.und(l)||(e[r]=l[r])}else e[r]=0}return e}const pD=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],mD=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function ya(s,t){var e;const n=s.__r3f,i=n&&XS(n).getState(),r=n?.eventCount;for(const c in t){let h=t[c];if(Nm.includes(c))continue;if(n&&mD.test(c)){typeof h=="function"?n.handlers[c]=h:delete n.handlers[c],n.eventCount=Object.keys(n.handlers).length;continue}if(h===void 0)continue;let{root:f,key:p,target:m}=hc(s,c);if(m===void 0&&(typeof f!="object"||f===null))throw Error(`R3F: Cannot set "${c}". Ensure it is an object before setting "${p}".`);if(m instanceof Bo&&h instanceof Bo)m.mask=h.mask;else if(m instanceof zt&&rD(h))m.set(h);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof m.copy=="function"&&h!=null&&h.constructor&&m.constructor===h.constructor)m.copy(h);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&Array.isArray(h))typeof m.fromArray=="function"?m.fromArray(h):m.set(...h);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof h=="number")typeof m.setScalar=="function"?m.setScalar(h):m.set(h);else{var l;f[p]=h,i&&!i.linear&&pD.includes(p)&&(l=f[p])!=null&&l.isTexture&&f[p].format===qn&&f[p].type===Gi&&(f[p].colorSpace=Xn)}}if(n!=null&&n.parent&&i!=null&&i.internal&&(e=n.object)!=null&&e.isObject3D&&r!==n.eventCount){const c=n.object,h=i.internal.interaction.indexOf(c);h>-1&&i.internal.interaction.splice(h,1),n.eventCount&&c.raycast!==null&&i.internal.interaction.push(c)}return n&&n.props.attach===void 0&&(n.object.isBufferGeometry?n.props.attach="geometry":n.object.isMaterial&&(n.props.attach="material")),n&&Yo(n),s}function Yo(s){var t;if(!s.parent)return;s.props.onUpdate==null||s.props.onUpdate(s.object);const e=(t=s.root)==null||t.getState==null?void 0:t.getState();e&&e.internal.frames===0&&e.invalidate()}function xD(s,t){s.manual||(qS(s)?(s.left=t.width/-2,s.right=t.width/2,s.top=t.height/2,s.bottom=t.height/-2):s.aspect=t.width/t.height,s.updateProjectionMatrix())}const li=s=>s?.isObject3D;function Qu(s){return(s.eventObject||s.object).uuid+"/"+s.index+s.instanceId}function KS(s,t,e,n){const i=e.get(t);i&&(e.delete(t),e.size===0&&(s.delete(n),i.target.releasePointerCapture(n)))}function gD(s,t){const{internal:e}=s.getState();e.interaction=e.interaction.filter(n=>n!==t),e.initialHits=e.initialHits.filter(n=>n!==t),e.hovered.forEach((n,i)=>{(n.eventObject===t||n.object===t)&&e.hovered.delete(i)}),e.capturedMap.forEach((n,i)=>{KS(e.capturedMap,t,n,i)})}function vD(s){function t(h){const{internal:f}=s.getState(),p=h.offsetX-f.initialClick[0],m=h.offsetY-f.initialClick[1];return Math.round(Math.sqrt(p*p+m*m))}function e(h){return h.filter(f=>["Move","Over","Enter","Out","Leave"].some(p=>{var m;return(m=f.__r3f)==null?void 0:m.handlers["onPointer"+p]}))}function n(h,f){const p=s.getState(),m=new Set,x=[],g=f?f(p.internal.interaction):p.internal.interaction;for(let _=0;_<g.length;_++){const E=bo(g[_]);E&&(E.raycaster.camera=void 0)}p.previousRoot||p.events.compute==null||p.events.compute(h,p);function y(_){const E=bo(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var T;E.events.compute==null||E.events.compute(h,E,(T=E.previousRoot)==null?void 0:T.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=g.flatMap(y).sort((_,E)=>{const T=bo(_.object),A=bo(E.object);return!T||!A?_.distance-E.distance:A.events.priority-T.events.priority||_.distance-E.distance}).filter(_=>{const E=Qu(_);return m.has(E)?!1:(m.add(E),!0)});p.events.filter&&(M=p.events.filter(M,p));for(const _ of M){let E=_.object;for(;E;){var S;(S=E.__r3f)!=null&&S.eventCount&&x.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in h&&p.internal.capturedMap.has(h.pointerId))for(let _ of p.internal.capturedMap.get(h.pointerId).values())m.has(Qu(_.intersection))||x.push(_.intersection);return x}function i(h,f,p,m){if(h.length){const x={stopped:!1};for(const g of h){let y=bo(g.object);if(y||g.object.traverseAncestors(M=>{const S=bo(M);if(S)return y=S,!1}),y){const{raycaster:M,pointer:S,camera:_,internal:E}=y,T=new P(S.x,S.y,0).unproject(_),A=R=>{var C,F;return(C=(F=E.capturedMap.get(R))==null?void 0:F.has(g.eventObject))!=null?C:!1},N=R=>{const C={intersection:g,target:f.target};E.capturedMap.has(R)?E.capturedMap.get(R).set(g.eventObject,C):E.capturedMap.set(R,new Map([[g.eventObject,C]])),f.target.setPointerCapture(R)},w=R=>{const C=E.capturedMap.get(R);C&&KS(E.capturedMap,g.eventObject,C,R)};let I={};for(let R in f){let C=f[R];typeof C!="function"&&(I[R]=C)}let z={...g,...I,pointer:S,intersections:h,stopped:x.stopped,delta:p,unprojectedPoint:T,ray:M.ray,camera:_,stopPropagation(){const R="pointerId"in f&&E.capturedMap.get(f.pointerId);if((!R||R.has(g.eventObject))&&(z.stopped=x.stopped=!0,E.hovered.size&&Array.from(E.hovered.values()).find(C=>C.eventObject===g.eventObject))){const C=h.slice(0,h.indexOf(g));r([...C,g])}},target:{hasPointerCapture:A,setPointerCapture:N,releasePointerCapture:w},currentTarget:{hasPointerCapture:A,setPointerCapture:N,releasePointerCapture:w},nativeEvent:f};if(m(z),x.stopped===!0)break}}}return h}function r(h){const{internal:f}=s.getState();for(const p of f.hovered.values())if(!h.length||!h.find(m=>m.object===p.object&&m.index===p.index&&m.instanceId===p.instanceId)){const x=p.eventObject.__r3f;if(f.hovered.delete(Qu(p)),x!=null&&x.eventCount){const g=x.handlers,y={...p,intersections:h};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function l(h,f){for(let p=0;p<f.length;p++){const m=f[p].__r3f;m==null||m.handlers.onPointerMissed==null||m.handlers.onPointerMissed(h)}}function c(h){switch(h){case"onPointerLeave":case"onPointerCancel":return()=>r([]);case"onLostPointerCapture":return f=>{const{internal:p}=s.getState();"pointerId"in f&&p.capturedMap.has(f.pointerId)&&requestAnimationFrame(()=>{p.capturedMap.has(f.pointerId)&&(p.capturedMap.delete(f.pointerId),r([]))})}}return function(p){const{onPointerMissed:m,internal:x}=s.getState();x.lastEvent.current=p;const g=h==="onPointerMove",y=h==="onClick"||h==="onContextMenu"||h==="onDoubleClick",S=n(p,g?e:void 0),_=y?t(p):0;h==="onPointerDown"&&(x.initialClick=[p.offsetX,p.offsetY],x.initialHits=S.map(T=>T.eventObject)),y&&!S.length&&_<=2&&(l(p,x.interaction),m&&m(p)),g&&r(S);function E(T){const A=T.eventObject,N=A.__r3f;if(!(N!=null&&N.eventCount))return;const w=N.handlers;if(g){if(w.onPointerOver||w.onPointerEnter||w.onPointerOut||w.onPointerLeave){const I=Qu(T),z=x.hovered.get(I);z?z.stopped&&T.stopPropagation():(x.hovered.set(I,T),w.onPointerOver==null||w.onPointerOver(T),w.onPointerEnter==null||w.onPointerEnter(T))}w.onPointerMove==null||w.onPointerMove(T)}else{const I=w[h];I?(!y||x.initialHits.includes(A))&&(l(p,x.interaction.filter(z=>!x.initialHits.includes(z))),I(T)):y&&x.initialHits.includes(A)&&l(p,x.interaction.filter(z=>!x.initialHits.includes(z)))}}i(S,p,_,E)}}return{handlePointer:c}}const D_=s=>!!(s!=null&&s.render),JS=Ft.createContext(null),_D=(s,t)=>{const e=jR((c,h)=>{const f=new P,p=new P,m=new P;function x(_=h().camera,E=p,T=h().size){const{width:A,height:N,top:w,left:I}=T,z=A/N;E.isVector3?m.copy(E):m.set(...E);const R=_.getWorldPosition(f).distanceTo(m);if(qS(_))return{width:A/_.zoom,height:N/_.zoom,top:w,left:I,factor:1,distance:R,aspect:z};{const C=_.fov*Math.PI/180,F=2*Math.tan(C/2)*R,W=F*(A/N);return{width:W,height:F,top:w,left:I,factor:A/W,distance:R,aspect:z}}}let g;const y=_=>c(E=>({performance:{...E.performance,current:_}})),M=new ht;return{set:c,get:h,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(_=1)=>s(h(),_),advance:(_,E)=>t(_,E,h()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new M0,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=h();g&&clearTimeout(g),_.performance.current!==_.performance.min&&y(_.performance.min),g=setTimeout(()=>y(h().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:x},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,T=0,A=0)=>{const N=h().camera,w={width:_,height:E,top:T,left:A};c(I=>({size:w,viewport:{...I.viewport,...x(N,p,w)}}))},setDpr:_=>c(E=>{const T=ZS(_);return{viewport:{...E.viewport,dpr:T,initialDpr:E.viewport.initialDpr||T}}}),setFrameloop:(_="always")=>{const E=h().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:Ft.createRef(),active:!1,frames:0,priority:0,subscribe:(_,E,T)=>{const A=h().internal;return A.priority=A.priority+(E>0?1:0),A.subscribers.push({ref:_,priority:E,store:T}),A.subscribers=A.subscribers.sort((N,w)=>N.priority-w.priority),()=>{const N=h().internal;N!=null&&N.subscribers&&(N.priority=N.priority-(E>0?1:0),N.subscribers=N.subscribers.filter(w=>w.ref!==_))}}}}}),n=e.getState();let i=n.size,r=n.viewport.dpr,l=n.camera;return e.subscribe(()=>{const{camera:c,size:h,viewport:f,gl:p,set:m}=e.getState();if(h.width!==i.width||h.height!==i.height||f.dpr!==r){i=h,r=f.dpr,xD(c,h),f.dpr>0&&p.setPixelRatio(f.dpr);const x=typeof HTMLCanvasElement<"u"&&p.domElement instanceof HTMLCanvasElement;p.setSize(h.width,h.height,x)}c!==l&&(l=c,m(x=>({viewport:{...x.viewport,...x.viewport.getCurrentViewport(c)}})))}),e.subscribe(c=>s(c)),e};function QS(){const s=Ft.useContext(JS);if(!s)throw new Error("R3F: Hooks can only be used within the Canvas component!");return s}function Lm(s=e=>e,t){return QS()(s,t)}function Tc(s,t=0){const e=QS(),n=e.getState().internal.subscribe,i=YS(s);return Ec(()=>n(i,t,e),[t,n,e]),null}function yD(s){const t=tD(s);return t.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:Ft.version}),t}const $S=0,Ho={},SD=/^three(?=[A-Z])/,Ff=s=>`${s[0].toUpperCase()}${s.slice(1)}`;let bD=0;const MD=s=>typeof s=="function";function tb(s){if(MD(s)){const t=`${bD++}`;return Ho[t]=s,t}else Object.assign(Ho,s)}function eb(s,t){const e=Ff(s),n=Ho[e];if(s!=="primitive"&&!n)throw new Error(`R3F: ${e} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(s==="primitive"&&!t.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(t.args!==void 0&&!Array.isArray(t.args))throw new Error("R3F: The args prop must be an array!")}function ED(s,t,e){var n;return s=Ff(s)in Ho?s:s.replace(SD,""),eb(s,t),s==="primitive"&&(n=t.object)!=null&&n.__r3f&&delete t.object.__r3f,Jh(t.object,e,s,t)}function TD(s){if(!s.isHidden){var t;s.props.attach&&(t=s.parent)!=null&&t.object?$h(s.parent,s):li(s.object)&&(s.object.visible=!1),s.isHidden=!0,Yo(s)}}function nb(s){if(s.isHidden){var t;s.props.attach&&(t=s.parent)!=null&&t.object?Qh(s.parent,s):li(s.object)&&s.props.visible!==!1&&(s.object.visible=!0),s.isHidden=!1,Yo(s)}}function R0(s,t,e){const n=t.root.getState();if(!(!s.parent&&s.object!==n.scene)){if(!t.object){var i,r;const l=Ho[Ff(t.type)];t.object=(i=t.props.object)!=null?i:new l(...(r=t.props.args)!=null?r:[]),t.object.__r3f=t}if(ya(t.object,t.props),t.props.attach)Qh(s,t);else if(li(t.object)&&li(s.object)){const l=s.object.children.indexOf(e?.object);if(e&&l!==-1){const c=s.object.children.indexOf(t.object);if(c!==-1){s.object.children.splice(c,1);const h=c<l?l-1:l;s.object.children.splice(h,0,t.object)}else t.object.parent=s.object,s.object.children.splice(l,0,t.object),t.object.dispatchEvent({type:"added"}),s.object.dispatchEvent({type:"childadded",child:t.object})}else s.object.add(t.object)}for(const l of t.children)R0(t,l);Yo(t)}}function rm(s,t){t&&(t.parent=s,s.children.push(t),R0(s,t))}function U_(s,t,e){if(!t||!e)return;t.parent=s;const n=s.children.indexOf(e);n!==-1?s.children.splice(n,0,t):s.children.push(t),R0(s,t,e)}function ib(s){if(typeof s.dispose=="function"){const t=()=>{try{s.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?t():C_.unstable_scheduleCallback(C_.unstable_IdlePriority,t)}}function Im(s,t,e){if(!t)return;t.parent=null;const n=s.children.indexOf(t);n!==-1&&s.children.splice(n,1),t.props.attach?$h(s,t):li(t.object)&&li(s.object)&&(s.object.remove(t.object),gD(XS(t),t.object));const i=t.props.dispose!==null&&e!==!1;for(let r=t.children.length-1;r>=0;r--){const l=t.children[r];Im(t,l,i)}t.children.length=0,delete t.object.__r3f,i&&t.type!=="primitive"&&t.object.type!=="Scene"&&ib(t.object),e===void 0&&Yo(t)}function AD(s,t){for(const e of[s,s.alternate])if(e!==null)if(typeof e.ref=="function"){e.refCleanup==null||e.refCleanup();const n=e.ref(t);typeof n=="function"&&(e.refCleanup=n)}else e.ref&&(e.ref.current=t)}const oh=[];function CD(){for(const[e]of oh){const n=e.parent;if(n){e.props.attach?$h(n,e):li(e.object)&&li(n.object)&&n.object.remove(e.object);for(const i of e.children)i.props.attach?$h(e,i):li(i.object)&&li(e.object)&&e.object.remove(i.object)}e.isHidden&&nb(e),e.object.__r3f&&delete e.object.__r3f,e.type!=="primitive"&&ib(e.object)}for(const[e,n,i]of oh){e.props=n;const r=e.parent;if(r){var s,t;const l=Ho[Ff(e.type)];e.object=(s=e.props.object)!=null?s:new l(...(t=e.props.args)!=null?t:[]),e.object.__r3f=e,AD(i,e.object),ya(e.object,e.props),e.props.attach?Qh(r,e):li(e.object)&&li(r.object)&&r.object.add(e.object);for(const c of e.children)c.props.attach?Qh(e,c):li(c.object)&&li(e.object)&&e.object.add(c.object);Yo(e)}}oh.length=0}const om=()=>{},N_={};let $u=$S;const wD=0,RD=4,Pm=yD({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:ED,removeChild:Im,appendChild:rm,appendInitialChild:rm,insertBefore:U_,appendChildToContainer(s,t){const e=s.getState().scene.__r3f;!t||!e||rm(e,t)},removeChildFromContainer(s,t){const e=s.getState().scene.__r3f;!t||!e||Im(e,t)},insertInContainerBefore(s,t,e){const n=s.getState().scene.__r3f;!t||!e||!n||U_(n,t,e)},getRootHostContext:()=>N_,getChildHostContext:()=>N_,commitUpdate(s,t,e,n,i){var r,l,c;eb(t,n);let h=!1;if((s.type==="primitive"&&e.object!==n.object||((r=n.args)==null?void 0:r.length)!==((l=e.args)==null?void 0:l.length)||(c=n.args)!=null&&c.some((p,m)=>{var x;return p!==((x=e.args)==null?void 0:x[m])}))&&(h=!0),h)oh.push([s,{...n},i]);else{const p=dD(s,n);Object.keys(p).length&&(Object.assign(s.props,p),ya(s.object,p))}(i.sibling===null||(i.flags&RD)===wD)&&CD()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:s=>s?.object,prepareForCommit:()=>null,preparePortalMount:s=>Jh(s.getState().scene,s,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:TD,unhideInstance:nb,createTextInstance:om,hideTextInstance:om,unhideTextInstance:om,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:Ft.createContext(null),setCurrentUpdatePriority(s){$u=s},getCurrentUpdatePriority(){return $u},resolveUpdatePriority(){var s;if($u!==$S)return $u;switch(typeof window<"u"&&((s=window.event)==null?void 0:s.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return ih.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return ih.ContinuousEventPriority;default:return ih.DefaultEventPriority}},resetFormInstance(){}}),Sr=new Map,Mo={objects:"shallow",strict:!1};function DD(s,t){if(!t&&typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&s.parentElement){const{width:e,height:n,top:i,left:r}=s.parentElement.getBoundingClientRect();return{width:e,height:n,top:i,left:r}}else if(!t&&typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas)return{width:s.width,height:s.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...t}}function UD(s){const t=Sr.get(s),e=t?.fiber,n=t?.store;t&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,r=n||_D(zm,I_),l=e||Pm.createContainer(r,ih.ConcurrentRoot,null,!1,null,"",i,i,i,null);t||Sr.set(s,{fiber:l,store:r});let c,h,f=!1,p=null;return{async configure(m={}){let x;p=new Promise(_t=>x=_t);let{gl:g,size:y,scene:M,events:S,onCreated:_,shadows:E=!1,linear:T=!1,flat:A=!1,legacy:N=!1,orthographic:w=!1,frameloop:I="always",dpr:z=[1,2],performance:R,raycaster:C,camera:F,onPointerMissed:W}=m,k=r.getState(),J=k.gl;if(!k.gl){const _t={canvas:s,powerPreference:"high-performance",antialias:!0,alpha:!0},Vt=typeof g=="function"?await g(_t):g;D_(Vt)?J=Vt:J=new VS({..._t,...g}),k.set({gl:J})}let nt=k.raycaster;nt||k.set({raycaster:nt=new US});const{params:G,...tt}=C||{};if(en.equ(tt,nt,Mo)||ya(nt,{...tt}),en.equ(G,nt.params,Mo)||ya(nt,{params:{...nt.params,...G}}),!k.camera||k.camera===h&&!en.equ(h,F,Mo)){h=F;const _t=F?.isCamera,Vt=_t?F:w?new Mc(0,0,0,0,.1,1e3):new An(75,0,.1,1e3);_t||(Vt.position.z=5,F&&(ya(Vt,F),Vt.manual||("aspect"in F||"left"in F||"right"in F||"bottom"in F||"top"in F)&&(Vt.manual=!0,Vt.updateProjectionMatrix())),!k.camera&&!(F!=null&&F.rotation)&&Vt.lookAt(0,0,0)),k.set({camera:Vt}),nt.camera=Vt}if(!k.scene){let _t;M!=null&&M.isScene?(_t=M,Jh(_t,r,"",{})):(_t=new t0,Jh(_t,r,"",{}),M&&ya(_t,M)),k.set({scene:_t})}S&&!k.events.handlers&&k.set({events:S(r)});const Z=DD(s,y);if(en.equ(Z,k.size,Mo)||k.setSize(Z.width,Z.height,Z.top,Z.left),z&&k.viewport.dpr!==ZS(z)&&k.setDpr(z),k.frameloop!==I&&k.setFrameloop(I),k.onPointerMissed||k.set({onPointerMissed:W}),R&&!en.equ(R,k.performance,Mo)&&k.set(_t=>({performance:{..._t.performance,...R}})),!k.xr){var at;const _t=(Zt,me)=>{const ot=r.getState();ot.frameloop!=="never"&&I_(Zt,!0,ot,me)},Vt=()=>{const Zt=r.getState();Zt.gl.xr.enabled=Zt.gl.xr.isPresenting,Zt.gl.xr.setAnimationLoop(Zt.gl.xr.isPresenting?_t:null),Zt.gl.xr.isPresenting||zm(Zt)},$t={connect(){const Zt=r.getState().gl;Zt.xr.addEventListener("sessionstart",Vt),Zt.xr.addEventListener("sessionend",Vt)},disconnect(){const Zt=r.getState().gl;Zt.xr.removeEventListener("sessionstart",Vt),Zt.xr.removeEventListener("sessionend",Vt)}};typeof((at=J.xr)==null?void 0:at.addEventListener)=="function"&&$t.connect(),k.set({xr:$t})}if(J.shadowMap){const _t=J.shadowMap.enabled,Vt=J.shadowMap.type;if(J.shadowMap.enabled=!!E,en.boo(E))J.shadowMap.type=Bl;else if(en.str(E)){var ct;const $t={basic:X_,percentage:ef,soft:Bl,variance:Qi};J.shadowMap.type=(ct=$t[E])!=null?ct:Bl}else en.obj(E)&&Object.assign(J.shadowMap,E);(_t!==J.shadowMap.enabled||Vt!==J.shadowMap.type)&&(J.shadowMap.needsUpdate=!0)}return Re.enabled=!N,f||(J.outputColorSpace=T?Ea:Xn,J.toneMapping=A?es:Vm),k.legacy!==N&&k.set(()=>({legacy:N})),k.linear!==T&&k.set(()=>({linear:T})),k.flat!==A&&k.set(()=>({flat:A})),g&&!en.fun(g)&&!D_(g)&&!en.equ(g,J,Mo)&&ya(J,g),c=_,f=!0,x(),this},render(m){return!f&&!p&&this.configure(),p.then(()=>{Pm.updateContainer(Jt.jsx(ND,{store:r,children:m,onCreated:c,rootElement:s}),l,null,()=>{})}),r},unmount(){sb(s)}}}function ND({store:s,children:t,onCreated:e,rootElement:n}){return Ec(()=>{const i=s.getState();i.set(r=>({internal:{...r.internal,active:!0}})),e&&e(i),s.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Jt.jsx(JS.Provider,{value:s,children:t})}function sb(s,t){const e=Sr.get(s),n=e?.fiber;if(n){const i=e?.store.getState();i&&(i.internal.active=!1),Pm.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var r,l,c,h;i.events.disconnect==null||i.events.disconnect(),(r=i.gl)==null||(l=r.renderLists)==null||l.dispose==null||l.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(h=i.gl)!=null&&h.xr&&i.xr.disconnect(),uD(i.scene),Sr.delete(s)}catch{}},500)})}}const LD=new Set,ID=new Set,PD=new Set;function lm(s,t){if(s.size)for(const{callback:e}of s.values())e(t)}function ql(s,t){switch(s){case"before":return lm(LD,t);case"after":return lm(ID,t);case"tail":return lm(PD,t)}}let cm,um;function Om(s,t,e){let n=t.clock.getDelta();t.frameloop==="never"&&typeof s=="number"&&(n=s-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=s),cm=t.internal.subscribers;for(let i=0;i<cm.length;i++)um=cm[i],um.ref.current(um.store.getState(),n,e);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),t.frameloop==="always"?1:t.internal.frames}let tf=!1,Bm=!1,hm,L_,Eo;function ab(s){L_=requestAnimationFrame(ab),tf=!0,hm=0,ql("before",s),Bm=!0;for(const e of Sr.values()){var t;Eo=e.store.getState(),Eo.internal.active&&(Eo.frameloop==="always"||Eo.internal.frames>0)&&!((t=Eo.gl.xr)!=null&&t.isPresenting)&&(hm+=Om(s,Eo))}if(Bm=!1,ql("after",s),hm===0)return ql("tail",s),tf=!1,cancelAnimationFrame(L_)}function zm(s,t=1){var e;if(!s)return Sr.forEach(n=>zm(n.store.getState(),t));(e=s.gl.xr)!=null&&e.isPresenting||!s.internal.active||s.frameloop==="never"||(t>1?s.internal.frames=Math.min(60,s.internal.frames+t):Bm?s.internal.frames=2:s.internal.frames=1,tf||(tf=!0,requestAnimationFrame(ab)))}function I_(s,t=!0,e,n){if(t&&ql("before",s),e)Om(s,e,n);else for(const i of Sr.values())Om(s,i.store.getState());t&&ql("after",s)}const fm={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function OD(s){const{handlePointer:t}=vD(s);return{priority:1,enabled:!0,compute(e,n,i){n.pointer.set(e.offsetX/n.size.width*2-1,-(e.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(fm).reduce((e,n)=>({...e,[n]:t(n)}),{}),update:()=>{var e;const{events:n,internal:i}=s.getState();(e=i.lastEvent)!=null&&e.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:e=>{const{set:n,events:i}=s.getState();if(i.disconnect==null||i.disconnect(),n(r=>({events:{...r.events,connected:e}})),i.handlers)for(const r in i.handlers){const l=i.handlers[r],[c,h]=fm[r];e.addEventListener(c,l,{passive:h})}},disconnect:()=>{const{set:e,events:n}=s.getState();if(n.connected){if(n.handlers)for(const i in n.handlers){const r=n.handlers[i],[l]=fm[i];n.connected.removeEventListener(l,r)}e(i=>({events:{...i.events,connected:void 0}}))}}}}function P_(s,t){let e;return(...n)=>{window.clearTimeout(e),e=window.setTimeout(()=>s(...n),t)}}function BD({debounce:s,scroll:t,polyfill:e,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=e||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[r,l]=Ft.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=Ft.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:r,orientationHandler:null}),h=s?typeof s=="number"?s:s.scroll:null,f=s?typeof s=="number"?s:s.resize:null,p=Ft.useRef(!1);Ft.useEffect(()=>(p.current=!0,()=>{p.current=!1}));const[m,x,g]=Ft.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:T,width:A,height:N,bottom:w,right:I,x:z,y:R}=c.current.element.getBoundingClientRect(),C={left:E,top:T,width:A,height:N,bottom:w,right:I,x:z,y:R};c.current.element instanceof HTMLElement&&n&&(C.height=c.current.element.offsetHeight,C.width=c.current.element.offsetWidth),Object.freeze(C),p.current&&!HD(c.current.lastBounds,C)&&l(c.current.lastBounds=C)};return[_,f?P_(_,f):_,h?P_(_,h):_]},[l,n,h,f]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),t&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const S=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=rb(_),M())};return FD(g,!!t),zD(x),Ft.useEffect(()=>{y(),M()},[t,g,x]),Ft.useEffect(()=>y,[]),[S,r,m]}function zD(s){Ft.useEffect(()=>{const t=s;return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[s])}function FD(s,t){Ft.useEffect(()=>{if(t){const e=s;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}},[s,t])}function rb(s){const t=[];if(!s||s===document.body)return t;const{overflow:e,overflowX:n,overflowY:i}=window.getComputedStyle(s);return[e,n,i].some(r=>r==="auto"||r==="scroll")&&t.push(s),[...t,...rb(s.parentElement)]}const VD=["x","y","top","bottom","left","right","width","height"],HD=(s,t)=>VD.every(e=>s[e]===t[e]);function GD({ref:s,children:t,fallback:e,resize:n,style:i,gl:r,events:l=OD,eventSource:c,eventPrefix:h,shadows:f,linear:p,flat:m,legacy:x,orthographic:g,frameloop:y,dpr:M,performance:S,raycaster:_,camera:E,scene:T,onPointerMissed:A,onCreated:N,...w}){Ft.useMemo(()=>tb(zR),[]);const I=oD(),[z,R]=BD({scroll:!0,debounce:{scroll:50,resize:0},...n}),C=Ft.useRef(null),F=Ft.useRef(null);Ft.useImperativeHandle(s,()=>C.current);const W=YS(A),[k,J]=Ft.useState(!1),[nt,G]=Ft.useState(!1);if(k)throw k;if(nt)throw nt;const tt=Ft.useRef(null);Ec(()=>{const at=C.current;if(R.width>0&&R.height>0&&at){tt.current||(tt.current=UD(at));async function ct(){await tt.current.configure({gl:r,scene:T,events:l,shadows:f,linear:p,flat:m,legacy:x,orthographic:g,frameloop:y,dpr:M,performance:S,raycaster:_,camera:E,size:R,onPointerMissed:(..._t)=>W.current==null?void 0:W.current(..._t),onCreated:_t=>{_t.events.connect==null||_t.events.connect(c?aD(c)?c.current:c:F.current),h&&_t.setEvents({compute:(Vt,$t)=>{const Zt=Vt[h+"X"],me=Vt[h+"Y"];$t.pointer.set(Zt/$t.size.width*2-1,-(me/$t.size.height)*2+1),$t.raycaster.setFromCamera($t.pointer,$t.camera)}}),N?.(_t)}}),tt.current.render(Jt.jsx(I,{children:Jt.jsx(cD,{set:G,children:Jt.jsx(Ft.Suspense,{fallback:Jt.jsx(lD,{set:J}),children:t??null})})}))}ct()}}),Ft.useEffect(()=>{const at=C.current;if(at)return()=>sb(at)},[]);const Z=c?"none":"auto";return Jt.jsx("div",{ref:F,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:Z,...i},...w,children:Jt.jsx("div",{ref:z,style:{width:"100%",height:"100%"},children:Jt.jsx("canvas",{ref:C,style:{display:"block"},children:e})})})}function kD(s){return Jt.jsx(kS,{children:Jt.jsx(GD,{...s})})}function fc(){return fc=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)({}).hasOwnProperty.call(e,n)&&(s[n]=e[n])}return s},fc.apply(null,arguments)}const ob=parseInt(dc.replace(/\D+/g,"")),lb=ob>=125?"uv1":"uv2",O_=new gn,th=new P;class D0 extends S0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Wt(t,3)),this.setAttribute("uv",new Wt(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Kh(e,6,1);return this.setAttribute("instanceStart",new wi(n,3,0)),this.setAttribute("instanceEnd",new wi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,e=3){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const i=new Kh(n,e*2,1);return this.setAttribute("instanceColorStart",new wi(i,e,0)),this.setAttribute("instanceColorEnd",new wi(i,e,e)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new h0(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),O_.setFromBufferAttribute(e),this.boundingBox.union(O_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,l=t.count;r<l;r++)th.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(th)),th.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(th));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class cb extends D0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t,e=3){const n=t.length-e,i=new Float32Array(2*n);if(e===3)for(let r=0;r<n;r+=e)i[2*r]=t[r],i[2*r+1]=t[r+1],i[2*r+2]=t[r+2],i[2*r+3]=t[r+3],i[2*r+4]=t[r+4],i[2*r+5]=t[r+5];else for(let r=0;r<n;r+=e)i[2*r]=t[r],i[2*r+1]=t[r+1],i[2*r+2]=t[r+2],i[2*r+3]=t[r+3],i[2*r+4]=t[r+4],i[2*r+5]=t[r+5],i[2*r+6]=t[r+6],i[2*r+7]=t[r+7];return super.setColors(i,e),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class U0 extends fi{constructor(t){super({type:"LineMaterial",uniforms:ic.clone(ic.merge([Dt.common,Dt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${ob>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const dm=new Te,B_=new P,z_=new P,Un=new Te,Nn=new Te,hs=new Te,pm=new P,mm=new fe,Ln=new NS,F_=new P,eh=new gn,nh=new vn,fs=new Te;let ps,vr;function V_(s,t,e){return fs.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),fs.multiplyScalar(1/fs.w),fs.x=vr/e.width,fs.y=vr/e.height,fs.applyMatrix4(s.projectionMatrixInverse),fs.multiplyScalar(1/fs.w),Math.abs(Math.max(fs.x,fs.y))}function WD(s,t){const e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,l=Math.min(n.instanceCount,i.count);for(let c=0,h=l;c<h;c++){Ln.start.fromBufferAttribute(i,c),Ln.end.fromBufferAttribute(r,c),Ln.applyMatrix4(e);const f=new P,p=new P;ps.distanceSqToSegment(Ln.start,Ln.end,p,f),p.distanceTo(f)<vr*.5&&t.push({point:p,pointOnLine:f,distance:ps.origin.distanceTo(p),object:s,face:null,faceIndex:c,uv:null,[lb]:null})}}function XD(s,t,e){const n=t.projectionMatrix,r=s.material.resolution,l=s.matrixWorld,c=s.geometry,h=c.attributes.instanceStart,f=c.attributes.instanceEnd,p=Math.min(c.instanceCount,h.count),m=-t.near;ps.at(1,hs),hs.w=1,hs.applyMatrix4(t.matrixWorldInverse),hs.applyMatrix4(n),hs.multiplyScalar(1/hs.w),hs.x*=r.x/2,hs.y*=r.y/2,hs.z=0,pm.copy(hs),mm.multiplyMatrices(t.matrixWorldInverse,l);for(let x=0,g=p;x<g;x++){if(Un.fromBufferAttribute(h,x),Nn.fromBufferAttribute(f,x),Un.w=1,Nn.w=1,Un.applyMatrix4(mm),Nn.applyMatrix4(mm),Un.z>m&&Nn.z>m)continue;if(Un.z>m){const T=Un.z-Nn.z,A=(Un.z-m)/T;Un.lerp(Nn,A)}else if(Nn.z>m){const T=Nn.z-Un.z,A=(Nn.z-m)/T;Nn.lerp(Un,A)}Un.applyMatrix4(n),Nn.applyMatrix4(n),Un.multiplyScalar(1/Un.w),Nn.multiplyScalar(1/Nn.w),Un.x*=r.x/2,Un.y*=r.y/2,Nn.x*=r.x/2,Nn.y*=r.y/2,Ln.start.copy(Un),Ln.start.z=0,Ln.end.copy(Nn),Ln.end.z=0;const M=Ln.closestPointToPointParameter(pm,!0);Ln.at(M,F_);const S=Oo.lerp(Un.z,Nn.z,M),_=S>=-1&&S<=1,E=pm.distanceTo(F_)<vr*.5;if(_&&E){Ln.start.fromBufferAttribute(h,x),Ln.end.fromBufferAttribute(f,x),Ln.start.applyMatrix4(l),Ln.end.applyMatrix4(l);const T=new P,A=new P;ps.distanceSqToSegment(Ln.start,Ln.end,A,T),e.push({point:A,pointOnLine:T,distance:ps.origin.distanceTo(A),object:s,face:null,faceIndex:x,uv:null,[lb]:null})}}}class ub extends mn{constructor(t=new D0,e=new U0({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let l=0,c=0,h=e.count;l<h;l++,c+=2)B_.fromBufferAttribute(e,l),z_.fromBufferAttribute(n,l),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+B_.distanceTo(z_);const r=new Kh(i,2,1);return t.setAttribute("instanceDistanceStart",new wi(r,1,0)),t.setAttribute("instanceDistanceEnd",new wi(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ps=t.ray;const l=this.matrixWorld,c=this.geometry,h=this.material;vr=h.linewidth+r,c.boundingSphere===null&&c.computeBoundingSphere(),nh.copy(c.boundingSphere).applyMatrix4(l);let f;if(n)f=vr*.5;else{const m=Math.max(i.near,nh.distanceToPoint(ps.origin));f=V_(i,m,h.resolution)}if(nh.radius+=f,ps.intersectsSphere(nh)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),eh.copy(c.boundingBox).applyMatrix4(l);let p;if(n)p=vr*.5;else{const m=Math.max(i.near,eh.distanceToPoint(ps.origin));p=V_(i,m,h.resolution)}eh.expandByScalar(p),ps.intersectsBox(eh)!==!1&&(n?WD(this,e):XD(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(dm),this.material.uniforms.resolution.value.set(dm.z,dm.w))}}class qD extends ub{constructor(t=new cb,e=new U0({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const hb=Ft.forwardRef(function({points:t,color:e=16777215,vertexColors:n,linewidth:i,lineWidth:r,segments:l,dashed:c,...h},f){var p,m;const x=Lm(_=>_.size),g=Ft.useMemo(()=>l?new ub:new qD,[l]),[y]=Ft.useState(()=>new U0),M=(n==null||(p=n[0])==null?void 0:p.length)===4?4:3,S=Ft.useMemo(()=>{const _=l?new D0:new cb,E=t.map(T=>{const A=Array.isArray(T);return T instanceof P||T instanceof Te?[T.x,T.y,T.z]:T instanceof ht?[T.x,T.y,0]:A&&T.length===3?[T[0],T[1],T[2]]:A&&T.length===2?[T[0],T[1],0]:T});if(_.setPositions(E.flat()),n){e=16777215;const T=n.map(A=>A instanceof zt?A.toArray():A);_.setColors(T.flat(),M)}return _},[t,l,n,M]);return Ft.useLayoutEffect(()=>{g.computeLineDistances()},[t,g]),Ft.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),Ft.useEffect(()=>()=>{S.dispose(),y.dispose()},[S]),Ft.createElement("primitive",fc({object:g,ref:f},h),Ft.createElement("primitive",{object:S,attach:"geometry"}),Ft.createElement("primitive",fc({object:y,attach:"material",color:e,vertexColors:!!n,resolution:[x.width,x.height],linewidth:(m=i??r)!==null&&m!==void 0?m:1,dashed:c,transparent:M===4},h)))});function YD(s,t,e,n){var i;return i=class extends fi{constructor(r){super({vertexShader:t,fragmentShader:e,...r});for(const l in s)this.uniforms[l]=new Of(s[l]),Object.defineProperty(this,l,{get(){return this.uniforms[l].value},set(c){this.uniforms[l].value=c}});this.uniforms=ic.clone(this.uniforms)}},i.key=Oo.generateUUID(),i}function H_(s,t,e){const n=Lm(g=>g.size),i=Lm(g=>g.viewport),r=typeof s=="number"?s:n.width*i.dpr,l=n.height*i.dpr,c=(typeof s=="number"?e:s)||{},{samples:h=0,depth:f,...p}=c,m=f??c.depthBuffer,x=Ft.useMemo(()=>{const g=new is(r,l,{minFilter:sn,magFilter:sn,type:Ca,...p});return m&&(g.depthTexture=new Sf(r,l,ti)),g.samples=h,g},[]);return Ft.useLayoutEffect(()=>{x.setSize(r,l),h&&(x.samples=h)},[h,x,r,l]),Ft.useEffect(()=>()=>x.dispose(),[]),x}const ZD=YD({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class jD extends d0{constructor(t=6,e=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new zt("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=n=>{n.uniforms={...n.uniforms,...this.uniforms},this.anisotropy>0&&(n.defines.USE_ANISOTROPY=""),e?n.defines.USE_SAMPLER="":n.defines.USE_TRANSMISSION="",n.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),n.fragmentShader=n.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${t}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${t})) , material.thickness + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${t})), material.thickness + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${t}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(n=>Object.defineProperty(this,n,{get:()=>this.uniforms[n].value,set:i=>this.uniforms[n].value=i}))}}const KD=Ft.forwardRef(({buffer:s,transmissionSampler:t=!1,backside:e=!1,side:n=vs,transmission:i=1,thickness:r=0,backsideThickness:l=0,backsideEnvMapIntensity:c=1,samples:h=10,resolution:f,backsideResolution:p,background:m,anisotropy:x,anisotropicBlur:g,...y},M)=>{tb({MeshTransmissionMaterial:jD});const S=Ft.useRef(null),[_]=Ft.useState(()=>new ZD),E=H_(p||f),T=H_(f);let A,N,w,I;return Tc(z=>{if(S.current.time=z.clock.elapsedTime,S.current.buffer===T.texture&&!t){var R;I=(R=S.current.__r3f.parent)==null?void 0:R.object,I&&(w=z.gl.toneMapping,A=z.scene.background,N=S.current.envMapIntensity,z.gl.toneMapping=es,m&&(z.scene.background=m),I.material=_,e&&(z.gl.setRenderTarget(E),z.gl.render(z.scene,z.camera),I.material=S.current,I.material.buffer=E.texture,I.material.thickness=l,I.material.side=Yn,I.material.envMapIntensity=c),z.gl.setRenderTarget(T),z.gl.render(z.scene,z.camera),I.material=S.current,I.material.thickness=r,I.material.side=n,I.material.buffer=T.texture,I.material.envMapIntensity=N,z.scene.background=A,z.gl.setRenderTarget(null),z.gl.toneMapping=w)}}),Ft.useImperativeHandle(M,()=>S.current,[]),Ft.createElement("meshTransmissionMaterial",fc({args:[h,t],ref:S},y,{buffer:s||T.texture,_transmission:i,anisotropicBlur:g??x,transmission:t?i:0,thickness:r,side:n}))}),N0=Ft.forwardRef(({children:s,enabled:t=!0,speed:e=1,rotationIntensity:n=1,floatIntensity:i=1,floatingRange:r=[-.1,.1],autoInvalidate:l=!1,...c},h)=>{const f=Ft.useRef(null);Ft.useImperativeHandle(h,()=>f.current,[]);const p=Ft.useRef(Math.random()*1e4);return Tc(m=>{var x,g;if(!t||e===0)return;l&&m.invalidate();const y=p.current+m.clock.elapsedTime;f.current.rotation.x=Math.cos(y/4*e)/8*n,f.current.rotation.y=Math.sin(y/4*e)/8*n,f.current.rotation.z=Math.sin(y/4*e)/20*n;let M=Math.sin(y/4*e)/10;M=Oo.mapLinear(M,-.1,.1,(x=r?.[0])!==null&&x!==void 0?x:-.1,(g=r?.[1])!==null&&g!==void 0?g:.1),f.current.position.y=M*i,f.current.updateMatrix()}),Ft.createElement("group",c,Ft.createElement("group",{ref:f,matrixAutoUpdate:!1},s))});function JD(){const s=Ft.useRef(null);return Tc(({pointer:t},e)=>{s.current&&(s.current.rotation.y=Oo.damp(s.current.rotation.y,t.x*.18,3,e),s.current.rotation.x=Oo.damp(s.current.rotation.x,-t.y*.1,3,e))}),Jt.jsxs("group",{ref:s,rotation:[-.12,-.35,0],children:[Jt.jsxs("mesh",{position:[0,-.7,0],rotation:[-.15,0,0],children:[Jt.jsx("boxGeometry",{args:[4.5,.16,2.7]}),Jt.jsx("meshStandardMaterial",{color:"#111920",metalness:.7,roughness:.25})]}),Jt.jsxs("mesh",{position:[0,.7,-.4],children:[Jt.jsx("boxGeometry",{args:[3.7,2.2,.16]}),Jt.jsx("meshStandardMaterial",{color:"#0b1115",metalness:.65,roughness:.2})]}),Jt.jsxs("mesh",{position:[0,.7,-.29],children:[Jt.jsx("planeGeometry",{args:[3.3,1.82]}),Jt.jsx("meshBasicMaterial",{color:"#0b2726"})]}),[.9,.5,.1,-.3].map((t,e)=>Jt.jsxs("mesh",{position:[-.7+e%2*.35,t,-.275],children:[Jt.jsx("planeGeometry",{args:[1.45-e*.12,.025]}),Jt.jsx("meshBasicMaterial",{color:e===0?"#91f5d6":"#3c7e74"})]},t)),Jt.jsxs("mesh",{position:[0,-.5,-.1],children:[Jt.jsx("boxGeometry",{args:[1.15,.06,.45]}),Jt.jsx("meshStandardMaterial",{color:"#263137"})]}),Jt.jsx(N0,{speed:1.3,rotationIntensity:.25,floatIntensity:.35,children:Jt.jsxs("mesh",{position:[2.55,.75,.25],rotation:[0,.4,.2],children:[Jt.jsx("icosahedronGeometry",{args:[.45,1]}),Jt.jsx("meshStandardMaterial",{color:"#75dabb",wireframe:!0})]})})]})}function QD(){const s=Ft.useMemo(()=>[new P(0,2.5,0),new P(-.7,1.5,0),new P(.65,.5,0),new P(-.5,-.5,0),new P(.7,-1.5,0),new P(0,-2.5,0)],[]),t=Ft.useRef(null);return Tc((e,n)=>{t.current&&(t.current.rotation.y+=n*.12)}),Jt.jsxs("group",{ref:t,children:[Jt.jsx(hb,{points:s,color:"#376d65",lineWidth:1}),s.map((e,n)=>Jt.jsx(N0,{speed:1+n*.1,floatIntensity:.2,children:Jt.jsxs("mesh",{position:e,children:[Jt.jsx("sphereGeometry",{args:[n===5?.22:.12,16,16]}),Jt.jsx("meshStandardMaterial",{color:n===5?"#e8ff87":"#88ebcb",emissive:"#1b594a",emissiveIntensity:1.2})]})},n))]})}function $D(){const s=Ft.useRef(null);Tc((e,n)=>{s.current&&(s.current.rotation.x+=n*.16,s.current.rotation.y+=n*.25)});const t=[[0,2.2,0],[2.2,.7,0],[1.4,-1.9,0],[-1.4,-1.9,0],[-2.2,.7,0]];return Jt.jsxs("group",{rotation:[.1,0,0],children:[Jt.jsxs("mesh",{ref:s,children:[Jt.jsx("octahedronGeometry",{args:[.7,0]}),Jt.jsx(KD,{color:"#7ce5c2",transmission:.75,thickness:1.2,roughness:.12})]}),t.map((e,n)=>Jt.jsxs("group",{children:[Jt.jsx(hb,{points:[[0,0,0],e],color:"#27544e",lineWidth:1}),Jt.jsx(N0,{speed:1.1+n*.1,floatIntensity:.25,children:Jt.jsxs("mesh",{position:e,children:[Jt.jsx("dodecahedronGeometry",{args:[.28,0]}),Jt.jsx("meshStandardMaterial",{color:n===0?"#e8ff87":"#5cae9b",wireframe:!0})]})})]},n)),Jt.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[Jt.jsx("torusGeometry",{args:[1.45,.012,8,80]}),Jt.jsx("meshBasicMaterial",{color:"#4d8d81"})]})]})}function sU({variant:s}){return Jt.jsxs(kD,{camera:{position:[0,0,s==="workspace"?7:6],fov:43},dpr:[1,1.5],gl:{antialias:!0,powerPreference:"high-performance",alpha:!0},children:[Jt.jsx("ambientLight",{intensity:.8}),Jt.jsx("directionalLight",{position:[3,4,5],intensity:2.2,color:"#cffff0"}),Jt.jsx("pointLight",{position:[-3,-2,3],color:"#4365ff",intensity:12}),s==="workspace"?Jt.jsx(JD,{}):s==="timeline"?Jt.jsx(QD,{}):Jt.jsx($D,{})]})}export{sU as default};
