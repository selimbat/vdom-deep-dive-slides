/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../vdom-deep-dive/dist/index.js":
/*!***************************************!*\
  !*** ../vdom-deep-dive/dist/index.js ***!
  \***************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/component.ts":
/*!******************************!*\
  !*** ./src/lib/component.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_671__) => {

__nested_webpack_require_671__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_671__.d(__nested_webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "createComponent": () => (/* binding */ createComponent)
/* harmony export */ });
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_671__(/*! ./diff */ "./src/lib/diff.ts");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_671__(/*! ./render */ "./src/lib/render.ts");


class Component {
  setState(updater) {
    if (!this.mountedElement) {
      throw new Error("Updating an unmounted component");
    }
    const newState = updater(this.state);
    if (newState !== this.state) {
      this.state = newState;
      const diff = this.getUpdateDiff();
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.applyDiff)(this.mountedElement, diff);
    }
  }
  setProps(props) {
    if (!this.mountedElement) {
      throw new Error("Setting the props of an unmounted component");
    }
    const newState = this.componentWillRecieveProps(props, this.state);
    if (newState !== this.state || props !== this.props) {
      this.state = newState;
      this.props = props;
      return this.getUpdateDiff();
    }
    return (0,_diff__WEBPACK_IMPORTED_MODULE_0__.skip)();
  }
  initProps(props) {
    this.props = props;
    this.currentRootNode = this.render();
    return this.currentRootNode;
  }
  getUpdateDiff() {
    const newRootNode = this.render();
    const diff = (0,_diff__WEBPACK_IMPORTED_MODULE_0__.createDiff)(this.currentRootNode, newRootNode);
    if (diff.kind == 'replace') {
      diff.callback = elem => this.mountedElement = elem;
    }
    this.currentRootNode = newRootNode;
    requestAnimationFrame(() => this.componentDidUpdate());
    return diff;
  }
  notifyMounted(elem) {
    this.mountedElement = elem;
    requestAnimationFrame(() => this.componentDidMount());
  }
  unmount() {
    this.componentWillUnmount();
    this.mountedElement = null;
  }
  componentDidMount() {}
  componentWillRecieveProps(props, state) {
    return state;
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
}
function createComponent(component, props) {
  const componentProps = {
    ...props
  };
  delete componentProps.key;
  return {
    kind: 'component',
    key: props.key,
    component,
    props: componentProps,
    instance: null
  };
}

/***/ }),

/***/ "./src/lib/diff.ts":
/*!*************************!*\
  !*** ./src/lib/diff.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_3301__) => {

__nested_webpack_require_3301__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_3301__.d(__nested_webpack_exports__, {
/* harmony export */   "createDiff": () => (/* binding */ createDiff),
/* harmony export */   "skip": () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3301__(/*! ../utils/utils */ "./src/utils/utils.ts");

