






render() {
    const { data } = this.state;
    if(data) {
        // renderuj dopiero jak pobierzesz dane z API
 
        return <h1>informacje o pogodzie...</h1>
    }
 
    // nic nie renderuj
    retur null;
 }