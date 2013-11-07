function limitTextarea(textarea,maxLines,maxChar){
		var lines=textarea.value.replace(/\r/g,'').split('\n'),lines_removed,char_removed,i;
		if(maxLines&&lines.length>maxLines){
			lines=lines.slice(0,maxLines);
			lines_removed=1
		}
	}
	
	function drawVisualization18a(data18a) {
		// Create and draw the visualization.
        var ac18a = new google.visualization.AreaChart(document.getElementById('visualization18a'));
        ac18a.draw(data18a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none', text: 'some text'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		
		$('#visualization18a iframe').attr('allowTransparency', 'true');
		$('#visualization18a iframe').contents().find('body').css('background', 'transparent');
		
      }
	  
	  function rangoNumero(campo){
		var dato=document.getElementById(campo).value;
		dato= parseInt(dato);
		//alert(dato);
		if(dato<(-3) || dato>3){
			alert("El dato de movilidad debe estar comprendido entre -3 y +3");
			document.getElementById(campo).value='0';
		}
	  }
	
	  
	
	  function rangoNumeroMargen(campo){
		var dato=document.getElementById(campo).value;
		dato= parseInt(dato);
		//alert(dato);
		if(dato<(-9) || dato>9){
			alert("El dato de margen gingival debe estar comprendido entre -9 y +9");
			document.getElementById(campo).value='0';
		}
		
	  }

	 function cargar18a(){
	 
			var datomg18a=document.getElementById('mg18-a').value;
			var datomg18b=document.getElementById('mg18-b').value;
			var datomg18c=document.getElementById('mg18-c').value;

			var datops18a=document.getElementById('ps18-a').value;
			var datops18b=document.getElementById('ps18-b').value;
			var datops18c=document.getElementById('ps18-c').value;
			
			//alert(document.getElementById('ps18-a').value);
			
			if(datops18a>3){
				document.getElementById('ps18-a').style.color="red";
			}else{
				document.getElementById('ps18-a').style.color="black";
			}
			if(datops18b>3){
				document.getElementById('ps18-b').style.color="red";
			}else{
				document.getElementById('ps18-b').style.color="black";
			}
			if(datops18c>3){
				document.getElementById('ps18-c').style.color="red";
			}else{
				document.getElementById('ps18-c').style.color="black";
			}

			
			var data18a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg18a)+parseInt(datops18a)),      0-parseInt(datops18a)],
				['',    0+(parseInt(datomg18b)+parseInt(datops18b)),      0-parseInt(datops18b)],
				['',    0+(parseInt(datomg18c)+parseInt(datops18c)),      0-parseInt(datops18c)]
			]); 
			
			drawVisualization18a(data18a);
			
	  }
	  
	  function drawVisualization17a(data17a) {
		// Create and draw the visualization.
        var ac17a = new google.visualization.AreaChart(document.getElementById('visualization17a'));
        ac17a.draw(data17a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization17a iframe').attr('allowTransparency', 'true');
		$('#visualization17a iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar17a(){

			var datomg17a=document.getElementById('mg17-a').value;
			var datomg17b=document.getElementById('mg17-b').value;
			var datomg17c=document.getElementById('mg17-c').value;
			
			var datops17a=document.getElementById('ps17-a').value;
			var datops17b=document.getElementById('ps17-b').value;
			var datops17c=document.getElementById('ps17-c').value;
			
			if(datops17a>3){
				document.getElementById('ps17-a').style.color="red";
			}else{
				document.getElementById('ps17-a').style.color="black";
			}
			if(datops17b>3){
				document.getElementById('ps17-b').style.color="red";
			}else{
				document.getElementById('ps17-b').style.color="black";
			}
			if(datops17c>3){
				document.getElementById('ps17-c').style.color="red";
			}else{
				document.getElementById('ps17-c').style.color="black";
			}

			
			var data17a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg17a)+parseInt(datops17a)),      0-parseInt(datops17a)],
				['',    0+(parseInt(datomg17b)+parseInt(datops17b)),      0-parseInt(datops17b)],
				['',    0+(parseInt(datomg17c)+parseInt(datops17c)),      0-parseInt(datops17c)]
			]); 
			
			drawVisualization17a(data17a);
			
	  }
	  
	  function drawVisualization16a(data16a) {
		// Create and draw the visualization.
        var ac16a = new google.visualization.AreaChart(document.getElementById('visualization16a'));
        ac16a.draw(data16a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 50,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization16a iframe').attr('allowTransparency', 'true');
		$('#visualization16a iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar16a(){
			var datomg16a=document.getElementById('mg16-a').value;
			var datomg16b=document.getElementById('mg16-b').value;
			var datomg16c=document.getElementById('mg16-c').value;
			
			var datops16a=document.getElementById('ps16-a').value;
			var datops16b=document.getElementById('ps16-b').value;
			var datops16c=document.getElementById('ps16-c').value;
	
			if(datops16a>3){
				document.getElementById('ps16-a').style.color="red";
			}else{
				document.getElementById('ps16-a').style.color="black";
			}
			if(datops16b>3){
				document.getElementById('ps16-b').style.color="red";
			}else{
				document.getElementById('ps16-b').style.color="black";
			}
			if(datops16c>3){
				document.getElementById('ps16-c').style.color="red";
			}else{
				document.getElementById('ps16-c').style.color="black";
			}
			
			var data16a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg16a)+parseInt(datops16a)),      0-parseInt(datops16a)],
				['',    0+(parseInt(datomg16b)+parseInt(datops16b)),      0-parseInt(datops16b)],
				['',    0+(parseInt(datomg16c)+parseInt(datops16c)),      0-parseInt(datops16c)]
			]); 
			
			drawVisualization16a(data16a);
			
	  }
	  
	  	  function drawVisualization15a(data15a) {
		// Create and draw the visualization.
        var ac15a = new google.visualization.AreaChart(document.getElementById('visualization15a'));
        ac15a.draw(data15a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization15a iframe').attr('allowTransparency', 'true');
		$('#visualization15a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar15a(){
			var datomg15a=document.getElementById('mg15-a').value;
			var datomg15b=document.getElementById('mg15-b').value;
			var datomg15c=document.getElementById('mg15-c').value;
			
			var datops15a=document.getElementById('ps15-a').value;
			var datops15b=document.getElementById('ps15-b').value;
			var datops15c=document.getElementById('ps15-c').value;

			if(datops15a>3){
				document.getElementById('ps15-a').style.color="red";
			}else{
				document.getElementById('ps15-a').style.color="black";
			}
			if(datops15b>3){
				document.getElementById('ps15-b').style.color="red";
			}else{
				document.getElementById('ps15-b').style.color="black";
			}
			if(datops15c>3){
				document.getElementById('ps15-c').style.color="red";
			}else{
				document.getElementById('ps15-c').style.color="black";
			}
			
			var data15a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg15a)+parseInt(datops15a)),      0-parseInt(datops15a)],
				['',    0+(parseInt(datomg15b)+parseInt(datops15b)),      0-parseInt(datops15b)],
				['',    0+(parseInt(datomg15c)+parseInt(datops15c)),      0-parseInt(datops15c)]
			]); 
			
			drawVisualization15a(data15a);
			
	  }	  
	 
	  	  function drawVisualization14a(data14a) {
		// Create and draw the visualization.
        var ac14a = new google.visualization.AreaChart(document.getElementById('visualization14a'));
        ac14a.draw(data14a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization14a iframe').attr('allowTransparency', 'true');
		$('#visualization14a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar14a(){
			var datomg14a=document.getElementById('mg14-a').value;
			var datomg14b=document.getElementById('mg14-b').value;
			var datomg14c=document.getElementById('mg14-c').value;
			
			var datops14a=document.getElementById('ps14-a').value;
			var datops14b=document.getElementById('ps14-b').value;
			var datops14c=document.getElementById('ps14-c').value;

			if(datops14a>3){
				document.getElementById('ps14-a').style.color="red";
			}else{
				document.getElementById('ps14-a').style.color="black";
			}
			if(datops14b>3){
				document.getElementById('ps14-b').style.color="red";
			}else{
				document.getElementById('ps14-b').style.color="black";
			}
			if(datops14c>3){
				document.getElementById('ps14-c').style.color="red";
			}else{
				document.getElementById('ps14-c').style.color="black";
			}
			
			var data14a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg14a)+parseInt(datops14a)),      0-parseInt(datops14a)],
				['',    0+(parseInt(datomg14b)+parseInt(datops14b)),      0-parseInt(datops14b)],
				['',    0+(parseInt(datomg14c)+parseInt(datops14c)),      0-parseInt(datops14c)]
			]); 
			
			drawVisualization14a(data14a);

	  }	 
	  
	  	  function drawVisualization13a(data13a) {
		// Create and draw the visualization.
        var ac13a = new google.visualization.AreaChart(document.getElementById('visualization13a'));
        ac13a.draw(data13a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization13a iframe').attr('allowTransparency', 'true');
		$('#visualization13a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar13a(){
			var datomg13a=document.getElementById('mg13-a').value;
			var datomg13b=document.getElementById('mg13-b').value;
			var datomg13c=document.getElementById('mg13-c').value;
			
			var datops13a=document.getElementById('ps13-a').value;
			var datops13b=document.getElementById('ps13-b').value;
			var datops13c=document.getElementById('ps13-c').value;

			if(datops13a>3){
				document.getElementById('ps13-a').style.color="red";
			}else{
				document.getElementById('ps13-a').style.color="black";
			}
			if(datops13b>3){
				document.getElementById('ps13-b').style.color="red";
			}else{
				document.getElementById('ps13-b').style.color="black";
			}
			if(datops13c>3){
				document.getElementById('ps13-c').style.color="red";
			}else{
				document.getElementById('ps13-c').style.color="black";
			}
			
			var data13a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg13a)+parseInt(datops13a)),      0-parseInt(datops13a)],
				['',    0+(parseInt(datomg13b)+parseInt(datops13b)),      0-parseInt(datops13b)],
				['',    0+(parseInt(datomg13c)+parseInt(datops13c)),      0-parseInt(datops13c)]
			]); 
			
			drawVisualization13a(data13a);

	  }	 	  
	  
	  	  function drawVisualization12a(data12a) {
		// Create and draw the visualization.
        var ac12a = new google.visualization.AreaChart(document.getElementById('visualization12a'));
        ac12a.draw(data12a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 27,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization12a iframe').attr('allowTransparency', 'true');
		$('#visualization12a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar12a(){
			var datomg12a=document.getElementById('mg12-a').value;
			var datomg12b=document.getElementById('mg12-b').value;
			var datomg12c=document.getElementById('mg12-c').value;
			
			var datops12a=document.getElementById('ps12-a').value;
			var datops12b=document.getElementById('ps12-b').value;
			var datops12c=document.getElementById('ps12-c').value;

			if(datops12a>3){
				document.getElementById('ps12-a').style.color="red";
			}else{
				document.getElementById('ps12-a').style.color="black";
			}
			if(datops12b>3){
				document.getElementById('ps12-b').style.color="red";
			}else{
				document.getElementById('ps12-b').style.color="black";
			}
			if(datops12c>3){
				document.getElementById('ps12-c').style.color="red";
			}else{
				document.getElementById('ps12-c').style.color="black";
			}
			
			var data12a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg12a)+parseInt(datops12a)),      0-parseInt(datops12a)],
				['',    0+(parseInt(datomg12b)+parseInt(datops12b)),      0-parseInt(datops12b)],
				['',    0+(parseInt(datomg12c)+parseInt(datops12c)),      0-parseInt(datops12c)]
			]); 
			
			drawVisualization12a(data12a);

	  }	 	  
	  
	  	  function drawVisualization11a(data11a) {
		// Create and draw the visualization.
        var ac11a = new google.visualization.AreaChart(document.getElementById('visualization11a'));
        ac11a.draw(data11a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 33,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization11a iframe').attr('allowTransparency', 'true');
		$('#visualization11a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar11a(){
			var datomg11a=document.getElementById('mg11-a').value;
			var datomg11b=document.getElementById('mg11-b').value;
			var datomg11c=document.getElementById('mg11-c').value;
			
			var datops11a=document.getElementById('ps11-a').value;
			var datops11b=document.getElementById('ps11-b').value;
			var datops11c=document.getElementById('ps11-c').value;

			if(datops11a>3){
				document.getElementById('ps11-a').style.color="red";
			}else{
				document.getElementById('ps11-a').style.color="black";
			}
			if(datops11b>3){
				document.getElementById('ps11-b').style.color="red";
			}else{
				document.getElementById('ps11-b').style.color="black";
			}
			if(datops11c>3){
				document.getElementById('ps11-c').style.color="red";
			}else{
				document.getElementById('ps11-c').style.color="black";
			}
			
			var data11a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg11a)+parseInt(datops11a)),      0-parseInt(datops11a)],
				['',    0+(parseInt(datomg11b)+parseInt(datops11b)),      0-parseInt(datops11b)],
				['',    0+(parseInt(datomg11c)+parseInt(datops11c)),      0-parseInt(datops11c)]
			]); 
			
			drawVisualization11a(data11a);

	  }	 

	  
		  function drawVisualization28a(data28a) {
		// Create and draw the visualization.
        var ac28a = new google.visualization.AreaChart(document.getElementById('visualization28a'));
        ac28a.draw(data28a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization28a iframe').attr('allowTransparency', 'true');
		$('#visualization28a iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar28a(){
	 
			var datomg28a=document.getElementById('mg28-a').value;
			var datomg28b=document.getElementById('mg28-b').value;
			var datomg28c=document.getElementById('mg28-c').value;

			var datops28a=document.getElementById('ps28-a').value;
			var datops28b=document.getElementById('ps28-b').value;
			var datops28c=document.getElementById('ps28-c').value;

			if(datops28a>3){
				document.getElementById('ps28-a').style.color="red";
			}else{
				document.getElementById('ps28-a').style.color="black";
			}
			if(datops28b>3){
				document.getElementById('ps28-b').style.color="red";
			}else{
				document.getElementById('ps28-b').style.color="black";
			}
			if(datops28c>3){
				document.getElementById('ps28-c').style.color="red";
			}else{
				document.getElementById('ps28-c').style.color="black";
			}
			
			var data28a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg28a)+parseInt(datops28a)),      0-parseInt(datops28a)],
				['',    0+(parseInt(datomg28b)+parseInt(datops28b)),      0-parseInt(datops28b)],
				['',    0+(parseInt(datomg28c)+parseInt(datops28c)),      0-parseInt(datops28c)]
			]); 
			
			drawVisualization28a(data28a);
			
	  }
	  
	  function drawVisualization27a(data27a) {
		// Create and draw the visualization.
        var ac27a = new google.visualization.AreaChart(document.getElementById('visualization27a'));
        ac27a.draw(data27a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization27a iframe').attr('allowTransparency', 'true');
		$('#visualization27a iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar27a(){

			var datomg27a=document.getElementById('mg27-a').value;
			var datomg27b=document.getElementById('mg27-b').value;
			var datomg27c=document.getElementById('mg27-c').value;
			
			var datops27a=document.getElementById('ps27-a').value;
			var datops27b=document.getElementById('ps27-b').value;
			var datops27c=document.getElementById('ps27-c').value;

			if(datops27a>3){
				document.getElementById('ps27-a').style.color="red";
			}else{
				document.getElementById('ps27-a').style.color="black";
			}
			if(datops27b>3){
				document.getElementById('ps27-b').style.color="red";
			}else{
				document.getElementById('ps27-b').style.color="black";
			}
			if(datops27c>3){
				document.getElementById('ps27-c').style.color="red";
			}else{
				document.getElementById('ps27-c').style.color="black";
			}
			
			var data27a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg27a)+parseInt(datops27a)),      0-parseInt(datops27a)],
				['',    0+(parseInt(datomg27b)+parseInt(datops27b)),      0-parseInt(datops27b)],
				['',    0+(parseInt(datomg27c)+parseInt(datops27c)),      0-parseInt(datops27c)]
			]); 
			
			drawVisualization27a(data27a);
			
	  }
	  
	  function drawVisualization26a(data26a) {
		// Create and draw the visualization.
        var ac26a = new google.visualization.AreaChart(document.getElementById('visualization26a'));
        ac26a.draw(data26a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 50,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization26a iframe').attr('allowTransparency', 'true');
		$('#visualization26a iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar26a(){
			var datomg26a=document.getElementById('mg26-a').value;
			var datomg26b=document.getElementById('mg26-b').value;
			var datomg26c=document.getElementById('mg26-c').value;
			
			var datops26a=document.getElementById('ps26-a').value;
			var datops26b=document.getElementById('ps26-b').value;
			var datops26c=document.getElementById('ps26-c').value;

			if(datops26a>3){
				document.getElementById('ps26-a').style.color="red";
			}else{
				document.getElementById('ps26-a').style.color="black";
			}
			if(datops26b>3){
				document.getElementById('ps26-b').style.color="red";
			}else{
				document.getElementById('ps26-b').style.color="black";
			}
			if(datops26c>3){
				document.getElementById('ps26-c').style.color="red";
			}else{
				document.getElementById('ps26-c').style.color="black";
			}
			
			var data26a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg26a)+parseInt(datops26a)),      0-parseInt(datops26a)],
				['',    0+(parseInt(datomg26b)+parseInt(datops26b)),      0-parseInt(datops26b)],
				['',    0+(parseInt(datomg26c)+parseInt(datops26c)),      0-parseInt(datops26c)]
			]); 
			
			drawVisualization26a(data26a);
			
	  }
	  
	  	  function drawVisualization25a(data25a) {
		// Create and draw the visualization.
        var ac25a = new google.visualization.AreaChart(document.getElementById('visualization25a'));
        ac25a.draw(data25a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization25a iframe').attr('allowTransparency', 'true');
		$('#visualization25a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar25a(){
			var datomg25a=document.getElementById('mg25-a').value;
			var datomg25b=document.getElementById('mg25-b').value;
			var datomg25c=document.getElementById('mg25-c').value;
			
			var datops25a=document.getElementById('ps25-a').value;
			var datops25b=document.getElementById('ps25-b').value;
			var datops25c=document.getElementById('ps25-c').value;

			if(datops25a>3){
				document.getElementById('ps25-a').style.color="red";
			}else{
				document.getElementById('ps25-a').style.color="black";
			}
			if(datops25b>3){
				document.getElementById('ps25-b').style.color="red";
			}else{
				document.getElementById('ps25-b').style.color="black";
			}
			if(datops25c>3){
				document.getElementById('ps25-c').style.color="red";
			}else{
				document.getElementById('ps25-c').style.color="black";
			}
			
			var data25a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg25a)+parseInt(datops25a)),      0-parseInt(datops25a)],
				['',    0+(parseInt(datomg25b)+parseInt(datops25b)),      0-parseInt(datops25b)],
				['',    0+(parseInt(datomg25c)+parseInt(datops25c)),      0-parseInt(datops25c)]
			]); 
			
			drawVisualization25a(data25a);
			
	  }	  
	 
	  	  function drawVisualization24a(data24a) {
		// Create and draw the visualization.
        var ac24a = new google.visualization.AreaChart(document.getElementById('visualization24a'));
        ac24a.draw(data24a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization24a iframe').attr('allowTransparency', 'true');
		$('#visualization24a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar24a(){
			var datomg24a=document.getElementById('mg24-a').value;
			var datomg24b=document.getElementById('mg24-b').value;
			var datomg24c=document.getElementById('mg24-c').value;
			
			var datops24a=document.getElementById('ps24-a').value;
			var datops24b=document.getElementById('ps24-b').value;
			var datops24c=document.getElementById('ps24-c').value;

			if(datops24a>3){
				document.getElementById('ps24-a').style.color="red";
			}else{
				document.getElementById('ps24-a').style.color="black";
			}
			if(datops24b>3){
				document.getElementById('ps24-b').style.color="red";
			}else{
				document.getElementById('ps24-b').style.color="black";
			}
			if(datops24c>3){
				document.getElementById('ps24-c').style.color="red";
			}else{
				document.getElementById('ps24-c').style.color="black";
			}
			
			var data24a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg24a)+parseInt(datops24a)),      0-parseInt(datops24a)],
				['',    0+(parseInt(datomg24b)+parseInt(datops24b)),      0-parseInt(datops24b)],
				['',    0+(parseInt(datomg24c)+parseInt(datops24c)),      0-parseInt(datops24c)]
			]); 
			
			drawVisualization24a(data24a);

	  }	 
	  
	  	  function drawVisualization23a(data23a) {
		// Create and draw the visualization.
        var ac23a = new google.visualization.AreaChart(document.getElementById('visualization23a'));
        ac23a.draw(data23a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization23a iframe').attr('allowTransparency', 'true');
		$('#visualization23a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar23a(){
			var datomg23a=document.getElementById('mg23-a').value;
			var datomg23b=document.getElementById('mg23-b').value;
			var datomg23c=document.getElementById('mg23-c').value;
			
			var datops23a=document.getElementById('ps23-a').value;
			var datops23b=document.getElementById('ps23-b').value;
			var datops23c=document.getElementById('ps23-c').value;

			if(datops23a>3){
				document.getElementById('ps23-a').style.color="red";
			}else{
				document.getElementById('ps23-a').style.color="black";
			}
			if(datops23b>3){
				document.getElementById('ps23-b').style.color="red";
			}else{
				document.getElementById('ps23-b').style.color="black";
			}
			if(datops23c>3){
				document.getElementById('ps23-c').style.color="red";
			}else{
				document.getElementById('ps23-c').style.color="black";
			}
			
			var data23a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg23a)+parseInt(datops23a)),      0-parseInt(datops23a)],
				['',    0+(parseInt(datomg23b)+parseInt(datops23b)),      0-parseInt(datops23b)],
				['',    0+(parseInt(datomg23c)+parseInt(datops23c)),      0-parseInt(datops23c)]
			]); 
			
			drawVisualization23a(data23a);

	  }	 	  
	  
	  	  function drawVisualization22a(data22a) {
		// Create and draw the visualization.
        var ac22a = new google.visualization.AreaChart(document.getElementById('visualization22a'));
        ac22a.draw(data22a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 27,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization22a iframe').attr('allowTransparency', 'true');
		$('#visualization22a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar22a(){
			var datomg22a=document.getElementById('mg22-a').value;
			var datomg22b=document.getElementById('mg22-b').value;
			var datomg22c=document.getElementById('mg22-c').value;
			
			var datops22a=document.getElementById('ps22-a').value;
			var datops22b=document.getElementById('ps22-b').value;
			var datops22c=document.getElementById('ps22-c').value;

			if(datops22a>3){
				document.getElementById('ps22-a').style.color="red";
			}else{
				document.getElementById('ps22-a').style.color="black";
			}
			if(datops22b>3){
				document.getElementById('ps22-b').style.color="red";
			}else{
				document.getElementById('ps22-b').style.color="black";
			}
			if(datops22c>3){
				document.getElementById('ps22-c').style.color="red";
			}else{
				document.getElementById('ps22-c').style.color="black";
			}
			
			var data22a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg22a)+parseInt(datops22a)),      0-parseInt(datops22a)],
				['',    0+(parseInt(datomg22b)+parseInt(datops22b)),      0-parseInt(datops22b)],
				['',    0+(parseInt(datomg22c)+parseInt(datops22c)),      0-parseInt(datops22c)]
			]); 
			
			drawVisualization22a(data22a);

	  }	 	  
	  
	  	  function drawVisualization21a(data21a) {
		// Create and draw the visualization.
        var ac21a = new google.visualization.AreaChart(document.getElementById('visualization21a'));
        ac21a.draw(data21a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 33,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization21a iframe').attr('allowTransparency', 'true');
		$('#visualization21a iframe').contents().find('body').css('background', 'transparent');
      }
	  function cargar21a(){
			var datomg21a=document.getElementById('mg21-a').value;
			var datomg21b=document.getElementById('mg21-b').value;
			var datomg21c=document.getElementById('mg21-c').value;
			
			var datops21a=document.getElementById('ps21-a').value;
			var datops21b=document.getElementById('ps21-b').value;
			var datops21c=document.getElementById('ps21-c').value;

			if(datops21a>3){
				document.getElementById('ps21-a').style.color="red";
			}else{
				document.getElementById('ps21-a').style.color="black";
			}
			if(datops21b>3){
				document.getElementById('ps21-b').style.color="red";
			}else{
				document.getElementById('ps21-b').style.color="black";
			}
			if(datops21c>3){
				document.getElementById('ps21-c').style.color="red";
			}else{
				document.getElementById('ps21-c').style.color="black";
			}
			
			var data21a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg21a)+parseInt(datops21a)),      0-parseInt(datops21a)],
				['',    0+(parseInt(datomg21b)+parseInt(datops21b)),      0-parseInt(datops21b)],
				['',    0+(parseInt(datomg21c)+parseInt(datops21c)),      0-parseInt(datops21c)]
			]); 
			
			drawVisualization21a(data21a);

	  }
	  
	function drawVisualization18b(data18b) {
	  
		// Create and draw the visualization.
        var ac18b = new google.visualization.AreaChart(document.getElementById('visualization18b'));
        ac18b.draw(data18b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization18b iframe').attr('allowTransparency', 'true');
		$('#visualization18b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar18b(){
	 
			var datomg18ba=document.getElementById('mg18b-a').value;
			var datomg18bb=document.getElementById('mg18b-b').value;
			var datomg18bc=document.getElementById('mg18b-c').value;

			var datops18ba=document.getElementById('ps18b-a').value;
			var datops18bb=document.getElementById('ps18b-b').value;
			var datops18bc=document.getElementById('ps18b-c').value;

			if(datops18ba>3){
				document.getElementById('ps18b-a').style.color="red";
			}else{
				document.getElementById('ps18b-a').style.color="black";
			}
			if(datops18bb>3){
				document.getElementById('ps18b-b').style.color="red";
			}else{
				document.getElementById('ps18b-b').style.color="black";
			}
			if(datops18bc>3){
				document.getElementById('ps18b-c').style.color="red";
			}else{
				document.getElementById('ps18b-c').style.color="black";
			}
			
			var data18b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg18ba)+parseInt(datops18ba)),      0+parseInt(datops18ba)],
				['',    0-(parseInt(datomg18bb)+parseInt(datops18bb)),      0+parseInt(datops18bb)],
				['',    0-(parseInt(datomg18bc)+parseInt(datops18bc)),      0+parseInt(datops18bc)]
			]); 
			
			drawVisualization18b(data18b);
			
	  } 

	function drawVisualization17b(data17b) {
		// Create and draw the visualization.
        var ac17b = new google.visualization.AreaChart(document.getElementById('visualization17b'));
        ac17b.draw(data17b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization17b iframe').attr('allowTransparency', 'true');
		$('#visualization17b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar17b(){
	 
			var datomg17ba=document.getElementById('mg17b-a').value;
			var datomg17bb=document.getElementById('mg17b-b').value;
			var datomg17bc=document.getElementById('mg17b-c').value;

			var datops17ba=document.getElementById('ps17b-a').value;
			var datops17bb=document.getElementById('ps17b-b').value;
			var datops17bc=document.getElementById('ps17b-c').value;

			if(datops17ba>3){
				document.getElementById('ps17b-a').style.color="red";
			}else{
				document.getElementById('ps17b-a').style.color="black";
			}
			if(datops17bb>3){
				document.getElementById('ps17b-b').style.color="red";
			}else{
				document.getElementById('ps17b-b').style.color="black";
			}
			if(datops17bc>3){
				document.getElementById('ps17b-c').style.color="red";
			}else{
				document.getElementById('ps17b-c').style.color="black";
			}
			
			var data17b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg17ba)+parseInt(datops17ba)),      0+parseInt(datops17ba)],
				['',    0-(parseInt(datomg17bb)+parseInt(datops17bb)),      0+parseInt(datops17bb)],
				['',    0-(parseInt(datomg17bc)+parseInt(datops17bc)),      0+parseInt(datops17bc)]
			]); 
			
			drawVisualization17b(data17b);
			
	  } 	  
	  
	function drawVisualization16b(data16b) {
		// Create and draw the visualization.
        var ac16b = new google.visualization.AreaChart(document.getElementById('visualization16b'));
        ac16b.draw(data16b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 48,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization16b iframe').attr('allowTransparency', 'true');
		$('#visualization16b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar16b(){
	 
			var datomg16ba=document.getElementById('mg16b-a').value;
			var datomg16bb=document.getElementById('mg16b-b').value;
			var datomg16bc=document.getElementById('mg16b-c').value;

			var datops16ba=document.getElementById('ps16b-a').value;
			var datops16bb=document.getElementById('ps16b-b').value;
			var datops16bc=document.getElementById('ps16b-c').value;

			if(datops16ba>3){
				document.getElementById('ps16b-a').style.color="red";
			}else{
				document.getElementById('ps16b-a').style.color="black";
			}
			if(datops16bb>3){
				document.getElementById('ps16b-b').style.color="red";
			}else{
				document.getElementById('ps16b-b').style.color="black";
			}
			if(datops16bc>3){
				document.getElementById('ps16b-c').style.color="red";
			}else{
				document.getElementById('ps16b-c').style.color="black";
			}
			
			var data16b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg16ba)+parseInt(datops16ba)),      0+parseInt(datops16ba)],
				['',    0-(parseInt(datomg16bb)+parseInt(datops16bb)),      0+parseInt(datops16bb)],
				['',    0-(parseInt(datomg16bc)+parseInt(datops16bc)),      0+parseInt(datops16bc)]
			]); 
			
			drawVisualization16b(data16b);
			
	  } 	  

	function drawVisualization15b(data15b) {
		// Create and draw the visualization.
        var ac15b = new google.visualization.AreaChart(document.getElementById('visualization15b'));
        ac15b.draw(data15b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization15b iframe').attr('allowTransparency', 'true');
		$('#visualization15b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar15b(){
	 
			var datomg15ba=document.getElementById('mg15b-a').value;
			var datomg15bb=document.getElementById('mg15b-b').value;
			var datomg15bc=document.getElementById('mg15b-c').value;

			var datops15ba=document.getElementById('ps15b-a').value;
			var datops15bb=document.getElementById('ps15b-b').value;
			var datops15bc=document.getElementById('ps15b-c').value;

			if(datops15ba>3){
				document.getElementById('ps15b-a').style.color="red";
			}else{
				document.getElementById('ps15b-a').style.color="black";
			}
			if(datops15bb>3){
				document.getElementById('ps15b-b').style.color="red";
			}else{
				document.getElementById('ps15b-b').style.color="black";
			}
			if(datops15bc>3){
				document.getElementById('ps15b-c').style.color="red";
			}else{
				document.getElementById('ps15b-c').style.color="black";
			}
			
			var data15b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg15ba)+parseInt(datops15ba)),      0+parseInt(datops15ba)],
				['',    0-(parseInt(datomg15bb)+parseInt(datops15bb)),      0+parseInt(datops15bb)],
				['',    0-(parseInt(datomg15bc)+parseInt(datops15bc)),      0+parseInt(datops15bc)]
			]); 
			
			drawVisualization15b(data15b);
			
	  }

	function drawVisualization14b(data14b) {
		// Create and draw the visualization.
        var ac14b = new google.visualization.AreaChart(document.getElementById('visualization14b'));
        ac14b.draw(data14b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization14b iframe').attr('allowTransparency', 'true');
		$('#visualization14b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar14b(){
	 
			var datomg14ba=document.getElementById('mg14b-a').value;
			var datomg14bb=document.getElementById('mg14b-b').value;
			var datomg14bc=document.getElementById('mg14b-c').value;

			var datops14ba=document.getElementById('ps14b-a').value;
			var datops14bb=document.getElementById('ps14b-b').value;
			var datops14bc=document.getElementById('ps14b-c').value;

			if(datops14ba>3){
				document.getElementById('ps14b-a').style.color="red";
			}else{
				document.getElementById('ps14b-a').style.color="black";
			}
			if(datops14bb>3){
				document.getElementById('ps14b-b').style.color="red";
			}else{
				document.getElementById('ps14b-b').style.color="black";
			}
			if(datops14bc>3){
				document.getElementById('ps14b-c').style.color="red";
			}else{
				document.getElementById('ps14b-c').style.color="black";
			}
			
			var data14b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg14ba)+parseInt(datops14ba)),      0+parseInt(datops14ba)],
				['',    0-(parseInt(datomg14bb)+parseInt(datops14bb)),      0+parseInt(datops14bb)],
				['',    0-(parseInt(datomg14bc)+parseInt(datops14bc)),      0+parseInt(datops14bc)]
			]); 
			
			drawVisualization14b(data14b);
			
	  } 

	function drawVisualization13b(data13b) {
		// Create and draw the visualization.
        var ac13b = new google.visualization.AreaChart(document.getElementById('visualization13b'));
        ac13b.draw(data13b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization13b iframe').attr('allowTransparency', 'true');
		$('#visualization13b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar13b(){
	 
			var datomg13ba=document.getElementById('mg13b-a').value;
			var datomg13bb=document.getElementById('mg13b-b').value;
			var datomg13bc=document.getElementById('mg13b-c').value;

			var datops13ba=document.getElementById('ps13b-a').value;
			var datops13bb=document.getElementById('ps13b-b').value;
			var datops13bc=document.getElementById('ps13b-c').value;

			if(datops13ba>3){
				document.getElementById('ps13b-a').style.color="red";
			}else{
				document.getElementById('ps13b-a').style.color="black";
			}
			if(datops13bb>3){
				document.getElementById('ps13b-b').style.color="red";
			}else{
				document.getElementById('ps13b-b').style.color="black";
			}
			if(datops13bc>3){
				document.getElementById('ps13b-c').style.color="red";
			}else{
				document.getElementById('ps13b-c').style.color="black";
			}
			
			var data13b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg13ba)+parseInt(datops13ba)),      0+parseInt(datops13ba)],
				['',    0-(parseInt(datomg13bb)+parseInt(datops13bb)),      0+parseInt(datops13bb)],
				['',    0-(parseInt(datomg13bc)+parseInt(datops13bc)),      0+parseInt(datops13bc)]
			]); 
			
			drawVisualization13b(data13b);
			
	  }  	 

	function drawVisualization12b(data12b) {
		// Create and draw the visualization.
        var ac12b = new google.visualization.AreaChart(document.getElementById('visualization12b'));
        ac12b.draw(data12b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 26,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization12b iframe').attr('allowTransparency', 'true');
		$('#visualization12b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar12b(){
	 
			var datomg12ba=document.getElementById('mg12b-a').value;
			var datomg12bb=document.getElementById('mg12b-b').value;
			var datomg12bc=document.getElementById('mg12b-c').value;

			var datops12ba=document.getElementById('ps12b-a').value;
			var datops12bb=document.getElementById('ps12b-b').value;
			var datops12bc=document.getElementById('ps12b-c').value;

			if(datops12ba>3){
				document.getElementById('ps12b-a').style.color="red";
			}else{
				document.getElementById('ps12b-a').style.color="black";
			}
			if(datops12bb>3){
				document.getElementById('ps12b-b').style.color="red";
			}else{
				document.getElementById('ps12b-b').style.color="black";
			}
			if(datops12bc>3){
				document.getElementById('ps12b-c').style.color="red";
			}else{
				document.getElementById('ps12b-c').style.color="black";
			}
			
			var data12b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg12ba)+parseInt(datops12ba)),      0+parseInt(datops12ba)],
				['',    0-(parseInt(datomg12bb)+parseInt(datops12bb)),      0+parseInt(datops12bb)],
				['',    0-(parseInt(datomg12bc)+parseInt(datops12bc)),      0+parseInt(datops12bc)]
			]); 
			
			drawVisualization12b(data12b);
			
	  } 	

	function drawVisualization11b(data11b) {
		// Create and draw the visualization.
        var ac11b = new google.visualization.AreaChart(document.getElementById('visualization11b'));
        ac11b.draw(data11b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 33,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization11b iframe').attr('allowTransparency', 'true');
		$('#visualization11b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar11b(){
	 
			var datomg11ba=document.getElementById('mg11b-a').value;
			var datomg11bb=document.getElementById('mg11b-b').value;
			var datomg11bc=document.getElementById('mg11b-c').value;

			var datops11ba=document.getElementById('ps11b-a').value;
			var datops11bb=document.getElementById('ps11b-b').value;
			var datops11bc=document.getElementById('ps11b-c').value;

			if(datops11ba>3){
				document.getElementById('ps11b-a').style.color="red";
			}else{
				document.getElementById('ps11b-a').style.color="black";
			}
			if(datops11bb>3){
				document.getElementById('ps11b-b').style.color="red";
			}else{
				document.getElementById('ps11b-b').style.color="black";
			}
			if(datops11bc>3){
				document.getElementById('ps11b-c').style.color="red";
			}else{
				document.getElementById('ps11b-c').style.color="black";
			}
			
			var data11b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg11ba)+parseInt(datops11ba)),      0+parseInt(datops11ba)],
				['',    0-(parseInt(datomg11bb)+parseInt(datops11bb)),      0+parseInt(datops11bb)],
				['',    0-(parseInt(datomg11bc)+parseInt(datops11bc)),      0+parseInt(datops11bc)]
			]); 
			
			drawVisualization11b(data11b);
			
	  } 	


	  
	function drawVisualization28b(data28b) {
	  
		// Create and draw the visualization.
        var ac28b = new google.visualization.AreaChart(document.getElementById('visualization28b'));
        ac28b.draw(data28b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization28b iframe').attr('allowTransparency', 'true');
		$('#visualization28b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar28b(){
	 
			var datomg28ba=document.getElementById('mg28b-a').value;
			var datomg28bb=document.getElementById('mg28b-b').value;
			var datomg28bc=document.getElementById('mg28b-c').value;

			var datops28ba=document.getElementById('ps28b-a').value;
			var datops28bb=document.getElementById('ps28b-b').value;
			var datops28bc=document.getElementById('ps28b-c').value;

			if(datops28ba>3){
				document.getElementById('ps28b-a').style.color="red";
			}else{
				document.getElementById('ps28b-a').style.color="black";
			}
			if(datops28bb>3){
				document.getElementById('ps28b-b').style.color="red";
			}else{
				document.getElementById('ps28b-b').style.color="black";
			}
			if(datops28bc>3){
				document.getElementById('ps28b-c').style.color="red";
			}else{
				document.getElementById('ps28b-c').style.color="black";
			}
			
			var data28b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg28ba)+parseInt(datops28ba)),      0+parseInt(datops28ba)],
				['',    0-(parseInt(datomg28bb)+parseInt(datops28bb)),      0+parseInt(datops28bb)],
				['',    0-(parseInt(datomg28bc)+parseInt(datops28bc)),      0+parseInt(datops28bc)]
			]); 
			
			drawVisualization28b(data28b);
			
	  } 

	function drawVisualization27b(data27b) {
		// Create and draw the visualization.
        var ac27b = new google.visualization.AreaChart(document.getElementById('visualization27b'));
        ac27b.draw(data27b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 40,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization27b iframe').attr('allowTransparency', 'true');
		$('#visualization27b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar27b(){
	 
			var datomg27ba=document.getElementById('mg27b-a').value;
			var datomg27bb=document.getElementById('mg27b-b').value;
			var datomg27bc=document.getElementById('mg27b-c').value;

			var datops27ba=document.getElementById('ps27b-a').value;
			var datops27bb=document.getElementById('ps27b-b').value;
			var datops27bc=document.getElementById('ps27b-c').value;

			if(datops27ba>3){
				document.getElementById('ps27b-a').style.color="red";
			}else{
				document.getElementById('ps27b-a').style.color="black";
			}
			if(datops27bb>3){
				document.getElementById('ps27b-b').style.color="red";
			}else{
				document.getElementById('ps27b-b').style.color="black";
			}
			if(datops27bc>3){
				document.getElementById('ps27b-c').style.color="red";
			}else{
				document.getElementById('ps27b-c').style.color="black";
			}
			
			var data27b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg27ba)+parseInt(datops27ba)),      0+parseInt(datops27ba)],
				['',    0-(parseInt(datomg27bb)+parseInt(datops27bb)),      0+parseInt(datops27bb)],
				['',    0-(parseInt(datomg27bc)+parseInt(datops27bc)),      0+parseInt(datops27bc)]
			]); 
			
			drawVisualization27b(data27b);
			
	  } 	  
	  
	function drawVisualization26b(data26b) {
		// Create and draw the visualization.
        var ac26b = new google.visualization.AreaChart(document.getElementById('visualization26b'));
        ac26b.draw(data26b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 48,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization26b iframe').attr('allowTransparency', 'true');
		$('#visualization26b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar26b(){
	 
			var datomg26ba=document.getElementById('mg26b-a').value;
			var datomg26bb=document.getElementById('mg26b-b').value;
			var datomg26bc=document.getElementById('mg26b-c').value;

			var datops26ba=document.getElementById('ps26b-a').value;
			var datops26bb=document.getElementById('ps26b-b').value;
			var datops26bc=document.getElementById('ps26b-c').value;

			if(datops26ba>3){
				document.getElementById('ps26b-a').style.color="red";
			}else{
				document.getElementById('ps26b-a').style.color="black";
			}
			if(datops26bb>3){
				document.getElementById('ps26b-b').style.color="red";
			}else{
				document.getElementById('ps26b-b').style.color="black";
			}
			if(datops26bc>3){
				document.getElementById('ps26b-c').style.color="red";
			}else{
				document.getElementById('ps26b-c').style.color="black";
			}
			
			var data26b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg26ba)+parseInt(datops26ba)),      0+parseInt(datops26ba)],
				['',    0-(parseInt(datomg26bb)+parseInt(datops26bb)),      0+parseInt(datops26bb)],
				['',    0-(parseInt(datomg26bc)+parseInt(datops26bc)),      0+parseInt(datops26bc)]
			]); 
			
			drawVisualization26b(data26b);
			
	  } 	  

	function drawVisualization25b(data25b) {
		// Create and draw the visualization.
        var ac25b = new google.visualization.AreaChart(document.getElementById('visualization25b'));
        ac25b.draw(data25b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization25b iframe').attr('allowTransparency', 'true');
		$('#visualization25b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar25b(){
	 
			var datomg25ba=document.getElementById('mg25b-a').value;
			var datomg25bb=document.getElementById('mg25b-b').value;
			var datomg25bc=document.getElementById('mg25b-c').value;

			var datops25ba=document.getElementById('ps25b-a').value;
			var datops25bb=document.getElementById('ps25b-b').value;
			var datops25bc=document.getElementById('ps25b-c').value;

			if(datops25ba>3){
				document.getElementById('ps25b-a').style.color="red";
			}else{
				document.getElementById('ps25b-a').style.color="black";
			}
			if(datops25bb>3){
				document.getElementById('ps25b-b').style.color="red";
			}else{
				document.getElementById('ps25b-b').style.color="black";
			}
			if(datops25bc>3){
				document.getElementById('ps25b-c').style.color="red";
			}else{
				document.getElementById('ps25b-c').style.color="black";
			}
			
			var data25b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg25ba)+parseInt(datops25ba)),      0+parseInt(datops25ba)],
				['',    0-(parseInt(datomg25bb)+parseInt(datops25bb)),      0+parseInt(datops25bb)],
				['',    0-(parseInt(datomg25bc)+parseInt(datops25bc)),      0+parseInt(datops25bc)]
			]); 
			
			drawVisualization25b(data25b);
			
	  }

	function drawVisualization24b(data24b) {
		// Create and draw the visualization.
        var ac24b = new google.visualization.AreaChart(document.getElementById('visualization24b'));
        ac24b.draw(data24b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization24b iframe').attr('allowTransparency', 'true');
		$('#visualization24b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar24b(){
	 
			var datomg24ba=document.getElementById('mg24b-a').value;
			var datomg24bb=document.getElementById('mg24b-b').value;
			var datomg24bc=document.getElementById('mg24b-c').value;

			var datops24ba=document.getElementById('ps24b-a').value;
			var datops24bb=document.getElementById('ps24b-b').value;
			var datops24bc=document.getElementById('ps24b-c').value;

			if(datops24ba>3){
				document.getElementById('ps24b-a').style.color="red";
			}else{
				document.getElementById('ps24b-a').style.color="black";
			}
			if(datops24bb>3){
				document.getElementById('ps24b-b').style.color="red";
			}else{
				document.getElementById('ps24b-b').style.color="black";
			}
			if(datops24bc>3){
				document.getElementById('ps24b-c').style.color="red";
			}else{
				document.getElementById('ps24b-c').style.color="black";
			}
			
			var data24b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg24ba)+parseInt(datops24ba)),      0+parseInt(datops24ba)],
				['',    0-(parseInt(datomg24bb)+parseInt(datops24bb)),      0+parseInt(datops24bb)],
				['',    0-(parseInt(datomg24bc)+parseInt(datops24bc)),      0+parseInt(datops24bc)]
			]); 
			
			drawVisualization24b(data24b);
			
	  } 

	function drawVisualization23b(data23b) {
		// Create and draw the visualization.
        var ac23b = new google.visualization.AreaChart(document.getElementById('visualization23b'));
        ac23b.draw(data23b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 28,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization23b iframe').attr('allowTransparency', 'true');
		$('#visualization23b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar23b(){
	 
			var datomg23ba=document.getElementById('mg23b-a').value;
			var datomg23bb=document.getElementById('mg23b-b').value;
			var datomg23bc=document.getElementById('mg23b-c').value;

			var datops23ba=document.getElementById('ps23b-a').value;
			var datops23bb=document.getElementById('ps23b-b').value;
			var datops23bc=document.getElementById('ps23b-c').value;

			if(datops23ba>3){
				document.getElementById('ps23b-a').style.color="red";
			}else{
				document.getElementById('ps23b-a').style.color="black";
			}
			if(datops23bb>3){
				document.getElementById('ps23b-b').style.color="red";
			}else{
				document.getElementById('ps23b-b').style.color="black";
			}
			if(datops23bc>3){
				document.getElementById('ps23b-c').style.color="red";
			}else{
				document.getElementById('ps23b-c').style.color="black";
			}
			
			var data23b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg23ba)+parseInt(datops23ba)),      0+parseInt(datops23ba)],
				['',    0-(parseInt(datomg23bb)+parseInt(datops23bb)),      0+parseInt(datops23bb)],
				['',    0-(parseInt(datomg23bc)+parseInt(datops23bc)),      0+parseInt(datops23bc)]
			]); 
			
			drawVisualization23b(data23b);
			
	  }  	 

	function drawVisualization22b(data22b) {
		// Create and draw the visualization.
        var ac22b = new google.visualization.AreaChart(document.getElementById('visualization22b'));
        ac22b.draw(data22b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 26,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization22b iframe').attr('allowTransparency', 'true');
		$('#visualization22b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar22b(){
	 
			var datomg22ba=document.getElementById('mg22b-a').value;
			var datomg22bb=document.getElementById('mg22b-b').value;
			var datomg22bc=document.getElementById('mg22b-c').value;

			var datops22ba=document.getElementById('ps22b-a').value;
			var datops22bb=document.getElementById('ps22b-b').value;
			var datops22bc=document.getElementById('ps22b-c').value;

			if(datops22ba>3){
				document.getElementById('ps22b-a').style.color="red";
			}else{
				document.getElementById('ps22b-a').style.color="black";
			}
			if(datops22bb>3){
				document.getElementById('ps22b-b').style.color="red";
			}else{
				document.getElementById('ps22b-b').style.color="black";
			}
			if(datops22bc>3){
				document.getElementById('ps22b-c').style.color="red";
			}else{
				document.getElementById('ps22b-c').style.color="black";
			}
			
			var data22b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg22ba)+parseInt(datops22ba)),      0+parseInt(datops22ba)],
				['',    0-(parseInt(datomg22bb)+parseInt(datops22bb)),      0+parseInt(datops22bb)],
				['',    0-(parseInt(datomg22bc)+parseInt(datops22bc)),      0+parseInt(datops22bc)]
			]); 
			
			drawVisualization22b(data22b);
			
	  } 	

	function drawVisualization21b(data21b) {
		// Create and draw the visualization.
        var ac21b = new google.visualization.AreaChart(document.getElementById('visualization21b'));
        ac21b.draw(data21b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 33,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization21b iframe').attr('allowTransparency', 'true');
		$('#visualization21b iframe').contents().find('body').css('background', 'transparent');
      }

	  function cargar21b(){
	 
			var datomg21ba=document.getElementById('mg21b-a').value;
			var datomg21bb=document.getElementById('mg21b-b').value;
			var datomg21bc=document.getElementById('mg21b-c').value;

			var datops21ba=document.getElementById('ps21b-a').value;
			var datops21bb=document.getElementById('ps21b-b').value;
			var datops21bc=document.getElementById('ps21b-c').value;

			if(datops21ba>3){
				document.getElementById('ps21b-a').style.color="red";
			}else{
				document.getElementById('ps21b-a').style.color="black";
			}
			if(datops21bb>3){
				document.getElementById('ps21b-b').style.color="red";
			}else{
				document.getElementById('ps21b-b').style.color="black";
			}
			if(datops21bc>3){
				document.getElementById('ps21b-c').style.color="red";
			}else{
				document.getElementById('ps21b-c').style.color="black";
			}
			
			var data21b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg21ba)+parseInt(datops21ba)),      0+parseInt(datops21ba)],
				['',    0-(parseInt(datomg21bb)+parseInt(datops21bb)),      0+parseInt(datops21bb)],
				['',    0-(parseInt(datomg21bc)+parseInt(datops21bc)),      0+parseInt(datops21bc)]
			]); 
			
			drawVisualization21b(data21b);
			
	  }

 
	 function drawVisualization48a(data48a) {
		// Create and draw the visualization.
        var ac48a = new google.visualization.AreaChart(document.getElementById('visualization48a'));
        ac48a.draw(data48a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 48,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization48a iframe').attr('allowTransparency', 'true');
		$('#visualization48a iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar48a(){
	 
			var datomg48a=document.getElementById('mg48-a').value;
			var datomg48b=document.getElementById('mg48-b').value;
			var datomg48c=document.getElementById('mg48-c').value;

			var datops48a=document.getElementById('ps48-a').value;
			var datops48b=document.getElementById('ps48-b').value;
			var datops48c=document.getElementById('ps48-c').value;

			if(datops48a>3){
				document.getElementById('ps48-a').style.color="red";
			}else{
				document.getElementById('ps48-a').style.color="black";
			}
			if(datops48b>3){
				document.getElementById('ps48-b').style.color="red";
			}else{
				document.getElementById('ps48-b').style.color="black";
			}
			if(datops48c>3){
				document.getElementById('ps48-c').style.color="red";
			}else{
				document.getElementById('ps48-c').style.color="black";
			}
			
			var data48a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg48a)+parseInt(datops48a)),      0-parseInt(datops48a)],
				['',    0+(parseInt(datomg48b)+parseInt(datops48b)),      0-parseInt(datops48b)],
				['',    0+(parseInt(datomg48c)+parseInt(datops48c)),      0-parseInt(datops48c)]
			]); 
			
			drawVisualization48a(data48a);
			
	  }
	  
	  function drawVisualization48b(data48b) {
		// Create and draw the visualization.
        var ac48b = new google.visualization.AreaChart(document.getElementById('visualization48b'));
        ac48b.draw(data48b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 48,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization48b iframe').attr('allowTransparency', 'true');
		$('#visualization48b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar48b(){
	 
			var datomg48ba=document.getElementById('mg48b-a').value;
			var datomg48bb=document.getElementById('mg48b-b').value;
			var datomg48bc=document.getElementById('mg48b-c').value;

			var datops48ba=document.getElementById('ps48b-a').value;
			var datops48bb=document.getElementById('ps48b-b').value;
			var datops48bc=document.getElementById('ps48b-c').value;

			if(datops48ba>3){
				document.getElementById('ps48b-a').style.color="red";
			}else{
				document.getElementById('ps48b-a').style.color="black";
			}
			if(datops48bb>3){
				document.getElementById('ps48b-b').style.color="red";
			}else{
				document.getElementById('ps48b-b').style.color="black";
			}
			if(datops48bc>3){
				document.getElementById('ps48b-c').style.color="red";
			}else{
				document.getElementById('ps48b-c').style.color="black";
			}
			
			var data48b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg48ba)+parseInt(datops48ba)),      0+parseInt(datops48ba)],
				['',    0-(parseInt(datomg48bb)+parseInt(datops48bb)),      0+parseInt(datops48bb)],
				['',    0-(parseInt(datomg48bc)+parseInt(datops48bc)),      0+parseInt(datops48bc)]
			]); 
			
			drawVisualization48b(data48b);
			
	  }
	 
	function drawVisualization47a(data47a) {
		// Create and draw the visualization.
        var ac47a = new google.visualization.AreaChart(document.getElementById('visualization47a'));
        ac47a.draw(data47a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 43,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization47a iframe').attr('allowTransparency', 'true');
		$('#visualization47a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar47a(){
	 
			var datomg47a=document.getElementById('mg47-a').value;
			var datomg47b=document.getElementById('mg47-b').value;
			var datomg47c=document.getElementById('mg47-c').value;

			var datops47a=document.getElementById('ps47-a').value;
			var datops47b=document.getElementById('ps47-b').value;
			var datops47c=document.getElementById('ps47-c').value;

			if(datops47a>3){
				document.getElementById('ps47-a').style.color="red";
			}else{
				document.getElementById('ps47-a').style.color="black";
			}
			if(datops47b>3){
				document.getElementById('ps47-b').style.color="red";
			}else{
				document.getElementById('ps47-b').style.color="black";
			}
			if(datops47c>3){
				document.getElementById('ps47-c').style.color="red";
			}else{
				document.getElementById('ps47-c').style.color="black";
			}
			
			var data47a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg47a)+parseInt(datops47a)),      0-parseInt(datops47a)],
				['',    0+(parseInt(datomg47b)+parseInt(datops47b)),      0-parseInt(datops47b)],
				['',    0+(parseInt(datomg47c)+parseInt(datops47c)),      0-parseInt(datops47c)]
			]); 
			
			drawVisualization47a(data47a);
			
	  }
	  
	  function drawVisualization47b(data47b) {
		// Create and draw the visualization.
        var ac47b = new google.visualization.AreaChart(document.getElementById('visualization47b'));
        ac47b.draw(data47b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 43,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization47b iframe').attr('allowTransparency', 'true');
		$('#visualization47b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar47b(){
	 
			var datomg47ba=document.getElementById('mg47b-a').value;
			var datomg47bb=document.getElementById('mg47b-b').value;
			var datomg47bc=document.getElementById('mg47b-c').value;

			var datops47ba=document.getElementById('ps47b-a').value;
			var datops47bb=document.getElementById('ps47b-b').value;
			var datops47bc=document.getElementById('ps47b-c').value;

			if(datops47ba>3){
				document.getElementById('ps47b-a').style.color="red";
			}else{
				document.getElementById('ps47b-a').style.color="black";
			}
			if(datops47bb>3){
				document.getElementById('ps47b-b').style.color="red";
			}else{
				document.getElementById('ps47b-b').style.color="black";
			}
			if(datops47bc>3){
				document.getElementById('ps47b-c').style.color="red";
			}else{
				document.getElementById('ps47b-c').style.color="black";
			}
			
			
			var data47b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg47ba)+parseInt(datops47ba)),      0+parseInt(datops47ba)],
				['',    0-(parseInt(datomg47bb)+parseInt(datops47bb)),      0+parseInt(datops47bb)],
				['',    0-(parseInt(datomg47bc)+parseInt(datops47bc)),      0+parseInt(datops47bc)]
			]); 
			
			drawVisualization47b(data47b);
			
	  }
	  
	  
	 
	function drawVisualization46a(data46a) {
		// Create and draw the visualization.
        var ac46a = new google.visualization.AreaChart(document.getElementById('visualization46a'));
        ac46a.draw(data46a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 44,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization46a iframe').attr('allowTransparency', 'true');
		$('#visualization46a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar46a(){
	 
			var datomg46a=document.getElementById('mg46-a').value;
			var datomg46b=document.getElementById('mg46-b').value;
			var datomg46c=document.getElementById('mg46-c').value;

			var datops46a=document.getElementById('ps46-a').value;
			var datops46b=document.getElementById('ps46-b').value;
			var datops46c=document.getElementById('ps46-c').value;

			if(datops46a>3){
				document.getElementById('ps46-a').style.color="red";
			}else{
				document.getElementById('ps46-a').style.color="black";
			}
			if(datops46b>3){
				document.getElementById('ps46-b').style.color="red";
			}else{
				document.getElementById('ps46-b').style.color="black";
			}
			if(datops46c>3){
				document.getElementById('ps46-c').style.color="red";
			}else{
				document.getElementById('ps46-c').style.color="black";
			}
			
			var data46a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg46a)+parseInt(datops46a)),      0-parseInt(datops46a)],
				['',    0+(parseInt(datomg46b)+parseInt(datops46b)),      0-parseInt(datops46b)],
				['',    0+(parseInt(datomg46c)+parseInt(datops46c)),      0-parseInt(datops46c)]
			]); 
			
			drawVisualization46a(data46a);
			
	  }
	  
	  function drawVisualization46b(data46b) {
		// Create and draw the visualization.
        var ac46b = new google.visualization.AreaChart(document.getElementById('visualization46b'));
        ac46b.draw(data46b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 44,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization46b iframe').attr('allowTransparency', 'true');
		$('#visualization46b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar46b(){
	 
			var datomg46ba=document.getElementById('mg46b-a').value;
			var datomg46bb=document.getElementById('mg46b-b').value;
			var datomg46bc=document.getElementById('mg46b-c').value;

			var datops46ba=document.getElementById('ps46b-a').value;
			var datops46bb=document.getElementById('ps46b-b').value;
			var datops46bc=document.getElementById('ps46b-c').value;

			if(datops46ba>3){
				document.getElementById('ps46b-a').style.color="red";
			}else{
				document.getElementById('ps46b-a').style.color="black";
			}
			if(datops46bb>3){
				document.getElementById('ps46b-b').style.color="red";
			}else{
				document.getElementById('ps46b-b').style.color="black";
			}
			if(datops46bc>3){
				document.getElementById('ps46b-c').style.color="red";
			}else{
				document.getElementById('ps46b-c').style.color="black";
			}
			
			var data46b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg46ba)+parseInt(datops46ba)),      0+parseInt(datops46ba)],
				['',    0-(parseInt(datomg46bb)+parseInt(datops46bb)),      0+parseInt(datops46bb)],
				['',    0-(parseInt(datomg46bc)+parseInt(datops46bc)),      0+parseInt(datops46bc)]
			]); 
			
			drawVisualization46b(data46b);
			
	  }
	  
	  
	 
	function drawVisualization45a(data45a) {
		// Create and draw the visualization.
        var ac45a = new google.visualization.AreaChart(document.getElementById('visualization45a'));
        ac45a.draw(data45a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 23,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization45a iframe').attr('allowTransparency', 'true');
		$('#visualization45a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar45a(){
	 
			var datomg45a=document.getElementById('mg45-a').value;
			var datomg45b=document.getElementById('mg45-b').value;
			var datomg45c=document.getElementById('mg45-c').value;

			var datops45a=document.getElementById('ps45-a').value;
			var datops45b=document.getElementById('ps45-b').value;
			var datops45c=document.getElementById('ps45-c').value;

			if(datops45a>3){
				document.getElementById('ps45-a').style.color="red";
			}else{
				document.getElementById('ps45-a').style.color="black";
			}
			if(datops45b>3){
				document.getElementById('ps45-b').style.color="red";
			}else{
				document.getElementById('ps45-b').style.color="black";
			}
			if(datops45c>3){
				document.getElementById('ps45-c').style.color="red";
			}else{
				document.getElementById('ps45-c').style.color="black";
			}
			
			var data45a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg45a)+parseInt(datops45a)),      0-parseInt(datops45a)],
				['',    0+(parseInt(datomg45b)+parseInt(datops45b)),      0-parseInt(datops45b)],
				['',    0+(parseInt(datomg45c)+parseInt(datops45c)),      0-parseInt(datops45c)]
			]); 
			
			drawVisualization45a(data45a);
			
	  }
	  
	  function drawVisualization45b(data45b) {
		// Create and draw the visualization.
        var ac45b = new google.visualization.AreaChart(document.getElementById('visualization45b'));
        ac45b.draw(data45b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 23,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization45b iframe').attr('allowTransparency', 'true');
		$('#visualization45b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar45b(){
	 
			var datomg45ba=document.getElementById('mg45b-a').value;
			var datomg45bb=document.getElementById('mg45b-b').value;
			var datomg45bc=document.getElementById('mg45b-c').value;

			var datops45ba=document.getElementById('ps45b-a').value;
			var datops45bb=document.getElementById('ps45b-b').value;
			var datops45bc=document.getElementById('ps45b-c').value;

			if(datops45ba>3){
				document.getElementById('ps45b-a').style.color="red";
			}else{
				document.getElementById('ps45b-a').style.color="black";
			}
			if(datops45bb>3){
				document.getElementById('ps45b-b').style.color="red";
			}else{
				document.getElementById('ps45b-b').style.color="black";
			}
			if(datops45bc>3){
				document.getElementById('ps45b-c').style.color="red";
			}else{
				document.getElementById('ps45b-c').style.color="black";
			}
			
			var data45b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg45ba)+parseInt(datops45ba)),      0+parseInt(datops45ba)],
				['',    0-(parseInt(datomg45bb)+parseInt(datops45bb)),      0+parseInt(datops45bb)],
				['',    0-(parseInt(datomg45bc)+parseInt(datops45bc)),      0+parseInt(datops45bc)]
			]); 
			
			drawVisualization45b(data45b);
			
	  }
	  
	  
	 
	function drawVisualization44a(data44a) {
		// Create and draw the visualization.
        var ac44a = new google.visualization.AreaChart(document.getElementById('visualization44a'));
        ac44a.draw(data44a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 25,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization44a iframe').attr('allowTransparency', 'true');
		$('#visualization44a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar44a(){
	 
			var datomg44a=document.getElementById('mg44-a').value;
			var datomg44b=document.getElementById('mg44-b').value;
			var datomg44c=document.getElementById('mg44-c').value;

			var datops44a=document.getElementById('ps44-a').value;
			var datops44b=document.getElementById('ps44-b').value;
			var datops44c=document.getElementById('ps44-c').value;

			if(datops44a>3){
				document.getElementById('ps44-a').style.color="red";
			}else{
				document.getElementById('ps44-a').style.color="black";
			}
			if(datops44b>3){
				document.getElementById('ps44-b').style.color="red";
			}else{
				document.getElementById('ps44-b').style.color="black";
			}
			if(datops44c>3){
				document.getElementById('ps44-c').style.color="red";
			}else{
				document.getElementById('ps44-c').style.color="black";
			}
			
			var data44a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg44a)+parseInt(datops44a)),      0-parseInt(datops44a)],
				['',    0+(parseInt(datomg44b)+parseInt(datops44b)),      0-parseInt(datops44b)],
				['',    0+(parseInt(datomg44c)+parseInt(datops44c)),      0-parseInt(datops44c)]
			]); 
			
			drawVisualization44a(data44a);
			
	  }
	  
	  function drawVisualization44b(data44b) {
		// Create and draw the visualization.
        var ac44b = new google.visualization.AreaChart(document.getElementById('visualization44b'));
        ac44b.draw(data44b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 25,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization44b iframe').attr('allowTransparency', 'true');
		$('#visualization44b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar44b(){
	 
			var datomg44ba=document.getElementById('mg44b-a').value;
			var datomg44bb=document.getElementById('mg44b-b').value;
			var datomg44bc=document.getElementById('mg44b-c').value;

			var datops44ba=document.getElementById('ps44b-a').value;
			var datops44bb=document.getElementById('ps44b-b').value;
			var datops44bc=document.getElementById('ps44b-c').value;

			if(datops44ba>3){
				document.getElementById('ps44b-a').style.color="red";
			}else{
				document.getElementById('ps44b-a').style.color="black";
			}
			if(datops44bb>3){
				document.getElementById('ps44b-b').style.color="red";
			}else{
				document.getElementById('ps44b-b').style.color="black";
			}
			if(datops44bc>3){
				document.getElementById('ps44b-c').style.color="red";
			}else{
				document.getElementById('ps44b-c').style.color="black";
			}
			
			var data44b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg44ba)+parseInt(datops44ba)),      0+parseInt(datops44ba)],
				['',    0-(parseInt(datomg44bb)+parseInt(datops44bb)),      0+parseInt(datops44bb)],
				['',    0-(parseInt(datomg44bc)+parseInt(datops44bc)),      0+parseInt(datops44bc)]
			]); 
			
			drawVisualization44b(data44b);
			
	  }
	  
	  
	 
	function drawVisualization43a(data43a) {
		// Create and draw the visualization.
        var ac43a = new google.visualization.AreaChart(document.getElementById('visualization43a'));
        ac43a.draw(data43a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 23,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization43a iframe').attr('allowTransparency', 'true');
		$('#visualization43a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar43a(){
	 
			var datomg43a=document.getElementById('mg43-a').value;
			var datomg43b=document.getElementById('mg43-b').value;
			var datomg43c=document.getElementById('mg43-c').value;

			var datops43a=document.getElementById('ps43-a').value;
			var datops43b=document.getElementById('ps43-b').value;
			var datops43c=document.getElementById('ps43-c').value;

			if(datops43a>3){
				document.getElementById('ps43-a').style.color="red";
			}else{
				document.getElementById('ps43-a').style.color="black";
			}
			if(datops43b>3){
				document.getElementById('ps43-b').style.color="red";
			}else{
				document.getElementById('ps43-b').style.color="black";
			}
			if(datops43c>3){
				document.getElementById('ps43-c').style.color="red";
			}else{
				document.getElementById('ps43-c').style.color="black";
			}
			
			
			var data43a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg43a)+parseInt(datops43a)),      0-parseInt(datops43a)],
				['',    0+(parseInt(datomg43b)+parseInt(datops43b)),      0-parseInt(datops43b)],
				['',    0+(parseInt(datomg43c)+parseInt(datops43c)),      0-parseInt(datops43c)]
			]); 
			
			drawVisualization43a(data43a);
			
	  }
	  
	  function drawVisualization43b(data43b) {
		// Create and draw the visualization.
        var ac43b = new google.visualization.AreaChart(document.getElementById('visualization43b'));
        ac43b.draw(data43b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 23,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization43b iframe').attr('allowTransparency', 'true');
		$('#visualization43b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar43b(){
	 
			var datomg43ba=document.getElementById('mg43b-a').value;
			var datomg43bb=document.getElementById('mg43b-b').value;
			var datomg43bc=document.getElementById('mg43b-c').value;

			var datops43ba=document.getElementById('ps43b-a').value;
			var datops43bb=document.getElementById('ps43b-b').value;
			var datops43bc=document.getElementById('ps43b-c').value;

			if(datops43ba>3){
				document.getElementById('ps43b-a').style.color="red";
			}else{
				document.getElementById('ps43b-a').style.color="black";
			}
			if(datops43bb>3){
				document.getElementById('ps43b-b').style.color="red";
			}else{
				document.getElementById('ps43b-b').style.color="black";
			}
			if(datops43bc>3){
				document.getElementById('ps43b-c').style.color="red";
			}else{
				document.getElementById('ps43b-c').style.color="black";
			}
			
			var data43b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg43ba)+parseInt(datops43ba)),      0+parseInt(datops43ba)],
				['',    0-(parseInt(datomg43bb)+parseInt(datops43bb)),      0+parseInt(datops43bb)],
				['',    0-(parseInt(datomg43bc)+parseInt(datops43bc)),      0+parseInt(datops43bc)]
			]); 
			
			drawVisualization43b(data43b);
			
	  }
	  
	 
	function drawVisualization42a(data42a) {
		// Create and draw the visualization.
        var ac42a = new google.visualization.AreaChart(document.getElementById('visualization42a'));
        ac42a.draw(data42a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 17,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization42a iframe').attr('allowTransparency', 'true');
		$('#visualization42a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar42a(){
	 
			var datomg42a=document.getElementById('mg42-a').value;
			var datomg42b=document.getElementById('mg42-b').value;
			var datomg42c=document.getElementById('mg42-c').value;

			var datops42a=document.getElementById('ps42-a').value;
			var datops42b=document.getElementById('ps42-b').value;
			var datops42c=document.getElementById('ps42-c').value;

			if(datops42a>3){
				document.getElementById('ps42-a').style.color="red";
			}else{
				document.getElementById('ps42-a').style.color="black";
			}
			if(datops42b>3){
				document.getElementById('ps42-b').style.color="red";
			}else{
				document.getElementById('ps42-b').style.color="black";
			}
			if(datops42c>3){
				document.getElementById('ps42-c').style.color="red";
			}else{
				document.getElementById('ps42-c').style.color="black";
			}
			
			var data42a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg42a)+parseInt(datops42a)),      0-parseInt(datops42a)],
				['',    0+(parseInt(datomg42b)+parseInt(datops42b)),      0-parseInt(datops42b)],
				['',    0+(parseInt(datomg42c)+parseInt(datops42c)),      0-parseInt(datops42c)]
			]); 
			
			drawVisualization42a(data42a);
			
	  }
	  
	  function drawVisualization42b(data42b) {
		// Create and draw the visualization.
        var ac42b = new google.visualization.AreaChart(document.getElementById('visualization42b'));
        ac42b.draw(data42b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 17,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization42b iframe').attr('allowTransparency', 'true');
		$('#visualization42b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar42b(){
	 
			var datomg42ba=document.getElementById('mg42b-a').value;
			var datomg42bb=document.getElementById('mg42b-b').value;
			var datomg42bc=document.getElementById('mg42b-c').value;

			var datops42ba=document.getElementById('ps42b-a').value;
			var datops42bb=document.getElementById('ps42b-b').value;
			var datops42bc=document.getElementById('ps42b-c').value;

			if(datops42ba>3){
				document.getElementById('ps42b-a').style.color="red";
			}else{
				document.getElementById('ps42b-a').style.color="black";
			}
			if(datops42bb>3){
				document.getElementById('ps42b-b').style.color="red";
			}else{
				document.getElementById('ps42b-b').style.color="black";
			}
			if(datops42bc>3){
				document.getElementById('ps42b-c').style.color="red";
			}else{
				document.getElementById('ps42b-c').style.color="black";
			}
			
			var data42b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg42ba)+parseInt(datops42ba)),      0+parseInt(datops42ba)],
				['',    0-(parseInt(datomg42bb)+parseInt(datops42bb)),      0+parseInt(datops42bb)],
				['',    0-(parseInt(datomg42bc)+parseInt(datops42bc)),      0+parseInt(datops42bc)]
			]); 
			
			drawVisualization42b(data42b);
			
	  }
	  
	  
	 
	function drawVisualization41a(data41a) {
		// Create and draw the visualization.
        var ac41a = new google.visualization.AreaChart(document.getElementById('visualization41a'));
        ac41a.draw(data41a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 18,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization41a iframe').attr('allowTransparency', 'true');
		$('#visualization41a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar41a(){
	 
			var datomg41a=document.getElementById('mg41-a').value;
			var datomg41b=document.getElementById('mg41-b').value;
			var datomg41c=document.getElementById('mg41-c').value;

			var datops41a=document.getElementById('ps41-a').value;
			var datops41b=document.getElementById('ps41-b').value;
			var datops41c=document.getElementById('ps41-c').value;

			if(datops41a>3){
				document.getElementById('ps41-a').style.color="red";
			}else{
				document.getElementById('ps41-a').style.color="black";
			}
			if(datops41b>3){
				document.getElementById('ps41-b').style.color="red";
			}else{
				document.getElementById('ps41-b').style.color="black";
			}
			if(datops41c>3){
				document.getElementById('ps41-c').style.color="red";
			}else{
				document.getElementById('ps41-c').style.color="black";
			}
			
			var data41a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg41a)+parseInt(datops41a)),      0-parseInt(datops41a)],
				['',    0+(parseInt(datomg41b)+parseInt(datops41b)),      0-parseInt(datops41b)],
				['',    0+(parseInt(datomg41c)+parseInt(datops41c)),      0-parseInt(datops41c)]
			]); 
			
			drawVisualization41a(data41a);
			
	  }
	  
	  function drawVisualization41b(data41b) {
		// Create and draw the visualization.
        var ac41b = new google.visualization.AreaChart(document.getElementById('visualization41b'));
        ac41b.draw(data41b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 18,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization41b iframe').attr('allowTransparency', 'true');
		$('#visualization41b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar41b(){
	 
			var datomg41ba=document.getElementById('mg41b-a').value;
			var datomg41bb=document.getElementById('mg41b-b').value;
			var datomg41bc=document.getElementById('mg41b-c').value;

			var datops41ba=document.getElementById('ps41b-a').value;
			var datops41bb=document.getElementById('ps41b-b').value;
			var datops41bc=document.getElementById('ps41b-c').value;

			if(datops41ba>3){
				document.getElementById('ps41b-a').style.color="red";
			}else{
				document.getElementById('ps41b-a').style.color="black";
			}
			if(datops41bb>3){
				document.getElementById('ps41b-b').style.color="red";
			}else{
				document.getElementById('ps41b-b').style.color="black";
			}
			if(datops41bc>3){
				document.getElementById('ps41b-c').style.color="red";
			}else{
				document.getElementById('ps41b-c').style.color="black";
			}
			
			var data41b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg41ba)+parseInt(datops41ba)),      0+parseInt(datops41ba)],
				['',    0-(parseInt(datomg41bb)+parseInt(datops41bb)),      0+parseInt(datops41bb)],
				['',    0-(parseInt(datomg41bc)+parseInt(datops41bc)),      0+parseInt(datops41bc)]
			]); 
			
			drawVisualization41b(data41b);
			
	  }
	  
	  
	 function drawVisualization38a(data38a) {
		// Create and draw the visualization.
        var ac38a = new google.visualization.AreaChart(document.getElementById('visualization38a'));
        ac38a.draw(data38a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 47,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization38a iframe').attr('allowTransparency', 'true');
		$('#visualization38a iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar38a(){
	 
			var datomg38a=document.getElementById('mg38-a').value;
			var datomg38b=document.getElementById('mg38-b').value;
			var datomg38c=document.getElementById('mg38-c').value;

			var datops38a=document.getElementById('ps38-a').value;
			var datops38b=document.getElementById('ps38-b').value;
			var datops38c=document.getElementById('ps38-c').value;

			if(datops38a>3){
				document.getElementById('ps38-a').style.color="red";
			}else{
				document.getElementById('ps38-a').style.color="black";
			}
			if(datops38b>3){
				document.getElementById('ps38-b').style.color="red";
			}else{
				document.getElementById('ps38-b').style.color="black";
			}
			if(datops38c>3){
				document.getElementById('ps38-c').style.color="red";
			}else{
				document.getElementById('ps38-c').style.color="black";
			}
			
			var data38a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg38a)+parseInt(datops38a)),      0-parseInt(datops38a)],
				['',    0+(parseInt(datomg38b)+parseInt(datops38b)),      0-parseInt(datops38b)],
				['',    0+(parseInt(datomg38c)+parseInt(datops38c)),      0-parseInt(datops38c)]
			]); 
			
			drawVisualization38a(data38a);
			
	  }
	  
	  function drawVisualization38b(data38b) {
		// Create and draw the visualization.
        var ac38b = new google.visualization.AreaChart(document.getElementById('visualization38b'));
        ac38b.draw(data38b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 47,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization38b iframe').attr('allowTransparency', 'true');
		$('#visualization38b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar38b(){
	 
			var datomg38ba=document.getElementById('mg38b-a').value;
			var datomg38bb=document.getElementById('mg38b-b').value;
			var datomg38bc=document.getElementById('mg38b-c').value;

			var datops38ba=document.getElementById('ps38b-a').value;
			var datops38bb=document.getElementById('ps38b-b').value;
			var datops38bc=document.getElementById('ps38b-c').value;

			if(datops38ba>3){
				document.getElementById('ps38b-a').style.color="red";
			}else{
				document.getElementById('ps38b-a').style.color="black";
			}
			if(datops38bb>3){
				document.getElementById('ps38b-b').style.color="red";
			}else{
				document.getElementById('ps38b-b').style.color="black";
			}
			if(datops38bc>3){
				document.getElementById('ps38b-c').style.color="red";
			}else{
				document.getElementById('ps38b-c').style.color="black";
			}
			
			var data38b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg38ba)+parseInt(datops38ba)),      0+parseInt(datops38ba)],
				['',    0-(parseInt(datomg38bb)+parseInt(datops38bb)),      0+parseInt(datops38bb)],
				['',    0-(parseInt(datomg38bc)+parseInt(datops38bc)),      0+parseInt(datops38bc)]
			]); 
			
			drawVisualization38b(data38b);
			
	  }
	 
	function drawVisualization37a(data37a) {
		// Create and draw the visualization.
        var ac37a = new google.visualization.AreaChart(document.getElementById('visualization37a'));
        ac37a.draw(data37a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 47,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization37a iframe').attr('allowTransparency', 'true');
		$('#visualization37a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar37a(){
	 
			var datomg37a=document.getElementById('mg37-a').value;
			var datomg37b=document.getElementById('mg37-b').value;
			var datomg37c=document.getElementById('mg37-c').value;

			var datops37a=document.getElementById('ps37-a').value;
			var datops37b=document.getElementById('ps37-b').value;
			var datops37c=document.getElementById('ps37-c').value;

			if(datops37a>3){
				document.getElementById('ps37-a').style.color="red";
			}else{
				document.getElementById('ps37-a').style.color="black";
			}
			if(datops37b>3){
				document.getElementById('ps37-b').style.color="red";
			}else{
				document.getElementById('ps37-b').style.color="black";
			}
			if(datops37c>3){
				document.getElementById('ps37-c').style.color="red";
			}else{
				document.getElementById('ps37-c').style.color="black";
			}
			
			var data37a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg37a)+parseInt(datops37a)),      0-parseInt(datops37a)],
				['',    0+(parseInt(datomg37b)+parseInt(datops37b)),      0-parseInt(datops37b)],
				['',    0+(parseInt(datomg37c)+parseInt(datops37c)),      0-parseInt(datops37c)]
			]); 
			
			drawVisualization37a(data37a);
			
	  }
	  
	  function drawVisualization37b(data37b) {
		// Create and draw the visualization.
        var ac37b = new google.visualization.AreaChart(document.getElementById('visualization37b'));
        ac37b.draw(data37b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 47,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization37b iframe').attr('allowTransparency', 'true');
		$('#visualization37b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar37b(){
	 
			var datomg37ba=document.getElementById('mg37b-a').value;
			var datomg37bb=document.getElementById('mg37b-b').value;
			var datomg37bc=document.getElementById('mg37b-c').value;

			var datops37ba=document.getElementById('ps37b-a').value;
			var datops37bb=document.getElementById('ps37b-b').value;
			var datops37bc=document.getElementById('ps37b-c').value;

			if(datops37ba>3){
				document.getElementById('ps37b-a').style.color="red";
			}else{
				document.getElementById('ps37b-a').style.color="black";
			}
			if(datops37bb>3){
				document.getElementById('ps37b-b').style.color="red";
			}else{
				document.getElementById('ps37b-b').style.color="black";
			}
			if(datops37bc>3){
				document.getElementById('ps37b-c').style.color="red";
			}else{
				document.getElementById('ps37b-c').style.color="black";
			}
			
			var data37b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg37ba)+parseInt(datops37ba)),      0+parseInt(datops37ba)],
				['',    0-(parseInt(datomg37bb)+parseInt(datops37bb)),      0+parseInt(datops37bb)],
				['',    0-(parseInt(datomg37bc)+parseInt(datops37bc)),      0+parseInt(datops37bc)]
			]); 
			
			drawVisualization37b(data37b);
			
	  }
	  
	  
	 
	function drawVisualization36a(data36a) {
		// Create and draw the visualization.
        var ac36a = new google.visualization.AreaChart(document.getElementById('visualization36a'));
        ac36a.draw(data36a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 50,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization36a iframe').attr('allowTransparency', 'true');
		$('#visualization36a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar36a(){
	 
			var datomg36a=document.getElementById('mg36-a').value;
			var datomg36b=document.getElementById('mg36-b').value;
			var datomg36c=document.getElementById('mg36-c').value;

			var datops36a=document.getElementById('ps36-a').value;
			var datops36b=document.getElementById('ps36-b').value;
			var datops36c=document.getElementById('ps36-c').value;

			if(datops36a>3){
				document.getElementById('ps36-a').style.color="red";
			}else{
				document.getElementById('ps36-a').style.color="black";
			}
			if(datops36b>3){
				document.getElementById('ps36-b').style.color="red";
			}else{
				document.getElementById('ps36-b').style.color="black";
			}
			if(datops36c>3){
				document.getElementById('ps36-c').style.color="red";
			}else{
				document.getElementById('ps36-c').style.color="black";
			}
			
			
			var data36a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg36a)+parseInt(datops36a)),      0-parseInt(datops36a)],
				['',    0+(parseInt(datomg36b)+parseInt(datops36b)),      0-parseInt(datops36b)],
				['',    0+(parseInt(datomg36c)+parseInt(datops36c)),      0-parseInt(datops36c)]
			]); 
			
			drawVisualization36a(data36a);
			
	  }
	  
	  function drawVisualization36b(data36b) {
		// Create and draw the visualization.
        var ac36b = new google.visualization.AreaChart(document.getElementById('visualization36b'));
        ac36b.draw(data36b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 50,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization36b iframe').attr('allowTransparency', 'true');
		$('#visualization36b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar36b(){
	 
			var datomg36ba=document.getElementById('mg36b-a').value;
			var datomg36bb=document.getElementById('mg36b-b').value;
			var datomg36bc=document.getElementById('mg36b-c').value;

			var datops36ba=document.getElementById('ps36b-a').value;
			var datops36bb=document.getElementById('ps36b-b').value;
			var datops36bc=document.getElementById('ps36b-c').value;

			if(datops36ba>3){
				document.getElementById('ps36b-a').style.color="red";
			}else{
				document.getElementById('ps36b-a').style.color="black";
			}
			if(datops36bb>3){
				document.getElementById('ps36b-b').style.color="red";
			}else{
				document.getElementById('ps36b-b').style.color="black";
			}
			if(datops36bc>3){
				document.getElementById('ps36b-c').style.color="red";
			}else{
				document.getElementById('ps36b-c').style.color="black";
			}
			
			var data36b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg36ba)+parseInt(datops36ba)),      0+parseInt(datops36ba)],
				['',    0-(parseInt(datomg36bb)+parseInt(datops36bb)),      0+parseInt(datops36bb)],
				['',    0-(parseInt(datomg36bc)+parseInt(datops36bc)),      0+parseInt(datops36bc)]
			]); 
			
			drawVisualization36b(data36b);
			
	  }
	  
	  
	 
	function drawVisualization35a(data35a) {
		// Create and draw the visualization.
        var ac35a = new google.visualization.AreaChart(document.getElementById('visualization35a'));
        ac35a.draw(data35a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 25,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization35a iframe').attr('allowTransparency', 'true');
		$('#visualization35a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar35a(){
	 
			var datomg35a=document.getElementById('mg35-a').value;
			var datomg35b=document.getElementById('mg35-b').value;
			var datomg35c=document.getElementById('mg35-c').value;

			var datops35a=document.getElementById('ps35-a').value;
			var datops35b=document.getElementById('ps35-b').value;
			var datops35c=document.getElementById('ps35-c').value;

			if(datops35a>3){
				document.getElementById('ps35-a').style.color="red";
			}else{
				document.getElementById('ps35-a').style.color="black";
			}
			if(datops35b>3){
				document.getElementById('ps35-b').style.color="red";
			}else{
				document.getElementById('ps35-b').style.color="black";
			}
			if(datops35c>3){
				document.getElementById('ps35-c').style.color="red";
			}else{
				document.getElementById('ps35-c').style.color="black";
			}
			
			var data35a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg35a)+parseInt(datops35a)),      0-parseInt(datops35a)],
				['',    0+(parseInt(datomg35b)+parseInt(datops35b)),      0-parseInt(datops35b)],
				['',    0+(parseInt(datomg35c)+parseInt(datops35c)),      0-parseInt(datops35c)]
			]); 
			
			drawVisualization35a(data35a);
			
	  }
	  
	  function drawVisualization35b(data35b) {
		// Create and draw the visualization.
        var ac35b = new google.visualization.AreaChart(document.getElementById('visualization35b'));
        ac35b.draw(data35b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 25,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization35b iframe').attr('allowTransparency', 'true');
		$('#visualization35b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar35b(){
	 
			var datomg35ba=document.getElementById('mg35b-a').value;
			var datomg35bb=document.getElementById('mg35b-b').value;
			var datomg35bc=document.getElementById('mg35b-c').value;

			var datops35ba=document.getElementById('ps35b-a').value;
			var datops35bb=document.getElementById('ps35b-b').value;
			var datops35bc=document.getElementById('ps35b-c').value;

			if(datops35ba>3){
				document.getElementById('ps35b-a').style.color="red";
			}else{
				document.getElementById('ps35b-a').style.color="black";
			}
			if(datops35bb>3){
				document.getElementById('ps35b-b').style.color="red";
			}else{
				document.getElementById('ps35b-b').style.color="black";
			}
			if(datops35bc>3){
				document.getElementById('ps35b-c').style.color="red";
			}else{
				document.getElementById('ps35b-c').style.color="black";
			}
			
			var data35b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg35ba)+parseInt(datops35ba)),      0+parseInt(datops35ba)],
				['',    0-(parseInt(datomg35bb)+parseInt(datops35bb)),      0+parseInt(datops35bb)],
				['',    0-(parseInt(datomg35bc)+parseInt(datops35bc)),      0+parseInt(datops35bc)]
			]); 
			
			drawVisualization35b(data35b);
			
	  }
	  
	  
	 
	function drawVisualization34a(data34a) {
		// Create and draw the visualization.
        var ac34a = new google.visualization.AreaChart(document.getElementById('visualization34a'));
        ac34a.draw(data34a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 22,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization34a iframe').attr('allowTransparency', 'true');
		$('#visualization34a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar34a(){
	 
			var datomg34a=document.getElementById('mg34-a').value;
			var datomg34b=document.getElementById('mg34-b').value;
			var datomg34c=document.getElementById('mg34-c').value;

			var datops34a=document.getElementById('ps34-a').value;
			var datops34b=document.getElementById('ps34-b').value;
			var datops34c=document.getElementById('ps34-c').value;

			if(datops34a>3){
				document.getElementById('ps34-a').style.color="red";
			}else{
				document.getElementById('ps34-a').style.color="black";
			}
			if(datops34b>3){
				document.getElementById('ps34-b').style.color="red";
			}else{
				document.getElementById('ps34-b').style.color="black";
			}
			if(datops34c>3){
				document.getElementById('ps34-c').style.color="red";
			}else{
				document.getElementById('ps34-c').style.color="black";
			}
			
			
			var data34a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg34a)+parseInt(datops34a)),      0-parseInt(datops34a)],
				['',    0+(parseInt(datomg34b)+parseInt(datops34b)),      0-parseInt(datops34b)],
				['',    0+(parseInt(datomg34c)+parseInt(datops34c)),      0-parseInt(datops34c)]
			]); 
			
			drawVisualization34a(data34a);
			
	  }
	  
	  function drawVisualization34b(data34b) {
		// Create and draw the visualization.
        var ac34b = new google.visualization.AreaChart(document.getElementById('visualization34b'));
        ac34b.draw(data34b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 22,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization34b iframe').attr('allowTransparency', 'true');
		$('#visualization34b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar34b(){
	 
			var datomg34ba=document.getElementById('mg34b-a').value;
			var datomg34bb=document.getElementById('mg34b-b').value;
			var datomg34bc=document.getElementById('mg34b-c').value;

			var datops34ba=document.getElementById('ps34b-a').value;
			var datops34bb=document.getElementById('ps34b-b').value;
			var datops34bc=document.getElementById('ps34b-c').value;

			if(datops34ba>3){
				document.getElementById('ps34b-a').style.color="red";
			}else{
				document.getElementById('ps34b-a').style.color="black";
			}
			if(datops34bb>3){
				document.getElementById('ps34b-b').style.color="red";
			}else{
				document.getElementById('ps34b-b').style.color="black";
			}
			if(datops34bc>3){
				document.getElementById('ps34b-c').style.color="red";
			}else{
				document.getElementById('ps34b-c').style.color="black";
			}
			
			var data34b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg34ba)+parseInt(datops34ba)),      0+parseInt(datops34ba)],
				['',    0-(parseInt(datomg34bb)+parseInt(datops34bb)),      0+parseInt(datops34bb)],
				['',    0-(parseInt(datomg34bc)+parseInt(datops34bc)),      0+parseInt(datops34bc)]
			]); 
			
			drawVisualization34b(data34b);
			
	  }
	  
	  
	 
	function drawVisualization33a(data33a) {
		// Create and draw the visualization.
        var ac33a = new google.visualization.AreaChart(document.getElementById('visualization33a'));
        ac33a.draw(data33a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 25,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization33a iframe').attr('allowTransparency', 'true');
		$('#visualization33a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar33a(){
	 
			var datomg33a=document.getElementById('mg33-a').value;
			var datomg33b=document.getElementById('mg33-b').value;
			var datomg33c=document.getElementById('mg33-c').value;

			var datops33a=document.getElementById('ps33-a').value;
			var datops33b=document.getElementById('ps33-b').value;
			var datops33c=document.getElementById('ps33-c').value;

			if(datops33a>3){
				document.getElementById('ps33-a').style.color="red";
			}else{
				document.getElementById('ps33-a').style.color="black";
			}
			if(datops33b>3){
				document.getElementById('ps33-b').style.color="red";
			}else{
				document.getElementById('ps33-b').style.color="black";
			}
			if(datops33c>3){
				document.getElementById('ps33-c').style.color="red";
			}else{
				document.getElementById('ps33-c').style.color="black";
			}
			
			var data33a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg33a)+parseInt(datops33a)),      0-parseInt(datops33a)],
				['',    0+(parseInt(datomg33b)+parseInt(datops33b)),      0-parseInt(datops33b)],
				['',    0+(parseInt(datomg33c)+parseInt(datops33c)),      0-parseInt(datops33c)]
			]); 
			
			drawVisualization33a(data33a);
			
	  }
	  
	  function drawVisualization33b(data33b) {
		// Create and draw the visualization.
        var ac33b = new google.visualization.AreaChart(document.getElementById('visualization33b'));
        ac33b.draw(data33b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 25,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization33b iframe').attr('allowTransparency', 'true');
		$('#visualization33b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar33b(){
	 
			var datomg33ba=document.getElementById('mg33b-a').value;
			var datomg33bb=document.getElementById('mg33b-b').value;
			var datomg33bc=document.getElementById('mg33b-c').value;

			var datops33ba=document.getElementById('ps33b-a').value;
			var datops33bb=document.getElementById('ps33b-b').value;
			var datops33bc=document.getElementById('ps33b-c').value;

			if(datops33ba>3){
				document.getElementById('ps33b-a').style.color="red";
			}else{
				document.getElementById('ps33b-a').style.color="black";
			}
			if(datops33bb>3){
				document.getElementById('ps33b-b').style.color="red";
			}else{
				document.getElementById('ps33b-b').style.color="black";
			}
			if(datops33bc>3){
				document.getElementById('ps33b-c').style.color="red";
			}else{
				document.getElementById('ps33b-c').style.color="black";
			}
			
			var data33b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg33ba)+parseInt(datops33ba)),      0+parseInt(datops33ba)],
				['',    0-(parseInt(datomg33bb)+parseInt(datops33bb)),      0+parseInt(datops33bb)],
				['',    0-(parseInt(datomg33bc)+parseInt(datops33bc)),      0+parseInt(datops33bc)]
			]); 
			
			drawVisualization33b(data33b);
			
	  }
	  
	 
	function drawVisualization32a(data32a) {
		// Create and draw the visualization.
        var ac32a = new google.visualization.AreaChart(document.getElementById('visualization32a'));
        ac32a.draw(data32a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 22,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization32a iframe').attr('allowTransparency', 'true');
		$('#visualization32a iframe').contents().find('body').css('background', 'transparent');
      }
	 	 function cargar32a(){
	 
			var datomg32a=document.getElementById('mg32-a').value;
			var datomg32b=document.getElementById('mg32-b').value;
			var datomg32c=document.getElementById('mg32-c').value;

			var datops32a=document.getElementById('ps32-a').value;
			var datops32b=document.getElementById('ps32-b').value;
			var datops32c=document.getElementById('ps32-c').value;

			if(datops32a>3){
				document.getElementById('ps32-a').style.color="red";
			}else{
				document.getElementById('ps32-a').style.color="black";
			}
			if(datops32b>3){
				document.getElementById('ps32-b').style.color="red";
			}else{
				document.getElementById('ps32-b').style.color="black";
			}
			if(datops32c>3){
				document.getElementById('ps32-c').style.color="red";
			}else{
				document.getElementById('ps32-c').style.color="black";
			}
			
			var data32a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg32a)+parseInt(datops32a)),      0-parseInt(datops32a)],
				['',    0+(parseInt(datomg32b)+parseInt(datops32b)),      0-parseInt(datops32b)],
				['',    0+(parseInt(datomg32c)+parseInt(datops32c)),      0-parseInt(datops32c)]
			]); 
			
			drawVisualization32a(data32a);
			
	  }
	  
	  function drawVisualization32b(data32b) {
		// Create and draw the visualization.
        var ac32b = new google.visualization.AreaChart(document.getElementById('visualization32b'));
        ac32b.draw(data32b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 22,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization32b iframe').attr('allowTransparency', 'true');
		$('#visualization32b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar32b(){
	 
			var datomg32ba=document.getElementById('mg32b-a').value;
			var datomg32bb=document.getElementById('mg32b-b').value;
			var datomg32bc=document.getElementById('mg32b-c').value;

			var datops32ba=document.getElementById('ps32b-a').value;
			var datops32bb=document.getElementById('ps32b-b').value;
			var datops32bc=document.getElementById('ps32b-c').value;

			if(datops32ba>3){
				document.getElementById('ps32b-a').style.color="red";
			}else{
				document.getElementById('ps32b-a').style.color="black";
			}
			if(datops32bb>3){
				document.getElementById('ps32b-b').style.color="red";
			}else{
				document.getElementById('ps32b-b').style.color="black";
			}
			if(datops32bc>3){
				document.getElementById('ps32b-c').style.color="red";
			}else{
				document.getElementById('ps32b-c').style.color="black";
			}
			
			var data32b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg32ba)+parseInt(datops32ba)),      0+parseInt(datops32ba)],
				['',    0-(parseInt(datomg32bb)+parseInt(datops32bb)),      0+parseInt(datops32bb)],
				['',    0-(parseInt(datomg32bc)+parseInt(datops32bc)),      0+parseInt(datops32bc)]
			]); 
			
			drawVisualization32b(data32b);
			
	  }
	  
	  
	 
	function drawVisualization31a(data31a) {
		// Create and draw the visualization.
        var ac31a = new google.visualization.AreaChart(document.getElementById('visualization31a'));
        ac31a.draw(data31a, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 23,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:19,min:-12}}
        });
		$('#visualization31a iframe').attr('allowTransparency', 'true');
		$('#visualization31a iframe').contents().find('body').css('background', 'transparent');
		
      }
	 	 function cargar31a(){
	 
			var datomg31a=document.getElementById('mg31-a').value;
			var datomg31b=document.getElementById('mg31-b').value;
			var datomg31c=document.getElementById('mg31-c').value;

			var datops31a=document.getElementById('ps31-a').value;
			var datops31b=document.getElementById('ps31-b').value;
			var datops31c=document.getElementById('ps31-c').value;

			if(datops31a>3){
				document.getElementById('ps31-a').style.color="red";
			}else{
				document.getElementById('ps31-a').style.color="black";
			}
			if(datops31b>3){
				document.getElementById('ps31-b').style.color="red";
			}else{
				document.getElementById('ps31-b').style.color="black";
			}
			if(datops31c>3){
				document.getElementById('ps31-c').style.color="red";
			}else{
				document.getElementById('ps31-c').style.color="black";
			}
			
			var data31a=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0+(parseInt(datomg31a)+parseInt(datops31a)),      0-parseInt(datops31a)],
				['',    0+(parseInt(datomg31b)+parseInt(datops31b)),      0-parseInt(datops31b)],
				['',    0+(parseInt(datomg31c)+parseInt(datops31c)),      0-parseInt(datops31c)]
			]); 
			
			drawVisualization31a(data31a);
			
	  }
	  
	  function drawVisualization31b(data31b) {
		// Create and draw the visualization.
        var ac31b = new google.visualization.AreaChart(document.getElementById('visualization31b'));
        ac31b.draw(data31b, {
          isStacked: true,
		  backgroundColor: 'transparent',
		  legend: {position: 'none'},
		  tooltip: {trigger:'none'},
		  axisTitlesPosition: 'none',
		  theme: {chartArea: {width: '100%', height: '100%'}},
          width: 23,
          height: 160,
          hAxis: {},
          vAxis: {gridlines: {color: 'transparent', count: 31},baseline:0,textPosition:'none',viewWindowMode: 'explicit',viewWindow: {max:12,min:-19}}
        });
		$('#visualization31b iframe').attr('allowTransparency', 'true');
		$('#visualization31b iframe').contents().find('body').css('background', 'transparent');
      }

	 function cargar31b(){
	 
			var datomg31ba=document.getElementById('mg31b-a').value;
			var datomg31bb=document.getElementById('mg31b-b').value;
			var datomg31bc=document.getElementById('mg31b-c').value;

			var datops31ba=document.getElementById('ps31b-a').value;
			var datops31bb=document.getElementById('ps31b-b').value;
			var datops31bc=document.getElementById('ps31b-c').value;

			if(datops31ba>3){
				document.getElementById('ps31b-a').style.color="red";
			}else{
				document.getElementById('ps31b-a').style.color="black";
			}
			if(datops31bb>3){
				document.getElementById('ps31b-b').style.color="red";
			}else{
				document.getElementById('ps31b-b').style.color="black";
			}
			if(datops31bc>3){
				document.getElementById('ps31b-c').style.color="red";
			}else{
				document.getElementById('ps31b-c').style.color="black";
			}
			
			var data31b=google.visualization.arrayToDataTable([
				['',   'Margen Gingival', 'Profundidad de sondaje'],
				['',    0-(parseInt(datomg31ba)+parseInt(datops31ba)),      0+parseInt(datops31ba)],
				['',    0-(parseInt(datomg31bb)+parseInt(datops31bb)),      0+parseInt(datops31bb)],
				['',    0-(parseInt(datomg31bc)+parseInt(datops31bc)),      0+parseInt(datops31bc)]
			]); 
			
			drawVisualization31b(data31b);
			
	  }

	  var  totalSangrado=0;
	  var  totalPlaca=0;
	  var  totalAnchura=0;
	  var  totalDientes = 32;


	function getSangrado(){
		$("#suma").text(Math.round((totalSangrado/(totalDientes*6)*100)));
	}
	
	function getPlaca(){
		$("#suma2").text(Math.round((totalPlaca/(totalDientes*6)*100)));
	}

