/****************************
  Receptor 434Test

  Este sketch comprueba el funcionamiento basico de un receptor ASK
 similar al RXB1. 

  Author: @goyoregalado

  
  Este codigo se deriva del codigo de ejemplo de la libreria radiohead.
  http://www.airspayce.com/mikem/arduino/RadioHead/
  
******************************/

#include <RH_ASK.h>
#include <SPI.h> // Not actualy used but needed to compile

RH_ASK driver;

void setup()
{
    Serial.begin(9600);
    if (!driver.init())
         Serial.println("init failed");
}

void loop()
{
    uint8_t buf[RH_ASK_MAX_MESSAGE_LEN];
    uint8_t buflen = sizeof(buf);

    if (driver.recv(buf, &buflen)) // Non-blocking
    {
	int i;
        buf[buflen] = '\0';
        String output((char *)buf);
        Serial.println(output);
    }
}

char *copyBuffer(uint8_t *buf, uint8_t buflen) {
  char buffer[buflen + 1];
  
  for (int i = 0; i < buflen; i++) {
    buffer[i] = (char) buf[i];
  }
  buffer[buflen] = '\0';
  return buffer;
}
