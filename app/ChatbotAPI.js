
function act(message, state) {

    const baseState = state.baseState ?? 'init';
    message = message ?? '';

    function buildResponseAndState(res, s) {
        return [res, {...state, ...s}];
    }    

    if (baseState === 'init') {
        return buildResponseAndState("Hey! Was machst du noch online? Die Mission läuft! Wer bist du?? Was ist deine ID?", {baseState: 'your_id'});
    } else if (baseState === 'your_id') {
        if (message.includes("123456")) {
            return buildResponseAndState("Ok, ich schätze mal, du bist beim letzten Trupp dabei, der die Spuren verwischt, ja?", {baseState: 'traces', angerLevel: 0});
        } else {
            const angerLevel = state.angerLevel ?? 0;
            if (angerLevel === 0)
                return buildResponseAndState("Nein, deine ID will ich!", {angerLevel: 1});
            else if (angerLevel === 1)
                return buildResponseAndState("Jetzt sag schon, keine Zeit für Scherze!", {angerLevel: 2});
            else
            return buildResponseAndState("Langsam verlier ich die Geduld… Was ist deine ID???", {angerLevel: 0});
        }
    } else if (baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            return buildResponseAndState("Passt gut. Dann schau mal rüber zum Posten im Gebüsch vor der Adresse Kaiserfeldgasse 12, dort müsste noch eine Chemikalie als Backup hinterlegt sein. Der Code für den Tresor ist 1111.", {baseState: 'parting', angerLevel: 0});
        } else {
            const angerLevel = state.angerLevel ?? 0;
            if (angerLevel === 0)
                return buildResponseAndState("Das ist dein Job, oder?", {angerLevel: 1});
            else
            return buildResponseAndState("Jetzt sag schon!; Ja oder nein?", {angerLevel: 0});
        }
    } else if (baseState === 'parting') {
        return buildResponseAndState("Keine Antwort...", {}); // TODO
    } else {
        return buildResponseAndState("Error: unknown state...", {});
    }
}

const API = {
    GetChatbotResponse: async (message, state) => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
            return resolve(act(message, state));
        }, 1000);
      });
    }
  };
  
  export default API;
  