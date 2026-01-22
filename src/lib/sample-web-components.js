typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const an = 1, cn = 2, _t = "[", vt = "[!", pt = "]", ge = {}, y = /* @__PURE__ */ Symbol(), Be = !1;
var hn = Array.isArray, dn = Array.prototype.indexOf, _n = Array.from, Ne = Object.keys, Oe = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, vn = Object.prototype, pn = Array.prototype, $n = Object.getPrototypeOf, lt = Object.isExtensible;
function gn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $t() {
  var e, t, n = new Promise((i, r) => {
    e = i, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const w = 2, Ve = 4, Le = 8, gt = 1 << 24, G = 16, le = 32, ee = 64, Je = 128, O = 512, T = 1024, S = 2048, K = 4096, J = 8192, V = 16384, Xe = 32768, Ce = 65536, ut = 1 << 17, yt = 1 << 18, ue = 1 << 19, yn = 1 << 20, se = 32768, He = 1 << 21, Ze = 1 << 22, X = 1 << 23, Ye = /* @__PURE__ */ Symbol("$state"), mn = /* @__PURE__ */ Symbol("legacy props"), ae = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), mt = 3, Ie = 8;
function wn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function bn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function En() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Tn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Sn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function An() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Qe(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function kn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let m = !1;
function Te(e) {
  m = e;
}
let p;
function U(e) {
  if (e === null)
    throw Qe(), ge;
  return p = e;
}
function et() {
  return U(/* @__PURE__ */ W(p));
}
function wt(e) {
  if (m) {
    if (/* @__PURE__ */ W(p) !== null)
      throw Qe(), ge;
    p = e;
  }
}
function Rn(e = 1) {
  if (m) {
    for (var t = e, n = p; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ W(n);
    p = n;
  }
}
function Nn(e = !0) {
  for (var t = 0, n = p; ; ) {
    if (n.nodeType === Ie) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === pt) {
        if (t === 0) return n;
        t -= 1;
      } else (i === _t || i === vt) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ W(n)
    );
    e && n.remove(), n = r;
  }
}
function bt(e) {
  return e === this.v;
}
function On(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Cn(e) {
  return !On(e, this.v);
}
let Pn = !1, M = null;
function he(e) {
  M = e;
}
function Et(e, t = !1, n) {
  M = {
    p: M,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Tt(e) {
  var t = (
    /** @type {ComponentContext} */
    M
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var i of n)
      Zn(i);
  }
  return e !== void 0 && (t.x = e), t.i = !0, M = t.p, e ?? /** @type {T} */
  {};
}
function xt() {
  return !0;
}
let ne = [];
function St() {
  var e = ne;
  ne = [], gn(e);
}
function tt(e) {
  if (ne.length === 0 && !pe) {
    var t = ne;
    queueMicrotask(() => {
      t === ne && St();
    });
  }
  ne.push(e);
}
function Dn() {
  for (; ne.length > 0; )
    St();
}
function At(e) {
  var t = v;
  if (t === null)
    return _.f |= X, e;
  if ((t.f & Xe) === 0) {
    if ((t.f & Je) === 0)
      throw e;
    t.b.error(e);
  } else
    de(e, t);
}
function de(e, t) {
  for (; t !== null; ) {
    if ((t.f & Je) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const Fn = -7169;
function b(e, t) {
  e.f = e.f & Fn | t;
}
function nt(e) {
  (e.f & O) !== 0 || e.deps === null ? b(e, T) : b(e, K);
}
function kt(e) {
  if (e !== null)
    for (const t of e)
      (t.f & w) === 0 || (t.f & se) === 0 || (t.f ^= se, kt(
        /** @type {Derived} */
        t.deps
      ));
}
function Rt(e, t, n) {
  (e.f & S) !== 0 ? t.add(e) : (e.f & K) !== 0 && n.add(e), kt(e.deps), b(e, T);
}
const xe = /* @__PURE__ */ new Set();
let g = null, C = null, N = [], je = null, Ue = !1, pe = !1;
class P {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #i = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #l = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #s = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#l > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    N = [], this.apply();
    var n = [], i = [];
    for (const r of t)
      this.#f(r, n, i);
    this.is_fork || this.#o(), this.is_deferred() ? (this.#u(i), this.#u(n)) : (g = null, ot(i), ot(n), this.#s?.resolve()), C = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #f(t, n, i) {
    t.f ^= T;
    for (var r = t.first, s = null; r !== null; ) {
      var f = r.f, l = (f & (le | ee)) !== 0, u = l && (f & T) !== 0, o = u || (f & J) !== 0 || this.skipped_effects.has(r);
      if (!o && r.fn !== null) {
        l ? r.f ^= T : s !== null && (f & (Ve | Le | gt)) !== 0 ? s.b.defer_effect(r) : (f & Ve) !== 0 ? n.push(r) : Ee(r) && ((f & G) !== 0 && this.#r.add(r), me(r));
        var a = r.first;
        if (a !== null) {
          r = a;
          continue;
        }
      }
      var d = r.parent;
      for (r = r.next; r === null && d !== null; )
        d === s && (s = null), r = d.next, d = d.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(t) {
    for (var n = 0; n < t.length; n += 1)
      Rt(t[n], this.#r, this.#n);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== y && !this.previous.has(t) && this.previous.set(t, n), (t.f & X) === 0 && (this.current.set(t, t.v), C?.set(t, t.v));
  }
  activate() {
    g = this, this.apply();
  }
  deactivate() {
    g === this && (g = null, C = null);
  }
  flush() {
    if (this.activate(), N.length > 0) {
      if (Ot(), g !== null && g !== this)
        return;
    } else this.#i === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #o() {
    if (this.#l === 0) {
      for (const t of this.#e) t();
      this.#e.clear();
    }
    this.#i === 0 && this.#a();
  }
  #a() {
    if (xe.size > 1) {
      this.previous.clear();
      var t = C, n = !0;
      for (const r of xe) {
        if (r === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [l, u] of this.current) {
          if (r.current.has(l))
            if (n && u !== r.current.get(l))
              r.current.set(l, u);
            else
              continue;
          s.push(l);
        }
        if (s.length === 0)
          continue;
        const f = [...r.current.keys()].filter((l) => !this.current.has(l));
        if (f.length > 0) {
          var i = N;
          N = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const o of s)
            Ct(o, f, l, u);
          if (N.length > 0) {
            g = r, r.apply();
            for (const o of N)
              r.#f(o, [], []);
            r.deactivate();
          }
          N = i;
        }
      }
      g = null, C = t;
    }
    this.committed = !0, xe.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#i += 1, t && (this.#l += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#i -= 1, t && (this.#l -= 1), this.revive();
  }
  revive() {
    for (const t of this.#r)
      this.#n.delete(t), b(t, S), Q(t);
    for (const t of this.#n)
      b(t, K), Q(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#e.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#s ??= $t()).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new P();
      xe.add(g), pe || P.enqueue(() => {
        g === t && t.flush();
      });
    }
    return g;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    tt(t);
  }
  apply() {
  }
}
function Nt(e) {
  var t = pe;
  pe = !0;
  try {
    for (var n; ; ) {
      if (Dn(), N.length === 0 && (g?.flush(), N.length === 0))
        return je = null, /** @type {T} */
        n;
      Ot();
    }
  } finally {
    pe = t;
  }
}
function Ot() {
  var e = re;
  Ue = !0;
  var t = null;
  try {
    var n = 0;
    for (Fe(!0); N.length > 0; ) {
      var i = P.ensure();
      if (n++ > 1e3) {
        var r, s;
        Mn();
      }
      i.process(N), Z.clear();
    }
  } finally {
    Ue = !1, Fe(e), je = null;
  }
}
function Mn() {
  try {
    bn();
  } catch (e) {
    de(e, je);
  }
}
let B = null;
function ot(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var i = e[n++];
      if ((i.f & (V | J)) === 0 && Ee(i) && (B = /* @__PURE__ */ new Set(), me(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Wt(i) : i.fn = null), B?.size > 0)) {
        Z.clear();
        for (const r of B) {
          if ((r.f & (V | J)) !== 0) continue;
          const s = [r];
          let f = r.parent;
          for (; f !== null; )
            B.has(f) && (B.delete(f), s.push(f)), f = f.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const u = s[l];
            (u.f & (V | J)) === 0 && me(u);
          }
        }
        B.clear();
      }
    }
    B = null;
  }
}
function Ct(e, t, n, i) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const s = r.f;
      (s & w) !== 0 ? Ct(
        /** @type {Derived} */
        r,
        t,
        n,
        i
      ) : (s & (Ze | G)) !== 0 && (s & S) === 0 && Pt(r, t, i) && (b(r, S), Q(
        /** @type {Effect} */
        r
      ));
    }
}
function Pt(e, t, n) {
  const i = n.get(e);
  if (i !== void 0) return i;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (t.includes(r))
        return !0;
      if ((r.f & w) !== 0 && Pt(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Q(e) {
  for (var t = je = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ue && t === v && (n & G) !== 0 && (n & yt) === 0)
      return;
    if ((n & (ee | le)) !== 0) {
      if ((n & T) === 0) return;
      t.f ^= T;
    }
  }
  N.push(t);
}
function Ln(e) {
  let t = 0, n = we(0), i;
  return () => {
    it() && (k(n), Ht(() => (t === 0 && (i = or(() => e(() => $e(n)))), t += 1, () => {
      tt(() => {
        t -= 1, t === 0 && (i?.(), i = void 0, $e(n));
      });
    })));
  };
}
var In = Ce | ue | Je;
function jn(e, t, n) {
  new qn(e, t, n);
}
class qn {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #t = m ? p : null;
  /** @type {BoundaryProps} */
  #i;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #f = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #o = null;
  #a = 0;
  #c = 0;
  #d = !1;
  /** @type {Set<Effect>} */
  #_ = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #v = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #m = Ln(() => (this.#h = we(this.#a), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, i) {
    this.#e = t, this.#i = n, this.#l = i, this.parent = /** @type {Effect} */
    v.b, this.is_pending = !!this.#i.pending, this.#s = nr(() => {
      if (v.b = this, m) {
        const s = this.#t;
        et(), /** @type {Comment} */
        s.nodeType === Ie && /** @type {Comment} */
        s.data === vt ? this.#b() : (this.#w(), this.#c === 0 && (this.is_pending = !1));
      } else {
        var r = this.#g();
        try {
          this.#r = te(() => i(r));
        } catch (s) {
          this.error(s);
        }
        this.#c > 0 ? this.#$() : this.is_pending = !1;
      }
      return () => {
        this.#o?.remove();
      };
    }, In), m && (this.#e = p);
  }
  #w() {
    try {
      this.#r = te(() => this.#l(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  #b() {
    const t = this.#i.pending;
    t && (this.#n = te(() => t(this.#e)), P.enqueue(() => {
      var n = this.#g();
      this.#r = this.#p(() => (P.ensure(), te(() => this.#l(n)))), this.#c > 0 ? this.#$() : (Ae(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.is_pending = !1);
    }));
  }
  #g() {
    var t = this.#e;
    return this.is_pending && (this.#o = be(), this.#e.before(this.#o), t = this.#o), t;
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Rt(t, this.#_, this.#v);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#i.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #p(t) {
    var n = v, i = _, r = M;
    j(this.#s), x(this.#s), he(this.#s.ctx);
    try {
      return t();
    } catch (s) {
      return At(s), null;
    } finally {
      j(n), x(i), he(r);
    }
  }
  #$() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#r !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#o
    ), sr(this.#r, this.#u)), this.#n === null && (this.#n = te(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(t);
      return;
    }
    if (this.#c += t, this.#c === 0) {
      this.is_pending = !1;
      for (const n of this.#_)
        b(n, S), Q(n);
      for (const n of this.#v)
        b(n, K), Q(n);
      this.#_.clear(), this.#v.clear(), this.#n && Ae(this.#n, () => {
        this.#n = null;
      }), this.#u && (this.#e.before(this.#u), this.#u = null);
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#a += t, this.#h && De(this.#h, this.#a);
  }
  get_effect_pending() {
    return this.#m(), k(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#i.onerror;
    let i = this.#i.failed;
    if (this.#d || !n && !i)
      throw t;
    this.#r && (F(this.#r), this.#r = null), this.#n && (F(this.#n), this.#n = null), this.#f && (F(this.#f), this.#f = null), m && (U(
      /** @type {TemplateNode} */
      this.#t
    ), Rn(), U(Nn()));
    var r = !1, s = !1;
    const f = () => {
      if (r) {
        kn();
        return;
      }
      r = !0, s && An(), P.ensure(), this.#a = 0, this.#f !== null && Ae(this.#f, () => {
        this.#f = null;
      }), this.is_pending = this.has_pending_snippet(), this.#r = this.#p(() => (this.#d = !1, te(() => this.#l(this.#e)))), this.#c > 0 ? this.#$() : this.is_pending = !1;
    };
    var l = _;
    try {
      x(null), s = !0, n?.(t, f), s = !1;
    } catch (u) {
      de(u, this.#s && this.#s.parent);
    } finally {
      x(l);
    }
    i && tt(() => {
      this.#f = this.#p(() => {
        P.ensure(), this.#d = !0;
        try {
          return te(() => {
            i(
              this.#e,
              () => t,
              () => f
            );
          });
        } catch (u) {
          return de(
            u,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#d = !1;
        }
      });
    });
  }
}
function Yn(e, t, n, i) {
  const r = Dt;
  if (n.length === 0 && e.length === 0) {
    i(t.map(r));
    return;
  }
  var s = g, f = (
    /** @type {Effect} */
    v
  ), l = Bn();
  function u() {
    Promise.all(n.map((o) => /* @__PURE__ */ Vn(o))).then((o) => {
      l();
      try {
        i([...t.map(r), ...o]);
      } catch (a) {
        (f.f & V) === 0 && de(a, f);
      }
      s?.deactivate(), Pe();
    }).catch((o) => {
      de(o, f);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return u();
    } finally {
      s?.deactivate(), Pe();
    }
  }) : u();
}
function Bn() {
  var e = v, t = _, n = M, i = g;
  return function(s = !0) {
    j(e), x(t), he(n), s && i?.activate();
  };
}
function Pe() {
  j(null), x(null), he(null);
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  var t = w | S, n = _ !== null && (_.f & w) !== 0 ? (
    /** @type {Derived} */
    _
  ) : null;
  return v !== null && (v.f |= ue), {
    ctx: M,
    deps: null,
    effects: null,
    equals: bt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      y
    ),
    wv: 0,
    parent: n ?? v,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Vn(e, t, n) {
  let i = (
    /** @type {Effect | null} */
    v
  );
  i === null && wn();
  var r = (
    /** @type {Boundary} */
    i.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), f = we(
    /** @type {V} */
    y
  ), l = !_, u = /* @__PURE__ */ new Map();
  return tr(() => {
    var o = $t();
    s = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).then(() => {
        a === g && a.committed && a.deactivate(), Pe();
      });
    } catch (h) {
      o.reject(h), Pe();
    }
    var a = (
      /** @type {Batch} */
      g
    );
    if (l) {
      var d = r.is_rendered();
      r.update_pending_count(1), a.increment(d), u.get(a)?.reject(ae), u.delete(a), u.set(a, o);
    }
    const c = (h, $ = void 0) => {
      if (a.activate(), $)
        $ !== ae && (f.f |= X, De(f, $));
      else {
        (f.f & X) !== 0 && (f.f ^= X), De(f, h);
        for (const [L, q] of u) {
          if (u.delete(L), L === a) break;
          q.reject(ae);
        }
      }
      l && (r.update_pending_count(-1), a.decrement(d));
    };
    o.promise.then(c, (h) => c(null, h || "unknown"));
  }), Xn(() => {
    for (const o of u.values())
      o.reject(ae);
  }), new Promise((o) => {
    function a(d) {
      function c() {
        d === s ? o(f) : a(s);
      }
      d.then(c, c);
    }
    a(s);
  });
}
function Ft(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      F(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & w) === 0)
      return (t.f & V) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function rt(e) {
  var t, n = v;
  j(Hn(e));
  try {
    e.f &= ~se, Ft(e), t = Qt(e);
  } finally {
    j(n);
  }
  return t;
}
function Mt(e) {
  var t = rt(e);
  if (!e.equals(t) && (e.wv = Xt(), (!g?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    b(e, T);
    return;
  }
  fe || (C !== null ? (it() || g?.is_fork) && C.set(e, t) : nt(e));
}
let Ge = /* @__PURE__ */ new Set();
const Z = /* @__PURE__ */ new Map();
let Lt = !1;
function we(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bt,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  const n = we(e);
  return fr(n), n;
}
// @__NO_SIDE_EFFECTS__
function Un(e, t = !1, n = !0) {
  const i = we(e);
  return t || (i.equals = Cn), i;
}
function I(e, t, n = !1) {
  _ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!D || (_.f & ut) !== 0) && xt() && (_.f & (w | G | Ze | ut)) !== 0 && !H?.includes(e) && Sn();
  let i = n ? ve(t) : t;
  return De(e, i);
}
function De(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    fe ? Z.set(e, t) : Z.set(e, n), e.v = t;
    var i = P.ensure();
    if (i.capture(e, n), (e.f & w) !== 0) {
      const r = (
        /** @type {Derived} */
        e
      );
      (e.f & S) !== 0 && rt(r), nt(r);
    }
    e.wv = Xt(), It(e, S), v !== null && (v.f & T) !== 0 && (v.f & (le | ee)) === 0 && (R === null ? lr([e]) : R.push(e)), !i.is_fork && Ge.size > 0 && !Lt && Gn();
  }
  return t;
}
function Gn() {
  Lt = !1;
  var e = re;
  Fe(!0);
  const t = Array.from(Ge);
  try {
    for (const n of t)
      (n.f & T) !== 0 && b(n, K), Ee(n) && me(n);
  } finally {
    Fe(e);
  }
  Ge.clear();
}
function $e(e) {
  I(e, e.v + 1);
}
function It(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, r = 0; r < i; r++) {
      var s = n[r], f = s.f, l = (f & S) === 0;
      if (l && b(s, t), (f & w) !== 0) {
        var u = (
          /** @type {Derived} */
          s
        );
        C?.delete(u), (f & se) === 0 && (f & O && (s.f |= se), It(u, K));
      } else l && ((f & G) !== 0 && B !== null && B.add(
        /** @type {Effect} */
        s
      ), Q(
        /** @type {Effect} */
        s
      ));
    }
}
function ve(e) {
  if (typeof e != "object" || e === null || Ye in e)
    return e;
  const t = $n(e);
  if (t !== vn && t !== pn)
    return e;
  var n = /* @__PURE__ */ new Map(), i = hn(e), r = /* @__PURE__ */ Y(0), s = ie, f = (l) => {
    if (ie === s)
      return l();
    var u = _, o = ie;
    x(null), ht(s);
    var a = l();
    return x(u), ht(o), a;
  };
  return i && n.set("length", /* @__PURE__ */ Y(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Tn();
        var a = n.get(u);
        return a === void 0 ? a = f(() => {
          var d = /* @__PURE__ */ Y(o.value);
          return n.set(u, d), d;
        }) : I(a, o.value, !0), !0;
      },
      deleteProperty(l, u) {
        var o = n.get(u);
        if (o === void 0) {
          if (u in l) {
            const a = f(() => /* @__PURE__ */ Y(y));
            n.set(u, a), $e(r);
          }
        } else
          I(o, y), $e(r);
        return !0;
      },
      get(l, u, o) {
        if (u === Ye)
          return e;
        var a = n.get(u), d = u in l;
        if (a === void 0 && (!d || ce(l, u)?.writable) && (a = f(() => {
          var h = ve(d ? l[u] : y), $ = /* @__PURE__ */ Y(h);
          return $;
        }), n.set(u, a)), a !== void 0) {
          var c = k(a);
          return c === y ? void 0 : c;
        }
        return Reflect.get(l, u, o);
      },
      getOwnPropertyDescriptor(l, u) {
        var o = Reflect.getOwnPropertyDescriptor(l, u);
        if (o && "value" in o) {
          var a = n.get(u);
          a && (o.value = k(a));
        } else if (o === void 0) {
          var d = n.get(u), c = d?.v;
          if (d !== void 0 && c !== y)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return o;
      },
      has(l, u) {
        if (u === Ye)
          return !0;
        var o = n.get(u), a = o !== void 0 && o.v !== y || Reflect.has(l, u);
        if (o !== void 0 || v !== null && (!a || ce(l, u)?.writable)) {
          o === void 0 && (o = f(() => {
            var c = a ? ve(l[u]) : y, h = /* @__PURE__ */ Y(c);
            return h;
          }), n.set(u, o));
          var d = k(o);
          if (d === y)
            return !1;
        }
        return a;
      },
      set(l, u, o, a) {
        var d = n.get(u), c = u in l;
        if (i && u === "length")
          for (var h = o; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var $ = n.get(h + "");
            $ !== void 0 ? I($, y) : h in l && ($ = f(() => /* @__PURE__ */ Y(y)), n.set(h + "", $));
          }
        if (d === void 0)
          (!c || ce(l, u)?.writable) && (d = f(() => /* @__PURE__ */ Y(void 0)), I(d, ve(o)), n.set(u, d));
        else {
          c = d.v !== y;
          var L = f(() => ve(o));
          I(d, L);
        }
        var q = Reflect.getOwnPropertyDescriptor(l, u);
        if (q?.set && q.set.call(a, o), !c) {
          if (i && typeof u == "string") {
            var ft = (
              /** @type {Source<number>} */
              n.get("length")
            ), qe = Number(u);
            Number.isInteger(qe) && qe >= ft.v && I(ft, qe + 1);
          }
          $e(r);
        }
        return !0;
      },
      ownKeys(l) {
        k(r);
        var u = Reflect.ownKeys(l).filter((d) => {
          var c = n.get(d);
          return c === void 0 || c.v !== y;
        });
        for (var [o, a] of n)
          a.v !== y && !(o in l) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        xn();
      }
    }
  );
}
var at, jt, qt, Yt;
function Ke() {
  if (at === void 0) {
    at = window, jt = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    qt = ce(t, "firstChild").get, Yt = ce(t, "nextSibling").get, lt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), lt(n) && (n.__t = void 0);
  }
}
function be(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return (
    /** @type {TemplateNode | null} */
    qt.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  return (
    /** @type {TemplateNode | null} */
    Yt.call(e)
  );
}
function Bt(e, t) {
  if (!m)
    return /* @__PURE__ */ _e(e);
  var n = /* @__PURE__ */ _e(p);
  return n === null && (n = p.appendChild(be())), U(n), n;
}
function Kn(e, t = !1) {
  if (!m) {
    var n = /* @__PURE__ */ _e(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ W(n) : n;
  }
  if (t && p?.nodeType !== mt) {
    var i = be();
    return p?.before(i), U(i), i;
  }
  return p;
}
function Wn(e, t = 1, n = !1) {
  let i = m ? p : e;
  for (var r; t--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ W(i);
  if (!m)
    return i;
  if (n && i?.nodeType !== mt) {
    var s = be();
    return i === null ? r?.after(s) : i.before(s), U(s), s;
  }
  return U(i), i;
}
function zn(e) {
  e.textContent = "";
}
function Vt(e) {
  var t = _, n = v;
  x(null), j(null);
  try {
    return e();
  } finally {
    x(t), j(n);
  }
}
function Jn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function z(e, t, n) {
  var i = v;
  i !== null && (i.f & J) !== 0 && (e |= J);
  var r = {
    ctx: M,
    deps: null,
    nodes: null,
    f: e | S | O,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      me(r), r.f |= Xe;
    } catch (l) {
      throw F(r), l;
    }
  else t !== null && Q(r);
  var s = r;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & ue) === 0 && (s = s.first, (e & G) !== 0 && (e & Ce) !== 0 && s !== null && (s.f |= Ce)), s !== null && (s.parent = i, i !== null && Jn(s, i), _ !== null && (_.f & w) !== 0 && (e & ee) === 0)) {
    var f = (
      /** @type {Derived} */
      _
    );
    (f.effects ??= []).push(s);
  }
  return r;
}
function it() {
  return _ !== null && !D;
}
function Xn(e) {
  const t = z(Le, null, !1);
  return b(t, T), t.teardown = e, t;
}
function Zn(e) {
  return z(Ve | yn, e, !1);
}
function Qn(e) {
  P.ensure();
  const t = z(ee | ue, e, !0);
  return () => {
    F(t);
  };
}
function er(e) {
  P.ensure();
  const t = z(ee | ue, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? Ae(t, () => {
      F(t), i(void 0);
    }) : (F(t), i(void 0));
  });
}
function tr(e) {
  return z(Ze | ue, e, !0);
}
function Ht(e, t = 0) {
  return z(Le | t, e, !0);
}
function Ut(e, t = [], n = [], i = []) {
  Yn(i, t, n, (r) => {
    z(Le, () => e(...r.map(k)), !0);
  });
}
function nr(e, t = 0) {
  var n = z(G | t, e, !0);
  return n;
}
function te(e) {
  return z(le | ue, e, !0);
}
function Gt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = fe, i = _;
    ct(!0), x(null);
    try {
      t.call(null);
    } finally {
      ct(n), x(i);
    }
  }
}
function Kt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Vt(() => {
      r.abort(ae);
    });
    var i = n.next;
    (n.f & ee) !== 0 ? n.parent = null : F(n, t), n = i;
  }
}
function rr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & le) === 0 && F(t), t = n;
  }
}
function F(e, t = !0) {
  var n = !1;
  (t || (e.f & yt) !== 0) && e.nodes !== null && e.nodes.end !== null && (ir(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Kt(e, t && !n), Me(e, 0), b(e, V);
  var i = e.nodes && e.nodes.t;
  if (i !== null)
    for (const s of i)
      s.stop();
  Gt(e);
  var r = e.parent;
  r !== null && r.first !== null && Wt(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function ir(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ W(e);
    e.remove(), e = n;
  }
}
function Wt(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function Ae(e, t, n = !0) {
  var i = [];
  zt(e, i, !0);
  var r = () => {
    n && F(e), t && t();
  }, s = i.length;
  if (s > 0) {
    var f = () => --s || r();
    for (var l of i)
      l.out(f);
  } else
    r();
}
function zt(e, t, n) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || n) && t.push(l);
    for (var r = e.first; r !== null; ) {
      var s = r.next, f = (r.f & Ce) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & le) !== 0 && (e.f & G) !== 0;
      zt(r, t, f ? n : !1), r = s;
    }
  }
}
function sr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end; n !== null; ) {
      var r = n === i ? null : /* @__PURE__ */ W(n);
      t.append(n), n = r;
    }
}
let re = !1;
function Fe(e) {
  re = e;
}
let fe = !1;
function ct(e) {
  fe = e;
}
let _ = null, D = !1;
function x(e) {
  _ = e;
}
let v = null;
function j(e) {
  v = e;
}
let H = null;
function fr(e) {
  _ !== null && (H === null ? H = [e] : H.push(e));
}
let E = null, A = 0, R = null;
function lr(e) {
  R = e;
}
let Jt = 1, ye = 0, ie = ye;
function ht(e) {
  ie = e;
}
function Xt() {
  return ++Jt;
}
function Ee(e) {
  var t = e.f;
  if ((t & S) !== 0)
    return !0;
  if (t & w && (e.f &= ~se), (t & K) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), i = n.length, r = 0; r < i; r++) {
      var s = n[r];
      if (Ee(
        /** @type {Derived} */
        s
      ) && Mt(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & O) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    C === null && b(e, T);
  }
  return !1;
}
function Zt(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null && !H?.includes(e))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      (s.f & w) !== 0 ? Zt(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? b(s, S) : (s.f & T) !== 0 && b(s, K), Q(
        /** @type {Effect} */
        s
      ));
    }
}
function Qt(e) {
  var t = E, n = A, i = R, r = _, s = H, f = M, l = D, u = ie, o = e.f;
  E = /** @type {null | Value[]} */
  null, A = 0, R = null, _ = (o & (le | ee)) === 0 ? e : null, H = null, he(e.ctx), D = !1, ie = ++ye, e.ac !== null && (Vt(() => {
    e.ac.abort(ae);
  }), e.ac = null);
  try {
    e.f |= He;
    var a = (
      /** @type {Function} */
      e.fn
    ), d = a(), c = e.deps;
    if (E !== null) {
      var h;
      if (Me(e, A), c !== null && A > 0)
        for (c.length = A + E.length, h = 0; h < E.length; h++)
          c[A + h] = E[h];
      else
        e.deps = c = E;
      if (it() && (e.f & O) !== 0)
        for (h = A; h < c.length; h++)
          (c[h].reactions ??= []).push(e);
    } else c !== null && A < c.length && (Me(e, A), c.length = A);
    if (xt() && R !== null && !D && c !== null && (e.f & (w | K | S)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      R.length; h++)
        Zt(
          R[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (ye++, R !== null && (i === null ? i = R : i.push(.../** @type {Source[]} */
    R))), (e.f & X) !== 0 && (e.f ^= X), d;
  } catch ($) {
    return At($);
  } finally {
    e.f ^= He, E = t, A = n, R = i, _ = r, H = s, he(f), D = l, ie = u;
  }
}
function ur(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = dn.call(n, e);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  if (n === null && (t.f & w) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (E === null || !E.includes(t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & O) !== 0 && (s.f ^= O, s.f &= ~se), nt(s), Ft(s), Me(s, 0);
  }
}
function Me(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      ur(e, n[i]);
}
function me(e) {
  var t = e.f;
  if ((t & V) === 0) {
    b(e, T);
    var n = v, i = re;
    v = e, re = !0;
    try {
      (t & (G | gt)) !== 0 ? rr(e) : Kt(e), Gt(e);
      var r = Qt(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = Jt;
      var s;
      Be && Pn && (e.f & S) !== 0 && e.deps;
    } finally {
      re = i, v = n;
    }
  }
}
function k(e) {
  var t = e.f, n = (t & w) !== 0;
  if (_ !== null && !D) {
    var i = v !== null && (v.f & V) !== 0;
    if (!i && !H?.includes(e)) {
      var r = _.deps;
      if ((_.f & He) !== 0)
        e.rv < ye && (e.rv = ye, E === null && r !== null && r[A] === e ? A++ : E === null ? E = [e] : E.includes(e) || E.push(e));
      else {
        (_.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [_] : s.includes(_) || s.push(_);
      }
    }
  }
  if (fe && Z.has(e))
    return Z.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (fe) {
      var l = f.v;
      return ((f.f & T) === 0 && f.reactions !== null || tn(f)) && (l = rt(f)), Z.set(f, l), l;
    }
    var u = (f.f & O) === 0 && !D && _ !== null && (re || (_.f & O) !== 0), o = f.deps === null;
    Ee(f) && (u && (f.f |= O), Mt(f)), u && !o && en(f);
  }
  if (C?.has(e))
    return C.get(e);
  if ((e.f & X) !== 0)
    throw e.v;
  return e.v;
}
function en(e) {
  if (e.deps !== null) {
    e.f |= O;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & w) !== 0 && (t.f & O) === 0 && en(
        /** @type {Derived} */
        t
      );
  }
}
function tn(e) {
  if (e.v === y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Z.has(t) || (t.f & w) !== 0 && tn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function or(e) {
  var t = D;
  try {
    return D = !0, e();
  } finally {
    D = t;
  }
}
const nn = /* @__PURE__ */ new Set(), We = /* @__PURE__ */ new Set();
function ar(e) {
  for (var t = 0; t < e.length; t++)
    nn.add(e[t]);
  for (var n of We)
    n(e);
}
let dt = null;
function Se(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, r = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  dt = e;
  var f = 0, l = dt === e && e.__root;
  if (l) {
    var u = r.indexOf(l);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = r.indexOf(t);
    if (o === -1)
      return;
    u <= o && (f = u);
  }
  if (s = /** @type {Element} */
  r[f] || e.target, s !== t) {
    Oe(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var a = _, d = v;
    x(null), j(null);
    try {
      for (var c, h = []; s !== null; ) {
        var $ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var L = s["__" + i];
          L != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && L.call(s, e);
        } catch (q) {
          c ? h.push(q) : c = q;
        }
        if (e.cancelBubble || $ === t || $ === null)
          break;
        s = $;
      }
      if (c) {
        for (let q of h)
          queueMicrotask(() => {
            throw q;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, x(a), j(d);
    }
  }
}
function cr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function ke(e, t) {
  var n = (
    /** @type {Effect} */
    v
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function rn(e, t) {
  var n = (t & an) !== 0, i = (t & cn) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    if (m)
      return ke(p, null), p;
    r === void 0 && (r = cr(s ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ _e(r)));
    var f = (
      /** @type {TemplateNode} */
      i || jt ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(f)
      ), u = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      ke(l, u);
    } else
      ke(f, f);
    return f;
  };
}
function st(e, t) {
  if (m) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      v
    );
    ((n.f & Xe) === 0 || n.nodes.end === null) && (n.nodes.end = p), et();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const hr = ["touchstart", "touchmove"];
function dr(e) {
  return hr.includes(e);
}
function sn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function fn(e, t) {
  return ln(e, t);
}
function _r(e, t) {
  Ke(), t.intro = t.intro ?? !1;
  const n = t.target, i = m, r = p;
  try {
    for (var s = /* @__PURE__ */ _e(n); s && (s.nodeType !== Ie || /** @type {Comment} */
    s.data !== _t); )
      s = /* @__PURE__ */ W(s);
    if (!s)
      throw ge;
    Te(!0), U(
      /** @type {Comment} */
      s
    );
    const f = ln(e, { ...t, anchor: s });
    return Te(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw f;
    return f !== ge && console.warn("Failed to hydrate: ", f), t.recover === !1 && En(), Ke(), zn(n), Te(!1), fn(e, t);
  } finally {
    Te(i), U(r);
  }
}
const oe = /* @__PURE__ */ new Map();
function ln(e, { target: t, anchor: n, props: i = {}, events: r, context: s, intro: f = !0 }) {
  Ke();
  var l = /* @__PURE__ */ new Set(), u = (d) => {
    for (var c = 0; c < d.length; c++) {
      var h = d[c];
      if (!l.has(h)) {
        l.add(h);
        var $ = dr(h);
        t.addEventListener(h, Se, { passive: $ });
        var L = oe.get(h);
        L === void 0 ? (document.addEventListener(h, Se, { passive: $ }), oe.set(h, 1)) : oe.set(h, L + 1);
      }
    }
  };
  u(_n(nn)), We.add(u);
  var o = void 0, a = er(() => {
    var d = n ?? t.appendChild(be());
    return jn(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (c) => {
        if (s) {
          Et({});
          var h = (
            /** @type {ComponentContext} */
            M
          );
          h.c = s;
        }
        if (r && (i.$$events = r), m && ke(
          /** @type {TemplateNode} */
          c,
          null
        ), o = e(c, i) || {}, m && (v.nodes.end = p, p === null || p.nodeType !== Ie || /** @type {Comment} */
        p.data !== pt))
          throw Qe(), ge;
        s && Tt();
      }
    ), () => {
      for (var c of l) {
        t.removeEventListener(c, Se);
        var h = (
          /** @type {number} */
          oe.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, Se), oe.delete(c)) : oe.set(c, h);
      }
      We.delete(u), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return ze.set(o, a), o;
}
let ze = /* @__PURE__ */ new WeakMap();
function vr(e, t) {
  const n = ze.get(e);
  return n ? (ze.delete(e), n(t)) : Promise.resolve();
}
function pr(e, t, n, i, r) {
  m && et();
  var s = t.$$slots?.[n], f = !1;
  s === !0 && (s = t.children, f = !0), s === void 0 || s(e, f ? () => i : i);
}
function $r(e, t, n, i) {
  var r = (
    /** @type {V} */
    i
  ), s = !0, f = () => (s && (s = !1, r = /** @type {V} */
  i), r), l;
  l = /** @type {V} */
  e[t], l === void 0 && i !== void 0 && (l = f());
  var u;
  u = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? f() : (s = !0, c);
  };
  var o = !1, a = /* @__PURE__ */ Dt(() => (o = !1, u())), d = (
    /** @type {Effect} */
    v
  );
  return (
    /** @type {() => V} */
    (function(c, h) {
      if (arguments.length > 0) {
        const $ = h ? k(a) : c;
        return I(a, $), o = !0, r !== void 0 && (r = $), c;
      }
      return fe && o || (d.f & V) !== 0 ? a.v : k(a);
    })
  );
}
function gr(e) {
  return new yr(e);
}
class yr {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), i = (s, f) => {
      var l = /* @__PURE__ */ Un(f, !1, !1);
      return n.set(s, l), l;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return k(n.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === mn ? !0 : (k(n.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, l) {
          return I(n.get(f) ?? i(f, l), l), Reflect.set(s, f, l);
        }
      }
    );
    this.#t = (t.hydrate ? _r : fn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Nt(), this.#e = r.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || Oe(this, s, {
        get() {
          return this.#t[s];
        },
        /** @param {any} value */
        set(f) {
          this.#t[s] = f;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, this.#t.$destroy = () => {
      vr(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#t.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#e[t] = this.#e[t] || [];
    const i = (...r) => n.call(this, ...r);
    return this.#e[t].push(i), () => {
      this.#e[t] = this.#e[t].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let un;
typeof HTMLElement == "function" && (un = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const i = this.$$c.$on(e, t);
      this.$$l_u.set(t, i);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const i = this.$$l_u.get(t);
      i && (i(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (s) => {
          const f = document.createElement("slot");
          r !== "default" && (f.name = r), st(s, f);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = mr(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Re(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = gr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Qn(() => {
        Ht(() => {
          this.$$r = !0;
          for (const r of Ne(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const s = Re(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, s);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const f = this.$$c.$on(r, s);
          this.$$l_u.set(s, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Re(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Ne(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Re(e, t, n, i) {
  const r = n[e]?.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function mr(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function on(e, t, n, i, r, s) {
  let f = class extends un {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ne(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Ne(t).forEach((l) => {
    Oe(f.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        u = Re(l, u, t), this.$$d[l] = u;
        var o = this.$$c;
        if (o) {
          var a = ce(o, l)?.get;
          a ? o[l] = u : o.$set({ [l]: u });
        }
      }
    });
  }), i.forEach((l) => {
    Oe(f.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
var wr = /* @__PURE__ */ rn("<pre> </pre> <!>", 1);
function br(e, t) {
  Et(t, !0);
  let n = $r(t, "name", 7, "world");
  var i = {
    get name() {
      return n();
    },
    set name(u = "world") {
      n(u), Nt();
    }
  }, r = wr(), s = Kn(r), f = Bt(s);
  wt(s);
  var l = Wn(s, 2);
  return pr(l, t, "default", {}), Ut(() => sn(f, `Hello ${n() ?? ""}!`)), st(e, r), Tt(i);
}
customElements.define("my-element", on(br, { name: {} }, ["default"], [], !0));
var Er = /* @__PURE__ */ rn("<button> </button>");
function Tr(e) {
  let t = /* @__PURE__ */ Y(0);
  const n = () => {
    I(t, k(t) + 1);
  };
  var i = Er();
  i.__click = n;
  var r = Bt(i);
  wt(i), Ut(() => sn(r, `count is ${k(t) ?? ""}`)), st(e, i);
}
ar(["click"]);
customElements.define("my-counter", on(Tr, {}, [], [], !0));
