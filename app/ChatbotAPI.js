

const API = {
    GetChatbotResponse: (message, state, act) => {
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
  