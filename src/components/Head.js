import React from 'react'
import { Helmet } from 'react-helmet';

function Head() {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback" />

        {/* <link rel="stylesheet" href="%PUBLIC_URL%/plugins/fontawesome-free/css/all.min.css" /> */}

        <link rel="stylesheet" href="../../../code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

        <link rel="stylesheet" href="../../public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />

        <link rel="stylesheet" href="../../public/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />

        <link rel="stylesheet" href="../../public/plugins/jqvmap/jqvmap.min.css" />

        <link rel="stylesheet" href="../../public/dist/css/adminlte.min2167.css?v=3.2.0" />

        <link rel="stylesheet" href="../../public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />

        <link rel="stylesheet" href="../../public/plugins/daterangepicker/daterangepicker.css" />

        <link rel="stylesheet" href="../../public/plugins/summernote/summernote-bs4.min.css" />
        {/* <script nonce="b0c0136a-ccfd-41a6-ae3a-e9fdcfec8804">(function (w, d) { !function (f, g, h, i) { f[h] = f[h] || {}; f[h].executed = []; f.zaraz = { deferred: [], listeners: [] }; f.zaraz.q = []; f.zaraz._f = function (j) { return function () { var k = Array.prototype.slice.call(arguments); f.zaraz.q.push({ m: j, a: k }) } }; for (const l of ["track", "set", "debug"]) f.zaraz[l] = f.zaraz._f(l); f.zaraz.init = () => { var m = g.getElementsByTagName(i)[0], n = g.createElement(i), o = g.getElementsByTagName("title")[0]; o && (f[h].t = g.getElementsByTagName("title")[0].text); f[h].x = Math.random(); f[h].w = f.screen.width; f[h].h = f.screen.height; f[h].j = f.innerHeight; f[h].e = f.innerWidth; f[h].l = f.location.href; f[h].r = g.referrer; f[h].k = f.screen.colorDepth; f[h].n = g.characterSet; f[h].o = (new Date).getTimezoneOffset(); if (f.dataLayer) for (const s of Object.entries(Object.entries(dataLayer).reduce(((t, u) => ({ ...t[1], ...u[1] }))))) zaraz.set(s[0], s[1], { scope: "page" }); f[h].q = []; for (; f.zaraz.q.length;) { const v = f.zaraz.q.shift(); f[h].q.push(v) } n.defer = !0; for (const w of [localStorage, sessionStorage]) Object.keys(w || {}).filter((y => y.startsWith("_zaraz_"))).forEach((x => { try { f[h]["z_" + x.slice(7)] = JSON.parse(w.getItem(x)) } catch { f[h]["z_" + x.slice(7)] = w.getItem(x) } })); n.referrerPolicy = "origin"; n.src = "../../cdn-cgi/zaraz/sd0d9.js?z=" + btoa(encodeURIComponent(JSON.stringify(f[h]))); m.parentNode.insertBefore(n, m) };["complete", "interactive"].includes(g.readyState) ? zaraz.init() : f.addEventListener("DOMContentLoaded", zaraz.init) }(w, d, "zarazData", "script"); })(window, document);
      </script> */}

      </Helmet>

    </div>
  )
}

export default Head