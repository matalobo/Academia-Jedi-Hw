// Translation document for the collection
// =======================================
// This file contains the texts
// annotated for translation
//
// Instructions:
// 1. Open the PO file with Poedit
// 2. Press "Update" to update from sources

gettext('Bits');
gettext('Puertas');
gettext('Varios');
gettext('0');
gettext('Un bit constante a 0');
gettext('1');
gettext('Un bit constante a 1');
gettext('and');
gettext('Puerta AND');
gettext('not');
gettext('Puerta NOT');
gettext('or');
gettext('Puerta OR');
gettext('Bombeo');
gettext('Motor');
gettext('Mux');
gettext('Retardo');
gettext('Servos');
gettext('Fijos');
gettext('Corazon_Hz');
gettext('Corazon genérico para bombear bits a la frecuencia fijada en Hz (por defecto 1Hz)');
gettext('Corazon_Seg');
gettext('Bombear 1 bit con el periodo especificado en el parámetro. Por defecto el periodo es de 1 segundos');
gettext('Corazon_10Hz');
gettext('Bombear 10 bits por segundo');
gettext('Creado a partir de un **corazón  \ngenérico**, dando el valor adecuado  \na su parámetro frecuencia');
gettext('Corazon_1Hz');
gettext('Bombear 1 bit por segundo');
gettext('Corazon_1KHz');
gettext('Bombear 1000 bits por segundo');
gettext('Corazon_2Hz');
gettext('Bombear 2 bits por segundo');
gettext('Corazon_2KHz');
gettext('Bombear 2000 bits por segundo');
gettext('Corazon_3Hz');
gettext('Bombear 3 bits por segundo');
gettext('Corazon_4Hz');
gettext('Bombear 4 bits por segundo');
gettext('Corazon_5Hz');
gettext('Bombear 5 bits por segundo');
gettext('Corazon_7Hz');
gettext('Bombear 7 bits por segundo');
gettext('Corazon_DO4');
gettext('Bombear bits a la frecuencia del DO de la cuarta octava');
gettext('Corazon_MI4');
gettext('Bombear bits a la frecuencia del MI de la cuarta octava');
gettext('Corazon_RE4');
gettext('Bombear bits a la frecuencia del RE de la cuarta octava');
gettext('SM-S4303R');
gettext('MotorBit');
gettext('Controlador para servo de rotacion continua SprintRC SM-S4303R. Con on=1, el motor avanza. Dir=1 sentido agujas reloj/ 0 el contrario. V1 y V2 son los pulsos para las velocidades horaria y antihoraria (en micro-sec). V0 para que esté parado');
gettext('Mux 2:1. Bus de 7 bits. ');
gettext('Mux 2:1. Bus de 4 bits. ');
gettext('Agregador de 4 cables a bus de 4bits');
gettext('Separador de bus de 4bits en 4 cables (1 + 1 + 1 + 1)');
gettext('Multiplexor 2:1 de 1-bit');
gettext('NAND logic gate');
gettext('Transistor');
gettext('Transistor cmos hecho a partir de semiconductores');
gettext('Cristal de Siicio');
gettext('Atomos de silicio');
gettext('Separador de bus de 8bits en 2 (4 + 4)');
gettext('Agregador de 2 buses de 4 a bus de 8bits');
gettext('Controlador PWM para posicionar servos de 20ms. Las unidades de pos son de 10usec');
gettext('**Velocidad 1**: Velocidad para el  \nsentido de giro horario\n');
gettext('**Velocidad 2**: Velocidad para el \nsentido de giro antirhorario');
gettext('**Entrada on/off**: Motor en  \nmovimiento o parado');
gettext('**Motorbit paramétrico** para los **SM-S4303R** o compatibles\n\nTiene 3 parámetros, especificados en micro-segundos. **V1** y **V2** son las posiciones (ancho del pulso)  \npara las velocidades de giro en sentido horario y antihorario respectivamente\n\n**V0** es la posición en la que el servo está parado (velocidad 0)\n\nPor defecto se asignan los valores para las velocidades máximas, tanto en sentido horario como antihorario\n\n* V1max = 1900\n* V2max = 1100\n* V0 = 1500');
gettext('**Velocidad en sentido horario**\n\n* Si V1 >= 1900, la velocidad es máxima\n* Si 1900 > V1 > 1500, la velocidad estará  \nentre la máxima y 0');
gettext('**Velocidad en sentido antihorario**\n\n* Si V2 <= 1100, la velocidad es máxima\n* Si 1100 < V2 < 1500, la velocidad estará  \nentre la máxima y 0');
gettext('**dir**: Sentido de giro  \n1: horario / 0: antihorario');
gettext('**Velocidad 0**: Posición para que  \nel servo esté parado');
gettext('Mux 2:1 with logic gates');
gettext('Entrada 1');
gettext('Entrada 0');
gettext('Selección');
gettext('Implementación en Verilog');
gettext('Las puertas están construidas a\npartir de transistores');
gettext('Pincha en algún transistor para\nbajar de nivel');
gettext('Nivel 3: Semiconductores');
gettext('Los transistores se crean a \npartir de uniones entre \nsemiconductores, de tipo P y N\nEstán integrados en los dados de\nsilicio en los circuitos integrados');
gettext('Pincha en el bloque para bajar de nivel');
gettext('Nivel 2: MATERIALES');
gettext('Cristal de silicio');
gettext('Los semiconductores se crean a partir de cristales\nde Silicio (Si) que se dopans con impurezas\npara darle las propiedades de semiconductores');
gettext('Pincha en los bloques para bajar de nivel');
gettext('Átomos de Silicio');
gettext('Nivel 1: ATOMOS');
gettext('Los cristales de silicio se forman a \npartir del enlace covalente entre los\nátomos de silicio. Cada uno de ellos \nestá rodeado por 4 átomos de silicio\nformando un tetraedro');
gettext('<B>Posicion del servo</B>\n\nSe especifica en unidades de 10micro-segundos\nEj. pos = 100 --> Pulso de achura 1ms');
gettext('<B>Generación de una señal PWM para posicionamiento de Servos</B>\nEl periodo es de 20ms\nEl ancho del pulso varía entre 0 - 255 (0 - 2.5ms)');
gettext('Mux-2-1-flip');
gettext('Multiplexor de 2 a 1');
gettext('Mux-2-1');
gettext('Mux-4-1-flip');
gettext('Multiplexor de 4 a 1. Implementado en verilog');
gettext('Mux-4-1');
gettext('Tortuga-2');
gettext('Divisor entre dos');
gettext('Biestable T síncrono, inicializado a 0');
gettext('Biestable T síncrono, inicializado por parametro INI');
gettext('Biestable tipo D con entrada de enable, inicializado al parámetro INI');
gettext('Biestable D con inicialización paramétrica');
gettext('Generar un pulso de reloj al recibir un flanco por la entrada');
gettext('Biestable D inicializado a 0');
gettext('Delay flip-flop');
gettext('Tortuga: Divisor entre 2\n\nImplementado a partir de un\nbiestable T síncrono');
gettext('Hacer que solo responda a los flancos\nde subida de la señal de entrada');
gettext('Emax-ES08A');
gettext('Futaba-3003');
gettext('TowerPro-SG90');
gettext('ServoBit-90');
gettext('ServoBit para microservos EMAX ES08A. Controlador de 1 bit para mover el servo a 2 posiciones. El ángulo entre una posición y otra es de 90 grados');
gettext('ServoBit para microservos EMAX ES08A. Controlador de 1 bit para mover el servo a las 2 posiciones POS0 y POS1');
gettext('**Posición 1**: Posición del servo cuando  \nse introduce un 1\n\nEl valor por defecto es de 135 grados\n');
gettext('**Posición 0**: Posición del servo cuando  \nse introduce un 0\n\nEl valor por defecto es de 45 grados');
gettext('**Entrada**: posición a donde llevar  \nel servo (posición 0 ó 1)');
gettext('**Servobit paramétrico** para los microservos **EMAX-ES08A** o compatibles\n\nLos parámetros **P1** y **P0** son las posiciones asociadas a un valor de la entrada de 1 ó 0  \nEstán expresados en **micro-segundos** (usec). Este tiempo es el ancho del pulso\n\nSus **valores** deben estar comprendidos en este rango: \n\n* Extremo derecho: **580 usec**  \n* Extremo izquierdo **2550 usec**\n');
gettext('ServoBit');
gettext('Servobit-90');
gettext('ServoBit para Futaba 3003. Controlador de 1 bit para mover un servo a 2 posiciones. El ángulo entre una posición y otra es de 90 grados');
gettext('ServoBit paramétrico para Futaba 3003. Controlador de 1 bit para mover el servo a las 2 posiciones P0 y P1');
gettext('**Servobit** para Servos Futaba 3003 o comaptibles\nLas dos posiciones están distanciadas **90 grados**  \n\n* **Posicion 0**: 45 grados  \n* **Posicion 1**: 135 grados  ');
gettext('**Servobit paramétrico** para los microservos **Futaba 3003** o compatibles\n\nLos parámetros **P1** y **P0** son las posiciones asociadas a un valor de la entrada de 1 ó 0  \nEstán expresados en **micro-segundos** (usec). Este tiempo es el ancho del pulso\n\nSus **valores** deben estar comprendidos en este rango: \n\n* Extremo derecho: **380 usec**  \n* Extremo izquierdo **2410 usec**\n');
gettext('Servobit');
gettext('Servobit-90');
gettext('ServoBit para micrservo TowerPro-SG90. Controlador de 1 bit para mover un servo a 2 posiciones. El ángulo entre una posición y otra es de 90 grados');
gettext('**Servobit paramétrico** para los microservos **TowerPro SG-90** o compatibles\n\nLos parámetros **P1** y **P0** son las posiciones asociadas a un valor de la entrada de 1 ó 0  \nEstán expresados en **micro-segundos** (usec). Este tiempo es el ancho del pulso\n\nSus **valores** deben estar comprendidos en este rango: \n\n* Extremo derecho: **500 usec**  \n* Extremo izquierdo **2350 usec**\n');
gettext('Servobit');
gettext('0-Soluciones-Tutorial-17');
gettext('1-Ejemplos');
gettext('2-Ejercicios');
gettext('Sol-17-1');
gettext('Valor constante para bus de 8 bits');
gettext('**Solución ejercicio 17.1:**\n\nBarrera automática y manual  \nEs una barrera automática que se levantará automáticamente cuando detecte la \npresencia de un coche, y se bajará cuando no lo haya. Además, tiene un modo  \nmanual para poder subirla mediante un interruptor. La barrera sólo baja si  \nno hay coche detectado y no está activada manualmente');
gettext('Posición 0');
gettext('Posición 1');
gettext('Sol-17-2');
gettext('Clave 101 detectada');
gettext('Clave 010 detectada');
gettext('LEDs testigo');
gettext('**Solución ejercicio 17.2:** Caja fuerte con dos claves de apertura\n\nDiseñar un circuito digital para que se abra una **caja fuerte** cuando se   \nintroduce el código **101** ó el **010** en tres interruptores externos. Al  \nabrirse se moverá un servo a una posición, y cuando está cerrada se moverá a  \nla contraria');
gettext('Sol-17-3');
gettext('**Solución ejercicio 17.3:** Franky con disparo automático y manual\n\nDiseñar un circuito digital para que franky funcione en modo \"defensa\". Estará  \nmirando de lado a lado con un periodo de 4 segundos (2 segundos en cada lado).\nEn uno de los lados disparará automáticamente una ráfaga por sus ojos, que   \nparpadearán a una frecuencia de 10Hz. Además, durante el disparo, sonarán pitidos  \nde 1Khz, con una cadenacia de 10Hz (pi-pi-pi-pi...). Adicionalmente se colocará  \nun pulsador para disparo manual. Al pulsarlo realizará los mismos disparos \ncomentados anteriormente (señal luminosa en los ojos y pitidos de 1Khz con \ncadencia de 10Hz)');
gettext('Movimiento del cuello de franky  \n4 segundos en cada lado');
gettext('Generación de pitidos de 1Khz con  \ncadencia de 10Hz');
gettext('Activación de disparo luminoso');
gettext('Activación de disparo acústico');
gettext('El disparo se activa bien con el \npulsador o bien cada 4 segundos');
gettext('1-corazon-hz-1');
gettext('**Ejemplo 1**: Parpadeo de un LED a 1Hz\n\nParpadeo de un led a la frecuencia de 1HZ\nSe usa un corazón genérico. Como no se ha  \nespecificado ningún valor para el parámetro  \nde la frecuencia, toma 1Hz por defecto  ');
gettext('2-corazon-hz-4');
gettext('**Ejemplo 2**: Parpadeo del LED0 a 4Hz  \nusando un corazón genérico  \n\nSólo hay que cambiar el **parámetro HZ** por  \notro valor para que parpadee a esa frecuencia  \nLas unidades son **HZ** y tiene que ser un valor  \n**entero** (sin decimales)\n');
gettext('3-corazon-seg');
gettext('**Ejemplo 3: corazón paramétrico en segundos**\n\nEl parámetro es el **periodo** (en segundo)\n\nEn este ejemplo el periodo es de **10 segundos**  \nInicialmente el LED está **apagado** durante **5 segundos**  \ny luego se **enciende** durante otros **5**  \nSe repite indefinidamente');
gettext('4-servobit-1');
gettext('**Ejemplo 4: Cambiando posiciones al servobit**\n\nCambiando los valores de los parámetros P1 y P0 se establecen  \nlas dos posiciones del servo, correspondientes a 1 y 0\n');
gettext('5-pinza-mecanica');
gettext('**Ejemplo 5**: Apertura y cierre de una pinza mecánica  \ncon un pulsador');
gettext('6-motorbit-1');
gettext('Ejercicio-18-1');
gettext('**Ejercicio 18.1**: (5 Bitpoints). **Notas DO-RE-MI-FA**\n\nDiseñar un circuito digital que toque **4 notas** diferentes: Do-re-mi-fa  \nLas notas se seleccionan mediante **2 interruptores externos**. Al apretarse  \nun **pulsador externo** sonará la nota seleccionada\n\nLas **frecuencias** de las notas a tocar son:\n\n* **Do**:  131 Hz\n* **Re**:  147 Hz\n* **Mi**:  165 Hz\n* **Fa**:  175 Hz\n\n**Consejo**: Utilizar un multiplexor 4:1');
gettext('**Entregar**:\n\n  -1 Pantallazo del circuito (2 Bitpoints)\n  \n  -1 Vídeo del funcionamiento (2 Bitpoints)\n  \n  Enviarlos por redes sociales (Twitter, G+) con mención \n  a @Obijuan_cube. El vídeo puede estar en youtube o directamente en el tuit/post\n  ');
gettext('**GITHUB**:\n\n  1 Bitpoint adicional si lo entregáis por Github (sólo pantallazo, el vídeo\n  no hace falta, para que no ocupe tanto espacio)');
gettext('**Vídeo en Youtube**:\n\nURL:  https://www.youtube.com/watch?v=vpLthAkkWCM');
gettext('[![](http://img.youtube.com/vi/vpLthAkkWCM/0.jpg)](https://www.youtube.com/watch?v=vpLthAkkWCM)\n');
gettext('Ejercicio-18-2');
gettext('**Ejercicio 18.2**: (5 Bitpoints). Movimiento de un Servo con ángulos pequeño y grande\n\nDiseñar un circuito digital para mover el servo a dos posiciones diferentes,  \ncontroladas por un **pulsador**. Mediante un **interruptor externo** seleccionaremos  \nentre dos modos: **ángulo pequeño** y **ángulo grande**.  En el modo ángulo pequeño,  \nel servo se mueve entre dos posiciones, separadas un ángulo pequeño, menor de 90.  \nEn el modo ángulo grande, el servo se moverá entre sus **dos extremos**');
gettext('**Vídeo en Youtube**:\n\nURL:  https://www.youtube.com/watch?v=uMLxEvIMIeM');
gettext('[![](http://img.youtube.com/vi/uMLxEvIMIeM/0.jpg)](https://www.youtube.com/watch?v=uMLxEvIMIeM)\n');
gettext('Ejercicio-18-3');
gettext('**Solución ejercicio 18.3:** Motor con dos velocidades en cada sentido\n\nDiseñar un circuito digital para mover un servo de **rotación continua** con **dos  \nvelocidades** diferentes en cada entido. Se utilizarán **dos interruptores externos**  \nuno para establecer la **velocidad**: rápida/lenta, y otro para fijar el  \n**sentido de giro**: horario/antohorario. Usaremos un **pulsador externo** para que  \nel motor se mueva al pulsarlo, o esté parado al soltarlo\n');
gettext('**Vídeo en Youtube**:\n\nURL:  https://www.youtube.com/watch?v=M9iuAXRoF8g');
gettext('[![](http://img.youtube.com/vi/M9iuAXRoF8g/0.jpg)](https://www.youtube.com/watch?v=M9iuAXRoF8g)\n');