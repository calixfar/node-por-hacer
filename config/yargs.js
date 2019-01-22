
const descripcion = {
							alias : 'd',
							demand : true,
							desc : ' descripción de una tarea por hacer'
			};
const completado = {
							default: true,
							alias: 'c',
							desc: 'Marca como compleatado o pendiente una tarea'

			}
const argv = require('yargs')
		.command('crear' , 'Crear por hacer' , {
						descripcion 
				
		})
		.command('actualizar', 'Actualiza una tarea por hacer', {
						descripcion, 
						completado 

			
		})
		.command('borrar', 'Elimina una tarea por hacer', {
						descripcion
		})
		.help()
		.argv;


module.exports = {
	argv
}
