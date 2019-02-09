/* JS pour gestion de la langue */
function LoadLangue(ln)
{
	//Controle de la langue
	ln = ln != null ? ln : "en";
	
	//Set du cookie
	Cookies.set('langue', ln, { expires: 70 });
	
	$.getJSON( "../res/"+ln+".json", function( data ) {
	  $.each( data, function( key, val ) {
	  if (val != null && val != undefined)
		  if (document.getElementById(key) != null)
			document.getElementById(key).innerHTML = val;
	  });
	});
}
