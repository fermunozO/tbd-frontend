<template>
<div >
  <h1>hiuaciuanbiuw</h1>
  <div class="chart">
  </div>

  <h2>ehfeufhufhuehpico amo a mona</h2>

</div>


</template>

<script>
import * as d3 from 'd3';
export default{
  data:function(){
    return {
    data : [30, 86, 168, 281, 303, 365]

    }
  },
  methods:{

    loadGraph: function(data){

     d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d) { return d + "px"; })
        .text(function(d) { return d; });

    },
     cosa: function () {
     var body = d3.select("body")
      body.style("color", "darkcyan")
      body.style("background-color", "white")
     }

  },
  mounted:function(){

     this.loadGraph(this.data);
     this.cosa();

  }
}

</script>
<style>
.chart div {
  font: 12px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 5px;
  margin: 20px;
  color: white;
}
</style>