const createDiff = (oldNode, newNode) => {
  if (oldNode.kind == 'text' && newNode.kind == 'text' && oldNode.value == newNode.value) {
    return skip();
  }
  if (oldNode.kind == 'text' || newNode.kind == 'text') {
    return replace(newNode);
  }
  if (oldNode.kind == 'component' && newNode.kind == 'component' && oldNode.component == newNode.component && oldNode.instance) {
    newNode.instance = oldNode.instance;
    if (newNode.props == oldNode.props) {
      return skip();
    }
    return newNode.instance.setProps(newNode.props);
  }
  if (newNode.kind == 'component') {
    newNode.instance == new newNode.component();
    return replace(newNode.instance.initProps(newNode.props), elem => newNode.instance?.notifyMounted(elem));
  }
  if (oldNode.kind == 'component') {
    oldNode.instance?.unmount();
    oldNode.instance = null;
    return replace(newNode);
  }
  if (oldNode.tagname !== newNode.tagname) {
    return replace(newNode);
  }

  // get the updated and replaced attributes
  return update(oldNode, newNode);
};
const skip = () => ({
  kind: 'skip'
});
const replace = (newNode, callback) => ({
  kind: 'replace',
  newNode,
  callback
});
const remove = () => ({
  kind: 'remove'
});
const insert = newNode => ({
  kind: 'insert',
  node: newNode
});
const update = (oldNode, newNode) => {
  const attributesToRemove = Object.keys(oldNode.props ?? {}).filter(att => !Object.keys(newNode.props ?? {}).includes(att));
  let attributesToSet;
  if (!newNode.props || Object.keys(newNode.props).length == 0) {
    attributesToSet = {};
  } else if (!oldNode.props || Object.keys(oldNode.props).length == 0) {
    attributesToSet = newNode.props;
  } else {
    attributesToSet = Object.keys(newNode.props).filter(att => oldNode.props[att] != newNode.props[att]).reduce((upd, att) => Object.assign(upd, {
      [att]: newNode.props[att]
    }), {});
  }
  const attUpdater = {
    remove: attributesToRemove,
    set: attributesToSet
  };
  const childrenUpdater = newChildrenDiff(oldNode.children ?? [], newNode.children ?? []);
  return {
    kind: 'update',
    attributes: attUpdater,
    children: childrenUpdater
  };
};
const newChildrenDiff = (oldChildren, newChildren) => {
  const operations = [];
  const removeUntilkey = (elems, key) => {
    while (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(elems) && elems[0].key != key) {
      if (elems[0].kind == 'component') {
        elems[0].instance?.unmount();
        elems[0].instance == null;
      }
      operations.push(remove());
      elems.shift();
    }
  };
  const insertUntilKey = (elems, key) => {
    while (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(elems) && elems[0].key != key) {
      operations.push(insert(elems.shift()));
    }
  };
  const remainingOldChildren = [...oldChildren];
  const remainingNewChildren = [...newChildren];

  // find the first element that got updated
  let nextUpdateKey = remainingOldChildren.find(k => remainingNewChildren.find(l => l.key === k.key) !== undefined)?.key ?? null;
  while (nextUpdateKey !== null) {
    // first remove all old newChildren before the update
    removeUntilkey(remainingOldChildren, nextUpdateKey);

    // then insert all new newChildren before the update
    insertUntilKey(remainingNewChildren, nextUpdateKey);

    // create the update
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(remainingNewChildren) && !(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(remainingOldChildren)) {
      operations.push(createDiff(remainingOldChildren.shift(), remainingNewChildren.shift()));
    }

    // find the next update
    nextUpdateKey = remainingOldChildren.find(k => remainingNewChildren.find(l => l.key === k.key) !== undefined)?.key ?? null;
  }

  // remove all remaing old newChildren after the last update
  removeUntilkey(remainingOldChildren, undefined);

  // insert all remaing new newChildren after the last update
  insertUntilKey(remainingNewChildren, undefined);
  return operations;
};

/***/ }),

/***/ "./src/lib/jsx-runtime.ts":
/*!********************************!*\
  !*** ./src/lib/jsx-runtime.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7949__) => {

__nested_webpack_require_7949__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_7949__.d(__nested_webpack_exports__, {
/* harmony export */   "jsx": () => (/* binding */ jsx),
/* harmony export */   "jsxLib": () => (/* binding */ jsxLib),
/* harmony export */   "jsxs": () => (/* binding */ jsxs)
/* harmony export */ });
/* harmony import */ var lib_vdom__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7949__(/*! lib/vdom */ "./src/lib/vdom.ts");
/* harmony import */ var lib_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_7949__(/*! lib/component */ "./src/lib/component.ts");


function jsxs(tagOrComponent, props, key) {
  Object.assign(props, {
    key
  });
  if (typeof tagOrComponent !== 'string') {
    return (0,lib_component__WEBPACK_IMPORTED_MODULE_1__.createComponent)(tagOrComponent, props);
  }
  const children = props.children ?? [];
  delete props.children;
  return (0,lib_vdom__WEBPACK_IMPORTED_MODULE_0__.createElement)(tagOrComponent, props, ...(Array.isArray(children) ? children : [children]));
}
const jsx = jsxs;
function jsxLib(tagOrComponent, props, ...children) {
  props = props ?? {};
  if (typeof tagOrComponent !== 'string') {
    return (0,lib_component__WEBPACK_IMPORTED_MODULE_1__.createComponent)(tagOrComponent, props);
  }
  delete props.children;
  return (0,lib_vdom__WEBPACK_IMPORTED_MODULE_0__.createElement)(tagOrComponent, props, ...(Array.isArray(children) ? children : [children]));
}

/***/ }),

