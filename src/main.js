import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  // render: h => h(App)
  el: "#app",
  render: function(h) {
    return (
      <div>
        {/* <h2>Hello!</h2>
        <p>This is JSX sample.</p> */}
        <p>※以下はAppコンポーネントの表示</p>
        <hr></hr>
        <App />
      </div>
    );
  }
}).$mount("#app");
