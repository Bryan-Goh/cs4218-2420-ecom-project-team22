var pageVueRenderFn = function anonymous() {
  with (this) {
    return _c("div", { attrs: { id: "app" } }, [
      _c(
        "header",
        { attrs: { sticky: "" } },
        [
          _c(
            "navbar",
            {
              attrs: { type: "dark" },
              scopedSlots: _u([
                {
                  key: "brand",
                  fn: function () {
                    return [
                      _c("a", { staticClass: "navbar-brand", attrs: { href: "/index.html", title: "Home" } }, [
                        _v("Virtual Vault"),
                      ]),
                    ];
                  },
                  proxy: true,
                },
                {
                  key: "right",
                  fn: function () {
                    return [
                      _c("li", [
                        _c(
                          "form",
                          { staticClass: "navbar-form" },
                          [
                            _c("searchbar", {
                              attrs: {
                                data: searchData,
                                placeholder: "Search",
                                "on-hit": searchCallback,
                                "menu-align-right": "",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ];
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _v(" "),
              _c(
                "dropdown",
                {
                  staticClass: "nav-link",
                  scopedSlots: _u([
                    {
                      key: "header",
                      fn: function () {
                        return [_v("Project overview and Labs")];
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic1a.html" } }, [
                      _v("Overview"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic1b.html" } }, [
                      _v("Setting Up"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic1c.html" } }, [
                      _v("Unit Testing"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic1d.html" } }, [
                      _v("Debugging"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic1e.html" } }, [
                      _v("Code analysis/coverage"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic1f.html" } }, [
                      _v("UI testing"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic1g.html" } }, [
                      _v("Load testing"),
                    ]),
                  ]),
                ]
              ),
              _v(" "),
              _c(
                "dropdown",
                {
                  staticClass: "nav-link",
                  scopedSlots: _u([
                    {
                      key: "header",
                      fn: function () {
                        return [_v("Project Requirements")];
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic2a.html" } }, [
                      _v("Team formation"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic2b.html" } }, [
                      _v("Set up github class room"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic2c.html" } }, [
                      _v("Phase 1 requirements"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic2d.html" } }, [
                      _v("Phase 2 requirements"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic2e.html" } }, [
                      _v("Phase 2 testing"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic2f.html" } }, [
                      _v("Submission instructions"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic2g.html" } }, [
                      _v("Report"),
                    ]),
                  ]),
                ]
              ),
              _v(" "),
              _c("li", [
                _c("a", { staticClass: "nav-link", attrs: { href: "/contents/topic3.html" } }, [
                  _v("Project Management"),
                ]),
              ]),
              _v(" "),
              _c(
                "dropdown",
                {
                  staticClass: "nav-link",
                  scopedSlots: _u([
                    {
                      key: "header",
                      fn: function () {
                        return [_v("FAQ")];
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic4a.html" } }, [
                      _v("Tools"),
                    ]),
                  ]),
                  _v(" "),
                  _c("li", [
                    _c("a", { staticClass: "dropdown-item", attrs: { href: "/contents/topic4b.html" } }, [
                      _v("Project"),
                    ]),
                  ]),
                ]
              ),
              _v(" "),
              _c("li", [
                _c("a", { staticClass: "nav-link", attrs: { href: "/contents/topic5.html" } }, [_v("References")]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _v(" "),
      _c(
        "div",
        { attrs: { id: "flex-body" } },
        [
          _c("overlay-source", { attrs: { id: "site-nav", "tag-name": "nav", to: "site-nav" } }, [
            _c("div", { staticClass: "site-nav-top" }, [
              _c("div", { staticClass: "fw-bold mb-2", staticStyle: { "font-size": "1.25rem" } }, [_v("Contents")]),
            ]),
            _v(" "),
            _c(
              "div",
              { staticClass: "nav-component slim-scroll" },
              [
                _c(
                  "site-nav",
                  [
                    _c(
                      "overlay-source",
                      {
                        staticClass: "site-nav-list site-nav-list-root",
                        attrs: { "tag-name": "ul", to: "mb-site-nav" },
                      },
                      [
                        _c("li", [
                          _c(
                            "div",
                            {
                              staticClass: "site-nav-default-list-item site-nav-list-item-0",
                              attrs: { onclick: "handleSiteNavClick(this)" },
                            },
                            [_c("a", { attrs: { href: "/index.html" } }, [_v("Home 🏠")])]
                          ),
                        ]),
                        _v(" "),
                        _c("li", [
                          _c(
                            "div",
                            {
                              staticClass: "site-nav-default-list-item site-nav-list-item-0",
                              attrs: { onclick: "handleSiteNavClick(this)" },
                            },
                            [
                              _v("Project overview and Labs \n\n"),
                              _c("div", { staticClass: "site-nav-dropdown-btn-container" }, [
                                _c(
                                  "i",
                                  {
                                    staticClass: "site-nav-dropdown-btn-icon site-nav-rotate-icon",
                                    attrs: {
                                      onclick:
                                        "handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();",
                                    },
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "glyphicon glyphicon-menu-down",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _c(
                            "ul",
                            {
                              staticClass:
                                "site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list",
                            },
                            [
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic1a.html" } }, [_v("Overview")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic1b.html" } }, [_v("Setting Up")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic1c.html" } }, [_v("Unit testing")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic1d.html" } }, [_v("Debugging")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [
                                    _c("a", { attrs: { href: "/contents/topic1e.html" } }, [
                                      _v("Code analysis/coverage"),
                                    ]),
                                  ]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic1f.html" } }, [_v("UI testing")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic1g.html" } }, [_v("Load testing")])]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _v(" "),
                        _c("li", [
                          _c(
                            "div",
                            {
                              staticClass: "site-nav-default-list-item site-nav-list-item-0",
                              attrs: { onclick: "handleSiteNavClick(this)" },
                            },
                            [
                              _v("Project Requirements \n\n"),
                              _c("div", { staticClass: "site-nav-dropdown-btn-container" }, [
                                _c(
                                  "i",
                                  {
                                    staticClass: "site-nav-dropdown-btn-icon site-nav-rotate-icon",
                                    attrs: {
                                      onclick:
                                        "handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();",
                                    },
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "glyphicon glyphicon-menu-down",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _c(
                            "ul",
                            {
                              staticClass:
                                "site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list",
                            },
                            [
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic2a.html" } }, [_v("Team formation")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [
                                    _c("a", { attrs: { href: "/contents/topic2b.html" } }, [
                                      _v("Set up github class room"),
                                    ]),
                                  ]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [
                                    _c("a", { attrs: { href: "/contents/topic2c.html" } }, [
                                      _v("Phase 1 requirements"),
                                    ]),
                                  ]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [
                                    _c("a", { attrs: { href: "/contents/topic2d.html" } }, [
                                      _v("Phase 2 requirements"),
                                    ]),
                                  ]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic2e.html" } }, [_v("Phase 2 testing")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [
                                    _c("a", { attrs: { href: "/contents/topic2f.html" } }, [
                                      _v("Submission instructions"),
                                    ]),
                                  ]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic2g.html" } }, [_v("Report")])]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _v(" "),
                        _c("li", [
                          _c(
                            "div",
                            {
                              staticClass: "site-nav-default-list-item site-nav-list-item-0",
                              attrs: { onclick: "handleSiteNavClick(this)" },
                            },
                            [_c("a", { attrs: { href: "/contents/topic3.html" } }, [_v("Project Management")])]
                          ),
                        ]),
                        _v(" "),
                        _c("li", [
                          _c(
                            "div",
                            {
                              staticClass: "site-nav-default-list-item site-nav-list-item-0",
                              attrs: { onclick: "handleSiteNavClick(this)" },
                            },
                            [
                              _v("FAQ \n\n"),
                              _c("div", { staticClass: "site-nav-dropdown-btn-container" }, [
                                _c(
                                  "i",
                                  {
                                    staticClass: "site-nav-dropdown-btn-icon site-nav-rotate-icon",
                                    attrs: {
                                      onclick:
                                        "handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();",
                                    },
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "glyphicon glyphicon-menu-down",
                                      attrs: { "aria-hidden": "true" },
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _c(
                            "ul",
                            {
                              staticClass:
                                "site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list",
                            },
                            [
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic4a.html" } }, [_v("Tools")])]
                                ),
                              ]),
                              _v(" "),
                              _c("li", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "site-nav-default-list-item site-nav-list-item-1",
                                    attrs: { onclick: "handleSiteNavClick(this)" },
                                  },
                                  [_c("a", { attrs: { href: "/contents/topic4b.html" } }, [_v("Project")])]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _v(" "),
                        _c("li", [
                          _c(
                            "div",
                            {
                              staticClass: "site-nav-default-list-item site-nav-list-item-0",
                              attrs: { onclick: "handleSiteNavClick(this)" },
                            },
                            [_c("a", { attrs: { href: "/contents/topic5.html" } }, [_v("References")])]
                          ),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
          _v(" "),
          _c(
            "div",
            { attrs: { id: "content-wrapper" } },
            [
              _c("breadcrumb"),
              _v(" "),
              _c("br"),
              _v(" "),
              _m(0),
              _v(" "),
              _c("hr"),
              _v(" "),
              _m(1),
              _v(" "),
              _c("p", [
                _v(
                  "Virtual vault is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce website, offering seamless connectivity and user-friendly features. The platform provides a robust framework for online shopping. The website is designed to adapt to evolving business needs and can be efficiently extended."
                ),
              ]),
              _v(" "),
              _c("box", { attrs: { type: "tip" } }, [
                _c("p", [
                  _c("strong", [_v("Tip: Learn more about the MERN stack!")]),
                  _v(
                    '\nWant to understand the MERN (MongoDB, Express.js, React, Node.js) stack better? Check out the [MongoDB MERN stack resource]<a href="'
                  ),
                  _c("a", { attrs: { href: "https://www.mongodb.com/resources/languages/mern-stack" } }, [
                    _v("https://www.mongodb.com/resources/languages/mern-stack"),
                  ]),
                  _v(')" for more information.'),
                ]),
              ]),
              _v(" "),
              _c("hr"),
            ],
            1
          ),
          _v(" "),
          _c("overlay-source", { attrs: { id: "page-nav", "tag-name": "nav", to: "page-nav" } }, [
            _c(
              "div",
              { staticClass: "nav-component slim-scroll" },
              [
                _c("a", { pre: true, attrs: { class: "navbar-brand page-nav-title", href: "#" } }, [_v("Topics")]),
                _v(" "),
                _c(
                  "overlay-source",
                  {
                    staticClass: "nav nav-pills flex-column my-0 small no-flex-wrap",
                    attrs: { id: "mb-page-nav", "tag-name": "nav", to: "mb-page-nav" },
                  },
                  [
                    _c("a", { pre: true, attrs: { class: "nav-link py-1", href: "#project-introduction" } }, [
                      _v("Project introduction‎"),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]),
          _v(" "),
          _c("scroll-top-button"),
        ],
        1
      ),
      _v(" "),
      _m(2),
    ]);
  }
};
var pageVueStaticRenderFns = [
  function anonymous() {
    with (this) {
      return _c("div", { staticClass: "bg-danger text-white px-2 py-5 mb-4" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "h1",
            { staticClass: "display-5 no-index", attrs: { id: "great-you-ve-reached-the-virtual-vault-website" } },
            [
              _v("Great!"),
              _c("br"),
              _v("You've reached the Virtual Vault website."),
              _c("a", {
                staticClass: "fa fa-anchor",
                attrs: { href: "#great-you-ve-reached-the-virtual-vault-website", onclick: "event.stopPropagation()" },
              }),
            ]
          ),
          _v(" "),
          _c("p", { staticClass: "lead" }, [_v("Let's get started...")]),
        ]),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("h2", { attrs: { id: "project-introduction" } }, [
        _v("Project introduction"),
        _c("a", {
          staticClass: "fa fa-anchor",
          attrs: { href: "#project-introduction", onclick: "event.stopPropagation()" },
        }),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("footer", [
        _c("div", { staticClass: "text-center" }, [
          _c("small", [
            _v("[Generated by "),
            _c("a", { attrs: { href: "https://markbind.org/" } }, [_v("MarkBind 5.5.2")]),
            _v("]"),
          ]),
        ]),
      ]);
    }
  },
];
