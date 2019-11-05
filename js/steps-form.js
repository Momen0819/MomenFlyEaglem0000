;(function(window){'use strict';var transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd','transition':'transitionend'},transEndEventName=transEndEventNames[Modernizr.prefixed('transition')],support={transitions:Modernizr.csstransitions};function extend(a,b){for(var key in b){if(b.hasOwnProperty(key)){a[key]=b[key];}}
return a;}
function stepsForm(el,options){this.el=el;this.options=extend({},this.options);extend(this.options,options);this._init();}
stepsForm.prototype.options={onSubmit:function(){return false;}};stepsForm.prototype._init=function(){this.current=0;this.questions=[].slice.call(this.el.querySelectorAll('ol.questions > li'));this.questionsCount=this.questions.length;classie.addClass(this.questions[0],'current');this.ctrlNext=this.el.querySelector('button.res-next');this.progress=this.el.querySelector('div.progress');this.questionStatus=this.el.querySelector('span.number');this.currentNum=this.questionStatus.querySelector('span.number-current');this.currentNum.innerHTML=Number(this.current+1);this.totalQuestionNum=this.questionStatus.querySelector('span.number-total');this.totalQuestionNum.innerHTML=this.questionsCount;this.error=this.el.querySelector('span.error-message');this._initEvents();};stepsForm.prototype._initEvents=function(){var self=this,firstElInput=this.questions[this.current].querySelector('input'),onFocusStartFn=function(){firstElInput.removeEventListener('focus',onFocusStartFn);classie.addClass(self.ctrlNext,'show');};firstElInput.addEventListener('focus',onFocusStartFn);this.ctrlNext.addEventListener('click',function(ev){ev.preventDefault();self._nextQuestion();});document.addEventListener('keydown',function(ev){var keyCode=ev.keyCode||ev.which;if(keyCode===13){ev.preventDefault();self._nextQuestion();}});this.el.addEventListener('keydown',function(ev){var keyCode=ev.keyCode||ev.which;if(keyCode===9){ev.preventDefault();}});};stepsForm.prototype._nextQuestion=function(){if(!this._validade()){return false;}
if(this.current===this.questionsCount-1){this.isFilled=true;}
this._clearError();var currentQuestion=this.questions[this.current];++this.current;this._progress();if(!this.isFilled){this._updateQuestionNumber();classie.addClass(this.el,'show-next');var nextQuestion=this.questions[this.current];classie.removeClass(currentQuestion,'current');classie.addClass(nextQuestion,'current');}
var self=this,onEndTransitionFn=function(ev){if(support.transitions){this.removeEventListener(transEndEventName,onEndTransitionFn);}
if(self.isFilled){self._submit();}else{classie.removeClass(self.el,'show-next');self.currentNum.innerHTML=self.nextQuestionNum.innerHTML;self.questionStatus.removeChild(self.nextQuestionNum);nextQuestion.querySelector('input').focus();}};if(support.transitions){this.progress.addEventListener(transEndEventName,onEndTransitionFn);}else{onEndTransitionFn();}}
stepsForm.prototype._progress=function(){this.progress.style.width=this.current*(100/this.questionsCount)+'%';}
stepsForm.prototype._updateQuestionNumber=function(){this.nextQuestionNum=document.createElement('span');this.nextQuestionNum.className='number-next';this.nextQuestionNum.innerHTML=Number(this.current+1);this.questionStatus.appendChild(this.nextQuestionNum);}
stepsForm.prototype._submit=function(){this.options.onSubmit(this.el);}
stepsForm.prototype._validade=function(){var input=this.questions[this.current].querySelector('input').value;var email=document.forms["theForm"]["q2"].value;var atpos=email.indexOf("@");var dotpos=email.lastIndexOf(".");if(input===''){this._showError('EMPTYSTR');return false;}
if(email!=''){if(atpos<1||dotpos<atpos+2||dotpos+2>=email.length){this._showError('INVALIDEMAIL');return false;}
return true;}
return true;}
stepsForm.prototype._showError=function(err){var message='';switch(err){case 'EMPTYSTR':message='Please fill the field before continuing';break;case 'INVALIDEMAIL':message='Please fill a valid email address';break;};this.error.innerHTML=message;classie.addClass(this.error,'show');}
stepsForm.prototype._clearError=function(){classie.removeClass(this.error,'show');}
window.stepsForm=stepsForm;})(window);/*!
* classie - class helper functions
* from bonzo https://github.com/ded/bonzo
*
* classie.has( elem, 'my-class' ) -> true/false
* classie.add( elem, 'my-new-class' )
* classie.remove( elem, 'my-unwanted-class' )
* classie.toggle( elem, 'my-class' )
*/(function(window){'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)");}
var hasClass,addClass,removeClass;if('classList'in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c);};addClass=function(elem,c){elem.classList.add(c);};removeClass=function(elem,c){elem.classList.remove(c);};}else{hasClass=function(elem,c){return classReg(c).test(elem.className);};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c;}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ');};}
function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c);}
var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie);}else{window.classie=classie;}})(window);var theForm=document.getElementById('theForm');new stepsForm(theForm,{onSubmit:function(form){classie.addClass(theForm.querySelector('.simform-inner'),'hide');var email=document.forms["theForm"]["q2"].value;var name=$("#q1").val();var data={name:$("#q1").val(),email:$("#q2").val(),arrival:$("#q3").val(),departure:$("#q4").val(),adults:$("#q5").val(),children:$("#q6").val(),room:$("#q7").val(),requests:$("#q8").val()};var messageEl=theForm.querySelector('.final-message');messageEl.innerHTML='Thank you! We\'ll be in touch.';classie.addClass(messageEl,'show');}});