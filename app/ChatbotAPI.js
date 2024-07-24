

function* act(message, state) {

    
    function response(res, s = {}) {
        return [res, {...state, ...s}];
    };

    if (!state.baseState) {
        yield response("Hey!");
        yield response("Was machst du noch online? Die Mission läuft! ");
        yield response("Wer bist du??");
        yield response("Was ist deine ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.includes("123456")) {
            yield response("Ok, ich schätze mal, du bist beim letzten Trupp dabei, der die Spuren verwischt, ja?", {baseState: 'traces', angerLevel: 0});
        } else {
            const angerLevel = state.angerLevel ?? 0;
            if (angerLevel === 0)
                yield response("Nein, deine ID will ich!", {angerLevel: 1});
            else if (angerLevel === 1)
                yield response("Jetzt sag schon, keine Zeit für Scherze!", {angerLevel: 2});
            else
            yield response("Langsam verlier ich die Geduld… Was ist deine ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("Passt gut. Dann schau mal rüber zum Posten im Gebüsch vor der Adresse Kaiserfeldgasse 12, dort müsste noch eine Chemikalie als Backup hinterlegt sein. Der Code für den Tresor ist 1111.", {baseState: 'parting', angerLevel: 0});
        } else {
            const angerLevel = state.angerLevel ?? 0;
            if (angerLevel === 0)
                yield response("Das ist dein Job, oder?", {angerLevel: 1});
            else
            yield response("Jetzt sag schon!; Ja oder nein?", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        yield response("Keine Antwort...", {}); // TODO
    } else {
        yield response("Error: unknown state...", {});
    }
}

const API = {
    GetChatbotResponse: (message, state) => {
        return act(message ?? '', state);
    }
  };
  
  export default API;
  