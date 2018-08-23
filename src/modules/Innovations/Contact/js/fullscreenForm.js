/* eslint-disable */
/* classie */
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}var n,a,t;function c(s,e){(n(s,e)?t:a)(s,e)}"classList"in document.documentElement?(n=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},t=function(s,e){s.classList.remove(e)}):(n=function(s,n){return e(n).test(s.className)},a=function(s,e){n(s,e)||(s.className=s.className+" "+e)},t=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:n,addClass:a,removeClass:t,toggleClass:c,has:n,add:a,remove:t,toggle:c};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);
/* selectFx */
!function(e){"use strict";function t(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);return e}function s(e,s){this.el=e,this.options=t({},this.options),t(this.options,s),this._init()}s.prototype.options={newTab:!0,stickyPlaceholder:!0,onChange:function(e){return!1}},s.prototype._init=function(){var e=this.el.querySelector("option[selected]");this.hasDefaultPlaceholder=e&&e.disabled,this.selectedOpt=e||this.el.querySelector("option"),this._createSelectEl(),this.selOpts=[].slice.call(this.selEl.querySelectorAll("li[data-option]")),this.selOptsCount=this.selOpts.length,this.current=this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected"))||-1,this.selPlaceholder=this.selEl.querySelector("span.cs-placeholder"),this._initEvents()},s.prototype._createSelectEl=function(){var e="",t=function(e){var t="",s="",l="";return!e.selectedOpt||this.foundSelected||this.hasDefaultPlaceholder||(s+="cs-selected ",this.foundSelected=!0),e.getAttribute("data-class")&&(s+=e.getAttribute("data-class")),e.getAttribute("data-link")&&(l="data-link="+e.getAttribute("data-link")),""!==s&&(t='class="'+s+'" '),"<li "+t+l+' data-option data-value="'+e.value+'"><span>'+e.textContent+"</span></li>"};[].slice.call(this.el.children).forEach(function(s){if(!s.disabled){var l=s.tagName.toLowerCase();"option"===l?e+=t(s):"optgroup"===l&&(e+='<li class="cs-optgroup"><span>'+s.label+"</span><ul>",[].slice.call(s.children).forEach(function(s){e+=t(s)}),e+="</ul></li>")}});var s='<div class="cs-options"><ul>'+e+"</ul></div>";this.selEl=document.createElement("div"),this.selEl.className=this.el.className,this.selEl.tabIndex=this.el.tabIndex,this.selEl.innerHTML='<span class="cs-placeholder">'+this.selectedOpt.textContent+"</span>"+s,this.el.parentNode.appendChild(this.selEl),this.selEl.appendChild(this.el)},s.prototype._initEvents=function(){var e=this;this.selPlaceholder.addEventListener("click",function(){e._toggleSelect()}),this.selOpts.forEach(function(t,s){t.addEventListener("click",function(){e.current=s,e._changeOption(),e._toggleSelect()})}),document.addEventListener("click",function(t){var s=t.target;e._isOpen()&&s!==e.selEl&&!function(e,t){if(!e)return!1;for(var s=e.target||e.srcElement||e||!1;s&&s!=t;)s=s.parentNode||!1;return!1!==s}(s,e.selEl)&&e._toggleSelect()}),this.selEl.addEventListener("keydown",function(t){switch(t.keyCode||t.which){case 38:t.preventDefault(),e._navigateOpts("prev");break;case 40:t.preventDefault(),e._navigateOpts("next");break;case 32:t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&e._changeOption(),e._toggleSelect();break;case 13:t.stopPropagation(),t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&(e._changeOption(),e._toggleSelect());break;case 27:t.preventDefault(),e._isOpen()&&e._toggleSelect()}})},s.prototype._navigateOpts=function(e){this._isOpen()||this._toggleSelect();var t=void 0!==this.preSelCurrent&&-1!==this.preSelCurrent?this.preSelCurrent:this.current;("prev"===e&&t>0||"next"===e&&t<this.selOptsCount-1)&&(this.preSelCurrent="next"===e?t+1:t-1,this._removeFocus(),classie.add(this.selOpts[this.preSelCurrent],"cs-focus"))},s.prototype._toggleSelect=function(){this._removeFocus(),this._isOpen()?(-1!==this.current&&(this.selPlaceholder.textContent=this.selOpts[this.current].textContent),classie.remove(this.selEl,"cs-active")):(this.hasDefaultPlaceholder&&this.options.stickyPlaceholder&&(this.selPlaceholder.textContent=this.selectedOpt.textContent),classie.add(this.selEl,"cs-active"))},s.prototype._changeOption=function(){void 0!==this.preSelCurrent&&-1!==this.preSelCurrent&&(this.current=this.preSelCurrent,this.preSelCurrent=-1);var t=this.selOpts[this.current];this.selPlaceholder.textContent=t.textContent,this.el.value=t.getAttribute("data-value");var s=this.selEl.querySelector("li.cs-selected");s&&classie.remove(s,"cs-selected"),classie.add(t,"cs-selected"),t.getAttribute("data-link")&&(this.options.newTab?e.open(t.getAttribute("data-link"),"_blank"):e.location=t.getAttribute("data-link")),this.options.onChange(this.el.value)},s.prototype._isOpen=function(e){return classie.has(this.selEl,"cs-active")},s.prototype._removeFocus=function(e){var t=this.selEl.querySelector("li.cs-focus");t&&classie.remove(t,"cs-focus")},e.SelectFx=s}(window);
/**
 * fullscreenForm.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

  'use strict';

  var support = { animations : null },
    animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
    // animation end event name
    animEndEventName = animEndEventNames[ 'new' ];

  /**
   * extend obj function
   */
  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * createElement function
   * creates an element with tag = tag, className = opt.cName, innerHTML = opt.inner and appends it to opt.appendTo
   */
  function createElement( tag, opt ) {
    var el = document.createElement( tag )
    if( opt ) {
      if( opt.cName ) {
        el.className = opt.cName;
      }
      if( opt.inner ) {
        el.innerHTML = opt.inner;
      }
      if( opt.appendTo ) {
        opt.appendTo.appendChild( el );
      }
    }
    return el;
  }

  /**
   * FForm function
   */
  function FForm( el, options ) {
    this.el = el;
    this.options = extend( {}, this.options );
      extend( this.options, options );
      this._init();
  }

  /**
   * FForm options
   */
  FForm.prototype.options = {
    // show progress bar
    ctrlProgress : true,
    // show navigation dots
    ctrlNavDots : true,
    // show [current field]/[total fields] status
    ctrlNavPosition : true,
    // reached the review and submit step
    onReview : function() { return false; }
  };

  /**
   * init function
   * initialize and cache some vars
   */
  FForm.prototype._init = function() {
    // the form element
    this.formEl = this.el.querySelector( 'form' );

    // list of fields
    this.fieldsList = this.formEl.querySelector( 'ol.fs-fields' );

    // current field position
    this.current = 0;

    // all fields
    this.fields = [].slice.call( this.fieldsList.children );

    // total fields
    this.fieldsCount = this.fields.length;

    // show first field
    classie.add( this.fields[ this.current ], 'fs-current' );

    // create/add controls
    this._addControls();

    // create/add messages
    this._addErrorMsg();

    // init events
    this._initEvents();
  };

  /**
   * addControls function
   * create and insert the structure for the controls
   */
  FForm.prototype._addControls = function() {
    // main controls wrapper
    this.ctrls = createElement( 'div', { cName : 'fs-controls', appendTo : this.el } );

    // continue button (jump to next field)
    this.ctrlContinue = createElement( 'button', { cName : 'fs-continue', inner : 'Continue', appendTo : this.ctrls } );
    this._showCtrl( this.ctrlContinue );

    // navigation dots
    if( this.options.ctrlNavDots ) {
      this.ctrlNav = createElement( 'nav', { cName : 'fs-nav-dots', appendTo : this.ctrls } );
      var dots = '';
      for( var i = 0; i < this.fieldsCount; ++i ) {
        dots += i === this.current ? '<button class="fs-dot-current"></button>' : '<button disabled></button>';
      }
      this.ctrlNav.innerHTML = dots;
      this._showCtrl( this.ctrlNav );
      this.ctrlNavDots = [].slice.call( this.ctrlNav.children );
    }

    // field number status
    if( this.options.ctrlNavPosition ) {
      this.ctrlFldStatus = createElement( 'span', { cName : 'fs-numbers', appendTo : this.ctrls } );

      // current field placeholder
      this.ctrlFldStatusCurr = createElement( 'span', { cName : 'fs-number-current', inner : Number( this.current + 1 ) } );
      this.ctrlFldStatus.appendChild( this.ctrlFldStatusCurr );

      // total fields placeholder
      this.ctrlFldStatusTotal = createElement( 'span', { cName : 'fs-number-total', inner : this.fieldsCount } );
      this.ctrlFldStatus.appendChild( this.ctrlFldStatusTotal );
      this._showCtrl( this.ctrlFldStatus );
    }

    // progress bar
    if( this.options.ctrlProgress ) {
      this.ctrlProgress = createElement( 'div', { cName : 'fs-progress', appendTo : this.ctrls } );
      this._showCtrl( this.ctrlProgress );
    }
  }

  /**
   * addErrorMsg function
   * create and insert the structure for the error message
   */
  FForm.prototype._addErrorMsg = function() {
    // error message
    this.msgError = createElement( 'span', { cName : 'fs-message-error', appendTo : this.el } );
  }

  /**
   * init events
   */
  FForm.prototype._initEvents = function() {
    var self = this;

    // show next field
    this.ctrlContinue.addEventListener( 'click', function() {
      self._nextField();
    } );

    // navigation dots
    if( this.options.ctrlNavDots ) {
      this.ctrlNavDots.forEach( function( dot, pos ) {
        dot.addEventListener( 'click', function() {
          self._showField( pos );
        } );
      } );
    }

    // jump to next field without clicking the continue button (for fields/list items with the attribute "data-input-trigger")
    this.fields.forEach( function( fld ) {
      if( fld.hasAttribute( 'data-input-trigger' ) ) {
        var input = fld.querySelector( 'input[type="radio"]' ) || /*fld.querySelector( '.cs-select' ) ||*/ fld.querySelector( 'select' ); // assuming only radio and select elements (TODO: exclude multiple selects)
        if( !input ) return;

        switch( input.tagName.toLowerCase() ) {
          case 'select' :
            input.addEventListener( 'change', function() { self._nextField(); } );
            break;

          case 'input' :
            [].slice.call( fld.querySelectorAll( 'input[type="radio"]' ) ).forEach( function( inp ) {
              inp.addEventListener( 'change', function(ev) { self._nextField(); } );
            } );
            break;

          /*
          // for our custom select we would do something like:
          case 'div' :
            [].slice.call( fld.querySelectorAll( 'ul > li' ) ).forEach( function( inp ) {
              inp.addEventListener( 'click', function(ev) { self._nextField(); } );
            } );
            break;
          */
        }
      }
    } );

    // keyboard navigation events - jump to next field when pressing enter
    document.addEventListener( 'keydown', function( ev ) {
      if( !self.isLastStep && ev.target.tagName.toLowerCase() !== 'textarea' ) {
        var keyCode = ev.keyCode || ev.which;
        if( keyCode === 13 ) {
          ev.preventDefault();
          self._nextField();
        }
      }
    } );
  };

  /**
   * nextField function
   * jumps to the next field
   */
  FForm.prototype._nextField = function( backto ) {
    if( this.isLastStep || !this._validade() || this.isAnimating ) {
      return false;
    }
    this.isAnimating = true;

    // check if on last step
    this.isLastStep = this.current === this.fieldsCount - 1 && backto === undefined ? true : false;

    // clear any previous error messages
    this._clearError();

    // current field
    var currentFld = this.fields[ this.current ];

    // save the navigation direction
    this.navdir = backto !== undefined ? backto < this.current ? 'prev' : 'next' : 'next';

    // update current field
    this.current = backto !== undefined ? backto : this.current + 1;

    if( backto === undefined ) {
      // update progress bar (unless we navigate backwards)
      this._progress();

      // save farthest position so far
      this.farthest = this.current;
    }

    // add class "fs-display-next" or "fs-display-prev" to the list of fields
    classie.add( this.fieldsList, 'fs-display-' + this.navdir );

    // remove class "fs-current" from current field and add it to the next one
    // also add class "fs-show" to the next field and the class "fs-hide" to the current one
    classie.remove( currentFld, 'fs-current' );
    classie.add( currentFld, 'fs-hide' );

    if( !this.isLastStep ) {
      // update nav
      this._updateNav();

      // change the current field number/status
      this._updateFieldNumber();

      var nextField = this.fields[ this.current ];
      classie.add( nextField, 'fs-current' );
      classie.add( nextField, 'fs-show' );
    }

    // after animation ends remove added classes from fields
    var self = this,
      onEndAnimationFn = function( ev ) {
        if( support.animations ) {
          this.removeEventListener( animEndEventName, onEndAnimationFn );
        }

        classie.remove( self.fieldsList, 'fs-display-' + self.navdir );
        classie.remove( currentFld, 'fs-hide' );

        if( self.isLastStep ) {
          // show the complete form and hide the controls
          self._hideCtrl( self.ctrlNav );
          self._hideCtrl( self.ctrlProgress );
          self._hideCtrl( self.ctrlContinue );
          self._hideCtrl( self.ctrlFldStatus );
          // replace class fs-form-full with fs-form-overview
          classie.remove( self.formEl, 'fs-form-full' );
          classie.add( self.formEl, 'fs-form-overview' );
          classie.add( self.formEl, 'fs-show' );
          // callback
          self.options.onReview();
        }
        else {
          classie.remove( nextField, 'fs-show' );

          if( self.options.ctrlNavPosition ) {
            self.ctrlFldStatusCurr.innerHTML = self.ctrlFldStatusNew.innerHTML;
            self.ctrlFldStatus.removeChild( self.ctrlFldStatusNew );
            classie.remove( self.ctrlFldStatus, 'fs-show-' + self.navdir );
          }
        }
        self.isAnimating = false;
      };

    if( support.animations ) {
      if( this.navdir === 'next' ) {
        if( this.isLastStep ) {
          currentFld.querySelector( '.fs-anim-upper' ).addEventListener( animEndEventName, onEndAnimationFn );
        }
        else {
          nextField.querySelector( '.fs-anim-lower' ).addEventListener( animEndEventName, onEndAnimationFn );
        }
      }
      else {
        nextField.querySelector( '.fs-anim-upper' ).addEventListener( animEndEventName, onEndAnimationFn );
      }
    }
    else {
      onEndAnimationFn();
    }
  }

  /**
   * showField function
   * jumps to the field at position pos
   */
  FForm.prototype._showField = function( pos ) {
    if( pos === this.current || pos < 0 || pos > this.fieldsCount - 1 ) {
      return false;
    }
    this._nextField( pos );
  }

  /**
   * updateFieldNumber function
   * changes the current field number
   */
  FForm.prototype._updateFieldNumber = function() {
    if( this.options.ctrlNavPosition ) {
      // first, create next field number placeholder
      this.ctrlFldStatusNew = document.createElement( 'span' );
      this.ctrlFldStatusNew.className = 'fs-number-new';
      this.ctrlFldStatusNew.innerHTML = Number( this.current + 1 );

      // insert it in the DOM
      this.ctrlFldStatus.appendChild( this.ctrlFldStatusNew );

      // add class "fs-show-next" or "fs-show-prev" depending on the navigation direction
      var self = this;
      setTimeout( function() {
        classie.add( self.ctrlFldStatus, self.navdir === 'next' ? 'fs-show-next' : 'fs-show-prev' );
      }, 25 );
    }
  }

  /**
   * progress function
   * updates the progress bar by setting its width
   */
  FForm.prototype._progress = function() {
    if( this.options.ctrlProgress ) {
      this.ctrlProgress.style.width = this.current * ( 100 / this.fieldsCount ) + '%';
    }
  }

  /**
   * updateNav function
   * updates the navigation dots
   */
  FForm.prototype._updateNav = function() {
    if( this.options.ctrlNavDots ) {
      classie.remove( this.ctrlNav.querySelector( 'button.fs-dot-current' ), 'fs-dot-current' );
      classie.add( this.ctrlNavDots[ this.current ], 'fs-dot-current' );
      this.ctrlNavDots[ this.current ].disabled = false;
    }
  }

  /**
   * showCtrl function
   * shows a control
   */
  FForm.prototype._showCtrl = function( ctrl ) {
    classie.add( ctrl, 'fs-show' );
  }

  /**
   * hideCtrl function
   * hides a control
   */
  FForm.prototype._hideCtrl = function( ctrl ) {
    classie.remove( ctrl, 'fs-show' );
  }

  // TODO: this is a very basic validation function. Only checks for required fields..
  FForm.prototype._validade = function() {
    var fld = this.fields[ this.current ],
      input = fld.querySelector( 'input[required]' ) || fld.querySelector( 'textarea[required]' ) || fld.querySelector( 'select[required]' ),
      error;

    if( !input ) return true;

    switch( input.tagName.toLowerCase() ) {
      case 'input' :
        if( input.type === 'radio' || input.type === 'checkbox' ) {
          var checked = 0;
          [].slice.call( fld.querySelectorAll( 'input[type="' + input.type + '"]' ) ).forEach( function( inp ) {
            if( inp.checked ) {
              ++checked;
            }
          } );
          if( !checked ) {
            error = 'NOVAL';
          }
        }
        else if( input.value === '' ) {
          error = 'NOVAL';
        }
        break;

      case 'select' :
        // assuming here '' or '-1' only
        if( input.value === '' || input.value === '-1' ) {
          error = 'NOVAL';
        }
        break;

      case 'textarea' :
        if( input.value === '' ) {
          error = 'NOVAL';
        }
        break;
    }

    if( error != undefined ) {
      this._showError( error );
      return false;
    }

    return true;
  }

  // TODO
  FForm.prototype._showError = function( err ) {
    var message = '';
    switch( err ) {
      case 'NOVAL' :
        message = 'Please fill the field before continuing';
        break;
      case 'INVALIDEMAIL' :
        message = 'Please fill a valid email address';
        break;
      // ...
    };
    this.msgError.innerHTML = message;
    this._showCtrl( this.msgError );
  }

  // clears/hides the current error message
  FForm.prototype._clearError = function() {
    this._hideCtrl( this.msgError );
  }

  // add to global namespace
  window.FForm = FForm;

})( window );
