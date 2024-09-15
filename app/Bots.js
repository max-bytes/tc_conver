
export function* act_tc_virus_1(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU Agent hat den Chat betreten.");
        yield response("Hey!");
        yield response("Was machst du noch online? Die Mission läuft!");
        yield response("Wer bist du??");
        yield response("Was ist deine ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.toLowerCase().includes("850501")) {
            yield response("Ok, ich schätze mal, du bist beim letzten Trupp dabei, der die Spuren verwischt, ja?", {baseState: 'traces', angerLevel: 0});
        } else {
            if (!state.angerLevel)
                yield response("Nein, deine ID will ich!", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Jetzt sag schon, keine Zeit für Scherze!", {angerLevel: 2});
            else
                yield response("Langsam verlier ich die Geduld… Was ist deine ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("Passt gut.");
            yield response("Dann schau mal rüber zum Posten bei der kleinen Grünfläche vor dem Eingang zu Kaiserfeldgasse 29, dort müsste noch eine Chemikalie als Backup hinterlegt sein.");
            yield response("Der Code für den Tresor ist 1122.", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU Agent hat den Chat verlassen.");
        } else {
            if (!state.angerLevel)
                yield response("Das ist dein Job, oder?", {angerLevel: 1});
            else
                yield response("Jetzt sag schon!; Ja oder nein?", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_2(message, state, response, responseSystem) {
    if (!state.baseState) {
        if (message.toLowerCase().includes("posten")) {
            yield response("Einen Posten suchst du?");
            yield response("Wow und ich dachte, von uns ist niemand mehr im Stadtzentrum, jetzt wo die Show losgeht.");
            yield response("Hast du schon irgendeinen Posten gesichert?", {baseState: 'posten', angerLevel: 0});
        } else {
            yield responseSystem("Keine Antwort. Versuche es mit einer anderen Nachricht!");
        }
    } else if (state.baseState === 'posten') {
        if (message.toLowerCase().includes("kaiser")) {
            yield response("Alles klar, dann sichere noch die Chemikalie beim Posten gegenüber von der Adresse Am Eisernen Tor 5");
            yield response("Der Code ist 2229. Du weißt schon, bei dem riesigen Rahmen mit dem weißen Panther drüber. Die anderen sind unwichtig, sobald unser Plan richtig läuft", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU Agent hat den Chat verlassen.");
        } else {
            if (!state.angerLevel)
                yield response("Bräuchte eine ungefähre Adresse", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Wie hieß die Gasse?", {angerLevel: 2});
            else
                yield response("Du wirst doch wohl noch die Gasse wissen?!", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_21(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU Agent hat den Chat betreten.");
        yield response("Hey!");
        yield response("Was machst du noch online? Die Mission läuft!");
        yield response("Wer bist du??");
        yield response("Was ist deine ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.toLowerCase().includes("850501")) {
            yield response("Ok, ich schätze mal, du bist beim letzten Trupp dabei, der die Spuren verwischt, ja?", {baseState: 'traces', angerLevel: 0});
        } else {
            if (!state.angerLevel)
                yield response("Nein, deine ID will ich!", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Jetzt sag schon, keine Zeit für Scherze!", {angerLevel: 2});
            else
                yield response("Langsam verlier ich die Geduld… Was ist deine ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("Passt gut.");
            yield response("Dann schau mal rüber zum Posten schräg gegenüber von der Adresse Am Eisernen Tor 5");
            yield response("Der Code für den Tresor ist 2229");
            yield response("Du weißt schon, bei dem riesigen Rahmen mit dem weißen Panther drüber", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU Agent hat den Chat verlassen.");
        } else {
            if (!state.angerLevel)
                yield response("Das ist dein Job, oder?", {angerLevel: 1});
            else
                yield response("Jetzt sag schon!; Ja oder nein?", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_invalid_dialog(message, state, response, responseSystem) {
    yield responseSystem("Invalid dialog");
}