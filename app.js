const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
let comando = argv._[0];
const color = require('colors');

	
switch (comando) {
	case 'crear':
			console.log('Crear por hacer');
			let tarea = porHacer.crear(argv.descripcion);
			console.log(tarea);
		break;

	case 'listar':
			let listado;
			if (!argv.completado) {
				listado = porHacer.getListado();
			}
			else  {
				listado = porHacer.listarPersonalizado(argv.completado);
			}

			for(let tarea of listado){
				console.log('=====Por Hacer====='.green);
				console.log(tarea.descripcion);
				console.log('Estado: ', tarea.completado);	
				console.log('==================='.green);

			}
			

		break;

	case 'actualizar':
			let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
			console.log(actualizado);
		break;

	case 'borrar':
			let borrado = porHacer.borrar(argv.descripcion);
			console.log(borrado);
			break;
	default:
			console.log('comando no es reconocido');
		break;
}