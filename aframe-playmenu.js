AFRAME.registerComponent('playmenu', {
  init: function(){
    this.el.innerHTML = `
<a-plane id=VideoControls scale=".2 .2 .2" position="0 -.38 -.5" rotation="0 0 0" width="2.1" height=".4" color="#000000" material="shader:flat">

<a-plane position="-.93 .08 .01" color="#888888" width=".1" height=".1" class=clickable id=PlayBut material="shader:flat" src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAACGElEQVR42u2d7U1EMQwEn6iGgujHBVEQ5Sw/kBCgO+59JI49t9PBSgN6l8TrbTPGGGOMMcYYY4wxxjw976+AEFIQQujjDRBC6u6UvghCiN5O6ZvGTukHQQjR1in9pqdT+ksQQnR0Sjdo55RuEoQQzZzSPTo5pfsEIUQfp/QvTZzSA4IQooVTekx9p7SHIISo7pR2Utop7SYIIQo7pSNUdUrHCEKImk7pMAWd0gmCEKKcUzpHLad0liCEqOSULlDGKV0iCCGKOKWrVHBK1wlCiPVOaQiLndIgghBiqVMaxzqnNJIghFjllAazxCkNJwghFjilGWQ7pTkEIUSuU5pGolOaSBBCpDmlueQ4pdkEIUSGU0pgulNKIQghJjulLGY6pTyCEGKeU0plklNKJgghpjilfMY7pRUEIcRup16258E6Pe0fNuFfbPizwx+A/hTH/Cgi/DwFHBQAjmwIh2eAY0zAgTLhaB9wyQK47iJcPAKugAGX8YRnEYAHKoCnQoRHW4Dnc4CHjIQnpYDHvYBn1oQH74DRA8AQCGEcBzAYBRhRIwwLAsY2AQO0hFFmwFA5YLyfULQAqLwAlI8QamAAhTyAaiRCSRWgLgxQ3Eao0AOUGQJqJQkFn4CqVUDpLaF+GFAEDajkJpSjA2rqAQsDCKsbAEs0AOtMCItlACt+AMuWCGuvAAvIEKvgjDHGGGOMMcYYY4wxLfkEs9opZWtjpawAAAAASUVORK5CYII=)"></a-plane>

<a-plane position="-.09 .08 .01" color="#888888" width="1.52" height=".1" class=clickable id=PlayBar material="shader:flat"><a-plane id=PlayTimeBar position="-.745 .008 .01" color="#444444" width=".01" height=".09" material="shader:flat"></a-plane></a-plane>

<a-plane position=".78 .08 .01" color="#888888" width=".1" height=".1" class=clickable id=RewindBut material="shader:flat" src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAACU0lEQVR42u2a200DMRQFI6qhIPqhIAqiHPMDApJdrx93kH2ZKWAO0hhIdn27iYiIiIiIiIiIiIiIiIiIiMi/5fltP/M9r6VsZ77j5b1AU5z5oXcpzBRnPugNTXHmo97IFGc+7g1Mceaz3vFTnPm0d/QUZ670jp3izNXeoVOcud47cIozX/UOm+LM172jpjhzQ++YKc7c1DtiijM39g6Y4sytvaenOHN778kpztzTe26KM3f1npnizJ29x6c4c3fv4SnO3N97cIozj/QemuLMY71HpjjzYO/+Kc483Lt3ijNP9O6c4swzvbumOPNc744pzjzbu32KM0/3bp3izAG926Y4c0jvpinOHNO7YYozR/W+nOLMcb2vpjhzYO/6FGcO7V2b4szBvStTnDm69+kUZ47vfTLFmYnex1OcGel9NMWZod6PU5wZ6/0wxZm53ndTnJk8Sb+mODN7kn5OcWb4JH1PcWb8JH1NceY/OEmfU5z5L05SKaUUzvz1sz/dcpHgOCX5xc7xJzbJP7skHztyfABM8lE8yZeiHF9PkzwoSPLIJsfDsySPMZM8UM7xaD/JS5Ykr7tyvHhM8go4ycv4HNciklxQSXJVKMelrSTX55JcZMxxpTTJ5d4k16xzXHhvL7+WebD8Yuax8suZR8ovaO4vv6K5u/ya5s7yq5q7yi9r7im/sLm9/NLm1vJrmxvLr25uKr++uaH8Bubr8luYr8pvYq6X38VcLb+PuVJ+J/Np+a3MZ+U3Mx+X3858VH4/s4iIiIiIiIiIiIiIiIiIiIjE8QESOCJsdcFgYgAAAABJRU5ErkJggg==)"></a-plane>

<a-plane position=".93 .08 .01" color="#888888" width=".1" height=".1" class=clickable id=ForwardBut material="shader:flat" src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAACPUlEQVR42u2c2U0DQRQELaIhIOfjgAiIcJYfLA7vMcerld2qCqCaUWNYz868y0VEREREREREREREREREREREnp6P99czP7Ast5czr0Qtn9cXM69FLQvSPGdej0Ka58xbUUDznHkzqr55zrwTVd08Z96Nqm2eM+9HlTbPmY+iCpvnzMdRZc1z5oaoquY5c1NUTfOcuTGqonnO3BpV0Dxnbo+abp4z90RNNs+Zu6LmmufMnVEzzXPm7qjx5jlzf9Rw85x5JGqwec48FjXUPGcejBppnjMPR/U3z5knonqb58wzUZ3Nc+a5qK7mOfNsVEfznHk6qr15zlwQ1do8Zy6JamueM9dENTXPmauiGprnzHVRh81z5sKoo+Y5c2nUfvOcuThqr3nOXB210zxnro/abJ4zE1EbzXNmJGq9ec4MRa01z5mxqMfmOTO3iIfmOTO5iH/Nc2Z2EX+a58zwIn43z5nxRfw0z5lPWMS9ec58xiK+m+fM5yxiWW6k+axFLJ9Xznz/2d8uSfjrFPzBTvgTG/DPLuCxI+EBMOBRPOBLUcLX04CNgoAtm4TNs4BtzIAN5YSt/YCXLAGvuxJePAa8Ag54GZ9wLCLggErAUaGEQ1sBx+cCDjImHCkNONwbcMw64cB7wNWDgEsgCddxAi5GBVxRS7gsGHBtM+ACbcJV5oBL5QHX+xMGLQSMvAgYPpIwBiZgIE/AaKSEIVUB48ICBrcljNALGGYYMVZSRERERERERERERERERERERJ6OLzsYImyu24G0AAAAAElFTkSuQmCC)"></a-plane>

<a-plane position="-.36 -.07 .01" color="#000000" width="1.24" height=".17" id=SetSpeedPanel material="shader:flat">

<a-entity position="-.09 0 .01" text="color: white; value: speed:;"></a-entity>
<a-plane id=DecreasePlaySpeedBut position="-.38 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed="-" material="shader:flat"><a-entity position=".49 .01 .01" text="color: white; value: -;"></a-entity></a-plane>
<a-plane id=IncreasePlaySpeedBut position="-.276 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed="+" material="shader:flat"><a-entity position=".49 .01 .01" text="color: white; value: +;"></a-entity></a-plane>

<a-entity position=".35 0 .01" text="color: white; value: style:;"></a-entity>
<a-plane id=PrevStyleBut position=".03 0 .01" color="#444444" width=".1" height=".1" class=clickable data-cyclestyle="-" material="shader:flat"><a-entity position=".486 .01 .01" text="color: white; value: &lt;"></a-entity></a-plane>
<a-plane id=NextStyleBut position=".133 0 .01" color="#444444" width=".1" height=".1" class=clickable data-cyclestype="+" material="shader:flat"><a-entity position=".486 .01 .01" text="color: white; value: &gt;"></a-entity></a-plane>

</a-plane>
<a-plane position=".62 -.07 .02" color="#444444" width=".2" height=".1" class=clickable id=ResetBut material="shader:flat"><a-entity position=".44 .01 .01" text="color: white; value: reset;"></a-entity></a-plane>
<a-plane position=".9 -.084 .01" color="#888888" width=".1" height=".1" class=clickable id=InfoBut material="shader:flat" src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAAFe0lEQVR42u2dT0hbSRjAv3WFDULxRWSLvSQQaRf2kCBikBY2q9mih7AHb4IoZU+LgmAteIrdW9pDD3v04nYv1V7EHDzYYgr2oCzriiwVarDxsBoJJj1VQZg9FVrbvMx88+d9Hed3fInfez+/eS8z8977BsDhcDgcDofD4XA4HA6Hw0GMrzTFjcRiEc8Le2EvDNVatVat1UrFYulLkfj2p55YrLP5s5+d7xWLm6vHtCW+uXVrMNnwWxsr6+tnRCUimdSPbZzfPVkr5Evkzq3WkcV3TIh3iyOtpBQyc0cMwdFchoqBN7nF0GxNegQUotl9JsV+NhqwQuJRlUlTfZQIUKE9xxSRaw/K4c4uU8bunUAUbi4xpSzdNK7QkmPKybWYdeh6wTTwosukw3CZaaE8bM7hPtPGfUMK1xaYRhaumXDo3WZa2e7V7zBUYZqpDOl2GGMGGNPrMMGMMKHTYYYZYkafwzgzxrguhwFmkAE9DilmlJQOhyQzTJL70Jp4vxh/arqj/DSuvK+xzYyzrboHssACYIHz4L7m7Lf+GsTg8fumgsrxg8S/89UriT9WOL7owo6BDqb6PACvb+oAO0pSNtZrwY5Fn1x5H+LKE+yIVdW4GzsncP3DINexsweK5maQu7/9cZjbyDBqZnKQ80uPL8Z5jJyPUjLPh/wP9lwM1IMMpGBusB05V7nzaagd5Axnw3nahn2n6Rs4+X+5NvFwY1pWInEPmcG/uTZxcS8hKTGKbYabXJv4GJWTiKInHhJcmzinWKJSEqPoO2pxrk2cdwVHZS5NHv5+3Nan0fD3J/dl7k5OSnRA+y4G65MINikhIXFvl728GOylRLAtvENGalw29XGwKalg+Lv2c3Kjy6sfxroqF2sO69B6JLdjdjf0PlTormSoI+xzICPy8xXTg20AbYPT8nMlI0iJRSVTFq9fKwmz6HOgPs87RXZDQIfT70qYX+wMJQcIZVDdjn4gRT+mOYUOPVIStY5T8UykaTmAl0Y0J2Ktye+A6kukqEmkxM+Jjv+Q+5oV/oD79sJhnQ+a654S6H3VeTwjK52K9J+izakbyNEtfE7E6EnELqdEJz2JTlGJSDM9ieaIoATB1lT/oKyWiFCUEG1OHkUJz2aJehehMH5X2cZdECRhQQl8JmZV9vnkmlOYYnMKX8YT24pMfFHUk6hSPNiqoESNokTNZcJlwmVCKhNWSJQoSpQEJYoUJYqXUaJ0Ts/hXLQ5wR49iT3RvhPF9lS8nBKb9CQ2hSVW6UmsCkscb1Bz2DgWloAVahIrIC6xTk1iHSNxQsvhBCNxtkZLYu0MIQEFWhI+h+MjkT+l5HCaR0mU8pQk/MpB+U2e0ZIAnMRymY5DeRkp8ZZQKvJvfT70vdO7/IvgrmZFPpwVibyM9xd9zFoouLrHrP1nxf+g0ppkDkT01QNdmWjw6oF/JmrzNBIxLzWXF61SyEQ1ChKZgDckUjH/Ru7vExQyIV2cLhe8hPyLwEKvbWqRUPDaZuVB0GfEg4qCIEvBZoLjVWaOp+Qe/sx9XFkNiXioJoyGkn/GX+/HF1pQURpQWYHDrnJQDmWF5Q2Hg5LgKz7CVwZmp+mHQK6uv/2uNBzpgjy8WFEaCXorph0qGkozDpmW0FKYccysw5iea8WESQdtRRlnzDnYUJJxXOevj6GijAN6f0ONlGVM6e4JJA90Kxwk9fdn4rrLD8fBADYUggYrSnKDHcXR7ShTb8eCAWDF0g0AViyiAXYsZwJWLCwDYMUSPwBWLLYEADYsewUAAS9ApnQpuP4Ub9uoFZ4rXApO7aJ8oXR/qvGV5p/C82dKHwhTvzxiR7rbd3nEv54dqt6lFQtVOhwOh8PhcDgcDofD4XA4yPE/9+qQhpn5hYMAAAAASUVORK5CYII=)"></a-plane>
</a-plane>`
    this.el.sceneEl.addEventListener('enter-vr', () => {

      const playmenu = document.querySelector('[playmenu]')
      if (! playmenu) {
        console.log('WARNING: could not find [playmenu] element')
        return;
      }
      const rig = document.querySelector('#rig')
      if (! rig) rig = document.querySelector('[movement-controls]')
      if (! rig) {
        console.log('WARNING: could not find #rig or [movement-controls] element to attach video controls')
        return;
      }
      if (playmenu.parentEl != rig) rig.appendChild(playmenu)

      const e = document.getElementById('VideoControls')
      e.setAttribute('position', '.12 -.1, -.5')
      e.setAttribute('scale', '1 1 1')
      e.setAttribute('rotation', '-30 0 0')
    })
    this.el.sceneEl.addEventListener('exit-vr', () => {
      const playmenu = document.querySelector('[playmenu]')
      if (! playmenu) {
        console.log('WARNING: could not find [playmenu] element')
        return;
      }
      const cam = document.querySelector('[camera]')
      if (! cam) {
        console.log('WARNING: could not find [camera] element to attach video controls')
        return;
      }
      if (playmenu.parentEl != cam) cam.appendChild(playmenu)
      const e = document.getElementById('VideoControls')
      e.setAttribute('position', '0 -.38 -.5')
      e.setAttribute('scale', '.2 .2 .2')
      e.setAttribute('rotation', '0 0 0')
    })
    document.getElementById('PlayBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('playPause'))
      //console.log('dispatched playPause on: ', this.el.sceneEl)
    });
    document.getElementById('PlayBar').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      if (! (evt.detail.intersection && evt.detail.intersection.point && evt.detail.intersection.point.x != undefined)) return;
      const pb = document.getElementById('PlayBar')
      const pbWidth = parseFloat(pb.getAttribute('width'))
      const rangeMax = pbWidth/2
      const rangeMin = rangeMax * -1
      const p = evt.detail.intersection.point
      const clickPos = new THREE.Vector3(p.x, p.y, p.z);
      pb.object3D.worldToLocal(clickPos)
      const clickAt = clickPos.x
      let weight = ((clickAt - rangeMin) / (rangeMax - rangeMin)).toFixed(2);
      if (weight < 0) weight=0
      else if (weight > 1) weight=1
      const newEvent = new CustomEvent('setPlayTime', { detail: { weight: weight } })
      this.el.sceneEl.dispatchEvent(newEvent)
      //console.log('setPlayTime detail.weight: ', newEvent.detail.weight, ' range: ', rangeMin, ' ', rangeMax)
    });
    document.getElementById('RewindBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('previousFrame'))
      //console.log('you clicked rewind');
    });
    document.getElementById('ForwardBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('nextFrame'))
      //console.log('you clicked forward');
    });
    document.getElementById('ResetBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('resetView'))
      //console.log('you clicked reset');
    });
    document.getElementById('IncreasePlaySpeedBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('increasePlaySpeed'))
    })
    document.getElementById('DecreasePlaySpeedBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('decreasePlaySpeed'))
    })
    document.getElementById('PrevStyleBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('prevStyle'))
    })
    document.getElementById('NextStyleBut').addEventListener('click', evt => {
      evt.preventDefault()
      evt.stopPropagation()
      this.el.sceneEl.dispatchEvent(new CustomEvent('nextStyle'))
    })
    this.el.sceneEl.addEventListener('updatePlayTime', evt => {
      evt.stopPropagation()
      this.playTime = evt.detail.weight
    })
  },
  remove: function() {
    this.el.innerHTML = ''
  },
  tick: function() {
    if (this.playTime) {
      if (this.playTimeBar == undefined) {
        this.playTimeBar = document.getElementById('PlayTimeBar')
        this.playBarX0 = this.playTimeBar.object3D.position.x
        this.playBarWidth = parseFloat(document.getElementById('PlayBar').getAttribute('width')) - .03
      }
      this.playTimeBar.object3D.position.x = this.playBarX0 + (this.playBarWidth * this.playTime)
    }
  }
});
