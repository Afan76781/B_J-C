var playerInstance = jwplayer("jwplayerDiv");


// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream() {
    playerInstance.setup({
      file: "https://isp.sananda.online/Astro/video.m3u8",
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
   function switchToOtherStream1() {
  playerInstance.setup({
    file: "https://dai.fancode.com/primary/85196_english_hls_5390ta-no/1080p.m3u8",
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
  }

   function switchToDRM() {
     playerInstance.setup({
         file: "#",
           type: "hls",  // Set the type to HLS for M3U8 URLs
         });
         }
  function switchToDRM() {
    playerInstance.setup({
        file: "#",
          type: "hls",  // Set the type to HLS for M3U8 URLs
        });
        }
      // Display a pop-up message when the page starts
       window.addEventListener("load", function() {
      var result = window.confirm("Join Telegram Group More Update");
      if (result) {
        window.location.href = "https://telegram.me/+J00m9kwSn6g0ZTJl";
      }
    });
