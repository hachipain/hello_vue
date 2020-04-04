
<script>
export default {
  name: "Render",
  props: {
    title: String
  },
  data: function() {
    return {
      message: "this is a render sample"
    };
  },
  render: function(h) {
    // return h("div", {}, [h("h1", "Render"), h("p", "this is a render sample")]);
    return (
      // <div>
      //   <h1>JSX</h1>
      //   <p>this is a JSX message!</p>
      // </div>
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
};
</script>

<style>
</style>