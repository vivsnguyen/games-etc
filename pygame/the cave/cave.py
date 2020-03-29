import pygame
pygame.init()
window=pygame.display.set_mode((3000,4000))
screenWidth=3000
screenHeight=4000

circlex=400
circley=500
cspeed=20

rectex=400
rectey=500
rspeed=20
running=True
tntpic=pygame.image.load("tnt.png")
tntpic=pygame.transform.scale(tntpic,(120,100
  ))
def tnt(x,y):
 window.blit(tntpic,(x,y))
while running:
  pygame.time.delay(100)
  
  for event in pygame.event.get():
    if event .type == pygame.QUIT:
      running = False
  
  
  keys=pygame.key.get_pressed()
  if keys[pygame.K_LEFT]:
    circlex -=cspeed
  if keys[pygame.K_RIGHT]:
    circlex +=cspeed
    
  if keys[pygame.K_r]:
    rectex -=rspeed
  if keys[pygame.K_c]:
    rectex +=rspeed
  window.fill((74, 59, 38))
  pygame.draw.polygon(window,(138, 45, 45),[(200,100),(100,120),(400,700)])
  pygame.draw.polygon(window,(138, 45, 45),[(500,100),(600,120),(400,700)])
  tnt(50,50)
  pygame.draw.rect(window,(11,0,219),(rectex,rectey,32,32))
  pygame.draw.rect(window,(0,0,0),(100,100,100,500))
  pygame.draw.circle(window,(11,0,219),(circlex,circley),24)
  
  pygame.display.update() 