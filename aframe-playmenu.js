AFRAME.registerComponent('playmenu', {
  init: function(){
    this.el.innerHTML = `
<a-plane position=".12 -.1 -.5" rotation="-30 0 0" width="2.1" height=".4" color="#000000">
<a-plane position="-.93 .08 .01" color="#888888" width=".1" height=".1" class=clickable id=RestartBut src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAADfElEQVR42u3dRXMVQRAH8D8QXKsgLrg7FyweLBtFT0jcO9gXwLVwv+OaQhK04Iq76xfAtbDlRFGEHEKyO7vd6f/99bzf2367M3uYATQajUaj0Wg0Go1Go9FoNBpNg49dPedNjDp8J3tExwUvbe6I6RdtmzlixC7bZo7otPCVzR0x49LvYdgiRu7+M0ztPhHgt5t5IFEH7s+JmZf/GoYjYtSeasPwa6cgovbcpx2zrvwzCrd2Gr3XtuuKCGgYnWTiStTUSczaqeZOYtVOwUTt6lnCc0QWDat3DY8R0TTNgSqeIkKI2oI5IpuGOlPIO0QMTXWqlFeIUKI2YI7IoSEOVvMEEUtTHK3nASKMqDWYI3JpsNMlTSPiaLLzRc0iwolagTkijwa5UtcgIp4muVTZGCKCqCWYI/JpoHvFzSASaKKb5U0gIolagDmigAa4PILriETKdP1nchkRRdQczBGF1N/EfcNNRGJ5hpn7t3uIqHJqBuYIQ53kJiKJMgDeiM5krJNcQxRRP7MrLecRYyjd9IrXaUQXoqZgjiimvgBvxFhKA3gjuhJ59D7RuWFLqA/AGzGOUgHeiG5ETcAcUUq9Ad6I8ZQC8EZ0J2oM5ogy6gXwRkwgC+CN6EHUCMwRRD0B3ohkSga4Iyrhn9SyqW1ff73GEBBFKEIRilCEIhShCEUoQhGKUERDRVwQcSWsKgGIKqv8sYD/xCZro83/j/1ktlXJHgGcTKFHAm6xm60NP/k/J57OsU4IeNidSi17KOCJvcVa/4P/tOPZXOu4gLnT6bTSBwImgFutdd/5z2Kfz7OOCZiKn0kvuS9gPbHNWvuN/6LoxXzrqICV3dmM4nsClqfbrTVf/biK/d/dIpIqbEfi6YuCc5lFdwW87djhv56q0+YjiRWG2slNBFB4RwACUau/8EcAiUcEIICC2wIQiFz1mT8CSDgsAAHk3xKAQMTKT/wRQPwhAQgg76YABMJXfOSPAOIOCkAAuTcEIBC2/AN/BBB7QAACyLkuAIHQZe/5I4CY/QIQQPY1AQiELH3HHwFE7xOAALKuCkAgeMlb/ggHNr31A0LE9sMAgha/4Y+o35bcvkGI2By95p7ih6jzgQH+Qog4ugFA4KLX/BF1Oc7EhwgRB8tAxhE/EHHYEiDi2CvIOIAMjh8Fp9FoNBqNRqPRaDQajUaj0WhY5hfuUzWTt78DjwAAAABJRU5ErkJggg==)"></a-plane>
<a-plane position="-.82 .08 .01" color="#888888" width=".1" height=".1" class=clickable id=RewindBut src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAACU0lEQVR42u2a200DMRQFI6qhIPqhIAqiHPMDApJdrx93kH2ZKWAO0hhIdn27iYiIiIiIiIiIiIiIiIiIiMi/5fltP/M9r6VsZ77j5b1AU5z5oXcpzBRnPugNTXHmo97IFGc+7g1Mceaz3vFTnPm0d/QUZ670jp3izNXeoVOcud47cIozX/UOm+LM172jpjhzQ++YKc7c1DtiijM39g6Y4sytvaenOHN778kpztzTe26KM3f1npnizJ29x6c4c3fv4SnO3N97cIozj/QemuLMY71HpjjzYO/+Kc483Lt3ijNP9O6c4swzvbumOPNc744pzjzbu32KM0/3bp3izAG926Y4c0jvpinOHNO7YYozR/W+nOLMcb2vpjhzYO/6FGcO7V2b4szBvStTnDm69+kUZ47vfTLFmYnex1OcGel9NMWZod6PU5wZ6/0wxZm53ndTnJk8Sb+mODN7kn5OcWb4JH1PcWb8JH1NceY/OEmfU5z5L05SKaUUzvz1sz/dcpHgOCX5xc7xJzbJP7skHztyfABM8lE8yZeiHF9PkzwoSPLIJsfDsySPMZM8UM7xaD/JS5Ykr7tyvHhM8go4ycv4HNciklxQSXJVKMelrSTX55JcZMxxpTTJ5d4k16xzXHhvL7+WebD8Yuax8suZR8ovaO4vv6K5u/ya5s7yq5q7yi9r7im/sLm9/NLm1vJrmxvLr25uKr++uaH8Bubr8luYr8pvYq6X38VcLb+PuVJ+J/Np+a3MZ+U3Mx+X3858VH4/s4iIiIiIiIiIiIiIiIiIiIjE8QESOCJsdcFgYgAAAABJRU5ErkJggg==)"></a-plane>
<a-plane position="0 .08 .01" color="#888888" width="1.52" height=".1" class=clickable id=PlayBar><a-plane position="-.745 .01 .01" color="#444444" width=".01" height=".09"></a-plane></a-plane>
<a-plane position=".82 .08 .01" color="#888888" width=".1" height=".1" class=clickable id=PlayBut src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAACGElEQVR42u2d7U1EMQwEn6iGgujHBVEQ5Sw/kBCgO+59JI49t9PBSgN6l8TrbTPGGGOMMcYYY4wxxjw976+AEFIQQujjDRBC6u6UvghCiN5O6ZvGTukHQQjR1in9pqdT+ksQQnR0Sjdo55RuEoQQzZzSPTo5pfsEIUQfp/QvTZzSA4IQooVTekx9p7SHIISo7pR2Utop7SYIIQo7pSNUdUrHCEKImk7pMAWd0gmCEKKcUzpHLad0liCEqOSULlDGKV0iCCGKOKWrVHBK1wlCiPVOaQiLndIgghBiqVMaxzqnNJIghFjllAazxCkNJwghFjilGWQ7pTkEIUSuU5pGolOaSBBCpDmlueQ4pdkEIUSGU0pgulNKIQghJjulLGY6pTyCEGKeU0plklNKJgghpjilfMY7pRUEIcRup16258E6Pe0fNuFfbPizwx+A/hTH/Cgi/DwFHBQAjmwIh2eAY0zAgTLhaB9wyQK47iJcPAKugAGX8YRnEYAHKoCnQoRHW4Dnc4CHjIQnpYDHvYBn1oQH74DRA8AQCGEcBzAYBRhRIwwLAsY2AQO0hFFmwFA5YLyfULQAqLwAlI8QamAAhTyAaiRCSRWgLgxQ3Eao0AOUGQJqJQkFn4CqVUDpLaF+GFAEDajkJpSjA2rqAQsDCKsbAEs0AOtMCItlACt+AMuWCGuvAAvIEKvgjDHGGGOMMcYYY4wxLfkEs9opZWtjpawAAAAASUVORK5CYII=)"></a-plane>
<a-plane position=".93 .08 .01" color="#888888" width=".1" height=".1" class=clickable id=ForwardBut src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAACPUlEQVR42u2c2U0DQRQELaIhIOfjgAiIcJYfLA7vMcerld2qCqCaUWNYz868y0VEREREREREREREREREREREnp6P99czP7Ast5czr0Qtn9cXM69FLQvSPGdej0Ka58xbUUDznHkzqr55zrwTVd08Z96Nqm2eM+9HlTbPmY+iCpvnzMdRZc1z5oaoquY5c1NUTfOcuTGqonnO3BpV0Dxnbo+abp4z90RNNs+Zu6LmmufMnVEzzXPm7qjx5jlzf9Rw85x5JGqwec48FjXUPGcejBppnjMPR/U3z5knonqb58wzUZ3Nc+a5qK7mOfNsVEfznHk6qr15zlwQ1do8Zy6JamueM9dENTXPmauiGprnzHVRh81z5sKoo+Y5c2nUfvOcuThqr3nOXB210zxnro/abJ4zE1EbzXNmJGq9ec4MRa01z5mxqMfmOTO3iIfmOTO5iH/Nc2Z2EX+a58zwIn43z5nxRfw0z5lPWMS9ec58xiK+m+fM5yxiWW6k+axFLJ9Xznz/2d8uSfjrFPzBTvgTG/DPLuCxI+EBMOBRPOBLUcLX04CNgoAtm4TNs4BtzIAN5YSt/YCXLAGvuxJePAa8Ag54GZ9wLCLggErAUaGEQ1sBx+cCDjImHCkNONwbcMw64cB7wNWDgEsgCddxAi5GBVxRS7gsGHBtM+ACbcJV5oBL5QHX+xMGLQSMvAgYPpIwBiZgIE/AaKSEIVUB48ICBrcljNALGGYYMVZSRERERERERERERERERERERJ6OLzsYImyu24G0AAAAAElFTkSuQmCC)"></a-plane>
<a-plane position="-.36 -.07 .01" color="#000000" width="1.24" height=".17" id=SetSpeedPanel>
<a-entity position="-.09 0 .01" text="color: white; value: speed:;"></a-entity>
<a-plane position="-.38 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=1><a-entity position=".49 .01 .01" text="color: white; value: 1;"></a-entity></a-plane>
<a-plane position="-.276 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=2><a-entity position=".49 .01 .01" text="color: white; value: 2;"></a-entity></a-plane>
<a-plane position="-.172 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=3><a-entity position=".49 .01 .01" text="color: white; value: 3;"></a-entity></a-plane>
<a-plane position="-.068 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=4><a-entity position=".488 .01 .01" text="color: white; value: 4;"></a-entity></a-plane>
<a-plane position=".036 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=5><a-entity position=".486 .01 .01" text="color: white; value: 5;"></a-entity></a-plane>
<a-plane position=".14 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=6><a-entity position=".486 .01 .01" text="color: white; value: 6;"></a-entity></a-plane>
<a-plane position=".244 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=7><a-entity position=".486 .01 .01" text="color: white; value: 7;"></a-entity></a-plane>
<a-plane position="0.348 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=8><a-entity position=".486 .01 .01" text="color: white; value: 8;"></a-entity></a-plane>
<a-plane position=".452 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=9><a-entity position=".486 .01 .01" text="color: white; value: 9;"></a-entity></a-plane>
<a-plane position=".556 0 .01" color="#444444" width=".1" height=".1" class=clickable data-playspeed=10><a-entity position=".464 .01 .01" text="color: white; value: 10;"></a-entity></a-plane>
</a-plane>
<a-plane position=".62 -.07 .02" color="#444444" width=".2" height=".1" class=clickable id=ResetBut><a-entity position=".44 .01 .01" text="color: white; value: reset;"></a-entity></a-plane>
<a-plane position=".9 -.084 .01" color="#888888" width=".1" height=".1" class=clickable id=InfoBut src="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAAAAADlzdG3AAAFe0lEQVR42u2dT0hbSRjAv3WFDULxRWSLvSQQaRf2kCBikBY2q9mih7AHb4IoZU+LgmAteIrdW9pDD3v04nYv1V7EHDzYYgr2oCzriiwVarDxsBoJJj1VQZg9FVrbvMx88+d9Hed3fInfez+/eS8z8977BsDhcDgcDofD4XA4HA6Hw0GMrzTFjcRiEc8Le2EvDNVatVat1UrFYulLkfj2p55YrLP5s5+d7xWLm6vHtCW+uXVrMNnwWxsr6+tnRCUimdSPbZzfPVkr5Evkzq3WkcV3TIh3iyOtpBQyc0cMwdFchoqBN7nF0GxNegQUotl9JsV+NhqwQuJRlUlTfZQIUKE9xxSRaw/K4c4uU8bunUAUbi4xpSzdNK7QkmPKybWYdeh6wTTwosukw3CZaaE8bM7hPtPGfUMK1xaYRhaumXDo3WZa2e7V7zBUYZqpDOl2GGMGGNPrMMGMMKHTYYYZYkafwzgzxrguhwFmkAE9DilmlJQOhyQzTJL70Jp4vxh/arqj/DSuvK+xzYyzrboHssACYIHz4L7m7Lf+GsTg8fumgsrxg8S/89UriT9WOL7owo6BDqb6PACvb+oAO0pSNtZrwY5Fn1x5H+LKE+yIVdW4GzsncP3DINexsweK5maQu7/9cZjbyDBqZnKQ80uPL8Z5jJyPUjLPh/wP9lwM1IMMpGBusB05V7nzaagd5Axnw3nahn2n6Rs4+X+5NvFwY1pWInEPmcG/uTZxcS8hKTGKbYabXJv4GJWTiKInHhJcmzinWKJSEqPoO2pxrk2cdwVHZS5NHv5+3Nan0fD3J/dl7k5OSnRA+y4G65MINikhIXFvl728GOylRLAtvENGalw29XGwKalg+Lv2c3Kjy6sfxroqF2sO69B6JLdjdjf0PlTormSoI+xzICPy8xXTg20AbYPT8nMlI0iJRSVTFq9fKwmz6HOgPs87RXZDQIfT70qYX+wMJQcIZVDdjn4gRT+mOYUOPVIStY5T8UykaTmAl0Y0J2Ktye+A6kukqEmkxM+Jjv+Q+5oV/oD79sJhnQ+a654S6H3VeTwjK52K9J+izakbyNEtfE7E6EnELqdEJz2JTlGJSDM9ieaIoATB1lT/oKyWiFCUEG1OHkUJz2aJehehMH5X2cZdECRhQQl8JmZV9vnkmlOYYnMKX8YT24pMfFHUk6hSPNiqoESNokTNZcJlwmVCKhNWSJQoSpQEJYoUJYqXUaJ0Ts/hXLQ5wR49iT3RvhPF9lS8nBKb9CQ2hSVW6UmsCkscb1Bz2DgWloAVahIrIC6xTk1iHSNxQsvhBCNxtkZLYu0MIQEFWhI+h+MjkT+l5HCaR0mU8pQk/MpB+U2e0ZIAnMRymY5DeRkp8ZZQKvJvfT70vdO7/IvgrmZFPpwVibyM9xd9zFoouLrHrP1nxf+g0ppkDkT01QNdmWjw6oF/JmrzNBIxLzWXF61SyEQ1ChKZgDckUjH/Ru7vExQyIV2cLhe8hPyLwEKvbWqRUPDaZuVB0GfEg4qCIEvBZoLjVWaOp+Qe/sx9XFkNiXioJoyGkn/GX+/HF1pQURpQWYHDrnJQDmWF5Q2Hg5LgKz7CVwZmp+mHQK6uv/2uNBzpgjy8WFEaCXorph0qGkozDpmW0FKYccysw5iea8WESQdtRRlnzDnYUJJxXOevj6GijAN6f0ONlGVM6e4JJA90Kxwk9fdn4rrLD8fBADYUggYrSnKDHcXR7ShTb8eCAWDF0g0AViyiAXYsZwJWLCwDYMUSPwBWLLYEADYsewUAAS9ApnQpuP4Ub9uoFZ4rXApO7aJ8oXR/qvGV5p/C82dKHwhTvzxiR7rbd3nEv54dqt6lFQtVOhwOh8PhcDgcDofD4XA4yPE/9+qQhpn5hYMAAAAASUVORK5CYII=)"></a-plane>
</a-plane>`
    document.getElementById('PlayBut').addEventListener('click', evt => {
      this.el.sceneEl.dispatchEvent(new CustomEvent('playPause'))
      //console.log('playPause')
    });
    document.getElementById('PlayBar').addEventListener('click', evt => {
      const rangeMin = -.63
      const rangeMax = .87
      if (! (evt.detail.intersection && evt.detail.intersection.point && evt.detail.intersection.point.x != undefined)) return;
      const clickAt = evt.detail.intersection.point.x
      let weight = ((clickAt - rangeMin) / (rangeMax - rangeMin)).toFixed(2);
      if (weight < 0) weight=0
      else if (weight > 1) weight=1
      const newEvent = new CustomEvent('setPlayTime', { detail: { weight: weight } })
      this.el.sceneEl.dispatchEvent(newEvent)
      //console.log('setPlayTime detail.weight: ', newEvent.detail.weight)
    });
    document.getElementById('RewindBut').addEventListener('click', evt => {
      this.el.sceneEl.dispatchEvent(new CustomEvent('previousFrame'))
      //console.log('you clicked rewind');
    });
    document.getElementById('ForwardBut').addEventListener('click', evt => {
      this.el.sceneEl.dispatchEvent(new CustomEvent('nextFrame'))
      //console.log('you clicked forward');
    });
    document.getElementById('SetSpeedPanel').addEventListener('click', evt => {
      let playSpeed = evt.target.getAttribute('data-playspeed')
      if (! (playSpeed >= 1 && playSpeed <= 10)) playSpeed = 1
      const evt2 = new CustomEvent('setPlaySpeed', { detail: { playSpeed: playSpeed } })
      this.el.sceneEl.dispatchEvent(evt2)
      //console.log('you clicked set speed', evt2.detail.playSpeed);
    });
    document.getElementById('ResetBut').addEventListener('click', evt => {
      this.el.sceneEl.dispatchEvent(new CustomEvent('pauseFrame'))
      this.el.sceneEl.dispatchEvent(new CustomEvent('resetView'))
      this.el.sceneEl.dispatchEvent(new CustomEvent('restart'))
      this.el.sceneEl.dispatchEvent(new CustomEvent('setPlaySpeed', { detail: { weight: 5 } }))
      //console.log('you clicked reset');
    });
  },
  remove: function() {
    this.el.innerHTML = ''
  }
});