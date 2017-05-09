$(document).ready(function(){

		$('#selEstado').empty();
		$('#selEstado').append('<option value="">Carregando...</option>');
		$('#loader').show();
    	
		$.ajax({
			datatype: "json",
			method: "GET",
			url: "http://ibge.herokuapp.com/estado/Nome",
			success: function(data){
				//console.log(data);
				$('#loader').hide();
				$('#selEstado').empty();
				$('#selEstado').append('<option value="">Selecione</option>');

				var obj = jQuery.parseJSON(data);
				$.each(obj, function(key,value) 
				{
	  				//console.log(key+':'+value);
	  				$('#selEstado').append('<option value="'+value+'">'+key+'</option>');
				});

				
			},
			error: function(){
				
			}
		});

		$('#selEstado').change(function(){

			$('#selCidade').empty();
			$('#selCidade').append('<option value="">Carregando...</option>');

			
			$('#loader').show();
			
			
			$.ajax({
				datatype: "json",
				method: "GET",
				url: "http://ibge.herokuapp.com/municipio/?val="+$('#selEstado').val(),
				success: function(data){
					$('#loader').hide();
					$('#selCidade').empty();
					$('#selCidade').append('<option value="">Selecione</option>');

					//console.log($('#selEstado').val());
					var obj = jQuery.parseJSON(data);
					$.each(obj, function(key, value)
					{
						$('#selCidade').append('<option value="'+value+'">'+key+'</option>');
					});
				},
				error: function(){
					
				}
			});
		});
});


