<?php 
	$asistencia = $_POST['form-field-name'];
	$nombre = $_POST['form-field-field_dc2f9ea'];
	$invitados = $_POST['form-field-field_1ea47e5'];
	$telefono = $_POST['form-field-field_93e3f10'];
	$bus = $_POST['form-field-field_ed1faad'];
	$plazas = $_POST['form-field-field_bc74067'];
	$cancion = $_POST['form-field-field_01b0088'];
	$alimentos = $_POST['form-field-email-0'];
	$duda = $_POST['form-field-message'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Asistencia: $asistencia<br> N.Invitados: $invitados<br> Telefono : $telefono<br> Bus : $bus<br> Plazas : $plazas<br> Cancion : $cancion<br> Dudas : $duda<br> Alimentacion : $alimentos";

	if(mail('saviodehortaleza@hotmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>