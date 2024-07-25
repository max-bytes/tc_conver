
function* act(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU Agent hat den Chat betreten.");
        yield response("Hey!");
        yield response("Was machst du noch online? Die Mission läuft!");
        yield response("Wer bist du??");
        yield response("Was ist deine ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.includes("123456")) {
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
            yield response("Passt gut. Dann schau mal rüber zum Posten im Gebüsch vor der Adresse Kaiserfeldgasse 12, dort müsste noch eine Chemikalie als Backup hinterlegt sein. Der Code für den Tresor ist 1111.", {baseState: 'parting', angerLevel: 0});
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

const API = {
    GetChatbotResponse: (message, state) => {
        var newState = state;
        function response(res, s = {}, isSystemMessage = false) {
            newState = {...newState, ...s}
            return [res, newState, isSystemMessage];
        };
        function responseSystem(res, s = {}) {
            return response(res, s, true);
        };
        return act(message ?? '', newState, response, responseSystem);
    }
  };
  
  export default API;
  