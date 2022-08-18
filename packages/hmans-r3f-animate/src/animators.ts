import { RootState } from "@react-three/fiber"
import { Object3D } from "three"

export const rotate = (speedX: number, speedY: number, speedZ: number) => (
  o: Object3D,
  dt: number
) => {
  o.rotation.x += dt * speedX
  o.rotation.y += dt * speedY
  o.rotation.z += dt * speedZ
}

export const float = (
  frequency: [number, number, number] = [1, 1, 1],
  amplitude: [number, number, number] = [1, 1, 1]
) => (o: Object3D, dt: number, { clock }: RootState) => {
  o.position.x = Math.sin(clock.getElapsedTime() * frequency[0]) * amplitude[0]
  o.position.y = Math.sin(clock.getElapsedTime() * frequency[1]) * amplitude[1]
  o.position.z = Math.cos(clock.getElapsedTime() * frequency[2]) * amplitude[2]
}
