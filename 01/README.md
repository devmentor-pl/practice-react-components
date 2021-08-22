> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e02-react-components` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*


&nbsp;

# `#01` React: Komponenty


Twoim pierwszym wyzwaniem będzie napisać wszystkie metody cyklu życia komponentu jakie do tej pory poznałeś.

Następnie do każdej z nich dodaj odpowiednie `console`-ogi, które będą jednoznacznie identyfikować daną metodę np.

```
componentDidMount() {
    console.log('componentDidMount');
}
```

Dodatkowo w odpowiedniej metodzie uruchom `setInterval` z czasem 5. sekund, który będzie ikrementował `state` o nazwie `counter`. Pamiętaj, aby "posprzątać" po tym interwale w odpowiedniej metodzie.

Zwróć uwagę, jakie metody są po sobie wywoływane i w którym momencie. Przyjrzyj się też metodom, które są wielokrotnie uruchamiane. 

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) znajdziesz gotową konfigurację Webpack-a dla React. Znajduje się tam zmienna `taskNumber`, która przechwowuje informacje o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej i ponownie uruchamiać tryb developerski. Pamiętasz jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, że musimy mieć pobrane paczki z npm, które będziemy wykorzystywać podczas pracy z React. Wiesz jak je zainstalować?


&nbsp;

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
