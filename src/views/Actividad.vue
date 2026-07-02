<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conectividad de las redes en las organizaciones',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la conectividad, la detección de fallas, las redes de acceso y la gestión de redes de datos.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el primer paso recomendado al iniciar la resolución de problemas en una red?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Buscar soluciones rápidas como reiniciar el sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar todos los dispositivos de la red.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar toda la configuración existente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actualizar inmediatamente el sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de reinicio consiste en apagar completamente el equipo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reinicio del programa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reinicio en frío.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reinicio del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reinicio del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué práctica ayuda a prevenir problemas durante un mantenimiento programado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Probar previamente los cambios realizados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar las copias de seguridad existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar todos los dispositivos activos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desactivar los protocolos de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una recomendación importante para analizar una falla?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actualizar el hardware disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desinstalar el sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la configuración anterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar los cambios recientes realizados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza un fallo del sistema?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La interacción inesperada entre subsistemas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La pérdida definitiva de energía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La desconexión de un cable físico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ausencia de un servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué se busca al sustituir un subsistema durante una falla?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tráfico de la red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Observar cambios en los síntomas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar todos los registros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actualizar el sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué dispositivo permite conectar una LAN con una WAN?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conmutador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Router.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Punto de acceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué protocolo necesita un computador para acceder a Internet?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'HTTP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SMTP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'FTP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'TCP/IP.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la función principal de un servidor dentro de una LAN?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar <em>software</em> y archivos compartidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Conectar redes inalámbricas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Convertir señales analógicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el suministro eléctrico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué dispositivo concentra las conexiones de una red local?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Router.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conmutador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Firewall.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Módem.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué tecnología inalámbrica utiliza la banda ISM de 2,45 GHz?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Wi-Fi.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Infrarrojos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bluetooth.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ZigBee.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué característica distingue una red MAN?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo conecta computadores personales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utiliza únicamente enlaces satelitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se limita a un edificio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cubre una amplia área metropolitana.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué tecnología ofrece tiempos muy bajos de recuperación ante fallos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bluetooth.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ethernet básica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SONET.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'DSL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué servicio conecta empresas mediante enlaces Ethernet?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Wi-Fi.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'VPN.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Internet residencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Metro Ethernet.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es la función principal de SNMP?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar y supervisar dispositivos de red.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Transferir archivos entre equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compartir impresoras en red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enviar mensajes de correo electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué mensaje SNMP permite informar un problema sin solicitud previa?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'GET_REQUEST.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'TRAP.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'SET_REQUEST.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'GET_RESPONSE.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué representa un OID dentro de SNMP?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una dirección IP del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una contraseña de acceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un identificador único de un objeto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una tabla de enrutamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué herramienta utiliza SNMP para generar gráficos del tráfico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Wireshark.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tcpdump.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Netcat.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'MRTG.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué ventaja ofrece un sistema de inventario de red?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actualizar automáticamente la información de los dispositivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de direcciones IP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el consumo de ancho de banda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar automáticamente los equipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué aspecto debe definirse antes de recopilar datos de rendimiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La marca del computador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La velocidad del procesador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tipo de cable instalado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El objetivo y uso de los datos recopilados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
