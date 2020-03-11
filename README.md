# aframe-playmenu

Attach a menu to your a-frame camera rig with play, rewind, fast forward, speed, reset, info buttons. 
The following events are dispatched on the scene element when user clicks applicable button:

  - playPause     - triggered when user clicks play button
  - setPlayTime   - event.detail.weight has range 0.0-1.0 indicates the x position in bar where 0.0 is left side and 1.0 is right.
  - previousFrame - triggered when user clicks rewind
  - nextFrame     - triggered when user clicks forward
  - setPlaySpeed  - event.detail.playSpeed is value 1-10
  - resetView     - triggered when user cliks the reset button

See index.html for example usage.
