import TYPE from "../../../definition/type"
import COLOR from "../../../definition/color"
import Particle from "./Particle"
import LaunchingParticle from "./LaunchingParticle"
import ExplosionParticle from "./ExplosionParticle"
import DustParticle from "./DustParticle"
import PType from "../../../type/PType"

const activatePool: Particle[] = []
const launchingParticlePool: LaunchingParticle[] = []
const explosionParticlePool: ExplosionParticle[] = []
const dustParticlePool: DustParticle[] = []

const expectedLaunchingParticleCount = 11
const expectedExplosionParticleCount = 66
const expectedDustParticleCount = 105

const particlePoolManager = {
    // Test to determine how many particles are needed.
    countPool() {
        console.log(
            'launchingParticlePool: ', launchingParticlePool.length, 
            'explosionParticlePool: ', explosionParticlePool.length, 
            'dustParticlePool: ', dustParticlePool.length
        )
    },

    init() {
        for (let i = 0; i < expectedLaunchingParticleCount; i++) {
            const _beginAbsolutePoint = {x: 0, y: 0, z: 0}
            const _endRelativePoint = {x: 0, y: 0, z: 0}
            const _pType: PType = {
                instance: LaunchingParticle.name,
                explosion: TYPE.EXPLOSION.ROUTINE.BURST
            }
            launchingParticlePool.push( LaunchingParticle.create(_beginAbsolutePoint, _endRelativePoint, _pType) )
        }

        for (let i = 0; i < expectedExplosionParticleCount; i++) {
            const _beginAbsolutePoint = {x: 0, y: 0, z: 0}
            const _endRelativePoint = [{x: 0, y: 0, z: 0}]
            const _pType: PType = {
                instance: ExplosionParticle.name,
                explosion: TYPE.EXPLOSION.ROUTINE.BURST
            }
            explosionParticlePool.push( ExplosionParticle.create(_beginAbsolutePoint, _endRelativePoint, _pType) )
        }

        for (let i = 0; i < expectedDustParticleCount; i++) {
            const _currentAbsolutePoint = [{x: 0, y: 0, z: 0}]
            const _pType: PType = {
                instance: DustParticle.name,
                explosion: TYPE.EXPLOSION.ROUTINE.BURST
            }
            dustParticlePool.push( DustParticle.create(_currentAbsolutePoint, _pType) )
        }
    },

    addActivatePool(particle: Particle): void { activatePool.push(particle) },

    shiftLaunchingParticle() { return launchingParticlePool.length > 0 ? launchingParticlePool.shift() : null },
    shiftExplosionParticle() { return explosionParticlePool.length > 0 ? explosionParticlePool.shift() : null },
    shiftDustParticle() { return dustParticlePool.length > 0 ? dustParticlePool.shift() : null },

    moveToWaitingPool(particle: Particle): void {
        const idx = activatePool.indexOf(particle)
        if (idx > -1) activatePool.splice(idx, 1)
        
        if (particle.constructor.name === ExplosionParticle.name) explosionParticlePool.push(particle as ExplosionParticle)
        else if (particle.constructor.name === LaunchingParticle.name) launchingParticlePool.push(particle as LaunchingParticle)
        else if (particle.constructor.name === DustParticle.name) dustParticlePool.push(particle as DustParticle)
    },

    /**
     * Iterate over each particle and execute the provided callback.
     * @param callback - A function to process each particle. The particle is provided automatically.
     */
    processEachParticle(callback: (particle: Particle) => void): void {
        activatePool.forEach(callback)
    },

    isActivatePoolEmpty(): Promise<void> {
        return new Promise((resolve) => {
            const check = () => {
                if (activatePool.length === 0) resolve()
                else setTimeout(check, 500)
            }

            check()
        })
    },
}

export default particlePoolManager
