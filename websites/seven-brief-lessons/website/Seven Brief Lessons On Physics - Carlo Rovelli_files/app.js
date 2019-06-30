function z(require, module, exports) {
    var Helpers, Simulation, debounce;
    Helpers = require("./helpers"), Simulation = require("./simulation"), debounce = require("lodash/function/debounce"), module.exports = function a() {
        var t, e;
        return e = null, t = function b() {
            var t, a, n, r, i, s, o, l, c, u, p, f, d;
            if (r = $(window).innerHeight(), d = $(window).innerWidth(), !e || e.width !== d || e.height !== r) {
                for (e && e.destroy(), e = new Simulation({
                    parent: $("#page").get(0),
                    el: document.querySelector("canvas"),
                    beforeDraw: function c() {
                        return this.ctx.beginPath(), this.ctx.rect(0, 0, this.width, this.height), this.ctx.fillStyle = "#101010", this.ctx.fill(), this.ctx.save(), this.ctx.translate(this.cX, this.cY), this.ctx.rotate(20 * Math.PI / 180), this.ctx.translate(-this.cX, -this.cY), this.ctx.globalCompositeOperation = "destination-out"
                    },
                    afterDraw: function d() {
                        return this.ctx.restore()
                    }
                }), c = 2200, l = .5, o = 5, e.minSize < 700 && (c = 1e3, l = .5, o = 3), a = 1 * e.minSize / 2, n = .6 * e.minSize / 2, i = s = 0, f = c; f >= 0 ? f >= s : s >= f; i = f >= 0 ? ++s : --s) u = n * Helpers.random(Helpers.random(.5, 1, !0), Helpers.random(1, 2, !0), !0), p = a * Helpers.random(Helpers.random(.5, 1, !0), Helpers.random(1, 2, !0), !0), t = 2 * Math.PI * Math.random(), e.addParticle({
                    size: Helpers.random(l, o, !0),
                    rX: u,
                    rY: p,
                    cX: e.cX,
                    cY: e.cY,
                    angle: t,
                    speed: .1,
                    x: e.cX + u * Math.cos(t),
                    y: e.cY + p * Math.sin(t),
                    move: function e() {
                        return this.angle = (this.angle + this.speed * ((Date.now() - this.lastMoved) / 1e3)) % (2 * Math.PI), this.x = this.cX + this.rX * Math.cos(this.angle), this.y = this.cY + this.rY * Math.sin(this.angle)
                    }
                });
                return e.render()
            }
        }, t(), $("#copper").velocity({
            opacity: [1, 0]
        }, {
            delay: 300,
            easing: "easeInCubic"
        }), $("#promo-banner").velocity({
            translateY: [0, "100%"]
        }, {
            delay: 500,
            easing: "easeInCubic"
        }), $(window).on("resize", debounce(t, 200))
    };
}