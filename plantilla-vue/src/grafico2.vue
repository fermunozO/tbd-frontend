<template>	
 
<body>
	<h1> Géneros más escuchados</h1>
<div class="center">

	<svg width="960" height="500"></svg>

	<li v-for="u in data2">
        <span>{{u.nombre}} {{u.comentariosPositivos}}</span>
     </li>


</div>

</body>
	
</template>
<script>
import * as d3 from 'd3';
export default{
  data: function(){
    return {
      data2 : [/*
      			{letter:'Adele', frequency: .33},			
      			{letter:'Bad Bunny', frequency: .12},		
      			{letter:'Coldplay', frequency: .13},			
      			{letter:'Drake', frequency: .15},			
      			{letter:'Eminem', frequency: .78},			
      			{letter:'Florida', frequency: .13},			
      			{letter:'Gorillaz', frequency: .56},			
      			{letter:'Hozier', frequency: .52},			
      			{letter:'Incubus', frequency: .98},			
      			{letter:'Journey', frequency: .32},			
      			{letter:'Kuday', frequency: .51},			
      			{letter:'Linkin Park', frequency: .35},			
      			{letter:'Muse', frequency: .77}*/			
      ],
      data3 : [
      		{date:'30-May-12', close: 23.33},			
  			{date:'23-May-12', close: 23.12},		
  			{date:'19-May-12', close: 3.13},			
  			{date:'10-May-12', close: 23.15},			
  			{date:'1-May-12', close: 4.78},			
  			{date:'29-Apr-12', close: 55.13},			
  			{date:'20-Apr-12', close: 66.56},			
  			{date:'10-Apr-12', close: 76.52},			
  			{date:'2-Apr-12', close: 43.98},			
  			{date:'30-Mar-12', close: 33.32},			
  			{date:'26-Mar-12', close: 2.51},			
  			{date:'22-Mar-12', close: 33.35},			
  			{date:'20-Mar-12', close: 23.77},			
  			{date:'16-Mar-12', close: 45.52},			
  			{date:'12-Mar-12', close: 5.50},			
  			{date:'9-Mar-12', close: 5.59},			
  			{date:'2-Mar-12', close: 44.06}

      ]
    }
  },
  methods:{
    loadGraph:function(data){

      	var svg = d3.select("svg"),
		    margin = {top: 10, right: 90, bottom: 100, left: 140},
		    width = +svg.attr("width") - margin.left - margin.right,
		    height = +svg.attr("height") - margin.top - margin.bottom;

		var x = d3.scaleBand().rangeRound([0, width]).padding(0.45),
		    y = d3.scaleLinear().rangeRound([height, 0]);

		var g = svg.append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		

		  x.domain(data.map(function(d) { return d.nombre; }));
		  //y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
		  y.comentariosPositivos; // eje y en rangos de 0% hasta el 100%

		  g.append("g")
		      .attr("class", "axis axis--x")
		      .attr("transform", "translate(0,"+ height +")")
		      .call(d3.axisBottom(x));

		  g.append("g")
		      .attr("class", "axis axis--y")
		      .call(d3.axisLeft(y).ticks(10, "%")) // ticks indica la cantidad de indices del eje y
		    .append("text")
		      .attr("transform", "rotate(-90)")
		      .attr("y", 6)
		      .attr("dy", "0.71em")
		      .attr("text-anchor", "end")
		      .text("Frequency");

		  g.selectAll(".bar")
		    .data(data)
		    .enter().append("rect")
		      .attr("class", "bar")
		      .attr("x", function(d) { return x(d.nombre); })
		      .attr("y", function(d) { return y(d.comentariosPositivos); })
		      .attr("width", x.bandwidth())
		      .attr("height", function(d) { return height + - y(d.comentariosPositivos); });
		
    }

  },
  mounted:function(){
    console.log('grafico2.vue');
    // GET /someUrl
    this.$http.get('http://localhost:2323/backend-tbd/artistas')
    .then(response=>{
       // get body data
      this.data2 = response.body;
     console.log('data2',this.data2)
    }, response=>{
       // error callback
       console.log('error cargando lista');
    })
   
    this.loadGraph(this.data2);
  }	
}
</script>
<style> 
	.chart div {
	  font: 10px sans-serif;
	  background-color: steelblue;
	  text-align: right;
	  padding: 3px;
	  margin: 1px;
	  color: white;
	}

	.chart rect {
	  fill: steelblue;
	}

	.chart text {
	  fill: white;
	  font: 10px sans-serif;
	  text-anchor: end;
	}


	.bar {
	  fill: steelblue;
	}

	.bar:hover {
	  fill: brown;
	}

	.axis--x path {
	  display: block;
	}

	.line {
	  fill: none;
	  stroke: steelblue;
	  stroke-width: 2px;
	}

	.grid line {
	  stroke: lightgrey;
	  stroke-opacity: 0.7;
	  shape-rendering: crispEdges;
	}

	.grid path {
	  stroke-width: 0;
	}

</style>