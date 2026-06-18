import { c as i, p as o, j as e, L as a } from "./index-emD-E0jN.js";
import { u as n } from "./loader-circle-_7XAmGM6.js";
import { m as d, E as x, P as c } from "./EmptyState-Bo3N4r0I.js";
const p = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  r = i("arrow-right", p);
const h = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  u = i("sparkles", h);
const g = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  y = i("zap", g),
  s = [
    "Performance",
    "Luxury",
    "Precision",
    "Speed",
    "Craft",
    "Power",
    "Heritage",
    "Edge",
  ];
function w() {
  const { data: l } = n(o(void 0, 8));
  return e.jsxs("div", {
    children: [
      e.jsxs("section", {
        className: "relative overflow-hidden bg-grain",
        children: [
          e.jsxs("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full gradient-ember blur-[120px] opacity-30",
              }),
              e.jsx("div", {
                className:
                  "absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full gradient-luxe blur-[140px] opacity-20",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20 md:pt-32 md:pb-40",
            children: e.jsxs(d.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "max-w-4xl",
              children: [
                e.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8",
                  children: [
                    e.jsx(u, { className: "w-3 h-3 text-gold" }),
                    "New season · Limited drops",
                  ],
                }),
                e.jsxs("h1", {
                  className:
                    "text-display text-[16vw] md:text-[10rem] uppercase leading-[0.85]",
                  children: [
                    "Move",
                    e.jsx("br", {}),
                    e.jsx("span", {
                      className: "text-ember",
                      children: "Differently.",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl",
                  children:
                    "A curated edit where luxury meets performance. Objects engineered for the way you train, travel, and live — with the heft of heritage and the bite of the modern world.",
                }),
                e.jsx("div", {
                  className: "mt-8 sm:mt-10 flex flex-wrap gap-4",
                  children: e.jsxs(a, {
                    to: "/shop",
                    className:
                      "group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 gradient-ember text-ember-foreground font-display tracking-widest uppercase text-xs sm:text-sm rounded-sm hover:opacity-90 transition",
                    children: [
                      "Shop the edit",
                      e.jsx(r, {
                        className:
                          "w-4 h-4 transition-transform group-hover:translate-x-1",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: "border-y border-border overflow-hidden bg-card/50",
            children: e.jsx("div", {
              className: "flex animate-marquee whitespace-nowrap py-3 sm:py-4",
              children: [...s, ...s, ...s, ...s].map((t, m) =>
                e.jsxs(
                  "span",
                  {
                    className:
                      "font-display text-lg sm:text-3xl uppercase tracking-[0.25em] sm:tracking-[0.3em] mx-5 sm:mx-8 text-muted-foreground",
                    children: [
                      t,
                      " ",
                      e.jsx("span", {
                        className: "text-ember mx-3 sm:mx-4",
                        children: "/",
                      }),
                    ],
                  },
                  m
                )
              ),
            }),
          }),
        ],
      }),
      e.jsx("section", {
        className:
          "mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-24 grid md:grid-cols-3 gap-4 sm:gap-6",
        children: [
          {
            label: "Luxury",
            title: "Luxury Shop",
            copy: "Watches, leather, and accessories built once — to last forever.",
            cls: "gradient-luxe text-gold-foreground",
          },
          {
            label: "Sport",
            title: "Sports Shop",
            copy: "Performance gear engineered for athletes who demand the edge.",
            cls: "gradient-ember text-ember-foreground",
          },
          {
            label: "Autographed",
            title: "Autographed Items",
            copy: "Authentic memorabilia — signed, verified, and ready to display.",
            cls: "bg-foreground text-background",
          },
        ].map((t) =>
          e.jsxs(
            d.div,
            {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.6 },
              className: `relative overflow-hidden rounded-md p-6 sm:p-10 md:p-14 min-h-[240px] sm:min-h-[360px] flex flex-col justify-end ${t.cls}`,
              children: [
                e.jsxs("div", {
                  className:
                    "absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] sm:text-xs uppercase tracking-widest opacity-70",
                  children: [
                    e.jsx(y, {
                      className: "w-3 h-3 sm:w-4 sm:h-4 inline mr-1",
                    }),
                    t.label,
                  ],
                }),
                e.jsx("h3", {
                  className:
                    "text-display text-3xl sm:text-5xl md:text-6xl uppercase leading-none",
                  children: t.title,
                }),
                e.jsx("p", {
                  className:
                    "mt-3 sm:mt-4 max-w-md text-sm sm:text-base opacity-90",
                  children: t.copy,
                }),
                e.jsxs(a, {
                  to: "/shop",
                  className:
                    "mt-4 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-medium underline-offset-4 hover:underline self-start",
                  children: [
                    "Explore ",
                    t.label,
                    " ",
                    e.jsx(r, { className: "w-4 h-4" }),
                  ],
                }),
              ],
            },
            t.label
          )
        ),
      }),
      e.jsxs("section", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12",
        children: [
          e.jsxs("div", {
            className:
              "flex items-end justify-between mb-8 sm:mb-12 flex-wrap gap-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className:
                      "text-[10px] sm:text-xs uppercase tracking-widest text-ember mb-2",
                    children: "The Edit",
                  }),
                  e.jsx("h2", {
                    className:
                      "text-display text-4xl sm:text-5xl md:text-7xl uppercase",
                    children: "Crossover.",
                  }),
                ],
              }),
              e.jsxs(a, {
                to: "/shop",
                className:
                  "text-xs sm:text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-2",
                children: ["View all ", e.jsx(r, { className: "w-4 h-4" })],
              }),
            ],
          }),
          l.length === 0
            ? e.jsx(x, { message: "The drop hasn't landed yet" })
            : e.jsx("div", {
                className:
                  "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8",
                children: l.map((t) => e.jsx(c, { product: t }, t.node.id)),
              }),
        ],
      }),
      e.jsx("section", {
        className: "border-t border-border mt-16 sm:mt-24 bg-card",
        children: e.jsx("div", {
          className:
            "mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left",
          children: [
            {
              k: "01",
              t: "Curated, not assembled",
              c: "Every piece earns its place — no filler, no trend-chasing.",
            },
            {
              k: "02",
              t: "Made to be used hard",
              c: "Lab-tested. Trail-proven. Backed by a lifetime promise.",
            },
            {
              k: "03",
              t: "Direct from the maker",
              c: "We work hand-in-hand with the studios behind the icons.",
            },
          ].map((t) =>
            e.jsxs(
              "div",
              {
                children: [
                  e.jsx("div", {
                    className:
                      "text-display text-ember text-3xl sm:text-4xl mb-2 sm:mb-3",
                    children: t.k,
                  }),
                  e.jsx("h4", {
                    className:
                      "text-display uppercase tracking-widest text-base sm:text-lg",
                    children: t.t,
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mt-2",
                    children: t.c,
                  }),
                ],
              },
              t.k
            )
          ),
        }),
      }),
    ],
  });
}
export { w as component };
