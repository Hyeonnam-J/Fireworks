import * as THREE from 'three'

import COLOR from "../../../definition/color"
import BaseParticle from "./BaseParticle"
import CVector3 from "../../../type/CVector3"

export default class LaunchingParticle extends BaseParticle {
    private pointStorage: CVector3[]
    private endRelativePoint: CVector3

    private constructor(
        beginAbsolutePoint: CVector3,
        endRelativePoint: CVector3,
        explosionType: string
    ) {
        const radiusTop = 0.05
        const radiusBottom = 0
        const height = 0.7
        const color = COLOR.FIREWORKS[ Math.floor(Math.random() * COLOR.FIREWORKS.length) ]
        const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height)
        const material = new THREE.MeshStandardMaterial({ color: color, transparent: true })
        const mesh = new THREE.Mesh(geometry, material)
        const time = 5
        const dustCreationInterval = 10
        super(beginAbsolutePoint, explosionType, color, geometry, material, mesh, time, dustCreationInterval)

        this.endRelativePoint = endRelativePoint
        
        this.pointStorage = new Array(this.getTotalFrames()).fill(null).map(() => ({ x: 0, y: 0, z: 0 }))
        const delta_x = this.endRelativePoint.x / this.getTotalFrames()
        const delta_z = this.endRelativePoint.z / this.getTotalFrames()
        const currentPoint = {...this.getBeginAbsolutePoint()}
        for (let i = 0; i < this.getTotalFrames(); i++) {
            const easeOutFactor = super.getEaseOutFactor(i)

            this.pointStorage[i].x = currentPoint.x
            currentPoint.x += delta_x

            this.pointStorage[i].y = this.endRelativePoint.y * easeOutFactor
            
            this.pointStorage[i].z = currentPoint.z
            currentPoint.z += delta_z
        }
    }

    public static create(
        beginAbsolutePoint: CVector3,
        endRelativePoint: CVector3,
        explosionType: string
    ): LaunchingParticle {
        return new LaunchingParticle(beginAbsolutePoint, endRelativePoint, explosionType)
    }

    public recycle(
        beginAbsolutePoint: CVector3,
        endRelativePoint: CVector3,
        explosionType: string
    ): void {
        super.setBeginAbsolutePoint(beginAbsolutePoint)
        this.endRelativePoint = endRelativePoint
        super.setExplosionType(explosionType)
        const color: string = COLOR.FIREWORKS[ Math.floor(Math.random() * COLOR.FIREWORKS.length) ]
        super.setColor(color)
        super.setRemainingFrames(this.getTotalFrames())
        super.setElapsedFrames(0)
        
        this.pointStorage = new Array(this.getTotalFrames()).fill(null).map(() => ({ x: 0, y: 0, z: 0 }))
        const delta_x = this.endRelativePoint.x / this.getTotalFrames()
        const delta_z = this.endRelativePoint.z / this.getTotalFrames()
        const currentPoint = {...this.getBeginAbsolutePoint()}
        for (let i = 0; i < this.getTotalFrames(); i++) {
            const easeOutFactor = super.getEaseOutFactor(i)

            this.pointStorage[i].x = currentPoint.x
            currentPoint.x += delta_x

            this.pointStorage[i].y = this.endRelativePoint.y * easeOutFactor
            
            this.pointStorage[i].z = currentPoint.z
            currentPoint.z += delta_z
        }
    }

    public update(): void {
        const elapsedFrames = this.getElapsedFrames()
        const _x = this.pointStorage[elapsedFrames].x
        const _y = this.pointStorage[elapsedFrames].y
        const _z = this.pointStorage[elapsedFrames].z
        this.getMesh().position.set(_x, _y, _z)

        // super.rotateTowardsEndPoint(this.currentAbsolutePoint, this.endRelativePoint)
        super.update()
    }
}