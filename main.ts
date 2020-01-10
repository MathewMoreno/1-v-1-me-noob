namespace SpriteKind {
    export const Ammo = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Player_1.destroy()
})
function Player1 () {
    scene.setBackgroundColor(10)
    Player_1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . 1 . . 
b b b b b b b b . . . . . f . . 
f b b b b b b b b b b b b b . . 
f f b b b b b b b b b b b b b . 
f b b b b b b b b b e e e e e . 
b b b b b b b b b e e b b e e . 
. . . . . . b b b e b e e b e . 
. . . . . . . . b e e b b e e . 
. . . . . . . . . . e e e e . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Player_1.setPosition(75, 110)
    controller.moveSprite(Player_1, 100, 100)
}
sprites.onOverlap(SpriteKind.Ammo, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile2.destroy(effects.fire, 500)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let Player_1: Sprite = null
Player1()
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f f f f f f f f f . . . 
. . f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . . f f f f f f f f f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . f f f . . . . . . 
`, Player_1, -100, 0)
    pause(200)
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f 1 1 . . . . . . . . . . . . . 
1 f 1 . . . . . . . . . . . b . 
1 1 f f e e e e e e e e e e b b 
1 1 f f e e e e e e e e e e b b 
1 f 1 . . . . . . . . . . . b . 
f 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
    pause(200)
    projectile2.setPosition(0, Math.randomRange(0, 150))
    projectile.setKind(SpriteKind.Ammo)
    projectile2.setKind(SpriteKind.Enemy)
})
