namespace SpriteKind {
    export const torre = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.torre, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
let pizza: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    ...ffffff..........ccc..
    ...ff11ccff.......c88f..
    ....fffccccfff...c885f..
    ....cc11111111ccc8855f..
    ...c99b1118111811c11fc..
    ..c9991881118118111111c.
    .c1bb11111811ccccccc111f
    c555555555555555555fffff
    f8888888888888888888c...
    .f888888888888888888c...
    ..ff8888888cffc88888c...
    ....fffffffcffffcccc....
    .........f1c1ffff.......
    .........fcc1ffff.......
    ..........ffffff........
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . 2 2 . . . . . . . . . . 
    . . . . 2 2 . . . . . . . . . . 
    . . . . 1 1 . . . . . . . . . . 
    . . . . 2 2 . . . . . . . . . . 
    b b b b b b b b b b . . . . . . 
    b 9 9 b 9 9 b 9 9 b . . . . . . 
    b 9 9 b 9 9 b 9 9 b . . . . . . 
    b f f b f f b f f b . . . . . . 
    b 9 9 b 9 9 b 9 9 b . . . . . . 
    b 9 9 b 9 9 b 9 9 b . . . . . . 
    b f f b f f b f f b . . . . . . 
    b 9 9 b 9 9 b 9 9 b . . . . . . 
    b 9 9 b 9 9 b 9 9 b . . . . . . 
    b f f b f f b f f b . . . . . . 
    b 9 9 b 9 9 b 9 9 b . . . . . . 
    b b b b b b b b b b . . . . . . 
    `, SpriteKind.Player)
