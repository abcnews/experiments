typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const nn = 2, dt = "[", _t = "[!", vt = "]", $e = {}, y = /* @__PURE__ */ Symbol(), Ye = !1;
var rn = Array.isArray, sn = Array.prototype.indexOf, ln = Array.from, ke = Object.keys, Oe = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, fn = Object.prototype, un = Array.prototype, an = Object.getPrototypeOf, st = Object.isExtensible;
function on(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function pt() {
  var e, t, n = new Promise((i, r) => {
    e = i, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const w = 2, Be = 4, Me = 8, $t = 1 << 24, U = 16, fe = 32, ee = 64, ze = 128, O = 512, T = 1024, S = 2048, K = 4096, J = 8192, B = 16384, Je = 32768, Ne = 65536, lt = 1 << 17, gt = 1 << 18, ue = 1 << 19, cn = 1 << 20, se = 32768, Ve = 1 << 21, Xe = 1 << 22, X = 1 << 23, qe = /* @__PURE__ */ Symbol("$state"), hn = /* @__PURE__ */ Symbol("legacy props"), oe = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), yt = 3, Le = 8;
function dn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function _n() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function pn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function yn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ze(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function mn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let m = !1;
function Te(e) {
  m = e;
}
let p;
function H(e) {
  if (e === null)
    throw Ze(), $e;
  return p = e;
}
function Qe() {
  return H(/* @__PURE__ */ G(p));
}
function wn(e) {
  if (m) {
    if (/* @__PURE__ */ G(p) !== null)
      throw Ze(), $e;
    p = e;
  }
}
function bn(e = 1) {
  if (m) {
    for (var t = e, n = p; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ G(n);
    p = n;
  }
}
function En(e = !0) {
  for (var t = 0, n = p; ; ) {
    if (n.nodeType === Le) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === vt) {
        if (t === 0) return n;
        t -= 1;
      } else (i === dt || i === _t) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ G(n)
    );
    e && n.remove(), n = r;
  }
}
function mt(e) {
  return e === this.v;
}
function Tn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xn(e) {
  return !Tn(e, this.v);
}
let Sn = !1, M = null;
function he(e) {
  M = e;
}
function wt(e, t = !1, n) {
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
function bt(e) {
  var t = (
    /** @type {ComponentContext} */
    M
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var i of n)
      Kn(i);
  }
  return e !== void 0 && (t.x = e), t.i = !0, M = t.p, e ?? /** @type {T} */
  {};
}
function Et() {
  return !0;
}
let ne = [];
function Tt() {
  var e = ne;
  ne = [], on(e);
}
function et(e) {
  if (ne.length === 0 && !ve) {
    var t = ne;
    queueMicrotask(() => {
      t === ne && Tt();
    });
  }
  ne.push(e);
}
function An() {
  for (; ne.length > 0; )
    Tt();
}
function xt(e) {
  var t = v;
  if (t === null)
    return _.f |= X, e;
  if ((t.f & Je) === 0) {
    if ((t.f & ze) === 0)
      throw e;
    t.b.error(e);
  } else
    de(e, t);
}
function de(e, t) {
  for (; t !== null; ) {
    if ((t.f & ze) !== 0)
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
const Rn = -7169;
function b(e, t) {
  e.f = e.f & Rn | t;
}
function tt(e) {
  (e.f & O) !== 0 || e.deps === null ? b(e, T) : b(e, K);
}
function St(e) {
  if (e !== null)
    for (const t of e)
      (t.f & w) === 0 || (t.f & se) === 0 || (t.f ^= se, St(
        /** @type {Derived} */
        t.deps
      ));
}
function At(e, t, n) {
  (e.f & S) !== 0 ? t.add(e) : (e.f & K) !== 0 && n.add(e), St(e.deps), b(e, T);
}
const xe = /* @__PURE__ */ new Set();
let g = null, N = null, k = [], Ie = null, He = !1, ve = !1;
class C {
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
  #f = 0;
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
    return this.is_fork || this.#f > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    k = [], this.apply();
    var n = [], i = [];
    for (const r of t)
      this.#l(r, n, i);
    this.is_fork || this.#a(), this.is_deferred() ? (this.#u(i), this.#u(n)) : (g = null, ft(i), ft(n), this.#s?.resolve()), N = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #l(t, n, i) {
    t.f ^= T;
    for (var r = t.first, s = null; r !== null; ) {
      var l = r.f, f = (l & (fe | ee)) !== 0, u = f && (l & T) !== 0, a = u || (l & J) !== 0 || this.skipped_effects.has(r);
      if (!a && r.fn !== null) {
        f ? r.f ^= T : s !== null && (l & (Be | Me | $t)) !== 0 ? s.b.defer_effect(r) : (l & Be) !== 0 ? n.push(r) : Ee(r) && ((l & U) !== 0 && this.#r.add(r), me(r));
        var o = r.first;
        if (o !== null) {
          r = o;
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
      At(t[n], this.#r, this.#n);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== y && !this.previous.has(t) && this.previous.set(t, n), (t.f & X) === 0 && (this.current.set(t, t.v), N?.set(t, t.v));
  }
  activate() {
    g = this, this.apply();
  }
  deactivate() {
    g === this && (g = null, N = null);
  }
  flush() {
    if (this.activate(), k.length > 0) {
      if (kt(), g !== null && g !== this)
        return;
    } else this.#i === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #a() {
    if (this.#f === 0) {
      for (const t of this.#e) t();
      this.#e.clear();
    }
    this.#i === 0 && this.#o();
  }
  #o() {
    if (xe.size > 1) {
      this.previous.clear();
      var t = N, n = !0;
      for (const r of xe) {
        if (r === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [f, u] of this.current) {
          if (r.current.has(f))
            if (n && u !== r.current.get(f))
              r.current.set(f, u);
            else
              continue;
          s.push(f);
        }
        if (s.length === 0)
          continue;
        const l = [...r.current.keys()].filter((f) => !this.current.has(f));
        if (l.length > 0) {
          var i = k;
          k = [];
          const f = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const a of s)
            Ot(a, l, f, u);
          if (k.length > 0) {
            g = r, r.apply();
            for (const a of k)
              r.#l(a, [], []);
            r.deactivate();
          }
          k = i;
        }
      }
      g = null, N = t;
    }
    this.committed = !0, xe.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#i += 1, t && (this.#f += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#i -= 1, t && (this.#f -= 1), this.revive();
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
    return (this.#s ??= pt()).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new C();
      xe.add(g), ve || C.enqueue(() => {
        g === t && t.flush();
      });
    }
    return g;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    et(t);
  }
  apply() {
  }
}
function Rt(e) {
  var t = ve;
  ve = !0;
  try {
    for (var n; ; ) {
      if (An(), k.length === 0 && (g?.flush(), k.length === 0))
        return Ie = null, /** @type {T} */
        n;
      kt();
    }
  } finally {
    ve = t;
  }
}
function kt() {
  var e = re;
  He = !0;
  var t = null;
  try {
    var n = 0;
    for (De(!0); k.length > 0; ) {
      var i = C.ensure();
      if (n++ > 1e3) {
        var r, s;
        kn();
      }
      i.process(k), Z.clear();
    }
  } finally {
    He = !1, De(e), Ie = null;
  }
}
function kn() {
  try {
    _n();
  } catch (e) {
    de(e, Ie);
  }
}
let q = null;
function ft(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var i = e[n++];
      if ((i.f & (B | J)) === 0 && Ee(i) && (q = /* @__PURE__ */ new Set(), me(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Ht(i) : i.fn = null), q?.size > 0)) {
        Z.clear();
        for (const r of q) {
          if ((r.f & (B | J)) !== 0) continue;
          const s = [r];
          let l = r.parent;
          for (; l !== null; )
            q.has(l) && (q.delete(l), s.push(l)), l = l.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const u = s[f];
            (u.f & (B | J)) === 0 && me(u);
          }
        }
        q.clear();
      }
    }
    q = null;
  }
}
function Ot(e, t, n, i) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const s = r.f;
      (s & w) !== 0 ? Ot(
        /** @type {Derived} */
        r,
        t,
        n,
        i
      ) : (s & (Xe | U)) !== 0 && (s & S) === 0 && Nt(r, t, i) && (b(r, S), Q(
        /** @type {Effect} */
        r
      ));
    }
}
function Nt(e, t, n) {
  const i = n.get(e);
  if (i !== void 0) return i;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (t.includes(r))
        return !0;
      if ((r.f & w) !== 0 && Nt(
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
  for (var t = Ie = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (He && t === v && (n & U) !== 0 && (n & gt) === 0)
      return;
    if ((n & (ee | fe)) !== 0) {
      if ((n & T) === 0) return;
      t.f ^= T;
    }
  }
  k.push(t);
}
function On(e) {
  let t = 0, n = we(0), i;
  return () => {
    rt() && (D(n), Yt(() => (t === 0 && (i = ir(() => e(() => pe(n)))), t += 1, () => {
      et(() => {
        t -= 1, t === 0 && (i?.(), i = void 0, pe(n));
      });
    })));
  };
}
var Nn = Ne | ue | ze;
function Cn(e, t, n) {
  new Pn(e, t, n);
}
class Pn {
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
  #f;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #a = null;
  #o = 0;
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
  #m = On(() => (this.#h = we(this.#o), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, i) {
    this.#e = t, this.#i = n, this.#f = i, this.parent = /** @type {Effect} */
    v.b, this.is_pending = !!this.#i.pending, this.#s = Xn(() => {
      if (v.b = this, m) {
        const s = this.#t;
        Qe(), /** @type {Comment} */
        s.nodeType === Le && /** @type {Comment} */
        s.data === _t ? this.#b() : (this.#w(), this.#c === 0 && (this.is_pending = !1));
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
        this.#a?.remove();
      };
    }, Nn), m && (this.#e = p);
  }
  #w() {
    try {
      this.#r = te(() => this.#f(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  #b() {
    const t = this.#i.pending;
    t && (this.#n = te(() => t(this.#e)), C.enqueue(() => {
      var n = this.#g();
      this.#r = this.#p(() => (C.ensure(), te(() => this.#f(n)))), this.#c > 0 ? this.#$() : (Ae(
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
    return this.is_pending && (this.#a = be(), this.#e.before(this.#a), t = this.#a), t;
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    At(t, this.#_, this.#v);
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
    I(this.#s), x(this.#s), he(this.#s.ctx);
    try {
      return t();
    } catch (s) {
      return xt(s), null;
    } finally {
      I(n), x(i), he(r);
    }
  }
  #$() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#r !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#a
    ), er(this.#r, this.#u)), this.#n === null && (this.#n = te(() => t(this.#e)));
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
    this.#y(t), this.#o += t, this.#h && Pe(this.#h, this.#o);
  }
  get_effect_pending() {
    return this.#m(), D(
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
    this.#r && (F(this.#r), this.#r = null), this.#n && (F(this.#n), this.#n = null), this.#l && (F(this.#l), this.#l = null), m && (H(
      /** @type {TemplateNode} */
      this.#t
    ), bn(), H(En()));
    var r = !1, s = !1;
    const l = () => {
      if (r) {
        mn();
        return;
      }
      r = !0, s && yn(), C.ensure(), this.#o = 0, this.#l !== null && Ae(this.#l, () => {
        this.#l = null;
      }), this.is_pending = this.has_pending_snippet(), this.#r = this.#p(() => (this.#d = !1, te(() => this.#f(this.#e)))), this.#c > 0 ? this.#$() : this.is_pending = !1;
    };
    var f = _;
    try {
      x(null), s = !0, n?.(t, l), s = !1;
    } catch (u) {
      de(u, this.#s && this.#s.parent);
    } finally {
      x(f);
    }
    i && et(() => {
      this.#l = this.#p(() => {
        C.ensure(), this.#d = !0;
        try {
          return te(() => {
            i(
              this.#e,
              () => t,
              () => l
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
function Dn(e, t, n, i) {
  const r = Ct;
  if (n.length === 0 && e.length === 0) {
    i(t.map(r));
    return;
  }
  var s = g, l = (
    /** @type {Effect} */
    v
  ), f = Fn();
  function u() {
    Promise.all(n.map((a) => /* @__PURE__ */ Mn(a))).then((a) => {
      f();
      try {
        i([...t.map(r), ...a]);
      } catch (o) {
        (l.f & B) === 0 && de(o, l);
      }
      s?.deactivate(), Ce();
    }).catch((a) => {
      de(a, l);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    f();
    try {
      return u();
    } finally {
      s?.deactivate(), Ce();
    }
  }) : u();
}
function Fn() {
  var e = v, t = _, n = M, i = g;
  return function(s = !0) {
    I(e), x(t), he(n), s && i?.activate();
  };
}
function Ce() {
  I(null), x(null), he(null);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  var t = w | S, n = _ !== null && (_.f & w) !== 0 ? (
    /** @type {Derived} */
    _
  ) : null;
  return v !== null && (v.f |= ue), {
    ctx: M,
    deps: null,
    effects: null,
    equals: mt,
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
function Mn(e, t, n) {
  let i = (
    /** @type {Effect | null} */
    v
  );
  i === null && dn();
  var r = (
    /** @type {Boundary} */
    i.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = we(
    /** @type {V} */
    y
  ), f = !_, u = /* @__PURE__ */ new Map();
  return zn(() => {
    var a = pt();
    s = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        o === g && o.committed && o.deactivate(), Ce();
      });
    } catch (h) {
      a.reject(h), Ce();
    }
    var o = (
      /** @type {Batch} */
      g
    );
    if (f) {
      var d = r.is_rendered();
      r.update_pending_count(1), o.increment(d), u.get(o)?.reject(oe), u.delete(o), u.set(o, a);
    }
    const c = (h, $ = void 0) => {
      if (o.activate(), $)
        $ !== oe && (l.f |= X, Pe(l, $));
      else {
        (l.f & X) !== 0 && (l.f ^= X), Pe(l, h);
        for (const [L, j] of u) {
          if (u.delete(L), L === o) break;
          j.reject(oe);
        }
      }
      f && (r.update_pending_count(-1), o.decrement(d));
    };
    a.promise.then(c, (h) => c(null, h || "unknown"));
  }), Un(() => {
    for (const a of u.values())
      a.reject(oe);
  }), new Promise((a) => {
    function o(d) {
      function c() {
        d === s ? a(l) : o(s);
      }
      d.then(c, c);
    }
    o(s);
  });
}
function Pt(e) {
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
function Ln(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & w) === 0)
      return (t.f & B) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function nt(e) {
  var t, n = v;
  I(Ln(e));
  try {
    e.f &= ~se, Pt(e), t = zt(e);
  } finally {
    I(n);
  }
  return t;
}
function Dt(e) {
  var t = nt(e);
  if (!e.equals(t) && (e.wv = Gt(), (!g?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    b(e, T);
    return;
  }
  le || (N !== null ? (rt() || g?.is_fork) && N.set(e, t) : tt(e));
}
let Ue = /* @__PURE__ */ new Set();
const Z = /* @__PURE__ */ new Map();
let Ft = !1;
function we(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mt,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  const n = we(e);
  return tr(n), n;
}
// @__NO_SIDE_EFFECTS__
function In(e, t = !1, n = !0) {
  const i = we(e);
  return t || (i.equals = xn), i;
}
function Y(e, t, n = !1) {
  _ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!P || (_.f & lt) !== 0) && Et() && (_.f & (w | U | Xe | lt)) !== 0 && !V?.includes(e) && gn();
  let i = n ? _e(t) : t;
  return Pe(e, i);
}
function Pe(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    le ? Z.set(e, t) : Z.set(e, n), e.v = t;
    var i = C.ensure();
    if (i.capture(e, n), (e.f & w) !== 0) {
      const r = (
        /** @type {Derived} */
        e
      );
      (e.f & S) !== 0 && nt(r), tt(r);
    }
    e.wv = Gt(), Mt(e, S), v !== null && (v.f & T) !== 0 && (v.f & (fe | ee)) === 0 && (R === null ? nr([e]) : R.push(e)), !i.is_fork && Ue.size > 0 && !Ft && jn();
  }
  return t;
}
function jn() {
  Ft = !1;
  var e = re;
  De(!0);
  const t = Array.from(Ue);
  try {
    for (const n of t)
      (n.f & T) !== 0 && b(n, K), Ee(n) && me(n);
  } finally {
    De(e);
  }
  Ue.clear();
}
function pe(e) {
  Y(e, e.v + 1);
}
function Mt(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, r = 0; r < i; r++) {
      var s = n[r], l = s.f, f = (l & S) === 0;
      if (f && b(s, t), (l & w) !== 0) {
        var u = (
          /** @type {Derived} */
          s
        );
        N?.delete(u), (l & se) === 0 && (l & O && (s.f |= se), Mt(u, K));
      } else f && ((l & U) !== 0 && q !== null && q.add(
        /** @type {Effect} */
        s
      ), Q(
        /** @type {Effect} */
        s
      ));
    }
}
function _e(e) {
  if (typeof e != "object" || e === null || qe in e)
    return e;
  const t = an(e);
  if (t !== fn && t !== un)
    return e;
  var n = /* @__PURE__ */ new Map(), i = rn(e), r = /* @__PURE__ */ z(0), s = ie, l = (f) => {
    if (ie === s)
      return f();
    var u = _, a = ie;
    x(null), ot(s);
    var o = f();
    return x(u), ot(a), o;
  };
  return i && n.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, u, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && pn();
        var o = n.get(u);
        return o === void 0 ? o = l(() => {
          var d = /* @__PURE__ */ z(a.value);
          return n.set(u, d), d;
        }) : Y(o, a.value, !0), !0;
      },
      deleteProperty(f, u) {
        var a = n.get(u);
        if (a === void 0) {
          if (u in f) {
            const o = l(() => /* @__PURE__ */ z(y));
            n.set(u, o), pe(r);
          }
        } else
          Y(a, y), pe(r);
        return !0;
      },
      get(f, u, a) {
        if (u === qe)
          return e;
        var o = n.get(u), d = u in f;
        if (o === void 0 && (!d || ce(f, u)?.writable) && (o = l(() => {
          var h = _e(d ? f[u] : y), $ = /* @__PURE__ */ z(h);
          return $;
        }), n.set(u, o)), o !== void 0) {
          var c = D(o);
          return c === y ? void 0 : c;
        }
        return Reflect.get(f, u, a);
      },
      getOwnPropertyDescriptor(f, u) {
        var a = Reflect.getOwnPropertyDescriptor(f, u);
        if (a && "value" in a) {
          var o = n.get(u);
          o && (a.value = D(o));
        } else if (a === void 0) {
          var d = n.get(u), c = d?.v;
          if (d !== void 0 && c !== y)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return a;
      },
      has(f, u) {
        if (u === qe)
          return !0;
        var a = n.get(u), o = a !== void 0 && a.v !== y || Reflect.has(f, u);
        if (a !== void 0 || v !== null && (!o || ce(f, u)?.writable)) {
          a === void 0 && (a = l(() => {
            var c = o ? _e(f[u]) : y, h = /* @__PURE__ */ z(c);
            return h;
          }), n.set(u, a));
          var d = D(a);
          if (d === y)
            return !1;
        }
        return o;
      },
      set(f, u, a, o) {
        var d = n.get(u), c = u in f;
        if (i && u === "length")
          for (var h = a; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var $ = n.get(h + "");
            $ !== void 0 ? Y($, y) : h in f && ($ = l(() => /* @__PURE__ */ z(y)), n.set(h + "", $));
          }
        if (d === void 0)
          (!c || ce(f, u)?.writable) && (d = l(() => /* @__PURE__ */ z(void 0)), Y(d, _e(a)), n.set(u, d));
        else {
          c = d.v !== y;
          var L = l(() => _e(a));
          Y(d, L);
        }
        var j = Reflect.getOwnPropertyDescriptor(f, u);
        if (j?.set && j.set.call(o, a), !c) {
          if (i && typeof u == "string") {
            var it = (
              /** @type {Source<number>} */
              n.get("length")
            ), je = Number(u);
            Number.isInteger(je) && je >= it.v && Y(it, je + 1);
          }
          pe(r);
        }
        return !0;
      },
      ownKeys(f) {
        D(r);
        var u = Reflect.ownKeys(f).filter((d) => {
          var c = n.get(d);
          return c === void 0 || c.v !== y;
        });
        for (var [a, o] of n)
          o.v !== y && !(a in f) && u.push(a);
        return u;
      },
      setPrototypeOf() {
        $n();
      }
    }
  );
}
var ut, Lt, It, jt;
function Ke() {
  if (ut === void 0) {
    ut = window, Lt = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    It = ce(t, "firstChild").get, jt = ce(t, "nextSibling").get, st(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), st(n) && (n.__t = void 0);
  }
}
function be(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return (
    /** @type {TemplateNode | null} */
    It.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  return (
    /** @type {TemplateNode | null} */
    jt.call(e)
  );
}
function qn(e, t) {
  if (!m)
    return /* @__PURE__ */ ge(e);
  var n = /* @__PURE__ */ ge(p);
  return n === null && (n = p.appendChild(be())), H(n), n;
}
function Yn(e, t = !1) {
  if (!m) {
    var n = /* @__PURE__ */ ge(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ G(n) : n;
  }
  if (t && p?.nodeType !== yt) {
    var i = be();
    return p?.before(i), H(i), i;
  }
  return p;
}
function Bn(e, t = 1, n = !1) {
  let i = m ? p : e;
  for (var r; t--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ G(i);
  if (!m)
    return i;
  if (n && i?.nodeType !== yt) {
    var s = be();
    return i === null ? r?.after(s) : i.before(s), H(s), s;
  }
  return H(i), i;
}
function Vn(e) {
  e.textContent = "";
}
function qt(e) {
  var t = _, n = v;
  x(null), I(null);
  try {
    return e();
  } finally {
    x(t), I(n);
  }
}
function Hn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function W(e, t, n) {
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
      me(r), r.f |= Je;
    } catch (f) {
      throw F(r), f;
    }
  else t !== null && Q(r);
  var s = r;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & ue) === 0 && (s = s.first, (e & U) !== 0 && (e & Ne) !== 0 && s !== null && (s.f |= Ne)), s !== null && (s.parent = i, i !== null && Hn(s, i), _ !== null && (_.f & w) !== 0 && (e & ee) === 0)) {
    var l = (
      /** @type {Derived} */
      _
    );
    (l.effects ??= []).push(s);
  }
  return r;
}
function rt() {
  return _ !== null && !P;
}
function Un(e) {
  const t = W(Me, null, !1);
  return b(t, T), t.teardown = e, t;
}
function Kn(e) {
  return W(Be | cn, e, !1);
}
function Gn(e) {
  C.ensure();
  const t = W(ee | ue, e, !0);
  return () => {
    F(t);
  };
}
function Wn(e) {
  C.ensure();
  const t = W(ee | ue, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? Ae(t, () => {
      F(t), i(void 0);
    }) : (F(t), i(void 0));
  });
}
function zn(e) {
  return W(Xe | ue, e, !0);
}
function Yt(e, t = 0) {
  return W(Me | t, e, !0);
}
function Jn(e, t = [], n = [], i = []) {
  Dn(i, t, n, (r) => {
    W(Me, () => e(...r.map(D)), !0);
  });
}
function Xn(e, t = 0) {
  var n = W(U | t, e, !0);
  return n;
}
function te(e) {
  return W(fe | ue, e, !0);
}
function Bt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = le, i = _;
    at(!0), x(null);
    try {
      t.call(null);
    } finally {
      at(n), x(i);
    }
  }
}
function Vt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && qt(() => {
      r.abort(oe);
    });
    var i = n.next;
    (n.f & ee) !== 0 ? n.parent = null : F(n, t), n = i;
  }
}
function Zn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & fe) === 0 && F(t), t = n;
  }
}
function F(e, t = !0) {
  var n = !1;
  (t || (e.f & gt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Qn(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Vt(e, t && !n), Fe(e, 0), b(e, B);
  var i = e.nodes && e.nodes.t;
  if (i !== null)
    for (const s of i)
      s.stop();
  Bt(e);
  var r = e.parent;
  r !== null && r.first !== null && Ht(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Qn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ G(e);
    e.remove(), e = n;
  }
}
function Ht(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function Ae(e, t, n = !0) {
  var i = [];
  Ut(e, i, !0);
  var r = () => {
    n && F(e), t && t();
  }, s = i.length;
  if (s > 0) {
    var l = () => --s || r();
    for (var f of i)
      f.out(l);
  } else
    r();
}
function Ut(e, t, n) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const f of i)
        (f.is_global || n) && t.push(f);
    for (var r = e.first; r !== null; ) {
      var s = r.next, l = (r.f & Ne) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & fe) !== 0 && (e.f & U) !== 0;
      Ut(r, t, l ? n : !1), r = s;
    }
  }
}
function er(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end; n !== null; ) {
      var r = n === i ? null : /* @__PURE__ */ G(n);
      t.append(n), n = r;
    }
}
let re = !1;
function De(e) {
  re = e;
}
let le = !1;
function at(e) {
  le = e;
}
let _ = null, P = !1;
function x(e) {
  _ = e;
}
let v = null;
function I(e) {
  v = e;
}
let V = null;
function tr(e) {
  _ !== null && (V === null ? V = [e] : V.push(e));
}
let E = null, A = 0, R = null;
function nr(e) {
  R = e;
}
let Kt = 1, ye = 0, ie = ye;
function ot(e) {
  ie = e;
}
function Gt() {
  return ++Kt;
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
      ) && Dt(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & O) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    N === null && b(e, T);
  }
  return !1;
}
function Wt(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null && !V?.includes(e))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      (s.f & w) !== 0 ? Wt(
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
function zt(e) {
  var t = E, n = A, i = R, r = _, s = V, l = M, f = P, u = ie, a = e.f;
  E = /** @type {null | Value[]} */
  null, A = 0, R = null, _ = (a & (fe | ee)) === 0 ? e : null, V = null, he(e.ctx), P = !1, ie = ++ye, e.ac !== null && (qt(() => {
    e.ac.abort(oe);
  }), e.ac = null);
  try {
    e.f |= Ve;
    var o = (
      /** @type {Function} */
      e.fn
    ), d = o(), c = e.deps;
    if (E !== null) {
      var h;
      if (Fe(e, A), c !== null && A > 0)
        for (c.length = A + E.length, h = 0; h < E.length; h++)
          c[A + h] = E[h];
      else
        e.deps = c = E;
      if (rt() && (e.f & O) !== 0)
        for (h = A; h < c.length; h++)
          (c[h].reactions ??= []).push(e);
    } else c !== null && A < c.length && (Fe(e, A), c.length = A);
    if (Et() && R !== null && !P && c !== null && (e.f & (w | K | S)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      R.length; h++)
        Wt(
          R[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (ye++, R !== null && (i === null ? i = R : i.push(.../** @type {Source[]} */
    R))), (e.f & X) !== 0 && (e.f ^= X), d;
  } catch ($) {
    return xt($);
  } finally {
    e.f ^= Ve, E = t, A = n, R = i, _ = r, V = s, he(l), P = f, ie = u;
  }
}
function rr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = sn.call(n, e);
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
    (s.f & O) !== 0 && (s.f ^= O, s.f &= ~se), tt(s), Pt(s), Fe(s, 0);
  }
}
function Fe(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      rr(e, n[i]);
}
function me(e) {
  var t = e.f;
  if ((t & B) === 0) {
    b(e, T);
    var n = v, i = re;
    v = e, re = !0;
    try {
      (t & (U | $t)) !== 0 ? Zn(e) : Vt(e), Bt(e);
      var r = zt(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = Kt;
      var s;
      Ye && Sn && (e.f & S) !== 0 && e.deps;
    } finally {
      re = i, v = n;
    }
  }
}
function D(e) {
  var t = e.f, n = (t & w) !== 0;
  if (_ !== null && !P) {
    var i = v !== null && (v.f & B) !== 0;
    if (!i && !V?.includes(e)) {
      var r = _.deps;
      if ((_.f & Ve) !== 0)
        e.rv < ye && (e.rv = ye, E === null && r !== null && r[A] === e ? A++ : E === null ? E = [e] : E.includes(e) || E.push(e));
      else {
        (_.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [_] : s.includes(_) || s.push(_);
      }
    }
  }
  if (le && Z.has(e))
    return Z.get(e);
  if (n) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (le) {
      var f = l.v;
      return ((l.f & T) === 0 && l.reactions !== null || Xt(l)) && (f = nt(l)), Z.set(l, f), f;
    }
    var u = (l.f & O) === 0 && !P && _ !== null && (re || (_.f & O) !== 0), a = l.deps === null;
    Ee(l) && (u && (l.f |= O), Dt(l)), u && !a && Jt(l);
  }
  if (N?.has(e))
    return N.get(e);
  if ((e.f & X) !== 0)
    throw e.v;
  return e.v;
}
function Jt(e) {
  if (e.deps !== null) {
    e.f |= O;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & w) !== 0 && (t.f & O) === 0 && Jt(
        /** @type {Derived} */
        t
      );
  }
}
function Xt(e) {
  if (e.v === y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Z.has(t) || (t.f & w) !== 0 && Xt(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ir(e) {
  var t = P;
  try {
    return P = !0, e();
  } finally {
    P = t;
  }
}
const sr = /* @__PURE__ */ new Set(), ct = /* @__PURE__ */ new Set();
let ht = null;
function Se(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, r = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  ht = e;
  var l = 0, f = ht === e && e.__root;
  if (f) {
    var u = r.indexOf(f);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var a = r.indexOf(t);
    if (a === -1)
      return;
    u <= a && (l = u);
  }
  if (s = /** @type {Element} */
  r[l] || e.target, s !== t) {
    Oe(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var o = _, d = v;
    x(null), I(null);
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
        } catch (j) {
          c ? h.push(j) : c = j;
        }
        if (e.cancelBubble || $ === t || $ === null)
          break;
        s = $;
      }
      if (c) {
        for (let j of h)
          queueMicrotask(() => {
            throw j;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, x(o), I(d);
    }
  }
}
function lr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ge(e, t) {
  var n = (
    /** @type {Effect} */
    v
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function fr(e, t) {
  var n = (t & nn) !== 0, i, r = !e.startsWith("<!>");
  return () => {
    if (m)
      return Ge(p, null), p;
    i === void 0 && (i = lr(r ? e : "<!>" + e));
    var s = (
      /** @type {TemplateNode} */
      n || Lt ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ge(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ge(l, f);
    }
    return s;
  };
}
function Zt(e, t) {
  if (m) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      v
    );
    ((n.f & Je) === 0 || n.nodes.end === null) && (n.nodes.end = p), Qe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ur = ["touchstart", "touchmove"];
function ar(e) {
  return ur.includes(e);
}
function or(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Qt(e, t) {
  return en(e, t);
}
function cr(e, t) {
  Ke(), t.intro = t.intro ?? !1;
  const n = t.target, i = m, r = p;
  try {
    for (var s = /* @__PURE__ */ ge(n); s && (s.nodeType !== Le || /** @type {Comment} */
    s.data !== dt); )
      s = /* @__PURE__ */ G(s);
    if (!s)
      throw $e;
    Te(!0), H(
      /** @type {Comment} */
      s
    );
    const l = en(e, { ...t, anchor: s });
    return Te(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((f) => f.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== $e && console.warn("Failed to hydrate: ", l), t.recover === !1 && vn(), Ke(), Vn(n), Te(!1), Qt(e, t);
  } finally {
    Te(i), H(r);
  }
}
const ae = /* @__PURE__ */ new Map();
function en(e, { target: t, anchor: n, props: i = {}, events: r, context: s, intro: l = !0 }) {
  Ke();
  var f = /* @__PURE__ */ new Set(), u = (d) => {
    for (var c = 0; c < d.length; c++) {
      var h = d[c];
      if (!f.has(h)) {
        f.add(h);
        var $ = ar(h);
        t.addEventListener(h, Se, { passive: $ });
        var L = ae.get(h);
        L === void 0 ? (document.addEventListener(h, Se, { passive: $ }), ae.set(h, 1)) : ae.set(h, L + 1);
      }
    }
  };
  u(ln(sr)), ct.add(u);
  var a = void 0, o = Wn(() => {
    var d = n ?? t.appendChild(be());
    return Cn(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (c) => {
        if (s) {
          wt({});
          var h = (
            /** @type {ComponentContext} */
            M
          );
          h.c = s;
        }
        if (r && (i.$$events = r), m && Ge(
          /** @type {TemplateNode} */
          c,
          null
        ), a = e(c, i) || {}, m && (v.nodes.end = p, p === null || p.nodeType !== Le || /** @type {Comment} */
        p.data !== vt))
          throw Ze(), $e;
        s && bt();
      }
    ), () => {
      for (var c of f) {
        t.removeEventListener(c, Se);
        var h = (
          /** @type {number} */
          ae.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, Se), ae.delete(c)) : ae.set(c, h);
      }
      ct.delete(u), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return We.set(a, o), a;
}
let We = /* @__PURE__ */ new WeakMap();
function hr(e, t) {
  const n = We.get(e);
  return n ? (We.delete(e), n(t)) : Promise.resolve();
}
function dr(e, t, n, i, r) {
  m && Qe();
  var s = t.$$slots?.[n], l = !1;
  s === !0 && (s = t.children, l = !0), s === void 0 || s(e, l ? () => i : i);
}
function _r(e, t, n, i) {
  var r = (
    /** @type {V} */
    i
  ), s = !0, l = () => (s && (s = !1, r = /** @type {V} */
  i), r), f;
  f = /** @type {V} */
  e[t], f === void 0 && i !== void 0 && (f = l());
  var u;
  u = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? l() : (s = !0, c);
  };
  var a = !1, o = /* @__PURE__ */ Ct(() => (a = !1, u())), d = (
    /** @type {Effect} */
    v
  );
  return (
    /** @type {() => V} */
    (function(c, h) {
      if (arguments.length > 0) {
        const $ = h ? D(o) : c;
        return Y(o, $), a = !0, r !== void 0 && (r = $), c;
      }
      return le && a || (d.f & B) !== 0 ? o.v : D(o);
    })
  );
}
function vr(e) {
  return new pr(e);
}
class pr {
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
    var n = /* @__PURE__ */ new Map(), i = (s, l) => {
      var f = /* @__PURE__ */ In(l, !1, !1);
      return n.set(s, f), f;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return D(n.get(l) ?? i(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === hn ? !0 : (D(n.get(l) ?? i(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, f) {
          return Y(n.get(l) ?? i(l, f), f), Reflect.set(s, l, f);
        }
      }
    );
    this.#t = (t.hydrate ? cr : Qt)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Rt(), this.#e = r.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || Oe(this, s, {
        get() {
          return this.#t[s];
        },
        /** @param {any} value */
        set(l) {
          this.#t[s] = l;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, this.#t.$destroy = () => {
      hr(this.#t);
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
let tn;
typeof HTMLElement == "function" && (tn = class extends HTMLElement {
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
          const l = document.createElement("slot");
          r !== "default" && (l.name = r), Zt(s, l);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = $r(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Re(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = vr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Gn(() => {
        Yt(() => {
          this.$$r = !0;
          for (const r of ke(this.$$c)) {
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
          const l = this.$$c.$on(r, s);
          this.$$l_u.set(s, l);
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
    return ke(this.$$p_d).find(
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
function $r(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function gr(e, t, n, i, r, s) {
  let l = class extends tn {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ke(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return ke(t).forEach((f) => {
    Oe(l.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(u) {
        u = Re(f, u, t), this.$$d[f] = u;
        var a = this.$$c;
        if (a) {
          var o = ce(a, f)?.get;
          o ? a[f] = u : a.$set({ [f]: u });
        }
      }
    });
  }), i.forEach((f) => {
    Oe(l.prototype, f, {
      get() {
        return this.$$c?.[f];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var yr = /* @__PURE__ */ fr("<h1> </h1> <!>", 1);
function mr(e, t) {
  wt(t, !0);
  let n = _r(t, "name", 7, "world");
  var i = {
    get name() {
      return n();
    },
    set name(u = "world") {
      n(u), Rt();
    }
  }, r = yr(), s = Yn(r), l = qn(s);
  wn(s);
  var f = Bn(s, 2);
  return dr(f, t, "default", {}), Jn(() => or(l, `Hello ${n() ?? ""}!`)), Zt(e, r), bt(i);
}
customElements.define("my-element", gr(mr, { name: {} }, ["default"], [], !0));
