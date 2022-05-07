const $dynamicGallery = document.getElementById("dynamic-gallery-demo");
const dynamicGallery = window.lightGallery($dynamicGallery, {
  dynamic: true,
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      responsive:
        "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800",
      thumb:
        "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                <p>Description of the slide 1</p>
            </div>`
    },
    {
      video: {"source": [{"src":"https://www.lightgalleryjs.com//videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}},
      thumb:
        "https://www.lightgalleryjs.com//images/demo/html5-video-poster.jpg",
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                <p>Description of the slide 2</p>
            </div>`
    },
    {
      src:
        "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      responsive:
        "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800",
      thumb:
        "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
    },
    {
      src: "//www.youtube.com/watch?v=egyIeygdS_E",
      poster: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg",
      thumb: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
    }
  ]
});
$dynamicGallery.addEventListener("click", () => {
  dynamicGallery.openGallery(0);
});
