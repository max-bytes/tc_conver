
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

export function* act_tc_virus_21a(message, state, response, responseSystem) {
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

export function* act_tc_virus_33a(message, state, response, responseSystem) {
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
            yield response("Dann sichere noch die Chemikalie beim Posten am Gebäude bei der Ecke Hamerlinggasse und Opernring");
            yield response("Der Code für den Tresor ist 3334");
            yield response("Du weißt schon, am Gitter bei der Dachrinne Richtung Rosariumbrunnen!", {baseState: 'parting', angerLevel: 0});
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


export function* act_tc_virus_44a(message, state, response, responseSystem) {
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
            yield response("Dann sichere noch die Chemikalie beim Posten am Gebäude Kalchberggasse 10");
            yield response("Der Code für den Tresor ist 4445");
            yield response("Du weißt schon, am Gitter links vom Eingang!", {baseState: 'parting', angerLevel: 0});
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

export function* act_tc_virus_55a(message, state, response, responseSystem) {
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
            yield response("Dann sichere noch die Chemikalie beim Posten am grünen Zaungitter bei der Adresse Kaiserfeldgasse 19");
            yield response("Der Code für den Tresor ist 5556");
            yield response("Du weißt schon,  dort am grünen Zaungitter gleich beim Schild mit der Hausnummer", {baseState: 'parting', angerLevel: 0});
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



export function* act_tc_virus_e1(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU agent has entered the chat.");
        yield response("Hey!");
        yield response("What are you still doing online? The mission is running!");
        yield response("Who are you??");
        yield response("What is your ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.toLowerCase().includes("850501")) {
            yield response("All right! Okay, I guess you're with the last squad to cover the tracks, huh?", {baseState: 'traces', angerLevel: 0});
        } else {
            if (!state.angerLevel)
                yield response("No, your ID is what I want!", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Now tell me, no time for jokes!", {angerLevel: 2});
            else
                yield response("I'm losing patience… What is your ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("OK");
            yield response("Then look over to the post at the fence around the small green area in front of the entrance to Kaiserfeldgasse 29");
            yield response("There should still be a chemical there as a backup");
            yield response("The code for the safe is 1122", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU Agent hat den Chat verlassen.");
        } else {
            if (!state.angerLevel)
                yield response("That's your job, right?", {angerLevel: 1});
            else
                yield response("Now tell me! Yes or no??", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_e2(message, state, response, responseSystem) {
    if (!state.baseState) {
        if (message.toLowerCase().includes("post")) {
            yield response("You are looking for a post?");
            yield response("Wow, and I thought none of us is left in the city centre now that the plan is underway.");
            yield response("Have you secured any posts yet?", {baseState: 'post', angerLevel: 0});
        } else {
            yield responseSystem("No answer. Try another message!");
        }
    } else if (state.baseState === 'post') {
        if (message.toLowerCase().includes("kaiser")) {
            yield response("All right, then secure the chemical at the post diagonally opposite the address Am Eisernen Tor 5");
            yield response("The code of the safe is 2229");
            yield response("You know, the one attached to the huge metal frame with the white panther on top. The others are unimportant as soon as our plan gets going", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU Agent hat den Chat verlassen.");
        } else {
            if (!state.angerLevel)
                yield response("Need a rough address", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("What was the name of the street or Gasse?", {angerLevel: 2});
            else
                yield response("You don't even know the street name anymore?!", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_e21a(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU agent has entered the chat.");
        yield response("Hey!");
        yield response("What are you still doing online? The mission is running!");
        yield response("Who are you??");
        yield response("What is your ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.toLowerCase().includes("850501")) {
            yield response("Okay, I guess you're with the last squad to cover the tracks, huh?", {baseState: 'traces', angerLevel: 0});
        } else {
            if (!state.angerLevel)
                yield response("No, your ID is what I want!", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Now tell me, no time for jokes!", {angerLevel: 2});
            else
                yield response("I'm losing patience… What is your ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("OK");
            yield response("Then secure the chemical at the post diagonally opposite the address Am Eisernen Tor 5");
            yield response("The code for the safe is 2229");
            yield response("You know, the one attached to the huge metal frame with the white panther on top. The others are unimportant as soon as our plan gets going", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU agent has left the chat.");
        } else {
            if (!state.angerLevel)
                yield response("That's your job, right?", {angerLevel: 1});
            else
                yield response("Now tell me! Yes or no??", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_e33a(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU agent has entered the chat.");
        yield response("Hey!");
        yield response("What are you still doing online? The mission is running!");
        yield response("Who are you??");
        yield response("What is your ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.toLowerCase().includes("850501")) {
            yield response("Okay, I guess you're with the last squad to cover the tracks, huh?", {baseState: 'traces', angerLevel: 0});
        } else {
            if (!state.angerLevel)
                yield response("No, your ID is what I want!", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Now tell me, no time for jokes!", {angerLevel: 2});
            else
                yield response("I'm losing patience… What is your ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("OK");
            yield response("Then secure the chemical at the building on the corner Hamerlinggasse/Opernring");
            yield response("The code for the safe is 3334");
            yield response("You know, on the window grill by the rain gutter towards the Rosarium fountain!", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU agent has left the chat.");
        } else {
            if (!state.angerLevel)
                yield response("That's your job, right?", {angerLevel: 1});
            else
                yield response("Now tell me! Yes or no??", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_e44a(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU agent has entered the chat.");
        yield response("Hey!");
        yield response("What are you still doing online? The mission is running!");
        yield response("Who are you??");
        yield response("What is your ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.toLowerCase().includes("850501")) {
            yield response("Okay, I guess you're with the last squad to cover the tracks, huh?", {baseState: 'traces', angerLevel: 0});
        } else {
            if (!state.angerLevel)
                yield response("No, your ID is what I want!", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Now tell me, no time for jokes!", {angerLevel: 2});
            else
                yield response("I'm losing patience… What is your ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("OK");
            yield response("Then secure the chemical at the post at the building at Kalchberggasse 10");
            yield response("The code for the safe is 4445");
            yield response("You know, on the window grill to the left of the entrance!", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU agent has left the chat.");
        } else {
            if (!state.angerLevel)
                yield response("That's your job, right?", {angerLevel: 1});
            else
                yield response("Now tell me! Yes or no??", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_e55a(message, state, response, responseSystem) {
    if (!state.baseState) {
        yield responseSystem("EMU agent has entered the chat.");
        yield response("Hey!");
        yield response("What are you still doing online? The mission is running!");
        yield response("Who are you??");
        yield response("What is your ID?", {baseState: 'your_id'});
    } else if (state.baseState === 'your_id') {
        if (message.toLowerCase().includes("850501")) {
            yield response("Okay, I guess you're with the last squad to cover the tracks, huh?", {baseState: 'traces', angerLevel: 0});
        } else {
            if (!state.angerLevel)
                yield response("No, your ID is what I want!", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Now tell me, no time for jokes!", {angerLevel: 2});
            else
                yield response("I'm losing patience… What is your ID???", {angerLevel: 0});
        }
    } else if (state.baseState === 'traces') {
        var yesRegex = new RegExp(['ja', 'yes', 'ok'].join( "|" ), "i");
        if (yesRegex.test(message) || message === 'j' || message === 'k' || message === 'y') {
            yield response("OK");
            yield response("Then secure the chemical at the post at the address Kaiserfeldgasse 19!");
            yield response("The code for the safe is 5556");
            yield response("You know, on the green fence just by the house number plate", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU agent has left the chat.");
        } else {
            if (!state.angerLevel)
                yield response("That's your job, right?", {angerLevel: 1});
            else
                yield response("Now tell me! Yes or no??", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_12b(message, state, response, responseSystem) {
    if (!state.baseState) {
        if (message.toLowerCase().includes("posten")) {
            yield response("Einen Posten suchst du?");
            yield response("Wow und ich dachte, von uns ist niemand mehr im Stadtzentrum, jetzt wo die Show losgeht.");
            yield response("Hast du schon irgendeinen Posten gesichert?", {baseState: 'posten', angerLevel: 0});
        } else {
            yield responseSystem("Keine Antwort. Versuche es mit einer anderen Nachricht!");
        }
    } else if (state.baseState === 'posten') {
        if (message.toLowerCase().includes("tor") || message.toLowerCase().includes("eis")) {
            yield response("Alles klar, dann schau mal rüber zum Posten bei der kleinen Grünfläche vor dem Eingang zu Kaiserfeldgasse 29.");
            yield response("Dort müsste noch eine Chemikalie als Backup hinterlegt sein.");
            yield response("Der Code ist 1122.", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU Agent hat den Chat verlassen.");
        } else {
            if (!state.angerLevel)
                yield response("Bräuchte eine ungefähre Adresse", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Wie hieß die Straße oder der Platz oder so?", {angerLevel: 2});
            else
                yield response("Du wirst doch wohl irgendwas wissen?!", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}

export function* act_tc_virus_22b(message, state, response, responseSystem) {
    if (!state.baseState) {
        if (message.toLowerCase().includes("posten")) {
            yield response("Einen Posten suchst du?");
            yield response("Wow und ich dachte, von uns ist niemand mehr im Stadtzentrum, jetzt wo die Show losgeht.");
            yield response("Hast du schon irgendeinen Posten gesichert?", {baseState: 'posten', angerLevel: 0});
        } else {
            yield responseSystem("Keine Antwort. Versuche es mit einer anderen Nachricht!");
        }
    } else if (state.baseState === 'posten') {
        if (message.toLowerCase().includes("oper") || message.toLowerCase().includes("hamerling") || message.toLowerCase().includes("hammer") || message.toLowerCase().includes("ecke")) {
            yield response("Alles klar, dann sichere noch die Chemikalie beim Posten gegenüber bei der Adresse Kalchberggasse 10. ");
            yield response("Der Code ist 4445.");
            yield response("Du weißt schon, am Gitter links vom Eingang!", {baseState: 'parting', angerLevel: 0});
            yield responseSystem("EMU Agent hat den Chat verlassen.");
        } else {
            if (!state.angerLevel)
                yield response("Bräuchte eine ungefähre Adresse", {angerLevel: 1});
            else if (state.angerLevel === 1)
                yield response("Wie hieß die Straße oder der Platz oder so?", {angerLevel: 2});
            else
                yield response("Du wirst doch wohl irgendwas wissen?!", {angerLevel: 0});
        }
    } else if (state.baseState === 'parting') {
        // yield response("Keine Antwort...", {});
    } else {
        yield response("Error: unknown state...", {});
    }
}