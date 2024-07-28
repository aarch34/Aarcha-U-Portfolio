// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"anvqh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var _constants = require("./constants");
var _kaboomCtx = require("./kaboomCtx");
var _utils = require("./utils");
(0, _kaboomCtx.k).loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 964,
        "walk-down": {
            from: 964,
            to: 967,
            loop: true,
            speed: 8
        },
        "idle-side": 1003,
        "walk-side": {
            from: 1003,
            to: 1006,
            loop: true,
            speed: 8
        },
        "idle-up": 1042,
        "walk-up": {
            from: 1042,
            to: 1045,
            loop: true,
            speed: 8
        }
    }
});
(0, _kaboomCtx.k).loadSprite("map", "./map.png");
(0, _kaboomCtx.k).setBackground((0, _kaboomCtx.k).Color.fromHex("#311047"));
(0, _kaboomCtx.k).scene("main", async ()=>{
    const mapData = await (await fetch("./map.json")).json();
    const layers = mapData.layers;
    const map = (0, _kaboomCtx.k).add([
        (0, _kaboomCtx.k).sprite("map"),
        (0, _kaboomCtx.k).pos(0),
        (0, _kaboomCtx.k).scale((0, _constants.scaleFactor))
    ]);
    const player = (0, _kaboomCtx.k).make([
        (0, _kaboomCtx.k).sprite("spritesheet", {
            anim: "idle-down"
        }),
        (0, _kaboomCtx.k).area({
            shape: new (0, _kaboomCtx.k).Rect((0, _kaboomCtx.k).vec2(0, 3), 10, 10)
        }),
        (0, _kaboomCtx.k).body(),
        (0, _kaboomCtx.k).anchor("center"),
        (0, _kaboomCtx.k).pos(),
        (0, _kaboomCtx.k).scale((0, _constants.scaleFactor)),
        {
            speed: 250,
            direction: "down",
            isInDialogue: false
        },
        "player"
    ]);
    for (const layer of layers){
        if (layer.name === "boundaries") {
            for (const boundary of layer.objects){
                map.add([
                    (0, _kaboomCtx.k).area({
                        shape: new (0, _kaboomCtx.k).Rect((0, _kaboomCtx.k).vec2(0), boundary.width, boundary.height)
                    }),
                    (0, _kaboomCtx.k).body({
                        isStatic: true
                    }),
                    (0, _kaboomCtx.k).pos(boundary.x, boundary.y),
                    boundary.name
                ]);
                if (boundary.name) player.onCollide(boundary.name, ()=>{
                    player.isInDialogue = true;
                    (0, _utils.displayDialogue)((0, _constants.dialogueData)[boundary.name], ()=>player.isInDialogue = false);
                });
            }
            continue;
        }
        if (layer.name === "spawnpoints") {
            for (const entity of layer.objects)if (entity.name === "player") {
                player.pos = (0, _kaboomCtx.k).vec2((map.pos.x + entity.x) * (0, _constants.scaleFactor), (map.pos.y + entity.y) * (0, _constants.scaleFactor));
                (0, _kaboomCtx.k).add(player);
                continue;
            }
        }
    }
    (0, _utils.setCamScale)((0, _kaboomCtx.k));
    (0, _kaboomCtx.k).onResize(()=>{
        (0, _utils.setCamScale)((0, _kaboomCtx.k));
    });
    (0, _kaboomCtx.k).onUpdate(()=>{
        (0, _kaboomCtx.k).camPos(player.worldPos().x, player.worldPos().y - 100);
    });
    (0, _kaboomCtx.k).onMouseDown((mouseBtn)=>{
        if (mouseBtn !== "left" || player.isInDialogue) return;
        const worldMousePos = (0, _kaboomCtx.k).toWorld((0, _kaboomCtx.k).mousePos());
        player.moveTo(worldMousePos, player.speed);
        const mouseAngle = player.pos.angle(worldMousePos);
        const lowerBound = 50;
        const upperBound = 125;
        if (mouseAngle > lowerBound && mouseAngle < upperBound && player.curAnim() !== "walk-up") {
            player.play("walk-up");
            player.direction = "up";
            return;
        }
        if (mouseAngle < -lowerBound && mouseAngle > -upperBound && player.curAnim() !== "walk-down") {
            player.play("walk-down");
            player.direction = "down";
            return;
        }
        if (Math.abs(mouseAngle) > upperBound) {
            player.flipX = false;
            if (player.curAnim() !== "walk-side") player.play("walk-side");
            player.direction = "right";
            return;
        }
        if (Math.abs(mouseAngle) < lowerBound) {
            player.flipX = true;
            if (player.curAnim() !== "walk-side") player.play("walk-side");
            player.direction = "left";
            return;
        }
    });
    function stopAnims() {
        if (player.direction === "down") {
            player.play("idle-down");
            return;
        }
        if (player.direction === "up") {
            player.play("idle-up");
            return;
        }
        player.play("idle-side");
    }
    (0, _kaboomCtx.k).onMouseRelease(stopAnims);
    (0, _kaboomCtx.k).onKeyRelease(()=>{
        stopAnims();
    });
    (0, _kaboomCtx.k).onKeyDown((key)=>{
        const keyMap = [
            (0, _kaboomCtx.k).isKeyDown("right"),
            (0, _kaboomCtx.k).isKeyDown("left"),
            (0, _kaboomCtx.k).isKeyDown("up"),
            (0, _kaboomCtx.k).isKeyDown("down")
        ];
        let nbOfKeyPressed = 0;
        for (const key of keyMap)if (key) nbOfKeyPressed++;
        if (nbOfKeyPressed > 1) return;
        if (player.isInDialogue) return;
        if (keyMap[0]) {
            player.flipX = false;
            if (player.curAnim() !== "walk-side") player.play("walk-side");
            player.direction = "right";
            player.move(player.speed, 0);
            return;
        }
        if (keyMap[1]) {
            player.flipX = true;
            if (player.curAnim() !== "walk-side") player.play("walk-side");
            player.direction = "left";
            player.move(-player.speed, 0);
            return;
        }
        if (keyMap[2]) {
            if (player.curAnim() !== "walk-up") player.play("walk-up");
            player.direction = "up";
            player.move(0, -player.speed);
            return;
        }
        if (keyMap[3]) {
            if (player.curAnim() !== "walk-down") player.play("walk-down");
            player.direction = "down";
            player.move(0, player.speed);
        }
    });
});
(0, _kaboomCtx.k).go("main");

},{"./constants":"3huJa","./kaboomCtx":"aAewd","./utils":"en4he"}],"3huJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleFactor", ()=>scaleFactor);
parcelHelpers.export(exports, "dialogueData", ()=>dialogueData);
const scaleFactor = 4;
const dialogueData = {
    pc: `These are my experiences:<br>
  Software Engineering Fellow, Headstarter AI:As a Software Engineering Fellow at Headstarter AI, I am embarking on a dynamic 7-week journey working on diverse projects across various fields. This immersive experience includes hands-on development in cutting-edge technologies, participating in engaging hackathons, and receiving tailored interview preparation to sharpen my skills.<br> 
  Student Ambassador, Viral Fission:In my role as a Student Ambassador at Viral Fission, I organize and host blockchain gaming events to foster community engagement. I create engaging content, including reels and social media posts, to promote products and enhance brand visibility.<br>
   `,
    "cs-degree": `I have certificationS from META in HTML & CSS, and also Version Control.`,
    "sofa-table": `Hello!, I'm Aarcha U, a B.E. student specializing in Artificial Intelligence & Machine Learning at Impact College of Engineering & Applied Sciences. With experience in web development, blockchain event management, and a passion for technology, I bring a creative and analytical approach to every project. Explore my portfolio to see my work in programming and design, and feel free to connect with me for collaboration!`,
    tv: ` Check out my LinedIn profile:<a href="https://www.linkedin.com/in/aarcha-u" target="_blank">LinkedIn</a>.`,
    bed: `This where I sleep. Great ideas comes when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.`,
    resume: `This is my desk and on it is my Github Profile: <a href="https://github.com/aarch34" target="_blank">Github</a>,
  Contact me at aarcha.u@yahoo.com if you have any interesting job opportunities!`,
    projects: `Some projects I've Done:<br>
  I developed a user-friendly website for Bibha, The Event Company, focusing on responsive design and multimedia integration to enhance user engagement.<br>
   Additionally, I created an e-commerce web app for a college project,showcasing a jewellery store using Django and MySQL, featuring a secure user authentication system, a dynamic product catalog, and a comprehensive admin dashboard. These projects showcase my skills in web development and my commitment to delivering functional and visually appealing digital solutions.`,
    library: `These are my skills:<br>Programming Languages: Python, HTML5, CSS, C.
<br>Web Development: Django, Kaboom.js, Responsive Design, Frontend Development.
<br>Database Management: MySQL,MongoDB.
<br>Version Control: Git, GitHub.`,
    exit: `If you want to exit Aarcha U's portfolio, just close the tab.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aAewd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "k", ()=>k);
var _kaboom = require("kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
var _constants = require("./constants");
const k = (0, _kaboomDefault.default)({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),
    debug: false
});

},{"kaboom":"larQu","./constants":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"larQu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>zo);
var yi = Object.defineProperty;
var i = (n, e)=>yi(n, "name", {
        value: e,
        configurable: !0
    });
var gr = (()=>{
    for(var n = new Uint8Array(128), e = 0; e < 64; e++)n[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
    return (o)=>{
        for(var c = o.length, g = new Uint8Array((c - (o[c - 1] == "=") - (o[c - 2] == "=")) * 3 / 4 | 0), m = 0, P = 0; m < c;){
            var I = n[o.charCodeAt(m++)], j = n[o.charCodeAt(m++)], y = n[o.charCodeAt(m++)], X = n[o.charCodeAt(m++)];
            g[P++] = I << 2 | j >> 4, g[P++] = j << 4 | y >> 2, g[P++] = y << 6 | X;
        }
        return g;
    };
})();
function Ge(n) {
    return n * Math.PI / 180;
}
i(Ge, "deg2rad");
function ot(n) {
    return n * 180 / Math.PI;
}
i(ot, "rad2deg");
function Le(n, e, o) {
    return e > o ? Le(n, o, e) : Math.min(Math.max(n, e), o);
}
i(Le, "clamp");
function Ve(n, e, o) {
    if (typeof n == "number" && typeof e == "number") return n + (e - n) * o;
    if (n instanceof v && e instanceof v) return n.lerp(e, o);
    if (n instanceof W && e instanceof W) return n.lerp(e, o);
    throw new Error(`Bad value for lerp(): ${n}, ${e}. Only number, Vec2 and Color is supported.`);
}
i(Ve, "lerp");
function _e(n, e, o, c, g) {
    return c + (n - e) / (o - e) * (g - c);
}
i(_e, "map");
function br(n, e, o, c, g) {
    return Le(_e(n, e, o, c, g), c, g);
}
i(br, "mapc");
var v = class n {
    static{
        i(this, "Vec2");
    }
    x = 0;
    y = 0;
    constructor(e = 0, o = e){
        this.x = e, this.y = o;
    }
    static fromAngle(e) {
        let o = Ge(e);
        return new n(Math.cos(o), Math.sin(o));
    }
    static LEFT = new n(-1, 0);
    static RIGHT = new n(1, 0);
    static UP = new n(0, -1);
    static DOWN = new n(0, 1);
    clone() {
        return new n(this.x, this.y);
    }
    add(...e) {
        let o = T(...e);
        return new n(this.x + o.x, this.y + o.y);
    }
    sub(...e) {
        let o = T(...e);
        return new n(this.x - o.x, this.y - o.y);
    }
    scale(...e) {
        let o = T(...e);
        return new n(this.x * o.x, this.y * o.y);
    }
    dist(...e) {
        let o = T(...e);
        return this.sub(o).len();
    }
    sdist(...e) {
        let o = T(...e);
        return this.sub(o).slen();
    }
    len() {
        return Math.sqrt(this.dot(this));
    }
    slen() {
        return this.dot(this);
    }
    unit() {
        let e = this.len();
        return e === 0 ? new n(0) : this.scale(1 / e);
    }
    normal() {
        return new n(this.y, -this.x);
    }
    reflect(e) {
        return this.sub(e.scale(2 * this.dot(e)));
    }
    project(e) {
        return e.scale(e.dot(this) / e.len());
    }
    reject(e) {
        return this.sub(this.project(e));
    }
    dot(e) {
        return this.x * e.x + this.y * e.y;
    }
    cross(e) {
        return this.x * e.y - this.y * e.x;
    }
    angle(...e) {
        let o = T(...e);
        return ot(Math.atan2(this.y - o.y, this.x - o.x));
    }
    angleBetween(...e) {
        let o = T(...e);
        return ot(Math.atan2(this.cross(o), this.dot(o)));
    }
    lerp(e, o) {
        return new n(Ve(this.x, e.x, o), Ve(this.y, e.y, o));
    }
    slerp(e, o) {
        let c = this.dot(e), g = this.cross(e), m = Math.atan2(g, c);
        return this.scale(Math.sin((1 - o) * m)).add(e.scale(Math.sin(o * m))).scale(1 / g);
    }
    isZero() {
        return this.x === 0 && this.y === 0;
    }
    toFixed(e) {
        return new n(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
    }
    transform(e) {
        return e.multVec2(this);
    }
    eq(e) {
        return this.x === e.x && this.y === e.y;
    }
    bbox() {
        return new de(this, 0, 0);
    }
    toString() {
        return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
};
function T(...n) {
    if (n.length === 1) {
        if (n[0] instanceof v) return new v(n[0].x, n[0].y);
        if (Array.isArray(n[0]) && n[0].length === 2) return new v(...n[0]);
    }
    return new v(...n);
}
i(T, "vec2");
var W = class n {
    static{
        i(this, "Color");
    }
    r = 255;
    g = 255;
    b = 255;
    constructor(e, o, c){
        this.r = Le(e, 0, 255), this.g = Le(o, 0, 255), this.b = Le(c, 0, 255);
    }
    static fromArray(e) {
        return new n(e[0], e[1], e[2]);
    }
    static fromHex(e) {
        if (typeof e == "number") return new n(e >> 16 & 255, e >> 8 & 255, e >> 0 & 255);
        if (typeof e == "string") {
            let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return new n(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
        } else throw new Error("Invalid hex color format");
    }
    static fromHSL(e, o, c) {
        if (o == 0) return new n(255 * c, 255 * c, 255 * c);
        let g = i((X, S, q)=>(q < 0 && (q += 1), q > 1 && (q -= 1), q < 1 / 6 ? X + (S - X) * 6 * q : q < 0.5 ? S : q < 2 / 3 ? X + (S - X) * (2 / 3 - q) * 6 : X), "hue2rgb"), m = c < .5 ? c * (1 + o) : c + o - c * o, P = 2 * c - m, I = g(P, m, e + 1 / 3), j = g(P, m, e), y = g(P, m, e - 1 / 3);
        return new n(Math.round(I * 255), Math.round(j * 255), Math.round(y * 255));
    }
    static RED = new n(255, 0, 0);
    static GREEN = new n(0, 255, 0);
    static BLUE = new n(0, 0, 255);
    static YELLOW = new n(255, 255, 0);
    static MAGENTA = new n(255, 0, 255);
    static CYAN = new n(0, 255, 255);
    static WHITE = new n(255, 255, 255);
    static BLACK = new n(0, 0, 0);
    clone() {
        return new n(this.r, this.g, this.b);
    }
    lighten(e) {
        return new n(this.r + e, this.g + e, this.b + e);
    }
    darken(e) {
        return this.lighten(-e);
    }
    invert() {
        return new n(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e) {
        return new n(this.r * e.r / 255, this.g * e.g / 255, this.b * e.b / 255);
    }
    lerp(e, o) {
        return new n(Ve(this.r, e.r, o), Ve(this.g, e.g, o), Ve(this.b, e.b, o));
    }
    toHSL() {
        let e = this.r / 255, o = this.g / 255, c = this.b / 255, g = Math.max(e, o, c), m = Math.min(e, o, c), P = (g + m) / 2, I = P, j = P;
        if (g == m) P = I = 0;
        else {
            let y = g - m;
            switch(I = j > .5 ? y / (2 - g - m) : y / (g + m), g){
                case e:
                    P = (o - c) / y + (o < c ? 6 : 0);
                    break;
                case o:
                    P = (c - e) / y + 2;
                    break;
                case c:
                    P = (e - o) / y + 4;
                    break;
            }
            P /= 6;
        }
        return [
            P,
            I,
            j
        ];
    }
    eq(e) {
        return this.r === e.r && this.g === e.g && this.b === e.b;
    }
    toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
        return "#" + (16777216 + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
};
function J(...n) {
    if (n.length === 0) return new W(255, 255, 255);
    if (n.length === 1) {
        if (n[0] instanceof W) return n[0].clone();
        if (typeof n[0] == "string") return W.fromHex(n[0]);
        if (Array.isArray(n[0]) && n[0].length === 3) return W.fromArray(n[0]);
    }
    return new W(...n);
}
i(J, "rgb");
var vr = i((n, e, o)=>W.fromHSL(n, e, o), "hsl2rgb"), oe = class n {
    static{
        i(this, "Quad");
    }
    x = 0;
    y = 0;
    w = 1;
    h = 1;
    constructor(e, o, c, g){
        this.x = e, this.y = o, this.w = c, this.h = g;
    }
    scale(e) {
        return new n(this.x + this.w * e.x, this.y + this.h * e.y, this.w * e.w, this.h * e.h);
    }
    pos() {
        return new v(this.x, this.y);
    }
    clone() {
        return new n(this.x, this.y, this.w, this.h);
    }
    eq(e) {
        return this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h;
    }
    toString() {
        return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
};
function ce(n, e, o, c) {
    return new oe(n, e, o, c);
}
i(ce, "quad");
var Ue = class n {
    static{
        i(this, "Mat4");
    }
    m = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ];
    constructor(e){
        e && (this.m = e);
    }
    static translate(e) {
        return new n([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            e.x,
            e.y,
            0,
            1
        ]);
    }
    static scale(e) {
        return new n([
            e.x,
            0,
            0,
            0,
            0,
            e.y,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    static rotateX(e) {
        e = Ge(-e);
        let o = Math.cos(e), c = Math.sin(e);
        return new n([
            1,
            0,
            0,
            0,
            0,
            o,
            -c,
            0,
            0,
            c,
            o,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    static rotateY(e) {
        e = Ge(-e);
        let o = Math.cos(e), c = Math.sin(e);
        return new n([
            o,
            0,
            c,
            0,
            0,
            1,
            0,
            0,
            -c,
            0,
            o,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    static rotateZ(e) {
        e = Ge(-e);
        let o = Math.cos(e), c = Math.sin(e);
        return new n([
            o,
            -c,
            0,
            0,
            c,
            o,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    translate(e) {
        return this.m[12] += this.m[0] * e.x + this.m[4] * e.y, this.m[13] += this.m[1] * e.x + this.m[5] * e.y, this.m[14] += this.m[2] * e.x + this.m[6] * e.y, this.m[15] += this.m[3] * e.x + this.m[7] * e.y, this;
    }
    scale(e) {
        return this.m[0] *= e.x, this.m[4] *= e.y, this.m[1] *= e.x, this.m[5] *= e.y, this.m[2] *= e.x, this.m[6] *= e.y, this.m[3] *= e.x, this.m[7] *= e.y, this;
    }
    rotate(e) {
        e = Ge(-e);
        let o = Math.cos(e), c = Math.sin(e), g = this.m[0], m = this.m[1], P = this.m[4], I = this.m[5];
        return this.m[0] = g * o + m * c, this.m[1] = -g * c + m * o, this.m[4] = P * o + I * c, this.m[5] = -P * c + I * o, this;
    }
    mult(e) {
        let o = [];
        for(let c = 0; c < 4; c++)for(let g = 0; g < 4; g++)o[c * 4 + g] = this.m[0 + g] * e.m[c * 4 + 0] + this.m[4 + g] * e.m[c * 4 + 1] + this.m[8 + g] * e.m[c * 4 + 2] + this.m[12 + g] * e.m[c * 4 + 3];
        return new n(o);
    }
    multVec2(e) {
        return new v(e.x * this.m[0] + e.y * this.m[4] + this.m[12], e.x * this.m[1] + e.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
        return new v(this.m[12], this.m[13]);
    }
    getScale() {
        if (this.m[0] != 0 || this.m[1] != 0) {
            let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
            return new v(o, e / o);
        } else if (this.m[4] != 0 || this.m[5] != 0) {
            let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
            return new v(e / o, o);
        } else return new v(0, 0);
    }
    getRotation() {
        if (this.m[0] != 0 || this.m[1] != 0) {
            let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
            return ot(this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e));
        } else if (this.m[4] != 0 || this.m[5] != 0) {
            let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
            return ot(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / e) : -Math.acos(this.m[4] / e)));
        } else return 0;
    }
    getSkew() {
        if (this.m[0] != 0 || this.m[1] != 0) {
            let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
            return new v(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e), 0);
        } else if (this.m[4] != 0 || this.m[5] != 0) {
            let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
            return new v(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e));
        } else return new v(0, 0);
    }
    invert() {
        let e = [], o = this.m[10] * this.m[15] - this.m[14] * this.m[11], c = this.m[9] * this.m[15] - this.m[13] * this.m[11], g = this.m[9] * this.m[14] - this.m[13] * this.m[10], m = this.m[8] * this.m[15] - this.m[12] * this.m[11], P = this.m[8] * this.m[14] - this.m[12] * this.m[10], I = this.m[8] * this.m[13] - this.m[12] * this.m[9], j = this.m[6] * this.m[15] - this.m[14] * this.m[7], y = this.m[5] * this.m[15] - this.m[13] * this.m[7], X = this.m[5] * this.m[14] - this.m[13] * this.m[6], S = this.m[4] * this.m[15] - this.m[12] * this.m[7], q = this.m[4] * this.m[14] - this.m[12] * this.m[6], E = this.m[5] * this.m[15] - this.m[13] * this.m[7], K = this.m[4] * this.m[13] - this.m[12] * this.m[5], Q = this.m[6] * this.m[11] - this.m[10] * this.m[7], te = this.m[5] * this.m[11] - this.m[9] * this.m[7], k = this.m[5] * this.m[10] - this.m[9] * this.m[6], pe = this.m[4] * this.m[11] - this.m[8] * this.m[7], C = this.m[4] * this.m[10] - this.m[8] * this.m[6], Ae = this.m[4] * this.m[9] - this.m[8] * this.m[5];
        e[0] = this.m[5] * o - this.m[6] * c + this.m[7] * g, e[4] = -(this.m[4] * o - this.m[6] * m + this.m[7] * P), e[8] = this.m[4] * c - this.m[5] * m + this.m[7] * I, e[12] = -(this.m[4] * g - this.m[5] * P + this.m[6] * I), e[1] = -(this.m[1] * o - this.m[2] * c + this.m[3] * g), e[5] = this.m[0] * o - this.m[2] * m + this.m[3] * P, e[9] = -(this.m[0] * c - this.m[1] * m + this.m[3] * I), e[13] = this.m[0] * g - this.m[1] * P + this.m[2] * I, e[2] = this.m[1] * j - this.m[2] * y + this.m[3] * X, e[6] = -(this.m[0] * j - this.m[2] * S + this.m[3] * q), e[10] = this.m[0] * E - this.m[1] * S + this.m[3] * K, e[14] = -(this.m[0] * X - this.m[1] * q + this.m[2] * K), e[3] = -(this.m[1] * Q - this.m[2] * te + this.m[3] * k), e[7] = this.m[0] * Q - this.m[2] * pe + this.m[3] * C, e[11] = -(this.m[0] * te - this.m[1] * pe + this.m[3] * Ae), e[15] = this.m[0] * k - this.m[1] * C + this.m[2] * Ae;
        let $ = this.m[0] * e[0] + this.m[1] * e[4] + this.m[2] * e[8] + this.m[3] * e[12];
        for(let Te = 0; Te < 4; Te++)for(let ye = 0; ye < 4; ye++)e[Te * 4 + ye] *= 1 / $;
        return new n(e);
    }
    clone() {
        return new n([
            ...this.m
        ]);
    }
    toString() {
        return this.m.toString();
    }
};
function In(n, e, o, c = (g)=>-Math.cos(g)) {
    return n + (c(o) + 1) / 2 * (e - n);
}
i(In, "wave");
var xi = 1103515245, Ui = 12345, wr = 2147483648, bt = class {
    static{
        i(this, "RNG");
    }
    seed;
    constructor(e){
        this.seed = e;
    }
    gen() {
        return this.seed = (xi * this.seed + Ui) % wr, this.seed / wr;
    }
    genNumber(e, o) {
        return e + this.gen() * (o - e);
    }
    genVec2(e, o) {
        return new v(this.genNumber(e.x, o.x), this.genNumber(e.y, o.y));
    }
    genColor(e, o) {
        return new W(this.genNumber(e.r, o.r), this.genNumber(e.g, o.g), this.genNumber(e.b, o.b));
    }
    genAny(...e) {
        if (e.length === 0) return this.gen();
        if (e.length === 1) {
            if (typeof e[0] == "number") return this.genNumber(0, e[0]);
            if (e[0] instanceof v) return this.genVec2(T(0, 0), e[0]);
            if (e[0] instanceof W) return this.genColor(J(0, 0, 0), e[0]);
        } else if (e.length === 2) {
            if (typeof e[0] == "number" && typeof e[1] == "number") return this.genNumber(e[0], e[1]);
            if (e[0] instanceof v && e[1] instanceof v) return this.genVec2(e[0], e[1]);
            if (e[0] instanceof W && e[1] instanceof W) return this.genColor(e[0], e[1]);
        }
    }
}, Bn = new bt(Date.now());
function yr(n) {
    return n != null && (Bn.seed = n), Bn.seed;
}
i(yr, "randSeed");
function xt(...n) {
    return Bn.genAny(...n);
}
i(xt, "rand");
function Ln(...n) {
    return Math.floor(xt(...n));
}
i(Ln, "randi");
function xr(n) {
    return xt() <= n;
}
i(xr, "chance");
function Ur(n) {
    return n[Ln(n.length)];
}
i(Ur, "choose");
function Er(n, e) {
    return n.pos.x + n.width > e.pos.x && n.pos.x < e.pos.x + e.width && n.pos.y + n.height > e.pos.y && n.pos.y < e.pos.y + e.height;
}
i(Er, "testRectRect");
function Ei(n, e) {
    if (n.p1.x === n.p2.x && n.p1.y === n.p2.y || e.p1.x === e.p2.x && e.p1.y === e.p2.y) return null;
    let o = (e.p2.y - e.p1.y) * (n.p2.x - n.p1.x) - (e.p2.x - e.p1.x) * (n.p2.y - n.p1.y);
    if (o === 0) return null;
    let c = ((e.p2.x - e.p1.x) * (n.p1.y - e.p1.y) - (e.p2.y - e.p1.y) * (n.p1.x - e.p1.x)) / o, g = ((n.p2.x - n.p1.x) * (n.p1.y - e.p1.y) - (n.p2.y - n.p1.y) * (n.p1.x - e.p1.x)) / o;
    return c < 0 || c > 1 || g < 0 || g > 1 ? null : c;
}
i(Ei, "testLineLineT");
function it(n, e) {
    let o = Ei(n, e);
    return o ? T(n.p1.x + o * (n.p2.x - n.p1.x), n.p1.y + o * (n.p2.y - n.p1.y)) : null;
}
i(it, "testLineLine");
function Sr(n, e) {
    if (vt(n, e.p1) || vt(n, e.p2)) return !0;
    let o = n.points();
    return !!it(e, new Ie(o[0], o[1])) || !!it(e, new Ie(o[1], o[2])) || !!it(e, new Ie(o[2], o[3])) || !!it(e, new Ie(o[3], o[0]));
}
i(Sr, "testRectLine");
function vt(n, e) {
    return e.x > n.pos.x && e.x < n.pos.x + n.width && e.y > n.pos.y && e.y < n.pos.y + n.height;
}
i(vt, "testRectPoint");
function Cr(n, e) {
    let o = e.sub(n.p1), c = n.p2.sub(n.p1);
    if (Math.abs(o.cross(c)) > Number.EPSILON) return !1;
    let g = o.dot(c) / c.dot(c);
    return g >= 0 && g <= 1;
}
i(Cr, "testLinePoint");
function Vn(n, e) {
    let o = n.p2.sub(n.p1), c = o.dot(o), g = n.p1.sub(e.center), m = 2 * o.dot(g), P = g.dot(g) - e.radius * e.radius, I = m * m - 4 * c * P;
    if (c <= Number.EPSILON || I < 0) return !1;
    if (I == 0) {
        let j = -m / (2 * c);
        if (j >= 0 && j <= 1) return !0;
    } else {
        let j = (-m + Math.sqrt(I)) / (2 * c), y = (-m - Math.sqrt(I)) / (2 * c);
        if (j >= 0 && j <= 1 || y >= 0 && y <= 1) return !0;
    }
    return Ar(e, n.p1);
}
i(Vn, "testLineCircle");
function Ar(n, e) {
    return n.center.sdist(e) < n.radius * n.radius;
}
i(Ar, "testCirclePoint");
function Tr(n, e) {
    let o = e.pts[e.pts.length - 1];
    for (let c of e.pts){
        if (Vn(new Ie(o, c), n)) return !0;
        o = c;
    }
    return Ar(n, e.pts[0]) ? !0 : _n(e, n.center);
}
i(Tr, "testCirclePolygon");
function _n(n, e) {
    let o = !1, c = n.pts;
    for(let g = 0, m = c.length - 1; g < c.length; m = g++)c[g].y > e.y != c[m].y > e.y && e.x < (c[m].x - c[g].x) * (e.y - c[g].y) / (c[m].y - c[g].y) + c[g].x && (o = !o);
    return o;
}
i(_n, "testPolygonPoint");
var Ie = class n {
    static{
        i(this, "Line");
    }
    p1;
    p2;
    constructor(e, o){
        this.p1 = e.clone(), this.p2 = o.clone();
    }
    transform(e) {
        return new n(e.multVec2(this.p1), e.multVec2(this.p2));
    }
    bbox() {
        return de.fromPoints(this.p1, this.p2);
    }
    area() {
        return this.p1.dist(this.p2);
    }
    clone() {
        return new n(this.p1, this.p2);
    }
}, de = class n {
    static{
        i(this, "Rect");
    }
    pos;
    width;
    height;
    constructor(e, o, c){
        this.pos = e.clone(), this.width = o, this.height = c;
    }
    static fromPoints(e, o) {
        return new n(e.clone(), o.x - e.x, o.y - e.y);
    }
    center() {
        return new v(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
        return [
            this.pos,
            this.pos.add(this.width, 0),
            this.pos.add(this.width, this.height),
            this.pos.add(0, this.height)
        ];
    }
    transform(e) {
        return new Ke(this.points().map((o)=>e.multVec2(o)));
    }
    bbox() {
        return this.clone();
    }
    area() {
        return this.width * this.height;
    }
    clone() {
        return new n(this.pos.clone(), this.width, this.height);
    }
    distToPoint(e) {
        return Math.sqrt(this.sdistToPoint(e));
    }
    sdistToPoint(e) {
        let o = this.pos, c = this.pos.add(this.width, this.height), g = Math.max(o.x - e.x, 0, e.x - c.x), m = Math.max(o.y - e.y, 0, e.y - c.y);
        return g * g + m * m;
    }
}, yt = class n {
    static{
        i(this, "Circle");
    }
    center;
    radius;
    constructor(e, o){
        this.center = e.clone(), this.radius = o;
    }
    transform(e) {
        return new Fn(this.center, this.radius, this.radius).transform(e);
    }
    bbox() {
        return de.fromPoints(this.center.sub(T(this.radius)), this.center.add(T(this.radius)));
    }
    area() {
        return this.radius * this.radius * Math.PI;
    }
    clone() {
        return new n(this.center, this.radius);
    }
}, Fn = class n {
    static{
        i(this, "Ellipse");
    }
    center;
    radiusX;
    radiusY;
    constructor(e, o, c){
        this.center = e.clone(), this.radiusX = o, this.radiusY = c;
    }
    transform(e) {
        return new n(e.multVec2(this.center), e.m[0] * this.radiusX, e.m[5] * this.radiusY);
    }
    bbox() {
        return de.fromPoints(this.center.sub(T(this.radiusX, this.radiusY)), this.center.add(T(this.radiusX, this.radiusY)));
    }
    area() {
        return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
        return new n(this.center, this.radiusX, this.radiusY);
    }
}, Ke = class n {
    static{
        i(this, "Polygon");
    }
    pts;
    constructor(e){
        if (e.length < 3) throw new Error("Polygons should have at least 3 vertices");
        this.pts = e;
    }
    transform(e) {
        return new n(this.pts.map((o)=>e.multVec2(o)));
    }
    bbox() {
        let e = T(Number.MAX_VALUE), o = T(-Number.MAX_VALUE);
        for (let c of this.pts)e.x = Math.min(e.x, c.x), o.x = Math.max(o.x, c.x), e.y = Math.min(e.y, c.y), o.y = Math.max(o.y, c.y);
        return de.fromPoints(e, o);
    }
    area() {
        let e = 0, o = this.pts.length;
        for(let c = 0; c < o; c++){
            let g = this.pts[c], m = this.pts[(c + 1) % o];
            e += g.x * m.y * .5, e -= m.x * g.y * .5;
        }
        return Math.abs(e);
    }
    clone() {
        return new n(this.pts.map((e)=>e.clone()));
    }
};
function Or(n, e) {
    let o = Number.MAX_VALUE, c = T(0);
    for (let g of [
        n,
        e
    ])for(let m = 0; m < g.pts.length; m++){
        let P = g.pts[m], j = g.pts[(m + 1) % g.pts.length].sub(P).normal().unit(), y = Number.MAX_VALUE, X = -Number.MAX_VALUE;
        for(let K = 0; K < n.pts.length; K++){
            let Q = n.pts[K].dot(j);
            y = Math.min(y, Q), X = Math.max(X, Q);
        }
        let S = Number.MAX_VALUE, q = -Number.MAX_VALUE;
        for(let K = 0; K < e.pts.length; K++){
            let Q = e.pts[K].dot(j);
            S = Math.min(S, Q), q = Math.max(q, Q);
        }
        let E = Math.min(X, q) - Math.max(y, S);
        if (E < 0) return null;
        if (E < Math.abs(o)) {
            let K = q - y, Q = S - X;
            o = Math.abs(K) < Math.abs(Q) ? K : Q, c = j.scale(o);
        }
    }
    return c;
}
i(Or, "sat");
var Ut = class extends Map {
    static{
        i(this, "Registry");
    }
    lastID;
    constructor(...e){
        super(...e), this.lastID = 0;
    }
    push(e) {
        let o = this.lastID;
        return this.set(o, e), this.lastID++, o;
    }
    pushd(e) {
        let o = this.push(e);
        return ()=>this.delete(o);
    }
}, ke = class n {
    static{
        i(this, "EventController");
    }
    paused = !1;
    cancel;
    constructor(e){
        this.cancel = e;
    }
    static join(e) {
        let o = new n(()=>e.forEach((c)=>c.cancel()));
        return Object.defineProperty(o, "paused", {
            get: ()=>e[0].paused,
            set: (c)=>e.forEach((g)=>g.paused = c)
        }), o.paused = !1, o;
    }
}, be = class {
    static{
        i(this, "Event");
    }
    handlers = new Ut;
    add(e) {
        let o = this.handlers.pushd((...g)=>{
            c.paused || e(...g);
        }), c = new ke(o);
        return c;
    }
    addOnce(e) {
        let o = this.add((...c)=>{
            o.cancel(), e(...c);
        });
        return o;
    }
    next() {
        return new Promise((e)=>this.addOnce(e));
    }
    trigger(...e) {
        this.handlers.forEach((o)=>o(...e));
    }
    numListeners() {
        return this.handlers.size;
    }
    clear() {
        this.handlers.clear();
    }
}, Ne = class {
    static{
        i(this, "EventHandler");
    }
    handlers = {};
    on(e, o) {
        return this.handlers[e] || (this.handlers[e] = new be), this.handlers[e].add(o);
    }
    onOnce(e, o) {
        let c = this.on(e, (...g)=>{
            c.cancel(), o(...g);
        });
        return c;
    }
    next(e) {
        return new Promise((o)=>{
            this.onOnce(e, (...c)=>o(c[0]));
        });
    }
    trigger(e, ...o) {
        this.handlers[e] && this.handlers[e].trigger(...o);
    }
    remove(e) {
        delete this.handlers[e];
    }
    clear() {
        this.handlers = {};
    }
    numListeners(e) {
        return this.handlers[e]?.numListeners() ?? 0;
    }
};
function Wt(n, e) {
    if (n === e) return !0;
    let o = typeof n, c = typeof e;
    if (o !== c) return !1;
    if (o === "object" && c === "object" && n !== null && e !== null) {
        if (Array.isArray(n) !== Array.isArray(e)) return !1;
        let g = Object.keys(n), m = Object.keys(e);
        if (g.length !== m.length) return !1;
        for (let P of g){
            let I = n[P], j = e[P];
            if (!Wt(I, j)) return !1;
        }
        return !0;
    }
    return !1;
}
i(Wt, "deepEq");
function Si(n) {
    let e = window.atob(n), o = e.length, c = new Uint8Array(o);
    for(let g = 0; g < o; g++)c[g] = e.charCodeAt(g);
    return c.buffer;
}
i(Si, "base64ToArrayBuffer");
function Pr(n) {
    return Si(n.split(",")[1]);
}
i(Pr, "dataURLToArrayBuffer");
function Xt(n, e) {
    let o = document.createElement("a");
    o.href = e, o.download = n, o.click();
}
i(Xt, "download");
function kn(n, e) {
    Xt(n, "data:text/plain;charset=utf-8," + e);
}
i(kn, "downloadText");
function Dr(n, e) {
    kn(n, JSON.stringify(e));
}
i(Dr, "downloadJSON");
function Nn(n, e) {
    let o = URL.createObjectURL(e);
    Xt(n, o), URL.revokeObjectURL(o);
}
i(Nn, "downloadBlob");
var jn = i((n)=>n.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
var Mr = i((n)=>n.split(".").slice(0, -1).join("."), "getFileName");
function Ee(n, e) {
    return (...o)=>{
        let c = o.length;
        if (c === n.length) return n(...o);
        if (c === e.length) return e(...o);
    };
}
i(Ee, "overload2");
var Gr = (()=>{
    let n = 0;
    return ()=>n++;
})(), Br = i((n)=>n instanceof Error ? n.message : String(n), "getErrorMessage");
var Yt = class {
    static{
        i(this, "BinaryHeap");
    }
    _items;
    _compareFn;
    constructor(e = (o, c)=>o < c){
        this._compareFn = e, this._items = [];
    }
    insert(e) {
        this._items.push(e), this.moveUp(this._items.length - 1);
    }
    remove() {
        if (this._items.length === 0) return null;
        let e = this._items[0], o = this._items.pop();
        return this._items.length !== 0 && (this._items[0] = o, this.moveDown(0)), e;
    }
    clear() {
        this._items.splice(0, this._items.length);
    }
    moveUp(e) {
        for(; e > 0;){
            let o = Math.floor((e - 1) / 2);
            if (!this._compareFn(this._items[e], this._items[o]) && this._items[e] >= this._items[o]) break;
            this.swap(e, o), e = o;
        }
    }
    moveDown(e) {
        for(; e < Math.floor(this._items.length / 2);){
            let o = 2 * e + 1;
            if (o < this._items.length - 1 && !this._compareFn(this._items[o], this._items[o + 1]) && ++o, this._compareFn(this._items[e], this._items[o])) break;
            this.swap(e, o), e = o;
        }
    }
    swap(e, o) {
        [this._items[e], this._items[o]] = [
            this._items[o],
            this._items[e]
        ];
    }
    get length() {
        return this._items.length;
    }
};
var Ci = Object.freeze([
    776,
    2359,
    2367,
    2984,
    3007,
    3021,
    3633,
    3635,
    3648,
    3657,
    4352,
    4449,
    4520
]);
function Fr(n) {
    if (typeof n != "string") throw new TypeError("string cannot be undefined or null");
    let e = [], o = 0, c = 0;
    for(; o < n.length;){
        if (c += Ai(o + c, n), Gi(n[o + c]) && c++, Pi(n[o + c]) && c++, Di(n[o + c]) && c++, Bi(n[o + c])) {
            c++;
            continue;
        }
        e.push(n.substring(o, o + c)), o += c, c = 0;
    }
    return e;
}
i(Fr, "runes");
function Ai(n, e) {
    let o = e[n];
    if (!Ti(o) || n === e.length - 1) return 1;
    let c = o + e[n + 1], g = e.substring(n + 2, n + 5);
    return Rr(c) && Rr(g) ? 4 : Oi(c) && Mi(g) ? e.slice(n).indexOf(String.fromCodePoint(917631)) + 2 : Ri(g) ? 4 : 2;
}
i(Ai, "nextUnits");
function Ti(n) {
    return n && tt(n[0].charCodeAt(0), 55296, 56319);
}
i(Ti, "isFirstOfSurrogatePair");
function Rr(n) {
    return tt(Hn(n), 127462, 127487);
}
i(Rr, "isRegionalIndicator");
function Oi(n) {
    return tt(Hn(n), 127988, 127988);
}
i(Oi, "isSubdivisionFlag");
function Ri(n) {
    return tt(Hn(n), 127995, 127999);
}
i(Ri, "isFitzpatrickModifier");
function Pi(n) {
    return typeof n == "string" && tt(n.charCodeAt(0), 65024, 65039);
}
i(Pi, "isVariationSelector");
function Di(n) {
    return typeof n == "string" && tt(n.charCodeAt(0), 8400, 8447);
}
i(Di, "isDiacriticalMark");
function Mi(n) {
    let e = n.codePointAt(0);
    return typeof n == "string" && typeof e == "number" && tt(e, 917504, 917631);
}
i(Mi, "isSupplementarySpecialpurposePlane");
function Gi(n) {
    return typeof n == "string" && Ci.includes(n.charCodeAt(0));
}
i(Gi, "isGrapheme");
function Bi(n) {
    return typeof n == "string" && n.charCodeAt(0) === 8205;
}
i(Bi, "isZeroWidthJoiner");
function Hn(n) {
    let e = n.charCodeAt(0) - 55296, o = n.charCodeAt(1) - 56320;
    return (e << 10) + o + 65536;
}
i(Hn, "codePointFromSurrogatePair");
function tt(n, e, o) {
    return n >= e && n <= o;
}
i(tt, "betweenInclusive");
var qn = {
    "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "6": "ltrigger",
            "7": "rtrigger",
            "8": "select",
            "9": "start",
            "10": "lstick",
            "11": "rstick",
            "12": "dpad-up",
            "13": "dpad-down",
            "14": "dpad-left",
            "15": "dpad-right",
            "16": "home",
            "17": "capture"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            },
            right: {
                x: 2,
                y: 3
            }
        }
    },
    "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "9": "select",
            "10": "lstick",
            "16": "start"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            }
        }
    },
    "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "9": "start",
            "10": "lstick",
            "16": "select"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            }
        }
    },
    "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "6": "ltrigger",
            "7": "rtrigger",
            "8": "select",
            "9": "start",
            "10": "lstick",
            "11": "rstick",
            "12": "dpad-up",
            "13": "dpad-down",
            "14": "dpad-left",
            "15": "dpad-right",
            "16": "home",
            "17": "capture"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            },
            right: {
                x: 2,
                y: 3
            }
        }
    },
    default: {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "6": "ltrigger",
            "7": "rtrigger",
            "8": "select",
            "9": "start",
            "10": "lstick",
            "11": "rstick",
            "12": "dpad-up",
            "13": "dpad-down",
            "14": "dpad-left",
            "15": "dpad-right",
            "16": "home"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            },
            right: {
                x: 2,
                y: 3
            }
        }
    }
};
var at = class {
    static{
        i(this, "ButtonState");
    }
    pressed = new Set([]);
    pressedRepeat = new Set([]);
    released = new Set([]);
    down = new Set([]);
    update() {
        this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(e) {
        this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
    }
    pressRepeat(e) {
        this.pressedRepeat.add(e);
    }
    release(e) {
        this.down.delete(e), this.pressed.delete(e), this.released.add(e);
    }
}, $n = class {
    static{
        i(this, "GamepadState");
    }
    buttonState = new at;
    stickState = new Map;
}, zn = class {
    static{
        i(this, "FPSCounter");
    }
    dts = [];
    timer = 0;
    fps = 0;
    tick(e) {
        this.dts.push(e), this.timer += e, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((o, c)=>o + c) / this.dts.length)), this.dts = []);
    }
}, Ir = i((n)=>{
    if (!n.canvas) throw new Error("Please provide a canvas");
    let e = {
        canvas: n.canvas,
        loopID: null,
        stopped: !1,
        dt: 0,
        time: 0,
        realTime: 0,
        fpsCounter: new zn,
        timeScale: 1,
        skipTime: !1,
        numFrames: 0,
        mousePos: new v(0),
        mouseDeltaPos: new v(0),
        keyState: new at,
        mouseState: new at,
        mergedGamepadState: new $n,
        gamepadStates: new Map,
        gamepads: [],
        charInputted: [],
        isMouseMoved: !1,
        lastWidth: n.canvas.offsetWidth,
        lastHeight: n.canvas.offsetHeight,
        events: new Ne
    };
    function o() {
        return e.dt * e.timeScale;
    }
    i(o, "dt");
    function c() {
        return e.time;
    }
    i(c, "time");
    function g() {
        return e.fpsCounter.fps;
    }
    i(g, "fps");
    function m() {
        return e.numFrames;
    }
    i(m, "numFrames");
    function P() {
        return e.canvas.toDataURL();
    }
    i(P, "screenshot");
    function I(l) {
        e.canvas.style.cursor = l;
    }
    i(I, "setCursor");
    function j() {
        return e.canvas.style.cursor;
    }
    i(j, "getCursor");
    function y(l) {
        if (l) try {
            let x = e.canvas.requestPointerLock();
            x.catch && x.catch((R)=>console.error(R));
        } catch (x) {
            console.error(x);
        }
        else document.exitPointerLock();
    }
    i(y, "setCursorLocked");
    function X() {
        return !!document.pointerLockElement;
    }
    i(X, "isCursorLocked");
    function S(l) {
        l.requestFullscreen ? l.requestFullscreen() : l.webkitRequestFullscreen && l.webkitRequestFullscreen();
    }
    i(S, "enterFullscreen");
    function q() {
        document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    i(q, "exitFullscreen");
    function E() {
        return document.fullscreenElement || document.webkitFullscreenElement;
    }
    i(E, "getFullscreenElement");
    function K(l = !0) {
        l ? S(e.canvas) : q();
    }
    i(K, "setFullscreen");
    function Q() {
        return !!E();
    }
    i(Q, "isFullscreen");
    function te() {
        e.stopped = !0;
        for(let l in se)e.canvas.removeEventListener(l, se[l]);
        for(let l in le)document.removeEventListener(l, le[l]);
        for(let l in ae)window.removeEventListener(l, ae[l]);
        ge.disconnect();
    }
    i(te, "quit");
    function k(l) {
        e.loopID !== null && cancelAnimationFrame(e.loopID);
        let x = 0, R = i((L)=>{
            if (e.stopped) return;
            if (document.visibilityState !== "visible") {
                e.loopID = requestAnimationFrame(R);
                return;
            }
            let he = L / 1e3, z = he - e.realTime, Oe = n.maxFPS ? 1 / n.maxFPS : 0;
            e.realTime = he, x += z, x > Oe && (e.skipTime || (e.dt = x, e.time += o(), e.fpsCounter.tick(e.dt)), x = 0, e.skipTime = !1, e.numFrames++, ft(), l(), vn()), e.loopID = requestAnimationFrame(R);
        }, "frame");
        R(0);
    }
    i(k, "run");
    function pe() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    i(pe, "isTouchscreen");
    function C() {
        return e.mousePos.clone();
    }
    i(C, "mousePos");
    function Ae() {
        return e.mouseDeltaPos.clone();
    }
    i(Ae, "mouseDeltaPos");
    function $(l = "left") {
        return e.mouseState.pressed.has(l);
    }
    i($, "isMousePressed");
    function Te(l = "left") {
        return e.mouseState.down.has(l);
    }
    i(Te, "isMouseDown");
    function ye(l = "left") {
        return e.mouseState.released.has(l);
    }
    i(ye, "isMouseReleased");
    function Se() {
        return e.isMouseMoved;
    }
    i(Se, "isMouseMoved");
    function st(l) {
        return l === void 0 ? e.keyState.pressed.size > 0 : e.keyState.pressed.has(l);
    }
    i(st, "isKeyPressed");
    function on(l) {
        return l === void 0 ? e.keyState.pressedRepeat.size > 0 : e.keyState.pressedRepeat.has(l);
    }
    i(on, "isKeyPressedRepeat");
    function Tt(l) {
        return l === void 0 ? e.keyState.down.size > 0 : e.keyState.down.has(l);
    }
    i(Tt, "isKeyDown");
    function Ot(l) {
        return l === void 0 ? e.keyState.released.size > 0 : e.keyState.released.has(l);
    }
    i(Ot, "isKeyReleased");
    function Rt(l) {
        return l === void 0 ? e.mergedGamepadState.buttonState.pressed.size > 0 : e.mergedGamepadState.buttonState.pressed.has(l);
    }
    i(Rt, "isGamepadButtonPressed");
    function Ye(l) {
        return l === void 0 ? e.mergedGamepadState.buttonState.down.size > 0 : e.mergedGamepadState.buttonState.down.has(l);
    }
    i(Ye, "isGamepadButtonDown");
    function an(l) {
        return l === void 0 ? e.mergedGamepadState.buttonState.released.size > 0 : e.mergedGamepadState.buttonState.released.has(l);
    }
    i(an, "isGamepadButtonReleased");
    function un(l) {
        return e.events.on("resize", l);
    }
    i(un, "onResize");
    let cn = Ee((l)=>e.events.on("keyDown", l), (l, x)=>e.events.on("keyDown", (R)=>R === l && x(l))), hn = Ee((l)=>e.events.on("keyPress", l), (l, x)=>e.events.on("keyPress", (R)=>R === l && x(l))), ln = Ee((l)=>e.events.on("keyPressRepeat", l), (l, x)=>e.events.on("keyPressRepeat", (R)=>R === l && x(l))), dn = Ee((l)=>e.events.on("keyRelease", l), (l, x)=>e.events.on("keyRelease", (R)=>R === l && x(l))), Pt = Ee((l)=>e.events.on("mouseDown", (x)=>l(x)), (l, x)=>e.events.on("mouseDown", (R)=>R === l && x(R))), Dt = Ee((l)=>e.events.on("mousePress", (x)=>l(x)), (l, x)=>e.events.on("mousePress", (R)=>R === l && x(R))), Mt = Ee((l)=>e.events.on("mouseRelease", (x)=>l(x)), (l, x)=>e.events.on("mouseRelease", (R)=>R === l && x(R)));
    function Gt(l) {
        return e.events.on("mouseMove", ()=>l(C(), Ae()));
    }
    i(Gt, "onMouseMove");
    function Bt(l) {
        return e.events.on("charInput", l);
    }
    i(Bt, "onCharInput");
    function fn(l) {
        return e.events.on("touchStart", l);
    }
    i(fn, "onTouchStart");
    function ct(l) {
        return e.events.on("touchMove", l);
    }
    i(ct, "onTouchMove");
    function mn(l) {
        return e.events.on("touchEnd", l);
    }
    i(mn, "onTouchEnd");
    function pn(l) {
        return e.events.on("scroll", l);
    }
    i(pn, "onScroll");
    function Ft(l) {
        return e.events.on("hide", l);
    }
    i(Ft, "onHide");
    function gn(l) {
        return e.events.on("show", l);
    }
    i(gn, "onShow");
    function It(l, x) {
        if (typeof l == "function") return e.events.on("gamepadButtonDown", l);
        if (typeof l == "string" && typeof x == "function") return e.events.on("gamepadButtonDown", (R)=>R === l && x(l));
    }
    i(It, "onGamepadButtonDown");
    function Lt(l, x) {
        if (typeof l == "function") return e.events.on("gamepadButtonPress", l);
        if (typeof l == "string" && typeof x == "function") return e.events.on("gamepadButtonPress", (R)=>R === l && x(l));
    }
    i(Lt, "onGamepadButtonPress");
    function wn(l, x) {
        if (typeof l == "function") return e.events.on("gamepadButtonRelease", l);
        if (typeof l == "string" && typeof x == "function") return e.events.on("gamepadButtonRelease", (R)=>R === l && x(l));
    }
    i(wn, "onGamepadButtonRelease");
    function ht(l, x) {
        return e.events.on("gamepadStick", (R, L)=>R === l && x(L));
    }
    i(ht, "onGamepadStick");
    function bn(l) {
        e.events.on("gamepadConnect", l);
    }
    i(bn, "onGamepadConnect");
    function lt(l) {
        e.events.on("gamepadDisconnect", l);
    }
    i(lt, "onGamepadDisconnect");
    function Pe(l) {
        return e.mergedGamepadState.stickState.get(l) || new v(0);
    }
    i(Pe, "getGamepadStick");
    function dt() {
        return [
            ...e.charInputted
        ];
    }
    i(dt, "charInputted");
    function Vt() {
        return [
            ...e.gamepads
        ];
    }
    i(Vt, "getGamepads");
    function ft() {
        e.events.trigger("input"), e.keyState.down.forEach((l)=>e.events.trigger("keyDown", l)), e.mouseState.down.forEach((l)=>e.events.trigger("mouseDown", l)), He();
    }
    i(ft, "processInput");
    function vn() {
        e.keyState.update(), e.mouseState.update(), e.mergedGamepadState.buttonState.update(), e.mergedGamepadState.stickState.forEach((l, x)=>{
            e.mergedGamepadState.stickState.set(x, new v(0));
        }), e.charInputted = [], e.isMouseMoved = !1, e.gamepadStates.forEach((l)=>{
            l.buttonState.update(), l.stickState.forEach((x, R)=>{
                l.stickState.set(R, new v(0));
            });
        });
    }
    i(vn, "resetInput");
    function _t(l) {
        let x = {
            index: l.index,
            isPressed: (R)=>e.gamepadStates.get(l.index).buttonState.pressed.has(R),
            isDown: (R)=>e.gamepadStates.get(l.index).buttonState.down.has(R),
            isReleased: (R)=>e.gamepadStates.get(l.index).buttonState.released.has(R),
            getStick: (R)=>e.gamepadStates.get(l.index).stickState.get(R)
        };
        return e.gamepads.push(x), e.gamepadStates.set(l.index, {
            buttonState: new at,
            stickState: new Map([
                [
                    "left",
                    new v(0)
                ],
                [
                    "right",
                    new v(0)
                ]
            ])
        }), x;
    }
    i(_t, "registerGamepad");
    function ne(l) {
        e.gamepads = e.gamepads.filter((x)=>x.index !== l.index), e.gamepadStates.delete(l.index);
    }
    i(ne, "removeGamepad");
    function He() {
        for (let l of navigator.getGamepads())l && !e.gamepadStates.has(l.index) && _t(l);
        for (let l of e.gamepads){
            let x = navigator.getGamepads()[l.index], L = (n.gamepads ?? {})[x.id] ?? qn[x.id] ?? qn.default, he = e.gamepadStates.get(l.index);
            for(let z = 0; z < x.buttons.length; z++)x.buttons[z].pressed ? (he.buttonState.down.has(L.buttons[z]) || (e.mergedGamepadState.buttonState.press(L.buttons[z]), he.buttonState.press(L.buttons[z]), e.events.trigger("gamepadButtonPress", L.buttons[z])), e.events.trigger("gamepadButtonDown", L.buttons[z])) : he.buttonState.down.has(L.buttons[z]) && (e.mergedGamepadState.buttonState.release(L.buttons[z]), he.buttonState.release(L.buttons[z]), e.events.trigger("gamepadButtonRelease", L.buttons[z]));
            for(let z in L.sticks){
                let Oe = L.sticks[z], $e = new v(x.axes[Oe.x], x.axes[Oe.y]);
                he.stickState.set(z, $e), e.mergedGamepadState.stickState.set(z, $e), e.events.trigger("gamepadStick", z, $e);
            }
        }
    }
    i(He, "processGamepad");
    let se = {}, le = {}, ae = {}, Be = n.pixelDensity || window.devicePixelRatio || 1;
    se.mousemove = (l)=>{
        let x = new v(l.offsetX, l.offsetY), R = new v(l.movementX, l.movementY);
        if (Q()) {
            let L = e.canvas.width / Be, he = e.canvas.height / Be, z = window.innerWidth, Oe = window.innerHeight, $e = z / Oe, kt = L / he;
            if ($e > kt) {
                let De = Oe / he, Ce = (z - L * De) / 2;
                x.x = _e(l.offsetX - Ce, 0, L * De, 0, L), x.y = _e(l.offsetY, 0, he * De, 0, he);
            } else {
                let De = z / L, Ce = (Oe - he * De) / 2;
                x.x = _e(l.offsetX, 0, L * De, 0, L), x.y = _e(l.offsetY - Ce, 0, he * De, 0, he);
            }
        }
        e.events.onOnce("input", ()=>{
            e.isMouseMoved = !0, e.mousePos = x, e.mouseDeltaPos = R, e.events.trigger("mouseMove");
        });
    };
    let We = [
        "left",
        "middle",
        "right",
        "back",
        "forward"
    ];
    se.mousedown = (l)=>{
        e.events.onOnce("input", ()=>{
            let x = We[l.button];
            x && (e.mouseState.press(x), e.events.trigger("mousePress", x));
        });
    }, se.mouseup = (l)=>{
        e.events.onOnce("input", ()=>{
            let x = We[l.button];
            x && (e.mouseState.release(x), e.events.trigger("mouseRelease", x));
        });
    };
    let yn = new Set([
        " ",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab"
    ]), qe = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        " ": "space"
    };
    se.keydown = (l)=>{
        yn.has(l.key) && l.preventDefault(), e.events.onOnce("input", ()=>{
            let x = qe[l.key] || l.key.toLowerCase();
            x.length === 1 ? (e.events.trigger("charInput", x), e.charInputted.push(x)) : x === "space" && (e.events.trigger("charInput", " "), e.charInputted.push(" ")), l.repeat ? (e.keyState.pressRepeat(x), e.events.trigger("keyPressRepeat", x)) : (e.keyState.press(x), e.events.trigger("keyPressRepeat", x), e.events.trigger("keyPress", x));
        });
    }, se.keyup = (l)=>{
        e.events.onOnce("input", ()=>{
            let x = qe[l.key] || l.key.toLowerCase();
            e.keyState.release(x), e.events.trigger("keyRelease", x);
        });
    }, se.touchstart = (l)=>{
        l.preventDefault(), e.events.onOnce("input", ()=>{
            let x = [
                ...l.changedTouches
            ], R = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.press("left"), e.events.trigger("mousePress", "left")), x.forEach((L)=>{
                e.events.trigger("touchStart", new v(L.clientX - R.x, L.clientY - R.y), L);
            });
        });
    }, se.touchmove = (l)=>{
        l.preventDefault(), e.events.onOnce("input", ()=>{
            let x = [
                ...l.changedTouches
            ], R = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.events.trigger("mouseMove")), x.forEach((L)=>{
                e.events.trigger("touchMove", new v(L.clientX - R.x, L.clientY - R.y), L);
            });
        });
    }, se.touchend = (l)=>{
        e.events.onOnce("input", ()=>{
            let x = [
                ...l.changedTouches
            ], R = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((L)=>{
                e.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
            });
        });
    }, se.touchcancel = (l)=>{
        e.events.onOnce("input", ()=>{
            let x = [
                ...l.changedTouches
            ], R = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((L)=>{
                e.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
            });
        });
    }, se.wheel = (l)=>{
        l.preventDefault(), e.events.onOnce("input", ()=>{
            e.events.trigger("scroll", new v(l.deltaX, l.deltaY));
        });
    }, se.contextmenu = (l)=>l.preventDefault(), le.visibilitychange = ()=>{
        document.visibilityState === "visible" ? (e.skipTime = !0, e.events.trigger("show")) : e.events.trigger("hide");
    }, ae.gamepadconnected = (l)=>{
        let x = _t(l.gamepad);
        e.events.onOnce("input", ()=>{
            e.events.trigger("gamepadConnect", x);
        });
    }, ae.gamepaddisconnected = (l)=>{
        let x = Vt().filter((R)=>R.index === l.gamepad.index)[0];
        ne(l.gamepad), e.events.onOnce("input", ()=>{
            e.events.trigger("gamepadDisconnect", x);
        });
    };
    for(let l in se)e.canvas.addEventListener(l, se[l]);
    for(let l in le)document.addEventListener(l, le[l]);
    for(let l in ae)window.addEventListener(l, ae[l]);
    let ge = new ResizeObserver((l)=>{
        for (let x of l)if (x.target === e.canvas) {
            if (e.lastWidth === e.canvas.offsetWidth && e.lastHeight === e.canvas.offsetHeight) return;
            e.lastWidth = e.canvas.offsetWidth, e.lastHeight = e.canvas.offsetHeight, e.events.onOnce("input", ()=>{
                e.events.trigger("resize");
            });
        }
    });
    return ge.observe(e.canvas), {
        dt: o,
        time: c,
        run: k,
        canvas: e.canvas,
        fps: g,
        numFrames: m,
        quit: te,
        setFullscreen: K,
        isFullscreen: Q,
        setCursor: I,
        screenshot: P,
        getGamepads: Vt,
        getCursor: j,
        setCursorLocked: y,
        isCursorLocked: X,
        isTouchscreen: pe,
        mousePos: C,
        mouseDeltaPos: Ae,
        isKeyDown: Tt,
        isKeyPressed: st,
        isKeyPressedRepeat: on,
        isKeyReleased: Ot,
        isMouseDown: Te,
        isMousePressed: $,
        isMouseReleased: ye,
        isMouseMoved: Se,
        isGamepadButtonPressed: Rt,
        isGamepadButtonDown: Ye,
        isGamepadButtonReleased: an,
        getGamepadStick: Pe,
        charInputted: dt,
        onResize: un,
        onKeyDown: cn,
        onKeyPress: hn,
        onKeyPressRepeat: ln,
        onKeyRelease: dn,
        onMouseDown: Pt,
        onMousePress: Dt,
        onMouseRelease: Mt,
        onMouseMove: Gt,
        onCharInput: Bt,
        onTouchStart: fn,
        onTouchMove: ct,
        onTouchEnd: mn,
        onScroll: pn,
        onHide: Ft,
        onShow: gn,
        onGamepadButtonDown: It,
        onGamepadButtonPress: Lt,
        onGamepadButtonRelease: wn,
        onGamepadStick: ht,
        onGamepadConnect: bn,
        onGamepadDisconnect: lt,
        events: e.events
    };
}, "default");
var Re = class n {
    static{
        i(this, "Texture");
    }
    ctx;
    src = null;
    glTex;
    width;
    height;
    constructor(e, o, c, g = {}){
        this.ctx = e;
        let m = e.gl;
        this.glTex = e.gl.createTexture(), e.onDestroy(()=>this.free()), this.width = o, this.height = c;
        let P = {
            linear: m.LINEAR,
            nearest: m.NEAREST
        }[g.filter ?? e.opts.texFilter] ?? m.NEAREST, I = {
            repeat: m.REPEAT,
            clampToEadge: m.CLAMP_TO_EDGE
        }[g.wrap] ?? m.CLAMP_TO_EDGE;
        this.bind(), o && c && m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, o, c, 0, m.RGBA, m.UNSIGNED_BYTE, null), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, P), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, P), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, I), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, I), this.unbind();
    }
    static fromImage(e, o, c = {}) {
        let g = new n(e, o.width, o.height, c);
        return g.update(o), g.src = o, g;
    }
    update(e, o = 0, c = 0) {
        let g = this.ctx.gl;
        this.bind(), g.texSubImage2D(g.TEXTURE_2D, 0, o, c, g.RGBA, g.UNSIGNED_BYTE, e), this.unbind();
    }
    bind() {
        this.ctx.pushTexture2D(this.glTex);
    }
    unbind() {
        this.ctx.popTexture2D();
    }
    free() {
        this.ctx.gl.deleteTexture(this.glTex);
    }
}, rt = class {
    static{
        i(this, "FrameBuffer");
    }
    ctx;
    tex;
    glFramebuffer;
    glRenderbuffer;
    constructor(e, o, c, g = {}){
        this.ctx = e;
        let m = e.gl;
        e.onDestroy(()=>this.free()), this.tex = new Re(e, o, c, g), this.glFramebuffer = m.createFramebuffer(), this.glRenderbuffer = m.createRenderbuffer(), this.bind(), m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, o, c), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, m.TEXTURE_2D, this.tex.glTex, 0), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, this.glRenderbuffer), this.unbind();
    }
    get width() {
        return this.tex.width;
    }
    get height() {
        return this.tex.height;
    }
    toImageData() {
        let e = this.ctx.gl, o = new Uint8ClampedArray(this.width * this.height * 4);
        this.bind(), e.readPixels(0, 0, this.width, this.height, e.RGBA, e.UNSIGNED_BYTE, o), this.unbind();
        let c = this.width * 4, g = new Uint8Array(c);
        for(let m = 0; m < (this.height / 2 | 0); m++){
            let P = m * c, I = (this.height - m - 1) * c;
            g.set(o.subarray(P, P + c)), o.copyWithin(P, I, I + c), o.set(g, I);
        }
        return new ImageData(o, this.width, this.height);
    }
    toDataURL() {
        let e = document.createElement("canvas"), o = e.getContext("2d");
        return e.width = this.width, e.height = this.height, o.putImageData(this.toImageData(), 0, 0), e.toDataURL();
    }
    draw(e) {
        this.bind(), e(), this.unbind();
    }
    bind() {
        this.ctx.pushFramebuffer(this.glFramebuffer), this.ctx.pushRenderbuffer(this.glRenderbuffer), this.ctx.pushViewport({
            x: 0,
            y: 0,
            w: this.width,
            h: this.height
        });
    }
    unbind() {
        this.ctx.popFramebuffer(), this.ctx.popRenderbuffer(), this.ctx.popViewport();
    }
    free() {
        let e = this.ctx.gl;
        e.deleteFramebuffer(this.glFramebuffer), e.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
    }
}, Jt = class {
    static{
        i(this, "Shader");
    }
    ctx;
    glProgram;
    constructor(e, o, c, g){
        this.ctx = e, e.onDestroy(()=>this.free());
        let m = e.gl, P = m.createShader(m.VERTEX_SHADER), I = m.createShader(m.FRAGMENT_SHADER);
        m.shaderSource(P, o), m.shaderSource(I, c), m.compileShader(P), m.compileShader(I);
        let j = m.createProgram();
        if (this.glProgram = j, m.attachShader(j, P), m.attachShader(j, I), g.forEach((y, X)=>m.bindAttribLocation(j, X, y)), m.linkProgram(j), !m.getProgramParameter(j, m.LINK_STATUS)) {
            let y = m.getShaderInfoLog(P);
            if (y) throw new Error("VERTEX SHADER " + y);
            let X = m.getShaderInfoLog(I);
            if (X) throw new Error("FRAGMENT SHADER " + X);
        }
        m.deleteShader(P), m.deleteShader(I);
    }
    bind() {
        this.ctx.pushProgram(this.glProgram);
    }
    unbind() {
        this.ctx.popProgram();
    }
    send(e) {
        let o = this.ctx.gl;
        for(let c in e){
            let g = e[c], m = o.getUniformLocation(this.glProgram, c);
            typeof g == "number" ? o.uniform1f(m, g) : g instanceof Ue ? o.uniformMatrix4fv(m, !1, new Float32Array(g.m)) : g instanceof W ? o.uniform3f(m, g.r, g.g, g.b) : g instanceof v && o.uniform2f(m, g.x, g.y);
        }
    }
    free() {
        this.ctx.gl.deleteProgram(this.glProgram);
    }
}, Qt = class {
    static{
        i(this, "BatchRenderer");
    }
    ctx;
    glVBuf;
    glIBuf;
    vqueue = [];
    iqueue = [];
    stride;
    maxVertices;
    maxIndices;
    vertexFormat;
    numDraws = 0;
    curPrimitive = null;
    curTex = null;
    curShader = null;
    curUniform = {};
    constructor(e, o, c, g){
        let m = e.gl;
        this.vertexFormat = o, this.ctx = e, this.stride = o.reduce((P, I)=>P + I.size, 0), this.maxVertices = c, this.maxIndices = g, this.glVBuf = m.createBuffer(), e.pushArrayBuffer(this.glVBuf), m.bufferData(m.ARRAY_BUFFER, c * 4, m.DYNAMIC_DRAW), e.popArrayBuffer(), this.glIBuf = m.createBuffer(), e.pushElementArrayBuffer(this.glIBuf), m.bufferData(m.ELEMENT_ARRAY_BUFFER, g * 4, m.DYNAMIC_DRAW), e.popElementArrayBuffer();
    }
    push(e, o, c, g, m = null, P = {}) {
        (e !== this.curPrimitive || m !== this.curTex || g !== this.curShader || !Wt(this.curUniform, P) || this.vqueue.length + o.length * this.stride > this.maxVertices || this.iqueue.length + c.length > this.maxIndices) && this.flush();
        let I = this.vqueue.length / this.stride;
        for (let j of o)this.vqueue.push(j);
        for (let j of c)this.iqueue.push(j + I);
        this.curPrimitive = e, this.curShader = g, this.curTex = m, this.curUniform = P;
    }
    flush() {
        if (!this.curPrimitive || !this.curShader || this.vqueue.length === 0 || this.iqueue.length === 0) return;
        let e = this.ctx.gl;
        this.ctx.pushArrayBuffer(this.glVBuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)), this.ctx.pushElementArrayBuffer(this.glIBuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(this.iqueue)), this.ctx.setVertexFormat(this.vertexFormat), this.curShader.bind(), this.curShader.send(this.curUniform), this.curTex?.bind(), e.drawElements(this.curPrimitive, this.iqueue.length, e.UNSIGNED_SHORT, 0), this.curTex?.unbind(), this.curShader.unbind(), this.ctx.popArrayBuffer(), this.ctx.popElementArrayBuffer(), this.vqueue = [], this.iqueue = [], this.numDraws++;
    }
    free() {
        let e = this.ctx.gl;
        e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
    }
};
function nt(n) {
    let e = [], o = i((m)=>{
        e.push(m), n(m);
    }, "push"), c = i(()=>{
        e.pop(), n(g() ?? null);
    }, "pop"), g = i(()=>e[e.length - 1], "cur");
    return [
        o,
        c,
        g
    ];
}
i(nt, "genStack");
function Kn(n, e = {}) {
    let o = [];
    function c($) {
        o.push($);
    }
    i(c, "onDestroy");
    function g() {
        o.forEach(($)=>$()), n.getExtension("WEBGL_lose_context").loseContext();
    }
    i(g, "destroy");
    let m = null;
    function P($) {
        if (Wt($, m)) return;
        m = $;
        let Te = $.reduce((ye, Se)=>ye + Se.size, 0);
        $.reduce((ye, Se, st)=>(n.vertexAttribPointer(st, Se.size, n.FLOAT, !1, Te * 4, ye), n.enableVertexAttribArray(st), ye + Se.size * 4), 0);
    }
    i(P, "setVertexFormat");
    let [I, j] = nt(($)=>n.bindTexture(n.TEXTURE_2D, $)), [y, X] = nt(($)=>n.bindBuffer(n.ARRAY_BUFFER, $)), [S, q] = nt(($)=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, $)), [E, K] = nt(($)=>n.bindFramebuffer(n.FRAMEBUFFER, $)), [Q, te] = nt(($)=>n.bindRenderbuffer(n.RENDERBUFFER, $)), [k, pe] = nt(({ x: $, y: Te, w: ye, h: Se })=>{
        n.viewport($, Te, ye, Se);
    }), [C, Ae] = nt(($)=>n.useProgram($));
    return k({
        x: 0,
        y: 0,
        w: n.drawingBufferWidth,
        h: n.drawingBufferHeight
    }), {
        gl: n,
        opts: e,
        onDestroy: c,
        destroy: g,
        pushTexture2D: I,
        popTexture2D: j,
        pushArrayBuffer: y,
        popArrayBuffer: X,
        pushElementArrayBuffer: S,
        popElementArrayBuffer: q,
        pushFramebuffer: E,
        popFramebuffer: K,
        pushRenderbuffer: Q,
        popRenderbuffer: te,
        pushViewport: k,
        popViewport: pe,
        pushProgram: C,
        popProgram: Ae,
        setVertexFormat: P
    };
}
i(Kn, "initGfx");
var ve = class n {
    static{
        i(this, "Asset");
    }
    loaded = !1;
    data = null;
    error = null;
    onLoadEvents = new be;
    onErrorEvents = new be;
    onFinishEvents = new be;
    constructor(e){
        e.then((o)=>{
            this.data = o, this.onLoadEvents.trigger(o);
        }).catch((o)=>{
            if (this.error = o, this.onErrorEvents.numListeners() > 0) this.onErrorEvents.trigger(o);
            else throw o;
        }).finally(()=>{
            this.onFinishEvents.trigger(), this.loaded = !0;
        });
    }
    static loaded(e) {
        let o = new n(Promise.resolve(e));
        return o.data = e, o.loaded = !0, o;
    }
    onLoad(e) {
        return this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e), this;
    }
    onError(e) {
        return this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e), this;
    }
    onFinish(e) {
        return this.loaded ? e() : this.onFinishEvents.add(e), this;
    }
    then(e) {
        return this.onLoad(e);
    }
    catch(e) {
        return this.onError(e);
    }
    finally(e) {
        return this.onFinish(e);
    }
}, je = class {
    static{
        i(this, "AssetBucket");
    }
    assets = new Map;
    lastUID = 0;
    add(e, o) {
        let c = e ?? this.lastUID++ + "", g = new ve(o);
        return this.assets.set(c, g), g;
    }
    addLoaded(e, o) {
        let c = e ?? this.lastUID++ + "", g = ve.loaded(o);
        return this.assets.set(c, g), g;
    }
    get(e) {
        return this.assets.get(e);
    }
    progress() {
        if (this.assets.size === 0) return 1;
        let e = 0;
        return this.assets.forEach((o)=>{
            o.loaded && e++;
        }), e / this.assets.size;
    }
};
function Yn(n) {
    return fetch(n).then((e)=>{
        if (!e.ok) throw new Error(`Failed to fetch "${n}"`);
        return e;
    });
}
i(Yn, "fetchURL");
function Et(n) {
    return Yn(n).then((e)=>e.json());
}
i(Et, "fetchJSON");
function Lr(n) {
    return Yn(n).then((e)=>e.text());
}
i(Lr, "fetchText");
function Vr(n) {
    return Yn(n).then((e)=>e.arrayBuffer());
}
i(Vr, "fetchArrayBuffer");
function St(n) {
    let e = new Image;
    return e.crossOrigin = "anonymous", e.src = n, new Promise((o, c)=>{
        e.onload = ()=>o(e), e.onerror = ()=>c(new Error(`Failed to load image from "${n}"`));
    });
}
i(St, "loadImg");
var Zt = 2.5949095, _r = 2.70158, kr = 2 * Math.PI / 3, Nr = 2 * Math.PI / 4.5, en = {
    linear: (n)=>n,
    easeInSine: (n)=>1 - Math.cos(n * Math.PI / 2),
    easeOutSine: (n)=>Math.sin(n * Math.PI / 2),
    easeInOutSine: (n)=>-(Math.cos(Math.PI * n) - 1) / 2,
    easeInQuad: (n)=>n * n,
    easeOutQuad: (n)=>1 - (1 - n) * (1 - n),
    easeInOutQuad: (n)=>n < .5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2,
    easeInCubic: (n)=>n * n * n,
    easeOutCubic: (n)=>1 - Math.pow(1 - n, 3),
    easeInOutCubic: (n)=>n < .5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2,
    easeInQuart: (n)=>n * n * n * n,
    easeOutQuart: (n)=>1 - Math.pow(1 - n, 4),
    easeInOutQuart: (n)=>n < .5 ? 8 * n * n * n * n : 1 - Math.pow(-2 * n + 2, 4) / 2,
    easeInQuint: (n)=>n * n * n * n * n,
    easeOutQuint: (n)=>1 - Math.pow(1 - n, 5),
    easeInOutQuint: (n)=>n < .5 ? 16 * n * n * n * n * n : 1 - Math.pow(-2 * n + 2, 5) / 2,
    easeInExpo: (n)=>n === 0 ? 0 : Math.pow(2, 10 * n - 10),
    easeOutExpo: (n)=>n === 1 ? 1 : 1 - Math.pow(2, -10 * n),
    easeInOutExpo: (n)=>n === 0 ? 0 : n === 1 ? 1 : n < .5 ? Math.pow(2, 20 * n - 10) / 2 : (2 - Math.pow(2, -20 * n + 10)) / 2,
    easeInCirc: (n)=>1 - Math.sqrt(1 - Math.pow(n, 2)),
    easeOutCirc: (n)=>Math.sqrt(1 - Math.pow(n - 1, 2)),
    easeInOutCirc: (n)=>n < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * n, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * n + 2, 2)) + 1) / 2,
    easeInBack: (n)=>_r * n * n * n - 1.70158 * n * n,
    easeOutBack: (n)=>1 + _r * Math.pow(n - 1, 3) + 1.70158 * Math.pow(n - 1, 2),
    easeInOutBack: (n)=>n < .5 ? Math.pow(2 * n, 2) * ((Zt + 1) * 2 * n - Zt) / 2 : (Math.pow(2 * n - 2, 2) * ((Zt + 1) * (n * 2 - 2) + Zt) + 2) / 2,
    easeInElastic: (n)=>n === 0 ? 0 : n === 1 ? 1 : -Math.pow(2, 10 * n - 10) * Math.sin((n * 10 - 10.75) * kr),
    easeOutElastic: (n)=>n === 0 ? 0 : n === 1 ? 1 : Math.pow(2, -10 * n) * Math.sin((n * 10 - .75) * kr) + 1,
    easeInOutElastic: (n)=>n === 0 ? 0 : n === 1 ? 1 : n < .5 ? -(Math.pow(2, 20 * n - 10) * Math.sin((20 * n - 11.125) * Nr)) / 2 : Math.pow(2, -20 * n + 10) * Math.sin((20 * n - 11.125) * Nr) / 2 + 1,
    easeInBounce: (n)=>1 - en.easeOutBounce(1 - n),
    easeOutBounce: (n)=>n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375,
    easeInOutBounce: (n)=>n < .5 ? (1 - en.easeOutBounce(1 - 2 * n)) / 2 : (1 + en.easeOutBounce(2 * n - 1)) / 2
}, Ct = en;
var At = class {
    static{
        i(this, "TexPacker");
    }
    textures = [];
    canvas;
    c2d;
    x = 0;
    y = 0;
    curHeight = 0;
    gfx;
    constructor(e, o, c){
        this.gfx = e, this.canvas = document.createElement("canvas"), this.canvas.width = o, this.canvas.height = c, this.textures = [
            Re.fromImage(e, this.canvas)
        ], this.c2d = this.canvas.getContext("2d");
    }
    add(e) {
        if (e.width > this.canvas.width || e.height > this.canvas.height) throw new Error(`Texture size (${e.width} x ${e.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
        this.x + e.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + e.height > this.canvas.height && (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height), this.textures.push(Re.fromImage(this.gfx, this.canvas)), this.x = 0, this.y = 0, this.curHeight = 0);
        let o = this.textures[this.textures.length - 1], c = new v(this.x, this.y);
        return this.x += e.width, e.height > this.curHeight && (this.curHeight = e.height), e instanceof ImageData ? this.c2d.putImageData(e, c.x, c.y) : this.c2d.drawImage(e, c.x, c.y), o.update(this.canvas), [
            o,
            new oe(c.x / this.canvas.width, c.y / this.canvas.height, e.width / this.canvas.width, e.height / this.canvas.height)
        ];
    }
    free() {
        for (let e of this.textures)e.free();
    }
};
var jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
var Hr = gr("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
var qr = "data:image/png;base64,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";
var $r = "data:image/png;base64,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";
var ki = "3000.1.17", zr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~", tn = "topleft", Kr = 64, Ni = "monospace", nn = "monospace", ji = 36, rn = 64, sn = 256, Yr = 2048, Wr = 2048, Xr = 2048, Jr = 2048, Qr = .1, Hi = 64, Wn = "linear", qi = 8, $i = 4, Qn = [
    {
        name: "a_pos",
        size: 2
    },
    {
        name: "a_uv",
        size: 2
    },
    {
        name: "a_color",
        size: 4
    }
], zi = Qn.reduce((n, e)=>n + e.size, 0), Zr = 2048, Ki = Zr * 4 * zi, Yi = Zr * 6, Wi = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`, Xi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`, Xn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`, Jn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`, Ji = new Set([
    "id",
    "require"
]), Qi = new Set([
    "add",
    "update",
    "draw",
    "destroy",
    "inspect",
    "drawInspect"
]);
function ut(n) {
    switch(n){
        case "topleft":
            return new v(-1, -1);
        case "top":
            return new v(0, -1);
        case "topright":
            return new v(1, -1);
        case "left":
            return new v(-1, 0);
        case "center":
            return new v(0, 0);
        case "right":
            return new v(1, 0);
        case "botleft":
            return new v(-1, 1);
        case "bot":
            return new v(0, 1);
        case "botright":
            return new v(1, 1);
        default:
            return n;
    }
}
i(ut, "anchorPt");
function Zi(n) {
    switch(n){
        case "left":
            return 0;
        case "center":
            return .5;
        case "right":
            return 1;
        default:
            return 0;
    }
}
i(Zi, "alignPt");
function eo(n) {
    return n.createBuffer(1, 1, 44100);
}
i(eo, "createEmptyAudioBuffer");
var zo = i((n = {})=>{
    let e = n.root ?? document.body;
    e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let o = n.canvas ?? (()=>{
        let t1 = document.createElement("canvas");
        return e.appendChild(t1), t1;
    })(), c = n.scale ?? 1, g = n.width && n.height && !n.stretch && !n.letterbox;
    g ? (o.width = n.width * c, o.height = n.height * c) : (o.width = o.parentElement.offsetWidth, o.height = o.parentElement.offsetHeight);
    let m = [
        "outline: none",
        "cursor: default"
    ];
    if (g) {
        let t1 = o.width, r = o.height;
        m.push(`width: ${t1}px`), m.push(`height: ${r}px`);
    } else m.push("width: 100%"), m.push("height: 100%");
    n.crisp && (m.push("image-rendering: pixelated"), m.push("image-rendering: crisp-edges")), o.style.cssText = m.join(";");
    let P = n.pixelDensity || window.devicePixelRatio;
    o.width *= P, o.height *= P, o.tabIndex = 0;
    let I = document.createElement("canvas");
    I.width = sn, I.height = sn;
    let j = I.getContext("2d", {
        willReadFrequently: !0
    }), y = Ir({
        canvas: o,
        touchToMouse: n.touchToMouse,
        gamepads: n.gamepads,
        pixelDensity: n.pixelDensity,
        maxFPS: n.maxFPS
    }), X = [], S = y.canvas.getContext("webgl", {
        antialias: !0,
        depth: !0,
        stencil: !0,
        alpha: !0,
        preserveDrawingBuffer: !0
    }), q = Kn(S, {
        texFilter: n.texFilter
    }), E = (()=>{
        let t1 = ht(Xn, Jn), r = Re.fromImage(q, new ImageData(new Uint8ClampedArray([
            255,
            255,
            255,
            255
        ]), 1, 1)), s1 = n.width && n.height ? new rt(q, n.width * P * c, n.height * P * c) : new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), u = null, a1 = 1;
        n.background && (u = J(n.background), a1 = Array.isArray(n.background) ? n.background[3] : 1, S.clearColor(u.r / 255, u.g / 255, u.b / 255, a1 ?? 1)), S.enable(S.BLEND), S.blendFuncSeparate(S.SRC_ALPHA, S.ONE_MINUS_SRC_ALPHA, S.ONE, S.ONE_MINUS_SRC_ALPHA);
        let h1 = new Qt(q, Qn, Ki, Yi), f = Re.fromImage(q, new ImageData(new Uint8ClampedArray([
            128,
            128,
            128,
            255,
            190,
            190,
            190,
            255,
            190,
            190,
            190,
            255,
            128,
            128,
            128,
            255
        ]), 2, 2), {
            wrap: "repeat",
            filter: "nearest"
        });
        return {
            lastDrawCalls: 0,
            defShader: t1,
            defTex: r,
            frameBuffer: s1,
            postShader: null,
            postShaderUniform: null,
            renderer: h1,
            transform: new Ue,
            transformStack: [],
            bgTex: f,
            bgColor: u,
            bgAlpha: a1,
            width: n.width ?? S.drawingBufferWidth / P / c,
            height: n.height ?? S.drawingBufferHeight / P / c,
            viewport: {
                x: 0,
                y: 0,
                width: S.drawingBufferWidth,
                height: S.drawingBufferHeight
            },
            fixed: !1
        };
    })();
    class K {
        static{
            i(this, "SpriteData");
        }
        tex;
        frames = [
            new oe(0, 0, 1, 1)
        ];
        anims = {};
        slice9 = null;
        constructor(r, s1, u = {}, a1 = null){
            this.tex = r, s1 && (this.frames = s1), this.anims = u, this.slice9 = a1;
        }
        get width() {
            return this.tex.width * this.frames[0].w;
        }
        get height() {
            return this.tex.height * this.frames[0].h;
        }
        static from(r, s1 = {}) {
            return typeof r == "string" ? K.fromURL(r, s1) : Promise.resolve(K.fromImage(r, s1));
        }
        static fromImage(r, s1 = {}) {
            let [u, a1] = k.packer.add(r), h1 = s1.frames ? s1.frames.map((f)=>new oe(a1.x + f.x * a1.w, a1.y + f.y * a1.h, f.w * a1.w, f.h * a1.h)) : Tt(s1.sliceX || 1, s1.sliceY || 1, a1.x, a1.y, a1.w, a1.h);
            return new K(u, h1, s1.anims, s1.slice9);
        }
        static fromURL(r, s1 = {}) {
            return St(r).then((u)=>K.fromImage(u, s1));
        }
    }
    class Q {
        static{
            i(this, "SoundData");
        }
        buf;
        constructor(r){
            this.buf = r;
        }
        static fromArrayBuffer(r) {
            return new Promise((s1, u)=>te.ctx.decodeAudioData(r, s1, u)).then((s1)=>new Q(s1));
        }
        static fromURL(r) {
            return jn(r) ? Q.fromArrayBuffer(Pr(r)) : Vr(r).then((s1)=>Q.fromArrayBuffer(s1));
        }
    }
    let te = (()=>{
        let t1 = new (window.AudioContext || window.webkitAudioContext), r = t1.createGain();
        r.connect(t1.destination);
        let s1 = new Q(eo(t1));
        return t1.decodeAudioData(Hr.buffer.slice(0)).then((u)=>{
            s1.buf = u;
        }).catch((u)=>{
            console.error("Failed to load burp: ", u);
        }), {
            ctx: t1,
            masterNode: r,
            burpSnd: s1
        };
    })(), k = {
        urlPrefix: "",
        sprites: new je,
        fonts: new je,
        bitmapFonts: new je,
        sounds: new je,
        shaders: new je,
        custom: new je,
        packer: new At(q, Xr, Jr),
        loaded: !1
    };
    function pe(t1) {
        return typeof t1 != "string" || jn(t1) ? t1 : k.urlPrefix + t1;
    }
    i(pe, "fixURL");
    let C = {
        events: new Ne,
        objEvents: new Ne,
        root: Un([]),
        gravity: 0,
        scenes: {},
        logs: [],
        cam: {
            pos: null,
            scale: new v(1),
            angle: 0,
            shake: 0,
            transform: new Ue
        }
    };
    C.root.use(An());
    function Ae(t1) {
        return k.custom.add(null, t1);
    }
    i(Ae, "load");
    function $() {
        let t1 = [
            k.sprites,
            k.sounds,
            k.shaders,
            k.fonts,
            k.bitmapFonts,
            k.custom
        ];
        return t1.reduce((r, s1)=>r + s1.progress(), 0) / t1.length;
    }
    i($, "loadProgress");
    function Te(t1) {
        return t1 !== void 0 && (k.urlPrefix = t1), k.urlPrefix;
    }
    i(Te, "loadRoot");
    function ye(t1, r) {
        return k.custom.add(t1, Et(r));
    }
    i(ye, "loadJSON");
    class Se {
        static{
            i(this, "FontData");
        }
        fontface;
        filter = Wn;
        outline = null;
        size = rn;
        constructor(r, s1 = {}){
            if (this.fontface = r, this.filter = s1.filter ?? Wn, this.size = s1.size ?? rn, this.size > sn) throw new Error(`Max font size: ${sn}`);
            s1.outline && (this.outline = {
                width: 1,
                color: J(0, 0, 0)
            }, typeof s1.outline == "number" ? this.outline.width = s1.outline : typeof s1.outline == "object" && (s1.outline.width && (this.outline.width = s1.outline.width), s1.outline.color && (this.outline.color = s1.outline.color)));
        }
    }
    function st(t1, r, s1 = {}) {
        let u = new FontFace(t1, typeof r == "string" ? `url(${r})` : r);
        return document.fonts.add(u), k.fonts.add(t1, u.load().catch((a1)=>{
            throw new Error(`Failed to load font from "${r}": ${a1}`);
        }).then((a1)=>new Se(a1, s1)));
    }
    i(st, "loadFont");
    function on(t1, r, s1, u, a1 = {}) {
        return k.bitmapFonts.add(t1, St(r).then((h1)=>bn(Re.fromImage(q, h1, a1), s1, u, a1.chars ?? zr)));
    }
    i(on, "loadBitmapFont");
    function Tt(t1 = 1, r = 1, s1 = 0, u = 0, a1 = 1, h1 = 1) {
        let f = [], b1 = a1 / t1, p1 = h1 / r;
        for(let d1 = 0; d1 < r; d1++)for(let w = 0; w < t1; w++)f.push(new oe(s1 + w * b1, u + d1 * p1, b1, p1));
        return f;
    }
    i(Tt, "slice");
    function Ot(t1, r) {
        return t1 = pe(t1), Ae(typeof r == "string" ? new Promise((s1, u)=>{
            Et(r).then((a1)=>{
                Ot(t1, a1).then(s1).catch(u);
            });
        }) : K.from(t1).then((s1)=>{
            let u = {};
            for(let a1 in r){
                let h1 = r[a1], f = s1.frames[0], b1 = Xr * f.w, p1 = Jr * f.h, d1 = h1.frames ? h1.frames.map((A)=>new oe(f.x + (h1.x + A.x) / b1 * f.w, f.y + (h1.y + A.y) / p1 * f.h, A.w / b1 * f.w, A.h / p1 * f.h)) : Tt(h1.sliceX || 1, h1.sliceY || 1, f.x + h1.x / b1 * f.w, f.y + h1.y / p1 * f.h, h1.width / b1 * f.w, h1.height / p1 * f.h), w = new K(s1.tex, d1, h1.anims);
                k.sprites.addLoaded(a1, w), u[a1] = w;
            }
            return u;
        }));
    }
    i(Ot, "loadSpriteAtlas");
    function Rt(t1, r = {}) {
        let s1 = document.createElement("canvas"), u = t1[0].width, a1 = t1[0].height;
        s1.width = u * t1.length, s1.height = a1;
        let h1 = s1.getContext("2d");
        t1.forEach((b1, p1)=>{
            b1 instanceof ImageData ? h1.putImageData(b1, p1 * u, 0) : h1.drawImage(b1, p1 * u, 0);
        });
        let f = h1.getImageData(0, 0, t1.length * u, a1);
        return K.fromImage(f, {
            ...r,
            sliceX: t1.length,
            sliceY: 1
        });
    }
    i(Rt, "createSpriteSheet");
    function Ye(t1, r, s1 = {
        sliceX: 1,
        sliceY: 1,
        anims: {}
    }) {
        return r = pe(r), Array.isArray(r) ? r.some((u)=>typeof u == "string") ? k.sprites.add(t1, Promise.all(r.map((u)=>typeof u == "string" ? St(u) : Promise.resolve(u))).then((u)=>Rt(u, s1))) : k.sprites.addLoaded(t1, Rt(r, s1)) : typeof r == "string" ? k.sprites.add(t1, K.from(r, s1)) : k.sprites.addLoaded(t1, K.fromImage(r, s1));
    }
    i(Ye, "loadSprite");
    function an(t1, r) {
        return r = pe(r), k.sprites.add(t1, new Promise(async (s1)=>{
            let u = typeof r == "string" ? await Et(r) : r, a1 = await Promise.all(u.frames.map(St)), h1 = document.createElement("canvas");
            h1.width = u.width, h1.height = u.height * u.frames.length;
            let f = h1.getContext("2d");
            a1.forEach((p1, d1)=>{
                f.drawImage(p1, 0, d1 * u.height);
            });
            let b1 = await Ye(null, h1, {
                sliceY: u.frames.length,
                anims: u.anims
            });
            s1(b1);
        }));
    }
    i(an, "loadPedit");
    function un(t1, r, s1) {
        r = pe(r), s1 = pe(s1), typeof r == "string" && !s1 && (s1 = Mr(r) + ".json");
        let u = typeof s1 == "string" ? Et(s1) : Promise.resolve(s1);
        return k.sprites.add(t1, u.then((a1)=>{
            let h1 = a1.meta.size, f = a1.frames.map((p1)=>new oe(p1.frame.x / h1.w, p1.frame.y / h1.h, p1.frame.w / h1.w, p1.frame.h / h1.h)), b1 = {};
            for (let p1 of a1.meta.frameTags)p1.from === p1.to ? b1[p1.name] = p1.from : b1[p1.name] = {
                from: p1.from,
                to: p1.to,
                speed: 10,
                loop: !0,
                pingpong: p1.direction === "pingpong"
            };
            return K.from(r, {
                frames: f,
                anims: b1
            });
        }));
    }
    i(un, "loadAseprite");
    function cn(t1, r, s1) {
        return k.shaders.addLoaded(t1, ht(r, s1));
    }
    i(cn, "loadShader");
    function hn(t1, r, s1) {
        r = pe(r), s1 = pe(s1);
        let u = i((h1)=>h1 ? Lr(h1) : Promise.resolve(null), "resolveUrl"), a1 = Promise.all([
            u(r),
            u(s1)
        ]).then(([h1, f])=>ht(h1, f));
        return k.shaders.add(t1, a1);
    }
    i(hn, "loadShaderURL");
    function ln(t1, r) {
        return r = pe(r), k.sounds.add(t1, typeof r == "string" ? Q.fromURL(r) : Q.fromArrayBuffer(r));
    }
    i(ln, "loadSound");
    function dn(t1 = "bean") {
        return Ye(t1, jr);
    }
    i(dn, "loadBean");
    function Pt(t1) {
        return k.sprites.get(t1);
    }
    i(Pt, "getSprite");
    function Dt(t1) {
        return k.sounds.get(t1);
    }
    i(Dt, "getSound");
    function Mt(t1) {
        return k.fonts.get(t1);
    }
    i(Mt, "getFont");
    function Gt(t1) {
        return k.bitmapFonts.get(t1);
    }
    i(Gt, "getBitmapFont");
    function Bt(t1) {
        return k.shaders.get(t1);
    }
    i(Bt, "getShader");
    function fn(t1) {
        return k.custom.get(t1);
    }
    i(fn, "getAsset");
    function ct(t1) {
        if (typeof t1 == "string") {
            let r = Pt(t1);
            if (r) return r;
            if ($() < 1) return null;
            throw new Error(`Sprite not found: ${t1}`);
        } else {
            if (t1 instanceof K) return ve.loaded(t1);
            if (t1 instanceof ve) return t1;
            throw new Error(`Invalid sprite: ${t1}`);
        }
    }
    i(ct, "resolveSprite");
    function mn(t1) {
        if (typeof t1 == "string") {
            let r = Dt(t1);
            if (r) return r;
            if ($() < 1) return null;
            throw new Error(`Sound not found: ${t1}`);
        } else {
            if (t1 instanceof Q) return ve.loaded(t1);
            if (t1 instanceof ve) return t1;
            throw new Error(`Invalid sound: ${t1}`);
        }
    }
    i(mn, "resolveSound");
    function pn(t1) {
        if (!t1) return E.defShader;
        if (typeof t1 == "string") {
            let r = Bt(t1);
            if (r) return r.data ?? r;
            if ($() < 1) return null;
            throw new Error(`Shader not found: ${t1}`);
        } else if (t1 instanceof ve) return t1.data ? t1.data : t1;
        return t1;
    }
    i(pn, "resolveShader");
    function Ft(t1) {
        if (!t1) return Ft(n.font ?? Ni);
        if (typeof t1 == "string") {
            let r = Gt(t1), s1 = Mt(t1);
            if (r) return r.data ?? r;
            if (s1) return s1.data ?? s1;
            if (document.fonts.check(`${rn}px ${t1}`)) return t1;
            if ($() < 1) return null;
            throw new Error(`Font not found: ${t1}`);
        } else if (t1 instanceof ve) return t1.data ? t1.data : t1;
        return t1;
    }
    i(Ft, "resolveFont");
    function gn(t1) {
        return t1 !== void 0 && (te.masterNode.gain.value = t1), te.masterNode.gain.value;
    }
    i(gn, "volume");
    function It(t1, r = {}) {
        let s1 = te.ctx, u = r.paused ?? !1, a1 = s1.createBufferSource(), h1 = new be, f = s1.createGain(), b1 = r.seek ?? 0, p1 = 0, d1 = 0, w = !1;
        a1.loop = !!r.loop, a1.detune.value = r.detune ?? 0, a1.playbackRate.value = r.speed ?? 1, a1.connect(f), a1.onended = ()=>{
            N() >= a1.buffer?.duration && h1.trigger();
        }, f.connect(te.masterNode), f.gain.value = r.volume ?? 1;
        let A = i((M1)=>{
            a1.buffer = M1.buf, u || (p1 = s1.currentTime, a1.start(0, b1), w = !0);
        }, "start"), D = mn(t1);
        D instanceof ve && D.onLoad(A);
        let N = i(()=>{
            if (!a1.buffer) return 0;
            let M1 = u ? d1 - p1 : s1.currentTime - p1, O = a1.buffer.duration;
            return a1.loop ? M1 % O : Math.min(M1, O);
        }, "getTime"), _ = i((M1)=>{
            let O = s1.createBufferSource();
            return O.buffer = M1.buffer, O.loop = M1.loop, O.playbackRate.value = M1.playbackRate.value, O.detune.value = M1.detune.value, O.onended = M1.onended, O.connect(f), O;
        }, "cloneNode");
        return {
            stop () {
                this.paused = !0, this.seek(0);
            },
            set paused (M){
                if (u !== M) {
                    if (u = M, M) w && (a1.stop(), w = !1), d1 = s1.currentTime;
                    else {
                        a1 = _(a1);
                        let O = d1 - p1;
                        a1.start(0, O), w = !0, p1 = s1.currentTime - O, d1 = 0;
                    }
                }
            },
            get paused () {
                return u;
            },
            play (M1 = 0) {
                this.seek(M1), this.paused = !1;
            },
            seek (M1) {
                a1.buffer?.duration && (M1 > a1.buffer.duration || (u ? (a1 = _(a1), p1 = d1 - M1) : (a1.stop(), a1 = _(a1), p1 = s1.currentTime - M1, a1.start(0, M1), w = !0, d1 = 0)));
            },
            set speed (M){
                a1.playbackRate.value = M;
            },
            get speed () {
                return a1.playbackRate.value;
            },
            set detune (M){
                a1.detune.value = M;
            },
            get detune () {
                return a1.detune.value;
            },
            set volume (M){
                f.gain.value = Math.max(M, 0);
            },
            get volume () {
                return f.gain.value;
            },
            set loop (M){
                a1.loop = M;
            },
            get loop () {
                return a1.loop;
            },
            duration () {
                return a1.buffer?.duration ?? 0;
            },
            time () {
                return N() % this.duration();
            },
            onEnd (M1) {
                return h1.add(M1);
            },
            then (M1) {
                return this.onEnd(M1);
            }
        };
    }
    i(It, "play");
    function Lt(t1) {
        return It(te.burpSnd, t1);
    }
    i(Lt, "burp");
    function wn(t1, r) {
        return new rt(q, t1, r);
    }
    i(wn, "makeCanvas");
    function ht(t1 = Xn, r = Jn) {
        let s1 = Wi.replace("{{user}}", t1 ?? Xn), u = Xi.replace("{{user}}", r ?? Jn);
        try {
            return new Jt(q, s1, u, Qn.map((a1)=>a1.name));
        } catch (a1) {
            let f = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/, b1 = Br(a1).match(f), p1 = Number(b1.groups.line) - 14, d1 = b1.groups.msg.trim(), w = b1.groups.type.toLowerCase();
            throw new Error(`${w} shader line ${p1}: ${d1}`);
        }
    }
    i(ht, "makeShader");
    function bn(t1, r, s1, u) {
        let a1 = t1.width / r, h1 = {}, f = u.split("").entries();
        for (let [b1, p1] of f)h1[p1] = new oe(b1 % a1 * r, Math.floor(b1 / a1) * s1, r, s1);
        return {
            tex: t1,
            map: h1,
            size: s1
        };
    }
    i(bn, "makeFont");
    function lt(t1, r, s1, u = E.defTex, a1 = E.defShader, h1 = {}) {
        let f = pn(a1);
        if (!f || f instanceof ve) return;
        let b1 = E.fixed || s1 ? E.transform : C.cam.transform.mult(E.transform), p1 = [];
        for (let d1 of t1){
            let w = vn(b1.multVec2(d1.pos));
            p1.push(w.x, w.y, d1.uv.x, d1.uv.y, d1.color.r / 255, d1.color.g / 255, d1.color.b / 255, d1.opacity);
        }
        E.renderer.push(S.TRIANGLES, p1, r, f, u, h1);
    }
    i(lt, "drawRaw");
    function Pe() {
        E.renderer.flush();
    }
    i(Pe, "flush");
    function dt() {
        S.clear(S.COLOR_BUFFER_BIT), E.frameBuffer.bind(), S.clear(S.COLOR_BUFFER_BIT), E.bgColor || Ce(()=>{
            Be({
                width: we(),
                height: xe(),
                quad: new oe(0, 0, we() / Kr, xe() / Kr),
                tex: E.bgTex,
                fixed: !0
            });
        }), E.renderer.numDraws = 0, E.fixed = !1, E.transformStack.length = 0, E.transform = new Ue;
    }
    i(dt, "frameStart");
    function Vt(t1, r) {
        E.postShader = t1, E.postShaderUniform = r ?? null;
    }
    i(Vt, "usePostEffect");
    function ft() {
        Pe(), E.lastDrawCalls = E.renderer.numDraws, E.frameBuffer.unbind(), S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
        let t1 = E.width, r = E.height;
        E.width = S.drawingBufferWidth / P, E.height = S.drawingBufferHeight / P, We({
            flipY: !0,
            tex: E.frameBuffer.tex,
            pos: new v(E.viewport.x, E.viewport.y),
            width: E.viewport.width,
            height: E.viewport.height,
            shader: E.postShader,
            uniform: typeof E.postShaderUniform == "function" ? E.postShaderUniform() : E.postShaderUniform,
            fixed: !0
        }), Pe(), E.width = t1, E.height = r;
    }
    i(ft, "frameEnd");
    function vn(t1) {
        return new v(t1.x / we() * 2 - 1, -t1.y / xe() * 2 + 1);
    }
    i(vn, "screen2ndc");
    function _t(t1) {
        E.transform = t1.clone();
    }
    i(_t, "pushMatrix");
    function ne(...t1) {
        if (t1[0] === void 0) return;
        let r = T(...t1);
        r.x === 0 && r.y === 0 || E.transform.translate(r);
    }
    i(ne, "pushTranslate");
    function He(...t1) {
        if (t1[0] === void 0) return;
        let r = T(...t1);
        r.x === 1 && r.y === 1 || E.transform.scale(r);
    }
    i(He, "pushScale");
    function se(t1) {
        t1 && E.transform.rotate(t1);
    }
    i(se, "pushRotate");
    function le() {
        E.transformStack.push(E.transform.clone());
    }
    i(le, "pushTransform");
    function ae() {
        E.transformStack.length > 0 && (E.transform = E.transformStack.pop());
    }
    i(ae, "popTransform");
    function Be(t1) {
        if (t1.width === void 0 || t1.height === void 0) throw new Error('drawUVQuad() requires property "width" and "height".');
        if (t1.width <= 0 || t1.height <= 0) return;
        let r = t1.width, s1 = t1.height, a1 = ut(t1.anchor || tn).scale(new v(r, s1).scale(-0.5)), h1 = t1.quad || new oe(0, 0, 1, 1), f = t1.color || J(255, 255, 255), b1 = t1.opacity ?? 1, p1 = t1.tex ? Qr / t1.tex.width : 0, d1 = t1.tex ? Qr / t1.tex.height : 0, w = h1.x + p1, A = h1.y + d1, D = h1.w - p1 * 2, N = h1.h - d1 * 2;
        le(), ne(t1.pos), se(t1.angle), He(t1.scale), ne(a1), lt([
            {
                pos: new v(-r / 2, s1 / 2),
                uv: new v(t1.flipX ? w + D : w, t1.flipY ? A : A + N),
                color: f,
                opacity: b1
            },
            {
                pos: new v(-r / 2, -s1 / 2),
                uv: new v(t1.flipX ? w + D : w, t1.flipY ? A + N : A),
                color: f,
                opacity: b1
            },
            {
                pos: new v(r / 2, -s1 / 2),
                uv: new v(t1.flipX ? w : w + D, t1.flipY ? A + N : A),
                color: f,
                opacity: b1
            },
            {
                pos: new v(r / 2, s1 / 2),
                uv: new v(t1.flipX ? w : w + D, t1.flipY ? A : A + N),
                color: f,
                opacity: b1
            }
        ], [
            0,
            1,
            3,
            1,
            2,
            3
        ], t1.fixed, t1.tex, t1.shader, t1.uniform), ae();
    }
    i(Be, "drawUVQuad");
    function We(t1) {
        if (!t1.tex) throw new Error('drawTexture() requires property "tex".');
        let r = t1.quad ?? new oe(0, 0, 1, 1), s1 = t1.tex.width * r.w, u = t1.tex.height * r.h, a1 = new v(1);
        if (t1.tiled) {
            let h1 = Math.ceil((t1.width || s1) / s1), f = Math.ceil((t1.height || u) / u), p1 = ut(t1.anchor || tn).add(new v(1, 1)).scale(.5).scale(h1 * s1, f * u);
            for(let d1 = 0; d1 < h1; d1++)for(let w = 0; w < f; w++)Be(Object.assign({}, t1, {
                pos: (t1.pos || new v(0)).add(new v(s1 * d1, u * w)).sub(p1),
                scale: a1.scale(t1.scale || new v(1)),
                tex: t1.tex,
                quad: r,
                width: s1,
                height: u,
                anchor: "topleft"
            }));
        } else t1.width && t1.height ? (a1.x = t1.width / s1, a1.y = t1.height / u) : t1.width ? (a1.x = t1.width / s1, a1.y = a1.x) : t1.height && (a1.y = t1.height / u, a1.x = a1.y), Be(Object.assign({}, t1, {
            scale: a1.scale(t1.scale || new v(1)),
            tex: t1.tex,
            quad: r,
            width: s1,
            height: u
        }));
    }
    i(We, "drawTexture");
    function yn(t1) {
        if (!t1.sprite) throw new Error('drawSprite() requires property "sprite"');
        let r = ct(t1.sprite);
        if (!r || !r.data) return;
        let s1 = r.data.frames[t1.frame ?? 0];
        if (!s1) throw new Error(`Frame not found: ${t1.frame ?? 0}`);
        We(Object.assign({}, t1, {
            tex: r.data.tex,
            quad: s1.scale(t1.quad ?? new oe(0, 0, 1, 1))
        }));
    }
    i(yn, "drawSprite");
    function qe(t1, r, s1, u, a1, h1 = 1) {
        u = Ge(u % 360), a1 = Ge(a1 % 360), a1 <= u && (a1 += Math.PI * 2);
        let f = [], b1 = Math.ceil((a1 - u) / Ge(8) * h1), p1 = (a1 - u) / b1;
        for(let d1 = u; d1 < a1; d1 += p1)f.push(t1.add(r * Math.cos(d1), s1 * Math.sin(d1)));
        return f.push(t1.add(r * Math.cos(a1), s1 * Math.sin(a1))), f;
    }
    i(qe, "getArcPts");
    function ge(t1) {
        if (t1.width === void 0 || t1.height === void 0) throw new Error('drawRect() requires property "width" and "height".');
        if (t1.width <= 0 || t1.height <= 0) return;
        let r = t1.width, s1 = t1.height, a1 = ut(t1.anchor || tn).add(1, 1).scale(new v(r, s1).scale(-0.5)), h1 = [
            new v(0, 0),
            new v(r, 0),
            new v(r, s1),
            new v(0, s1)
        ];
        if (t1.radius) {
            let f = Math.min(Math.min(r, s1) / 2, t1.radius);
            h1 = [
                new v(f, 0),
                new v(r - f, 0),
                ...qe(new v(r - f, f), f, f, 270, 360),
                new v(r, f),
                new v(r, s1 - f),
                ...qe(new v(r - f, s1 - f), f, f, 0, 90),
                new v(r - f, s1),
                new v(f, s1),
                ...qe(new v(f, s1 - f), f, f, 90, 180),
                new v(0, s1 - f),
                new v(0, f),
                ...qe(new v(f, f), f, f, 180, 270)
            ];
        }
        z(Object.assign({}, t1, {
            offset: a1,
            pts: h1,
            ...t1.gradient ? {
                colors: t1.horizontal ? [
                    t1.gradient[0],
                    t1.gradient[1],
                    t1.gradient[1],
                    t1.gradient[0]
                ] : [
                    t1.gradient[0],
                    t1.gradient[0],
                    t1.gradient[1],
                    t1.gradient[1]
                ]
            } : {}
        }));
    }
    i(ge, "drawRect");
    function l(t1) {
        let { p1: r, p2: s1 } = t1;
        if (!r || !s1) throw new Error('drawLine() requires properties "p1" and "p2".');
        let u = t1.width || 1, a1 = s1.sub(r).unit().normal().scale(u * .5), h1 = [
            r.sub(a1),
            r.add(a1),
            s1.add(a1),
            s1.sub(a1)
        ].map((f)=>({
                pos: new v(f.x, f.y),
                uv: new v(0),
                color: t1.color ?? W.WHITE,
                opacity: t1.opacity ?? 1
            }));
        lt(h1, [
            0,
            1,
            3,
            1,
            2,
            3
        ], t1.fixed, E.defTex, t1.shader, t1.uniform);
    }
    i(l, "drawLine");
    function x(t1) {
        let r = t1.pts;
        if (!r) throw new Error('drawLines() requires property "pts".');
        if (!(r.length < 2)) {
            if (t1.radius && r.length >= 3) {
                let s1 = r[0].sdist(r[1]);
                for(let a1 = 1; a1 < r.length - 1; a1++)s1 = Math.min(r[a1].sdist(r[a1 + 1]), s1);
                let u = Math.min(t1.radius, Math.sqrt(s1) / 2);
                l(Object.assign({}, t1, {
                    p1: r[0],
                    p2: r[1]
                }));
                for(let a1 = 1; a1 < r.length - 2; a1++){
                    let h1 = r[a1], f = r[a1 + 1];
                    l(Object.assign({}, t1, {
                        p1: h1,
                        p2: f
                    }));
                }
                l(Object.assign({}, t1, {
                    p1: r[r.length - 2],
                    p2: r[r.length - 1]
                }));
            } else for(let s1 = 0; s1 < r.length - 1; s1++)l(Object.assign({}, t1, {
                p1: r[s1],
                p2: r[s1 + 1]
            })), t1.join !== "none" && L(Object.assign({}, t1, {
                pos: r[s1],
                radius: t1.width / 2
            }));
        }
    }
    i(x, "drawLines");
    function R(t1) {
        if (!t1.p1 || !t1.p2 || !t1.p3) throw new Error('drawTriangle() requires properties "p1", "p2" and "p3".');
        return z(Object.assign({}, t1, {
            pts: [
                t1.p1,
                t1.p2,
                t1.p3
            ]
        }));
    }
    i(R, "drawTriangle");
    function L(t1) {
        if (typeof t1.radius != "number") throw new Error('drawCircle() requires property "radius".');
        t1.radius !== 0 && he(Object.assign({}, t1, {
            radiusX: t1.radius,
            radiusY: t1.radius,
            angle: 0
        }));
    }
    i(L, "drawCircle");
    function he(t1) {
        if (t1.radiusX === void 0 || t1.radiusY === void 0) throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
        if (t1.radiusX === 0 || t1.radiusY === 0) return;
        let r = t1.start ?? 0, s1 = t1.end ?? 360, u = ut(t1.anchor ?? "center").scale(new v(-t1.radiusX, -t1.radiusY)), a1 = qe(u, t1.radiusX, t1.radiusY, r, s1, t1.resolution);
        a1.unshift(u);
        let h1 = Object.assign({}, t1, {
            pts: a1,
            radius: 0,
            ...t1.gradient ? {
                colors: [
                    t1.gradient[0],
                    ...Array(a1.length - 1).fill(t1.gradient[1])
                ]
            } : {}
        });
        if (s1 - r >= 360 && t1.outline) {
            t1.fill !== !1 && z(Object.assign(h1, {
                outline: null
            })), z(Object.assign(h1, {
                pts: a1.slice(1),
                fill: !1
            }));
            return;
        }
        z(h1);
    }
    i(he, "drawEllipse");
    function z(t1) {
        if (!t1.pts) throw new Error('drawPolygon() requires property "pts".');
        let r = t1.pts.length;
        if (!(r < 3)) {
            if (le(), ne(t1.pos), He(t1.scale), se(t1.angle), ne(t1.offset), t1.fill !== !1) {
                let s1 = t1.color ?? W.WHITE, u = t1.pts.map((h1, f)=>({
                        pos: new v(h1.x, h1.y),
                        uv: new v(0, 0),
                        color: t1.colors && t1.colors[f] ? t1.colors[f].mult(s1) : s1,
                        opacity: t1.opacity ?? 1
                    })), a1 = [
                    ...Array(r - 2).keys()
                ].map((h1)=>[
                        0,
                        h1 + 1,
                        h1 + 2
                    ]).flat();
                lt(u, t1.indices ?? a1, t1.fixed, E.defTex, t1.shader, t1.uniform);
            }
            t1.outline && x({
                pts: [
                    ...t1.pts,
                    t1.pts[0]
                ],
                radius: t1.radius,
                width: t1.outline.width,
                color: t1.outline.color,
                join: t1.outline.join,
                uniform: t1.uniform,
                fixed: t1.fixed,
                opacity: t1.opacity
            }), ae();
        }
    }
    i(z, "drawPolygon");
    function Oe(t1, r, s1) {
        Pe(), S.clear(S.STENCIL_BUFFER_BIT), S.enable(S.STENCIL_TEST), S.stencilFunc(S.NEVER, 1, 255), S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE), r(), Pe(), S.stencilFunc(s1, 1, 255), S.stencilOp(S.KEEP, S.KEEP, S.KEEP), t1(), Pe(), S.disable(S.STENCIL_TEST);
    }
    i(Oe, "drawStenciled");
    function $e(t1, r) {
        Oe(t1, r, S.EQUAL);
    }
    i($e, "drawMasked");
    function kt(t1, r) {
        Oe(t1, r, S.NOTEQUAL);
    }
    i(kt, "drawSubtracted");
    function De() {
        return (E.viewport.width + E.viewport.height) / (E.width + E.height);
    }
    i(De, "getViewportScale");
    function Ce(t1) {
        Pe();
        let r = E.width, s1 = E.height;
        E.width = E.viewport.width, E.height = E.viewport.height, t1(), Pe(), E.width = r, E.height = s1;
    }
    i(Ce, "drawUnscaled");
    function Zn(t1, r) {
        r.pos && (t1.pos = t1.pos.add(r.pos)), r.scale && (t1.scale = t1.scale.scale(T(r.scale))), r.angle && (t1.angle += r.angle), r.color && t1.ch.length === 1 && (t1.color = t1.color.mult(r.color)), r.opacity && (t1.opacity *= r.opacity);
    }
    i(Zn, "applyCharTransform");
    let er = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
    function es(t1) {
        let r = {}, s1 = t1.replace(er, "$2"), u = 0;
        for (let a1 of t1.matchAll(er)){
            let h1 = a1.index - u;
            for(let f = 0; f < a1.groups.text.length; f++)r[f + h1] = [
                a1.groups.style
            ];
            u += a1[0].length - a1.groups.text.length;
        }
        return {
            charStyleMap: r,
            text: s1
        };
    }
    i(es, "compileStyledText");
    let xn = {};
    function Xe(t1) {
        if (t1.text === void 0) throw new Error('formatText() requires property "text".');
        let r = Ft(t1.font);
        if (t1.text === "" || r instanceof ve || !r) return {
            width: 0,
            height: 0,
            chars: [],
            opt: t1
        };
        let { charStyleMap: s1, text: u } = es(t1.text + ""), a1 = Fr(u);
        if (r instanceof Se || typeof r == "string") {
            let Z = r instanceof Se ? r.fontface.family : r, H = r instanceof Se ? {
                outline: r.outline,
                filter: r.filter
            } : {
                outline: null,
                filter: Wn
            }, V = xn[Z] ?? {
                font: {
                    tex: new Re(q, Yr, Wr, {
                        filter: H.filter
                    }),
                    map: {},
                    size: rn
                },
                cursor: new v(0),
                outline: H.outline
            };
            xn[Z] || (xn[Z] = V), r = V.font;
            for (let fe of a1)if (!V.font.map[fe]) {
                let U = j;
                U.clearRect(0, 0, I.width, I.height), U.font = `${r.size}px ${Z}`, U.textBaseline = "top", U.textAlign = "left", U.fillStyle = "#ffffff";
                let G = U.measureText(fe), B = Math.ceil(G.width), F = r.size;
                V.outline && (U.lineJoin = "round", U.lineWidth = V.outline.width * 2, U.strokeStyle = V.outline.color.toHex(), U.strokeText(fe, V.outline.width, V.outline.width), B += V.outline.width * 2, F += V.outline.width * 3), U.fillText(fe, V.outline?.width ?? 0, V.outline?.width ?? 0);
                let Y = U.getImageData(0, 0, B, F);
                if (V.cursor.x + B > Yr && (V.cursor.x = 0, V.cursor.y += F, V.cursor.y > Wr)) throw new Error("Font atlas exceeds character limit");
                r.tex.update(Y, V.cursor.x, V.cursor.y), r.map[fe] = new oe(V.cursor.x, V.cursor.y, B, F), V.cursor.x += B;
            }
        }
        let h1 = t1.size || r.size, f = T(t1.scale ?? 1).scale(h1 / r.size), b1 = t1.lineSpacing ?? 0, p1 = t1.letterSpacing ?? 0, d1 = 0, w = 0, A = 0, D = [], N = [], _ = 0, M1 = null, O = null;
        for(; _ < a1.length;){
            let Z = a1[_];
            if (Z === `
`) A += h1 + b1, D.push({
                width: d1 - p1,
                chars: N
            }), M1 = null, O = null, d1 = 0, N = [];
            else {
                let H = r.map[Z];
                if (H) {
                    let V = H.w * f.x;
                    t1.width && d1 + V > t1.width && (A += h1 + b1, M1 != null && (_ -= N.length - M1, Z = a1[_], H = r.map[Z], V = H.w * f.x, N = N.slice(0, M1 - 1), d1 = O), M1 = null, O = null, D.push({
                        width: d1 - p1,
                        chars: N
                    }), d1 = 0, N = []), N.push({
                        tex: r.tex,
                        width: H.w,
                        height: H.h,
                        quad: new oe(H.x / r.tex.width, H.y / r.tex.height, H.w / r.tex.width, H.h / r.tex.height),
                        ch: Z,
                        pos: new v(d1, A),
                        opacity: t1.opacity ?? 1,
                        color: t1.color ?? W.WHITE,
                        scale: T(f),
                        angle: 0
                    }), Z === " " && (M1 = N.length, O = d1), d1 += V, w = Math.max(w, d1), d1 += p1;
                }
            }
            _++;
        }
        D.push({
            width: d1 - p1,
            chars: N
        }), A += h1, t1.width && (w = t1.width);
        let ie = [];
        for (let Z of D){
            let H = (w - Z.width) * Zi(t1.align ?? "left");
            for (let V of Z.chars){
                let fe = r.map[V.ch], U = ie.length;
                if (V.pos = V.pos.add(H, 0).add(fe.w * f.x * .5, fe.h * f.y * .5), t1.transform) {
                    let G = typeof t1.transform == "function" ? t1.transform(U, V.ch) : t1.transform;
                    G && Zn(V, G);
                }
                if (s1[U]) {
                    let G = s1[U];
                    for (let B of G){
                        let F = t1.styles[B], Y = typeof F == "function" ? F(U, V.ch) : F;
                        Y && Zn(V, Y);
                    }
                }
                ie.push(V);
            }
        }
        return {
            width: w,
            height: A,
            chars: ie,
            opt: t1
        };
    }
    i(Xe, "formatText");
    function tr(t1) {
        Je(Xe(t1));
    }
    i(tr, "drawText");
    function Je(t1) {
        le(), ne(t1.opt.pos), se(t1.opt.angle), ne(ut(t1.opt.anchor ?? "topleft").add(1, 1).scale(t1.width, t1.height).scale(-0.5)), t1.chars.forEach((r)=>{
            Be({
                tex: r.tex,
                width: r.width,
                height: r.height,
                pos: r.pos,
                scale: r.scale,
                angle: r.angle,
                color: r.color,
                opacity: r.opacity,
                quad: r.quad,
                anchor: "center",
                uniform: t1.opt.uniform,
                shader: t1.opt.shader,
                fixed: t1.opt.fixed
            });
        }), ae();
    }
    i(Je, "drawFormattedText");
    function we() {
        return E.width;
    }
    i(we, "width");
    function xe() {
        return E.height;
    }
    i(xe, "height");
    function ts(t1) {
        return new v((t1.x - E.viewport.x) * we() / E.viewport.width, (t1.y - E.viewport.y) * xe() / E.viewport.height);
    }
    i(ts, "windowToContent");
    function ns(t1) {
        return new v(t1.x * E.viewport.width / E.width, t1.y * E.viewport.height / E.height);
    }
    i(ns, "contentToView");
    function Nt() {
        return ts(y.mousePos());
    }
    i(Nt, "mousePos");
    let nr = !1, re = {
        inspect: !1,
        timeScale: 1,
        showLog: !0,
        fps: ()=>y.fps(),
        numFrames: ()=>y.numFrames(),
        stepFrame: dr,
        drawCalls: ()=>E.lastDrawCalls,
        clearLog: ()=>C.logs = [],
        log: (t1)=>{
            let r = n.logMax ?? qi;
            C.logs.unshift({
                msg: t1,
                time: y.time()
            }), C.logs.length > r && (C.logs = C.logs.slice(0, r));
        },
        error: (t1)=>re.log(new Error(t1.toString ? t1.toString() : t1)),
        curRecording: null,
        numObjects: ()=>On("*", {
                recursive: !0
            }).length,
        get paused () {
            return nr;
        },
        set paused (t){
            nr = t, t ? te.ctx.suspend() : te.ctx.resume();
        }
    };
    function Me() {
        return y.dt() * re.timeScale;
    }
    i(Me, "dt");
    function rs(...t1) {
        return t1.length > 0 && (C.cam.pos = T(...t1)), C.cam.pos ? C.cam.pos.clone() : zt();
    }
    i(rs, "camPos");
    function ss(...t1) {
        return t1.length > 0 && (C.cam.scale = T(...t1)), C.cam.scale.clone();
    }
    i(ss, "camScale");
    function is(t1) {
        return t1 !== void 0 && (C.cam.angle = t1), C.cam.angle;
    }
    i(is, "camRot");
    function os(t1 = 12) {
        C.cam.shake += t1;
    }
    i(os, "shake");
    function rr(t1) {
        return C.cam.transform.multVec2(t1);
    }
    i(rr, "toScreen");
    function sr(t1) {
        return C.cam.transform.invert().multVec2(t1);
    }
    i(sr, "toWorld");
    function jt(t1) {
        let r = new Ue;
        return t1.pos && r.translate(t1.pos), t1.scale && r.scale(t1.scale), t1.angle && r.rotate(t1.angle), t1.parent ? r.mult(t1.parent.transform) : r;
    }
    i(jt, "calcTransform");
    function Un(t1 = []) {
        let r = new Map, s1 = {}, u = new Ne, a1 = [], h1 = null, f = !1, b1 = {
            id: Gr(),
            hidden: !1,
            transform: new Ue,
            children: [],
            parent: null,
            set paused (d){
                if (d !== f) {
                    f = d;
                    for (let w of a1)w.paused = d;
                }
            },
            get paused () {
                return f;
            },
            add (d1 = []) {
                let w = Array.isArray(d1) ? Un(d1) : d1;
                if (w.parent) throw new Error("Cannot add a game obj that already has a parent.");
                return w.parent = this, w.transform = jt(w), this.children.push(w), w.trigger("add", w), C.events.trigger("add", w), w;
            },
            readd (d1) {
                let w = this.children.indexOf(d1);
                return w !== -1 && (this.children.splice(w, 1), this.children.push(d1)), d1;
            },
            remove (d1) {
                let w = this.children.indexOf(d1);
                if (w !== -1) {
                    d1.parent = null, this.children.splice(w, 1);
                    let A = i((D)=>{
                        D.trigger("destroy"), C.events.trigger("destroy", D), D.children.forEach((N)=>A(N));
                    }, "trigger");
                    A(d1);
                }
            },
            removeAll (d1) {
                if (d1) this.get(d1).forEach((w)=>this.remove(w));
                else for (let w of [
                    ...this.children
                ])this.remove(w);
            },
            update () {
                this.paused || (this.children.sort((d1, w)=>(d1.z ?? 0) - (w.z ?? 0)).forEach((d1)=>d1.update()), this.trigger("update"));
            },
            draw () {
                if (this.hidden) return;
                this.canvas && this.canvas.bind();
                let d1 = E.fixed;
                this.fixed && (E.fixed = !0), le(), ne(this.pos), He(this.scale), se(this.angle);
                let w = this.children.sort((A, D)=>(A.z ?? 0) - (D.z ?? 0));
                if (this.mask) {
                    let A = {
                        intersect: $e,
                        subtract: kt
                    }[this.mask];
                    if (!A) throw new Error(`Invalid mask func: "${this.mask}"`);
                    A(()=>{
                        w.forEach((D)=>D.draw());
                    }, ()=>{
                        this.trigger("draw");
                    });
                } else this.trigger("draw"), w.forEach((A)=>A.draw());
                ae(), E.fixed = d1, this.canvas && this.canvas.unbind();
            },
            drawInspect () {
                this.hidden || (le(), ne(this.pos), He(this.scale), se(this.angle), this.children.sort((d1, w)=>(d1.z ?? 0) - (w.z ?? 0)).forEach((d1)=>d1.drawInspect()), this.trigger("drawInspect"), ae());
            },
            use (d1) {
                if (!d1) return;
                if (typeof d1 == "string") return this.use({
                    id: d1
                });
                let w = [];
                d1.id && (this.unuse(d1.id), s1[d1.id] = [], w = s1[d1.id], r.set(d1.id, d1));
                for(let D in d1){
                    if (Ji.has(D)) continue;
                    let N = Object.getOwnPropertyDescriptor(d1, D);
                    if (typeof N.value == "function" && (d1[D] = d1[D].bind(this)), N.set && Object.defineProperty(d1, D, {
                        set: N.set.bind(this)
                    }), N.get && Object.defineProperty(d1, D, {
                        get: N.get.bind(this)
                    }), Qi.has(D)) {
                        let _ = D === "add" ? ()=>{
                            h1 = i((M1)=>w.push(M1), "onCurCompCleanup"), d1[D](), h1 = null;
                        } : d1[D];
                        w.push(this.on(D, _).cancel);
                    } else if (this[D] === void 0) Object.defineProperty(this, D, {
                        get: ()=>d1[D],
                        set: (_)=>d1[D] = _,
                        configurable: !0,
                        enumerable: !0
                    }), w.push(()=>delete this[D]);
                    else throw new Error(`Duplicate component property: "${D}"`);
                }
                let A = i(()=>{
                    if (d1.require) {
                        for (let D of d1.require)if (!this.c(D)) throw new Error(`Component "${d1.id}" requires component "${D}"`);
                    }
                }, "checkDeps");
                d1.destroy && w.push(d1.destroy.bind(this)), this.exists() ? (A(), d1.add && (h1 = i((D)=>w.push(D), "onCurCompCleanup"), d1.add.call(this), h1 = null)) : d1.require && w.push(this.on("add", A).cancel);
            },
            unuse (d1) {
                s1[d1] && (s1[d1].forEach((w)=>w()), delete s1[d1]), r.has(d1) && r.delete(d1);
            },
            c (d1) {
                return r.get(d1);
            },
            get (d1, w = {}) {
                let A = w.recursive ? this.children.flatMap(i(function D(N) {
                    return [
                        N,
                        ...N.children.flatMap(D)
                    ];
                }, "recurse")) : this.children;
                if (A = A.filter((D)=>d1 ? D.is(d1) : !0), w.liveUpdate) {
                    let D = i((_)=>w.recursive ? this.isAncestorOf(_) : _.parent === this, "isChild"), N = [];
                    N.push(En((_)=>{
                        D(_) && _.is(d1) && A.push(_);
                    })), N.push(ir((_)=>{
                        if (D(_) && _.is(d1)) {
                            let M1 = A.findIndex((O)=>O.id === _.id);
                            M1 !== -1 && A.splice(M1, 1);
                        }
                    })), this.onDestroy(()=>{
                        for (let _ of N)_.cancel();
                    });
                }
                return A;
            },
            isAncestorOf (d1) {
                return d1.parent ? d1.parent === this || this.isAncestorOf(d1.parent) : !1;
            },
            exists () {
                return C.root.isAncestorOf(this);
            },
            is (d1) {
                if (d1 === "*") return !0;
                if (Array.isArray(d1)) {
                    for (let w of d1)if (!this.c(w)) return !1;
                    return !0;
                } else return this.c(d1) != null;
            },
            on (d1, w) {
                let A = u.on(d1, w.bind(this));
                return h1 && h1(()=>A.cancel()), A;
            },
            trigger (d1, ...w) {
                u.trigger(d1, ...w), C.objEvents.trigger(d1, this, ...w);
            },
            destroy () {
                this.parent && this.parent.remove(this);
            },
            inspect () {
                let d1 = {};
                for (let [w, A] of r)d1[w] = A.inspect ? A.inspect() : null;
                return d1;
            },
            onAdd (d1) {
                return this.on("add", d1);
            },
            onUpdate (d1) {
                return this.on("update", d1);
            },
            onDraw (d1) {
                return this.on("draw", d1);
            },
            onDestroy (d1) {
                return this.on("destroy", d1);
            },
            clearEvents () {
                u.clear();
            }
        }, p1 = [
            "onKeyPress",
            "onKeyPressRepeat",
            "onKeyDown",
            "onKeyRelease",
            "onMousePress",
            "onMouseDown",
            "onMouseRelease",
            "onMouseMove",
            "onCharInput",
            "onMouseMove",
            "onTouchStart",
            "onTouchMove",
            "onTouchEnd",
            "onScroll",
            "onGamepadButtonPress",
            "onGamepadButtonDown",
            "onGamepadButtonRelease",
            "onGamepadStick"
        ];
        for (let d1 of p1)b1[d1] = (...w)=>{
            let A = y[d1](...w);
            return a1.push(A), b1.onDestroy(()=>A.cancel()), A;
        };
        for (let d1 of t1)b1.use(d1);
        return b1;
    }
    i(Un, "make");
    function ze(t1, r, s1) {
        return C.objEvents[t1] || (C.objEvents[t1] = new Ut), C.objEvents.on(t1, (u, ...a1)=>{
            u.is(r) && s1(u, ...a1);
        });
    }
    i(ze, "on");
    let as = Ee((t1)=>{
        let r = gt([
            {
                update: t1
            }
        ]);
        return {
            get paused () {
                return r.paused;
            },
            set paused (s){
                r.paused = s;
            },
            cancel: ()=>r.destroy()
        };
    }, (t1, r)=>ze("update", t1, r)), us = Ee((t1)=>{
        let r = gt([
            {
                draw: t1
            }
        ]);
        return {
            get paused () {
                return r.hidden;
            },
            set paused (s){
                r.hidden = s;
            },
            cancel: ()=>r.destroy()
        };
    }, (t1, r)=>ze("draw", t1, r)), En = Ee((t1)=>C.events.on("add", t1), (t1, r)=>ze("add", t1, r)), ir = Ee((t1)=>C.events.on("destroy", t1), (t1, r)=>ze("destroy", t1, r));
    function cs(t1, r, s1) {
        return ze("collide", t1, (u, a1, h1)=>a1.is(r) && s1(u, a1, h1));
    }
    i(cs, "onCollide");
    function hs(t1, r, s1) {
        return ze("collideUpdate", t1, (u, a1, h1)=>a1.is(r) && s1(u, a1, h1));
    }
    i(hs, "onCollideUpdate");
    function ls(t1, r, s1) {
        return ze("collideEnd", t1, (u, a1, h1)=>a1.is(r) && s1(u, a1, h1));
    }
    i(ls, "onCollideEnd");
    function Ht(t1, r) {
        On(t1, {
            recursive: !0
        }).forEach(r), En(t1, r);
    }
    i(Ht, "forAllCurrentAndFuture");
    let ds = Ee((t1)=>y.onMousePress(t1), (t1, r)=>{
        let s1 = [];
        return Ht(t1, (u)=>{
            if (!u.area) throw new Error("onClick() requires the object to have area() component");
            s1.push(u.onClick(()=>r(u)));
        }), ke.join(s1);
    });
    function fs(t1, r) {
        let s1 = [];
        return Ht(t1, (u)=>{
            if (!u.area) throw new Error("onHover() requires the object to have area() component");
            s1.push(u.onHover(()=>r(u)));
        }), ke.join(s1);
    }
    i(fs, "onHover");
    function ms(t1, r) {
        let s1 = [];
        return Ht(t1, (u)=>{
            if (!u.area) throw new Error("onHoverUpdate() requires the object to have area() component");
            s1.push(u.onHoverUpdate(()=>r(u)));
        }), ke.join(s1);
    }
    i(ms, "onHoverUpdate");
    function ps(t1, r) {
        let s1 = [];
        return Ht(t1, (u)=>{
            if (!u.area) throw new Error("onHoverEnd() requires the object to have area() component");
            s1.push(u.onHoverEnd(()=>r(u)));
        }), ke.join(s1);
    }
    i(ps, "onHoverEnd");
    function gs(t1) {
        C.gravity = t1;
    }
    i(gs, "setGravity");
    function ws() {
        return C.gravity;
    }
    i(ws, "getGravity");
    function bs(...t1) {
        t1.length === 1 || t1.length === 2 ? (E.bgColor = J(t1[0]), t1[1] && (E.bgAlpha = t1[1])) : (t1.length === 3 || t1.length === 4) && (E.bgColor = J(t1[0], t1[1], t1[2]), t1[3] && (E.bgAlpha = t1[3])), S.clearColor(E.bgColor.r / 255, E.bgColor.g / 255, E.bgColor.b / 255, E.bgAlpha);
    }
    i(bs, "setBackground");
    function vs() {
        return E.bgColor.clone();
    }
    i(vs, "getBackground");
    function qt(...t1) {
        return {
            id: "pos",
            pos: T(...t1),
            moveBy (...r) {
                this.pos = this.pos.add(T(...r));
            },
            move (...r) {
                this.moveBy(T(...r).scale(Me()));
            },
            moveTo (...r) {
                if (typeof r[0] == "number" && typeof r[1] == "number") return this.moveTo(T(r[0], r[1]), r[2]);
                let s1 = r[0], u = r[1];
                if (u === void 0) {
                    this.pos = T(s1);
                    return;
                }
                let a1 = s1.sub(this.pos);
                if (a1.len() <= u * Me()) {
                    this.pos = T(s1);
                    return;
                }
                this.move(a1.unit().scale(u));
            },
            worldPos () {
                return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
            },
            screenPos () {
                let r = this.worldPos();
                return pt(this) ? r : rr(r);
            },
            inspect () {
                return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
            },
            drawInspect () {
                L({
                    color: J(255, 0, 0),
                    radius: 4 / De()
                });
            }
        };
    }
    i(qt, "pos");
    function $t(...t1) {
        return t1.length === 0 ? $t(1) : {
            id: "scale",
            scale: T(...t1),
            scaleTo (...r) {
                this.scale = T(...r);
            },
            scaleBy (...r) {
                this.scale.scale(T(...r));
            },
            inspect () {
                return `(${mt(this.scale.x, 2)}, ${mt(this.scale.y, 2)})`;
            }
        };
    }
    i($t, "scale");
    function ys(t1) {
        return {
            id: "rotate",
            angle: t1 ?? 0,
            rotateBy (r) {
                this.angle += r;
            },
            rotateTo (r) {
                this.angle = r;
            },
            inspect () {
                return `${Math.round(this.angle)}`;
            }
        };
    }
    i(ys, "rotate");
    function xs(...t1) {
        return {
            id: "color",
            color: J(...t1),
            inspect () {
                return this.color.toString();
            }
        };
    }
    i(xs, "color");
    function mt(t1, r) {
        return Number(t1.toFixed(r));
    }
    i(mt, "toFixed");
    function Us(t1) {
        return {
            id: "opacity",
            opacity: t1 ?? 1,
            inspect () {
                return `${mt(this.opacity, 1)}`;
            },
            fadeOut (r = 1, s1 = Ct.linear) {
                return Rn(this.opacity, 0, r, (u)=>this.opacity = u, s1);
            }
        };
    }
    i(Us, "opacity");
    function Sn(t1) {
        if (!t1) throw new Error("Please define an anchor");
        return {
            id: "anchor",
            anchor: t1,
            inspect () {
                return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
            }
        };
    }
    i(Sn, "anchor");
    function Es(t1) {
        return {
            id: "z",
            z: t1,
            inspect () {
                return `${this.z}`;
            }
        };
    }
    i(Es, "z");
    function Ss(t1, r) {
        return {
            id: "follow",
            require: [
                "pos"
            ],
            follow: {
                obj: t1,
                offset: r ?? T(0)
            },
            add () {
                t1.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
            },
            update () {
                t1.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
            }
        };
    }
    i(Ss, "follow");
    function Cs(t1, r) {
        let s1 = typeof t1 == "number" ? v.fromAngle(t1) : t1.unit();
        return {
            id: "move",
            require: [
                "pos"
            ],
            update () {
                this.move(s1.scale(r));
            }
        };
    }
    i(Cs, "move");
    let As = 200;
    function Ts(t1 = {}) {
        let r = t1.distance ?? As, s1 = !1;
        return {
            id: "offscreen",
            require: [
                "pos"
            ],
            isOffScreen () {
                let u = this.screenPos(), a1 = new de(T(0), we(), xe());
                return !vt(a1, u) && a1.sdistToPoint(u) > r * r;
            },
            onExitScreen (u) {
                return this.on("exitView", u);
            },
            onEnterScreen (u) {
                return this.on("enterView", u);
            },
            update () {
                this.isOffScreen() ? (s1 || (this.trigger("exitView"), s1 = !0), t1.hide && (this.hidden = !0), t1.pause && (this.paused = !0), t1.destroy && this.destroy()) : (s1 && (this.trigger("enterView"), s1 = !1), t1.hide && (this.hidden = !1), t1.pause && (this.paused = !1));
            }
        };
    }
    i(Ts, "offscreen");
    function pt(t1) {
        return t1.fixed ? !0 : t1.parent ? pt(t1.parent) : !1;
    }
    i(pt, "isFixed");
    function Os(t1 = {}) {
        let r = {}, s1 = new Set;
        return {
            id: "area",
            collisionIgnore: t1.collisionIgnore ?? [],
            add () {
                this.area.cursor && this.onHover(()=>y.setCursor(this.area.cursor)), this.onCollideUpdate((u, a1)=>{
                    r[u.id] || this.trigger("collide", u, a1), r[u.id] = a1, s1.add(u.id);
                });
            },
            update () {
                for(let u in r)s1.has(Number(u)) || (this.trigger("collideEnd", r[u].target), delete r[u]);
                s1.clear();
            },
            drawInspect () {
                let u = this.localArea();
                le(), He(this.area.scale), ne(this.area.offset);
                let a1 = {
                    outline: {
                        width: 4 / De(),
                        color: J(0, 0, 255)
                    },
                    anchor: this.anchor,
                    fill: !1,
                    fixed: pt(this)
                };
                u instanceof de ? ge({
                    ...a1,
                    pos: u.pos,
                    width: u.width,
                    height: u.height
                }) : u instanceof Ke ? z({
                    ...a1,
                    pts: u.pts
                }) : u instanceof yt && L({
                    ...a1,
                    pos: u.center,
                    radius: u.radius
                }), ae();
            },
            area: {
                shape: t1.shape ?? null,
                scale: t1.scale ? T(t1.scale) : T(1),
                offset: t1.offset ?? T(0),
                cursor: t1.cursor ?? null
            },
            isClicked () {
                return y.isMousePressed() && this.isHovering();
            },
            isHovering () {
                let u = pt(this) ? Nt() : sr(Nt());
                return this.hasPoint(u);
            },
            checkCollision (u) {
                return r[u.id] ?? null;
            },
            getCollisions () {
                return Object.values(r);
            },
            isColliding (u) {
                return !!r[u.id];
            },
            isOverlapping (u) {
                let a1 = r[u.id];
                return a1 && a1.hasOverlap();
            },
            onClick (u) {
                let a1 = y.onMousePress("left", ()=>{
                    this.isHovering() && u();
                });
                return this.onDestroy(()=>a1.cancel()), a1;
            },
            onHover (u) {
                let a1 = !1;
                return this.onUpdate(()=>{
                    a1 ? a1 = this.isHovering() : this.isHovering() && (a1 = !0, u());
                });
            },
            onHoverUpdate (u) {
                return this.onUpdate(()=>{
                    this.isHovering() && u();
                });
            },
            onHoverEnd (u) {
                let a1 = !1;
                return this.onUpdate(()=>{
                    a1 ? this.isHovering() || (a1 = !1, u()) : a1 = this.isHovering();
                });
            },
            onCollide (u, a1) {
                if (typeof u == "function" && a1 === void 0) return this.on("collide", u);
                if (typeof u == "string") return this.onCollide((h1, f)=>{
                    h1.is(u) && a1(h1, f);
                });
            },
            onCollideUpdate (u, a1) {
                if (typeof u == "function" && a1 === void 0) return this.on("collideUpdate", u);
                if (typeof u == "string") return this.on("collideUpdate", (h1, f)=>h1.is(u) && a1(h1, f));
            },
            onCollideEnd (u, a1) {
                if (typeof u == "function" && a1 === void 0) return this.on("collideEnd", u);
                if (typeof u == "string") return this.on("collideEnd", (h1)=>h1.is(u) && a1(h1));
            },
            hasPoint (u) {
                return _n(this.worldArea(), u);
            },
            resolveCollision (u) {
                let a1 = this.checkCollision(u);
                a1 && !a1.resolved && (this.pos = this.pos.add(a1.displacement), a1.resolved = !0);
            },
            localArea () {
                return this.area.shape ? this.area.shape : this.renderArea();
            },
            worldArea () {
                let u = this.localArea();
                if (!(u instanceof Ke || u instanceof de)) throw new Error("Only support polygon and rect shapes for now");
                let a1 = this.transform.clone().scale(T(this.area.scale ?? 1)).translate(this.area.offset);
                if (u instanceof de) {
                    let h1 = ut(this.anchor || tn).add(1, 1).scale(-0.5).scale(u.width, u.height);
                    a1.translate(h1);
                }
                return u.transform(a1);
            },
            screenArea () {
                let u = this.worldArea();
                return pt(this) ? u : u.transform(C.cam.transform);
            }
        };
    }
    i(Os, "area");
    function Qe(t1) {
        return {
            color: t1.color,
            opacity: t1.opacity,
            anchor: t1.anchor,
            outline: t1.outline,
            shader: t1.shader,
            uniform: t1.uniform
        };
    }
    i(Qe, "getRenderProps");
    function Cn(t1, r = {}) {
        let s1 = null, u = null, a1 = null, h1 = new be;
        if (!t1) throw new Error("Please pass the resource name or data to sprite()");
        let f = i((b1, p1, d1, w)=>{
            let A = T(1, 1);
            return d1 && w ? (A.x = d1 / (b1.width * p1.w), A.y = w / (b1.height * p1.h)) : d1 ? (A.x = d1 / (b1.width * p1.w), A.y = A.x) : w && (A.y = w / (b1.height * p1.h), A.x = A.y), A;
        }, "calcTexScale");
        return {
            id: "sprite",
            width: 0,
            height: 0,
            frame: r.frame || 0,
            quad: r.quad || new oe(0, 0, 1, 1),
            animSpeed: r.animSpeed ?? 1,
            flipX: r.flipX ?? !1,
            flipY: r.flipY ?? !1,
            draw () {
                if (!s1) return;
                let b1 = s1.frames[this.frame ?? 0];
                if (!b1) throw new Error(`Frame not found: ${this.frame ?? 0}`);
                if (s1.slice9) {
                    let { left: p1, right: d1, top: w, bottom: A } = s1.slice9, D = s1.tex.width * b1.w, N = s1.tex.height * b1.h, _ = this.width - p1 - d1, M1 = this.height - w - A, O = p1 / D, ie = d1 / D, Z = 1 - O - ie, H = w / N, V = A / N, fe = 1 - H - V, U = [
                        ce(0, 0, O, H),
                        ce(O, 0, Z, H),
                        ce(O + Z, 0, ie, H),
                        ce(0, H, O, fe),
                        ce(O, H, Z, fe),
                        ce(O + Z, H, ie, fe),
                        ce(0, H + fe, O, V),
                        ce(O, H + fe, Z, V),
                        ce(O + Z, H + fe, ie, V),
                        ce(0, 0, p1, w),
                        ce(p1, 0, _, w),
                        ce(p1 + _, 0, d1, w),
                        ce(0, w, p1, M1),
                        ce(p1, w, _, M1),
                        ce(p1 + _, w, d1, M1),
                        ce(0, w + M1, p1, A),
                        ce(p1, w + M1, _, A),
                        ce(p1 + _, w + M1, d1, A)
                    ];
                    for(let G = 0; G < 9; G++){
                        let B = U[G], F = U[G + 9];
                        We(Object.assign(Qe(this), {
                            pos: F.pos(),
                            tex: s1.tex,
                            quad: b1.scale(B),
                            flipX: this.flipX,
                            flipY: this.flipY,
                            tiled: r.tiled,
                            width: F.w,
                            height: F.h
                        }));
                    }
                } else We(Object.assign(Qe(this), {
                    tex: s1.tex,
                    quad: b1.scale(this.quad ?? new oe(0, 0, 1, 1)),
                    flipX: this.flipX,
                    flipY: this.flipY,
                    tiled: r.tiled,
                    width: this.width,
                    height: this.height
                }));
            },
            add () {
                let b1 = i((d1)=>{
                    let w = d1.frames[0].clone();
                    r.quad && (w = w.scale(r.quad));
                    let A = f(d1.tex, w, r.width, r.height);
                    this.width = d1.tex.width * w.w * A.x, this.height = d1.tex.height * w.h * A.y, r.anim && this.play(r.anim), s1 = d1, h1.trigger(s1);
                }, "setSpriteData"), p1 = ct(t1);
                p1 ? p1.onLoad(b1) : Tn(()=>b1(ct(t1).data));
            },
            update () {
                if (!u) return;
                let b1 = s1.anims[u.name];
                if (typeof b1 == "number") {
                    this.frame = b1;
                    return;
                }
                if (b1.speed === 0) throw new Error("Sprite anim speed cannot be 0");
                u.timer += Me() * this.animSpeed, u.timer >= 1 / u.speed && (u.timer = 0, this.frame += a1, (this.frame < Math.min(b1.from, b1.to) || this.frame > Math.max(b1.from, b1.to)) && (u.loop ? u.pingpong ? (this.frame -= a1, a1 *= -1, this.frame += a1) : this.frame = b1.from : (this.frame = b1.to, u.onEnd(), this.stop())));
            },
            play (b1, p1 = {}) {
                if (!s1) {
                    h1.add(()=>this.play(b1, p1));
                    return;
                }
                let d1 = s1.anims[b1];
                if (d1 === void 0) throw new Error(`Anim not found: ${b1}`);
                u && this.stop(), u = typeof d1 == "number" ? {
                    name: b1,
                    timer: 0,
                    loop: !1,
                    pingpong: !1,
                    speed: 0,
                    onEnd: ()=>{}
                } : {
                    name: b1,
                    timer: 0,
                    loop: p1.loop ?? d1.loop ?? !1,
                    pingpong: p1.pingpong ?? d1.pingpong ?? !1,
                    speed: p1.speed ?? d1.speed ?? 10,
                    onEnd: p1.onEnd ?? (()=>{})
                }, a1 = typeof d1 == "number" ? null : d1.from < d1.to ? 1 : -1, this.frame = typeof d1 == "number" ? d1 : d1.from, this.trigger("animStart", b1);
            },
            stop () {
                if (!u) return;
                let b1 = u.name;
                u = null, this.trigger("animEnd", b1);
            },
            numFrames () {
                return s1?.frames.length ?? 0;
            },
            curAnim () {
                return u?.name;
            },
            onAnimEnd (b1) {
                return this.on("animEnd", b1);
            },
            onAnimStart (b1) {
                return this.on("animStart", b1);
            },
            renderArea () {
                return new de(T(0), this.width, this.height);
            },
            inspect () {
                if (typeof t1 == "string") return `"${t1}"`;
            }
        };
    }
    i(Cn, "sprite");
    function Rs(t1, r = {}) {
        function s1(a1) {
            let h1 = Xe(Object.assign(Qe(a1), {
                text: a1.text + "",
                size: a1.textSize,
                font: a1.font,
                width: r.width && a1.width,
                align: a1.align,
                letterSpacing: a1.letterSpacing,
                lineSpacing: a1.lineSpacing,
                transform: a1.textTransform,
                styles: a1.textStyles
            }));
            return r.width || (a1.width = h1.width / (a1.scale?.x || 1)), a1.height = h1.height / (a1.scale?.y || 1), h1;
        }
        i(s1, "update");
        let u = {
            id: "text",
            set text (a){
                t1 = a, s1(this);
            },
            get text () {
                return t1;
            },
            textSize: r.size ?? ji,
            font: r.font,
            width: r.width ?? 0,
            height: 0,
            align: r.align,
            lineSpacing: r.lineSpacing,
            letterSpacing: r.letterSpacing,
            textTransform: r.transform,
            textStyles: r.styles,
            add () {
                Tn(()=>s1(this));
            },
            draw () {
                Je(s1(this));
            },
            renderArea () {
                return new de(T(0), this.width, this.height);
            }
        };
        return s1(u), u;
    }
    i(Rs, "text");
    function Ps(t1, r = {}) {
        if (t1.length < 3) throw new Error(`Polygon's need more than two points, ${t1.length} points provided`);
        return {
            id: "polygon",
            pts: t1,
            colors: r.colors,
            radius: r.radius,
            draw () {
                z(Object.assign(Qe(this), {
                    pts: this.pts,
                    colors: this.colors,
                    radius: this.radius,
                    fill: r.fill
                }));
            },
            renderArea () {
                return new Ke(this.pts);
            },
            inspect () {
                return this.pts.map((s1)=>`[${s1.x},${s1.y}]`).join(",");
            }
        };
    }
    i(Ps, "polygon");
    function Ds(t1, r, s1 = {}) {
        return {
            id: "rect",
            width: t1,
            height: r,
            radius: s1.radius || 0,
            draw () {
                ge(Object.assign(Qe(this), {
                    width: this.width,
                    height: this.height,
                    radius: this.radius,
                    fill: s1.fill
                }));
            },
            renderArea () {
                return new de(T(0), this.width, this.height);
            },
            inspect () {
                return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
            }
        };
    }
    i(Ds, "rect");
    function Ms(t1, r) {
        return {
            id: "rect",
            width: t1,
            height: r,
            draw () {
                Be(Object.assign(Qe(this), {
                    width: this.width,
                    height: this.height
                }));
            },
            renderArea () {
                return new de(T(0), this.width, this.height);
            },
            inspect () {
                return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
            }
        };
    }
    i(Ms, "uvquad");
    function Gs(t1, r = {}) {
        return {
            id: "circle",
            radius: t1,
            draw () {
                L(Object.assign(Qe(this), {
                    radius: this.radius,
                    fill: r.fill
                }));
            },
            renderArea () {
                return new de(new v(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
            },
            inspect () {
                return `${Math.ceil(this.radius)}`;
            }
        };
    }
    i(Gs, "circle");
    function Bs(t1 = 1, r = J(0, 0, 0)) {
        return {
            id: "outline",
            outline: {
                width: t1,
                color: r
            }
        };
    }
    i(Bs, "outline");
    function An() {
        return {
            id: "timer",
            wait (t1, r) {
                let s1 = [];
                r && s1.push(r);
                let u = 0, a1 = this.onUpdate(()=>{
                    u += Me(), u >= t1 && (s1.forEach((h1)=>h1()), a1.cancel());
                });
                return {
                    get paused () {
                        return a1.paused;
                    },
                    set paused (h){
                        a1.paused = h;
                    },
                    cancel: a1.cancel,
                    onEnd (h1) {
                        s1.push(h1);
                    },
                    then (h1) {
                        return this.onEnd(h1), this;
                    }
                };
            },
            loop (t1, r) {
                let s1 = null, u = i(()=>{
                    s1 = this.wait(t1, u), r();
                }, "newAction");
                return s1 = this.wait(0, u), {
                    get paused () {
                        return s1.paused;
                    },
                    set paused (a){
                        s1.paused = a;
                    },
                    cancel: ()=>s1.cancel()
                };
            },
            tween (t1, r, s1, u, a1 = Ct.linear) {
                let h1 = 0, f = [], b1 = this.onUpdate(()=>{
                    h1 += Me();
                    let p1 = Math.min(h1 / s1, 1);
                    u(Ve(t1, r, a1(p1))), p1 === 1 && (b1.cancel(), u(r), f.forEach((d1)=>d1()));
                });
                return {
                    get paused () {
                        return b1.paused;
                    },
                    set paused (p){
                        b1.paused = p;
                    },
                    onEnd (p1) {
                        f.push(p1);
                    },
                    then (p1) {
                        return this.onEnd(p1), this;
                    },
                    cancel () {
                        b1.cancel();
                    },
                    finish () {
                        b1.cancel(), u(r), f.forEach((p1)=>p1());
                    }
                };
            }
        };
    }
    i(An, "timer");
    let Fs = 640, Is = 65536;
    function Ls(t1 = {}) {
        let r = null, s1 = null, u = !1;
        return {
            id: "body",
            require: [
                "pos",
                "area"
            ],
            vel: new v(0),
            jumpForce: t1.jumpForce ?? Fs,
            gravityScale: t1.gravityScale ?? 1,
            isStatic: t1.isStatic ?? !1,
            mass: t1.mass ?? 1,
            add () {
                if (this.mass === 0) throw new Error("Can't set body mass to 0");
                this.onCollideUpdate((a1, h1)=>{
                    if (a1.is("body") && !h1.resolved && (this.trigger("beforePhysicsResolve", h1), a1.trigger("beforePhysicsResolve", h1.reverse()), !h1.resolved && !(this.isStatic && a1.isStatic))) {
                        if (!this.isStatic && !a1.isStatic) {
                            let f = this.mass + a1.mass;
                            this.pos = this.pos.add(h1.displacement.scale(a1.mass / f)), a1.pos = a1.pos.add(h1.displacement.scale(-this.mass / f)), this.transform = jt(this), a1.transform = jt(a1);
                        } else {
                            let f = !this.isStatic && a1.isStatic ? h1 : h1.reverse();
                            f.source.pos = f.source.pos.add(f.displacement), f.source.transform = jt(f.source);
                        }
                        h1.resolved = !0, this.trigger("physicsResolve", h1), a1.trigger("physicsResolve", h1.reverse());
                    }
                }), this.onPhysicsResolve((a1)=>{
                    C.gravity && (a1.isBottom() && this.isFalling() ? (this.vel.y = 0, r = a1.target, s1 = a1.target.pos, u ? u = !1 : this.trigger("ground", r)) : a1.isTop() && this.isJumping() && (this.vel.y = 0, this.trigger("headbutt", a1.target)));
                });
            },
            update () {
                if (!C.gravity || this.isStatic) return;
                if (u && (r = null, s1 = null, this.trigger("fallOff"), u = !1), r) {
                    if (!this.isColliding(r) || !r.exists() || !r.is("body")) u = !0;
                    else {
                        !r.pos.eq(s1) && t1.stickToPlatform !== !1 && this.moveBy(r.pos.sub(s1)), s1 = r.pos;
                        return;
                    }
                }
                let a1 = this.vel.y;
                this.vel.y += C.gravity * this.gravityScale * Me(), this.vel.y = Math.min(this.vel.y, t1.maxVelocity ?? Is), a1 < 0 && this.vel.y >= 0 && this.trigger("fall"), this.move(this.vel);
            },
            onPhysicsResolve (a1) {
                return this.on("physicsResolve", a1);
            },
            onBeforePhysicsResolve (a1) {
                return this.on("beforePhysicsResolve", a1);
            },
            curPlatform () {
                return r;
            },
            isGrounded () {
                return r !== null;
            },
            isFalling () {
                return this.vel.y > 0;
            },
            isJumping () {
                return this.vel.y < 0;
            },
            jump (a1) {
                r = null, s1 = null, this.vel.y = -a1 || -this.jumpForce;
            },
            onGround (a1) {
                return this.on("ground", a1);
            },
            onFall (a1) {
                return this.on("fall", a1);
            },
            onFallOff (a1) {
                return this.on("fallOff", a1);
            },
            onHeadbutt (a1) {
                return this.on("headbutt", a1);
            }
        };
    }
    i(Ls, "body");
    function Vs(t1 = 2) {
        let r = t1;
        return {
            id: "doubleJump",
            require: [
                "body"
            ],
            numJumps: t1,
            add () {
                this.onGround(()=>{
                    r = this.numJumps;
                });
            },
            doubleJump (s1) {
                r <= 0 || (r < this.numJumps && this.trigger("doubleJump"), r--, this.jump(s1));
            },
            onDoubleJump (s1) {
                return this.on("doubleJump", s1);
            },
            inspect () {
                return `${r}`;
            }
        };
    }
    i(Vs, "doubleJump");
    function _s(t1, r) {
        return {
            id: "shader",
            shader: t1,
            ...typeof r == "function" ? {
                uniform: r(),
                update () {
                    this.uniform = r();
                }
            } : {
                uniform: r
            }
        };
    }
    i(_s, "shader");
    function ks() {
        return {
            id: "fixed",
            fixed: !0
        };
    }
    i(ks, "fixed");
    function or(t1) {
        return {
            id: "stay",
            stay: !0,
            scenesToStay: t1
        };
    }
    i(or, "stay");
    function Ns(t1, r) {
        if (t1 == null) throw new Error("health() requires the initial amount of hp");
        return {
            id: "health",
            hurt (s1 = 1) {
                this.setHP(t1 - s1), this.trigger("hurt", s1);
            },
            heal (s1 = 1) {
                let u = t1;
                this.setHP(t1 + s1), this.trigger("heal", t1 - u);
            },
            hp () {
                return t1;
            },
            maxHP () {
                return r ?? null;
            },
            setMaxHP (s1) {
                r = s1;
            },
            setHP (s1) {
                t1 = r ? Math.min(r, s1) : s1, t1 <= 0 && this.trigger("death");
            },
            onHurt (s1) {
                return this.on("hurt", s1);
            },
            onHeal (s1) {
                return this.on("heal", s1);
            },
            onDeath (s1) {
                return this.on("death", s1);
            },
            inspect () {
                return `${t1}`;
            }
        };
    }
    i(Ns, "health");
    function js(t1, r = {}) {
        if (t1 == null) throw new Error("lifespan() requires time");
        let s1 = r.fade ?? 0;
        return {
            id: "lifespan",
            async add () {
                await hr(t1), s1 > 0 && this.opacity && await Rn(this.opacity, 0, s1, (u)=>this.opacity = u, Ct.linear), this.destroy();
            }
        };
    }
    i(js, "lifespan");
    function Hs(t1, r, s1) {
        if (!t1) throw new Error("state() requires an initial state");
        let u = {};
        function a1(p1) {
            u[p1] || (u[p1] = {
                enter: new be,
                end: new be,
                update: new be,
                draw: new be
            });
        }
        i(a1, "initStateEvents");
        function h1(p1, d1, w) {
            return a1(d1), u[d1][p1].add(w);
        }
        i(h1, "on");
        function f(p1, d1, ...w) {
            a1(d1), u[d1][p1].trigger(...w);
        }
        i(f, "trigger");
        let b1 = !1;
        return {
            id: "state",
            state: t1,
            enterState (p1, ...d1) {
                if (b1 = !0, r && !r.includes(p1)) throw new Error(`State not found: ${p1}`);
                let w = this.state;
                if (s1) {
                    if (!s1?.[w]) return;
                    let A = typeof s1[w] == "string" ? [
                        s1[w]
                    ] : s1[w];
                    if (!A.includes(p1)) throw new Error(`Cannot transition state from "${w}" to "${p1}". Available transitions: ${A.map((D)=>`"${D}"`).join(", ")}`);
                }
                f("end", w, ...d1), this.state = p1, f("enter", p1, ...d1), f("enter", `${w} -> ${p1}`, ...d1);
            },
            onStateTransition (p1, d1, w) {
                return h1("enter", `${p1} -> ${d1}`, w);
            },
            onStateEnter (p1, d1) {
                return h1("enter", p1, d1);
            },
            onStateUpdate (p1, d1) {
                return h1("update", p1, d1);
            },
            onStateDraw (p1, d1) {
                return h1("draw", p1, d1);
            },
            onStateEnd (p1, d1) {
                return h1("end", p1, d1);
            },
            update () {
                b1 || (f("enter", t1), b1 = !0), f("update", this.state);
            },
            draw () {
                f("draw", this.state);
            },
            inspect () {
                return this.state;
            }
        };
    }
    i(Hs, "state");
    function qs(t1 = 1) {
        let r = 0, s1 = !1;
        return {
            require: [
                "opacity"
            ],
            add () {
                this.opacity = 0;
            },
            update () {
                s1 || (r += Me(), this.opacity = _e(r, 0, t1, 0, 1), r >= t1 && (this.opacity = 1, s1 = !0));
            }
        };
    }
    i(qs, "fadeIn");
    function $s(t1 = "intersect") {
        return {
            id: "mask",
            mask: t1
        };
    }
    i($s, "mask");
    function zs(t1) {
        return {
            add () {
                this.canvas = t1;
            }
        };
    }
    i(zs, "drawon");
    function Tn(t1) {
        k.loaded ? t1() : C.events.on("load", t1);
    }
    i(Tn, "onLoad");
    function Ks(t1, r) {
        C.scenes[t1] = r;
    }
    i(Ks, "scene");
    function Ys(t1, ...r) {
        if (!C.scenes[t1]) throw new Error(`Scene not found: ${t1}`);
        C.events.onOnce("frameEnd", ()=>{
            C.events.trigger("sceneLeave", t1), y.events.clear(), C.events.clear(), C.objEvents.clear(), [
                ...C.root.children
            ].forEach((s1)=>{
                (!s1.stay || s1.scenesToStay && !s1.scenesToStay.includes(t1)) && C.root.remove(s1);
            }), C.root.clearEvents(), pr(), C.cam = {
                pos: null,
                scale: T(1),
                angle: 0,
                shake: 0,
                transform: new Ue
            }, C.scenes[t1](...r);
        });
    }
    i(Ys, "go");
    function Ws(t1) {
        return C.events.on("sceneLeave", t1);
    }
    i(Ws, "onSceneLeave");
    function Xs(t1, r) {
        try {
            return JSON.parse(window.localStorage[t1]);
        } catch  {
            return r ? (ar(t1, r), r) : null;
        }
    }
    i(Xs, "getData");
    function ar(t1, r) {
        window.localStorage[t1] = JSON.stringify(r);
    }
    i(ar, "setData");
    function ur(t1, ...r) {
        let s1 = t1(Ze), u;
        typeof s1 == "function" ? u = s1(...r)(Ze) : u = s1;
        for(let a1 in u)Ze[a1] = u[a1], n.global !== !1 && (window[a1] = u[a1]);
        return Ze;
    }
    i(ur, "plug");
    function zt() {
        return T(we() / 2, xe() / 2);
    }
    i(zt, "center");
    let Js;
    ((O)=>(O[O.None = 0] = "None", O[O.Left = 1] = "Left", O[O.Top = 2] = "Top", O[O.LeftTop = 3] = "LeftTop", O[O.Right = 4] = "Right", O[O.Horizontal = 5] = "Horizontal", O[O.RightTop = 6] = "RightTop", O[O.HorizontalTop = 7] = "HorizontalTop", O[O.Bottom = 8] = "Bottom", O[O.LeftBottom = 9] = "LeftBottom", O[O.Vertical = 10] = "Vertical", O[O.LeftVertical = 11] = "LeftVertical", O[O.RightBottom = 12] = "RightBottom", O[O.HorizontalBottom = 13] = "HorizontalBottom", O[O.RightVertical = 14] = "RightVertical", O[O.All = 15] = "All"))(Js ||= {});
    function cr(t1 = {}) {
        let r = T(0), s1 = t1.isObstacle ?? !1, u = t1.cost ?? 0, a1 = t1.edges ?? [], h1 = i(()=>{
            let b1 = {
                left: 1,
                top: 2,
                right: 4,
                bottom: 8
            };
            return a1.map((p1)=>b1[p1] || 0).reduce((p1, d1)=>p1 | d1, 0);
        }, "getEdgeMask"), f = h1();
        return {
            id: "tile",
            tilePosOffset: t1.offset ?? T(0),
            set tilePos (b){
                let p1 = this.getLevel();
                r = b.clone(), this.pos = T(this.tilePos.x * p1.tileWidth(), this.tilePos.y * p1.tileHeight()).add(this.tilePosOffset);
            },
            get tilePos () {
                return r;
            },
            set isObstacle (b){
                s1 !== b && (s1 = b, this.getLevel().invalidateNavigationMap());
            },
            get isObstacle () {
                return s1;
            },
            set cost (b){
                u !== b && (u = b, this.getLevel().invalidateNavigationMap());
            },
            get cost () {
                return u;
            },
            set edges (b){
                a1 = b, f = h1(), this.getLevel().invalidateNavigationMap();
            },
            get edges () {
                return a1;
            },
            get edgeMask () {
                return f;
            },
            getLevel () {
                return this.parent;
            },
            moveLeft () {
                this.tilePos = this.tilePos.add(T(-1, 0));
            },
            moveRight () {
                this.tilePos = this.tilePos.add(T(1, 0));
            },
            moveUp () {
                this.tilePos = this.tilePos.add(T(0, -1));
            },
            moveDown () {
                this.tilePos = this.tilePos.add(T(0, 1));
            }
        };
    }
    i(cr, "tile");
    function Qs(t1, r) {
        if (!r.tileWidth || !r.tileHeight) throw new Error("Must provide tileWidth and tileHeight.");
        let s1 = gt([
            qt(r.pos ?? T(0))
        ]), u = t1.length, a1 = 0, h1 = null, f = null, b1 = null, p1 = null, d1 = i((U)=>U.x + U.y * a1, "tile2Hash"), w = i((U)=>T(Math.floor(U % a1), Math.floor(U / a1)), "hash2Tile"), A = i(()=>{
            h1 = [];
            for (let U of s1.children)D(U);
        }, "createSpatialMap"), D = i((U)=>{
            let G = d1(U.tilePos);
            h1[G] ? h1[G].push(U) : h1[G] = [
                U
            ];
        }, "insertIntoSpatialMap"), N = i((U)=>{
            let G = d1(U.tilePos);
            if (h1[G]) {
                let B = h1[G].indexOf(U);
                B >= 0 && h1[G].splice(B, 1);
            }
        }, "removeFromSpatialMap"), _ = i(()=>{
            let U = !1;
            for (let G of s1.children){
                let B = s1.pos2Tile(G.pos);
                (G.tilePos.x != B.x || G.tilePos.y != B.y) && (U = !0, N(G), G.tilePos.x = B.x, G.tilePos.y = B.y, D(G));
            }
            U && s1.trigger("spatial_map_changed");
        }, "updateSpatialMap"), M1 = i(()=>{
            let U = s1.getSpatialMap(), G = s1.numRows() * s1.numColumns();
            f ? f.length = G : f = new Array(G), f.fill(1, 0, G);
            for(let B = 0; B < U.length; B++){
                let F = U[B];
                if (F) {
                    let Y = 0;
                    for (let ee of F)if (ee.isObstacle) {
                        Y = 1 / 0;
                        break;
                    } else Y += ee.cost;
                    f[B] = Y || 1;
                }
            }
        }, "createCostMap"), O = i(()=>{
            let U = s1.getSpatialMap(), G = s1.numRows() * s1.numColumns();
            b1 ? b1.length = G : b1 = new Array(G), b1.fill(15, 0, G);
            for(let B = 0; B < U.length; B++){
                let F = U[B];
                if (F) {
                    let Y = F.length, ee = 15;
                    for(let ue = 0; ue < Y; ue++)ee |= F[ue].edgeMask;
                    b1[B] = ee;
                }
            }
        }, "createEdgeMap"), ie = i(()=>{
            let U = s1.numRows() * s1.numColumns(), G = i((F, Y)=>{
                let ee = [];
                for(ee.push(F); ee.length > 0;){
                    let ue = ee.pop();
                    V(ue).forEach((me)=>{
                        p1[me] < 0 && (p1[me] = Y, ee.push(me));
                    });
                }
            }, "traverse");
            p1 ? p1.length = U : p1 = new Array(U), p1.fill(-1, 0, U);
            let B = 0;
            for(let F = 0; F < f.length; F++){
                if (p1[F] >= 0) {
                    B++;
                    continue;
                }
                G(F, B), B++;
            }
        }, "createConnectivityMap"), Z = i((U, G)=>f[G], "getCost"), H = i((U, G)=>{
            let B = w(U), F = w(G);
            return B.dist(F);
        }, "getHeuristic"), V = i((U, G)=>{
            let B = [], F = Math.floor(U % a1), Y = F > 0 && b1[U] & 1 && f[U - 1] !== 1 / 0, ee = U >= a1 && b1[U] & 2 && f[U - a1] !== 1 / 0, ue = F < a1 - 1 && b1[U] & 4 && f[U + 1] !== 1 / 0, me = U < a1 * u - a1 - 1 && b1[U] & 8 && f[U + a1] !== 1 / 0;
            return G ? (Y && (ee && B.push(U - a1 - 1), B.push(U - 1), me && B.push(U + a1 - 1)), ee && B.push(U - a1), ue && (ee && B.push(U - a1 + 1), B.push(U + 1), me && B.push(U + a1 + 1)), me && B.push(U + a1)) : (Y && B.push(U - 1), ee && B.push(U - a1), ue && B.push(U + 1), me && B.push(U + a1)), B;
        }, "getNeighbours"), fe = {
            id: "level",
            tileWidth () {
                return r.tileWidth;
            },
            tileHeight () {
                return r.tileHeight;
            },
            spawn (U, ...G) {
                let B = T(...G), F = (()=>{
                    if (typeof U == "string") {
                        if (r.tiles[U]) {
                            if (typeof r.tiles[U] != "function") throw new Error("Level symbol def must be a function returning a component list");
                            return r.tiles[U](B);
                        } else if (r.wildcardTile) return r.wildcardTile(U, B);
                    } else {
                        if (Array.isArray(U)) return U;
                        throw new Error("Expected a symbol or a component list");
                    }
                })();
                if (!F) return null;
                let Y = !1, ee = !1;
                for (let me of F)me.id === "tile" && (ee = !0), me.id === "pos" && (Y = !0);
                Y || F.push(qt()), ee || F.push(cr());
                let ue = s1.add(F);
                return Y && (ue.tilePosOffset = ue.pos.clone()), ue.tilePos = B, h1 && (D(ue), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), ue;
            },
            numColumns () {
                return a1;
            },
            numRows () {
                return u;
            },
            levelWidth () {
                return a1 * this.tileWidth();
            },
            levelHeight () {
                return u * this.tileHeight();
            },
            tile2Pos (...U) {
                return T(...U).scale(this.tileWidth(), this.tileHeight());
            },
            pos2Tile (...U) {
                let G = T(...U);
                return T(Math.floor(G.x / this.tileWidth()), Math.floor(G.y / this.tileHeight()));
            },
            getSpatialMap () {
                return h1 || A(), h1;
            },
            onSpatialMapChanged (U) {
                return this.on("spatial_map_changed", U);
            },
            onNavigationMapInvalid (U) {
                return this.on("navigation_map_invalid", U);
            },
            getAt (U) {
                h1 || A();
                let G = d1(U);
                return h1[G] || [];
            },
            update () {
                h1 && _();
            },
            invalidateNavigationMap () {
                f = null, b1 = null, p1 = null;
            },
            onNavigationMapChanged (U) {
                return this.on("navigation_map_changed", U);
            },
            getTilePath (U, G, B = {}) {
                if (f || M1(), b1 || O(), p1 || ie(), U.x < 0 || U.x >= a1 || U.y < 0 || U.y >= u || G.x < 0 || G.x >= a1 || G.y < 0 || G.y >= u) return null;
                let F = d1(U), Y = d1(G);
                if (f[Y] === 1 / 0) return null;
                if (F === Y) return [];
                if (p1[F] != -1 && p1[F] !== p1[Y]) return null;
                let ee = new Yt((Fe, Mn)=>Fe.cost < Mn.cost);
                ee.insert({
                    cost: 0,
                    node: F
                });
                let ue = new Map;
                ue.set(F, F);
                let me = new Map;
                for(me.set(F, 0); ee.length !== 0;){
                    let Fe = ee.remove()?.node;
                    if (Fe === Y) break;
                    let Mn = V(Fe, B.allowDiagonals);
                    for (let et of Mn){
                        let Gn = (me.get(Fe) || 0) + Z(Fe, et) + H(et, Y);
                        (!me.has(et) || Gn < me.get(et)) && (me.set(et, Gn), ee.insert({
                            cost: Gn,
                            node: et
                        }), ue.set(et, Fe));
                    }
                }
                let Dn = [], wt = Y, vi = w(wt);
                for(Dn.push(vi); wt !== F;){
                    wt = ue.get(wt);
                    let Fe = w(wt);
                    Dn.push(Fe);
                }
                return Dn.reverse();
            },
            getPath (U, G, B = {}) {
                let F = this.tileWidth(), Y = this.tileHeight(), ee = this.getTilePath(this.pos2Tile(U), this.pos2Tile(G), B);
                return ee ? [
                    U,
                    ...ee.slice(1, -1).map((ue)=>ue.scale(F, Y).add(F / 2, Y / 2)),
                    G
                ] : null;
            }
        };
        return s1.use(fe), s1.onNavigationMapInvalid(()=>{
            s1.invalidateNavigationMap(), s1.trigger("navigation_map_changed");
        }), t1.forEach((U, G)=>{
            let B = U.split("");
            a1 = Math.max(B.length, a1), B.forEach((F, Y)=>{
                s1.spawn(F, T(Y, G));
            });
        }), s1;
    }
    i(Qs, "addLevel");
    function Zs(t1 = {}) {
        let r = null, s1 = null, u = null, a1 = null;
        return {
            id: "agent",
            require: [
                "pos",
                "tile"
            ],
            agentSpeed: t1.speed ?? 100,
            allowDiagonals: t1.allowDiagonals ?? !0,
            getDistanceToTarget () {
                return r ? this.pos.dist(r) : 0;
            },
            getNextLocation () {
                return s1 && u ? s1[u] : null;
            },
            getPath () {
                return s1 ? s1.slice() : null;
            },
            getTarget () {
                return r;
            },
            isNavigationFinished () {
                return s1 ? u === null : !0;
            },
            isTargetReachable () {
                return s1 !== null;
            },
            isTargetReached () {
                return r ? this.pos.eq(r) : !0;
            },
            setTarget (h1) {
                r = h1, s1 = this.getLevel().getPath(this.pos, r, {
                    allowDiagonals: this.allowDiagonals
                }), u = s1 ? 0 : null, s1 ? (a1 || (a1 = this.getLevel().onNavigationMapChanged(()=>{
                    s1 && u !== null && (s1 = this.getLevel().getPath(this.pos, r, {
                        allowDiagonals: this.allowDiagonals
                    }), u = s1 ? 0 : null, s1 ? this.trigger("navigation-next", this, s1[u]) : this.trigger("navigation-ended", this));
                }), this.onDestroy(()=>a1.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s1[u])) : this.trigger("navigation-ended", this);
            },
            update () {
                if (s1 && u !== null) {
                    if (this.pos.sdist(s1[u]) < 2) {
                        if (u === s1.length - 1) {
                            this.pos = r.clone(), u = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
                            return;
                        } else u++, this.trigger("navigation-next", this, s1[u]);
                    }
                    this.moveTo(s1[u], this.agentSpeed);
                }
            },
            onNavigationStarted (h1) {
                return this.on("navigation-started", h1);
            },
            onNavigationNext (h1) {
                return this.on("navigation-next", h1);
            },
            onNavigationEnded (h1) {
                return this.on("navigation-ended", h1);
            },
            onTargetReached (h1) {
                return this.on("target-reached", h1);
            },
            inspect () {
                return JSON.stringify({
                    target: JSON.stringify(r),
                    path: JSON.stringify(s1)
                });
            }
        };
    }
    i(Zs, "agent");
    function ei(t1) {
        let r = y.canvas.captureStream(t1), s1 = te.ctx.createMediaStreamDestination();
        te.masterNode.connect(s1);
        let u = new MediaRecorder(r), a1 = [];
        return u.ondataavailable = (h1)=>{
            h1.data.size > 0 && a1.push(h1.data);
        }, u.onerror = ()=>{
            te.masterNode.disconnect(s1), r.getTracks().forEach((h1)=>h1.stop());
        }, u.start(), {
            resume () {
                u.resume();
            },
            pause () {
                u.pause();
            },
            stop () {
                return u.stop(), te.masterNode.disconnect(s1), r.getTracks().forEach((h1)=>h1.stop()), new Promise((h1)=>{
                    u.onstop = ()=>{
                        h1(new Blob(a1, {
                            type: "video/mp4"
                        }));
                    };
                });
            },
            download (h1 = "kaboom.mp4") {
                this.stop().then((f)=>Nn(h1, f));
            }
        };
    }
    i(ei, "record");
    function ti() {
        return document.activeElement === y.canvas;
    }
    i(ti, "isFocused");
    function ni(t1) {
        t1.destroy();
    }
    i(ni, "destroy");
    let gt = C.root.add.bind(C.root), ri = C.root.readd.bind(C.root), si = C.root.removeAll.bind(C.root), On = C.root.get.bind(C.root), hr = C.root.wait.bind(C.root), ii = C.root.loop.bind(C.root), Rn = C.root.tween.bind(C.root);
    function lr(t1 = 2, r = 1) {
        let s1 = 0;
        return {
            require: [
                "scale"
            ],
            update () {
                let u = Math.sin(s1 * t1) * r;
                u < 0 && this.destroy(), this.scale = T(u), s1 += Me();
            }
        };
    }
    i(lr, "boom");
    let oi = Ye(null, qr), ai = Ye(null, $r);
    function ui(t1, r = {}) {
        let s1 = gt([
            qt(t1),
            or()
        ]), u = (r.speed || 1) * 5, a1 = r.scale || 1;
        s1.add([
            Cn(ai),
            $t(0),
            Sn("center"),
            lr(u, a1),
            ...r.comps ?? []
        ]);
        let h1 = s1.add([
            Cn(oi),
            $t(0),
            Sn("center"),
            An(),
            ...r.comps ?? []
        ]);
        return h1.wait(.4 / u, ()=>h1.use(lr(u, a1))), h1.onDestroy(()=>s1.destroy()), s1;
    }
    i(ui, "addKaboom");
    function dr() {
        C.root.update();
    }
    i(dr, "updateFrame");
    class Pn {
        static{
            i(this, "Collision");
        }
        source;
        target;
        displacement;
        resolved = !1;
        constructor(r, s1, u, a1 = !1){
            this.source = r, this.target = s1, this.displacement = u, this.resolved = a1;
        }
        reverse() {
            return new Pn(this.target, this.source, this.displacement.scale(-1), this.resolved);
        }
        hasOverlap() {
            return !this.displacement.isZero();
        }
        isLeft() {
            return this.displacement.x > 0;
        }
        isRight() {
            return this.displacement.x < 0;
        }
        isTop() {
            return this.displacement.y > 0;
        }
        isBottom() {
            return this.displacement.y < 0;
        }
        preventResolution() {
            this.resolved = !0;
        }
    }
    function ci() {
        let t1 = {}, r = n.hashGridSize || Hi, s1 = new Ue, u = [];
        function a1(h1) {
            if (u.push(s1.clone()), h1.pos && s1.translate(h1.pos), h1.scale && s1.scale(h1.scale), h1.angle && s1.rotate(h1.angle), h1.transform = s1.clone(), h1.c("area") && !h1.paused) {
                let f = h1, p1 = f.worldArea().bbox(), d1 = Math.floor(p1.pos.x / r), w = Math.floor(p1.pos.y / r), A = Math.ceil((p1.pos.x + p1.width) / r), D = Math.ceil((p1.pos.y + p1.height) / r), N = new Set;
                for(let _ = d1; _ <= A; _++)for(let M1 = w; M1 <= D; M1++)if (!t1[_]) t1[_] = {}, t1[_][M1] = [
                    f
                ];
                else if (!t1[_][M1]) t1[_][M1] = [
                    f
                ];
                else {
                    let O = t1[_][M1];
                    e: for (let ie of O){
                        if (ie.paused || !ie.exists() || N.has(ie.id)) continue;
                        for (let H of f.collisionIgnore)if (ie.is(H)) continue e;
                        for (let H of ie.collisionIgnore)if (f.is(H)) continue e;
                        let Z = Or(f.worldArea(), ie.worldArea());
                        if (Z) {
                            let H = new Pn(f, ie, Z);
                            f.trigger("collideUpdate", ie, H);
                            let V = H.reverse();
                            V.resolved = H.resolved, ie.trigger("collideUpdate", f, V);
                        }
                        N.add(ie.id);
                    }
                    O.push(f);
                }
            }
            h1.children.forEach(a1), s1 = u.pop();
        }
        i(a1, "checkObj"), a1(C.root);
    }
    i(ci, "checkFrame");
    function hi() {
        let t1 = C.cam, r = v.fromAngle(xt(0, 360)).scale(t1.shake);
        t1.shake = Ve(t1.shake, 0, 5 * Me()), t1.transform = new Ue().translate(zt()).scale(t1.scale).rotate(t1.angle).translate((t1.pos ?? zt()).scale(-1).add(r)), C.root.draw(), Pe();
    }
    i(hi, "drawFrame");
    function li() {
        let t1 = $();
        C.events.numListeners("loading") > 0 ? C.events.trigger("loading", t1) : Ce(()=>{
            let r = we() / 2, s1 = 24, u = T(we() / 2, xe() / 2).sub(T(r / 2, s1 / 2));
            ge({
                pos: T(0),
                width: we(),
                height: xe(),
                color: J(0, 0, 0)
            }), ge({
                pos: u,
                width: r,
                height: s1,
                fill: !1,
                outline: {
                    width: 4
                }
            }), ge({
                pos: u,
                width: r * t1,
                height: s1
            });
        });
    }
    i(li, "drawLoadScreen");
    function fr(t1, r) {
        Ce(()=>{
            let s1 = T(8);
            le(), ne(t1);
            let u = Xe({
                text: r,
                font: nn,
                size: 16,
                pos: s1,
                color: J(255, 255, 255),
                fixed: !0
            }), a1 = u.width + s1.x * 2, h1 = u.height + s1.x * 2;
            t1.x + a1 >= we() && ne(T(-a1, 0)), t1.y + h1 >= xe() && ne(T(0, -h1)), ge({
                width: a1,
                height: h1,
                color: J(0, 0, 0),
                radius: 4,
                opacity: .8,
                fixed: !0
            }), Je(u), ae();
        });
    }
    i(fr, "drawInspectText");
    function di() {
        if (re.inspect) {
            let t1 = null;
            for (let r of C.root.get("*", {
                recursive: !0
            }))if (r.c("area") && r.isHovering()) {
                t1 = r;
                break;
            }
            if (C.root.drawInspect(), t1) {
                let r = [], s1 = t1.inspect();
                for(let u in s1)s1[u] ? r.push(`${u}: ${s1[u]}`) : r.push(`${u}`);
                fr(ns(Nt()), r.join(`
`));
            }
            fr(T(8), `FPS: ${re.fps()}`);
        }
        re.paused && Ce(()=>{
            le(), ne(we(), 0), ne(-8, 8);
            let t1 = 32;
            ge({
                width: t1,
                height: t1,
                anchor: "topright",
                color: J(0, 0, 0),
                opacity: .8,
                radius: 4,
                fixed: !0
            });
            for(let r = 1; r <= 2; r++)ge({
                width: 4,
                height: t1 * .6,
                anchor: "center",
                pos: T(-t1 / 3 * r, t1 * .5),
                color: J(255, 255, 255),
                radius: 2,
                fixed: !0
            });
            ae();
        }), re.timeScale !== 1 && Ce(()=>{
            le(), ne(we(), xe()), ne(-8, -8);
            let t1 = 8, r = Xe({
                text: re.timeScale.toFixed(1),
                font: nn,
                size: 16,
                color: J(255, 255, 255),
                pos: T(-t1),
                anchor: "botright",
                fixed: !0
            });
            ge({
                width: r.width + t1 * 2 + t1 * 4,
                height: r.height + t1 * 2,
                anchor: "botright",
                color: J(0, 0, 0),
                opacity: .8,
                radius: 4,
                fixed: !0
            });
            for(let s1 = 0; s1 < 2; s1++){
                let u = re.timeScale < 1;
                R({
                    p1: T(-r.width - t1 * (u ? 2 : 3.5), -t1),
                    p2: T(-r.width - t1 * (u ? 2 : 3.5), -t1 - r.height),
                    p3: T(-r.width - t1 * (u ? 3.5 : 2), -t1 - r.height / 2),
                    pos: T(-s1 * t1 * 1 + (u ? -t1 * .5 : 0), 0),
                    color: J(255, 255, 255),
                    fixed: !0
                });
            }
            Je(r), ae();
        }), re.curRecording && Ce(()=>{
            le(), ne(0, xe()), ne(24, -24), L({
                radius: 12,
                color: J(255, 0, 0),
                opacity: In(0, 1, y.time() * 4),
                fixed: !0
            }), ae();
        }), re.showLog && C.logs.length > 0 && Ce(()=>{
            le(), ne(0, xe()), ne(8, -8);
            let t1 = 8, r = [];
            for (let u of C.logs){
                let a1 = "", h1 = u.msg instanceof Error ? "error" : "info";
                a1 += `[time]${u.time.toFixed(2)}[/time]`, a1 += " ", a1 += `[${h1}]${u.msg?.toString ? u.msg.toString() : u.msg}[/${h1}]`, r.push(a1);
            }
            C.logs = C.logs.filter((u)=>y.time() - u.time < (n.logTime || $i));
            let s1 = Xe({
                text: r.join(`
`),
                font: nn,
                pos: T(t1, -t1),
                anchor: "botleft",
                size: 16,
                width: we() * .6,
                lineSpacing: t1 / 2,
                fixed: !0,
                styles: {
                    time: {
                        color: J(127, 127, 127)
                    },
                    info: {
                        color: J(255, 255, 255)
                    },
                    error: {
                        color: J(255, 0, 127)
                    }
                }
            });
            ge({
                width: s1.width + t1 * 2,
                height: s1.height + t1 * 2,
                anchor: "botleft",
                color: J(0, 0, 0),
                radius: 4,
                opacity: .8,
                fixed: !0
            }), Je(s1), ae();
        });
    }
    i(di, "drawDebug");
    function fi(t1) {
        C.events.on("loading", t1);
    }
    i(fi, "onLoading");
    function mi(t1) {
        y.onResize(t1);
    }
    i(mi, "onResize");
    function pi(t1) {
        C.events.on("error", t1);
    }
    i(pi, "onError");
    function gi(t1) {
        console.error(t1), te.ctx.suspend(), y.run(()=>{
            dt(), Ce(()=>{
                let u = we(), a1 = xe(), h1 = {
                    size: 36,
                    width: u - 64,
                    letterSpacing: 4,
                    lineSpacing: 4,
                    font: nn,
                    fixed: !0
                };
                ge({
                    width: u,
                    height: a1,
                    color: J(0, 0, 255),
                    fixed: !0
                });
                let f = Xe({
                    ...h1,
                    text: "Error",
                    pos: T(32),
                    color: J(255, 128, 0),
                    fixed: !0
                });
                Je(f), tr({
                    ...h1,
                    text: t1.message,
                    pos: T(32, 32 + f.height + 16),
                    fixed: !0
                }), ae(), C.events.trigger("error", t1);
            }), ft();
        });
    }
    i(gi, "handleErr");
    function wi(t1) {
        X.push(t1);
    }
    i(wi, "onCleanup");
    function bi() {
        C.events.onOnce("frameEnd", ()=>{
            y.quit(), S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT);
            let t1 = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
            for(let r = 0; r < t1; r++)S.activeTexture(S.TEXTURE0 + r), S.bindTexture(S.TEXTURE_2D, null), S.bindTexture(S.TEXTURE_CUBE_MAP, null);
            S.bindBuffer(S.ARRAY_BUFFER, null), S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null), S.bindRenderbuffer(S.RENDERBUFFER, null), S.bindFramebuffer(S.FRAMEBUFFER, null), q.destroy(), X.forEach((r)=>r());
        });
    }
    i(bi, "quit");
    let Kt = !0;
    y.run(()=>{
        try {
            k.loaded || $() === 1 && !Kt && (k.loaded = !0, C.events.trigger("load")), !k.loaded && n.loadingScreen !== !1 || Kt ? (dt(), li(), ft()) : (re.paused || dr(), ci(), dt(), hi(), n.debug !== !1 && di(), ft()), Kt && (Kt = !1), C.events.trigger("frameEnd");
        } catch (t1) {
            gi(t1);
        }
    });
    function mr() {
        let t1 = P, r = S.drawingBufferWidth / t1, s1 = S.drawingBufferHeight / t1;
        if (n.letterbox) {
            if (!n.width || !n.height) throw new Error("Letterboxing requires width and height defined.");
            let u = r / s1, a1 = n.width / n.height;
            if (u > a1) {
                let h1 = s1 * a1, f = (r - h1) / 2;
                E.viewport = {
                    x: f,
                    y: 0,
                    width: h1,
                    height: s1
                };
            } else {
                let h1 = r / a1, f = (s1 - h1) / 2;
                E.viewport = {
                    x: 0,
                    y: f,
                    width: r,
                    height: h1
                };
            }
            return;
        }
        if (n.stretch && (!n.width || !n.height)) throw new Error("Stretching requires width and height defined.");
        E.viewport = {
            x: 0,
            y: 0,
            width: r,
            height: s1
        };
    }
    i(mr, "updateViewport");
    function pr() {
        y.onHide(()=>{
            n.backgroundAudio || te.ctx.suspend();
        }), y.onShow(()=>{
            !n.backgroundAudio && !re.paused && te.ctx.resume();
        }), y.onResize(()=>{
            if (y.isFullscreen()) return;
            let t1 = n.width && n.height;
            t1 && !n.stretch && !n.letterbox || (o.width = o.offsetWidth * P, o.height = o.offsetHeight * P, mr(), t1 || (E.frameBuffer.free(), E.frameBuffer = new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), E.width = S.drawingBufferWidth / P, E.height = S.drawingBufferHeight / P));
        }), n.debug !== !1 && (y.onKeyPress("f1", ()=>re.inspect = !re.inspect), y.onKeyPress("f2", ()=>re.clearLog()), y.onKeyPress("f8", ()=>re.paused = !re.paused), y.onKeyPress("f7", ()=>{
            re.timeScale = mt(Le(re.timeScale - .2, 0, 2), 1);
        }), y.onKeyPress("f9", ()=>{
            re.timeScale = mt(Le(re.timeScale + .2, 0, 2), 1);
        }), y.onKeyPress("f10", ()=>re.stepFrame())), n.burp && y.onKeyPress("b", ()=>Lt());
    }
    i(pr, "initEvents"), mr(), pr();
    let Ze = {
        VERSION: ki,
        loadRoot: Te,
        loadProgress: $,
        loadSprite: Ye,
        loadSpriteAtlas: Ot,
        loadSound: ln,
        loadBitmapFont: on,
        loadFont: st,
        loadShader: cn,
        loadShaderURL: hn,
        loadAseprite: un,
        loadPedit: an,
        loadBean: dn,
        loadJSON: ye,
        load: Ae,
        getSprite: Pt,
        getSound: Dt,
        getFont: Mt,
        getBitmapFont: Gt,
        getShader: Bt,
        getAsset: fn,
        Asset: ve,
        SpriteData: K,
        SoundData: Q,
        width: we,
        height: xe,
        center: zt,
        dt: Me,
        time: y.time,
        screenshot: y.screenshot,
        record: ei,
        isFocused: ti,
        setCursor: y.setCursor,
        getCursor: y.getCursor,
        setCursorLocked: y.setCursorLocked,
        isCursorLocked: y.isCursorLocked,
        setFullscreen: y.setFullscreen,
        isFullscreen: y.isFullscreen,
        isTouchscreen: y.isTouchscreen,
        onLoad: Tn,
        onLoading: fi,
        onResize: mi,
        onGamepadConnect: y.onGamepadConnect,
        onGamepadDisconnect: y.onGamepadDisconnect,
        onError: pi,
        onCleanup: wi,
        camPos: rs,
        camScale: ss,
        camRot: is,
        shake: os,
        toScreen: rr,
        toWorld: sr,
        setGravity: gs,
        getGravity: ws,
        setBackground: bs,
        getBackground: vs,
        getGamepads: y.getGamepads,
        add: gt,
        make: Un,
        destroy: ni,
        destroyAll: si,
        get: On,
        readd: ri,
        pos: qt,
        scale: $t,
        rotate: ys,
        color: xs,
        opacity: Us,
        anchor: Sn,
        area: Os,
        sprite: Cn,
        text: Rs,
        polygon: Ps,
        rect: Ds,
        circle: Gs,
        uvquad: Ms,
        outline: Bs,
        body: Ls,
        doubleJump: Vs,
        shader: _s,
        timer: An,
        fixed: ks,
        stay: or,
        health: Ns,
        lifespan: js,
        z: Es,
        move: Cs,
        offscreen: Ts,
        follow: Ss,
        state: Hs,
        fadeIn: qs,
        mask: $s,
        drawon: zs,
        tile: cr,
        agent: Zs,
        on: ze,
        onUpdate: as,
        onDraw: us,
        onAdd: En,
        onDestroy: ir,
        onClick: ds,
        onCollide: cs,
        onCollideUpdate: hs,
        onCollideEnd: ls,
        onHover: fs,
        onHoverUpdate: ms,
        onHoverEnd: ps,
        onKeyDown: y.onKeyDown,
        onKeyPress: y.onKeyPress,
        onKeyPressRepeat: y.onKeyPressRepeat,
        onKeyRelease: y.onKeyRelease,
        onMouseDown: y.onMouseDown,
        onMousePress: y.onMousePress,
        onMouseRelease: y.onMouseRelease,
        onMouseMove: y.onMouseMove,
        onCharInput: y.onCharInput,
        onTouchStart: y.onTouchStart,
        onTouchMove: y.onTouchMove,
        onTouchEnd: y.onTouchEnd,
        onScroll: y.onScroll,
        onHide: y.onHide,
        onShow: y.onShow,
        onGamepadButtonDown: y.onGamepadButtonDown,
        onGamepadButtonPress: y.onGamepadButtonPress,
        onGamepadButtonRelease: y.onGamepadButtonRelease,
        onGamepadStick: y.onGamepadStick,
        mousePos: Nt,
        mouseDeltaPos: y.mouseDeltaPos,
        isKeyDown: y.isKeyDown,
        isKeyPressed: y.isKeyPressed,
        isKeyPressedRepeat: y.isKeyPressedRepeat,
        isKeyReleased: y.isKeyReleased,
        isMouseDown: y.isMouseDown,
        isMousePressed: y.isMousePressed,
        isMouseReleased: y.isMouseReleased,
        isMouseMoved: y.isMouseMoved,
        isGamepadButtonPressed: y.isGamepadButtonPressed,
        isGamepadButtonDown: y.isGamepadButtonDown,
        isGamepadButtonReleased: y.isGamepadButtonReleased,
        getGamepadStick: y.getGamepadStick,
        charInputted: y.charInputted,
        loop: ii,
        wait: hr,
        play: It,
        volume: gn,
        burp: Lt,
        audioCtx: te.ctx,
        Line: Ie,
        Rect: de,
        Circle: yt,
        Polygon: Ke,
        Vec2: v,
        Color: W,
        Mat4: Ue,
        Quad: oe,
        RNG: bt,
        rand: xt,
        randi: Ln,
        randSeed: yr,
        vec2: T,
        rgb: J,
        hsl2rgb: vr,
        quad: ce,
        choose: Ur,
        chance: xr,
        lerp: Ve,
        tween: Rn,
        easings: Ct,
        map: _e,
        mapc: br,
        wave: In,
        deg2rad: Ge,
        rad2deg: ot,
        clamp: Le,
        testLineLine: it,
        testRectRect: Er,
        testRectLine: Sr,
        testRectPoint: vt,
        testCirclePolygon: Tr,
        testLinePoint: Cr,
        testLineCircle: Vn,
        drawSprite: yn,
        drawText: tr,
        formatText: Xe,
        drawRect: ge,
        drawLine: l,
        drawLines: x,
        drawTriangle: R,
        drawCircle: L,
        drawEllipse: he,
        drawUVQuad: Be,
        drawPolygon: z,
        drawFormattedText: Je,
        drawMasked: $e,
        drawSubtracted: kt,
        pushTransform: le,
        popTransform: ae,
        pushTranslate: ne,
        pushScale: He,
        pushRotate: se,
        pushMatrix: _t,
        usePostEffect: Vt,
        makeCanvas: wn,
        debug: re,
        scene: Ks,
        go: Ys,
        onSceneLeave: Ws,
        addLevel: Qs,
        getData: Xs,
        setData: ar,
        download: Xt,
        downloadJSON: Dr,
        downloadText: kn,
        downloadBlob: Nn,
        plug: ur,
        ASCII_CHARS: zr,
        canvas: y.canvas,
        addKaboom: ui,
        LEFT: v.LEFT,
        RIGHT: v.RIGHT,
        UP: v.UP,
        DOWN: v.DOWN,
        RED: W.RED,
        GREEN: W.GREEN,
        BLUE: W.BLUE,
        YELLOW: W.YELLOW,
        MAGENTA: W.MAGENTA,
        CYAN: W.CYAN,
        WHITE: W.WHITE,
        BLACK: W.BLACK,
        quit: bi,
        Event: be,
        EventHandler: Ne,
        EventController: ke
    };
    if (n.plugins && n.plugins.forEach(ur), n.global !== !1) for(let t1 in Ze)window[t1] = Ze[t1];
    return n.focus !== !1 && y.canvas.focus(), Ze;
}, "default");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayDialogue", ()=>displayDialogue);
parcelHelpers.export(exports, "setCamScale", ()=>setCamScale);
function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");
    dialogueUI.style.display = "block";
    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(()=>{
        if (index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }
        clearInterval(intervalRef);
    }, 1);
    const closeBtn = document.getElementById("close");
    function onCloseBtnClick() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtnClick);
    }
    closeBtn.addEventListener("click", onCloseBtnClick);
    addEventListener("keypress", (key)=>{
        if (key.code === "Enter") closeBtn.click();
    });
}
function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) k.camScale(k.vec2(1));
    else k.camScale(k.vec2(1.5));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["anvqh","gLLPy"], "gLLPy", "parcelRequire33aa")

//# sourceMappingURL=index.4d6bcbeb.js.map
