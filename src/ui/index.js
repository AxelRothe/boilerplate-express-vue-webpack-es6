/**
 * Entry Point for Vue
 */
import Vue from "vue";
import components from "./components";

export default {
    /**
     * Starts the Vue Renderer
     *
     * @param {{APP_NAME:string}}config
     * @returns {Vue}
     */
    render(config) {
        return new Vue({
            el: "#app",
            template: `<div>
            <box message="Ola Vue!"></box>
        </div>`,
            data: {
                message: "Hello Vue!",
            },
            mounted() {
                //Sets Window Title to App Name
                document.title = config.APP_NAME;
            },
            /* define all main components here, sub components of components should be nested */
            components: {
                box: components.Box,
            },
        });
    },
};
