import pygame
pygame.init()

window = pygame.display.set_mode((500,500))
screenWidth = 500
screenHeight = 500

pygame.display.set_caption("Tech With Tim")

x = 50
y = 425
width = 40
height = 60
velocity = 5 #how fast our character moves

isJump = False
jumpCount = 10

running = True

while running:
    pygame.time.delay(100) #milliseconds, 1000 = 1 full second

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    keys = pygame.key.get_pressed()

    if keys[pygame.K_LEFT] and x > velocity:
        x -= velocity
    if keys[pygame.K_RIGHT] and x < screenWidth - width - velocity:
        x += velocity
    if not(isJump):
        if keys[pygame.K_UP] and y > velocity:
            y -= velocity
        if keys[pygame.K_DOWN] and y < screenHeight - height - velocity:
            y += velocity
        if keys[pygame.K_SPACE]:
            isJump = True
    else:
        if jumpCount >= -10:
            neg = 1
            if jumpCount < 0:
                neg = -1
            y -= (jumpCount ** 2) * 0.5 * neg
            jumpCount -= 1
        else:
            isJump = False
            jumpCount = 10

    window.fill((0,0,0))
    pygame.draw.rect(window, (255,0,0), (x,y,width,height))
    pygame.display.update()

pygame.quit()
