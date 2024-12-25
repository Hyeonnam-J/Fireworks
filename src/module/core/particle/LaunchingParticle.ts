import COLOR from "../../../definition/color"
import BaseParticle from "./BaseParticle"
import Coordinates from "../../../type/Coordinates"

export default class LaunchingParticle extends BaseParticle {
    private pointStorage: Coordinates[]

    constructor(
        currentAbsolutePoint: Coordinates,
        endRelativePoint: Coordinates,
    ) {
        const color: string = COLOR[ Math.floor(Math.random() * COLOR.length) ]
        const time: number = 5
        super(currentAbsolutePoint, endRelativePoint, color, time)

        this.pointStorage = new Array(this.getTotalFrames()).fill(null).map(() => ({ x: 0, y: 0, z: 0 }))
        const delta_x = this.getEndRelativePoint().x / this.getTotalFrames()
        const delta_z = this.getEndRelativePoint().z / this.getTotalFrames()
        let copyedCurrentAbsolutePoint_x = this.getCurrentAbsolutePoint().x
        let copyedCurrentAbsolutePoint_z = this.getCurrentAbsolutePoint().z
        for (let i = 0; i < this.getTotalFrames(); i++) {
            const easeOutFactor = super.getEaseOutFactor(i)

            this.pointStorage[i].x = copyedCurrentAbsolutePoint_x
            copyedCurrentAbsolutePoint_x += delta_x

            this.pointStorage[i].y = this.getEndRelativePoint().y * easeOutFactor
            
            this.pointStorage[i].z = copyedCurrentAbsolutePoint_z
            copyedCurrentAbsolutePoint_z += delta_z
        }
    }

    update(): void {
        this.getCurrentAbsolutePoint().x = this.pointStorage[this.getElapsedFrames()].x
        this.getCurrentAbsolutePoint().y = this.pointStorage[this.getElapsedFrames()].y
        this.getCurrentAbsolutePoint().z = this.pointStorage[this.getElapsedFrames()].z
        this.position.set(this.getCurrentAbsolutePoint().x, this.getCurrentAbsolutePoint().y, this.getCurrentAbsolutePoint().z)

        super.update()
    }
}