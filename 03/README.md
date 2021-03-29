# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React components inside #03

W pliku `app.js` znajdziesz komponent `<Article/>`, który renderuje treści przekazane przez `props`.

Do każdego artykuły mogą być dodawane komentarze, które są przechowywane w `state`.

Twoim zadaniem jest napisać komponent kontrolowany tj. `state` zarządza zawartością pola formularza.

Następnie należy obsłużyć zdarzenie `submit` dla `form`, który ma dodać nowy komentarz jako kolejny element w `this.state.comments` i usunąć zawartość w  `<textarea/>`.

Do renderowania wielu `<li/>` na podstawie `this.state.comments` wykorzystaj `.map()`.
