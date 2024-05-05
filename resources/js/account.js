(()=>{
        var ur = Object.defineProperty
            , pr = Object.defineProperties;
        var fr = Object.getOwnPropertyDescriptors;
        var ta = Object.getOwnPropertySymbols
            , cr = Object.getPrototypeOf
            , mr = Object.prototype.hasOwnProperty
            , hr = Object.prototype.propertyIsEnumerable
            , xr = Reflect.get;
        var aa = (o,e,t)=>e in o ? ur(o, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : o[e] = t
            , tt = (o,e)=>{
            for (var t in e || (e = {}))
                mr.call(e, t) && aa(o, t, e[t]);
            if (ta)
                for (var t of ta(e))
                    hr.call(e, t) && aa(o, t, e[t]);
            return o
        }
            , ra = (o,e)=>pr(o, fr(e));
        var x = (o,e)=>()=>(o && (e = o(o = 0)),
            e);
        var yr = (o,e)=>()=>(e || o((e = {
            exports: {}
        }).exports, e),
            e.exports);
        var oa = (o,e,t)=>xr(cr(o), t, e);
        var u = (o,e,t)=>new Promise((a,r)=>{
                var s = n=>{
                    try {
                        l(t.next(n))
                    } catch (d) {
                        r(d)
                    }
                }
                    , i = n=>{
                    try {
                        l(t.throw(n))
                    } catch (d) {
                        r(d)
                    }
                }
                    , l = n=>n.done ? a(n.value) : Promise.resolve(n.value).then(s, i);
                l((t = t.apply(o, e)).next())
            }
        );
        var sa = x(()=>{}
        );
        function la(o, e) {
            return u(this, null, function*() {
                let t;
                try {
                    t = yield ajaxPromise({
                        method: "POST",
                        url: o,
                        data: e
                    })
                } catch (a) {
                    throw a.error ? a.error : a
                }
                if (t = JSON.parse(t),
                    t.code)
                    throw t.code;
                if (t.error)
                    throw t.error;
                return t
            })
        }
        function re(o) {
            let e, t = !1;
            return ()=>(t || (e = o(),
                t = !0),
                e)
        }
        function Ce(o) {
            return new Promise((e,t)=>{
                    let a = document.createElement("script");
                    a.type = "text/javascript",
                        a.src = o,
                        a.addEventListener("load", ()=>e(a)),
                        a.addEventListener("error", r=>t(r)),
                        document.body.appendChild(a)
                }
            )
        }
        function C(o, e) {
            let t = (o / 100).toFixed(2).toString().split(".");
            return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                e && t[1] === "00" ? t[0] : t.join(".")
        }
        function k(o) {
            return new Date(o).toISOString().split("T")[0]
        }
        var q = x(()=>{
                sa()
            }
        );
        function f(o, e) {
            return la(rt + o, e || {})
        }
        function na(o) {
            return f("/user/signin", o)
        }
        function da(o) {
            return f("/user/signup", o)
        }
        function ua() {
            return f("/user/signout")
        }
        function pa(o) {
            return f("/user/forgetpass", o)
        }
        function fa(o) {
            return f("/user/resetpass", o)
        }
        function ot(o) {
            return f("/user/mfa/enable", o)
        }
        function ca(o) {
            return f("/user/mfa/disable", o)
        }
        function ma(o) {
            return f("/user/mfa/recoverycodes/regenerate", o)
        }
        function ha() {
            return f("/user/info")
        }
        function xa(o) {
            return f("/user/signout-everywhere", o)
        }
        function ya(o) {
            return f("/user/changename", o)
        }
        function ba(o) {
            return f("/user/changeemail", o)
        }
        function ga(o) {
            return f("/user/changepass", o)
        }
        function Ea(o) {
            return f("/user/deleteaccount", o)
        }
        function wa() {
            return f("/subscription/list")
        }
        function st(o) {
            return f("/subscription/pay", o)
        }
        function va(o) {
            return f("/subscription/stripe/end", {
                intent_id: o
            })
        }
        function me(o) {
            return f("/subscription/price", o)
        }
        function Ca(o) {
            return f("/subscription/business/rename", o)
        }
        function Sa(o) {
            return f("/subscription/business/reduce", o)
        }
        function Pa(o) {
            return f("/subscription/sync/reduce", o)
        }
        function z(o) {
            return f("/subscription/renew", o)
        }
        function Ta(o) {
            return f("/subscription/publish/reduce", o)
        }
        function La() {
            return f("/subscription/paymentmethod")
        }
        function ka(o) {
            return f("/subscription/stripe/paymentmethod", o)
        }
        function Da(o) {
            return f("/subscription/role/discord", o)
        }
        function Ma() {
            return f("/subscription/role/forum")
        }
        function Aa() {
            return f("/subscription/invoice/list")
        }
        function Ba(o) {
            return f("/subscription/invoice/refund", o)
        }
        function Ra() {
            return f("/subscription/paypal/clientid")
        }
        function Ia(o) {
            return f("/user/discount/apply", o)
        }
        function Ha(o) {
            return f("/user/gift/create", o)
        }
        function Fa() {
            return f("/user/gift/list")
        }
        function Oa(o) {
            return f("/user/gift/info", o)
        }
        function he(o) {
            return f("/user/gift/redeem", o)
        }
        function Na(o) {
            return f("/publish/share/info", o)
        }
        function Ua(o) {
            return f("/publish/share/accept", o)
        }
        function Ga(o) {
            return f("/vault/share/info", o)
        }
        function za(o) {
            return f("/vault/share/accept", o)
        }
        var at, rt, ia, D = x(()=>{
                q();
                at = location.host.startsWith("127.0.0.1") || location.host.startsWith("localhost"),
                    rt = "https://api.obsidian.md";
                at && (rt = "http://127.0.0.1:3000");
                ia = rt + "/subscription/stripe/finish"
            }
        );
        var Ya, lt, qa = x(()=>{
                Ya = (o,e,t=[])=>{
                    let a = document.createElementNS("http://www.w3.org/2000/svg", o);
                    return Object.keys(e).forEach(r=>{
                            a.setAttribute(r, String(e[r]))
                        }
                    ),
                    t.length && t.forEach(r=>{
                            let s = Ya(...r);
                            a.appendChild(s)
                        }
                    ),
                        a
                }
                    ,
                    lt = ([o,e,t])=>Ya(o, e, t)
            }
        );
        var P, W = x(()=>{
                P = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": 2,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }
        );
        var it, Va = x(()=>{
                W();
                it = ["svg", P, [["path", {
                    d: "m12 19-7-7 7-7"
                }], ["path", {
                    d: "M19 12H5"
                }]]]
            }
        );
        var nt, Wa = x(()=>{
                W();
                nt = ["svg", P, [["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2"
                }], ["path", {
                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                }]]]
            }
        );
        var dt, _a = x(()=>{
                W();
                dt = ["svg", P, [["circle", {
                    cx: "8",
                    cy: "8",
                    r: "6"
                }], ["path", {
                    d: "M18.09 10.37A6 6 0 1 1 10.34 18"
                }], ["path", {
                    d: "M7 6h1v4"
                }], ["path", {
                    d: "m16.71 13.88.7.71-2.82 2.82"
                }]]]
            }
        );
        var ut, $a = x(()=>{
                W();
                ut = ["svg", P, [["path", {
                    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                }]]]
            }
        );
        var pt, ja = x(()=>{
                W();
                pt = ["svg", P, [["path", {
                    d: "M12 2v10"
                }], ["path", {
                    d: "M18.4 6.6a9 9 0 1 1-12.77.04"
                }]]]
            }
        );
        var ft, Xa = x(()=>{
                W();
                ft = ["svg", P, [["path", {
                    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                }], ["path", {
                    d: "M21 3v5h-5"
                }], ["path", {
                    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                }], ["path", {
                    d: "M8 16H3v5"
                }]]]
            }
        );
        var ct, Ka = x(()=>{
                W();
                ct = ["svg", P, [["path", {
                    d: "m22 2-7 20-4-9-9-4Z"
                }], ["path", {
                    d: "M22 2 11 13"
                }]]]
            }
        );
        var mt, Ja = x(()=>{
                W();
                mt = ["svg", P, [["circle", {
                    cx: "12",
                    cy: "8",
                    r: "5"
                }], ["path", {
                    d: "M20 21a8 8 0 0 0-16 0"
                }]]]
            }
        );
        var _ = x(()=>{
                qa();
                Va();
                Wa();
                _a();
                $a();
                ja();
                Xa();
                Ka();
                Ja();
            }
        );
        var I, w, h, M, oe, O = x(()=>{
                I = class {
                    constructor() {
                        this.containerEl = createDiv("modal-container");
                        let e = this.bgEl = this.containerEl.createDiv("modal-bg")
                            , t = this.modalEl = this.containerEl.createDiv("modal")
                            , a = t.createDiv("modal-close-button");
                        this.titleEl = t.createDiv("modal-title"),
                            this.contentEl = t.createDiv("modal-content"),
                            this.buttonContainerEl = t.createDiv("modal-button-container"),
                            a.addEventListener("click", this.close.bind(this)),
                            e.addEventListener("click", this.close.bind(this))
                    }
                    setTitle(e) {
                        return this.titleEl.setText(e),
                            this
                    }
                    addCloseButton() {
                        this.buttonContainerEl.createEl("button", {
                            cls: "button button-primary",
                            text: "Close"
                        }).addEventListener("click", this.close.bind(this))
                    }
                    open() {
                        document.body.appendChild(this.containerEl),
                            document.body.addClass("modal-open"),
                            this.onOpen()
                    }
                    close() {
                        this.onClose(),
                            document.body.removeClass("modal-open"),
                            this.containerEl.detach()
                    }
                    onOpen() {}
                    onClose() {}
                }
                    ,
                    w = class extends I {
                        constructor() {
                            super(),
                                this.addCloseButton()
                        }
                    }
                    ,
                    h = class extends I {
                        constructor() {
                            super();
                            let e = this.contentEl.createDiv("message-container");
                            this.errorEl = e.createDiv("payment-error message mod-error text-red-400"),
                                this.hideError()
                        }
                        showError(e) {
                            let {errorEl: t} = this;
                            e instanceof XMLHttpRequest && (e = e.statusText),
                                t.setText(e.toString()),
                                t.show()
                        }
                        hideError() {
                            let {errorEl: e} = this;
                            e.hide(),
                                e.empty(),
                                e.setText("")
                        }
                    }
                    ,
                    M = class extends I {
                        constructor(e, t) {
                            super(),
                                this.setTitle(e),
                                this.messageContainerEl = this.contentEl.createDiv("message-container"),
                                this.messageContainerEl.createDiv({
                                    cls: "message mod-success",
                                    text: t
                                }),
                                this.buttonContainerEl.createEl("button", {
                                    cls: "button button-primary",
                                    text: "Got it"
                                }).addEventListener("click", ()=>{
                                        this.close(),
                                            window.location.reload()
                                    }
                                )
                        }
                    }
                    ,
                    oe = class extends I {
                        constructor(e, t, a, r) {
                            super(),
                                this.setTitle(e),
                                this.contentEl.createDiv("message-container").createDiv({
                                    cls: "message mod-success",
                                    text: t
                                }),
                                this.buttonContainerEl.createEl("button", {
                                    cls: "button button-danger",
                                    text: a
                                }).addEventListener("click", ()=>{
                                        this.close(),
                                            r()
                                    }
                                ),
                                this.buttonContainerEl.createEl("button", {
                                    cls: "button",
                                    text: "Go back"
                                }).addEventListener("click", ()=>{
                                        this.close()
                                    }
                                )
                        }
                    }
            }
        );
        var A, N, b, X = x(()=>{
                A = class {
                    constructor(e, t, a, r) {
                        this.navEl = jsx("a", {
                            href: "#" + e,
                            class: "nav-item flex items-center gap-2 relative block p-0.5"
                        }, r, " ", t),
                            this.sectionEl = jsx("section", {
                                id: e,
                                class: "pt-16 sm:pt-8"
                            }, jsx("div", {
                                class: "sm:bg-secondary sm:rounded-xl sm:p-6 md:p-8"
                            }, this.headerEl = jsx("div", {
                                class: "flex gap-2 items-center mb-4 sm:mb-6"
                            }, this.titleEl = jsx("h2", {
                                class: "text-3xl font-semibold"
                            }, a)), this.contentEl = jsx("div", null)))
                    }
                    update() {}
                }
                    ,
                    N = class {
                        constructor(e) {
                            let t = this.containerEl = jsx("div", {
                                class: "space-y-4 divide-y divide-gray-700"
                            });
                            e.appendChild(t)
                        }
                        addSetting(e) {
                            return this.containerEl.appendChild(e.containerEl),
                                e
                        }
                    }
                    ,
                    b = class {
                        constructor() {
                            this.containerEl = jsx("div", {
                                class: "setting pt-4 flex gap-6 items-center"
                            }, jsx("div", null, this.nameEl = jsx("div", {
                                class: "block font-medium text-base md:text-lg"
                            }), this.descEl = jsx("div", {
                                class: "text-muted leading-4 mt-1 text-xs sm:text-sm md:text-base"
                            })), this.controlsEl = jsx("div", {
                                class: "ml-auto flex flex-col sm:flex-row gap-2"
                            }))
                        }
                        setName(e) {
                            return this.nameEl.setText(e),
                                this
                        }
                        setDesc(e) {
                            return this.descEl.setText(e),
                                this
                        }
                        addButton(e, t, a) {
                            let r = jsx("a", {
                                class: "button min-w-[5rem] button-sm sm:button-md"
                            }, e);
                            return r.addEventListener("click", s=>{
                                    s.preventDefault(),
                                        t(s)
                                }
                            ),
                            a && a(r),
                                this.controlsEl.appendChild(r),
                                this
                        }
                        addDangerButton(e, t) {
                            return this.addButton(e, t, a=>a.addClass("button-danger"))
                        }
                        addPrimaryButton(e, t) {
                            return this.addButton(e, t, a=>a.addClass("button-primary"))
                        }
                        addLink(e, t) {
                            let a = jsx("a", {
                                class: "button min-w-[5rem] button-sm sm:button-md",
                                href: t,
                                target: "_blank"
                            }, e);
                            return this.controlsEl.appendChild(a),
                                this
                        }
                    }
            }
        );
        function ne(o) {
            o.addSetting(new b().setName("Payment method").setDesc(createFragment(e=>e.append(jsx(jsxFragment, null, "Change the card you use for payment.\xA0", jsx("a", {
                class: "text-accent cursor-pointer",
                onclick: ()=>new bt().open()
            }, "View\xA0card\xA0details."))))).addButton("Change", ()=>{
                    new yt().open()
                }
            ))
        }
        var br, gr, Qa, Er, wr, vr, xe, se, ht, H, xt, Se, $, le, ie, yt, bt, ee = x(()=>{
                D();
                O();
                X();
                q();
                br = /^(.+)\((.+)\)$/,
                    gr = at ? "pk_test_y7CBP7qLG6kSU9sdcHV5S2db0052OC4wR8" : "pk_live_vqeOYADfYPpqKDT5FtAqCNBP00a9WEhYa6",
                    Qa = re(()=>u(void 0, null, function*() {
                        yield Promise.all([Ce("https://js.braintreegateway.com/web/3.85.2/js/client.min.js"), Ce("https://js.braintreegateway.com/web/3.85.2/js/data-collector.min.js"), Ce("https://js.braintreegateway.com/web/3.85.2/js/paypal-checkout.min.js")]);
                        let o = yield Ra()
                            , e = window.braintree
                            , t = yield e.client.create({
                            authorization: o.clientid
                        });
                        return {
                            braintree: e,
                            braintreeClient: t
                        }
                    })),
                    Er = re(()=>u(void 0, null, function*() {
                        let {braintree: o, braintreeClient: e} = yield Qa()
                            , t = yield o.paypalCheckout.create({
                            client: e
                        });
                        yield t.loadPayPalSDK({
                            vault: !0,
                            currency: "CAD",
                            intent: "capture"
                        });
                        let a = window.paypal;
                        return {
                            paypalCheckout: t,
                            paypal: a
                        }
                    })),
                    wr = re(()=>u(void 0, null, function*() {
                        let {braintree: o, braintreeClient: e} = yield Qa();
                        return yield o.dataCollector.create({
                            client: e
                        })
                    })),
                    vr = 1,
                    xe = re(()=>window.Stripe(gr)),
                    se = re(()=>xe().elements().create("card", {
                        style: {
                            base: {
                                fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                color: "#ddd",
                                iconColor: "#ddd",
                                fontSize: "16px",
                                "::placeholder": {
                                    color: "#888888"
                                }
                            },
                            invalid: {
                                color: "#fa755a",
                                iconColor: "#fa755a"
                            }
                        }
                    })),
                    ht = class extends h {
                        constructor(e, t, a, r) {
                            super(),
                                this.priceData = e,
                                this.priceInfo = t,
                                this.useVault = a,
                                this.afterPay = r,
                                this.setTitle("PayPal currency conversion");
                            let s = this.cadAmount = (t.total * t.usdToCad / 100).toFixed(2);
                            this.contentEl.append(jsx(jsxFragment, null, jsx("p", {
                                class: "mb-2"
                            }, "As a Canadian company we are required by PayPal to charge in CAD (Canadian dollars). If you are paying in any other currency, PayPal will charge a conversion fee of about 4.5%."), jsx("p", {
                                class: "mb-2"
                            }, "To avoid currency conversion fees, you can return to the previous step and use a credit card."), jsx("p", {
                                class: "mt-4 border-t pt-4 border-gray-700 flex gap-4"
                            }, jsx("span", {
                                class: "font-semibold"
                            }, t.desc), jsx("span", {
                                class: "ml-auto flex-grow text-right"
                            }, jsx("div", {
                                class: "text-xl font-semibold whitespace-nowrap"
                            }, "$", s, " CAD"), jsx("div", {
                                class: "text-muted whitespace-nowrap"
                            }, "($", C(t.total, !0), " USD)"))))),
                                (this.paypalButtonEl = this.buttonContainerEl.createDiv("paypal")).createEl("img", {
                                    attr: {
                                        src: "images/paypal.svg",
                                        alt: "Pay with PayPal"
                                    }
                                }),
                                this.buttonContainerEl.createEl("button", {
                                    cls: "button button-primary",
                                    text: "Go back"
                                }).addEventListener("click", this.close.bind(this))
                        }
                        onOpen() {
                            return u(this, null, function*() {
                                let {priceInfo: e, useVault: t} = this
                                    , {paypalCheckout: a, paypal: r} = yield Er()
                                    , s = {
                                        fundingSource: r.FUNDING.PAYPAL,
                                        style: {
                                            layout: "horizontal",
                                            shape: "rect",
                                            tagline: "false"
                                        },
                                        onApprove: (n,d)=>u(this, null, function*() {
                                            try {
                                                let g = yield a.tokenizePayment(n)
                                                    , m = yield wr();
                                                yield st(ra(tt({
                                                    method: "paypal"
                                                }, this.priceData), {
                                                    nonce: g.nonce,
                                                    device_data: m.deviceData
                                                })),
                                                    this.close(),
                                                    this.afterPay()
                                            } catch (g) {
                                                console.log(g),
                                                    this.showError(g)
                                            }
                                        }),
                                        onCancel: n=>{
                                            console.log("PayPal payment cancelled", JSON.stringify(n))
                                        }
                                        ,
                                        onError: n=>{
                                            this.showError(n)
                                        }
                                    }
                                    , i = ()=>{
                                        try {
                                            let n = (e.total * e.usdToCad / 100).toFixed(2)
                                                , d = {
                                                flow: t ? "vault" : "checkout",
                                                intent: "capture",
                                                currency: "CAD",
                                                amount: n
                                            };
                                            return t && (d.requestBillingAgreement = !0,
                                                d.billingAgreementDetails = {
                                                    description: e.desc
                                                }),
                                                a.createPayment(d)
                                        } catch (n) {
                                            throw console.error(n),
                                                this.showError(n),
                                                n
                                        }
                                    }
                                ;
                                t ? s.createBillingAgreement = i : s.createOrder = i,
                                    this.paypalButtonEl.empty();
                                let l = this.paypalButtonEl.id;
                                l || (this.paypalButtonEl.id = l = "paypal-" + vr++),
                                    r.Buttons(s).render("#" + l)
                            })
                        }
                    }
                    ,
                    H = class {
                        constructor(e, t) {
                            let a = this.containerEl = e.createDiv("payment-line gap-2 flex items-center w-full py-4 border-t border-gray-700")
                                , r = a.createDiv("payment-desc grow flex flex-col");
                            this.descEl = r.createSpan("font-semibold"),
                                this.subDescEl = r.createSpan("text-muted text-sm"),
                                this.amountEl = a.createSpan("payment-amount text-xl justify-right font-semibold"),
                                this.splitDesc(t),
                                this.containerEl.hide()
                        }
                        setValues(e, t, a) {
                            let {containerEl: r, amountEl: s} = this;
                            r.toggle(e),
                                s.setText(t >= 0 ? "$" + C(t) : "-$" + C(-t) + " USD"),
                                this.splitDesc(a)
                        }
                        splitDesc(e) {
                            if (!String.isString(e))
                                return;
                            let {descEl: t, subDescEl: a} = this
                                , r = e
                                , s = ""
                                , i = br.exec(e);
                            if (i) {
                                r = i[1].trimEnd();
                                let l = i[2];
                                s = l[0].toUpperCase() + l.slice(1)
                            }
                            t.setText(r),
                                a.setText(s)
                        }
                    }
                    ,
                    xt = class {
                        constructor(e) {
                            this.subtotal = new H(e,"Subtotal"),
                                this.discount = new H(e,"Discount"),
                                this.tax = new H(e,"Tax"),
                                this.credit = new H(e,"Credit"),
                                this.total = new H(e,"Total")
                        }
                        setValues(e) {
                            let {subtotal: t, desc: a, tax: r, taxDesc: s, discount: i, discountDesc: l, creditUsed: n, total: d} = e;
                            this.discount.setValues(i !== 0, -i, l),
                                this.tax.setValues(r !== 0, r, s),
                                this.credit.setValues(n !== 0, -n, "Credit"),
                                this.total.amountEl.show(),
                                t === d && i === 0 && r === 0 && n === 0 ? (this.subtotal.setValues(!1, 0, "Subtotal"),
                                    this.total.setValues(!0, d, a),
                                d === 0 && this.total.amountEl.hide()) : (this.subtotal.setValues(!0, t, a),
                                    this.total.setValues(!0, d, "Total"))
                        }
                    }
                    ,
                    Se = class {
                        constructor(e) {
                            let t = this.formEl = e.createEl("form", "payment-form");
                            this.cardEl = t.createEl("label").createDiv("card-element");
                            let a = this.payEl = t.createEl("button", "submit button button-primary w-full text-base items-center");
                            this.spinnerEl = a.createDiv("spinner hidden"),
                                this.textEl = a.createSpan({
                                    cls: "button-text",
                                    text: "Pay"
                                }),
                                this.stripeBadgeEl = t.createEl("p", "mt-2 text-center opacity-50"),
                                this.stripeBadgeEl.createEl("img", {
                                    attr: {
                                        src: "images/stripe-badge.png",
                                        alt: "Powered by Stripe",
                                        class: "inline",
                                        width: "100px"
                                    }
                                })
                        }
                        setPrice(e) {
                            let t = e.total
                                , a = t > 0;
                            this.cardEl.toggle(a),
                                this.stripeBadgeEl.toggle(a);
                            let r = "Pay";
                            t > 0 ? r += ` $${C(t, !0)} USD` : e.subtotal > 0 ? r += " with Obsidian Credit" : r = "Continue",
                                this.payEl.setText(r)
                        }
                    }
                    ,
                    $ = class extends h {
                        constructor() {
                            super();
                            this.paypalUseVault = !0;
                            this.inputDisabled = !1;
                            let {contentEl: t} = this;
                            this.createPayment(t);
                            let a = this.paymentContainerEl = t.createDiv("payment-container")
                                , r = this.summaryEl = a.createDiv("payment-summary flex flex-col w-full mt-8 mb-3");
                            this.summary = new xt(r),
                                (this.stripeButton = new Se(a)).formEl.addEventListener("submit", this.onSubmit.bind(this));
                            let i = this.alternateEl = a.createEl("p", "mt-8 flex flex-wrap items-center justify-center")
                                , l = i.createDiv("text-center w-full mb-2 leading-tight text-sm text-muted font-semibold").appendText("Other payment methods")
                                , n = this.paypalButtonEl = i.createDiv("paypal-button paypal inline-flex rounded-md h-[38px] w-[115px]");
                            n.createEl("img", {
                                attr: {
                                    src: "images/paypal.svg",
                                    alt: "Pay with PayPal"
                                }
                            }),
                                n.addEventListener("click", ()=>this.usePaypal()),
                                (this.wechatButtonEl = i.createEl("img", {
                                    cls: "wechat-pay-button inline",
                                    attr: {
                                        src: "images/wechat-pay.png",
                                        alt: "Pay with Wechat Pay"
                                    }
                                })).addEventListener("click", ()=>this.pay("wechat")),
                                (this.alipayButtonEl = i.createEl("img", {
                                    cls: "alipay-button inline",
                                    attr: {
                                        src: "images/alipay.png",
                                        alt: "Pay with Alipay"
                                    }
                                })).addEventListener("click", ()=>this.pay("alipay")),
                                this.setLoading(!1)
                        }
                        createPayment(t) {}
                        onSubmit(t) {
                            t.preventDefault(),
                                this.pay("card")
                        }
                        setPrices(t) {
                            this.stripeButton.setPrice(t),
                                this.summary.setValues(t),
                                this.alternateEl.toggle(t.total > 0)
                        }
                        onOpen() {
                            super.onOpen(),
                                se().mount(this.stripeButton.cardEl)
                        }
                        onClose() {
                            super.onClose(),
                                se().unmount()
                        }
                        updatePrice() {
                            return u(this, null, function*() {
                                this.hideError();
                                try {
                                    let t = this.getPriceData()
                                        , a = yield me(t);
                                    this.setPrices(a)
                                } catch (t) {
                                    this.showError(t)
                                }
                            })
                        }
                        pay(t) {
                            return u(this, null, function*() {
                                if (!this.inputDisabled) {
                                    this.hideError(),
                                        this.setLoading(!0);
                                    try {
                                        this.inputDisabled = !0,
                                            this.stripeButton.formEl.setAttribute("disabled", "true"),
                                            this.wechatButtonEl.setAttribute("disabled", "true"),
                                            this.alipayButtonEl.setAttribute("disabled", "true");
                                        let a = this.getPriceData();
                                        if (a === null) {
                                            this.showError("Please make a selection before paying.");
                                            return
                                        }
                                        if (!(yield this.validate()))
                                            return;
                                        let r = yield st(tt({
                                            method: t
                                        }, a));
                                        if (r.secret) {
                                            let s;
                                            if (t === "card")
                                                s = yield xe().confirmCardPayment(r.secret, {
                                                    payment_method: {
                                                        card: se()
                                                    }
                                                });
                                            else if (t === "wechat")
                                                s = yield xe().confirmWechatPayPayment(r.secret, {
                                                    payment_method_options: {
                                                        wechat_pay: {
                                                            client: "web"
                                                        }
                                                    }
                                                });
                                            else if (t === "alipay")
                                                s = yield xe().confirmAlipayPayment(r.secret, {
                                                    return_url: ia
                                                });
                                            else
                                                throw "Please select payment method.";
                                            if (s.error)
                                                throw s.error.message;
                                            yield va(s.paymentIntent.id)
                                        }
                                    } catch (a) {
                                        this.showError(a);
                                        return
                                    } finally {
                                        this.inputDisabled = !1,
                                            this.stripeButton.formEl.removeAttribute("disabled"),
                                            this.wechatButtonEl.removeAttribute("disabled"),
                                            this.alipayButtonEl.removeAttribute("disabled"),
                                            this.setLoading(!1)
                                    }
                                    this.afterPay()
                                }
                            })
                        }
                        setLoading(t) {
                            this.stripeButton.payEl.toggleClass("mod-disabled", t),
                                this.stripeButton.spinnerEl.toggleClass("hidden", !t),
                                this.stripeButton.textEl.toggleClass("hidden", t)
                        }
                        usePaypal() {
                            return u(this, null, function*() {
                                this.hideError();
                                try {
                                    this.setLoading(!0);
                                    let t = this.getPriceData();
                                    if (t === null) {
                                        this.showError("Please make a selection before paying.");
                                        return
                                    }
                                    if (!(yield this.validate()))
                                        return;
                                    let a = yield me(t);
                                    new ht(t,a,this.paypalUseVault,()=>this.afterPay()).open()
                                } catch (t) {
                                    this.showError(t)
                                } finally {
                                    this.setLoading(!1)
                                }
                            })
                        }
                        validate() {
                            return u(this, null, function*() {
                                return !0
                            })
                        }
                    }
                    ,
                    le = class {
                        constructor(e, t, a) {
                            this.value = a,
                                this.cardEl = e.createDiv("card cursor-pointer p-4 rounded mb-3 ring-1 ring-gray-700 transition-100 transition-all hover:ring hover:ring-accent-500", r=>{
                                        r.createDiv("text-xl font-semibold", s=>{
                                                s.style.textAlign = "left",
                                                    s.appendText(t),
                                                    this.promoEl = s.createSpan({
                                                        cls: "ml-2 flair mod-pop",
                                                        text: ""
                                                    })
                                            }
                                        ),
                                            r.createDiv("text-muted", s=>{
                                                    s.createDiv({}, i=>{
                                                            this.priceEl = i.createEl("span", {
                                                                text: "$-",
                                                                cls: "hidden"
                                                            })
                                                        }
                                                    )
                                                }
                                            )
                                    }
                                ),
                                this.promoEl.hide()
                        }
                        setValues(e, t, a) {
                            let r = C(e, !0);
                            this.priceEl.setText(`$${r} USD per ${t}`),
                                this.priceEl.removeClass("hidden"),
                                this.setPromo(a)
                        }
                        setPromo(e) {
                            this.promoEl.setText(e),
                                this.promoEl.toggle(!!e)
                        }
                    }
                    ,
                    ie = class extends $ {
                        constructor() {
                            super(...arguments);
                            this.paypalUseVault = !0
                        }
                        createPayment(t) {
                            let a = t.createDiv("card-container mod-horizontal grid md:grid-cols-2 gap-x-4")
                                , r = this.yearlyCard = new le(a,"Yearly","yearly")
                                , s = this.monthlyCard = new le(a,"Monthly","monthly");
                            r.cardEl.addEventListener("click", ()=>this.setTermCard(r)),
                                s.cardEl.addEventListener("click", ()=>this.setTermCard(s))
                        }
                        setTermCard(t) {
                            this.selectedCard && this.selectedCard.cardEl.removeClass("is-selected"),
                                this.selectedCard = t,
                            t && (t.cardEl.addClass("is-selected"),
                                this.updatePrice())
                        }
                        setSubscriptionPrices(t) {
                            this.yearlyCard.setValues(t.yearly * 12, "year", t.yearlyPromo),
                                this.monthlyCard.setValues(t.monthly, "month", t.monthlyPromo)
                        }
                        onSubmit(t) {
                            t.preventDefault(),
                                this.pay("card")
                        }
                    }
                    ,
                    yt = class extends h {
                        constructor() {
                            super(),
                                this.setTitle("Change card"),
                                this.contentEl.append(jsx(jsxFragment, null, jsx("p", {
                                    class: "mb-2"
                                }, "Enter the details of your new card below."), jsx("p", {
                                    class: "my-2"
                                }, "Your card will not be charged until the next renewal date."))),
                                this.stripeButton = new Se(this.contentEl),
                                this.stripeButton.textEl.setText("Update card"),
                                this.stripeButton.formEl.addEventListener("submit", this.onSubmit.bind(this)),
                                this.setLoading(!1)
                        }
                        onSubmit(e) {
                            e.preventDefault(),
                                this.pay()
                        }
                        onOpen() {
                            super.onOpen(),
                                se().mount(this.stripeButton.cardEl)
                        }
                        onClose() {
                            super.onClose(),
                                se().unmount()
                        }
                        pay() {
                            return u(this, null, function*() {
                                this.setLoading(!0);
                                try {
                                    let e = yield xe().createPaymentMethod({
                                        type: "card",
                                        card: se()
                                    });
                                    e.paymentMethod && e.paymentMethod.id ? (yield ka({
                                        payment_method_id: e.paymentMethod.id
                                    }),
                                        window.location.reload()) : this.showError("Failed to update your payment method.")
                                } catch (e) {
                                    this.showError(e)
                                } finally {
                                    this.setLoading(!1)
                                }
                            })
                        }
                        setLoading(e) {
                            this.stripeButton.payEl.toggleClass("mod-disabled", e),
                                this.stripeButton.spinnerEl.toggleClass("hidden", !e),
                                this.stripeButton.textEl.toggleClass("hidden", e)
                        }
                    }
                    ,
                    bt = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Payment method")
                        }
                        onOpen() {
                            return u(this, null, function*() {
                                let e = yield La()
                                    , t = e.info ? `You're currently using a ${e.info}.` : "You currently do not have any payment methods on file.";
                                this.contentEl.createEl("p", {
                                    text: t
                                })
                            })
                        }
                    }
            }
        );
        function T(o) {
            let e = lt(o);
            return e.addClass("inline", "opacity-70", "icon"),
                e
        }
        var K = x(()=>{
                _()
            }
        );
        function Za(o) {
            return u(this, null, function*() {
                let e = "823279137640415263"
                    , t = location.protocol + "//" + location.host + location.pathname;
                o.addClass("mod-disabled"),
                    location.href = `https://discord.com/api/oauth2/authorize?client_id=${e}&redirect_uri=${encodeURIComponent(t)}&response_type=code&scope=identify`
            })
        }
        function er(o) {
            return u(this, null, function*() {
                o.addClass("mod-disabled");
                try {
                    yield Ma(),
                        new wt().open()
                } catch (e) {
                    new vt(e).open()
                }
                o.removeClass("mod-disabled")
            })
        }
        var ye, gt, Et, Pe, Te, wt, vt, Le, Ct = x(()=>{
                _();
                D();
                O();
                ee();
                X();
                K();
                ye = class {
                    constructor(e, t, a, r, s) {
                        this.value = t,
                            this.cardEl = e.createDiv("card cursor-pointer ring-1 ring-gray-700 p-3 mb-3 rounded transition-100 transition-all hover:ring hover:ring-accent-500", i=>{
                                    i.createDiv({
                                        cls: "text-xl font-semibold",
                                        text: a
                                    }),
                                        i.createDiv().createEl("button", "text-base", l=>{
                                                l.createEl("span", {
                                                    text: "$" + s
                                                }),
                                                    l.appendText(" USD one-time")
                                            }
                                        ),
                                        i.createDiv("card-description muted list-disc mt-2").appendChild(r)
                                }
                            )
                    }
                }
                    ,
                    gt = class extends $ {
                        constructor() {
                            super();
                            this.paypalUseVault = !1;
                            this.currentCard = null;
                            this.setTitle("Choose a Catalyst tier"),
                                this.containerEl.addClass("mod-personal-license"),
                                this.paymentContainerEl.hide()
                        }
                        createPayment(t) {
                            t.createDiv("card-container mod-catalyst", a=>{
                                    let r = [this.insiderCard = new ye(a,"insider","Insider",jsx("ul", {
                                        class: "text-sm text-muted"
                                    }, jsx("li", null, "Early access to beta versions"), jsx("li", null, jsx("b", null, "Insider"), " community badge")),25), this.supporterCard = new ye(a,"supporter","Supporter",jsx("ul", {
                                        class: "text-sm text-muted"
                                    }, jsx("li", null, "Early access to beta versions"), jsx("li", null, "Exclusive Discord channel"), jsx("li", null, jsx("b", null, "Supporter"), " community badge")),50), this.vipCard = new ye(a,"vip","VIP",jsx("ul", {
                                        class: "text-sm text-muted"
                                    }, jsx("li", null, "Early access to beta versions"), jsx("li", null, "Exclusive Discord channel"), jsx("li", null, jsx("b", null, "VIP"), " community badge")),100)];
                                    for (let s of r)
                                        s.cardEl.addEventListener("click", ()=>u(this, null, function*() {
                                            this.setCard(s)
                                        }))
                                }
                            ),
                                this.upgradeEl = this.contentEl.appendChild(jsx("div", {
                                    class: "text-muted"
                                }, jsx("p", null, "Please select a tier to upgrade. When upgrading you only need to pay the difference."))),
                                this.upgradeEl.hide()
                        }
                        setCard(t) {
                            this.paymentContainerEl.show(),
                            this.currentCard && this.currentCard.cardEl.removeClass("is-selected"),
                                this.currentCard = t,
                            t && (t.cardEl.addClass("is-selected"),
                                this.updatePrice()),
                                this.upgradeEl.hide()
                        }
                        setTier(t) {
                            t === "supporter" ? (this.insiderCard.cardEl.hide(),
                                this.supporterCard.cardEl.hide()) : t === "insider" && this.insiderCard.cardEl.hide(),
                            t && this.upgradeEl.show()
                        }
                        getPriceData() {
                            let {currentCard: t} = this;
                            return t ? {
                                type: "catalyst",
                                variation: t.value,
                                renew: ""
                            } : null
                        }
                        afterPay() {
                            this.close(),
                                new Et().open()
                        }
                    }
                    ,
                    Et = class extends I {
                        constructor() {
                            super(),
                                this.setTitle("Successfully bought Catalyst"),
                                this.contentEl.append(jsx("p", null, "Thanks so much for supporting us by upgrading to Catalyst!"), jsx("p", null, "See our guide on how to get ", jsx("a", {
                                    href: "https://help.obsidian.md/Obsidian/Early+access+versions",
                                    target: "_blank"
                                }, "early access versions"), " of Obsidian."), jsx("p", null, "To claim your community badges:")),
                                this.buttonContainerEl.createEl("button", {
                                        cls: "button button-primary",
                                        text: "Get Discord badge"
                                    }, e=>{
                                        e.addEventListener("click", ()=>Za(e))
                                    }
                                ),
                                this.buttonContainerEl.createEl("button", {
                                        cls: "button button-primary",
                                        text: "Get forum badge"
                                    }, e=>{
                                        e.addEventListener("click", ()=>er(e))
                                    }
                                )
                        }
                        onClose() {
                            super.onClose(),
                                window.location.reload()
                        }
                    }
                    ,
                    Pe = class extends I {
                        constructor() {
                            super(),
                                this.contentEl.createDiv("message-container").createDiv({
                                    cls: "message mod-success",
                                    text: "Successfully added badge for you!"
                                }),
                                this.setTitle("Added Discord badge"),
                                this.contentEl.append(jsx("p", null, "Thanks for supporting Obsidian! Your support helps us stay independent so we can pursue our vision."))
                        }
                    }
                    ,
                    Te = class extends h {
                        constructor(e) {
                            super(),
                                this.setTitle("Couldn't add Discord badge"),
                                this.contentEl.append(jsx("p", null, "Please contact us for support or try again later. We're really sorry for the inconvenience!")),
                                this.showError(e)
                        }
                    }
                    ,
                    wt = class extends I {
                        constructor() {
                            super(),
                                this.contentEl.createDiv("message-container").createDiv({
                                    cls: "message mod-success",
                                    text: "Successfully added badge for you!"
                                }),
                                this.setTitle("Added forum badge"),
                                this.contentEl.append(jsx("p", null, "Thanks for supporting Obsidian! Your support helps us stay independent so we can pursue our vision."), jsx("p", null, 'P.S. Your forum badge is not a "badge" in the forum system, but a shiny gold tag right next to your name in all of your posts. Hope that helps!'))
                        }
                    }
                    ,
                    vt = class extends h {
                        constructor(e) {
                            super(),
                                this.setTitle("Couldn't add forum badge"),
                                this.contentEl.append(jsx("p", null, "Please contact us for support or try again later. We're really sorry for the inconvenience!")),
                                this.showError(e)
                        }
                    }
                    ,
                    Le = class extends A {
                        constructor(e) {
                            super("catalyst", "Catalyst", "Catalyst license", T(ut)),
                                this.page = e
                        }
                        update() {
                            let {data: e} = this.page
                                , t = e.license
                                , {headerEl: a, titleEl: r, contentEl: s} = this;
                            if (s.empty(),
                                t) {
                                let i = {
                                    insider: "Insider",
                                    supporter: "Supporter",
                                    vip: "VIP"
                                };
                                a.setChildrenInPlace([r, jsx("span", {
                                    class: "flair"
                                }, i[t] || t)]),
                                    s.append(jsx("div", {
                                        class: "flex gap-6 flex-col sm:flex-row sm:items-center"
                                    }, jsx("div", null, jsx("p", {
                                        class: "md:text-lg mt-2 max-w-lg leading-tight"
                                    }, "Thank you for purchasing a Catalyst personal license. Your support helps us remain 100% independent and build Obsidian without compromising ", jsx("a", {
                                        href: "/about",
                                        target: "_blank",
                                        class: "text-accent"
                                    }, "our\xA0values"), "."), jsx("p", {
                                        class: "md:text-lg mt-2 max-w-lg leading-tight"
                                    }, "To get early access to new versions of Obsidian, ", jsx("a", {
                                        href: "https://help.obsidian.md/Obsidian/Early+access+versions",
                                        target: "_blank",
                                        class: "text-accent"
                                    }, "see\xA0this\xA0guide"), ".")), jsx("div", {
                                        class: "setting-item-control sm:ml-auto flex flex-col gap-2"
                                    }, t === "vip" ? jsx(jsxFragment, null) : jsx("div", {
                                        class: "w-full sm:ml-auto"
                                    }, jsx("button", {
                                        class: "button button-md button-primary w-full",
                                        onclick: this.buy.bind(this)
                                    }, "Upgrade to a higher tier")), jsx("button", {
                                        class: "button button-md claim-discord-badge-button",
                                        onclick: this.getDiscordBadge.bind(this)
                                    }, "Get Discord badge"), jsx("button", {
                                        class: "button button-md claim-forum-badge-button",
                                        onclick: this.getForumBadge.bind(this)
                                    }, "Get forum badge"))))
                            } else
                                a.setChildrenInPlace([r]),
                                    s.append(jsx("div", {
                                        class: "flex gap-6 flex-col md:flex-row"
                                    }, jsx("div", null, jsx("div", {
                                        class: "md:text-lg mb-6 max-w-lg leading-tight"
                                    }, "Support development with a one-time donation that gives you early access to beta versions of Obsidian and special badges in the\xA0community."), jsx("div", null, jsx("span", {
                                        class: "text-3xl font-semibold"
                                    }, "$25+"), " ", jsx("span", {
                                        class: "text-sm text-muted"
                                    }, "USD"), jsx("div", {
                                        class: "text-muted text-xs sm:text-sm"
                                    }, "one-time donation"))), jsx("div", {
                                        class: "md:ml-auto"
                                    }, jsx("button", {
                                        class: "button button-md button-primary  w-full",
                                        onclick: this.buy.bind(this)
                                    }, "Buy license"))))
                        }
                        buy() {
                            let e = new gt;
                            e.setTier(this.page.data.license),
                                e.open()
                        }
                        getDiscordBadge(e) {
                            Za(e.targetNode)
                        }
                        getForumBadge(e) {
                            er(e.targetNode)
                        }
                    }
            }
        );
        var ke, St, De, Me, Pt = x(()=>{
                D();
                O();
                ke = class extends h {
                    constructor() {
                        super(),
                            this.setTitle("Apply for a discount"),
                            this.contentEl.append(jsx("p", {
                                class: "max-w-lg my-2 leading-tight"
                            }, "Choose the discount type you're applying for and enter your school or organization email. We will send an email to this email address to verify\xA0it."), jsx("p", {
                                class: "max-w-lg text-muted my-2 leading-tight"
                            }, "Note that if you have an early bird discount, discounts will not\xA0stack."), jsx("p", {
                                class: "max-w-lg text-muted my-2 leading-tight"
                            }, "If you do not have an organization email, please contact us at ", jsx("a", {
                                href: "mailto:support@obsidian.md",
                                class: "underline"
                            }, "support@obsidian.md"), " to provide other forms of verification, such as a student ID card, transcript, or employee ID\xA0card."), jsx("p", {
                                class: "my-2"
                            }, jsx("label", null, jsx("span", {
                                class: "input-label"
                            }, "Discount type"), jsx("label", {
                                class: "flex items-center gap-1 cursor-pointer"
                            }, jsx("input", {
                                type: "radio",
                                name: "apply-discount-type",
                                value: "1",
                                checked: !0
                            }), " Education (student or faculty)"), jsx("label", {
                                class: "flex items-center gap-1 cursor-pointer"
                            }, jsx("input", {
                                type: "radio",
                                name: "apply-discount-type",
                                value: "2"
                            }), " Non-profit organization"))), jsx("p", {
                                class: "my-2"
                            }, jsx("label", null, jsx("span", {
                                class: "input-label"
                            }, "School or organization email"), this.emailEl = jsx("input", {
                                type: "email",
                                class: "input w-full max-w-sm",
                                placeholder: "Enter your email..."
                            })))),
                            this.buttonContainerEl.createEl("button", {
                                cls: "button button-primary",
                                text: "Send application"
                            }).addEventListener("click", ()=>u(this, null, function*() {
                                this.hideError();
                                let e = this.contentEl.find('input[name="apply-discount-type"]:checked').value
                                    , t = this.emailEl.value;
                                if (!e) {
                                    this.showError("Please select a discount type.");
                                    return
                                }
                                if (t === "" || !t.contains("@")) {
                                    this.showError("Please enter a valid organization email address.");
                                    return
                                }
                                try {
                                    yield Ia({
                                        type: e,
                                        email: t
                                    }),
                                        this.close(),
                                        new St().open()
                                } catch (a) {
                                    this.showError(a)
                                }
                            })),
                            this.buttonContainerEl.createEl("button", {
                                cls: "button ml-2",
                                text: "Cancel"
                            }).addEventListener("click", this.close.bind(this))
                    }
                }
                    ,
                    St = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Verify your email"),
                                this.contentEl.append(jsx("p", null, "Thanks for applying for Obsidian discount!"), jsx("p", null, "We've sent an email to your organization email address to verify your email. Once you click on the link, the application will be submitted for review."), jsx("p", null, "If you don't see the email in a few minutes, please try checking your spam folder. You can try applying for a discount again."))
                        }
                    }
                    ,
                    De = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Organization email verified"),
                                this.contentEl.append(jsx("p", null, "Thanks for verifying your organization email! We'll take a look at your application as soon as we can."), jsx("p", null, "You'll get an email update when your discount application is approved. Have a nice day!"))
                        }
                    }
                    ,
                    Me = class extends w {
                        constructor(e) {
                            super(),
                                this.setTitle("Your discount is active"),
                                this.contentEl.append(jsx("p", null, "Your ", jsx("span", {
                                    class: "approved-discount-type"
                                }, e), " discount is approved!"), jsx("p", null, "You'll see the discount applied when you try to buy Obsidian Sync or Obsidian Publish. It's not applicable to Catalyst or commercial licenses."))
                        }
                    }
            }
        );
        function J() {
            location.search && history.replaceState(null, null, location.pathname)
        }
        function de() {
            history.pushState ? history.pushState("", document.title, location.pathname + location.search) : location.hash = ""
        }
        function Q(o, e) {
            o.addEventListener("keydown", t=>{
                    t.isComposing || t.key === "Enter" && e()
                }
            )
        }
        function Tt(o) {
            return jsx("div", {
                className: "toggler w-48 mt-4 rounded-lg border border-gray-700 p-0.5",
                onclick: o
            }, jsx("div", {
                className: "flex flex-col h-7 yearly-toggle-on relative"
            }, jsx("button", {
                className: "h-7 flex items-center justify-center absolute left-0 z-10 w-1/2 rounded-md py-1 px-2 text-sm font-semibold text-muted"
            }, "Yearly"), jsx("button", {
                className: "h-7 flex items-center justify-center absolute right-0 z-10 w-1/2 rounded-md py-1 px-2 text-sm font-semibold text-muted"
            }, "Monthly"), jsx("div", {
                className: "absolute glider rounded-md w-1/2 h-7 bg-gray-700 transition-all"
            })))
        }
        function tr(o) {
            let e = jsx("div", null, jsx("p", {
                className: "flex items-baseline gap-x-1"
            }, jsx("span", {
                className: "text-3xl font-semibold"
            }, "$", C(o.yearly, !0)), jsx("span", {
                className: "text-sm text-muted"
            }, "USD")), jsx("div", {
                className: "text-muted text-xs sm:text-sm"
            }, o.yearlyDesc))
                , t = jsx("div", {
                style: "display:none;"
            }, jsx("p", {
                className: "flex items-baseline gap-x-1"
            }, jsx("span", {
                className: "text-3xl font-semibold"
            }, "$", C(o.monthly, !0)), jsx("span", {
                className: "text-sm text-muted"
            }, "USD")), jsx("div", {
                className: "text-muted text-xs sm:text-sm"
            }, o.monthlyDesc))
                , a = Tt(r);
            function r() {
                let i = !s();
                a.toggleClass("toggler-on", i),
                    e.toggle(!i),
                    t.toggle(i)
            }
            function s() {
                return a.hasClass("toggler-on")
            }
            return {
                el: jsx(jsxFragment, null, e, t, a),
                toggle: r,
                getStatus: s
            }
        }
        var te = x(()=>{
                q()
            }
        );
        var Cr, ue, Ae, Be, Re, Ie, ar = x(()=>{
                D();
                te();
                Cr = fish("#main"),
                    ue = class {
                        constructor(e) {
                            this.working = !1;
                            this.containerEl = jsx("div", {
                                class: "flex min-h-full flex-col justify-center px-6 lg:px-8"
                            }, jsx("div", {
                                class: "py-6 sm:mx-auto sm:w-full sm:max-w-sm"
                            }, jsx("div", {
                                class: "flex justify-center pb-8"
                            }, jsx("a", {
                                href: "/"
                            }, jsx("img", {
                                src: "/images/obsidian-logo-gradient.svg",
                                height: 90,
                                width: 90,
                                alt: "Obsidian"
                            }))), jsx("h1", {
                                class: "mb-6 text-center text-3xl font-medium"
                            }, e), jsx("div", {
                                class: "message-container mb-2"
                            }, this.successEl = jsx("div", {
                                class: "text-green-400 text-sm text-center p-2 rounded border border-green-900 bg-green-950"
                            }), this.errorEl = jsx("div", {
                                class: "text-red-400 text-sm text-center p-2 rounded border border-red-900 bg-red-950"
                            })), this.formEl = jsx("form", {
                                class: "space-y-3",
                                onsubmit: this.submit.bind(this)
                            }), this.moreEl = jsx("div", {
                                class: "my-8 leading-6 font-medium text-sm"
                            }))),
                                this.reset()
                        }
                        show() {
                            Cr.appendChild(this.containerEl)
                        }
                        hide() {
                            this.containerEl.detach()
                        }
                        submit(e) {
                            e.preventDefault(),
                                u(this, null, function*() {
                                    if (!this.working)
                                        try {
                                            this.working = !0,
                                                this.formEl.ariaDisabled = "true",
                                                yield this.onSubmit()
                                        } finally {
                                            this.working = !1,
                                                this.formEl.ariaDisabled = ""
                                        }
                                })
                        }
                        reset() {
                            this.successEl.hide(),
                                this.errorEl.hide()
                        }
                        showSuccess(e) {
                            this.successEl.setText(e),
                                this.successEl.show()
                        }
                        showError(e) {
                            this.errorEl.setText(e),
                                this.errorEl.show()
                        }
                    }
                    ,
                    Ae = class extends ue {
                        constructor() {
                            super("Sign in to your account"),
                                this.formEl.append(jsx(jsxFragment, null, this.emailSectionEl = jsx("div", null, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-email"
                                }, "Email"), this.emailEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "email",
                                    id: "labeled-input-email",
                                    autofocus: !0
                                })), this.passwordSectionEl = jsx("div", null, jsx("div", {
                                    class: "flex items-center justify-between"
                                }, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-password"
                                }, "Password"), jsx("span", {
                                    class: "font-medium text-sm"
                                }, jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: this.forgetpass.bind(this),
                                    tabIndex: -1
                                }, "Forgot password?"))), this.passwordEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "password",
                                    id: "labeled-input-password"
                                })), this.mfaSectionEl = jsx("div", null, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-mfa"
                                }, "2-factor authentication code"), this.mfaEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "text",
                                    inputMode: "numeric",
                                    placeholder: "000000",
                                    autocomplete: "one-time-code",
                                    id: "labeled-input-mfa"
                                })), this.recoveryCodeSectionEl = jsx("div", null), jsx("p", null, this.useRecoveryCodeBtn = jsx("button", {
                                    type: "button",
                                    class: "font-medium text-sm text-accent"
                                }, "Use recovery code")), jsx("div", {
                                    class: "pt-2"
                                }, jsx("button", {
                                    class: "button button-primary w-full",
                                    onclick: this.submit.bind(this)
                                }, "Sign in")))),
                                this.moreEl.append(jsx("p", {
                                    class: "text-center text-muted"
                                }, "Don't have an account? ", jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: this.signup.bind(this)
                                }, "Create an account"))),
                                this.useRecoveryCodeBtn.addEventListener("click", e=>{
                                        e.stopPropagation(),
                                            this.useRecoveryCodeBtn.parentElement.hide(),
                                            this.mfaSectionEl.hide(),
                                            this.mfaEl.value = "",
                                            this.recoveryCodeSectionEl.append(jsx(jsxFragment, null, jsx("label", {
                                                class: "input-label",
                                                htmlFor: "labeled-input-recovery-code"
                                            }, "Recovery code"), this.recoveryCodeEl = jsx("input", {
                                                class: "block input w-full",
                                                type: "text",
                                                autocomplete: "off",
                                                id: "labeled-input-recovery-code"
                                            })))
                                    }
                                ),
                                this.mfaSectionEl.hide(),
                                this.useRecoveryCodeBtn.hide()
                        }
                        onSubmit() {
                            return u(this, null, function*() {
                                this.reset();
                                let e = this.emailEl.value
                                    , t = this.passwordEl.value
                                    , a = this.mfaEl.value
                                    , r = this.recoveryCodeEl ? this.recoveryCodeEl.value : "";
                                if (e === "") {
                                    this.showError("Email cannot be empty.");
                                    return
                                } else if (e.indexOf("@") === -1) {
                                    this.showError("Email is not valid.");
                                    return
                                } else if (t === "") {
                                    this.showError("Password cannot be empty.");
                                    return
                                }
                                try {
                                    yield na({
                                        email: e,
                                        password: t,
                                        mfa: a,
                                        recovery_code: r
                                    }),
                                        window.location.reload()
                                } catch (s) {
                                    s.toString().contains("2FA code") && !this.mfaSectionEl.isShown() ? (this.emailSectionEl.hide(),
                                        this.passwordSectionEl.hide(),
                                        this.mfaSectionEl.show(),
                                        this.useRecoveryCodeBtn.show()) : typeof s == "string" ? this.showError(s) : (this.showError("Something went wrong, please try again later."),
                                        console.error(s))
                                }
                            })
                        }
                        signup() {
                            location.hash = "#signup",
                                location.reload()
                        }
                        forgetpass() {
                            location.hash = "#forgotpass",
                                location.reload()
                        }
                    }
                    ,
                    Be = class extends ue {
                        constructor() {
                            super("Create an\xA0account"),
                                this.formEl.append(jsx(jsxFragment, null, jsx("div", {
                                    class: "text-muted leading-tight mb-4"
                                }, jsx("p", {
                                    class: "my-2"
                                }, "An Obsidian account allows you to purchase licenses and add-on services. Creating an account is not required to download or use the\xA0app.")), jsx("div", null, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-name"
                                }, "Full name"), this.nameEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "text",
                                    id: "labeled-input-name"
                                })), jsx("div", null, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-email"
                                }, "Email"), this.emailEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "email",
                                    id: "labeled-input-email"
                                })), jsx("div", null, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-password"
                                }, "Password"), this.passwordEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "password",
                                    id: "labeled-input-password"
                                })), jsx("div", {
                                    class: "pt-2"
                                }, jsx("button", {
                                    class: "button button-primary w-full",
                                    onclick: this.submit.bind(this)
                                }, "Sign up")))),
                                this.moreEl.append(jsx("p", {
                                    class: "text-center text-muted"
                                }, "Already have an account? ", jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: this.signin.bind(this)
                                }, "Sign in")))
                        }
                        onSubmit() {
                            return u(this, null, function*() {
                                this.reset();
                                let e = this.nameEl.value
                                    , t = this.emailEl.value
                                    , a = this.passwordEl.value;
                                if (e === "") {
                                    this.showError("Name cannot be empty.");
                                    return
                                } else if (t === "") {
                                    this.showError("Email cannot be empty.");
                                    return
                                } else if (t.indexOf("@") === -1) {
                                    this.showError("Email is not valid.");
                                    return
                                } else if (a === "") {
                                    this.showError("Password cannot be empty.");
                                    return
                                }
                                try {
                                    yield da({
                                        name: e,
                                        email: t,
                                        password: a
                                    }),
                                        this.formEl.hide(),
                                        this.showSuccess("Success! You will receive an email soon to confirm your email address.")
                                } catch (r) {
                                    typeof r == "string" ? this.showError(r) : (this.showError("Something went wrong, please try again later."),
                                        console.error(r))
                                }
                            })
                        }
                        signin() {
                            de(),
                                location.reload()
                        }
                    }
                    ,
                    Re = class extends ue {
                        constructor() {
                            super("Reset your password"),
                                this.formEl.append(jsx(jsxFragment, null, jsx("div", null, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-email"
                                }, "Email"), this.emailEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "email",
                                    id: "labeled-input-email"
                                })), jsx("div", {
                                    class: "pt-2"
                                }, jsx("button", {
                                    class: "button button-primary w-full",
                                    onclick: this.submit.bind(this)
                                }, "Reset password")))),
                                this.moreEl.append(jsx("p", {
                                    class: "text-center text-muted"
                                }, jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: this.signin.bind(this)
                                }, "Back to Sign in")))
                        }
                        onSubmit() {
                            return u(this, null, function*() {
                                this.reset();
                                let e = this.emailEl.value;
                                if (e === "") {
                                    this.showError("Please fill out your email.");
                                    return
                                }
                                if (e.indexOf("@") === -1) {
                                    this.showError('Email address is not valid and must contain "@".');
                                    return
                                }
                                try {
                                    yield pa({
                                        email: e,
                                        captcha: "captcha"
                                    }),
                                        this.formEl.hide(),
                                        this.showSuccess(`We have sent an email to ${e} to reset your password.`)
                                } catch (t) {
                                    this.showError("Something went wrong, please try again later.")
                                }
                            })
                        }
                        signin() {
                            de(),
                                location.reload()
                        }
                    }
                    ,
                    Ie = class extends ue {
                        constructor(e, t) {
                            super("Set a new password"),
                                this.id = e,
                                this.key = t,
                                this.formEl.append(jsx(jsxFragment, null, jsx("div", null, jsx("label", {
                                    class: "input-label",
                                    htmlFor: "labeled-input-password"
                                }, "New password"), this.passwordEl = jsx("input", {
                                    class: "block input w-full",
                                    type: "password",
                                    id: "labeled-input-password"
                                })), jsx("div", {
                                    class: "pt-2"
                                }, jsx("button", {
                                    class: "button button-primary w-full",
                                    onclick: this.submit.bind(this)
                                }, "Reset")))),
                                this.moreEl.append(jsx("p", {
                                    class: "text-center text-muted"
                                }, jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: this.signin.bind(this)
                                }, "Back to Sign in")))
                        }
                        onSubmit() {
                            return u(this, null, function*() {
                                this.reset();
                                let e = this.passwordEl.value;
                                if (!e) {
                                    this.showError("Please set a new password.");
                                    return
                                }
                                try {
                                    yield fa({
                                        id: this.id,
                                        key: this.key,
                                        password: e
                                    }),
                                        this.formEl.hide(),
                                        this.showSuccess("Your password has been successfully set.")
                                } catch (t) {
                                    this.showError("Something went wrong, please try again later.")
                                }
                            })
                        }
                        signin() {
                            de(),
                                location.reload()
                        }
                    }
            }
        );
        var Lt, He, be, Fe, ge, Oe, Ne, pe, kt = x(()=>{
                D();
                O();
                ee();
                te();
                q();
                Lt = class {
                    constructor(e) {
                        this.total = new H(e,"Current balance"),
                            this.gift = new H(e,"Credit to send"),
                            this.remaining = new H(e,"Remaining balance")
                    }
                    setValues(e) {
                        let {total: t, gift: a, remaining: r} = e;
                        this.total.setValues(!0, t, "Current balance"),
                            this.gift.setValues(!0, a, "Credit to send"),
                            this.remaining.setValues(!0, r, "Remaining balance")
                    }
                }
                    ,
                    He = class extends h {
                        constructor(e) {
                            super(),
                                this.userCredit = e,
                                this.setTitle("Send credit"),
                                this.contentEl.appendChild(jsx("p", {
                                    class: "mb-4"
                                }, "You can send Obsidian Credit to anyone, such as friends, family, and coworkers. Credit can be used to pay for any Obsidian license or service. The minimum you can send is $5\xA0USD.")),
                                this.contentEl.createEl("p", {}, a=>{
                                        a.createEl("label", {
                                            cls: "input-label",
                                            text: "Amount to send (USD)"
                                        }),
                                            this.giftAmountEl = a.createEl("input", {
                                                type: "number",
                                                cls: "min-w-[100px]",
                                                attr: {
                                                    min: 1,
                                                    max: Math.floor(e / 100),
                                                    value: 5,
                                                    step: 1
                                                }
                                            })
                                    }
                                ),
                                this.giftOptionsEl = this.contentEl.createDiv(),
                                this.updateGiftOptions(!0),
                                this.giftAmountEl.addEventListener("change", this.updateSummary.bind(this));
                            let t = this.summaryEl = this.contentEl.createDiv("payment-summary");
                            this.contentEl.createDiv("flex pt-6 gap-2 justify-end", a=>{
                                    a.createEl("button", {
                                            cls: "button button-primary",
                                            text: "Send credit"
                                        }, r=>{
                                            r.onClickEvent(()=>u(this, null, function*() {
                                                this.hideError();
                                                let s = this.recipientEl.value
                                                    , i = this.getGiftAmount()
                                                    , l = this.emailOptionEl.checked;
                                                if (l) {
                                                    if (!s) {
                                                        this.showError("Please enter email of the recipient so we can send the gift for you!");
                                                        return
                                                    }
                                                    if (!s.contains("@")) {
                                                        this.showError("Please enter valid recipient email.");
                                                        return
                                                    }
                                                }
                                                if (isNaN(i)) {
                                                    this.showError("Please enter a valid gift amount.");
                                                    return
                                                }
                                                if (i < 500) {
                                                    this.showError("You need to gift at least $5.");
                                                    return
                                                }
                                                if (i > e) {
                                                    this.showError("You cannot gift more credit than you currently have.");
                                                    return
                                                }
                                                try {
                                                    let n = yield Ha({
                                                        recipient: s,
                                                        amount: i,
                                                        should_email: this.emailOptionEl.checked
                                                    });
                                                    l ? window.location.reload() : (this.close(),
                                                        new ge(n.redeem_code,i,s).open())
                                                } catch (n) {
                                                    this.showError(n)
                                                }
                                            }))
                                        }
                                    ),
                                        a.createEl("button", {
                                            cls: "button",
                                            text: "Cancel"
                                        }).addEventListener("click", this.close.bind(this))
                                }
                            ),
                                this.summary = new Lt(t)
                        }
                        getGiftAmount() {
                            return parseInt(this.giftAmountEl.value) * 100
                        }
                        updateGiftOptions(e) {
                            this.giftOptionsEl.empty(),
                                this.giftOptionsEl.append(jsx(jsxFragment, null, jsx("p", {
                                    class: "my-2"
                                }, jsx("span", {
                                    class: "input-label"
                                }, "Method"), jsx("label", {
                                    class: "flex items-center gap-1 cursor-pointer"
                                }, this.codeOptionEl = jsx("input", {
                                    type: "radio",
                                    name: "gift-method",
                                    value: "code",
                                    checked: e
                                }), " Get redeem link"), jsx("label", {
                                    class: "flex items-center gap-1 cursor-pointer"
                                }, this.emailOptionEl = jsx("input", {
                                    type: "radio",
                                    name: "gift-method",
                                    value: "email",
                                    checked: !e
                                }), " Send anonymously via email")), jsx("p", {
                                    class: "text-muted text-sm mb-4 mt-2"
                                }, e ? "You'll get a link to redeem the credit. Choose this if you want to send the link to the recipient yourself." : "We'll send an email on your behalf. Choose this if you want to stay anonymous or want it to be a surprise."), e ? jsx(jsxFragment, null, jsx("p", null, jsx("label", {
                                    class: "input-label"
                                }, "Recipient name"), this.recipientEl = jsx("input", {
                                    type: "email",
                                    class: "w-full max-w-sm",
                                    placeholder: "Enter recipient name..."
                                })), jsx("p", {
                                    class: "font-medium mb-2 mt-6"
                                }, "Summary")) : jsx(jsxFragment, null, jsx("p", null, jsx("label", {
                                    class: "input-label"
                                }, "Recipient email"), this.recipientEl = jsx("input", {
                                    type: "email",
                                    class: "w-full max-w-sm",
                                    placeholder: "Enter recipient email..."
                                })), jsx("p", {
                                    class: "font-medium mb-2 mt-6"
                                }, "Summary")))),
                                this.codeOptionEl.addEventListener("change", ()=>{
                                        let t = this.codeOptionEl.checked;
                                        this.updateGiftOptions(t)
                                    }
                                ),
                                this.emailOptionEl.addEventListener("change", ()=>{
                                        let t = this.codeOptionEl.checked;
                                        this.updateGiftOptions(t)
                                    }
                                )
                        }
                        updateSummary() {
                            let e = this.getGiftAmount()
                                , t = this.userCredit - e;
                            if (this.hideError(),
                                isNaN(e)) {
                                this.showError("Please enter a valid gift amount.");
                                return
                            }
                            if (e < 500) {
                                this.showError("You need to gift at least $5 worth of Obsidian Credit.");
                                return
                            }
                            if (t < 0) {
                                this.showError("You cannot gift more credit than you currently have.");
                                return
                            }
                            this.summary.setValues({
                                total: this.userCredit,
                                gift: e,
                                remaining: t
                            })
                        }
                        onOpen() {
                            super.onOpen(),
                                this.updateSummary()
                        }
                    }
                    ,
                    be = class extends h {
                        constructor(e, t, a) {
                            super(),
                                this.code = e,
                                this.setTitle("Redeem your credit"),
                                a ? (this.contentEl.append(jsx("p", null, "Unfortunately, we were unable to fetch your gift.")),
                                    this.showError(a)) : (this.contentEl.append(jsx("p", null, "Someone has sent you a gift worth of $", C(t), " Obsidian Credit. How exciting!")),
                                    this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                        class: "button button-primary",
                                        onclick: this.redeemGift.bind(this)
                                    }, "Redeem"), jsx("button", {
                                        class: "button",
                                        onclick: this.close.bind(this)
                                    }, "Cancel"))))
                        }
                        redeemGift() {
                            return u(this, null, function*() {
                                try {
                                    yield he({
                                        code: this.code
                                    }),
                                        new Ne().open()
                                } catch (e) {
                                    new pe(e).open()
                                }
                            })
                        }
                    }
                    ,
                    Fe = class extends h {
                        constructor() {
                            super(),
                                this.setTitle("Redeem your credit"),
                                this.contentEl.append(jsx("p", null, jsx("label", {
                                    class: "input-label"
                                }, "Your gift code"), this.codeField = jsx("input", {
                                    type: "text",
                                    placeholder: "Enter your gift code...",
                                    style: "width: 100%;"
                                }))),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-primary",
                                    onclick: this.redeemGift.bind(this)
                                }, "Redeem"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel")))
                        }
                        redeemGift() {
                            return u(this, null, function*() {
                                try {
                                    let e = this.codeField.value;
                                    if (e === "") {
                                        this.showError("Please enter a redeem code.");
                                        return
                                    }
                                    yield he({
                                        code: e
                                    }),
                                        new Ne().open()
                                } catch (e) {
                                    new pe(e).open()
                                }
                            })
                        }
                    }
                    ,
                    ge = class extends w {
                        constructor(e, t, a) {
                            super(),
                                this.link = `${location.origin}/account?giftcode=${e}`,
                                a ? this.setTitle("Successfully sent gift") : this.setTitle("Copied redeem link"),
                                this.contentEl.append(jsx(jsxFragment, null, a ? jsx("p", null, "You just sent a gift of ", C(t), ' to "', a, '"!') : "", jsx("p", null, "The link to redeem the gift has been copied to your clipboard."), jsx("p", null, this.linkField = jsx("input", {
                                    type: "text",
                                    class: "mt-2 w-full",
                                    value: this.link
                                }))))
                        }
                        onOpen() {
                            super.onOpen(),
                                navigator.clipboard.writeText(this.link),
                                this.linkField.select()
                        }
                    }
                    ,
                    Oe = class extends w {
                        constructor(e, t, a) {
                            super(),
                                this.code = e,
                                a ? this.setTitle("Successfully sent gift") : this.setTitle("Copied redeem code"),
                                this.contentEl.append(jsx(jsxFragment, null, a ? jsx("p", null, "You just sent a gift of ", C(t), ' to "', a, '"!') : "", jsx("p", null, "The gift redeem code has been copied to your clipboard."), jsx("p", null, this.codeField = jsx("input", {
                                    type: "text",
                                    class: "mt-2 w-full",
                                    value: e
                                }))))
                        }
                        onOpen() {
                            super.onOpen(),
                                navigator.clipboard.writeText(this.code),
                                this.codeField.select()
                        }
                    }
                    ,
                    Ne = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Gift redeemed"),
                                this.contentEl.append(jsx("p", null, "Your gift was successfully redeemed!"), jsx("p", null, 'You should be able to see the credit in the "Obsidian Credit" section. You can use it to buy whatever you want, or even gift to others.'))
                        }
                        onClose() {
                            super.onClose(),
                                J(),
                                location.reload()
                        }
                    }
                    ,
                    pe = class extends h {
                        constructor(e) {
                            super(),
                                this.setTitle("Gift not redeemed"),
                                this.contentEl.append(jsx("p", null, "Unfortunately, we were unable to redeem your gift for you.")),
                                this.showError(e)
                        }
                    }
            }
        );
        function B(o, e, t) {
            if (e < 0 || e > 31 || o >>> e)
                throw new RangeError("Value out of range");
            for (let a = e - 1; a >= 0; a--)
                t.push(o >>> a & 1)
        }
        function j(o, e) {
            return (o >>> e & 1) != 0
        }
        function F(o) {
            if (!o)
                throw new Error("Assertion error")
        }
        function rr(o, e=10, t=Z.HIGH, a=2) {
            let r = Dt.encodeText(o, t)
                , s = r.size + a
                , i = createDiv();
            i.setCssStyles({
                display: "flex",
                flexDirection: "column"
            });
            for (let l = -a; l < s; l++) {
                let n = i.createDiv();
                n.setCssStyles({
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                });
                for (let d = -a; d < s; d++) {
                    let g = r.getModule(l, d);
                    n.createDiv().setCssStyles({
                        width: `${e}px`,
                        height: `${e}px`,
                        backgroundColor: g ? "black" : "white"
                    })
                }
            }
            return i
        }
        var p, Dt, v, Ee, V, Z, U, fe, or = x(()=>{
                p = class p {
                    constructor(e, t, a, r) {
                        this.version = e;
                        this.errorCorrectionLevel = t;
                        this.modules = [];
                        this.isFunction = [];
                        if (e < p.MIN_VERSION || e > p.MAX_VERSION)
                            throw new RangeError("Version value out of range");
                        if (r < -1 || r > 7)
                            throw new RangeError("Mask value out of range");
                        this.size = e * 4 + 17;
                        let s = [];
                        for (let l = 0; l < this.size; l++)
                            s.push(!1);
                        for (let l = 0; l < this.size; l++)
                            this.modules.push(s.slice()),
                                this.isFunction.push(s.slice());
                        this.drawFunctionPatterns();
                        let i = this.addEccAndInterleave(a);
                        if (this.drawCodewords(i),
                        r == -1) {
                            let l = 1e9;
                            for (let n = 0; n < 8; n++) {
                                this.applyMask(n),
                                    this.drawFormatBits(n);
                                let d = this.getPenaltyScore();
                                d < l && (r = n,
                                    l = d),
                                    this.applyMask(n)
                            }
                        }
                        F(0 <= r && r <= 7),
                            this.mask = r,
                            this.applyMask(r),
                            this.drawFormatBits(r),
                            this.isFunction = []
                    }
                    static encodeText(e, t) {
                        let a = Ee.makeSegments(e);
                        return p.encodeSegments(a, t)
                    }
                    static encodeBinary(e, t) {
                        let a = Ee.makeBytes(e);
                        return p.encodeSegments([a], t)
                    }
                    static encodeSegments(e, t, a=1, r=40, s=-1, i=!0) {
                        if (!(p.MIN_VERSION <= a && a <= r && r <= p.MAX_VERSION) || s < -1 || s > 7)
                            throw new RangeError("Invalid value");
                        let l, n;
                        for (l = a; ; l++) {
                            let c = p.getNumDataCodewords(l, t) * 8
                                , y = Ee.getTotalBits(e, l);
                            if (y <= c) {
                                n = y;
                                break
                            }
                            if (l >= r)
                                throw new RangeError("Data too long")
                        }
                        for (let c of [Z.MEDIUM, Z.QUARTILE, Z.HIGH])
                            i && n <= p.getNumDataCodewords(l, c) * 8 && (t = c);
                        let d = [];
                        for (let c of e) {
                            B(c.mode.modeBits, 4, d),
                                B(c.numChars, c.mode.numCharCountBits(l), d);
                            for (let y of c.getData())
                                d.push(y)
                        }
                        F(d.length == n);
                        let g = p.getNumDataCodewords(l, t) * 8;
                        F(d.length <= g),
                            B(0, Math.min(4, g - d.length), d),
                            B(0, (8 - d.length % 8) % 8, d),
                            F(d.length % 8 == 0);
                        for (let c = 236; d.length < g; c ^= 253)
                            B(c, 8, d);
                        let m = [];
                        for (; m.length * 8 < d.length; )
                            m.push(0);
                        return d.forEach((c,y)=>m[y >>> 3] |= c << 7 - (y & 7)),
                            new p(l,t,m,s)
                    }
                    getModule(e, t) {
                        return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
                    }
                    drawFunctionPatterns() {
                        for (let a = 0; a < this.size; a++)
                            this.setFunctionModule(6, a, a % 2 == 0),
                                this.setFunctionModule(a, 6, a % 2 == 0);
                        this.drawFinderPattern(3, 3),
                            this.drawFinderPattern(this.size - 4, 3),
                            this.drawFinderPattern(3, this.size - 4);
                        let e = this.getAlignmentPatternPositions()
                            , t = e.length;
                        for (let a = 0; a < t; a++)
                            for (let r = 0; r < t; r++)
                                a == 0 && r == 0 || a == 0 && r == t - 1 || a == t - 1 && r == 0 || this.drawAlignmentPattern(e[a], e[r]);
                        this.drawFormatBits(0),
                            this.drawVersion()
                    }
                    drawFormatBits(e) {
                        let t = this.errorCorrectionLevel.formatBits << 3 | e
                            , a = t;
                        for (let s = 0; s < 10; s++)
                            a = a << 1 ^ (a >>> 9) * 1335;
                        let r = (t << 10 | a) ^ 21522;
                        F(r >>> 15 == 0);
                        for (let s = 0; s <= 5; s++)
                            this.setFunctionModule(8, s, j(r, s));
                        this.setFunctionModule(8, 7, j(r, 6)),
                            this.setFunctionModule(8, 8, j(r, 7)),
                            this.setFunctionModule(7, 8, j(r, 8));
                        for (let s = 9; s < 15; s++)
                            this.setFunctionModule(14 - s, 8, j(r, s));
                        for (let s = 0; s < 8; s++)
                            this.setFunctionModule(this.size - 1 - s, 8, j(r, s));
                        for (let s = 8; s < 15; s++)
                            this.setFunctionModule(8, this.size - 15 + s, j(r, s));
                        this.setFunctionModule(8, this.size - 8, !0)
                    }
                    drawVersion() {
                        if (this.version < 7)
                            return;
                        let e = this.version;
                        for (let a = 0; a < 12; a++)
                            e = e << 1 ^ (e >>> 11) * 7973;
                        let t = this.version << 12 | e;
                        F(t >>> 18 == 0);
                        for (let a = 0; a < 18; a++) {
                            let r = j(t, a)
                                , s = this.size - 11 + a % 3
                                , i = Math.floor(a / 3);
                            this.setFunctionModule(s, i, r),
                                this.setFunctionModule(i, s, r)
                        }
                    }
                    drawFinderPattern(e, t) {
                        for (let a = -4; a <= 4; a++)
                            for (let r = -4; r <= 4; r++) {
                                let s = Math.max(Math.abs(r), Math.abs(a))
                                    , i = e + r
                                    , l = t + a;
                                0 <= i && i < this.size && 0 <= l && l < this.size && this.setFunctionModule(i, l, s != 2 && s != 4)
                            }
                    }
                    drawAlignmentPattern(e, t) {
                        for (let a = -2; a <= 2; a++)
                            for (let r = -2; r <= 2; r++)
                                this.setFunctionModule(e + r, t + a, Math.max(Math.abs(r), Math.abs(a)) != 1)
                    }
                    setFunctionModule(e, t, a) {
                        this.modules[t][e] = a,
                            this.isFunction[t][e] = !0
                    }
                    addEccAndInterleave(e) {
                        let t = this.version
                            , a = this.errorCorrectionLevel;
                        if (e.length != p.getNumDataCodewords(t, a))
                            throw new RangeError("Invalid argument");
                        let r = p.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][t]
                            , s = p.ECC_CODEWORDS_PER_BLOCK[a.ordinal][t]
                            , i = Math.floor(p.getNumRawDataModules(t) / 8)
                            , l = r - i % r
                            , n = Math.floor(i / r)
                            , d = []
                            , g = p.reedSolomonComputeDivisor(s);
                        for (let c = 0, y = 0; c < r; c++) {
                            let E = e.slice(y, y + n - s + (c < l ? 0 : 1));
                            y += E.length;
                            let R = p.reedSolomonComputeRemainder(E, g);
                            c < l && E.push(0),
                                d.push(E.concat(R))
                        }
                        let m = [];
                        for (let c = 0; c < d[0].length; c++)
                            d.forEach((y,E)=>{
                                    (c != n - s || E >= l) && m.push(y[c])
                                }
                            );
                        return F(m.length == i),
                            m
                    }
                    drawCodewords(e) {
                        if (e.length != Math.floor(p.getNumRawDataModules(this.version) / 8))
                            throw new RangeError("Invalid argument");
                        let t = 0;
                        for (let a = this.size - 1; a >= 1; a -= 2) {
                            a == 6 && (a = 5);
                            for (let r = 0; r < this.size; r++)
                                for (let s = 0; s < 2; s++) {
                                    let i = a - s
                                        , n = (a + 1 & 2) == 0 ? this.size - 1 - r : r;
                                    !this.isFunction[n][i] && t < e.length * 8 && (this.modules[n][i] = j(e[t >>> 3], 7 - (t & 7)),
                                        t++)
                                }
                        }
                        F(t == e.length * 8)
                    }
                    applyMask(e) {
                        if (e < 0 || e > 7)
                            throw new RangeError("Mask value out of range");
                        for (let t = 0; t < this.size; t++)
                            for (let a = 0; a < this.size; a++) {
                                let r;
                                switch (e) {
                                    case 0:
                                        r = (a + t) % 2 == 0;
                                        break;
                                    case 1:
                                        r = t % 2 == 0;
                                        break;
                                    case 2:
                                        r = a % 3 == 0;
                                        break;
                                    case 3:
                                        r = (a + t) % 3 == 0;
                                        break;
                                    case 4:
                                        r = (Math.floor(a / 3) + Math.floor(t / 2)) % 2 == 0;
                                        break;
                                    case 5:
                                        r = a * t % 2 + a * t % 3 == 0;
                                        break;
                                    case 6:
                                        r = (a * t % 2 + a * t % 3) % 2 == 0;
                                        break;
                                    case 7:
                                        r = ((a + t) % 2 + a * t % 3) % 2 == 0;
                                        break;
                                    default:
                                        throw new Error("Unreachable")
                                }
                                !this.isFunction[t][a] && r && (this.modules[t][a] = !this.modules[t][a])
                            }
                    }
                    getPenaltyScore() {
                        let e = 0;
                        for (let s = 0; s < this.size; s++) {
                            let i = !1
                                , l = 0
                                , n = [0, 0, 0, 0, 0, 0, 0];
                            for (let d = 0; d < this.size; d++)
                                this.modules[s][d] == i ? (l++,
                                    l == 5 ? e += p.PENALTY_N1 : l > 5 && e++) : (this.finderPenaltyAddHistory(l, n),
                                i || (e += this.finderPenaltyCountPatterns(n) * p.PENALTY_N3),
                                    i = this.modules[s][d],
                                    l = 1);
                            e += this.finderPenaltyTerminateAndCount(i, l, n) * p.PENALTY_N3
                        }
                        for (let s = 0; s < this.size; s++) {
                            let i = !1
                                , l = 0
                                , n = [0, 0, 0, 0, 0, 0, 0];
                            for (let d = 0; d < this.size; d++)
                                this.modules[d][s] == i ? (l++,
                                    l == 5 ? e += p.PENALTY_N1 : l > 5 && e++) : (this.finderPenaltyAddHistory(l, n),
                                i || (e += this.finderPenaltyCountPatterns(n) * p.PENALTY_N3),
                                    i = this.modules[d][s],
                                    l = 1);
                            e += this.finderPenaltyTerminateAndCount(i, l, n) * p.PENALTY_N3
                        }
                        for (let s = 0; s < this.size - 1; s++)
                            for (let i = 0; i < this.size - 1; i++) {
                                let l = this.modules[s][i];
                                l == this.modules[s][i + 1] && l == this.modules[s + 1][i] && l == this.modules[s + 1][i + 1] && (e += p.PENALTY_N2)
                            }
                        let t = 0;
                        for (let s of this.modules)
                            t = s.reduce((i,l)=>i + (l ? 1 : 0), t);
                        let a = this.size * this.size
                            , r = Math.ceil(Math.abs(t * 20 - a * 10) / a) - 1;
                        return F(0 <= r && r <= 9),
                            e += r * p.PENALTY_N4,
                            F(0 <= e && e <= 2568888),
                            e
                    }
                    getAlignmentPatternPositions() {
                        if (this.version == 1)
                            return [];
                        {
                            let e = Math.floor(this.version / 7) + 2
                                , t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2
                                , a = [6];
                            for (let r = this.size - 7; a.length < e; r -= t)
                                a.splice(1, 0, r);
                            return a
                        }
                    }
                    static getNumRawDataModules(e) {
                        if (e < p.MIN_VERSION || e > p.MAX_VERSION)
                            throw new RangeError("Version number out of range");
                        let t = (16 * e + 128) * e + 64;
                        if (e >= 2) {
                            let a = Math.floor(e / 7) + 2;
                            t -= (25 * a - 10) * a - 55,
                            e >= 7 && (t -= 36)
                        }
                        return F(208 <= t && t <= 29648),
                            t
                    }
                    static getNumDataCodewords(e, t) {
                        return Math.floor(p.getNumRawDataModules(e) / 8) - p.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e] * p.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]
                    }
                    static reedSolomonComputeDivisor(e) {
                        if (e < 1 || e > 255)
                            throw new RangeError("Degree out of range");
                        let t = [];
                        for (let r = 0; r < e - 1; r++)
                            t.push(0);
                        t.push(1);
                        let a = 1;
                        for (let r = 0; r < e; r++) {
                            for (let s = 0; s < t.length; s++)
                                t[s] = p.reedSolomonMultiply(t[s], a),
                                s + 1 < t.length && (t[s] ^= t[s + 1]);
                            a = p.reedSolomonMultiply(a, 2)
                        }
                        return t
                    }
                    static reedSolomonComputeRemainder(e, t) {
                        let a = t.map(r=>0);
                        for (let r of e) {
                            let s = r ^ a.shift();
                            a.push(0),
                                t.forEach((i,l)=>a[l] ^= p.reedSolomonMultiply(i, s))
                        }
                        return a
                    }
                    static reedSolomonMultiply(e, t) {
                        if (e >>> 8 || t >>> 8)
                            throw new RangeError("Byte out of range");
                        let a = 0;
                        for (let r = 7; r >= 0; r--)
                            a = a << 1 ^ (a >>> 7) * 285,
                                a ^= (t >>> r & 1) * e;
                        return F(a >>> 8 == 0),
                            a
                    }
                    finderPenaltyCountPatterns(e) {
                        let t = e[1];
                        F(t <= this.size * 3);
                        let a = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t;
                        return (a && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (a && e[6] >= t * 4 && e[0] >= t ? 1 : 0)
                    }
                    finderPenaltyTerminateAndCount(e, t, a) {
                        return e && (this.finderPenaltyAddHistory(t, a),
                            t = 0),
                            t += this.size,
                            this.finderPenaltyAddHistory(t, a),
                            this.finderPenaltyCountPatterns(a)
                    }
                    finderPenaltyAddHistory(e, t) {
                        t[0] == 0 && (e += this.size),
                            t.pop(),
                            t.unshift(e)
                    }
                }
                ;
                p.MIN_VERSION = 1,
                    p.MAX_VERSION = 40,
                    p.PENALTY_N1 = 3,
                    p.PENALTY_N2 = 3,
                    p.PENALTY_N3 = 40,
                    p.PENALTY_N4 = 10,
                    p.ECC_CODEWORDS_PER_BLOCK = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]],
                    p.NUM_ERROR_CORRECTION_BLOCKS = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]];
                Dt = p;
                v = class v {
                    constructor(e, t, a) {
                        this.mode = e;
                        this.numChars = t;
                        this.bitData = a;
                        if (t < 0)
                            throw new RangeError("Invalid argument");
                        this.bitData = a.slice()
                    }
                    static makeBytes(e) {
                        let t = [];
                        for (let a of e)
                            B(a, 8, t);
                        return new v(fe.BYTE,e.length,t)
                    }
                    static makeNumeric(e) {
                        if (!v.isNumeric(e))
                            throw new RangeError("String contains non-numeric characters");
                        let t = [];
                        for (let a = 0; a < e.length; ) {
                            let r = Math.min(e.length - a, 3);
                            B(parseInt(e.substring(a, a + r), 10), r * 3 + 1, t),
                                a += r
                        }
                        return new v(fe.NUMERIC,e.length,t)
                    }
                    static makeAlphanumeric(e) {
                        if (!v.isAlphanumeric(e))
                            throw new RangeError("String contains unencodable characters in alphanumeric mode");
                        let t = [], a;
                        for (a = 0; a + 2 <= e.length; a += 2) {
                            let r = v.ALPHANUMERIC_CHARSET.indexOf(e.charAt(a)) * 45;
                            r += v.ALPHANUMERIC_CHARSET.indexOf(e.charAt(a + 1)),
                                B(r, 11, t)
                        }
                        return a < e.length && B(v.ALPHANUMERIC_CHARSET.indexOf(e.charAt(a)), 6, t),
                            new v(fe.ALPHANUMERIC,e.length,t)
                    }
                    static makeSegments(e) {
                        return e == "" ? [] : v.isNumeric(e) ? [v.makeNumeric(e)] : v.isAlphanumeric(e) ? [v.makeAlphanumeric(e)] : [v.makeBytes(v.toUtf8ByteArray(e))]
                    }
                    static makeEci(e) {
                        let t = [];
                        if (e < 0)
                            throw new RangeError("ECI assignment value out of range");
                        if (e < 128)
                            B(e, 8, t);
                        else if (e < 16384)
                            B(2, 2, t),
                                B(e, 14, t);
                        else if (e < 1e6)
                            B(6, 3, t),
                                B(e, 21, t);
                        else
                            throw new RangeError("ECI assignment value out of range");
                        return new v(fe.ECI,0,t)
                    }
                    static isNumeric(e) {
                        return v.NUMERIC_REGEX.test(e)
                    }
                    static isAlphanumeric(e) {
                        return v.ALPHANUMERIC_REGEX.test(e)
                    }
                    getData() {
                        return this.bitData.slice()
                    }
                    static getTotalBits(e, t) {
                        let a = 0;
                        for (let r of e) {
                            let s = r.mode.numCharCountBits(t);
                            if (r.numChars >= 1 << s)
                                return 1 / 0;
                            a += 4 + s + r.bitData.length
                        }
                        return a
                    }
                    static toUtf8ByteArray(e) {
                        e = encodeURI(e);
                        let t = [];
                        for (let a = 0; a < e.length; a++)
                            e.charAt(a) != "%" ? t.push(e.charCodeAt(a)) : (t.push(parseInt(e.substring(a + 1, a + 3), 16)),
                                a += 2);
                        return t
                    }
                }
                ;
                v.NUMERIC_REGEX = /^[0-9]*$/,
                    v.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/,
                    v.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
                Ee = v,
                    V = class V {
                        constructor(e, t) {
                            this.ordinal = e;
                            this.formatBits = t
                        }
                    }
                ;
                V.LOW = new V(0,1),
                    V.MEDIUM = new V(1,0),
                    V.QUARTILE = new V(2,3),
                    V.HIGH = new V(3,2);
                Z = V,
                    U = class U {
                        constructor(e, t) {
                            this.modeBits = e;
                            this.numBitsCharCount = t
                        }
                        numCharCountBits(e) {
                            return this.numBitsCharCount[Math.floor((e + 7) / 17)]
                        }
                    }
                ;
                U.NUMERIC = new U(1,[10, 12, 14]),
                    U.ALPHANUMERIC = new U(2,[9, 11, 13]),
                    U.BYTE = new U(4,[8, 16, 16]),
                    U.KANJI = new U(8,[8, 10, 12]),
                    U.ECI = new U(7,[0, 0, 0]);
                fe = U
            }
        );
        var Mt, At, Bt, Rt, Ue, Ge, It, Ht, Ft, Ot, ze, sr = x(()=>{
                _();
                D();
                O();
                X();
                te();
                K();
                or();
                Mt = class extends h {
                    constructor(e) {
                        super(),
                            this.userInfo = e,
                            this.setTitle("Change your email"),
                            this.contentEl.append(jsx(jsxFragment, null, jsx("p", {
                                class: "my-2"
                            }, jsx("label", {
                                class: "input-label"
                            }, "New email"), this.emailEl = jsx("input", {
                                class: "input w-full max-w-sm",
                                type: "email",
                                placeholder: "Enter your new email address..."
                            })), jsx("p", {
                                class: "my-2"
                            }, jsx("label", {
                                class: "input-label"
                            }, "Password"), this.passwordEl = jsx("input", {
                                class: "input w-full max-w-sm",
                                type: "password",
                                placeholder: "Enter your password..."
                            })), this.mfaSectionEl = jsx("p", {
                                class: "my-2"
                            }, jsx("label", {
                                class: "input-label"
                            }, "6-digit code"), this.mfaEl = jsx("input", {
                                class: "input w-full max-w-sm",
                                inputMode: "numeric",
                                type: "text"
                            })))),
                            this.mfaSectionEl.toggle(e.mfa),
                            this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                class: "button button-primary",
                                onclick: this.update.bind(this)
                            }, "Confirm change"), jsx("button", {
                                class: "button",
                                onclick: this.close.bind(this)
                            }, "Cancel"))),
                            Q(this.emailEl, ()=>this.passwordEl.focus()),
                            Q(this.passwordEl, ()=>this.update())
                    }
                    update() {
                        return u(this, null, function*() {
                            let e = this.emailEl.value
                                , t = this.passwordEl.value
                                , a = this.mfaEl.value;
                            if (e === "") {
                                this.showError("New email cannot be empty.");
                                return
                            }
                            if (t === "") {
                                this.showError("Password cannot be empty.");
                                return
                            }
                            if (this.userInfo.mfa && a === "") {
                                this.showError("Please enter the 6-digit code generated by your authenticator app to confirm email change.");
                                return
                            }
                            try {
                                yield ba({
                                    email: e,
                                    password: t,
                                    mfa: a
                                }),
                                    this.close(),
                                    new M("Successfully updated","Your email has been successfully updated!").open()
                            } catch (r) {
                                r.contains("2FA code required") && this.mfaSectionEl.show(),
                                    this.showError(r)
                            }
                        })
                    }
                }
                    ,
                    At = class extends h {
                        constructor() {
                            super(),
                                this.setTitle("Change your name"),
                                this.contentEl.append(jsx("p", null, jsx("label", {
                                    class: "input-label"
                                }, "New name"), this.nameEl = jsx("input", {
                                    class: "input w-full change-name-new-name",
                                    type: "text",
                                    placeholder: "Enter your new name..."
                                }))),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-primary",
                                    onclick: this.update.bind(this)
                                }, "Confirm change"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel"))),
                                Q(this.nameEl, ()=>this.update())
                        }
                        update() {
                            return u(this, null, function*() {
                                let e = this.nameEl.value;
                                if (e === "") {
                                    this.showError("New name cannot be empty.");
                                    return
                                }
                                try {
                                    yield ya({
                                        name: e
                                    }),
                                        this.close(),
                                        new M("Successfully updated","Your name has been successfully updated!").open()
                                } catch (t) {
                                    this.showError(t)
                                }
                            })
                        }
                    }
                    ,
                    Bt = class extends h {
                        constructor() {
                            super(),
                                this.setTitle("Change your password"),
                                this.contentEl.append(jsx(jsxFragment, null, jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "Current password"), this.oldPassEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "password",
                                    placeholder: "Enter your old password..."
                                })), jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "New password"), this.newPassEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "password",
                                    placeholder: "Enter your new password..."
                                })))),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-primary",
                                    onclick: this.update.bind(this)
                                }, "Confirm change"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel"))),
                                Q(this.oldPassEl, ()=>this.newPassEl.focus()),
                                Q(this.newPassEl, ()=>this.update())
                        }
                        update() {
                            return u(this, null, function*() {
                                let e = this.oldPassEl.value
                                    , t = this.newPassEl.value;
                                if (e === "") {
                                    this.showError("Current password cannot be empty.");
                                    return
                                }
                                if (t === "") {
                                    this.showError("New password cannot be empty.");
                                    return
                                }
                                try {
                                    yield ga({
                                        old_password: e,
                                        new_password: t
                                    }),
                                        this.close(),
                                        new M("Successfully updated","Your password has been successfully updated!").open()
                                } catch (a) {
                                    this.showError(a)
                                }
                            })
                        }
                    }
                    ,
                    Rt = class extends h {
                        constructor(e, t) {
                            super(),
                                this.secret = e,
                                this.setTitle("Enable 2-factor authentication");
                            let a;
                            this.contentEl.append(jsx("form", {
                                id: "mfa-form",
                                onsubmit: this.update.bind(this)
                            }, jsx("p", {
                                class: "mb-2 font-semibold"
                            }, "Step 1: Download an authenticator app"), jsx("p", {
                                class: "mb-2"
                            }, "Download and install an authenticator app on your phone, such as Google Authenticator or\xA0Authy."), jsx("p", {
                                class: "mb-2 font-semibold"
                            }, "Step 2: Scan the QR code"), jsx("p", {
                                class: "mb-2"
                            }, "Scan the QR code below with your authenticator app, or use the setup key below."), a = jsx("p", {
                                className: "my-8"
                            }), jsx("p", {
                                class: "my-8"
                            }, jsx("input", {
                                type: "text",
                                class: "w-full",
                                value: e,
                                readOnly: !0
                            })), jsx("p", {
                                class: "mb-2 font-semibold"
                            }, "Step 3: Verify your code"), jsx("p", {
                                class: "mb-2"
                            }, "Enter the 6 digit code generated by your authenticator app"), jsx("p", {
                                class: "my-2"
                            }, this.codeEl = jsx("input", {
                                class: "input w-full max-w-sm",
                                type: "text",
                                placeholder: "Enter 6-digit code...",
                                required: !0
                            })), jsx("p", {
                                class: "mt-6 mb-2 font-semibold"
                            }, "Step 4: Enter your current password to confirm"), jsx("p", {
                                class: "my-2"
                            }, this.passwordEl = jsx("input", {
                                class: "input w-full max-w-sm",
                                type: "password",
                                placeholder: "Enter password to confirm...",
                                autocomplete: "current-password",
                                required: !0
                            })))),
                                a.appendChild(rr(t, 5, Z.LOW)),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, this.submitBtnEl = jsx("button", {
                                    type: "submit",
                                    class: "button button-primary"
                                }, "Complete set up"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel"))),
                                this.submitBtnEl.setAttr("form", "mfa-form")
                        }
                        update(e) {
                            return u(this, null, function*() {
                                e.preventDefault();
                                let t = this.codeEl.value
                                    , a = this.passwordEl.value;
                                if (t === "") {
                                    this.showError("Please enter the 6-digit code generated by your authenticator app to enable 2FA.");
                                    return
                                }
                                if (a === "") {
                                    this.showError("Please enter your password to enable 2FA.");
                                    return
                                }
                                try {
                                    let r = yield ot({
                                        secret: this.secret,
                                        password: a,
                                        mfa: t
                                    });
                                    if (!r.recovery_codes)
                                        throw new Error("Please try again later.");
                                    this.close(),
                                        new Ue("2-factor authentication is ready","You have successsfully set up 2FA to protect your account!",r.recovery_codes).open()
                                } catch (r) {
                                    this.showError(r)
                                }
                            })
                        }
                    }
                    ,
                    Ue = class extends M {
                        constructor(e, t, a) {
                            super(e, t);
                            let r = this.messageContainerEl.createDiv({
                                cls: "mt-4"
                            });
                            r.createEl("p", {
                                text: "We strongly recommend storing these recovery codes in a safe place. Each code may be used once."
                            });
                            let s = r.createDiv({
                                cls: "flex flex-col gap-y-8 sm:flex-row sm:justify-around items-center mt-4"
                            });
                            s.createDiv({
                                    cls: "font-mono"
                                }, g=>{
                                    let m = g.createEl("ul");
                                    for (let c of a)
                                        m.createEl("li", {
                                            text: c
                                        })
                                }
                            );
                            let i = s.createDiv({
                                cls: "flex flex-col gap-y-4"
                            })
                                , l = i.createEl("button", {
                                cls: "button button-primary",
                                text: "Copy Recovery Codes"
                            });
                            l.addEventListener("click", ()=>{
                                    navigator.clipboard.writeText(a.join(`
`)),
                                        l.setText("Copied!"),
                                        setTimeout(()=>l.setText("Copy Recovery Codes"), 1e3)
                                }
                            );
                            let n = encodeURIComponent(a.join(`
`));
                            i.createEl("a", {
                                cls: "button button-primary",
                                text: "Download Recovery Codes",
                                href: "data:text/plain;charset=utf-8," + n
                            }).setAttribute("download", "obsidian-recovery-codes.txt")
                        }
                    }
                    ,
                    Ge = class extends h {
                        constructor(e, t) {
                            super(),
                                this.setTitle(e),
                                this.contentEl.append(jsx(jsxFragment, null, jsx("p", {
                                    class: "mb-2"
                                }, "Verify your identity by entering your current password and 6-digit verification code from your authenticator app."), jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "Password"), this.passwordEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "password",
                                    placeholder: "Enter password..."
                                })), jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "6-digit code"), this.codeEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "number",
                                    placeholder: "000000"
                                })), jsx("p", {
                                    class: "my-2"
                                }, this.useRecoveryCodeBtn = jsx("button", {
                                    type: "button",
                                    class: "font-medium text-sm text-accent"
                                }, "Use recovery code")), jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "Recovery code"), this.recoveryCodeEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "text"
                                })))),
                                this.recoveryCodeEl.parentElement.hide(),
                                this.useRecoveryCodeBtn.addEventListener("click", ()=>{
                                        this.useRecoveryCodeBtn.parentElement.hide(),
                                            this.codeEl.parentElement.hide(),
                                            this.codeEl.value = "",
                                            this.recoveryCodeEl.parentElement.show()
                                    }
                                ),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-primary",
                                    onclick: this.update.bind(this)
                                }, t), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel")))
                        }
                    }
                    ,
                    It = class extends Ge {
                        constructor() {
                            super("Disable 2-factor authentication", "Disable 2FA")
                        }
                        update() {
                            return u(this, null, function*() {
                                let e = this.recoveryCodeEl.value
                                    , t = this.codeEl.value
                                    , a = this.passwordEl.value;
                                if (t === "" && e === "") {
                                    this.recoveryCodeEl.isShown() ? this.showError("Please enter an unused recovery code to disable 2FA.") : this.showError("Please enter the 6-digit code generated by your authenticator app to disable 2FA.");
                                    return
                                }
                                if (a === "") {
                                    this.showError("Please enter your password to confirm disabling 2FA.");
                                    return
                                }
                                try {
                                    yield ca({
                                        password: a,
                                        mfa: t,
                                        recovery_code: e
                                    }),
                                        this.close(),
                                        new M("2-factor authentication is disabled","You have successsfully disabled 2-factor authentication on your account.").open()
                                } catch (r) {
                                    this.showError(r)
                                }
                            })
                        }
                    }
                    ,
                    Ht = class extends Ge {
                        constructor() {
                            super("Refresh 2-factor authentication recovery codes", "Refresh")
                        }
                        update() {
                            return u(this, null, function*() {
                                let e = this.recoveryCodeEl.value
                                    , t = this.codeEl.value
                                    , a = this.passwordEl.value;
                                if (t === "" && e === "") {
                                    this.recoveryCodeEl.isShown() ? this.showError("Please enter an unused recovery code to refresh your recovery codes.") : this.showError("Please enter the 6-digit code generated by your authenticator app to refresh your recovery codes.");
                                    return
                                }
                                if (a === "") {
                                    this.showError("Please enter your password to confirm refreshing your recovery codes.");
                                    return
                                }
                                try {
                                    let r = yield ma({
                                        password: a,
                                        mfa: t,
                                        recovery_code: e
                                    });
                                    if (!r.recovery_codes || !r.success)
                                        throw new Error("Please try again later.");
                                    this.close(),
                                        new Ue("2-factor authentication recovery codes refreshed","You have successfully refreshed your 2FA recovery codes. Any previously unused codes will no longer be accepted.",r.recovery_codes).open()
                                } catch (r) {
                                    this.showError(r)
                                }
                            })
                        }
                    }
                    ,
                    Ft = class extends h {
                        constructor() {
                            super(),
                                this.setTitle("Log out everywhere"),
                                this.contentEl.append(jsx(jsxFragment, null, jsx("p", null, "Any devices currently logged into your Obsidian account will lose their connection."), jsx("p", {
                                    class: "my-2 text-red-500"
                                }, "This action is not reversible."), jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "Password"), this.passwordEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "password",
                                    placeholder: "Enter your password to confirm...",
                                    autocomplete: "current-password",
                                    required: !0
                                })))),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-danger",
                                    onclick: this.confirm.bind(this)
                                }, "Confirm log out"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel"))),
                                Q(this.passwordEl, ()=>this.confirm())
                        }
                        confirm() {
                            return u(this, null, function*() {
                                let e = this.passwordEl.value;
                                if (e === "") {
                                    this.showError("You must enter your current password to confirm.");
                                    return
                                }
                                try {
                                    yield xa({
                                        password: e
                                    }),
                                        this.close(),
                                        window.location.reload()
                                } catch (t) {
                                    this.showError(t)
                                }
                            })
                        }
                    }
                    ,
                    Ot = class extends h {
                        constructor(e) {
                            super(),
                                this.userInfo = e,
                                this.setTitle("Delete your account"),
                                this.contentEl.append(jsx(jsxFragment, null, jsx("p", {
                                    class: "mb-2"
                                }, "Deleting your account is a permanent action with significant consequences. Before proceeding, carefully review the following information:"), jsx("ul", {
                                    class: "list-disc pl-4 marker:text-faint my-4"
                                }, jsx("li", null, "All your commercial licenses and Catalyst licenses will be\xA0revoked."), jsx("li", null, "Your subscriptions to Obsidian Publish and Obsidian Sync will be\xA0terminated."), jsx("li", null, "Your Obsidian Sync remote vaults and Obsidian Publish sites will be permanently deleted."), jsx("li", null, "Payments associated with your account will not be eligible for refunds.")), jsx("p", {
                                    class: "my-2 text-red-500"
                                }, "Important: Account deletion is irreversible. Once your account is deleted, it cannot be recovered under any circumstances."), jsx("p", {
                                    class: "my-2"
                                }, "If you fully understand the consequences outlined above and still wish to proceed, please confirm by entering your email and password below:"), jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "Email"), this.emailEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "email",
                                    placeholder: "Enter email to confirm..."
                                })), jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "Password"), this.passwordEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    type: "password",
                                    placeholder: "Enter password to confirm..."
                                })), this.mfaSectionEl = jsx("p", {
                                    class: "my-2"
                                }, jsx("label", {
                                    class: "input-label"
                                }, "6-digit code"), this.mfaEl = jsx("input", {
                                    class: "input w-full max-w-sm",
                                    inputMode: "numeric",
                                    type: "text"
                                })))),
                                this.mfaSectionEl.toggle(e.mfa),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-danger mod-warning",
                                    onclick: this.update.bind(this)
                                }, "Confirm deletion"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel"))),
                                Q(this.emailEl, ()=>this.passwordEl.focus())
                        }
                        update() {
                            return u(this, null, function*() {
                                let e = this.emailEl.value
                                    , t = this.passwordEl.value
                                    , a = this.mfaEl.value;
                                if (e === "") {
                                    this.showError("Please enter your email to confirm account deletion.");
                                    return
                                }
                                if (t === "") {
                                    this.showError("Please enter your password to confirm account deletion.");
                                    return
                                }
                                if (this.userInfo.mfa && a === "") {
                                    this.showError("Please enter the 6-digit code generated by your authenticator app to confirm account deletion.");
                                    return
                                }
                                try {
                                    yield Ea({
                                        email: e,
                                        password: t,
                                        mfa: a
                                    }),
                                        this.close(),
                                        new M("Successfully deleted","Your account is now deleted!").open()
                                } catch (r) {
                                    r.contains("2FA code required") && this.mfaSectionEl.show(),
                                        this.showError(r)
                                }
                            })
                        }
                    }
                    ,
                    ze = class extends A {
                        constructor(e) {
                            super("account", "Account", "Your account", T(mt)),
                                this.page = e;
                            let t = this.settings = new N(this.contentEl);
                            this.nameSetting = t.addSetting(new b().setName("Name").addButton("Change", ()=>{
                                    new At().open()
                                }
                            )),
                                this.nameSetting.descEl.className = "text-xl",
                                this.emailSetting = t.addSetting(new b().setName("Email").addButton("Change", ()=>{
                                        new Mt(e.data).open()
                                    }
                                )),
                                this.emailSetting.descEl.className = "text-xl",
                                t.addSetting(new b().setName("Password").setDesc("Change your account\xA0password.").addButton("Change", ()=>{
                                        new Bt().open()
                                    }
                                )),
                                this.mfaSetting = t.addSetting(new b().setName("2-factor authentication").setDesc("Protect your account with a second verification\xA0step.")),
                                t.addSetting(new b().setName("Contact support").setDesc("Reach us for account, billing, or paid service\xA0inquiries.").addLink("Email us", "mailto:support@obsidian.md")),
                                t.addSetting(new b().setName("Log out everywhere").setDesc("Log out on all devices for security reasons. You will need to log in again on each\xA0device.").addButton("Log out", ()=>{
                                        new Ft().open()
                                    }
                                )),
                                t.addSetting(new b().setName("Delete account").setDesc("Permanently delete your account, licenses, and subscriptions. You will be asked for confirmation before deletion\xA0proceeds.").addDangerButton("Delete", ()=>{
                                        new Ot(e.data).open()
                                    }
                                ))
                        }
                        update() {
                            let {data: e} = this.page;
                            this.nameSetting.setDesc(e.name),
                                this.emailSetting.setDesc(e.email),
                                e.mfa ? (this.mfaSetting.addButton("Refresh Recovery Codes", ()=>{
                                        new Ht().open()
                                    }
                                ),
                                    this.mfaSetting.addButton("Disable", ()=>{
                                            new It().open()
                                        }
                                    ),
                                    this.mfaSetting.setDesc("2FA is enabled for your account.")) : this.mfaSetting.addButton("Enable", ()=>u(this, null, function*() {
                                    let t = yield ot();
                                    new Rt(t.secret,t.url).open()
                                }))
                        }
                    }
            }
        );
        var ce, Nt, Ut, Gt = x(()=>{
                D();
                O();
                q();
                ce = class extends I {
                    constructor() {
                        super(),
                            this.setTitle("Your invoices"),
                            this.contentEl.appendChild(this.invoiceEl = jsx("div", {
                                class: "invoice-list space-y-4 divide-y divide-gray-700"
                            }))
                    }
                    onOpen() {
                        return u(this, null, function*() {
                            let {invoiceEl: e} = this;
                            e.empty();
                            let t = yield Aa();
                            for (let a of t)
                                e.createDiv({
                                        cls: "invoice-item setting pt-4 flex gap-6 items-center"
                                    }, r=>{
                                        r.createDiv({
                                                cls: "setting-item-info"
                                            }, s=>{
                                                s.createDiv({
                                                    text: a.description,
                                                    cls: "setting-item-name"
                                                }),
                                                    s.createDiv({
                                                        text: k(a.created),
                                                        cls: "text-muted leading-5 text-sm"
                                                    })
                                            }
                                        ),
                                            r.createDiv({
                                                    cls: "setting-item-control ml-auto"
                                                }, s=>{
                                                    s.createEl("button", {
                                                            cls: "button",
                                                            text: "View"
                                                        }, i=>{
                                                            i.addEventListener("click", ()=>{
                                                                    let l = new Nt;
                                                                    l.display(a),
                                                                        l.open()
                                                                }
                                                            )
                                                        }
                                                    ),
                                                    a.refundable && s.createEl("a", {
                                                            text: "Refund",
                                                            cls: "button ml-2"
                                                        }, i=>{
                                                            i.addEventListener("click", ()=>{
                                                                    new Ut(a).open(),
                                                                        fish(".modal-container.mod-confirm-refund").show()
                                                                }
                                                            )
                                                        }
                                                    )
                                                }
                                            )
                                    }
                                );
                            t.length === 0 && e.append(jsx("p", null, "There are no invoices for this account."))
                        })
                    }
                }
                    ,
                    Nt = class extends I {
                        constructor() {
                            super(),
                                this.setTitle("Invoice #"),
                                this.contentEl.append(jsx("div", {
                                    class: "print-invoice flex mb-6 print:hidden"
                                }, jsx("button", {
                                    class: "button button-primary",
                                    onclick: ()=>window.print()
                                }, "Print invoice"))),
                                this.contentEl.appendChild(jsx("div", {
                                    class: "invoice-box print:text-black print:w-full"
                                }, jsx("table", {
                                    cellPadding: "0",
                                    cellSpacing: "0",
                                    class: "print:w-full"
                                }, jsx("tbody", null, jsx("tr", null, jsx("td", {
                                    colSpan: 2
                                }, jsx("table", {
                                    class: "print:w-full"
                                }, jsx("tbody", null, jsx("tr", null, jsx("td", {
                                    class: "py-4 border-b border-gray-700"
                                }, jsx("div", null, jsx("b", {
                                    class: "text-lg"
                                }, "Dynalist Inc.")), jsx("div", {
                                    class: "text-sm"
                                }, "1376 Ferncrest Road", jsx("br", null), "Oakville, L6H 7W3", jsx("br", null), "Ontario, Canada", jsx("br", null), "GST/HST 75064 9899 RT0001")), jsx("td", {
                                    class: "py-4 border-b border-gray-700 text-right"
                                }, jsx("div", null, jsx("b", null, "Invoice #", this.invoiceNumberEl = jsx("span", null))), this.dateEl = jsx("div", {
                                    class: "text-sm"
                                }))))))), jsx("tr", null, jsx("td", {
                                    colSpan: 2,
                                    class: "py-4"
                                }, jsx("div", null, jsx("b", null, "Bill to")), this.billingInfoEl = jsx("div", {
                                    class: "my-2 py-1 px-2 w-[102%] inline-block whitespace-pre-wrap rounded -ml-2 hover:cursor-pointer hover:ring hover:ring-gray-600 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-accent-600 focus:cursor-text",
                                    contentEditable: "true"
                                }, "Click to edit your billing information"))), jsx("tr", {
                                    class: "heading border-b border-gray-700 tabular-nums"
                                }, jsx("td", {
                                    class: "pt-4 pb-2"
                                }, jsx("b", null, "Items")), jsx("td", {
                                    class: "pt-4 pb-2 text-right"
                                }, jsx("b", null, "Price"))), jsx("tr", {
                                    class: "item border-b border-gray-700 tabular-nums"
                                }, this.descEl = jsx("td", {
                                    class: "py-2"
                                }), jsx("td", {
                                    class: "py-2 text-right"
                                }, "$", this.amountEl = jsx("span", null), " USD")), this.refundEl = jsx("tr", {
                                    class: "item mod-refund tabular-nums"
                                }, jsx("td", {
                                    class: "py-2"
                                }, "Refund"), jsx("td", {
                                    class: "py-2 text-right"
                                }, "-$", this.refundAmountEl = jsx("span", null), " USD")), jsx("tr", {
                                    class: "total tabular-nums"
                                }, jsx("td", {
                                    class: "py-2"
                                }), jsx("td", {
                                    class: "py-2 text-right"
                                }, jsx("b", null, "Total:"), " $", this.totalEl = jsx("span", null), " USD")))))),
                                this.billingInfoEl.addEventListener("input", ()=>{
                                        localStorage.setItem("billing-info", this.billingInfoEl.getText())
                                    }
                                )
                        }
                        display(e) {
                            let t = (e.amount / 100).toFixed(2)
                                , a = (e.refunded / 100).toFixed(2)
                                , r = ((e.amount - e.refunded) / 100).toFixed(2)
                                , s = e.refunded !== 0
                                , i = localStorage.getItem("billing-info")
                                , l = e.receipt_number || e.id;
                            this.setTitle("Invoice #" + l),
                                this.invoiceNumberEl.setText(l),
                                this.dateEl.setText(k(e.created)),
                                this.descEl.setText(e.description),
                                this.amountEl.setText(t),
                                this.refundEl.toggle(s),
                            s && this.refundAmountEl.setText(a),
                                this.totalEl.setText(r),
                            i && this.billingInfoEl.setText(i)
                        }
                    }
                    ,
                    Ut = class extends h {
                        constructor(e) {
                            super(),
                                this.info = e,
                                this.setTitle("Confirm refund"),
                                this.contentEl.append(jsx(jsxFragment, null, jsx("p", null, " Would you like to request a refund for this payment? "), jsx("p", null, e.description), jsx("p", {
                                    class: "text-red-500 my-2"
                                }, "The service or license you purchased will be removed, and this action is not\xA0reversible. Your auto-renewal will also be cancelled."))),
                                e.service === "sync" ? this.contentEl.append(jsx("p", {
                                    class: "text-red-500 my-2"
                                }, "Your Obsidian Sync remote vaults will be immediately deleted.")) : e.service === "publish" && this.contentEl.append(jsx("p", {
                                    class: "text-red-500 my-2"
                                }, "Your Obsidian Publish sites will be immediately deleted.")),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-primary",
                                    onclick: this.update.bind(this)
                                }, "Request refund"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel")))
                        }
                        update() {
                            return u(this, null, function*() {
                                try {
                                    yield Ba({
                                        charge: this.info.id,
                                        type: this.info.type
                                    }),
                                        new M("Refund success",createFragment(e=>e.append(jsx(jsxFragment, null, jsx("p", null, "Your refund request has been successfully processed!"), jsx("p", null, "The service or license you purchased has been removed, and your auto-renewal has been cancelled."), jsx("p", null, "You should receive your refund in a few business days. Thanks for trying Obsidian!"))))).open()
                                } catch (e) {
                                    fish(".refund-failed-reason").setText(e),
                                        fish(".modal-container.mod-refund-failed").show(),
                                        new M("Refund failed",createFragment(t=>t.append(jsx(jsxFragment, null, jsx("p", null, "Automatic refund has failed. ", jsx("span", null, e.toString())), jsx("p", null, "If you believe you still qualify for a refund, you can contact our support at support@obsidian.md."))))).open()
                                }
                            })
                        }
                    }
            }
        );
        var zt, Ye, Yt, qe, lr = x(()=>{
                _();
                D();
                Gt();
                O();
                ee();
                X();
                K();
                q();
                zt = class {
                    constructor(e) {
                        this.value = !1;
                        (this.el = e.createEl("span", "checkbox-container")).addEventListener("click", ()=>this.setValue(!this.value))
                    }
                    setValue(e) {
                        this.value = e,
                            this.el.toggleClass("is-enabled", this.value)
                    }
                    getValue() {
                        return this.value
                    }
                }
                    ,
                    Ye = class extends $ {
                        constructor() {
                            super();
                            this.paypalUseVault = !0;
                            this.currentSeats = 0;
                            this.setTitle("Commercial license"),
                                this.containerEl.addClass("mod-commercial-license")
                        }
                        createPayment(t) {
                            super.createPayment(t),
                                this.businessNameContainerEl = t.createEl("p", {}, a=>{
                                        a.createEl("label", {
                                            cls: "input-label",
                                            text: "Business name"
                                        }),
                                            this.businessNameEl = a.createEl("input", {
                                                cls: "input w-full",
                                                type: "text",
                                                placeholder: "Name of your business..."
                                            })
                                    }
                                ),
                                t.createEl("p", {}, a=>{
                                        a.createEl("label", {
                                            cls: "input-label mt-2",
                                            text: "Seats"
                                        }),
                                            this.seatsEl = a.createEl("input", {
                                                cls: "input",
                                                type: "number",
                                                placeholder: "1",
                                                attr: {
                                                    min: 1,
                                                    value: 1
                                                }
                                            })
                                    }
                                ),
                                this.autoRenewalContainerEl = t.createEl("p", {}, a=>{
                                        a.createEl("label", {
                                            cls: "input-label mt-2",
                                            text: "Auto-renewal"
                                        }),
                                            this.autoRenewal = new zt(a)
                                    }
                                ),
                                this.seatsEl.addEventListener("input", this.updatePrice.bind(this))
                        }
                        setStatus(t, a) {
                            return this.currentSeats = t,
                                t === 0 ? this.setTitle("Commercial license") : this.setTitle("Add seats"),
                                this.businessNameContainerEl.toggle(t === 0),
                                this.autoRenewalContainerEl.toggle(t === 0),
                                this.autoRenewal.setValue(a),
                                this
                        }
                        getPriceData() {
                            let {currentSeats: t} = this
                                , a = this.seatsEl.value;
                            if (a === "")
                                return null;
                            let r = parseInt(a);
                            if (isNaN(r) || r <= 0)
                                return null;
                            let s = this.autoRenewal.getValue() ? "yearly" : "";
                            return {
                                type: "business",
                                variation: (t + r).toString(),
                                renew: s
                            }
                        }
                        afterPay() {
                            return u(this, null, function*() {
                                let t = this.businessNameEl.value;
                                if (t)
                                    try {
                                        yield Ca({
                                            company: t
                                        })
                                    } catch (a) {
                                        this.showError(a);
                                        return
                                    }
                                window.location.reload()
                            })
                        }
                        validate() {
                            return u(this, null, function*() {
                                let {currentSeats: t} = this;
                                if (t === 0 && !this.businessNameEl.value)
                                    throw "Please enter a business name.";
                                return !0
                            })
                        }
                        onOpen() {
                            super.onOpen(),
                                this.updatePrice()
                        }
                    }
                    ,
                    Yt = class extends h {
                        constructor(e) {
                            super(),
                                this.currentSeats = e,
                                this.setTitle("Reduce your number of seats"),
                                this.contentEl.append(jsx("p", null, jsx("label", {
                                    class: "input-label"
                                }, "Seats to remove"), this.amountEl = jsx("input", {
                                    class: "commercial-license-reduce-seat-input",
                                    type: "number",
                                    placeholder: "Enter a number...",
                                    min: "1",
                                    value: "1",
                                    step: "1"
                                }))),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-primary",
                                    onclick: this.update.bind(this)
                                }, "Update"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel")))
                        }
                        update() {
                            return u(this, null, function*() {
                                let e = this.amountEl.valueAsNumber
                                    , t = this.currentSeats;
                                if (e === 0) {
                                    this.showError("The number of seats to remove cannot be 0.");
                                    return
                                }
                                let a = t - e;
                                if (a < 0) {
                                    let r = t === 1 ? "1 seat" : t + " seats";
                                    this.showError("You currently have " + r + " and cannot remove more seats than that.");
                                    return
                                }
                                try {
                                    yield Sa({
                                        seats: a
                                    }),
                                        this.close(),
                                        new M("Successfully updated","Your reduction of seats has been recorded!").open()
                                } catch (r) {
                                    this.showError(r)
                                }
                            })
                        }
                    }
                    ,
                    qe = class extends A {
                        constructor(e) {
                            super("commercial", "License", "Commercial license", T(nt)),
                                this.page = e
                        }
                        update() {
                            let {business: e} = this.page.subscriptions
                                , {contentEl: t} = this;
                            if (t.empty(),
                            e && e.expiry >= Date.now()) {
                                let {seats: a, expiry: r, key: s, company: i, renew: l} = e
                                    , n = a === 1 ? "1 seat" : a + " seats"
                                    , d = k(r);
                                t.append(jsx("div", null, jsx("p", null, "Your license key is: "), jsx("div", {
                                    class: "commercial-license-key",
                                    onclick: function() {
                                        navigator.clipboard.writeText(s),
                                            this.setText("Copied!"),
                                            this.addClass("is-copied"),
                                            setTimeout(()=>{
                                                    this.setText(s),
                                                        this.removeClass("is-copied")
                                                }
                                                , 500)
                                    }
                                }, s), jsx("p", null, 'Registered to "', i, '" for ', n, ". Valid until ", d, "."), jsx("p", null, "To activate the license, go to Settings \u2192 General in Obsidian.")));
                                let g = new N(t);
                                g.addSetting(new b().setName("Seats").setDesc(`${n} purchased.`).addButton("Add seats", ()=>{
                                        new Ye().setStatus(a, !!l).open()
                                    }
                                ).addButton("Remove seats", ()=>{
                                        new Yt(a).open()
                                    }
                                )),
                                    g.addSetting(new b().setName("Invoices").setDesc("View and print invoices for your commercial license.").addButton("View", ()=>{
                                            new ce().open()
                                        }
                                    )),
                                    g.addSetting(new b().setName("Auto-renewal").setDesc(l ? `Your next renewal will be ${d}.` : `Your license expires ${d}. Your license will not be\xA0renewed.`).addButton(l ? "Stop" : "Resume", ()=>u(this, null, function*() {
                                        l ? yield z({
                                            type: "business",
                                            renew: ""
                                        }) : yield z({
                                            type: "business",
                                            renew: "yearly"
                                        }),
                                            window.location.reload()
                                    }))),
                                    ne(g)
                            } else
                                t.append(jsx("div", {
                                    class: "flex gap-6 flex-col md:flex-row"
                                }, jsx("div", null, jsx("div", {
                                    class: "md:text-lg max-w-lg leading-tight"
                                }, "Obsidian is free for personal use. For organizations with two or more people, a commercial license is required. ", jsx("a", {
                                    href: "/license",
                                    target: "_blank",
                                    class: "text-accent"
                                }, "Learn\xA0more.")), jsx("div", {
                                    class: "text-muted mb-6 text-xs sm:text-sm md:text-base mt-2"
                                }, "Obsidian is free to use commercially for 14 days for evaluation\xA0purposes."), jsx("div", null, jsx("span", {
                                    class: "text-3xl font-semibold"
                                }, "$50"), " ", jsx("span", {
                                    class: "text-sm text-muted"
                                }, "USD")), jsx("div", {
                                    class: "text-muted text-xs sm:text-sm"
                                }, "per user, per\xA0year")), jsx("div", {
                                    class: "md:ml-auto"
                                }, jsx("button", {
                                    class: "button button-md button-primary w-full",
                                    onclick: ()=>new Ye().setStatus(0, !0).open()
                                }, "Buy license"))))
                        }
                    }
            }
        );
        var qt, Vt, Ve, ir = x(()=>{
                _();
                D();
                Pt();
                kt();
                Gt();
                O();
                ee();
                X();
                K();
                q();
                qt = class extends $ {
                    constructor() {
                        super();
                        this.paypalUseVault = !1;
                        this.setTitle("Add credit to your account balance"),
                            this.summaryEl.hide()
                    }
                    createPayment(t) {
                        t.appendChild(jsx("p", {
                            class: "mb-6"
                        }, "Obsidian Credit can be used to pay for any Obsidian license or service. You can also send credit to anyone, such as friends, family, and\xA0coworkers.")),
                            t.createEl("p", {}, a=>{
                                    a.createEl("label", {
                                        cls: "input-label",
                                        text: "Amount of credit to purchase (USD)"
                                    }),
                                        this.amountEl = a.createEl("input", {
                                            type: "number",
                                            placeholder: "Credit amount",
                                            attr: {
                                                min: 5,
                                                value: 50,
                                                step: 1
                                            }
                                        })
                                }
                            ),
                            this.amountEl.addEventListener("change", this.updatePrice.bind(this))
                    }
                    getPriceData() {
                        let t = this.amountEl.value;
                        if (t === "")
                            return null;
                        let a = parseInt(t);
                        return isNaN(a) || a <= 0 ? null : {
                            type: "credit",
                            variation: (a * 100).toString(),
                            renew: ""
                        }
                    }
                    afterPay() {
                        return u(this, null, function*() {
                            new Vt().open()
                        })
                    }
                    onOpen() {
                        super.onOpen(),
                            this.updatePrice()
                    }
                }
                    ,
                    Vt = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Successfully bought Obsidian Credit"),
                                this.contentEl.append(jsx("p", null, "Thanks so much for supporting us by buying Obsidian Credit!"), jsx("p", null, "You can now purchase Obsidian Sync, Obsidian Publish, or any license with your credit. You can also gift it to others. "))
                        }
                        onClose() {
                            super.onClose(),
                                window.location.reload()
                        }
                    }
                    ,
                    Ve = class extends A {
                        constructor(e) {
                            super("billing", "Billing", "Billing", T(dt)),
                                this.page = e;
                            let t = this.settings = new N(this.contentEl);
                            t.addSetting(new b().setName("Obsidian Credit").setDesc(createFragment(a=>a.append(jsx(jsxFragment, null, jsx("div", {
                                class: "text-normal text-lg pb-2 leading-6"
                            }, "$", this.creditAmountEl = jsx("span", null, "0"), " USD balance"), jsx("div", {
                                class: "text-muted leading-4 mt-1 text-xs sm:text-sm md:text-base max-w-xl"
                            }, "Credit can be used to pay for any Obsidian license or service, including Sync and Publish. Any credit you have will be used before we charge your card or\xA0PayPal."))))).addPrimaryButton("Buy credit", ()=>new qt().open()).addButton("Send credit", ()=>new He(e.data.credit).open(), a=>this.sendCreditButtonEl = a)),
                                t.addSetting(new b().setName("Invoices and refunds").setDesc("Download invoices for your past payments and request\xA0refunds.").addButton("View", ()=>new ce().open())),
                                this.discountSetting = t.addSetting(new b().setName("Discount").addButton("Apply", ()=>new ke().open(), a=>this.applyDiscountButtonEl = a)),
                                this.giftSetting = t.addSetting(new b().setName("Gift history").addButton("Redeem", ()=>new Fe().open()))
                        }
                        update() {
                            let {discountSetting: e, applyDiscountButtonEl: t} = this
                                , {credit: a, discount: r} = this.page.data;
                            if (this.sendCreditButtonEl.toggle(a > 0),
                                this.creditAmountEl.setText(C(a)),
                                r) {
                                if (r.status === "submitted")
                                    e.setDesc("You have submitted your school or organization email, but have not completed email verification yet. Please check your email for a link to verify your email address."),
                                        t.hide();
                                else if (r.status === "verified")
                                    e.setDesc("Your discount application has been submitted for review. Thanks for your patience!"),
                                        t.hide();
                                else if (r.status === "approved") {
                                    let {type: s, expiry_ts: i} = r;
                                    e.setDesc(`Your ${s} discount currently gives you 40% off the regular price of Obsidian Sync and Publish. Your discount will expire on ${k(i)}.`),
                                        t.setText("Renew")
                                }
                            } else
                                e.setDesc(createFragment(s=>s.append(jsx(jsxFragment, null, "Students, faculty members, and nonprofit employees are eligible for a 40% discount on Obsidian Sync and\xA0Publish. ", jsx("a", {
                                    href: "https://help.obsidian.md/Licenses+and+payment/Education+and+non-profit+discount",
                                    target: "_blank",
                                    class: "text-accent"
                                }, "Learn\xA0more."))))),
                                    t.show(),
                                    t.setText("Apply");
                            this.updateGift(this.page.gifts)
                        }
                        updateGift(e) {
                            let {giftSetting: t} = this;
                            if (t.setDesc("You haven't sent or received any\xA0credit."),
                            !e || e.length === 0)
                                return;
                            let a = createFragment();
                            e.sort((r,s)=>r.ts - s.ts);
                            for (let r of e)
                                r.type === "sent" ? a.append(jsx("p", null, "You sent $", C(r.amount), ' to "', r.recipient, '" on ', k(r.ts), ".", jsx("span", null, " "), r.redeemed ? jsx(jsxFragment, null, jsx("br", null), jsx("span", null, "Your gift was ", r.is_cancelled ? "cancelled" : "redeemed", " on ", k(r.redeemed_ts), ".")) : jsx(jsxFragment, null, "Copy ", jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: s=>{
                                        s.preventDefault(),
                                            new ge(r.redeem_code).open()
                                    }
                                }, "redeem link"), jsx("span", null, " or "), jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: s=>{
                                        s.preventDefault(),
                                            new Oe(r.redeem_code).open()
                                    }
                                }, "redeem code"), ".", jsx("br", null), jsx("span", null, "Waiting for recipient to redeem gift. "), jsx("a", {
                                    href: "#",
                                    class: "text-accent",
                                    onclick: s=>u(this, null, function*() {
                                        if (s.preventDefault(),
                                            !!confirm("Are you sure you want to cancel this gift? Your credit will be refunded, and the recipient will no longer be able to redeem it."))
                                            try {
                                                yield he({
                                                    code: r.redeem_code
                                                }),
                                                    location.reload()
                                            } catch (l) {
                                                new pe(l).open()
                                            }
                                    })
                                }, "Cancel this gift"), "."))) : r.type === "received" && a.append(jsx("p", null, "You redeemed $", C(r.amount), " worth of gift credit on ", k(r.ts), "."));
                            t.setDesc(a)
                        }
                    }
            }
        );
        var We, Wt, _t, we, $t, _e, jt = x(()=>{
                _();
                D();
                O();
                ee();
                X();
                te();
                K();
                q();
                We = class extends ie {
                    constructor(e, t) {
                        super(),
                            this.setTitle("Choose a Publish plan"),
                            this.setSubscriptionPrices(e),
                            this.setTermCard(t ? this.monthlyCard : this.yearlyCard)
                    }
                    createPayment(e) {
                        super.createPayment(e);
                        let t = e.createEl("p");
                        t.createEl("label", {
                            cls: "input-label",
                            text: "Number of sites"
                        }),
                            this.numSitesEl = t.createEl("input", {
                                type: "number",
                                attr: {
                                    placeholder: "Enter a number...",
                                    min: 1,
                                    value: 1
                                }
                            }),
                            this.numSitesEl.addEventListener("change", this.updatePrice.bind(this))
                    }
                    getPriceData() {
                        return this.selectedCard ? {
                            type: "publish",
                            variation: this.numSitesEl.value,
                            renew: this.selectedCard.value
                        } : null
                    }
                    afterPay() {
                        this.close(),
                            new Wt().open()
                    }
                }
                    ,
                    Wt = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Successfully bought Obsidian Publish"),
                                this.contentEl.append(jsx("p", null, "Thank you so much for supporting us by using Obsidian Publish!"), jsx("p", {
                                    class: "my-2"
                                }, "To learn more about how to publish your notes, ", jsx("a", {
                                    href: "https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish",
                                    class: "text-accent",
                                    target: "_blank"
                                }, "read this guide"), "."))
                        }
                        onClose() {
                            super.onClose(),
                                window.location.reload()
                        }
                    }
                    ,
                    _t = class extends h {
                        constructor(e) {
                            super(),
                                this.setTitle("Reduce your number of Publish sites"),
                                this.contentEl.createEl("p", {}, t=>{
                                        t.createEl("label", {
                                                cls: "input-label",
                                                text: "Number of sites"
                                            }, a=>{
                                                a.createEl("br"),
                                                    this.amountEl = a.createEl("input", {
                                                        type: "number",
                                                        placeholder: "Enter a number...",
                                                        attr: {
                                                            min: "1",
                                                            value: String(e)
                                                        }
                                                    })
                                            }
                                        )
                                    }
                                ),
                                this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                    class: "button button-primary",
                                    onclick: this.update.bind(this)
                                }, "Update"), jsx("button", {
                                    class: "button",
                                    onclick: this.close.bind(this)
                                }, "Cancel")))
                        }
                        update() {
                            return u(this, null, function*() {
                                let e = this.amountEl.valueAsNumber;
                                try {
                                    yield Ta({
                                        sites: e
                                    }),
                                        window.location.reload()
                                } catch (t) {
                                    this.showError(t)
                                }
                            })
                        }
                    }
                    ,
                    we = class extends h {
                        constructor(e, t, a, r) {
                            super(),
                                this.code = e,
                                this.setTitle("Publish site invite"),
                                r ? this.showError(r) : (this.contentEl.append(jsx("p", null, t, " (", a, ") has invited you to collaborate on an Obsidian Publish site together.")),
                                    this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                        class: "button button-primary",
                                        onclick: this.acceptInvite.bind(this)
                                    }, "Accept"), jsx("button", {
                                        onclick: this.close.bind(this)
                                    }, "Cancel"))))
                        }
                        acceptInvite() {
                            return u(this, null, function*() {
                                try {
                                    yield Ua({
                                        code: this.code
                                    }),
                                        this.close(),
                                        new $t().open()
                                } catch (e) {
                                    let t = new h;
                                    t.setTitle("Couldn't accept invite"),
                                        t.contentEl.append(jsx("p", null, "Unfortunately, something went wrong when accepting the invite.")),
                                        t.showError(e),
                                        this.close(),
                                        t.open()
                                }
                            })
                        }
                    }
                    ,
                    $t = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Accepted invite"),
                                this.contentEl.append(jsx("p", null, "You have successfully accepted the invite!"), jsx("p", null, "You can now go into the Obsidian app, log in under Settings ", "->", ' Account, and enable the "Publish" core plugin to start collaborating on this site.'))
                        }
                        onClose() {
                            super.onClose(),
                                J(),
                                location.reload()
                        }
                    }
                    ,
                    _e = class extends A {
                        constructor(e) {
                            super("publish", "Publish", "Publish", T(ct)),
                                this.page = e
                        }
                        update() {
                            let {publish: e} = this.page.subscriptions
                                , {headerEl: t, titleEl: a, contentEl: r} = this
                                , s = {
                                monthly: 1e3,
                                yearly: 800,
                                yearlyPromo: "20% lower price"
                            };
                            r.empty();
                            let i = [a];
                            if (e && e.earlybird && (i.push(jsx("span", {
                                className: "flair"
                            }, "Early bird")),
                                s.monthly /= 2,
                                s.yearly /= 2),
                            e && e.expiry_ts >= Date.now()) {
                                let {renew: l, sites: n, renew_sites: d, expiry_ts: g} = e;
                                i.push(jsx("span", {
                                    className: "flair"
                                }, "Active"));
                                let m = k(g)
                                    , c = n === 1 ? "1 site" : `${n} sites`
                                    , y = d === 1 ? "1 site" : `${d} sites`;
                                r.append(jsx("p", {
                                    className: "md:text-lg max-w-lg leading-tight"
                                }, "To publish files to your site, log in to your account in Obsidian and enable the ", jsx("b", null, "Publish"), " plugin. ", jsx("a", {
                                    href: "https://help.obsidian.md/Obsidian+Publish/Set+up+Obsidian+Publish",
                                    target: "_blank",
                                    class: "text-accent"
                                }, "See\xA0user\xA0guide.")));
                                let E = new N(r)
                                    , R = E.addSetting(new b().setName("Your sites").setDesc(c).addButton("Add sites", ()=>new We(s).open()));
                                d > 1 && R.addButton("Remove sites", ()=>new _t(d).open());
                                let ae = E.addSetting(new b().setName("Renewal frequency").setDesc(createFragment(S=>{
                                        l === "yearly" ? S.append(jsx(jsxFragment, null, jsx("div", {
                                            className: "text-xl text-normal mb-1"
                                        }, "Yearly"), jsx("div", null, "You're saving 20% compared to monthly renewal."))) : l === "monthly" ? S.append(jsx(jsxFragment, null, jsx("div", {
                                            className: "text-xl text-normal mb-1"
                                        }, "Monthly"), jsx("div", null, "Save 20% by switching to yearly renewal."))) : l === "" && S.append(jsx(jsxFragment, null, jsx("div", null, "Your plan will not be renewed.")))
                                    }
                                )));
                                l !== "monthly" && ae.addButton(l ? "Switch to monthly" : "Renew monthly", ()=>u(this, null, function*() {
                                    yield z({
                                        type: "publish",
                                        renew: "monthly"
                                    }),
                                        window.location.reload()
                                })),
                                l !== "yearly" && ae.addButton(l ? "Switch to yearly" : "Renew yearly", ()=>u(this, null, function*() {
                                    yield z({
                                        type: "publish",
                                        renew: "yearly"
                                    }),
                                        window.location.reload()
                                }));
                                let et = E.addSetting(new b().setName("Auto-renewal").setDesc(l ? `Your next renewal will be for ${y} on ${m}.` : `Your Publish subscription will expire on ${m}.`));
                                l && et.addButton("Stop", ()=>{
                                        let S = createFragment(Y=>{
                                                Y.append(jsx(jsxFragment, null, jsx("p", null, "Are you sure you want to stop renewing your Obsidian Publish subscription?"), jsx("p", {
                                                    class: "my-2"
                                                }, "Your Obsidian Publish subscription will expire on ", m, ". Your site will be deactivated on this date, and your data will be deleted from our servers 30 days later.")))
                                            }
                                        );
                                        new oe("Stop renewing Obsidian Publish",S,"Stop auto-renewal",()=>u(this, null, function*() {
                                            yield z({
                                                type: "publish",
                                                renew: ""
                                            }),
                                                window.location.reload()
                                        })).open()
                                    }
                                ),
                                    ne(E)
                            } else {
                                let l = tr({
                                    yearly: s.yearly,
                                    yearlyDesc: "per month, per site, billed yearly",
                                    monthly: s.monthly,
                                    monthlyDesc: "per month, per site, billed monthly"
                                });
                                r.append(jsx("div", {
                                    class: "flex gap-6 flex-col md:flex-row"
                                }, jsx("div", null, jsx("div", {
                                    className: "md:text-lg max-w-lg leading-tight"
                                }, "Web hosting for your Obsidian notes. Create an online wiki, knowledge base, documentation, or digital garden. Hassle-free refund within 7 days. ", jsx("a", {
                                    href: "/publish",
                                    target: "_blank",
                                    class: "text-accent"
                                }, "Learn\xA0more.")), jsx("div", {
                                    className: "mt-6"
                                }, l.el)), jsx("div", {
                                    class: "md:ml-auto"
                                }, jsx("button", {
                                    class: "button button-md button-primary w-full",
                                    onclick: ()=>new We(s,l.getStatus()).open()
                                }, "Buy Publish"))))
                            }
                            t.setChildrenInPlace(i)
                        }
                    }
            }
        );
        var Jt, $e, je, Xt, Xe, ve, Kt, Ke, Je, Qt = x(()=>{
                _();
                D();
                O();
                ee();
                X();
                te();
                K();
                q();
                Jt = {
                    basic_1: {
                        name: "Sync Standard",
                        code: "basic_1",
                        upgradeShortDesc: "Upgrade your plan to increase the number of vaults and storage limits.",
                        planElements: ["1 vault", "1 GB total storage", "5 MB maximum file size", "1 month version history", "Unlimited devices", "Shared vaults"]
                    },
                    legacy: {
                        name: "Sync Plus",
                        code: "legacy",
                        upgradeShortDesc: "Keep your subscription active to maintain your early supporter perks. You can also upgrade to access 100 GB of storage.",
                        planElements: ["10 vaults", "50 GB total storage (early supporter)", "200 MB maximum file size", "12 months version history", "Unlimited devices", "Shared vaults"]
                    },
                    standard_10: {
                        name: "Sync Plus",
                        code: "standard_10",
                        upgradeShortDesc: "Upgrade your plan to increase total storage to 100 GB.",
                        planElements: ["10 vaults", "10 GB total storage", "200 MB maximum file size", "12 months version history", "Unlimited devices", "Shared vaults"]
                    },
                    standard_100: {
                        name: "Sync Plus",
                        code: "standard_100",
                        planElements: ["10 vaults", "100 GB total storage", "200 MB maximum file size", "12 months version history", "Unlimited devices", "Shared vaults"]
                    }
                },
                    $e = class {
                        constructor(e, t, a) {
                            this.plan = e,
                                this.planDetails = Jt[e.code],
                                this.planFeaturesEl = jsx("div", {
                                    className: "mt-4 text-sm"
                                }, jsx("ul", {
                                    className: "list-disc pl-5 marker:text-muted"
                                }, this.planDetails.planElements.map(r=>jsx("li", null, r)))),
                            t || this.planFeaturesEl.addClass("hidden"),
                                this.cardEl = jsx("div", {
                                    className: "card cursor-pointer p-4 rounded mb-3 ring-1 ring-gray-700 transition-100 transition-all hover:ring hover:ring-accent-500"
                                }, jsx("div", {
                                    className: "text-xl font-semibold"
                                }, this.planDetails.name), this.planFeaturesEl),
                            a && this.setSelected(!0)
                        }
                        setSelected(e) {
                            this.cardEl.toggleClass("is-selected", e)
                        }
                        setPlanFeaturesVisible(e) {
                            this.planFeaturesEl.toggleClass("hidden", !e)
                        }
                    }
                    ,
                    je = class o extends ie {
                        constructor(t, a, r, s, i) {
                            super();
                            this.showPlanFeatures = !1;
                            this.initComplete = !1;
                            this.setTitle("Choose a Sync plan"),
                                this.earlybird = s,
                                this.plans = t,
                                this.selectedPlan = r,
                                this.originalPlan = a,
                                this.planCardContainerEl.createEl("div", {
                                        cls: "flex justify-between"
                                    }, n=>{
                                        n.createEl("p").createEl("label", {
                                            cls: "input-label",
                                            text: "Plan"
                                        }),
                                            n.createEl("p", {
                                                    cls: "py-2 font-normal text-sm text-accent cursor-pointer",
                                                    text: "Show plan features"
                                                }, d=>{
                                                    d.addEventListener("click", ()=>{
                                                            this.showPlanFeatures = !this.showPlanFeatures,
                                                                this.planTypeCards.forEach(g=>g.setPlanFeaturesVisible(this.showPlanFeatures)),
                                                                d.setText(this.showPlanFeatures ? "Hide plan features" : "Show plan features")
                                                        }
                                                    )
                                                }
                                            )
                                    }
                                ),
                            a && (a.code === "legacy" && this.planCardContainerEl.append(jsx("p", {
                                class: "text-muted text-sm pb-4"
                            }, "You are currently on a discontinued plan. If you change plans you will no longer be able to select it. See our ", jsx("a", {
                                href: "/pricing",
                                target: "_blank",
                                class: "text-accent"
                            }, "pricing page"), " for details.")),
                                this.effectImmediatelyEl = this.planCardContainerEl.createEl("p", {
                                    cls: "text-muted text-sm pb-4",
                                    text: "Changes take effect immediately."
                                })),
                                this.planTypeGridEl = this.planCardContainerEl.createDiv("card-container mod-horizontal grid md:grid-cols-2 gap-x-4"),
                                this.createPlanCards(),
                                this.storagePlanCardContainerEl.createEl("p").createEl("label", {
                                    cls: "input-label",
                                    text: "Storage"
                                }),
                                this.storageCards = [];
                            let l = this.storagePlanCardContainerEl.createDiv("card-container mod-horizontal grid md:grid-cols-2 gap-x-4");
                            this.storagePlanCardContainerEl.toggleClass("hidden", r.code === "basic_1");
                            for (let n of Object.values(t)) {
                                if (n.code === "basic_1") {
                                    n.code === this.selectedPlan.code && this.selectStoragePlan(n, null);
                                    continue
                                }
                                let d = new le(l,n.display,n.code);
                                this.storageCards.push(d),
                                    d.cardEl.addEventListener("click", ()=>{
                                            this.selectStoragePlan(n, d),
                                                this.createPlanCards()
                                        }
                                    ),
                                n.code === this.selectedPlan.code && this.selectStoragePlan(n, d),
                                a && n.code === a.code && d.setPromo("Current plan")
                            }
                            this.setTermCard(i ? this.monthlyCard : this.yearlyCard),
                            a && (this.termCardContainerEl.hide(),
                                this.updateUndiscountedAmountPaymentLine()),
                                this.initComplete = !0
                        }
                        updateUndiscountedAmountPaymentLine() {
                            if (!this.originalPlan)
                                return;
                            let t = this.selectedCard === this.monthlyCard
                                , a = `${t ? "Monthly" : "Yearly"} renewal before discount`
                                , r = t ? this.selectedPlan.monthly : this.selectedPlan.yearly;
                            this.undiscountedAmountEl.setValues(!0, r, a),
                                this.undiscountedAmountEl.containerEl.addClass("-mb-8", "mt-8")
                        }
                        createPlanCards() {
                            let t = this.plans.basic_1
                                , a = t === this.selectedPlan ? this.plans.standard_10 || this.plans.legacy : this.plans[this.selectedPlan.code];
                            if (this.planTypeCards = [],
                                this.planTypeGridEl.empty(),
                                t) {
                                let r = new $e(t,this.showPlanFeatures,t === this.selectedPlan);
                                this.planTypeCards.push(r),
                                    this.planTypeGridEl.appendChild(r.cardEl),
                                    r.cardEl.addEventListener("click", ()=>this.handlePlanCardClick(r))
                            }
                            if (a) {
                                let r = new $e(a,this.showPlanFeatures,a === this.selectedPlan);
                                this.planTypeCards.push(r),
                                    this.planTypeGridEl.appendChild(r.cardEl),
                                    r.cardEl.addEventListener("click", ()=>this.handlePlanCardClick(r))
                            }
                        }
                        handlePlanCardClick(t) {
                            for (let a of this.planTypeCards)
                                a.setSelected(a === t);
                            t.planDetails.code === "basic_1" ? (this.storagePlanCardContainerEl.addClass("hidden"),
                                this.selectStoragePlan(t.plan, null)) : (this.storagePlanCardContainerEl.removeClass("hidden"),
                                this.selectStoragePlan(t.plan, this.storageCards[0]))
                        }
                        createPayment(t) {
                            this.planCardContainerEl = t.createDiv(),
                                this.storagePlanCardContainerEl = t.createDiv(),
                                this.termCardContainerEl = t.createDiv(),
                                this.termCardContainerEl.createEl("p").createEl("label", {
                                    cls: "input-label",
                                    text: "Billing"
                                }),
                                this.undiscountedAmountEl = new H(t,"Amount before discounts"),
                                super.createPayment(this.termCardContainerEl)
                        }
                        selectStoragePlan(t, a) {
                            this.selectedStorageCard && this.selectedStorageCard.cardEl.removeClass("is-selected"),
                                this.selectedStorageCard = a,
                            a && a.cardEl.addClass("is-selected"),
                                this.selectedPlan = t,
                            t && this.setSubscriptionPrices({
                                monthly: t.monthly,
                                yearly: t.yearly / 12,
                                yearlyPromo: "20% lower price"
                            }),
                            this.initComplete && this.updatePrice(),
                                this.updateUndiscountedAmountPaymentLine()
                        }
                        updatePrice() {
                            return u(this, null, function*() {
                                this.hideError();
                                let t = this.stripeButton.payEl;
                                if (t.disabled = !1,
                                    t.removeClass("mod-disabled"),
                                this.selectedPlan === this.originalPlan) {
                                    this.setPrices({
                                        subtotal: 0,
                                        desc: "Obsidian Sync subscription - No change",
                                        tax: 0,
                                        taxDesc: "",
                                        discount: 0,
                                        discountDesc: "",
                                        creditUsed: 0,
                                        total: 0,
                                        usdToCad: 0
                                    }),
                                        t.disabled = !0,
                                        t.addClass("mod-disabled");
                                    return
                                }
                                oa(o.prototype, this, "updatePrice").call(this)
                            })
                        }
                        setPrices(t) {
                            super.setPrices(t),
                            this.effectImmediatelyEl && (t.subtotal === 0 && this.selectedPlan !== this.originalPlan ? this.effectImmediatelyEl.setText("Your downgrade will take effect immediately. No credits or refunds will be issued for the downgrade.") : this.effectImmediatelyEl.setText("Changes take effect immediately."))
                        }
                        getPriceData() {
                            return !this.selectedCard || !this.selectedPlan ? null : {
                                type: "sync",
                                variation: this.selectedPlan.code,
                                renew: this.selectedCard.value
                            }
                        }
                        validate() {
                            return u(this, null, function*() {
                                let t = this.getPriceData();
                                if ((yield me(t)).subtotal === 0) {
                                    try {
                                        yield Pa({
                                            plan: t.variation
                                        }),
                                            this.close(),
                                            new Xe().open()
                                    } catch (r) {
                                        r === "too-many-vaults" ? (this.errorEl.empty(),
                                            this.errorEl.createSpan({
                                                text: "You currently have too many remote vaults to switch to the selected plan. Before you can change plans please use the Obsidian app to remove synced vaults that you no longer need. "
                                            }),
                                            this.errorEl.createEl("a", {
                                                cls: "text-accent cursor-pointer",
                                                text: "See guide.",
                                                href: "https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Delete+a+remote+vault",
                                                attr: {
                                                    target: "_blank"
                                                }
                                            }),
                                            this.errorEl.show()) : r === "over-storage" ? (this.errorEl.empty(),
                                            this.errorEl.createSpan({
                                                text: "You currently are using more storage the selected plan allows. Before you can change plans please use the Obsidian app to remove synced files you don't need. "
                                            }),
                                            this.errorEl.createEl("a", {
                                                cls: "text-accent cursor-pointer",
                                                text: "See guide.",
                                                href: "https://help.obsidian.md/Obsidian+Sync/Plans+and+storage+limits#Downgrade+your+plan",
                                                attr: {
                                                    target: "_blank"
                                                }
                                            }),
                                            this.errorEl.show()) : this.showError(r)
                                    }
                                    return !1
                                }
                                return !0
                            })
                        }
                        afterPay() {
                            return u(this, null, function*() {
                                this.close(),
                                    this.originalPlan ? new Xe().open() : new Xt().open()
                            })
                        }
                    }
                    ,
                    Xt = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Successfully bought Obsidian Sync"),
                                this.contentEl.append(jsx("p", null, "Thank you so much for supporting us by using Obsidian Sync!"), jsx("p", {
                                    class: "my-2"
                                }, "To learn more about how to use the in-app plugin to sync your notes, ", jsx("a", {
                                    href: "https://help.obsidian.md/Obsidian+Sync/Introduction+to+Obsidian+Sync",
                                    class: "text-accent",
                                    target: "_blank"
                                }, "read this guide"), "."))
                        }
                        onClose() {
                            super.onClose(),
                                window.location.reload()
                        }
                    }
                    ,
                    Xe = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Successfully changed plan"),
                                this.contentEl.append(jsx("p", null, "Your Sync plan has been changed!"), jsx("p", {
                                    class: "my-2"
                                }, "Your new plan details may take up to 30 minutes to be applied."))
                        }
                        onClose() {
                            super.onClose(),
                                window.location.reload()
                        }
                    }
                    ,
                    ve = class extends h {
                        constructor(e, t, a, r) {
                            super(),
                                this.code = e,
                                this.setTitle("Obsidian Sync vault invite"),
                                r ? this.showError(r) : (this.contentEl.append(jsx("p", null, t, " (", a, ") has invited you to collaborate on an Obsidian Sync vault together.")),
                                    this.buttonContainerEl.append(jsx(jsxFragment, null, jsx("button", {
                                        class: "button button-primary",
                                        onclick: this.acceptInvite.bind(this)
                                    }, "Accept"), jsx("button", {
                                        onclick: this.close.bind(this)
                                    }, "Cancel"))))
                        }
                        acceptInvite() {
                            return u(this, null, function*() {
                                try {
                                    yield za({
                                        code: this.code
                                    }),
                                        this.close(),
                                        new Kt().open()
                                } catch (e) {
                                    let t = new h;
                                    t.setTitle("Couldn't accept invite"),
                                        t.contentEl.append(jsx("p", null, "Unfortunately, something went wrong when accepting the invite.")),
                                        t.showError(e),
                                        this.close(),
                                        t.open()
                                }
                            })
                        }
                    }
                    ,
                    Kt = class extends w {
                        constructor() {
                            super(),
                                this.setTitle("Accepted invite"),
                                this.contentEl.append(jsx("p", null, "You have successfully accepted the invite!"), jsx("p", null, "You can now go in to the Obsidian app, log in under Settings ", "->", ' Account, and enable the "Sync" core plugin to start collaborating on this vault.'))
                        }
                        onClose() {
                            super.onClose(),
                                J(),
                                location.reload()
                        }
                    }
                    ,
                    Ke = class extends A {
                        constructor(e) {
                            super("sync", "Sync", "Sync", T(ft)),
                                this.page = e
                        }
                        update() {
                            let {sync: e, syncPlans: t} = this.page.subscriptions
                                , {headerEl: a, titleEl: r, contentEl: s} = this
                                , i = {};
                            for (let m of t)
                                i[m.code] = m;
                            let l = (e == null ? void 0 : e.plan) || t[0].code
                                , n = t.find(m=>m.code === l) || t[0];
                            s.empty();
                            let d = [r]
                                , g = e && e.earlybird;
                            if (g && d.push(jsx("span", {
                                className: "flair"
                            }, "Early bird")),
                            e && e.expiry_ts >= Date.now()) {
                                d.push(jsx("span", {
                                    className: "flair"
                                }, "Active"));
                                let m = k(e.expiry_ts);
                                s.append(jsx("p", {
                                    className: "md:text-lg max-w-lg leading-tight"
                                }, "To start syncing, log in to your account in Obsidian and enable the ", jsx("b", null, "Sync"), " plugin. ", jsx("a", {
                                    href: "https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync",
                                    target: "_blank",
                                    className: "text-accent"
                                }, "See\xA0user\xA0guide.")));
                                let c = new N(s)
                                    , {renew: y} = e
                                    , E = l.startsWith("basic") ? "Upgrade plan" : "Change plan";
                                c.addSetting(new b().setName("Plan").setDesc(createFragment(S=>{
                                        let Y = Jt[l];
                                        if (!Y) {
                                            S.append(jsx("div", null, "Unknown sync plan. Please contact support"));
                                            return
                                        }
                                        S.append(jsx("div", {
                                            class: "text-xl text-normal mb-1"
                                        }, Y.name)),
                                        Y.upgradeShortDesc && S.append(jsx("div", null, jsx("p", null, Y.upgradeShortDesc))),
                                            S.append(jsx("div", {
                                                class: "mt-4 text-sm"
                                            }, jsx("ul", {
                                                class: "list-disc pl-5 marker:text-muted text-normal"
                                            }, Y.planElements.map(dr=>jsx("li", null, dr)))))
                                    }
                                )).addButton(E, ()=>new je(i,n,n,e.earlybird,y === "monthly").open())).containerEl.addClass("sm:items-start");
                                let ae = c.addSetting(new b().setName("Renewal frequency").setDesc(createFragment(S=>{
                                        y === "yearly" ? S.append(jsx(jsxFragment, null, jsx("div", {
                                            className: "text-xl text-normal mb-1"
                                        }, "Yearly"), jsx("div", null, "You're saving 20% compared to monthly renewal."))) : y === "monthly" ? S.append(jsx(jsxFragment, null, jsx("div", {
                                            className: "text-xl text-normal mb-1"
                                        }, "Monthly"), jsx("div", null, "Save 20% by switching to yearly renewal."))) : y === "" && S.append(jsx(jsxFragment, null, jsx("div", null, "Your plan will not be renewed.")))
                                    }
                                )));
                                y !== "monthly" && ae.addButton(y ? "Switch to monthly" : "Renew monthly", ()=>u(this, null, function*() {
                                    yield z({
                                        type: "sync",
                                        renew: "monthly"
                                    }),
                                        window.location.reload()
                                })),
                                y !== "yearly" && ae.addButton(y ? "Switch to yearly" : "Renew yearly", ()=>u(this, null, function*() {
                                    yield z({
                                        type: "sync",
                                        renew: "yearly"
                                    }),
                                        window.location.reload()
                                }));
                                let et = c.addSetting(new b().setName("Auto-renewal").setDesc(y ? `Your next renewal will be on ${m}.` : `Your Sync subscription will expire on ${m}.`));
                                y && et.addButton("Stop", ()=>{
                                        let S = createFragment(Y=>{
                                                Y.append(jsx(jsxFragment, null, jsx("p", null, "Are you sure you want to stop renewing your Obsidian Sync subscription?"), jsx("p", {
                                                    class: "my-2"
                                                }, "Your Obsidian Sync subscription will expire on ", m, ". Your data will be deleted from our servers 30 days after your subscription expires."))),
                                                e.plan === "legacy" && Y.append(jsx("p", {
                                                    class: "my-2 text-red-500"
                                                }, "You are on a legacy plan with 50 GB storage. Once your subscription expires you will no longer be able to sign up for this plan."))
                                            }
                                        );
                                        new oe("Stop renewing Obsidian Sync",S,"Stop auto-renewal",()=>u(this, null, function*() {
                                            yield z({
                                                type: "sync",
                                                renew: ""
                                            }),
                                                window.location.reload()
                                        })).open()
                                    }
                                ),
                                    ne(c)
                            } else {
                                let m = !1
                                    , c = null
                                    , y = []
                                    , E = null
                                    , R = new Je(i.standard_10 || i.legacy,m);
                                R.cardEl.addEventListener("click", ()=>{
                                        R.setSelected(!0),
                                            E.setSelected(!1),
                                            n = R.plan
                                    }
                                ),
                                    "basic_1"in i ? (E = new Je(i.basic_1,m),
                                        y.push(E.cardEl),
                                        E.cardEl.addEventListener("click", ()=>{
                                                E.setSelected(!0),
                                                    R.setSelected(!1),
                                                    n = E.plan
                                            }
                                        ),
                                        E.setSelected(!0),
                                        n = E.plan) : (R.setSelected(!0),
                                        n = R.plan),
                                    y.push(R.cardEl),
                                    c = Tt(()=>{
                                            m = !m,
                                                c.toggleClass("toggler-on", m),
                                                R.setPeriod(m),
                                            E && E.setPeriod(m)
                                        }
                                    ),
                                    s.append(jsx("div", {
                                        class: "flex gap-6 flex-col md:flex-row"
                                    }, jsx("div", null, jsx("div", {
                                        className: "md:text-lg max-w-lg leading-tight mt-2"
                                    }, "Sync your notes across devices with end-to-end encryption. Hassle-free refund within 7 days. ", jsx("a", {
                                        href: "/sync",
                                        target: "_blank",
                                        className: "text-accent"
                                    }, "Learn\xA0more.")), jsx("div", {
                                        className: "mt-6"
                                    }, c, jsx("div", {
                                        class: "mt-6 card-container mod-horizontal grid md:grid-cols-2 gap-x-6"
                                    }, y))), jsx("div", {
                                        class: "md:ml-auto"
                                    }, jsx("button", {
                                        class: "button button-md button-primary w-full",
                                        onclick: ()=>new je(i,null,n,g,m).open()
                                    }, "Buy Sync"))))
                            }
                            a.setChildrenInPlace(d)
                        }
                    }
                    ,
                    Je = class {
                        constructor(e, t) {
                            this.plan = e,
                                this.monthly = t;
                            let a = Jt[e.code];
                            this.priceEl = jsx("span", {
                                className: "text-3xl font-semibold"
                            }, this.getPrice()),
                                this.priceDescEl = jsx("div", {
                                    className: "text-muted text-xs sm:text-sm"
                                }, this.getPriceDesc()),
                                this.cardEl = jsx("div", {
                                    class: "card cursor-pointer p-4 rounded mb-3 ring-1 ring-gray-700 transition-100 transition-all hover:ring hover:ring-accent-500"
                                }, jsx("div", null, a.name), jsx("div", null, jsx("p", {
                                    className: "flex items-baseline gap-x-1"
                                }, this.priceEl, jsx("span", {
                                    className: "text-sm text-muted"
                                }, "USD")), this.priceDescEl), jsx("div", {
                                    class: "mt-4 text-xs sm:text-sm md:text-base"
                                }, jsx("ul", {
                                    class: "list-disc pl-5 marker:text-muted"
                                }, a.planElements.map(r=>jsx("li", null, r)))))
                        }
                        setSelected(e) {
                            this.cardEl.toggleClass("is-selected", e)
                        }
                        setPeriod(e) {
                            this.monthly = e,
                                this.priceDescEl.setText(this.getPriceDesc()),
                                this.priceEl.setText(this.getPrice())
                        }
                        getPrice() {
                            return "$" + C(this.monthly ? this.plan.monthly : this.plan.yearly / 12, !0)
                        }
                        getPriceDesc() {
                            return this.monthly ? "per month, billed monthly" : "per month, billed yearly"
                        }
                    }
            }
        );
        var Zt, Qe, nr = x(()=>{
                _();
                sr();
                D();
                lr();
                Ct();
                ir();
                jt();
                Qt();
                K();
                Zt = class {
                    constructor() {
                        this.sections = [];
                        let e;
                        this.containerEl = jsx("div", {
                            class: "welcome container pb-24 md:gap-x-6 lg:gap-x-12 flex flex-col md:flex-row"
                        }, jsx("div", {
                            class: "grow pt-4 md:pt-16"
                        }, jsx("div", {
                            class: "flex md:flex-col md:sticky md:top-24"
                        }, e = jsx("a", {
                            class: "header-logo md:pl-1 mr-4 flex items-center gap-x-2 transition-colors",
                            href: "/"
                        }), this.navEl = jsx("nav", {
                            class: "nav mt-8 mb-6 relative font-medium text-lg hidden md:block grid grid-cols-1 auto-rows-fr space-y-1"
                        }, this.gliderEl = jsx("div", {
                            class: "absolute rounded -left-[2%] w-[104%] transition-all duration-100 bg-accent-600"
                        })), jsx("div", {
                            class: "font-medium text-lg ml-auto md:ml-0"
                        }, jsx("a", {
                            href: "/",
                            class: "hidden md:flex items-center gap-2 px-0.5 text-muted mb-1"
                        }, T(it), " Back\xA0to\xA0main\xA0site"), this.logoutEl = jsx("a", {
                            href: "#",
                            class: "flex items-center gap-2 px-0.5 text-muted js-logout align-middle hover:text-red-400"
                        }, T(pt), " Log\xA0out")))), this.sectionsEl = jsx("div", {
                            id: "sections",
                            class: "flex flex-col gap-4 divide-gray-700 divide-y sm:gap-0 sm:divide-y-0 basis-3/4 md:pb-[50vh] pt-4 md:pt-8"
                        })),
                            e.innerHTML = '<svg alt="Obsidian" height="22" viewBox="0 0 143 25" width="126" xmlns="http://www.w3.org/2000/svg"><path fill="#A88BFA" d="m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z"/><path fill="#A88BFA" d="m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z"/><path fill="#A88BFA" d="m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z"/><path fill="#A88BFA" d="m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z"/><path fill="currentColor" d="m39.752 4.5038c-5.952 0-10.248 3.744-10.248 8.88s4.296 8.88 10.248 8.88c5.928 0 10.224-3.744 10.224-8.88s-4.296-8.88-10.224-8.88zm0 3.47999c3.576 0 6.144 2.13601 6.144 5.40001s-2.568 5.4-6.144 5.4c-3.6 0-6.168-2.136-6.168-5.4s2.568-5.40001 6.168-5.40001z"/><path fill="currentColor" d="m55.4847 20.5598c.864.936 2.472 1.704 4.584 1.704 4.32 0 6.8401-2.976 6.8401-6.576 0-3.624-2.5201-6.60001-6.8401-6.60001-2.112 0-3.72.79201-4.584 1.70401v-6.02401h-3.84v17.23201h3.84zm-.12-4.944c0-1.992 1.704-3.432 3.912-3.432 2.112 0 3.888 1.248 3.888 3.504s-1.776 3.48-3.888 3.48c-2.208 0-3.912-1.416-3.912-3.408z"/><path fill="currentColor" d="m67.3181 19.9118c1.464 1.488 4.272 2.352 7.2 2.352 3.96 0 6.936-1.44 6.936-4.392 0-2.88-2.832-3.432-6.072-3.816-2.736-.312-3.576-.384-3.576-1.08 0-.648.864-1.056 2.496-1.056 1.968 0 3.672.6 4.824 1.656l1.992-2.304c-1.272-1.224-3.648-2.18401-6.624-2.18401-4.008 0-6.48 1.72801-6.48 4.32001 0 2.712 2.52 3.312 5.544 3.696 2.832.336 4.032.336 4.032 1.176 0 .792-1.056 1.128-2.784 1.128-2.16 0-4.152-.672-5.664-2.064z"/><path fill="currentColor" d="m82.8395 8.05579h3.912v-3.288h-3.912zm3.864 1.29601h-3.84v12.648h3.84z"/><path fill="currentColor" d="m99.8264 20.5598v1.44h3.8396v-17.23201h-3.8396v6.02401c-.864-.912-2.472-1.70401-4.584-1.70401-4.32 0-6.84 2.97601-6.84 6.60001 0 3.6 2.52 6.576 6.84 6.576 2.112 0 3.72-.768 4.584-1.704zm.12-4.944v.144c0 1.992-1.704 3.408-3.912 3.408-2.112 0-3.888-1.224-3.888-3.48s1.776-3.504 3.888-3.504c2.208 0 3.912 1.44 3.912 3.432z"/><path fill="currentColor" d="m105.996 8.05579h3.912v-3.288h-3.912zm3.864 1.29601h-3.84v12.648h3.84z"/><path fill="currentColor" d="m116.863 22.2638c2.232 0 4.056-.648 5.208-1.656.648 1.2 2.184 1.92 4.992 1.392v-2.832c-1.344.288-1.632-.024-1.632-.696v-4.608c0-3.168-2.376-4.77601-6.408-4.77601-3.48 0-6.264 1.51201-7.056 3.79201l3.456.936c.384-.984 1.704-1.704 3.432-1.704 2.04 0 2.856.768 2.856 1.728v.072l-5.04.456c-2.976.288-5.16 1.512-5.16 3.984 0 2.496 2.232 3.912 5.352 3.912zm4.848-5.112c0 1.464-2.184 2.304-4.152 2.304-1.488 0-2.328-.432-2.328-1.248 0-.84.672-1.152 1.992-1.272l4.488-.456z"/><path fill="currentColor" d="m128.379 21.9998h3.84v-6.048c0-2.184 1.2-3.456 3.288-3.456 1.968 0 3 1.296 3 3.432v6.072h3.84v-7.2c0-3.504-2.232-5.71201-5.52-5.71201-2.04 0-3.624.76801-4.608 1.80001v-1.536h-3.84z"/></svg>'
                    }
                    addSection(e) {
                        return this.sections.push(e),
                            this.navEl.appendChild(e.navEl),
                            this.sectionsEl.appendChild(e.sectionEl),
                            new IntersectionObserver(t=>{
                                    let a = e.navEl
                                        , r = t.some(s=>s.isIntersecting);
                                    if (a.toggleClass("mod-active", r),
                                        r) {
                                        let {gliderEl: s} = this;
                                        s.style.height = `${a.offsetHeight}px`,
                                            s.style.transform = `translateY(${a.offsetTop}px)`
                                    }
                                }
                                ,{
                                    rootMargin: "-100px 0% -80% 0%"
                                }).observe(e.sectionEl),
                            e.navEl.addEventListener("click", t=>{
                                    t.preventDefault(),
                                        e.sectionEl.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                }
                            ),
                            e
                    }
                }
                    ,
                    Qe = class extends Zt {
                        constructor(t) {
                            super();
                            this.account = this.addSection(new ze(this));
                            this.billing = this.addSection(new Ve(this));
                            this.commercial = this.addSection(new qe(this));
                            this.sync = this.addSection(new Ke(this));
                            this.publish = this.addSection(new _e(this));
                            this.catalyst = this.addSection(new Le(this));
                            this.data = t,
                                this.logoutEl.addEventListener("click", ()=>u(this, null, function*() {
                                    yield ua(),
                                        window.location.reload()
                                }))
                        }
                        update() {
                            for (let t of this.sections)
                                t.update()
                        }
                    }
            }
        );
        var Sr = yr(Ze=>{
                D();
                Ct();
                Pt();
                ar();
                kt();
                O();
                nr();
                jt();
                Qt();
                te();
                var L = new URLSearchParams(location.search.substring(1))
                    , G = new URLSearchParams(location.hash.substring(1))
                    , ea = location.search;
                !ea.includes("giftcode") && !ea.includes("publishcode") && !ea.includes("synccode") && J();
                ready(()=>u(Ze, null, function*() {
                    let o;
                    try {
                        o = yield ha()
                    } catch (e) {}
                    if (o) {
                        let e = new Qe(o);
                        if (yield Promise.all([u(Ze, null, function*() {
                            return e.gifts = yield Fa()
                        }), u(Ze, null, function*() {
                            return e.subscriptions = yield wa()
                        })]),
                            e.update(),
                            fish("#main").appendChild(e.containerEl),
                            L.has("code"))
                            try {
                                yield Da({
                                    code: L.get("code")
                                }),
                                    new Pe().open()
                            } catch (t) {
                                new Te(t).open()
                            }
                        else if (L.has("giftcode")) {
                            let t = L.get("giftcode");
                            try {
                                let a = yield Oa({
                                    code: t
                                });
                                new be(t,a.amount,null).open()
                            } catch (a) {
                                new be(t,0,a).open()
                            }
                        } else if (L.has("publishcode")) {
                            let t = L.get("publishcode");
                            try {
                                let a = yield Na({
                                    code: t
                                });
                                new we(t,a.name,a.email,null).open()
                            } catch (a) {
                                new we(t,"","",a).open()
                            }
                        } else if (L.has("synccode")) {
                            let t = L.get("synccode");
                            try {
                                let a = yield Ga({
                                    code: t
                                });
                                new ve(t,a.name,a.email,null).open()
                            } catch (a) {
                                new ve(t,"","",a).open()
                            }
                        }
                    } else if (G.has("signup"))
                        new Be().show();
                    else if (G.has("forgotpass"))
                        new Re().show();
                    else if (G.has("forgetpw") && G.has("id") && G.has("key"))
                        de(),
                            new Ie(G.get("id"),G.get("key")).show();
                    else {
                        let e = new Ae;
                        L.has("code") ? e.showError("Please log in first.") : L.has("giftcode") ? e.showError("Please log in or sign up to redeem your gift.") : (L.has("publishcode") || L.has("synccode")) && e.showError("Please log in or sign up to accept the invite."),
                            e.show()
                    }
                    if (G.has("discount") && (G.get("discount") === "verified" ? new De().open() : G.get("discount") === "approved" && G.has("type") && new Me(G.get("type")).open()),
                        L.has("action")) {
                        if (L.get("action") === "sync-setup") {
                            setTimeout(()=>location.href = "obsidian://sync-setup", 0);
                            let e = new w;
                            e.setTitle("Invited to shared Obsidian Sync vault"),
                                e.contentEl.append(jsx("p", null, "You've been invited to a shared Obsidian Sync vault!"), jsx("p", null, "If Obsidian didn't open automatically, you can view vaults shared with you by going to Settings \u2192 Sync \u2192 Remote vault \u2192 Manage/Choose.")),
                                e.open()
                        } else if (L.get("action") === "publish-sites") {
                            setTimeout(()=>location.href = "obsidian://publish-sites", 0);
                            let e = new w;
                            e.setTitle("Invited to shared Obsidian Publish site"),
                                e.contentEl.append(jsx("p", null, "You've been invited to a shared Obsidian Publish site!"), jsx("p", null, "If Obsidian didn't open automatically, you can view sites shared with you by going to Publish \u2192 Switch site.")),
                                e.open()
                        }
                    }
                }))
            }
        );
        Sr();
    }
)();
/*! Bundled license information:

lucide/dist/esm/createElement.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/defaultAttributes.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/arrow-left.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/briefcase.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/coins.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/flame.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/power.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/refresh-cw.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/send.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/icons/user-round.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.329.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
