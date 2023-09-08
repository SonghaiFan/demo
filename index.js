const spec2 = "vis2.json";
const spec1 = "vis1.json";
const spemap = "map.json";
vegaEmbed("#vis2", spec1, { renderer: "svg", actions: false })
  .then(function (result) {})
  .catch(console.error);
