"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var appBundle = function () {
  'use strict';
  /*
  gl:http://127.0.0.1/lightning-perf-spark.js
   gl:http://127.0.0.1/spark/lightning-perf-spark.js
     http://127.0.0.1/web/index.html
  */

  var lastCount = 0;
  var lastFrame_ms = 0;
  var frameStart_ms = 0;
  var frameEnd_ms = 0;
  var minJitter_ms = 10000;
  var maxJitter_ms = 0; //-10000;

  var PFX = ""; //>>  "

  var LOG_PFX = "LIGHTNING_PERF >>  ";
  var IMG_ITERATIONS = 1000;
  var TXT_ITERATIONS = 1000;
  var DELAY_MS = 3 * 1000; // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  var MyApp =
  /*#__PURE__*/
  function (_ux$App) {
    _inherits(MyApp, _ux$App);

    function MyApp() {
      _classCallCheck(this, MyApp);

      return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
    }

    _createClass(MyApp, [{
      key: "getFonts",
      value: function getFonts() {
        return [{
          family: 'RobotoBold',
          url: MyApp.getPath('fonts/Roboto-Bold.ttf'),
          descriptors: {}
        }, {
          family: 'RobotoRegular',
          url: MyApp.getPath('fonts/Roboto-Regular.ttf'),
          descriptors: {}
        }, {
          family: 'RobotoItalic',
          url: MyApp.getPath('fonts/Roboto-Italic.ttf'),
          descriptors: {}
        }, {
          family: 'RobotoLight',
          url: MyApp.getPath('fonts/Roboto-Light.ttf'),
          descriptors: {}
        }, {
          family: 'RobotoBlack',
          url: MyApp.getPath('fonts/Roboto-Black.ttf'),
          descriptors: {}
        }];
      } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "_init",
      value: function _init() {
        var _this = this;

        this.count = 0;
        this.fpsData = [];
        this.fpsSamples = 1000;
        this.startFpsTest = false;
        var self = this;

        if (lastCount == 0) {
          lastCount = this.stage.frameCounter;
        }

        this.stage.on('frameStart', function () {// if(this.stage.frameCounter == 0)
          //     ;
          // frameStart_ms =  Date.now();
        });
        this.stage.on('frameEnd', function () {
          var now = Date.now();
          var frames = _this.stage.frameCounter - lastCount; // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

          if (_this.startFpsTest && frameStart_ms != 0) // && this.fpsSamples > 0)
            {
              var thisFrame_ms = now - frameStart_ms;
              var delta_ms = Math.abs(lastFrame_ms - thisFrame_ms);

              _this.fpsData.push(thisFrame_ms);

              if (delta_ms >= maxJitter_ms) {
                console.log(" thisFrame_ms: " + thisFrame_ms + "      delta_ms: " + delta_ms);
              }

              minJitter_ms = delta_ms < minJitter_ms ? minJitter_ms = delta_ms : minJitter_ms;
              maxJitter_ms = delta_ms >= maxJitter_ms ? maxJitter_ms = delta_ms : maxJitter_ms;
              lastFrame_ms = thisFrame_ms; // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              //
              //  FRAME RATE SAMPLING + + STD DEV
              //

              if (_this.startFpsTest) {
                if (_this.fpsSamples > 0) {
                  _this.fpsSamples--;
                } else {
                  //std dev
                  var n = _this.fpsData.length;
                  var mean = _this.fpsData.reduce(function (a, b) {
                    return a + b;
                  }) / n;
                  var s = Math.sqrt(_this.fpsData.map(function (x) {
                    return Math.pow(x - mean, 2);
                  }).reduce(function (a, b) {
                    return a + b;
                  }) / n);
                  console.log("INFO:  FPS ... Standard Dev: " + s); // LOG RESULT

                  _this.patch({
                    Text5: {
                      text: PFX + "Frame Rate:  Max: " + maxJitter_ms + "  min: " + minJitter_ms + "  Std Dev: " + s
                    }
                  });

                  console.log(LOG_PFX + "FrameRate=" + maxJitter_ms + " (Max) " + minJitter_ms + " (min)  " + s + "  (StdDev)");

                  _this._setState('EndTests');

                  _this.startFpsTest = false;
                }
              } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

            } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


          if (frames >= 60) {
            frameEnd_ms = now;
            var frame_ms = (frameEnd_ms - frameStart_ms) / frames; // average Frame Time

            var fps = 1.0 / (frame_ms / 1000.0); // console.log('    fps: ' + fps );
            // console.log(' frames: ' + frames );
            // console.log('>> frame_ms: ' + frame_ms     + " ms\n" );

            var jitterTxt = _this.startFpsTest ? "  M: " + maxJitter_ms + "  m: " + minJitter_ms : "";
            self.patch({
              Fps: {
                text: "fps: " + fps.toFixed(2) + jitterTxt
              }
            });
            frameStart_ms = frameEnd_ms;
            lastCount = _this.stage.frameCounter;
          }
        });

        if (typeof epoch_ms !== 'undefined') {
          // LOG RESULT
          var loaded = "LoadTime=" + (Date.now() - epoch_ms) + " ms  \n";
          console.log(LOG_PFX + loaded);
          this.patch({
            Text1: {
              text: loaded
            }
          });
        } else {
          console.log("WARNING:   'epoch_ms' was NOT found. ");
        }

        if (typeof this.stage.startApp_ms !== 'undefined') {
          // LOG RESULT
          var started = 'StartTime=' + (Date.now() - this.stage.startApp_ms) + " ms  \n";
          console.log(LOG_PFX + started);
          this.patch({
            Text2: {
              text: started
            }
          });
        } else {
          console.log("WARNING:   'this.stage.startApp_ms' was NOT found. ");
        } // Preload fonts list
        // const font_list = this.getFonts();
        // const font_url  = font_list[0].url;


        this.perfTests = [];
        {
          this._setState('DelayStart');
        }
      } // init()
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "doImageTest",
      value: function doImageTest(url) {
        var self = this;
        return new Promise(function (resolve) {
          var s0 = Date.now(); /// ###

          self.stage.platform.loadSrcTexture({
            src: url
          }, function (params) {
            var elapsed = Date.now() - s0; /// ###

            resolve(elapsed);
          });
        });
      } // doImageTest()
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "doImageTests",
      value: function () {
        var _doImageTests = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var image_url, res, sigma_ms, average_ms, i, ans;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // const image_url = "https://webplatformforembedded.github.io/Lightning/img/Lightning.png";
                  image_url = "http://www.sparkui.org/docs/images/SparkEdge128.png";
                  res = [];
                  sigma_ms = 0;
                  average_ms = 0;
                  this.patch({
                    Text3: {
                      text: PFX + "ImageTexture:  (running)"
                    }
                  }); // - - - - - - - - - - - - - - - - - - - - - - - - - -

                  i = 0;

                case 6:
                  if (!(i < IMG_ITERATIONS)) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 9;
                  return this.doImageTest(image_url);

                case 9:
                  ans = _context.sent;
                  // AWAIT promise
                  res.push(ans); // Compute running average...
                  //

                  sigma_ms += ans;
                  average_ms = sigma_ms / res.length;

                  if (i % 10 == 0) {
                    this.patch({
                      Text3: {
                        text: PFX + "ImageTexture: ... " + average_ms.toFixed(2) + " ms ... (running - " + i + " of " + IMG_ITERATIONS + ")"
                      }
                    });
                  }

                case 14:
                  i++;
                  _context.next = 6;
                  break;

                case 17:
                  //FOR
                  // - - - - - - - - - - - - - - - - - - - - - - - - - -
                  // LOG RESULT
                  this.patch({
                    Text3: {
                      text: PFX + "ImageTexture: " + average_ms + " ms  ...  elapsed: " + (sigma_ms / 1000).toFixed(2) + " sec "
                    }
                  });
                  console.log(LOG_PFX + "ImageTexture=" + average_ms + " ms  ...  elapsed: " + (sigma_ms / 1000).toFixed(2) + " sec "); // this.patch({ Text3: {text: PFX + "ImageTexture: " + average_ms + " ms  [m: " +min_ms +" M: " + max_ms + "]  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec"  }});

                  this._setState('DoTextTests');

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function doImageTests() {
          return _doImageTests.apply(this, arguments);
        }

        return doImageTests;
      }() // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "doTextTest",
      value: function doTextTest(i) {
        var self = this;
        return new Promise(function (resolve) {
          var s0 = Date.now(); /// ###
          // Blocking call ???

          var initData = {
            text: "TextTest " + i
          };
          var xx = 18;
          var yy = 25;
          var newText = self.stage.c({
            type: TextItem,
            initData: initData,
            async: false,
            x: i * xx * 1.5,
            y: i * yy,
            visible: true
          });
          self.tag('Bg720').add(newText);
          var elapsed = Date.now() - s0; /// ###

          resolve(elapsed);
        }); //PROMISE
      } // doImageTest()
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "doTextTests",
      value: function () {
        var _doTextTests = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var res, sigma_ms, average_ms, i, ans;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  res = [];
                  sigma_ms = 0;
                  average_ms = 0;
                  this.patch({
                    Text4: {
                      text: PFX + "TextTexture:  (running)"
                    }
                  }); // - - - - - - - - - - - - - - - - - - - - - - - - - -

                  i = 0;

                case 5:
                  if (!(i < TXT_ITERATIONS)) {
                    _context2.next = 16;
                    break;
                  }

                  _context2.next = 8;
                  return this.doTextTest(i);

                case 8:
                  ans = _context2.sent;
                  // AWAIT promise
                  res.push(ans); // Compute running average...
                  //

                  sigma_ms += ans;
                  average_ms = sigma_ms / res.length;

                  if (i % 10 == 0) {
                    this.patch({
                      Text4: {
                        text: PFX + "TextTexture: " + average_ms.toFixed(2) + " ms ... (running - " + i + " of " + TXT_ITERATIONS + ")"
                      }
                    });
                  }

                case 13:
                  i++;
                  _context2.next = 5;
                  break;

                case 16:
                  //FOR
                  // - - - - - - - - - - - - - - - - - - - - - - - - - -
                  // this.patch({ Text4: {text: PFX + "TextTexture: " + average_ms + " ms  [m: " +min_ms +" M: " + max_ms + "]  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec"  }});
                  // LOG RESULT
                  this.patch({
                    Text4: {
                      text: PFX + "TextTexture: ... " + average_ms + " ms  ...  elapsed: " + (sigma_ms / 1000).toFixed(2) + " sec   ... (" + TXT_ITERATIONS + ")"
                    }
                  });
                  console.log(LOG_PFX + "TextTexture=" + average_ms + " ms  ...  elapsed: " + (sigma_ms / 1000).toFixed(2) + " sec   ... (" + TXT_ITERATIONS + ")");

                  this._setState('DoFpsTests');

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function doTextTests() {
          return _doTextTests.apply(this, arguments);
        }

        return doTextTests;
      }() // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "doFpsTests",
      value: function doFpsTests() {
        this.startFpsTest = true;
        this.patch({
          Text5: {
            text: PFX + "Frame Rate   (running) "
          }
        });
      } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "doTests",
      value: function doTests() {
        this.patch({
          Status: {
            text: "Status:  Testing..."
          }
        });
        this.patch({
          Text3: {
            text: PFX + "ImageTexture: (pending) "
          }
        });
        this.patch({
          Text4: {
            text: PFX + "TextTexture:  (pending) "
          }
        });
        this.patch({
          Text5: {
            text: PFX + "Frame Rate:   (pending) "
          }
        });

        this._setState('DoImageTests');
      }
    }, {
      key: "delayStart",
      value: function delayStart() {
        this.patch({
          Status: {
            text: "Status:  Waiting..."
          }
        });
        var self = this;
        setTimeout(function () {
          self.patch({
            Status: {
              text: "Status:  Starting..."
            }
          });

          self._setState('DoTextTests');
        }, DELAY_MS);
      } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }], [{
      key: "_states",
      value: function _states() {
        return [
        /*#__PURE__*/
        function (_this2) {
          _inherits(DelayStart, _this2);

          function DelayStart() {
            _classCallCheck(this, DelayStart);

            return _possibleConstructorReturn(this, _getPrototypeOf(DelayStart).apply(this, arguments));
          }

          _createClass(DelayStart, [{
            key: "$enter",
            value: function $enter(event) {
              console.log("Delayed Start Tests...");
              this.delayStart();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              console.log("Commecing Tests...");
            }
          }]);

          return DelayStart;
        }(this),
        /*#__PURE__*/
        function (_this3) {
          _inherits(StartTests, _this3);

          function StartTests() {
            _classCallCheck(this, StartTests);

            return _possibleConstructorReturn(this, _getPrototypeOf(StartTests).apply(this, arguments));
          }

          _createClass(StartTests, [{
            key: "$enter",
            value: function $enter(event) {
              console.log("Preparing PERFORMANCE Tests...");
              this.doTests();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              console.log("Commecing PERFORMANCE Tests...");
            }
          }]);

          return StartTests;
        }(this),
        /*#__PURE__*/
        function (_this4) {
          _inherits(DoImageTests, _this4);

          function DoImageTests() {
            _classCallCheck(this, DoImageTests);

            return _possibleConstructorReturn(this, _getPrototypeOf(DoImageTests).apply(this, arguments));
          }

          _createClass(DoImageTests, [{
            key: "$enter",
            value: function $enter() {
              console.log("Starting IMAGE Tests...");
              this.doImageTests();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              console.log("Finishing IMAGE Tests...");
            }
          }]);

          return DoImageTests;
        }(this),
        /*#__PURE__*/
        function (_this5) {
          _inherits(DoTextTests, _this5);

          function DoTextTests() {
            _classCallCheck(this, DoTextTests);

            return _possibleConstructorReturn(this, _getPrototypeOf(DoTextTests).apply(this, arguments));
          }

          _createClass(DoTextTests, [{
            key: "$enter",
            value: function $enter() {
              console.log("Starting TEXT Tests...");
              this.doTextTests();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              console.log("Finishing TEXT Tests...");
            }
          }]);

          return DoTextTests;
        }(this),
        /*#__PURE__*/
        function (_this6) {
          _inherits(DoFpsTests, _this6);

          function DoFpsTests() {
            _classCallCheck(this, DoFpsTests);

            return _possibleConstructorReturn(this, _getPrototypeOf(DoFpsTests).apply(this, arguments));
          }

          _createClass(DoFpsTests, [{
            key: "$enter",
            value: function $enter() {
              console.log("Starting FPS Tests...");
              this.doFpsTests();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              console.log("Finishing FPS Tests...");
            }
          }]);

          return DoFpsTests;
        }(this),
        /*#__PURE__*/
        function (_this7) {
          _inherits(EndTests, _this7);

          function EndTests() {
            _classCallCheck(this, EndTests);

            return _possibleConstructorReturn(this, _getPrototypeOf(EndTests).apply(this, arguments));
          }

          _createClass(EndTests, [{
            key: "$enter",
            value: function $enter(event) {
              console.log("Finshed TESTING...");
              this.patch({
                Status: {
                  text: "Status:  Complete"
                }
              });
            }
          }, {
            key: "$exit",
            value: function $exit() {
              console.log("FIN ...");
            }
          }]);

          return EndTests;
        }(this)];
      } // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    }, {
      key: "_template",
      value: function _template() {
        var gui = {
          Bg1080: {
            x: 0,
            y: 0,
            w: 1920,
            h: 1080,
            rect: true,
            color: 0xFF888888
          },
          // "#888888"
          Bg720: {
            x: 0,
            y: 0,
            w: 1280,
            h: 720,
            rect: true,
            color: 0xFF777777
          },
          // "#777777"
          Fps: {
            x: 850,
            y: 50,
            text: {
              fontSize: 20,
              textColor: 0xffeeeeff,
              text: 'fps: '
            }
          },
          Iter: {
            x: 850,
            y: 100,
            text: {
              fontSize: 20,
              textColor: 0xffeeeeff,
              text: 'Iterations: ' + IMG_ITERATIONS
            }
          },
          Status: {
            x: 850,
            y: 450,
            text: {
              fontSize: 25,
              textColor: 0xffeeeeff,
              text: 'Status: idle'
            }
          },
          Title: {
            x: 50,
            y: 50,
            text: {
              fontSize: 40,
              textColor: 0xffeeeeff,
              text: 'Lightning++ Texture Performance Tests'
            }
          },
          Text1: {
            x: 100,
            y: 150,
            text: {
              fontSize: 30,
              textColor: 0xffeeeeff,
              text: 'Load Time:'
            }
          },
          Text2: {
            x: 100,
            y: 200,
            text: {
              fontSize: 30,
              textColor: 0xffeeeeff,
              text: 'Start Time:'
            }
          },
          Text3: {
            x: 100,
            y: 250,
            text: {
              fontSize: 30,
              textColor: 0xffeeeeff,
              text: '"'
            }
          },
          Text4: {
            x: 100,
            y: 300,
            text: {
              fontSize: 30,
              textColor: 0xffeeeeff,
              text: '"'
            }
          },
          Text5: {
            x: 100,
            y: 350,
            text: {
              fontSize: 30,
              textColor: 0xffeeeeff,
              text: '"'
            }
          }
        };

        for (var i = 0; i < 5; i++) {
          gui["Bullet" + i] = {
            x: 65,
            y: 160 + i * 50,
            w: 15,
            h: 15,
            rect: true,
            color: 0xFFaaaaaa
          }; // "#aaaaaa"
        }

        return gui;
      }
    }]);

    return MyApp;
  }(ux.App); //CLASS - MyApp
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  var TextItem =
  /*#__PURE__*/
  function (_ux$App2) {
    _inherits(TextItem, _ux$App2);

    function TextItem() {
      _classCallCheck(this, TextItem);

      return _possibleConstructorReturn(this, _getPrototypeOf(TextItem).apply(this, arguments));
    }

    _createClass(TextItem, [{
      key: "_init",
      value: function _init() {
        // console.log("INIT  >>>  TextItem() - this.initData.text: " + this.initData.text);
        this.patch({
          Label: this.initData
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        console.log("TEMPLATE  >>>  TextItem()");
        return {
          Label: {
            x: 0,
            y: 0,
            w: 200,
            h: 40,
            text: {
              fontSize: 30,
              textColor: 0x880000ff,
              text: 'Testing'
            }
          }
        };
      }
    }]);

    return TextItem;
  }(ux.App); //CLASS
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  MyApp.COLORS = {
    BACKGROUND: 0xff282e32
  };
  return MyApp;
}();