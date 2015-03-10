import Vue from "vue";

import template from "./templates/index.html";

const App = new Vue({
    el: "#mixtape",
    template,
    data: {
        something: "woot!"
    }
});

export default App;