/***/ "./src/lib/render.ts":
/*!***************************!*\
  !*** ./src/lib/render.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_9596__) => {

__nested_webpack_require_9596__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_9596__.d(__nested_webpack_exports__, {
/* harmony export */   "applyDiff": () => (/* binding */ applyDiff),
/* harmony export */   "renderDOM": () => (/* binding */ renderDOM)
/* harmony export */ });
const renderDOM = (rootNodeId, rootNode) => {
  const root = document.getElementById(rootNodeId);
  if (!root) {
    throw new Error("Could not find root element to attach to the app.");
  }
  root.replaceWith(renderElement(rootNode));
};
const renderElement = rootNode => {
  if (rootNode.kind == 'text') {
    return document.createTextNode(rootNode.value);
  }
  if (rootNode.kind === 'component') {
    let nodeToRender;
    if (rootNode.instance) {
      nodeToRender = rootNode.instance.render();
    } else {
      rootNode.instance = new rootNode.component();
      nodeToRender = rootNode.instance.initProps(rootNode.props);
    }
    const elem = renderElement(nodeToRender);
    rootNode.instance.notifyMounted(elem);
    return elem;
  }
  const elem = document.createElement(rootNode.tagname);
  for (const att in rootNode.props ?? {}) {
    elem[att] = rootNode.props ? rootNode.props[att] : undefined;
  }
  (rootNode.children ?? []).forEach(child => elem.appendChild(renderElement(child)));
  return elem;
};
const applyDiff = (elem, diff) => {
  if (diff.kind == 'skip') return elem;
  if (diff.kind == 'replace') {
    const newElem = renderElement(diff.newNode);
    elem.replaceWith(newElem);
    if (diff.callback) diff.callback(newElem);
    return newElem;
  }
  if ('wholeText' in elem) {
    throw new Error('invalid update for Text node');
  }
  for (const att in diff.attributes.remove) {
    elem.removeAttribute(att);
  }
  for (const att in diff.attributes.set) {
    elem[att] = diff.attributes.set[att];
  }
  applyChildrenDiff(elem, diff.children);
  return elem;
};
const applyChildrenDiff = (elem, operations) => {
  let offset = 0;
  for (let i = 0; i < operations.length; i++) {
    const childUpdater = operations[i];
    if (childUpdater.kind == 'skip') continue;
    if (childUpdater.kind == 'insert') {
      const newChild = renderElement(childUpdater.node);
      if (elem.childNodes[i + offset - 1]) {
        elem.childNodes[i + offset - 1].after(newChild);
      } else {
        elem.appendChild(newChild);
      }
      continue;
    }
    const childElem = elem.childNodes[i + offset];
    if (childUpdater.kind == 'remove') {
      childElem.remove();
      offset -= 1;
      continue;
    }
    applyDiff(childElem, childUpdater);
  }
};

/***/ }),

/***/ "./src/lib/vdom.ts":
/*!*************************!*\
  !*** ./src/lib/vdom.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_12370__) => {

__nested_webpack_require_12370__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_12370__.d(__nested_webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createText": () => (/* binding */ createText)
/* harmony export */ });
const createElement = (tagname, props, ...children) => {
  const key = props.key;
  const propsToPass = props;
  delete propsToPass.key;
  const processedChildren = children.map(ch => {
    if (typeof ch !== 'string') return ch;
    return createText(ch);
  });
  return {
    kind: 'element',
    tagname,
    props: propsToPass,
    children: processedChildren,
    key
  };
};
const createText = (value, key = '') => ({
  key,
  kind: 'text',
  value: value.toString()
});

/***/ }),

/***/ "./src/utils/style.ts":
/*!****************************!*\
  !*** ./src/utils/style.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_13352__) => {

__nested_webpack_require_13352__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_13352__.d(__nested_webpack_exports__, {
/* harmony export */   "makeStyle": () => (/* binding */ makeStyle)
/* harmony export */ });
const kebabize = str => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
const makeStyle = style => {
  return Object.entries(style).map(([k, v]) => {
    if (v) {
      return `${kebabize(k)}:${v};`;
    }
    return '';
  }).join(' ');
};

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_14058__) => {

__nested_webpack_require_14058__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_14058__.d(__nested_webpack_exports__, {
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty)
/* harmony export */ });
function isEmpty(array) {
  return array.length === 0;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_14571__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_14571__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_14571__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_14571__.o(definition, key) && !__nested_webpack_require_14571__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_14571__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_14571__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_14571__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_14571__.d(__nested_webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _lib_component__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "jsx": () => (/* reexport safe */ _lib_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxLib),
/* harmony export */   "makeStyle": () => (/* reexport safe */ _utils_style__WEBPACK_IMPORTED_MODULE_2__.makeStyle),
/* harmony export */   "renderDOM": () => (/* reexport safe */ _lib_render__WEBPACK_IMPORTED_MODULE_0__.renderDOM)
/* harmony export */ });
/* harmony import */ var _lib_render__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14571__(/*! ./lib/render */ "./src/lib/render.ts");
/* harmony import */ var _lib_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_14571__(/*! ./lib/component */ "./src/lib/component.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_14571__(/*! ./utils/style */ "./src/utils/style.ts");
/* harmony import */ var _lib_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_14571__(/*! ./lib/jsx-runtime */ "./src/lib/jsx-runtime.ts");




})();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
const MyLib = __webpack_require__(/*! @selimbat/vdom-deep-dive */ "../vdom-deep-dive/dist/index.js");
console.log(MyLib);
MyLib.renderDOM('root', MyLib.jsx("div", {
  key: "root"
}, MyLib.jsx("div", null, "A"), MyLib.jsx("div", null, "Hello World!")));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map