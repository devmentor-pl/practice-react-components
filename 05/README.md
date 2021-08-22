> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e02-react-components` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*


&nbsp;

# `#05` React: Komponenty


Tym razem zmierzymy się z API, z którym mieliśmy już do czynienia - chodzi o [weatherbit.io](https://www.weatherbit.io/api). Pamiętaj, że istnieje dzienny litmit (500 odpytań) w [darmowym planie](https://www.weatherbit.io/pricing#standard).

## Przypomnienie
Aby móc skorzystać z tego API musisz się [zarejestrować](https://www.weatherbit.io/account/create), aby uzyskać `key`.

Adres pod którym możemy pobierać dane o pogodzie to: `https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]`, gdzie:

* **key** - Twój identyfikator
* **latitude** - [szerokość geograficzna](https://pl.wikipedia.org/wiki/Szeroko%C5%9B%C4%87_geograficzna)
* **longitude** - [długość geograficzna](https://pl.wikipedia.org/wiki/D%C5%82ugo%C5%9B%C4%87_geograficzna)

Przykładowe współrzędne to:
* **Warszawa**: 52.232222, 21.008333
* **Kraków**: 50.061389, 19.938333
* **Wrocław**: 51.11, 17.022222

 Zapoznaj się z [dokumentacją](https://www.weatherbit.io/api/weather-current), która prezentuje strukturę odpowiedzi. Znajdziesz tam także informacje jak pobierać dane w języku polskim.

 ## Implementacja

 Chcemy pobierać informacje o pogodzie na podstawie `props` jakie zostały przekazane np.

 ```
 <Weather lat={52.232222} lng={21.008333} />
 ```

 Aby móc komunikować się  z API użyjemy [Fetch-a](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), którego mieliśmy już okazję poznać w poprzednich materiałach.

 Odpytanie API powinno się odbyć po zamontowaniu komponentu czyli w metodzie `componentDidMount()`.

 Dane pobrane z API powiny być zapisane w `state` i wykorzystane w `.render()`. Pamiętaj, aby wartość początkową ustawić na `null`, aby móc wykorzystać [renderowanie warunkowe](https://pl.reactjs.org/docs/conditional-rendering.html) np.

 ```
 render() {
    const { data } = this.state;
    if(data) {
        // renderuj dopiero jak pobierzesz dane z API

        return <h1>informacje o pogodzie...</h1>
    }

    // nic nie renderuj
    return null;
 }
 ```

&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
