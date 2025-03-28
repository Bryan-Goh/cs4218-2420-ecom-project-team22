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
              _c("p", [
                _v(
                  "JMeter is an open-source tool designed for load testing, performance testing, and functional testing of web applications. It allows testers to simulate heavy loads on servers, networks, or objects to analyze overall performance under different scenarios."
                ),
              ]),
              _v(" "),
              _m(1),
              _v(" "),
              _c("p", [_v("To get started with JMeter, follow these steps:")]),
              _v(" "),
              _m(2),
              _v(" "),
              _m(3),
              _v(" "),
              _c("p", [
                _v(
                  "JMeter allows you to create test plans that simulate various scenarios, such as heavy loads, concurrent users, or specific user behaviors. Here's an overview of the load testing process with JMeter:"
                ),
              ]),
              _v(" "),
              _m(4),
              _v(" "),
              _m(5),
              _v(" "),
              _c("p", [
                _v(
                  "After conducting a load test with JMeter, it's essential to analyze the results to understand the application's performance under different load conditions. Here are some key aspects to consider during analysis:"
                ),
              ]),
              _v(" "),
              _m(6),
              _v(" "),
              _c("p", [
                _v(
                  "By analyzing these metrics, testers can identify performance bottlenecks, optimize system resources, and ensure the application can handle expected loads effectively."
                ),
              ]),
              _v(" "),
              _c(
                "panel",
                {
                  attrs: { type: "primary" },
                  scopedSlots: _u([
                    {
                      key: "header",
                      fn: function () {
                        return [_c("p", [_v("Exercises")])];
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _v(" "),
                  _c("h3", { attrs: { id: "load-testing-exercises" } }, [
                    _v("Load Testing Exercises"),
                    _c("a", {
                      staticClass: "fa fa-anchor",
                      attrs: { href: "#load-testing-exercises", onclick: "event.stopPropagation()" },
                    }),
                  ]),
                  _v(" "),
                  _c("p", [
                    _v(
                      "Your task is to come up with a test plan and perform load testing on three different components of the application:"
                    ),
                  ]),
                  _v(" "),
                  _c("p", [_v("1. Homepage")]),
                  _v(" "),
                  _c("p", [_v("2. Login")]),
                  _v(" "),
                  _c("p", [_v("3. Cart")]),
                  _v(" "),
                  _c("p", [_v("For each component, you should:")]),
                  _v(" "),
                  _c("p", [
                    _v(
                      "(a) Identify and define different workload scenarios (e.g., normal load, peak load, stress load)."
                    ),
                  ]),
                  _v(" "),
                  _c("p", [_v("(b) Perform load testing using JMeter by simulating these workload scenarios.")]),
                  _v(" "),
                  _c("p", [
                    _v(
                      "(c) Record and analyze the performance metrics, such as response time, throughput, and error rate."
                    ),
                  ]),
                  _v(" "),
                  _c("p", [_v("Make sure to document your findings and observations for each workload scenario.")]),
                ]
              ),
              _v(" "),
              _c("box", { staticStyle: { "background-color": "purple", color: "white" }, attrs: { type: "tip" } }, [
                _v(
                  "\n**Tip:**\nWhen analyzing load test results, pay close attention to response times, error rates, and resource utilization to identify performance bottlenecks effectively.\n"
                ),
              ]),
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
                    _c("a", { pre: true, attrs: { class: "nav-link py-1", href: "#jmeter-load-testing" } }, [
                      _v("JMeter Load Testing‎"),
                    ]),
                    _v(" "),
                    _c("nav", { staticClass: "nav nav-pills flex-column my-0 nested no-flex-wrap" }, [
                      _c("a", { pre: true, attrs: { class: "nav-link py-1", href: "#download-and-installation" } }, [
                        _v("Download and Installation‎"),
                      ]),
                      _v(" "),
                      _c("a", { pre: true, attrs: { class: "nav-link py-1", href: "#load-testing-with-jmeter" } }, [
                        _v("Load Testing with JMeter‎"),
                      ]),
                      _v(" "),
                      _c("a", { pre: true, attrs: { class: "nav-link py-1", href: "#load-test-analysis" } }, [
                        _v("Load Test Analysis‎"),
                      ]),
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
      _m(7),
    ]);
  }
};
var pageVueStaticRenderFns = [
  function anonymous() {
    with (this) {
      return _c("h1", { attrs: { id: "jmeter-load-testing" } }, [
        _v("JMeter Load Testing"),
        _c("a", {
          staticClass: "fa fa-anchor",
          attrs: { href: "#jmeter-load-testing", onclick: "event.stopPropagation()" },
        }),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("h2", { attrs: { id: "download-and-installation" } }, [
        _v("Download and Installation"),
        _c("a", {
          staticClass: "fa fa-anchor",
          attrs: { href: "#download-and-installation", onclick: "event.stopPropagation()" },
        }),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("ol", [
        _c("li", [
          _c("p", [_c("strong", [_v("Download JMeter")]), _v(":")]),
          _v(" "),
          _c("ul", [
            _c("li", [
              _v("Go to the "),
              _c("a", { attrs: { href: "https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.3.zip" } }, [
                _v("download link"),
              ]),
              _v(" and download the Apache JMeter zip file."),
            ]),
          ]),
        ]),
        _v(" "),
        _c("li", [
          _c("p", [_c("strong", [_v("Extract the Zip File")]), _v(":")]),
          _v(" "),
          _c("ul", [
            _c("li", [
              _v("After downloading, extract the contents of the zip file to a suitable location on your machine."),
            ]),
          ]),
        ]),
        _v(" "),
        _c("li", [
          _c("p", [_c("strong", [_v("Start JMeter")]), _v(":")]),
          _v(" "),
          _c("ul", [
            _c("li", [_v("Navigate to the bin directory within the extracted folder.")]),
            _v(" "),
            _c("li", [_v("Run the JMeter script or executable file to launch the JMeter application.")]),
          ]),
        ]),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("h2", { attrs: { id: "load-testing-with-jmeter" } }, [
        _v("Load Testing with JMeter"),
        _c("a", {
          staticClass: "fa fa-anchor",
          attrs: { href: "#load-testing-with-jmeter", onclick: "event.stopPropagation()" },
        }),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("ol", [
        _c("li", [
          _c("p", [_c("strong", [_v("Create a Test Plan")]), _v(":")]),
          _v(" "),
          _c("ul", [
            _c("li", [_v("Open JMeter and create a new test plan.")]),
            _v(" "),
            _c("li", [
              _v(
                "Add thread groups to simulate virtual users and configure the desired number of threads, ramp-up time, and loop count."
              ),
            ]),
          ]),
        ]),
        _v(" "),
        _c("li", [
          _c("p", [_c("strong", [_v("Configure Sampler")]), _v(":")]),
          _v(" "),
          _c("ul", [
            _c("li", [_v("Add HTTP request samplers to simulate user requests to the server.")]),
            _v(" "),
            _c("li", [_v("Configure samplers with the appropriate HTTP methods, paths, parameters, etc.")]),
          ]),
        ]),
        _v(" "),
        _c("li", [
          _c("p", [_c("strong", [_v("Add Listeners")]), _v(":")]),
          _v(" "),
          _c("ul", [
            _c("li", [
              _v(
                "Include listeners to collect and analyze test results, such as Aggregate Report, Summary Report, or View Results Tree."
              ),
            ]),
          ]),
        ]),
        _v(" "),
        _c("li", [
          _c("p", [_c("strong", [_v("Run the Test")]), _v(":")]),
          _v(" "),
          _c("ul", [
            _c("li", [_v("Start the test plan to execute the load test.")]),
            _v(" "),
            _c("li", [_v("Monitor the test progress and analyze the results using JMeter's built-in listeners.")]),
          ]),
        ]),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("h2", { attrs: { id: "load-test-analysis" } }, [
        _v("Load Test Analysis"),
        _c("a", {
          staticClass: "fa fa-anchor",
          attrs: { href: "#load-test-analysis", onclick: "event.stopPropagation()" },
        }),
      ]);
    }
  },
  function anonymous() {
    with (this) {
      return _c("ul", [
        _c("li", [
          _c("strong", [_v("Response Times")]),
          _v(
            ": Evaluate the average response time, latency, and throughput of requests to assess server performance."
          ),
        ]),
        _v(" "),
        _c("li", [
          _c("strong", [_v("Error Rate")]),
          _v(": Identify and analyze any errors or failures encountered during the load test."),
        ]),
        _v(" "),
        _c("li", [
          _c("strong", [_v("Resource Utilization")]),
          _v(": Monitor server resources such as CPU, memory, and network usage to identify potential bottlenecks."),
        ]),
        _v(" "),
        _c("li", [
          _c("strong", [_v("Scalability")]),
          _v(
            ": Determine how the application scales under increasing loads and identify any performance limitations."
          ),
        ]),
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
