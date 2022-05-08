      /*
      * For every Day/Project a new "addGallery"
      */
      JavaScriptGallery.setGalleryTransition("opacity");
      JavaScriptGallery.enableExtraButtons();
    json = `{ 
        "Entry": { 
            "Image": [
            "https://picsum.photos/id/1015/800/400",
            "https://picsum.photos/id/1018/800/400",
            "https://picsum.photos/id/1033/800/400",
            "https://picsum.photos/id/1036/800/400",
            "https://picsum.photos/id/1039/800/400",
            "https://picsum.photos/id/1040/800/400"
            ]
          }
        }`;
      JavaScriptGallery.addGallery(json);
      JavaScriptGallery.initGallerySlide(300, true, true);
      JavaScriptGallery.enableDoubleClick();
      JavaScriptGallery.initMove();
      JavaScriptGallery.enableKeydownESC();