/* Events for odonto */
$(document).ready(function(){
	//---------------------------------------------------------------------------------
	// Appliying class for "Anchura Encias" #ae18 - #ae11
	$('#ae18, #ae17, #ae16, #ae15, #ae14, #ae13, #ae12, #ae11').change(function() {
		if (parseInt($(this).val())<3) {
			$(this).addClass('abnormal-gums').removeClass('normal-gums');
		} else {
			$(this).addClass('normal-gums').removeClass('abnormal-gums');
		}
	});
	// Appliying class for "Anchura Encias" #ae28 - #ae21
	$('#ae28, #ae27, #ae26, #ae25, #ae24, #ae23, #ae22, #ae21').change(function() {
		if (parseInt($(this).val())<3) {
			$(this).addClass('abnormal-gums').removeClass('normal-gums');
		} else {
			$(this).addClass('normal-gums').removeClass('abnormal-gums');
		}
	});
	// Appliying class for "Anchura Encias" #ae48b - #ae41b
	$('#ae48b, #ae47b, #ae46b, #ae45b, #ae44b, #ae43b, #ae42b, #ae41b').change(function() {
		if (parseInt($(this).val())<3) {
			$(this).addClass('abnormal-gums').removeClass('normal-gums');
		} else {
			$(this).addClass('normal-gums').removeClass('abnormal-gums');
		}
	});
	// Appliying class for "Anchura Encias" #ae38b - #ae31b
	$('#ae38b, #ae37b, #ae36b, #ae35b, #ae34b, #ae33b, #ae32b, #ae31b').change(function() {
		if (parseInt($(this).val())<3) {
			$(this).addClass('abnormal-gums').removeClass('normal-gums');
		} else {
			$(this).addClass('normal-gums').removeClass('abnormal-gums');
		}
	});
	//------------------------------------------------------------------------------------
	// Appliying class for "sangrado/supuración" #s18a - #s11c for table 1
	$('#s18-a, #s18-b, #s18-c, #s17-a, #s17-b, #s17-c, #s16-a, #s16-b, #s16-c, #s15-a, #s15-b, #s15-c, #s14-a, #s14-b, #s14-c, #s13-a, #s13-b, #s13-c, #s12-a, #s12-b, #s12-c, #s11-a, #s11-b, #s11-c').toggle(
		function () {
        $(this).css({"background":"#FA5858"});
			 totalSangrado++;
			 getSangrado();
      	},
	  	function () {
        	$(this).css({"background":"url('img/sangrado-supuracion.png')"});
      	},
      	function () {
        	$(this).css({"background":"#FFFFFF"});
		 	totalSangrado--;
		 	getSangrado();
      });

	// Appliying class for "sangrado/supuración" #s28a - #s21c for table 2
	$('#s28-a, #s28-b, #s28-c, #s27-a, #s27-b, #s27-c, #s26-a, #s26-b, #s26-c, #s25-a, #s25-b, #s25-c, #s24-a, #s24-b, #s24-c, #s23-a, #s23-b, #s23-c, #s22-a, #s22-b, #s22-c, #s21-a, #s21-b, #s21-c').toggle(
		function () {
        $(this).css({"background":"#FA5858"});
			 totalSangrado++;
			 getSangrado();
      	},
	  	function () {
        	$(this).css({"background":"url('img/sangrado-supuracion.png')"});
      	},
      	function () {
        	$(this).css({"background":"#FFFFFF"});
		 	totalSangrado--;
		 	getSangrado();
      });
	//------------------------------------------------------------------------------------

	//*************************************************************************************
	// ---------------------------------- SUPERIOR ----------------------------------------
	//*************************************************************************************
	//*************************************************************************************
	// 18 - 11 top left vestibular SUPERIOR
	//*************************************************************************************
	// event for #ps18 a,b and c
	$('#ps18-a, #ps18-b, #ps18-c').change(function(event) {
		cargar18a();
		getDefectos();
	});
	// calculate range for "Movilidad"
	$('#m18, #m17, #m16, #m15, #m14, #m13, #m12, #m11').change(function(event) {
		rangoNumero($(this).attr('name'));
	});

	// Values for "Anchura encía"
	$('#ae18, #ae17, #ae16, #ae15, #ae14, #ae13, #ae12, #ae11').change(function(event) {
		anchuraValor();
	});
	// ---------------------------------------------------------------------
	// Operations for "Margen gingivial" 18
	$('#mg18-a, #mg18-b, #mg18-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar18a();
	});
	// Operations for "Margen gingivial" 17
	$('#mg17-a, #mg17-b, #mg17-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar17a();
	});
	// Operations for "Margen gingivial" 16
	$('#mg16-a, #mg16-b, #mg16-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar16a();
	});
	// Operations for "Margen gingivial" 15
	$('#mg15-a, #mg15-b, #mg15-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar15a();
	});
	// Operations for "Margen gingivial" 14
	$('#mg14-a, #mg14-b, #mg14-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar14a();
	});
	// Operations for "Margen gingivial" 13
	$('#mg13-a, #mg13-b, #mg13-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar13a();
	});
	// Operations for "Margen gingivial" 12
	$('#mg12-a, #mg12-b, #mg12-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar12a();
	});
	// Operations for "Margen gingivial" 11
	$('#mg11-a, #mg11-b, #mg11-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar11a();
	});
	// ---------------------------------------------------------------------
	// Operations for "Profundidad Sondaje" 18
	$('#ps18-a, #ps18-b, #ps18-c').change(function(event) {
		cargar18a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 17
	$('#ps17-a, #ps17-b, #ps17-c').change(function(event) {
		cargar17a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 16
	$('#ps16-a, #ps16-b, #ps16-c').change(function(event) {
		cargar16a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 15
	$('#ps15-a, #ps15-b, #ps15-c').change(function(event) {
		cargar15a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 14
	$('#ps14-a, #ps14-b, #ps14-c').change(function(event) {
		cargar14a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 13
	$('#ps13-a, #ps13-b, #ps13-c').change(function(event) {
		cargar13a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 12
	$('#ps12-a, #ps12-b, #ps12-c').change(function(event) {
		cargar12a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 11
	$('#ps11-a, #ps11-b, #ps11-c').change(function(event) {
		cargar11a();getDefectos();
	});
	//*************************************************************************************
	// 21 - 28 top rigth vestibular Table 2
	//*************************************************************************************
	// calculate range for "Movilidad"
	$('#m21, #m22, #m23, #m24, #m25, #m26, #m27, #m28').change(function(event) {
		rangoNumero($(this).attr('name'));
	});
	// Values for "Anchura encía"
	$('#ae21, #ae22, #ae23, #ae24, #ae25, #ae26, #ae27, #ae128').change(function(event) {
		anchuraValor();
	});
	// ---------------------------------------------------------------------
	// Operations for "Margen gingivial" 21
	$('#mg21-a, #mg21-b, #mg21-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar21a();
	});
	// Operations for "Margen gingivial" 22
	$('#mg22-a, #mg22-b, #mg22-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar22a();
	});
	// Operations for "Margen gingivial" 23
	$('#mg23-a, #mg23-b, #mg23-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar23a();
	});
	// Operations for "Margen gingivial" 24
	$('#mg24-a, #mg24-b, #mg24-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar24a();
	});
	// Operations for "Margen gingivial" 25
	$('#mg25-a, #mg25-b, #mg25-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar25a();
	});
	// Operations for "Margen gingivial" 26
	$('#mg26-a, #mg26-b, #mg26-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar26a();
	});
	// Operations for "Margen gingivial" 27
	$('#mg27-a, #mg27-b, #mg27-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar27a();
	});
	// Operations for "Margen gingivial" 28
	$('#mg28-a, #mg28-b, #mg28-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar28a();
	});
	// ---------------------------------------------------------------------
	// Operations for "Profundidad Sondaje" 21
	$('#ps21-a, #ps21-b, #ps21-c').change(function(event) {
		cargar21a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 22
	$('#ps22-a, #ps22-b, #ps22-c').change(function(event) {
		cargar22a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 23
	$('#ps23-a, #ps23-b, #ps23-c').change(function(event) {
		cargar23a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 24
	$('#ps24-a, #ps24-b, #ps24-c').change(function(event) {
		cargar24a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 25
	$('#ps25-a, #ps25-b, #ps25-c').change(function(event) {
		cargar25a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 26
	$('#ps26-a, #ps26-b, #ps26-c').change(function(event) {
		cargar26a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 27
	$('#ps27-a, #ps27-b, #ps27-c').change(function(event) {
		cargar27a();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 28
	$('#ps28-a, #ps28-b, #ps28-c').change(function(event) {
		cargar28a();getDefectos();
	});
	//*************************************************************************************
	// 18 - 11 down left palatino -Table 3
	//*************************************************************************************
	// Operations for "Profundidad Sondaje" 18
	$('#ps18b-a, #ps18b-b, #ps18b-c').change(function(event) {
		cargar18b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 17
	$('#ps17b-a, #ps17b-b, #ps17b-c').change(function(event) {
		cargar17b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 16
	$('#ps16b-a, #ps16b-b, #psb16-c').change(function(event) {
		cargar16b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 15
	$('#ps15b-a, #ps15b-b, #ps15b-c').change(function(event) {
		cargar15b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 14
	$('#ps14b-a, #ps14b-b, #ps14b-c').change(function(event) {
		cargar14b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 13
	$('#ps13b-a, #ps13v-b, #ps13b-c').change(function(event) {
		cargar13b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 12
	$('#ps12b-a, #ps12b-b, #ps12b-c').change(function(event) {
		cargar12b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 11
	$('#ps11b-a, #ps11b-b, #ps11b-c').change(function(event) {
		cargar11b();getDefectos();
	});
	// ---------------------------------------------------------------------
	// Operations for "Margen gingivial" 18b
	$('#mg18b-a, #mg18b-b, #mg18b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar18b();
	});
	// Operations for "Margen gingivial" 17b
	$('#mg17b-a, #mg17b-b, #mg17b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar17b();
	});
	// Operations for "Margen gingivial" 16b
	$('#mg16b-a, #mg16b-b, #mg16b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar16b();
	});
	// Operations for "Margen gingivial" 15b
	$('#mg15b-a, #mg15b-b, #mg15b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar15b();
	});
	// Operations for "Margen gingivial" 14b
	$('#mg14b-a, #mg14b-b, #mg14b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar14b();
	});
	// Operations for "Margen gingivial" 13b
	$('#mg13b-a, #mg13b-b, #mg13b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar13b();
	});
	// Operations for "Margen gingivial" 12b
	$('#mg12b-a, #mg12b-b, #mg12b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar12b();
	});
	// Operations for "Margen gingivial" 11b
	$('#mg11b-a, #mg11b-b, #mg11b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar11b();
	});
	// ---------------------------------------------------------------------
	// ---------------------------------------------------------------------
	// Operations for "Profundidad Sondaje" 21b
	$('#ps21b-a, #ps21b-b, #ps21b-c').change(function(event) {
		cargar21b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 22b
	$('#ps22b-a, #ps22b-b, #ps22b-c').change(function(event) {
		cargar22b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 23b
	$('#ps23b-a, #ps23b-b, #ps23b-c').change(function(event) {
		cargar23b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 24b
	$('#ps24b-a, #ps24b-b, #ps24b-c').change(function(event) {
		cargar24b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 25b
	$('#ps25b-a, #ps25b-b, #ps25b-c').change(function(event) {
		cargar25b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 26b
	$('#ps26b-a, #ps26b-b, #psb26-c').change(function(event) {
		cargar26b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 27b
	$('#ps27b-a, #ps27b-b, #ps27b-c').change(function(event) {
		cargar27b();getDefectos();
	});
	// Operations for "Profundidad Sondaje" 28b
	$('#ps28b-a, #ps28b-b, #ps28b-c').change(function(event) {
		cargar28b();getDefectos();
	});
	// ---------------------------------------------------------------------
	// Operations for "Margen gingivial" 21b
	$('#mg21b-a, #mg21-b, #mg21b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar21b();
	});
	// Operations for "Margen gingivial" 22b
	$('#mg22b-a, #mg22b-b, #mg22b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar22b();
	});
	// Operations for "Margen gingivial" 23b
	$('#mg23b-a, #mg23b-b, #mg23b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar23b();
	});
	// Operations for "Margen gingivial" 24b
	$('#mg24b-a, #mg24b-b, #mg24b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar24b();
	});
	// Operations for "Margen gingivial" 25b
	$('#mg25b-a, #mg25b-b, #mg25b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar25b();
	});
	// Operations for "Margen gingivial" 26b
	$('#mg26b-a, #mg26b-b, #mg26b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar26b();
	});
	// Operations for "Margen gingivial" 27b
	$('#mg27b-a, #mg27b-b, #mg27b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar27b();
	});
	// Operations for "Margen gingivial" 28b
	$('#mg28b-a, #mg28b-b, #mg28b-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar28b();
	});
	//*************************************************************************************
	// ---------------------------------- INFERIOR ----------------------------------------
	//*************************************************************************************
	// ---------------------------------------------------------------------
	// Operations for "Margen gingivial" 48
	$('#mg48-a, #mg48-b, #mg48-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar48a();
	});
	// Operations for "Margen gingivial" 47
	$('#mg47-a, #mg47-b, #mg47-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar47a();
	});
	// Operations for "Margen gingivial" 46
	$('#mg46-a, #mg46-b, #mg46-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar46a();
	});
	// Operations for "Margen gingivial" 45
	$('#mg45-a, #mg45-b, #mg45-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar45a();
	});
	// Operations for "Margen gingivial" 44
	$('#mg44-a, #mg44-b, #mg44-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar44a();
	});
	// Operations for "Margen gingivial" 43
	$('#mg43-a, #mg43-b, #mg43-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar43a();
	});
	// Operations for "Margen gingivial" 42
	$('#mg42-a, #mg42-b, #mg42-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar42a();
	});
	// Operations for "Margen gingivial" 41
	$('#mg41-a, #mg42-b, #mg41-c').change(function(event) {
		getDefectos(); rangoNumeroMargen($(this).attr('name')); cargar41a();
	});
});