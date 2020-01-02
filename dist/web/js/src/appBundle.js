var appBundle = (function () {
  'use strict';

  /*
  gl:http://127.0.0.1/lightning-perf-spark.js

  gl:http://127.0.0.1/spark/lightning-perf-spark.js
     http://127.0.0.1/web/index.html
  */

  var lastCount     = 0;
  var lastFrame_ms  = 0;

  var frameStart_ms = 0;
  var frameEnd_ms   = 0;

  var minJitter_ms  = 10000;
  var maxJitter_ms  = 0;//-10000;

  var PFX = "";//>>  "
  var LOG_PFX = "LIGHTNING_PERF >>  ";

  var IMG_ITERATIONS =  1000;
  var TXT_ITERATIONS =  1000;
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  class MyApp extends ux.App
  {
    getFonts() {
      return [
          {family: 'RobotoBold'   , url: MyApp.getPath('fonts/Roboto-Bold.ttf'),    descriptors: {} }
        , {family: 'RobotoRegular', url: MyApp.getPath('fonts/Roboto-Regular.ttf'), descriptors: {} }
        , {family: 'RobotoItalic',  url: MyApp.getPath('fonts/Roboto-Italic.ttf'),  descriptors: {} }
        , {family: 'RobotoLight',   url: MyApp.getPath('fonts/Roboto-Light.ttf'),   descriptors: {} }
        , {family: 'RobotoBlack',   url: MyApp.getPath('fonts/Roboto-Black.ttf'),   descriptors: {} }
      ];
    }


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    _init()
    {
      this.count = 0;
      this.fpsData      = [];
      this.fpsSamples   = 1000;
      this.startFpsTest = false;

      let self = this;

      if(lastCount == 0)
      {
          lastCount = this.stage.frameCounter;
      }

      this.stage.on('frameStart', () =>
      {
          // if(this.stage.frameCounter == 0)
          //     ;

         // frameStart_ms =  Date.now();
      });
      this.stage.on('frameEnd', () =>
      {
        var now    = Date.now();
        var frames = (this.stage.frameCounter - lastCount);

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        if(this.startFpsTest && frameStart_ms != 0)// && this.fpsSamples > 0)
        {
          var thisFrame_ms = (now - frameStart_ms);
          var delta_ms     = Math.abs(lastFrame_ms - thisFrame_ms);

          this.fpsData.push(thisFrame_ms);

          if(delta_ms >= maxJitter_ms)
          {
            console.log(" thisFrame_ms: " + thisFrame_ms +"      delta_ms: " + delta_ms );
          }

          minJitter_ms = (delta_ms <  minJitter_ms) ? minJitter_ms = delta_ms : minJitter_ms;
          maxJitter_ms = (delta_ms >= maxJitter_ms) ? maxJitter_ms = delta_ms : maxJitter_ms;

          lastFrame_ms = thisFrame_ms;

          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          //
          //  FRAME RATE SAMPLING + + STD DEV
          //
          if(this.startFpsTest)
          {
            if(this.fpsSamples > 0)
            {
              this.fpsSamples--;
            }
            else
            {
              //std dev
              const n    = this.fpsData.length;
              const mean = this.fpsData.reduce((a,b) => a+b)/n;
              const s    = Math.sqrt(this.fpsData.map(x => Math.pow(x-mean,2)).reduce((a,b) => a+b)/n);

              console.log("INFO:  FPS ... Standard Dev: " + s);

              // LOG RESULT
              this.patch({ Text5:  {text: PFX + "Frame Rate:  Max: " + maxJitter_ms + "  min: " + minJitter_ms + "  Std Dev: " + s }});
              console.log( LOG_PFX + "FrameRate=" + maxJitter_ms + " (Max) " + minJitter_ms + " (min)  " + s + "  (StdDev)");

              this._setState('EndTests');
              this.startFpsTest = false;
            }
          }
          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        }
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        if(frames >= 60)
        {
          frameEnd_ms = now;

          var frame_ms = (frameEnd_ms - frameStart_ms)/frames; // average Frame Time
          var      fps = (1.0 / (frame_ms / 1000.0));

          // console.log('    fps: ' + fps );
          // console.log(' frames: ' + frames );
          // console.log('>> frame_ms: ' + frame_ms     + " ms\n" );

          var jitterTxt = (this.startFpsTest) ? ("  M: " + maxJitter_ms + "  m: " + minJitter_ms) : "";

          self.patch({ Fps: {text: "fps: " + fps.toFixed(2) + jitterTxt }});
          frameStart_ms = frameEnd_ms;

          lastCount = this.stage.frameCounter;
        }
      });

      if(typeof epoch_ms !== 'undefined')
      {
        // LOG RESULT
        var loaded  = "LoadTime=" + (Date.now() - epoch_ms) + " ms  \n";
        console.log( LOG_PFX + loaded );

        this.patch({ Text1: {text: loaded }});
      }
      else
      {
        console.log( "WARNING:   'epoch_ms' was NOT found. " );
      }

      if(typeof this.stage.startApp_ms !== 'undefined')
      {
        // LOG RESULT
        var started = 'StartTime=' + (Date.now() -  this.stage.startApp_ms) + " ms  \n";
        console.log( LOG_PFX + started );

        this.patch({ Text2: {text: started}});
      }
      else
      {
        console.log( "WARNING:   'this.stage.startApp_ms' was NOT found. " );
      }

      // Preload fonts list
      // const font_list = this.getFonts();
      // const font_url  = font_list[0].url;

      this.perfTests = [];
      this._setState('StartTests');
    }// init()

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    doImageTest(url)
    {
      let self = this;

      return new Promise( resolve =>
      {
        let s0 = Date.now();                 /// ###

        self.stage.platform.loadSrcTexture({ src: url },
          function(params)
          {
            let elapsed = (Date.now() - s0); /// ###

            resolve(elapsed);
          });
      })
    }// doImageTest()

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    async doImageTests()
    {
      // const image_url = "https://webplatformforembedded.github.io/Lightning/img/Lightning.png";
      const image_url = "http://www.sparkui.org/docs/images/SparkEdge128.png";

      var res = [];

      var   sigma_ms = 0;
      var average_ms = 0;

      this.patch({ Text3: {text: PFX + "ImageTexture:  (running)"  }});

      // - - - - - - - - - - - - - - - - - - - - - - - - - -
      for(var i=0; i< IMG_ITERATIONS; i++)
      {
        var ans = await this.doImageTest(image_url); // AWAIT promise
        res.push(ans);

        // Compute running average...
        //
        sigma_ms  += ans;
        average_ms = (sigma_ms/res.length);

        if(i%10 == 0)
        {
          this.patch({ Text3: {text: PFX + "ImageTexture: ... "+average_ms.toFixed(2) +" ms ... (running - "+i+" of "+IMG_ITERATIONS+")"  }});
        }
      }//FOR
      // - - - - - - - - - - - - - - - - - - - - - - - - - -

      // LOG RESULT
      this.patch({ Text3: {text:  PFX + "ImageTexture: " + average_ms + " ms  ...  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec "  }});
      console.log( LOG_PFX + "ImageTexture=" + average_ms + " ms  ...  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec " );

      // this.patch({ Text3: {text: PFX + "ImageTexture: " + average_ms + " ms  [m: " +min_ms +" M: " + max_ms + "]  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec"  }});

      this._setState('DoTextTests');
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    doTextTest(i)
    {
      let self = this;

      return new Promise( resolve =>
      {
        let s0 = Date.now();                 /// ###

        // Blocking call ???
        var initData = { text:  "TextTest "+ i };

        const xx = 18;
        const yy = 25;

        var newText = self.stage.c( {
                  type:  TextItem, initData,
                 async: false,
                         x: i * xx * 1.5, y: i * yy, visible: true
        });

        self.tag('Bg720').add(newText);

        let elapsed = (Date.now() - s0); /// ###

        resolve(elapsed);
      })//PROMISE
    }// doImageTest()

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    async doTextTests()
    {
      var res = [];

      var   sigma_ms = 0;
      var average_ms = 0;

      this.patch({ Text4: {text: PFX + "TextTexture:  (running)"  }});

      // - - - - - - - - - - - - - - - - - - - - - - - - - -
      for(var i=0; i< TXT_ITERATIONS; i++)
      {
        var ans = await this.doTextTest(i); // AWAIT promise
        res.push(ans);

        // Compute running average...
        //
        sigma_ms  += ans;
        average_ms = (sigma_ms/res.length);

        if(i%10 == 0)
        {
          this.patch({ Text4: {text: PFX + "TextTexture: "+average_ms.toFixed(2) +" ms ... (running - "+i+" of "+TXT_ITERATIONS+")"  }});
        }
      }//FOR
      // - - - - - - - - - - - - - - - - - - - - - - - - - -

      // this.patch({ Text4: {text: PFX + "TextTexture: " + average_ms + " ms  [m: " +min_ms +" M: " + max_ms + "]  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec"  }});

      // LOG RESULT
      this.patch({ Text4: {text:  PFX + "TextTexture: ... " + average_ms + " ms  ...  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec   ... (" + TXT_ITERATIONS + ")" }});
      console.log( LOG_PFX + "TextTexture=" + average_ms + " ms  ...  elapsed: " + (sigma_ms/1000).toFixed(2) + " sec   ... (" + TXT_ITERATIONS + ")"  );


      // this._setState('DoTextTests');
      this._setState('DoFpsTests');
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    doFpsTests()
    {
      this.startFpsTest = true;
      this.patch({ Text5:  {text: PFX + "Frame Rate   (running) "  }});
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    doTests()
    {
      this.patch({ Status: {text: "Status:  Testing..." }});
      this.patch({ Text3:  {text: PFX + "ImageTexture: (pending) "  }});
      this.patch({ Text4:  {text: PFX + "TextTexture:  (pending) "  }});
      this.patch({ Text5:  {text: PFX + "Frame Rate:   (pending) "  }});

      this._setState('DoImageTests');
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    static _states()
    {
      return [
        class StartTests extends this
        {
          $enter(event){
            console.log("Preparing PERFORMANCE Tests...");
            this.doTests();
          }
          $exit(){
            console.log("Commecing PERFORMANCE Tests...");
          }
        },
        class DoImageTests extends this
        {
          $enter(){
            console.log("Starting IMAGE Tests...");
            this.doImageTests();
          }
          $exit(){
            console.log("Finishing IMAGE Tests...");
          }
        },
        class DoTextTests extends this
        {
          $enter(){
            console.log("Starting TEXT Tests...");
            this.doTextTests();
          }
          $exit(){
            console.log("Finishing TEXT Tests...");
          }
        },
        class DoFpsTests extends this
        {
          $enter(){
            console.log("Starting FPS Tests...");
            this.doFpsTests();
          }
          $exit(){
            console.log("Finishing FPS Tests...");
          }
        },
        class EndTests extends this
        {
          $enter(event){
            console.log("Finshed TESTING...");
            this.patch({ Status: {text: "Status:  Complete" }});
          }
          $exit(){
            console.log("FIN ...");
          }
        },
      ];
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    static _template()
    {
      var gui =
      {
        Bg1080: { x:   0, y:   0, w: 1920, h: 1080, rect: true, color: 0xFF888888,                                             }, // "#888888"
        Bg720:  { x:   0, y:   0, w: 1280, h: 720,  rect: true, color: 0xFF777777                                              }, // "#777777"
        Fps:    { x: 850, y:  50, text: { fontSize: 20, textColor: 0xffeeeeff, text: 'fps: '                                 } },
        Iter:   { x: 850, y: 100, text: { fontSize: 20, textColor: 0xffeeeeff, text: 'Iterations: ' + IMG_ITERATIONS         } },
        Status: { x: 850, y: 450, text: { fontSize: 25, textColor: 0xffeeeeff, text: 'Status: idle'                          } },
        Title:  { x:  50, y:  50, text: { fontSize: 40, textColor: 0xffeeeeff, text: 'Lightning++ Texture Performance Tests' } },
        Text1:  { x: 100, y: 150, text: { fontSize: 30, textColor: 0xffeeeeff, text: 'Load Time:'                            } },
        Text2:  { x: 100, y: 200, text: { fontSize: 30, textColor: 0xffeeeeff, text: 'Start Time:'                           } },
        Text3:  { x: 100, y: 250, text: { fontSize: 30, textColor: 0xffeeeeff, text: '"'                                     } },
        Text4:  { x: 100, y: 300, text: { fontSize: 30, textColor: 0xffeeeeff, text: '"'                                     } },
        Text5:  { x: 100, y: 350, text: { fontSize: 30, textColor: 0xffeeeeff, text: '"'                                     } },
      };

      for(var i =0; i< 5; i++)
      {
        gui["Bullet"+i] =  { x: 65, y: 160 + (i*50), w: 15, h: 15,  rect: true, color: 0xFFaaaaaa   }; // "#aaaaaa"
      }

      return gui;
    }
  }//CLASS - MyApp

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  class TextItem extends ux.App
  {
    static _template()
    {
      console.log("TEMPLATE  >>>  TextItem()");

      return {
        Label:  {
             x: 0, y: 0, w: 200, h: 40,
             text: { fontSize: 30, textColor: 0x880000ff, text: 'Testing' }
          }
      };
    }

    _init()
    {
      // console.log("INIT  >>>  TextItem() - this.initData.text: " + this.initData.text);

      this.patch( { Label: this.initData } );
    }
  }//CLASS
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  MyApp.COLORS = {
    BACKGROUND: 0xff282e32
  };

  return MyApp;

}());
