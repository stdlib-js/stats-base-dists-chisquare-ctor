// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-entropy@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-kurtosis@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-mean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-median@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-mode@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-skewness@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-stdev@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-variance@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-mgf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-pdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-quantile@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function b(){var t;if(!(this instanceof b))return 0===arguments.length?new b:new b(arguments[0]);if(arguments.length){if(!i(t=arguments[0]))throw new TypeError(f("invalid argument. Rate parameter must be a positive number. Value: `%s`.",t))}else t=1;return s(this,"k",{configurable:!1,enumerable:!0,get:function(){return t},set:function(s){if(!i(s))throw new TypeError(f("invalid assignment. Must be a positive number. Value: `%s`.",s));t=s}}),this}e(b.prototype,"entropy",(function(){return r(this.k)})),e(b.prototype,"kurtosis",(function(){return n(this.k)})),e(b.prototype,"mean",(function(){return o(this.k)})),e(b.prototype,"median",(function(){return d(this.k)})),e(b.prototype,"mode",(function(){return m(this.k)})),e(b.prototype,"skewness",(function(){return p(this.k)})),e(b.prototype,"stdev",(function(){return a(this.k)})),e(b.prototype,"variance",(function(){return h(this.k)})),t(b.prototype,"cdf",(function(s){return u(s,this.k)})),t(b.prototype,"mgf",(function(s){return l(s,this.k)})),t(b.prototype,"pdf",(function(s){return c(s,this.k)})),t(b.prototype,"quantile",(function(s){return j(s,this.k)}));export{b as default};
//# sourceMappingURL=index.mjs.map
