import POINT from "../definition/point"
import TYPE from "../definition/type"
import ASSETS from "../definition/assets"

import stateManager from "../module/core/stateManager"
import Particle from "../module/core/particle/Particle"
import particlePoolManager from "../module/core/particle/particlePoolManager"

import scene from "../module/core/scene"
import camera from "../module/core/camera"
import renderer from "../module/core/renderer"
import orbitControls from "../module/feature/orbitControls"

import ParticleFactory from "../module/core/particle/ParticleFactory"
import LaunchingParticle from "../module/core/particle/LaunchingParticle"
import utils from "../module/utils"

function registerAnimationHandler() {
    animate()
}
let count = 0
function animate() {
    particlesUpdate()
    requestAnimationFrame(animate)
    orbitControls.update()
    renderer.render(scene, camera)
}

function particlesUpdate() {
    if (count > 100 && count < 900) {
        // console.log(POINT.EXPLOSION_OFFSET.BURST, 'BURST')
        
    }
    count++
    particlePoolManager.processEachParticle(async (particle: Particle) => {
        particle.update() 

        // If this.remainingFrames is zero, this.currentAbsolutePoint.y is infinity.
        if (particle.getRemainingFrames() === 1) {
            ParticleFactory.retrieveParticle(particle)

            console.log('switch', JSON.parse(JSON.stringify(POINT.EXPLOSION_OFFSET.BURST)))
            if (particle instanceof LaunchingParticle) {
                switch (particle.getExplosionType()) {
                    case TYPE.EXPLOSION.ROUTINE.BURST:
                        playExplosionSound()
                        ParticleFactory.provideExplosionParticle({...particle.getCurrentAbsolutePoint()}, JSON.parse(JSON.stringify(POINT.EXPLOSION_OFFSET.BURST)), particle.getExplosionType(), particle.getColor()) 
                        break
                    case TYPE.EXPLOSION.ROUTINE.ERUPT:
                        playExplosionSound()
                        ParticleFactory.provideExplosionParticle({...particle.getCurrentAbsolutePoint()}, JSON.parse(JSON.stringify(POINT.EXPLOSION_OFFSET.ERUPT)), particle.getExplosionType(), particle.getColor()) 
                        break
                    case TYPE.EXPLOSION.ROUTINE.BLOOM:
                        playExplosionSound()
                        ParticleFactory.provideExplosionParticle({...particle.getCurrentAbsolutePoint()}, JSON.parse(JSON.stringify(POINT.EXPLOSION_OFFSET.BLOOM)), particle.getExplosionType(), particle.getColor()) 
                        break
                    case TYPE.EXPLOSION.FINALE.HUGE_BURST:
                        playExplosionSound()
                        ParticleFactory.provideExplosionParticle({...particle.getCurrentAbsolutePoint()}, JSON.parse(JSON.stringify(POINT.EXPLOSION_OFFSET.HUGE_BURST)), particle.getExplosionType(), particle.getColor()) 
                        break
                    case TYPE.EXPLOSION.FINALE.CHAIN_BURST:
                        const currentAbsolutePoint = JSON.parse(JSON.stringify(particle.getCurrentAbsolutePoint()))
                        for (const explosionRelativePoint of POINT.EXPLOSION_OFFSET.CHAIN_BURST.ORIGIN) {
                            console.log('explosionRelativePoint: ', explosionRelativePoint)
                            console.log('currentAbsolutePoint: ', currentAbsolutePoint)
                            const _copyedCurrentAbsolutePoint = JSON.parse(JSON.stringify(currentAbsolutePoint))
                            _copyedCurrentAbsolutePoint.x += explosionRelativePoint.x
                            _copyedCurrentAbsolutePoint.y += explosionRelativePoint.y
                            _copyedCurrentAbsolutePoint.z += explosionRelativePoint.z
                            
                            playExplosionSound()
                            ParticleFactory.provideExplosionParticle(_copyedCurrentAbsolutePoint, JSON.parse(JSON.stringify(POINT.EXPLOSION_OFFSET.CHAIN_BURST)), particle.getExplosionType(), particle.getColor()) 

                            await utils.sleep(200)
                        }
                        break
                }
            }
        }
    })
}

function playExplosionSound() {
    if (stateManager.getVolumeState()) { 
        new Audio(ASSETS.SOUNDS.EXPLOSION).play() 
    }
}

export default registerAnimationHandler