angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("app/styles/tests/buttons.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Buttons &middot; Bootstrap</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Le styles -->\n" +
    "    <link href=\"../../docs/assets/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <style>\n" +
    "      body {\n" +
    "        padding-top: 30px;\n" +
    "        padding-bottom: 30px;\n" +
    "      }\n" +
    "    </style>\n" +
    "    <link href=\"../../docs/assets/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Le fav and touch icons -->\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"../../docs/assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"../../docs/assets/ico/apple-touch-icon-114-precomposed.png\">\n" +
    "      <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"../../docs/assets/ico/apple-touch-icon-72-precomposed.png\">\n" +
    "                    <link rel=\"apple-touch-icon-precomposed\" href=\"../../docs/assets/ico/apple-touch-icon-57-precomposed.png\">\n" +
    "                                   <link rel=\"shortcut icon\" href=\"../../docs/assets/ico/favicon.png\">\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <h2>Dropups</h2>\n" +
    "      <div class=\"btn-toolbar\">\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn\">Dropup</button>\n" +
    "          <button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-primary\">Dropup</button>\n" +
    "          <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-danger\">Dropup</button>\n" +
    "          <button class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-warning\">Dropup</button>\n" +
    "          <button class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-success\">Dropup</button>\n" +
    "          <button class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-info\">Dropup</button>\n" +
    "          <button class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-inverse\">Dropup</button>\n" +
    "          <button class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "      </div><!-- /btn-toolbar -->\n" +
    "\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "    <!-- Le javascript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"../../docs/assets/js/jquery.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-transition.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-alert.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-modal.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-dropdown.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-scrollspy.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tab.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tooltip.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-popover.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-button.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-collapse.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-carousel.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-typeahead.js\"></script>\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );

  $templateCache.put("app/styles/tests/css-tests.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>CSS Tests · Twitter Bootstrap</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Le styles -->\n" +
    "    <link href=\"../../docs/assets/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <link href=\"../../docs/assets/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n" +
    "    <link href=\"../../docs/assets/css/docs.css\" rel=\"stylesheet\">\n" +
    "    <link href=\"../../docs/assets/js/google-code-prettify/prettify.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- CSS just for the tests page -->\n" +
    "    <link href=\"css-tests.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Le fav and touch icons -->\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"../../docs/assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"../../docs/assets/ico/apple-touch-icon-114-precomposed.png\">\n" +
    "      <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"../../docs/assets/ico/apple-touch-icon-72-precomposed.png\">\n" +
    "                    <link rel=\"apple-touch-icon-precomposed\" href=\"../../docs/assets/ico/apple-touch-icon-57-precomposed.png\">\n" +
    "                                   <link rel=\"shortcut icon\" href=\"../../docs/assets/ico/favicon.png\">\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "\n" +
    "  <!-- Navbar\n" +
    "    ================================================== -->\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
    "      <div class=\"navbar-inner\">\n" +
    "        <div class=\"container\">\n" +
    "          <a class=\"brand\" href=\"../../docs/index.html\">Bootstrap</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "<!-- Masthead\n" +
    "================================================== -->\n" +
    "<header class=\"jumbotron subhead\" id=\"overview\">\n" +
    "  <div class=\"container\">\n" +
    "    <h1>CSS Tests</h1>\n" +
    "    <p class=\"lead\">One stop shop for quick debugging and edge-case tests of CSS.</p>\n" +
    "  </div>\n" +
    "</header>\n" +
    "\n" +
    "\n" +
    "<div class=\"bs-docs-canvas\">\n" +
    "\n" +
    "  <div class=\"container\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Typography\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Typography</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"span6\">\n" +
    "    <div class=\"type-test\">\n" +
    "      <h1>h1. Heading 1</h1>\n" +
    "      <h2>h2. Heading 2</h2>\n" +
    "      <h3>h3. Heading 3</h3>\n" +
    "      <h4>h4. Heading 4</h4>\n" +
    "      <h5>h5. Heading 5</h5>\n" +
    "      <h6>h6. Heading 6</h6>\n" +
    "      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"span6\">\n" +
    "    <div class=\"type-test\">\n" +
    "      <h1>h1. Heading 1</h1>\n" +
    "      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "      <h2>h2. Heading 2</h2>\n" +
    "      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "      <h3>h3. Heading 3</h3>\n" +
    "      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "      <h4>h4. Heading 4</h4>\n" +
    "      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "      <h5>h5. Heading 5</h5>\n" +
    "      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "      <h6>h6. Heading 6</h6>\n" +
    "      <p>Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Responsive images\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Responsive images</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"span4\">\n" +
    "    <img data-src=\"holder.js/600x600\" height=\"200\">\n" +
    "  </div>\n" +
    "  <div class=\"span4\">\n" +
    "    <img data-src=\"holder.js/600x600\">\n" +
    "  </div>\n" +
    "  <div class=\"span4\">\n" +
    "    <img data-src=\"holder.js/600x600\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"span4\">\n" +
    "    <img data-src=\"holder.js/600x900\" style=\"width: 200px;\">\n" +
    "  </div>\n" +
    "  <div class=\"span4\">\n" +
    "    <img data-src=\"holder.js/200x300\">\n" +
    "  </div>\n" +
    "  <div class=\"span4\">\n" +
    "    <img data-src=\"holder.js/600x600\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<br><br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Fluid grid\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Fluid grids</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"fluid-grid\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">12\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span11\">11\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span1\">1\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span10\">10\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span2\">2\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span9\">9\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span3\">3\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span8\">8\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">4\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span7\">7\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span5\">5\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span6\">6\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span6\">6\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "        <div class=\"span1\">1</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div> <!-- fluid grids -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Tables\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Tables</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"span6\">\n" +
    "    <h4>Bordered without thead</h4>\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "    <h4>Bordered without thead, with caption</h4>\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <caption>Table caption</caption>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "    <h4>Bordered without thead, with colgroup</h4>\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <colgroup>\n" +
    "        <col class=\"col1\">\n" +
    "        <col class=\"col2\">\n" +
    "        <col class=\"col3\">\n" +
    "      </colgroup>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "      <tfoot>\n" +
    "        <tr>\n" +
    "          <td>3</td>\n" +
    "          <td>6</td>\n" +
    "          <td>9</td>\n" +
    "        </tr>\n" +
    "      </tfoot>\n" +
    "    </table>\n" +
    "    <h4>Bordered with thead, with colgroup</h4>\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <colgroup>\n" +
    "        <col class=\"col1\">\n" +
    "        <col class=\"col2\">\n" +
    "        <col class=\"col3\">\n" +
    "      </colgroup>\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>A</th>\n" +
    "          <th>B</th>\n" +
    "          <th>C</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "      <tfoot>\n" +
    "        <tr>\n" +
    "          <td>3</td>\n" +
    "          <td>6</td>\n" +
    "          <td>9</td>\n" +
    "        </tr>\n" +
    "      </tfoot>\n" +
    "    </table>\n" +
    "  </div><!--/span-->\n" +
    "  <div class=\"span6\">\n" +
    "    <h4>Bordered with thead and caption</h4>\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <caption>Table caption</caption>\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>1</th>\n" +
    "          <th>2</th>\n" +
    "          <th>3</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td>2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "      <tfoot>\n" +
    "        <tr>\n" +
    "          <td>3</td>\n" +
    "          <td>6</td>\n" +
    "          <td>9</td>\n" +
    "        </tr>\n" +
    "      </tfoot>\n" +
    "    </table>\n" +
    "    <h4>Bordered with rowspan and colspan</h4>\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>1</th>\n" +
    "          <th>2</th>\n" +
    "          <th>3</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td colspan=\"2\">1 and 2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td rowspan=\"2\">2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td rowspan=\"2\">1</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td colspan=\"2\">2 and 3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div><!--/span-->\n" +
    "</div><!--/row-->\n" +
    "\n" +
    "\n" +
    "<h4>Grid sizing</h4>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"span12\">\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th class=\"span3\">1</th>\n" +
    "          <th class=\"span4\">2</th>\n" +
    "          <th>3</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td colspan=\"2\">1 and 2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td rowspan=\"2\">2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td rowspan=\"2\">1</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td colspan=\"2\">2 and 3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div><!--/row-->\n" +
    "\n" +
    "<h4>Nesting and striping</h4>\n" +
    "<table class=\"table table-bordered table-striped\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th>Test</th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>\n" +
    "        <table class=\"table table-bordered table-striped\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th>Test</th>\n" +
    "              <th>Test</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "                test\n" +
    "              </td>\n" +
    "              <td>\n" +
    "                test\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "                test\n" +
    "              </td>\n" +
    "              <td>\n" +
    "                test\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "                test\n" +
    "              </td>\n" +
    "              <td>\n" +
    "                test\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<h4>Fluid grid sizing</h4>\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span12\">\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th class=\"span3\">1</th>\n" +
    "          <th class=\"span4\">2</th>\n" +
    "          <th>3</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td colspan=\"2\">1 and 2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>1</td>\n" +
    "          <td rowspan=\"2\">2</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td rowspan=\"2\">1</td>\n" +
    "          <td>3</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td colspan=\"2\">2 and 3</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div><!--/row-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Forms\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Forms</h1>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Buttons and button groups</h4>\n" +
    "<form class=\"form-inline\">\n" +
    "  <button class=\"btn btn-success\">Save</button>\n" +
    "  <button class=\"btn btn-info\">Add new</button>\n" +
    "  <div class=\"btn-group\">\n" +
    "    <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "      <i class=\"icon-user\"></i> User\n" +
    "      <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      <li><a href=\"#\">Profile</a></li>\n" +
    "      <li class=\"divider\"></li>\n" +
    "      <li><a href=\"#\">Sign Out</a></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</form>\n" +
    "\n" +
    "<h4>Horizontal form errors</h4>\n" +
    "<form class=\"form-horizontal\">\n" +
    "  <div class=\"control-group error\">\n" +
    "    <label class=\"control-label\" for=\"inputError\">Radio with error</label>\n" +
    "    <div class=\"controls\">\n" +
    "      <label class=\"radio\">\n" +
    "        <input type=\"radio\" id=\"inputError\"> Oh hai\n" +
    "      </label>\n" +
    "      <span class=\"help-inline\">Please correct the error</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"span4\">\n" +
    "    <h4>Prepend and append on inputs</h4>\n" +
    "    <form>\n" +
    "      <div class=\"controls\">\n" +
    "        <div class=\"input-prepend\">\n" +
    "          <span class=\"add-on\">@</span>\n" +
    "          <input class=\"span2\" id=\"prependedInput\" size=\"16\" type=\"text\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"controls\">\n" +
    "        <div class=\"input-append\">\n" +
    "          <input class=\"span2\" id=\"prependedInput\" size=\"16\" type=\"text\">\n" +
    "          <span class=\"add-on\">@</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"controls\">\n" +
    "        <div class=\"input-prepend input-append\">\n" +
    "          <span class=\"add-on\">$</span>\n" +
    "          <input class=\"span2\" id=\"prependedInput\" size=\"16\" type=\"text\">\n" +
    "          <span class=\"add-on\">.00</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div><!--/span-->\n" +
    "  <div class=\"span4\">\n" +
    "    <h4>Prepend and append with uneditable</h4>\n" +
    "    <form>\n" +
    "      <div class=\"input-prepend\">\n" +
    "        <span class=\"add-on\">$</span>\n" +
    "        <span class=\"span2 uneditable-input\">Some value here</span>\n" +
    "      </div>\n" +
    "      <div class=\"input-append\">\n" +
    "        <span class=\"span2 uneditable-input\">Some value here</span>\n" +
    "        <span class=\"add-on\">.00</span>\n" +
    "      </div>\n" +
    "      <div class=\"input-prepend input-append\">\n" +
    "        <span class=\"add-on\">$</span>\n" +
    "        <span class=\"span2 uneditable-input\">Some value here</span>\n" +
    "        <span class=\"add-on\">.00</span>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div><!--/span-->\n" +
    "  <div class=\"span4\">\n" +
    "    <h4>Prepend with type=\"submit\"</h4>\n" +
    "    <form class=\"form-search\">\n" +
    "      <div class=\"input-append\">\n" +
    "        <input type=\"text\" class=\"span2 search-query\" value=\"\" name=\"q\">\n" +
    "        <input type=\"submit\" value=\"Search\" class=\"btn\">\n" +
    "      </div>\n" +
    "    </form>\n" +
    "    <div class=\"input-append\">\n" +
    "      <input type=\"text\" class=\"span2\" value=\"\" name=\"\">\n" +
    "      <input type=\"submit\" value=\"Button\" class=\"btn\">\n" +
    "    </div>\n" +
    "    <div class=\"input-append\">\n" +
    "      <input type=\"text\" size=\"16\" id=\"appendedInputButtons\" class=\"span2\">\n" +
    "      <input type=\"submit\" value=\"Search\" class=\"btn\">\n" +
    "      <button type=\"button\" class=\"btn\">Options</button>\n" +
    "    </div>\n" +
    "  </div><!--/span-->\n" +
    "</div><!--/row-->\n" +
    "\n" +
    "<h4>Fluid prepended and appended inputs</h4>\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span6\">\n" +
    "    <form>\n" +
    "      <div class=\"controls\">\n" +
    "        <div class=\"input-prepend\">\n" +
    "          <span class=\"add-on\">@</span><input class=\"span2\" id=\"prependedInput\" size=\"16\" type=\"text\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"controls\">\n" +
    "        <div class=\"input-append\">\n" +
    "          <input class=\"span2\" id=\"prependedInput\" size=\"16\" type=\"text\"><span class=\"add-on\">@</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"controls\">\n" +
    "        <div class=\"input-prepend input-append\">\n" +
    "          <span class=\"add-on\">$</span><input class=\"span2\" id=\"prependedInput\" size=\"16\" type=\"text\"><span class=\"add-on\">.00</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Fixed row with inputs</h4>\n" +
    "<p>Inputs should not extend past the light red background, set on their parent, a <code>.span*</code> column.</p>\n" +
    "\n" +
    "<div class=\"rowInputs\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span1\" placeholder=\"span1\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span2\" placeholder=\"span2\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span3\" placeholder=\"span3\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span4\" placeholder=\"span4\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span5\" placeholder=\"span5\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span6\" placeholder=\"span6\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span7\" placeholder=\"span7\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span8\" placeholder=\"span8\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span9\" placeholder=\"span9\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span10\" placeholder=\"span10\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span11\" placeholder=\"span11\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span12\" placeholder=\"span12\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "</div>\n" +
    "<br>\n" +
    "\n" +
    "<h4>Fluid row with inputs</h4>\n" +
    "<p>Inputs should not extend past the light red background, set on their parent, a <code>.span*</code> column.</p>\n" +
    "<div id=\"fluidRowInputs\">\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span1\" placeholder=\"span1\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span2\" placeholder=\"span2\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span3\" placeholder=\"span3\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span4\" placeholder=\"span4\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span5\" placeholder=\"span5\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span6\" placeholder=\"span6\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span7\" placeholder=\"span7\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span8\" placeholder=\"span8\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span9\" placeholder=\"span9\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span10\" placeholder=\"span10\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span11\" placeholder=\"span11\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span12\">\n" +
    "      <input type=\"text\" class=\"span12\" placeholder=\"span12\">\n" +
    "    </div><!--/span-->\n" +
    "  </div><!--/row-->\n" +
    "</div>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "<h4>Inline form in fluid row</h4>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span12\">\n" +
    "    <form class=\"form-inline\">\n" +
    "      <input type=\"text\" class=\"span3\" placeholder=\"Email\">\n" +
    "      <input type=\"password\" class=\"span3\" placeholder=\"Password\">\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\"> Remember me\n" +
    "      </label>\n" +
    "      <button type=\"submit\" class=\"btn\">Sign in</button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "<h4>Fluid textarea at .span12</h4>\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span12\">\n" +
    "    <textarea class=\"span12\"></textarea>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "<h4>Selects</h4>\n" +
    "<form>\n" +
    "  <select class=\"span4\">\n" +
    "    <option>Option</option>\n" +
    "  </select>\n" +
    "</form>\n" +
    "\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Dropdowns\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Dropdowns</h1>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Dropdown link with hash URL</h4>\n" +
    "<ul class=\"nav nav-pills\">\n" +
    "  <li class=\"active\"><a href=\"#\">Link</a></li>\n" +
    "  <li><a href=\"#\">Example link</a></li>\n" +
    "  <li class=\"dropdown\">\n" +
    "    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "      Dropdown <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      <li><a href=\"#\">Action</a></li>\n" +
    "      <li><a href=\"#\">Another action</a></li>\n" +
    "      <li><a href=\"#\">Something else here</a></li>\n" +
    "      <li class=\"divider\"></li>\n" +
    "      <li><a href=\"#\">Separated link</a></li>\n" +
    "    </ul>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<h4>Dropdown link with custom URL and data-target</h4>\n" +
    "<ul class=\"nav nav-pills\">\n" +
    "  <li class=\"active\"><a href=\"#\">Link</a></li>\n" +
    "  <li><a href=\"#\">Example link</a></li>\n" +
    "  <li class=\"dropdown\">\n" +
    "    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-target=\"#\" href=\"path/to/page.html\">\n" +
    "      Dropdown <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      <li><a href=\"#\">Action</a></li>\n" +
    "      <li><a href=\"#\">Another action</a></li>\n" +
    "      <li><a href=\"#\">Something else here</a></li>\n" +
    "      <li class=\"divider\"></li>\n" +
    "      <li><a href=\"#\">Separated link</a></li>\n" +
    "    </ul>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<h4>Dropdown on a button</h4>\n" +
    "<div style=\"position: relative;\">\n" +
    "  <button class=\"btn\" type=\"button\" data-toggle=\"dropdown\">Dropdown <span class=\"caret\"></span></button>\n" +
    "  <ul class=\"dropdown-menu\">\n" +
    "    <li><a href=\"#\">Action</a></li>\n" +
    "    <li><a href=\"#\">Another action</a></li>\n" +
    "    <li><a href=\"#\">Something else here</a></li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li><a href=\"#\">Separated link</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "<!-- Thumbnails\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Thumbnails</h1>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Default thumbnails (no grid sizing)</h4>\n" +
    "<ul class=\"thumbnails\">\n" +
    "  <li class=\"thumbnail\">\n" +
    "    <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "  </li>\n" +
    "  <li class=\"thumbnail\">\n" +
    "    <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "  </li>\n" +
    "  <li class=\"thumbnail\">\n" +
    "    <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "  </li>\n" +
    "  <li class=\"thumbnail\">\n" +
    "    <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<!-- NOT CURRENTLY SUPPORTED\n" +
    "<h4>Offset thumbnails</h4>\n" +
    "<ul class=\"thumbnails\">\n" +
    "  <li class=\"span3 offset3\">\n" +
    "    <a href=\"#\" class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"span3\">\n" +
    "    <a href=\"#\" class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"span3\">\n" +
    "    <a href=\"#\" class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "    </a>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "-->\n" +
    "\n" +
    "<h4>Standard grid sizing</h4>\n" +
    "<ul class=\"thumbnails\">\n" +
    "  <li class=\"span3\">\n" +
    "    <a href=\"#\" class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"span3 offset3\">\n" +
    "    <a href=\"#\" class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"span3\">\n" +
    "    <a href=\"#\" class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "    </a>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<h4>Fluid thumbnails</h4>\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span8\">\n" +
    "    <ul class=\"thumbnails\">\n" +
    "      <li class=\"span4\">\n" +
    "        <a href=\"#\" class=\"thumbnail\">\n" +
    "          <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "        </a>\n" +
    "      </li>\n" +
    "      <li class=\"span4\">\n" +
    "        <a href=\"#\" class=\"thumbnail\">\n" +
    "          <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "        </a>\n" +
    "      </li>\n" +
    "      <li class=\"span4\">\n" +
    "        <a href=\"#\" class=\"thumbnail\">\n" +
    "          <img data-src=\"holder.js/260x180\" alt=\"\">\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Tabs\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Tabs</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"tabbable tabs-left\" style=\"margin-bottom: 18px;\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Section 1</a></li>\n" +
    "    <li><a href=\"#tab2\" data-toggle=\"tab\">Section 2</a></li>\n" +
    "    <li><a href=\"#tab3\" data-toggle=\"tab\">Section 3</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"tab-content\" style=\"padding-bottom: 9px; border-bottom: 1px solid #ddd;\">\n" +
    "    <div class=\"tab-pane active\" id=\"tab1\">\n" +
    "      <p>I'm in Section 1.</p>\n" +
    "\n" +
    "      <div class=\"tabbable\" style=\"background: #f5f5f5; padding: 20px;\">\n" +
    "        <ul class=\"nav nav-tabs\">\n" +
    "          <li class=\"active\"><a href=\"#tab1-1\" data-toggle=\"tab\">1.1</a></li>\n" +
    "          <li><a href=\"#tab1-2\" data-toggle=\"tab\">1.2</a></li>\n" +
    "          <li><a href=\"#tab1-3\" data-toggle=\"tab\">1.3</a></li>\n" +
    "        </ul>\n" +
    "        <div class=\"tab-content\" style=\"padding-bottom: 9px; border-bottom: 1px solid #ddd;\">\n" +
    "          <div class=\"tab-pane active\" id=\"tab1-1\">\n" +
    "            <p>I'm in Section 1.1.</p>\n" +
    "          </div>\n" +
    "          <div class=\"tab-pane\" id=\"tab1-2\">\n" +
    "            <p>I'm in Section 1.2.</p>\n" +
    "          </div>\n" +
    "          <div class=\"tab-pane\" id=\"tab1-3\">\n" +
    "            <p>I'm in Section 1.3.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"tab-pane\" id=\"tab2\">\n" +
    "      <p>Howdy, I'm in Section 2.</p>\n" +
    "    </div>\n" +
    "    <div class=\"tab-pane\" id=\"tab3\">\n" +
    "      <p>What up girl, this is Section 3.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div> <!-- /tabbable -->\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "<!-- Labels\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Labels</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"span4\">\n" +
    "    <h4>Inline label</h4>\n" +
    "    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam <span class=\"label label-warning\">Label name</span> eget risus varius blandit sit amet non magna. Fusce <code>.class-name</code> dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n" +
    "  </div><!--/span-->\n" +
    "  <div class=\"span4\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "      <label>Example label</label>\n" +
    "      <input type=\"text\" placeholder=\"Input\"> <span class=\"help-inline\"><span class=\"label\">Hey!</span> Read this.</span>\n" +
    "    </form>\n" +
    "  </div><!--/span-->\n" +
    "  <div class=\"span4\">\n" +
    "    <button class=\"btn\">Action <span class=\"badge\">2</span></button>\n" +
    "    <button class=\"btn\">Action <span class=\"label\">2</span></button>\n" +
    "  </div><!--/span-->\n" +
    "</div><!--/row-->\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "<!-- Button groups\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Buttons</h1>\n" +
    "</div>\n" +
    "\n" +
    "<table class=\"table table-bordered\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>\n" +
    "        Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n" +
    "      </td>\n" +
    "      <td>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button class=\"btn\">1</button>\n" +
    "          <button class=\"btn\">2</button>\n" +
    "          <button class=\"btn\">3</button>\n" +
    "          <button class=\"btn\">4</button>\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<h4>Mini buttons: text and icon</h4>\n" +
    "<div class=\"btn-group\">\n" +
    "  <button class=\"btn btn-mini\">Button text</button>\n" +
    "  <button class=\"btn btn-mini\"><i class=\"icon-cog\"></i></button>\n" +
    "</div>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Responsive utility classes\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Responsive utility classes</h1>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Visible on...</h4>\n" +
    "<ul class=\"responsive-utilities-test visible-on\">\n" +
    "  <li>Phone<span class=\"visible-phone\">✔ Phone</span></li>\n" +
    "  <li>Tablet<span class=\"visible-tablet\">✔ Tablet</span></li>\n" +
    "  <li>Desktop<span class=\"visible-desktop\">✔ Desktop</span></li>\n" +
    "</ul>\n" +
    "<ul class=\"responsive-utilities-test visible-on\">\n" +
    "  <li>Phone + Tablet<span class=\"visible-phone visible-tablet\">✔ Phone + Tablet</span></li>\n" +
    "  <li>Tablet + Desktop<span class=\"visible-tablet visible-desktop\">✔ Tablet + Desktop</span></li>\n" +
    "  <li>All<span class=\"visible-phone visible-tablet visible-desktop\">✔ All</span></li>\n" +
    "</ul>\n" +
    "\n" +
    "<h4>Hidden on...</h4>\n" +
    "<ul class=\"responsive-utilities-test hidden-on\">\n" +
    "  <li>Phone<span class=\"hidden-phone\">✔ Phone</span></li>\n" +
    "  <li>Tablet<span class=\"hidden-tablet\">✔ Tablet</span></li>\n" +
    "  <li>Desktop<span class=\"hidden-desktop\">✔ Desktop</span></li>\n" +
    "</ul>\n" +
    "<ul class=\"responsive-utilities-test hidden-on\">\n" +
    "  <li>Phone + Tablet<span class=\"hidden-phone hidden-tablet\">✔ Phone + Tablet</span></li>\n" +
    "  <li>Tablet + Desktop<span class=\"hidden-tablet hidden-desktop\">✔ Tablet + Desktop</span></li>\n" +
    "  <li>All<span class=\"hidden-phone hidden-tablet hidden-desktop\">✔ All</span></li>\n" +
    "</ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Gradients\n" +
    "================================================== -->\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Gradients</h1>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Horizontal</h4>\n" +
    "<div class=\"gradient-horizontal\"></div>\n" +
    "\n" +
    "<h4>Vertical</h4>\n" +
    "<div class=\"gradient-vertical\"></div>\n" +
    "\n" +
    "<h4>Directional</h4>\n" +
    "<div class=\"gradient-directional\"></div>\n" +
    "\n" +
    "<h4>Three colors</h4>\n" +
    "<div class=\"gradient-vertical-three\"></div>\n" +
    "\n" +
    "<h4>Radial</h4>\n" +
    "<div class=\"gradient-radial\"></div>\n" +
    "\n" +
    "<h4>Striped</h4>\n" +
    "<div class=\"gradient-striped\"></div>\n" +
    "\n" +
    "<h4>Horizontal three colors</h4>\n" +
    "<div class=\"gradient-horizontal-three\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Alerts</h1>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Alert default</h4>\n" +
    "<div class=\"alert\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <strong>Alert!</strong> Best check yourself, you're not looking too good.\n" +
    "</div>\n" +
    "<div class=\"alert alert-block\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <p><strong>Alert!</strong> Best check yourself, you're not looking too good.</p>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Success</h4>\n" +
    "<div class=\"alert alert-success\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <strong>Success!</strong> Best check yourself, you're not looking too good.\n" +
    "</div>\n" +
    "<div class=\"alert alert-block alert-success\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <p><strong>Success!</strong> Best check yourself, you're not looking too good.</p>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Info</h4>\n" +
    "<div class=\"alert alert-info\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <strong>Info!</strong> Best check yourself, you're not looking too good.\n" +
    "</div>\n" +
    "<div class=\"alert alert-block alert-info\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <p><strong>Info!</strong> Best check yourself, you're not looking too good.</p>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Warning</h4>\n" +
    "<div class=\"alert \">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <strong>Warning!</strong> Best check yourself, you're not looking too good.\n" +
    "</div>\n" +
    "<div class=\"alert alert-block alert-warning\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <p><strong>Warning!</strong> Best check yourself, you're not looking too good.</p>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Error</h4>\n" +
    "<div class=\"alert alert-error\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <strong>Error!</strong> Best check yourself, you're not looking too good.\n" +
    "</div>\n" +
    "<div class=\"alert alert-block alert-error\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
    "  <p><strong>Error!</strong> Best check yourself, you're not looking too good.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "    </div><!-- /container -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!-- Footer\n" +
    "    ================================================== -->\n" +
    "    <footer class=\"footer\">\n" +
    "      <div class=\"container\">\n" +
    "        <p class=\"pull-right\"><a href=\"#\">Back to top</a></p>\n" +
    "        <p>Designed and built with all the love in the world <a href=\"http://twitter.com/twitter\" target=\"_blank\">@twitter</a> by <a href=\"http://twitter.com/mdo\" target=\"_blank\">@mdo</a> and <a href=\"http://twitter.com/fat\" target=\"_blank\">@fat</a>.</p>\n" +
    "        <p>Code licensed under the <a href=\"http://www.apache.org/licenses/LICENSE-2.0\" target=\"_blank\">Apache License v2.0</a>. Documentation licensed under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC BY 3.0</a>.</p>\n" +
    "        <p>Icons from <a href=\"http://glyphicons.com\">Glyphicons Free</a>, licensed under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC BY 3.0</a>.</p>\n" +
    "        <ul class=\"footer-links\">\n" +
    "          <li><a href=\"http://blog.getbootstrap.com\">Read the blog</a></li>\n" +
    "          <li><a href=\"https://github.com/twitter/bootstrap/issues?state=open\">Submit issues</a></li>\n" +
    "          <li><a href=\"https://github.com/twitter/bootstrap/wiki\">Roadmap and changelog</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </footer>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "    <!-- Le javascript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script type=\"text/javascript\" src=\"http://platform.twitter.com/widgets.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/jquery.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/google-code-prettify/prettify.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-transition.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-alert.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-modal.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-dropdown.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-scrollspy.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tab.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tooltip.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-popover.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-button.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-collapse.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-carousel.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-typeahead.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/application.js\"></script>\n" +
    "\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );

  $templateCache.put("app/styles/tests/forms-responsive.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Bootstrap, from Twitter</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Le styles -->\n" +
    "    <link href=\"../../docs/assets/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <link href=\"../../docs/assets/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n" +
    "    <style>\n" +
    "      body {\n" +
    "        padding-top: 30px;\n" +
    "        padding-bottom: 30px;\n" +
    "      }\n" +
    "    </style>\n" +
    "\n" +
    "    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Le fav and touch icons -->\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"../../docs/assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"../../docs/assets/ico/apple-touch-icon-114-precomposed.png\">\n" +
    "      <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"../../docs/assets/ico/apple-touch-icon-72-precomposed.png\">\n" +
    "                    <link rel=\"apple-touch-icon-precomposed\" href=\"../../docs/assets/ico/apple-touch-icon-57-precomposed.png\">\n" +
    "                                   <link rel=\"shortcut icon\" href=\"../../docs/assets/ico/favicon.png\">\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <form class=\"container\">\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Fixed grid</h1>\n" +
    "      </div>\n" +
    "\n" +
    "      <h3>Vertical alignment</h3>\n" +
    "      <input type=\"text\" class=\"span2\" placeholder=\"span2\">\n" +
    "      <select class=\"span2\"><option>span2</option></select>\n" +
    "      <span class=\"uneditable-input span2\">span1</span>\n" +
    "\n" +
    "      <h3>Width across elements</h3>\n" +
    "      <div>\n" +
    "        <input type=\"text\" class=\"span2\" placeholder=\"span2\">\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <select class=\"span2\"><option>span2</option></select>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <span class=\"uneditable-input span2\">span2</span>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Fluid grid</h1>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <input type=\"text\" class=\"span2\" placeholder=\"span2\">\n" +
    "        <select class=\"span2\"><option>span2</option></select>\n" +
    "        <span class=\"uneditable-input span2\">span1</span>\n" +
    "      </div>\n" +
    "\n" +
    "    </form> <!-- /container -->\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );

  $templateCache.put("app/styles/tests/forms.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Bootstrap, from Twitter</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Le styles -->\n" +
    "    <link href=\"../../docs/assets/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <link href=\"../../docs/assets/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n" +
    "    <style>\n" +
    "      body {\n" +
    "        padding-top: 30px;\n" +
    "        padding-bottom: 30px;\n" +
    "      }\n" +
    "    </style>\n" +
    "\n" +
    "    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Le fav and touch icons -->\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs/assets/ico/favicon.ico\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"../../docs/assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"../../docs/assets/ico/apple-touch-icon-114-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"../../docs/assets/ico/apple-touch-icon-72-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" href=\"../../docs/assets/ico/apple-touch-icon-57-precomposed.png\">\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <form class=\"container\">\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Form controls</h1>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"span4\">\n" +
    "\n" +
    "          <label>Select</label>\n" +
    "          <select>\n" +
    "            <option>Select</option>\n" +
    "            <option>Option 2</option>\n" +
    "            <option>Option 3</option>\n" +
    "          </select>\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>textarea</label>\n" +
    "          <textarea>Textarea</textarea>\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>text</label>\n" +
    "          <input type=\"text\" value=\"Text input\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>password</label>\n" +
    "          <input type=\"password\" value=\"Password input\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>checkbox</label>\n" +
    "          <input type=\"checkbox\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>radio</label>\n" +
    "          <input type=\"radio\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>button</label>\n" +
    "          <input type=\"button\" value=\"Button\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>submit</label>\n" +
    "          <input type=\"submit\" value=\"Submit\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>reset</label>\n" +
    "          <input type=\"reset\" value=\"Reset\">\n" +
    "\n" +
    "        </div><!-- /span4 -->\n" +
    "        <div class=\"span4\">\n" +
    "\n" +
    "          <label>file</label>\n" +
    "          <input type=\"file\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>hidden</label>\n" +
    "          <input type=\"hidden\" value=\"hidden\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>image</label>\n" +
    "          <input type=\"image\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>datetime</label>\n" +
    "          <input type=\"datetime\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>datetime-local</label>\n" +
    "          <input type=\"datetime-local\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>date</label>\n" +
    "          <input type=\"date\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>month</label>\n" +
    "          <input type=\"month\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>time</label>\n" +
    "          <input type=\"time\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>week</label>\n" +
    "          <input type=\"week\" value=\"\">\n" +
    "\n" +
    "        </div><!-- /span4 -->\n" +
    "        <div class=\"span4\">\n" +
    "\n" +
    "          <label>number</label>\n" +
    "          <input type=\"number\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>range</label>\n" +
    "          <input type=\"range\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>email</label>\n" +
    "          <input type=\"email\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>url</label>\n" +
    "          <input type=\"url\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>search</label>\n" +
    "          <input type=\"search\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>tel</label>\n" +
    "          <input type=\"tel\" value=\"\">\n" +
    "\n" +
    "          <hr>\n" +
    "\n" +
    "          <label>color</label>\n" +
    "          <input type=\"color\" value=\"\">\n" +
    "\n" +
    "        </div><!-- /span4 -->\n" +
    "      </div><!-- /row -->\n" +
    "\n" +
    "    </form> <!-- /container -->\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );

  $templateCache.put("app/styles/tests/navbar-fixed-top.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Bootstrap, from Twitter</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Le styles -->\n" +
    "    <link href=\"../../docs/assets/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <style>\n" +
    "      body {\n" +
    "        padding-top: 60px;\n" +
    "        padding-bottom: 30px;\n" +
    "      }\n" +
    "    </style>\n" +
    "    <link href=\"../../docs/assets/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Le fav and touch icons -->\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"../../docs/assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"../../docs/assets/ico/apple-touch-icon-114-precomposed.png\">\n" +
    "      <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"../../docs/assets/ico/apple-touch-icon-72-precomposed.png\">\n" +
    "                    <link rel=\"apple-touch-icon-precomposed\" href=\"../../docs/assets/ico/apple-touch-icon-57-precomposed.png\">\n" +
    "                                   <link rel=\"shortcut icon\" href=\"../../docs/assets/ico/favicon.png\">\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Fixed navbar -->\n" +
    "    <div class=\"navbar navbar-fixed-top\">\n" +
    "      <div class=\"navbar-inner\">\n" +
    "        <div class=\"container\">\n" +
    "          <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </a>\n" +
    "          <a class=\"brand\" href=\"#\">Project name</a>\n" +
    "          <div class=\"nav-collapse collapse\">\n" +
    "            <ul class=\"nav\">\n" +
    "              <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "              <li><a href=\"#about\">About</a></li>\n" +
    "              <li><a href=\"#contact\">Contact</a></li>\n" +
    "              <li class=\"dropdown\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                  <li><a href=\"#\">Action</a></li>\n" +
    "                  <li><a href=\"#\">Another action</a></li>\n" +
    "                  <li><a href=\"#\">Something else here</a></li>\n" +
    "                  <li class=\"divider\"></li>\n" +
    "                  <li class=\"nav-header\">Nav header</li>\n" +
    "                  <li><a href=\"#\">Separated link</a></li>\n" +
    "                  <li><a href=\"#\">One more separated link</a></li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav pull-right\">\n" +
    "              <li><a href=\"./navbar.html\">Default</a></li>\n" +
    "              <li><a href=\"./navbar-static-top.html\">Static top</a></li>\n" +
    "              <li class=\"active\"><a href=\"./navbar-fixed-top.html\">Fixed top</a></li>\n" +
    "            </ul>\n" +
    "          </div><!--/.nav-collapse -->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <!-- Main hero unit for a primary marketing message or call to action -->\n" +
    "      <div class=\"hero-unit\">\n" +
    "        <h1>Navbar example</h1>\n" +
    "        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-large btn-primary\" href=\"../components.html#navbar\">View navbar docs &raquo;</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "    <!-- Le javascript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"../../docs/assets/js/jquery.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-transition.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-alert.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-modal.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-dropdown.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-scrollspy.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tab.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tooltip.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-popover.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-button.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-collapse.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-carousel.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-typeahead.js\"></script>\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );

  $templateCache.put("app/styles/tests/navbar-static-top.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Bootstrap, from Twitter</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Le styles -->\n" +
    "    <link href=\"../../docs/assets/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <style>\n" +
    "      body {\n" +
    "        padding-bottom: 30px;\n" +
    "      }\n" +
    "      .hero-unit {\n" +
    "        margin-top: 20px;\n" +
    "      }\n" +
    "    </style>\n" +
    "    <link href=\"../../docs/assets/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Le fav and touch icons -->\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"../../docs/assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"../../docs/assets/ico/apple-touch-icon-114-precomposed.png\">\n" +
    "      <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"../../docs/assets/ico/apple-touch-icon-72-precomposed.png\">\n" +
    "                    <link rel=\"apple-touch-icon-precomposed\" href=\"../../docs/assets/ico/apple-touch-icon-57-precomposed.png\">\n" +
    "                                   <link rel=\"shortcut icon\" href=\"../../docs/assets/ico/favicon.png\">\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Static navbar -->\n" +
    "    <div class=\"navbar navbar-static-top\">\n" +
    "      <div class=\"navbar-inner\">\n" +
    "        <div class=\"container\">\n" +
    "          <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </a>\n" +
    "          <a class=\"brand\" href=\"#\">Project name</a>\n" +
    "          <div class=\"nav-collapse collapse\">\n" +
    "            <ul class=\"nav\">\n" +
    "              <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "              <li><a href=\"#about\">About</a></li>\n" +
    "              <li><a href=\"#contact\">Contact</a></li>\n" +
    "              <li class=\"dropdown\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                  <li><a href=\"#\">Action</a></li>\n" +
    "                  <li><a href=\"#\">Another action</a></li>\n" +
    "                  <li><a href=\"#\">Something else here</a></li>\n" +
    "                  <li class=\"divider\"></li>\n" +
    "                  <li class=\"nav-header\">Nav header</li>\n" +
    "                  <li><a href=\"#\">Separated link</a></li>\n" +
    "                  <li><a href=\"#\">One more separated link</a></li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          <ul class=\"nav pull-right\">\n" +
    "            <li><a href=\"./navbar.html\">Default</a></li>\n" +
    "            <li class=\"active\"><a href=\"./navbar-static-top.html\">Static top</a></li>\n" +
    "            <li><a href=\"./navbar-fixed-top.html\">Fixed top</a></li>\n" +
    "          </ul>\n" +
    "          </div><!--/.nav-collapse -->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <!-- Main hero unit for a primary marketing message or call to action -->\n" +
    "      <div class=\"hero-unit\">\n" +
    "        <h1>Navbar example</h1>\n" +
    "        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-large btn-primary\" href=\"../components.html#navbar\">View navbar docs &raquo;</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "    <!-- Le javascript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"../../docs/assets/js/jquery.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-transition.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-alert.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-modal.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-dropdown.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-scrollspy.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tab.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tooltip.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-popover.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-button.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-collapse.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-carousel.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-typeahead.js\"></script>\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );

  $templateCache.put("app/styles/tests/navbar.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Bootstrap, from Twitter</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Le styles -->\n" +
    "    <link href=\"../../docs/assets/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <style>\n" +
    "      body {\n" +
    "        padding-top: 0;\n" +
    "        padding-bottom: 30px;\n" +
    "      }\n" +
    "      .navbar {\n" +
    "        margin-top: 20px;\n" +
    "      }\n" +
    "    </style>\n" +
    "    <link href=\"../../docs/assets/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Le fav and touch icons -->\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"../../docs/assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"../../docs/assets/ico/apple-touch-icon-114-precomposed.png\">\n" +
    "      <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"../../docs/assets/ico/apple-touch-icon-72-precomposed.png\">\n" +
    "                    <link rel=\"apple-touch-icon-precomposed\" href=\"../../docs/assets/ico/apple-touch-icon-57-precomposed.png\">\n" +
    "                                   <link rel=\"shortcut icon\" href=\"../../docs/assets/ico/favicon.png\">\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <!-- Static navbar -->\n" +
    "      <div class=\"navbar\">\n" +
    "        <div class=\"navbar-inner\">\n" +
    "          <div class=\"container\">\n" +
    "            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "            </a>\n" +
    "            <a class=\"brand\" href=\"#\">Project name</a>\n" +
    "            <div class=\"nav-collapse collapse\">\n" +
    "              <ul class=\"nav\">\n" +
    "                <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "                <li><a href=\"#about\">About</a></li>\n" +
    "                <li><a href=\"#contact\">Contact</a></li>\n" +
    "                <li class=\"dropdown\">\n" +
    "                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "                  <ul class=\"dropdown-menu\">\n" +
    "                    <li><a href=\"#\">Action</a></li>\n" +
    "                    <li><a href=\"#\">Another action</a></li>\n" +
    "                    <li><a href=\"#\">Something else here</a></li>\n" +
    "                    <li class=\"divider\"></li>\n" +
    "                    <li class=\"nav-header\">Nav header</li>\n" +
    "                    <li><a href=\"#\">Separated link</a></li>\n" +
    "                    <li><a href=\"#\">One more separated link</a></li>\n" +
    "                  </ul>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "              <ul class=\"nav pull-right\">\n" +
    "                <li class=\"active\"><a href=\"./navbar.html\">Default</a></li>\n" +
    "                <li><a href=\"./navbar-static-top.html\">Static top</a></li>\n" +
    "                <li><a href=\"./navbar-fixed-top.html\">Fixed top</a></li>\n" +
    "              </ul>\n" +
    "            </div><!--/.nav-collapse -->\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Main hero unit for a primary marketing message or call to action -->\n" +
    "      <div class=\"hero-unit\">\n" +
    "        <h1>Navbar example</h1>\n" +
    "        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-large btn-primary\" href=\"../components.html#navbar\">View navbar docs &raquo;</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "    <!-- Le javascript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"../../docs/assets/js/jquery.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-transition.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-alert.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-modal.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-dropdown.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-scrollspy.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tab.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-tooltip.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-popover.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-button.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-collapse.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-carousel.js\"></script>\n" +
    "    <script src=\"../../docs/assets/js/bootstrap-typeahead.js\"></script>\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );

  $templateCache.put("app/templates/applications/applicationEdit.html",
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "     <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "     <div class=\"span10 offset2\">\n" +
    "        <h2>New Application</h2>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <form name=\"applicationForm\" class=\"span10 offset2\">\n" +
    "        \n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"span5\">\n" +
    "                <legend>Company Information</legend>\n" +
    "                \n" +
    "                <label>Full Legal Business Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.fullLegalBusineessName\">\n" +
    "                \n" +
    "                <label>Address 1</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.address1\">\n" +
    "                \n" +
    "                <label>Address 2</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.address2\">\n" +
    "                \n" +
    "                <label>City</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.city\">\n" +
    "                \n" +
    "                <label>State</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.state\">\n" +
    "                \n" +
    "                <label>Zip</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.zip\">\n" +
    "        \n" +
    "            </div>\n" +
    "             \n" +
    "            <div class=\"span5\"> \n" +
    "                \n" +
    "                <legend>Primary Contact Information</legend>\n" +
    "            \n" +
    "                <label>Contact Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.contactPerson.name\">\n" +
    "            \n" +
    "                <label>Email</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.contactPerson.email\">\n" +
    "                \n" +
    "                <label>Phone</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.contactPerson.phone\">\n" +
    "                \n" +
    "                <p>Preferred contact method<br/>\n" +
    "                    {{application.leasee.contactPerson.contactMethod}}\n" +
    "                </p>\n" +
    "                \n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"row\">\n" +
    "        <!-- <div class=\"row\" ng-show=\"needsMoreInfo() && !finished\">   --> \n" +
    "            \n" +
    "            <div class=\"span5\">\n" +
    "        \n" +
    "                <legend>Personal Guarantor</legend>\n" +
    "                \n" +
    "                <label>Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.name\">\n" +
    "                \n" +
    "                <label>Social Security Number</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.socialSecurityNumber\">\n" +
    "        \n" +
    "            </div>\n" +
    "             \n" +
    "            <div class=\"span5\"> \n" +
    "            \n" +
    "                <legend>Personal Guarantor Contact</legend>\n" +
    "            \n" +
    "                <label>Email</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.email\">\n" +
    "                \n" +
    "                <label>Phone</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.phone\">\n" +
    "                \n" +
    "                <label>Address 1</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.address1\">\n" +
    "                \n" +
    "                <label>Address 2</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.address2\">\n" +
    "                \n" +
    "                <label>City</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.city\">\n" +
    "                \n" +
    "                <label>State</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.state\">\n" +
    "                \n" +
    "                <label>Zip</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.zip\">\n" +
    "                \n" +
    "                \n" +
    "               \n" +
    "        \n" +
    "            </div>\n" +
    "        \n" +
    "        </div>\n" +
    "        \n" +
    "        <!--\n" +
    "        <pre>\n" +
    "            {{application | json}}\n" +
    "        </pre>\n" +
    "        -->\n" +
    "\n" +
    "    </form>\n" +
    "\n" +
    "\n" +
    "        \n" +
    "    <div class=\"span10 offset2\">\n" +
    "        \n" +
    "        <hr />\n" +
    "        \n" +
    "        <a class=\"btn btn-primary\" id=\"save\" ng-show=\"applicationForm.$dirty\" ng-click=\"save()\">Save</a>\n" +
    "        <a class=\"btn btn-primary\" id=\"cancel\" ng-click=\"cancel()\">Cancel</a>\n" +
    "        \n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );

  $templateCache.put("app/templates/applications/applicationList.html",
    "<div class=\"row has-title-bar has-no-tabs\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "    <div class=\"span10 offset2\">\n" +
    "        \n" +
    "        \n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>Applications</h2>\n" +
    "                <!-- <a id=\"addApplication\" class=\"btn btn-primary actions\" href=\"#/dashboard/applications/new\">Add New Application</a> -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"span10\">            \n" +
    "                <div class=\"form-inline\">\n" +
    "        \t        <label>Search Business\n" +
    "        \t        <input type=\"text\" placeholder=\"Business\" ng-model=\"searchBusiness\"></label>\n" +
    "        \t        \n" +
    "        \t        <label>Search Vendor\n" +
    "        \t        <input type=\"text\" placeholder=\"Vendor\" ng-model=\"searchVendor\"></label>\n" +
    "                </div>\n" +
    "                <table class=\"table\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Leasee</th>\n" +
    "                            <th>Vendor</th>\n" +
    "                            <th>Cost</th>\n" +
    "                            <th>Actions</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"item in applications | filter: {leasee.fullLegalBusineessName: searchBusiness, vendor.name: searchVendor}\">\n" +
    "                        \n" +
    "                            <td>{{item.leasee.fullLegalBusineessName}}</td>\n" +
    "                            <td>{{item.vendor.name}}</td>\n" +
    "                            <td>${{item.quote.totalCost | number}}</td>\n" +
    "                            <td>\n" +
    "                                <a class=\"edit\" ng-click=\"editItem(item._id)\">Edit</a> | \n" +
    "                                <a class=\"view\" ng-click=\"editItem(item._id)\">View</a> | \n" +
    "                                <a class=\"delete\" ng-click=\"deleteItem(item._id)\">Delete</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/changelog.html",
    "<div class=\"row-fluid\">\n" +
    "<markdown class=\"span8 offset2\" ng-model=\"changelog\">\n" +
    "</markdown>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/home.html",
    "<div class=\"row-fluid\">\n" +
    "    <div class=\"span4 offset4 center\">\n" +
    "        \n" +
    "        <h1>MarlinQuoter v{{version}}</h1> \n" +
    "        \n" +
    "        <h5>Important Notes</h5>\n" +
    "        <p class=\"alert alert-info\">Refreshing this window will reset the quoter and all data!</p>\n" +
    "        \n" +
    "        <p class=\"alert alert-info\">Use the links in the footer to navigate between front-end and back-end at any time.</p> \n" +
    "        \n" +
    "        <h5>Choose a path</h5>\n" +
    "     \n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row-fluid area-start center\">    \n" +
    "    \n" +
    "    <div class=\"span2 offset2 start-button\" ng-click=\"loginAs('admin')\">\n" +
    "        <div class=\"well\">\n" +
    "            <i class=\"icon icon-dashboard\"></i>\n" +
    "            <p>SuperAdmin Dashboard</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"span2 start-button\" ng-click=\"loginAs('salesRep')\">\n" +
    "        <div class=\"well\">\n" +
    "            <i class=\"icon icon-user\"></i>\n" +
    "            <p>Sales Rep Dashboard</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"span2 start-button\" ng-click=\"goTo('tools/quoter')\">\n" +
    "        <div class=\"well\">\n" +
    "            <i class=\"icon icon-paste\"></i> \n" +
    "            <p>End User Quote Tool</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"span2 start-button\" ng-click=\"goTo('tools/locator')\">\n" +
    "        <div class=\"well\">\n" +
    "            <i class=\"icon icon-globe\"></i> \n" +
    "            <p>End User Locator Tool</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );

  $templateCache.put("app/templates/login.html",
    "<div class=\"row-fluid\">\n" +
    "    <div class=\"span4 offset4\">\n" +
    "        \n" +
    "        <div class=\"well\" id=\"loginForm\">\n" +
    "        \n" +
    "            <h4>Login to access MarlinQuoter</h4>\n" +
    "            \n" +
    "            <p class=\"alert alert-error\" ng-show=\"message\">{{message}}</p>\n" +
    "            \n" +
    "            <label>Username</label>\n" +
    "            <input type=\"text\" placeholder=\"Username\" ng-model=\"username\">\n" +
    "            \n" +
    "            <label>Email</label>\n" +
    "            <input type=\"password\" placeholder=\"password\" ng-model=\"password\">\n" +
    "            \n" +
    "            <br />\n" +
    "            \n" +
    "            <a class=\"btn btn-primary\" id=\"login\" ng-click=\"login()\">Login <i ng-show=\"isProcessing\" class=\"icon icon-spinner icon-spin\"></i></a>\n" +
    "            \n" +
    "            <br /> <br />\n" +
    "            \n" +
    "            <p class=\"alert alert-info\">Username is your Marlin email, before the @. Password is the same.</p>\n" +
    "         \n" +
    "        </div> \n" +
    "               \n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/logout.html",
    "<div class=\"row-fluid\">\n" +
    "    <div class=\"span4 offset4\">\n" +
    "        \n" +
    "        <div class=\"well\">\n" +
    "        \n" +
    "            <h4>Logging you out of the system</h4>\n" +
    "         \n" +
    "        </div> \n" +
    "               \n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/nav.html",
    "<a class=\"brand\" href=\"#/dashboard/quotes\">\n" +
    "    <img src=\"img/logo.png\" alt=\"MarlinQuoter\" />\n" +
    "</a>\n" +
    "\n" +
    "<!--\n" +
    "<div ng-show=\"apiTracker.active()\" style=\"background: pink;\">\n" +
    "  Loading some pizza data for ya, sir! ...\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<ul class=\"user-tray text-center\">\n" +
    "  <li user-tray></li>\n" +
    "</ul>\n" +
    "\n" +
    "<ul class=\"nav text-center\">\n" +
    "    <li class=\"dark\">\n" +
    "        <a href=\"#/dashboard/\"><i class=\"icon icon-home\"></i><br/>Dashboard</a>\n" +
    "    </li>\n" +
    "    <li class=\"light\" ng-class=\"getClass('/dashboard/vendors')\" ng-show=\"showIfUserCanDoAction('list-vendor')\">\n" +
    "        <a href=\"#/dashboard/vendors\"><i class=\"icon icon-user\"></i><br/>Vendors</a>\n" +
    "    </li>\n" +
    "    \n" +
    "    <li class=\"light\" ng-class=\"getClass('/dashboard/programs')\" ng-show=\"showIfUserCanDoAction('list-program')\">\n" +
    "        <a href=\"#/dashboard/programs\"><i class=\"icon icon-usd\"></i><br/>Rate Sheets</a>\n" +
    "    </li>\n" +
    "    \n" +
    "    <li class=\"dark\" ng-class=\"getClass('/dashboard/quotes')\" >\n" +
    "        <a href=\"#/dashboard/quotes\"><i class=\"icon icon-comments-alt\"></i><br/>Quotes</a>\n" +
    "    </li>\n" +
    "    \n" +
    "    <li class=\"dark\" ng-class=\"getClass('/dashboard/applications')\">\n" +
    "        <a href=\"#/dashboard/applications\"><i class=\"icon icon-file-text-alt\"></i><br/>Applications</a>\n" +
    "    </li>\n" +
    "    \n" +
    "    <li class=\"light\" ng-class=\"getClass('/dashboard/users')\" ng-show=\"showIfUserCanDoAction('list-user')\">\n" +
    "        <a href=\"#/dashboard/users\"><i class=\"icon icon-unlock-alt\"></i><br/>Users</a>\n" +
    "    </li>\n" +
    "    \n" +
    "</ul>\n" +
    "\n" +
    "\n"
  );

  $templateCache.put("app/templates/programs/programEdit.html",
    "\n" +
    "\n" +
    "<div class=\"row has-title-bar\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "     \n" +
    "    <form name=\"basicForm\" class=\"span10 offset2\">\n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>New Rate Sheet</h2>\n" +
    "                <ul class=\"nav nav-tabs\">\n" +
    "                  <li ng-repeat=\"tab in tabs\" ng-class=\"{active: isActiveTab($index), disabled: !user._id && $index != 0}\"><a ng-click=\"changeTab($index)\">{{tab}}</a></li>\n" +
    "                </ul>\n" +
    "                \n" +
    "                <div class=\"actions\">\n" +
    "                     <a class=\"btn btn-primary\" id=\"save\" ng-show=\"basicForm.$dirty || formBuyoutOptions.$dirty\" ng-disabled=\"formBuyoutOptions.$invalid\" ng-click=\"save()\">Save</a>\n" +
    "                     <a class=\"btn btn-primary\" id=\"cancel\" ng-click=\"cancel()\">Close</a>\n" +
    "                </div>\n" +
    "            \n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"span3\">\n" +
    "                \n" +
    "                <h3>Name</h3>\n" +
    "                \n" +
    "                <label>Program Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"program.name\">\n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"span3\">\n" +
    "                \n" +
    "                <h3>Private Notes</h3>\n" +
    "                \n" +
    "                <label>Private Notes</label>\n" +
    "                <textarea type=\"text\" ng-model=\"program.notes_private\"></textarea>\n" +
    "            \n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"span3\">  \n" +
    "                \n" +
    "                <h3>Public Notes</h3>\n" +
    "                \n" +
    "                <label>Public Notes</label>\n" +
    "                <textarea type=\"text\" ng-model=\"program.notes_public\"></textarea>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"row\">\n" +
    "         \n" +
    "            <div class=\"span10\">\n" +
    "            \n" +
    "                <h3>Details</h3>\n" +
    "            \n" +
    "                <span class=\"pull-left\">\n" +
    "                    <label>Term Length</label>\n" +
    "                    <select ng-options=\"option for option in termPeriodOptions\" type=\"text\" class=\"input-small\" ng-model=\"program.rateSheet.termPeriod\"></select>\n" +
    "                </span>\n" +
    "                <span class=\"pull-left\">&nbsp;&nbsp;&nbsp;</span>\n" +
    "                <span class=\"pull-left\">\n" +
    "                    <label>Deferred Payments</label>\n" +
    "                    <input type=\"text\" class=\"input-medium disabled\" disabled/>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <div class=\"span10 offset2\">   \n" +
    "        <div class=\"row\">\n" +
    "        \n" +
    "            <div class=\"span10\">\n" +
    "                \n" +
    "                <h3>Buyout Options</h3>\n" +
    "                \n" +
    "                <!--\n" +
    "  \n" +
    "                <label>Cost Range Min</label>   \n" +
    "                <input type=\"text\" class=\"input-small\" ng-model=\"program.rateSheet.range.min\"/>\n" +
    "                \n" +
    "                <label>Cost Range Max</label> \n" +
    "                <input type=\"text\" class=\"input-small\" ng-model=\"program.rateSheet.range.max\"/>\n" +
    "-->\n" +
    "                <form class=\"buyoutEditForm\" name=\"formBuyoutOptions\" novalidate>\n" +
    "                \n" +
    "                <div ng-repeat=\"buyoutOptions in program.rateSheet.buyoutOptions\" ng-init=\"buyoutIndex = $index\">\n" +
    "                    \n" +
    "                    \n" +
    "                    <hr />\n" +
    "                    \n" +
    "                    <!-- <pre>{{buyoutOptions.costs | json}}</pre> -->\n" +
    "                    <label>Buyout Name</label>\n" +
    "                    <input type=\"text\" required ng-model=\"buyoutOptions.name\" />\n" +
    "                    \n" +
    "                    <button class=\"btn pull-right\" ng-click=\"removeOption(buyoutOptions)\"><icon class=\"icon icon-trash\"></icon></button>\n" +
    "                    \n" +
    "                    <table class=\"table table-condensed\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th colspan=\"10\">&nbsp;</th>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td colspan=\"2\" class=\"cost-range\"></td>\n" +
    "                                <td colspan=\"{{buyoutOptions.terms.length}}\">\n" +
    "                                    <span>Available Terms</span><br />\n" +
    "                                    <button class=\"btn\" ng-click=\"addColumnToOption(buyoutOptions)\">Add Term</button>\n" +
    "                                </td>\n" +
    "                                <td colspan=\"{{8 - buyoutOptions.terms.length}}\" class=\"td-pad\">&nbsp;</td>\n" +
    "                            </tr>\n" +
    "                            \n" +
    "                            <tr>\n" +
    "                                <td colspan=\"2\" class=\"cost-range\"></td>\n" +
    "                                <td colspan=\"1\" ng-repeat=\"item in buyoutOptions.terms\" class=\"\">\n" +
    "                                    <input required number-only type=\"text\" class=\"span1\" ng-model=\"item.length\"/> \n" +
    "                                </td>\n" +
    "                                <td colspan=\"{{8 - buyoutOptions.terms.length}}\" class=\"td-pad\">&nbsp;</td>\n" +
    "                            </tr> \n" +
    "                            <tr>\n" +
    "                                <td colspan=\"2\" class=\"cost-range\">Total Cost Range</td>\n" +
    "                                <td colspan=\"1\" ng-repeat=\"item in buyoutOptions.terms\" class=\"\">\n" +
    "                                    <button class=\"btn\" ng-click=\"remove('column', $index, buyoutOptions)\"><icon class=\"icon icon-minus-sign\"></icon></button>\n" +
    "                                </td>\n" +
    "                                <td colspan=\"{{8 - buyoutOptions.terms.length}}\" class=\"td-pad\">&nbsp;</td>\n" +
    "                            </tr> \n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"cost in buyoutOptions.costs\" >\n" +
    "                                <td colspan=\"2\" class=\"cost-range\">\n" +
    "                                    <button class=\"btn\" ng-click=\"remove('row', $index, buyoutOptions)\"><icon class=\"icon icon-minus-sign\"></icon></button>\n" +
    "                                    <input required number-only type=\"text\" class=\"span1\" ng-disabled=\"$index != 0\" ng-model=\"cost.min\"/> <input number-only required type=\"text\" class=\"span1\" ng-model=\"cost.max\" ng-change=\"adjustValues(buyoutOptions, cost.max, $index)\"/>\n" +
    "                                </td>\n" +
    "                                <td colspan=\"1\" ng-repeat=\"rate in cost.rates\" class=\"\">\n" +
    "                                    <input class=\"span1\" type=\"text\" decimal-places required ng-model=\"rate.rate\"/>  \n" +
    "                                </td>\n" +
    "                                <td colspan=\"{{8 - buyoutOptions.terms.length}}\" class=\"td-pad\">&nbsp;</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td style=\"width: 200px;\">\n" +
    "                                    <button class=\"btn\" ng-click=\"addRowToOption(buyoutOptions)\">Add Cost Range</button> \n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                            \n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                    \n" +
    "                </div>\n" +
    "                \n" +
    "                </form>\n" +
    "                \n" +
    "                <form class=\"newOption\" name=\"newOptionForm\">\n" +
    "                    \n" +
    "                    <hr />\n" +
    "                    \n" +
    "                    \n" +
    "                    <label>Buyout Name</label>\n" +
    "                    <input type=\"text\" required=\"required\" class=\"input-large\" ng-model=\"newOption.name\">\n" +
    "                \n" +
    "                    <button class=\"btn btn-large\" ng-click=\"makeNewOption()\" ng-disabled=\"newOptionForm.$invalid\"><i class=\"icon-plus\"></i></button> \n" +
    "                    \n" +
    "                </form>\n" +
    "         \n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/programs/programList.html",
    "<div class=\"row has-title-bar has-no-tabs\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "    <div class=\"span10 offset2\">\n" +
    "        \n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>Rate Sheets</h2>\n" +
    "                <a id=\"addProgram\" class=\"btn btn-primary actions\" href=\"#/dashboard/programs/new\">Add New Rate Sheet</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"row\">  \n" +
    "            <div class=\"span10\">\n" +
    "                \n" +
    "                <div class=\"form-inline\">\n" +
    "                    <label>Search\n" +
    "                    <input type=\"text\" placeholder=\"Search\" ng-model=\"searchTerm\"></label>\n" +
    "                </div>\n" +
    "                \n" +
    "                \n" +
    "                <table class=\"table\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Name</th>\n" +
    "                            <th>Actions</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"item in programs | filter: searchTerm\">\n" +
    "                            <td>{{item.name}}</td>\n" +
    "                            <td>\n" +
    "                                <a class=\"edit\" ng-click=\"editItem(item._id)\">Edit</a> | \n" +
    "                                <a class=\"view\" ng-click=\"editItem(item._id)\">View</a> | \n" +
    "                                <a class=\"delete\" ng-click=\"deleteItem(item._id)\">Delete</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/quotes/quoteEdit.html",
    "\n" +
    "\n" +
    "<div class=\"row has-title-bar\">\n" +
    "    \n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "    \n" +
    "    <form name=\"quoteForm\" class=\"span10 offset2\">\n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>New Quote</h2>\n" +
    "                <ul class=\"nav nav-tabs\">\n" +
    "                  <li ng-repeat=\"tab in tabs\" ng-class=\"{active: isActiveTab($index), disabled: !quote._id && $index != 0}\"><a ng-click=\"changeTab($index)\">{{tab}}</a></li>\n" +
    "                </ul>\n" +
    "                \n" +
    "                <div class=\"actions\">\n" +
    "                    <a class=\"btn btn-primary\" id=\"save\"ng-show=\"quoteForm.$dirty\" ng-click=\"save()\">Save</a>\n" +
    "                    <a class=\"btn btn-primary\" id=\"cancel\" ng-click=\"cancel()\">Close</a>\n" +
    "                </div>\n" +
    "            \n" +
    "            </div>\n" +
    "        </div>\n" +
    "            \n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"span3\">\n" +
    "                \n" +
    "                <legend>Equipment Cost Information</legend>\n" +
    "                \n" +
    "                <label>Total Cost</label>\n" +
    "                <input type=\"text\" placeholder=\"0.00\" ng-model=\"quote.totalCost\">\n" +
    "                \n" +
    "                <label>Description of Equiptment</label>\n" +
    "                <textarea type=\"text\" ng-model=\"quote.description\"></textarea>\n" +
    "                \n" +
    "                <label>Status</label>\n" +
    "                <div class=\"btn-group\">\n" +
    "                    <button ng-click=\"quote.status='Open'\" class=\"btn\" ng-class=\"{active: quote.status=='Open'}\">Open</button>\n" +
    "                    <button ng-click=\"quote.status='Archived'\" class=\"btn\" ng-class=\"{active: quote.status=='Archived'}\">Archived</button>\n" +
    "                </div>\n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "            \n" +
    "            <div class=\"span3\">\n" +
    "                <legend>Company Information</legend>\n" +
    "                \n" +
    "                <label>Company Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"quote.company.name\">\n" +
    "                \n" +
    "                <label>Address 1</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"quote.company.address1\">\n" +
    "                \n" +
    "                <label>Address 2</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"quote.company.address2\">\n" +
    "                \n" +
    "                <label>City</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"quote.company.city\">\n" +
    "                \n" +
    "                <label>State</label>\n" +
    "                <select class=\"medium\" ng-model=\"quote.company.state\" ng-options=\"state.abbreviation as state.name for state in states\"></select>\n" +
    "<!--\n" +
    "                <select class=\"medium\" ng-model=\"quote.company.state\">\n" +
    "                    <option ng-repeat=\"item in states\" value=\"{{item.abbreviation}}\">{{item.name}}</option>\n" +
    "                </select>\n" +
    "-->\n" +
    "               \n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "            \n" +
    "            <div class=\"span3\">  \n" +
    "                \n" +
    "                <legend>Contact Information</legend>\n" +
    "            \n" +
    "                <label>Contact Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"quote.contact.name\">\n" +
    "            \n" +
    "                <label>Email</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"quote.contact.email\">\n" +
    "                \n" +
    "                <label>Phone</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"quote.contact.phone\">\n" +
    "            \n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n"
  );

  $templateCache.put("app/templates/quotes/quoteList.html",
    "\n" +
    "<div class=\"row has-title-bar has-no-tabs\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "    <div class=\"span10 offset2\">\n" +
    "        \n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>Quotes</h2>\n" +
    "                <a id=\"addQuote\" class=\"btn btn-primary actions\" href=\"#/tools/quoter\">Launch Quote Tool</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"row\">  \n" +
    "            <div class=\"span10\">  \n" +
    "                <div class=\"form-inline\">\n" +
    "                    <label>Search cost\n" +
    "                    <input type=\"text\" class=\"input-small\" placeholder=\"$$$\" ng-model=\"searchCost\"></label>\n" +
    "                    \n" +
    "                    <label>Search description\n" +
    "                    <input type=\"text\" placeholder=\"Description\" ng-model=\"searchDesc\"></label>\n" +
    "                    \n" +
    "                    <label>Search Vendor\n" +
    "                    <input type=\"text\" placeholder=\"Vendor\" ng-model=\"searchVend\"></label>\n" +
    "                    \n" +
    "                    <div class=\"btn-group\">\n" +
    "                        <button id=\"filterAll\" ng-click=\"filterStatus=''\" class=\"btn\" ng-class=\"{active: filterStatus==''}\">All</button>\n" +
    "                        <button id=\"filterOpen\" ng-click=\"filterStatus='Open'\" class=\"btn\" ng-class=\"{active: filterStatus=='Open'}\">Open</button>\n" +
    "                        <button id=\"filterArchived\" ng-click=\"filterStatus='Archived'\" class=\"btn\" ng-class=\"{active: filterStatus=='Archived'}\">Archived</button>\n" +
    "                    </div>\n" +
    "                    \n" +
    "        \n" +
    "                </div>\n" +
    "                    \n" +
    "                <table class=\"table\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Total Cost</th>\n" +
    "                            <th>Description</th>\n" +
    "                            <th>Vendor</th>\n" +
    "                            <th>Status</th>\n" +
    "                            <th>Actions</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"item in quotes | filter: {totalCost: searchCost, description: searchDesc, vendor.name: searchVend, status: filterStatus}\">\n" +
    "                            <td>${{item.totalCost | number}}</td>\n" +
    "                            <td>{{item.description}}</td>\n" +
    "                            <td>{{item.vendor.name}}</td>\n" +
    "                            <td>{{item.status}}</td>\n" +
    "                            <td>\n" +
    "                                <a class=\"edit\" ng-click=\"editItem(item._id)\">Edit</a> | \n" +
    "                                <a class=\"view\" ng-click=\"editItem(item._id)\">View</a> | \n" +
    "                                <a class=\"delete\" ng-click=\"deleteItem(item._id)\">Delete</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "        \n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/tools/application/applicationTool.html",
    "<div class=\"row vendorSection area\" ui-if=\"vendor\">\n" +
    "    <div class=\"span8 offset1\">\n" +
    "        <h1 ng-show=\"!vendor.logo\">{{vendor.name}}</h1>\n" +
    "        <a ng-show=\"vendor.website\" href=\"{{vendor.website}}\">\n" +
    "            <img class=\"img-rounded img-large vendor-logo\" ng-src=\"{{vendor.logo.original}}\" ng-show=\"vendor.logo.original\" title=\"{{vendor.name}}\" />\n" +
    "        </a>\n" +
    "        <img class=\"img-rounded img-large vendor-logo\" ng-src=\"{{vendor.logo.original}}\" ng-show=\"vendor.logo.original && !vendor.website\" title=\"{{vendor.name}}\" />\n" +
    "        \n" +
    "    </div>\n" +
    "    <div class=\"span2\">\n" +
    "        <img class=\"pull-right poweredby\" src=\"img/powered_by.png\" />\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"!finished\">\n" +
    "    \n" +
    "    <div class=\"span4 offset1\">\n" +
    "        \n" +
    "        <legend>Vendor Information</legend>\n" +
    "        <p>{{vendor.name}}</p>\n" +
    "        <p>{{vendor.businessPhone}}</p>\n" +
    "        <p>{{vendor.businessAddress.address1}}<br/>\n" +
    "        <p>{{vendor.businessAddress.address2}}</p>\n" +
    "        <p>{{vendor.businessAddress.city}}, {{vendor.businessAddress.state}} {{vendor.businessAddress.zip}}</p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<form name=\"applicationForm\">\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"!finished\">\n" +
    "\n" +
    "    <div class=\"span5 offset1\">\n" +
    "        <legend>Company Information</legend>\n" +
    "        \n" +
    "        <label>Full Legal Business Name</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.fullLegalBusineessName\">\n" +
    "        \n" +
    "        <label>Address 1</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.address1\">\n" +
    "        \n" +
    "        <label>Address 2</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.address2\">\n" +
    "        \n" +
    "        <label>City</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.city\">\n" +
    "        \n" +
    "        <label>State</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.state\">\n" +
    "        \n" +
    "        <label>Zip</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.businessAddress.zip\">\n" +
    "\n" +
    "    </div>\n" +
    "     \n" +
    "    <div class=\"span5\"> \n" +
    "        \n" +
    "        <legend>Primary Contact Information</legend>\n" +
    "    \n" +
    "        <label>Contact Name</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.contactPerson.name\">\n" +
    "    \n" +
    "        <label>Email</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.contactPerson.email\">\n" +
    "        \n" +
    "        <label>Phone</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.contactPerson.phone\">\n" +
    "        \n" +
    "        <p>Preferred contact method</p>\n" +
    "        <a ng-click=\"application.leasee.contactPerson.contactMethod = 'email'\" class=\"btn contact-method\" ng-class=\"{active: application.leasee.contactPerson.contactMethod == 'email'}\">Email</a>\n" +
    "        <a ng-click=\"application.leasee.contactPerson.contactMethod = 'phone'\" class=\"btn contact-method\" ng-class=\"{active: application.leasee.contactPerson.contactMethod == 'phone'}\">Phone</a>\n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"!finished\">\n" +
    "\n" +
    "    <div class=\"span5 offset1\">\n" +
    "        \n" +
    "        <legend>Business Questions</legend>\n" +
    "    \n" +
    "        <p>Are you a sole proprietor of this business?</p>\n" +
    "        <a ng-click=\"application.leasee.soleProp = true\" class=\"btn contact-method\" ng-class=\"{active: application.leasee.soleProp == true}\">Yes</a>\n" +
    "        <a ng-click=\"application.leasee.soleProp = false\" class=\"btn contact-method\" ng-class=\"{active: application.leasee.soleProp == false}\">No</a>\n" +
    "    \n" +
    "        <br />\n" +
    "        \n" +
    "        <p>How many years have you been in business?</p>\n" +
    "        <label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.leasee.yearsInBusiness\">Years</label>\n" +
    "    \n" +
    "        <p class=\"alert\" ng-show=\"message\">{{message}}</p>\n" +
    "    \n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"needsMoreInfo() && !finished\">   \n" +
    "    \n" +
    "    <div class=\"span5 offset1\">\n" +
    "\n" +
    "        <legend>Personal Guarantor</legend>\n" +
    "        \n" +
    "        <label>Name</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.name\">\n" +
    "        \n" +
    "        <label>Social Security Number</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.socialSecurityNumber\">\n" +
    "\n" +
    "    </div>\n" +
    "     \n" +
    "    <div class=\"span5\"> \n" +
    "    \n" +
    "        <legend>Personal Guarantor Contact</legend>\n" +
    "    \n" +
    "        <label>Email</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.email\">\n" +
    "        \n" +
    "        <label>Phone</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.phone\">\n" +
    "        \n" +
    "        <label>Address 1</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.address1\">\n" +
    "        \n" +
    "        <label>Address 2</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.address2\">\n" +
    "        \n" +
    "        <label>City</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.city\">\n" +
    "        \n" +
    "        <label>State</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.state\">\n" +
    "        \n" +
    "        <label>Zip</label>\n" +
    "        <input type=\"text\" placeholder=\"\" ng-model=\"application.guarantorInfo.homeAddress.zip\">\n" +
    "        \n" +
    "        \n" +
    "       \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"!finished\">\n" +
    "        \n" +
    "    <div class=\"span10 offset1\">\n" +
    "        <legend>Authorization</legend>\n" +
    "        <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" required=\"required\" ng-model=\"application.agreeToTerms\" />\n" +
    "        By checking this box, each undersigned individual(s), who is either a principal of the credit applicant listed below or a personal guarantor of its obligations, provides written instruction to Faculty Creative or its designee (and any assignee or potential assignee thereof) authorizing review of his or her personal credit profile from a national credit bureau. Such authorization shall extend to obtaining a credit profile in considering the application of the credit applicant and subsequently for the purpose of update, renewal or extension of such credit and for reviewing or collecting the resulting account. A photostatic or facsimile copy of this authorization shall be as valid as the original.\n" +
    "        </label>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"!finished\">\n" +
    "        \n" +
    "    <div class=\"span10 offset1 text-center\">\n" +
    "        <hr />\n" +
    "        <button type=\"submit\" class=\"btn btn-primary btn-mega\" ng-disabled=\"!applicationForm.$valid\" id=\"saveApplication\" ng-click=\"saveApplication()\">Submit Application</button>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "</form>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"finished\">\n" +
    "\n" +
    "    <div class=\"span6 offset3 text-center\">\n" +
    "    \n" +
    "        <h1>Thanks, someone will contact you within 48 hours.</h1>\n" +
    "        \n" +
    "        <br /> <br />\n" +
    "        \n" +
    "        <a id=\"saveContactPref\" ng-click=\"save()\" class=\"btn btn-primary btn-mega\" >OK</a>\n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "</div>  \n" +
    "\n" +
    "<div class=\"row\" ng-show=\"!finished\">\n" +
    "        \n" +
    "    <div class=\"span10 offset1\">\n" +
    "        <br /><br />\n" +
    "        <legend>Terms</legend>\n" +
    "        <div id=\"legalTerms\">{{vendor.legalTerms}}</div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "    \n" +
    "\n"
  );

  $templateCache.put("app/templates/tools/locator/locatorTool.html",
    "<div class=\"row\">\n" +
    "     <div class=\"span12\">\n" +
    "        <h3>Marlin Dealer Locator</h3>\n" +
    "     </div>\n" +
    "     \n" +
    "     <div class=\"span12 area-locator-search\">\n" +
    "        \n" +
    "        <div class=\"pull-left\">\n" +
    "            <label>&nbsp;</label>\n" +
    "            <button class=\"btn btn-large\" ng-click=\"findMe()\"><i class=\"icon-screenshot icon\"></i></button>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"pull-left\">\n" +
    "            <label>Search for a location</label>\n" +
    "            <input type=\"text\" required=\"required\" ng-model=\"locationSearch\">\n" +
    "            <button class=\"btn btn-large\" ng-disabled=\"!locationSearch\" ng-click=\"findMyLocation()\">Find Location</button>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"pull-left\">\n" +
    "            <label>Search by Name</label>\n" +
    "            <input type=\"text\" ng-model=\"searchText\">\n" +
    "            <button class=\"btn btn-large\" ng-click=\"searchByText()\">Search</button>\n" +
    "            <button class=\"btn btn-large\" ng-show=\"searchText\" ng-click=\"clearText()\">Clear</button>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"pull-left\">\n" +
    "            <label>&nbsp;</label>\n" +
    "            <button class=\"btn btn-large\" ng-show=\"centerHasChanged\" ng-click=\"searchHere()\">Search map location</button>\n" +
    "        </div>\n" +
    "     </div>    \n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    \n" +
    "    <div class=\"span4\">\n" +
    "    \n" +
    "        <label>Distance from location (in miles)</label>\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button ng-repeat=\"item in distanceOptions\" class=\"btn\" ng-click=\"setDistanceFrom(item)\" ng-class=\"{active: distanceFrom == item}\">{{item}}</button>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div ng-show=\"markers.length\">\n" +
    "            <h3>Results</h3>\n" +
    "            <p>We found {{markers.length}} Marlin dealers near you.</p>\n" +
    "            <table id=\"markerList\" class=\"table table-striped\">\n" +
    "                <tr ng-repeat=\"item in markers | orderBy:'distance'\" ng-click=\"remoteOpenWindow(item)\">\n" +
    "                    <td><img ng-src=\"{{item.logo}}\" class=\"img-tiny\"/></td>\n" +
    "                    <td>{{item.name}}<br/>\n" +
    "                    <span ng-show=\"item.distance && hasLocation\">{{item.distance | number:0}} miles away</span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div ng-show=\"!markers.length\">\n" +
    "            <h3>No Results</h3>\n" +
    "            <p class=\"alert\">No Marlin Dealers were founds in your area!</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"span8\">\n" +
    "        \n" +
    "        <div class=\"google-map\"\n" +
    "    \t\tcenter=\"map.center\"\n" +
    "    \t\tzoom=\"map.zoom\"\n" +
    "    \t\tdraggable=\"true\"\n" +
    "    \t\tdragging=\"map.dragging\"\n" +
    "    \t\tevents=\"map.events\">\n" +
    "    \t\t\n" +
    "    \t\t<markers models=\"markers\" coords=\"'self'\" icon=\"'icon'\" click=\"'openClick'\">\n" +
    "\t\t\t\t<windows show=\"'showWindow'\" closeClick=\"'closeClick'\">\n" +
    "\t\t\t\t\t<div ng-non-bindable >\n" +
    "<!--     \t\t\t\t\t<img ng-src=\"{{logo}}\" class=\"img-medium\"/> -->\n" +
    "                \t\t<p>{{name}}</p>\n" +
    "                \t\t<p ng-show=\"website != ''\"><a target=\"_blank\" ng-href=\"{{website}}\">Visit Website</a></p>\n" +
    "                        <p>{{businessPhone}}</p>\n" +
    "                        <p>{{businessAddress.address1}}<br/>\n" +
    "                        <p>{{businessAddress.address2}}</p>\n" +
    "                        <p>{{businessAddress.city}}, {{businessAddress.state}} {{businessAddress.zip}}</p>\n" +
    "                \t\t<p ng-show=\"distance && hasLocation\">{{distance| number:0}} miles away</p>\n" +
    "                \t\t<p><a target=\"_blank\" ng-href=\"{{destAddress}}\">Open in Google Maps</a></p>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</windows>\n" +
    "\t\t\t</markers>\n" +
    "<!--\n" +
    "\t\t\t\n" +
    "\t\t\t<marker ng-repeat=\"m in map.markers\" coords=\"m\" icon=\"m.icon\" click=\"onMarkerClicked(m)\">\n" +
    "\t\t\t\t<window show=\"m.showWindow\" closeClick=\"m.closeClick()\">\n" +
    "\t\t\t\t\t<img ng-src=\"{{m.logo}}\" class=\"img-medium\"/>\n" +
    "            \t\t<p>{{m.name}}</p>\n" +
    "            \t\t<p ng-show=\"m.website != ''\"><a target=\"_blank\" ng-href=\"{{m.website}}\">Visit Website</a></p>\n" +
    "                    <p>{{m.businessPhone}}</p>\n" +
    "                    <p>{{m.businessAddress.address1}}<br/>\n" +
    "                    <p>{{m.businessAddress.address2}}</p>\n" +
    "                    <p>{{m.businessAddress.city}}, {{m.businessAddress.state}} {{m.businessAddress.zip}}</p>\n" +
    "            \t\t<p ng-show=\"m.distance && hasLocation\">{{m.distance| number:0}} miles away</p>\n" +
    "            \t\t<p><a target=\"_blank\" ng-href=\"{{m.destAddress}}\">Open in Google Maps</a></p>\n" +
    "\t\t\t\t</window>\n" +
    "\t\t\t</marker>\n" +
    "\t\t\t\n" +
    "\t\t\t\n" +
    "-->\n" +
    "    \t\t\n" +
    "    \t\t<!-- prefedined markers -->\n" +
    "    \t\t<!-- <marker ng-repeat=\"m in markers\" coords=\"m\" icon=\"m.icon\" click=\"m.closeClick()\" ></marker> -->\n" +
    "\n" +
    "\t\t\t<!-- marker for clicked position -->\n" +
    "\n" +
    "\n" +
    "<!-- \t\t\t<window show=\"map.infoWindow.show\" coords=\"map.infoWindow.coords\" isIconVisibleOnClick=\"false\">I should not be attached to a marker.</window> -->\n" +
    "\n" +
    "\t\t</div>\n" +
    "          \n" +
    "\t</div>\n" +
    "\t\n" +
    "\t\n" +
    "\t<div show=\"showWindow\">\n" +
    "\t\t\n" +
    "\t</div>\n" +
    "\t\n" +
    "        \n" +
    "</div>\n" +
    "    \n" +
    "    \n" +
    "\n"
  );

  $templateCache.put("app/templates/tools/quoter/quoterTool.html",
    "<div class=\"row vendorSection area\" ui-if=\"vendor\">\n" +
    "    <div class=\"span8 offset1\">\n" +
    "        <h1 ng-show=\"!vendor.logo\">{{vendor.name}}</h1>\n" +
    "        <a ng-show=\"vendor.website\" href=\"{{vendor.website}}\">\n" +
    "            <img class=\"img-rounded img-large vendor-logo\" ng-src=\"{{vendor.logo.original}}\" ng-show=\"vendor.logo.original\" title=\"{{vendor.name}}\" />\n" +
    "        </a>\n" +
    "        <img class=\"img-rounded img-large vendor-logo\" ng-src=\"{{vendor.logo.original}}\" ng-show=\"vendor.logo.original && !vendor.website\" title=\"{{vendor.name}}\" />\n" +
    "        \n" +
    "    </div>\n" +
    "    <div class=\"span2\">\n" +
    "        <img class=\"pull-right poweredby\" src=\"img/powered_by.png\" />\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row area\" ui-if=\"!didQuote && !vendor_id\">\n" +
    "\n" +
    "    <div class=\"span8 offset1\">\n" +
    "            \n" +
    "        <label>Choose your vendor</label>\n" +
    "        <select ui-if=\"!didQuote && !vendor_id\" id=\"vendorName\" ng-model=\"quote.vendorId\" ng-options=\"value._id as value.name for (key, value) in vendors\" ></select>\n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"span2\">\n" +
    "        <img class=\"pull-right poweredby\" src=\"img/powered_by.png\" />\n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row area-dark area\">\n" +
    "    <div class=\"span10 offset1\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h3>Equipment Information</h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"row area-equiptment area\">\n" +
    "            <div class=\"span5\">\n" +
    "                <label>Total Cost</label>\n" +
    "                <span class=\"dollarSign\">$</span><input type=\"text\" class=\"input-xlarge\" placeholder=\"\" ng-model=\"quoteCost\" ng-disabled=\"!canEdit\">\n" +
    "                <p class=\"alert alert-info\" ng-hide=\"!didQuote || !canEdit\">You can change the amount and click re-calculate quote.</p>\n" +
    "                \n" +
    "                <a  class=\"btn btn-primary\" \n" +
    "                    id=\"re-generateQuote\"\n" +
    "                    analytics-on=\"click\" \n" +
    "                    analytics-event=\"ReCalcuate Quote\"\n" +
    "                    analytics-category=\"Tools : Quoter\" \n" +
    "                    ng-disabled=\"\" \n" +
    "                    ng-click=\"generateQuote()\" \n" +
    "                    ui-if=\"didQuote && canEdit\">{{buttonText}}</a>\n" +
    "                    \n" +
    "                <p ui-if=\"didQuote && canEdit\">Or, get a <a href=\"#/tools/quoter\">new quote</a></p>\n" +
    "            \n" +
    "            </div>\n" +
    "            <div class=\"span5\">\n" +
    "                <label>Description of Equipment</label>\n" +
    "                <textarea type=\"text\" class=\"large\" ng-model=\"quote.description\" ng-disabled=\"!canEdit\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row area\" ng-hide=\"didQuote\">   \n" +
    "    <div class=\"span10 offset1\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h3>Company Info</h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"row area\">\n" +
    "            <div class=\"span5\">\n" +
    "                <label>Company Name</label>\n" +
    "                <input type=\"text\" class=\"input-xlarge\" placeholder=\"\" ng-model=\"quote.company.fullLegalBusineessName\">\n" +
    "            </div>\n" +
    "            <div class=\"span5\">\n" +
    "                <label>Address 1</label>\n" +
    "                <input type=\"text\" class=\"input-xlarge\" placeholder=\"\" ng-model=\"quote.company.businessAddress.address1\">\n" +
    "                \n" +
    "                <label>Address 2</label>\n" +
    "                <input type=\"text\" class=\"input-xlarge\" placeholder=\"\" ng-model=\"quote.company.businessAddress.address2\">\n" +
    "                \n" +
    "                <label>City</label>\n" +
    "                <input type=\"text\" placeholder=\"\" class=\"input-xlarge\" ng-model=\"quote.company.businessAddress.city\">\n" +
    "                \n" +
    "                <label>State</label>\n" +
    "                <select class=\"input-medium\" ng-model=\"quote.company.businessAddress.state\" ng-options=\"state.abbreviation as state.name for state in states\"></select>\n" +
    "        \n" +
    "                <label>Zip</label>\n" +
    "                <input type=\"text\" placeholder=\"\" class=\"input-medium\" ng-model=\"quote.company.businessAddress.zip\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row area area-dark\" ng-hide=\"didQuote\">   \n" +
    "    <div class=\"span10 offset1\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h3>Contact Info</h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"row area\">\n" +
    "            <div class=\"span5\">\n" +
    "                <label>Contact Name</label>\n" +
    "                <input type=\"text\" class=\"input-xlarge\" placeholder=\"\" ng-model=\"quote.company.contactPerson.name\">\n" +
    "            </div>\n" +
    "            <div class=\"span5\">\n" +
    "                <label>Email</label>\n" +
    "                <input type=\"text\" class=\"input-xlarge\" placeholder=\"\" ng-model=\"quote.company.contactPerson.email\">\n" +
    "                \n" +
    "                <label>Phone</label>\n" +
    "                <input type=\"text\" class=\"input-xlarge\" placeholder=\"\" ng-model=\"quote.company.contactPerson.phone\">\n" +
    "            \n" +
    "                <p>Preferred contact method</p>\n" +
    "                <a ng-click=\"quote.company.contactPerson.contactMethod = 'email'\" class=\"btn contact-method\" ng-class=\"{active: quote.company.contactPerson.contactMethod == 'email'}\">Email</a>\n" +
    "                <a ng-click=\"quote.company.contactPerson.contactMethod = 'phone'\" class=\"btn contact-method\" ng-class=\"{active: quote.company.contactPerson.contactMethod == 'phone'}\">Phone</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"didQuote\">\n" +
    "\n" +
    "    <div class=\"span10 offset1\">\n" +
    "        \n" +
    "        <h3>Leasing Options</h3>\n" +
    "        \n" +
    "        <div ng-repeat=\"program in filteredPrograms\">\n" +
    "            <h4>{{program.displayName || program.name}}</h4>\n" +
    "            <table class=\"table\" ng-repeat=\"buyOutOption in program.rateSheet.buyoutOptions\">\n" +
    "                <thead>\n" +
    "                    <th class=\"span3\">{{buyOutOption.name}}</th>\n" +
    "                    <th class=\"span1\" ng-repeat=\"term in buyOutOption.terms\">{{term.length}} {{program.rateSheet.termPeriod}}</th>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <td>${{quote.totalCost | number:2}}</td>\n" +
    "                        <td ng-repeat=\"rate in buyOutOption.costs[0].rates\">\n" +
    "                           \n" +
    "                            ${{rate.rate *  quote.totalCost | number:2}}<br/>\n" +
    "                            <a ng-click=\"chooseRate(option.name, program.rateSheet.termLength[$index].length, program.rateSheet.termPeriod, rate.periodPayment)\"  class=\"btn btn-primary btn-select-term\">Select</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        \n" +
    "        <!--\n" +
    "<pre>\n" +
    "        {{filteredPrograms | json}}\n" +
    "        </pre>\n" +
    "-->\n" +
    "        \n" +
    "        <div ng-repeat=\"program in quote.programs\">\n" +
    "            <!--\n" +
    "           <h4>{{program.displayName || program.name}}</h4>\n" +
    "            \n" +
    "<table class=\"table\">    \n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th class=\"span3\">End of Lease Options</th>\n" +
    "                        <th class=\"span1\" ng-repeat=\"term in program.rateSheet.buyoutOptions.termLength\">{{term.length}} {{program.rateSheet.termPeriod}}</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"option in program.rateSheet.buyoutOptions\">\n" +
    "                        <td>{{option.name}}</td>\n" +
    "                        <td ng-repeat=\"rate in option.rates\">\n" +
    "                            {{rate.periodPayment = rate.rate * quote.totalCost | number:2}}\n" +
    "                            <br />\n" +
    "                            <a ng-click=\"chooseRate(option.name, program.rateSheet.termLength[$index].length, program.rateSheet.termPeriod, rate.periodPayment)\"  class=\"btn btn-primary btn-select-term\">Select</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "-->\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "<div class=\"row\" ng-show=\"vendor.legalTerms\">        \n" +
    "    <div class=\"span10 offset1\">\n" +
    "        <br /><br />\n" +
    "        <h3>Terms</h3>\n" +
    "        <div id=\"legalTerms\">{{vendor.legalTerms}}</div>\n" +
    "        <br />\n" +
    "        <p>Quotes expire after 30 (Thirty) days.</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "    \n" +
    "<div class=\"row\" ui-if=\"canEdit && !didQuote\">\n" +
    "        \n" +
    "    <div class=\"span10 offset1 text-center\">\n" +
    "        \n" +
    "        <hr />\n" +
    "        <button type=\"submit\" class=\"btn btn-primary btn-mega\" id=\"generateQuote\" ng-disabled=\"!quote.vendorId\" ng-click=\"generateQuote()\">{{buttonText}}</button>\n" +
    "        <p ng-show=\"didQuote\">Or, get a <a href=\"#/tools/quoter\">new quote</a></p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"didQuote\">        \n" +
    "    <div class=\"span10 offset1\">\n" +
    "    \n" +
    "    <h3>Share</h3>\n" +
    "\n" +
    "    <label>Send this link to share this quote!</label>\n" +
    "    <input type=\"text\" id=\"permalink\" value=\"{{permalink}}\" class=\"input-xxxlarge\" />\n" +
    "    \n" +
    "    <br />\n" +
    "    <button class=\"btn btn-primary\"\n" +
    "        analytics-on=\"click\" \n" +
    "        analytics-event=\"Download quote as PDF\"\n" +
    "        analytics-category=\"Tools : Quoter\"  \n" +
    "        ng-click=\"download()\">Save as PDF<i ng-show=\"downloading\" class=\"icon icon-spinner icon-spin\"></i></button>\n" +
    "    \n" +
    "</div>\n" +
    "\n"
  );

  $templateCache.put("app/templates/users/userEdit.html",
    "<div class=\"row has-title-bar\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "    <div class=\"span10 offset2\">\n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>New User</h2>\n" +
    "                <ul class=\"nav nav-tabs\">\n" +
    "                  <li ng-repeat=\"tab in tabs\" ng-class=\"{active: isActiveTab($index), disabled: !user._id && $index != 0}\"><a ng-click=\"changeTab($index)\">{{tab}}</a></li>\n" +
    "                </ul>\n" +
    "                \n" +
    "                <div class=\"actions\">\n" +
    "                    <a class=\"btn btn-primary\" id=\"save\" ng-show=\"basicForm.$dirty || passwordForm.$dirty\" ng-click=\"save(true)\">Save</a>\n" +
    "                    <a class=\"btn btn-primary\" id=\"cancel\" ng-click=\"cancel()\">Close</a>\n" +
    "                </div>\n" +
    "            \n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <form name=\"basicForm\" class=\"row\" ng-show=\"isActiveTab(0)\">\n" +
    "\n" +
    "            <div class=\"span3\">\n" +
    "                \n" +
    "                <h3>Avatar</h3>\n" +
    "                \n" +
    "                <img class=\"img-circle img-large\" ng-src=\"{{user.avatar.original}}\" ng-show=\"user.avatar.original\" title=\"Logo\" />\n" +
    "                \n" +
    "                <br /><br />\n" +
    "                <button  ng-disabled=\"!user.id\" ng-click=\"pickImage()\" class=\"btn btn-primary\">Pick Avatar</button>\n" +
    "               \n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"span3\">\n" +
    "                \n" +
    "                <h3>Name</h3>\n" +
    "                \n" +
    "                <label>First Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"user.name.first\">\n" +
    "                \n" +
    "                <label>Last Name</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"user.name.last\">\n" +
    "                \n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"span3\">\n" +
    "                \n" +
    "                <h3>Contact</h3>\n" +
    "                \n" +
    "                <label>Email</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"user.email\">\n" +
    "                \n" +
    "                <label>Phone</label>\n" +
    "                <input type=\"text\" placeholder=\"\" ng-model=\"user.phoneNumber\">\n" +
    "                \n" +
    "            </div>\n" +
    "        </form>\n" +
    "        \n" +
    "        <div class=\"row\" ng-show=\"isActiveTab(1)\"> \n" +
    "            \n" +
    "            <div class=\"span5\">\n" +
    "                <h3>User's Vendor List</h3>\n" +
    "            \n" +
    "                <ul ng-show=\"user.vendors.length\" class=\"unstyled currentVendors\">\n" +
    "                    <li ng-repeat=\"item in user.vendors\">\n" +
    "                        <p>\n" +
    "                        <img class=\"img-rounded img-medium\" ng-show=\"item.logo.original\" ng-src=\"{{item.logo.original}}\" />\n" +
    "                        {{item.name}}\n" +
    "                        <button class=\"pull-right btn\" ng-click=\"removeVendor(item)\">\n" +
    "                            <i class=\"icon icon-trash\" ></i>\n" +
    "                        </button>\n" +
    "                        </p>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                \n" +
    "                <p ng-show=\"!user.vendors.length\" class=\"alert\">No vendors are associated with this user yet</p>\n" +
    "\n" +
    "                <label>Add vendor by searching by name</label>\n" +
    "                \n" +
    "                <div class=\"input-append\">\n" +
    "                    <!-- <input type=\"text\" class=\"input-large\" placeholder=\"Vendor Name\" ng-model=\"vendorId\" typeahead=\"vendor._id as vendor.name for vendor in allVendors | filter:$viewValue\"/> -->\n" +
    "                    <input type=\"text\" class=\"input-large\" placeholder=\"Vendor Name\" ng-model=\"vendorId\"/>\n" +
    "                    <!-- <button class=\"btn\" ng-disabled=\"!vendorId\" ng-click=\"addVendor()\">Add Vendor</button> -->\n" +
    "                    \n" +
    "                </div>\n" +
    "                \n" +
    "                \n" +
    "                <ul class=\"unstyled addVendors\">\n" +
    "                    <li ng-repeat=\"item in allVendors | filter: vendorId\">\n" +
    "                        <p>\n" +
    "                            <img class=\"img-rounded img-medium\" ng-show=\"item.logo.original\" ng-src=\"{{item.logo.original}}\" />\n" +
    "                            {{item.name}}\n" +
    "                            <button class=\"pull-right btn\" ng-click=\"addVendor(item)\">\n" +
    "                                <i class=\"icon-plus\"></i>\n" +
    "                            </button>\n" +
    "                        </p>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                               \n" +
    "                \n" +
    "               \n" +
    "                <!--\n" +
    "        \n" +
    "                <label>Add a vendor for {{user.username}}</label>\n" +
    "                <input type=\"text\" ng-model=\"newVendor\"/>\n" +
    "                <br />\n" +
    "                <button ng-click=\"addVendorToUser()\" class=\"btn btn-primary\" placeholde=\"Type Vendor Name\">Add Vendor</button>\n" +
    "            \n" +
    "                -->\n" +
    "            </div>\n" +
    " \n" +
    "        </div>\n" +
    "        \n" +
    "        <form name=\"passwordForm\" class=\"row\" ng-show=\"isActiveTab(2)\">\n" +
    "            <div class=\"span4\">\n" +
    "                <h3>Change Password</h3>\n" +
    "                \n" +
    "                <label>Password</label>\n" +
    "                <input type=\"password\" placeholder=\"\" ng-model=\"user.password\">\n" +
    "                \n" +
    "            </div>\n" +
    "        </form>\n" +
    "        \n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );

  $templateCache.put("app/templates/users/userList.html",
    "<div class=\"row has-title-bar has-no-tabs\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "    <div class=\"span10 offset2\">\n" +
    "        \n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>Users</h2>\n" +
    "                <a id=\"addUser\" class=\"btn btn-primary actions\" href=\"#/dashboard/users/new\">Add New User</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-inline\">\n" +
    "            <label>Search\n" +
    "            <input type=\"text\" placeholder=\"Search\" ng-model=\"searchTerm\"></label>\n" +
    "        </div>\n" +
    "        \n" +
    "        <table class=\"table\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th class=\"\">Avatar</th>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Group</th>\n" +
    "                    <th>Vendor Count</th>\n" +
    "                    <th>Actions</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in users | filter: searchTerm\">\n" +
    "                    <td>\n" +
    "                        <img class=\"img-circle img-medium\" ng-show=\"item.avatar.original\" ng-src=\"{{item.avatar.original}}\" />\n" +
    "                    </td>\n" +
    "                    <td>{{item.name.first}} {{item.name.last}}\n" +
    "                        <br />\n" +
    "                        {{item.phoneNumber}}\n" +
    "                    </td>\n" +
    "                    <td>{{ item.groups[0]}}</td>\n" +
    "                    <td>{{item.vendors.length || 0 | number}}</td>\n" +
    "                    <td>\n" +
    "                        <a class=\"edit\" ng-click=\"editItem(item._id)\">Edit</a> | \n" +
    "                        <a class=\"view\" ng-click=\"editItem(item._id)\">View</a> | \n" +
    "                        <a class=\"delete\" ng-click=\"deleteItem(item._id)\">Delete</a>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        \n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/templates/vendors/vendorEdit.html",
    "<div class=\"row has-title-bar\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "        <div class=\"span10 offset2\">\n" +
    "            \n" +
    "            <div class=\"row title-bar\">\n" +
    "                <div class=\"span10\">\n" +
    "                    <h2>New Vendor</h2>\n" +
    "                    <ul class=\"nav nav-tabs\">\n" +
    "                  <li ng-repeat=\"tab in tabs\" ng-class=\"{active: isActiveTab($index), disabled: !vendor._id && $index != 0}\"><a ng-click=\"changeTab($index)\">{{tab}}</a></li>\n" +
    "                </ul>\n" +
    "                    \n" +
    "                    <div class=\"actions\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-primary\" id=\"save\" ng-show=\"basicForm.$dirty || customizeForm.$dirty || locationForm.$dirty || customNameForm.$dirty\" ng-disabled=\"basicForm.$invalid || customizeForm.$invalid || locationForm.$invalid || customNameForm.$invalid\" ng-click=\"save(true)\">Save</button>\n" +
    "                        <a class=\"btn btn-primary\" id=\"cancel\" ng-click=\"cancel()\">Close</a>\n" +
    "                    </div>\n" +
    "                \n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "            <form name=\"basicForm\" class=\"row\" ng-show=\"isActiveTab(0)\">\n" +
    "                <div class=\"span3\">\n" +
    "                    <h3>Vendor</h3>\n" +
    "                    \n" +
    "                    <label>Vendor Name</label>\n" +
    "                    <input type=\"text\" id=\"name\" placeholder=\"Name\" ng-model=\"vendor.name\" class=\"input-large\">\n" +
    "                    <!-- <input type=\"text\" placeholder=\"Vendor ID\" disabled=\"disabled\" ng-model=\"vendor._id\"> -->\n" +
    "                    \n" +
    "                    <label>Website</label>\n" +
    "                    <input type=\"text\" class=\"large\" placeholder=\"Website\" ng-model=\"vendor.website\">\n" +
    "                    \n" +
    "                    <label>Business Phone</label>\n" +
    "                    <input type=\"text\" class=\"medium\" placeholder=\"Business Phone\" ng-model=\"vendor.businessPhone\">\n" +
    "                    \n" +
    "                    <label>Logo</label>\n" +
    "                    <img class=\"img-rounded img-large\" ng-src=\"{{vendor.logo.original}}\" ng-show=\"vendor.logo.original\" title=\"Logo\" /><br/><br/>\n" +
    "                    <button ng-click=\"pickImage()\" class=\"btn btn-primary\">Pick Logo</button>\n" +
    " \n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"span3\">            \n" +
    "                    <h3>Location</h3>\n" +
    "                    <label>Address 1</label>\n" +
    "                    <input type=\"text\" placeholder=\"Address 1\" ng-model=\"vendor.businessAddress.address1\">\n" +
    "                    \n" +
    "                    <label>Address 2</label>\n" +
    "                    <input type=\"text\" placeholder=\"Address 2\" ng-model=\"vendor.businessAddress.address2\">\n" +
    "                    \n" +
    "                    <label>City</label>\n" +
    "                    <input type=\"text\" placeholder=\"City\" ng-model=\"vendor.businessAddress.city\">\n" +
    "                    <!-- <input type=\"text\" placeholder=\"State\" ng-model=\"vendor.state\"> -->\n" +
    "                    <label>State</label>\n" +
    "                    <select class=\"medium\" ng-model=\"vendor.businessAddress.state\" ng-options=\"state.abbreviation as state.name for state in states\"></select>\n" +
    "                    \n" +
    "                    <label>Zip</label>\n" +
    "                    <input type=\"text\" class=\"medium\" placeholder=\"Zip\" ng-model=\"vendor.businessAddress.zip\">\n" +
    "                    \n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"span3\">  \n" +
    "                   \n" +
    "                    <h3>Primary Contact</h3>\n" +
    "                    <label>Name</label>\n" +
    "                    <input type=\"text\" placeholder=\"Name\" ng-model=\"vendor.contactPerson.name\">\n" +
    "                    \n" +
    "                    <label>Email</label>\n" +
    "                    <input type=\"text\" placeholder=\"Email\" ng-model=\"vendor.contactPerson.email\">\n" +
    "                    \n" +
    "                    <label>Phone</label>\n" +
    "                    <input type=\"text\" placeholder=\"Phone\" ng-model=\"vendor.contactPerson.phone\">\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            \n" +
    "            <div class=\"row\" ng-show=\"isActiveTab(1)\">\n" +
    "                <div class=\"span5\">\n" +
    "                    <h3>Marlin Sales Rep</h3>\n" +
    "                    \n" +
    "                    <div ng-show=\"vendor.salesRep\">\n" +
    "                        <img class=\"img-large img-circle\" ng-src=\"{{vendor.salesRep.avatar.original}}\" ng-show=\"vendor.salesRep.avatar.original\"/>\n" +
    "                        <h5 class=\"salesRepName\">{{vendor.salesRep.name.first}} {{vendor.salesRep.name.last}}</h5>\n" +
    "                        <p>{{vendor.salesRep.email}}</p>\n" +
    "                        <p>{{vendor.salesRep.phone}}</p>\n" +
    "                        \n" +
    "                        <button class=\"btn btn-primary\" id=\"removeSalesRep\" ng-click=\"removeSalesRep()\">Remove Sales Rep</button>\n" +
    "                        \n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div ng-show=\"!vendor.salesRep\">\n" +
    "                        <p class=\"alert\">This vendor currently has no Marlin Sales Rep</p>\n" +
    "                        \n" +
    "                        <label>Add sales rep by searching by name</label>\n" +
    "                        <div class=\"input-append\">\n" +
    "                            <!-- <input type=\"text\" class=\"input-large\" placeholder=\"Sales Rep Name\" ng-model=\"salesRepId\" id=\"salesRepId\" typeahead=\"rep._id as rep.fullname for rep in allReps | filter:$viewValue\"/> -->\n" +
    "                            <!-- <button class=\"btn\" id=\"addSalesRep\" ng-disabled=\"!salesRepId\" ng-click=\"addSalesRep()\">Add Sales Rep</button> -->\n" +
    "                            <input type=\"text\" class=\"input-large\" placeholder=\"Sales Rep Name\" ng-model=\"salesRepId\" id=\"salesRepId\" />\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <!-- <pre>{{allReps}}</pre> -->\n" +
    "                        <ul class=\"unstyled salesReps\">\n" +
    "                            <li ng-repeat=\"item in allReps | filter:salesRepId\">\n" +
    "                                <p>\n" +
    "                                    <img class=\"img-circle img-tiny\" ng-show=\"item.avatar.original\" ng-src=\"{{item.avatar.original}}\" />\n" +
    "                                    {{item.fullname}}\n" +
    "                                    <button class=\"pull-right btn\" ng-click=\"addSalesRep(item._id)\">\n" +
    "                                        <i class=\"icon-plus\"></i>\n" +
    "                                    </button>\n" +
    "                                </p>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        \n" +
    "                    </div>\n" +
    "                \n" +
    "                </div>\n" +
    "            \n" +
    "            \n" +
    "            </div>\n" +
    "                \n" +
    "            <div class=\"row\" ng-show=\"isActiveTab(2)\">    \n" +
    "\n" +
    "                <div class=\"span5\" ng-hide=\"!vendor._id\">\n" +
    "                    <h3>Vendor Lease Programs</h3>\n" +
    "                    <form name=\"customNameForm\">\n" +
    "                        <ul id=\"vendorPrograms\" class=\"unstyled\">\n" +
    "                            <li ng-repeat=\"item in vendorPrograms\" ng-show=\"item.rateSheet\">\n" +
    "                                <hr />\n" +
    "                                <label>Program name for this vendor. Changing this will not effect other vendors with the same program.</label>\n" +
    "                                <input required type=\"text\" value=\"{{item.displayName}}\" ng-model=\"item.displayName\" placeholder=\"Display Name\" />\n" +
    "                                <br />\n" +
    "                                <button ng-click=\"removeProgram(item)\" class=\"btn\">Remove</button>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </form>\n" +
    "                    \n" +
    "                    <!-- <p ng-show=\"!vendor.programs.length\" class=\"alert\">No programs are associated with the vendor yet</p>   -->\n" +
    "                      \n" +
    "                </div>\n" +
    "                <div class=\"span5\" ng-hide=\"!vendor._id\">\n" +
    "                    <h3>All Available Lease Programs</h3>\n" +
    "                    <ul id=\"allPrograms\" class=\"unstyled\">\n" +
    "                        <li ng-repeat=\"item in programs\">\n" +
    "                            <hr />\n" +
    "                            <p>{{item.name}}</p>\n" +
    "                            <button ng-click=\"addProgram(item)\" class=\"btn\">Add</button>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "            \n" +
    "            <form name=\"customizeForm\" class=\"row\" ng-show=\"isActiveTab(3)\">\n" +
    "                <div class=\"span10\">\n" +
    "                    <h3>Customize Vendor Application</h3>\n" +
    "                    \n" +
    "                    <label>Legal Terms which display on application</label>\n" +
    "                    <textarea class='legalTerms' ng-model=\"vendor.legalTerms\"></textarea>\n" +
    "                </div>\n" +
    "            \n" +
    "                <div class=\"span10\">    \n" +
    "                            \n" +
    "                    <hr />\n" +
    "                    \n" +
    "                    \n" +
    "                    \n" +
    "                </div>\n" +
    "            </form><!-- row -->\n" +
    "            \n" +
    "            <form name=\"locationForm\" class=\"row\" ng-show=\"isActiveTab(4)\">\n" +
    "                \n" +
    "                <div class=\"span10\">\n" +
    "                    \n" +
    "                    <div class=\"row\">\n" +
    "                    \n" +
    "                        <div class=\"span4\">\n" +
    "                            \n" +
    "                            <p>Vendor location is automatically generated from location data below. Change this information and click button to update on map.</p>\n" +
    "                            <button ng-click=\"findMyLocation()\" class=\"btn\" >Update Location</button>\n" +
    "                            \n" +
    "                            <label>Address 1</label>\n" +
    "                            <input type=\"text\" placeholder=\"Address 1\" ng-model=\"vendor.businessAddress.address1\">\n" +
    "                            \n" +
    "                            <label>Address 2</label>\n" +
    "                            <input type=\"text\" placeholder=\"Address 2\" ng-model=\"vendor.businessAddress.address2\">\n" +
    "                            \n" +
    "                            <label>City</label>\n" +
    "                            <input type=\"text\" placeholder=\"City\" ng-model=\"vendor.businessAddress.city\">\n" +
    "                            <!-- <input type=\"text\" placeholder=\"State\" ng-model=\"vendor.state\"> -->\n" +
    "                            <label>State</label>\n" +
    "                            <select class=\"medium\" ng-model=\"vendor.businessAddress.state\" ng-options=\"state.abbreviation as state.name for state in states\"></select>\n" +
    "                            \n" +
    "                            <label>Zip</label>\n" +
    "                            <input type=\"text\" class=\"medium\" placeholder=\"Zip\" ng-model=\"vendor.businessAddress.zip\">\n" +
    "                        \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"span4\">\n" +
    "                            <p>Current Geo Location Shown to visitors.</p>\n" +
    "                            <div class=\"google-map\"\n" +
    "                        \t\tcenter=\"map.center\"\n" +
    "                        \t\tzoom=\"map.zoom\"\n" +
    "                        \t\tdraggable=\"true\"\n" +
    "                        \t\trefresh=\"activeTab\"\n" +
    "                        \t\tdragging=\"map.dragging\">\n" +
    "                        \t\t<!-- prefedined markers -->\n" +
    "                        \t\t<marker ng-repeat=\"m in vendorMarker\" coords=\"m\" icon=\"m.icon\" >\n" +
    "                    \t\t\t\t<window show=\"m.showWindow\" closeClick=\"m.closeClick()\">\n" +
    "                    \t\t\t\t\t<img ng-src=\"{{m.logo}}\" class=\"img-medium\"/>\n" +
    "                    \t\t\t\t\t<p>{{m.name}}</p>\n" +
    "                                        <p>{{m.businessPhone}}</p>\n" +
    "                                        <p>{{m.businessAddress.address1}}<br/>\n" +
    "                                        <p>{{m.businessAddress.address2}}</p>\n" +
    "                                        <p>{{m.businessAddress.city}}, {{m.businessAddress.state}} {{m.businessAddress.zip}}</p>\n" +
    "                    \t\t\t\t\t<p ng-show=\"m.distance && hasLocation\">{{m.distance| number:0}} miles away</p>\n" +
    "                    \t\t\t\t\t<p><a target=\"_blank\" ng-href=\"{{m.destAddress}}\">Directions</a></p>\n" +
    "                    \t\t\t\t</window>\n" +
    "                    \t\t\t</marker>\n" +
    "                            \n" +
    "                            </div>\n" +
    "                        \n" +
    "                        </div>\n" +
    "                    \n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "            \n" +
    "            </form><!-- row -->\n" +
    "            \n" +
    "        </div><!-- offset 2 -->\n" +
    " \n" +
    "</div>"
  );

  $templateCache.put("app/templates/vendors/vendorList.html",
    "<div class=\"row has-title-bar has-no-tabs\">\n" +
    "    <div class=\"span2 sidebar\" ng-include=\"'app/templates/nav.html'\"></div>\n" +
    "    <div class=\"span10 offset2\">\n" +
    "        \n" +
    "        <div class=\"row title-bar\">\n" +
    "            <div class=\"span10\">\n" +
    "                <h2>Vendors</h2>\n" +
    "                <a id=\"addVendor\" class=\"btn btn-primary actions\" href=\"#/dashboard/vendors/new\">Add New Vendor</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"span10\">\n" +
    "                \n" +
    "                <div class=\"form-inline\">\n" +
    "                    <label>Search\n" +
    "                    <input type=\"text\" placeholder=\"Search\" ng-model=\"searchTerm\"></label>\n" +
    "                </div>\n" +
    "                \n" +
    "                <table class=\"table\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Logo</th>\n" +
    "                            <th>Name</th>\n" +
    "                            <th>Vendor Contact</th>\n" +
    "                            <th>Marlin Sales Rep</th>\n" +
    "                            <th>Actions</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"item in vendors | filter: searchTerm\">\n" +
    "                            <td>\n" +
    "                                <img class=\"img-rounded img-medium\" ng-show=\"item.logo.original\" ng-src=\"{{item.logo.original}}\" />\n" +
    "                                <div class=\"img-rounded placeholder\" ng-show=\"!item.logo.original\"/>\n" +
    "                            </td>\n" +
    "                            <td>{{item.name}}</td>\n" +
    "                            <td>{{item.contactPerson.name}}<br/>\n" +
    "                                {{item.contactPerson.email}}<br/>\n" +
    "                                {{item.contactPerson.phone}}\n" +
    "                            </td>\n" +
    "                            <td ng-show=\"item.salesRep\">\n" +
    "                                <img class=\"img-circle img-tiny\" ng-show=\"item.salesRep.avatar.original\" ng-src=\"{{item.salesRep.avatar.original}}\" />\n" +
    "                                <p>{{item.salesRep.name.first}} {{item.salesRep.name.last}}</p>\n" +
    "                            </td>\n" +
    "                            <td ng-show=\"!item.salesRep\">\n" +
    "                                No sales rep\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <a class=\"edit\" ng-click=\"editItem(item._id)\">Edit</a> | \n" +
    "                                <a class=\"viewCalculator\" ng-click=\"viewCalculator(item._id)\">New Quote</a> | \n" +
    "                                <a class=\"delete\" ng-click=\"deleteItem(item._id)\">Delete</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("app/test/e2e/runner.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <title>End2end Test Runner</title>\n" +
    "    \n" +
    "    <!-- see for reference http://docs.angularjs.org/guide/dev_guide.e2e-testing -->\n" +
    "    \n" +
    "    <script src=\"../../../../bower_components/angular-scenario/angular-scenario.js\" ng-autotest></script>   \n" +
    "    \n" +
    "    <script src=\"utilities.js\"></script>\n" +
    "    \n" +
    "    <script src=\"tools_quoter.js\"></script>\n" +
    "    <script src=\"tools_application.js\"></script>\n" +
    " \n" +
    "    <script src=\"manage_users.js\"></script>\n" +
    "    <script src=\"manage_applications.js\"></script>\n" +
    "    <script src=\"manage_quotes.js\"></script>\n" +
    "    <script src=\"manage_vendors.js\"></script>\n" +
    "\n" +
    "    <script src=\"manage_programs.js\"></script>\n" +
    "    <script src=\"relate_programs_to_vendors.js\"></script>\n" +
    "    <script src=\"relate_users_to_vendors.js\"></script>\n" +
    "    <script src=\"authentication.js\"></script>\n" +
    "\n" +
    "  </head>\n" +
    "  <body>\n" +
    "  </body>\n" +
    "</html>\n"
  );

}]);
